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
  component: Sidebar,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' }, layout: 'fullscreen' },
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
    // Still findable by group name.
    await expect(canvas.getByRole('list', { name: 'Projects' })).toBeInTheDocument()
    // The badge is hidden in the rail, so the count joins the name.
    await expect(canvas.getByRole('link', { name: 'Inbox, 12' })).toBeInTheDocument()
    // Keyboard focus shows the label as a tooltip.
    atlas.focus()
    await waitFor(() => expect(within(document.body).getByRole('tooltip')).toHaveTextContent('Atlas'))
  },
}

export const Collapsed: Story = { args: { defaultCollapsed: true, isCollapsible: true } }

export const Plain: Story = {
  args: { header: undefined, footer: undefined, items: items.slice(0, 2), currentHref: '#inbox' },
}
