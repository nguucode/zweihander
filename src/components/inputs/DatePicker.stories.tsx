import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { DatePicker } from './DatePicker'

/**
 * A day's accessible name, from the same formatter the calendar uses. Not
 * written out: CLDR changes the en-GB full date between browser versions
 * ("Friday 18 September 2026", then "Friday, 18 September 2026").
 */
const day = (year: number, month: number, date: number) =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', calendar: 'gregory' }).format(new Date(year, month - 1, date))

const meta = {
  title: 'Components/Inputs/DatePicker',
  tags: ['beta'],
  component: DatePicker,
  // Days of the months either side are aria-hidden decoration, faded below
  // 4.5:1 on purpose (WCAG 1.4.3 exempts decoration); axe cannot tell, so
  // only color-contrast skips them.
  parameters: {
    a11y: { config: { rules: [{ id: 'color-contrast', selector: '*:not([data-outside])' }] } },
  },
  args: { label: 'Start date', locale: 'en-GB', weekStartsOn: 1, defaultValue: new Date(2026, 8, 18), onValueChange: fn() },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
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
    await waitFor(() => expect(document.activeElement).toHaveAccessibleName(day(2026, 9, 18)))
    await userEvent.click(within(dialog).getByRole('button', { name: day(2026, 9, 24) }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 24))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(input).toHaveValue('24/09/2026')
    // A pointer pick sends the field back to rest: nothing in it keeps focus.
    const button = canvas.getByRole('button', { name: 'Choose date, 24/09/2026 selected' })
    await waitFor(() => expect(document.activeElement).toBe(document.body))
    // Escape closes without a change, and focus returns to the button.
    await userEvent.click(button)
    await body().findByRole('dialog')
    await userEvent.keyboard('{ArrowRight}{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(input).toHaveValue('24/09/2026')
    await waitFor(() => expect(button).toHaveFocus())
  },
}

/** A click in the input opens the calendar too, but leaves focus in the input so typing carries on. */
export const ClickToOpen: Story = {
  play: async ({ args, canvas }) => {
    const input = canvas.getByRole('textbox', { name: 'Start date' })
    await userEvent.click(input)
    const dialog = await body().findByRole('dialog', { name: 'Choose date' })
    await expect(input).toHaveFocus()
    // Typed and committed with the calendar open; the calendar follows.
    await userEvent.clear(input)
    await userEvent.keyboard('20/09/2026{Enter}')
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 20))
    await expect(within(dialog).getByRole('button', { name: day(2026, 9, 20) }).closest('td')).toHaveAttribute('aria-selected', 'true')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(input).toHaveFocus()
    // A pointer pick sends the field back to rest: no caret, no ring.
    await userEvent.click(input)
    const again = await body().findByRole('dialog', { name: 'Choose date' })
    await userEvent.click(within(again).getByRole('button', { name: day(2026, 9, 22) }))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 22))
    await waitFor(() => expect(input).not.toHaveFocus())
    await expect(input).toHaveValue('22/09/2026')
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
    // Passing through an empty field again reports nothing new.
    ;(args.onValueChange as ReturnType<typeof fn>).mockClear()
    await userEvent.click(input)
    await userEvent.tab()
    await expect(args.onValueChange).not.toHaveBeenCalled()
  },
}

/** Thai uses the Buddhist era and Persian its own calendar and digits by default; the field stays Gregorian with Western digits so it reads back. */
export const OtherCalendars: Story = {
  args: { locale: 'th-TH', defaultValue: new Date(2026, 8, 27) },
  play: async ({ args, canvas }) => {
    const input = canvas.getByRole('textbox')
    await expect(input).toHaveValue('27/09/2026')
    await userEvent.click(input)
    await userEvent.tab()
    await expect(args.onValueChange).not.toHaveBeenCalled()
    await expect(input).not.toHaveAttribute('aria-invalid', 'true')
  },
}

export const Required: Story = {
  args: { required: true, defaultValue: null },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox', { name: /Start date/ })).toBeRequired()
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
