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
  argTypes: {
    density: { control: 'inline-radio', options: ['sm', 'md'] },
    columns: { control: false },
    rows: { control: false },
    emptyState: { control: false },
    expandedContent: { control: false },
  },
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
