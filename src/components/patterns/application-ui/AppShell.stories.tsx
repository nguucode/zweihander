import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Search } from '@/components/inputs/Search'
import { Menu } from '@/components/navigation/Menu'
import { Sidebar, type SidebarEntry } from '@/components/navigation/Sidebar'
import { AppHeader, AppNav, AppShell } from './AppShell'
import { PageHeading } from './PageHeading'
import { Stats } from './Stats'

const entries: SidebarEntry[] = [
  { label: 'Dashboard', href: '#dashboard', icon: <Icon name="star" /> },
  { label: 'Projects', href: '#projects', icon: <Icon name="file" />, badge: '12' },
  { label: 'Team', href: '#team', icon: <Icon name="user" /> },
  { label: 'Calendar', href: '#calendar', icon: <Icon name="calendar" /> },
  {
    type: 'group',
    label: 'Your teams',
    items: [
      { label: 'Design', href: '#design', icon: <Icon name="more" /> },
      { label: 'Engineering', href: '#engineering', icon: <Icon name="more" /> },
    ],
  },
]

const brand = <strong style={{ fontSize: 'var(--text-heading-xs)' }}>Zweihänder</strong>

const sidebar = (collapsible = false) => (
  <Sidebar
    items={entries}
    currentHref="#dashboard"
    header={brand}
    isCollapsible={collapsible}
    defaultCollapsed={collapsible}
    style={{ blockSize: '100%' }}
  />
)

const headerEnd = (
  <>
    <Button variant="secondary" appearance="ghost" isIconOnly aria-label="Notifications">
      <Icon name="info" />
    </Button>
    <Menu
      align="end"
      trigger={
        <Button variant="secondary" appearance="ghost" isIconOnly aria-label="Account">
          <Avatar initials="AS" size="sm" />
        </Button>
      }
      items={[{ label: 'Your profile' }, { label: 'Settings' }, { type: 'separator' }, { label: 'Sign out' }]}
    />
  </>
)

const content = (
  <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
    <PageHeading
      title="Dashboard"
      description="What happened across your projects this month."
      actions={<Button startIcon={<Icon name="plus" />}>New project</Button>}
    />
    <Stats
      title="Last 30 days"
      stats={[
        { label: 'Active projects', value: '8', change: { value: '2', direction: 'up' } },
        { label: 'Open tasks', value: '134', change: { value: '12%', direction: 'down', isPositive: true } },
        { label: 'Team members', value: '24' },
      ]}
    />
  </div>
)

/**
 * The shell in a box of the given size: it lays out by its own width. Link
 * clicks are kept from navigating the test page; React events reach this
 * wrapper from the portalled drawer too.
 */
const box = (inlineSize: number) => [
  (Story: () => ReactNode) => (
    <div
      style={{ inlineSize, blockSize: 640, border: '1px solid var(--border)' }}
      onClickCapture={(e) => (e.target as HTMLElement).closest('a[href]') && e.preventDefault()}
    >
      {Story()}
    </div>
  ),
]

const meta = {
  title: 'Patterns/Application UI/App Shell',
  component: AppShell,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' }, layout: 'padded' },
  args: { children: content, style: { blockSize: '100%' } },
  argTypes: { children: { control: false }, sidebar: { control: false }, header: { control: false }, mobileNavigation: { control: false } },
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

/** A sidebar beside the content, a header with search and the account menu. */
export const WithSidebar: Story = {
  args: {
    sidebar: sidebar(),
    header: <AppHeader start={<Search aria-label="Search" placeholder="Search" />} end={headerEnd} />,
  },
  decorators: box(1100),
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(within(nav).getByRole('link', { name: 'Dashboard' })).toHaveAttribute('aria-current', 'page')
    // Wide: the sidebar is the navigation, so no menu button.
    await expect(canvas.queryByRole('button', { name: 'Open navigation' })).toBeNull()
    // The skip link targets the shell's own main, and moves focus to it.
    const main = canvas.getByRole('main')
    const skip = canvas.getByRole('link', { name: 'Skip to content' })
    await expect(skip).toHaveAttribute('href', `#${main.id}`)
    await userEvent.click(skip)
    await expect(main).toHaveFocus()
  },
}

