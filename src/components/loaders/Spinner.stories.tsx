import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { ACCENT_COLORS, Theme } from '@/theme/Theme'
import { contrast, mediaRules } from '@/test/story-helpers'
import { Spinner } from './Spinner'

const meta = {
  title: 'Components/Loaders/Spinner',
  tags: ['beta'],
  component: Spinner,
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    size: {
      description: 'The ring: 16px (`sm`), 24px (`md`) or 32px (`lg`) across.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: { type: { summary: "'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'md'" } },
    },
    variant: {
      description: 'Colour of the indicator. `accent` is the foreground, as on Button.',
      control: 'inline-radio',
      options: ['primary', 'accent', 'secondary'],
      table: { type: { summary: "'primary' | 'accent' | 'secondary'" }, defaultValue: { summary: "'accent'" } },
    },
    label: {
      description: 'Shown under the indicator, and its accessible name. Without one the name is "Loading", visually hidden.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    delay: {
      description: 'Milliseconds before anything shows, so a fast load never flashes a spinner. The live region is there from the start.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    value: {
      description: '0–100, clamped. Turns the spinner into a progress ring that shows how far along it is. Omit to spin.',
      control: { type: 'range', min: 0, max: 100 },
      table: { type: { summary: 'number' } },
    },
    isIndeterminate: {
      description: 'Spin even when `value` is given.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

/** --duration-slow as the browser resolves it where `el` is. */
const durationSlow = (el: Element) => {
  const probe = document.createElement('span')
  probe.style.transitionDuration = 'var(--duration-slow)'
  el.append(probe)
  const value = getComputedStyle(probe).transitionDuration
  probe.remove()
  return value
}

const row = { display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }

export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    // A status, named "Loading" when no label is given; the text that is
    // announced arrives after the region is in the page.
    const status = canvas.getByRole('status', { name: 'Loading' })
    await waitFor(() => expect(status).toHaveTextContent('Loading'))
    const svg = canvasElement.querySelector('svg')!
    await expect(svg).toHaveAttribute('aria-hidden', 'true')
    // Reduced motion slows the turn rather than stopping it. A play cannot
    // set prefers-reduced-motion, so read the rule that would apply.
    const reduced = mediaRules('prefers-reduced-motion: reduce', svg).map((r) => r.style.animationDuration)
    await expect(reduced).toContain('var(--duration-spin-reduced)')
  },
}

export const WithLabel: Story = {
  args: { label: 'Loading projects…' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status', { name: 'Loading projects…' })).toBeInTheDocument()
    await expect(await canvas.findByText('Loading projects…')).toBeVisible()
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={row}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Spinner key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => expect(canvasElement.querySelectorAll('svg')).toHaveLength(3))
    // Layout width, not the bounding box: the ring is spinning, and a rotated
    // square's box is wider than the square.
    const widths = [...canvasElement.querySelectorAll('svg')].map((s) => parseFloat(getComputedStyle(s).width))
    await expect(widths).toEqual([16, 24, 32])
  },
}

export const Variants: Story = {
  render: (args) => (
    <div style={row}>
      {(['primary', 'accent', 'secondary'] as const).map((variant) => (
        <Spinner key={variant} {...args} variant={variant} label={variant} />
      ))}
    </div>
  ),
}

/** With a value it becomes a progress ring and says how far along it is. */
export const Determinate: Story = {
  args: { value: 70, label: 'Uploading', variant: 'primary', size: 'lg' },
  play: async ({ canvas }) => {
    const ring = canvas.getByRole('progressbar', { name: 'Uploading' })
    await expect(ring).toHaveAttribute('aria-valuenow', '70')
    await expect(ring).toHaveAttribute('aria-valuemin', '0')
    await expect(ring).toHaveAttribute('aria-valuemax', '100')
    // The ring eases on --duration-slow, which reduced motion sets to 0ms.
    const arc = ring.querySelector('svg > circle:last-child')!
    await expect(getComputedStyle(arc).transitionDuration).toBe(durationSlow(ring))
  },
}

/** Values outside 0–100 are clamped. */
export const Clamped: Story = {
  args: { value: 150, label: 'Uploading' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar', { name: 'Uploading' })).toHaveAttribute('aria-valuenow', '100')
  },
}

/** isIndeterminate wins over value: it spins, and is a status again. */
export const IndeterminateWithValue: Story = {
  args: { value: 40, isIndeterminate: true },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('progressbar')).toBeNull()
    await expect(canvas.getByRole('status', { name: 'Loading' })).toBeInTheDocument()
  },
}

/**
 * Nothing visible for the first 400ms, so a fast load never flashes a
 * spinner. The empty live region is there from the start, so its text is
 * announced when it arrives.
 */
export const Delay: Story = {
  args: { delay: 400 },
  play: async ({ canvas, canvasElement }) => {
    const status = canvas.getByRole('status')
    await expect(status).toBeEmptyDOMElement()
    await waitFor(() => expect(canvasElement.querySelector('svg')).toBeVisible(), { timeout: 2000 })
    await expect(status).toHaveTextContent('Loading')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Track', selector: 'svg > circle:first-child', description: 'The full ring, --border. Frames the motion; decoration.' },
  { name: 'Indicator', selector: 'svg > circle:last-child', description: 'The arc: a quarter turn while spinning, or the value as a share of the ring.' },
  { name: 'Label', selector: '[role="progressbar"] > span', description: 'Optional, under the ring. Also the accessible name.' },
]

/** Every part present. A progress ring, so the arc holds still to be pointed at. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { value: 70, label: 'Uploading', size: 'lg', variant: 'primary' },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[2]).toHaveTextContent('Uploading')
  },
}

/** Guidelines, Do: one spinner, labelled, for the region that is loading. */
export const DoOneForTheRegion: Story = {
  render: (args) => (
    <div aria-busy="true" style={{ display: 'grid', placeItems: 'center', inlineSize: 320, blockSize: 120, border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
      <Spinner {...args} label="Loading projects…" />
    </div>
  ),
}

/** Guidelines, Don't: a spinner in every card says the same thing three times. */
export const DontOnePerItem: Story = {
  tags: ['!dev'],
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      {[1, 2, 3].map((n) => (
        <div key={n} style={{ display: 'grid', placeItems: 'center', inlineSize: 100, blockSize: 120, border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
          <Spinner {...args} />
        </div>
      ))}
    </div>
  ),
}

/** The indicator clears 3:1 on the page for every variant, under all seventeen accents, in both modes. */
export const IndicatorContrast: Story = {
  render: () => (
    <div>
      {(['light', 'dark'] as const).map((mode) => (
        <Theme key={mode} appearance={mode} style={{ background: 'var(--background)', padding: 8 }}>
          {ACCENT_COLORS.map((accent) => (
            <Theme key={accent} accentColor={accent} style={{ display: 'flex', gap: 4 }}>
              {(['primary', 'accent', 'secondary'] as const).map((variant) => (
                <Spinner key={variant} size="sm" variant={variant} value={50} label={`${mode} ${accent} ${variant}`} />
              ))}
            </Theme>
          ))}
        </Theme>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const failures: string[] = []
    for (const ring of canvasElement.querySelectorAll<HTMLElement>('[role="progressbar"]')) {
      const page = getComputedStyle(ring.parentElement!.parentElement!).backgroundColor
      const value = contrast(getComputedStyle(ring.querySelector('svg > circle:last-child')!).stroke, page)
      if (value < 3) failures.push(`${ring.getAttribute('aria-label')}: ${value.toFixed(2)}`)
    }
    await expect(failures).toEqual([])
  },
}
