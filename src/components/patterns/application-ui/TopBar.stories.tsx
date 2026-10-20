import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Search } from '@/components/inputs/Search'
import { TopBar, TopBarNav } from './TopBar'

const end = (
  <>
    <Button variant="secondary" appearance="ghost" isIconOnly aria-label="Notifications">
      <Icon name="info" />
    </Button>
    <Button variant="secondary" appearance="ghost" isIconOnly aria-label="Account">
      <Avatar initials="AS" size="sm" />
    </Button>
  </>
)

const links = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
]

const meta = {
  title: 'Patterns/Application UI/Top Bar',
  tags: ['experimental'],
  component: TopBar,
  parameters: { layout: 'fullscreen' },
  // The bar's queries read its container, which in an app is the App Shell.
  decorators: [(Story) => <div style={{ containerType: 'inline-size' }}>{Story()}</div>],
  argTypes: {
    start: { description: 'Breadcrumbs, or TopBarNav links.', control: false },
    end: { description: 'Search, notifications, the account menu.', control: false },
    children: { description: 'The middle, e.g. a wide search field.', control: false },
  },
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

/** Search in the middle, notifications and the account at the end. */
export const Default: Story = {
  args: { children: <Search aria-label="Search" placeholder="Search" />, end },
  play: async ({ canvasElement }) => {
    const bar = canvasElement.querySelector('header')!
    await expect(within(bar).getByRole('searchbox', { name: 'Search' })).toBeVisible()
    // Outside an App Shell there is no drawer, so no menu button.
    await expect(within(bar).queryByRole('button', { name: /navigation/ })).toBeNull()
  },
}

/** TopBarNav links across the bar: a top-navigation app. */
export const WithNavigation: Story = {
  args: { start: <TopBarNav items={links} currentHref="#projects" />, end },
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Main' })
    await expect(within(nav).getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'page')
  },
}
