import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy, Pictured } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { Menubar, type MenubarMenu, type MenubarProps } from './Menubar'
import menuStyles from './Menu.module.css'

const onUndo = fn()

const menus: MenubarMenu[] = [
  {
    label: 'File',
    items: [
      { label: 'New invoice', shortcut: '⌘ N' },
      { label: 'Open…', shortcut: '⌘ O' },
      {
        label: 'Export as',
        items: [{ label: 'PDF' }, { label: 'CSV' }, { label: 'Excel' }],
      },
      { type: 'separator' },
      { label: 'Print…', shortcut: '⌘ P' },
    ],
  },
  {
    label: 'Edit',
    items: [
      { label: 'Undo', shortcut: '⌘ Z', onSelect: onUndo },
      { label: 'Redo', shortcut: '⇧ ⌘ Z', disabled: true },
      { type: 'separator' },
      { label: 'Duplicate line', icon: <Icon name="plus" />, shortcut: '⌘ D' },
      { label: 'Delete line', icon: <Icon name="close" />, isDestructive: true },
    ],
  },
  {
    label: 'View',
    items: [
      {
        type: 'group',
        label: 'Show',
        items: [
          { type: 'checkbox', label: 'Tax column', defaultChecked: true },
          { type: 'checkbox', label: 'Notes' },
        ],
      },
      { type: 'separator' },
      {
        type: 'radio',
        label: 'Density',
        defaultValue: 'default',
        options: [
          { value: 'compact', label: 'Compact' },
          { value: 'default', label: 'Default' },
        ],
      },
    ],
  },
  {
    label: 'Help',
    items: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Keyboard shortcuts', href: '#shortcuts' },
    ],
  },
]

const meta = {
  title: 'Components/Navigation/Menubar',
  tags: ['experimental'],
  component: Menubar,
  args: { menus, 'aria-label': 'Invoice editor' },
  // Every prop is described here: these are the docs' API table and the
  // Playground's props panel.
  argTypes: {
    menus: {
      description:
        "The menus, left to right. Each is `{ label, items, disabled?, defaultOpen? }`; `items` takes the same entries as Menu's `items`: actions, links, submenus, checkbox and radio items, groups and separators.",
      control: false,
      table: { type: { summary: 'MenubarMenu[]' } },
    },
    'aria-label': {
      description: 'Names the bar, e.g. "Invoice editor". Needed when a page has more than one menubar.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    isModal: {
      description: 'While a flyout is open, locks page scroll and makes the rest of the page inert. `false` leaves the page scrollable and clickable.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    container: {
      description: 'Where the flyouts render instead of `<body>`, e.g. an element in fullscreen.',
      control: false,
      table: { type: { summary: 'HTMLElement | null' } },
    },
    className: {
      description: 'Added to the bar.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
  decorators: [(Story) => <div style={{ minBlockSize: '18rem' }}>{Story()}</div>],
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

const isScrollLocked = () =>
  [document.documentElement, document.body].some((el) => /hidden|clip/.test(getComputedStyle(el).overflowY))

export const Default: Story = {
  play: async ({ canvas }) => {
    onUndo.mockClear()
    const bar = canvas.getByRole('menubar', { name: 'Invoice editor' })
    const [file, edit, view] = within(bar).getAllByRole('menuitem')
    await expect(file).toHaveAttribute('aria-haspopup', 'menu')
    await expect(file).toHaveAttribute('aria-expanded', 'false')
    // One tab stop: Tab lands on the first menu, the arrows move along the bar.
    await userEvent.tab()
    await expect(file).toHaveFocus()
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(edit).toHaveFocus())
    // Arrow Down opens the flyout on its first item.
    await userEvent.keyboard('{ArrowDown}')
    const menu = await body().findByRole('menu')
    await expect(edit).toHaveAttribute('aria-expanded', 'true')
    // The shortcut is plain text, hidden from assistive tech: the label names the item.
    await expect(menu.querySelector('kbd')).toHaveAttribute('aria-hidden', 'true')
    await expect(within(menu).getByRole('menuitem', { name: 'Undo' })).toBeInTheDocument()
    await waitFor(() => expect(within(menu).getByRole('menuitem', { name: /Undo/ })).toHaveFocus())
    // Arrow Right from inside a flyout moves to the next menu, open.
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(view).toHaveAttribute('aria-expanded', 'true'))
    await userEvent.keyboard('{ArrowLeft}')
    await waitFor(() => expect(edit).toHaveAttribute('aria-expanded', 'true'))
    // Escape closes and returns focus to the menu's trigger.
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    await expect(edit).toHaveFocus()
    // Enter on an action runs it and closes the flyout.
    await userEvent.keyboard('{ArrowDown}')
    const again = await body().findByRole('menu')
    await waitFor(() => expect(within(again).getByRole('menuitem', { name: /Undo/ })).toHaveFocus())
    await userEvent.keyboard('{Enter}')
    await expect(onUndo).toHaveBeenCalledOnce()
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    // Enter and Space on a trigger open its flyout too.
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(view).toHaveFocus())
    for (const key of ['{Enter}', ' ']) {
      await userEvent.keyboard(key)
      await waitFor(() => expect(view).toHaveAttribute('aria-expanded', 'true'))
      await userEvent.keyboard('{Escape}')
      await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    }
  },
}

