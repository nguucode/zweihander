import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '@/components/buttons/Button'
import { Checkbox } from '@/components/controls/Checkbox'
import { Search } from '@/components/inputs/Search'
import { Menu } from '@/components/navigation/Menu'
import { Drawer, DrawerClose } from '@/components/overlays/Drawer'
import { TableToolbar } from './DataTablePage'
import { FilterBar, type AppliedFilter } from './FilterBar'

const FIELDS = {
  status: { label: 'Status', options: ['Draft', 'Sent', 'Paid', 'Overdue'] },
  owner: { label: 'Owner', options: ['Mia Chen', 'Noah Kim', 'Ava Patel'] },
} as const
type Field = keyof typeof FIELDS
type Filters = Record<Field, string[]>
const none: Filters = { status: [], owner: [] }

const toggle = (list: string[], value: string, on: boolean) => (on ? [...list, value] : list.filter((v) => v !== value))

const toApplied = (filters: Filters): AppliedFilter[] =>
  (Object.keys(FIELDS) as Field[]).flatMap((field) =>
    filters[field].map((value) => ({ id: `${field}:${value}`, label: `${FIELDS[field].label}: ${value}` })),
  )

/** The batch way: choices change a draft, and only Apply puts it in force. */
function MoreFilters({ filters, onApply }: { filters: Filters; onApply: (next: Filters) => void }) {
  const [draft, setDraft] = useState(filters)
  return (
    <Drawer
      title="Filters"
      onOpenChange={(open) => open && setDraft(filters)}
      trigger={
        <Button variant="secondary" appearance="ghost" startIcon={<Icon name="plus" />}>
          More filters
        </Button>
      }
      footer={
        <>
          <DrawerClose render={<Button variant="secondary" />}>Cancel</DrawerClose>
          <DrawerClose render={<Button />} onClick={() => onApply(draft)}>
            Apply
          </DrawerClose>
        </>
      }
    >
      {(Object.keys(FIELDS) as Field[]).map((field) => (
        <fieldset key={field} style={{ border: 0, margin: 0, padding: 0, display: 'grid', gap: 'var(--space-2)', marginBlockEnd: 'var(--space-group)' }}>
          <legend style={{ fontWeight: 600, marginBlockEnd: 'var(--space-2)' }}>{FIELDS[field].label}</legend>
          {FIELDS[field].options.map((value) => (
            <Checkbox
              key={value}
              label={value}
              checked={draft[field].includes(value)}
              onCheckedChange={(on) => setDraft((d) => ({ ...d, [field]: toggle(d[field], value, on) }))}
            />
          ))}
        </fieldset>
      ))}
    </Drawer>
  )
}

/** An invoices filter: a menu per field applies at once, More filters applies in a batch. */
function InvoiceFilters({ initial = none, longLabel, label }: { initial?: Filters; longLabel?: boolean; label?: string }) {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState(initial)
  const applied = toApplied(filters)
  return (
    <FilterBar
      aria-label={label}
      search={<Search aria-label="Search invoices" placeholder="Search invoices" value={query} onChange={(e) => setQuery(e.target.value)} />}
      filters={
        <>
          {(Object.keys(FIELDS) as Field[]).map((field) => (
            <Menu
              key={field}
              trigger={
                <Button variant="secondary" appearance="outlined" endIcon={<Icon name="chevron-down" />}>
                  {FIELDS[field].label}
                </Button>
              }
              items={FIELDS[field].options.map((value) => ({
                type: 'checkbox' as const,
                label: value,
                checked: filters[field].includes(value),
                onCheckedChange: (on: boolean) => setFilters((f) => ({ ...f, [field]: toggle(f[field], value, on) })),
              }))}
            />
          ))}
          <MoreFilters filters={filters} onApply={setFilters} />
        </>
      }
      applied={longLabel ? [...applied, { id: 'customer', label: 'Customer: Nordwestdeutsche Landesbank Girozentrale Hannover' }] : applied}
      onRemove={(id) => {
        const [field, value] = id.split(':') as [Field, string]
        setFilters((f) => ({ ...f, [field]: f[field].filter((v) => v !== value) }))
      }}
      onClearAll={() => setFilters(none)}
    />
  )
}

const meta = {
  title: 'Patterns/Application UI/Filter Bar',
  tags: ['experimental'],
  component: FilterBar,
  parameters: { layout: 'padded' },
  argTypes: {
    search: { description: 'Usually a Search, first in the row.', control: false },
    filters: {
      description: 'A button per field that opens its choices (a Menu applies at once), then Add filter or More filters (a Drawer applies in a batch).',
      control: false,
    },
    applied: { description: 'The filters in force as `{ id, label }`, one removable chip each. The chip row hides when empty.', control: false },
    onRemove: { description: "Called with a chip's id when its remove button is pressed. Without it the chips have no remove button." },
    onClearAll: { description: 'Called by Clear all. Without it there is no Clear all.' },
    clearAllLabel: { description: 'The Clear all button text.', control: 'text' },
    'aria-label': { description: 'Names the `search` landmark. Defaults to "Filters"; say what it filters when a page has more than one.', control: 'text' },
    appliedLabel: { description: 'The chip list\'s accessible name.', control: 'text' },
  },
  render: () => <InvoiceFilters initial={{ status: ['Overdue', 'Sent'], owner: ['Mia Chen'] }} />,
} satisfies Meta<typeof FilterBar>

