import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '@/components/buttons/Button'
import { EventCalendar, type CalendarEvent } from './EventCalendar'

// Far from today, so the today mark never lands in a story or a baseline.
const at = (day: number, h = 0, m = 0) => new Date(2022, 0, day, h, m)

const EVENTS: CalendarEvent[] = [
  { id: 1, title: 'Design review', start: at(3, 10), end: at(3, 11), color: 'blue' },
  { id: 2, title: 'Sales meeting', start: at(3, 14), end: at(3, 15), color: 'pink' },
  { id: 3, title: 'Date night', start: at(7, 18), end: at(7, 21), color: 'violet' },
  { id: 4, title: "Sam's birthday party", start: at(12, 14), end: at(12, 17), color: 'amber' },
  { id: 5, title: 'Maple syrup museum', start: at(22, 15), end: at(22, 16), color: 'teal' },
  { id: 6, title: 'Hockey game', start: at(22, 19), end: at(22, 21), color: 'red' },
  { id: 7, title: 'Cinema with friends', start: at(22, 21), end: at(22, 23), color: 'indigo' },
  { id: 8, title: 'Quarter close', start: at(24), end: at(26), allDay: true, color: 'neutral' },
  { id: 9, title: 'Standup', start: at(25, 9), end: at(25, 9, 15), color: 'green' },
  { id: 10, title: 'Budget planning', start: at(25, 9), end: at(25, 11), color: 'orange' },
  { id: 11, title: 'Vendor call', start: at(25, 10), end: at(25, 10, 30), color: 'sky' },
  { id: 12, title: 'Lunch', start: at(25, 12), end: at(25, 13), color: 'lime' },
  { id: 13, title: 'Sales kickoff', start: at(31, 9), end: at(31, 17), color: 'pink' },
]

const meta = {
  title: 'Patterns/Application UI/Event Calendar',
  tags: ['experimental'],
  component: EventCalendar,
  parameters: { layout: 'padded' },
  args: { events: EVENTS, defaultDate: at(22), locale: 'en-US', weekStartsOn: 0 },
  argTypes: {
    events: {
      description:
        'The events: `{ id, title, start, end?, allDay?, color?, href? }`. `end` is exclusive for a timed event and the last day for an all-day one; `color` is a Tag variant. Timed events crossing midnight go to the all-day row.',
      control: false,
    },
    view: { description: 'The view shown, when you control it.', control: 'inline-radio', options: ['day', 'week', 'month', 'year'] },
    defaultView: {
      description: 'The view shown first, when you do not control it.',
      control: 'inline-radio',
      options: ['day', 'week', 'month', 'year'],
      table: { defaultValue: { summary: 'month' } },
    },
    onViewChange: { description: 'Called with the new view when the viewer switches, or opens a day from the year or "n more".' },
    views: {
      description: 'The views the switch offers, in its order. With one, the switch is gone.',
      control: 'object',
      table: { defaultValue: { summary: "['day', 'week', 'month', 'year']" } },
    },
    date: { description: 'The selected day, when you control it. The view shows the day, week, month or year around it.', control: 'date' },
    defaultDate: { description: 'The selected day first, when you do not control it.', control: 'date', table: { defaultValue: { summary: 'today' } } },
    onDateChange: { description: 'Called with the new day (local midnight) on a click, an arrow key, Previous, Next or Today.' },
    onEventClick: { description: 'Makes events without `href` buttons and runs on a click, e.g. to open the event in a Drawer.' },
    actions: { description: 'At the end of the header, e.g. an "Add event" Button.', control: false },
    hasEventList: {
      description: "Lists the selected day's events under the month. A narrow month shows dots, not titles: turn it on where the calendar can be narrow.",
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    headingLevel: {
      description: 'The level of the title (the month, week, day or year shown). The event list under the month takes the next level.',
      control: 'inline-radio',
      options: [2, 3, 4],
      table: { defaultValue: { summary: '2' } },
    },
    locale: { description: 'BCP 47 tag, e.g. `vi-VN`, for names, dates and times. Defaults to the browser\'s.', control: 'text' },
    weekStartsOn: { description: '0 = Sunday … 6 = Saturday. Defaults to the locale\'s.', control: { type: 'number', min: 0, max: 6 } },
  },
} satisfies Meta<typeof EventCalendar>

export default meta
type Story = StoryObj<typeof meta>

/** A month: each day lists its events with their start time, and "n more" when it runs out of room. */
export const Month: Story = {
  args: { actions: <Button startIcon={<Icon name="plus" />}>Add event</Button> },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'January 2022' })).toBeVisible()
    const month = canvas.getByRole('table', { name: 'January 2022' })
    await expect(within(month).getAllByRole('columnheader')[0]).toHaveTextContent('Sun')
    await expect(canvas.getByRole('button', { name: 'Saturday, January 22, 2022, 3 events' })).toHaveAttribute('aria-pressed', 'true')
    // A busy day lists two and says how many more; its button counts them all.
    const cell = canvas.getByRole('button', { name: 'Tuesday, January 25, 2022, 5 events' }).closest('td')!
    await expect(within(cell).getByText('Quarter close')).toBeVisible()
    await expect(within(cell).getByText('9:00 AM')).toBeVisible()
    await expect(within(cell).getByRole('button', { name: '3 more on Tuesday, January 25, 2022' })).toHaveTextContent('3 more')
    // An all-day event spans every day it covers, with no time.
    for (const day of [24, 25, 26]) {
      const td = canvas.getByRole('button', { name: new RegExp(`^\\w+day, January ${day}, 2022`) }).closest('td')!
      await expect(within(td).getByText('Quarter close')).toBeVisible()
    }
    await expect(canvas.getByRole('button', { name: 'Add event' })).toBeVisible()
  },
}

