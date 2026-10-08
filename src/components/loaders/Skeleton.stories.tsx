import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Theme } from '@/theme/Theme'
import { Skeleton } from './Skeleton'
import { lum, paint } from '@/test/story-helpers'

const meta = {
  title: 'Components/Loaders/Skeleton',
  tags: ['experimental'],
  component: Skeleton,
  argTypes: { appearance: { control: 'inline-radio', options: ['circle', 'square', 'rounded'] } },
  args: { width: 240, height: 16 },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const bone = canvasElement.querySelector('div > div')!
    await expect(bone).toHaveAttribute('aria-hidden', 'true')
    await expect(bone.getBoundingClientRect().width).toBe(240)
  },
}

export const Appearances: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
      <Skeleton {...args} appearance="circle" width={40} data-testid="circle" />
      <Skeleton {...args} appearance="square" width={120} height={40} />
      <Skeleton {...args} appearance="rounded" width={120} height={40} />
    </div>
  ),
  play: async ({ canvas }) => {
    // args carry height 16; a circle ignores it and stays round.
    const { width, height } = canvas.getByTestId('circle').getBoundingClientRect()
    await expect([width, height]).toEqual([40, 40])
  },
}

export const Rows: Story = {
  args: { rows: 4, width: 320, height: 12, appearance: 'rounded' },
  play: async ({ canvasElement }) => {
    // The whole stack is hidden, not just each bar.
    await expect(canvasElement.firstElementChild).toHaveAttribute('aria-hidden', 'true')
    const lines = [...canvasElement.querySelectorAll('[aria-hidden] > div')].map((l) => l.getBoundingClientRect())
    await expect(lines).toHaveLength(4)
    await expect(lines.map((l) => l.height)).toEqual([12, 12, 12, 12])
    // The last line is 60% of the 320px width, like the end of a paragraph.
    await expect(lines.map((l) => l.width)).toEqual([320, 320, 320, 192])
  },
}

export const FullWidth: Story = {
  args: { isFullWidth: true, width: undefined },
}

export const Animated: Story = {
  args: { hasAnimation: true, rows: 3, width: 320, appearance: 'rounded' },
  play: async ({ canvasElement }) => {
    // A play cannot set prefers-reduced-motion, so read the rule that reaches the bars.
    const bar = canvasElement.querySelector('[aria-hidden] > div')!
    await expect(getComputedStyle(bar).animationName).not.toBe('none')
    const reduced = [...document.styleSheets]
      .flatMap((sheet) => {
        try {
          return [...sheet.cssRules]
        } catch {
          return [] // cross-origin
        }
      })
      .filter((r): r is CSSMediaRule => r instanceof CSSMediaRule && r.conditionText.includes('prefers-reduced-motion: reduce'))
      .flatMap((m) => [...m.cssRules])
      .filter((r): r is CSSStyleRule => r instanceof CSSStyleRule && bar.matches(r.selectorText))
    await expect(reduced.map((r) => r.style.animationName)).toContain('none')
  },
}

/** How it is used: shapes of the content, with aria-busy on the region. */
export const CardPlaceholder: Story = {
  render: () => (
    <div aria-busy="true" aria-label="Loading profile" role="region" style={{ display: 'flex', gap: 'var(--space-3)', inlineSize: 320 }}>
      <Skeleton appearance="circle" width={40} hasAnimation />
      <div style={{ flex: 1, display: 'grid', gap: 'var(--space-2)' }}>
        <Skeleton appearance="rounded" height={14} width="50%" hasAnimation />
        <Skeleton appearance="rounded" rows={2} height={10} isFullWidth hasAnimation />
      </div>
    </div>
  ),
  play: async ({ canvas }) => {
    // The region says it is busy; the shapes inside it say nothing.
    const region = canvas.getByRole('region', { name: 'Loading profile' })
    await expect(region).toHaveAttribute('aria-busy', 'true')
    // Circle, title bar and the two-line stack: all three hidden.
    await expect(region.querySelectorAll('[aria-hidden="true"]')).toHaveLength(3)
    await expect(region).toHaveTextContent('')
  },
}

/** --muted on the page, in both modes: under 3:1, the lowest floor, on purpose. */
export const Muted: Story = {
  render: (args) => (
    <div>
      {(['light', 'dark'] as const).map((mode) => (
        <Theme key={mode} appearance={mode} style={{ background: 'var(--background)', padding: 'var(--space-2)' }}>
          <Skeleton {...args} />
          <span style={{ color: 'var(--muted)' }} />
        </Theme>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    for (const bone of canvasElement.querySelectorAll<HTMLElement>('[aria-hidden="true"]')) {
      const fill = getComputedStyle(bone).backgroundColor
      // The bone is --muted (read back through a probe beside it).
      await expect(fill).toBe(getComputedStyle(bone.nextElementSibling!).color)
      const page = getComputedStyle(bone.parentElement!).backgroundColor
      const [x, y] = [lum(paint(page, fill)), lum(paint(page))].sort((m, n) => n - m)
      await expect((x + 0.05) / (y + 0.05)).toBeLessThan(3)
    }
  },
}
