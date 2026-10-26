import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { CANVASES, CONTENT_STYLES, Theme, type Canvas, type ContentStyle, type Density } from '@/theme/Theme'
import { Kbd } from '@/components/atomic-elements/Kbd'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Card } from '@/components/data-display/Card'
import { Search } from '@/components/inputs/Search'
import { Menu } from '@/components/navigation/Menu'
import { NavSidebar, NavSidebarButton, type NavSidebarEntry } from '@/components/patterns/application-ui/NavSidebar'
import { NotificationCenter } from '@/components/patterns/application-ui/NotificationCenter'
import { TopBar, TopBarNav } from '@/components/patterns/application-ui/TopBar'
import { AppShell, type AppShellLayout, type AppShellSurface } from './AppShell'
import { Stats } from '@/components/patterns/application-ui/Stats'

const entries: NavSidebarEntry[] = [
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

const sidebarFooter = (
  <>
    <NavSidebarButton icon={<Icon name="notifications" />} label="Notifications" badge={3} />
    <NavSidebarButton icon={<Icon name="help" />} label="Help and support" />
    <Menu
      side="right"
      align="end"
      trigger={<NavSidebarButton icon={<Avatar initials="AS" size="xs" variant="solid" />} label="Ana Silva" />}
      items={[{ label: 'Your profile' }, { label: 'Settings' }, { type: 'separator' }, { label: 'Sign out' }]}
    />
  </>
)

// On a canvas of the brand's own hue a solid brand avatar vanishes, so the
// deep canvas takes the subtle one.
const sidebarHeader = (onDeepCanvas = false) => (
  <>
    <NavSidebarButton
      appearance="switcher"
      icon={<Avatar initials="AC" size="xs" variant={onDeepCanvas ? 'subtle' : 'solid'} color="blue" />}
      label="Acme Corp"
      end={<Icon name="chevrons-up-down" />}
    />
    <NavSidebarButton appearance="field" icon={<Icon name="search" />} label="Search" end={<Kbd size="sm" keys={['⌘', 'K']} />} />
  </>
)

/** In the sidebar layout there is no top bar, so the tenant and search sit in the sidebar's header; notifications, help and the account in its footer. */
const sidebar = (collapsible = false, withTopBarItems = true, onDeepCanvas = false) => (
  <NavSidebar
    items={entries}
    currentHref="#dashboard"
    header={withTopBarItems ? sidebarHeader(onDeepCanvas) : undefined}
    footer={withTopBarItems ? sidebarFooter : undefined}
    isCollapsible={collapsible}
    defaultCollapsed={collapsible}
    style={{ blockSize: '100%' }}
  />
)

const headerEnd = (
  <>
    <NotificationCenter
      items={[
        { id: 1, media: <Icon name="warning" />, actor: 'INV-2039', action: 'is 14 days overdue', at: new Date(2026, 9, 27, 9), href: '#inv-2039', isUnread: true },
        { id: 2, media: <Avatar initials="LT" size="sm" />, actor: 'Linh Tran', action: 'approved PO-118', at: new Date(2026, 9, 26, 16), href: '#po-118', isUnread: true },
        { id: 3, media: <Icon name="success" />, actor: 'September close', action: 'is ready to review', at: new Date(2026, 9, 24, 10), href: '#close' },
      ]}
    />
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

const topBar = <TopBar start={<Search aria-label="Search" placeholder="Search" />} end={headerEnd} />

/** The page's own title; the shell has no heading of its own. */
const heading = (
  <div style={{ display: 'grid', gap: 'var(--space-inline)' }}>
    <h1 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: 'var(--text-heading-xl)', lineHeight: 'var(--leading-heading-xl)', fontWeight: 500 }}>Dashboard</h1>
    <p style={{ margin: 0, color: 'var(--muted-foreground)' }}>What happened across your projects this month.</p>
  </div>
)

