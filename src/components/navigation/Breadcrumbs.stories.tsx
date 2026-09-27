import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Breadcrumbs } from './Breadcrumbs'

const meta = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: {
    items: [
      { label: 'Home', href: '#home' },
      { label: 'Projects', href: '#projects' },
      { label: 'Atlas', href: '#atlas' },
      { label: 'Settings' },
    ],
  },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md'] }, items: { control: false } },
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Breadcrumb' })
    const items = within(nav).getAllByRole('listitem')
    await expect(items).toHaveLength(4)
    await expect(within(nav).getAllByRole('link')).toHaveLength(3)
    // The last item is the current page: marked, and not a link.
    await expect(within(nav).getByText('Settings')).toHaveAttribute('aria-current', 'page')
  },
}

export const Small: Story = { args: { size: 'sm' } }

export const CustomSeparator: Story = { args: { separator: '/' } }

/** Long trails collapse the middle; "…" expands it in place. */
export const Collapsed: Story = {
  args: {
    maxItems: 3,
    items: [
      { label: 'Home', href: '#home' },
      { label: 'Workspaces', href: '#ws' },
      { label: 'Design', href: '#design' },
      { label: 'Projects', href: '#projects' },
      { label: 'Atlas', href: '#atlas' },
      { label: 'Settings' },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('listitem')).toHaveLength(4)
    await expect(canvas.queryByRole('link', { name: 'Design' })).toBeNull()
    // Home, …, Atlas, Settings: three hidden.
    await userEvent.click(canvas.getByRole('button', { name: 'Show 3 more' }))
    await expect(canvas.getAllByRole('listitem')).toHaveLength(6)
    await expect(canvas.getByRole('link', { name: 'Design' })).toBeVisible()
    // Focus moves to the first revealed item instead of being dropped.
    await expect(canvas.getByRole('link', { name: 'Workspaces' })).toHaveFocus()
  },
}

/** A router's link keeps its own element. */
export const Render: Story = {
  args: {
    items: [
      { label: 'Home', render: <a href="/" data-router="true" /> },
      { label: 'Settings' },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Home' })).toHaveAttribute('data-router', 'true')
  },
}
