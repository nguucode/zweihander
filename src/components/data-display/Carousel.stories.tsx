import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { Carousel } from './Carousel'

const templates = ['Pitch deck', 'Weekly report', 'Product roadmap', 'Hiring plan', 'Retro board']
const hues = ['#e0e7ff', '#dcfce7', '#fef3c7', '#fee2e2', '#e0f2fe']

const Slide = ({ title, i }: { title: string; i: number }) => (
  <article
    style={{
      display: 'grid',
      alignContent: 'end',
      blockSize: '10rem',
      padding: 'var(--space-4)',
      borderRadius: 'var(--radius-panel)',
      background: hues[i % hues.length],
      color: '#0a0a0a',
    }}
  >
    <h3 style={{ margin: 0, fontSize: 'var(--text-body-lg)' }}>{title}</h3>
    <p style={{ margin: 0 }}>Template {i + 1}</p>
  </article>
)

const meta = {
  title: 'Components/Data Display/Carousel',
  tags: ['beta'],
  component: Carousel,
  args: {
    label: 'Featured templates',
    onIndexChange: fn(),
    children: templates.map((t, i) => <Slide key={t} title={t} i={i} />),
  },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div style={{ maxInlineSize: '36rem' }}>{Story()}</div>],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas, canvasElement }) => {
    const region = canvas.getByRole('region', { name: 'Featured templates' })
    await expect(region).toHaveAttribute('aria-roledescription', 'carousel')
    await expect(canvas.getByRole('group', { name: '1 of 5' })).toHaveAttribute('aria-roledescription', 'slide')
    await expect(canvas.getByRole('button', { name: 'Previous slide' })).toBeDisabled()
    await userEvent.click(canvas.getByRole('button', { name: 'Next slide' }))
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(1)
    // The polite line is what a screen reader hears.
    await expect(canvasElement.querySelector('[aria-live="polite"]')).toHaveTextContent('Slide 2 of 5')
    await expect(canvas.getByRole('button', { name: 'Slide 2' })).toHaveAttribute('aria-current', 'true')
    await userEvent.click(canvas.getByRole('button', { name: 'Slide 5' }))
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(4)
    await expect(canvas.getByRole('button', { name: 'Next slide' })).toBeDisabled()
  },
}

export const ThreeInView: Story = {
  args: { slidesPerView: 3 },
  play: async ({ canvas }) => {
    // Five slides, three at a time: three stops.
    await expect(canvas.getAllByRole('button', { name: /^Slide / })).toHaveLength(3)
    // A swipe or trackpad scroll moves the track itself; the dots follow once it rests.
    const track = canvas.getByRole('group', { name: '1 of 5' }).parentElement!
    track.scrollTo({ left: track.scrollWidth })
    await waitFor(() => expect(canvas.getByRole('button', { name: 'Slide 3' })).toHaveAttribute('aria-current', 'true'))
    await expect(canvas.getByRole('button', { name: 'Next slide' })).toBeDisabled()
  },
}

export const StartAtThird: Story = {
  args: { defaultIndex: 2 },
  play: async ({ canvas }) => {
    const track = canvas.getByRole('group', { name: '1 of 5' }).parentElement!
    const third = canvas.getByRole('group', { name: '3 of 5' })
    // The third slide is the one in view.
    await waitFor(() => expect(third.getBoundingClientRect().left).toBeCloseTo(track.getBoundingClientRect().left, 0))
    await expect(canvas.getByRole('button', { name: 'Slide 3' })).toHaveAttribute('aria-current', 'true')
  },
}

export const Loop: Story = {
  args: { loop: true },
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Previous slide' }))
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(4)
    await userEvent.click(canvas.getByRole('button', { name: 'Next slide' }))
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(0)
  },
}

export const RightToLeft: Story = {
  decorators: [(Story) => <div dir="rtl">{Story()}</div>],
  play: async ({ canvas }) => {
    const track = canvas.getByRole('group', { name: '1 of 5' }).parentElement!
    await userEvent.click(canvas.getByRole('button', { name: 'Next slide' }))
    // scrollLeft runs negative in right-to-left; the second slide is to the left.
    await waitFor(() => expect(track.scrollLeft).toBeLessThan(-100))
    await new Promise((r) => setTimeout(r, 400))
    await expect(canvas.getByRole('button', { name: 'Slide 2' })).toHaveAttribute('aria-current', 'true')
    // Previous and next point the way the slides move.
    const prev = canvas.getByRole('button', { name: 'Previous slide' }).querySelector('svg')!
    await expect(getComputedStyle(prev).scale).toBe('-1 1')
  },
}

/** Rotates on its own; the reader can stop it, and hovering or focusing pauses it. */
export const AutoPlay: Story = {
  args: { autoPlay: 400 },
  // The test browser's real cursor rests at the top-left corner, and a
  // carousel under it would pause on hover. Keep the corner clear.
  decorators: [(Story) => <div style={{ paddingBlockStart: 'var(--space-8)' }}>{Story()}</div>],
  play: async ({ args, canvas, canvasElement }) => {
    const calls = args.onIndexChange as ReturnType<typeof fn>
    const quiet = async () => {
      calls.mockClear()
      await new Promise((r) => setTimeout(r, 900))
      await expect(calls).not.toHaveBeenCalled()
    }
    await waitFor(() => expect(calls).toHaveBeenCalledWith(1), { timeout: 2000 })
    // While rotating, slide changes are not announced.
    const live = canvasElement.querySelector('[aria-live]')!
    await expect(live).toHaveAttribute('aria-live', 'off')

    // Each userEvent call starts with a fresh pointer, so leave with unhover.
    const slide = canvas.getByRole('group', { name: '2 of 5' })
    await userEvent.hover(slide)
    await quiet()
    await userEvent.unhover(slide)
    await waitFor(() => expect(calls).toHaveBeenCalled(), { timeout: 2000 })

    await userEvent.click(canvas.getByRole('button', { name: 'Stop automatic slide show' }))
    await userEvent.unhover(canvas.getByRole('button', { name: 'Start automatic slide show' }))
    await expect(canvas.getByRole('button', { name: 'Start automatic slide show' })).toBeVisible()
    await quiet()
    await expect(live).toHaveAttribute('aria-live', 'polite')
  },
}
