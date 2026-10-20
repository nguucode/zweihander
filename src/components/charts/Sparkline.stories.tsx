import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { Sparkline } from './Sparkline'
import { requests } from './sample-data'

const values = requests.map((d) => d.requests)

const meta = {
  title: 'Charts/Sparkline',
  tags: ['experimental'],
  component: Sparkline,
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ inlineSize: 240 }}>{Story()}</div>],
  args: { data: values },
  argTypes: {
    data: { control: false, description: 'Values in order, oldest first. Empty or null shows "No data".' },
    color: { control: 'select', options: ['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5', 'chart-6', 'chart-7', 'chart-8', 'success', 'danger'], description: 'A colour token name.' },
    appearance: { control: 'inline-radio', options: ['line', 'area'], description: '`area` fills under the line.' },
    'aria-label': { description: 'Off by default, as decoration beside a figure. Name it when the spark is the only place the trend is shown.' },
  },
} satisfies Meta<typeof Sparkline>

export default meta
type Story = StoryObj<typeof meta>

/** Beside a figure, the spark is decoration: hidden from assistive tech. */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    await expect(canvasElement.querySelectorAll('path')).toHaveLength(2)
  },
}

/** Just the line. */
export const Line: Story = {
  args: { appearance: 'line', color: 'chart-3' },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelectorAll('path')).toHaveLength(1)
  },
}

/** When the trend is shown nowhere else, it gets a name. */
export const Labelled: Story = {
  args: { 'aria-label': 'Requests, last 24 hours, rising' },
  play: async ({ canvas }) => {
    // waitFor: the spark fades in.
    await waitFor(() => expect(canvas.getByRole('img', { name: 'Requests, last 24 hours, rising' })).toBeVisible())
  },
}

/** Nothing recorded for the period. */
export const Empty: Story = {
  args: { data: [] },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No data')).toBeVisible()
  },
}
