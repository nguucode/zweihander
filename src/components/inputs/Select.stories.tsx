import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, screen, waitFor } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Select } from './Select'

const members = [
  { value: 'miya', label: 'Miya Burns' },
  { value: 'marlone', label: 'Marlone Thompson' },
  { value: 'phoenix', label: 'Phoenix Hickman' },
  { value: 'angelica', label: 'Angelica Mathews', disabled: true },
  { value: 'candice', label: 'Candice Wu' },
]

const meta = {
  title: 'Components/Inputs/Select',
  tags: ['beta'],
  component: Select,
  // Every prop is listed by hand, with a description: react-docgen reads the
  // types but not what each prop is for. These are the docs' API table and
  // the Playground's props panel.
  argTypes: {
    options: {
      description: 'The choices: strings, or `{ value, label, disabled? }` objects when the label differs from the value or is a node. Required.',
      control: false,
      table: { type: { summary: 'string[] | { value: string; label: ReactNode; disabled?: boolean }[]' } },
    },
    label: {
      description: 'The visible name, above the field. Clicking it focuses the field without opening it.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    placeholder: {
      description: 'Shown in the field until something is chosen.',
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
      description: '24px (`sm`) or 32px (`md`) tall, from the control tiers. Options are 32px either way.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    isLoading: {
      description: 'Options are still arriving: a spinner replaces the chevron, and the field is `aria-busy`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isFullWidth: {
      description: 'Fills the width of its container. Otherwise 20rem, capped at the container.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Dimmed, out of the tab order, and the list does not open.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'The list opens so the options can be read, but choosing one changes nothing.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      description: 'Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    value: {
      description: 'The chosen value, controlled. `null` is nothing chosen. Pair with `onValueChange`.',
      control: false,
      table: { type: { summary: 'string | null' } },
    },
    defaultValue: {
      description: 'The starting value, uncontrolled.',
      control: false,
      table: { type: { summary: 'string | null' } },
    },
    onValueChange: {
      description: 'Called with the chosen option\'s value.',
      control: false,
      table: { type: { summary: '(value: string | null) => void' } },
    },
    name: {
      description: 'Submitted with the form, with the chosen value.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    autoFocus: {
      description: 'Focuses the field on mount.',
      control: false,
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    'aria-label': {
      description: 'The name when there is no visible `label`.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    ref: {
      description: "Points at the field's `<button>`.",
      control: false,
      table: { type: { summary: 'Ref' } },
    },
    id: {
      description: "The id of the field's `<button>`.",
      control: false,
      table: { type: { summary: 'string' } },
    },
    className: {
      description: 'Added to the outer element, the field with its label and helper text.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  args: { label: 'Team member', placeholder: 'Choose someone', options: members, onValueChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const trigger = canvas.getByRole('combobox', { name: 'Team member' })
    await expect(trigger).toHaveTextContent('Choose someone')
    await userEvent.click(trigger)
    // The list renders in a portal at the end of <body>.
    await userEvent.click(await screen.findByRole('option', { name: 'Phoenix Hickman' }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith('phoenix')
    await waitFor(() => expect(trigger).toHaveTextContent('Phoenix Hickman'))
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull())
    // Reopened, the chosen option is the selected one.
    await userEvent.click(trigger)
    await expect(await screen.findByRole('option', { name: 'Phoenix Hickman' })).toHaveAttribute('aria-selected', 'true')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull())
  },
}

export const Keyboard: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const trigger = canvas.getByRole('combobox', { name: 'Team member' })
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    await userEvent.keyboard('{ArrowDown}')
    const listbox = await screen.findByRole('listbox')
    // Keys go to the list only once focus has moved into it; WebKit is slower to get there.
    await waitFor(() => expect(listbox.contains(document.activeElement)).toBe(true))
    // Arrow down past the first option, skip the disabled one, Enter selects.
    await userEvent.keyboard('{ArrowDown}{Enter}')
    await waitFor(() => expect(args.onValueChange).toHaveBeenCalled())
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull())
    await expect(trigger).toHaveFocus()
  },
}

