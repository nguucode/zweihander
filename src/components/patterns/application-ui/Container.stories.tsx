import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { Theme } from '@/theme/Theme'
import { Card } from '@/components/data-display/Card'
import { AppShell } from '@/components/templates/application-ui/AppShell'
import { Container } from './Container'

const block = (label: string) => (
  <div
    style={{
      padding: 'var(--space-container)',
      border: '1px dashed var(--border)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-filled)',
      color: 'var(--muted-foreground)',
      overflowWrap: 'anywhere',
    }}
  >
    {label}
  </div>
)

// Wider than the largest size, so every cap shows; hidden overflow keeps a
// narrow test viewport from scrolling.
const wide = { inlineSize: '84rem', overflow: 'hidden', outline: '1px solid var(--border)' }

const rem = (n: number) => n * parseFloat(getComputedStyle(document.documentElement).fontSize)
const box = (el: Element) => el.getBoundingClientRect()
const containers = (root: HTMLElement) => [...root.querySelectorAll<HTMLElement>('[data-size]')]
/** Left and right gaps between a Container and its parent's content box. */
const gaps = (el: HTMLElement) => {
  const parent = el.parentElement!
  const style = getComputedStyle(parent)
  const inner = box(parent)
  return {
    start: box(el).left - inner.left - parseFloat(style.paddingLeft) - parseFloat(style.borderLeftWidth),
    end: inner.right - box(el).right - parseFloat(style.paddingRight) - parseFloat(style.borderRightWidth),
  }
}

const meta = {
  title: 'Patterns/Application UI/Container',
  tags: ['experimental'],
  component: Container,
  parameters: { layout: 'padded' },
  args: { children: block('Page content') },
  argTypes: {
    size: { description: 'The widest the content gets: `sm` 48rem for a form or a settings page, `md` 64rem for most pages, `lg` 80rem for a wide table or a dashboard.' },
    padded: { description: "Adds the page's side padding, `--space-container`, and `--space-section` from a 64rem viewport. Leave it off inside an App Shell, where App Content already pads the page." },
    children: { description: 'The page content. Rendered as is.', control: false },
  },
  render: (args) => (
    <div style={wide}>
      <Container {...args} />
    </div>
  ),
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

/** `md` by default: the content stops at 64rem and sits in the middle. */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const [el] = containers(canvasElement)
    await waitFor(() => {
      expect(box(el).width).toBeCloseTo(rem(64), 0)
      const { start, end } = gaps(el)
      expect(Math.abs(start - end)).toBeLessThanOrEqual(1)
    })
  },
}

/** The three sizes, one under the other, for the visual baseline. */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ ...wide, display: 'grid', gap: 'var(--space-group)' }}>
      <Container {...args} size="sm">{block('sm, 48rem: a form or a settings page')}</Container>
      <Container {...args}>{block('md, 64rem: most pages')}</Container>
      <Container {...args} size="lg">{block('lg, 80rem: a wide table or a dashboard')}</Container>
    </div>
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const widths = containers(canvasElement).map((el) => box(el).width)
      expect(widths[0]).toBeCloseTo(rem(48), 0)
      expect(widths[1]).toBeCloseTo(rem(64), 0)
      expect(widths[2]).toBeCloseTo(rem(80), 0)
    })
  },
}

/** `padded` outside an App Shell: side padding by breakpoint, and the cap still measures the content. */
export const Padded: Story = {
  args: { padded: true },
  play: async ({ canvasElement }) => {
    const [el] = containers(canvasElement)
    const step = window.innerWidth >= rem(64) ? '--space-section' : '--space-container'
    const probe = document.createElement('div')
    probe.style.paddingInlineStart = `var(${step})`
    el.append(probe)
    const expected = getComputedStyle(probe).paddingInlineStart
    probe.remove()
    await expect(getComputedStyle(el).paddingInlineStart).toBe(expected)
    await expect(getComputedStyle(el).paddingInlineEnd).toBe(expected)
    await waitFor(() => expect(el.clientWidth - 2 * parseFloat(expected)).toBeCloseTo(rem(64), 0))
  },
}

/** In an App Shell: App Content pads the page and the Container only caps and centres it. */
export const InAppShell: Story = {
  args: { size: 'sm' },
  render: (args) => (
    <Theme canvas="neutral" style={{ blockSize: 480, border: '1px solid var(--border)' }}>
      <AppShell style={{ blockSize: '100%' }}>
        <Container {...args}>
          <div style={{ display: 'grid', gap: 'var(--space-group)' }}>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: 'var(--text-heading-xl)', lineHeight: 'var(--leading-heading-xl)', fontWeight: 500 }}>Billing</h1>
            <Card appearance="surface" size="sm">
              Invoices go to finance@example.com on the first of each month.
            </Card>
          </div>
        </Container>
      </AppShell>
    </Theme>
  ),
  play: async ({ canvas, canvasElement }) => {
    const [el] = containers(canvasElement)
    await expect(el.parentElement).toBe(canvas.getByRole('main'))
    await expect(getComputedStyle(el).paddingInlineStart).toBe('0px')
    await waitFor(() => {
      expect(box(el).width).toBeLessThanOrEqual(rem(48) + 1)
      const { start, end } = gaps(el)
      expect(Math.abs(start - end)).toBeLessThanOrEqual(1)
    })
  },
}

/** Narrower than its size, it takes the width it is given and never overflows. */
export const Narrow: Story = {
  args: { children: block('Quarterlyreconciliationofsubsidiaryaccountsreceivable') },
  render: (args) => (
    <div style={{ inlineSize: 200 }}>
      <Container {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const [el] = containers(canvasElement)
    await waitFor(() => {
      expect(box(el).width).toBeCloseTo(200, 0)
      expect(el.scrollWidth).toBeLessThanOrEqual(el.clientWidth)
    })
  },
}

/** Dark mode, so the accessibility check covers both themes. */
export const Dark: Story = {
  ...InAppShell,
  globals: { theme: 'dark' },
}
