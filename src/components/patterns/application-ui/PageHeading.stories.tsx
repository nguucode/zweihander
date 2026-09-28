import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Tag } from '@/components/atomic-elements/Tag'
import { Button } from '@/components/buttons/Button'
import { Menu } from '@/components/navigation/Menu'
import { Tabs } from '@/components/navigation/Tabs'
import { PageHeading } from './PageHeading'

const meta = {
  title: 'Patterns/Application UI/Page Heading',
  component: PageHeading,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' }, layout: 'padded' },
  args: { title: 'Projects' },
  argTypes: { breadcrumbs: { control: false }, meta: { control: false }, actions: { control: false }, tabs: { control: false } },
} satisfies Meta<typeof PageHeading>

export default meta
type Story = StoryObj<typeof meta>

/** Title, a line of context and the page's main actions. */
export const Simple: Story = {
  args: {
    title: 'Projects',
    description: 'Everything your team is working on, sorted by last activity.',
    actions: (
      <>
        <Button variant="secondary" appearance="outlined">
          Import
        </Button>
        <Button startIcon={<Icon name="plus" />}>New project</Button>
      </>
    ),
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Projects' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'New project' })).toBeVisible()
  },
}

/** A record's page: where it sits, its status and facts, and actions with an overflow menu. */
export const WithBreadcrumbsAndMeta: Story = {
  args: {
    title: 'Senior Product Designer',
    breadcrumbs: [
      { label: 'Jobs', href: '#jobs' },
      { label: 'Design', href: '#design' },
      { label: 'Senior Product Designer' },
    ],
    meta: [
      <Tag key="s" size="sm" variant="success" text="Open" />,
      <>
        <Icon name="user" />
        12 applicants
      </>,
      <>
        <Icon name="calendar" />
        Closes 30 October 2026
      </>,
    ],
    actions: (
      <>
        <Button variant="secondary" appearance="outlined">
          Edit
        </Button>
        <Button>Publish</Button>
        <Menu
          align="end"
          trigger={
            <Button variant="secondary" appearance="ghost" isIconOnly aria-label="More actions">
              <Icon name="more" />
            </Button>
          }
          items={[{ label: 'Duplicate' }, { label: 'Archive' }]}
        />
      </>
    ),
  },
  play: async ({ canvas }) => {
    const crumbs = canvas.getByRole('navigation', { name: 'Breadcrumb' })
    await expect(within(crumbs).getByText('Senior Product Designer')).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByText('12 applicants')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'More actions' }))
    const archive = await within(document.body).findByRole('menuitem', { name: 'Archive' })
    await waitFor(() => expect(archive).toBeVisible())
    await userEvent.keyboard('{Escape}')
  },
}

/** Sections of one page as tabs under the heading; the tab list's line is the heading's edge. */
export const WithTabs: Story = {
  args: {
    title: 'Atlas',
    description: 'Customer-facing analytics for the mobile app.',
    actions: <Button variant="secondary" appearance="outlined">Settings</Button>,
    tabs: (
      <Tabs
        aria-label="Project sections"
        items={[
          { value: 'overview', label: 'Overview', content: <p>Overview of Atlas.</p> },
          { value: 'activity', label: 'Activity', content: <p>Recent activity.</p> },
          { value: 'members', label: 'Members', content: <p>Twelve members.</p> },
        ]}
      />
    ),
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('tab', { name: 'Activity' }))
    await expect(canvas.getByRole('tabpanel', { name: 'Activity' })).toHaveTextContent('Recent activity.')
  },
}

/** On a phone the actions drop under the title instead of squeezing it. */
export const Narrow: Story = {
  ...Simple,
  decorators: [(Story) => <div style={{ inlineSize: 360 }}>{Story()}</div>],
  play: async ({ canvas }) => {
    const title = canvas.getByRole('heading', { level: 1 }).getBoundingClientRect()
    const action = canvas.getByRole('button', { name: 'New project' }).getBoundingClientRect()
    await expect(action.top).toBeGreaterThanOrEqual(title.bottom)
  },
}
