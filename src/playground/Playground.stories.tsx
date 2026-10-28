import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, screen, waitFor, within } from 'storybook/test'
import { setPrefersDark, withPrefersDark } from '@/test/story-helpers'
import type { InspectRequest } from './inspect'
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
    {
      ...item('component', 'Button', 'Buttons', 'beta', [
        { name: 'variant', control: 'inline-radio', options: ['primary', 'secondary'], default: 'primary' },
        // Same name as the Preview theme's appearance: the theme's param is prefixed.
        { name: 'appearance', control: 'select', options: ['filled', 'outlined'], default: 'filled' },
        { name: 'size', control: 'inline-radio', options: ['sm', 'md'], default: 'md' },
        { name: 'isLoading', control: 'boolean' },
        { name: 'children', control: 'text', default: 'Button' },
      ]),
      specs: {
        anatomy: [
          { name: 'Container', selector: 'button', description: 'The clickable box.' },
          { name: 'Label', selector: 'button > span', description: 'The text.' },
        ],
        measurements: [
          { caption: 'sm', rows: [{ part: 'Container', property: 'Height', token: '--control-sm' }] },
          { caption: 'md', rows: [{ part: 'Container', property: 'Height', token: '--control-md' }] },
          { caption: 'Every size', rows: [{ part: 'Focus ring', property: 'Width', token: '--focus-width' }] },
        ],
        color: [
          { caption: 'primary', rows: [{ part: 'Label, contained', property: 'Colour', token: '--primary-foreground' }] },
          { caption: 'secondary', rows: [{ part: 'Label', property: 'Colour', token: '--secondary-foreground' }] },
          { caption: 'Every variant', rows: [{ part: 'Container, hover', property: 'Background', token: '--accent' }] },
        ],
        pseudo: ['hover', 'focus-visible', 'focus'],
      },
      guideline: {
        whenToUse: ['For an action on this page: `save` or **delete**.', '- One primary per view\n- The rest step down'],
        whenNotToUse: ['Not for going to [another page](?path=/docs/link).'],
        doDont: [
          {
            do: { storyId: 'components-buttons-button--do-one', caption: 'One primary button.' },
            dont: { storyId: 'components-buttons-button--dont-two', caption: 'Two primaries compete.' },
          },
        ],
      },
    },
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

/** No device around the page: the frame fills the center column below its toolbar. */
const fillsCenter = async (canvas: ReturnType<typeof within>) => {
  await waitFor(async () => {
    const iframe = await frame(canvas)
    const live = iframe.parentElement as HTMLElement
    expect([iframe.offsetWidth, iframe.offsetHeight]).toEqual([live.clientWidth, live.clientHeight])
    expect(live.closest('main')!.clientWidth).toBe(live.clientWidth)
  })
}
const detailTab = (canvas: ReturnType<typeof within>, name: string) =>
  within(canvas.getByRole('tablist', { name: 'Details' })).getByRole('tab', { name })
const param = (key: string) => new URLSearchParams(location.search).get(key)
const propsPanel = (canvas: ReturnType<typeof within>) => within(canvas.getByRole('complementary', { name: 'Details' }))

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
  for (const key of ['item', 'tab', ...manifest.items.flatMap((i) => i.props.map((p) => p.name))]) url.searchParams.delete(key)
  for (const key of [...url.searchParams.keys()].filter((k) => k.startsWith('theme-'))) url.searchParams.delete(key)
  for (const [k, v] of Object.entries(search)) url.searchParams.set(k, v)
  // Only when it changes: WebKit allows 100 replaceState calls per 10 seconds
  // per page, and every story in this file shares one page.
  if (url.href !== before) history.replaceState(null, '', url)
  return () => {
    if (location.href !== before) history.replaceState(null, '', before)
  }
}

