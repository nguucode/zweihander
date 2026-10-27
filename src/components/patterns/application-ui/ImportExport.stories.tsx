import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, waitFor, within } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { ToastProvider, useToast } from '@/components/notifications/Toast'
import { ExportDialog, ImportDialog, parseCsv, toCsv, type ExportDialogProps, type ImportDialogProps, type ImportField, type ImportRow } from './ImportExport'

const body = () => within(document.body)

const STATUSES = ['Active', 'On hold', 'Inactive']
const fields: ImportField[] = [
  { key: 'name', label: 'Name', isRequired: true, aliases: ['Project', 'Project name'] },
  { key: 'status', label: 'Status' },
  { key: 'pm', label: 'PM', aliases: ['Project manager'] },
  { key: 'estimation', label: 'Estimation', aliases: ['Budget'] },
]
/** What an app checks before it imports: a known status, a number for money. */
const validate = (row: ImportRow) => {
  const errors: Record<string, string> = {}
  if (row.status && !STATUSES.includes(row.status)) errors.status = `“${row.status}” is not a status.`
  if (row.estimation && !/^\d+(\.\d+)?$/.test(row.estimation.replace(/,/g, ''))) errors.estimation = 'Estimation is not a number.'
  return errors
}

const csv = (rows: string[][]) => new File([toCsv(rows)], 'projects.csv', { type: 'text/csv' })
const goodAndBad = csv([
  ['Project', 'Status', 'Project manager', 'Budget', 'Notes'],
  ['Harbor Lights', 'Active', 'Noor Haddad', '120000', 'Phase two'],
  ['Foxglove Pricing', 'Paused', 'Mei Takahara', '45,000', ''],
  ['', 'Active', 'Ines Okafor', '8000', 'No name'],
  ['Tidewater Export', 'On hold', '', 'about 30k', ''],
  ['Juniper Rollout', 'Inactive', 'Rafael Duarte', '64000', ''],
])

/** What the native picker does: put the file on the input, then fire change. */
const pick = (file: File) => {
  const input = document.querySelector<HTMLInputElement>('input[type=file]')!
  const t = new DataTransfer()
  t.items.add(file)
  input.files = t.files
  fireEvent.change(input)
}

const onImport = fn()
const onExport = fn()

const meta = {
  title: 'Patterns/Application UI/Import Export',
  tags: ['experimental'],
  component: ImportDialog,
  parameters: { layout: 'padded' },
  args: {
    fields,
    validate,
    onImport: onImport as ImportDialogProps['onImport'],
    noun: ['project', 'projects'],
    title: 'Import projects',
    templateHref: `data:text/csv;charset=utf-8,${encodeURIComponent('Name,Status,PM,Estimation\r\n')}`,
  },
  argTypes: {
    trigger: { description: 'The button that opens it. Omit when `open` is controlled from elsewhere.', control: false },
    fields: {
      description:
        'The fields a column can go into, in the order they are offered: `key`, `label`, `isRequired`, and `aliases`, other headings that map to it on their own. A heading that matches a key, label or alias is mapped for you.',
      control: false,
    },
    onImport: {
      description:
        'Imports the rows without problems, each by field key and trimmed. Return a promise to keep Import busy; a thrown error stays on the review step with its message.',
      control: false,
    },
    validate: {
      description: 'Problems with one row, by field key; each shows in the Problems column and skips the row. Required fields left empty are flagged without it.',
      control: false,
    },
    readFile: {
      description: 'Reads the chosen file into `{ columns, rows }`. Defaults to reading it as CSV text (`parseCsv`); pass your own for Excel, with your spreadsheet library.',
      control: false,
    },
    accept: { description: 'File types, as the native attribute. Widen it with `readFile`.', control: 'text', table: { defaultValue: { summary: '".csv"' } } },
    maxSize: { description: 'The largest file, in bytes. A larger one is refused by the File Uploader.', control: 'number' },
    helperText: { description: 'Inside the drop zone, under its button.', control: 'text', table: { defaultValue: { summary: '"A CSV file with a heading row."' } } },
    templateHref: { description: 'A blank file with the right headings, linked from the upload step.', control: 'text' },
    noun: { description: 'What a row is, singular and plural: "Import 4 projects", "4 projects imported".', control: false, table: { defaultValue: { summary: '["row", "rows"]' } } },
    title: { description: "The dialog's title.", control: 'text', table: { defaultValue: { summary: '"Import"' } } },
    open: { description: 'Controlled open state. Every opening starts at the upload step.', control: false },
    defaultOpen: { description: 'Open on first render.', table: { defaultValue: { summary: 'false' } } },
    onOpenChange: { description: 'Called when the dialog opens or closes.', control: false },
    container: { description: 'Where the dialog renders instead of `<body>`.', control: false },
  },
} satisfies Meta<typeof ImportDialog>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Upload, map, review, import. The headings match the fields, so the
 * columns are mapped already; three rows have problems and are skipped.
 */