/** A week: an hour grid with the timed events placed by time, overlapping ones side by side, and all-day events in a row above. */
export const Week: Story = {
  args: { defaultView: 'week', defaultDate: at(25) },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'Jan 23 – 29, 2022' })).toBeVisible()
    const day = canvas.getByRole('list', { name: 'Tuesday, January 25, 2022' })
    const box = (name: string) => within(day).getByText(name).closest('li')!.getBoundingClientRect()
    await waitFor(async () => {
      const [standup, budget, vendor, lunch] = ['Standup', 'Budget planning', 'Vendor call', 'Lunch'].map(box)
      // Standup and Budget overlap: two columns side by side, the longer first.
      await expect(Math.round(budget.width)).toBe(Math.round(standup.width))
      await expect(Math.abs(budget.right - standup.left) < 1 || Math.abs(standup.right - budget.left) < 1).toBe(true)
      // Vendor call starts after Standup ends: it reuses Standup's column, below it.
      await expect(Math.round(vendor.left)).toBe(Math.round(standup.left))
      await expect(vendor.top).toBeGreaterThanOrEqual(standup.bottom - 1)
      // Lunch overlaps nothing: the full width, and an hour is half of Budget's two.
      await expect(lunch.width).toBeGreaterThan(budget.width * 1.8)
      await expect(Math.abs(budget.height - 2 * lunch.height)).toBeLessThan(2)
    })
    // The all-day row holds the three-day event under each of its days.
    await expect(within(canvas.getByRole('list', { name: 'All day, Monday, January 24, 2022' })).getByText('Quarter close')).toBeVisible()
    await expect(within(canvas.getByRole('list', { name: 'All day, Wednesday, January 26, 2022' })).getByText('Quarter close')).toBeVisible()
    await expect(within(canvas.getByRole('list', { name: 'All day, Thursday, January 27, 2022' })).queryByText('Quarter close')).toBeNull()
    // It opens at the first timed event of the week (9:00), not at midnight.
    const scroller = day.parentElement!
    await waitFor(() => expect(scroller.scrollTop).toBeGreaterThan(0))
    await expect(within(day).getByText('Standup').closest('li')!.getBoundingClientRect().top).toBeGreaterThanOrEqual(
      scroller.getBoundingClientRect().top - 1,
    )
  },
}

/** A day: the same hour grid, one column wide. */
export const Day: Story = {
  args: { defaultView: 'day', defaultDate: at(22) },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'Saturday, January 22, 2022' })).toBeVisible()
    const day = canvas.getByRole('list', { name: 'Saturday, January 22, 2022' })
    await expect(within(day).getAllByRole('listitem')).toHaveLength(3)
    await userEvent.click(canvas.getByRole('button', { name: 'Next day' }))
    await expect(canvas.getByRole('heading', { level: 2, name: 'Sunday, January 23, 2022' })).toBeVisible()
    await expect(within(canvas.getByRole('list', { name: 'Sunday, January 23, 2022' })).queryAllByRole('listitem')).toHaveLength(0)
    // The hours scroll and take focus; with no events the day opens at 8:00.
    const hours = canvas.getByRole('group', { name: 'Schedule' })
    await expect(hours).toHaveAttribute('tabindex', '0')
    await waitFor(() => expect(Math.abs(hours.scrollTop - (8 / 24) * hours.scrollHeight)).toBeLessThan(2))
  },
}

