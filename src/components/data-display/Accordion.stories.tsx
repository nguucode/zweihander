import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, waitFor } from 'storybook/test'
import { mediaRules } from '@/test/story-helpers'
import { Accordion } from './Accordion'

const faq = [
  {
    value: 'install',
    title: 'How do I install it?',
    content: 'Copy a component with the shadcn CLI, or install the npm package and import it.',
  },
  {
    value: 'theme',
    title: 'Can I change the colours?',
    content: 'Wrap a subtree in Theme and pick an accent and a gray; every component follows.',
  },
  {
    value: 'dark',
    title: 'Does it support dark mode?',
    content: 'Yes. Add the dark class to any element and everything inside switches.',
  },
]

const meta = {
  title: 'Components/Data Display/Accordion',
  tags: ['beta'],
  component: Accordion,
  // These descriptions are the docs' API table and the Playground's props
  // panel. Types are spelled out where react-docgen shows only a name
  // (AccordionItem[]) or a function signature.
  argTypes: {
    items: {
      description:
        'The sections, in order. Flat, per the kit\'s "flat props" convention: each is `{ value, title, content, disabled? }`, and `value` is its id in `value` and `defaultValue`.',
      control: false,
      table: { type: { summary: '{ value: string; title: ReactNode; content: ReactNode; disabled?: boolean }[]' } },
    },
    value: {
      description:
        'Controlled: the values of the open items. Pair with `onValueChange`. An array in single mode too: Base UI\'s model, and the type stays the same when `multiple` is switched on.',
      control: false,
      table: { type: { summary: 'string[]' } },
    },
    defaultValue: {
      description: 'The items open at first, when uncontrolled.',
      control: 'object',
      table: { type: { summary: 'string[]' }, defaultValue: { summary: '[]' } },
    },
    onValueChange: {
      description: "Called with the values of the open items when one opens or closes. Base UI's event details are dropped.",
      control: false,
      table: { type: { summary: '(value: string[]) => void' } },
    },
    multiple: {
      description: 'Allow more than one item open at once. Off: opening an item closes the one that was open.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    appearance: {
      description: '`outlined` frames the items in a panel; `flush` leaves them edge to edge, with no side padding.',
      control: 'inline-radio',
      options: ['outlined', 'flush'],
      table: { type: { summary: "'outlined' | 'flush'" }, defaultValue: { summary: "'outlined'" } },
    },
    size: {
      description: 'Triggers 32px (`md`) or 24px (`sm`) tall, from the control tiers. `sm` takes 12px text.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    headingLevel: {
      description:
        "The heading element each trigger sits in. Match it to the page's outline, which the component cannot know.",
      control: 'inline-radio',
      options: [2, 3, 4, 5, 6],
      table: { type: { summary: '2 | 3 | 4 | 5 | 6' }, defaultValue: { summary: '3' } },
    },
    disabled: {
      description: 'Disables every item. To disable one, set `disabled` on its entry in `items`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    className: {
      description: 'Added to the container.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  args: { items: faq, onValueChange: fn() },
  decorators: [(Story) => <div style={{ maxInlineSize: '32rem' }}>{Story()}</div>],
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const install = canvas.getByRole('button', { name: 'How do I install it?' })
    await expect(install).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(install)
    await expect(install).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByText(/Copy a component/)).toBeVisible()
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['install'])
    // Single mode: opening another closes the first.
    await userEvent.click(canvas.getByRole('button', { name: 'Can I change the colours?' }))
    await expect(install).toHaveAttribute('aria-expanded', 'false')
    // Each trigger is a tab stop; Enter and Space toggle.
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Does it support dark mode?' })).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(canvas.getByRole('button', { name: 'Does it support dark mode?' })).toHaveAttribute('aria-expanded', 'true')
    await userEvent.keyboard(' ')
    await expect(canvas.getByRole('button', { name: 'Does it support dark mode?' })).toHaveAttribute('aria-expanded', 'false')
  },
}

/** One item open: the trigger is a button in a heading, and the panel is a region it labels. */
export const Open: Story = {
  args: { defaultValue: ['install'] },
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole('button', { name: 'How do I install it?' })
    await expect(trigger.parentElement).toBe(canvas.getByRole('heading', { level: 3, name: 'How do I install it?' }))
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await expect(trigger.getBoundingClientRect().height).toBe(32)
    const region = canvas.getByRole('region', { name: 'How do I install it?' })
    await expect(trigger).toHaveAttribute('aria-controls', region.id)
    await expect(region).toHaveTextContent(/Copy a component/)
    // No arrow-key movement between triggers: Tab moves, arrows do not.
    trigger.focus()
    await userEvent.keyboard('{ArrowDown}')
    await expect(trigger).toHaveFocus()
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Can I change the colours?' })).toHaveFocus()
  },
}

export const Headings: Story = {
  args: { headingLevel: 2 },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('heading', { level: 2 })).toHaveLength(3)
  },
}

