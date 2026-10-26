import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { VerticalNav, type VerticalNavEntry } from './VerticalNav'

const withIcons: VerticalNavEntry[] = [
  { label: 'Profile', href: '#profile', icon: <Icon name="user" /> },
  { label: 'Notifications', href: '#notifications', icon: <Icon name="notifications" /> },
  { label: 'Members', href: '#members', icon: <Icon name="user" />, badge: 12 },
  { label: 'Billing', href: '#billing', icon: <Icon name="file" /> },
  { label: 'Fiscal calendar', href: '#calendar', icon: <Icon name="calendar" /> },
  { label: 'Help', href: '#help', icon: <Icon name="help" /> },
]

const grouped: VerticalNavEntry[] = [
  { label: 'Overview', href: '#overview' },
  {
    type: 'group',
    label: 'Account',
    items: [
      { label: 'Profile', href: '#profile' },
      { label: 'Password', href: '#password' },
      { label: 'Notifications', href: '#notifications' },
    ],
  },
  {
    type: 'group',
    label: 'Workspace',
    items: [
      { label: 'General', href: '#general' },
      { label: 'Members', href: '#members', badge: 12 },
      { label: 'Billing', href: '#billing' },
      { label: 'Integrations', href: '#integrations', badge: 3 },
    ],
  },
]

const meta = {
  title: 'Patterns/Application UI/Vertical Nav',
  tags: ['experimental'],
  component: VerticalNav,
  parameters: { layout: 'padded' },
  args: { 'aria-label': 'Settings', items: withIcons, currentHref: '#members' },
  argTypes: {
    items: {
      description:
        'The links, in order: `{ label, href?, icon?, badge?, render? }`; `badge` is a count. A `{ type: "group", label, items }` entry is a named list. `render` replaces the `<a>`, e.g. a router\'s `<Link />`.',
      control: false,
    },
    currentHref: {
      description: 'The href of the section on screen: that item gets `aria-current="page"` and the selected fill.',
      control: 'text',
    },
    'aria-label': {
      description: 'The nav landmark\'s name, e.g. "Settings". Required: the app\'s own nav is already a navigation landmark.',
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div data-testid="column" style={{ inlineSize: 240 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof VerticalNav>

export default meta
type Story = StoryObj<typeof meta>

/** Icons, a count, and the current section. */
export const WithIcons: Story = {
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Settings' })
    // One current item, and the count joins its name with a comma.
    const current = within(nav).getByRole('link', { current: 'page' })
    await expect(current).toHaveAccessibleName('Members, 12')
    await expect(within(nav).getAllByRole('link').filter((l) => l.getAttribute('aria-current'))).toHaveLength(1)
    // Icons are decorative.
    const profile = within(nav).getByRole('link', { name: 'Profile' })
    await expect(profile.querySelector(':scope > [aria-hidden="true"] > svg')).not.toBeNull()
    // Current is not shown by color alone: it is also medium weight.
    await expect(getComputedStyle(current).fontWeight).toBe('500')
    await expect(getComputedStyle(profile).fontWeight).toBe('400')
    // Tab goes down the list in order.
    await userEvent.tab()
    await expect(within(nav).getByRole('link', { name: 'Profile' })).toHaveFocus()
    await userEvent.tab()
    await expect(within(nav).getByRole('link', { name: 'Notifications' })).toHaveFocus()
  },
}

/** Named groups, with an ungrouped item first. A group label names its list; it is not a heading. */
export const Grouped: Story = {
  args: { items: grouped, currentHref: '#profile' },
  play: async ({ canvas }) => {
    const workspace = canvas.getByRole('list', { name: 'Workspace' })
    await expect(within(workspace).getAllByRole('listitem')).toHaveLength(4)
    await expect(within(workspace).getByRole('link', { name: 'Integrations, 3' })).toBeVisible()
    await expect(canvas.getByRole('list', { name: 'Account' })).toBeVisible()
    await expect(canvas.queryByRole('heading')).toBeNull()
    await expect(canvas.getByRole('link', { current: 'page' })).toHaveAccessibleName('Profile')
  },
}

/** A long label wraps inside a narrow column instead of being cut off or overflowing. */
export const LongLabels: Story = {
  args: {
    items: [
      { label: 'Profile', href: '#profile', icon: <Icon name="user" /> },
      {
        label: 'Intercompanyreconciliationandeliminationrules',
        href: '#rules',
        icon: <Icon name="file" />,
        badge: 128,
      },
      { label: 'Approval workflows for purchase orders over the limit', href: '#approvals', icon: <Icon name="check" /> },
    ],
    currentHref: '#rules',
  },
  decorators: [
    (Story) => (
      <div data-testid="narrow" style={{ inlineSize: 180 }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    const column = canvas.getByTestId('narrow')
    await waitFor(async () => {
      for (const link of canvas.getAllByRole('link')) {
        await expect(link.getBoundingClientRect().right).toBeLessThanOrEqual(column.getBoundingClientRect().right + 0.5)
        await expect(link.scrollWidth).toBeLessThanOrEqual(link.clientWidth)
      }
      // Wrapped to more than one line, not truncated.
      const short = canvas.getByRole('link', { name: 'Profile' }).getBoundingClientRect()
      const long = canvas.getByRole('link', { current: 'page' }).getBoundingClientRect()
      await expect(long.height).toBeGreaterThan(short.height)
    })
  },
}

/** No items: the landmark stays, with nothing in it to tab to. */
export const Empty: Story = {
  args: { items: [], currentHref: undefined },
  tags: ['!dev'],
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('navigation', { name: 'Settings' })).toBeInTheDocument()
    await expect(canvas.queryByRole('link')).toBeNull()
  },
}
