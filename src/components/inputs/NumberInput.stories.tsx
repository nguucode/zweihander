import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { NumberInput } from './NumberInput'

const meta = {
  title: 'Components/Inputs/NumberInput',
  tags: ['beta'],
  component: NumberInput,
  // Every prop is listed by hand, with a description: react-docgen reads the
  // types but not what each prop is for. These are the docs' API table and
  // the Playground's props panel.
  argTypes: {
    label: {
      description: 'The visible name, above the field. A real `<label>`: clicking it focuses the input.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    helperText: {
      description: 'Under the field, read as its description. The error message when `validationState` is `error`.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    validationState: {
      description: 'Colours the edge and the helper text. `error` also sets `aria-invalid`.',
      control: 'inline-radio',
      options: ['default', 'success', 'error'],
      table: { type: { summary: "'default' | 'success' | 'error'" }, defaultValue: { summary: "'default'" } },
    },
    size: {
      description: '24px (`sm`) or 32px (`md`) tall, from the control tiers. The steppers are 16 or 24px.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    value: {
      description: 'The number, controlled. `null` is empty. Pair with `onValueChange`.',
      control: false,
      table: { type: { summary: 'number | null' } },
    },
    defaultValue: {
      description: 'The starting number, uncontrolled.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    onValueChange: {
      description: 'Called with the parsed number on every change, `null` when the field is emptied.',
      control: false,
      table: { type: { summary: '(value: number | null) => void' } },
    },
    min: {
      description: 'The lowest value. The decrease button is disabled there.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    max: {
      description: 'The highest value. The increase button is disabled there.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    step: {
      description: 'How much the buttons and arrow keys change the value. With the arrow keys, Shift steps by 10 and Alt by 0.1 instead.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } },
    },
    precision: {
      description: 'Decimal places shown and accepted, e.g. `2` for a price.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    placeholder: {
      description: 'Shown while empty.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    isFullWidth: {
      description: 'Fills the width of its container. Otherwise 20rem, capped at the container.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Dimmed, out of the tab order, steppers off.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'Focusable and submitted, but neither typing nor the steppers change it.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      description: 'Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    name: {
      description: 'Submitted with the form, as the number without formatting.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    'aria-label': {
      description: 'The name when there is no visible `label`.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    ref: {
      description: 'Points at the `<input>`.',
      control: false,
      table: { type: { summary: 'Ref' } },
    },
    id: {
      description: 'The id of the `<input>`.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    className: {
      description: 'Added to the outer element, the field with its label and helper text.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  args: { label: 'Quantity', defaultValue: 6, min: 0, max: 100, onValueChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof NumberInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByLabelText('Quantity')
    await expect(input).toHaveValue('6')
    await userEvent.click(canvas.getByRole('button', { name: /increase/i }))
    await expect(input).toHaveValue('7')
    await expect(args.onValueChange).toHaveBeenLastCalledWith(7)
    await userEvent.click(canvas.getByRole('button', { name: /decrease/i }))
    await expect(input).toHaveValue('6')
    // Arrow keys step from the field itself.
    await userEvent.click(input)
    await userEvent.keyboard('{ArrowUp}{ArrowUp}')
    await expect(input).toHaveValue('8')
    await userEvent.keyboard('{ArrowDown}')
    await expect(input).toHaveValue('7')
    // Shift steps by 10. The steppers stay out of the tab order: the keys do their job.
    await userEvent.keyboard('{Shift>}{ArrowUp}{/Shift}')
    await expect(input).toHaveValue('17')
    await expect(canvas.getByRole('button', { name: /increase/i })).toHaveAttribute('tabindex', '-1')
  },
}

export const Limits: Story = {
  args: { defaultValue: 99, max: 100 },
  play: async ({ canvas, userEvent }) => {
    const increase = canvas.getByRole('button', { name: /increase/i })
    await userEvent.click(increase)
    await expect(canvas.getByLabelText('Quantity')).toHaveValue('100')
    // At the limit, the button is disabled rather than silently doing nothing,
    // and it looks it.
    await expect(increase).toBeDisabled()
    // Dimmed by opacity; colour matches the idle button, so it can't tell.
    await expect(getComputedStyle(increase).opacity).toBe('0.5')
  },
}

export const Step: Story = {
  args: { defaultValue: 10, step: 5 },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /increase/i }))
    await expect(canvas.getByLabelText('Quantity')).toHaveValue('15')
  },
}

export const Precision: Story = {
  args: { label: 'Price', defaultValue: 9.5, step: 0.25, precision: 2 },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('Price')
    await expect(input).toHaveValue('9.50')
    await userEvent.click(canvas.getByRole('button', { name: /increase/i }))
    await expect(input).toHaveValue('9.75')
  },
}

export const Typing: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByLabelText('Quantity')
    await userEvent.clear(input)
    await expect(args.onValueChange).toHaveBeenLastCalledWith(null)
    await userEvent.type(input, '42')
    await expect(args.onValueChange).toHaveBeenLastCalledWith(42)
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
      {(['sm', 'md'] as const).map((size) => (
        <NumberInput key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
}

export const Validation: Story = {
  args: { validationState: 'error', helperText: 'Order at least 1.', defaultValue: 0 },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Quantity')).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByLabelText('Quantity')).toHaveAccessibleDescription('Order at least 1.')
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Quantity')).toBeDisabled()
    await expect(canvas.getByRole('button', { name: /increase/i })).toBeDisabled()
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: /increase/i }))
    await expect(args.onValueChange).not.toHaveBeenCalled()
  },
}

export const NarrowContainer: Story = {
  render: (args) => (
    <div style={{ inlineSize: '8rem' }}>
      <NumberInput {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    // The box, steppers included, stays inside the field however narrow.
    await expect(canvas.getByRole('group').getBoundingClientRect().width).toBe(128)
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [n, setN] = useState<number | null>(3)
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
        <NumberInput {...args} defaultValue={undefined} value={n} onValueChange={setN} />
        <span>Value: {n ?? 'empty'}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /increase/i }))
    await expect(canvas.getByText('Value: 4')).toBeVisible()
  },
}

export const InAForm: Story = {
  render: (args) => (
    <form aria-label="Order">
      <NumberInput {...args} name="quantity" />
    </form>
  ),
  play: async ({ canvasElement }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('quantity')).toBe('6')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'label', description: 'Names the field. Clicking it focuses the input.' },
  { name: 'Container', selector: '[role="group"]', description: 'The box: edge, fill and focus ring, with the steppers inside it.' },
  { name: 'Input', selector: '[role="group"] > input', description: 'The number, in tabular figures, formatted to `precision`.' },
  { name: 'Decrease button', selector: '[role="group"] > button:first-of-type', description: 'Steps down. Disabled at `min`.' },
  { name: 'Increase button', selector: '[role="group"] > button:last-of-type', description: 'Steps up. Disabled at `max`.' },
  { name: 'Helper text', selector: 'p', description: 'The input\'s description. The error message when invalid.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { helperText: 'Up to 100 per order.' },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[3]).toHaveAccessibleName(/decrease/i)
    await expect(found[4]).toHaveAccessibleName(/increase/i)
  },
}

/** Guidelines, Do: a quantity people nudge up and down. */
export const DoQuantity: Story = {
  args: { label: 'Guests', defaultValue: 2, min: 1, max: 12 },
}

/** Guidelines, Don't: an identifier is not a quantity; stepping a postcode is meaningless. */
export const DontIdentifier: Story = {
  tags: ['!dev'],
  args: { label: 'Postcode', defaultValue: 650000, min: undefined, max: undefined },
}
