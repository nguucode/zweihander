import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, screen, waitFor, within } from 'storybook/test'
import { setPrefersDark, withPrefersDark } from '@/test/story-helpers'
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
      // Same name as the Preview theme's appearance: the theme's param is prefixed.
      { name: 'appearance', control: 'select', options: ['filled', 'outlined'], default: 'filled' },
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
/** Which item the live view shows: the frame is named after it. */
const showing = async (canvas: ReturnType<typeof within>, name: string) =>
  waitFor(async () => expect(await frame(canvas)).toHaveAttribute('title', `${name} live view`))

/**
 * The page inside the window is the device's size, and the window, scaled
 * as one piece, is never above 100% and fits inside the Stage's padding both
 * ways, touching it on at least one side.
 */
const fitsDevice = async (canvas: ReturnType<typeof within>, width: number, height: number) => {
  await waitFor(async () => {
    const win = canvas.getByTestId('preview-window')
    const iframe = await frame(canvas)
    // The page takes the full width, and the height a Browser bar above it leaves.
    const bar = win.childElementCount > 1 ? (win.firstElementChild as HTMLElement).offsetHeight : 0
    expect([win.offsetWidth, win.offsetHeight, iframe.offsetWidth, iframe.offsetHeight]).toEqual([
      width,
      height,
      width,
      height - bar,
    ])
  })
  // Waited for: the scale follows the stage through a ResizeObserver, which
  // can land a frame after a layout change (the Props column coming back).
  await waitFor(() => {
    const win = canvas.getByTestId('preview-window')
    const stage = canvas.getByTestId('stage')
    const box = win.getBoundingClientRect()
    // The Stage's padding is wallpaper around the frame: the room is inside it.
    const pad = getComputedStyle(stage)
    const inner = {
      w: stage.clientWidth - parseFloat(pad.paddingLeft) - parseFloat(pad.paddingRight),
      h: stage.clientHeight - parseFloat(pad.paddingTop) - parseFloat(pad.paddingBottom),
    }
    const room = { w: Math.min(width, inner.w), h: Math.min(height, inner.h) }
    expect(box.width).toBeLessThanOrEqual(room.w + 0.5)
    expect(box.height).toBeLessThanOrEqual(room.h + 0.5)
    expect(box.width >= room.w - 1 || box.height >= room.h - 1).toBe(true)
    // Scaled as one piece: the window keeps the device's proportions.
    expect(box.width / box.height).toBeCloseTo(width / height, 2)
  })
}
const viewportTab = (canvas: ReturnType<typeof within>, name: string) =>
  within(canvas.getByRole('tablist', { name: 'Viewport' })).getByRole('tab', { name })
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
  for (const key of ['item', 'vp', 'address', ...manifest.items.flatMap((i) => i.props.map((p) => p.name))]) url.searchParams.delete(key)
  for (const key of [...url.searchParams.keys()].filter((k) => k.startsWith('theme-'))) url.searchParams.delete(key)
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
    await showing(canvas, 'Button')
    const iframe = await frame(canvas)
    await expect(iframe.getAttribute('src')).toContain(`id=${button.storyId}`)
    await fitsDevice(canvas, 1280, 800)
    // Desktop has Safari's 52px bar above the page.
    await expect(iframe.offsetHeight).toBe(748)
    await expect(viewportTab(canvas, 'Desktop')).toHaveAttribute('aria-selected', 'true')
    await waitFor(() => expect(canvas.queryByRole('status', { name: /Loading/ })).toBeNull())

    // The window has the room: no item name or size line above it, and the
    // story's Storybook page is one icon button away.
    await expect(canvas.queryByText(/1280 px/)).toBeNull()
    await expect(canvas.getByRole('link', { name: 'Open in Storybook' })).toHaveAttribute(
      'href',
      `/favicon.svg??path=/story/${button.storyId}`,
    )

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
    await showing(canvas, 'Tooltip')
    await expect(canvas.getByRole('link', { name: 'Open in Storybook' })).toHaveAttribute(
      'href',
      `/favicon.svg??path=/story/${tooltip.storyId}`,
    )
    await expect(param('item')).toBe(tooltip.id)
    // Tooltip has no props: no right column.
    await expect(canvas.queryByRole('complementary', { name: 'Props' })).toBeNull()

    // The filters survive closing and reopening the drawer.
    items = await openItems(canvas, userEvent)
    await expect(items.getByRole('link', { name: /Tooltip/ })).toHaveAttribute('aria-current', 'true')
    await expect(items.getAllByRole('link')).toHaveLength(1)
    await userEvent.keyboard('{Escape}')

    // The viewport tabs set the device size and replace the URL entry.
    await userEvent.click(viewportTab(canvas, 'Mobile'))
    await fitsDevice(canvas, 393, 852)
    // Mobile has a 30px status bar above the page; Safari's bar floats over
    // the page's bottom edge, so the page runs on under it.
    await expect((await frame(canvas)).offsetHeight).toBe(822)
    const page = (await frame(canvas)).getBoundingClientRect()
    const floating = canvas.getByRole('textbox', { name: 'Address' }).closest('label')!.getBoundingClientRect()
    await expect(floating.top).toBeGreaterThan(page.top)
    await expect(floating.bottom).toBeLessThan(page.bottom)
    await expect(viewportTab(canvas, 'Mobile')).toHaveAttribute('aria-selected', 'true')
    await expect(param('vp')).toBe('mobile')
    await userEvent.click(viewportTab(canvas, 'Tablet'))
    await fitsDevice(canvas, 834, 1194)
    // Tablet has the iPad's 86px bar (status bar included) above the page.
    await expect((await frame(canvas)).offsetHeight).toBe(1108)
    await expect(param('vp')).toBe('tablet')

    // Back steps to the entry before Tooltip: Button on Desktop, as the page opened.
    history.back()
    await showing(canvas, 'Button')
    await fitsDevice(canvas, 1280, 800)
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
    await showing(canvas, 'Badge')
    const iframe = await frame(canvas)
    await expect(iframe.getAttribute('src')).toContain(`id=${badge.storyId}`)
    await fitsDevice(canvas, 834, 1194)
    await expect(viewportTab(canvas, 'Tablet')).toHaveAttribute('aria-selected', 'true')

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
    await showing(canvas, 'Button')
    await fitsDevice(canvas, 1280, 800)
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
    await showing(canvas, 'Badge')

    // The viewport tabs move with the arrow keys, like any Tabs, and switch as they go.
    viewportTab(canvas, 'Desktop').focus()
    await userEvent.keyboard('{ArrowRight}')
    await expect(viewportTab(canvas, 'Tablet')).toHaveFocus()
    await expect(viewportTab(canvas, 'Tablet')).toHaveAttribute('aria-selected', 'true')
    await fitsDevice(canvas, 834, 1194)
    await expect(param('vp')).toBe('tablet')
    await userEvent.keyboard('{ArrowRight}')
    await fitsDevice(canvas, 393, 852)
    await expect(param('vp')).toBe('mobile')
  },
}

