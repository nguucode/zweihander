import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Tag } from '../atomic-elements/Tag'
import { Button } from '../buttons/Button'
import { EmptyState } from '../states/EmptyState'
import { Table, type TableColumn } from './Table'

interface Project {
  id: string
  name: string
  owner: string
  status: 'Active' | 'Paused' | 'Archived'
  files: number
  updated: Date
}

const projects: Project[] = [
  { id: 'p1', name: 'Atlas', owner: 'Sam Rivera', status: 'Active', files: 214, updated: new Date('2026-09-20') },
  { id: 'p2', name: 'Billing revamp', owner: 'Mia Chen', status: 'Paused', files: 38, updated: new Date('2026-08-02') },
  { id: 'p3', name: 'Onboarding', owner: 'Leo Park', status: 'Active', files: 1203, updated: new Date('2026-09-25') },
  { id: 'p4', name: 'Design tokens', owner: 'Ava Stone', status: 'Archived', files: 9, updated: new Date('2025-12-11') },
]

const date = new Intl.DateTimeFormat('en', { dateStyle: 'medium' })
const tone = { Active: 'success', Paused: 'warning', Archived: 'info' } as const

const columns: TableColumn<Project>[] = [
  { key: 'name', header: 'Project', sortable: true, isRowHeader: true },
  { key: 'owner', header: 'Owner', sortable: true },
  { key: 'status', header: 'Status', cell: (p) => <Tag size="sm" variant={tone[p.status]} text={p.status} /> },
  { key: 'files', header: 'Files', sortable: true, align: 'end', cell: (p) => p.files.toLocaleString('en') },
  { key: 'updated', header: 'Updated', sortable: true, align: 'end', cell: (p) => date.format(p.updated) },
]

