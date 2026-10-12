import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { DateRangePicker, rangePresets } from './DatePicker'

/** A day's accessible name, from the same formatter the calendar uses. */
const day = (year: number, month: number, date: number) =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', calendar: 'gregory' }).format(new Date(year, month - 1, date))

const meta = {
  title: 'Components/Inputs/DateRangePicker',
  tags: ['beta'],
  component: DateRangePicker,
  // Days of the months either side are aria-hidden decoration, faded below
  // 4.5:1 on purpose (WCAG 1.4.3 exempts decoration); axe cannot tell, so
  // only color-contrast skips them.
  parameters: {
    // Replaces the global rules list, so it repeats the focus-guard rule.
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', selector: '*:not([data-outside])' },
          { id: 'aria-command-name', selector: '[role="link"], [role="button"]:not([data-base-ui-focus-guard]), [role="menuitem"]' },
          // Same guards: aria-hidden yet focusable by design, so Tab lands on them
          // and is sent back into or out of the popup.
          { id: 'aria-hidden-focus', selector: '[aria-hidden="true"]:not([data-base-ui-focus-guard])' },
        ],
      },
    },
  },
  args: {
    label: 'Period',
    locale: 'en-GB',
    weekStartsOn: 1,
    defaultValue: { start: new Date(2026, 8, 7), end: new Date(2026, 8, 13) },
    onValueChange: fn(),
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    value: { control: false },
    defaultValue: { control: false },
    min: { control: false },
    max: { control: false },
    presets: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ minBlockSize: '30rem' }}>{Story()}</div>],
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

/** Two months (one on a narrow screen); the first click starts the range, the second ends it and applies. */
export const Default: Story = {
  play: async ({ args, canvas }) => {
    const input = canvas.getByRole('textbox', { name: 'Period' })
    await expect(input).toHaveValue('07/09/2026 – 13/09/2026')
    await userEvent.click(canvas.getByRole('button', { name: /Choose dates/ }))
    const dialog = await body().findByRole('dialog', { name: 'Choose dates' })
    const september = within(dialog).getByRole('grid', { name: 'September 2026' })
    await expect(within(dialog).getByRole('grid', { name: 'October 2026', hidden: true })).toBeInTheDocument()
    // Either way round: 22 September, then 10 September.
    await userEvent.click(within(september).getByRole('button', { name: day(2026, 9, 22) }))
    await expect(args.onValueChange).not.toHaveBeenCalled()
    await userEvent.click(within(september).getByRole('button', { name: day(2026, 9, 10) }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith({ start: new Date(2026, 8, 10), end: new Date(2026, 8, 22) })
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(input).toHaveValue('10/09/2026 – 22/09/2026')
  },
}

/** The calendars page on their own, opening on the range's first and last months; the left one always stays before the right. */
export const PagingApart: Story = {
  args: { defaultValue: { start: new Date(2026, 4, 4), end: new Date(2026, 10, 20) } },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Choose dates/ }))
    const dialog = await body().findByRole('dialog', { name: 'Choose dates' })
    const grid = (name: string) => within(dialog).getByRole('grid', { name, hidden: true })
    // May on the left, November on the right.
    await expect(grid('May 2026')).toBeInTheDocument()
    await expect(grid('November 2026')).toBeInTheDocument()
    // The left one pages up to, and then pushes, the right one.
    const next = within(dialog).getAllByRole('button', { name: 'Next month' })[0]
    for (let i = 0; i < 7; i++) await userEvent.click(next)
    await expect(grid('December 2026')).toBeInTheDocument()
    await expect(grid('January 2027')).toBeInTheDocument()
  },
}

/** A day of the month either side is decoration: hidden from assistive tech and not pickable, so each day is one button. */
export const OutsideDays: Story = {
  args: { defaultValue: { start: new Date(2026, 9, 1), end: new Date(2026, 9, 31) } },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Choose dates/ }))
    const dialog = await body().findByRole('dialog', { name: 'Choose dates' })
    const october = within(dialog).getByRole('grid', { name: 'October 2026' })
    // 31 October: once, in October, though November's grid shows it too.
    const oct31 = within(dialog).getAllByRole('button', { name: day(2026, 10, 31), hidden: true })
    await expect(oct31).toHaveLength(1)
    await expect(october).toContainElement(oct31[0])
  },
}

/** Typed: two dates in the locale's order, any separators. */
export const Typing: Story = {
  args: { defaultValue: null },
  play: async ({ args, canvas }) => {
    const input = canvas.getByRole('textbox', { name: 'Period' })
    await userEvent.type(input, '20.9.26 - 1.9.26')
    await userEvent.tab()
    await expect(args.onValueChange).toHaveBeenLastCalledWith({ start: new Date(2026, 8, 1), end: new Date(2026, 8, 20) })
    await expect(input).toHaveValue('01/09/2026 – 20/09/2026')
    await userEvent.clear(input)
    await userEvent.type(input, '01/09/2026{Enter}')
    await expect(input).toHaveAttribute('aria-invalid', 'true')
  },
}

/** A list of whole periods beside the calendars: one click applies. */
export const Presets: Story = {
  args: { presets: true },
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Choose dates/ }))
    const dialog = await body().findByRole('dialog', { name: 'Choose dates' })
    await userEvent.click(within(dialog).getByRole('button', { name: 'Last week' }))
    const last = rangePresets(1)[3]
    await expect(args.onValueChange).toHaveBeenLastCalledWith({ start: last.start, end: last.end })
  },
}

/** Submitted as an ISO 8601 interval. */
export const InAForm: Story = {
  args: { name: 'period' },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector<HTMLInputElement>('input[name="period"]')!.value).toBe('2026-09-07/2026-09-13')
  },
}

export const Vietnamese: Story = { args: { label: 'Khoảng thời gian', locale: 'vi-VN', weekStartsOn: undefined, presets: true } }
