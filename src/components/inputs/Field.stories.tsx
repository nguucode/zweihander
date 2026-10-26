import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor, within } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Field } from './Field'
import { boxClass, inputStyles } from './InputField'

/**
 * The control in these stories: a native time input, which Zweihänder has
 * no component for, in the same box as Text Input.
 */
const time = (
  <span className={boxClass('md')}>
    <Field.Control type="time" required className={inputStyles.control} />
  </span>
)

const meta = {
  title: 'Components/Inputs/Field',
  tags: ['experimental'],
  component: Field,
  argTypes: {
    label: {
      description: 'Names the control: a real `<label>`, so clicking it focuses the control.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    labelInfo: {
      description:
        'A longer note about the label, behind an info button after it. Opens on press or Enter, not hover, so it works on touch; Escape closes it.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    infoLabel: {
      description: "The info button's accessible name. The label is read after it, as its description.",
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'More information'" } },
    },
    helperText: {
      description: 'Under the control, read as its description: format, limits, what the value is for. Stays, in its own colour, when there is an error.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    error: {
      description: 'What is wrong and how to fix it, under the helper text. Sets `aria-invalid` on the control, joins its description and turns the edge red.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    required: {
      description: 'Adds an asterisk after the label, hidden from screen readers. Put `required` on the control too: that is what they announce.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Disables the control inside it.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    name: {
      description: "The name the control submits under; also the key for a Base UI Form's `errors`.",
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    isFullWidth: {
      description: 'Fills the width of its container. Otherwise 20rem, capped at the container.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    children: {
      description: 'The control: a Base UI control, or `Field.Control` rendering your own element through `render`.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
  },
  args: { label: 'Start time', children: time },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

const stack = { display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText('Start time'))
    await expect(canvas.getByLabelText('Start time')).toHaveFocus()
  },
}

export const WithHelperText: Story = {
  args: { helperText: 'In the time zone of the site.' },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Start time')).toHaveAccessibleDescription('In the time zone of the site.')
  },
}

export const WithLabelInfo: Story = {
  args: { labelInfo: 'The shift starts at this time; clocking in earlier is not paid.' },
  play: async ({ canvas, canvasElement, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'More information' })
    // The button names itself, then the label tells which field it is for.
    await expect(button).toHaveAccessibleDescription('Start time')
    // Outside the <label>: pressing it does not move focus to the control.
    await userEvent.click(button)
    const body = within(canvasElement.ownerDocument.body)
    await expect(await body.findByText(/clocking in earlier/)).toBeVisible()
    await expect(canvas.getByLabelText('Start time')).not.toHaveFocus()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body.queryByText(/clocking in earlier/)).toBeNull())
    await expect(button).toHaveFocus()
    // Enter opens it too.
    await userEvent.keyboard('{Enter}')
    await expect(await body.findByText(/clocking in earlier/)).toBeVisible()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body.queryByText(/clocking in earlier/)).toBeNull())
  },
}

export const WithError: Story = {
  args: {
    helperText: 'In the time zone of the site.',
    error: 'Enter a time between 06:00 and 22:00.',
  },
  play: async ({ canvas }) => {
    const control = canvas.getByLabelText('Start time')
    await expect(control).toHaveAttribute('aria-invalid', 'true')
    // Both are read: what the value is, then what is wrong with it.
    await expect(control).toHaveAccessibleDescription('In the time zone of the site. Enter a time between 06:00 and 22:00.')
    // The helper keeps its colour; only the error is red.
    const helper = canvas.getByText('In the time zone of the site.')
    const error = canvas.getByText(/Enter a time between/)
    await expect(getComputedStyle(helper).color).not.toBe(getComputedStyle(error).color)
  },
}

export const Required: Story = {
  args: { required: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true')
    await expect(canvas.getByLabelText(/Start time/)).toBeRequired()
  },
}

export const Disabled: Story = {
  args: { disabled: true, helperText: 'Set by the rota.' },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Start time')).toBeDisabled()
  },
}

/** Every part together, in both states: for the visual baseline. */
export const Validation: Story = {
  render: (args) => (
    <div style={stack}>
      <Field {...args} required labelInfo="When the shift starts." helperText="In the time zone of the site." />
      <Field
        {...args}
        label="End time"
        required
        labelInfo="When the shift ends."
        helperText="In the time zone of the site."
        error="End after the start time."
      >
        {time}
      </Field>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('button', { name: 'More information' })).toHaveLength(2)
    await expect(canvas.getByLabelText(/End time/)).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByLabelText(/Start time/)).not.toHaveAttribute('aria-invalid')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'label', description: 'Names the control. Clicking it focuses the control.' },
  { name: 'Required mark', selector: 'label > span[aria-hidden]', description: 'Optional asterisk; screen readers hear "required" from the control.' },
  { name: 'Info button', selector: 'label + button', description: 'Optional. Opens `labelInfo` in a small popup, on press or Enter.' },
  { name: 'Control', selector: 'input', description: 'What the field is for: a Base UI control or `Field.Control`.' },
  { name: 'Helper text', selector: 'p', description: "Optional. The control's description." },
  { name: 'Error', selector: 'p + div', description: 'Optional. What is wrong and how to fix it; also part of the description.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: {
    required: true,
    labelInfo: 'When the shift starts.',
    helperText: 'In the time zone of the site.',
    error: 'Enter a time between 06:00 and 22:00.',
  },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[5]).toHaveTextContent('Enter a time between')
  },
}

/** Guidelines, Do: the error says what to change. */
export const DoSayWhatToFix: Story = {
  args: { error: 'Enter a time between 06:00 and 22:00.' },
}

/** Guidelines, Don't: an error that only says something is wrong. */
export const DontVagueError: Story = {
  tags: ['!dev'],
  args: { error: 'Invalid value.' },
}

/** Guidelines, Do: the short format hint under the control, the long rule behind the info button. */
export const DoLongNoteInInfo: Story = {
  args: {
    helperText: 'HH:MM',
    labelInfo: 'The shift starts at this time. Clocking in earlier is not paid unless a manager approves overtime.',
  },
}

/** Guidelines, Don't: a paragraph of helper text pushes the next field away. */
export const DontLongHelper: Story = {
  tags: ['!dev'],
  args: {
    helperText:
      'HH:MM. The shift starts at this time. Clocking in earlier is not paid unless a manager approves overtime.',
  },
}