const meta = {
  title: 'Components/Data Display/Table',
  tags: ['beta'],
  component: Table<Project>,
  args: {
    columns,
    rows: projects,
    getRowId: (p: Project) => p.id,
    caption: 'Projects',
    onSortChange: fn(),
    onSelectionChange: fn(),
    onExpandedChange: fn(),
  },
  // Listed by hand: Table is generic over the row type, and react-docgen
  // reads no types from a generic. These descriptions are the docs' API
  // table and the Playground's props panel.
  argTypes: {
    columns: {
      description:
        'The columns, in order: `{ key, header, cell?, sortable?, sortValue?, align?, width?, isRowHeader? }`. See TableColumn below the table.',
      control: false,
      table: { type: { summary: 'TableColumn<Row>[]' } },
    },
    rows: {
      description: 'The records, one per row. Pass one page at a time when paging.',
      control: false,
      table: { type: { summary: 'Row[]' } },
    },
    caption: {
      description: 'Names the table for assistive tech. Visually hidden unless `showCaption`.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    showCaption: {
      description: 'Shows the caption above the table.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    getRowId: {
      description: "A stable id per row. Needed for selection and expansion that survive sorting and paging; defaults to the row's index in `rows`.",
      control: false,
      table: { type: { summary: '(row: Row, index: number) => string' }, defaultValue: { summary: 'the index' } },
    },
    sort: {
      description: 'Controlled sort. When set, the table shows the rows as given: sort them yourself, e.g. on the server.',
      control: false,
      table: { type: { summary: "{ key: string; direction: 'ascending' | 'descending' } | null" } },
    },
    defaultSort: {
      description: 'The starting sort when uncontrolled. The table sorts its own copy of the rows.',
      control: false,
      table: { type: { summary: "{ key: string; direction: 'ascending' | 'descending' } | null" }, defaultValue: { summary: 'null' } },
    },
    onSortChange: {
      description: 'Called with the new sort, or `null` when a third click turns it off.',
      control: false,
      table: { type: { summary: '(sort: TableSort | null) => void' } },
    },
    isSelectable: {
      description: 'Adds a checkbox column, with a header checkbox that selects every row shown.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    selectedIds: {
      description: 'Controlled selection: ids from `getRowId`.',
      control: false,
      table: { type: { summary: 'string[]' } },
    },
    defaultSelectedIds: {
      description: 'The starting selection when uncontrolled.',
      control: false,
      table: { type: { summary: 'string[]' }, defaultValue: { summary: '[]' } },
    },
    onSelectionChange: {
      description: "Called with every selected id. Ids selected on other pages are kept when the header checkbox changes this page's rows.",
      control: false,
      table: { type: { summary: '(ids: string[]) => void' } },
    },
    expandedContent: {
      description:
        'Content shown under a row when it is open, across the full width. Adds an expand button to each row that returns content; a row that returns `null`, `undefined` or `false` gets none. Runs for every row on each render, so keep it cheap.',
      control: false,
      table: { type: { summary: '(row: Row) => ReactNode' } },
    },
    expandedIds: {
      description: 'Controlled expansion: ids from `getRowId`, so sorting keeps the right rows open.',
      control: false,
      table: { type: { summary: 'string[]' } },
    },
    defaultExpandedIds: {
      description: 'The rows open at first when uncontrolled.',
      control: false,
      table: { type: { summary: 'string[]' }, defaultValue: { summary: '[]' } },
    },
    onExpandedChange: {
      description: 'Called with every open id when an expand button is pressed.',
      control: false,
      table: { type: { summary: '(ids: string[]) => void' } },
    },
    density: {
      description: 'Row height: 40px (`sm`) or 48px (`md`).',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    hasStickyHeader: {
      description: 'Keeps the header row in view while the table scrolls inside its container, when something limits the container\'s height.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    emptyState: {
      description: 'Shown in place of the rows when there are none, e.g. an Empty State.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      description: 'Added to the scroll container around the table.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Table<Project>>

export default meta
type Story = StoryObj<typeof meta>

const names = (canvas: ReturnType<typeof within>) => canvas.getAllByRole('rowheader').map((c: HTMLElement) => c.textContent)

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const table = canvas.getByRole('table', { name: 'Projects' })
    await expect(within(table).getAllByRole('row')).toHaveLength(5)
    await expect(names(canvas)).toEqual(['Atlas', 'Billing revamp', 'Onboarding', 'Design tokens'])
    // Sort: ascending, descending, then back to unsorted. aria-sort follows.
    const files = canvas.getByRole('columnheader', { name: /Files/ })
    await expect(files).toHaveAttribute('aria-sort', 'none')
    await userEvent.click(within(files).getByRole('button'))
    await expect(files).toHaveAttribute('aria-sort', 'ascending')
    await expect(args.onSortChange).toHaveBeenLastCalledWith({ key: 'files', direction: 'ascending' })
    await expect(names(canvas)).toEqual(['Design tokens', 'Billing revamp', 'Atlas', 'Onboarding'])
    await userEvent.click(within(files).getByRole('button'))
    await expect(files).toHaveAttribute('aria-sort', 'descending')
    await expect(names(canvas)).toEqual(['Onboarding', 'Atlas', 'Billing revamp', 'Design tokens'])
    await userEvent.click(within(files).getByRole('button'))
    await expect(files).toHaveAttribute('aria-sort', 'none')
    await expect(names(canvas)).toEqual(['Atlas', 'Billing revamp', 'Onboarding', 'Design tokens'])
    // Dates sort as dates, text by locale with numbers in order.
    await userEvent.click(within(canvas.getByRole('columnheader', { name: /Updated/ })).getByRole('button'))
    await expect(names(canvas)[0]).toBe('Design tokens')
  },
}

export const Selectable: Story = {
  args: { isSelectable: true, defaultSelectedIds: ['p2'] },
  play: async ({ args, canvas }) => {
    const all = canvas.getByRole('checkbox', { name: 'Select all rows' })
    // Some selected: the header box is mixed.
    await expect(all).toHaveAttribute('aria-checked', 'mixed')
    // Each row's box is named by the row header.
    // The row itself reports it, too.
    await expect(canvas.getByRole('checkbox', { name: 'Select Billing revamp' }).closest('tr')).toHaveAttribute('aria-selected', 'true')
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select Atlas' }))
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p2', 'p1'])
    await userEvent.click(all)
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p2', 'p1', 'p3', 'p4'])
    await expect(all).toHaveAttribute('aria-checked', 'true')
    await userEvent.click(all)
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith([])
  },
}

function PagedTable(props: { onSelectionChange: (ids: string[]) => void }) {
  const [page, setPage] = useState(0)
  return (
    <div style={{ display: 'grid', gap: 'var(--space-3)', justifyItems: 'start' }}>
      <Table
        columns={columns}
        rows={projects.slice(page * 2, page * 2 + 2)}
        getRowId={(p) => p.id}
        caption={`Projects, page ${page + 1} of 2`}
        isSelectable
        onSelectionChange={props.onSelectionChange}
      />
      <Button variant="secondary" appearance="outlined" size="sm" onClick={() => setPage(1 - page)}>
        {page === 0 ? 'Next page' : 'Previous page'}
      </Button>
    </div>
  )
}

/** Selection with getRowId survives paging: "Select all" adds or removes this page's rows only. */
export const Paged: Story = {
  render: (args) => <PagedTable onSelectionChange={args.onSelectionChange!} />,
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select Atlas' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Next page' }))
    const all = canvas.getByRole('checkbox', { name: 'Select all rows' })
    await userEvent.click(all)
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p1', 'p3', 'p4'])
    await userEvent.click(all)
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p1'])
  },
}

