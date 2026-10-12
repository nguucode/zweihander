import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, userEvent, within } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Button } from '../buttons/Button'
import { Stepper } from './Stepper'
import { mediaRules } from '@/test/story-helpers'

const steps = [
  { label: 'Account', description: 'Email and password' },
  { label: 'Workspace', description: 'Name and URL' },
  { label: 'Invite', description: 'Add your team' },
  { label: 'Done' },
]

const meta = {
  title: 'Components/Navigation/Stepper',
  tags: ['beta'],
  component: Stepper,
  args: { steps, current: 1 },
  // Every prop is described here: these are the docs' API table and the
  // Playground's props panel.
  argTypes: {
    steps: {
      description:
        "The steps, in order: `{ label, description?, status? }`. `status` (`'complete' | 'current' | 'upcoming' | 'error'`) overrides the one worked out from `current`, e.g. to flag an error.",
      control: false,
      table: { type: { summary: 'StepperStep[]' } },
    },
    current: {
      description: 'The 0-based index of the step the reader is on. Steps before it are complete, steps after it upcoming.',
      control: { type: 'range', min: 0, max: 3 },
      table: { type: { summary: 'number' } },
    },
    orientation: {
      description: '`horizontal` puts each label under its marker; `vertical` stacks the steps, for long descriptions or a narrow column.',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      table: { type: { summary: "'horizontal' | 'vertical'" }, defaultValue: { summary: "'horizontal'" } },
    },
    size: {
      description: 'A 32px (`md`) or 24px (`sm`) marker. `sm` takes a 12px label.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    onStepClick: {
      description: 'Makes complete steps and the current one buttons that go back to them, called with the index. Upcoming steps stay plain text.',
      control: false,
      table: { type: { summary: '(index: number) => void' } },
    },
    'aria-label': {
      description: "The `<nav>` landmark's name.",
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Progress'" } },
    },
  },
  excludeStories: ['anatomyParts'],
  decorators: [(Story) => <div style={{ maxInlineSize: '44rem' }}>{Story()}</div>],
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Progress' })
    // An ordered list, so screen readers announce the count and each position.
    await expect(within(nav).getByRole('list').tagName).toBe('OL')
    const items = within(nav).getAllByRole('listitem')
    await expect(items).toHaveLength(4)
    await expect(items[1]).toHaveAttribute('aria-current', 'step')
    // Status is spoken with the label, since the marker is decorative.
    await expect(items[0]).toHaveTextContent('Account, completed')
    await expect(items[2]).toHaveTextContent('Invite, not started')
    // Without onStepClick nothing is a button.
    await expect(within(nav).queryByRole('button')).toBeNull()
  },
}

export const Vertical: Story = { args: { orientation: 'vertical', current: 2 } }

export const Small: Story = { args: { size: 'sm' } }

export const WithError: Story = {
  args: {
    current: 2,
    steps: [steps[0], { ...steps[1], status: 'error', description: 'That URL is taken' }, steps[2], steps[3]],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('listitem')[1]).toHaveTextContent('Workspace, has an error')
  },
}

/** Finished steps become buttons that go back; upcoming ones cannot be skipped to. */
export const Navigable: Story = {
  render: function Render(args) {
    const [current, setCurrent] = useState(2)
    return (
      <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
        <Stepper {...args} current={current} onStepClick={setCurrent} />
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button appearance="outlined" variant="accent" disabled={current === 0} onClick={() => setCurrent(current - 1)}>
            Back
          </Button>
          <Button disabled={current === steps.length - 1} onClick={() => setCurrent(current + 1)}>
            Next
          </Button>
        </div>
      </div>
    )
  },
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation')
    // Account, Workspace (done) and Invite (current) are buttons; Done is not.
    await expect(within(nav).getAllByRole('button')).toHaveLength(3)
    // The marker ("3") is decorative: the name starts with the label and its status.
    await expect(within(nav).getByRole('button', { name: /^Invite\s*, current/ })).toBeInTheDocument()
    // Real buttons: reached with Tab, showing the focus ring, pressed with Enter.
    await userEvent.tab()
    const account = within(nav).getByRole('button', { name: /^Account\s*, completed/ })
    await expect(account).toHaveFocus()
    await expect(getComputedStyle(account).outlineStyle).toBe('solid')
    // 44px on coarse pointers. The runner's pointer is fine, so read the rule the media query applies.
    await expect(mediaRules('pointer: coarse', account).find((r) => r.style.minBlockSize)?.style.minBlockSize).toBe('var(--target-coarse)')
    await userEvent.keyboard('{Enter}')
    await expect(within(nav).getAllByRole('listitem')[0]).toHaveAttribute('aria-current', 'step')
  },
}

/** Every status at once, small and short so it fits a cell of the States table. */
export const Statuses: Story = {
  tags: ['!dev'],
  args: {
    size: 'sm',
    current: 2,
    steps: [{ label: 'Cart' }, { label: 'Ship', status: 'error' }, { label: 'Pay' }, { label: 'Done' }],
  },
}

/** With `onStepClick`, for the States table: finished steps and the current one are buttons. */
export const Clickable: Story = {
  tags: ['!dev'],
  args: { size: 'sm', current: 1, steps: [{ label: 'Cart' }, { label: 'Ship' }, { label: 'Pay' }], onStepClick: fn() },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Marker', selector: 'li:nth-child(1) > span > span:first-child', description: 'A disc: a check when complete, the number when current or upcoming, a warning on error.' },
  { name: 'Label', selector: 'li:nth-child(2) > span > span:last-child > span:first-child', description: 'The step\'s name, with its status in hidden text for screen readers.' },
  { name: 'Description', selector: 'li:nth-child(2) > span > span:last-child > span:last-child', description: 'Optional, small and muted.' },
  { name: 'Connector', selector: 'li:nth-child(2) > span:last-child', description: 'The line to the next step: primary once the step is complete.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { current: 1 },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[1]).toHaveTextContent('Workspace')
    await expect(found[2]).toHaveTextContent('Name and URL')
  },
}

/** Guidelines, Do: a few steps with short labels. */
export const DoFewShortSteps: Story = {
  tags: ['!dev'],
  args: {
    current: 1,
    steps: [{ label: 'Cart' }, { label: 'Shipping' }, { label: 'Payment' }, { label: 'Review' }],
  },
}

/** Guidelines, Don't: too many steps, so each one is squeezed and the flow looks longer than it is. */
export const DontTooManySteps: Story = {
  tags: ['!dev'],
  args: {
    current: 3,
    steps: ['Email', 'Password', 'Name', 'Company', 'Role', 'Team size', 'Use case', 'Invite', 'Plan', 'Done'].map((label) => ({ label })),
  },
}
