import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, screen, waitFor, within } from 'storybook/test'
import { Playground, type Manifest, type ManifestItem, type Prop } from './Playground'

const item = (
  kind: ManifestItem['kind'],
  name: string,
  category: string,
  status: string,
  props: Prop[] = [],
): ManifestItem => {
  const root = { component: 'components', pattern: 'patterns', template: 'templates' }[kind]
  const id = `${root}-${category}-${name}`.toLowerCase().replaceAll(' ', '-')
  return { kind, id, name, category, status, storyId: `${id}--default`, props }
}

/**
 * A small stand-in for manifest.json: no Templates, so that group stays hidden.
 * Button and Badge between them have one prop of each control; Tooltip has none.
 */
const manifest: Manifest = {
  items: [
    item('component', 'Badge', 'Atomic Elements', 'beta', [
      { name: 'count', control: 'number', default: 8 },
      { name: 'isDot', control: 'boolean', default: false, description: 'A dot with no number.' },
    ]),
    item('component', 'Button', 'Buttons', 'beta', [
      { name: 'variant', control: 'inline-radio', options: ['primary', 'secondary'], default: 'primary' },
      { name: 'isLoading', control: 'boolean' },
      { name: 'children', control: 'text', default: 'Button' },
    ]),
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
const propsPanel = (canvas: ReturnType<typeof within>) => within(canvas.getByRole('complementary', { name: 'Props' }))

type ChannelEvent = { type: string; args: unknown[] }
/**
 * Stands in for Storybook's preview: says the story rendered, then keeps
 * every channel event the page sends into the frame.
 */
const fakePreview = async (iframe: HTMLIFrameElement) => {
  await waitFor(() => expect(iframe.contentDocument?.readyState).toBe('complete'))
  const received: ChannelEvent[] = []
  iframe.contentWindow!.addEventListener('message', (e) => received.push(JSON.parse(e.data).event))
  const data = JSON.stringify({ key: 'storybook-channel', event: { type: 'storyRendered', args: [] } })
  window.dispatchEvent(new MessageEvent('message', { data, source: iframe.contentWindow }))
  return received
}

/** Starts from a clean address bar and puts the test page's own URL back after. */
const withUrl = (search: Record<string, string>) => () => {
  const before = location.href
  const url = new URL(before)
  for (const key of ['item', 'vp', ...manifest.items.flatMap((i) => i.props.map((p) => p.name))]) url.searchParams.delete(key)
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
    // Tooltip has no props: no right column.
    await expect(canvas.queryByRole('complementary', { name: 'Props' })).toBeNull()

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

export const Grouped: Story = {
  play: async ({ canvas, userEvent }) => {
    const items = await openItems(canvas, userEvent)
    const section = (name: string) => items.getByRole('button', { name })

    // Each kind is cut into its Categories, all open at first.
    for (const name of ['Atomic Elements', 'Buttons', 'Overlays', 'Application UI'])
      await expect(section(name)).toHaveAttribute('aria-expanded', 'true')
    // The card has name and status; the section header carries the Category.
    const badgeCard = items.getByRole('link', { name: /Badge/ })
    await expect(badgeCard).toHaveTextContent(/^Badgebeta$/)

    // The mouse folds a section and the keyboard opens it again.
    await userEvent.click(section('Buttons'))
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() => expect(items.getByRole('link', { name: /Button/, hidden: true })).not.toBeVisible())
    section('Buttons').focus()
    await userEvent.keyboard('{Enter}')
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'true')
    await waitFor(() => expect(items.getByRole('link', { name: /Button/ })).toBeVisible())
    await userEvent.keyboard(' ')
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'false')

    // A search opens the folded section that holds a match and hides the empty ones.
    await userEvent.click(section('Atomic Elements'))
    await expect(section('Atomic Elements')).toHaveAttribute('aria-expanded', 'false')
    await userEvent.type(items.getByRole('searchbox', { name: 'Search by name' }), 'b')
    await expect(section('Atomic Elements')).toHaveAttribute('aria-expanded', 'true')
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'true')
    await waitFor(() => expect(items.getByRole('link', { name: /Badge/ })).toBeVisible())
    await expect(items.queryByRole('button', { name: 'Overlays' })).toBeNull()
    await expect(items.queryByRole('button', { name: 'Application UI' })).toBeNull()

    // Clearing the search brings back the folds from before it.
    await userEvent.clear(items.getByRole('searchbox', { name: 'Search by name' }))
    await expect(section('Atomic Elements')).toHaveAttribute('aria-expanded', 'false')
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'false')
    await expect(section('Overlays')).toHaveAttribute('aria-expanded', 'true')

    // A filter does the same: only the matching section, open.
    await userEvent.click(items.getByRole('combobox', { name: 'Category' }))
    await userEvent.click(await screen.findByRole('option', { name: 'Buttons' }))
    await waitFor(() => expect(section('Buttons')).toHaveAttribute('aria-expanded', 'true'))
    await expect(items.queryByRole('button', { name: 'Atomic Elements' })).toBeNull()
    await expect(items.queryByRole('button', { name: 'Overlays' })).toBeNull()
  },
}

