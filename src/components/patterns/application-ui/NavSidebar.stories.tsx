import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy } from '../../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Menu } from '@/components/navigation/Menu'
import { Popover } from '@/components/overlays/Popover'
import { NavSidebar, NavSidebarButton, type NavSidebarEntry } from './NavSidebar'

const add = (label: string) => (
  <Button variant="secondary" appearance="ghost" size="sm" isIconOnly aria-label={label}>
    <Icon name="plus" />
  </Button>
)

const items: NavSidebarEntry[] = [
  { label: 'New', href: '#new', icon: <Icon name="plus" /> },
  { label: 'Inbox', href: '#inbox', icon: <Icon name="info" />, badge: 12 },
  { label: 'Invoices', href: '#invoices', icon: <Icon name="file" /> },
  { label: 'Customers', href: '#customers', icon: <Icon name="user" /> },
  {
    type: 'group',
    label: 'Pinned',
    isCollapsible: true,
    items: [
      { label: 'Q3 VAT return', href: '#vat', icon: <Icon name="star" /> },
      { label: 'Vendor ledger', href: '#ledger', icon: <Icon name="star" /> },
    ],
  },
  {
    // No icons: left out of the rail.
    type: 'group',
    label: 'Recent',
    isCollapsible: true,
    limit: 3,
    items: [
      { label: 'INV-2041 · Nordwind GmbH', href: '#r1' },
      { label: 'Bank reconciliation Sep', href: '#r2' },
      { label: 'PO-118 · Hanoi Steel', href: '#r3' },
      { label: 'Payroll run 2026-10', href: '#r4' },
      { label: 'Credit note CN-77', href: '#r5' },
    ],
  },
]

/** The same items with an add action on Pinned: a category's action is opt-in. */
const itemsWithAction = items.map((entry) =>
  entry.type === 'group' && entry.label === 'Pinned' ? { ...entry, action: add('Add to Pinned') } : entry,
)

// Leads with its mark, so the rail (which cuts the logo to its width) still
// shows one; the mark is --icon-md wide, so it lines up with the nav icons.
const brand = (
  <strong data-testid="brand" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
    <img src="logo.svg" alt="" width={16} height={16} style={{ imageRendering: 'pixelated' }} />
    Zweihänder
  </strong>
)

const tenant = (
  <Menu
    align="start"
    trigger={
      <NavSidebarButton
        appearance="switcher"
        icon={<Avatar size="xs" initials="KT" variant="solid" color="blue" />}
        label="Kafka Trading Co."
        end={<Icon name="chevrons-up-down" />}
      />
    }
    items={[
      {
        type: 'radio',
        label: 'Companies',
        defaultValue: 'kt',
        options: [
          { value: 'kt', label: 'Kafka Trading Co.' },
          { value: 'kl', label: 'Kafka Logistics' },
          { value: 'sh', label: 'Shore Holdings' },
        ],
      },
      { type: 'separator' },
      { label: 'Add company', icon: <Icon name="plus" /> },
    ]}
  />
)

const header = (
  <>
    {tenant}
    <NavSidebarButton appearance="field" icon={<Icon name="search" />} label="Search" end="⌘K" />
  </>
)

const footer = (
  <>
    <Popover
      side="right"
      align="end"
      title="Notifications"
      trigger={<NavSidebarButton icon={<Icon name="notifications" />} label="Notifications" badge={3} />}
    >
      INV-2039 is 14 days overdue. Linh approved PO-118. September close is ready to review.
    </Popover>
    <Menu
      side="right"
      align="end"
      trigger={<NavSidebarButton icon={<Icon name="help" />} label="Help and support" />}
      items={[{ label: 'Help center' }, { label: 'Keyboard shortcuts' }, { type: 'separator' }, { label: 'Contact support' }]}
    />
    <Menu
      side="right"
      align="end"
      trigger={<NavSidebarButton icon={<Avatar size="xs" initials="NN" variant="solid" />} label="Nguu Nguyen" />}
      items={[{ label: 'Profile' }, { label: 'Settings' }, { type: 'separator' }, { label: 'Sign out' }]}
    />
  </>
)

