import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Collapse } from './Collapse'
import { mediaRules } from '@/test/story-helpers'

const meta = {
  title: 'Components/Data Display/Collapse',
  tags: ['beta'],
  component: Collapse,
  args: {
    label: 'Show details',
    openLabel: 'Hide details',
    children: (
      <p style={{ margin: 0 }}>
        Billed yearly on 1 March. Seats you add mid-year are charged for the months left, and removed seats are
        credited to the next invoice.
      </p>
    ),
    onOpenChange: fn(),
  },
  // These descriptions are the docs' API table and the Playground's props
  // panel. Types are spelled out where react-docgen shows only ReactNode or
  // a function signature.
  argTypes: {
    label: {
      description: 'The trigger\'s text, e.g. "Show details". Required.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    openLabel: {
      description:
        'The trigger\'s text while open, e.g. "Hide details". Defaults to `label`. The button\'s name follows the state; `aria-expanded` says it either way.',
      control: 'text',
      table: { type: { summary: 'ReactNode' }, defaultValue: { summary: 'label' } },
    },
    children: {
      description: 'The content the trigger shows and hides. Required.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    open: {
      description: 'Controlled open state. Pair with `onOpenChange`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultOpen: {
      description: 'Starting open state when uncontrolled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      description: 'Called with the new state on click, Enter and Space. Not called while disabled.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    size: {
      description: 'The text size: `--text-body` (`md`) or `--text-body-sm` (`sm`). Match the text around it.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    disabled: {
      description: 'Dimmed, and clicking does nothing.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hiddenUntilFound: {
      description:
        'Keep the closed content in the page as `hidden="until-found"`, so the browser\'s find-in-page reaches it and opens it. Turn it off only for content that is expensive to render.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    className: {
      description: 'Added to the container.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  decorators: [(Story) => <div style={{ maxInlineSize: '32rem' }}>{Story()}</div>],
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Collapse>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Show details' })
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    // The chevron is hidden: the exact name above has nothing from it.
    await expect(trigger.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull()
    await userEvent.click(trigger)
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true)
    // The name follows the state.
    const open = canvas.getByRole('button', { name: 'Hide details' })
    await expect(open).toHaveAttribute('aria-expanded', 'true')
    await waitFor(() => expect(canvas.getByText(/Billed yearly/)).toBeVisible())
    // The trigger controls the panel it opened.
    const panel = document.getElementById(open.getAttribute('aria-controls')!)!
    await expect(panel).toContainElement(canvas.getByText(/Billed yearly/))
    await userEvent.keyboard('{Enter}')
    await expect(canvas.getByRole('button', { name: 'Show details' })).toHaveAttribute('aria-expanded', 'false')
    await userEvent.keyboard(' ')
    await expect(canvas.getByRole('button', { name: 'Hide details' })).toHaveAttribute('aria-expanded', 'true')
  },
}

export const Open: Story = { args: { defaultOpen: true } }

export const Small: Story = {
  args: { size: 'sm', label: 'Advanced settings', openLabel: undefined },
  play: async ({ canvas, userEvent }) => {
    // Without openLabel the name stays put; aria-expanded carries the state.
    const trigger = canvas.getByRole('button', { name: 'Advanced settings' })
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    await userEvent.keyboard(' ')
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await expect(trigger).toHaveAccessibleName('Advanced settings')
    await userEvent.keyboard('{Enter}')
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Show details' }))
    await expect(args.onOpenChange).not.toHaveBeenCalled()
  },
}

/** Closed content stays findable: it is hidden="until-found", not removed. */
export const Searchable: Story = {
  play: async ({ canvas }) => {
    const text = canvas.getByText(/Billed yearly/, {}) as HTMLElement
    await expect(text.closest('[hidden]')).toHaveAttribute('hidden', 'until-found')
  },
}

/** A play cannot switch the pointer type, so this reads the `(pointer: coarse)` rule that reaches the trigger. */
export const TouchTarget: Story = {
  play: async ({ canvas }) => {
    const [area] = mediaRules('pointer: coarse', canvas.getByRole('button'), '::before')
    await expect(area).toBeDefined()
    await expect([area.style.minInlineSize, area.style.blockSize]).toEqual(['var(--target-coarse)', 'var(--target-coarse)'])
  },
}

/** A play cannot set prefers-reduced-motion. The panel and the chevron time their transitions with --duration-base, and the reduced-motion rule in tokens.css sets that to 0ms. */
export const ReducedMotion: Story = {
  // Open, so the panel is mounted.
  args: { defaultOpen: true },
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button')
    const panel = document.getElementById(trigger.getAttribute('aria-controls')!)!
    const chevron = trigger.querySelector('[aria-hidden="true"]')!
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
  { name: 'Container', selector: 'div:has(> button)', description: 'Holds the trigger and the panel; sets the text size.' },
  { name: 'Trigger', selector: 'button', description: 'A medium-weight text button, underlined on hover.' },
  { name: 'Chevron', selector: 'button > [aria-hidden="true"]', description: 'Points right when closed and down when open. Decorative.' },
  { name: 'Label', selector: 'button > span:last-child', description: 'The text. With openLabel, a second label replaces it while open.' },
  { name: 'Panel', selector: 'button + div', description: 'The content, under the trigger. Its height animates open and shut.' },
]

/** Open, the label in its own element so the docs can point at it. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { defaultOpen: true, label: <span>Billing details</span>, openLabel: undefined },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[3]).toHaveTextContent('Billing details')
    await expect(found[4]).toHaveTextContent(/Billed yearly/)
  },
}

/** Guidelines, Do: one aside in running text, its label saying what opening it does. */
export const DoAsideInText: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
      <p style={{ margin: 0 }}>Your plan renews on 1 March for 12 seats.</p>
      <Collapse {...args} />
    </div>
  ),
}

/** Guidelines, Don't: a stack of Collapses standing in for an Accordion. */
export const DontStackAsList: Story = {
  tags: ['!dev'],
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
      <Collapse {...args} label="Billing" openLabel={undefined} />
      <Collapse {...args} label="Seats" openLabel={undefined} />
      <Collapse {...args} label="Invoices" openLabel={undefined} />
    </div>
  ),
}
