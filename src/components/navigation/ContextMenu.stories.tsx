import { cloneElement, type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy, Pictured } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { Button } from '../buttons/Button'
import { ContextMenu, type ContextMenuProps } from './ContextMenu'
import styles from './ContextMenu.module.css'
import { Menu, type MenuEntry } from './Menu'
import menuStyles from './Menu.module.css'

const onOpenInvoice = fn()
const onDelete = fn()

const items: MenuEntry[] = [
  { label: 'Open', onSelect: onOpenInvoice },
  { label: 'Duplicate', icon: <Icon name="plus" />, shortcut: '⌘ D' },
  { label: 'Mark as paid', disabled: true },
  { type: 'separator' },
  { label: 'Delete', icon: <Icon name="close" />, isDestructive: true, onSelect: onDelete },
]

/** A focusable stand-in for a row, a card or a canvas object. */
const area = (label = 'INV-1042 · Acme Ltd · $1,200.00') => (
  <div
    tabIndex={0}
    style={{
      display: 'flex',
      alignItems: 'center',
      minBlockSize: 'var(--row-height)',
      paddingInline: 'var(--space-3)',
      border: '1px dashed var(--border)',
      borderRadius: 'var(--radius-field)',
      color: 'var(--foreground)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
    }}
  >
    {label}
  </div>
)

const meta = {
  title: 'Components/Navigation/Context Menu',
  tags: ['experimental'],
  component: ContextMenu,
  args: { items, children: area() },
  // Every prop is described here: these are the docs' API table and the
  // Playground's props panel.
  argTypes: {
    children: {
      description:
        'The area that opens the menu on right click or long press: one element, such as a `<tr>`, an `<li>` or a card. Its props are merged rather than wrapped, so table and list markup stays valid. Make it, or a control inside it, focusable so Shift+F10 reaches it.',
      control: false,
      table: { type: { summary: 'ReactElement' } },
    },
    items: {
      description: "The entries, the same data as Menu's `items`: actions, links, submenus, checkbox and radio items, groups and separators.",
      control: false,
      table: { type: { summary: 'MenuEntry[]' } },
    },
    disabled: {
      description: "Leaves the browser's own menu in place, for an area with nothing to act on right now.",
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    open: {
      description: 'Controlled open state. Pair with `onOpenChange`.',
      control: false,
      table: { type: { summary: 'boolean' } },
    },
    defaultOpen: {
      description: 'Open on first render, uncontrolled. With no pointer to open at, the popup sits at the corner of the page: for pictures, not for pages.',
      control: false,
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      description: 'Called when the menu opens or closes: a right click, Escape, a click outside, or choosing an action.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    container: {
      description: 'Where the popup renders instead of `<body>`, e.g. an element in fullscreen.',
      control: false,
      table: { type: { summary: 'HTMLElement | null' } },
    },
    className: {
      description: 'Added to the popup, as in Menu.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
  decorators: [(Story) => <div style={{ minBlockSize: '16rem', maxInlineSize: '28rem' }}>{Story()}</div>],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

const isScrollLocked = () =>
  [document.documentElement, document.body].some((el) => /hidden|clip/.test(getComputedStyle(el).overflowY))

export const Default: Story = {
  play: async ({ canvas }) => {
    onOpenInvoice.mockClear()
    const target = canvas.getByText(/INV-1042/)
    // Right click opens the menu at the pointer and marks the area it acts on.
    await userEvent.pointer({ keys: '[MouseRight]', target })
    const menu = await body().findByRole('menu')
    await expect(target).toHaveAttribute('data-popup-open')
    await expect(getComputedStyle(target).outlineStyle).toBe('solid')
    // Modal by default, like the operating system's menus.
    await waitFor(() => expect(isScrollLocked()).toBe(true))
    // The keys inside are Menu's: the arrows move, Enter runs the action and closes.
    await userEvent.keyboard('{ArrowDown}')
    await waitFor(() => expect(within(menu).getByRole('menuitem', { name: 'Open' })).toHaveFocus())
    await userEvent.keyboard('{Enter}')
    await expect(onOpenInvoice).toHaveBeenCalledOnce()
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    await expect(target).not.toHaveAttribute('data-popup-open')
  },
}

/** Shift+F10 and the Menu key: the browser fires `contextmenu` on the focused element, which opens the menu. Escape closes it and focus goes back. */
export const Keyboard: Story = {
  play: async ({ canvas }) => {
    const target = canvas.getByText(/INV-1042/)
    await userEvent.tab()
    await expect(target).toHaveFocus()
    // What the browser sends for Shift+F10; user-event cannot press it for real.
    const allowed = fireEvent.contextMenu(target)
    await expect(allowed).toBe(false)
    await body().findByRole('menu')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    await waitFor(() => expect(target).toHaveFocus())
  },
}

/** Nothing to act on: the browser's own menu shows instead. */
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    const target = canvas.getByText(/INV-1042/)
    const allowed = fireEvent.contextMenu(target)
    await expect(allowed).toBe(true)
    await expect(target).not.toHaveAttribute('data-popup-open')
  },
}

const invoices = ['INV-1042 · Acme Ltd', 'INV-1043 · Globex', 'INV-1044 · Initech']
const itemNames = ['Open', 'Duplicate', 'Mark as paid', 'Delete']

/** On each row of a list: the same items as the row's visible "more" button, so the right click is a shortcut, not the only way in. */
export const OnRows: Story = {
  render: (args) => (
    <ul style={{ display: 'grid', gap: 'var(--space-1)', margin: 0, padding: 0, listStyle: 'none', fontFamily: 'var(--font-sans)', color: 'var(--foreground)' }}>
      {invoices.map((name) => (
        <ContextMenu key={name} items={args.items}>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInlineStart: 'var(--space-3)', borderBottom: '1px solid var(--border)' }}>
            {name}
            <Menu
              align="end"
              items={args.items}
              trigger={
                <Button variant="secondary" appearance="ghost" size="sm" isIconOnly aria-label={`Actions for ${name}`}>
                  <Icon name="more" />
                </Button>
              }
            />
          </li>
        </ContextMenu>
      ))}
    </ul>
  ),
  play: async ({ canvas }) => {
    onDelete.mockClear()
    const rows = canvas.getAllByRole('listitem')
    // The area is the <li> itself: no wrapper inside the list.
    await expect(rows).toHaveLength(3)
    await expect(rows[1].parentElement?.tagName).toBe('UL')
    await userEvent.pointer({ keys: '[MouseRight]', target: rows[1] })
    const menu = await body().findByRole('menu')
    await expect(rows[1]).toHaveAttribute('data-popup-open')
    await expect(rows[0]).not.toHaveAttribute('data-popup-open')
    for (const name of itemNames) await expect(within(menu).getByRole('menuitem', { name })).toBeInTheDocument()
    await userEvent.click(within(menu).getByRole('menuitem', { name: 'Delete' }))
    await expect(onDelete).toHaveBeenCalledOnce()
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    // Every item is also behind the row's visible button, named after the row.
    await userEvent.click(canvas.getByRole('button', { name: 'Actions for INV-1043 · Globex' }))
    const again = await body().findByRole('menu')
    for (const name of itemNames) await expect(within(again).getByRole('menuitem', { name })).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
  },
}

