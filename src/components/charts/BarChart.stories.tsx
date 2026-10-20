import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { BarChart } from './BarChart'
import { invoicesByDay, pointAtMiddle, statusCodes } from './sample-data'

const meta = {
  title: 'Charts/BarChart',
  tags: ['experimental'],
  component: BarChart,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxInlineSize: 640 }}>{Story()}</div>],
  args: {
    title: 'Requests by status code',
    data: statusCodes,
    x: 'time',
    timeZone: 'UTC',
    isIncomplete: true,
    // Status has meaning, so it takes the status colours rather than the palette.
    series: [
      { key: 'ok', label: '2xx', color: 'success' },
      { key: 'redirect', label: '3xx', color: 'info' },
      { key: 'clientError', label: '4xx', color: 'warning' },
      { key: 'serverError', label: '5xx', color: 'danger' },
    ],
  },
  argTypes: {
    data: { control: false, description: 'Flat rows, one per bucket. The `x` field holds a Date (time axis) or a string (category axis).' },
    series: { control: false, description: 'One entry per series: `key` into each row, `label`, and an optional `color` token name.' },
    x: { description: 'The field in each row that holds the x value.' },
    title: { description: 'Shown above the chart, and its accessible name.' },
    layout: { control: 'inline-radio', options: ['stacked', 'grouped'], description: '`stacked` adds series into one bar; `grouped` puts them side by side.' },
    isIncomplete: { description: 'The last bucket is still filling: its bar is faded.' },
    isLoading: { description: 'Shows a skeleton the height of the plot.' },
    height: { description: 'Plot height in pixels. The width follows the container.' },
    format: { control: false, description: 'Formats values on the axis, legend, tooltip and table. Defaults to compact numbers.' },
    timeZone: { control: 'inline-radio', options: [undefined, 'UTC'], description: 'The time axis is in the viewer\'s time zone, or UTC.' },
  },
} satisfies Meta<typeof BarChart>

export default meta
type Story = StoryObj<typeof meta>

/** Stacked over time, in status colours. The last bucket is faded: it is still filling. */
export const Stacked: Story = {
  play: async ({ canvas, canvasElement }) => {
    const img = await canvas.findByRole('img', { name: /Requests by status code/ })
    await expect(canvasElement.querySelectorAll('svg g[class*="series"]')).toHaveLength(4)
    await expect(canvasElement.querySelectorAll('rect[class*="partial"]').length).toBeGreaterThan(0)
    // The tooltip lists every series in the bucket, top of the stack first, and the total.
    pointAtMiddle(img)
    await waitFor(() => expect(canvasElement.querySelector('[class*="tooltip"]')).toHaveTextContent(/5xx.*2xx.*Total/))
  },
}

/** The default palette, when series have no meaning of their own. */
export const Palette: Story = {
  args: {
    title: 'Requests by status code, default colours',
    series: [
      { key: 'ok', label: '2xx' },
      { key: 'redirect', label: '3xx' },
      { key: 'clientError', label: '4xx' },
      { key: 'serverError', label: '5xx' },
    ],
  },
  play: async ({ canvas, canvasElement }) => {
    await canvas.findByRole('img')
    const fills = [...canvasElement.querySelectorAll('svg g[class*="series"]')].map((g) => g.getAttribute('fill'))
    await expect(fills).toEqual(['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)'])
  },
}

/** Side by side, on categories: this week against last. */
export const Grouped: Story = {
  args: {
    title: 'Invoices issued',
    data: invoicesByDay,
    x: 'day',
    layout: 'grouped',
    isIncomplete: false,
    series: [
      { key: 'thisWeek', label: 'This week' },
      { key: 'lastWeek', label: 'Last week' },
    ],
  },
  play: async ({ canvas, canvasElement }) => {
    await canvas.findByRole('img', { name: /Invoices issued Mon to Sun/ })
    // Two bars per day, every one starting from the zero line.
    const bars = [...canvasElement.querySelectorAll('rect[class*="bar"]')]
    await expect(bars).toHaveLength(14)
    const bottoms = new Set(bars.map((b) => Math.round(Number(b.getAttribute('y')) + Number(b.getAttribute('height')))))
    await expect(bottoms.size).toBe(1)
    await expect(canvas.getByText('Wed')).toBeInTheDocument()
  },
}

/** No rows for the period. */
export const Empty: Story = {
  args: { data: [] },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No data')).toBeVisible()
  },
}
