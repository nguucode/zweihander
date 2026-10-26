import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { ProjectDetail } from './ProjectDetail'
import { sampleProjects } from './projects-data'

/**
 * The page in a box of the given width: the shell lays out by its own width,
 * so this is the page at that viewport. Link clicks stay on the test page.
 */
const box = (inlineSize: number) => [
  (Story: () => ReactNode) => (
    <div
      style={{ inlineSize, blockSize: 760, border: '1px solid var(--border)' }}
      onClickCapture={(e) => (e.target as HTMLElement).closest('a[href]') && e.preventDefault()}
    >
      {Story()}
    </div>
  ),
]

const meta = {
  title: 'Templates/Object Management/Project Detail',
  tags: ['experimental'],
  component: ProjectDetail,
  parameters: { layout: 'fullscreen' },
  argTypes: { project: { control: false }, team: { control: false } },
} satisfies Meta<typeof ProjectDetail>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

/** The whole record: breadcrumb, header, the Overview and Team tabs, and the summary and activity beside the page. */
export const Default: Story = {
  decorators: box(1400),
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    await expect(within(main).getByRole('heading', { level: 1, name: 'Harbor Lights' })).toBeVisible()
    await expect(canvas.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const crumbs = canvas.getByRole('navigation', { name: 'Breadcrumb' })
    await expect(within(crumbs).getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    await expect(within(crumbs).getByText('Harbor Lights')).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('list', { name: 'Key facts' })).toHaveTextContent(/Ines Okafor.*Sep 1, 2026 to Nov 30, 2026.*5 people/)

    // The aside sits beside the page, after it in reading order.
    const aside = canvas.getByRole('complementary', { name: 'Project summary' })
    await waitFor(() => expect(aside.getBoundingClientRect().left).toBeGreaterThanOrEqual(main.getBoundingClientRect().right))
    await expect(main.compareDocumentPosition(aside) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    await expect(within(aside).getByRole('heading', { level: 2, name: 'Summary' })).toBeVisible()
    await expect(within(aside).getByRole('heading', { level: 2, name: 'Activity' })).toBeVisible()
    const activity = within(aside).getByRole('region', { name: 'Harbor Lights activity' })
    await expect(within(activity).getAllByRole('listitem')).toHaveLength(3)

    // Tabs switch the section in the main column.
    await expect(canvas.getByRole('heading', { level: 2, name: 'Details' })).toBeVisible()
    const tabs = canvas.getByRole('tablist', { name: 'Project sections' })
    await userEvent.click(within(tabs).getByRole('tab', { name: 'Team' }))
    const team = canvas.getByRole('table', { name: 'Team' })
    await expect(within(team).getAllByRole('rowheader')).toHaveLength(5)
  },
}

/** Edit opens a Drawer; saving updates the header and adds the changes to the activity. */
export const Edit: Story = {
  decorators: box(1400),
  play: async ({ canvas }) => {
    const edit = canvas.getByRole('button', { name: 'Edit' })
    await userEvent.click(edit)
    const dialog = await body().findByRole('dialog', { name: 'Edit project' })

    // An empty name is refused and the drawer stays open.
    const name = within(dialog).getByRole('textbox', { name: 'Name' })
    await userEvent.clear(name)
    await userEvent.click(within(dialog).getByRole('button', { name: 'Save' }))
    await expect(name).toHaveAttribute('aria-invalid', 'true')
    await expect(within(dialog).getByText('Enter a name.')).toBeVisible()

    await userEvent.type(name, 'Harbor Lights 2')
    await userEvent.click(within(dialog).getByRole('combobox', { name: 'Status' }))
    await userEvent.click(await body().findByRole('option', { name: 'On hold' }))
    await waitFor(() => expect(body().queryByRole('listbox')).toBeNull())
    const estimation = within(dialog).getByRole('textbox', { name: 'Estimation (USD)' })
    await userEvent.clear(estimation)
    await userEvent.type(estimation, '12000')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Save' }))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())

    await expect(canvas.getByRole('heading', { level: 1, name: 'Harbor Lights 2' })).toBeVisible()
    const activity = canvas.getByRole('region', { name: 'Harbor Lights 2 activity' })
    const events = within(activity).getAllByRole('listitem')
    await expect(events).toHaveLength(5)
    await expect(events[0]).toHaveTextContent(/Ines Okafor changed the estimation from \$9\.6K to \$12K/)
    await expect(events[1]).toHaveTextContent(/changed the status from Active to On hold/)

    // Cancel leaves the record as it was, and the next edit starts from it.
    await userEvent.click(edit)
    const again = await body().findByRole('dialog', { name: 'Edit project' })
    await userEvent.type(within(again).getByRole('textbox', { name: 'Name' }), ' draft')
    await userEvent.click(within(again).getByRole('button', { name: 'Cancel' }))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(canvas.getByRole('heading', { level: 1, name: 'Harbor Lights 2' })).toBeVisible()
    await waitFor(() => expect(edit).toHaveFocus())

    // Escape closes it too, and focus returns to Edit.
    await userEvent.click(edit)
    await body().findByRole('dialog', { name: 'Edit project' })
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await waitFor(() => expect(edit).toHaveFocus())
  },
}

/** Archive, from the actions menu, marks the record; Restore undoes it. */
export const Archive: Story = {
  decorators: box(1400),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'More actions' }))
    await userEvent.click(await body().findByRole('menuitem', { name: 'Archive' }))
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    await expect(canvas.getByText('Archived')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'More actions' }))
    await userEvent.click(await body().findByRole('menuitem', { name: 'Restore' }))
    await waitFor(() => expect(canvas.queryByText('Archived')).toBeNull())
  },
}

/** Under 80rem of shell width the aside follows the page and the two scroll as one. */
export const Stacked: Story = {
  decorators: box(1100),
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    const aside = canvas.getByRole('complementary', { name: 'Project summary' })
    await waitFor(() => expect(aside.getBoundingClientRect().top).toBeGreaterThanOrEqual(main.getBoundingClientRect().bottom))
  },
}

/** On a phone the actions drop under the name and nothing scrolls sideways. */
export const Mobile: Story = {
  decorators: box(375),
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    await expect(main.scrollWidth).toBeLessThanOrEqual(main.clientWidth)
    const title = canvas.getByRole('heading', { level: 1 })
    const edit = canvas.getByRole('button', { name: 'Edit' })
    await waitFor(() => expect(edit.getBoundingClientRect().top).toBeGreaterThan(title.getBoundingClientRect().bottom))
  },
}

/** Hard content: a name with no spaces, no PM, no dates, nobody on the team. */
export const Sparse: Story = {
  decorators: box(375),
  args: {
    project: {
      ...sampleProjects[2],
      name: 'NorthwindCustomerPortalReplatformingAndMigrationProgramme',
    },
    team: [],
  },
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    await expect(main.scrollWidth).toBeLessThanOrEqual(main.clientWidth)
    await expect(canvas.getByRole('list', { name: 'Key facts' })).toHaveTextContent(/Unassigned.*Not scheduled.*0 people/)
    await userEvent.click(canvas.getByRole('tab', { name: 'Team' }))
    await expect(canvas.getByRole('heading', { name: 'Nobody on this project yet' })).toBeVisible()
  },
}

/** Dark mode, with the Team tab open, so the accessibility check covers the table too. */
export const Dark: Story = {
  globals: { theme: 'dark' },
  decorators: box(1400),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('tab', { name: 'Team' }))
    await expect(canvas.getByRole('table', { name: 'Team' })).toBeVisible()
  },
}
