import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { mediaRules } from '@/test/story-helpers'
import { Carousel } from './Carousel'

const templates = ['Pitch deck', 'Weekly report', 'Product roadmap', 'Hiring plan', 'Retro board']
const hues = ['#e0e7ff', '#dcfce7', '#fef3c7', '#fee2e2', '#e0f2fe']

const Slide = ({ title, i, note = `Template ${i + 1}` }: { title: string; i: number; note?: string }) => (
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
    <p style={{ margin: 0 }}>{note}</p>
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
  // These descriptions are the docs' API table and the Playground's props
  // panel. The function prop and the defaults are given by hand.
  argTypes: {
    children: {
      description: 'One child per slide. Every slide stays in the DOM.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    label: {
      description: 'Names the carousel, e.g. "Featured templates". Required: there may be several on a page.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    slidesPerView: {
      description: 'Slides in view at once. With three in view, five slides have three stops (1-3, 2-4, 3-5).',
      control: { type: 'number', min: 1 },
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } },
    },
    showDots: {
      description: 'A dot per stop under the track. Hidden anyway when everything fits in one stop.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    loop: {
      description: 'Previous and next wrap around at the ends instead of being disabled there.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    autoPlay: {
      description: 'Advance every this many milliseconds. Adds a stop/start button; paused on hover and focus, and never runs under reduced motion.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    index: {
      description: 'Controlled: the first slide in view. Pair with `onIndexChange`.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    defaultIndex: {
      description: 'Uncontrolled starting slide. The track jumps there on mount, without a scroll animation.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    onIndexChange: {
      description: 'Called with the new index for previous and next, dots, swipes and the timer. A swipe reports once the track comes to rest.',
      control: false,
      table: { type: { summary: '(index: number) => void' } },
    },
    className: {
      description: 'Class on the outer `<section>`.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
  decorators: [(Story) => <div style={{ maxInlineSize: '36rem' }}>{Story()}</div>],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas, canvasElement }) => {
    const region = canvas.getByRole('region', { name: 'Featured templates' })
    await expect(region).toHaveAttribute('aria-roledescription', 'carousel')
    await expect(canvas.getByRole('group', { name: '1 of 5' })).toHaveAttribute('aria-roledescription', 'slide')
    // Every slide is in the DOM from the start; the track is a tab stop.
    const groups = canvas.getAllByRole('group')
    await expect(groups).toHaveLength(5)
    await expect(groups[0].parentElement).toHaveAttribute('tabindex', '0')
    // Previous, next and the dots are native buttons.
    for (const b of canvas.getAllByRole('button')) await expect(b.tagName).toBe('BUTTON')
    // 44px targets on coarse pointers.
    for (const b of [canvas.getByRole('button', { name: 'Next slide' }), canvas.getByRole('button', { name: 'Slide 1' })])
      await expect(mediaRules('pointer: coarse', b, '::before').map((r) => [r.style.inlineSize, r.style.blockSize])[0]).toEqual([
        'var(--target-coarse)',
        'var(--target-coarse)',
      ])
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
  play: async ({ canvas, canvasElement }) => {
    // Five slides, three at a time: three stops.
    await expect(canvas.getAllByRole('button', { name: /^Slide / })).toHaveLength(3)
    // A swipe or trackpad scroll moves the track itself; the dots follow once it rests.
    const track = canvas.getByRole('group', { name: '1 of 5' }).parentElement!
    track.scrollTo({ left: track.scrollWidth })
    await waitFor(() => expect(canvas.getByRole('button', { name: 'Slide 3' })).toHaveAttribute('aria-current', 'true'))
    await expect(canvas.getByRole('button', { name: 'Next slide' })).toBeDisabled()
    await expect(canvasElement.querySelector('[aria-live="polite"]')).toHaveTextContent('Slides 3 to 5 of 5')
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
    // Nothing is disabled at the ends.
    await expect(canvas.getByRole('button', { name: 'Previous slide' })).toBeEnabled()
    await userEvent.click(canvas.getByRole('button', { name: 'Previous slide' }))
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(4)
    const next = canvas.getByRole('button', { name: 'Next slide' })
    await userEvent.click(next)
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(0)
    // Native buttons: Enter and Space press them, Tab moves on to the track and the dots.
    await expect(next).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(1)
    await userEvent.keyboard(' ')
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(2)
    await userEvent.tab()
    await expect(canvas.getByRole('group', { name: '1 of 5' }).parentElement).toHaveFocus()
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Slide 1' })).toHaveFocus()
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
    // Stop/start is the first control.
    const region = canvas.getByRole('region', { name: 'Featured templates' })
    await expect(region.querySelector('button')).toHaveAccessibleName('Stop automatic slide show')
    // While rotating, slide changes are not announced.
    const live = canvasElement.querySelector('[aria-live]')!
    await expect(live).toHaveAttribute('aria-live', 'off')

    // Each userEvent call starts with a fresh pointer, so leave with unhover.
    const slide = canvas.getByRole('group', { name: '2 of 5' })
    await userEvent.hover(slide)
    await quiet()
    await userEvent.unhover(slide)
    await waitFor(() => expect(calls).toHaveBeenCalled(), { timeout: 2000 })

    // Focus inside pauses it too, until focus leaves.
    const track = slide.parentElement!
    track.focus({ preventScroll: true })
    // A slide the timer moved just before may still be scrolling into place,
    // and reports when it rests. Let it settle, then expect nothing new.
    await new Promise((r) => setTimeout(r, 600))
    await quiet()
    track.blur()
    await waitFor(() => expect(calls).toHaveBeenCalled(), { timeout: 2000 })

    await userEvent.click(canvas.getByRole('button', { name: 'Stop automatic slide show' }))
    await userEvent.unhover(canvas.getByRole('button', { name: 'Start automatic slide show' }))
    await expect(canvas.getByRole('button', { name: 'Start automatic slide show' })).toBeVisible()
    await quiet()
    await expect(live).toHaveAttribute('aria-live', 'polite')
  },
}

