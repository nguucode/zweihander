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
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    items: {
      description: 'The tabs, in order. `content` is the panel shown while the tab is selected; a disabled tab can be focused but not selected.',
      control: false,
      table: { type: { summary: '{ value: string; label: ReactNode; content?: ReactNode; icon?: ReactNode; disabled?: boolean }[]' } },
    },
    value: {
      description: 'The selected tab, when you control it. Pair with `onValueChange`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'The tab selected first, when Tabs keeps its own state.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'first enabled tab' } },
    },
    onValueChange: {
      description: 'Called with the newly selected tab\'s `value`.',
      control: false,
      table: { type: { summary: '(value: string) => void' } },
    },
    appearance: {
      description: '`underline`: a line under the selected tab, for the sections of a page. `pills`: a filled segment, for switching views in a toolbar.',
      control: 'inline-radio',
      options: ['underline', 'pills'],
      table: { type: { summary: "'underline' | 'pills'" }, defaultValue: { summary: "'underline'" } },
    },
    size: {
      description: '24px (`sm`) or 32px (`md`) tabs, from the control tiers.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    orientation: {
      description: 'A row above the panel, or a column beside it. Arrow keys follow: Left and Right, or Up and Down.',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      table: { type: { summary: "'horizontal' | 'vertical'" }, defaultValue: { summary: "'horizontal'" } },
    },
    isFullWidth: {
      description: 'Tabs share the full width equally.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    activateOnFocus: {
      description: 'Select a tab as soon as it gets focus, rather than on Enter or Space. For light panels only.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    keepMounted: {
      description: 'Keep hidden panels in the DOM, e.g. to preserve a form\'s state.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    'aria-label': {
      description: 'Names the tab list when no heading on the page does.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    className: {
      description: 'Added to the root element.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
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

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Tab list', selector: '[role="tablist"]', description: 'The row (or column) of tabs. With underline, a 1px rule along its edge.' },
  { name: 'Icon', selector: '[role="tab"] > span[aria-hidden="true"]', description: 'Optional. Decorative, sized to the tab.' },
  { name: 'Selected tab', selector: '[role="tab"][aria-selected="true"]', description: 'Medium weight, in the selected colour.' },
  { name: 'Indicator', selector: '[role="tablist"] > span[role="presentation"]', description: 'Marks the selected tab and slides to the next one: a 2px bar (underline) or a lifted chip (pills).' },
  { name: 'Tab', selector: '[role="tab"][aria-selected="false"]', description: 'An unselected tab: icon and label, muted until hovered.' },
  { name: 'Panel', selector: '[role="tabpanel"]', description: 'The selected tab\'s content.' },
]

/** Every part present: tabs with icons, one selected, and its panel. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: WithIcons.args,
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    await waitFor(() => expect(canvasElement.querySelector(anatomyParts[3].selector)).not.toBeNull())
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[2]).toHaveTextContent('Files')
  },
}

/** Guidelines, Do: short labels, a word or two, that fit on one line. */
export const DoShortLabels: Story = {}

/** Guidelines, Don't: long labels push the tabs past the edge of their container. */
export const DontLongLabels: Story = {
  tags: ['!dev'],
  args: {
    items: [
      { value: 'overview', label: 'Overview of this project', content: panel('Atlas is a design system for the payments team.') },
      { value: 'activity', label: 'Recent activity and changes', content: panel('12 changes this week.') },
      { value: 'settings', label: 'Settings and members', content: panel('Name, visibility and members.') },
    ],
  },
}

const stateItems = [
  { value: 'list', label: 'List' },
  { value: 'board', label: 'Board' },
  { value: 'archive', label: 'Archive', disabled: true },
]

/** Specs, States: a small tab list, one disabled, that fits a States cell. */
export const StatesUnderline: Story = {
  tags: ['!dev'],
  args: { items: stateItems, 'aria-label': 'View' },
}

/** Specs, States: the same in pills. */
export const StatesPills: Story = {
  tags: ['!dev'],
  args: { items: stateItems, 'aria-label': 'View', appearance: 'pills' },
}