export const PreviewTheme: Story = {
  beforeEach: withPrefersDark(false),
  play: async ({ canvas, userEvent }) => {
    const panel = propsPanel(canvas)
    const iframe = await frame(canvas)
    const src = iframe.getAttribute('src')
    const received = await fakePreview(iframe)
    // The frame starts on the default, System, without a message.
    await expect(src).toContain('globals=appearance%3Asystem')

    // A prop changed before the theme stays changed after it.
    await userEvent.click(panel.getByRole('switch', { name: 'isLoading' }))
    await waitFor(() => expect(received.at(-1)?.type).toBe('updateStoryArgs'))

    const trigger = canvas.getByRole('button', { name: 'Theme' })
    await userEvent.click(trigger)
    const dialog = within(await screen.findByRole('dialog', { name: 'Preview theme' }))
    await expect(dialog.getByRole('radio', { name: 'System' })).toBeChecked()
    await userEvent.click(dialog.getByRole('radio', { name: 'Dark' }))
    await waitFor(() =>
      expect(received.at(-1)).toEqual({ type: 'updateGlobals', args: [{ globals: { appearance: 'dark' } }] }),
    )
    await expect(received.filter((e) => e.type === 'updateStoryArgs')).toHaveLength(1)
    await expect((await frame(canvas)).getAttribute('src')).toBe(src)
    // The page itself stays on the OS appearance.
    await expect(document.documentElement).not.toHaveClass('dark')

    // Escape closes it and gives focus back to the Theme button.
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('dialog', { name: 'Preview theme' })).toBeNull())
    await expect(trigger).toHaveFocus()
    await expect(panel.getByRole('switch', { name: 'isLoading' })).toBeChecked()

    // Opening it moves focus inside (the modal trap itself is Base UI's, and a
    // synthetic Tab cannot exercise it: see Popover.stories). Left open for the a11y check.
    await userEvent.click(trigger)
    const popup = await screen.findByRole('dialog', { name: 'Preview theme' })
    await waitFor(() => expect(popup.contains(document.activeElement)).toBe(true))
    await expect(within(popup).getByRole('radio', { name: 'Dark' })).toBeChecked()
  },
}

