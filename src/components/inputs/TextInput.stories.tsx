import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { TextInput, TextInputButton } from './TextInput'

const meta = {
  title: 'Components/Inputs/TextInput',
  tags: ['beta'],
  component: TextInput,
  // Every prop is listed by hand, with a description: react-docgen reads the
  // types but not what each prop is for. These are the docs' API table and
  // the Playground's props panel.
  argTypes: {
    label: {
      description: 'The visible name, above the field. A real `<label>`: clicking it focuses the input.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    placeholder: {
      description: 'A hint of the expected format, gone as soon as anyone types. Never a replacement for `label`.',
      control: 'text',
      table: { type: { summary: 'string' } },
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
      description: '24px (`sm`) or 32px (`md`) tall, from the control tiers. `sm` takes a 12px value.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    prefix: {
      description: 'Text or an icon before the value, in the muted colour: `<Icon name="user" />`, "https://".',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    suffix: {
      description: 'Text or an icon after the value, e.g. a unit: "kg".',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    startAddon: {
      description:
        'A filled segment joined to the start of the box, for a fixed part of the value: "https://", a currency code. Or a `TextInputButton`, which fills it.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    endAddon: {
      description: 'A filled segment joined to the end of the box: a fixed ending (".com") or an attached `TextInputButton` ("Apply").',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    isFullWidth: {
      description: 'Fills the width of its container. Otherwise 20rem, capped at the container.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Native `disabled`: dimmed, out of the tab order, not submitted.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'Native `readOnly`: focusable and submitted, but not editable. Filled grey.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      description: 'Native `required`. Adds an asterisk to the label, hidden from screen readers, which hear "required" from the input.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    value: {
      description: 'The text, controlled. Pair with `onChange`.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'The starting text, uncontrolled.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    onChange: {
      description: 'The native change event, as on `<input>`: read `event.target.value`.',
      control: false,
      table: { type: { summary: '(event: ChangeEvent<HTMLInputElement>) => void' } },
    },
  },
  args: { label: 'Email', placeholder: 'you@example.com', onChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

const stack = { display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByLabelText('Email')
    await userEvent.type(input, 'user@zweihander.dev')
    await expect(input).toHaveValue('user@zweihander.dev')
    // onChange is the native event, as on a plain <input>.
    await expect(args.onChange).toHaveBeenCalled()
    await expect((args.onChange as ReturnType<typeof fn>).mock.calls[0][0]).toHaveProperty('target')
  },
}

export const LabelAssociation: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText('Email'))
    await expect(canvas.getByLabelText('Email')).toHaveFocus()
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={stack}>
      {(['sm', 'md'] as const).map((size) => (
        <div key={size} style={stack}>
          <TextInput {...args} size={size} label={size} />
          <TextInput
            {...args}
            size={size}
            label={`${size} with add-ons`}
            placeholder="example"
            startAddon="https://"
            suffix={
              <TextInputButton aria-label="Open link">
                <Icon name="external" />
              </TextInputButton>
            }
            endAddon={<TextInputButton>Check</TextInputButton>}
          />
        </div>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    // Add-ons and buttons run the box's height; they never make it taller.
    const heights = ['sm', 'md', 'sm with add-ons', 'md with add-ons'].map(
      (n) => canvas.getByLabelText(n).parentElement!.getBoundingClientRect().height,
    )
    await expect(heights).toEqual([24, 32, 24, 32])
  },
}

export const PrefixSuffix: Story = {
  render: (args) => (
    <div style={stack}>
      <TextInput {...args} label="Email" prefix={<Icon name="user" />} />
      <TextInput {...args} label="Website" placeholder="example.com" prefix="https://" />
      <TextInput {...args} label="Weight" placeholder="0" suffix="kg" />
    </div>
  ),
  play: async ({ canvas, userEvent }) => {
    // Pressing the prefix focuses the input, as the rest of the field does.
    await userEvent.click(canvas.getByText('https://'))
    await expect(canvas.getByLabelText('Website')).toHaveFocus()
  },
}

export const Addons: Story = {
  render: (args) => (
    <div style={stack}>
      <TextInput {...args} label="Website" placeholder="example" startAddon="https://" endAddon=".com" />
      <TextInput {...args} label="Price" placeholder="0.00" inputMode="decimal" startAddon="USD" />
      <TextInput {...args} label="Promo code" placeholder="SPRING" endAddon={<TextInputButton>Apply</TextInputButton>} />
    </div>
  ),
  play: async ({ canvas, userEvent }) => {
    // Pressing a text add-on focuses the input, as the label does.
    await userEvent.click(canvas.getByText('https://'))
    await expect(canvas.getByLabelText('Website')).toHaveFocus()
    // An attached button is the next stop after the input.
    await userEvent.click(canvas.getByLabelText('Promo code'))
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Apply' })).toHaveFocus()
  },
}

export const WithButton: Story = {
  args: { label: 'Website', defaultValue: 'zweihander.dev' },
  render: function Render(args) {
    const [opened, setOpened] = useState(0)
    return (
      <div style={stack}>
        <TextInput
          {...args}
          suffix={
            <TextInputButton aria-label="Open link" onClick={() => setOpened((n) => n + 1)}>
              <Icon name="external" />
            </TextInputButton>
          }
        />
        <TextInput
          {...args}
          label="Website, read-only"
          readOnly
          suffix={
            <TextInputButton aria-label="Open read-only link">
              <Icon name="external" />
            </TextInputButton>
          }
        />
        <TextInput
          {...args}
          label="Website, disabled"
          disabled
          suffix={
            <TextInputButton aria-label="Open disabled link">
              <Icon name="external" />
            </TextInputButton>
          }
          endAddon={<TextInputButton>Check</TextInputButton>}
        />
        <span>Opened: {opened}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Open link' })
    await userEvent.click(button)
    await expect(canvas.getByText('Opened: 1')).toBeVisible()
    // Pressing the button does not focus the input under it.
    await expect(canvas.getByLabelText('Website')).not.toHaveFocus()
    // Keyboard: input, then its button.
    await userEvent.click(canvas.getByLabelText('Website'))
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(canvas.getByText('Opened: 2')).toBeVisible()
    await userEvent.keyboard(' ')
    await expect(canvas.getByText('Opened: 3')).toBeVisible()
    // A read-only field keeps its button; a disabled field disables its buttons.
    await expect(canvas.getByRole('button', { name: 'Open read-only link' })).toBeEnabled()
    await expect(canvas.getByRole('button', { name: 'Open disabled link' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Check' })).toBeDisabled()
  },
}

export const WithHelperText: Story = {
  args: { helperText: 'We only use this for account recovery.' },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Email')).toHaveAccessibleDescription('We only use this for account recovery.')
  },
}

export const Validation: Story = {
  render: (args) => (
    <div style={stack}>
      <TextInput {...args} label="Email" defaultValue="not-an-email" validationState="error" helperText="Enter a valid email address." />
      <TextInput {...args} label="Username" defaultValue="okami" validationState="success" helperText="That name is free." />
    </div>
  ),
  play: async ({ canvas }) => {
    const email = canvas.getByLabelText('Email')
    await expect(email).toHaveAttribute('aria-invalid', 'true')
    await expect(email).toHaveAccessibleDescription('Enter a valid email address.')
  },
}

export const Required: Story = {
  args: { required: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText(/Email/)).toBeRequired()
    // The asterisk is decoration: the name stays "Email", not "Email *".
    await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true')
    await expect(canvas.getByRole('textbox', { name: 'Email' })).toBeVisible()
  },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'locked@zweihander.dev' },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Email')).toBeDisabled()
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: 'fixed@zweihander.dev' },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('Email')
    await userEvent.type(input, 'x')
    await expect(input).toHaveValue('fixed@zweihander.dev')
  },
}

export const FullWidth: Story = {
  args: { isFullWidth: true },
  render: (args) => (
    <div style={{ inlineSize: '30rem' }}>
      <TextInput {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Email').parentElement!.getBoundingClientRect().width).toBe(480)
  },
}

export const NarrowContainer: Story = {
  render: (args) => (
    <div style={{ inlineSize: '8rem' }}>
      <TextInput {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    // The box stays inside the field, however narrow, rather than spilling out.
    await expect(canvas.getByLabelText('Email').parentElement!.getBoundingClientRect().width).toBe(128)
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('')
    return (
      <div style={stack}>
        <TextInput {...args} value={value} onChange={(e) => setValue(e.target.value.toUpperCase())} />
        <span>Value: {value}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText('Email'), 'abc')
    await expect(canvas.getByText('Value: ABC')).toBeVisible()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'label', description: 'Names the field. Clicking it focuses the input.' },
  { name: 'Container', selector: 'label + span', description: 'The box: edge, fill and focus ring. Pressing its padding focuses the input.' },
  { name: 'Start add-on', selector: 'label + span > span:nth-child(1)', description: 'Optional filled segment at the start, for a fixed part of the value.' },
  { name: 'Prefix', selector: 'label + span > span:nth-child(2)', description: 'Optional text or icon before the value, in the muted colour.' },
  { name: 'Input', selector: 'input', description: 'The value, or the placeholder while empty.' },
  { name: 'Suffix', selector: 'label + span > span:nth-child(4)', description: 'Optional text, icon or icon button after the value, e.g. a unit.' },
  { name: 'End add-on', selector: 'label + span > span:nth-child(5)', description: 'Optional filled segment at the end: a fixed ending, or an attached button.' },
  { name: 'Helper text', selector: 'label + span + p', description: 'The input\'s description. The error message when invalid.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: {
    label: 'Website',
    placeholder: 'example',
    startAddon: 'https://',
    prefix: <Icon name="user" />,
    suffix: (
      <TextInputButton aria-label="Open link">
        <Icon name="external" />
      </TextInputButton>
    ),
    endAddon: '.com',
    helperText: 'Where people can find you.',
  },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[2]).toHaveTextContent('https://')
    await expect(found[5]).toContainElement(canvasElement.querySelector('button'))
    await expect(found[6]).toHaveTextContent('.com')
  },
}

/** Guidelines, Do: a visible label, the format as a hint. */
export const DoVisibleLabel: Story = {
  args: { label: 'Email', placeholder: 'you@example.com' },
}

/** Guidelines, Don't: the placeholder as the only label disappears on the first keystroke. */
export const DontPlaceholderAsLabel: Story = {
  tags: ['!dev'],
  args: { label: undefined, placeholder: 'Email', 'aria-label': 'Email' },
}

/** Guidelines, Do: the error says what to fix. */
export const DoSayWhatToFix: Story = {
  args: { defaultValue: 'okami@', validationState: 'error', helperText: 'Add the domain after @, e.g. okami@example.com.' },
}

/** Guidelines, Don't: colour alone, with nothing to act on. */
export const DontColourOnly: Story = {
  tags: ['!dev'],
  args: { defaultValue: 'okami@', validationState: 'error', helperText: 'Invalid.' },
}
