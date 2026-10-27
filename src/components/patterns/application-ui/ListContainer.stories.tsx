import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Link } from '@/components/navigation/Link'
import { ListContainer, ListContainerItem } from './ListContainer'
import { StackedList } from './StackedList'

const rows = ['Payment run, October', 'Payment run, November', 'Payment run, December']
const onRemove = fn()
const items = rows.map((r) => <ListContainerItem key={r}>{r}</ListContainerItem>)

const meta = {
  title: 'Patterns/Application UI/List Container',
  tags: ['experimental'],
  component: ListContainer,
  parameters: { layout: 'padded' },
  args: { children: items, role: 'region', 'aria-label': 'Payment runs' },
  argTypes: {
    children: { description: 'The rows: one `ListContainerItem` (an `<li>`) each. What goes in a row is yours.', control: false },
    appearance: {
      description: '`flat`: rows divided by a line, no frame. `card`: the same inside a bordered panel. `separate`: each row its own panel, a gap instead of lines.',
      control: 'inline-radio',
      options: ['flat', 'card', 'separate'],
      table: { type: { summary: "'flat' | 'card' | 'separate'" }, defaultValue: { summary: "'flat'" } },
    },
    footer: { description: 'After the last row, past a divider: a Pagination or a "View all" link. Rendered as given.', control: false },
    empty: { description: 'Shown instead of the list when there are no rows.', control: 'text', table: { defaultValue: { summary: '"Nothing here yet."' } } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: 640 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListContainer>

export default meta
type Story = StoryObj<typeof meta>

/** Rows divided by a line, no frame: a list in a page section or a panel that already has an edge. */
export const Flat: Story = {
  play: async ({ canvas }) => {
    const region = canvas.getByRole('region', { name: 'Payment runs' })
    await expect(canvas.getByRole('list').tagName).toBe('UL')
    const li = canvas.getAllByRole('listitem')
    await expect(li).toHaveLength(3)
    // A line between rows, none above the first, no frame.
    await expect(getComputedStyle(li[0]).borderTopWidth).toBe('0px')
    await expect(getComputedStyle(li[1]).borderTopWidth).toBe('1px')
    await expect(getComputedStyle(region).borderTopWidth).toBe('0px')
  },
}

/** The same rows in a bordered panel, for a list that stands on its own on the page. */
export const Card: Story = {
  args: { appearance: 'card' },
  play: async ({ canvas }) => {
    const region = canvas.getByRole('region')
    await expect(getComputedStyle(region).borderTopWidth).toBe('1px')
    await expect(getComputedStyle(region).borderTopLeftRadius).not.toBe('0px')
    const li = canvas.getAllByRole('listitem')
    await expect(getComputedStyle(li[0]).borderTopWidth).toBe('0px')
    await expect(getComputedStyle(li[1]).borderTopWidth).toBe('1px')
  },
}

/** Each row its own panel, with a gap instead of lines: rows that read as separate objects. */
export const Separate: Story = {
  args: { appearance: 'separate', role: undefined, 'aria-label': undefined },
  play: async ({ canvas }) => {
    // No landmark of its own: the page names the region when it needs one.
    await expect(canvas.queryByRole('region')).toBeNull()
    await expect(canvas.getByRole('list').parentElement).not.toHaveAttribute('role')
    const li = canvas.getAllByRole('listitem')
    await expect(getComputedStyle(li[0]).borderTopWidth).toBe('1px')
    await expect(getComputedStyle(li[0]).borderTopLeftRadius).not.toBe('0px')
    await waitFor(() => expect(li[1].getBoundingClientRect().top).toBeGreaterThan(li[0].getBoundingClientRect().bottom))
  },
}

/** Stacked List renders through List Container, so it takes the same `appearance`, `footer` and `empty`. A row with actions keeps its context menu inside the frame. */
export const WithStackedList: Story = {
  args: { children: undefined, appearance: 'card' },
  decorators: [(Story) => <div style={{ minBlockSize: '16rem' }}>{Story()}</div>],
  render: (args) => (
    <StackedList
      {...args}
      aria-label="Team"
      items={[
        { id: 1, media: <Avatar initials="IO" color="teal" />, title: 'Ines Okafor', description: 'ines.okafor@example.com', meta: 'Finance lead', href: '#ines' },
        { id: 2, media: <Avatar initials="TL" color="violet" />, title: 'Tomas Lindqvist', description: 'tomas.lindqvist@example.com', meta: 'Controller', actions: [{ label: 'Remove', isDestructive: true, onSelect: onRemove }] },
      ]}
      footer={<Link href="#team">View all</Link>}
    />
  ),
  play: async ({ canvas }) => {
    const region = canvas.getByRole('region', { name: 'Team' })
    await expect(getComputedStyle(region).borderTopWidth).toBe('1px')
    // The footer sits inside the panel, past a divider.
    const footer = canvas.getByRole('link', { name: 'View all' }).parentElement!
    await expect(region.contains(footer)).toBe(true)
    await expect(getComputedStyle(footer).borderTopWidth).toBe('1px')
    // The row is still the context menu area, and still the list's own <li>.
    onRemove.mockClear()
    const row = canvas.getAllByRole('listitem')[1]
    await expect(row.parentElement?.tagName).toBe('UL')
    await userEvent.pointer({ keys: '[MouseRight]', target: row })
    await userEvent.click(await within(document.body).findByRole('menuitem', { name: 'Remove' }))
    await expect(onRemove).toHaveBeenCalled()
  },
}

/** Stacked List with separate panels: the linked row's target and focus ring stay inside each panel. */
export const SeparateStackedList: Story = {
  ...WithStackedList,
  args: { children: undefined, appearance: 'separate' },
  play: async ({ canvas }) => {
    const li = canvas.getAllByRole('listitem')
    const link = canvas.getByRole('link', { name: 'Ines Okafor' })
    await expect(link.offsetParent).toBe(li[0])
    await expect(getComputedStyle(li[0]).borderTopWidth).toBe('1px')
    await userEvent.tab()
    await expect(link).toHaveFocus()
  },
}

/** No rows: a line in the panel instead of the list. The footer still shows. */
export const Empty: Story = {
  args: { appearance: 'card', children: [], empty: 'No payment runs yet.', footer: <Link href="#new">Start a payment run</Link> },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.getByText('No payment runs yet.')).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Start a payment run' })).toBeVisible()
  },
}

/** A word with no spaces in a narrow column breaks rather than overflows. */
export const LongContent: Story = {
  args: {
    appearance: 'card',
    children: [
      <ListContainerItem key="long">maximiliana.wolfeschlegelsteinhausenbergerdorff@northern-region.example.com</ListContainerItem>,
      ...items,
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ inlineSize: 300 }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    const region = canvas.getByRole('region')
    await waitFor(() => expect(region.scrollWidth).toBeLessThanOrEqual(region.clientWidth))
  },
}

/** The three appearances one under the other, for the visual check. */
export const Appearances: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
      {(['flat', 'card', 'separate'] as const).map((a) => (
        <ListContainer key={a} {...args} appearance={a} aria-label={a} footer={<Link href="#all">View all</Link>} />
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('region')).toHaveLength(3)
  },
}

/** Dark mode, so the accessibility check covers both themes. */
export const Dark: Story = {
  ...Appearances,
  globals: { theme: 'dark' },
}
