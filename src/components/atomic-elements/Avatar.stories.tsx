import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { ACCENT_COLORS, GRAY_COLORS } from '@/theme/palettes'
import { Theme } from '@/theme/Theme'
import { Avatar } from './Avatar'
import { contrast, lum, paint } from '@/test/story-helpers'

// A self-contained stand-in portrait, so stories never depend on the network.
const portrait =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#c7d2fe"/><circle cx="32" cy="26" r="12" fill="#6366f1"/><rect x="12" y="42" width="40" height="30" rx="20" fill="#6366f1"/></svg>',
  )

const meta = {
  title: 'Components/Atomic Elements/Avatar',
  tags: ['beta'],
  component: Avatar,
  args: { imageSrc: portrait, imageAlt: 'Mary Thompson' },
  // Every prop is listed by hand, with its type and default: these
  // descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    size: {
      description: '24, 32, 40 or 48px across. Initials step up from 12px to 16px with it.',
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg'],
      table: { type: { summary: "'xs' | 'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'md'" } },
    },
    imageSrc: {
      description: 'The picture, cropped to fill the circle. If it fails to load, the initials or the silhouette show instead.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    imageAlt: {
      description: 'Who this is. Names the whole avatar. Without it the avatar is decorative and hidden from assistive tech.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    initials: {
      description: 'One or two letters, shown when there is no image. Pass the letters, not a name: they are uppercased by style.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    color: {
      description: 'Any accent hue, to tell people apart in a list. Unset is the neutral gray. Carries no meaning.',
      control: 'select',
      options: [undefined, ...ACCENT_COLORS],
      table: { type: { summary: 'AccentColor' } },
    },
    variant: {
      description: '`subtle` is a tint of the hue; `solid` is its fill (600 in light, 400 in dark).',
      control: 'inline-radio',
      options: ['subtle', 'solid'],
      table: { type: { summary: "'subtle' | 'solid'" }, defaultValue: { summary: "'subtle'" } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

const row = { display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }

export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    const avatar = canvas.getByRole('img', { name: 'Mary Thompson' })
    await expect(avatar).toBeVisible()
    // No size given: md, the house default.
    await expect(avatar.getBoundingClientRect().width).toBe(40)
    // The <img> itself is silent; the name is on the container.
    await expect(canvasElement.querySelector('img')).toHaveAttribute('alt', '')
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={row}>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <Avatar key={size} {...args} size={size} imageAlt={size} />
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    const widths = ['xs', 'sm', 'md', 'lg'].map(
      (n) => canvas.getByRole('img', { name: n }).getBoundingClientRect().width,
    )
    await expect(widths).toEqual([24, 32, 40, 48])
  },
}

export const Fallbacks: Story = {
  render: (args) => (
    <div style={row}>
      <Avatar {...args} />
      <Avatar {...args} imageSrc={undefined} initials="SR" imageAlt="Sam Rivera" />
      <Avatar {...args} imageSrc={undefined} imageAlt="Unknown user" />
    </div>
  ),
  play: async ({ canvas }) => {
    // Whichever part is showing, the avatar announces the person: not "S R", not nothing.
    await expect(canvas.getByRole('img', { name: 'Sam Rivera' })).toHaveTextContent('SR')
    await expect(canvas.getByRole('img', { name: 'Unknown user' }).querySelector('svg')).toBeVisible()
  },
}

export const BrokenImage: Story = {
  args: { imageSrc: 'data:image/png;base64,broken', initials: 'mt' },
  play: async ({ canvas, canvasElement }) => {
    await waitFor(() => expect(canvasElement.querySelector('img')).toBeNull())
    // Initials are uppercased by style, not by rewriting what was passed.
    const initials = canvas.getByText('mt')
    await expect(initials).toBeVisible()
    await expect(getComputedStyle(initials).textTransform).toBe('uppercase')
  },
}

export const Silhouette: Story = {
  args: { imageSrc: undefined, imageAlt: undefined, color: 'violet' },
  play: async ({ canvas, canvasElement }) => {
    // No name means decorative: hidden, not announced as an empty image.
    await expect(canvasElement.querySelector('span')).toHaveAttribute('aria-hidden', 'true')
    await expect(canvas.queryByRole('img')).toBeNull()
    // Neither image nor initials: the silhouette.
    await expect(canvasElement.querySelector('svg')).toBeVisible()
  },
}

export const EmptySource: Story = {
  args: { imageSrc: '', initials: 'MT' },
  play: async ({ canvas, canvasElement }) => {
    // '' is no image: straight to the initials, no broken <img> first.
    await expect(canvasElement.querySelector('img')).toBeNull()
    await expect(canvas.getByText('MT')).toBeVisible()
  },
}

