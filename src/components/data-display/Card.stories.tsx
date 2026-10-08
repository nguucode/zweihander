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
  tags: ['experimental'],
  component: Card,
  argTypes: {
    size: { control: 'inline-radio', options: ['xs', 'sm', 'md', 'lg'] },
    appearance: { control: 'inline-radio', options: ['elevated', 'outline', 'unstyled'] },
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
    render: { control: false },
  },
  args: { children: <Content /> },
  decorators: [(Story) => <div style={{ maxInlineSize: '24rem' }}>{Story()}</div>],
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
    await expect(args.onClick).toHaveBeenCalledTimes(2)
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
