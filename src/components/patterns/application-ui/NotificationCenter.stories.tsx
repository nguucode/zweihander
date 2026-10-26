import { useState, type MouseEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Menu } from '@/components/navigation/Menu'
import type { FeedItem } from './Feed'
import { NotificationCenter, NotificationPanel, type NotificationPanelProps } from './NotificationCenter'
import { TopBar } from './TopBar'

const body = () => within(document.body)

const now = new Date(2026, 9, 27, 12)
const ago = (minutes: number) => new Date(now.getTime() - minutes * 60_000)
const relative = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
/** "5 minutes ago", "3 hours ago", "yesterday": a notification's age matters more than its date. */
const formatTime = (at: Date) => {
  const minutes = Math.round((at.getTime() - now.getTime()) / 60_000)
  if (minutes > -60) return relative.format(minutes, 'minute')
  if (minutes > -60 * 24) return relative.format(Math.round(minutes / 60), 'hour')
  return relative.format(Math.round(minutes / (60 * 24)), 'day')
}

const notifications: FeedItem[] = [
  { id: 1, media: <Avatar size="sm" initials="LT" color="teal" />, actor: 'Linh Tran', action: <>approved <strong>PO-118</strong></>, at: ago(5), href: '#po-118', isUnread: true },
  { id: 2, media: <Icon name="warning" />, actor: 'INV-2039', action: 'is 14 days overdue', at: ago(180), href: '#inv-2039', isUnread: true },
  { id: 3, media: <Avatar size="sm" initials="NH" color="violet" />, actor: 'Noor Haddad', action: <>mentioned you on <strong>Harbor Lights</strong></>, at: ago(60 * 26), href: '#harbor-lights', comment: 'Can you check the second-phase budget before Friday?', isUnread: true },
  { id: 4, media: <Icon name="success" />, actor: 'September close', action: 'is ready to review', at: ago(60 * 24 * 3), href: '#close' },
  { id: 5, media: <Icon name="file" />, actor: 'Tomas Lindqvist', action: <>shared <strong>Q3 forecast.xlsx</strong></>, at: ago(60 * 24 * 6), href: '#q3-forecast' },
]

const settings = (
  <Menu
    align="end"
    trigger={
      <Button size="sm" variant="secondary" appearance="ghost" isIconOnly aria-label="More">
        <Icon name="more" />
      </Button>
    }
    items={[
      { label: 'View all notifications', href: '#notifications' },
      { label: 'Notification settings', href: '#settings' },
    ]}
  />
)

/** The story owns the data, as an app would: following a link marks that one read, and Mark all as read marks the rest. */
function useNotifications() {
  const [items, setItems] = useState(notifications)
  const markRead = (id?: FeedItem['id']) => setItems((all) => all.map((item) => (id === undefined || item.id === id ? { ...item, isUnread: false } : item)))
  return {
    items: items.map((item) => ({
      ...item,
      // An app would navigate too; the story stays put so the change shows.
      onClick: (e: MouseEvent) => {
        e.preventDefault()
        markRead(item.id)
      },
    })),
    onMarkAllRead: () => markRead(),
    actions: settings,
    formatTime,
  }
}

function LivePanel(props: Partial<NotificationPanelProps>) {
  return <NotificationPanel {...useNotifications()} {...props} />
}

function Live() {
  return <NotificationCenter {...useNotifications()} />
}