/**
 * The menu open below its area, as a picture: inert, and in the flow instead
 * of at a pointer. Base UI makes a context menu always modal, which would lock
 * the docs page, so the picture draws the same parts, Menu's popup and the
 * area's open outline, with a non-modal Menu.
 */
const picture = (args: ContextMenuProps) => (
  <Pictured positioner={menuStyles.positioner} style={{ display: 'grid', gap: 'var(--space-1)', justifyItems: 'start' }}>
    {(container) => (
      <Menu items={args.items} trigger={cloneElement(args.children as ReactElement<{ className?: string }>, { className: styles.area })} open isModal={false} container={container} />
    )}
  </Pictured>
)

/** Open, for the docs and the visual baseline. */
export const Open: Story = {
  tags: ['!dev'],
  render: picture,
  play: async ({ canvas }) => {
    const menu = await canvas.findByRole('menu', { hidden: true })
    await expect(within(menu).getAllByRole('menuitem', { hidden: true })).toHaveLength(4)
    await waitFor(() => expect(isScrollLocked()).toBe(false))
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Area', selector: '[data-popup-open]', description: 'The element that takes the right click or long press: a row, a card, an object. Outlined while its menu is open.' },
  { name: 'Popup', selector: '[role="menu"]', description: 'A Menu popup, opened with its corner at the pointer.' },
  { name: 'Item', selector: '[role="menu"] [role="menuitem"]', description: "An entry, the same as an action menu's: label, optional icon and shortcut." },
  { name: 'Separator', selector: '[role="menu"] [role="separator"]', description: 'A rule before the destructive items.' },
]

/** Every part present, open in place. */
export const Anatomy: Story = {
  tags: ['!dev'],
  render: picture,
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[0]).toHaveTextContent('INV-1042')
    await expect(found[2]).toHaveTextContent('Open')
  },
}

/** Guidelines, Do: the right click repeats a row's visible actions. */
export const DoShortcutToVisible: Story = {
  tags: ['!dev'],
  args: {
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', paddingInlineStart: 'var(--space-3)', fontFamily: 'var(--font-sans)', color: 'var(--foreground)' }}>
        INV-1042 · Acme Ltd
        <Button variant="secondary" appearance="ghost" size="sm" isIconOnly aria-label="Actions for INV-1042">
          <Icon name="more" />
        </Button>
      </div>
    ),
  },
  render: picture,
}

/** Guidelines, Don't: the only way to an action, with nothing on screen that says it is there. */
export const DontOnlyWay: Story = {
  tags: ['!dev'],
  args: {
    children: area('INV-1042 · Acme Ltd'),
    items: [{ label: 'Send reminder' }, { label: 'Export as PDF' }, { type: 'separator' }, { label: 'Void invoice', isDestructive: true }],
  },
  render: picture,
}
