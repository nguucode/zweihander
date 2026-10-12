import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Theme } from '@/theme/Theme'
import { contrast, mockToday } from '@/test/story-helpers'
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
          // Same guards: aria-hidden yet focusable by design, so Tab lands on them
          // and is sent back into or out of the popup.
          { id: 'aria-hidden-focus', selector: '[aria-hidden="true"]:not([data-base-ui-focus-guard])' },
        ],
      },
    },
  },
  args: { defaultValue: new Date(2026, 8, 18), locale: 'en-GB', weekStartsOn: 1, onValueChange: fn(), onMonthChange: fn() },
  // These descriptions are the docs' API table and the Playground's props
  // panel. Dates and functions have no control: a Date does not survive the
  // URL, and a function cannot be typed in.
  argTypes: {
    value: {
      description: 'The selected day, controlled. Local midnight: the time is ignored. Pair with `onValueChange`.',
      control: false,
      table: { type: { summary: 'Date | null' } },
    },
    defaultValue: {
      description: 'The starting day when uncontrolled.',
      control: false,
      table: { type: { summary: 'Date | null' }, defaultValue: { summary: 'null' } },
    },
    onValueChange: {
      description: 'Called with the day on click, Enter and Space. Not called for an unavailable day.',
      control: false,
      table: { type: { summary: '(date: Date) => void' } },
    },
    month: {
      description: 'The month shown, controlled. Pair with `onMonthChange`.',
      control: false,
      table: { type: { summary: 'Date' } },
    },
    defaultMonth: {
      description: "The starting month when uncontrolled. Defaults to the value's month, or today's.",
      control: false,
      table: { type: { summary: 'Date' }, defaultValue: { summary: "the value's or today's" } },
    },
    onMonthChange: {
      description: 'Called with the first day of the new month, whether the arrows or the keyboard moved it.',
      control: false,
      table: { type: { summary: '(month: Date) => void' } },
    },
    min: {
      description: 'The first day that can be picked. Days before it are unavailable, the keyboard stops at it, and Previous month is disabled in its month.',
      control: false,
      table: { type: { summary: 'Date | null' } },
    },
    max: {
      description: 'The last day that can be picked. Days after it are unavailable, the keyboard stops at it, and Next month is disabled in its month.',
      control: false,
      table: { type: { summary: 'Date | null' } },
    },
    isDateDisabled: {
      description: 'Rules out single days, e.g. weekends or booked days. They stay focusable, with `aria-disabled`.',
      control: false,
      table: { type: { summary: '(date: Date) => boolean' } },
    },
    range: {
      description: 'Shows a span instead of `value`: both ends selected, the days between banded. Clicks still report one day; the owner decides the span, as Date Range Picker does.',
      control: false,
      table: { type: { summary: '{ start: Date | null; end: Date | null } | null' } },
    },
    locale: {
      description: 'BCP 47 tag, e.g. `vi-VN`, for the month and weekday names and the first day of the week.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "the browser's" } },
    },
    weekStartsOn: {
      description: "0 = Sunday … 6 = Saturday. Defaults to the locale's, or Monday where the browser does not know it.",
      control: { type: 'number', min: 0, max: 6, step: 1 },
      table: { type: { summary: 'number' }, defaultValue: { summary: "the locale's" } },
    },
    autoFocus: {
      description: "Focuses the selected (or today's) day on mount, e.g. when opened in a popover.",
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    className: {
      description: 'Added to the root element.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

const focused = () => document.activeElement?.getAttribute('aria-label')

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const grid = canvas.getByRole('grid', { name: 'September 2026' })
    // Monday first, six weeks.
    await expect(within(grid).getAllByRole('columnheader')[0]).toHaveTextContent('Mo')
    // The header shows two letters; `abbr` gives a screen reader the full name.
    await expect(within(grid).getAllByRole('columnheader')[0]).toHaveAttribute('abbr', 'Monday')
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
    // Up a week, back a day, a year on, a month back, and Space selects.
    await userEvent.keyboard('{ArrowUp}')
    await waitFor(() => expect(focused()).toBe(day(2025, 10, 29)))
    await userEvent.keyboard('{ArrowLeft}')
    await waitFor(() => expect(focused()).toBe(day(2025, 10, 28)))
    await userEvent.keyboard('{Shift>}{PageDown}{/Shift}')
    await waitFor(() => expect(focused()).toBe(day(2026, 10, 28)))
    await userEvent.keyboard('{PageUp}')
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 28)))
    await userEvent.keyboard(' ')
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 28))
  },
}

/**
 * Today, on its own and inside a range, in both modes. The other stories pin
 * September 2026, so this is the one that always shows the current month:
 * axe checks the disc here, and the play measures it.
 */