const meta = {
  title: 'Patterns/Application UI/Notification Center',
  tags: ['experimental'],
  component: NotificationCenter,
  parameters: { layout: 'padded' },
  args: { items: notifications, formatTime },
  argTypes: {
    items: {
      description:
        'The notifications, newest first: Feed items (`actor`, `action`, `at`, and `media`, `comment`, `id`), with `href` to make the row a link and `isUnread` for the dot and the count.',
      control: false,
    },
    onMarkAllRead: { description: 'Shows "Mark all as read" in the header, disabled while nothing is unread. Marking is yours: set `isUnread` to false.', control: false },
    actions: { description: 'More header actions after "Mark all as read", such as a link to notification settings. Rendered as given.', control: false },
    hasTabs: { description: 'All and Unread tabs above the list; Unread carries the count.', table: { defaultValue: { summary: 'false' } } },
    empty: { description: 'Shown instead of the list when there are no notifications.', control: 'text', table: { defaultValue: { summary: '"No notifications yet."' } } },
    emptyUnread: { description: 'Shown on the Unread tab when everything is read.', control: 'text', table: { defaultValue: { summary: '"You are all caught up."' } } },
    formatTime: { description: 'How the time reads. A relative time ("5 minutes ago") suits notifications; the `<time>` element carries the ISO moment either way.', control: false },
    title: { description: "The panel's heading.", control: 'text', table: { defaultValue: { summary: '"Notifications"' } } },
    headingLevel: { description: "The heading's level, to fit the page outline.", control: 'select', options: [2, 3, 4], table: { defaultValue: { summary: '2' } } },
    label: { description: 'The bell\'s accessible name; the unread count is added to it ("Notifications, 3 unread").', control: 'text', table: { defaultValue: { summary: '"Notifications"' } } },
    side: { description: 'Which side of the bell the panel opens on.', control: 'select', options: ['top', 'right', 'bottom', 'left'], table: { defaultValue: { summary: '"bottom"' } } },
    align: { description: 'How the panel lines up with the bell.', control: 'select', options: ['start', 'center', 'end'], table: { defaultValue: { summary: '"end"' } } },
    open: { description: 'Controlled open state.', control: false },
    defaultOpen: { description: 'Open on first render.', table: { defaultValue: { summary: 'false' } } },
    onOpenChange: { description: 'Called when the panel opens or closes.', control: false },
    container: { description: 'Where the panel renders instead of `<body>`.', control: false },
  },
} satisfies Meta<typeof NotificationCenter>

export default meta
type Story = StoryObj<typeof meta>

/** A bell at the end of the Top Bar. It names the unread count; the panel opens under it. */
export const Default: Story = {
  render: () => <TopBar end={<Live />} />,
  play: async ({ canvas }) => {
    const bell = canvas.getByRole('button', { name: 'Notifications, 3 unread' })
    // The badge shows the count; the name says it.
    await expect(bell).toHaveTextContent('3')
    await userEvent.click(bell)
    const panel = await body().findByRole('dialog', { name: 'Notifications' })
    // Focus moves into the panel, and a heading names it.
    await waitFor(() => expect(panel.contains(document.activeElement)).toBe(true))
    // The popup fades in, so wait for it to show.
    await waitFor(() => expect(within(panel).getByRole('heading', { level: 2, name: 'Notifications' })).toBeVisible())
    // Each row is a link; unread ones say so.
    const rows = within(panel).getAllByRole('listitem')
    await expect(rows).toHaveLength(5)
    await expect(within(rows[0]).getByRole('link')).toHaveAttribute('href', '#po-118')
    await expect(within(rows[0]).getByRole('img', { name: 'Unread' })).toBeVisible()
    await expect(within(rows[3]).queryByRole('img', { name: 'Unread' })).toBeNull()
    // Following a link marks that one read.
    await userEvent.click(within(rows[0]).getByRole('link'))
    await waitFor(() => expect(within(rows[0]).queryByRole('img', { name: 'Unread' })).toBeNull())
    await expect(canvas.getByRole('button', { name: 'Notifications, 2 unread' })).toBeInTheDocument()
    // Mark all as read: the dots go, the button disables, the bell's count goes.
    const markAll = within(panel).getByRole('button', { name: 'Mark all as read' })
    await userEvent.click(markAll)
    await waitFor(() => expect(within(panel).queryAllByRole('img', { name: 'Unread' })).toHaveLength(0))
    await expect(markAll).toBeDisabled()
    // Escape closes it and returns focus to the bell, now without a count.
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    const quiet = canvas.getByRole('button', { name: 'Notifications' })
    await waitFor(() => expect(quiet).toHaveFocus())
    await expect(quiet).not.toHaveTextContent(/\d/)
  },
}