export const Strings: Story = {
  args: { label: 'Size', placeholder: 'Pick a size', options: ['Small', 'Medium', 'Large'], defaultValue: 'Medium' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('combobox', { name: 'Size' })).toHaveTextContent('Medium')
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
      {(['sm', 'md'] as const).map((size) => (
        <Select key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    const heights = ['sm', 'md'].map((n) => canvas.getByRole('combobox', { name: n }).getBoundingClientRect().height)
    await expect(heights).toEqual([24, 32])
  },
}

export const Validation: Story = {
  args: { validationState: 'error', helperText: 'Choose someone to assign.', required: true },
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('combobox', { name: /Team member/ })
    await expect(trigger).toHaveAttribute('aria-invalid', 'true')
    await expect(trigger).toHaveAccessibleDescription('Choose someone to assign.')
    await expect(trigger).toHaveAttribute('aria-required', 'true')
    // The label is a <div>, so clicking it cannot also click the button.
    await expect(canvas.getByText('Team member').tagName).toBe('DIV')
  },
}

export const Loading: Story = {
  args: { isLoading: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('combobox')).toHaveAttribute('aria-busy', 'true')
  },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'miya' },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('combobox'))
    await expect(screen.queryByRole('listbox')).toBeNull()
  },
}

export const DisabledLook: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    // The trigger is the field box, so it dims itself.
    await expect(getComputedStyle(canvas.getByRole('combobox')).opacity).toBe('0.5')
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: 'miya' },
  play: async ({ canvas, userEvent, args }) => {
    // Base UI's readOnly locks the value, not the popup: it still opens so
    // the options can be read, but choosing one changes nothing.
    const trigger = canvas.getByRole('combobox')
    await expect(trigger).toHaveAttribute('aria-readonly', 'true')
    await userEvent.click(trigger)
    await userEvent.click(await screen.findByRole('option', { name: 'Candice Wu' }))
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull())
    await expect(args.onValueChange).not.toHaveBeenCalled()
    await expect(trigger).toHaveTextContent('Miya Burns')
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [who, setWho] = useState<string | null>('miya')
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
        <Select {...args} value={who} onValueChange={setWho} />
        <span>Assigned: {who ?? 'nobody'}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('combobox'))
    await userEvent.click(await screen.findByRole('option', { name: 'Candice Wu' }))
    await expect(canvas.getByText('Assigned: candice')).toBeVisible()
    // The a11y check runs as soon as play returns. Until the exit transition
    // ends, the closing popup keeps Base UI's focus guards (aria-hidden,
    // tabindex=0) without its modal state, which axe reports as
    // aria-hidden-focus. Wait for it to finish closing.
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull())
  },
}

export const InAForm: Story = {
  render: (args) => (
    <form aria-label="Assign">
      <Select {...args} name="assignee" defaultValue="marlone" />
    </form>
  ),
  play: async ({ canvasElement }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('assignee')).toBe('marlone')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'div:has(+ [role="combobox"])', description: 'Names the field. Clicking it focuses the field without opening the list.' },
  { name: 'Container', selector: '[role="combobox"]', description: 'The field: a button that opens the list, with the edge, fill and focus ring.' },
  { name: 'Value', selector: '[role="combobox"] > span:first-child', description: 'The chosen option\'s label, or the placeholder.' },
  { name: 'Chevron', selector: '[role="combobox"] > span:last-child', description: 'Points at the list. A spinner while `isLoading`.' },
  { name: 'Helper text', selector: '[role="combobox"] ~ p', description: 'The field\'s description. The error message when invalid.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { defaultValue: 'phoenix', helperText: 'They get an email when assigned.' },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[0]).toHaveTextContent('Team member')
    await expect(found[2]).toHaveTextContent('Phoenix Hickman')
  },
}

/** Guidelines, Do: a handful of options people pick from. */
export const DoAHandful: Story = {
  args: { label: 'Priority', placeholder: 'Choose a priority', options: ['Low', 'Medium', 'High', 'Urgent'] },
}

/** Guidelines, Don't: two options hide one behind a click; a Switch or radios show both. */
export const DontTwoOptions: Story = {
  tags: ['!dev'],
  args: { label: 'Notifications', placeholder: undefined, options: ['On', 'Off'], defaultValue: 'On' },
}