/** The sidebar as an icon rail, with the labels one click away. */
export const CollapsedRail: Story = {
  args: {
    sidebar: sidebar(true),
    header: <AppHeader start={<Search aria-label="Search" placeholder="Search" />} end={headerEnd} />,
  },
  decorators: box(1100),
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    const narrow = nav.getBoundingClientRect().width
    await expect(narrow).toBeLessThan(100)
    // Collapsed, the links keep their names.
    await expect(within(nav).getByRole('link', { name: 'Projects, 12' })).toBeVisible()
    await userEvent.click(within(nav).getByRole('button', { name: /Expand/ }))
    await waitFor(() => expect(nav.getBoundingClientRect().width).toBeGreaterThan(narrow + 100))
  },
}

const topLinks = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Calendar', href: '#calendar' },
]

/** No sidebar: a logo and links in the header, which move into the drawer on a phone. */
export const TopNavigation: Story = {
  args: {
    header: <AppHeader start={<>{brand}<AppNav items={topLinks} currentHref="#dashboard" /></>} end={headerEnd} />,
    mobileNavigation: <Sidebar items={entries.slice(0, 4)} currentHref="#dashboard" header={brand} style={{ blockSize: '100%' }} />,
    mainId: 'content',
  },
  decorators: box(1100),
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(within(nav).getByRole('link', { name: 'Dashboard' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.queryByRole('button', { name: 'Open navigation' })).toBeNull()
    await expect(canvas.getByRole('main')).toHaveAttribute('id', 'content')
    await expect(canvas.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#content')
  },
}

/** On a phone the navigation is a drawer from the header's menu button; choosing a link closes it. */
export const Mobile: Story = {
  args: {
    sidebar: sidebar(),
    header: <AppHeader end={headerEnd} />,
  },
  decorators: box(390),
  play: async ({ canvas }) => {
    // Hidden, so out of the accessibility tree too: no second, unreachable navigation.
    await expect(canvas.queryByRole('navigation', { name: 'Main' })).toBeNull()
    const menu = canvas.getByRole('button', { name: 'Open navigation' })
    await expect(menu).toHaveAttribute('aria-haspopup', 'dialog')
    await expect(menu).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(menu)
    const drawer = await within(document.body).findByRole('dialog', { name: 'Navigation' })
    await expect(menu).toHaveAttribute('aria-expanded', 'true')
    await userEvent.click(within(drawer).getByRole('link', { name: 'Team' }))
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull())
    // Focus is back on the button that opened it.
    await waitFor(() => expect(canvas.getByRole('button', { name: 'Open navigation' })).toHaveFocus())
  },
}

/** The top-navigation shell on a phone: links are in the drawer, not squeezed into the bar. */
export const TopNavigationMobile: Story = {
  ...TopNavigation,
  decorators: box(390),
  play: async ({ canvas }) => {
    // Hidden, so out of the accessibility tree too: no second, unreachable navigation.
    await expect(canvas.queryByRole('navigation', { name: 'Main' })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Open navigation' }))
    const drawer = await within(document.body).findByRole('dialog', { name: 'Navigation' })
    await expect(within(drawer).getByRole('link', { name: /^Projects/ })).toBeVisible()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull())
  },
}

/**
 * A sidebar that is switched off, e.g. `sidebar={isAdmin && <Sidebar />}`:
 * no sidebar column, no drawer and no menu button, as with no sidebar at all.
 */
export const WithoutNavigation: Story = {
  args: {
    sidebar: false,
    mobileNavigation: null,
    header: <AppHeader start={brand} end={headerEnd} />,
  },
  decorators: box(390),
  play: async ({ canvas }) => {
    // A menu button here would open nothing.
    await expect(canvas.queryByRole('button', { name: 'Open navigation' })).toBeNull()
    await expect(canvas.getByRole('main')).toBeVisible()
  },
}
