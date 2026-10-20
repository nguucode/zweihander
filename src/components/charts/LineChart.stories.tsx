import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { LineChart } from './LineChart'
import { formatTime } from './chart-utils'
import { formatBytes, pointAtMiddle, requests, traffic, transfer } from './sample-data'

const meta = {
  title: 'Charts/LineChart',
  tags: ['experimental'],
  component: LineChart,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxInlineSize: 640 }}>{Story()}</div>],
  args: {
    title: 'Requests over time',
    data: requests,
    x: 'time',
    series: [{ key: 'requests', label: 'Requests' }],
    timeZone: 'UTC',
    isIncomplete: true,
  },
  argTypes: {
    data: { control: false, description: 'Flat rows, one per bucket. The `x` field holds a Date (time axis) or a string (category axis).' },
    series: { control: false, description: 'One entry per line: `key` into each row, `label`, and an optional `color` token name.' },
    x: { description: 'The field in each row that holds the x value.' },
    title: { description: 'Shown above the chart, and its accessible name.' },
    appearance: { control: 'inline-radio', options: ['line', 'area'], description: '`area` fills under each line and keeps the y axis at zero.' },
    isAutoDomain: { description: 'Fit the y axis to the data instead of starting at zero. Line appearance only.' },
    isIncomplete: { description: 'The last bucket is still filling: its segment is dashed.' },
    legendValue: { control: 'inline-radio', options: ['total', 'latest'], description: 'Beside each series: its sum, or its latest value (for rates and latencies).' },
    isLoading: { description: 'Shows a skeleton the height of the plot.' },
    height: { description: 'Plot height in pixels. The width follows the container.' },
    format: { control: false, description: 'Formats values on the axis, legend, tooltip and table. Defaults to compact numbers.' },
    timeZone: { control: 'inline-radio', options: [undefined, 'UTC'], description: 'The time axis is in the viewer\'s time zone, or UTC.' },
  },
} satisfies Meta<typeof LineChart>

export default meta
type Story = StoryObj<typeof meta>

/** One series over 24 hours, the last bucket still filling. */
export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    // Named by its title, with the range the screen reader cannot see on the axis.
    // Dates follow the viewer's locale, so the expected text is formatted the same way.
    const range = `${formatTime(requests[0].time, 'UTC')} to ${formatTime(requests.at(-1)!.time, 'UTC')}`
    const img = await canvas.findByRole('img', { name: new RegExp(`Requests over time ${range}`) })
    // The last segment is its own dashed path.
    await expect(canvasElement.querySelectorAll('path[class*="lineDashed"]')).toHaveLength(1)
    // Hovering shows the crosshair and a tooltip for the bucket under the pointer.
    pointAtMiddle(img)
    await waitFor(() => expect(canvasElement.querySelector('[class*="tooltip"]')).toBeInTheDocument())
    await expect(canvasElement.querySelector('[class*="tooltip"]')).toHaveAttribute('aria-hidden', 'true')
  },
}

/** Filled under the line, with a unit formatter: bytes. */
export const Area: Story = {
  args: { title: 'Data transfer', data: transfer, series: [{ key: 'bytes', label: 'Data transfer' }], appearance: 'area', format: formatBytes },
  play: async ({ canvas, canvasElement }) => {
    await canvas.findByRole('img')
    await expect(canvasElement.querySelectorAll('path[class*="area"]')).toHaveLength(1)
    // The formatter reaches the legend total and the axis.
    await expect(canvas.getByRole('button', { name: /Data transfer .*MB/ })).toBeVisible()
    await expect(canvas.getByRole('img').textContent).toMatch(/0 B/)
  },
}