/** The panel on its own, with All and Unread tabs: for a Drawer, or a column of a page. */
export const WithTabs: Story = {
  render: () => (
    <div style={{ maxInlineSize: 400 }}>
      <LivePanel hasTabs />
    </div>
  ),
  play: async ({ canvas }) => {
    const unreadTab = canvas.getByRole('tab', { name: 'Unread 3' })
    await expect(canvas.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true')
    await userEvent.click(unreadTab)
    // The All panel fades out first, so wait until only Unread's is left.
    const panel = await waitFor(() => canvas.getByRole('tabpanel'))
    await expect(within(panel).getAllByRole('listitem')).toHaveLength(3)
    await userEvent.click(canvas.getByRole('button', { name: 'Mark all as read' }))
    await waitFor(() => expect(within(canvas.getByRole('tabpanel')).getByText('You are all caught up.')).toBeVisible())
    await expect(canvas.getByRole('tab', { name: 'Unread' })).toBeVisible()
  },
}

/** Open from the start, the way it looks under the bell. */
export const Open: Story = {
  args: { defaultOpen: true, onMarkAllRead: () => {}, actions: settings },
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'flex-end', minBlockSize: 560 }}>
      <NotificationCenter {...args} />
    </div>
  ),
  play: async () => {
    const panel = await body().findByRole('dialog', { name: 'Notifications' })
    // As wide as a Popover goes, never past the window.
    await waitFor(() => expect(panel.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth))
  },
}

/** Nothing yet: the line in place of the list, no count on the bell, Mark all as read disabled. */
export const Empty: Story = {
  render: (args) => (
    <div style={{ maxInlineSize: 400 }}>
      <NotificationPanel items={[]} formatTime={args.formatTime} onMarkAllRead={() => {}} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.getByText('No notifications yet.')).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Mark all as read' })).toBeDisabled()
  },
}

/** Many notifications in a short window: the list scrolls under the pinned header. */
export const ManyItems: Story = {
  args: {
    defaultOpen: true,
    onMarkAllRead: () => {},
    items: Array.from({ length: 30 }, (_, i) => ({ ...notifications[i % notifications.length], id: i })),
  },
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <NotificationCenter {...args} />
    </div>
  ),
  play: async () => {
    const panel = await body().findByRole('dialog', { name: 'Notifications' })
    await waitFor(() => expect(panel.scrollHeight).toBeGreaterThan(panel.clientHeight))
    const heading = within(panel).getByRole('heading', { name: 'Notifications' })
    panel.scrollTop = panel.scrollHeight
    // The header stays at the top of the popup while the list scrolls.
    await waitFor(() => expect(heading.getBoundingClientRect().top).toBeGreaterThanOrEqual(panel.getBoundingClientRect().top))
    await expect(heading.getBoundingClientRect().bottom).toBeLessThanOrEqual(panel.getBoundingClientRect().bottom)
  },
}

/** Harsh content: a name and a document with no spaces in a narrow panel. They wrap, never overflow; the dot keeps its column. */
export const LongContent: Story = {
  render: (args) => (
    <div data-testid="column" style={{ inlineSize: 280 }}>
      <NotificationPanel
        formatTime={args.formatTime}
        items={[
          {
            media: <Icon name="file" />,
            actor: 'Maximiliana Wolfeschlegelsteinhausenbergerdorff',
            action: <>shared <strong>Quarterly_reconciliation_export_for_the_northern_region_v2_final.xlsx</strong></>,
            at: ago(3),
            href: '#file',
            isUnread: true,
          },
          ...notifications,
        ]}
        onMarkAllRead={() => {}}
        actions={settings}
      />
    </div>
  ),
  play: async ({ canvasElement, canvas }) => {
    const column = canvasElement.querySelector<HTMLElement>('[data-testid="column"]')!
    await expect(column.scrollWidth).toBeLessThanOrEqual(column.clientWidth)
    const row = canvas.getAllByRole('listitem')[0]
    const dot = within(row).getByRole('img', { name: 'Unread' }).getBoundingClientRect()
    const sentence = row.querySelector('p')!.getBoundingClientRect()
    await expect(dot.left).toBeGreaterThanOrEqual(sentence.right)
  },
}

/** Dark mode, with tabs, so the accessibility check covers both themes. */
export const Dark: Story = {
  ...WithTabs,
  play: undefined,
  globals: { theme: 'dark' },
}