/** Rows with no value sort last in both directions. */
export const EmptyValuesSortLast: Story = {
  args: {
    rows: [...projects, { id: 'p5', name: 'Scratch', owner: '', status: 'Paused', files: null as unknown as number, updated: new Date('2026-01-01') }],
    columns: columns.map((c) => (c.key === 'files' ? { ...c, cell: (p: Project) => (p.files == null ? '–' : p.files.toLocaleString('en')) } : c)),
  },
  play: async ({ canvas }) => {
    const files = within(canvas.getByRole('columnheader', { name: /Files/ })).getByRole('button')
    await userEvent.click(files)
    await expect(names(canvas).at(-1)).toBe('Scratch')
    await userEvent.click(files)
    await expect(names(canvas)).toEqual(['Onboarding', 'Atlas', 'Billing revamp', 'Design tokens', 'Scratch'])
  },
}

export const Compact: Story = { args: { density: 'sm', showCaption: true } }

export const Empty: Story = {
  args: {
    rows: [],
    emptyState: (
      <EmptyState
        size="sm"
        headingLevel={3}
        icon={<Icon name="search" />}
        title="No projects match “zeta”"
        action={<Button size="sm" appearance="outlined" variant="accent">Clear search</Button>}
      />
    ),
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'No projects match “zeta”' })).toBeVisible()
  },
}

/** Sorted by the caller (e.g. a server): the table reports the sort and shows the rows as given. */
export const ControlledSort: Story = {
  render: function Render(args) {
    const [sort, setSort] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null)
    const rows = sort ? [...projects].sort((a, b) => a.owner.localeCompare(b.owner) * (sort.direction === 'ascending' ? 1 : -1)) : projects
    return <Table {...args} rows={rows} sort={sort} onSortChange={setSort} />
  },
  play: async ({ canvas }) => {
    await userEvent.click(within(canvas.getByRole('columnheader', { name: /Owner/ })).getByRole('button'))
    await expect(canvas.getAllByRole('row')[1]).toHaveTextContent('Ava Stone')
  },
}

export const StickyHeader: Story = {
  args: {
    hasStickyHeader: true,
    rows: Array.from({ length: 20 }, (_, i) => ({ ...projects[i % 4], id: `r${i}`, name: `${projects[i % 4].name} ${i + 1}` })),
  },
  decorators: [(Story) => <div style={{ blockSize: '20rem', display: 'grid' }}>{Story()}</div>],
}

/** What an open row shows; archived projects have nothing to add, so no button. */
const details = (p: Project) =>
  p.status === 'Archived' ? null : (
    <p style={{ margin: 0 }}>
      {p.owner} owns {p.name}: {p.files.toLocaleString('en')} files, last updated {date.format(p.updated)}.
    </p>
  )

/** The text of each body row in order, open rows' content included. */
const rowTexts = (canvas: ReturnType<typeof within>): string[] =>
  canvas
    .getAllByRole('row')
    .slice(1)
    .map((r: HTMLElement) => r.textContent ?? '')