export const Colors: Story = {
  args: { imageSrc: undefined, imageAlt: undefined, initials: 'SR' },
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
      {(['subtle', 'solid'] as const).flatMap((variant) =>
        [args.initials, undefined].map((initials) => (
          <div key={variant + initials} style={{ ...row, flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            <Avatar {...args} initials={initials} variant={variant} />
            {ACCENT_COLORS.map((color) => (
              <Avatar key={color} {...args} initials={initials} variant={variant} color={color} />
            ))}
          </div>
        )),
      )}
    </div>
  ),
}

const WARM = ['orange', 'amber', 'yellow', 'lime']

/**
 * Every colour × variant, initials and silhouette, on every gray ramp in both
 * modes, measured from the CSS that ships.
 */
export const Contrast: Story = {
  args: { imageSrc: undefined, imageAlt: undefined },
  render: (args) => (
    <div>
      {(['light', 'dark'] as const).flatMap((mode) =>
        GRAY_COLORS.map((gray) => (
          <Theme
            key={mode + gray}
            appearance={mode}
            grayColor={gray}
            style={{ background: 'var(--background)', display: 'flex', flexWrap: 'wrap', gap: 2, padding: 2 }}
          >
            {(['subtle', 'solid'] as const).flatMap((variant) =>
              [undefined, ...ACCENT_COLORS].flatMap((color) =>
                ['SR', undefined].map((initials) => (
                  <Avatar
                    key={variant + color + initials}
                    {...args}
                    size="xs"
                    variant={variant}
                    color={color}
                    initials={initials}
                    data-audit={`${mode} ${gray} ${variant} ${color ?? 'neutral'}`}
                  />
                )),
              ),
            )}
          </Theme>
        )),
      )}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const failures: string[] = []
    const solidSilhouettes = new Map<string, Set<string>>()
    for (const avatar of canvasElement.querySelectorAll<HTMLElement>('[data-audit]')) {
      const audit = avatar.dataset.audit!
      const [mode, gray, variant, color] = audit.split(' ')
      const page = getComputedStyle(avatar.parentElement!).backgroundColor
      const fill = getComputedStyle(avatar).backgroundColor
      const svg = avatar.querySelector('svg')
      const fg = getComputedStyle(svg ?? avatar.firstElementChild!).color
      const ratio = contrast(fg, page, fill)
      if (!svg) {
        // Initials: 4.5:1 everywhere; neutral solid (gray 600 under gray 50) 6.5:1 on every ramp.
        const floor = variant === 'solid' && color === 'neutral' ? 6.5 : 4.5
        if (ratio < floor) failures.push(`${audit} initials ${ratio.toFixed(2)}`)
      } else if (variant === 'subtle') {
        // The initials' colour (neutral: --muted-foreground), past 3:1.
        const probe = avatar.parentElement!.appendChild(document.createElement('span'))
        probe.style.color = 'var(--muted-foreground)'
        const expected =
          color === 'neutral'
            ? getComputedStyle(probe).color
            : getComputedStyle(avatar.previousElementSibling!.firstElementChild!).color
        probe.remove()
        if (fg !== expected) failures.push(`${audit} silhouette ${fg} is not ${expected}`)
        if (ratio < 3) failures.push(`${audit} silhouette ${ratio.toFixed(2)}`)
      } else {
        // Solid: one white across hues. In light mode only the warm hues may
        // fall under 3:1; in dark mode the fill is the 400 step and most hues
        // do, which the docs state as the accepted trade-off.
        const key = `${mode} ${gray}`
        solidSilhouettes.set(key, (solidSilhouettes.get(key) ?? new Set()).add(fg))
        if (lum(paint(fg)) < 0.9) failures.push(`${audit} silhouette is not white: ${fg}`)
        if (mode === 'light' && ratio < 3 && !WARM.includes(color)) failures.push(`${audit} silhouette ${ratio.toFixed(2)}`)
      }
    }
    await expect(failures).toEqual([])
    await expect([...solidSilhouettes.values()].every((colours) => colours.size === 1)).toBe(true)
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: '[role="img"]', description: 'The circle, in the chosen colour and variant. Clips its content and carries the name.' },
  { name: 'Image', selector: 'img', description: 'Cropped to fill. Silent itself: the name is on the container.' },
  { name: 'Initials', selector: '[role="img"] > span', description: 'Shown when there is no image, or it fails to load.' },
  { name: 'Silhouette', selector: 'svg', description: 'A head and shoulders, when there is neither.' },
]

/** One avatar per fallback, so every part is on screen at once. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { size: 'lg' },
  render: (args) => (
    <div style={row}>
      <Avatar {...args} />
      <Avatar {...args} imageSrc={undefined} initials="SR" imageAlt="Sam Rivera" />
      <Avatar {...args} imageSrc={undefined} imageAlt="Unknown user" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[2]).toHaveTextContent('SR')
  },
}

/** Guidelines, Do: the name is printed, so the avatar beside it stays decorative. */
export const DoDecorativeBesideName: Story = {
  args: { imageAlt: undefined },
  render: (args) => (
    <div style={{ ...row, gap: 'var(--space-2)' }}>
      <Avatar {...args} />
      <span>Mary Thompson</span>
    </div>
  ),
  play: async ({ canvas }) => {
    // Said once, by the text.
    await expect(canvas.queryByRole('img')).toBeNull()
    await expect(canvas.getByText('Mary Thompson')).toBeVisible()
  },
}

/** Guidelines, Don't: imageAlt repeats the printed name, so it is read twice. */
export const DontRepeatName: Story = {
  tags: ['!dev'],
  render: (args) => (
    <div style={{ ...row, gap: 'var(--space-2)' }}>
      <Avatar {...args} />
      <span>Mary Thompson</span>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('img', { name: 'Mary Thompson' })).toBeVisible()
  },
}
