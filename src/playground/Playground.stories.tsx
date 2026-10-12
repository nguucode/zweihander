import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, screen, waitFor, within } from 'storybook/test'
import { Playground, type Manifest, type ManifestItem } from './Playground'

const item = (kind: ManifestItem['kind'], name: string, category: string, status: string): ManifestItem => {
  const root = { component: 'components', pattern: 'patterns', template: 'templates' }[kind]
  const id = `${root}-${category}-${name}`.toLowerCase().replaceAll(' ', '-')
  return { kind, id, name, category, status, storyId: `${id}--default`, props: [] }
}

/** A small stand-in for manifest.json: no Templates, so that group stays hidden. */
const manifest: Manifest = {
  items: [
    item('component', 'Badge', 'Atomic Elements', 'beta'),
    item('component', 'Button', 'Buttons', 'beta'),
    item('component', 'Tooltip', 'Overlays', 'experimental'),
    item('pattern', 'App Shell', 'Application UI', 'experimental'),
  ],
}
const [badge, button, tooltip] = manifest.items

/** The left column, or the drawer under 1024px (the test browser is narrow). */
const openItems = async (canvas: ReturnType<typeof within>, userEvent: { click: (el: Element) => Promise<void> }) => {
  const browse = canvas.queryByRole('button', { name: 'Browse' })
  if (!browse) return within(canvas.getByRole('navigation', { name: 'Items' }))
  await userEvent.click(browse)
  return within(await screen.findByRole('dialog', { name: 'Items' }))
}

const frame = (canvas: ReturnType<typeof within>) => canvas.findByTitle(/live view$/)
const param = (key: string) => new URLSearchParams(location.search).get(key)

/** Starts from a clean address bar and puts the test page's own URL back after. */
const withUrl = (search: Record<string, string>) => () => {
  const before = location.href
  const url = new URL(before)
  url.searchParams.delete('item')
  url.searchParams.delete('vp')
  for (const [k, v] of Object.entries(search)) url.searchParams.set(k, v)
  history.replaceState(null, '', url)
  return () => history.replaceState(null, '', before)
}

