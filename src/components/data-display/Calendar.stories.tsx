import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Calendar } from './Calendar'

/**
 * A day's accessible name, from the same formatter the calendar uses. Not
 * written out: CLDR changes the en-GB full date between browser versions
 * ("Friday 18 September 2026", then "Friday, 18 September 2026").
 */
const day = (year: number, month: number, date: number) =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', calendar: 'gregory' }).format(new Date(year, month - 1, date))

const meta = {
  title: 'Components/Data Display/Calendar',
  tags: ['beta'],
  component: Calendar,
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
        ],
      },
    },
  },
  args: { defaultValue: new Date(2026, 8, 18), locale: 'en-GB', weekStartsOn: 1, onValueChange: fn(), onMonthChange: fn() },
  argTypes: { value: { control: false }, defaultValue: { control: false }, month: { control: false }, min: { control: false }, max: { control: false } },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

const focused = () => document.activeElement?.getAttribute('aria-label')

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const grid = canvas.getByRole('grid', { name: 'September 2026' })
    // Monday first, six weeks.
    await expect(within(grid).getAllByRole('columnheader')[0]).toHaveTextContent('Mo')
    await expect(within(grid).getAllByRole('row')).toHaveLength(7)
    const selected = canvas.getByRole('button', { name: day(2026, 9, 18) })
    await expect(selected.closest('td')).toHaveAttribute('aria-selected', 'true')
    // One tab stop: the selected day.
    await expect(selected).toHaveAttribute('tabindex', '0')
    await userEvent.click(canvas.getByRole('button', { name: day(2026, 9, 22) }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 22))
  },
}

export const Keyboard: Story = {
  play: async ({ args, canvas }) => {
    canvas.getByRole('button', { name: day(2026, 9, 18) }).focus()
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 19)))
    await userEvent.keyboard('{ArrowDown}')
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 26)))
    // End: last day of the week (Sunday, with Monday first).
    await userEvent.keyboard('{End}')
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 27)))
    await userEvent.keyboard('{Home}')
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 21)))
    // Across the month edge, the month follows.
    await userEvent.keyboard('{ArrowDown}{ArrowDown}')
    await waitFor(() => expect(focused()).toBe(day(2026, 10, 5)))
    await expect(canvas.getByRole('grid', { name: 'October 2026' })).toBeVisible()
    await expect(args.onMonthChange).toHaveBeenLastCalledWith(new Date(2026, 9, 1))
    // Page Down: next month, same day; Shift+Page Up: a year back.
    await userEvent.keyboard('{PageDown}')
    await waitFor(() => expect(focused()).toBe(day(2026, 11, 5)))
    await userEvent.keyboard('{Shift>}{PageUp}{/Shift}')
    await waitFor(() => expect(focused()).toBe(day(2025, 11, 5)))
    await userEvent.keyboard('{Enter}')
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2025, 10, 5))
  },
}

/** 31 January + one month lands on the last day of February. */
export const MonthEnds: Story = {
  args: { defaultValue: new Date(2026, 0, 31) },
  play: async () => {
    document.querySelector<HTMLElement>('[tabindex="0"]')!.focus()
    await userEvent.keyboard('{PageDown}')
    await waitFor(() => expect(focused()).toBe(day(2026, 2, 28)))
  },
}

export const MinMax: Story = {
  args: { min: new Date(2026, 8, 10), max: new Date(2026, 8, 25) },
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Previous month' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Next month' })).toBeDisabled()
    const early = canvas.getByRole('button', { name: day(2026, 9, 9) })
    await expect(early).toHaveAttribute('aria-disabled', 'true')
    ;(args.onValueChange as ReturnType<typeof fn>).mockClear()
    await userEvent.click(early)
    await expect(args.onValueChange).not.toHaveBeenCalled()
    // The keyboard stops at the bounds.
    canvas.getByRole('button', { name: day(2026, 9, 18) }).focus()
    await userEvent.keyboard('{PageDown}')
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 25)))
  },
}

/** A span: both ends selected, the days between banded. Clicks still report one day; Date Range Picker decides the span. */
export const Range: Story = {
  args: { range: { start: new Date(2026, 8, 10), end: new Date(2026, 8, 16) } },
  play: async ({ canvas }) => {
    const cell = (d: number) => canvas.getByRole('button', { name: day(2026, 9, d) }).closest('td')
    await expect(cell(10)).toHaveAttribute('aria-selected', 'true')
    await expect(cell(13)).toHaveAttribute('aria-selected', 'true')
    await expect(cell(16)).toHaveAttribute('aria-selected', 'true')
    await expect(cell(17)).not.toHaveAttribute('aria-selected')
    // `range` wins over `value`.
    await expect(cell(18)).not.toHaveAttribute('aria-selected')
  },
}

export const NoWeekends: Story = {
  args: { isDateDisabled: (d: Date) => d.getDay() === 0 || d.getDay() === 6 },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: day(2026, 9, 19) })).toHaveAttribute('aria-disabled', 'true')
  },
}

/** Arrows follow the screen: in right to left, ArrowLeft is the next day. */
export const RightToLeft: Story = {
  decorators: [(Story) => <div dir="rtl">{Story()}</div>],
  play: async ({ canvas }) => {
    canvas.getByRole('button', { name: day(2026, 9, 18) }).focus()
    await userEvent.keyboard('{ArrowLeft}')
    await expect(canvas.getByRole('button', { name: day(2026, 9, 19) })).toHaveFocus()
    // The chevrons are mirrored to point the way the months move.
    const svg = canvas.getByRole('button', { name: 'Previous month' }).querySelector('svg')!
    await expect(getComputedStyle(svg).scale).toBe('-1 1')
  },
}

/** Persian's default calendar is not Gregorian; the grid is, so its labels are too. */
export const Persian: Story = {
  args: { locale: 'fa-IR' },
  play: async ({ canvasElement }) => {
    const selected = canvasElement.querySelector('td[aria-selected="true"]')!
    // 18, in Persian digits: the Gregorian day, not 27 Shahrivar.
    await expect(selected).toHaveTextContent('۱۸')
  },
}

export const Vietnamese: Story = { args: { locale: 'vi-VN', weekStartsOn: undefined } }