export default meta
type Story = StoryObj<typeof meta>

/** Search, a menu per field, More filters, and the applied filters as chips. */
export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('search', { name: 'Filters' })).toBeVisible()
    const list = canvas.getByRole('list', { name: 'Applied filters' })
    await expect(within(list).getAllByRole('listitem')).toHaveLength(3)
    // Removing a chip hands focus to the one that takes its place.
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Status: Overdue' }))
    await expect(canvas.queryByText('Status: Overdue')).toBeNull()
    await expect(canvas.getByRole('button', { name: 'Remove Status: Sent' })).toHaveFocus()
    // The last chip hands it back to the one before.
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Owner: Mia Chen' }))
    await expect(canvas.getByRole('button', { name: 'Remove Status: Sent' })).toHaveFocus()
    // Clear all takes the row away, and focus goes back to the search.
    await userEvent.click(canvas.getByRole('button', { name: 'Clear all' }))
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.getByRole('searchbox', { name: 'Search invoices' })).toHaveFocus()
  },
}

/** Nothing applied: just the controls, no chip row and no Clear all. */
export const Empty: Story = {
  render: () => <InvoiceFilters />,
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.queryByRole('button', { name: 'Clear all' })).toBeNull()
  },
}

/** A field's menu applies each choice as it is ticked. */
export const AppliedAtOnce: Story = {
  render: () => <InvoiceFilters />,
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Status' }))
    const paid = await within(document.body).findByRole('menuitemcheckbox', { name: 'Paid' })
    await userEvent.click(paid)
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(within(document.body).queryByRole('menu')).toBeNull())
    await expect(canvas.getByRole('button', { name: 'Remove Status: Paid' })).toBeVisible()
  },
}

/** More filters opens a Drawer: nothing applies until Apply, and Cancel drops the changes. */
export const AppliedInABatch: Story = {
  render: () => <InvoiceFilters />,
  play: async ({ canvas }) => {
    const body = within(document.body)
    const more = canvas.getByRole('button', { name: 'More filters' })
    await userEvent.click(more)
    await userEvent.click(await body.findByRole('checkbox', { name: 'Draft' }))
    await userEvent.click(body.getByRole('button', { name: 'Cancel' }))
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull())
    await expect(canvas.queryByRole('list')).toBeNull()

    await userEvent.click(more)
    await userEvent.click(await body.findByRole('checkbox', { name: 'Draft' }))
    await userEvent.click(body.getByRole('checkbox', { name: 'Noah Kim' }))
    await userEvent.click(body.getByRole('button', { name: 'Apply' }))
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull())
    await expect(canvas.getByRole('button', { name: 'Remove Status: Draft' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Remove Owner: Noah Kim' })).toBeVisible()
  },
}

/** In a TableToolbar it takes the free space, and the page's main action stays at the end. Named after what it filters. */
export const InTableToolbar: Story = {
  render: () => (
    <TableToolbar>
      <InvoiceFilters initial={{ status: ['Overdue'], owner: [] }} label="Invoice filters" />
      <Button startIcon={<Icon name="plus" />}>New invoice</Button>
    </TableToolbar>
  ),
  play: async ({ canvas }) => {
    const bar = canvas.getByRole('search', { name: 'Invoice filters' }).getBoundingClientRect()
    const action = canvas.getByRole('button', { name: 'New invoice' }).getBoundingClientRect()
    await expect(action.left).toBeGreaterThanOrEqual(bar.right)
    // Removing the only chip takes focus back to the first control.
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Status: Overdue' }))
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.getByRole('searchbox', { name: 'Search invoices' })).toHaveFocus()
  },
}

/** At 320px the controls wrap and a long value truncates inside its chip. */
export const Narrow: Story = {
  render: () => (
    <div data-testid="narrow" style={{ inlineSize: 320 }}>
      <InvoiceFilters initial={{ status: ['Overdue'], owner: [] }} longLabel />
    </div>
  ),
  play: async ({ canvas }) => {
    const edge = canvas.getByTestId('narrow').getBoundingClientRect().right
    await waitFor(async () => {
      for (const item of canvas.getAllByRole('listitem')) await expect(item.getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5)
      await expect(canvas.getByRole('button', { name: 'More filters' }).getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5)
    })
  },
}
