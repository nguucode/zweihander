import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { RadioGroup } from './Radio'

const plans = [
  { value: 'free', label: 'Free', helperText: 'One project, community support.' },
  { value: 'pro', label: 'Pro', helperText: 'Unlimited projects.' },
  { value: 'team', label: 'Team', helperText: 'Pro, plus shared billing.' },
]

const meta = {
  title: 'Components/Controls/Radio',
  tags: ['beta'],
  component: RadioGroup,
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    options: {
      description: 'The radios, in order. Each `label` names its radio; `helperText` describes it; `disabled` skips it.',
      control: false,
      table: { type: { summary: '{ value: string; label: ReactNode; helperText?: ReactNode; disabled?: boolean }[]' } },
    },
    label: {
      description: "The group's legend: names the radiogroup.",
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    helperText: {
      description: 'Under the whole group. The error message when `validationState` is `error`, and then on every radio.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    value: {
      description: 'Controlled selection: the chosen option’s `value`. Pair with `onValueChange`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'Starting selection when uncontrolled. None selected when left out.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onValueChange: {
      description: 'Called with the new value on click and arrow keys.',
      control: false,
      table: { type: { summary: '(value: string) => void' } },
    },
    variant: {
      description: 'Colour of the selected radio: `neutral` (the foreground) or `primary` (the accent).',
      control: 'inline-radio',
      options: ['primary', 'neutral'],
      table: { type: { summary: "'primary' | 'neutral'" }, defaultValue: { summary: "'neutral'" } },
    },
    orientation: {
      description: 'Stacked or in a row that wraps. Layout only: arrow keys work either way.',
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
      table: { type: { summary: "'vertical' | 'horizontal'" }, defaultValue: { summary: "'vertical'" } },
    },
    validationState: {
      description: '`error` sets `aria-invalid` on every radio, turns the outlines and the group message red; `success` turns the message green.',
      control: 'inline-radio',
      options: ['default', 'success', 'error'],
      table: { type: { summary: "'default' | 'success' | 'error'" }, defaultValue: { summary: "'default'" } },
    },
    name: {
      description: 'Submitted with a form, with the selected value.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      description: 'Every radio dimmed, and the selection cannot change.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      description: 'One must be selected to submit. Adds an asterisk to the legend.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'Focusable and submitted, but the selection cannot change.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: { label: 'Plan', options: plans, onValueChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const group = canvas.getByRole('radiogroup', { name: 'Plan' })
    await expect(group).toBeVisible()
    await userEvent.click(canvas.getByRole('radio', { name: 'Pro' }))
    await expect(canvas.getByRole('radio', { name: 'Pro' })).toBeChecked()
    await expect(args.onValueChange).toHaveBeenLastCalledWith('pro')
    // Arrow keys move the selection within the group.
    await userEvent.keyboard('{ArrowDown}')
    await expect(canvas.getByRole('radio', { name: 'Team' })).toBeChecked()
    await expect(canvas.getByRole('radio', { name: 'Team' })).toHaveFocus()
    // One tab stop for the whole group: Tab leaves it.
    await userEvent.tab()
    await expect(canvas.getByRole('radio', { name: 'Free' })).not.toHaveFocus()
  },
}

export const OptionHelperText: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('radio', { name: 'Pro' })).toHaveAccessibleDescription('Unlimited projects.')
  },
}

export const GroupHelperText: Story = {
  args: { helperText: 'You can change plans at any time.' },
  play: async ({ canvas }) => {
    // Plain help describes the group once, not every option again.
    await expect(canvas.getByRole('radiogroup')).toHaveAccessibleDescription('You can change plans at any time.')
    await expect(canvas.getByRole('radio', { name: 'Pro' })).toHaveAccessibleDescription('Unlimited projects.')
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: 'pro' },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('radio', { name: 'Team' }))
    await expect(canvas.getByRole('radio', { name: 'Pro' })).toBeChecked()
    await expect(args.onValueChange).not.toHaveBeenCalled()
  },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'free' },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('radio', { name: 'Team' }))
    await expect(args.onValueChange).not.toHaveBeenCalled()
  },
}

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-12)' }}>
      {(['neutral', 'primary'] as const).map((variant) => (
        <RadioGroup key={variant} {...args} label={variant} variant={variant} defaultValue="pro" />
      ))}
    </div>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Size',
    options: [
      { value: 's', label: 'Small' },
      { value: 'm', label: 'Medium' },
      { value: 'l', label: 'Large' },
    ],
    defaultValue: 'm',
  },
}