export const Default: Story = {
  render: (args) => <ImportDialog {...args} trigger={<Button variant="secondary" appearance="outlined">Import</Button>} />,
  play: async ({ canvas }) => {
    onImport.mockClear()
    await userEvent.click(canvas.getByRole('button', { name: 'Import' }))
    const dialog = await body().findByRole('dialog', { name: 'Import projects' })
    const d = within(dialog)
    // Step 1: a file, then Next.
    await waitFor(() => expect(d.getByRole('navigation', { name: 'Import steps' })).toBeVisible())
    await expect(d.getByRole('link', { name: 'Download a template' })).toHaveAttribute('download')
    const next = d.getByRole('button', { name: 'Next' })
    await expect(next).toBeDisabled()
    pick(goodAndBad)
    await waitFor(() => expect(next).toBeEnabled())
    await userEvent.click(next)
    // Step 2: each heading went to its field; Notes matched none.
    await waitFor(() => expect(d.getByRole('table', { name: 'Columns to map' })).toBeVisible())
    await expect(d.getByRole('combobox', { name: 'Field for Project' })).toHaveTextContent('Name (required)')
    await expect(d.getByRole('combobox', { name: 'Field for Budget' })).toHaveTextContent('Estimation')
    await expect(d.getByRole('combobox', { name: 'Field for Notes' })).toHaveTextContent('Do not import')
    await userEvent.click(d.getByRole('button', { name: 'Next' }))
    // Step 3: every row, its problems beside it.
    const table = await d.findByRole('table', { name: 'Rows to import' })
    await expect(within(table).getAllByRole('row')).toHaveLength(6)
    await expect(d.getByText(/3 projects have problems/)).toBeVisible()
    const foxglove = within(table).getByRole('rowheader', { name: '3' }).closest('tr')!
    await expect(foxglove).toHaveTextContent('“Paused” is not a status.')
    await expect(within(table).getByRole('rowheader', { name: '4' }).closest('tr')).toHaveTextContent('Name is empty.')
    // Only the rows with problems.
    await userEvent.click(d.getByRole('switch', { name: 'Only rows with problems' }))
    await waitFor(() => expect(within(table).getAllByRole('row')).toHaveLength(4))
    // Import the two good ones.
    await userEvent.click(d.getByRole('button', { name: 'Import 2 projects' }))
    await expect(onImport).toHaveBeenCalledWith([
      { name: 'Harbor Lights', status: 'Active', pm: 'Noor Haddad', estimation: '120000' },
      { name: 'Juniper Rollout', status: 'Inactive', pm: 'Rafael Duarte', estimation: '64000' },
    ])
    await expect(await d.findByRole('heading', { name: '2 projects imported' })).toBeVisible()
    await expect(d.getByText('3 projects skipped for problems.')).toBeVisible()
    await expect(d.getByRole('button', { name: 'Download skipped rows' })).toBeVisible()
    await expect(d.queryByRole('navigation', { name: 'Import steps' })).toBeNull()
    await userEvent.click(d.getByRole('button', { name: 'Done' }))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    // Opening again starts over.
    await userEvent.click(canvas.getByRole('button', { name: 'Import' }))
    const again = await body().findByRole('dialog', { name: 'Import projects' })
    await expect(within(again).getByRole('button', { name: 'Next' })).toBeDisabled()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
  },
}

