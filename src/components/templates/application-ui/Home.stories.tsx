import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Home } from './Home'

/**
 * The page in a box of the given width: the shell and the page lay out by
 * their own width, so this is the page at that viewport. Link clicks stay
 * on the test page.
 */
const box = (inlineSize: number) => [
  (Story: () => ReactNode) => (
    <div
      style={{ inlineSize, blockSize: 900, border: '1px solid var(--border)' }}
      onClickCapture={(e) => (e.target as HTMLElement).closest('a[href]') && e.preventDefault()}
    >
      {Story()}
    </div>
  ),
]

const meta = {
  title: 'Templates/Application UI/Home',
  tags: ['experimental'],
  component: Home,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    defaultPeriod: { control: 'inline-radio', options: ['7d', '30d', '90d'] },
    // Storybook's date control sends a number, not a Date.
    today: { control: false },
    defaultTasks: { control: false },
    defaultSetupSteps: { control: false },
  },
  args: { onTaskChange: fn(), onSetupStep: fn() },
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)
/** The figure a Stats card shows, by its label. */
const figure = (stats: HTMLElement, label: string) => within(stats).getByText(label).closest('div')?.querySelector('dd')?.textContent

/** Wide: the cards side by side, recent activity in the aside; the period changes the figures and the chart. */
export const Default: Story = {
  decorators: box(1440),
  play: async ({ canvas, args }) => {
    await expect(canvas.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    await expect(canvas.getByRole('heading', { level: 1, name: 'Good morning, Ines' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Dashboard' })).toHaveAttribute('aria-current', 'page')
    const h2s = canvas.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    await expect(h2s).toEqual(expect.arrayContaining(['Finish setting up', 'Hours logged', 'Your tasks', 'Recent activity']))

    const figures = canvas.getByRole('region', { name: 'Key figures, last 30 days' })
    await expect(within(figures).getByText('Hours logged')).toBeVisible()
    const hours30 = figure(figures, 'Hours logged')
    // The tasks sit beside the chart.
    const chart = canvas.getByRole('figure', { name: 'Hours per day' })
    const tasks = canvas.getByRole('list', { name: 'Your tasks' })
    await waitFor(() => expect(tasks.getBoundingClientRect().left).toBeGreaterThan(chart.getBoundingClientRect().right))

    await userEvent.click(canvas.getByRole('combobox', { name: 'Period' }))
    await userEvent.click(await body().findByRole('option', { name: 'Last 7 days' }))
    await waitFor(() => expect(body().queryByRole('listbox')).toBeNull())
    const figures7 = canvas.getByRole('region', { name: 'Key figures, last 7 days' })
    await expect(figure(figures7, 'Hours logged')).not.toBe(hours30)

    // Ticking a task keeps it in the list, done, and counts it out.
    const task = within(tasks).getByRole('checkbox', { name: 'Review the Harbor Lights sprint plan' })
    await expect(task).toHaveAccessibleDescription('Harbor Lights · Due today')
    await userEvent.click(task)
    await expect(task).toBeChecked()
    await expect(args.onTaskChange).toHaveBeenCalledWith('t2', true)
    await expect(task).toHaveAccessibleDescription('Harbor Lights · Done')
    await expect(canvas.getByText('3 open')).toBeVisible()

    // Activity across projects names each one.
    const activity = canvas.getByRole('complementary', { name: 'Recent activity' })
    await expect(within(activity).getAllByRole('listitem')).toHaveLength(6)
    // The aside names the list; no second landmark inside it says the same.
    await expect(within(activity).queryByRole('region')).toBeNull()
    await expect(within(activity).getAllByRole('listitem')[0]).toHaveTextContent('Noor Haddad changed the status of Lanternfish Search')
  },
}

/** An overdue task says so in its description, not only in red. */
export const Overdue: Story = {
  decorators: box(1440),
  play: async ({ canvas }) => {
    const task = canvas.getByRole('checkbox', { name: 'Approve the Saltmarsh renewal quote' })
    await expect(task).toHaveAccessibleDescription('Saltmarsh Analytics · Overdue')
  },
}

/** The setup guide offers the next step; once the last is done it goes, and focus moves to the heading. */
export const SetupGuide: Story = {
  decorators: box(1440),
  play: async ({ canvas, args }) => {
    const guide = canvas.getByRole('group', { name: 'Finish setting up' })
    await expect(within(guide).getByRole('progressbar')).toHaveAttribute('aria-valuenow', '2')
    await userEvent.click(within(guide).getByRole('button', { name: 'Invite team' }))
    await expect(args.onSetupStep).toHaveBeenCalledWith('team')
    await expect(within(guide).getByRole('progressbar')).toHaveAttribute('aria-valuenow', '3')
    await expect(within(guide).getByText(/Invite your team/)).toHaveTextContent('Invite your team (done)')

    await userEvent.click(within(guide).getByRole('button', { name: 'Connect calendar' }))
    await expect(args.onSetupStep).toHaveBeenCalledWith('calendar')
    await expect(canvas.queryByRole('group', { name: 'Finish setting up' })).toBeNull()
    await waitFor(() => expect(canvas.getByRole('heading', { level: 1 })).toHaveFocus())
  },
}

/** A set-up workspace with nothing due: no guide, and the tasks card says so. */
export const NothingDue: Story = {
  decorators: box(1440),
  args: { defaultTasks: [], defaultSetupSteps: [], today: new Date('2026-10-01T19:30') },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Good evening, Ines' })).toBeVisible()
    await expect(canvas.queryByRole('group', { name: 'Finish setting up' })).toBeNull()
    await expect(canvas.getByRole('heading', { level: 3, name: 'Nothing due' })).toBeVisible()
    await expect(canvas.getByText('0 open')).toBeVisible()
  },
}

/** A phone: one column, the tasks under the chart, the activity under the page. */
export const Narrow: Story = {
  decorators: box(390),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('figure', { name: 'Hours per day' })
    const tasks = canvas.getByRole('list', { name: 'Your tasks' })
    await waitFor(() => expect(tasks.getBoundingClientRect().top).toBeGreaterThan(chart.getBoundingClientRect().bottom))
    const page = canvas.getByRole('main')
    const activity = canvas.getByRole('complementary', { name: 'Recent activity' })
    await waitFor(() => expect(activity.getBoundingClientRect().top).toBeGreaterThanOrEqual(page.getBoundingClientRect().bottom))
  },
}
