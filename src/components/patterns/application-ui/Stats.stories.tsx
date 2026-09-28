import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Stats } from './Stats'

const meta = {
  title: 'Patterns/Application UI/Stats',
  component: Stats,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' }, layout: 'padded' },
  args: { title: 'Last 30 days', stats: [] },
  argTypes: { stats: { control: false } },
} satisfies Meta<typeof Stats>

export default meta
type Story = StoryObj<typeof meta>

/** A label and a figure. The simplest summary of a page. */
export const Simple: Story = {
  args: {
    stats: [
      { label: 'Total subscribers', value: '71,897' },
      { label: 'Avg. open rate', value: '58.16%' },
      { label: 'Avg. click rate', value: '24.57%' },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'Last 30 days' })).toBeVisible()
    // A definition list: each figure is the definition of its label.
    const terms = canvas.getAllByRole('term')
    await expect(terms.map((t) => t.textContent)).toEqual(['Total subscribers', 'Avg. open rate', 'Avg. click rate'])
    await expect(canvas.getAllByRole('definition')[0]).toHaveTextContent('71,897')
  },
}

/** Against the last period: the previous figure, and a change that says whether it is good news. */
export const WithTrend: Story = {
  args: {
    stats: [
      { label: 'Total subscribers', value: '71,897', previous: 'from 70,946', change: { value: '12%', direction: 'up' } },
      { label: 'Avg. open rate', value: '58.16%', previous: 'from 56.14%', change: { value: '2.02%', direction: 'up' } },
      // Churn going down is good news: green, not red.
      { label: 'Churn', value: '1.8%', previous: 'from 2.4%', change: { value: '0.6%', direction: 'down', isPositive: true } },
      { label: 'Avg. click rate', value: '24.57%', previous: 'from 28.62%', change: { value: '4.05%', direction: 'down' } },
    ],
  },
  play: async ({ canvas }) => {
    // The direction is in words for screen readers, not only in the arrow and colour.
    await expect(canvas.getAllByRole('definition')[0]).toHaveTextContent('Increased by 12%')
    const churn = canvas.getAllByRole('definition')[2]
    await expect(churn).toHaveTextContent('Decreased by 0.6%')
    const up = within(canvas.getAllByRole('definition')[0]).getByText('12%', { exact: false })
    const churnChange = within(churn).getByText('0.6%', { exact: false })
    const click = within(canvas.getAllByRole('definition')[3]).getByText('4.05%', { exact: false })
    // Good news shares a colour whichever way it points; bad news differs.
    await expect(getComputedStyle(churnChange).color).toBe(getComputedStyle(up).color)
    await expect(getComputedStyle(click).color).not.toBe(getComputedStyle(up).color)
  },
}

/** With an icon for each figure and a link to where it comes from. */
export const WithIconAndLink: Story = {
  args: {
    stats: [
      { label: 'Total subscribers', value: '71,897', change: { value: '122', direction: 'up' }, icon: <Icon name="user" />, href: '#subscribers' },
      { label: 'Avg. open rate', value: '58.16%', change: { value: '5.4%', direction: 'up' }, icon: <Icon name="success" />, href: '#opens' },
      { label: 'Avg. click rate', value: '24.57%', change: { value: '3.2%', direction: 'down' }, icon: <Icon name="star" />, href: '#clicks' },
    ],
  },
  play: async ({ canvas }) => {
    // Three links all called "View all" would be indistinguishable in a links list.
    await expect(canvas.getByRole('link', { name: 'View all Avg. open rate' })).toHaveAttribute('href', '#opens')
  },
}

/** One column on a phone. */
export const Narrow: Story = {
  ...WithTrend,
  decorators: [(Story) => <div style={{ inlineSize: 360 }}>{Story()}</div>],
  play: async ({ canvas }) => {
    const [a, b] = canvas.getAllByRole('term').map((t) => t.getBoundingClientRect())
    await expect(b.top).toBeGreaterThan(a.bottom)
  },
}