const meta = {
  title: 'Patterns/Application UI/Nav Sidebar',
  tags: ['beta'],
  component: NavSidebar,
  parameters: { layout: 'fullscreen' },
  args: {
    items,
    currentHref: '#invoices',
    brand,
    header,
    footer,
    isCollapsible: true,
    onCollapsedChange: fn(),
  },
  // Every prop is described here: these are the docs' API table and the
  // Playground's props panel.
  argTypes: {
    items: {
      description:
        "The links, as data. An item is `{ label, href, icon?, badge?, render? }`; a category is `{ type: 'group', label, items, action?, isCollapsible?, defaultCollapsed?, isCollapsed?, onCollapsedChange?, limit? }`. `render` replaces the `<a>`, e.g. with a router's `<Link />`.",
      control: false,
      table: { type: { summary: 'NavSidebarEntry[]' } },
    },
    currentHref: {
      description: 'The `href` of the page the reader is on. That item gets the selected fill and `aria-current="page"`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    brand: {
      description: "The logo, in the top row with the collapse button. Inside an App Shell's sidebar layout the shell passes its own `brand`.",
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    header: {
      description: 'Under the logo: a tenant switcher and search, built from `NavSidebarButton`. Stays in the rail as icons.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    footer: {
      description: 'Pinned to the bottom, in a row: the account, notifications, help. Stacked in the rail.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    isCollapsed: {
      description: 'Controlled: the icon rail, labels in tooltips. Items without an `icon` are left out. Pair with `onCollapsedChange`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultCollapsed: {
      description: 'Starts as the icon rail, uncontrolled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onCollapsedChange: {
      description: 'Called with the new state when the collapse button is pressed.',
      control: false,
      table: { type: { summary: '(collapsed: boolean) => void' } },
    },
    isCollapsible: {
      description: 'Shows a button in the top row that collapses and expands the sidebar.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    'aria-label': {
      description: "The `<nav>` landmark's name. Change it when a page has more than one navigation.",
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Main'" } },
    },
  },
  excludeStories: ['anatomyParts'],
  // A sidebar fills the height it is given; `bare` stories size to content.
  decorators: [
    (Story, { parameters }) =>
      parameters.bare ? Story() : <div style={{ blockSize: '40rem', display: 'flex' }}>{Story()}</div>,
  ],
} satisfies Meta<typeof NavSidebar>

export default meta
type Story = StoryObj<typeof meta>

/** The logo, tenant and search on top; categories; the account, notifications and help at the bottom. */
export const Default: Story = {
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(within(nav).getByRole('link', { name: 'Invoices' })).toHaveAttribute('aria-current', 'page')
    // A badge joins the name with a comma.
    await expect(within(nav).getByRole('link', { name: 'Inbox, 12' })).not.toHaveAttribute('aria-current')
    await expect(within(nav).getByTestId('brand')).toBeVisible()
    // A category's name names its list; its add action is opt-in, off here.
    await expect(within(nav).getByRole('list', { name: 'Pinned' })).toBeVisible()
    await expect(within(nav).queryByRole('button', { name: 'Add to Pinned' })).toBeNull()
    // The header and footer rows are buttons named by their text.
    await expect(within(nav).getByRole('button', { name: 'Kafka Trading Co.' })).toBeVisible()
    // The shortcut hint is shown but kept out of the name.
    await expect(within(nav).getByRole('button', { name: 'Search' })).toBeVisible()
    await expect(within(nav).getByRole('button', { name: 'Notifications, 3' })).toBeVisible()
    await expect(within(nav).getByRole('button', { name: 'Help and support' })).toBeVisible()
    await expect(within(nav).getByRole('button', { name: 'Nguu Nguyen' })).toBeVisible()
    // Logo, tenant avatar, search icon, nav icon and account avatar share one centre line.
    const centre = (el: Element) => {
      const r = el.getBoundingClientRect()
      return r.left + r.width / 2
    }
    const icon = (name: RegExp) => within(nav).getByRole('button', { name }).querySelector('span')!
    const line = centre(within(nav).getByRole('link', { name: 'Invoices' }).querySelector('span')!)
    for (const el of [
      within(nav).getByTestId('brand').querySelector('img')!,
      icon(/Kafka Trading/),
      icon(/Search/),
      icon(/Nguu Nguyen/),
    ])
      await expect(centre(el)).toBeCloseTo(line, 0)
    // The tenant switcher is a Menu trigger.
    await userEvent.click(within(nav).getByRole('button', { name: 'Kafka Trading Co.' }))
    const body = within(document.body)
    await waitFor(() => expect(body.getByRole('menuitemradio', { name: 'Kafka Logistics' })).toBeVisible())
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull())
  },
}

