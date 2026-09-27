import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { DatePicker } from './DatePicker'

const meta = {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: { label: 'Start date', locale: 'en-GB', weekStartsOn: 1, defaultValue: new Date(2026, 8, 18), onValueChange: fn() },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    appearance: { control: 'inline-radio', options: ['outlined', 'filled', 'underlined', 'unstyled'] },
    value: { control: false },
    defaultValue: { control: false },
    min: { control: false },
    max: { control: false },
  },
  decorators: [(Story) => <div style={{ minBlockSize: '26rem' }}>{Story()}</div>],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const input = canvas.getByRole('textbox', { name: 'Start date' })
    await expect(input).toHaveValue('18/09/2026')
    await expect(input).toHaveAttribute('placeholder', 'dd/mm/yyyy')
    // Pick from the calendar: it opens on the selected day, with focus there.
    await userEvent.click(canvas.getByRole('button', { name: 'Choose date, 18/09/2026 selected' }))
    const dialog = await body().findByRole('dialog', { name: 'Choose date' })
    await waitFor(() => expect(document.activeElement).toHaveAccessibleName('Friday 18 September 2026'))
    await userEvent.click(within(dialog).getByRole('button', { name: 'Thursday 24 September 2026' }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 24))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(input).toHaveValue('24/09/2026')
    // Focus returns to the button; Escape closes without a change.
    const button = canvas.getByRole('button', { name: 'Choose date, 24/09/2026 selected' })
    await waitFor(() => expect(button).toHaveFocus())
    await userEvent.click(button)
    await body().findByRole('dialog')
    await userEvent.keyboard('{ArrowRight}{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(input).toHaveValue('24/09/2026')
  },
}

/** Typing works in the locale's order, with any separator. */
export const Typing: Story = {
  args: { defaultValue: null },
  play: async ({ args, canvas }) => {
    const input = canvas.getByRole('textbox', { name: 'Start date' })
    await userEvent.type(input, '3.10.26')
    await userEvent.tab()
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 9, 3))
    // Reformatted on commit.
    await expect(input).toHaveValue('03/10/2026')
    // Not a date: kept, flagged, not reported.
    ;(args.onValueChange as ReturnType<typeof fn>).mockClear()
    await userEvent.clear(input)
    await userEvent.type(input, '31/02/2026{Enter}')
    await expect(input).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByText('Enter a date as dd/mm/yyyy.')).toBeVisible()
    await expect(args.onValueChange).not.toHaveBeenCalled()
    // Cleared: null.
    await userEvent.clear(input)
    await userEvent.tab()
    await expect(args.onValueChange).toHaveBeenLastCalledWith(null)
  },
}

/** US order: month first. */
export const UnitedStates: Story = {
  args: { locale: 'en-US', weekStartsOn: 0, defaultValue: new Date(2026, 8, 18) },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox')).toHaveValue('09/18/2026')
    await expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', 'mm/dd/yyyy')
  },
}

export const Vietnamese: Story = { args: { label: 'Ngày bắt đầu', locale: 'vi-VN', weekStartsOn: undefined } }

export const Range: Story = {
  args: { min: new Date(2026, 8, 1), max: new Date(2026, 8, 30), helperText: 'Any day in September.' },
  play: async ({ args, canvas }) => {
    const input = canvas.getByRole('textbox')
    ;(args.onValueChange as ReturnType<typeof fn>).mockClear()
    await userEvent.clear(input)
    await userEvent.type(input, '02/10/2026{Enter}')
    await expect(input).toHaveAttribute('aria-invalid', 'true')
    await expect(args.onValueChange).not.toHaveBeenCalled()
  },
}

/** Submitted as yyyy-mm-dd whatever the display format. */
export const InAForm: Story = {
  args: { name: 'start' },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector<HTMLInputElement>('input[name="start"]')!.value).toBe('2026-09-18')
  },
}

export const Disabled: Story = { args: { disabled: true } }
