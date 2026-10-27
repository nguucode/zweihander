import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Badge } from '@/components/atomic-elements/Badge'
import { Tag } from '@/components/atomic-elements/Tag'
import { Link } from '@/components/navigation/Link'
import { Pagination } from '@/components/navigation/Pagination'
import type { MenuEntry } from '@/components/navigation/Menu'
import { StackedList, type StackedListItem } from './StackedList'

const people: StackedListItem[] = [
  { id: 1, media: <Avatar initials="IO" color="teal" />, title: 'Ines Okafor', description: 'ines.okafor@example.com', meta: 'Finance lead' },
  { id: 2, media: <Avatar initials="TL" color="violet" />, title: 'Tomas Lindqvist', description: 'tomas.lindqvist@example.com', meta: 'Controller' },
  { id: 3, media: <Avatar initials="NH" color="amber" />, title: 'Noor Haddad', description: 'noor.haddad@example.com', meta: 'Accountant' },
]

const projects: StackedListItem[] = [
  { id: 'harbor', media: <Icon name="file" />, title: 'Harbor Lights', status: <Tag size="sm" variant="success" text="Active" />, description: 'Ines Okafor', meta: 'Due Nov 14', href: '#harbor' },
  { id: 'ledger', media: <Icon name="file" />, title: 'Ledger migration', status: <Tag size="sm" variant="neutral" text="On hold" />, description: 'Tomas Lindqvist', meta: 'Due Dec 2', href: '#ledger' },
  { id: 'audit', media: <Icon name="file" />, title: 'Year-end audit', status: <Tag size="sm" variant="danger" text="Expired" />, description: 'Noor Haddad', meta: 'Due Oct 1', href: '#audit' },
]

const onDelete = fn()
const actions = (name: string): MenuEntry[] => [
  { label: 'Edit' },
  { label: 'Send message' },
  { type: 'separator' },
  { label: 'Remove', isDestructive: true, onSelect: () => onDelete(name) },
]

const meta = {
  title: 'Patterns/Application UI/Stacked List',
  tags: ['experimental'],
  component: StackedList,
  parameters: { layout: 'padded' },
  args: { items: people, 'aria-label': 'Team', role: 'region' },
  argTypes: {
    items: {
      description:
        'The rows, in the order shown. Each has a `title`, and may have `media` (an Avatar or an Icon), `description` (a line under the title), `status` (a Tag or Badge after it), `meta` (facts at the end), `href` (the row links, with a chevron), `onClick` (runs when it is followed), `actions` (Menu entries: a ⋯ button and a context menu) and `id`.',
      control: false,
    },
    footer: { description: 'After the last row, past a divider: a Pagination or a "View all" link. Rendered as given.', control: false },
    empty: { description: 'Shown instead of the list when there are no items.', control: 'text', table: { defaultValue: { summary: '"Nothing here yet."' } } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: 640 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StackedList>

export default meta
type Story = StoryObj<typeof meta>

/** People: an avatar, a name with an email under it, and a role at the end. */
export const Simple: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('region', { name: 'Team' })).toBeVisible()
    // An unordered list: the count is announced.
    await expect(canvas.getByRole('list').tagName).toBe('UL')
    const rows = canvas.getAllByRole('listitem')
    await expect(rows).toHaveLength(3)
    // Read in order: name, email, role.
    await expect(rows[1]).toHaveTextContent('Tomas Lindqvisttomas.lindqvist@example.comController')
    // The avatar says nothing the name does not.
    await expect(rows[0].querySelector(':scope > [aria-hidden="true"]')).not.toBeNull()
    // A line divides the rows, not the first from what is above.
    await expect(getComputedStyle(rows[0]).borderTopWidth).toBe('0px')
    await expect(getComputedStyle(rows[1]).borderTopWidth).toBe('1px')
    // The role sits at the end of the row, level with the name.
    await waitFor(() =>
      expect(canvas.getByText('Controller').getBoundingClientRect().left).toBeGreaterThan(
        canvas.getByText('Tomas Lindqvist').getBoundingClientRect().right,
      ),
    )
    // No link, no menu: nothing to tab to.
    await expect(canvas.queryByRole('link')).toBeNull()
    await expect(canvas.queryByRole('button')).toBeNull()
  },
}

/** Records that open: the title links to the record, the whole row is the target, and a chevron says so. A status Tag follows the title. */
export const Linked: Story = {
  args: { items: projects, 'aria-label': 'Projects' },
  play: async ({ canvas }) => {
    const rows = canvas.getAllByRole('listitem')
    const link = canvas.getByRole('link', { name: 'Harbor Lights' })
    await expect(link).toHaveAttribute('href', '#harbor')
    // The link's box covers the whole row.
    await expect(getComputedStyle(link, '::after').position).toBe('absolute')
    await expect(link.offsetParent).toBe(rows[0])
    // The status is read after the title, outside the link's name.
    await expect(rows[0]).toHaveTextContent(/^Harbor LightsActive/)
    // The chevron is decorative.
    await expect(rows[0].querySelector(':scope > svg')).toHaveAttribute('aria-hidden', 'true')
    // Keyboard: one stop per row.
    await userEvent.tab()
    await expect(link).toHaveFocus()
    await userEvent.tab()
    await expect(canvas.getByRole('link', { name: 'Ledger migration' })).toHaveFocus()
  },
}

