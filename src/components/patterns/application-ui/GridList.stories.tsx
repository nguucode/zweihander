import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Tag } from '@/components/atomic-elements/Tag'
import { Link } from '@/components/navigation/Link'
import type { MenuEntry } from '@/components/navigation/Menu'
import { GridList, type GridListItem } from './GridList'

const people: GridListItem[] = [
  { id: 1, media: <Avatar initials="IO" color="teal" />, title: 'Ines Okafor', description: 'Finance lead', meta: 'ines.okafor@example.com' },
  { id: 2, media: <Avatar initials="TL" color="violet" />, title: 'Tomas Lindqvist', description: 'Controller', meta: 'tomas.lindqvist@example.com' },
  { id: 3, media: <Avatar initials="NH" color="amber" />, title: 'Noor Haddad', description: 'Accountant', meta: 'noor.haddad@example.com' },
  { id: 4, media: <Avatar initials="KS" color="blue" />, title: 'Kenji Sato', description: 'Payroll', meta: 'kenji.sato@example.com' },
]

const projects: GridListItem[] = [
  { id: 'harbor', media: <Icon name="file" />, title: 'Harbor Lights', status: <Tag size="sm" variant="success" text="Active" />, description: 'Ines Okafor', meta: 'Due Nov 14', href: '#harbor' },
  { id: 'ledger', media: <Icon name="file" />, title: 'Ledger migration', status: <Tag size="sm" variant="neutral" text="On hold" />, description: 'Tomas Lindqvist', meta: 'Due Dec 2', href: '#ledger' },
  { id: 'audit', media: <Icon name="file" />, title: 'Year-end audit', status: <Tag size="sm" variant="danger" text="Expired" />, description: 'Noor Haddad', meta: 'Due Oct 1', href: '#audit' },
  { id: 'vat', media: <Icon name="file" />, title: 'VAT return Q3', status: <Tag size="sm" variant="success" text="Active" />, description: 'Kenji Sato', meta: 'Due Oct 31', href: '#vat' },
]