/** Modal by default: page scroll is locked while a flyout is open. Triggers are one sm tier tall. */
export const Modal: Story = {
  play: async ({ canvas }) => {
    const edit = canvas.getByRole('menuitem', { name: 'Edit' })
    const probe = document.createElement('div')
    probe.style.blockSize = 'var(--control-sm)'
    document.body.append(probe)
    await waitFor(() => expect(edit.getBoundingClientRect().height).toBe(probe.getBoundingClientRect().height))
    probe.remove()
    await userEvent.click(edit)
    const menu = await body().findByRole('menu')
    // The icon is decorative.
    await expect(within(menu).getByRole('menuitem', { name: /Duplicate line/ }).querySelector(':scope > span:first-child')).toHaveAttribute('aria-hidden', 'true')
    await waitFor(() => expect(isScrollLocked()).toBe(true))
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    await waitFor(() => expect(isScrollLocked()).toBe(false))
  },
}

/** With one flyout open, moving the pointer to another menu opens that one instead. */
export const HoverSwitches: Story = {
  args: { isModal: false },
  play: async ({ canvas }) => {
    const bar = canvas.getByRole('menubar')
    const [file, edit] = within(bar).getAllByRole('menuitem')
    await userEvent.click(file)
    await body().findByRole('menu')
    await expect(file).toHaveAttribute('aria-expanded', 'true')
    await expect(isScrollLocked()).toBe(false)
    await userEvent.hover(edit)
    await waitFor(() => expect(edit).toHaveAttribute('aria-expanded', 'true'))
    await expect(file).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() => expect(body().getAllByRole('menu')).toHaveLength(1))
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
  },
}

/** A menu that does not apply right now stays in place, muted, and the arrows skip it. */
export const DisabledMenu: Story = {
  args: {
    menus: [menus[0], { ...menus[1], disabled: true }, menus[2]],
  },
  play: async ({ canvas }) => {
    const [file, edit, view] = within(canvas.getByRole('menubar')).getAllByRole('menuitem')
    await expect(edit).toHaveAttribute('aria-disabled', 'true')
    await userEvent.tab()
    await expect(file).toHaveFocus()
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(view).toHaveFocus())
  },
}

/** The bar with a flyout open in place, as a picture, and not modal: it must not lock the docs page. */
const picture = (args: MenubarProps) => (
  <Pictured positioner={menuStyles.positioner} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-1)' }}>
    {(container) => <Menubar {...args} isModal={false} container={container} />}
  </Pictured>
)

const editOpen = [menus[0], { ...menus[1], defaultOpen: true }, menus[2], menus[3]]

/** The Edit menu open, for the docs and the visual baseline. */
export const Open: Story = {
  tags: ['!dev'],
  args: { menus: editOpen },
  render: picture,
  play: async ({ canvas }) => {
    const menu = await canvas.findByRole('menu', { hidden: true })
    await expect(within(menu).getAllByRole('menuitem', { hidden: true })).toHaveLength(4)
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Bar', selector: '[role="menubar"]', description: 'The row of menus. One tab stop: the arrows move along it.' },
  { name: 'Menu trigger', selector: '[role="menubar"] > [aria-expanded="true"]', description: 'A top-level item: File, Edit, View. Highlighted while its flyout is open.' },
  { name: 'Flyout', selector: '[role="menu"]', description: "A Menu popup, with all of Menu's entries." },
  { name: 'Group label', selector: '[role="group"] > div:first-child', description: 'Optional. Names a group of items.' },
  { name: 'Item', selector: '[role="menu"] [role="menuitemcheckbox"]', description: 'An entry, here a checkbox item. Flyouts take every Menu entry: actions, links, submenus, checkbox and radio items.' },
  { name: 'Separator', selector: '[role="menu"] [role="separator"]', description: 'A rule between groups of items.' },
]

/** Every part present, the View menu open in place. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { menus: [menus[0], menus[1], { ...menus[2], defaultOpen: true }, menus[3]] },
  render: picture,
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[1]).toHaveTextContent('View')
    await expect(found[3]).toHaveTextContent('Show')
  },
}

/** Guidelines, Do: menus named for what they hold, in the order desktop apps use. */
export const DoConventionalOrder: Story = {
  tags: ['!dev'],
  args: { menus: editOpen },
  render: picture,
}

/** Guidelines, Don't: a menubar used as site navigation, every flyout a list of pages. */
export const DontNavigation: Story = {
  tags: ['!dev'],
  args: {
    menus: [
      { label: 'Sales', defaultOpen: true, items: [{ label: 'Invoices', href: '#invoices' }, { label: 'Quotes', href: '#quotes' }, { label: 'Customers', href: '#customers' }] },
      { label: 'Purchases', items: [{ label: 'Bills', href: '#bills' }] },
      { label: 'Reports', items: [{ label: 'Profit and loss', href: '#pl' }] },
    ],
  },
  render: picture,
}
