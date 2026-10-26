import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '@/components/buttons/Button'
import { Menu } from '@/components/navigation/Menu'
import { FilterBar } from './FilterBar'
import { SavedViews, type SavedView } from './SavedViews'

const STATUSES = ['Draft', 'Sent', 'Paid', 'Overdue'] as const
const INVOICES = [
  ...Array.from({ length: 6 }, () => 'Draft'),
  ...Array.from({ length: 9 }, () => 'Sent'),
  ...Array.from({ length: 21 }, () => 'Paid'),
  ...Array.from({ length: 4 }, () => 'Overdue'),
]

/** A view is a name over saved filters; here, the statuses it shows. */
type View = Omit<SavedView, 'count'> & { statuses: string[] }

const VIEWS: View[] = [
  { id: 'all', label: 'All', isPredefined: true, statuses: [] },
  { id: 'open', label: 'Open', isPredefined: true, statuses: ['Draft', 'Sent', 'Overdue'] },
  { id: 'overdue', label: 'Overdue', isPredefined: true, statuses: ['Overdue'] },
  { id: 'to-chase', label: 'To chase', isShared: true, statuses: ['Sent', 'Overdue'] },
]

/** Harsh content: a name with no spaces to break on. */
const LONG: View = { id: 'long', label: 'Rechnungsprüfungsausnahmenbearbeitungsliste', statuses: ['Draft'] }

const count = (statuses: string[]) => INVOICES.filter((s) => statuses.length === 0 || statuses.includes(s)).length
const same = (a: string[], b: string[]) => a.length === b.length && a.every((s) => b.includes(s))

/** Invoices: views over a status filter. Changing the filter marks the view modified. */
function InvoiceViews({ display, initialView = 'all', views: initialViews = VIEWS }: { display?: 'tabs' | 'menu'; initialView?: string; views?: View[] }) {
  const [views, setViews] = useState(initialViews)
  const [value, setValue] = useState(initialView)
  const active = views.find((v) => v.id === value) ?? views[0]
  const [statuses, setStatuses] = useState(active.statuses)

  const pick = (id: string) => {
    setValue(id)
    setStatuses(views.find((v) => v.id === id)?.statuses ?? [])
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'var(--space-group)' }}>
      <SavedViews
        aria-label="Invoice views"
        display={display}
        views={views.map(({ statuses: s, ...view }) => ({ ...view, count: count(s) }))}
        value={active.id}
        onValueChange={pick}
        isModified={!same(statuses, active.statuses)}
        onSave={() => setViews((all) => all.map((v) => (v.id === active.id ? { ...v, statuses } : v)))}
        onDiscard={() => setStatuses(active.statuses)}
        onSaveAs={({ label, isShared }) => {
          const id = label.toLowerCase().replace(/\W+/g, '-')
          setViews((all) => [...all, { id, label, isShared, statuses }])
          setValue(id)
        }}
        isShareable
        onDelete={(id) => {
          setViews((all) => all.filter((v) => v.id !== id))
          if (id === active.id) pick('all')
        }}
      />
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
      />
      <p style={{ margin: 0, color: 'var(--muted-foreground)' }}>{count(statuses)} invoices</p>
    </div>
  )
}

const meta = {
  title: 'Patterns/Application UI/Saved Views',
  tags: ['experimental'],
  component: SavedViews,
  parameters: { layout: 'padded' },
  argTypes: {
    views: {
      description: 'The views as `{ id, label, count?, isPredefined?, isShared? }`, predefined first. A predefined view cannot be saved over or deleted.',
      control: false,
    },
    value: { description: 'The id of the view in force.', control: false },
    onValueChange: { description: 'Called with a view id when one is picked. Put that view\'s saved state in force.' },
    display: {
      description: '`tabs` for a handful of views; `menu` for more than fit on one line, as a button naming the view in force.',
      control: 'inline-radio',
      options: ['tabs', 'menu'],
      table: { defaultValue: { summary: 'tabs' } },
    },
    isModified: { description: 'The filters, sort or columns differ from the view as saved: shows Modified, Discard and Save.', control: 'boolean' },
    onSave: { description: 'Saves the changes into the view in force. Without it, or on a predefined view, a modified view offers Save as new view instead.' },
    onDiscard: { description: 'Puts the view back as saved. Without it there is no Discard.' },
    onSaveAs: { description: 'Called with `{ label, isShared }` from the Save as new view dialog, once the name is filled in and not taken. Add the view and put it in force.' },
    isShareable: { description: 'Offers "Share with everyone" in the Save as new view dialog.', control: 'boolean' },
    onDelete: { description: 'Called with a view id from Manage views. Without it there is no Manage views.' },
    'aria-label': { description: 'Names the view list. Defaults to "Views"; say what it lists when a page has more than one.', control: 'text' },
  },
  args: { views: [], value: '', onValueChange: () => {} },
  render: () => <InvoiceViews />,
} satisfies Meta<typeof SavedViews>

export default meta
type Story = StoryObj<typeof meta>

/** Tabs with a count each; picking one puts its filters in force. */
export const Default: Story = {
  play: async ({ canvas }) => {
    const list = canvas.getByRole('tablist', { name: 'Invoice views' })
    await expect(within(list).getAllByRole('tab')).toHaveLength(4)
    await expect(canvas.getByRole('tab', { name: 'All 40' })).toHaveAttribute('aria-selected', 'true')
    await userEvent.click(canvas.getByRole('tab', { name: 'Overdue 4' }))
    await expect(canvas.getByRole('tab', { name: 'Overdue 4' })).toHaveAttribute('aria-selected', 'true')
    await expect(canvas.getByText('4 invoices')).toBeVisible()
    await expect(canvas.getByRole('status')).toHaveTextContent('')
  },
}

