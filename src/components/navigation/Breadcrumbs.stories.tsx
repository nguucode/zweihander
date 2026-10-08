import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Breadcrumbs } from './Breadcrumbs'

const meta = {
  title: 'Components/Navigation/Breadcrumbs',
  tags: ['beta'],
  component: Breadcrumbs,
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
    // An ordered list, so screen readers announce the count and each position.
    await expect(within(nav).getByRole('list').tagName).toBe('OL')
    const items = within(nav).getAllByRole('listitem')
    await expect(items).toHaveLength(4)
    await expect(within(nav).getAllByRole('link')).toHaveLength(3)
    // The last item is the current page: marked, and not a link.
    await expect(within(nav).getByText('Settings')).toHaveAttribute('aria-current', 'page')
  },
}

export const Small: Story = { args: { size: 'sm' } }

export const CustomSeparator: Story = {
  args: { separator: '/' },
  play: async ({ canvas }) => {
    // Separators are hidden from screen readers, so they are not read between items.
    const separators = canvas.getAllByText('/')
    await expect(separators).toHaveLength(3)
    for (const separator of separators) await expect(separator).toHaveAttribute('aria-hidden', 'true')
  },
}

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
    // Home, …, Atlas, Settings: three hidden. Reach "…" from the keyboard and press it.
    await userEvent.tab()
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Show 3 more' })).toHaveFocus()
    await userEvent.keyboard('{Enter}')
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