export const Multiple: Story = {
  args: { multiple: true, defaultValue: ['install'] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Can I change the colours?' }))
    await expect(canvas.getByRole('button', { name: 'How do I install it?' })).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByRole('button', { name: 'Can I change the colours?' })).toHaveAttribute('aria-expanded', 'true')
  },
}

export const Flush: Story = {
  args: { appearance: 'flush', defaultValue: ['theme'] },
}

export const Small: Story = {
  args: { size: 'sm', defaultValue: ['install'] },
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'How do I install it?' })
    await expect(trigger.getBoundingClientRect().height).toBe(24)
  },
}

export const DisabledItem: Story = {
  args: { items: faq.map((i) => (i.value === 'dark' ? { ...i, disabled: true } : i)) },
  play: async ({ canvas, userEvent }) => {
    const dark = canvas.getByRole('button', { name: 'Does it support dark mode?' })
    await expect(dark).toHaveAttribute('aria-disabled', 'true')
    await userEvent.click(dark)
    await expect(dark).toHaveAttribute('aria-expanded', 'false')
  },
}

/** `disabled` on the accordion: every item. */
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas, userEvent, args }) => {
    for (const trigger of canvas.getAllByRole('button')) {
      await expect(trigger).toHaveAttribute('aria-disabled', 'true')
      await userEvent.click(trigger)
      await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    }
    await expect(args.onValueChange).not.toHaveBeenCalled()
  },
}

/** Collapsed panels stay in the DOM, so find-in-page can reach them. */
export const FindInPage: Story = {
  play: async ({ canvasElement }) => {
    const panel = [...canvasElement.querySelectorAll('[hidden]')].find((el) =>
      el.textContent?.includes('Copy a component'),
    )
    await expect(panel).toHaveAttribute('hidden', 'until-found')
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [open, setOpen] = useState<string[]>([])
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
        <Accordion {...args} value={open} onValueChange={setOpen} />
        <span>Open: {open.join(', ') || 'none'}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Can I change the colours?' }))
    await waitFor(() => expect(canvas.getByText('Open: theme')).toBeVisible())
  },
}

/** A play cannot switch the pointer type, so this reads the `(pointer: coarse)` rule that reaches a trigger. */
export const TouchTarget: Story = {
  play: async ({ canvas }) => {
    const [trigger] = canvas.getAllByRole('button')
    const [rule] = mediaRules('pointer: coarse', trigger)
    await expect(rule).toBeDefined()
    // The trigger itself grows: no invisible hit area overlapping the next one.
    await expect(rule.style.minBlockSize).toBe('var(--target-coarse)')
    await expect(mediaRules('pointer: coarse', trigger, '::before')).toEqual([])
  },
}

/** A play cannot set prefers-reduced-motion. The panel and the chevron time their transitions with --duration-base, and the reduced-motion rule in tokens.css sets that to 0ms. */
export const ReducedMotion: Story = {
  args: { defaultValue: ['install'] },
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'How do I install it?' })
    const panel = canvas.getByRole('region', { name: 'How do I install it?' })
    const chevron = trigger.querySelector('svg')!
    const base = getComputedStyle(panel).getPropertyValue('--duration-base').trim()
    for (const el of [panel, chevron]) {
      await expect(Number.parseFloat(getComputedStyle(el).transitionDuration) * 1000).toBe(Number.parseFloat(base))
    }
    const reduced = mediaRules('prefers-reduced-motion: reduce', document.documentElement)
    await expect(reduced.map((r) => r.style.getPropertyValue('--duration-base').trim())).toContain('0ms')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: '[data-orientation]:not([data-index])', description: 'Frames the items (outlined) or leaves them edge to edge (flush).' },
  { name: 'Item', selector: 'div:has(> h3)', description: 'One header and its panel, separated from the next by a --border line.' },
  { name: 'Header', selector: 'h3', description: 'A real heading element, h3 by default (headingLevel).' },
  { name: 'Trigger', selector: 'h3 > button', description: 'A button filling the header. It turns the panel on and off.' },
  { name: 'Title', selector: 'h3 > button > span', description: "The item's title, medium weight." },
  { name: 'Chevron', selector: 'h3 > button > svg', description: 'Points down when closed and up when open. Decorative.' },
  { name: 'Panel', selector: '[role="region"]', description: 'The content, in muted text. A closed panel stays in the DOM for find-in-page.' },
]

/** The first item open, so every part is on screen. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { defaultValue: ['install'] },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[4]).toHaveTextContent('How do I install it?')
    await expect(found[6]).toHaveTextContent(/Copy a component/)
  },
}

/** Guidelines, Do: several related sections a reader picks from. */
export const DoRelatedSections: Story = {
  args: { defaultValue: ['install'] },
}

/** Guidelines, Don't: one section in an accordion. That is a Collapse. */
export const DontSingleItem: Story = {
  tags: ['!dev'],
  args: { items: faq.slice(0, 1) },
}
