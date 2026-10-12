import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Controls/Checkbox',
  tags: ['beta'],
  component: Checkbox,
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    checked: {
      description: 'Controlled state. Pair with `onCheckedChange`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultChecked: {
      description: 'Starting state when uncontrolled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onCheckedChange: {
      description: 'Called with the new state on click and Space.',
      control: false,
      table: { type: { summary: '(checked: boolean) => void' } },
    },
    isIndeterminate: {
      description: 'Neither checked nor unchecked: a "select all" whose children are partly selected. Display only; a click still sets all or none.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: {
      description: 'Names the checkbox. Clicking it toggles the box.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    helperText: {
      description: 'Under the label: the description, or the error message when `validationState` is `error`.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    variant: {
      description: 'Colour of the checked box: `neutral` (the foreground) or `primary` (the accent).',
      control: 'inline-radio',
      options: ['primary', 'neutral'],
      table: { type: { summary: "'primary' | 'neutral'" }, defaultValue: { summary: "'neutral'" } },
    },
    validationState: {
      description: '`error` sets `aria-invalid` and turns the outline and helper red; `success` turns the helper green.',
      control: 'inline-radio',
      options: ['default', 'success', 'error'],
      table: { type: { summary: "'default' | 'success' | 'error'" }, defaultValue: { summary: "'default'" } },
    },
    name: {
      description: 'Submitted with a form, when checked.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    value: {
      description: 'Submitted under `name` when checked.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'on'" } },
    },
    disabled: {
      description: 'Dimmed, and cannot be changed.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      description: 'Must be checked to submit. Adds an asterisk to the label.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'Focusable and submitted, but cannot be changed.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    autoFocus: {
      description: 'Focuses the box on mount.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: { label: 'Remember me', onCheckedChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

const stack = { display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const box = canvas.getByRole('checkbox', { name: 'Remember me' })
    await expect(box).not.toBeChecked()
    await userEvent.click(box)
    await expect(box).toBeChecked()
    await expect(args.onCheckedChange).toHaveBeenLastCalledWith(true)
    await userEvent.click(canvas.getByText('Remember me'))
    await expect(box).not.toBeChecked()
    await userEvent.keyboard(' ')
    await expect(box).toBeChecked()
  },
}

export const Variants: Story = {
  render: (args) => (
    <div style={stack}>
      {(['neutral', 'primary'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 'var(--space-6)' }}>
          <Checkbox {...args} variant={variant} label={`${variant}, off`} />
          <Checkbox {...args} variant={variant} label={`${variant}, on`} defaultChecked />
          <Checkbox {...args} variant={variant} label={`${variant}, mixed`} isIndeterminate />
        </div>
      ))}
    </div>
  ),
}

export const WithHelperText: Story = {
  args: { helperText: 'Save my login details for next time.' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('checkbox')).toHaveAccessibleDescription('Save my login details for next time.')
  },
}

export const Indeterminate: Story = {
  args: { isIndeterminate: true, label: 'Select all' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed')
  },
}

/** The usual job of indeterminate: a parent that reflects its children. */
export const SelectAll: Story = {
  render: function Render(args) {
    const [items, setItems] = useState({ Email: true, SMS: false, Push: false })
    const values = Object.values(items)
    const all = values.every(Boolean)
    const some = values.some(Boolean)
    return (
      <div style={stack}>
        <Checkbox
          {...args}
          label="All channels"
          checked={all}
          isIndeterminate={some && !all}
          onCheckedChange={(on) => setItems({ Email: on, SMS: on, Push: on })}
        />
        <div style={{ ...stack, paddingInlineStart: 'var(--space-6)' }}>
          {Object.entries(items).map(([name, on]) => (
            <Checkbox
              key={name}
              label={name}
              checked={on}
              onCheckedChange={(next) => setItems({ ...items, [name]: next })}
            />
          ))}
        </div>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    const parent = canvas.getByRole('checkbox', { name: 'All channels' })
    await expect(parent).toHaveAttribute('aria-checked', 'mixed')
    await userEvent.click(parent)
    await expect(canvas.getByRole('checkbox', { name: 'Push' })).toBeChecked()
    await expect(parent).toHaveAttribute('aria-checked', 'true')
  },
}

export const Validation: Story = {
  render: (args) => (
    <div style={stack}>
      <Checkbox {...args} label="I accept the terms" validationState="error" helperText="Accept the terms to continue." required />
      <Checkbox {...args} label="Newsletter" validationState="success" helperText="Subscribed." defaultChecked />
    </div>
  ),
  play: async ({ canvas }) => {
    const terms = canvas.getByRole('checkbox', { name: /I accept the terms/ })
    await expect(terms).toHaveAttribute('aria-invalid', 'true')
    await expect(terms).toHaveAccessibleDescription('Accept the terms to continue.')
  },
}

export const Disabled: Story = {
  render: (args) => (
    <div style={stack}>
      <Checkbox {...args} label="Off, disabled" disabled />
      <Checkbox {...args} label="On, disabled" disabled defaultChecked />
    </div>
  ),
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Off, disabled' }))
    await expect(args.onCheckedChange).not.toHaveBeenCalled()
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true, defaultChecked: true },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('checkbox'))
    await expect(canvas.getByRole('checkbox')).toBeChecked()
    await expect(args.onCheckedChange).not.toHaveBeenCalled()
  },
}

export const AutoFocus: Story = {
  args: { autoFocus: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('checkbox')).toHaveFocus()
  },
}

export const InAForm: Story = {
  render: (args) => (
    <form aria-label="Login">
      <Checkbox {...args} name="remember" value="yes" defaultChecked />
    </form>
  ),
  play: async ({ canvasElement }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('remember')).toBe('yes')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: '[role="checkbox"]', description: 'The 20px box: an outline when unchecked, filled with the variant when checked.' },
  { name: 'Check mark', selector: '[role="checkbox"] > span', description: '`check` when checked, `minus` when indeterminate. Absent when unchecked.' },
  { name: 'Label', selector: 'label > span:last-child', description: 'Names the box. Part of the click target.' },
  { name: 'Helper text', selector: 'p', description: 'Optional. Indented under the label; the error message in the error state.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { defaultChecked: true, helperText: 'Save my login details for next time.' },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[2]).toHaveTextContent('Remember me')
  },
}

/** Guidelines, Do: the label says what checking does. */
export const DoPositiveLabel: Story = {
  args: { label: 'Email me product updates' },
}

/** Guidelines, Don't: a negative label makes unchecked a double negative. */
export const DontNegativeLabel: Story = {
  tags: ['!dev'],
  args: { label: "Don't email me product updates" },
}