/** A year: twelve small months. A day opens that day. */
export const Year: Story = {
  args: { defaultView: 'year', onViewChange: fn(), onDateChange: fn() },
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: '2022' })).toBeVisible()
    await expect(canvas.getAllByRole('grid')).toHaveLength(12)
    // The months move with the header, so their own arrows are hidden.
    await expect(canvas.queryByRole('button', { name: 'Previous month' })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Friday, March 4, 2022' }))
    await expect(args.onViewChange).toHaveBeenCalledWith('day')
    await expect(args.onDateChange).toHaveBeenCalledWith(new Date(2022, 2, 4))
    await expect(canvas.getByRole('heading', { level: 2, name: 'Friday, March 4, 2022' })).toBeVisible()
  },
}

/** Previous, Today and Next move by the view's unit; the title follows and is announced. */
export const Navigate: Story = {
  args: { onDateChange: fn() },
  play: async ({ canvas, args }) => {
    const title = canvas.getByRole('heading', { level: 2 })
    await expect(title).toHaveAttribute('aria-live', 'polite')
    await userEvent.click(canvas.getByRole('button', { name: 'Next month' }))
    await expect(title).toHaveTextContent('February 2022')
    await userEvent.click(canvas.getByRole('button', { name: 'Previous month' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Previous month' }))
    await expect(title).toHaveTextContent('December 2021')
    await userEvent.click(canvas.getByRole('button', { name: 'Today' }))
    const now = new Date()
    await expect(args.onDateChange).toHaveBeenLastCalledWith(new Date(now.getFullYear(), now.getMonth(), now.getDate()))
    await expect(title).toHaveTextContent(new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(now))
    await expect(canvas.getByRole('button', { name: /,|^\d/, current: 'date' })).toBeVisible()
  },
}

/** The view switch is a Select: one control, which fits a phone's header. */
export const SwitchView: Story = {
  play: async ({ canvas, canvasElement }) => {
    await userEvent.click(canvas.getByRole('combobox', { name: 'View' }))
    const body = within(canvasElement.ownerDocument.body)
    await userEvent.click(await body.findByRole('option', { name: 'Week' }))
    await waitFor(() => expect(body.queryByRole('listbox')).toBeNull())
    await expect(canvas.getByRole('heading', { level: 2, name: 'Jan 16 – 22, 2022' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Next week' })).toBeVisible()
    await expect(canvas.getAllByRole('list', { name: /^(Sun|Mon|Tues|Wednes|Thurs|Fri|Satur)day/ })).toHaveLength(7)
  },
}

/** The keyboard: one day of the month is a tab stop; the arrows move it, across the month's edge too. */
export const Keyboard: Story = {
  play: async ({ canvas }) => {
    const day = (name: string) => canvas.getByRole('button', { name: new RegExp(`^${name}`) })
    await expect(day('Saturday, January 22')).toHaveAttribute('tabindex', '0')
    await expect(day('Friday, January 21')).toHaveAttribute('tabindex', '-1')
    day('Saturday, January 22').focus()
    await userEvent.keyboard('{ArrowLeft}')
    await expect(day('Friday, January 21')).toHaveFocus()
    await expect(day('Friday, January 21')).toHaveAttribute('aria-pressed', 'true')
    await userEvent.keyboard('{ArrowDown}{ArrowDown}')
    await expect(day('Friday, February 4')).toHaveFocus()
    await expect(canvas.getByRole('heading', { level: 2 })).toHaveTextContent('February 2022')
    // An event is a stop of its own after the day, not part of the arrows.
    await userEvent.keyboard('{ArrowUp}{ArrowUp}{ArrowUp}')
    await expect(day('Friday, January 14')).toHaveFocus()
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}{Tab}')
    await expect(canvas.getByText("Sam's birthday party").closest('li')).toContainElement(document.activeElement as HTMLElement)
  },
  args: { onEventClick: fn() },
}

/** `onEventClick` makes events buttons; `href` makes one a link. */
export const Clickable: Story = {
  args: {
    onEventClick: fn(),
    events: EVENTS.map((e) => (e.id === 3 ? { ...e, href: '#date-night' } : e)),
  },
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Design review 10:00 AM' }))
    await expect(args.onEventClick).toHaveBeenCalledWith(EVENTS[0])
    await expect(canvas.getByRole('link', { name: 'Date night 6:00 PM' })).toHaveAttribute('href', '#date-night')
  },
}

/** `hasEventList`: the selected day's events under the month, in full. */
export const WithEventList: Story = {
  args: { hasEventList: true, views: ['month'] },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('combobox', { name: 'View' })).toBeNull()
    await expect(canvas.getByRole('heading', { level: 3, name: 'Saturday, January 22, 2022' })).toBeVisible()
    const list = () => canvas.getByRole('heading', { level: 3 }).nextElementSibling as HTMLElement
    await expect(within(list()).getAllByRole('listitem')).toHaveLength(3)
    await userEvent.click(canvas.getByRole('button', { name: 'Tuesday, January 4, 2022' }))
    await expect(canvas.getByRole('heading', { level: 3 })).toHaveTextContent('Tuesday, January 4, 2022')
    await expect(canvas.getByText('No events')).toBeVisible()
  },
}

/** At phone width the month shows a dot per event; the list under it has the titles. */
export const Narrow: Story = {
  args: {
    hasEventList: true,
    // More actions than fit beside the title: the header wraps.
    actions: (
      <>
        <Button variant="secondary" appearance="outlined">Export</Button>
        <Button startIcon={<Icon name="plus" />}>Add event</Button>
      </>
    ),
  },
  decorators: [(Story) => <div style={{ inlineSize: 320 }}>{Story()}</div>],
  play: async ({ canvas, canvasElement }) => {
    const busy = canvas.getByRole('button', { name: 'Saturday, January 22, 2022, 3 events' })
    const cell = busy.closest('td')!
    await waitFor(() => expect(cell.querySelector('ul')).not.toBeVisible())
    await expect(cell.querySelectorAll('[aria-hidden="true"] > span')).toHaveLength(3)
    const list = canvas.getByRole('heading', { level: 3 }).nextElementSibling as HTMLElement
    await expect(within(list).getByText('Hockey game')).toBeVisible()
    // Nothing runs past the 320px frame.
    const root = canvasElement.firstElementChild!.firstElementChild!
    await waitFor(() => expect(root.scrollWidth).toBeLessThanOrEqual(root.clientWidth))
  },
}

/** Harsh content: a title with no spaces is cut with an ellipsis rather than widening the day. */
export const LongTitle: Story = {
  tags: ['!dev'],
  args: {
    events: [{ id: 1, title: 'Quarterly-business-review-with-the-regional-leadership-team-and-finance', start: at(19, 9), end: at(19, 10) }],
  },
  play: async ({ canvas }) => {
    const title = canvas.getByText(/^Quarterly-business/)
    const cell = title.closest('td')!
    const next = cell.nextElementSibling!
    await waitFor(async () => {
      await expect(title.getBoundingClientRect().right).toBeLessThanOrEqual(cell.getBoundingClientRect().right)
      await expect(Math.round(cell.getBoundingClientRect().width)).toBe(Math.round(next.getBoundingClientRect().width))
    })
  },
}

/** No events: the grids still show, empty. */
export const Empty: Story = {
  args: { events: [], hasEventList: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('table', { name: 'January 2022' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Saturday, January 22, 2022' })).toBeVisible()
    await expect(canvas.getByText('No events')).toBeVisible()
  },
}

/** Right to left: the left arrow moves to the next day, as on screen, and the header's arrows mirror. */
export const RightToLeft: Story = {
  tags: ['!dev'],
  decorators: [(Story) => <div dir="rtl">{Story()}</div>],
  play: async ({ canvas }) => {
    const day = (name: string) => canvas.getByRole('button', { name: new RegExp(`^${name}`) })
    day('Saturday, January 22').focus()
    await userEvent.keyboard('{ArrowLeft}')
    await expect(day('Sunday, January 23')).toHaveFocus()
    const icon = canvas.getByRole('button', { name: 'Next month' }).querySelector('svg')!
    await expect(getComputedStyle(icon).scale).toBe('-1 1')
  },
}
