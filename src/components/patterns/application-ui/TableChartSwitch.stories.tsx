import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '@/components/buttons/Button'
import { BarChart } from '@/components/charts/BarChart'
import { Table, type TableColumn } from '@/components/data-display/Table'
import { Menu } from '@/components/navigation/Menu'
import { EmptyState } from '@/components/states/EmptyState'
import { FilterBar } from './FilterBar'
import { TableChartSwitch, type TableChartSwitchProps, type TableChartView } from './TableChartSwitch'

const STATUSES = ['Draft', 'Sent', 'Paid', 'Overdue'] as const
const MONTHS = ['Jul', 'Aug', 'Sep', 'Oct']

interface Invoice {
  id: string
  customer: string
  month: string
  status: (typeof STATUSES)[number]
  amount: number
}

const CUSTOMERS = ['Acme Corp', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Stark Industries']
// i * 3 % 4 walks every status, so each status holds four of the sixteen.
const INVOICES: Invoice[] = Array.from({ length: 16 }, (_, i) => ({
  id: `INV-${1040 + i}`,
  customer: CUSTOMERS[i % CUSTOMERS.length],
  month: MONTHS[Math.floor(i / 4)],
  status: STATUSES[(i * 3) % STATUSES.length],
  amount: 800 + ((i * 1373) % 4200),
}))

const money = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

const columns: TableColumn<Invoice>[] = [
  { key: 'id', header: 'Invoice', isRowHeader: true },
  { key: 'customer', header: 'Customer' },
  { key: 'month', header: 'Month' },
  { key: 'status', header: 'Status' },
  { key: 'amount', header: 'Amount', align: 'end', sortable: true, sortValue: (row) => row.amount, cell: (row) => money(row.amount) },
]

type InvoicesProps = Partial<TableChartSwitchProps> & { initial?: string[]; rows?: Invoice[] }

/** One filter state feeds both views: the table lists the invoices, the chart sums them by month. */
function Invoices({ initial = ['Sent', 'Overdue'], rows = INVOICES, ...props }: InvoicesProps) {
  const [statuses, setStatuses] = useState<string[]>(initial)
  const shown = rows.filter((r) => statuses.length === 0 || statuses.includes(r.status))
  const byMonth = MONTHS.map((month) => ({ month, amount: shown.filter((r) => r.month === month).reduce((sum, r) => sum + r.amount, 0) }))
  return (
    <TableChartSwitch
      aria-label="Invoice view"
      filters={
        <FilterBar
          aria-label="Invoice filters"
          filters={
            <Menu
              trigger={
                <Button variant="secondary" appearance="outlined" endIcon={<Icon name="chevron-down" />}>
                  Status
                </Button>
              }
              items={STATUSES.map((s) => ({
                type: 'checkbox' as const,
                label: s,
                checked: statuses.includes(s),
                onCheckedChange: (on: boolean) => setStatuses((all) => (on ? [...all, s] : all.filter((x) => x !== s))),
              }))}
            />
          }
          applied={statuses.map((s) => ({ id: s, label: `Status: ${s}` }))}
          onRemove={(id) => setStatuses((all) => all.filter((s) => s !== id))}
          onClearAll={() => setStatuses([])}
        />
      }
      summary={`${shown.length} invoices`}
      table={
        <Table
          caption="Invoices"
          columns={columns}
          rows={shown}
          getRowId={(r) => r.id}
          emptyState={<EmptyState size="sm" headingLevel={3} icon={<Icon name="search" />} title="No invoices match these filters" />}
        />
      }
      chart={<BarChart title="Invoiced by month" data={shown.length ? byMonth : []} x="month" series={[{ key: 'amount', label: 'Amount' }]} format={money} />}
      {...props}
    />
  )
}

const meta = {
  title: 'Patterns/Application UI/Table Chart Switch',
  tags: ['experimental'],
  component: TableChartSwitch,
  parameters: { layout: 'padded' },
  argTypes: {
    table: { description: 'The records, usually a Table.', control: false },
    chart: { description: 'The same records summed up, usually a BarChart or LineChart.', control: false },
    filters: { description: 'The filters both views share, usually a Filter Bar. It stays put, with its state, when the view changes.', control: false },
    summary: { description: 'At the start of the switch\'s row: what the views show, e.g. "128 invoices". A status: a change is announced.', control: 'text' },
    view: { description: 'The view shown, when you control it.', control: 'inline-radio', options: ['table', 'chart'] },
    defaultView: { description: 'The view shown first, when you do not control it.', control: 'inline-radio', options: ['table', 'chart'], table: { defaultValue: { summary: 'table' } } },
    onViewChange: { description: 'Called with `table` or `chart` when the viewer switches. Store it to bring the viewer back to the same view.' },
    tableLabel: { description: 'The table tab\'s text.', control: 'text', table: { defaultValue: { summary: 'Table' } } },
    chartLabel: { description: 'The chart tab\'s text.', control: 'text', table: { defaultValue: { summary: 'Chart' } } },
    'aria-label': { description: 'Names the switch. Defaults to "View"; say what it shows, e.g. "Invoice view".', control: 'text' },
  },
  args: { table: null, chart: null },
  render: () => <Invoices />,
} satisfies Meta<typeof TableChartSwitch>

export default meta
type Story = StoryObj<typeof meta>

/** The table first. Switch to the chart: the filters stay, and both views show the same invoices. */
export const Default: Story = {
  play: async ({ canvas }) => {
    const list = canvas.getByRole('tablist', { name: 'Invoice view' })
    await expect(within(list).getAllByRole('tab')).toHaveLength(2)
    await expect(canvas.getByRole('tab', { name: 'Table' })).toHaveAttribute('aria-selected', 'true')
    const panel = canvas.getByRole('tabpanel', { name: 'Table' })
    await expect(within(panel).getByRole('table', { name: 'Invoices' })).toBeVisible()
    await expect(canvas.getByText('8 invoices')).toBeVisible()

    await userEvent.click(canvas.getByRole('tab', { name: 'Chart' }))
    await expect(await canvas.findByRole('img', { name: /Invoiced by month/ })).toBeVisible()
    // The table is hidden, not gone: it keeps its state for the way back.
    await expect(canvas.queryByRole('table', { name: 'Invoices' })).toBeNull()
    // The filters are shared: still applied, and a change shows in the chart's view too.
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Status: Overdue' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('4 invoices')

    await userEvent.click(canvas.getByRole('tab', { name: 'Table' }))
    const rows = within(canvas.getByRole('table', { name: 'Invoices' })).getAllByRole('row')
    // A header row and the four Sent invoices.
    await expect(rows).toHaveLength(5)
  },
}

/** The keyboard: arrows move between the two tabs, Enter or Space switches. */
export const Keyboard: Story = {
  play: async ({ canvas }) => {
    const table = canvas.getByRole('tab', { name: 'Table' })
    table.focus()
    await userEvent.keyboard('{ArrowRight}')
    const chart = canvas.getByRole('tab', { name: 'Chart' })
    await expect(chart).toHaveFocus()
    await expect(table).toHaveAttribute('aria-selected', 'true')
    await userEvent.keyboard('{Enter}')
    await expect(chart).toHaveAttribute('aria-selected', 'true')
    // Switching leaves focus on the tab, not in the view.
    await expect(chart).toHaveFocus()
    await expect(await canvas.findByRole('tabpanel', { name: 'Chart' })).toBeVisible()
    // Space switches back.
    await userEvent.keyboard('{ArrowLeft}')
    await userEvent.keyboard(' ')
    await expect(table).toHaveAttribute('aria-selected', 'true')
  },
}

/** Focus in the filters survives a switch, since the filters never leave the page. */
export const FocusInFilters: Story = {
  tags: ['!dev'],
  play: async ({ canvas }) => {
    const status = canvas.getByRole('button', { name: 'Status' })
    await userEvent.click(canvas.getByRole('tab', { name: 'Chart' }))
    status.focus()
    await userEvent.click(canvas.getByRole('tab', { name: 'Table' }))
    await expect(canvas.getByRole('button', { name: 'Status' })).toBe(status)
    status.focus()
    await expect(status).toHaveFocus()
  },
}

/** The table keeps its sort while the chart is shown. */
export const KeepsTableState: Story = {
  tags: ['!dev'],
  render: () => <Invoices />,
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Amount/ }))
    const sorted = canvas.getByRole('columnheader', { name: /Amount/ }).getAttribute('aria-sort')
    await expect(sorted).not.toBe('none')
    await userEvent.click(canvas.getByRole('tab', { name: 'Chart' }))
    await userEvent.click(canvas.getByRole('tab', { name: 'Table' }))
    await expect(canvas.getByRole('columnheader', { name: /Amount/ })).toHaveAttribute('aria-sort', sorted!)
  },
}

