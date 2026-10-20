import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy } from '../../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { NavSidebar, type NavSidebarEntry } from './NavSidebar'

const items: NavSidebarEntry[] = [
  { label: 'Search', href: '#search', icon: <Icon name="search" /> },
  { label: 'Inbox', href: '#inbox', icon: <Icon name="info" />, badge: 12 },
  {
    type: 'group',
    label: 'Projects',
    items: [
      { label: 'Atlas', href: '#atlas', icon: <Icon name="star" /> },
      { label: 'Billing revamp', href: '#billing', icon: <Icon name="calendar" /> },
      { label: 'Onboarding', href: '#onboarding', icon: <Icon name="user" /> },
    ],
  },
  { type: 'group', label: 'Workspace', items: [{ label: 'Settings', href: '#settings', icon: <Icon name="menu" /> }] },
]

const meta = {
  title: 'Patterns/Application UI/Nav Sidebar',
  tags: ['beta'],
  component: NavSidebar,
  parameters: { layout: 'fullscreen' },
  args: {
    items,
    currentHref: '#atlas',
    header: <strong style={{ paddingInline: 'var(--space-3)' }}>Zweihänder</strong>,
    footer: <span style={{ paddingInline: 'var(--space-3)', color: 'var(--muted-foreground)' }}>sam@atlas.dev</span>,
    onCollapsedChange: fn(),
  },
  // Every prop is described here: these are the docs' API table and the
  // Playground's props panel.
  argTypes: {
    items: {
      description:
        "The links, as data. An item is `{ label, href, icon?, badge?, render? }`; a group is `{ type: 'group', label, items }`. `render` replaces the `<a>`, e.g. with a router's `<Link />`.",
      control: false,
      table: { type: { summary: 'NavSidebarEntry[]' } },
    },
    currentHref: {
      description: 'The `href` of the page the reader is on. That item gets the selected fill and `aria-current="page"`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    header: {
      description: 'Above the items: the product name, a workspace switcher. Hidden in the rail.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    footer: {
      description: 'Pinned to the bottom: the signed-in user, help. Hidden in the rail.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    isCollapsed: {
      description: 'Controlled: the icon rail, labels in tooltips. Every item needs an `icon`. Pair with `onCollapsedChange`.',
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
      description: 'Shows a button in the header that collapses and expands the sidebar.',
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
      parameters.bare ? Story() : <div style={{ blockSize: '32rem', display: 'flex' }}>{Story()}</div>,
  ],
} satisfies Meta<typeof NavSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(within(nav).getByRole('link', { name: 'Atlas' })).toHaveAttribute('aria-current', 'page')
    await expect(within(nav).getByRole('link', { name: /Inbox/ })).not.toHaveAttribute('aria-current')
    // A group's name names its list.
    await expect(within(nav).getByRole('list', { name: 'Projects' })).toBeVisible()
    await expect(within(nav).getByText('12')).toBeVisible()
  },
}

/** The icon rail: labels move into tooltips and stay the links' names. */
export const Collapsible: Story = {
  args: { isCollapsible: true },
  play: async ({ args, canvas }) => {
    const toggle = canvas.getByRole('button', { name: 'Collapse sidebar' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await userEvent.click(toggle)
    await expect(args.onCollapsedChange).toHaveBeenLastCalledWith(true)
    await expect(canvas.getByRole('button', { name: 'Expand sidebar' })).toHaveAttribute('aria-expanded', 'false')
    const atlas = canvas.getByRole('link', { name: 'Atlas' })
    await expect(atlas).toHaveAttribute('aria-current', 'page')
    // Still findable by group name: the label is only visually hidden, not display: none.
    await expect(canvas.getByRole('list', { name: 'Projects' })).toBeInTheDocument()
    await expect(canvas.getByText('Projects')).toBeVisible()
    // The badge is hidden in the rail, so the count joins the name.
    await expect(canvas.getByRole('link', { name: 'Inbox, 12' })).toBeInTheDocument()
    // Hover shows the label as a tooltip (after the hover delay).
    const body = within(document.body)
    await userEvent.hover(atlas)
    await waitFor(() => expect(body.getByRole('tooltip')).toHaveTextContent('Atlas'))
    await userEvent.unhover(atlas)
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull())
    // Keyboard focus shows it too, with the same text as the name, badge included.
    toggle.focus()
    await userEvent.tab() // Search
    await userEvent.tab()
    await expect(canvas.getByRole('link', { name: 'Inbox, 12' })).toHaveFocus()
    await waitFor(() => expect(body.getByRole('tooltip')).toHaveTextContent('Inbox, 12'))
  },
}

export const Collapsed: Story = { args: { defaultCollapsed: true, isCollapsible: true } }

export const Plain: Story = {
  args: { header: undefined, footer: undefined, items: items.slice(0, 2), currentHref: '#inbox' },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Header', selector: 'nav > div:first-child > div:first-child', description: 'Optional: the product name, a workspace switcher.' },
  { name: 'Collapse button', selector: 'button[aria-expanded]', description: 'With isCollapsible: folds the sidebar to the icon rail and back.' },
  { name: 'Item', selector: 'a[href="#search"]', description: 'A link: icon, label, optional badge. A flush row of tier md.' },
  { name: 'Icon', selector: 'a[href="#search"] > span:first-child', description: 'Decorative. Required for the rail, where it is all that shows.' },
  { name: 'Badge', selector: 'a[href="#inbox"] > span:last-child', description: 'Optional: a count or a short tag.' },
  { name: 'Group label', selector: 'div:has(> ul[aria-labelledby]) > div:first-child', description: 'Names the group\'s list. A label, not a heading.' },
  { name: 'Current item', selector: 'a[aria-current="page"]', description: 'The page the reader is on: the selected fill and medium weight.' },
  { name: 'Footer', selector: 'nav > div:last-child', description: 'Optional, pinned to the bottom: the signed-in user, help.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { isCollapsible: true },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[0]).toHaveTextContent('Zweihänder')
    await expect(found[5]).toHaveTextContent('Projects')
    await expect(found[7]).toHaveTextContent('sam@atlas.dev')
  },
}

/** One item, sized to its content, for the States table. */
export const Item: Story = {
  tags: ['!dev'],
  parameters: { bare: true },
  args: {
    header: undefined,
    footer: undefined,
    items: [{ label: 'Inbox', href: '#inbox', icon: <Icon name="info" />, badge: 12 }],
    currentHref: undefined,
  },
}

/** The same item, current. */
export const CurrentItem: Story = { ...Item, args: { ...Item.args, currentHref: '#inbox' } }

/** Guidelines, Do: short labels, each with an icon, grouped under a few names. */
export const DoGroupWithIcons: Story = {
  tags: ['!dev'],
  args: { header: undefined, footer: undefined },
}

/** Guidelines, Don't: items without icons cannot collapse to a rail, and long labels get cut. */
export const DontLongLabelsNoIcons: Story = {
  tags: ['!dev'],
  args: {
    header: undefined,
    footer: undefined,
    currentHref: '#reports',
    items: [
      { label: 'Search across every workspace', href: '#search' },
      { label: 'Quarterly revenue reports for finance', href: '#reports' },
      { label: 'Customer onboarding checklist templates', href: '#onboarding' },
    ],
  },
}