export const Validation: Story = {
  args: { validationState: 'error', helperText: 'Choose a plan to continue.', required: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('radio', { name: 'Free' })).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByText('Choose a plan to continue.')).toBeVisible()
    // The error message reaches each radio, so whichever has focus says it.
    await expect(canvas.getByRole('radio', { name: 'Free' })).toHaveAccessibleDescription(/Choose a plan to continue\./)
    // Only the group message is in the error colour, not each option's help.
    const colour = (t: string) => getComputedStyle(canvas.getByText(t)).color
    await expect(colour('Unlimited projects.')).not.toBe(colour('Choose a plan to continue.'))
  },
}

export const DisabledOption: Story = {
  args: { options: plans.map((p) => (p.value === 'team' ? { ...p, disabled: true } : p)), defaultValue: 'pro' },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('radio', { name: 'Pro' }))
    // Arrow keys skip the disabled option.
    await userEvent.keyboard('{ArrowDown}')
    await expect(canvas.getByRole('radio', { name: 'Team' })).not.toBeChecked()
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [plan, setPlan] = useState('free')
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
        <RadioGroup {...args} value={plan} onValueChange={setPlan} />
        <span>Selected: {plan}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('radio', { name: 'Team' }))
    await expect(canvas.getByText('Selected: team')).toBeVisible()
  },
}

export const InAForm: Story = {
  render: (args) => (
    <form aria-label="Signup">
      <RadioGroup {...args} name="plan" defaultValue="pro" />
    </form>
  ),
  play: async ({ canvasElement }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('plan')).toBe('pro')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Legend', selector: '[role="radiogroup"] > :first-child', description: 'Names the group. Optional, but a group without one needs `aria-label`.' },
  { name: 'Radio', selector: '[role="radio"]', description: 'The 20px circle: an outline when unselected.' },
  { name: 'Dot', selector: '[role="radio"] > span', description: 'Shown in the selected radio, which fills with the variant.' },
  { name: 'Option label', selector: 'label > span:last-child', description: 'Names its radio. Part of the click target.' },
  { name: 'Option helper', selector: '[role="radiogroup"] p', description: 'Optional. Describes one option, indented under its label.' },
  { name: 'Group helper', selector: '[role="radiogroup"] + p', description: 'Optional. Under the whole group; the error message in the error state.' },
]

/** Every part present, each option's label in its own element so the docs can point at it. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: {
    options: plans.map((p) => ({ ...p, label: <span>{p.label}</span> })),
    defaultValue: 'pro',
    helperText: 'You can change plans at any time.',
  },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[0]).toHaveTextContent('Plan')
    await expect(found[3]).toHaveTextContent('Free')
  },
}

/** Guidelines, Do: a few options, all in view, the usual one selected. */
export const DoFewOptions: Story = {
  args: {
    label: 'Delivery',
    options: [
      { value: 'standard', label: 'Standard' },
      { value: 'express', label: 'Express' },
      { value: 'pickup', label: 'Pick up in store' },
    ],
    defaultValue: 'standard',
  },
}

/** Guidelines, Don't: a long list of radios belongs in a Select. */
export const DontTooMany: Story = {
  tags: ['!dev'],
  args: {
    label: 'Country',
    orientation: 'horizontal',
    options: ['Australia', 'Brazil', 'Canada', 'France', 'Germany', 'India', 'Japan', 'Mexico', 'Spain', 'Vietnam'].map((c) => ({
      value: c,
      label: c,
    })),
  },
}