const themeParams = () => [...new URLSearchParams(location.search).keys()].filter((k) => k.startsWith('theme-'))
const openTheme = async (canvas: ReturnType<typeof within>, userEvent: { click: (el: Element) => Promise<void> }) => {
  await userEvent.click(canvas.getByRole('button', { name: 'Theme' }))
  return within(await screen.findByRole('dialog', { name: 'Preview theme' }))
}
const lastGlobals = (received: ChannelEvent[]) =>
  (received.findLast((e) => e.type === 'updateGlobals')?.args[0] as { globals: object } | undefined)?.globals

export const ThemeColorRadius: Story = {
  play: async ({ canvas, userEvent }) => {
    const received = await fakePreview(await frame(canvas))
    const dialog = await openTheme(canvas, userEvent)
    const accent = within(dialog.getByRole('radiogroup', { name: 'Accent' }))
    const gray = within(dialog.getByRole('radiogroup', { name: 'Gray' }))
    // Every hue and ramp of the kit, each named; the defaults chosen.
    await expect(accent.getAllByRole('radio')).toHaveLength(17)
    await expect(gray.getAllByRole('radio')).toHaveLength(9)
    await expect(accent.getByRole('radio', { name: 'Blue' })).toBeChecked()
    await expect(gray.getByRole('radio', { name: 'Gray' })).toBeChecked()
    await expect(dialog.getByRole('radio', { name: 'Medium' })).toBeChecked()

    await userEvent.click(accent.getByRole('radio', { name: 'Rose' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ accent: 'rose' }))
    await userEvent.click(gray.getByRole('radio', { name: 'Slate' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ gray: 'slate' }))
    await userEvent.click(dialog.getByRole('radio', { name: 'Full' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ radius: 'full' }))
    await userEvent.click(dialog.getByRole('radio', { name: 'Dark' }))
    await expect([param('theme-accent'), param('theme-gray'), param('theme-radius'), param('theme-appearance')]).toEqual([
      'rose',
      'slate',
      'full',
      'dark',
    ])

    // Back to the default: the param goes.
    await userEvent.click(accent.getByRole('radio', { name: 'Blue' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ accent: 'blue' }))
    await expect(param('theme-accent')).toBeNull()

    // Reset puts every option back and empties the URL of them.
    await userEvent.click(dialog.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ gray: 'gray', radius: 'medium', appearance: 'system' }))
    await expect(themeParams()).toEqual([])
    await expect(gray.getByRole('radio', { name: 'Gray' })).toBeChecked()
    await expect(dialog.getByRole('radio', { name: 'System' })).toBeChecked()
  },
}

export const ThemeTypo: Story = {
  play: async ({ canvas, userEvent }) => {
    const received = await fakePreview(await frame(canvas))
    const dialog = await openTheme(canvas, userEvent)
    const font = dialog.getByRole('combobox', { name: 'Font' })
    const scaling = dialog.getByRole('combobox', { name: 'Scaling' })
    await expect(font).toHaveTextContent('System')
    await expect(scaling).toHaveTextContent('100%')

    await userEvent.click(font)
    const fonts = await screen.findByRole('listbox')
    await expect(within(fonts).getAllByRole('option').map((o) => o.textContent)).toEqual(['System', 'Inter', 'Geist', 'Serif', 'Mono'])
    await userEvent.click(within(fonts).getByRole('option', { name: 'Inter' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ font: 'inter' }))
    await userEvent.click(scaling)
    await userEvent.click(await screen.findByRole('option', { name: '110%' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ scaling: '110%' }))
    await expect([param('theme-font'), param('theme-scaling')]).toEqual(['inter', '110%'])

    // Reset covers Typo too.
    await userEvent.click(dialog.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ font: 'system', scaling: '100%' }))
    await expect(themeParams()).toEqual([])
    await expect(font).toHaveTextContent('System')
  },
}