/** Controlled: the view you stored for this viewer, here the chart. */
export const Controlled: Story = {
  render: function Render() {
    const [view, setView] = useState<TableChartView>('chart')
    return (
      <>
        <Invoices view={view} onViewChange={setView} />
        <p data-testid="stored">Stored: {view}</p>
      </>
    )
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tab', { name: 'Chart' })).toHaveAttribute('aria-selected', 'true')
    await canvas.findByRole('img', { name: /Invoiced by month/ })
    await userEvent.click(canvas.getByRole('tab', { name: 'Table' }))
    await expect(canvas.getByTestId('stored')).toHaveTextContent('Stored: table')
  },
}

/** No invoices match: the table shows its empty state, the chart says No data. */
export const Empty: Story = {
  render: () => <Invoices rows={[]} initial={[]} />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No invoices match these filters')).toBeVisible()
    await userEvent.click(canvas.getByRole('tab', { name: 'Chart' }))
    await expect(await canvas.findByText('No data')).toBeVisible()
  },
}

/**
 * At 320px a long summary wraps, the switch drops under it, and nothing
 * widens the page. Shown on the chart: the Table's scroll box is not yet
 * focusable when it overflows with no control in its cells, which axe flags.
 */
export const Narrow: Story = {
  render: () => (
    <div data-testid="narrow" style={{ inlineSize: 320 }}>
      <Invoices defaultView="chart" summary="Invoices for Nordwestdeutsche-Landesbank-Girozentrale-Hannover-Niederlassung" />
    </div>
  ),
  play: async ({ canvas }) => {
    const edge = canvas.getByTestId('narrow').getBoundingClientRect().right
    await waitFor(async () => {
      await expect(canvas.getByRole('tablist').getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5)
      await expect(canvas.getByRole('tabpanel').getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5)
      // The switch has dropped under the summary.
      await expect(canvas.getByRole('tablist').getBoundingClientRect().top).toBeGreaterThanOrEqual(canvas.getByRole('status').getBoundingClientRect().bottom)
    })
  },
}
