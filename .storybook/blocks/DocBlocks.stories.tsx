import type { Meta, StoryObj } from '@storybook/react-vite'
import { STORY_RENDERED } from 'storybook/internal/core-events'
import { addons } from 'storybook/preview-api'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { Icon } from '@/lib/icon'
import { Anatomy, DocTab, DocTabs, DoDont, SpecTable, States } from '.'

/* Stories for the docs blocks themselves, tagged !dev: they run as tests (and
   a11y) like any story, but stay out of the sidebar and the Playground. The
   Internal / Docs blocks page shows them in use. */
const meta = {
  title: 'Internal/Docs blocks',
  tags: ['!dev'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const example = (
  <Button startIcon={<Icon name="plus" />} size="md">
    Add item
  </Button>
)

const tabs = (
  <DocTabs>
    <DocTab value="overview">
      <p>What it is.</p>
    </DocTab>
    <DocTab value="specs">
      <p>How it is built.</p>
    </DocTab>
    <DocTab value="guidelines">
      <p>How to use it.</p>
    </DocTab>
  </DocTabs>
)

export const Tabs: Story = {
  render: () => tabs,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tablist', { name: 'Documentation' })).toBeVisible()
    const [overview, specs, guidelines] = canvas.getAllByRole('tab')
    await expect([overview, specs, guidelines].map((t) => t.textContent)).toEqual(['Overview', 'Specs', 'Guidelines'])
    // Overview first, always.
    await expect(overview).toHaveAttribute('aria-selected', 'true')
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('What it is.')
    // Mouse.
    await userEvent.click(specs)
    await waitFor(() => expect(canvas.getByRole('tabpanel')).toHaveTextContent('How it is built.'))
    // Arrow keys select as they move: a docs page, not a toolbar.
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(guidelines).toHaveAttribute('aria-selected', 'true'))
    await waitFor(() => expect(canvas.getByRole('tabpanel')).toHaveTextContent('How to use it.'))
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}')
    await waitFor(() => expect(overview).toHaveAttribute('aria-selected', 'true'))
    await expect(overview).toHaveFocus()
  },
}

const anatomy = (
  <Anatomy
    parts={[
      { name: 'Container', selector: 'button', description: 'The box.' },
      { name: 'Start icon', selector: 'svg', description: 'Decorative.' },
    ]}
  >
    {example}
  </Anatomy>
)

export const AnatomyMarkers: Story = {
  name: 'Anatomy',
  render: () => anatomy,
  play: async ({ canvas }) => {
    // One marker per part, each named by number and part.
    const markers = await canvas.findAllByRole('img', { name: /^\d: / })
    await expect(markers.map((m) => m.getAttribute('aria-label'))).toEqual(['1: Container', '2: Start icon'])
    await expect(markers.map((m) => m.textContent)).toEqual(['1', '2'])
    // Each sits above its part, centred on it, with a line down to the part.
    for (const [marker, part] of [
      [markers[0], canvas.getByRole('button')],
      [markers[1], canvas.getByRole('button').querySelector('svg')!],
    ] as const) {
      const m = marker.getBoundingClientRect()
      const p = part.getBoundingClientRect()
      await expect(Math.abs(m.left + m.width / 2 - (p.left + p.width / 2))).toBeLessThanOrEqual(1)
      await expect(m.bottom).toBeLessThan(p.top)
      const line = (marker.previousElementSibling as HTMLElement).getBoundingClientRect()
      await expect(Math.abs(line.bottom - p.top)).toBeLessThanOrEqual(1)
    }
    // The key lists every part.
    const key = canvas.getByRole('table')
    await expect(within(key).getByRole('rowheader', { name: 'Start icon' })).toBeVisible()
    await expect(key).not.toHaveTextContent('Not found')
  },
}