let clipboard: string[] = []
/** A fake clipboard: what was written, or a refusal as a blocked one gives. */
const withClipboard = (isBlocked = false) => () => {
  const copied: string[] = []
  // An own property shadows Navigator.prototype's getter; deleting it restores the real one.
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: {
      writeText: async (text: string) => {
        if (isBlocked) throw new DOMException('Write permission denied.', 'NotAllowedError')
        copied.push(text)
      },
    },
  })
  clipboard = copied
  return () => {
    delete (navigator as { clipboard?: unknown }).clipboard
  }
}
export const ThemeCopyCode: Story = {
  beforeEach: withClipboard(),
  play: async ({ canvas, userEvent }) => {
    const dialog = await openTheme(canvas, userEvent)
    const copy = dialog.getByRole('button', { name: 'Copy code' })
    const status = dialog.getByRole('status')
    // Nothing changed: a bare <Theme>.
    await userEvent.click(copy)
    await waitFor(() => expect(clipboard).toEqual(['<Theme>']))
    await expect(status).toHaveTextContent('Code copied')

    // Only what differs from the defaults, the font as a token.
    await userEvent.click(within(dialog.getByRole('radiogroup', { name: 'Accent' })).getByRole('radio', { name: 'Rose' }))
    await userEvent.click(dialog.getByRole('radio', { name: 'Full' }))
    await userEvent.click(copy)
    await waitFor(() => expect(clipboard.at(-1)).toBe('<Theme accentColor="rose" radius="full">'))

    await userEvent.click(within(dialog.getByRole('radiogroup', { name: 'Gray' })).getByRole('radio', { name: 'Slate' }))
    await userEvent.click(dialog.getByRole('combobox', { name: 'Scaling' }))
    await userEvent.click(await screen.findByRole('option', { name: '90%' }))
    await userEvent.click(dialog.getByRole('radio', { name: 'Dark' }))
    await userEvent.click(dialog.getByRole('combobox', { name: 'Font' }))
    await userEvent.click(await screen.findByRole('option', { name: 'Serif' }))
    await userEvent.click(copy)
    await waitFor(() =>
      expect(clipboard.at(-1)).toBe(
        '<Theme accentColor="rose" grayColor="slate" radius="full" scaling="90%" appearance="dark" tokens={{ \'font-sans\': "ui-serif, Georgia, serif" }}>',
      ),
    )
  },
}

export const ThemeCopyBlocked: Story = {
  beforeEach: withClipboard(true),
  play: async ({ canvas, userEvent }) => {
    const dialog = await openTheme(canvas, userEvent)
    await userEvent.click(dialog.getByRole('button', { name: 'Copy code' }))
    await waitFor(() => expect(dialog.getByRole('status')).toHaveTextContent(/could not copy/i))
  },
}

export const ThemeFromUrl: Story = {
  beforeEach: withUrl({
    'theme-accent': 'rose',
    'theme-radius': 'full',
    'theme-gray': 'foo',
    'theme-font': 'geist',
    'theme-scaling': '90%',
    appearance: 'outlined',
  }),
  play: async ({ canvas, userEvent }) => {
    const received = await fakePreview(await frame(canvas))
    // Only what differs from the frame's start goes over; the unknown gray is dropped.
    await waitFor(() =>
      expect(lastGlobals(received)).toEqual({ accent: 'rose', radius: 'full', font: 'geist', scaling: '90%' }),
    )
    // Button's own appearance prop is untouched by the theme's.
    await expect(propsPanel(canvas).getByRole('combobox', { name: 'appearance' })).toHaveTextContent('outlined')
    await expect(received.find((e) => e.type === 'updateStoryArgs')?.args[0]).toMatchObject({
      updatedArgs: { appearance: 'outlined' },
    })

    const dialog = await openTheme(canvas, userEvent)
    await expect(within(dialog.getByRole('radiogroup', { name: 'Accent' })).getByRole('radio', { name: 'Rose' })).toBeChecked()
    await expect(within(dialog.getByRole('radiogroup', { name: 'Gray' })).getByRole('radio', { name: 'Gray' })).toBeChecked()
    await expect(dialog.getByRole('radio', { name: 'Full' })).toBeChecked()
    await expect(dialog.getByRole('combobox', { name: 'Font' })).toHaveTextContent('Geist')
    await expect(dialog.getByRole('combobox', { name: 'Scaling' })).toHaveTextContent('90%')
  },
}

