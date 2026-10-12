import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Theme } from '@/theme/Theme'
import { Card } from './Card'
import { contrast, hoverRules } from '@/test/story-helpers'

const title = { margin: 0, fontSize: 'var(--text-heading-xs)', lineHeight: 'var(--leading-heading-xs)', fontWeight: 600 }
const muted = { margin: 0, color: 'var(--muted-foreground)' }

const Content = () => (
  <>
    <h3 style={title}>Payment method</h3>
    <p style={muted}>Change how you pay for your plan.</p>
  </>
)

const meta = {
  title: 'Components/Data Display/Card',
  tags: ['beta'],
  component: Card,
  // These descriptions are the docs' API table and the Playground's props
  // panel. Unions and the render prop get their type and default by hand.
  argTypes: {
    children: {
      description: "The content (the spec's `content`). Stacked or side by side, by `orientation`. A clickable card takes phrasing content only: spans, no headings, no links or buttons.",
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    size: {
      description: 'Padding 12, 16, 24 or 32px; the gap between children scales with it.',
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg'],
      table: { type: { summary: "'xs' | 'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'sm'" } },
    },
    appearance: {
      description: '`elevated`: the card surface with a faint shadow. `outline`: the surface and its edge, no shadow. `unstyled`: keeps the padding and layout, drops every visual.',
      control: 'inline-radio',
      options: ['elevated', 'outline', 'unstyled'],
      table: { type: { summary: "'elevated' | 'outline' | 'unstyled'" }, defaultValue: { summary: "'elevated'" } },
    },
    orientation: {
      description: 'How children flow: `vertical` stacks them, `horizontal` sets them side by side (media and text).',
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
      table: { type: { summary: "'vertical' | 'horizontal'" }, defaultValue: { summary: "'vertical'" } },
    },
    isRounded: {
      description: 'Rounds the corners with `--radius-panel`. Off: square corners.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    hasBorder: {
      description: 'The 1px `--border` edge. Off: no visible edge. `unstyled` never has one.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    onClick: {
      description: 'Makes the whole card one `<button type="button">`. Called on click, Enter and Space.',
      control: false,
      table: { type: { summary: '(event: MouseEvent) => void' } },
    },
    render: {
      description: "Replaces the element, e.g. `<a href>` or a router's Link for a card that navigates. Props and styles merge onto it, and it gets the hover and focus of a clickable card.",
      control: false,
      table: { type: { summary: 'ReactElement | (props, state) => ReactElement' } },
    },
  },
  args: { children: <Content /> },
  decorators: [(Story) => <div style={{ maxInlineSize: '24rem' }}>{Story()}</div>],
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    // A plain <div>: no role, no tab stop, no heading of its own.
    const card = canvas.getByRole('heading', { name: 'Payment method' }).parentElement!
    await expect(card.tagName).toBe('DIV')
    await expect(card).not.toHaveAttribute('role')
    await expect(canvas.getAllByRole('heading')).toHaveLength(1)
    await userEvent.tab()
    await expect(document.body).toHaveFocus()
  },
}

export const Appearances: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
      {(['elevated', 'outline', 'unstyled'] as const).map((appearance) => (
        <Card key={appearance} {...args} appearance={appearance}>
          <h3 style={title}>{appearance}</h3>
          <p style={muted}>Change how you pay for your plan.</p>
        </Card>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <Card key={size} {...args} size={size} data-size={size} />
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const pads = ['xs', 'sm', 'md', 'lg'].map(
      (s) => getComputedStyle(canvasElement.querySelector(`[data-size="${s}"]`)!).paddingTop,
    )
    await expect(pads).toEqual(['12px', '16px', '24px', '32px'])
  },
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    children: (
      <>
        <Avatar initials="MT" size="md" />
        <div style={{ display: 'grid', gap: 'var(--space-1)', flex: 1 }}>
          <h3 style={title}>Mary Thompson</h3>
          <p style={muted}>Product designer</p>
        </div>
        <Button size="sm" appearance="outlined" variant="secondary">
          Follow
        </Button>
      </>
    ),
  },
}

export const NoBorderSquare: Story = {
  args: { hasBorder: false, isRounded: false },
}

/**
 * The whole card is one button, so its content must be phrasing content:
 * spans, not headings or paragraphs, and nothing interactive.
 */
