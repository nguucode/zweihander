import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, waitFor } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { OTPInput } from './OTPInput'

const meta = {
  title: 'Components/Inputs/OTPInput',
  tags: ['experimental'],
  component: OTPInput,
  // Every prop is listed by hand, with a description: these are the docs'
  // API table and the Playground's props panel.
  argTypes: {
    label: {
      description: 'The visible name, above the cells. A real `<label>` for the first cell; it also names the group. Required.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    helperText: {
      description: 'Under the cells, read as the group\'s description. The error message when `validationState` is `error`.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    validationState: {
      description: 'Colours every cell\'s edge and the helper text. `error` also sets `aria-invalid` on the cells.',
      control: 'inline-radio',
      options: ['default', 'success', 'error'],
      table: { type: { summary: "'default' | 'success' | 'error'" }, defaultValue: { summary: "'default'" } },
    },
    size: {
      description: 'Square cells of 24px (`sm`) or 32px (`md`), from the control tiers.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    length: {
      description: 'How many characters the code has, one cell each.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '6' } },
    },
    groupSize: {
      description: 'Splits the cells into groups of this many, with a dash between groups: `3` shows a 6-digit code as 3 – 3.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    value: {
      description: 'The code, controlled. Pair with `onValueChange`.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'The starting code, uncontrolled.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onValueChange: {
      description: 'Called with the whole code on every change: typing, deleting, pasting or autofill.',
      control: false,
      table: { type: { summary: '(value: string) => void' } },
    },
    onValueComplete: {
      description: 'Called once every cell is filled. The place to verify the code.',
      control: false,
      table: { type: { summary: '(value: string) => void' } },
    },
    validationType: {
      description: 'Which characters a cell accepts; the rest are dropped as typed or pasted. Also picks the mobile keyboard.',
      control: 'inline-radio',
      options: ['numeric', 'alpha', 'alphanumeric'],
      table: { type: { summary: "'numeric' | 'alpha' | 'alphanumeric'" }, defaultValue: { summary: "'numeric'" } },
    },
    mask: {
      description: 'Shows dots instead of the characters, for a code read over someone\'s shoulder.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    autoSubmit: {
      description: 'Submits the surrounding form once every cell is filled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onResend: {
      description:
        'Shows a resend button under the cells, disabled with a countdown for `resendCooldown` seconds from mount and after each send. Return a promise to show it busy; the cooldown restarts only if it resolves. To restart the countdown from outside (a new channel), remount with a new `key`.',
      control: false,
      table: { type: { summary: '() => void | Promise<unknown>' } },
    },
    resendCooldown: {
      description: 'Seconds before resend is allowed. `0` allows it at once. Read on mount and on each send.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '30' } },
    },
    resendLabel: {
      description: 'The resend button\'s text. The countdown follows it in brackets, as `m:ss`.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Resend code'" } },
    },
    slotLabel: {
      description: 'The accessible name of each cell after the first; the label names the first. Translate it with the rest of the screen.',
      control: false,
      table: {
        type: { summary: '(position: number, length: number) => string' },
        defaultValue: { summary: '"Character 2 of 6"' },
      },
    },
    disabled: {
      description: 'Dimmed, out of the tab order. The resend button too.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'Focusable and submitted, but typing does not change it.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      description: 'Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    name: {
      description: 'Submitted with the form, as the whole code in one value.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    ref: {
      description: 'Points at the first cell.',
      control: false,
      table: { type: { summary: 'Ref' } },
    },
    id: {
      description: 'The id of the first cell; the others take `{id}-2`, `{id}-3` and so on.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    className: {
      description: 'Added to the outer element, the field with its label and helper text.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  args: { label: 'Verification code', onValueChange: fn(), onValueComplete: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof OTPInput>

export default meta
type Story = StoryObj<typeof meta>

const cells = (canvasElement: HTMLElement) => [...canvasElement.querySelectorAll<HTMLInputElement>('[role="group"] input')]

export const Default: Story = {
  play: async ({ canvas, canvasElement, userEvent, args }) => {
    const first = canvas.getByRole('textbox', { name: 'Verification code' })
    const all = cells(canvasElement)
    await expect(all).toHaveLength(6)
    // The label names the group and the first cell; the others say where they are.
    await expect(canvas.getByRole('group', { name: 'Verification code' })).toBeVisible()
    await expect(all[1]).toHaveAccessibleName('Character 2 of 6')
    // Phones offer the code from a text message into the first cell.
    await expect(first).toHaveAttribute('autocomplete', 'one-time-code')
    // One tab stop: only the cell to type into is in the tab order.
    await userEvent.tab()
    await expect(first).toHaveFocus()
    await expect(all.filter((c) => c.tabIndex === 0)).toHaveLength(1)
    // Typing fills a cell and moves on; letters are dropped from a numeric code.
    await userEvent.keyboard('12a3')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('123')
    await expect(all[3]).toHaveFocus()
    // Backspace clears the cell before and moves back to it.
    await userEvent.keyboard('{Backspace}')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('12')
    // Left and Right move between cells.
    await userEvent.keyboard('{ArrowLeft}')
    await expect(all[1]).toHaveFocus()
    await userEvent.keyboard('{ArrowRight}')
    await expect(all[2]).toHaveFocus()
    await userEvent.keyboard('3456')
    await expect(args.onValueComplete).toHaveBeenCalledWith('123456')
  },
}

export const Paste: Story = {
  play: async ({ canvas, canvasElement, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('textbox', { name: 'Verification code' }))
    // A pasted code, spaces and all, fills every cell at once.
    await userEvent.paste('987 654')
    await expect(cells(canvasElement).map((c) => c.value).join('')).toBe('987654')
    await expect(args.onValueComplete).toHaveBeenCalledWith('987654')
  },
}

export const Grouped: Story = {
  args: { groupSize: 3 },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('separator')).toHaveLength(1)
  },
}

export const Sizes: Story = {
  args: { groupSize: 3, defaultValue: '1234' },
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
      {(['sm', 'md'] as const).map((size) => (
        <OTPInput key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
}

export const Validation: Story = {
  args: { validationState: 'error', helperText: 'That code is wrong. Check it and try again.', defaultValue: '123456' },
  play: async ({ canvas, canvasElement }) => {
    for (const cell of cells(canvasElement)) await expect(cell).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByRole('group')).toHaveAccessibleDescription('That code is wrong. Check it and try again.')
  },
}

export const Resend: Story = {
  args: { onResend: fn(), resendCooldown: 1 },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', { name: /resend code/i })
    // Disabled while it counts down, with the time left in its name.
    await expect(button).toBeDisabled()
    await expect(button).toHaveTextContent('Resend code (0:01)')
    await waitFor(() => expect(button).toBeEnabled(), { timeout: 3000 })
    await expect(button).toHaveTextContent(/^Resend code$/)
    await userEvent.click(button)
    await expect(args.onResend).toHaveBeenCalledTimes(1)
    // Pressing it starts the cooldown again, and focus goes to the first cell
    // for the new code instead of being lost with the disabled button.
    await waitFor(() => expect(button).toBeDisabled())
    await expect(canvas.getByRole('textbox', { name: 'Verification code' })).toHaveFocus()
  },
}

export const ResendFails: Story = {
  args: { onResend: fn(() => Promise.reject(new Error('offline'))), resendCooldown: 0 },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', { name: /resend code/i })
    await userEvent.click(button)
    await expect(args.onResend).toHaveBeenCalledTimes(1)
    // A failed send starts no cooldown: the button is ready to try again.
    await waitFor(() => expect(button).not.toHaveAttribute('aria-busy'))
    await expect(button).toBeEnabled()
    await expect(button).toHaveTextContent(/^Resend code$/)
  },
}

export const Alphanumeric: Story = {
  args: { label: 'Backup code', validationType: 'alphanumeric', length: 8, groupSize: 4 },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('textbox', { name: 'Backup code' }))
    await userEvent.keyboard('AB-12')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('AB12')
  },
}