export const ExpandableRows: Story = {
  args: { expandedContent: details, isSelectable: true },
  play: async ({ args, canvas, step }) => {
    const atlas = canvas.getByRole('button', { name: 'Expand Atlas' })
    await step('A row with no content has no button', async () => {
      await expect(canvas.queryByRole('button', { name: 'Expand Design tokens' })).toBeNull()
    })
    await step('Click opens and closes, aria-expanded follows', async () => {
      await expect(atlas).toHaveAttribute('aria-expanded', 'false')
      await userEvent.click(atlas)
      await expect(atlas).toHaveAttribute('aria-expanded', 'true')
      await expect(args.onExpandedChange).toHaveBeenLastCalledWith(['p1'])
      const content = canvas.getByText(/Sam Rivera owns Atlas/)
      await expect(atlas).toHaveAttribute('aria-controls', content.closest('td')!.id)
      // The content spans the whole row, checkbox and button columns included.
      await expect(content.closest('td')).toHaveAttribute('colspan', String(columns.length + 2))
      await userEvent.click(atlas)
      await expect(atlas).toHaveAttribute('aria-expanded', 'false')
      await expect(canvas.queryByText(/Sam Rivera owns Atlas/)).toBeNull()
    })
    await step('Enter and Space toggle from the keyboard', async () => {
      const billing = canvas.getByRole('button', { name: 'Expand Billing revamp' })
      billing.focus()
      await userEvent.keyboard('{Enter}')
      await expect(billing).toHaveAttribute('aria-expanded', 'true')
      await userEvent.keyboard(' ')
      await expect(billing).toHaveAttribute('aria-expanded', 'false')
      await userEvent.keyboard('{Enter}')
    })
    await step('Sorting keeps the same row open, its content right under it', async () => {
      await userEvent.click(within(canvas.getByRole('columnheader', { name: /Files/ })).getByRole('button'))
      await expect(names(canvas)).toEqual(['Design tokens', 'Billing revamp', 'Atlas', 'Onboarding'])
      const texts = rowTexts(canvas)
      const at = texts.findIndex((t) => t.includes('Billing revamp') && !t.includes('owns'))
      await expect(texts[at + 1]).toMatch(/Mia Chen owns Billing revamp/)
      await expect(canvas.getByRole('button', { name: 'Expand Billing revamp' })).toHaveAttribute('aria-expanded', 'true')
      await expect(canvas.getByRole('button', { name: 'Expand Atlas' })).toHaveAttribute('aria-expanded', 'false')
    })
    await step('Selecting a row leaves expansion alone', async () => {
      await userEvent.click(canvas.getByRole('checkbox', { name: 'Select Billing revamp' }))
      await userEvent.click(canvas.getByRole('checkbox', { name: 'Select all rows' }))
      await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p2', 'p4', 'p1', 'p3'])
      await expect(canvas.getByRole('button', { name: 'Expand Billing revamp' })).toHaveAttribute('aria-expanded', 'true')
      await expect(args.onExpandedChange).toHaveBeenLastCalledWith(['p2'])
    })
  },
}

