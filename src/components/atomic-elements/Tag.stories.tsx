import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { Theme } from '@/theme/Theme'
import { TAG_VARIANTS, Tag } from './Tag'
import { contrast, mediaRules } from '@/test/story-helpers'

const portrait =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#c7d2fe"/><circle cx="32" cy="26" r="12" fill="#6366f1"/><rect x="12" y="42" width="40" height="30" rx="20" fill="#6366f1"/></svg>',
  )

const meta = {
  title: 'Components/Atomic Elements/Tag',
  tags: ['beta'],
  component: Tag,
  args: { text: 'Account verified' },
  // Every prop is listed by hand, with its type and default: these
  // descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    text: {
      description: 'The label. Required. Truncates with an ellipsis rather than wrapping.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    variant: {
      description:
        'A status (`neutral`, `info`, `success`, `warning`, `danger`) or one of the 17 accent hues, for categories.',
      control: 'select',
      options: TAG_VARIANTS,
      table: { type: { summary: 'TagVariant' }, defaultValue: { summary: "'info'" } },
    },
    appearance: {
      description: '`subtle` tint, `outlined` border, or `solid` fill. Solid hue tags fall under 4.5:1 on warm hues.',
      control: 'inline-radio',
      options: ['subtle', 'outlined', 'solid'],
      table: { type: { summary: "'subtle' | 'outlined' | 'solid'" }, defaultValue: { summary: "'subtle'" } },
    },
    size: {
      description: 'Deprecated. Every tag is 20px tall; `sm` renders the same tag as `md` and will be removed in the next release.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    startIcon: {
      description: 'Icon before the text, usually `<Icon name="…" />`. Decorative: hidden from screen readers.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    startAvatar: {
      description: 'Image URL for a small round picture before the text, e.g. a person in a filter. Decorative. Wins over `startIcon`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    hasRemoveButton: {
      description: 'Adds a remove button named "Remove `text`".',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onRemove: {
      description: 'Called when the remove button is pressed. The tag does not remove itself: drop it from your list.',
      control: false,
      table: { type: { summary: '(event: MouseEvent) => void' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

const grid = { display: 'grid', gap: 'var(--space-3)', justifyItems: 'start' }
const row = { display: 'flex', flexWrap: 'wrap' as const, gap: 'var(--space-2)', alignItems: 'center' }
const statuses = ['neutral', 'info', 'success', 'warning', 'danger'] as const
const hues = TAG_VARIANTS.filter((v) => !(statuses as readonly string[]).includes(v))

export const Default: Story = {}

export const Matrix: Story = {
  render: (args) => (
    <div style={grid}>
      {(['subtle', 'outlined', 'solid'] as const).map((appearance) => (
        <div key={appearance} style={row}>
          {statuses.map((variant) => (
            <Tag key={variant} {...args} appearance={appearance} variant={variant} text={variant} />
          ))}
        </div>
      ))}
    </div>
  ),
}

/** Every hue, for categories rather than status: labels, projects, owners.
    Solid hues all take a white label, which the warm ones carry below 4.5:1
    (a deliberate call), so contrast here warns instead of failing. */
export const Colors: Story = {
  parameters: { a11y: { test: 'todo' } },
  render: (args) => (
    <div style={grid}>
      {(['subtle', 'outlined', 'solid'] as const).map((appearance) => (
        <div key={appearance} style={row}>
          {hues.map((variant) => (
            <Tag key={variant} {...args} appearance={appearance} variant={variant} text={variant} />
          ))}
        </div>
      ))}
    </div>
  ),
}

const lines = [
  ['heading', 'var(--text-heading-lg)', 'var(--leading-heading-lg)', 28],
  ['body', 'var(--text-body)', 'var(--leading-body)', 20],
  ['small', 'var(--text-body-sm)', 'var(--leading-body-sm)', 20],
  // Another family (a mono table cell): the line still keeps its height.
  ['mono', 'var(--text-body)', 'var(--leading-body)', 20, 'var(--font-mono)'],
] as const

/**
 * In a line of text the tag is centred on that line, whatever the line's
 * font. A line as tall as the tag or taller keeps its height; a 16px line
 * grows to the tag's 20px.
 */
export const InText: Story = {
  render: (args) => (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--foreground)' }}>
      {lines.map(([name, fontSize, lineHeight, , fontFamily]) => (
        <div key={name} data-testid={name} style={{ fontSize, lineHeight, fontFamily }}>
          <span>Invoice 1041</span> <Tag {...args} />
        </div>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    for (const [name, , , height] of lines) {
      const line = canvas.getByTestId(name)
      const centre = (el: Element) => el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2
      await expect(line.getBoundingClientRect().height).toBe(height)
      // The tag's own text is the kit's sans, whatever family surrounds it.
      await expect(getComputedStyle(line.querySelector('span[class*="text"]')!).fontFamily).not.toBe(
        getComputedStyle(canvas.getByTestId('mono')).fontFamily,
      )
      // The tag's centre is the text's: the middle of its line, not of its x-height.
      await expect(Math.abs(centre(line.querySelector('span[class*="tag"]')!) - centre(line.querySelector('span')!))).toBeLessThan(0.51)
    }
  },
}

/** `size` is deprecated: both values render the one 20px tag. Hidden until the prop goes. */
export const Sizes: Story = {
  tags: ['!dev'],
  render: (args) => (
    <div style={row}>
      <Tag {...args} size="sm" startIcon={<Icon name="success" />} hasRemoveButton />
      <Tag {...args} size="md" startIcon={<Icon name="success" />} hasRemoveButton />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const [sm, md] = [...canvasElement.querySelectorAll('span[class*="tag"]')].map(
      (t) => t.getBoundingClientRect().height,
    )
    // One size: sm is deprecated and renders the md tag.
    await expect([sm, md]).toEqual([20, 20])
  },
}

export const WithIcon: Story = {
  args: { startIcon: <Icon name="success" />, variant: 'success' },
  play: async ({ canvas, canvasElement, args }) => {
    // Decorative: hidden, so the tag reads as its text alone.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull()
    await expect(canvas.queryByRole('img')).toBeNull()
    // 4px from the tag's outer edge to its content, border included, and 4px between icon and text: Atlassian's tag.
    const tag = canvasElement.querySelector('span[class*="tag"]')!
    const icon = tag.querySelector(':scope > [aria-hidden="true"]')!.getBoundingClientRect()
    const text = canvas.getByText(String(args.text)).getBoundingClientRect()
    await expect(icon.left - tag.getBoundingClientRect().left).toBeCloseTo(4, 1)
    await expect(tag.getBoundingClientRect().right - text.right).toBeCloseTo(4, 1)
    await expect(text.left - icon.right).toBeCloseTo(4, 1)
  },
}

export const WithAvatar: Story = {
  args: { text: 'Mary Thompson', startAvatar: portrait, hasRemoveButton: true },
  play: async ({ canvas, canvasElement }) => {
    // Decorative: alt="", so the name is said once, by the text.
    await expect(canvasElement.querySelector('img')).toHaveAttribute('alt', '')
    await expect(canvas.queryByRole('img')).toBeNull()
  },
}

export const Removable: Story = {
  args: { hasRemoveButton: true, onRemove: fn() },
  play: async ({ canvas, args, userEvent }) => {
    const remove = canvas.getByRole('button', { name: 'Remove Account verified' })
    // A native button, not a span with a role.
    await expect(remove.tagName).toBe('BUTTON')
    await userEvent.click(remove)
    await expect(args.onRemove).toHaveBeenCalledTimes(1)
    // Reachable and operable by keyboard alone.
    await userEvent.tab()
    await userEvent.tab({ shift: true })
    await expect(remove).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await userEvent.keyboard(' ')
    await expect(args.onRemove).toHaveBeenCalledTimes(3)
  },
}

/** Removing a tag is the parent's job: onRemove reports, the list updates. */
export const RemovableList: Story = {
  render: function Render(args) {
    const [tags, setTags] = useState(['Design', 'Research', 'Engineering'])
    return (
      <div style={row}>
        {tags.map((t) => (
          <Tag
            key={t}
            {...args}
            text={t}
            hasRemoveButton
            onRemove={() => setTags((all) => all.filter((x) => x !== t))}
          />
        ))}
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Research' }))
    await expect(canvas.queryByText('Research')).toBeNull()
    await expect(canvas.getAllByRole('button')).toHaveLength(2)
    // Removed by keyboard, focus has nowhere to stay: it drops to the page.
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Remove Design' })).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(canvas.queryByText('Design')).toBeNull()
    await expect(document.body).toHaveFocus()
  },
}

/**
 * The remove button's touch target. A play cannot switch the pointer type, so
 * this reads the `(pointer: coarse)` rule that reaches the button.
 */
export const TouchTarget: Story = {
  args: { hasRemoveButton: true },
  play: async ({ canvas }) => {
    const remove = canvas.getByRole('button', { name: 'Remove Account verified' })
    const [area] = mediaRules('pointer: coarse', remove, '::before')
    await expect(area).toBeDefined()
    await expect([area.style.inlineSize, area.style.blockSize]).toEqual(['var(--target-coarse)', 'var(--target-coarse)'])
    // …and the token is the 44px WCAG 2.5.5 asks for.
    await expect(getComputedStyle(remove).getPropertyValue('--target-coarse').trim()).toBe('44px')
    // On a fine pointer the hit area is the 24px of WCAG 2.5.8.
    const before = getComputedStyle(remove, '::before')
    await expect([before.inlineSize, before.blockSize]).toEqual(['24px', '24px'])
    // Absolutely placed and unpainted: the tag looks and measures the same.
    await expect(before.position).toBe('absolute')
    await expect(before.backgroundColor).toBe('rgba(0, 0, 0, 0)')
    // Centred on the button, so past a 20px tag it reaches (44 - 20) / 2 = 12px each side.
    const tag = remove.parentElement!.getBoundingClientRect()
    const button = remove.getBoundingClientRect()
    await expect(tag.height).toBe(20)
    await expect(button.top + button.height / 2).toBeCloseTo(tag.top + tag.height / 2, 0)
  },
}

/**
 * Every label on its fill, in both modes: every status in every appearance,
 * every hue in subtle and outlined. Solid hues are the documented exception.
 */
export const Contrast: Story = {
  render: (args) => (
    <div>
      {(['light', 'dark'] as const).map((mode) => (
        <Theme key={mode} appearance={mode} style={{ ...row, background: 'var(--background)', padding: 4 }}>
          {(['subtle', 'outlined', 'solid'] as const).flatMap((appearance) =>
            (appearance === 'solid' ? statuses : TAG_VARIANTS).map((variant) => (
              <Tag
                key={appearance + variant}
                {...args}
                appearance={appearance}
                variant={variant}
                text="Aa"
                data-audit={`${mode} ${appearance} ${variant}`}
              />
            )),
          )}
        </Theme>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const failures: string[] = []
    for (const tag of canvasElement.querySelectorAll<HTMLElement>('[data-audit]')) {
      const { color, backgroundColor } = getComputedStyle(tag)
      const ratio = contrast(color, getComputedStyle(tag.parentElement!).backgroundColor, backgroundColor)
      if (ratio < 4.5) failures.push(`${tag.dataset.audit}: ${ratio.toFixed(2)}`)
    }
    await expect(failures).toEqual([])
  },
}

/** A countdown keeps its width as the digits change: digits are tabular. */
export const Numbers: Story = {
  render: (args) => (
    <div style={row}>
      <Tag {...args} text="11:11" />
      <Tag {...args} text="00:00" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const [a, b] = [...canvasElement.querySelectorAll('span[class*="tag"]')].map((t) => t.getBoundingClientRect().width)
    // Not toBe: Firefox on macOS lays the two out a float's rounding apart.
    await expect(a).toBeCloseTo(b, 2)
  },
}

export const Truncated: Story = {
  args: { text: 'A tag whose text is far longer than the space it has been given' },
  render: (args) => (
    <div style={{ inlineSize: '12rem' }}>
      <Tag {...args} />
    </div>
  ),
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: 'span', description: 'The box: fill, border and corner by appearance and variant.' },
  { name: 'Start icon', selector: 'span > [aria-hidden="true"]', description: 'Optional and decorative. A start avatar takes its place when given.' },
  { name: 'Text', selector: 'span > span:not([aria-hidden])', description: 'Truncates with an ellipsis rather than wrapping.' },
  { name: 'Remove button', selector: 'button', description: 'Optional. A real <button> named "Remove" and the text.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { text: 'Design', startIcon: <Icon name="success" />, hasRemoveButton: true },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[0]).toContainElement(found[3] as HTMLElement)
    await expect(found[2]).toHaveTextContent('Design')
  },
}

/** Guidelines, Do: a hue in subtle or outlined, where every label clears 4.5:1. */
export const DoSubtleHues: Story = {
  render: (args) => (
    <div style={row}>
      {(['orange', 'amber', 'yellow', 'lime'] as const).map((variant) => (
        <Tag key={variant} {...args} variant={variant} text={variant} />
      ))}
    </div>
  ),
}

/** Guidelines, Don't: solid warm hues carry their white label under 4.5:1. */
export const DontSolidWarmHues: Story = {
  tags: ['!dev'],
  // Off on purpose: this story exists to show the label that fails 4.5:1.
  parameters: { a11y: { test: 'off' } },
  render: (args) => (
    <div style={row}>
      {(['orange', 'amber', 'yellow', 'lime'] as const).map((variant) => (
        <Tag key={variant} {...args} appearance="solid" variant={variant} text={variant} />
      ))}
    </div>
  ),
}