/** The Preview theme belongs to the page: Back changes the item, not the theme. */
export const ThemeSurvivesBack: Story = {
  play: async ({ canvas, userEvent }) => {
    const items = await openItems(canvas, userEvent)
    await userEvent.click(items.getByRole('link', { name: /Badge/ }))
    await showing(canvas, 'Badge')
    if (canvas.queryByRole('button', { name: 'Browse' })) await userEvent.keyboard('{Escape}')
    const dialog = await openTheme(canvas, userEvent)
    await userEvent.click(within(dialog.getByRole('radiogroup', { name: 'Accent' })).getByRole('radio', { name: 'Rose' }))
    await userEvent.keyboard('{Escape}')
    history.back()
    await showing(canvas, 'Button')
    await waitFor(() => expect(param('theme-accent')).toBe('rose'))
    const again = await openTheme(canvas, userEvent)
    await expect(within(again.getByRole('radiogroup', { name: 'Accent' })).getByRole('radio', { name: 'Rose' })).toBeChecked()
  },
}

export const ThemeUnknownInUrl: Story = {
  beforeEach: withUrl({ 'theme-accent': 'foo' }),
  play: async ({ canvas, userEvent }) => {
    const received = await fakePreview(await frame(canvas))
    const dialog = await openTheme(canvas, userEvent)
    await expect(within(dialog.getByRole('radiogroup', { name: 'Accent' })).getByRole('radio', { name: 'Blue' })).toBeChecked()
    await expect(received.filter((e) => e.type === 'updateGlobals')).toEqual([])
  },
}

export const FollowsOs: Story = {
  beforeEach: withPrefersDark(true),
  play: async ({ canvas }) => {
    // No Dark button: the page follows the OS, and the Preview theme is apart.
    await expect(canvas.queryByRole('button', { name: 'Dark' })).toBeNull()
    await waitFor(() => expect(document.documentElement).toHaveClass('dark'))
    // And keeps following it when the OS setting changes.
    setPrefersDark(false)
    await waitFor(() => expect(document.documentElement).not.toHaveClass('dark'))
  },
}

export const BrowserBar: Story = {
  beforeEach: [withUrl({}), withPrefersDark(false)],
  play: async ({ canvas, userEvent }) => {
    // The address field is a real, named text field, on example.com until changed.
    const address = canvas.getByRole('textbox', { name: 'Address' })
    await expect(address).toHaveValue('example.com')
    await expect(param('address')).toBeNull()

    // A domain typed in goes in the URL; back to example.com, it leaves.
    await userEvent.clear(address)
    await userEvent.type(address, 'acme.dev')
    await expect(param('address')).toBe('acme.dev')
    await userEvent.clear(address)
    await expect(param('address')).toBeNull()
    // Left empty, the field goes back to example.com, as the link shows it.
    await userEvent.tab()
    await expect(address).toHaveValue('example.com')
    await userEvent.clear(address)
    await userEvent.type(address, ' acme.dev ')
    await expect(param('address')).toBe('acme.dev')
    await userEvent.tab()
    await expect(address).toHaveValue('acme.dev')
    await userEvent.clear(address)
    await userEvent.type(address, 'example.com')
    await expect(param('address')).toBeNull()

    // The bar wears the Preview theme's appearance: System follows the OS (light here).
    // Found before the modal popover opens, which hides the page from queries.
    const bar = address.closest('.light, .dark')
    await expect(bar).toHaveClass('light')
    const trigger = canvas.getByRole('button', { name: 'Theme' })
    await userEvent.click(trigger)
    const dialog = within(await screen.findByRole('dialog', { name: 'Preview theme' }))
    await userEvent.click(dialog.getByRole('radio', { name: 'Dark' }))
    await expect(bar).toHaveClass('dark')
    // The page around it does not.
    await expect(document.documentElement).not.toHaveClass('dark')
    await userEvent.click(dialog.getByRole('radio', { name: 'System' }))
    await expect(bar).toHaveClass('light')
    setPrefersDark(true)
    await waitFor(() => expect(bar).toHaveClass('dark'))
    await userEvent.keyboard('{Escape}')
  },
}