const meta = {
  title: 'Site/Playground',
  component: Playground,
  parameters: { layout: 'fullscreen' },
  // A sample page stands in for Storybook (.storybook/fixtures/playground): the test never loads real stories in the frame.
  args: { manifest, storybookUrl: '/playground-fixture/', homeUrl: '#' },
  beforeEach: withUrl({}),
} satisfies Meta<typeof Playground>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    // No item in the URL: Button, on the Playground tab.
    await showing(canvas, 'Button')
    const iframe = await frame(canvas)
    await expect(iframe.getAttribute('src')).toContain(`id=${button.storyId}`)
    await fillsCenter(canvas)
    await waitFor(() => expect(canvas.queryByRole('status', { name: /Loading/ })).toBeNull())

    // No device to pick, and no browser chrome around the page.
    await expect(canvas.queryByRole('tablist', { name: 'Viewport' })).toBeNull()
    await expect(canvas.queryByRole('textbox', { name: 'Address' })).toBeNull()
    await expect(detailTab(canvas, 'Playground')).toHaveAttribute('aria-selected', 'true')
    // The toolbar names the item; its Storybook page is one icon button away.
    await expect(canvas.getByRole('heading', { name: 'Button', level: 2 })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Open in Storybook' })).toHaveAttribute(
      'href',
      `/playground-fixture/?path=/story/${button.storyId}`,
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
      `/playground-fixture/?path=/story/${tooltip.storyId}`,
    )
    await waitFor(() => expect(param('item')).toBe(tooltip.id))
    // Tooltip has no props: the column stays and says so.
    await expect(propsPanel(canvas).getByText('Tooltip has no props to change here.')).toBeVisible()

    // The filters survive closing and reopening the drawer.
    items = await openItems(canvas, userEvent)
    await expect(items.getByRole('link', { name: /Tooltip/ })).toHaveAttribute('aria-current', 'true')
    await expect(items.getAllByRole('link')).toHaveLength(1)
    await userEvent.keyboard('{Escape}')

    // Back steps to the entry before Tooltip: Button, as the page opened.
    history.back()
    await showing(canvas, 'Button')
    await fillsCenter(canvas)
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
    // The closing listbox stays in the DOM, unnamed, while it animates out;
    // the a11y check after the play function must not catch it (WebKit did).
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull())
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
    await waitFor(() => expect(param('variant')).toBe('secondary'))

    await userEvent.click(panel.getByRole('switch', { name: 'isLoading' }))
    await waitFor(() => expect(last()).toEqual(update({ isLoading: true })))
    await waitFor(() => expect(param('isLoading')).toBe('true'))

    const text = panel.getByRole('textbox', { name: 'children' })
    await userEvent.clear(text)
    await userEvent.type(text, 'Save it!')
    await waitFor(() => expect(last()).toEqual(update({ children: 'Save it!' })))
    await waitFor(() => expect(param('children')).toBe('Save it!'))

    // Back to its default, a prop is reset in the frame and leaves the URL.
    await userEvent.click(panel.getByRole('switch', { name: 'isLoading' }))
    await waitFor(() =>
      expect(last()).toEqual({ type: 'resetStoryArgs', args: [{ storyId: button.storyId, argNames: ['isLoading'] }] }),
    )
    await waitFor(() => expect(param('isLoading')).toBeNull())

    // Reset puts everything back.
    await userEvent.click(panel.getByRole('button', { name: 'Reset' }))
    await waitFor(() =>
      expect(last()).toEqual({
        type: 'resetStoryArgs',
        args: [{ storyId: button.storyId, argNames: ['variant', 'children'] }],
      }),
    )
    await waitFor(() => expect(param('variant')).toBeNull())
    await waitFor(() => expect(param('children')).toBeNull())
    await expect(panel.getByRole('combobox', { name: 'variant' })).toHaveTextContent('primary')
    await expect(panel.getByRole('textbox', { name: 'children' })).toHaveValue('Button')

    // None of it reloaded the frame.
    await expect((await frame(canvas)).getAttribute('src')).toBe(src)
  },
}

export const FromUrl: Story = {
  beforeEach: withUrl({ item: badge.id, count: '3', isDot: 'true', gone: 'x' }),
  play: async ({ canvas, userEvent }) => {
    await showing(canvas, 'Badge')
    const iframe = await frame(canvas)
    await expect(iframe.getAttribute('src')).toContain(`id=${badge.storyId}`)

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
    await waitFor(() => expect(param('count')).toBe('12'))
  },
}

