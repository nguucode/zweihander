import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Tag } from '@/components/atomic-elements/Tag'
import { Button } from '@/components/buttons/Button'
import { Table, type TableColumn } from '@/components/data-display/Table'
import { Search } from '@/components/inputs/Search'
import { Select } from '@/components/inputs/Select'
import { Pagination } from '@/components/navigation/Pagination'
import { EmptyState } from '@/components/states/EmptyState'
import { TableFooter, TableToolbar, TableToolbarGroup } from './DataTablePage'

type Status = 'Active' | 'Paused' | 'Archived'
interface Project {
  id: string
  name: string
  owner: string
  status: Status
  updated: Date
}

const seed: Project[] = [
  ['Atlas', 'Sam Rivera', 'Active', '2026-09-20'],
  ['Billing revamp', 'Mia Chen', 'Paused', '2026-08-02'],
  ['Onboarding', 'Leo Park', 'Active', '2026-09-25'],
  ['Design tokens', 'Ava Stone', 'Archived', '2025-12-11'],
  ['Search v2', 'Noah Kim', 'Active', '2026-09-11'],
  ['Mobile app', 'Sam Rivera', 'Active', '2026-09-26'],
  ['Pricing page', 'Mia Chen', 'Paused', '2026-07-19'],
  ['Data export', 'Leo Park', 'Active', '2026-09-02'],
  ['Help center', 'Ava Stone', 'Archived', '2026-01-30'],
  ['Referral program', 'Noah Kim', 'Active', '2026-09-14'],
  ['Audit log', 'Sam Rivera', 'Paused', '2026-06-08'],
  ['SSO', 'Mia Chen', 'Active', '2026-09-23'],
].map(([name, owner, status, updated], i) => ({ id: `p${i + 1}`, name, owner, status: status as Status, updated: new Date(updated) }))

const tone = { Active: 'success', Paused: 'warning', Archived: 'info' } as const
const date = new Intl.DateTimeFormat('en', { dateStyle: 'medium' })
const columns: TableColumn<Project>[] = [
  { key: 'name', header: 'Project', sortable: true, isRowHeader: true },
  { key: 'owner', header: 'Owner', sortable: true },
  { key: 'status', header: 'Status', cell: (p) => <Tag size="sm" variant={tone[p.status]} text={p.status} /> },
  { key: 'updated', header: 'Updated', sortable: true, align: 'end', cell: (p) => date.format(p.updated) },
]
const PAGE = 5

/** A projects page: search and filter, sortable table, pages, and optionally bulk actions. */
function ProjectsTable({ isSelectable = false, initialQuery = '' }: { isSelectable?: boolean; initialQuery?: string }) {
  const [projects, setProjects] = useState(seed)
  const [query, setQuery] = useState(initialQuery)
  const [status, setStatus] = useState<string | null>('All')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<string[]>([])

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter(
      (p) => (status === 'All' || p.status === status) && (!q || p.name.toLowerCase().includes(q) || p.owner.toLowerCase().includes(q)),
    )
  }, [projects, query, status])
  const pages = Math.max(1, Math.ceil(matches.length / PAGE))
  const current = Math.min(page, pages)
  const shown = matches.slice((current - 1) * PAGE, current * PAGE)
  const filter = (next: () => void) => {
    next()
    setPage(1)
  }

  return (
    <div style={{ maxInlineSize: '60rem' }}>
      <TableToolbar
        selectedCount={selected.length}
        onClearSelection={() => setSelected([])}
        selectionActions={
          <>
            <Button
              size="sm"
              variant="secondary"
              appearance="outlined"
              onClick={() => {
                setProjects((all) => all.map((p) => (selected.includes(p.id) ? { ...p, status: 'Archived' } : p)))
                setSelected([])
              }}
            >
              Archive
            </Button>
            <Button size="sm" variant="destructive" appearance="outlined">
              Delete
            </Button>
          </>
        }
      >
        <TableToolbarGroup>
          <Search aria-label="Search projects" placeholder="Search projects" value={query} onChange={(e) => filter(() => setQuery(e.target.value))} />
          <Select
            aria-label="Status"
            options={['All', 'Active', 'Paused', 'Archived']}
            value={status}
            onValueChange={(v) => filter(() => setStatus(v))}
          />
        </TableToolbarGroup>
        <Button startIcon={<Icon name="plus" />}>New project</Button>
      </TableToolbar>
      <Table
        columns={columns}
        rows={shown}
        getRowId={(p) => p.id}
        caption="Projects"
        isSelectable={isSelectable}
        selectedIds={selected}
        onSelectionChange={setSelected}
        emptyState={
          <EmptyState
            size="sm"
            headingLevel={3}
            title={query ? `No projects match “${query}”` : 'No projects'}
            description="Try another name or owner, or clear the filters."
            action={
              <Button size="sm" variant="secondary" appearance="outlined" onClick={() => filter(() => (setQuery(''), setStatus('All')))}>
                Clear filters
              </Button>
            }
          />
        }
      />
      {matches.length > 0 && (
        <TableFooter summary={`Showing ${(current - 1) * PAGE + 1}–${(current - 1) * PAGE + shown.length} of ${matches.length}`}>
          <Pagination totalPages={pages} page={current} onPageChange={setPage} size="sm" aria-label="Projects pages" />
        </TableFooter>
      )}
    </div>
  )
}

const meta = {
  title: 'Patterns/Application UI/Data Table Page',
  component: TableToolbar,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' }, layout: 'padded' },
  args: { children: null },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof TableToolbar>

export default meta
type Story = StoryObj<typeof meta>

const rowNames = (canvas: ReturnType<typeof within>) => canvas.getAllByRole('rowheader').map((c: HTMLElement) => c.textContent)

/** Search and filter above, pages below; the table sorts by its headers. */
export const ToolbarAndPagination: Story = {
  render: () => <ProjectsTable />,
  play: async ({ canvas }) => {
    await expect(rowNames(canvas)).toHaveLength(5)
    await expect(canvas.getByText('Showing 1–5 of 12')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Page 3' }))
    await expect(canvas.getByText('Showing 11–12 of 12')).toBeVisible()
    // Filtering goes back to the first page.
    await userEvent.type(canvas.getByRole('searchbox', { name: 'Search projects' }), 'mia')
    await expect(rowNames(canvas)).toEqual(['Billing revamp', 'Pricing page', 'SSO'])
    await expect(canvas.getByText('Showing 1–3 of 3')).toBeVisible()
  },
}

/** Select rows and the toolbar turns into their actions, with the count announced. */
export const BulkActions: Story = {
  render: () => <ProjectsTable isSelectable />,
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select Atlas' }))
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select Onboarding' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('2 selected')
    await expect(canvas.queryByRole('searchbox')).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Archive' }))
    // Back to the tools, and the rows changed.
    await expect(canvas.getByRole('searchbox', { name: 'Search projects' })).toBeVisible()
    const atlas = canvas.getByRole('rowheader', { name: 'Atlas' }).closest('tr')!
    await expect(within(atlas).getByText('Archived')).toBeVisible()
  },
}

/** Nothing matches: the table says so and offers the way back. */
export const EmptyResult: Story = {
  render: () => <ProjectsTable initialQuery="zebra" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'No projects match “zebra”' })).toBeVisible()
    await expect(canvas.queryByRole('navigation', { name: 'Projects pages' })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Clear filters' }))
    await waitFor(() => expect(rowNames(canvas)).toHaveLength(5))
  },
}