/** A ⋯ Menu at the end of each row, named after the row; right click or long press on the row opens the same entries at the pointer. */
export const WithActions: Story = {
  args: { items: people.map((p) => ({ ...p, actions: actions(p.title as string) })) },
  decorators: [(Story) => <div style={{ minBlockSize: '20rem' }}>{Story()}</div>],
  play: async ({ canvas }) => {
    onDelete.mockClear()
    const body = within(document.body)
    const rows = canvas.getAllByRole('listitem')
    // The <li> is the context menu area itself: no wrapper inside the list.
    await expect(rows[0].parentElement?.tagName).toBe('UL')
    const button = canvas.getByRole('button', { name: 'Actions for Tomas Lindqvist' })
    await userEvent.click(button)
    await userEvent.click(await body.findByRole('menuitem', { name: 'Remove' }))
    await expect(onDelete).toHaveBeenCalledWith('Tomas Lindqvist')
    // Right click on the row opens the same entries.
    await userEvent.pointer({ keys: '[MouseRight]', target: rows[2] })
    await body.findByRole('menu')
    await userEvent.click(body.getByRole('menuitem', { name: 'Remove' }))
    await expect(onDelete).toHaveBeenLastCalledWith('Noor Haddad')
  },
}

/** A link and a menu in one row: the menu sits above the row's link, so it gets the click; an unread count rides along as a Badge. */
export const LinkedWithActions: Story = {
  args: {
    'aria-label': 'Projects',
    items: projects.map((p, i) => ({
      ...p,
      status: i === 0 ? <>{p.status}<Badge count={3} size="sm" aria-label="3 unread comments" /></> : p.status,
      actions: actions(p.title as string),
    })),
  },
  play: async ({ canvas }) => {
    const rows = canvas.getAllByRole('listitem')
    // A menu instead of the chevron.
    await expect(rows[0].querySelector(':scope > svg')).toBeNull()
    const button = canvas.getByRole('button', { name: 'Actions for Harbor Lights' })
    await waitFor(() => {
      const box = button.getBoundingClientRect()
      expect(document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2)?.closest('button')).toBe(button)
    })
    // A linked row keeps the browser's link menu: no context menu area on it.
    await expect(rows[0]).not.toHaveAttribute('data-popup-open')
    await userEvent.pointer({ keys: '[MouseRight]', target: rows[0] })
    await expect(within(document.body).queryByRole('menu')).toBeNull()
    await expect(canvas.getByRole('img', { name: '3 unread comments' })).toBeVisible()
    // Keyboard: the link, then its menu.
    await userEvent.tab()
    await expect(canvas.getByRole('link', { name: 'Harbor Lights' })).toHaveFocus()
    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}

function Paged() {
  const [page, setPage] = useState(1)
  const all = [...people, ...people, ...people].map((p, i) => ({ ...p, id: i, title: `${p.title} ${i + 1}` }))
  return (
    <StackedList
      role="region"
      aria-label="Team"
      items={all.slice((page - 1) * 3, page * 3)}
      footer={<Pagination totalItems={all.length} pageSize={3} page={page} onPageChange={setPage} size="sm" aria-label="Team pages" />}
    />
  )
}

/** A Pagination in the footer, for a long list on its own page. */
export const WithPagination: Story = {
  render: () => <Paged />,
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Team pages' })
    // The footer comes after the list, past a divider.
    const list = canvas.getAllByRole('list')[0]
    await expect(list.compareDocumentPosition(nav) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    await expect(getComputedStyle(nav.parentElement!).borderTopWidth).toBe('1px')
    await userEvent.click(within(nav).getByRole('button', { name: /2/ }))
    await expect(within(list).getAllByRole('listitem')[0]).toHaveTextContent('Ines Okafor 4')
  },
}

/** A "View all" link in the footer, for a short list in a card or on a dashboard. */
export const WithViewAll: Story = {
  args: { footer: <Link href="#team">View all</Link> },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'View all' })).toBeVisible()
  },
}

/** Nothing yet: a line in place of the list. The footer still shows. */
export const Empty: Story = {
  args: { items: [], empty: 'No one on the team yet.', footer: <Link href="#invite">Invite people</Link> },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.getByText('No one on the team yet.')).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Invite people' })).toBeVisible()
  },
}

/** Harsh content in a narrow column: the facts wrap under the text, and words with no spaces break rather than overflow. */
export const LongContent: Story = {
  args: {
    items: [
      {
        media: <Avatar initials="MW" />,
        title: 'Maximiliana Wolfeschlegelsteinhausenbergerdorff',
        status: <Tag size="sm" variant="neutral" text="Invited" />,
        description: 'maximiliana.wolfeschlegelsteinhausenbergerdorff@northern-region.example.com',
        meta: 'Senior accounts payable specialist',
        href: '#max',
        actions: actions('Maximiliana'),
      },
      ...people,
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
    const list = canvas.getByRole('region')
    await waitFor(() => expect(list.scrollWidth).toBeLessThanOrEqual(list.clientWidth))
    // The facts move under the text instead of squeezing it.
    await waitFor(() =>
      expect(canvas.getByText('Senior accounts payable specialist').getBoundingClientRect().top).toBeGreaterThanOrEqual(
        canvas.getByText(/maximiliana\.wolfe/).getBoundingClientRect().bottom,
      ),
    )
  },
}

/** Dark mode, with links and actions, so the accessibility check covers both themes. */
export const Dark: Story = {
  ...LinkedWithActions,
  globals: { theme: 'dark' },
}
