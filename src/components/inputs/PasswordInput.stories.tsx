import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, waitFor } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { PasswordInput, defaultPasswordRules } from './PasswordInput'
import { TextInput } from './TextInput'

const meta = {
  title: 'Components/Inputs/PasswordInput',
  tags: ['experimental'],
  component: PasswordInput,
  // Every prop is listed by hand: docgen cannot read the props it inherits
  // from TextInput, and these are the docs' API table and the Playground panel.
  argTypes: {
    label: {
      description: 'The visible name. A text label also names the Show / Hide button: "Show new password".',
      control: 'text',
      table: { type: { summary: 'ReactNode' }, defaultValue: { summary: "'Password'" } },
    },
    autoComplete: {
      description: '`current-password` to sign in, `new-password` where a password is chosen, so password managers fill or suggest the right one.',
      control: 'inline-radio',
      options: ['current-password', 'new-password'],
      table: { type: { summary: 'string' }, defaultValue: { summary: "'current-password'" } },
    },
    rules: {
      description:
        "What a new password needs, listed under the field and ticked off as the reader types. Checking them before sending is the form's job. `defaultPasswordRules` is one rule: at least 12 characters.",
      control: false,
      table: { type: { summary: 'PasswordRule[]' } },
    },
    helperText: {
      description: 'Under the field, before the rules. The error message when `validationState` is `error`.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    validationState: {
      description: "Colours the field's edge and the helper text; `error` sets `aria-invalid`. A met rule stays green.",
      control: 'inline-radio',
      options: ['default', 'success', 'error'],
      table: { type: { summary: "'default' | 'success' | 'error'" }, defaultValue: { summary: "'default'" } },
    },
    size: {
      description: "The field's height, from the control tiers.",
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    isFullWidth: {
      description: "Fills its container instead of the field's default width.",
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Dimmed and out of the tab order, the Show button too.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      description: 'Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onChange: {
      description: 'Called on every keystroke, as on any input.',
      control: false,
      table: { type: { summary: 'ChangeEventHandler<HTMLInputElement>' } },
    },
  },
  args: { onChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

/** Signing in: the password typed as dots, with a button to show it. */
export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('Password')
    await expect(input).toHaveAttribute('type', 'password')
    await expect(input).toHaveAttribute('autocomplete', 'current-password')
    const toggle = canvas.getByRole('button', { name: 'Show password' })
    await userEvent.type(input, 'hunter2')
    // The button says what it does next; its text is the visible part of its name.
    await userEvent.click(toggle)
    await expect(input).toHaveAttribute('type', 'text')
    await expect(toggle).toHaveAccessibleName('Hide password')
    await expect(toggle).toHaveTextContent('Hide')
    await expect(input).toHaveValue('hunter2')
    await userEvent.click(toggle)
    await expect(input).toHaveAttribute('type', 'password')
  },
}

/** Choosing a password: the rules sit under the field and tick off as the reader types. */
export const WithRules: Story = {
  args: {
    label: 'New password',
    autoComplete: 'new-password',
    rules: [...defaultPasswordRules, { label: 'A number', test: (password) => /\d/.test(password) }],
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('New password')
    await expect(canvas.getByRole('button', { name: 'Show new password' })).toBeVisible()
    await expect(input).toHaveAccessibleDescription('At least 12 characters (not met) A number (not met)')
    await userEvent.type(input, 'horse1')
    await expect(input).toHaveAccessibleDescription('At least 12 characters (not met) A number (met)')
    await userEvent.type(input, ' battery staple')
    await expect(input).toHaveAccessibleDescription('At least 12 characters (met) A number (met)')
  },
}

/** The value is hidden again when its form is sent, and the rules follow a reset. */
export const InAForm: Story = {
  args: { label: 'New password', autoComplete: 'new-password', rules: defaultPasswordRules },
  render: (args) => (
    <form aria-label="Change password" onSubmit={(e) => e.preventDefault()}>
      <PasswordInput {...args} name="password" />
    </form>
  ),
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('New password') as HTMLInputElement
    await userEvent.type(input, 'correct horse battery')
    await userEvent.click(canvas.getByRole('button', { name: 'Show new password' }))
    await expect(input).toHaveAttribute('type', 'text')
    await userEvent.type(input, '{Enter}')
    await expect(input).toHaveAttribute('type', 'password')
    await expect(input).toHaveAccessibleDescription('At least 12 characters (met)')
    input.form!.reset()
    await waitFor(() => expect(input).toHaveAccessibleDescription('At least 12 characters (not met)'))
  },
}

export const Sizes: Story = {
  args: { rules: defaultPasswordRules, defaultValue: 'short' },
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
      {(['sm', 'md'] as const).map((size) => (
        <PasswordInput key={size} {...args} size={size} label={`Password ${size}`} />
      ))}
    </div>
  ),
}

export const Validation: Story = {
  args: { validationState: 'error', helperText: 'That password is wrong.', defaultValue: 'hunter2' },
  play: async ({ canvas }) => {
    const input = canvas.getByLabelText('Password')
    await expect(input).toHaveAttribute('aria-invalid', 'true')
    await expect(input).toHaveAccessibleDescription('That password is wrong.')
  },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'hunter2' },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Password')).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Show password' })).toBeDisabled()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'label', description: 'Names the field and, from a text label, the Show / Hide button.' },
  { name: 'Field', selector: 'input', description: 'Dots while hidden, the text while shown.' },
  { name: 'Show / Hide button', selector: 'button', description: 'An end add-on. Says what it does next.' },
  { name: 'Rule', selector: '[data-met]', description: 'One thing the password needs, ticked once met. Optional.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { label: 'New password', autoComplete: 'new-password', rules: defaultPasswordRules, defaultValue: 'correct horse battery' },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[2]).toHaveAccessibleName('Show new password')
  },
}

/** Guidelines, Do: a new password with its rule and a Show button. */
export const DoWithRules: Story = {
  args: { label: 'New password', autoComplete: 'new-password', rules: defaultPasswordRules },
}

/** Guidelines, Don't: a password in a plain Text Input, shown to anyone nearby and with no way to check it. */
export const DontPlainText: Story = {
  tags: ['!dev'],
  render: () => <TextInput label="New password" defaultValue="hunter2" />,
}
