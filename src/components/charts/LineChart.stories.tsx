import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { LineChart } from './LineChart'
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
    const img = await canvas.findByRole('img', { name: /Requests over time Oct 19, 09:00 to Oct 20, 08:45/ })
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
    format: (v: number) => `${Math.round(v)} ms`,
  },
  play: async ({ canvas }) => {
    const img = await canvas.findByRole('img')
    await expect(within(img as unknown as HTMLElement).queryByText('0 ms')).toBeNull()
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
