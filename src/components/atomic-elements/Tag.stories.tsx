import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
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
      description: '20px (`sm`) or 24px (`md`) tall: the control tier below its name, to sit in a line of text.',
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

export const Sizes: Story = {
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
    await expect([sm, md]).toEqual([20, 24])
  },
}

export const WithIcon: Story = {
  args: { startIcon: <Icon name="success" />, variant: 'success' },
  play: async ({ canvas, canvasElement }) => {
    // Decorative: hidden, so the tag reads as its text alone.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull()
    await expect(canvas.queryByRole('img')).toBeNull()
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
    // Absolutely placed and unpainted: the tag looks and measures the same.
    await expect(area.style.position).toBe('absolute')
    await expect(area.style.background).toBe('')
    // Centred on the button, so past a 24px tag it reaches (44 - 24) / 2 = 10px each side.
    const tag = remove.parentElement!.getBoundingClientRect()
    const button = remove.getBoundingClientRect()
    await expect(tag.height).toBe(24)
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
                size="sm"
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
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
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