/** Opened from outside the table: `expandedIds` is the source of truth. */
export const ControlledExpansion: Story = {
  args: { expandedContent: details },
  render: function Render(args) {
    const [open, setOpen] = useState<string[]>([])
    return (
      <div style={{ display: 'grid', gap: 'var(--space-3)', justifyItems: 'start' }}>
        <Button variant="secondary" appearance="outlined" size="sm" onClick={() => setOpen(open.includes('p3') ? [] : ['p3'])}>
          {open.includes('p3') ? 'Close Onboarding' : 'Open Onboarding'}
        </Button>
        <Table
          {...args}
          expandedIds={open}
          onExpandedChange={(ids) => {
            setOpen(ids)
            args.onExpandedChange?.(ids)
          }}
        />
      </div>
    )
  },
  play: async ({ args, canvas }) => {
    const onboarding = canvas.getByRole('button', { name: 'Expand Onboarding' })
    await userEvent.click(canvas.getByRole('button', { name: 'Open Onboarding' }))
    await expect(onboarding).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByText(/Leo Park owns Onboarding/)).toBeVisible()
    // The row's own button reports back; the caller decides.
    await userEvent.click(onboarding)
    await expect(args.onExpandedChange).toHaveBeenLastCalledWith([])
    await expect(onboarding).toHaveAttribute('aria-expanded', 'false')
    await expect(canvas.getByRole('button', { name: 'Open Onboarding' })).toBeVisible()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Caption', selector: 'caption', description: 'Names the table. Visually hidden unless showCaption.' },
  { name: 'Header row', selector: 'thead tr', description: 'Small muted labels on --surface-filled. Stays in view with hasStickyHeader.' },
  { name: 'Sort button', selector: 'th[aria-sort] button', description: 'The whole header label, with an icon for the sort. Only on sortable columns.' },
  { name: 'Select all', selector: 'thead [role="checkbox"]', description: 'With isSelectable. Selects or clears every row shown, and shows mixed when some are selected.' },
  { name: 'Row', selector: 'tbody tr', description: '48px tall (40px at sm), divided by --border. Tinted when hovered or selected.' },
  { name: 'Row checkbox', selector: 'tbody [role="checkbox"]', description: 'Named after the row header: "Select Atlas".' },
  { name: 'Expand button', selector: 'tbody [aria-expanded]', description: 'With expandedContent: a ghost icon button. The chevron turns down when open.' },
  { name: 'Row header', selector: 'tbody th[scope="row"]', description: 'The column marked isRowHeader, medium weight: the name a row is known by.' },
  {
    name: 'Expanded row',
    selector: 'tbody td[colspan]',
    description: 'One cell spanning every column, under its row, with no rule between them. Holds any layout.',
  },
]

/** Every part present: caption shown, a sortable column, selection, one row open. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { showCaption: true, isSelectable: true, expandedContent: details, defaultExpandedIds: ['p1'], rows: projects.slice(0, 3) },
  play: async ({ canvasElement, canvas }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[7]).toHaveTextContent('Atlas')
    await expect(found[8]).toHaveTextContent(/Sam Rivera owns Atlas/)
    // The expand column is announced like the others, by a hidden header.
    await expect(canvas.getByRole('columnheader', { name: 'Details' })).toBeInTheDocument()
  },
}

/** Two columns and two rows, small enough for the Specs tab's States to sit side by side. */
const brief = { columns: columns.filter((c) => c.key === 'name' || c.key === 'files'), rows: projects.slice(0, 2) }

/** Specs, States: the plain table. */
export const StateEnabled: Story = { tags: ['!dev'], args: brief }

/** Specs, States: sorted by Files, ascending. */
export const StateSorted: Story = { tags: ['!dev'], args: { ...brief, defaultSort: { key: 'files', direction: 'ascending' } } }

/** Specs, States: Atlas selected. */
export const StateSelected: Story = { tags: ['!dev'], args: { ...brief, isSelectable: true, defaultSelectedIds: ['p1'] } }

/** Specs, States: Atlas open. */
export const StateExpanded: Story = { tags: ['!dev'], args: { ...brief, expandedContent: details, defaultExpandedIds: ['p1'] } }

/** Guidelines, Don't: numbers at the start, so the digits do not line up. */
export const DontNumbersAtStart: Story = {
  tags: ['!dev'],
  args: { columns: columns.map(({ align: _align, ...c }) => c) },
}

/** Guidelines, Don't: no row header, so a row's checkbox can only say which number it is. */
export const DontNoRowHeader: Story = {
  tags: ['!dev'],
  args: { isSelectable: true, columns: columns.map(({ isRowHeader: _isRowHeader, ...c }) => c) },
  play: async ({ canvas }) => {
    // Counted from `rows`, so a sort does not rename it; but "row 1" says nothing.
    await expect(canvas.getByRole('checkbox', { name: 'Select row 1' })).toBeInTheDocument()
    await expect(canvas.queryByRole('rowheader')).toBeNull()
    // Sorted by Files, Atlas moves to the third row and keeps its name.
    await userEvent.click(within(canvas.getByRole('columnheader', { name: /Files/ })).getByRole('button'))
    await expect(canvas.getByRole('checkbox', { name: 'Select row 1' }).closest('tr')).toHaveTextContent('Atlas')
    await expect(canvas.getAllByRole('row')[3]).toHaveTextContent('Atlas')
  },
}