const meta = {
  title: 'Site/Playground',
  component: Playground,
  parameters: { layout: 'fullscreen' },
  // A small static file stands in for Storybook: the test never loads real stories in the frame.
  args: { manifest, storybookUrl: '/favicon.svg?', homeUrl: '#' },
  beforeEach: withUrl({}),
} satisfies Meta<typeof Playground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    // No item in the URL: Button, on Desktop.
    await expect(canvas.getByRole('heading', { name: 'Button', level: 2 })).toBeVisible()
    const iframe = await frame(canvas)
    await expect(iframe.getAttribute('src')).toContain(`id=${button.storyId}`)
    await expect(iframe.style.width).toBe('1280px')
    await waitFor(() => expect(canvas.queryByRole('status', { name: /Loading/ })).toBeNull())

    let items = await openItems(canvas, userEvent)
    await expect(items.getByRole('link', { name: /Button/ })).toHaveAttribute('aria-current', 'true')
    await expect(items.getByRole('heading', { name: 'Components' })).toBeVisible()
    await expect(items.getByRole('heading', { name: 'Patterns' })).toBeVisible()
    await expect(items.queryByRole('heading', { name: 'Templates' })).toBeNull()

    // Search hides cards, and a group left empty goes with them.
    const search = items.getByRole('searchbox', { name: 'Search by name' })
    await userEvent.type(search, 'bad')
    await expect(items.getAllByRole('link')).toHaveLength(1)
    await expect(items.getByRole('link', { name: /Badge/ })).toBeVisible()
    await expect(items.queryByRole('heading', { name: 'Patterns' })).toBeNull()

    await userEvent.type(search, 'xyz')
    await expect(items.getByRole('heading', { name: 'Nothing matches' })).toBeVisible()
    await userEvent.click(items.getByRole('button', { name: 'Clear search and filters' }))
    await expect(items.getAllByRole('link')).toHaveLength(4)

    // Status filter: only the experimental ones.
    await userEvent.click(items.getByRole('combobox', { name: 'Status' }))
    await userEvent.click(await screen.findByRole('option', { name: 'experimental' }))
    await waitFor(() => expect(items.getAllByRole('link')).toHaveLength(2))
    await expect(items.queryByRole('link', { name: /Button/ })).toBeNull()
    await expect(items.getByRole('status')).toHaveTextContent('2 items')

    // Category filter on top: Overlays leaves Tooltip alone.
    await userEvent.click(items.getByRole('combobox', { name: 'Category' }))
    await userEvent.click(await screen.findByRole('option', { name: 'Overlays' }))
    await waitFor(() => expect(items.getAllByRole('link')).toHaveLength(1))
    await expect(items.queryByRole('heading', { name: 'Patterns' })).toBeNull()

    // Picking a card shows it live and writes it to the URL.
    await userEvent.click(items.getByRole('link', { name: /Tooltip/ }))
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain(`id=${tooltip.storyId}`))
    await expect(canvas.getByRole('heading', { name: 'Tooltip', level: 2 })).toBeVisible()
    await expect(param('item')).toBe(tooltip.id)

    // The filters survive closing and reopening the drawer.
    items = await openItems(canvas, userEvent)
    await expect(items.getByRole('link', { name: /Tooltip/ })).toHaveAttribute('aria-current', 'true')
    await expect(items.getAllByRole('link')).toHaveLength(1)
    await userEvent.keyboard('{Escape}')

    // The viewport switch sets the frame's real width and replaces the URL entry.
    const viewport = canvas.getByRole('group', { name: 'Viewport' })
    await userEvent.click(within(viewport).getByRole('button', { name: 'Mobile' }))
    await waitFor(async () => expect((await frame(canvas)).style.width).toBe('375px'))
    await expect(within(viewport).getByRole('button', { name: 'Mobile' })).toHaveAttribute('aria-pressed', 'true')
    await expect(param('vp')).toBe('mobile')

    // Back steps to the entry before Tooltip: Button on Desktop, as the page opened.
    history.back()
    await waitFor(() => expect(canvas.getByRole('heading', { name: 'Button', level: 2 })).toBeVisible())
    await waitFor(async () => expect((await frame(canvas)).style.width).toBe('1280px'))
  },
}

export const FromUrl: Story = {
  beforeEach: withUrl({ item: badge.id, vp: 'tablet' }),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Badge', level: 2 })).toBeVisible()
    const iframe = await frame(canvas)
    await expect(iframe.getAttribute('src')).toContain(`id=${badge.storyId}`)
    await expect(iframe.style.width).toBe('768px')
    await expect(canvas.getByRole('button', { name: 'Tablet' })).toHaveAttribute('aria-pressed', 'true')
  },
}

export const UnknownInUrl: Story = {
  beforeEach: withUrl({ item: 'components-gone-widget', vp: 'watch' }),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Button', level: 2 })).toBeVisible()
    await expect((await frame(canvas)).style.width).toBe('1280px')
  },
}

export const Keyboard: Story = {
  play: async ({ canvas, userEvent }) => {
    // Everything is reachable with Tab, and a card opens with Enter.
    const browse = canvas.queryByRole('button', { name: 'Browse' })
    if (browse) {
      browse.focus()
      await userEvent.keyboard('{Enter}')
      await screen.findByRole('dialog', { name: 'Items' })
    }
    const items = within(browse ? screen.getByRole('dialog') : canvas.getByRole('navigation', { name: 'Items' }))
    const target = items.getByRole('link', { name: /Badge/ })
    for (let i = 0; i < 20 && document.activeElement !== target; i++) await userEvent.tab()
    await expect(target).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await waitFor(() => expect(canvas.getByRole('heading', { name: 'Badge', level: 2 })).toBeVisible())

    const tablet = canvas.getByRole('button', { name: 'Tablet' })
    tablet.focus()
    await userEvent.keyboard(' ')
    await expect(tablet).toHaveAttribute('aria-pressed', 'true')
    await waitFor(async () => expect((await frame(canvas)).style.width).toBe('768px'))
  },
}
