import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Sidebar, type SidebarEntry } from './Sidebar'

const items: SidebarEntry[] = [
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
  title: 'Components/Navigation/Sidebar',
  tags: ['experimental'],
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  args: {
    items,
    currentHref: '#atlas',
    header: <strong style={{ paddingInline: 'var(--space-3)' }}>Zweihänder</strong>,
    footer: <span style={{ paddingInline: 'var(--space-3)', color: 'var(--muted-foreground)' }}>sam@atlas.dev</span>,
    onCollapsedChange: fn(),
  },
  argTypes: { items: { control: false }, header: { control: false }, footer: { control: false } },
  decorators: [(Story) => <div style={{ blockSize: '32rem', display: 'flex' }}>{Story()}</div>],
} satisfies Meta<typeof Sidebar>

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
