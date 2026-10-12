import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { mediaRules } from '@/test/story-helpers'
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
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    items: {
      description: 'The trail, top level first. The last item is the current page, shown as text. `render` on an item replaces its `<a>`, e.g. with a router\'s link.',
      control: false,
      table: { type: { summary: '{ label: ReactNode; href?: string; render?: ReactElement }[]' } },
    },
    maxItems: {
      description: 'Collapse the middle beyond this many items (2 or more): the first item, "…", and the last `maxItems - 1`. "…" expands them in place.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    separator: {
      description: 'Drawn between items, hidden from screen readers.',
      control: 'text',
      table: { type: { summary: 'ReactNode' }, defaultValue: { summary: 'chevron-right icon' } },
    },
    size: {
      description: 'Text size: `body-sm` (`sm`) or `body` (`md`).',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    'aria-label': {
      description: 'Names the `<nav>` landmark. Change it when a page has two trails.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Breadcrumb'" } },
    },
  },
  excludeStories: ['anatomyParts'],
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

/** A second trail on the page gets its own landmark name. */
export const Named: Story = {
  tags: ['!dev'],
  args: { 'aria-label': 'Folder path' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('navigation', { name: 'Folder path' })).toBeVisible()
  },
}

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
    const ellipsis = canvas.getByRole('button', { name: 'Show 3 more' })
    await expect(ellipsis).toHaveFocus()
    // 44px on coarse pointers. The runner's pointer is fine, so read the rule the media query applies.
    await expect(mediaRules('pointer: coarse', ellipsis, '::before').find((r) => r.style.inlineSize)?.style.inlineSize).toBe('var(--target-coarse)')
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

const longTrail = [
  { label: 'Home', href: '#home' },
  { label: 'Workspaces', href: '#ws' },
  { label: 'Design', href: '#design' },
  { label: 'Projects', href: '#projects' },
  { label: 'Atlas', href: '#atlas' },
  { label: 'Settings' },
]
const narrow = { inlineSize: '18rem' }

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Link', selector: 'li:first-child > a', description: 'Each level above the current page. Muted, underlined on hover.' },
  { name: 'Separator', selector: 'li:first-child > [aria-hidden="true"]', description: 'A chevron, or any node. Decorative, hidden from screen readers.' },
  { name: 'Ellipsis', selector: 'li > button', description: 'With maxItems: a button standing in for the collapsed middle.' },
  { name: 'Current page', selector: '[aria-current="page"]', description: 'The last item. Text, not a link: foreground colour, medium weight.' },
]

/** Every part present: a trail collapsed so the ellipsis shows. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { items: longTrail.slice(1), maxItems: 4 },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[3]).toHaveTextContent('Settings')
  },
}

/** Guidelines, Do: a long trail in a narrow place collapses to one line. */
export const DoCollapseLongTrail: Story = {
  args: { items: longTrail, maxItems: 3 },
  render: (args) => (
    <div style={narrow}>
      <Breadcrumbs {...args} />
    </div>
  ),
}

/** Guidelines, Don't: the same trail left to wrap. */
export const DontWrapLongTrail: Story = {
  tags: ['!dev'],
  args: { items: longTrail },
  render: (args) => (
    <div style={narrow}>
      <Breadcrumbs {...args} />
    </div>
  ),
}

/** Specs, States: a short trail with an ellipsis, that fits a States cell. */
export const StatesExample: Story = {
  tags: ['!dev'],
  args: { items: longTrail, maxItems: 2 },
}
