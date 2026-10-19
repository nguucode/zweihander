import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { DatePicker, DateRangePicker, rangePresets } from './DatePicker'

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
  // These descriptions are the docs' API table and the Playground's props
  // panel; react-docgen supplies the types and defaults.
  argTypes: {
    value: { description: 'Controlled range, `{ start, end }` with both ends set, or `null`. Pair with `onValueChange`.', control: false },
    defaultValue: { description: 'Starting range when uncontrolled.', control: false },
    onValueChange: {
      description: 'Called once both ends are in, with `start` never after `end`, or with `null` when cleared.',
      control: false,
    },
    presets: {
      description: 'Whole periods beside the calendars. `true` for the built-in list (Today to Last year); `rangePresets(weekStartsOn)` returns it, to extend.',
      control: 'boolean',
    },
    label: { description: 'Names the field.', control: 'text' },
    helperText: { description: 'Under the field. Replaced by the expected pattern while the typed text is not a valid range.', control: 'text' },
    validationState: {
      description: '`error` turns the edge and helper red and sets `aria-invalid`; `success` turns them green.',
      control: 'inline-radio',
      options: ['default', 'success', 'error'],
    },
    size: { description: '24px (`sm`) or 32px (`md`) tall, from the control tiers.', control: 'inline-radio', options: ['sm', 'md'] },
    min: { description: 'Earliest allowed date, for either end.', control: false },
    max: { description: 'Latest allowed date, for either end.', control: false },
    isDateDisabled: { description: 'Return `true` to disable a day. Checked when typing too.', control: false },
    locale: { description: 'BCP 47 tag. Sets the typed order and the calendars\' month and day names.', control: 'text' },
    weekStartsOn: { description: 'First column of the calendars, and the start of "This week". Defaults to the locale\'s.', control: 'number' },
    placeholder: { description: 'Defaults to the locale\'s pattern, e.g. "dd/mm/yyyy – dd/mm/yyyy".', control: 'text' },
    isFullWidth: { description: 'Fills the width of its container instead of 20rem.', control: 'boolean' },
    name: { description: 'Submitted as `yyyy-mm-dd/yyyy-mm-dd`, an ISO 8601 interval.', control: 'text' },
    disabled: { description: 'Dimmed, out of the tab order, not submitted.', control: 'boolean' },
    required: { description: 'Marks the label with an asterisk and blocks an empty form submit.', control: 'boolean' },
    id: { description: 'For the input, e.g. to point an outside label at it.', control: false },
    container: {
      description: 'Where the popup renders instead of `<body>`, e.g. an element in fullscreen or a scope with its own density.',
      control: false,
      table: { type: { summary: 'HTMLElement | null' } },
    },
    className: { description: 'On the field\'s outer element.', control: false },
    'aria-label': { description: 'Names the field when there is no visible `label`.', control: 'text' },
  },
  // Room for the open calendars, which the plays open. The docs' still
  // pictures (anatomy, do and don't) opt out with `popupRoom: false`.
  decorators: [(Story, { parameters }) => (parameters.popupRoom === false ? Story() : <div style={{ minBlockSize: '30rem' }}>{Story()}</div>)],
  excludeStories: ['anatomyParts'],
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

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'label', description: 'Names the field.' },
  { name: 'Field', selector: ':has(> input)', description: 'The box: edge, fill and focus ring, as Date Picker\'s.' },
  { name: 'Input', selector: 'input', description: 'Both dates as text, start first. A click opens the calendars and keeps focus here.' },
  { name: 'Calendar button', selector: 'button[aria-label^="Choose dates"]', description: 'Opens the calendars, with focus in them.' },
  { name: 'Helper text', selector: 'p', description: 'Optional. Shows the expected pattern while the text is not a range.' },
]

/** Every part present, the calendars closed. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { helperText: 'Up to one quarter.' },
  parameters: { popupRoom: false },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[1]).toContainElement(found[3] as HTMLElement)
    await expect(found[4]).toHaveTextContent('Up to one quarter.')
  },
}

/** Guidelines, Do: one field for one period. */
export const DoOneField: Story = {
  args: { label: 'Report period', presets: true },
  parameters: { popupRoom: false },
}

/** Guidelines, Don't: two Date Pickers for one period, which can be left half done or set back to front. */
export const DontTwoFields: Story = {
  tags: ['!dev'],
  parameters: { popupRoom: false },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
      <DatePicker label="From" locale="en-GB" defaultValue={new Date(2026, 8, 13)} />
      <DatePicker label="To" locale="en-GB" defaultValue={new Date(2026, 8, 7)} />
    </div>
  ),
}