export const UnknownInUrl: Story = {
  beforeEach: withUrl({ item: 'components-gone-widget', tab: 'nope' }),
  play: async ({ canvas }) => {
    await showing(canvas, 'Button')
    await expect(detailTab(canvas, 'Playground')).toHaveAttribute('aria-selected', 'true')
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
    await expect(dialog.getByRole('radio', { name: 'Rounded' })).toBeChecked()

    await userEvent.click(accent.getByRole('radio', { name: 'Rose' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ accent: 'rose' }))
    await userEvent.click(gray.getByRole('radio', { name: 'Slate' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ gray: 'slate' }))
    await userEvent.click(dialog.getByRole('radio', { name: 'Full rounded' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ radius: 'full-rounded' }))
    await userEvent.click(dialog.getByRole('radio', { name: 'Dark' }))
    await waitFor(() =>
      expect([param('theme-accent'), param('theme-gray'), param('theme-radius'), param('theme-appearance')]).toEqual([
        'rose',
        'slate',
        'full-rounded',
        'dark',
      ]),
    )

    // Back to the default: the param goes.
    await userEvent.click(accent.getByRole('radio', { name: 'Blue' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ accent: 'blue' }))
    await waitFor(() => expect(param('theme-accent')).toBeNull())

    // Reset puts every option back and empties the URL of them.
    await userEvent.click(dialog.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ gray: 'gray', radius: 'rounded', appearance: 'system' }))
    await waitFor(() => expect(themeParams()).toEqual([]))
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
    await waitFor(() => expect([param('theme-font'), param('theme-scaling')]).toEqual(['inter', '110%']))

    // Reset covers Typo too.
    await userEvent.click(dialog.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(lastGlobals(received)).toEqual({ font: 'system', scaling: '100%' }))
    await waitFor(() => expect(themeParams()).toEqual([]))
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
    await userEvent.click(dialog.getByRole('radio', { name: 'Full rounded' }))
    await userEvent.click(copy)
    await waitFor(() => expect(clipboard.at(-1)).toBe('<Theme accentColor="rose" radius="full-rounded">'))

    await userEvent.click(within(dialog.getByRole('radiogroup', { name: 'Gray' })).getByRole('radio', { name: 'Slate' }))
    await userEvent.click(dialog.getByRole('combobox', { name: 'Scaling' }))
    await userEvent.click(await screen.findByRole('option', { name: '90%' }))
    await userEvent.click(dialog.getByRole('radio', { name: 'Dark' }))
    await userEvent.click(dialog.getByRole('combobox', { name: 'Font' }))
    await userEvent.click(await screen.findByRole('option', { name: 'Serif' }))
    await userEvent.click(copy)
    await waitFor(() =>
      expect(clipboard.at(-1)).toBe(
        '<Theme accentColor="rose" grayColor="slate" radius="full-rounded" scaling="90%" appearance="dark" tokens={{ \'font-sans\': "ui-serif, Georgia, serif" }}>',
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
    'theme-radius': 'full-rounded',
    'theme-gray': 'foo',
    'theme-font': 'geist',
    'theme-scaling': '90%',
    appearance: 'outlined',
  }),
  play: async ({ canvas, userEvent }) => {
    const received = await fakePreview(await frame(canvas))
    // Only what differs from the frame's start goes over; the unknown gray is dropped.
    await waitFor(() =>
      expect(lastGlobals(received)).toEqual({ accent: 'rose', radius: 'full-rounded', font: 'geist', scaling: '90%' }),
    )
    // Button's own appearance prop is untouched by the theme's.
    await expect(propsPanel(canvas).getByRole('combobox', { name: 'appearance' })).toHaveTextContent('outlined')
    await expect(received.find((e) => e.type === 'updateStoryArgs')?.args[0]).toMatchObject({
      updatedArgs: { appearance: 'outlined' },
    })

    const dialog = await openTheme(canvas, userEvent)
    await expect(within(dialog.getByRole('radiogroup', { name: 'Accent' })).getByRole('radio', { name: 'Rose' })).toBeChecked()
    await expect(within(dialog.getByRole('radiogroup', { name: 'Gray' })).getByRole('radio', { name: 'Gray' })).toBeChecked()
    await expect(dialog.getByRole('radio', { name: 'Full rounded' })).toBeChecked()
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

/**
 * The right column's tabs. An item without Specs or Guideline has them
 * disabled, says so, and a `?tab=` it lacks shows Playground.
 */
export const DetailTabs: Story = {
  beforeEach: withUrl({ tab: 'specs' }),
  play: async ({ canvas, userEvent }) => {
    await showing(canvas, 'Button')
    // Button has Specs: the URL's tab opens.
    await expect(detailTab(canvas, 'Specs')).toHaveAttribute('aria-selected', 'true')
    await expect(detailTab(canvas, 'Guideline')).not.toHaveAttribute('aria-disabled', 'true')
    await expect(canvas.queryByText(/not written for Button/)).toBeNull()

    // Tooltip has neither: Playground shows, and the wanted tab stays in the URL for the next item.
    const items = await openItems(canvas, userEvent)
    await userEvent.click(items.getByRole('link', { name: /Tooltip/ }))
    await showing(canvas, 'Tooltip')
    await expect(detailTab(canvas, 'Playground')).toHaveAttribute('aria-selected', 'true')
    await expect(detailTab(canvas, 'Specs')).toHaveAttribute('aria-disabled', 'true')
    await expect(canvas.getByText('Specs and Guideline are not written for Tooltip yet.')).toBeVisible()
    await expect(param('tab')).toBe('specs')
  },
}

const lastInspect = (received: ChannelEvent[]) =>
  (received.findLast((e) => e.type === 'playground/inspect')?.args[0] as { request: InspectRequest | null } | undefined)
    ?.request

/**
 * Specs asks the frame to number the parts and resolve the tokens of the
 * tables it shows: the current size's, plus those for every size. The frame
 * answers with the values; hovering a row asks for its redline.
 */
export const SpecsTab: Story = {
  beforeEach: withUrl({ tab: 'specs' }),
  play: async ({ canvas, userEvent }) => {
    const received = await fakePreview(await frame(canvas))
    const panel = propsPanel(canvas)
    await waitFor(() =>
      expect(lastInspect(received)).toEqual({
        parts: [
          { name: 'Container', selector: 'button' },
          { name: 'Label', selector: 'button > span' },
        ],
        tokens: ['--control-md', '--focus-width', '--primary-foreground'],
        highlight: null,
      }),
    )
    // The md table and the one for every size; sm is not the current size.
    await expect(panel.getByRole('table', { name: 'md' })).toBeVisible()
    await expect(panel.getByRole('table', { name: 'Every size' })).toBeVisible()
    await expect(panel.queryByRole('table', { name: 'sm' })).toBeNull()
    await expect(panel.getByRole('heading', { name: 'Anatomy' })).toBeVisible()

    // The frame's answer fills the value column.
    const iframe = await frame(canvas)
    const data = JSON.stringify({
      key: 'storybook-channel',
      event: { type: 'playground/inspected', args: [{ values: { '--control-md': { kind: 'length', text: '32px' } } }] },
    })
    window.dispatchEvent(new MessageEvent('message', { data, source: iframe.contentWindow }))
    const row = await panel.findByRole('row', { name: /Height 32px --control-md/ })

    // Hover asks for that row's redline, on its anatomy part; leaving clears it.
    await userEvent.hover(row)
    await waitFor(() =>
      expect(lastInspect(received)?.highlight).toEqual({ part: 'Container', property: 'Height', token: '--control-md' }),
    )
    await userEvent.unhover(row)
    await waitFor(() => expect(lastInspect(received)?.highlight).toBeNull())
    // A tap (or Tab) focuses the row, which asks for the redline the same way.
    row.focus()
    await waitFor(() => expect(lastInspect(received)?.highlight?.property).toBe('Height'))
    row.blur()
    await waitFor(() => expect(lastInspect(received)?.highlight).toBeNull())
    // Under 1024 the details sit below the live view, which sticks at the top so the redline stays in sight.
    if (canvas.queryByRole('button', { name: 'Browse' }))
      await expect(getComputedStyle(canvas.getByRole('main')).position).toBe('sticky')
    // A row whose part has no element in the anatomy (Focus ring) is still listed, unnumbered.
    await expect(panel.getByRole('row', { name: /^Focus ring Width/ })).toBeVisible()

    // Back on Playground, the frame is told to stop drawing.
    await userEvent.click(detailTab(canvas, 'Playground'))
    await waitFor(() => expect(lastInspect(received)).toBeNull())
  },
}

/** The size picked on Playground is the size Specs measures. */
export const SpecsFollowSize: Story = {
  beforeEach: withUrl({ tab: 'specs', size: 'sm' }),
  play: async ({ canvas }) => {
    const received = await fakePreview(await frame(canvas))
    const panel = propsPanel(canvas)
    await expect(panel.getByRole('table', { name: 'sm' })).toBeVisible()
    await expect(panel.queryByRole('table', { name: 'md' })).toBeNull()
    await waitFor(() => expect(lastInspect(received)?.tokens).toEqual(['--control-sm', '--focus-width', '--primary-foreground']))
  },
}

/**
 * The State picker forces a pseudo-class on the live item, and the Color
 * rows that name a state show only in it. Tables follow the variant as they
 * follow the size.
 */
export const SpecsStates: Story = {
  beforeEach: withUrl({ tab: 'specs' }),
  play: async ({ canvas, userEvent }) => {
    const received = await fakePreview(await frame(canvas))
    const panel = propsPanel(canvas)
    const picker = within(panel.getByRole('radiogroup', { name: 'State' }))
    // focus and focus-visible are one Focus; no disabled prop, so no Disabled.
    await expect(picker.getAllByRole('radio')).toHaveLength(3)
    for (const name of ['Default', 'Hover', 'Focus']) await expect(picker.getByRole('radio', { name })).toBeVisible()
    await expect(panel.getByRole('table', { name: 'primary' })).toBeVisible()
    await expect(panel.queryByRole('table', { name: 'secondary' })).toBeNull()
    // The hover row's table is empty by default, so it is not shown.
    await expect(panel.queryByRole('table', { name: 'Every variant' })).toBeNull()

    await userEvent.click(picker.getByRole('radio', { name: 'Hover' }))
    await waitFor(() => expect(lastInspect(received)?.pseudo).toBe('hover'))
    await expect(panel.getByRole('row', { name: /Container, hover Background/ })).toBeVisible()
    await expect(lastInspect(received)?.tokens).toContain('--accent')

    await userEvent.click(picker.getByRole('radio', { name: 'Default' }))
    await waitFor(() => expect(lastInspect(received)).not.toHaveProperty('pseudo'))
  },
}

/**
 * Guideline: when to use and when not, then the Do/Don't pairs. Picking one
 * shows its story in the live view, says which in the toolbar, and leads back.
 */
export const GuidelineTab: Story = {
  beforeEach: withUrl({ tab: 'guideline' }),
  play: async ({ canvas, userEvent }) => {
    await showing(canvas, 'Button')
    const panel = propsPanel(canvas)
    await expect(panel.getByRole('heading', { name: 'When to use' })).toBeVisible()
    // Inline markdown: code and bold become elements, a link keeps its words.
    await expect(panel.getByText('save', { selector: 'code' })).toBeVisible()
    await expect(panel.getByText('delete', { selector: 'strong' })).toBeVisible()
    await expect(panel.getAllByRole('listitem').map((li) => li.textContent)).toEqual(['One primary per view', 'The rest step down'])
    await expect(panel.getByText('Not for going to another page.')).toBeVisible()
    await expect(panel.getByRole('link', { name: 'Accessibility and the rest of the guidelines' })).toHaveAttribute(
      'href',
      `/playground-fixture/?path=/docs/${button.id}--docs&docTab=guidelines`,
    )

    const received = await fakePreview(await frame(canvas))
    await userEvent.click(detailTab(canvas, 'Playground'))
    await userEvent.click(panel.getByRole('switch', { name: 'isLoading' }))
    await waitFor(() => expect(received.at(-1)?.type).toBe('updateStoryArgs'))
    await userEvent.click(detailTab(canvas, 'Guideline'))

    // The Do example takes the live view; the item's props do not go to it.
    const doButton = panel.getByRole('button', { name: /^Do One primary button/ })
    await userEvent.click(doButton)
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain('id=components-buttons-button--do-one'))
    await expect(doButton).toHaveAttribute('aria-pressed', 'true')
    await expect(within(canvas.getByRole('main')).getByText('Do')).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Open in Storybook' })).toHaveAttribute(
      'href',
      '/playground-fixture/?path=/story/components-buttons-button--do-one',
    )

    // Back shows the item again, its props kept.
    await userEvent.click(canvas.getByRole('button', { name: 'Back to Button' }))
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain(`id=${button.storyId}`))
    await expect(canvas.queryByRole('button', { name: 'Back to Button' })).toBeNull()
    await waitFor(() => expect(param('isLoading')).toBe('true'))
    await expect(propsPanel(canvas).queryByRole('switch', { name: 'isLoading' })).toBeNull()

    // Another tab ends the example too.
    await userEvent.click(panel.getByRole('button', { name: /^Don't Two primaries/ }))
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain('id=components-buttons-button--dont-two'))
    await userEvent.click(detailTab(canvas, 'Playground'))
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain(`id=${button.storyId}`))
  },
}
