import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, screen, waitFor } from 'storybook/test'
import { Combobox } from './Combobox'

const members = [
  { value: 'miya', label: 'Miya Burns' },
  { value: 'marlone', label: 'Marlone Thompson' },
  { value: 'phoenix', label: 'Phoenix Hickman' },
  { value: 'angelica', label: 'Angelica Mathews', disabled: true },
  { value: 'candice', label: 'Candice Wu' },
]

const meta = {
  title: 'Components/Inputs/Combobox',
  tags: ['beta'],
  component: Combobox,
  // These descriptions are the docs' API table and the Playground's props
  // panel; react-docgen supplies the types and defaults.
  argTypes: {
    options: {
      description: 'Strings, or `{ value, label, disabled? }`. Labels are strings: they are what is typed, matched and shown in the input.',
      control: false,
    },
    value: { description: 'Controlled value: the chosen option\'s `value`, or `null`. Pair with `onValueChange`.', control: false },
    defaultValue: { description: 'Starting value when uncontrolled.', control: false },
    onValueChange: { description: 'Called with the chosen option\'s `value`, or `null` when cleared. The spec\'s `onChange`.', control: false },
    placeholder: { description: 'Shown while the input is empty. A hint, never the label.', control: 'text' },
    label: { description: 'Names the field. Also names the options list.', control: 'text' },
    helperText: { description: 'Under the field. Read with it as its description.', control: 'text' },
    validationState: {
      description: '`error` turns the edge and helper red and sets `aria-invalid`; `success` turns them green.',
      control: 'inline-radio',
      options: ['default', 'success', 'error'],
    },
    size: { description: '24px (`sm`) or 32px (`md`) tall, from the control tiers.', control: 'inline-radio', options: ['sm', 'md'] },
    isFullWidth: { description: 'Fills the width of its container instead of 20rem.', control: 'boolean' },
    isLoading: { description: 'Options are still arriving: a spinner in the field, "Loading…" in the list.', control: 'boolean' },
    isClearable: { description: 'Shows a button that clears the selection.', control: 'boolean' },
    emptyText: { description: 'Shown in the list when nothing matches.', control: 'text' },
    name: { description: 'Submits the chosen option\'s `value` with a form.', control: 'text' },
    disabled: { description: 'Dimmed, out of the tab order, not submitted.', control: 'boolean' },
    readOnly: { description: 'Shown and submitted, but cannot be changed.', control: 'boolean' },
    required: { description: 'Marks the label with an asterisk and blocks an empty form submit.', control: 'boolean' },
    autoFocus: { description: 'Focuses the input on mount.', control: false },
    id: { description: 'For the input, e.g. to point an outside label at it.', control: false },
    className: { description: 'On the field\'s outer element.', control: false },
    'aria-label': { description: 'Names the field and its list when there is no visible `label`.', control: 'text' },
    ref: { description: 'The input element.', control: false },
  },
  args: { label: 'Team member', placeholder: 'Type a name', options: members, onValueChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByRole('combobox', { name: 'Team member' })
    await userEvent.type(input, 'thom')
    // Only matching options remain; the match is marked.
    const option = await screen.findByRole('option', { name: 'Marlone Thompson' })
    // The list carries the field's name, as the input does.
    await expect(screen.getByRole('listbox', { name: 'Team member' })).toBeVisible()
    await expect(screen.queryByRole('option', { name: 'Miya Burns' })).toBeNull()
    await expect(option.querySelector('mark')).toHaveTextContent('Thom')
    // The first match is highlighted, so Enter picks it.
    await userEvent.keyboard('{Enter}')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('marlone')
    await waitFor(() => expect(input).toHaveValue('Marlone Thompson'))
  },
}

/** The chosen option keeps its check while the user types again. */
export const KeepsSelection: Story = {
  args: { defaultValue: 'phoenix' },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Show options' }))
    const chosen = await screen.findByRole('option', { name: 'Phoenix Hickman' })
    await expect(chosen).toHaveAttribute('aria-selected', 'true')
    // Nothing is marked: the input holds a chosen label, not a query.
    await expect(screen.queryAllByRole('option').some((o) => o.querySelector('mark'))).toBe(false)
  },
}