/** Categories open and close from their label, and a long one shows its first items with "Show more". */
export const Categories: Story = {
  args: { header: undefined, footer: undefined, items: itemsWithAction },
  play: async ({ canvas }) => {
    // The add action, opted into on Pinned, is a named button in the label row.
    await expect(canvas.getByRole('button', { name: 'Add to Pinned' })).toBeInTheDocument()
    const toggle = canvas.getByRole('button', { name: 'Recent' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const recent = canvas.getByRole('list', { name: 'Recent' })
    await expect(toggle).toHaveAttribute('aria-controls', recent.parentElement!.id)
    await expect(within(recent).getAllByRole('link')).toHaveLength(3)
    await userEvent.click(canvas.getByRole('button', { name: 'Show more' }))
    await expect(within(recent).getAllByRole('link')).toHaveLength(5)
    await userEvent.click(canvas.getByRole('button', { name: 'Show less' }))
    await expect(within(recent).getAllByRole('link')).toHaveLength(3)
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await expect(recent).not.toBeVisible()
    // Keyboard: Enter opens it again.
    toggle.focus()
    await userEvent.keyboard('{Enter}')
    await expect(recent).toBeVisible()
  },
}

/** The current page past a category's limit opens it, so the current page is never hidden. */
export const CurrentPastLimit: Story = {
  tags: ['!dev'],
  args: { header: undefined, footer: undefined, currentHref: '#r5' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Credit note CN-77' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('button', { name: 'Show less' })).toBeVisible()
  },
}

/** The icon rail: labels move into tooltips; the header and footer stay, as icons. */
export const Collapsible: Story = {
  play: async ({ args, canvas }) => {
    const toggle = canvas.getByRole('button', { name: 'Collapse sidebar' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await userEvent.click(toggle)
    await expect(args.onCollapsedChange).toHaveBeenLastCalledWith(true)
    const expand = canvas.getByRole('button', { name: 'Expand sidebar' })
    await expect(expand).toHaveAttribute('aria-expanded', 'false')
    const invoices = canvas.getByRole('link', { name: 'Invoices' })
    await expect(invoices).toHaveAttribute('aria-current', 'page')
    // Still findable by category name: the label is only visually hidden.
    await expect(canvas.getByRole('list', { name: 'Pinned' })).toBeInTheDocument()
    // Items without an icon, and the category they made up, are left out.
    await expect(canvas.queryByRole('list', { name: 'Recent' })).toBeNull()
    // The badge is hidden in the rail, so the count joins the name.
    await expect(canvas.getByRole('link', { name: 'Inbox, 12' })).toBeInTheDocument()
    // The header and footer rows keep their names, now that only the icon shows.
    await expect(canvas.getByRole('button', { name: 'Kafka Trading Co.' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Search' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Nguu Nguyen' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Help and support' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Notifications, 3' })).toBeVisible()
    // Keyboard focus shows the label as a tooltip. (Hovering the rail opens
    // the preview instead; see RailPreview.)
    const body = within(document.body)
    invoices.focus()
    await waitFor(() => expect(body.getByRole('tooltip')).toHaveTextContent('Invoices'))
    invoices.blur()
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull())
    // Keyboard focus on the expand button shows it over the logo.
    expand.focus()
    await waitFor(() => expect(getComputedStyle(expand).opacity).toBe('1'))
    await userEvent.keyboard('{Enter}')
    await expect(canvas.getByRole('button', { name: 'Collapse sidebar' })).toBeInTheDocument()
  },
}

export const Collapsed: Story = { args: { defaultCollapsed: true } }

/**
 * Hovering the rail floats the full sidebar over the page, as in the Claude
 * apps, while the rail keeps its place in the layout; the preview's button
 * docks it.
 */
export const RailPreview: Story = {
  args: { defaultCollapsed: true },
  play: async ({ args, canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    const slot = nav.parentElement!
    const rail = slot.getBoundingClientRect().width
    await expect(rail).toBeLessThan(100)
    await userEvent.hover(canvas.getByRole('link', { name: 'Invoices' }))
    // After the hover delay the full sidebar shows, floating: the slot keeps the rail's width.
    await waitFor(() => expect(nav.getBoundingClientRect().width).toBeGreaterThan(200))
    await expect(slot.getBoundingClientRect().width).toBeCloseTo(rail, 0)
    await expect(getComputedStyle(nav).position).toBe('absolute')
    const keep = canvas.getByRole('button', { name: 'Keep sidebar open' })
    await userEvent.click(keep)
    await expect(args.onCollapsedChange).toHaveBeenLastCalledWith(false)
    await waitFor(() => expect(getComputedStyle(nav).position).not.toBe('absolute'))
    await expect(canvas.getByRole('button', { name: 'Collapse sidebar' })).toHaveAttribute('aria-expanded', 'true')
  },
}

export const Plain: Story = {
  args: {
    brand: undefined,
    header: undefined,
    footer: undefined,
    isCollapsible: false,
    items: items.slice(0, 2),
    currentHref: '#inbox',
  },
}

/** Harsh content: a label with no spaces, and a category with nothing in it. */
export const LongContent: Story = {
  tags: ['!dev'],
  args: {
    header: undefined,
    items: [
      { label: 'Supercalifragilisticexpialidocious-invoice-reconciliation', href: '#long', icon: <Icon name="file" /> },
      { type: 'group', label: 'Empty', items: [], action: add('Add to Empty') },
    ],
    currentHref: '#long',
  },
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(nav.scrollWidth).toBeLessThanOrEqual(nav.clientWidth)
    await expect(canvas.getByRole('button', { name: 'Add to Empty' })).toBeInTheDocument()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Brand row', selector: 'nav > div:first-child', description: 'Optional: the logo, and the collapse button with isCollapsible.' },
  { name: 'Collapse button', selector: 'button[aria-expanded][aria-label$="sidebar"]', description: 'Folds the sidebar to the icon rail and back.' },
  { name: 'Header', selector: 'nav > div:nth-child(2)', description: 'Optional: a tenant switcher and search, as NavSidebarButtons.' },
  { name: 'Item', selector: 'a[href="#inbox"]', description: 'A link: icon, label, optional badge. A flush row of tier md.' },
  { name: 'Badge', selector: 'a[href="#inbox"] > span:last-child', description: 'Optional: a count or a short tag.' },
  { name: 'Current item', selector: 'a[aria-current="page"]', description: 'The page the reader is on: the selected fill and medium weight.' },
  { name: 'Category label', selector: 'button[aria-controls]:not([aria-haspopup])', description: 'Names the list; with isCollapsible, opens and closes it.' },
  { name: 'Category action', selector: 'button[aria-label="Add to Pinned"]', description: 'Optional: e.g. adds an item. Shows on hover and focus.' },
  { name: 'Show more', selector: 'nav ul + button', description: 'With limit: shows the rest of a long category.' },
  { name: 'Footer', selector: 'nav > div:last-child', description: 'Optional, pinned to the bottom: the account, notifications, help.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { currentHref: '#vat', items: itemsWithAction },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[0]).toHaveTextContent('Zweihänder')
    await expect(found[6]).toHaveTextContent('Pinned')
    await expect(found[9]).toHaveTextContent('Nguu Nguyen')
  },
}

/** One item, sized to its content, for the States table. */
export const Item: Story = {
  tags: ['!dev'],
  parameters: { bare: true },
  args: {
    brand: undefined,
    header: undefined,
    footer: undefined,
    isCollapsible: false,
    items: [{ label: 'Inbox', href: '#inbox', icon: <Icon name="info" />, badge: 12 }],
    currentHref: undefined,
  },
}

/** The same item, current. */
export const CurrentItem: Story = { ...Item, args: { ...Item.args, currentHref: '#inbox' } }

/** Guidelines, Do: short labels, each with an icon, grouped under a few names. */
export const DoGroupWithIcons: Story = {
  tags: ['!dev'],
  args: { brand: undefined, header: undefined, footer: undefined, isCollapsible: false, items: items.slice(0, 5) },
}

/** Guidelines, Don't: items without icons cannot collapse to a rail, and long labels get cut. */
export const DontLongLabelsNoIcons: Story = {
  tags: ['!dev'],
  args: {
    brand: undefined,
    header: undefined,
    footer: undefined,
    isCollapsible: false,
    currentHref: '#reports',
    items: [
      { label: 'Search across every workspace', href: '#search' },
      { label: 'Quarterly revenue reports for finance', href: '#reports' },
      { label: 'Customer onboarding checklist templates', href: '#onboarding' },
    ],
  },
}
