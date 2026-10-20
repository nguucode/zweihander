import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { PieChart } from './PieChart'
import { formatCompact, formatShare } from './chart-utils'
import { contentTypes, countries } from './sample-data'

const meta = {
  title: 'Charts/PieChart',
  tags: ['experimental'],
  component: PieChart,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxInlineSize: 560 }}>{Story()}</div>],
  args: { title: 'Requests by country', data: countries },
  argTypes: {
    data: { control: false, description: 'Slices: `label`, `value`, optional `color` token name.' },
    title: { description: 'Shown above the chart, and its accessible name.' },
    appearance: { control: 'inline-radio', options: ['pie', 'donut'], description: '`donut` leaves a hole with the total in it.' },
    centerLabel: { description: 'Under the total in a donut.' },
    size: { description: 'Diameter in pixels.' },
    isLoading: { description: 'Shows a round skeleton.' },
    format: { control: false, description: 'Formats values in the legend, centre and table. Defaults to compact numbers.' },
  },
} satisfies Meta<typeof PieChart>

export default meta
type Story = StoryObj<typeof meta>

/** Seven countries: the three under 3% merge into "Other". */
export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    const legend = canvas.getByRole('list', { name: 'Legend' })
    const items = within(legend).getAllByRole('listitem')
    await expect(items).toHaveLength(5)
    const total = countries.reduce((s, c) => s + c.value, 0)
    await expect(items[4]).toHaveTextContent(`Other (3)50 · ${formatShare(50 / total)}`)
    // Each slice's share is in the image's description, not only in colour.
    await expect(canvas.getByRole('img', { name: new RegExp(`United States ${formatShare(1850 / total)}`) })).toBeVisible()
    // Hovering a legend item fades the other slices.
    await userEvent.hover(items[1])
    await waitFor(() => expect(canvasElement.querySelectorAll('path[class*="dim"]')).toHaveLength(4))
  },
}

/** A hole with the total in it. */
export const Donut: Story = {
  args: { title: 'Requests by content type', data: contentTypes, appearance: 'donut', centerLabel: 'requests' },
  play: async ({ canvas }) => {
    const img = canvas.getByRole('img')
    await expect(within(img as unknown as HTMLElement).getByText(formatCompact(3150))).toBeInTheDocument()
    await expect(within(img as unknown as HTMLElement).getByText('requests')).toBeInTheDocument()
  },
}

/** The table lists every slice, the merged ones too. */
export const TableView: Story = {
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'View as table' }))
    const table = canvas.getByRole('table', { name: 'Requests by country' })
    await expect(within(table).getAllByRole('row')).toHaveLength(countries.length + 1)
    await expect(within(table).getByText('Japan')).toBeVisible()
  },
}

/** Every slice is zero: there is nothing to divide, so it reads as no data. */
export const AllZero: Story = {
  args: { data: countries.map((c) => ({ ...c, value: 0 })) },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No data')).toBeVisible()
    await expect(canvas.queryByRole('img')).toBeNull()
  },
}

/** No slices. */
export const Empty: Story = {
  args: { data: [] },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No data')).toBeVisible()
  },
}