export const Clickable: Story = {
  args: {
    onClick: fn(),
    children: (
      <>
        <span style={title}>Payment method</span>
        <span style={muted}>Change how you pay for your plan.</span>
      </>
    ),
  },
  play: async ({ canvas, userEvent, args }) => {
    // One button, its whole content the label.
    const card = canvas.getByRole('button', { name: /Payment method.*Change how you pay for your plan/ })
    await expect(canvas.getAllByRole('button')).toHaveLength(1)
    await expect(card).toHaveAttribute('type', 'button')
    await userEvent.click(card)
    await userEvent.tab({ shift: true })
    await userEvent.tab()
    await expect(card).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await userEvent.keyboard(' ')
    await expect(args.onClick).toHaveBeenCalledTimes(3)
  },
}

/** A card that navigates renders a real link. */
export const Link: Story = {
  args: { render: <a href="#billing" /> },
  play: async ({ canvas, userEvent }) => {
    const link = canvas.getByRole('link', { name: /Payment method/ })
    await expect(link).toHaveAttribute('href', '#billing')
    await expect(link).not.toHaveAttribute('type')
    await userEvent.tab()
    await expect(link).toHaveFocus()
  },
}

/**
 * Muted text on every appearance of a clickable card, in both modes, at rest
 * and on hover: hover may change the shadow or the edge, never the surface.
 */
export const Contrast: Story = {
  render: () => (
    <div>
      {(['light', 'dark'] as const).map((mode) => (
        <Theme
          key={mode}
          appearance={mode}
          style={{ display: 'grid', gap: 'var(--space-2)', background: 'var(--background)', padding: 'var(--space-2)' }}
        >
          {(['elevated', 'outline', 'unstyled'] as const).map((appearance) => (
            <Card key={appearance} appearance={appearance} onClick={() => {}} data-audit={`${mode} ${appearance}`}>
              <span style={muted}>Change how you pay for your plan.</span>
            </Card>
          ))}
        </Theme>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const failures: string[] = []
    for (const card of canvasElement.querySelectorAll<HTMLElement>('[data-audit]')) {
      const audit = card.dataset.audit!
      const text = getComputedStyle(card.firstElementChild!).color
      const ratio = contrast(text, getComputedStyle(card.parentElement!).backgroundColor, getComputedStyle(card).backgroundColor)
      if (ratio < 4.5) failures.push(`${audit}: ${ratio.toFixed(2)}`)
      const hover = hoverRules(card)
      // The surface under the text is the same on hover, so the rest ratio holds there too.
      for (const r of hover)
        if (r.style.background || r.style.backgroundColor || r.style.backgroundImage)
          failures.push(`${audit}: ${r.selectorText} changes the surface`)
      if (!audit.endsWith('unstyled') && !hover.some((r) => r.style.boxShadow || r.style.borderColor))
        failures.push(`${audit}: hover changes neither shadow nor edge`)
    }
    await expect(failures).toEqual([])
  },
}

/** A clickable `outline` card: on hover its edge strengthens instead of the shadow. */
export const ClickableOutline: Story = {
  args: { ...Clickable.args, appearance: 'outline' },
  play: async ({ canvas }) => {
    const card = canvas.getByRole('button')
    // Hover strengthens the edge to the 3:1 control border.
    await expect(hoverRules(card).some((r) => r.style.borderColor === 'var(--control-border)')).toBe(true)
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: 'div:has(> h3)', description: 'The surface: --card, its --border edge and the padding from size. Content stacks or sits side by side, by orientation.' },
  { name: 'Title', selector: 'div:has(> h3) > h3', description: 'Your content: a heading at the level the page needs. The card has none of its own.' },
  { name: 'Body', selector: 'div:has(> h3) > p', description: 'Your content: anything, here a line of muted text.' },
]

/** A plain card with a heading and a line of text, so the docs can point at each. */
export const Anatomy: Story = {
  tags: ['!dev'],
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[1]).toHaveTextContent('Payment method')
  },
}

/** Guidelines, Don't: a button inside a clickable card. */
export const DontNestButtons: Story = {
  tags: ['!dev'],
  // The Don't is the a11y failure itself: a button inside a button is
  // invalid HTML and axe's nested-interactive rule fails it.
  parameters: { a11y: { test: 'off' } },
  args: {
    onClick: fn(),
    orientation: 'horizontal',
    children: (
      <>
        <Avatar initials="MT" size="md" />
        <span style={{ display: 'grid', gap: 'var(--space-1)', flex: 1 }}>
          <span style={title}>Mary Thompson</span>
          <span style={muted}>Product designer</span>
        </span>
        <Button size="sm" appearance="outlined" variant="secondary">
          Follow
        </Button>
      </>
    ),
  },
}