/** At the last stop: next is disabled, previous is not. */
export const AtEnd: Story = {
  args: { defaultIndex: 4 },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Next slide' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Previous slide' })).toBeEnabled()
    await expect(canvas.getByRole('button', { name: 'Slide 5' })).toHaveAttribute('aria-current', 'true')
  },
}

/** Under `prefers-reduced-motion`, autoPlay never starts rotating. */
export const AutoPlayReducedMotion: Story = {
  tags: ['!dev'],
  args: { autoPlay: 200 },
  // A play cannot switch the OS setting, so the media query is answered here
  // before the carousel first reads it.
  beforeEach: () => {
    const real = window.matchMedia
    window.matchMedia = (query: string) =>
      query.includes('prefers-reduced-motion')
        ? ({ matches: true, media: query, addEventListener: () => {}, removeEventListener: () => {} } as unknown as MediaQueryList)
        : real.call(window, query)
    return () => {
      window.matchMedia = real
    }
  },
  play: async ({ args, canvasElement }) => {
    await new Promise((r) => setTimeout(r, 900))
    await expect(args.onIndexChange).not.toHaveBeenCalled()
    // Not rotating, so a move by the reader is announced.
    await expect(canvasElement.querySelector('[aria-live]')).toHaveAttribute('aria-live', 'polite')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Stop/start', selector: 'button[aria-label$="automatic slide show"]', description: 'Only with autoPlay, and then the first control: stops and restarts the rotation.' },
  { name: 'Previous', selector: 'button[aria-label="Previous slide"]', description: 'Disabled at the first stop unless loop. The chevron is mirrored right to left.' },
  { name: 'Next', selector: 'button[aria-label="Next slide"]', description: 'Disabled at the last stop unless loop.' },
  { name: 'Track', selector: '[tabindex="0"]:has(> [aria-roledescription="slide"])', description: 'A horizontal scroller with snap points. Swipe, trackpad and, once focused, arrow keys scroll it natively.' },
  { name: 'Slide', selector: '[aria-roledescription="slide"]', description: 'One child, a group labelled "1 of 5".' },
  { name: 'Dots', selector: 'div:has(> button[aria-current])', description: 'One per stop. Hidden with showDots={false} or when everything is in view.' },
  { name: 'Current dot', selector: 'button[aria-current="true"]', description: 'The current stop: a longer pill in --foreground.' },
]

/** Every part present, the stop/start button included. */
export const Anatomy: Story = {
  tags: ['!dev'],
  // An hour: autoPlay adds the stop/start button, but the picture should hold still.
  args: { autoPlay: 3_600_000 },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[4]).toHaveAccessibleName('1 of 5')
  },
}

const notices = ['Payment failed', 'Card expires tomorrow', 'Storage 95% full', 'Two seats unassigned', 'New login from Lisbon']

/** Guidelines, Don't: content the reader must see, hidden in slides they may never reach. */
export const DontHideImportant: Story = {
  tags: ['!dev'],
  args: {
    label: 'Account notices',
    children: notices.map((t, i) => <Slide key={t} title={t} i={i} note="Account notice" />),
  },
}