export const Today: Story = {
  args: { defaultValue: undefined },
  render: (args) => {
    const now = new Date()
    const range = { start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1), end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) }
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {(['light', 'dark'] as const).flatMap((mode) =>
          [undefined, range].map((r) => (
            <Theme key={mode + !!r} appearance={mode} style={{ background: 'var(--background)', padding: 8 }} data-audit={`${mode}${r ? ' range' : ''}`}>
              {/* Today's month, not the range's: on the 1st the range starts last month. */}
              <Calendar {...args} range={r} defaultMonth={now} />
            </Theme>
          )),
        )}
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const failures: string[] = []
    const days = canvasElement.querySelectorAll<HTMLElement>('[aria-current="date"]')
    await expect(days).toHaveLength(4)
    // With nothing selected, today holds the tab stop.
    for (const today of canvasElement.querySelectorAll('[data-audit="light"] [aria-current="date"], [data-audit="dark"] [aria-current="date"]'))
      await expect(today).toHaveAttribute('tabindex', '0')
    for (const today of days) {
      const { color, backgroundColor } = getComputedStyle(today)
      const page = getComputedStyle(today.closest<HTMLElement>('[data-audit]')!).backgroundColor
      const ratio = contrast(color, page, backgroundColor)
      if (ratio < 4.5) failures.push(`${today.closest<HTMLElement>('[data-audit]')!.dataset.audit}: ${ratio.toFixed(2)}`)
    }
    await expect(failures).toEqual([])
  },
}

/** Today on the 1st: yesterday is last month, so the range starts outside the month shown. */
export const TodayOnTheFirst: Story = {
  ...Today,
  beforeEach: () => mockToday(new Date(2026, 10, 1)),
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
  play: async ({ args, canvas }) => {
    const saturday = canvas.getByRole('button', { name: day(2026, 9, 19) })
    await expect(saturday).toHaveAttribute('aria-disabled', 'true')
    // Unavailable days are not skipped: the keyboard lands on them, and they do not select.
    canvas.getByRole('button', { name: day(2026, 9, 18) }).focus()
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(saturday).toHaveFocus())
    ;(args.onValueChange as ReturnType<typeof fn>).mockClear()
    await userEvent.keyboard('{Enter}')
    await expect(args.onValueChange).not.toHaveBeenCalled()
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

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Month', selector: '[aria-live="polite"]', description: 'The month and year, short, at the start. Announced as it changes.' },
  { name: 'Previous month', selector: 'button[aria-label="Previous month"]', description: 'Disabled in the month of min. Mirrored right to left.' },
  { name: 'Next month', selector: 'button[aria-label="Next month"]', description: 'Disabled in the month of max.' },
  {
    name: 'Weekdays',
    selector: 'thead tr',
    description: 'Two letters ("Mo"), or the narrow names ("T2") where the short ones are long; the locale\'s first day first.',
  },
  { name: 'Day', selector: 'tbody button:not([aria-disabled]):not([aria-current])', description: 'A button named by its full date.' },
  {
    name: 'Outside day',
    selector: '[data-outside]',
    description: 'A day of the month either side, for shape: faded, hidden from assistive tech, never selected or banded.',
  },
  { name: 'Selected day', selector: 'td[aria-selected="true"] > button', description: 'The value, or with range both ends.' },
  { name: 'Unavailable day', selector: 'button[aria-disabled="true"]', description: 'Before min, after max, or ruled out by isDateDisabled.' },
]

/** One selected day and two booked ones, so every part is present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { isDateDisabled: (d: Date) => d.getMonth() === 8 && (d.getDate() === 23 || d.getDate() === 24) },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    // Short month names differ between CLDR versions ("Sep", "Sept"): read the formatter.
    const title = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric', calendar: 'gregory' }).format(new Date(2026, 8))
    await expect(found[0]).toHaveTextContent(title)
    // Outside days are not buttons, and assistive tech does not see them.
    await expect(found[5]!.tagName).toBe('SPAN')
    await expect(found[5]).toHaveAttribute('aria-hidden', 'true')
    await expect(found[7]).toHaveAccessibleName(day(2026, 9, 23))
  },
}

/** Guidelines, Do: a date close to now, picked by looking at the month. */
export const DoNearDate: Story = {
  args: { min: new Date(2026, 8, 14), isDateDisabled: (d: Date) => d.getDay() === 0 },
}

/** Guidelines, Don't: a date of birth, decades back, one Page Up at a time. */
export const DontFarDate: Story = {
  tags: ['!dev'],
  args: { defaultValue: new Date(1990, 4, 12) },
}