export const Props: Story = {
  play: async ({ canvas, userEvent }) => {
    const panel = propsPanel(canvas)
    const iframe = await frame(canvas)
    const src = iframe.getAttribute('src')
    const received = await fakePreview(iframe)
    const last = () => received.at(-1)
    const update = (updatedArgs: object) => ({ type: 'updateStoryArgs', args: [{ storyId: button.storyId, updatedArgs }] })

    // Controls start at the defaults.
    await expect(panel.getByRole('combobox', { name: 'variant' })).toHaveTextContent('primary')
    await expect(panel.getByRole('switch', { name: 'isLoading' })).not.toBeChecked()
    await expect(panel.getByRole('textbox', { name: 'children' })).toHaveValue('Button')

    // Each control sends its change into the frame and writes it to the URL.
    await userEvent.click(panel.getByRole('combobox', { name: 'variant' }))
    await userEvent.click(await screen.findByRole('option', { name: 'secondary' }))
    await waitFor(() => expect(last()).toEqual(update({ variant: 'secondary' })))
    await expect(param('variant')).toBe('secondary')

    await userEvent.click(panel.getByRole('switch', { name: 'isLoading' }))
    await waitFor(() => expect(last()).toEqual(update({ isLoading: true })))
    await expect(param('isLoading')).toBe('true')

    const text = panel.getByRole('textbox', { name: 'children' })
    await userEvent.clear(text)
    await userEvent.type(text, 'Save it!')
    await waitFor(() => expect(last()).toEqual(update({ children: 'Save it!' })))
    await expect(param('children')).toBe('Save it!')

    // Back to its default, a prop is reset in the frame and leaves the URL.
    await userEvent.click(panel.getByRole('switch', { name: 'isLoading' }))
    await waitFor(() =>
      expect(last()).toEqual({ type: 'resetStoryArgs', args: [{ storyId: button.storyId, argNames: ['isLoading'] }] }),
    )
    await expect(param('isLoading')).toBeNull()

    // Reset puts everything back.
    await userEvent.click(panel.getByRole('button', { name: 'Reset' }))
    await waitFor(() =>
      expect(last()).toEqual({
        type: 'resetStoryArgs',
        args: [{ storyId: button.storyId, argNames: ['variant', 'children'] }],
      }),
    )
    await expect(param('variant')).toBeNull()
    await expect(param('children')).toBeNull()
    await expect(panel.getByRole('combobox', { name: 'variant' })).toHaveTextContent('primary')
    await expect(panel.getByRole('textbox', { name: 'children' })).toHaveValue('Button')

    // None of it reloaded the frame.
    await expect((await frame(canvas)).getAttribute('src')).toBe(src)
  },
}

export const FromUrl: Story = {
  beforeEach: withUrl({ item: badge.id, vp: 'tablet', count: '3', isDot: 'true', gone: 'x' }),
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('heading', { name: 'Badge', level: 2 })).toBeVisible()
    const iframe = await frame(canvas)
    await expect(iframe.getAttribute('src')).toContain(`id=${badge.storyId}`)
    await expect(iframe.style.width).toBe('768px')
    await expect(canvas.getByRole('button', { name: 'Tablet' })).toHaveAttribute('aria-pressed', 'true')

    // The shared props fill the panel and go into the frame once it has rendered; the unknown one is ignored.
    const panel = propsPanel(canvas)
    const count = panel.getByRole('textbox', { name: 'count' })
    await expect(count).toHaveValue('3')
    await expect(panel.getByRole('switch', { name: 'isDot' })).toBeChecked()
    const received = await fakePreview(iframe)
    await waitFor(() =>
      expect(received).toEqual([
        { type: 'updateStoryArgs', args: [{ storyId: badge.storyId, updatedArgs: { count: 3, isDot: true } }] },
      ]),
    )

    // The number control: only the change goes into the frame.
    await userEvent.clear(count)
    await userEvent.type(count, '12')
    await userEvent.tab()
    await waitFor(() =>
      expect(received.at(-1)).toEqual({
        type: 'updateStoryArgs',
        args: [{ storyId: badge.storyId, updatedArgs: { count: 12 } }],
      }),
    )
    await expect(param('count')).toBe('12')
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
