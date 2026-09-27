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
  component: Table<Project>,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: { columns, rows: projects, getRowId: (p: Project) => p.id, caption: 'Projects', onSortChange: fn(), onSelectionChange: fn() },
  argTypes: {
    density: { control: 'inline-radio', options: ['sm', 'md'] },
    columns: { control: false },
    rows: { control: false },
    emptyState: { control: false },
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
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p1', 'p2', 'p3', 'p4'])
    await expect(all).toHaveAttribute('aria-checked', 'true')
    await userEvent.click(all)
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith([])
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