/** Two series: the legend toggles each, and hovering a legend item fades the other. */
export const MultiSeries: Story = {
  args: {
    title: 'API and web traffic',
    data: traffic,
    isIncomplete: false,
    series: [
      { key: 'api', label: 'API' },
      { key: 'web', label: 'Web', color: 'chart-3' },
    ],
  },
  play: async ({ canvas, canvasElement }) => {
    const series = () => canvasElement.querySelectorAll('svg g[class*="series"]')
    await waitFor(() => expect(series()).toHaveLength(2))
    const api = canvas.getByRole('button', { name: /API/ })
    const web = canvas.getByRole('button', { name: /Web/ })
    await expect(api).toHaveAttribute('aria-pressed', 'true')

    // Hover fades every series but the one pointed at.
    await userEvent.hover(web)
    await waitFor(() => expect(canvasElement.querySelectorAll('svg g[class*="dim"]')).toHaveLength(1))
    await userEvent.unhover(web)

    // Click hides a series; the last one left cannot be hidden.
    await userEvent.click(api)
    // The series that was pointed at is gone: nothing stays faded.
    await expect(canvasElement.querySelectorAll('svg g[class*="dim"]')).toHaveLength(0)
    await expect(api).toHaveAttribute('aria-pressed', 'false')
    await expect(series()).toHaveLength(1)
    await expect(web).toHaveAttribute('aria-disabled', 'true')
    await userEvent.click(web)
    await expect(web).toHaveAttribute('aria-pressed', 'true')

    // Keyboard: Tab reaches the toggle, Enter flips it back.
    api.focus()
    await userEvent.keyboard('{Enter}')
    await expect(api).toHaveAttribute('aria-pressed', 'true')
  },
}

/** Latency sits far from zero: fit the axis to the data. */
export const AutoDomain: Story = {
  args: {
    title: 'p95 response time',
    data: traffic.map((d) => ({ time: d.time, p95: 120 + d.api / 4 })),
    series: [{ key: 'p95', label: 'p95' }],
    isAutoDomain: true,
    isIncomplete: false,
    // A sum of latencies means nothing: show the latest.
    legendValue: 'latest',
    format: (v: number) => `${Math.round(v)} ms`,
  },
  play: async ({ canvas }) => {
    const img = await canvas.findByRole('img')
    await expect(within(img as unknown as HTMLElement).queryByText('0 ms')).toBeNull()
    const latest = 120 + traffic.at(-1)!.api / 4
    await expect(canvas.getByRole('button', { name: `p95 ${Math.round(latest)} ms` })).toBeVisible()
  },
}

/** The values as a table: the accessible way to read them, and handy for copying. */
export const TableView: Story = {
  play: async ({ canvas }) => {
    const toggle = canvas.getByRole('button', { name: 'View as table' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(toggle)
    await expect(canvas.getByRole('button', { name: 'View as chart' })).toHaveAttribute('aria-expanded', 'true')
    const table = canvas.getByRole('table', { name: 'Requests over time' })
    // A header row plus one row per bucket.
    await expect(within(table).getAllByRole('row')).toHaveLength(requests.length + 1)
    await expect(canvas.queryByRole('img')).toBeNull()
  },
}

/** A missing value is a gap in the line, not a drop to zero. */
export const Gaps: Story = {
  args: {
    title: 'Requests with an outage',
    isIncomplete: false,
    data: requests.slice(0, 24).map((d, i) => ({ ...d, requests: i >= 10 && i < 14 ? null : d.requests })),
  },
  play: async ({ canvas, canvasElement }) => {
    await canvas.findByRole('img')
    // Two runs of the line: before and after the gap.
    const d = canvasElement.querySelector('path[class*="line"]')!.getAttribute('d')!
    await expect(d.match(/M/g)).toHaveLength(2)
    await userEvent.click(canvas.getByRole('button', { name: 'View as table' }))
    await expect(canvas.getAllByRole('cell', { name: '–' })).toHaveLength(4)
  },
}

/** No rows for the period. */
export const Empty: Story = {
  args: { data: [] },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No data')).toBeVisible()
    await expect(canvas.queryByRole('button', { name: 'View as table' })).toBeNull()
  },
}

/** Waiting for data: a skeleton the height of the plot, and the figure marked busy. */
export const Loading: Story = {
  args: { isLoading: true },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('figure')).toHaveAttribute('aria-busy', 'true')
  },
}
