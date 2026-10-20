import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { CANVASES, CONTENT_STYLES, Theme, type Canvas, type ContentStyle, type Density } from '@/theme/Theme'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Card } from '@/components/data-display/Card'
import { Search } from '@/components/inputs/Search'
import { Menu } from '@/components/navigation/Menu'
import { Sidebar, type SidebarEntry } from '@/components/navigation/Sidebar'
import { AppHeader, AppNav, AppShell, type AppShellLayout, type AppShellSurface } from './AppShell'
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

const brand = (
  <strong data-testid="brand" style={{ fontSize: 'var(--text-heading-xs)' }}>
    Zweihänder
  </strong>
)

const account = (
  <Menu
    align="start"
    trigger={
      <Button variant="secondary" appearance="ghost" startIcon={<Avatar initials="AS" size="sm" />}>
        Ana Silva
      </Button>
    }
    items={[{ label: 'Your profile' }, { label: 'Settings' }, { type: 'separator' }, { label: 'Sign out' }]}
  />
)

/** In the sidebar layout there is no top bar, so search sits in the sidebar's header and the account in its footer. */
const sidebar = (collapsible = false, withTopBarItems = true) => (
  <Sidebar
    items={entries}
    currentHref="#dashboard"
    header={withTopBarItems && !collapsible ? <Search aria-label="Search" placeholder="Search" /> : undefined}
    footer={withTopBarItems && !collapsible ? account : undefined}
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

const topBar = <AppHeader start={<Search aria-label="Search" placeholder="Search" />} end={headerEnd} />

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

/** Page blocks as Cards with appearance="surface": raised on the canvas under contentStyle="card", ruled-off sections under "flat". */
const blocks = (
  <div style={{ display: 'grid', gap: 'var(--space-group)' }}>
    <PageHeading title="Dashboard" description="What happened across your projects this month." />
    <div style={{ display: 'grid', gap: 'var(--space-group)', gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))' }}>
      {[
        ['Active projects', '8'],
        ['Open tasks', '134'],
        ['Team members', '24'],
      ].map(([label, value]) => (
        <Card key={label} appearance="surface" size="sm" data-testid="block">
          <span style={{ color: 'var(--muted-foreground)' }}>{label}</span>
          <strong style={{ fontSize: 'var(--text-heading-sm)' }}>{value}</strong>
        </Card>
      ))}
    </div>
    <Card appearance="surface" size="sm">
      <strong>Recent activity</strong>
      <span style={{ color: 'var(--muted-foreground)' }}>Ledger import finished for 3 projects.</span>
    </Card>
  </div>
)

/** A Theme around the story, for the canvas, the content style and density. */
const themed = (props: { canvas?: Canvas; contentStyle?: ContentStyle; density?: Density }) => (Story: () => ReactNode) => (
  <Theme {...props} style={{ blockSize: '100%' }}>
    {Story()}
  </Theme>
)

/** The logo's left edge against the sidebar icons' left edge: they line up in either layout. */
const logoOffset = (canvasElement: HTMLElement) => {
  const icon = canvasElement.querySelector('nav[aria-label="Main"] a svg')!
  return canvasElement.querySelector('[data-testid="brand"]')!.getBoundingClientRect().left - icon.getBoundingClientRect().left
}
/** The logo's centre line, from the shell's top: half a top bar (--control-md plus two --space-cluster) in either layout. */
const logoMiddle = (canvasElement: HTMLElement) => {
  const shell = canvasElement.querySelector('main')!.closest('[class*="shell"]')!
  const logo = canvasElement.querySelector('[data-testid="brand"]')!.getBoundingClientRect()
  return logo.top + logo.height / 2 - shell.getBoundingClientRect().top
}

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
  tags: ['experimental'],
  component: AppShell,
  parameters: { layout: 'padded' },
  args: { children: content, style: { blockSize: '100%' } },
  argTypes: {
    layout: {
      description: '`sidebar`: the sidebar runs the full height, no top bar on wide screens. `top-bar`: the header runs the full width above the sidebar and the content.',
      control: 'inline-radio',
      options: ['sidebar', 'top-bar'],
      table: { type: { summary: "'sidebar' | 'top-bar'" }, defaultValue: { summary: "'sidebar'" } },
    },
    topBarSurface: {
      description: 'The header on the card colour (`solid`) or on the canvas (`transparent`).',
      control: 'inline-radio',
      options: ['solid', 'transparent'],
      table: { type: { summary: "'solid' | 'transparent'" }, defaultValue: { summary: "'solid'" } },
    },
    sidebarSurface: {
      description: 'The sidebar on the card colour (`solid`) or on the canvas (`transparent`).',
      control: 'inline-radio',
      options: ['solid', 'transparent'],
      table: { type: { summary: "'solid' | 'transparent'" }, defaultValue: { summary: "'transparent'" } },
    },
    brand: { description: 'The logo. The shell places it in the same spot in either layout.', control: false },
    children: { control: false },
    sidebar: { control: false },
    header: { control: false },
    mobileNavigation: { control: false },
  },
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The defaults: the sidebar runs the full height on the neutral canvas, with
 * search and the account in it and no top bar; the page is one flat surface.
 */
export const WithSidebar: Story = {
  args: { brand, sidebar: sidebar() },
  decorators: box(1100),
  play: async ({ canvas, canvasElement }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(within(nav).getByRole('link', { name: 'Dashboard' })).toHaveAttribute('aria-current', 'page')
    // Wide: the sidebar is the navigation, so no menu button and no top bar.
    await expect(canvas.queryByRole('button', { name: 'Open navigation' })).toBeNull()
    // The shell's header is the first <header>; PageHeading inside the page is another.
    await expect(canvasElement.querySelector('header')).not.toBeVisible()
    // The logo lines up with the sidebar's icons: two --space-inline in.
    await expect(logoOffset(canvasElement)).toBeCloseTo(0, 0)
    // Rendered once, and on the same centre line in either layout.
    await expect(canvasElement.querySelectorAll('[data-testid="brand"]')).toHaveLength(1)
    await expect(logoMiddle(canvasElement)).toBeCloseTo(28, 0)
    // The skip link targets the shell's own main, and moves focus to it.
    const main = canvas.getByRole('main')
    const skip = canvas.getByRole('link', { name: 'Skip to content' })
    await expect(skip).toHaveAttribute('href', `#${main.id}`)
    await userEvent.click(skip)
    await expect(main).toHaveFocus()
  },
}

/** The header runs the full width above the sidebar; the logo stays where it was in the sidebar layout. */
export const TopBar: Story = {
  args: {
    layout: 'top-bar',
    sidebarSurface: 'solid',
    brand,
    sidebar: sidebar(false, false),
    header: topBar,
  },
  decorators: box(1100),
  play: async ({ canvasElement }) => {
    const bar = canvasElement.querySelector('header')!
    const shell = canvasElement.querySelector('main')!.closest('[class*="shell"]')!
    await expect(bar.getBoundingClientRect().width).toBeCloseTo(shell.getBoundingClientRect().width, 0)
    await expect(logoOffset(canvasElement)).toBeCloseTo(0, 0)
    // Rendered once, and on the same centre line in either layout.
    await expect(canvasElement.querySelectorAll('[data-testid="brand"]')).toHaveLength(1)
    await expect(logoMiddle(canvasElement)).toBeCloseTo(28, 0)
  },
}

/** Compact density: the bar, the sidebar's width and the logo's place all follow it. */
export const Compact: Story = {
  ...WithSidebar,
  decorators: [themed({ density: 'compact' }), ...box(1100)],
  play: async ({ canvasElement }) => {
    await expect(logoOffset(canvasElement)).toBeCloseTo(0, 0)
    // Rendered once, and on the same centre line in either layout.
    await expect(canvasElement.querySelectorAll('[data-testid="brand"]')).toHaveLength(1)
    await expect(logoMiddle(canvasElement)).toBeCloseTo(22, 0)
  },
}

/**
 * contentStyle="card" on a tinted canvas: the page sits on the canvas and its
 * blocks are raised Cards; the sidebar is transparent on the tint.
 */
export const CardOnTint: Story = {
  args: {
    layout: 'top-bar',
    brand,
    sidebar: sidebar(false, false),
    header: topBar,
    children: blocks,
  },
  decorators: [themed({ canvas: 'tinted', contentStyle: 'card' }), ...box(1100)],
  play: async ({ canvas }) => {
    // No page surface: the main is see-through, each block carries the card colour.
    await expect(getComputedStyle(canvas.getByRole('main')).backgroundColor).toBe('rgba(0, 0, 0, 0)')
    const block = canvas.getAllByTestId('block')[0]
    await expect(getComputedStyle(block).backgroundColor).not.toBe('rgba(0, 0, 0, 0)')
  },
}

/** On a plain canvas a transparent piece keeps its edge, since no fill marks it. */
export const TransparentOnPlain: Story = {
  args: {
    layout: 'top-bar',
    topBarSurface: 'transparent',
    brand,
    sidebar: sidebar(false, false),
    header: topBar,
    children: blocks,
  },
  decorators: [themed({ canvas: 'plain', contentStyle: 'card' }), ...box(1100)],
  play: async ({ canvas, canvasElement }) => {
    const top = canvasElement.querySelector('header')!.parentElement!
    await expect(getComputedStyle(top).borderBottomColor).not.toBe('rgba(0, 0, 0, 0)')
    const side = canvas.getByRole('navigation', { name: 'Main' }).parentElement!
    await expect(getComputedStyle(side).borderInlineEndColor).not.toBe('rgba(0, 0, 0, 0)')
  },
}

type Combo = { id: number; layout: AppShellLayout; top?: AppShellSurface; nav: AppShellSurface; canvas: Canvas; contentStyle: ContentStyle }
/** The 24 combinations in use, numbered as on the review sheet; the other 12 do not occur in real products. */
const COMBOS: Combo[] = []
{
  const structures: [AppShellLayout, AppShellSurface | undefined, AppShellSurface][] = [
    ['sidebar', undefined, 'solid'],
    ['sidebar', undefined, 'transparent'],
    ['top-bar', 'solid', 'solid'],
    ['top-bar', 'solid', 'transparent'],
    ['top-bar', 'transparent', 'solid'],
    ['top-bar', 'transparent', 'transparent'],
  ]
  const cut = new Set([2, 4, 6, 8, 14, 20, 26, 27, 28, 29, 30, 32])
  let id = 0
  for (const [layout, top, nav] of structures)
    for (const canvas of CANVASES)
      for (const contentStyle of CONTENT_STYLES) {
        id += 1
        if (!cut.has(id)) COMBOS.push({ id, layout, top, nav, canvas, contentStyle })
      }
}

/** Every combination in use, small. Rules: no plain canvas with flat content; no transparent top bar over a solid sidebar (except where it looks the same, #25); no solid full-height sidebar with flat content. */
export const Combinations: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-group)', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', padding: 'var(--space-group)' }}>
      {COMBOS.map((c) => (
        <figure key={c.id} style={{ margin: 0, display: 'grid', gap: 'var(--space-inline)' }}>
          {/* Laid out at 1100px so the shell is wide enough for its sidebar, then scaled down. */}
          <div style={{ aspectRatio: '1100 / 700', overflow: 'hidden', border: '1px solid var(--border)', borderRadius: 'var(--radius-field)', containerType: 'inline-size' }} aria-hidden="true" inert>
            <Theme canvas={c.canvas} contentStyle={c.contentStyle} style={{ inlineSize: 1100, blockSize: 700, transformOrigin: '0 0', transform: 'scale(calc(100cqi / 1100px))' }}>
              <AppShell
                layout={c.layout}
                topBarSurface={c.top}
                sidebarSurface={c.nav}
                brand={<strong>Zweihänder</strong>}
                sidebar={<Sidebar items={entries} currentHref="#dashboard" style={{ blockSize: '100%' }} />}
                style={{ blockSize: '100%' }}
              >
                {blocks}
              </AppShell>
            </Theme>
          </div>
          <figcaption style={{ fontSize: 'var(--text-body-sm)', color: 'var(--muted-foreground)' }}>
            <strong style={{ color: 'var(--foreground)' }}>#{String(c.id).padStart(2, '0')}</strong> {c.layout}
            {c.top && ` · top ${c.top}`} · nav {c.nav} · {c.canvas} · {c.contentStyle}
          </figcaption>
        </figure>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelectorAll('figure')).toHaveLength(24)
  },
}

/** The sidebar as an icon rail, with the labels one click away. */
export const CollapsedRail: Story = {
  args: {
    brand,
    sidebar: sidebar(true),
    header: topBar,
  },
  decorators: box(1100),
  play: async ({ canvas, canvasElement }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    const narrow = nav.getBoundingClientRect().width
    await expect(narrow).toBeLessThan(100)
    // The logo keeps its place in the rail, cut to the rail's width.
    await expect(logoOffset(canvasElement)).toBeCloseTo(0, 0)
    await expect(logoMiddle(canvasElement)).toBeCloseTo(28, 0)
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
    layout: 'top-bar',
    brand,
    header: <AppHeader start={<AppNav items={topLinks} currentHref="#dashboard" />} end={headerEnd} />,
    mobileNavigation: <Sidebar items={entries.slice(0, 4)} currentHref="#dashboard" style={{ blockSize: '100%' }} />,
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
    brand,
    header: <AppHeader end={headerEnd} />,
  },
  decorators: box(390),
  play: async ({ canvas }) => {
    // A menu button here would open nothing.
    await expect(canvas.queryByRole('button', { name: 'Open navigation' })).toBeNull()
    await expect(canvas.getByRole('main')).toBeVisible()
  },
}
