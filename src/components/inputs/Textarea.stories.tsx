import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { Textarea } from './Textarea'

const meta = {
  title: 'Components/Inputs/Textarea',
  tags: ['beta'],
  component: Textarea,
  // Every prop is listed by hand, with a description: react-docgen reads the
  // types but not what each prop is for. These are the docs' API table and
  // the Playground's props panel.
  argTypes: {
    label: {
      description: 'The visible name, above the field. A real `<label>`: clicking it focuses the textarea.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    placeholder: {
      description: 'A hint of what to write, gone as soon as anyone types. Never a replacement for `label`.',
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
      description: 'Text and padding from the `sm` or `md` control tier: 12px text and 6px block padding, or 14px and 8px.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    minRows: {
      description: 'The starting height, in lines (the `rows` attribute).',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '3' } },
    },
    maxRows: {
      description: 'The most it grows to before scrolling, in lines. Caps a manual resize too.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    hasAutoSize: {
      description: 'Grows and shrinks with the text, between `minRows` and `maxRows`. Hides the resize handle.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    resize: {
      description: 'Which way the user can drag the handle in the corner. Ignored with `hasAutoSize`.',
      control: 'inline-radio',
      options: ['none', 'both', 'vertical', 'horizontal'],
      table: { type: { summary: "'none' | 'both' | 'vertical' | 'horizontal'" }, defaultValue: { summary: "'vertical'" } },
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
      description: 'Native `required`. Adds an asterisk to the label, hidden from screen readers.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    maxLength: {
      description: 'Native `maxLength`: typing stops at this many characters.',
      control: 'number',
      table: { type: { summary: 'number' } },
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
      description: 'The native change event, as on `<textarea>`: read `event.target.value`.',
      control: false,
      table: { type: { summary: '(event: ChangeEvent<HTMLTextAreaElement>) => void' } },
    },
  },
  args: { label: 'Message', placeholder: 'Write a message…', onChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

const stack = { display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const box = canvas.getByLabelText('Message')
    await expect(box.tagName).toBe('TEXTAREA')
    await userEvent.type(box, 'Line one{Enter}Line two')
    await expect(box).toHaveValue('Line one\nLine two')
    await expect(args.onChange).toHaveBeenCalled()
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={stack}>
      {(['sm', 'md'] as const).map((size) => (
        <Textarea key={size} {...args} size={size} label={size} minRows={2} />
      ))}
    </div>
  ),
}

export const Rows: Story = {
  args: { minRows: 5 },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Message')).toHaveAttribute('rows', '5')
  },
}

export const AutoSize: Story = {
  args: { hasAutoSize: true, minRows: 2, maxRows: 5 },
  play: async ({ canvas, userEvent }) => {
    const box = canvas.getByLabelText('Message')
    const start = box.getBoundingClientRect().height
    await userEvent.type(box, 'one{Enter}two{Enter}three{Enter}four')
    const grown = box.getBoundingClientRect().height
    await expect(grown).toBeGreaterThan(start)
    // Past maxRows it stops growing and scrolls.
    await userEvent.type(box, '{Enter}five{Enter}six{Enter}seven{Enter}eight')
    const capped = box.getBoundingClientRect().height
    const { lineHeight, paddingTop, paddingBottom } = getComputedStyle(box)
    const pad = parseFloat(paddingTop) + parseFloat(paddingBottom)
    await expect(capped).toBeLessThanOrEqual(parseFloat(lineHeight) * 5 + pad + 1)
    // And it shrinks again when text is removed.
    await userEvent.clear(box)
    await expect(box.getBoundingClientRect().height).toBeLessThan(grown)
  },
}

export const WithHelperText: Story = {
  args: { helperText: 'Markdown is supported.' },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Message')).toHaveAccessibleDescription('Markdown is supported.')
  },
}

export const Validation: Story = {
  args: { validationState: 'error', helperText: 'A message is required.', required: true },
  play: async ({ canvas }) => {
    const box = canvas.getByLabelText(/Message/)
    await expect(box).toHaveAttribute('aria-invalid', 'true')
    await expect(box).toBeRequired()
  },
}

export const MaxLength: Story = {
  args: { maxLength: 10 },
  play: async ({ canvas, userEvent }) => {
    const box = canvas.getByLabelText('Message')
    await userEvent.type(box, 'abcdefghijklmnop')
    await expect(box).toHaveValue('abcdefghij')
  },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Locked.' },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Message')).toBeDisabled()
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: 'Read only.' },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('')
    return (
      <div style={stack}>
        <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} hasAutoSize />
        <span>{value.length} characters</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText('Message'), 'Hello')
    await expect(canvas.getByText('5 characters')).toBeVisible()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'label', description: 'Names the field. Clicking it focuses the textarea.' },
  { name: 'Container', selector: 'label + span', description: 'The box: edge, fill and focus ring. It grows with the textarea.' },
  { name: 'Input', selector: 'textarea', description: 'The text, padded inside the box, so the resize handle sits in its corner.' },
  { name: 'Helper text', selector: 'label + span + p', description: 'The textarea\'s description. The error message when invalid.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { label: 'Description', defaultValue: 'Sturdy oak table, seats six.', helperText: 'Shown on the product page.', minRows: 3 },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[3]).toHaveTextContent('Shown on the product page.')
  },
}

/** Guidelines, Do: a starting height that fits the answer expected. */
export const DoFitTheAnswer: Story = {
  args: { label: 'Description', placeholder: 'What it is, what it is made of, who it is for', minRows: 4 },
}

/** Guidelines, Don't: one row reads as a single-line field and hides what is written. */
export const DontOneRow: Story = {
  tags: ['!dev'],
  args: { label: 'Description', placeholder: 'What it is, what it is made of, who it is for', minRows: 1 },
}