const content = (
  <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-group)' }}>
      {heading}
      <Button startIcon={<Icon name="plus" />}>New project</Button>
    </div>
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
    {heading}
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
 * clicks are kept from navigating the test page.
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
  title: 'Templates/Application UI/App Shell',
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
    aside: {
      description: 'A column beside the page for a summary, a status or activity, in an `aside` landmark. Right of the page from 80rem of shell width, as wide as the expanded sidebar, each column scrolling on its own; below the page under 80rem.',
      control: false,
    },
    asideLabel: { description: "The aside's accessible name. Give one when the page has more than one `aside`.", control: 'text' },
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
    // Wide: the sidebar holds what the top bar would, so there is no top bar.
    // The shell's header is the only <header>, hidden in this layout.
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
export const TopBarLayout: Story = {
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
                sidebar={<NavSidebar items={entries} currentHref="#dashboard" style={{ blockSize: '100%' }} />}
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

/** No sidebar: a logo and links in the header. */
export const TopNavigation: Story = {
  args: {
    layout: 'top-bar',
    brand,
    header: <TopBar start={<TopBarNav items={topLinks} currentHref="#dashboard" />} end={headerEnd} />,
    mainId: 'content',
  },
  decorators: box(1100),
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(within(nav).getByRole('link', { name: 'Dashboard' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('main')).toHaveAttribute('id', 'content')
    await expect(canvas.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#content')
  },
}

/**
 * On a phone the sidebar stays beside the page as the icon rail, and the top
 * bar holds the logo, search and the account. There is no menu button.
 */
export const Mobile: Story = {
  args: {
    brand,
    sidebar: <NavSidebar items={entries} currentHref="#dashboard" isCollapsible style={{ blockSize: '100%' }} />,
    header: <TopBar end={headerEnd} />,
  },
  decorators: box(390),
  play: async ({ canvas, canvasElement }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    // The shell measures its width after the first layout.
    await waitFor(() => expect(nav.getBoundingClientRect().width).toBeLessThan(100))
    // A rail on a phone cannot expand: 16rem would cover the page.
    await expect(within(nav).queryByRole('button', { name: /sidebar/ })).toBeNull()
    await expect(within(nav).getByRole('link', { name: 'Projects, 12' })).toBeVisible()
    await expect(canvas.queryByRole('button', { name: /navigation/ })).toBeNull()
    await expect(within(canvasElement.querySelector('header')!).getByTestId('brand')).toBeVisible()
    await expect(canvas.getByRole('main').getBoundingClientRect().width).toBeGreaterThan(250)
  },
}

/** The top-navigation shell on a phone: the links stay in the bar and scroll sideways. */
export const TopNavigationMobile: Story = {
  ...TopNavigation,
  decorators: box(390),
  play: async ({ canvas, canvasElement }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(within(nav).getByRole('link', { name: 'Calendar' })).toBeVisible()
    await expect(nav.scrollWidth).toBeGreaterThan(nav.clientWidth)
    // The bar itself does not overflow: only the links scroll.
    const bar = canvasElement.querySelector('header')!
    await expect(bar.scrollWidth).toBeLessThanOrEqual(bar.clientWidth)
    await expect(canvas.queryByRole('button', { name: /navigation/ })).toBeNull()
  },
}

/**
 * A sidebar that is switched off, e.g. `sidebar={isAdmin && <NavSidebar />}`:
 * no sidebar column, as with no sidebar at all.
 */
export const WithoutNavigation: Story = {
  args: {
    sidebar: false,
    brand,
    header: <TopBar end={headerEnd} />,
  },
  decorators: box(390),
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('navigation')).toBeNull()
    await expect(canvas.getByRole('main')).toBeVisible()
  },
}

/**
 * A consumer's own deep canvas: a blue-to-sky gradient (kit steps blue and
 * sky accent-solid-light, deep enough for white text), with the Theme tokens
 * that set the sidebar's text and fills on it.
 */
const deepCanvas = {
  canvas: 'linear-gradient(to top, oklch(50.0% 0.134 242.749), oklch(54.6% 0.245 262.881))',
  'canvas-solid': 'oklch(54.6% 0.245 262.881)',
  'canvas-foreground': 'oklch(100% 0 0)',
  'canvas-muted-foreground': 'oklch(100% 0 0 / 92%)',
  // Dark veils deepen the tint under white text instead of washing it out.
  'canvas-hover': 'oklch(0% 0 0 / 12%)',
  'canvas-selected': 'oklch(0% 0 0 / 24%)',
  'canvas-field': 'oklch(0% 0 0 / 16%)',
  'canvas-field-border': 'oklch(100% 0 0 / 22%)',
  // White with red text stands out on any canvas hue, a red one included.
  'canvas-badge': 'oklch(100% 0 0)',
  'canvas-badge-foreground': 'oklch(57.7% 0.245 27.325)',
}

/**
 * The NavSidebar on each surface: gray (transparent on the neutral canvas),
 * white (solid: the current item takes the brand tint; card content, as a
 * solid full-height sidebar wants) and transparent on a deep canvas of the
 * consumer's own.
 */
export const SidebarSurfaces: Story = {
  args: { brand, sidebar: sidebar(), children: blocks },
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
      {(
        [
          ['Gray', 'transparent', undefined],
          ['White', 'solid', undefined],
          ['Transparent', 'transparent', deepCanvas],
        ] as const
      ).map(([name, surface, tokens]) => (
        <figure key={name} style={{ margin: 0, display: 'grid', gap: 'var(--space-2)' }}>
          <figcaption style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-body-sm)' }}>{name}</figcaption>
          {/* Only the first is live; the others are pictures, as in Combinations, so the page has one main and one Main nav. */}
          <div
            data-surface-demo={name}
            style={{ inlineSize: 1100, blockSize: 560, border: '1px solid var(--border)' }}
            aria-hidden={name === 'Gray' ? undefined : true}
            inert={name !== 'Gray'}
          >
            {/* A solid full-height sidebar does not go with flat content (see Combinations), so White takes card. */}
            <Theme tokens={tokens} contentStyle={surface === 'solid' ? 'card' : undefined} style={{ blockSize: '100%' }}>
              <AppShell {...args} sidebarSurface={surface} sidebar={tokens ? sidebar(false, true, true) : args.sidebar} />
            </Theme>
          </div>
        </figure>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const part = (name: string, selector: string) =>
      canvasElement.querySelector(`[data-surface-demo="${name}"] nav[aria-label="Main"] ${selector}`)!
    const style = (name: string, selector: string) => getComputedStyle(part(name, selector))
    // White marks the current item with the brand tint, not the gray fill.
    await expect(style('White', 'a[aria-current="page"]').backgroundColor).not.toBe(
      style('Gray', 'a[aria-current="page"]').backgroundColor,
    )
    // On the deep canvas the text is the canvas's white and the badge is white.
    await expect(style('Transparent', 'a[aria-current="page"]').color).toBe('oklch(1 0 0)')
    await expect(style('Transparent', '[class*="badge"]').backgroundColor).toBe('oklch(1 0 0)')
  },
}

/** A page long enough to scroll, so the columns' scrolling shows. */
const longPage = (
  <div style={{ display: 'grid', gap: 'var(--space-group)' }}>
    {heading}
    <Button startIcon={<Icon name="plus" />}>New invoice</Button>
    {Array.from({ length: 12 }, (_, i) => (
      <Card key={i} appearance="surface" size="sm">
        <strong>Invoice INV-{1040 + i}</strong>
        <span style={{ color: 'var(--muted-foreground)' }}>Posted to the ledger, waiting for approval.</span>
      </Card>
    ))}
  </div>
)

/** The aside: a summary, a status and recent activity for what the page shows. */
const asideContent = (
  <div style={{ display: 'grid', gap: 'var(--space-group)' }}>
    <h2 style={{ margin: 0, fontSize: 'var(--text-heading-xs)', fontWeight: 500 }}>Summary</h2>
    <span style={{ color: 'var(--muted-foreground)' }}>12 invoices, 4 waiting for approval.</span>
    <h2 style={{ margin: 0, fontSize: 'var(--text-heading-xs)', fontWeight: 500 }}>Activity</h2>
    <span style={{ color: 'var(--muted-foreground)' }}>Ana Silva approved INV-1039.</span>
    {/* Hard content: one long word must wrap, not widen the column. */}
    <span data-testid="long-word">https://ledger.example.com/imports/2026-10-26/batch-0000000000000000000000000001</span>
  </div>
)

/**
 * Three columns: the sidebar, the page and an aside for a summary, a status
 * or activity. From 80rem the aside sits beside the page, as wide as the
 * expanded sidebar, and each column scrolls on its own.
 */
export const WithAside: Story = {
  args: { brand, sidebar: sidebar(), aside: asideContent, asideLabel: 'Invoice summary', children: longPage },
  decorators: box(1400),
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    const aside = canvas.getByRole('complementary', { name: 'Invoice summary' })
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    // Beside the page, after it in reading order, as wide as the sidebar.
    await waitFor(() => expect(aside.getBoundingClientRect().left).toBeGreaterThanOrEqual(main.getBoundingClientRect().right))
    await expect(main.compareDocumentPosition(aside) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    await expect(aside.getBoundingClientRect().width).toBeCloseTo(nav.getBoundingClientRect().width, 0)
    // A long word wraps inside the column.
    await expect(aside.scrollWidth).toBeLessThanOrEqual(aside.clientWidth)
    // The page scrolls on its own: the aside stays put.
    await expect(main.scrollHeight).toBeGreaterThan(main.clientHeight)
    const top = aside.getBoundingClientRect().top
    main.scrollTop = 200
    await waitFor(() => expect(main.scrollTop).toBeGreaterThan(0))
    await expect(aside.getBoundingClientRect().top).toBe(top)
    // A keyboard reaches the aside after the page, so it can scroll it too.
    canvas.getByRole('button', { name: 'New invoice' }).focus()
    await userEvent.tab()
    await expect(aside).toHaveFocus()
    await expect(getComputedStyle(aside).outlineStyle).toBe('solid')
  },
}

/** The aside on canvas content: no surface of its own, like the page. */
export const WithAsideOnCanvas: Story = {
  ...WithAside,
  args: { ...WithAside.args, children: blocks },
  decorators: [themed({ contentStyle: 'card' }), ...box(1400)],
  play: async ({ canvas }) => {
    const aside = canvas.getByRole('complementary')
    await expect(getComputedStyle(aside).backgroundColor).toBe('rgba(0, 0, 0, 0)')
    await waitFor(() => expect(aside.getBoundingClientRect().left).toBeGreaterThanOrEqual(canvas.getByRole('main').getBoundingClientRect().right))
  },
}

/** Under 80rem the aside goes below the page and the two scroll as one. */
export const WithAsideStacked: Story = {
  ...WithAside,
  decorators: box(1100),
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    const aside = canvas.getByRole('complementary')
    await waitFor(() => expect(aside.getBoundingClientRect().top).toBeGreaterThanOrEqual(main.getBoundingClientRect().bottom))
    await expect(aside.getBoundingClientRect().width).toBeCloseTo(main.getBoundingClientRect().width, 0)
    // One scroll: the page does not scroll inside itself, the region around both does.
    await expect(main.scrollHeight).toBeLessThanOrEqual(main.clientHeight)
    const region = main.parentElement!
    await expect(region.scrollHeight).toBeGreaterThan(region.clientHeight)
  },
}

/** On a phone the aside follows the page, flush, ruled off at the top. */
export const WithAsideMobile: Story = {
  ...WithAside,
  args: { ...WithAside.args, sidebar: <NavSidebar items={entries} currentHref="#dashboard" style={{ blockSize: '100%' }} />, header: <TopBar end={headerEnd} /> },
  decorators: box(390),
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    const aside = canvas.getByRole('complementary')
    await waitFor(() => expect(aside.getBoundingClientRect().top).toBeGreaterThanOrEqual(main.getBoundingClientRect().bottom))
    await expect(aside.scrollWidth).toBeLessThanOrEqual(aside.clientWidth)
    await expect(getComputedStyle(aside).borderTopColor).not.toBe('rgba(0, 0, 0, 0)')
  },
}

/** `aside={false}`: no complementary landmark and no empty column. */
export const WithoutAside: Story = {
  args: { brand, sidebar: sidebar(), aside: false },
  decorators: box(1400),
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('complementary')).toBeNull()
    await expect(canvas.getByRole('main').parentElement!.getBoundingClientRect().right).toBeCloseTo(
      canvas.getByRole('main').closest('[class*="frame"]')!.getBoundingClientRect().right,
      0,
    )
  },
}
