import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { ACCENT_COLORS, Theme } from '@/theme/Theme'
import { contrast, mediaRules } from '@/test/story-helpers'
import { ProgressBar } from './ProgressBar'

const meta = {
  title: 'Components/Loaders/ProgressBar',
  tags: ['beta'],
  component: ProgressBar,
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    value: {
      description: 'How far along, out of `max`. Ignored while `isIndeterminate`.',
      control: { type: 'range', min: 0, max: 100 },
      table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    max: {
      description: 'The value at which the task is done. The spec calls it `maxValue`.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '100' } },
    },
    size: {
      description: 'Track height: 4px (`sm`), 8px (`md`) or 12px (`lg`).',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: { type: { summary: "'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'md'" } },
    },
    variant: {
      description: 'Colour of the fill. `destructive` for a task that is failing or about to run out, such as storage nearly full.',
      control: 'inline-radio',
      options: ['primary', 'accent', 'secondary', 'destructive'],
      table: { type: { summary: "'primary' | 'accent' | 'secondary' | 'destructive'" }, defaultValue: { summary: "'primary'" } },
    },
    isRounded: {
      description: 'Pill ends on the track and the fill.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isIndeterminate: {
      description: 'Progress is happening but how much is unknown: a third of the track slides across.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    showValueLabel: {
      description: 'Shows the percentage after the bar, in tabular figures. Hidden while indeterminate.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: {
      description: 'A visible label above the bar; also its accessible name.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    'aria-label': {
      description: 'The accessible name when there is no visible `label`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
  args: { value: 70, label: 'Uploading' },
  excludeStories: ['anatomyParts'],
  decorators: [(Story) => <div style={{ maxInlineSize: '24rem' }}>{Story()}</div>],
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

const stack = { display: 'grid', gap: 'var(--space-4)' }

export const Default: Story = {
  play: async ({ canvas }) => {
    const bar = canvas.getByRole('progressbar', { name: 'Uploading' })
    await expect(bar).toHaveAttribute('aria-valuenow', '70')
    await expect(bar).toHaveAttribute('aria-valuemax', '100')
    // The fill eases on --duration-slow, which reduced motion sets to 0ms.
    const probe = document.createElement('span')
    probe.style.transitionDuration = 'var(--duration-slow)'
    bar.append(probe)
    const indicator = bar.querySelector('[role="progressbar"] > div > :first-child > *')!
    await expect(getComputedStyle(indicator).transitionDuration).toBe(getComputedStyle(probe).transitionDuration)
    probe.remove()
  },
}

/**
 * A top-N list ("Top paths", "Top countries") is not a chart: one bar per row,
 * each measured against the largest, the count beside it.
 */
export const TopList: Story = {
  render: () => {
    const rows = [
      ['/', 154],
      ['/api/v1/invoices', 131],
      ['/dashboard', 43],
      ['/login', 21],
    ] as const
    return (
      <ol style={{ display: 'grid', gap: 'var(--space-cluster)', margin: 0, padding: 0, listStyle: 'none' }}>
        {rows.map(([path, count]) => (
          <li key={path} style={{ display: 'grid', gridTemplateColumns: '1fr 8rem 3rem', gap: 'var(--space-cluster)', alignItems: 'center' }}>
            <span>{path}</span>
            <ProgressBar value={count} max={rows[0][1]} size="sm" isRounded aria-label={path} />
            <span style={{ textAlign: 'end', fontVariantNumeric: 'tabular-nums' }}>{count}</span>
          </li>
        ))}
      </ol>
    )
  },
  play: async ({ canvas }) => {
    // The largest row fills its bar; the rest are a share of it, not of the total.
    await expect(canvas.getByRole('progressbar', { name: '/' })).toHaveAttribute('aria-valuenow', '154')
    await expect(canvas.getByRole('progressbar', { name: '/login' })).toHaveAttribute('aria-valuemax', '154')
  },
}

export const ValueLabel: Story = {
  args: { showValueLabel: true },
  play: async ({ canvas }) => {
    const value = canvas.getByText('70%')
    await expect(value).toBeVisible()
    // The value label is --muted-foreground (read back through a probe beside it).
    const probe = document.createElement('span')
    probe.style.color = 'var(--muted-foreground)'
    value.after(probe)
    await expect(getComputedStyle(value).color).toBe(getComputedStyle(probe).color)
    probe.remove()
  },
}

export const Variants: Story = {
  render: (args) => (
    <div style={stack}>
      {(['primary', 'accent', 'secondary', 'destructive'] as const).map((variant) => (
        <ProgressBar key={variant} {...args} variant={variant} label={variant} showValueLabel />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div style={stack}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ProgressBar key={size} {...args} size={size} label={size} isRounded />
      ))}
    </div>
  ),
}

export const Max: Story = {
  args: { value: 3, max: 5, showValueLabel: true, label: 'Steps done' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuemax', '5')
    await expect(canvas.getByText('60%')).toBeVisible()
  },
}

export const Indeterminate: Story = {
  args: { isIndeterminate: true, label: 'Connecting' },
  play: async ({ canvas }) => {
    // No value to report: aria-valuenow is absent, not 0.
    const bar = canvas.getByRole('progressbar', { name: 'Connecting' })
    await expect(bar).not.toHaveAttribute('aria-valuenow')
    // Reduced motion slows the slide to 4s a pass. A play cannot set
    // prefers-reduced-motion, so read the rule that would apply.
    const indicator = bar.querySelector(':scope > div > :first-child > *')!
    await expect(getComputedStyle(indicator).animationDuration).toBe('1.4s')
    await expect(mediaRules('prefers-reduced-motion: reduce', indicator).map((r) => r.style.animationDuration)).toContain('4s')
  },
}

export const WithoutVisibleLabel: Story = {
  args: { label: undefined, 'aria-label': 'Storage used' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar', { name: 'Storage used' })).toBeVisible()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: '[role="progressbar"] > :first-child', description: 'Optional, above the bar. Names the progressbar.' },
  { name: 'Track', selector: '[role="progressbar"] > div > :first-child', description: 'The full length, --secondary.' },
  { name: 'Indicator', selector: '[role="progressbar"] > div > :first-child > *', description: 'The filled share, coloured by variant. A sliding third when indeterminate.' },
  { name: 'Value label', selector: '[role="progressbar"] > div > :last-child', description: 'Optional, showValueLabel: the percentage after the bar.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { showValueLabel: true, size: 'lg' },
  // The docs stage shrink-wraps its example; a bar needs a width to show its fill.
  decorators: [(Story) => <div style={{ inlineSize: '20rem' }}>{Story()}</div>],
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[0]).toHaveTextContent('Uploading')
    await expect(found[3]).toHaveTextContent('70%')
  },
}

/** Guidelines, Do: the label says what is in progress. */
export const DoNameTheTask: Story = {
  args: { label: 'Uploading report.pdf', showValueLabel: true },
}

/** Guidelines, Don't: a bare bar, with only an aria-label, leaves sighted readers guessing. */
export const DontBareBar: Story = {
  tags: ['!dev'],
  args: { label: undefined, 'aria-label': 'Uploading report.pdf', showValueLabel: true },
}

/** The fill clears 3:1 on the track for every variant, under all seventeen accents, in both modes. */
export const FillContrast: Story = {
  decorators: [],
  render: () => (
    <div>
      {(['light', 'dark'] as const).map((mode) => (
        <Theme key={mode} appearance={mode} style={{ background: 'var(--background)', padding: 8 }}>
          {ACCENT_COLORS.map((accent) => (
            <Theme key={accent} accentColor={accent} style={{ display: 'flex', gap: 4 }}>
              {(['primary', 'accent', 'secondary', 'destructive'] as const).map((variant) => (
                <ProgressBar key={variant} size="sm" variant={variant} value={50} aria-label={`${mode} ${accent} ${variant}`} />
              ))}
            </Theme>
          ))}
        </Theme>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const failures: string[] = []
    for (const bar of canvasElement.querySelectorAll<HTMLElement>('[role="progressbar"]')) {
      const page = getComputedStyle(bar.parentElement!.parentElement!).backgroundColor
      const track = bar.querySelector(':scope > div > :first-child')!
      const fill = getComputedStyle(track.firstElementChild!).backgroundColor
      const value = contrast(fill, page, getComputedStyle(track).backgroundColor)
      if (value < 3) failures.push(`${bar.getAttribute('aria-label')}: ${value.toFixed(2)}`)
    }
    await expect(failures).toEqual([])
  },
}