export const BrowserBarFromUrl: Story = {
  beforeEach: withUrl({ address: 'acme.dev' }),
  play: async ({ canvas, userEvent }) => {
    const address = () => canvas.getByRole('textbox', { name: 'Address' })
    // A shared link opens on the same domain.
    await expect(address()).toHaveValue('acme.dev')
    // Every viewport's bar shows it, and an edit in one carries to the others.
    await userEvent.click(viewportTab(canvas, 'Tablet'))
    await expect(address()).toHaveValue('acme.dev')
    await expect(param('address')).toBe('acme.dev')
    await userEvent.click(viewportTab(canvas, 'Mobile'))
    await expect(address()).toHaveValue('acme.dev')
    await userEvent.clear(address())
    await userEvent.type(address(), 'shop.dev')
    await expect(param('address')).toBe('shop.dev')
    await userEvent.click(viewportTab(canvas, 'Desktop'))
    await expect(address()).toHaveValue('shop.dev')
  },
}

/** Each viewport's bar wears the Preview theme's appearance, Mobile's two pieces both. */
export const BrowserBarDevices: Story = {
  beforeEach: [withUrl({ vp: 'mobile' }), withPrefersDark(false)],
  play: async ({ canvas, userEvent }) => {
    // Found before the modal popover opens, which hides the page from queries.
    const win = canvas.getByTestId('preview-window')
    const tablet = viewportTab(canvas, 'Tablet')
    await expect(win.querySelectorAll(':scope > .light')).toHaveLength(2)
    await userEvent.click(canvas.getByRole('button', { name: 'Theme' }))
    const dialog = within(await screen.findByRole('dialog', { name: 'Preview theme' }))
    await userEvent.click(dialog.getByRole('radio', { name: 'Dark' }))
    await expect(win.querySelectorAll(':scope > .dark')).toHaveLength(2)
    await userEvent.keyboard('{Escape}')
    await userEvent.click(tablet)
    await expect(win.querySelectorAll(':scope > .dark')).toHaveLength(1)
  },
}

/** The Stage: a wallpaper in the Preview theme's accent and appearance, the device floating on it. */
export const Stage: Story = {
  beforeEach: [withUrl({}), withPrefersDark(false)],
  play: async ({ canvas, userEvent }) => {
    // Found before the modal popover opens, which hides the page from queries.
    const stage = canvas.getByTestId('stage')
    const wallpaper = canvas.getByTestId('wallpaper')
    const band = wallpaper.querySelector('path')!
    // The glass frame is the window's holder's ::before: decoration screen readers never see.
    const glass = canvas.getByTestId('preview-window').parentElement!
    const look = () => ({
      frame: getComputedStyle(glass, '::before').backgroundColor,
      glow: getComputedStyle(stage).backgroundImage,
      band: getComputedStyle(band).fill,
      page: getComputedStyle(stage).backgroundColor,
    })
    // Decoration only: hidden from assistive tech, and the device stays where it was.
    await expect(wallpaper).toHaveAttribute('aria-hidden', 'true')
    await expect(wallpaper.contains(canvas.getByTestId('preview-window'))).toBe(false)
    await expect(stage).toHaveClass('light')
    const blue = look()

    const dialog = await openTheme(canvas, userEvent)
    // Another accent: the glow and the bands take it, the page under them does not.
    await userEvent.click(dialog.getByRole('radio', { name: 'Rose' }))
    await waitFor(() => expect(look().band).not.toBe(blue.band))
    await expect(look().glow).not.toBe(blue.glow)
    await expect(look().page).toBe(blue.page)
    const rose = look()

    // Dark: the Stage, wallpaper and frame go dark with it; the page around stays on the OS.
    await userEvent.click(dialog.getByRole('radio', { name: 'Dark' }))
    await waitFor(() => expect(stage).toHaveClass('dark'))
    await expect(look().page).not.toBe(rose.page)
    await expect(look().band).not.toBe(rose.band)
    await expect(look().frame).not.toBe(rose.frame)
    await expect(document.documentElement).not.toHaveClass('dark')
    await userEvent.keyboard('{Escape}')
    await fitsDevice(canvas, 1280, 800)
  },
}
