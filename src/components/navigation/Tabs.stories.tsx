import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Tabs } from './Tabs'
import { mediaRules } from '@/test/story-helpers'

const panel = (text: string) => <p style={{ margin: 0 }}>{text}</p>

const meta = {
  title: 'Components/Navigation/Tabs',
  tags: ['beta'],
  component: Tabs,
  args: {
    'aria-label': 'Project',
    items: [
      { value: 'overview', label: 'Overview', content: panel('Atlas is a design system for the payments team.') },
      { value: 'activity', label: 'Activity', content: panel('12 changes this week.') },
      { value: 'billing', label: 'Billing', content: panel('Paid until 1 March.'), disabled: true },
      { value: 'settings', label: 'Settings', content: panel('Name, visibility and members.') },
    ],
    onValueChange: fn(),
  },
  argTypes: {
    appearance: { control: 'inline-radio', options: ['underline', 'pills'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    items: { control: false },
  },
  decorators: [(Story) => <div style={{ maxInlineSize: '36rem' }}>{Story()}</div>],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const overview = canvas.getByRole('tab', { name: 'Overview' })
    await expect(canvas.getByRole('tablist', { name: 'Project' })).toBeVisible()
    // The first enabled tab is selected by default, and labels its panel.
    await expect(overview).toHaveAttribute('aria-selected', 'true')
    const overviewPanel = await canvas.findByRole('tabpanel', { name: 'Overview' })
    await expect(overviewPanel).toHaveTextContent('design system')
    await expect(overview).toHaveAttribute('aria-controls', overviewPanel.id)
    // 32px tall at md.
    await expect(overview.getBoundingClientRect().height).toBe(32)
    // One tab stop: Tab enters on the selected tab, the next Tab leaves for the panel.
    await userEvent.tab()
    await expect(overview).toHaveFocus()
    await userEvent.tab()
    await expect(overviewPanel).toHaveFocus()
    await userEvent.tab({ shift: true })
    await expect(overview).toHaveFocus()
    await userEvent.click(canvas.getByRole('tab', { name: 'Activity' }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith('activity')
    // The panel swaps after the click; wait for it rather than race it.
    await waitFor(() => expect(canvas.getByRole('tabpanel')).toHaveTextContent('12 changes'))
    // Arrows move focus without selecting. A disabled tab still takes focus
    // (aria-disabled), so it is found and announced, but cannot be selected.
    await userEvent.keyboard('{ArrowRight}')
    const billing = canvas.getByRole('tab', { name: 'Billing' })
    await waitFor(() => expect(billing).toHaveFocus())
    await expect(billing).toHaveAttribute('aria-disabled', 'true')
    await userEvent.keyboard('{Enter}')
    await expect(billing).toHaveAttribute('aria-selected', 'false')
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(canvas.getByRole('tab', { name: 'Settings' })).toHaveFocus())
    await expect(canvas.getByRole('tab', { name: 'Settings' })).toHaveAttribute('aria-selected', 'false')
    await userEvent.keyboard('{Enter}')
    await waitFor(() => expect(canvas.getByRole('tab', { name: 'Settings' })).toHaveAttribute('aria-selected', 'true'))
    // Home and End jump to the ends.
    await userEvent.keyboard('{Home}')
    await waitFor(() => expect(overview).toHaveFocus())
    await userEvent.keyboard('{End}')
    await waitFor(() => expect(canvas.getByRole('tab', { name: 'Settings' })).toHaveFocus())
  },
}

export const Pills: Story = { args: { appearance: 'pills' } }

export const Small: Story = {
  args: { size: 'sm' },
  play: async ({ canvas }) => {
    const tab = canvas.getByRole('tab', { name: 'Overview' })
    await expect(tab.getBoundingClientRect().height).toBe(24)
    // 44px on coarse pointers. The runner's pointer is fine, so read the rule the media query applies.
    await expect(mediaRules('pointer: coarse', tab).find((r) => r.style.minBlockSize)?.style.minBlockSize).toBe('var(--target-coarse)')
  },
}

export const FullWidth: Story = { args: { isFullWidth: true, appearance: 'pills' } }

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('tablist')).toHaveAttribute('aria-orientation', 'vertical')
    await userEvent.click(canvas.getByRole('tab', { name: 'Overview' }))
    await userEvent.keyboard('{ArrowDown}')
    await waitFor(() => expect(canvas.getByRole('tab', { name: 'Activity' })).toHaveFocus())
    await userEvent.keyboard('{ArrowUp}')
    await waitFor(() => expect(canvas.getByRole('tab', { name: 'Overview' })).toHaveFocus())
  },
}

export const WithIcons: Story = {
  args: {
    items: [
      { value: 'files', label: 'Files', icon: <Icon name="menu" />, content: panel('214 files') },
      { value: 'search', label: 'Search', icon: <Icon name="search" />, content: panel('Search this project') },
      { value: 'starred', label: 'Starred', icon: <Icon name="star" />, content: panel('3 starred') },
    ],
  },
}

/** Select on focus: arrowing through the tabs switches panels as it goes. */
export const ActivateOnFocus: Story = {
  args: { activateOnFocus: true },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('tab', { name: 'Overview' }))
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(canvas.getByRole('tab', { name: 'Activity' })).toHaveAttribute('aria-selected', 'true'))
  },
}