// A flat two-colour picture, so the story needs no network and the visual
// baseline stays stable.
const picture = (from: string, to: string) => (
  <img
    alt=""
    src={`data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"><rect width="16" height="9" fill="${from}"/><circle cx="12" cy="9" r="6" fill="${to}"/></svg>`,
    )}`}
  />
)

const files: GridListItem[] = [
  { id: 'q3', cover: picture('#d9e7f5', '#7aa6d6'), title: 'Q3-board-pack.pdf', description: '2.4 MB' },
  { id: 'logo', cover: picture('#f5e6d9', '#d69a7a'), title: 'logo-final.png', description: '312 KB' },
  { id: 'team', cover: picture('#e0f0e3', '#7ac08b'), title: 'team-offsite.jpg', description: '4.1 MB' },
]

const onDelete = fn()
const actions = (name: string): MenuEntry[] => [
  { label: 'Edit' },
  { label: 'Share' },
  { type: 'separator' },
  { label: 'Remove', isDestructive: true, onSelect: () => onDelete(name) },
]

const meta = {
  title: 'Patterns/Application UI/Grid List',
  tags: ['experimental'],
  component: GridList,
  parameters: { layout: 'padded' },
  args: { items: people, 'aria-label': 'Team', role: 'region' },
  argTypes: {
    items: {
      description:
        'The cards, in reading order. The same item as a Stacked List row: a `title`, and optionally `media` (an Avatar or an Icon), `description` (a line under the title), `status` (a Tag or Badge after it), `meta` (facts under the description), `href` (the card links), `onClick` (runs when it is followed), `actions` (Menu entries: a ⋯ button and a context menu) and `id`. Plus `cover`: a picture across the top of the card.',
      control: false,
    },
    footer: { description: 'After the grid: a Pagination or a "View all" link. Rendered as given.', control: false },
    empty: { description: 'Shown instead of the grid when there are no items.', control: 'text', table: { defaultValue: { summary: '"Nothing here yet."' } } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: 840 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GridList>

export default meta
type Story = StoryObj<typeof meta>

/** People: an avatar, a name with a role under it, and an email. As many columns as fit. */
export const Simple: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('region', { name: 'Team' })).toBeVisible()
    // An unordered list: the count is announced.
    const list = canvas.getByRole('list')
    await expect(list.tagName).toBe('UL')
    const cards = canvas.getAllByRole('listitem')
    await expect(cards).toHaveLength(4)
    // Read in order: name, role, email.
    await expect(cards[1]).toHaveTextContent('Tomas LindqvistControllertomas.lindqvist@example.com')
    // The avatar says nothing the name does not.
    await expect(cards[0].querySelector('[aria-hidden="true"]')).not.toBeNull()
    // Each card is its own panel.
    await expect(getComputedStyle(cards[0]).borderTopWidth).toBe('1px')
    // 840px fits three 16rem columns: the fourth card wraps to a new row.
    await waitFor(() => {
      const tops = cards.map((c) => Math.round(c.getBoundingClientRect().top))
      expect(tops[1]).toBe(tops[0])
      expect(tops[2]).toBe(tops[0])
      expect(tops[3]).toBeGreaterThan(tops[0])
    })
    // No link, no menu: nothing to tab to.
    await expect(canvas.queryByRole('link')).toBeNull()
    await expect(canvas.queryByRole('button')).toBeNull()
  },
}

/** Records that open: the title links to the record, the whole card is the target. A status Tag follows the title. */
export const Linked: Story = {
  args: { items: projects, 'aria-label': 'Projects' },
  play: async ({ canvas }) => {
    const cards = canvas.getAllByRole('listitem')
    const link = canvas.getByRole('link', { name: 'Harbor Lights' })
    await expect(link).toHaveAttribute('href', '#harbor')
    // The link's box covers the whole card.
    await expect(getComputedStyle(link, '::after').position).toBe('absolute')
    await expect(link.offsetParent).toBe(cards[0])
    // The status is read after the title, outside the link's name.
    await expect(cards[0]).toHaveTextContent(/^Harbor LightsActive/)
    // Keyboard: one stop per card, in reading order.
    await userEvent.tab()
    await expect(link).toHaveFocus()
    await userEvent.tab()
    await expect(canvas.getByRole('link', { name: 'Ledger migration' })).toHaveFocus()
  },
}

/** A ⋯ Menu in the corner of each card, named after it; right click or long press on the card opens the same entries at the pointer. */
export const WithActions: Story = {
  args: { items: people.map((p) => ({ ...p, actions: actions(p.title as string) })) },
  decorators: [(Story) => <div style={{ minBlockSize: '20rem' }}>{Story()}</div>],
  play: async ({ canvas }) => {
    onDelete.mockClear()
    const body = within(document.body)
    // The ⋯ button is the keyboard way in: each card is one tab stop.
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Actions for Ines Okafor' })).toHaveFocus()
    const cards = canvas.getAllByRole('listitem')
    // The <li> is the context menu area itself: no wrapper inside the list.
    await expect(cards[0].parentElement?.tagName).toBe('UL')
    await userEvent.click(canvas.getByRole('button', { name: 'Actions for Tomas Lindqvist' }))
    await userEvent.click(await body.findByRole('menuitem', { name: 'Remove' }))
    await expect(onDelete).toHaveBeenCalledWith('Tomas Lindqvist')
    // Right click on the card opens the same entries.
    await userEvent.pointer({ keys: '[MouseRight]', target: cards[2] })
    await body.findByRole('menu')
    await userEvent.click(body.getByRole('menuitem', { name: 'Remove' }))
    await expect(onDelete).toHaveBeenLastCalledWith('Noor Haddad')
  },
}

/** A link and a menu on one card: the menu sits above the card's link, so it gets the click. */
export const LinkedWithActions: Story = {
  args: { 'aria-label': 'Projects', items: projects.map((p) => ({ ...p, actions: actions(p.title as string) })) },
  play: async ({ canvas }) => {
    const cards = canvas.getAllByRole('listitem')
    const button = canvas.getByRole('button', { name: 'Actions for Harbor Lights' })
    await waitFor(() => {
      const box = button.getBoundingClientRect()
      expect(document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2)?.closest('button')).toBe(button)
    })
    // A linked card keeps the browser's link menu: no context menu area on it.
    await userEvent.pointer({ keys: '[MouseRight]', target: cards[0] })
    await expect(within(document.body).queryByRole('menu')).toBeNull()
    // Keyboard: the link, then its menu.
    await userEvent.tab()
    await expect(canvas.getByRole('link', { name: 'Harbor Lights' })).toHaveFocus()
    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}

/** Files and photos: `cover` puts a picture across the top of the card, edge to edge. */
export const WithCover: Story = {
  args: { 'aria-label': 'Files', items: files.map((f) => ({ ...f, actions: actions(f.title as string) })) },
  play: async ({ canvas }) => {
    const cards = canvas.getAllByRole('listitem')
    // The picture is decorative: the file name names the card.
    const img = cards[0].querySelector('img')!
    await expect(img).toHaveAttribute('alt', '')
    await expect(img.closest('[aria-hidden="true"]')).not.toBeNull()
    await expect(cards[0]).toHaveTextContent(/^Q3-board-pack\.pdf2\.4 MB$/)
    // Edge to edge: the cover is as wide as the card inside its border.
    await waitFor(() => expect(img.getBoundingClientRect().width).toBe(cards[0].clientWidth))
  },
}

/** A "View all" link after the grid, for a few cards on a dashboard. */
export const WithFooter: Story = {
  args: { items: projects.slice(0, 3), 'aria-label': 'Projects', footer: <Link href="#projects">View all</Link> },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: 'View all' })
    await expect(canvas.getByRole('list').compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  },
}

/** Nothing yet: a line in place of the grid. The footer still shows. */
export const Empty: Story = {
  args: { items: [], empty: 'No files yet.', footer: <Link href="#upload">Upload a file</Link> },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.getByText('No files yet.')).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Upload a file' })).toBeVisible()
  },
}

/** Harsh content in a narrow column: one card a row, and words with no spaces break rather than overflow. */
export const LongContent: Story = {
  args: {
    items: [
      {
        media: <Avatar initials="MW" />,
        title: 'Maximiliana Wolfeschlegelsteinhausenbergerdorff',
        status: <Tag size="sm" variant="neutral" text="Invited" />,
        description: 'Senior accounts payable specialist',
        meta: 'maximiliana.wolfeschlegelsteinhausenbergerdorff@northern-region.example.com',
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
    const region = canvas.getByRole('region')
    await waitFor(() => expect(region.scrollWidth).toBeLessThanOrEqual(region.clientWidth))
    // Narrower than one column: one card a row, full width.
    const cards = canvas.getAllByRole('listitem')
    await waitFor(() => expect(cards[1].getBoundingClientRect().top).toBeGreaterThan(cards[0].getBoundingClientRect().bottom))
    await expect(cards[0].getBoundingClientRect().width).toBe(region.getBoundingClientRect().width)
  },
}

/** Dark mode, with covers, links and actions, so the accessibility check covers both themes. */
export const Dark: Story = {
  args: { 'aria-label': 'Projects', items: projects.map((p, i) => ({ ...p, cover: i === 0 ? files[0].cover : undefined, actions: actions(p.title as string) })) },
  globals: { theme: 'dark' },
}