export const AnatomyCrowded: Story = {
  render: () => (
    <Anatomy
      parts={[
        { name: 'Container', selector: 'button' },
        { name: 'Label', selector: 'button' },
        { name: 'Again', selector: 'button' },
      ]}
    >
      {example}
    </Anatomy>
  ),
  play: async ({ canvas }) => {
    // Parts with the same centre still get three markers that do not overlap:
    // one above, one below, one slid aside.
    const boxes = (await canvas.findAllByRole('img', { name: /^\d: / })).map((m) => m.getBoundingClientRect())
    await expect(boxes).toHaveLength(3)
    for (const [i, a] of boxes.entries())
      for (const b of boxes.slice(i + 1))
        await expect(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top).toBe(true)
  },
}

export const AnatomyMissingPart: Story = {
  render: () => (
    <Anatomy
      parts={[
        { name: 'Container', selector: 'button' },
        { name: 'Badge', selector: '[data-badge]' },
      ]}
    >
      {example}
    </Anatomy>
  ),
  play: async ({ canvas }) => {
    // A selector that matches nothing gets no marker, and says so in the key.
    await expect(await canvas.findAllByRole('img', { name: /^\d: / })).toHaveLength(1)
    await expect(canvas.getByRole('table')).toHaveTextContent('Not found: [data-badge] matches nothing in the example.')
  },
}

const spec = (
  <SpecTable
    caption="Measurements, md"
    rows={[
      { part: 'Container', property: 'Height', token: '--control-md' },
      { part: 'Container', property: 'Background', token: '--background' },
      { part: 'Label', property: 'Line height', token: '--leading-body' },
    ]}
  />
)

export const Spec: Story = {
  render: () => spec,
  play: async ({ canvas }) => {
    const rows = canvas.getAllByRole('row').slice(1) as HTMLTableRowElement[]
    const value = (row: HTMLTableRowElement) => row.cells[3]
    // A length resolves to px, calc() and all.
    await expect(value(rows[0])).toHaveTextContent(/^32px$/)
    await expect(value(rows[0])).toHaveAttribute('data-kind', 'length')
    // A colour shows a swatch and the computed colour.
    const background = value(rows[1])
    await expect(background).toHaveAttribute('data-kind', 'color')
    await expect(background.querySelector('[aria-hidden="true"]')).not.toBeNull()
    // Anything else shows its declared value.
    await expect(value(rows[2])).toHaveAttribute('data-kind', 'raw')
    // The value follows the theme.
    const html = document.documentElement
    const wasDark = html.classList.contains('dark')
    const before = background.textContent
    html.classList.toggle('dark')
    try {
      await waitFor(() => expect(background.textContent).not.toBe(before))
    } finally {
      html.classList.toggle('dark', wasDark)
    }
    await waitFor(() => expect(background.textContent).toBe(before))
  },
}

const states = (
  <States
    states={[
      { label: 'Enabled' },
      { label: 'Hover', pseudo: 'hover' },
      { label: 'Focus', pseudo: 'focus-visible' },
      { label: 'Pressed', pseudo: 'active' },
      {
        label: 'Disabled',
        content: (
          <Button startIcon={<Icon name="plus" />} disabled>
            Add item
          </Button>
        ),
      },
    ]}
  >
    {example}
  </States>
)

