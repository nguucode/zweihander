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

/** The whole page at the width of its frame: views, search, sort across pages, the activity of a row and a bulk archive. */
export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Projects 16' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Add project' })).toBeVisible()
    // Sixteen open projects, ten to a page.
    await expect(rowNames(canvas)).toHaveLength(10)
    await expect(canvas.getByRole('navigation', { name: 'Project pages' })).toHaveTextContent('1–10 of 16')
    await userEvent.click(canvas.getByRole('button', { name: 'Page 2' }))
    await expect(rowNames(canvas)).toHaveLength(6)

    // A view is a saved filter, and its count is the rows it shows.
    await userEvent.click(canvas.getByRole('tab', { name: 'Risk 3' }))
    await expect(rowNames(canvas)).toEqual(['Saltmarsh Analytics', 'Lanternfish Search', 'Orchard Help Center'])
    await expect(canvas.getByRole('table', { name: 'Risk projects' })).toBeVisible()
    await userEvent.click(canvas.getByRole('tab', { name: 'Archived 2' }))
    await expect(rowNames(canvas)).toEqual(['Foxglove Pricing', 'Tidewater Export'])
    await userEvent.click(canvas.getByRole('tab', { name: /^All/ }))

    // Search narrows the rows and every view's count; it matches the PM too.
    const search = canvas.getByRole('searchbox', { name: 'Search projects' })
    await userEvent.type(search, 'priya')
    await expect(rowNames(canvas)).toEqual(['Ember Mobile'])
    await expect(canvas.getByRole('tab', { name: 'Archived 1' })).toBeVisible()
    await userEvent.clear(search)

    // The sort covers every page: the cheapest project was on page 2.
    const estimation = canvas.getByRole('button', { name: 'Estimation' })
    await userEvent.click(estimation)
    await expect(rowNames(canvas)[0]).toBe('Cobalt Audit Log')
    await userEvent.click(estimation)
    await expect(rowNames(canvas)[0]).toBe('Lanternfish Search')
    // A sort changes the view: it can be saved, or dropped.
    await expect(canvas.getByText('Modified')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Discard' }))
    await expect(rowNames(canvas)[0]).toBe('Harbor Lights')

    // A row opens to its activity: the status change with its note, the estimation change, the creation.
    const expand = canvas.getByRole('button', { name: 'Expand Harbor Lights' })
    await userEvent.click(expand)
    await expect(expand).toHaveAttribute('aria-expanded', 'true')
    const activity = canvas.getByRole('region', { name: 'Harbor Lights activity' })
    await expect(within(activity).getAllByRole('listitem')).toHaveLength(3)
    await expect(within(activity).getByText(/Budget approved/)).toBeVisible()

    // Selected rows can be archived; they move to the Archived view.
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select Harbor Lights' }))
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select Copperleaf CRM' }))
    await expect(canvas.getByText('2 selected')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Archive' }))
    await expect(canvas.getByRole('tab', { name: 'Archived 4' })).toBeVisible()
    await expect(canvas.getByRole('heading', { level: 1, name: 'Projects 14' })).toBeVisible()
  },
}

/** A filter shows as a chip and marks the view modified; Save as new view keeps it as a view of its own. */
export const FilterAndSaveView: Story = {
  play: async ({ canvas }) => {
    // A checkbox menu stays open after a choice, so Escape closes it.
    await userEvent.click(canvas.getByRole('button', { name: 'Status' }))
    await userEvent.click(await body().findByRole('menuitemcheckbox', { name: 'Expired' }))
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    await expect(rowNames(canvas)).toEqual(['Saltmarsh Analytics'])
    const chips = canvas.getByRole('list', { name: 'Applied filters' })
    await expect(within(chips).getByText('Status: Expired')).toBeVisible()
    await expect(canvas.getByText('Modified')).toBeVisible()

    // All is predefined: no Save, only Save as new view.
    await expect(canvas.queryByRole('button', { name: 'Save' })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Save as new view' }))
    await userEvent.type(await body().findByRole('textbox', { name: /View name/ }), 'Expired')
    await userEvent.click(body().getByRole('button', { name: 'Save view' }))
    await expect(await canvas.findByRole('tab', { name: 'Expired 1' })).toHaveAttribute('aria-selected', 'true')
    await expect(canvas.queryByText('Modified')).toBeNull()

    // Back to All: the filter goes with the view.
    await userEvent.click(canvas.getByRole('tab', { name: /^All/ }))
    await expect(canvas.queryByRole('list', { name: 'Applied filters' })).toBeNull()
    await expect(rowNames(canvas)).toHaveLength(10)
  },
}

/** The same projects as a chart of their estimation by status, under the same views and filters. */
export const Chart: Story = {
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('tab', { name: 'Chart' }))
    await expect(await canvas.findByRole('img', { name: /Estimation by status/ })).toBeVisible()
    await userEvent.click(canvas.getByRole('tab', { name: 'Risk 3' }))
    await expect(canvas.getByText('3 projects')).toBeVisible()
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

/** On a phone the toolbar wraps, the views scroll sideways and the table scrolls inside its frame, not the page. */
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