/** No heading matches a required field: the step says which, and Next waits until a column is chosen for it. */
export const MapColumns: Story = {
  args: { defaultOpen: true },
  play: async () => {
    const d = within(await body().findByRole('dialog', { name: 'Import projects' }))
    pick(csv([['Title', 'State'], ['Harbor Lights', 'Active']]))
    await userEvent.click(d.getByRole('button', { name: 'Next' }))
    await expect(await d.findByText('Choose a column for Name.')).toBeVisible()
    const next = d.getByRole('button', { name: 'Next' })
    await expect(next).toBeDisabled()
    // Each pick waits for its list to finish closing. A closing list is still
    // mounted: the next findByRole('option') can return its option, which no
    // longer takes the pointer, and axe reads a list that the combobox no
    // longer controls as a nameless listbox. WebKit's slower transitions
    // showed both.
    const choose = async (combobox: string, option: string) => {
      await userEvent.click(d.getByRole('combobox', { name: combobox }))
      await userEvent.click(await body().findByRole('option', { name: option }))
      await waitFor(() => expect(body().queryByRole('listbox')).toBeNull())
    }
    await choose('Field for Title', 'Name (required)')
    await waitFor(() => expect(next).toBeEnabled())
    // A field takes one column: choosing Name for State frees Title.
    await choose('Field for State', 'Name (required)')
    await waitFor(() => expect(d.getByRole('combobox', { name: 'Field for Title' })).toHaveTextContent('Do not import'))
    await expect(d.getByRole('combobox', { name: 'Field for State' })).toHaveTextContent('Name (required)')
  },
}

/** A file that cannot be read, and an import the server refuses: each says so in place, and nothing is lost. */
export const Errors: Story = {
  args: {
    defaultOpen: true,
    onImport: async () => {
      throw new Error('The server is busy. Nothing was imported; try again in a minute.')
    },
  },
  play: async () => {
    const d = within(await body().findByRole('dialog', { name: 'Import projects' }))
    pick(csv([['Project']]))
    await userEvent.click(d.getByRole('button', { name: 'Next' }))
    await expect(await d.findByRole('alert')).toHaveTextContent('projects.csv has no rows under its heading row.')
    pick(csv([['Project'], ['Harbor Lights']]))
    await userEvent.click(d.getByRole('button', { name: 'Next' }))
    await d.findByRole('table', { name: 'Columns to map' })
    await userEvent.click(d.getByRole('button', { name: 'Next' }))
    await expect(await d.findByText('The project is ready to import.')).toBeVisible()
    await userEvent.click(d.getByRole('button', { name: 'Import 1 project' }))
    await expect(await d.findByRole('alert')).toHaveTextContent('The server is busy.')
    await expect(d.getByRole('table', { name: 'Rows to import' })).toBeVisible()
  },
}

/** Harsh content: a long file with long unbroken values. The review scrolls inside the dialog and stops at 100 rows. */
export const LongFile: Story = {
  args: { defaultOpen: true },
  play: async () => {
    const dialog = await body().findByRole('dialog', { name: 'Import projects' })
    const d = within(dialog)
    pick(
      csv([
        ['Project', 'Project manager'],
        ...Array.from({ length: 140 }, (_, i) => [`Quarterly_reconciliation_for_the_northern_region_${i + 1}`, 'Maximiliana Wolfeschlegelsteinhausenbergerdorff']),
      ]),
    )
    await userEvent.click(d.getByRole('button', { name: 'Next' }))
    await d.findByRole('table', { name: 'Columns to map' })
    await userEvent.click(d.getByRole('button', { name: 'Next' }))
    const preview = await waitFor(() => dialog.querySelector<HTMLElement>('[data-testid="import-preview"]')!)
    await expect(d.getByText('Showing the first 100 of 140 projects.')).toBeVisible()
    await expect(within(preview).getAllByRole('row')).toHaveLength(101)
    await expect(preview.scrollHeight).toBeGreaterThan(preview.clientHeight)
    // The dialog itself never scrolls sideways.
    await expect(dialog.scrollWidth).toBeLessThanOrEqual(dialog.clientWidth)
    await expect(d.getByRole('button', { name: 'Import 140 projects' })).toBeVisible()
  },
}