/** A saved view, changed: Modified is announced, Save writes the change into the view, Discard drops it. */
export const Modified: Story = {
  render: () => <InvoiceViews initialView="to-chase" />,
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Status: Sent' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('Modified')
    await userEvent.click(canvas.getByRole('button', { name: 'Discard' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('')
    // The pressed button is gone: focus goes to the view in force.
    await waitFor(() => expect(canvas.getByRole('tab', { name: 'To chase 13' })).toHaveFocus())
    await expect(canvas.getByRole('button', { name: 'Remove Status: Sent' })).toBeVisible()

    await userEvent.click(canvas.getByRole('button', { name: 'Remove Status: Sent' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Save' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('')
    await waitFor(() => expect(canvas.getByRole('tab', { name: 'To chase 4' })).toHaveFocus())
  },
}

/** A predefined view cannot be saved over: a change offers Save as new view, which checks the name. */
export const SaveAsNewView: Story = {
  render: () => <InvoiceViews initialView="open" />,
  play: async ({ canvas }) => {
    const body = within(document.body)
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Status: Draft' }))
    await expect(canvas.queryByRole('button', { name: 'Save' })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Save as new view' }))
    const dialog = await body.findByRole('dialog', { name: 'Save as new view' })
    const name = within(dialog).getByRole('textbox', { name: 'View name' })
    await waitFor(() => expect(name).toHaveFocus())

    await userEvent.click(within(dialog).getByRole('button', { name: 'Save view' }))
    await expect(name).toHaveAttribute('aria-invalid', 'true')
    await expect(name).toHaveAccessibleDescription('Enter a name for the view.')

    await userEvent.type(name, 'overdue')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Save view' }))
    await expect(name).toHaveAccessibleDescription('A view with this name already exists.')

    await userEvent.clear(name)
    await userEvent.type(name, 'Unpaid')
    await userEvent.click(within(dialog).getByRole('checkbox', { name: 'Share with everyone' }))
    await userEvent.click(within(dialog).getByRole('button', { name: 'Save view' }))
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull())
    await expect(canvas.getByRole('tab', { name: 'Unpaid 13' })).toHaveAttribute('aria-selected', 'true')
    await waitFor(() => expect(canvas.getByRole('tab', { name: 'Unpaid 13' })).toHaveFocus())
    await expect(canvas.getByRole('status')).toHaveTextContent('')
  },
}

/** Manage views deletes saved views; predefined ones stay. Focus moves to the next delete button. */
export const ManageViews: Story = {
  render: () => (
    <InvoiceViews views={[...VIEWS, { id: 'mine', label: 'My drafts', statuses: ['Draft'] }]} />
  ),
  play: async ({ canvas }) => {
    const body = within(document.body)
    await userEvent.click(canvas.getByRole('button', { name: 'View actions' }))
    await userEvent.click(await body.findByRole('menuitem', { name: 'Manage views…' }))
    const dialog = await body.findByRole('dialog', { name: 'Manage views' })
    const list = within(dialog).getByRole('list', { name: 'Invoice views' })
    await expect(within(list).getAllByRole('listitem')).toHaveLength(5)
    await expect(within(dialog).queryByRole('button', { name: 'Delete All' })).toBeNull()

    await userEvent.click(within(dialog).getByRole('button', { name: 'Delete To chase' }))
    await expect(within(dialog).queryByText('To chase')).toBeNull()
    await expect(within(dialog).getByRole('button', { name: 'Delete My drafts' })).toHaveFocus()
    await userEvent.click(within(dialog).getByRole('button', { name: 'Delete My drafts' }))
    await expect(within(dialog).getByRole('button', { name: 'Done' })).toHaveFocus()
    await userEvent.click(within(dialog).getByRole('button', { name: 'Done' }))
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull())
    await expect(canvas.getAllByRole('tab')).toHaveLength(3)
  },
}

/** A very long name in menu display truncates inside the button. */
export const MenuLongName: Story = {
  tags: ['!dev'],
  render: () => (
    <div data-testid="narrow" style={{ inlineSize: 320 }}>
      <InvoiceViews display="menu" initialView="long" views={[...VIEWS, LONG]} />
    </div>
  ),
  play: async ({ canvas }) => {
    const edge = canvas.getByTestId('narrow').getBoundingClientRect().right
    const trigger = canvas.getByRole('button', { name: `Invoice views: ${LONG.label}` })
    await waitFor(() => expect(trigger.getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5))
  },
}

/** Many views: a button names the view in force and opens them as a menu. */
export const AsMenu: Story = {
  render: () => <InvoiceViews display="menu" />,
  play: async ({ canvas }) => {
    const body = within(document.body)
    const trigger = canvas.getByRole('button', { name: 'Invoice views: All' })
    await userEvent.click(trigger)
    await userEvent.click(await body.findByRole('menuitemradio', { name: 'To chase 13' }))
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull())
    await expect(canvas.getByRole('button', { name: 'Invoice views: To chase' })).toBeVisible()
    await expect(canvas.getByText('13 invoices')).toBeVisible()
  },
}

/** At 320px, with a very long name, the tabs scroll inside the bar and the actions drop under them; nothing widens the page. */
export const Narrow: Story = {
  render: () => (
    <div data-testid="narrow" style={{ inlineSize: 320 }}>
      <InvoiceViews initialView="to-chase" views={[...VIEWS, LONG]} />
    </div>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Status: Sent' }))
    const edge = canvas.getByTestId('narrow').getBoundingClientRect().right
    await waitFor(async () => {
      await expect(canvas.getByRole('tablist').parentElement!.getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5)
      await expect(canvas.getByRole('button', { name: 'View actions' }).getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5)
    })
  },
}
