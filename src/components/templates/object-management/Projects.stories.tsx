import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Projects } from './Projects'

/**
 * The page in a box of the given width: the shell lays out by its own width,
 * so this is the page at that viewport. Link clicks stay on the test page.
 */
const box = (inlineSize: number) => [
  (Story: () => ReactNode) => (
    <div
      style={{ inlineSize, blockSize: 720, border: '1px solid var(--border)' }}
      onClickCapture={(e) => (e.target as HTMLElement).closest('a[href]') && e.preventDefault()}
    >
      {Story()}
    </div>
  ),
]

const meta = {
  title: 'Templates/Object Management/Projects',
  tags: ['experimental'],
  component: Projects,
  parameters: { layout: 'fullscreen' },
  argTypes: { projects: { control: false } },
} satisfies Meta<typeof Projects>

export default meta
type Story = StoryObj<typeof meta>

const rowNames = (canvas: ReturnType<typeof within>) => canvas.getAllByRole('rowheader').map((c: HTMLElement) => c.textContent)
const body = () => within(document.body)

/** The whole page at the width of its frame: tabs, search, status filter, sort, selection and the activity of a row. */
export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Projects 16' })).toBeVisible()
    await expect(rowNames(canvas)).toHaveLength(16)

    // A tab is a saved filter, and its count is the rows it shows.
    await userEvent.click(canvas.getByRole('tab', { name: 'Risk 3' }))
    await expect(rowNames(canvas)).toEqual(['Saltmarsh Analytics', 'Lanternfish Search', 'Orchard Help Center'])
    await userEvent.click(canvas.getByRole('tab', { name: 'Archived 2' }))
    await expect(rowNames(canvas)).toEqual(['Foxglove Pricing', 'Tidewater Export'])
    await userEvent.click(canvas.getByRole('tab', { name: /^All/ }))

    // Search narrows the rows and every tab's count; it matches the PM too.
    const search = canvas.getByRole('searchbox', { name: 'Search projects' })
    await userEvent.type(search, 'priya')
    await expect(rowNames(canvas)).toEqual(['Ember Mobile'])
    await expect(canvas.getByRole('tab', { name: 'Archived 1' })).toBeVisible()
    await userEvent.clear(search)

    // The status filter. A radio menu stays open after a choice, so Escape closes it.
    const pickStatus = async (trigger: string, option: string) => {
      await userEvent.click(canvas.getByRole('button', { name: trigger }))
      await userEvent.click(await body().findByRole('menuitemradio', { name: option }))
      await userEvent.keyboard('{Escape}')
      await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    }
    await pickStatus('All statuses', 'Expired')
    await expect(rowNames(canvas)).toEqual(['Saltmarsh Analytics'])
    await pickStatus('Expired', 'All statuses')
    await expect(rowNames(canvas)).toHaveLength(16)

    // Sort by estimation, cheapest first, then the most expensive.
    const estimation = canvas.getByRole('button', { name: 'Estimation' })
    await userEvent.click(estimation)
    await expect(rowNames(canvas)[0]).toBe('Cobalt Audit Log')
    await userEvent.click(estimation)
    await expect(rowNames(canvas)[0]).toBe('Lanternfish Search')

    // A row opens to its activity: the status change with its note, the estimation change, the creation.
    const expand = canvas.getByRole('button', { name: 'Expand Harbor Lights' })
    await userEvent.click(expand)
    await expect(expand).toHaveAttribute('aria-expanded', 'true')
    const activity = canvas.getByRole('region', { name: 'Harbor Lights activity' })
    await expect(within(activity).getAllByRole('listitem')).toHaveLength(3)
    await expect(within(activity).getByText(/Budget approved/)).toBeVisible()
    await expect(within(activity).getByText(/created the project/)).toBeVisible()

    // Selected rows can be archived; they move to the Archived tab.
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select Harbor Lights' }))
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select Meridian SSO' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('2 selected')
    await userEvent.click(canvas.getByRole('button', { name: 'Archive' }))
    await expect(canvas.getByRole('tab', { name: 'Archived 4' })).toBeVisible()
    await expect(canvas.getByRole('heading', { level: 1, name: 'Projects 14' })).toBeVisible()
  },
}

/** Below 64rem the sidebar stays beside the page as the icon rail. */
export const Tablet: Story = {
  decorators: box(768),
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(nav.getBoundingClientRect().width).toBeLessThan(100)
    await expect(within(nav).getByRole('link', { name: /^Projects/ })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('table')).toBeVisible()
  },
}

/** On a phone the toolbar wraps, the tabs scroll sideways and the table scrolls inside its frame, not the page. */
export const Mobile: Story = {
  decorators: box(375),
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    await expect(main.scrollWidth).toBeLessThanOrEqual(main.clientWidth)
    const tabs = canvas.getByRole('tablist', { name: 'Project views' })
    await expect(tabs.scrollWidth).toBeGreaterThan(tabs.clientWidth)
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(within(nav).getByRole('link', { name: /^Projects/ })).toHaveAttribute('aria-current', 'page')
  },
}

/** Dark mode, with a row open, so the accessibility check covers the activity too. */
export const Dark: Story = {
  globals: { theme: 'dark' },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Expand Lanternfish Search' }))
    await expect(canvas.getByRole('region', { name: 'Lanternfish Search activity' })).toBeVisible()
  },
}