export const Empty: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByRole('combobox'), 'zzz')
    // The popup fades in over 100ms, so the message exists before it is
    // visible: wait for visibility, not presence.
    await waitFor(() => expect(screen.getByText('No matches')).toBeVisible(), { timeout: 3000 })
  },
}

export const Clear: Story = {
  args: { defaultValue: 'phoenix' },
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByRole('combobox')
    await expect(input).toHaveValue('Phoenix Hickman')
    await userEvent.click(canvas.getByRole('button', { name: 'Clear selection' }))
    await expect(input).toHaveValue('')
    await expect(args.onValueChange).toHaveBeenLastCalledWith(null)
  },
}

export const NotClearable: Story = {
  args: { isClearable: false, defaultValue: 'miya' },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('button', { name: 'Clear selection' })).toBeNull()
  },
}

export const OpenButton: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Show options' }))
    await expect(await screen.findAllByRole('option')).toHaveLength(5)
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
      {(['sm', 'md'] as const).map((size) => (
        <Combobox key={size} {...args} size={size} label={size} defaultValue="marlone" />
      ))}
    </div>
  ),
}

export const Validation: Story = {
  args: { validationState: 'error', helperText: 'Choose someone to assign.', required: true },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('combobox', { name: /Team member/ })
    await expect(input).toHaveAttribute('aria-invalid', 'true')
    await expect(input).toHaveAccessibleDescription('Choose someone to assign.')
  },
}

export const Loading: Story = {
  args: { isLoading: true, options: [] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('combobox'))
    await waitFor(() => expect(screen.getByText('Loading…')).toBeVisible(), { timeout: 3000 })
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('combobox')).toBeDisabled()
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [who, setWho] = useState<string | null>(null)
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
        <Combobox {...args} value={who} onValueChange={setWho} />
        <span>Assigned: {who ?? 'nobody'}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByRole('combobox'), 'candi')
    await userEvent.keyboard('{Enter}')
    await expect(canvas.getByText('Assigned: candice')).toBeVisible()
    // The a11y check runs after the play: let the closing list unmount first,
    // or axe can catch it mid-exit without its name.
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull())
  },
}

export const InAForm: Story = {
  render: (args) => (
    <form aria-label="Assign">
      <Combobox {...args} name="assignee" defaultValue="miya" />
    </form>
  ),
  play: async ({ canvasElement }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('assignee')).toBe('miya')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'label', description: 'Names the field and its options list.' },
  { name: 'Field', selector: ':has(> input[role="combobox"])', description: 'The box: edge, fill and focus ring. Holds the input and its buttons.' },
  { name: 'Input', selector: 'input[role="combobox"]', description: 'Typing filters the list. Shows the chosen option\'s label.' },
  { name: 'Clear button', selector: 'button[aria-label="Clear selection"]', description: 'Shown while there is a value, unless isClearable is false.' },
  { name: 'Open button', selector: 'button[aria-label="Show options"]', description: 'The chevron: opens the full list. Out of the tab order.' },
  { name: 'Helper text', selector: 'p', description: 'Optional. Turns red with the edge in the error state.' },
]

/** Every part present: a value, so the clear button shows, and helper text. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { defaultValue: 'marlone', helperText: 'Type to filter the team.' },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[1]).toContainElement(found[2] as HTMLElement)
    await expect(found[5]).toHaveTextContent('Type to filter the team.')
  },
}

const priorities = ['Low', 'Medium', 'High']

/** Guidelines, Do: a long list people already know an entry of, found by typing. */
export const DoLongList: Story = {
  args: {
    label: 'Country',
    placeholder: 'Type a country',
    options: [
      'Australia', 'Brazil', 'Canada', 'Denmark', 'France', 'Germany', 'India', 'Japan', 'Mexico', 'Norway',
      'Portugal', 'Singapore', 'South Korea', 'Spain', 'Thailand', 'United Kingdom', 'United States', 'Vietnam',
    ],
  },
}

/** Guidelines, Don't: three options hidden behind typing. */
export const DontFewOptions: Story = {
  tags: ['!dev'],
  args: { label: 'Priority', placeholder: 'Type a priority', options: priorities },
}