export const StateRow: Story = {
  name: 'States',
  render: () => states,
  play: async ({ canvasElement }) => {
    // Storybook announces each render, and the addon rewrites the stylesheets
    // then (docs pages included). The test runner announces nothing, so play
    // Storybook's part.
    addons.getChannel().emit(STORY_RENDERED)
    const cells = within(canvasElement).getAllByRole('listitem')
    await expect(cells.map((c) => c.lastElementChild!.textContent)).toEqual(['Enabled', 'Hover', 'Focus', 'Pressed', 'Disabled'])
    const stage = (label: string) => canvasElement.querySelector<HTMLElement>(`[data-state="${label}"]`)!
    await expect(stage('Hover')).toHaveClass('pseudo-hover-all')
    await expect(stage('Focus')).toHaveClass('pseudo-focus-visible-all')
    await expect(stage('Pressed')).toHaveClass('pseudo-active-all')
    await expect(stage('Disabled').querySelector('button')).toBeDisabled()
    // The forced states actually paint: the addon rewrote :hover and friends.
    const look = (label: string) => {
      const s = getComputedStyle(stage(label).querySelector('button')!)
      return `${s.backgroundColor} ${s.outlineStyle}`
    }
    // What the addon did to the stylesheets, for the failure message.
    const rewritten = () => {
      const button = stage('Hover').querySelector('button')!
      const rules = [...document.styleSheets].flatMap((sheet) => {
        try {
          return [...sheet.cssRules]
        } catch {
          return []
        }
      })
      const hover = rules.filter((r): r is CSSStyleRule => r instanceof CSSStyleRule && r.selectorText.includes(':hover'))
      const forced = hover.filter((r) => r.selectorText.includes('pseudo-hover-all'))
      const engaged = forced.filter((r) => button.matches(r.selectorText))
      return `${document.styleSheets.length} sheets, ${hover.length} :hover rules, ${forced.length} rewritten, ${engaged.length} reach the button: ${engaged.map((r) => r.cssText).join(' | ').slice(0, 300) || hover.find((r) => r.selectorText.includes('button'))?.cssText.slice(0, 300)}`
    }
    await waitFor(() => {
      // Again on each try: a stylesheet Vite injects late is rewritten too.
      addons.getChannel().emit(STORY_RENDERED)
      expect(look('Hover'), rewritten()).not.toBe(look('Enabled'))
    })
    // No transition to wait out: each state shows its end value at once.
    await expect(getComputedStyle(stage('Hover').querySelector('button')!).transitionDuration).toBe('0s')
    await expect(look('Pressed')).not.toBe(look('Hover'))
    await expect(getComputedStyle(stage('Focus').querySelector('button')!).outlineStyle).toBe('solid')
  },
}

const pair = (
  <DoDont
    do={<Button>Save</Button>}
    doCaption="One primary button: the thing to do next."
    dont={
      <div style={{ display: 'flex', gap: 8 }}>
        <Button>Save</Button>
        <Button>Publish</Button>
      </div>
    }
    dontCaption="Two primary buttons compete for the same click."
  />
)

export const Pair: Story = {
  name: 'Do / Don’t',
  render: () => pair,
  play: async ({ canvas }) => {
    const [good, bad] = canvas.getAllByRole('figure')
    // The verdict is a word, not only a colour.
    await expect(good.querySelector('figcaption')).toHaveTextContent(/^Do One primary button/)
    await expect(bad.querySelector('figcaption')).toHaveTextContent(/^Don’t Two primary buttons/)
    await expect(within(good).getByRole('button', { name: 'Save' })).toBeVisible()
  },
}

/* Light and dark, every block at once: the a11y check covers contrast in both. */
const all = (
  <>
    {tabs}
    {anatomy}
    {spec}
    {states}
    {pair}
  </>
)

export const Dark: Story = {
  globals: { theme: 'dark' },
  render: () => all,
  play: async ({ canvas }) => {
    await expect(document.documentElement).toHaveClass('dark')
    await expect(canvas.getAllByRole('figure')).toHaveLength(2)
  },
}

export const Narrow: Story = {
  render: () => <div style={{ inlineSize: 320 }}>{all}</div>,
  play: async ({ canvasElement }) => {
    // At phone width nothing pushes the page sideways: tables scroll in their
    // own box, grids drop to one column.
    const box = canvasElement.firstElementChild as HTMLElement
    await expect(box.scrollWidth).toBeLessThanOrEqual(320)
    for (const figure of within(canvasElement).getAllByRole('figure'))
      await expect(figure.getBoundingClientRect().width).toBeLessThanOrEqual(320)
  },
}