const exportArgs: ExportDialogProps = {
  scopes: [
    { value: 'all', label: 'All projects (24)' },
    { value: 'view', label: 'Current view (8)', helperText: 'The filters and search applied now.' },
    { value: 'selected', label: 'Selected projects (0)', disabled: true },
  ],
  defaultScope: 'view',
  formats: [
    { value: 'csv', label: 'CSV' },
    { value: 'xlsx', label: 'Excel (.xlsx)' },
  ],
  columns: [
    { key: 'name', header: 'Project name', isRowHeader: true },
    { key: 'pm', header: 'PM' },
    { key: 'status', header: 'Status' },
    { key: 'estimation', header: 'Estimation' },
  ],
  defaultColumnKeys: ['name', 'status', 'estimation'],
  onExport,
}

/** Says when the file is ready, as an app would after a long export: a toast with the download. */
function ExportWithToast(props: Partial<ExportDialogProps>) {
  const toast = useToast()
  return (
    <ExportDialog
      {...exportArgs}
      trigger={<Button variant="secondary" appearance="outlined">Export</Button>}
      {...props}
      onExport={(request) => {
        onExport(request)
        toast.add({ title: 'Your export is ready', description: `projects.${request.format}`, variant: 'success', action: { label: 'Download', onClick: () => {} } })
      }}
    />
  )
}

/**
 * Which rows, which format, which columns. Export closes the dialog; a
 * toast says when the file is ready.
 */
export const Export: Story = {
  render: (args) => (
    <ToastProvider>
      <ExportWithToast defaultOpen={args.defaultOpen} />
    </ToastProvider>
  ),
  play: async ({ canvas }) => {
    onExport.mockClear()
    await userEvent.click(canvas.getByRole('button', { name: 'Export' }))
    const dialog = await body().findByRole('dialog', { name: 'Export' })
    const d = within(dialog)
    await expect(d.getByRole('radio', { name: /Current view/ })).toBeChecked()
    await expect(d.getByRole('radio', { name: /Selected projects/ })).toHaveAttribute('aria-disabled', 'true')
    await waitFor(() => expect(d.getByText('3 of 4 columns')).toBeVisible())
    await userEvent.click(d.getByRole('radio', { name: 'Excel (.xlsx)' }))
    await userEvent.click(d.getByRole('button', { name: 'Columns' }))
    await userEvent.click(await body().findByRole('checkbox', { name: 'PM' }))
    await waitFor(() => expect(d.getByText('4 of 4 columns')).toBeVisible())
    await userEvent.keyboard('{Escape}')
    await userEvent.click(d.getByRole('button', { name: 'Export' }))
    await expect(onExport).toHaveBeenCalledWith({ format: 'xlsx', scope: 'view', columns: ['name', 'pm', 'status', 'estimation'] })
    await waitFor(() => expect(body().queryByRole('dialog', { name: 'Export' })).toBeNull())
    await expect(await body().findByText('Your export is ready', {}, { timeout: 3000 })).toBeInTheDocument()
  },
}

/** CSV in and out: quotes, commas and line breaks survive a round trip, and a cell that would run as a formula is defused. */
export const Csv: Story = {
  tags: ['!dev', '!autodocs'],
  render: () => <p>parseCsv and toCsv</p>,
  play: async () => {
    const rows = [
      ['Name', 'Note'],
      ['Harbor, "Lights"', 'two\r\nlines'],
      ['-12.5', '=HYPERLINK("x")'],
    ]
    await expect(parseCsv(toCsv(rows))).toEqual([rows[0], rows[1], ['-12.5', `'=HYPERLINK("x")`]])
    // A blank line stays, so the rows keep their numbers; the closing line break adds no row.
    await expect(parseCsv('\uFEFFa,b\n\n1,2\n')).toEqual([['a', 'b'], [''], ['1', '2']])
    await expect(parseCsv('a,"b\nc"\r\n')).toEqual([['a', 'b\nc']])
  },
}

/** Dark mode, the export open, so the accessibility check covers both themes. */
export const Dark: Story = {
  ...Export,
  args: { defaultOpen: true },
  play: undefined,
  globals: { theme: 'dark' },
}