export const Masked: Story = {
  args: { mask: true, defaultValue: '123' },
  play: async ({ canvasElement }) => {
    await expect(cells(canvasElement)[0]).toHaveAttribute('type', 'password')
  },
}

export const Disabled: Story = {
  args: { disabled: true, onResend: fn(), resendCooldown: 0 },
  play: async ({ canvas, canvasElement }) => {
    for (const cell of cells(canvasElement)) await expect(cell).toBeDisabled()
    await expect(canvas.getByRole('button', { name: /resend code/i })).toBeDisabled()
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: '123456' },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('textbox', { name: 'Verification code' }))
    await userEvent.keyboard('{Backspace}9')
    await expect(args.onValueChange).not.toHaveBeenCalled()
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [code, setCode] = useState('')
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
        <OTPInput {...args} value={code} onValueChange={setCode} />
        <span>Code: {code || 'empty'}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('textbox', { name: 'Verification code' }))
    await userEvent.keyboard('42')
    await expect(canvas.getByText('Code: 42')).toBeVisible()
  },
}

export const InAForm: Story = {
  render: (args) => (
    <form aria-label="Verify">
      <OTPInput {...args} name="code" defaultValue="246810" />
    </form>
  ),
  play: async ({ canvasElement }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('code')).toBe('246810')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'label', description: 'Names the group and the first cell. Clicking it focuses the first cell.' },
  { name: 'Cell', selector: '[role="group"] > input:first-of-type', description: 'One character, centred in tabular figures. Each cell is its own box.' },
  { name: 'Group separator', selector: '[role="separator"]', description: 'A dash between groups of `groupSize` cells. Optional.' },
  { name: 'Helper text', selector: 'p', description: 'The group\'s description. The error message when invalid.' },
  { name: 'Resend button', selector: 'button', description: 'Sends a new code. Disabled with a countdown during the cooldown. Optional.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { groupSize: 3, helperText: 'We sent a code to your phone.', onResend: fn(), resendCooldown: 0 },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[4]).toHaveAccessibleName('Resend code')
  },
}

/** Guidelines, Do: one field for the whole code, labelled, with resend. */
export const DoOneField: Story = {
  args: { helperText: 'Sent to •••• 4821.', onResend: fn(), resendCooldown: 0 },
}

/** Guidelines, Don't: a long code split into cells nobody can scan. */
export const DontLongCode: Story = {
  tags: ['!dev'],
  args: { label: 'Licence key', length: 16, validationType: 'alphanumeric' },
}
