import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '../buttons/Button'
import { Menu, type MenuProps } from './Menu'
import styles from './Menu.module.css'

const onDuplicate = fn()
const onDelete = fn()

const meta = {
  title: 'Components/Navigation/Menu',
  tags: ['beta'],
  component: Menu,
  args: {
    trigger: (
      <Button appearance="outlined" variant="accent" endIcon={<Icon name="chevron-down" />}>
        Actions
      </Button>
    ),
    items: [
      { label: 'Edit', icon: <Icon name="calendar" />, shortcut: '⌘ E' },
      { label: 'Duplicate', icon: <Icon name="plus" />, shortcut: '⌘ D', onSelect: onDuplicate },
      { label: 'Archive', disabled: true },
      { type: 'separator' },
      { label: 'Delete', icon: <Icon name="close" />, isDestructive: true, onSelect: onDelete },
    ],
  },
  // Every prop is described here: these are the docs' API table and the
  // Playground's props panel.
  argTypes: {
    trigger: {
      description: 'The button that opens the menu, usually a `<Button>`. Menu merges its props and ARIA onto it rather than wrapping it.',
      control: false,
      table: { type: { summary: 'ReactElement' } },
    },
    items: {
      description:
        "The entries, as data. An entry is an action (`label`, `onSelect`, `icon`, `shortcut`, `isDestructive`, `disabled`), a link (`href`), a submenu (`items`), `{ type: 'checkbox' }`, `{ type: 'radio', options }`, `{ type: 'group', label, items }` or `{ type: 'separator' }`. Give `textValue` when a label is not plain text, for typeahead.",
      control: false,
      table: { type: { summary: 'MenuEntry[]' } },
    },
    side: {
      description: 'Which side of the trigger the popup opens on. It flips when there is no room.',
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
      table: { type: { summary: "'top' | 'right' | 'bottom' | 'left'" }, defaultValue: { summary: "'bottom'" } },
    },
    align: {
      description: 'How the popup lines up with the trigger along that side.',
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
      table: { type: { summary: "'start' | 'center' | 'end'" }, defaultValue: { summary: "'start'" } },
    },
    open: {
      description: 'Controlled open state. Pair with `onOpenChange`.',
      control: false,
      table: { type: { summary: 'boolean' } },
    },
    defaultOpen: {
      description: 'Open on first render, uncontrolled.',
      control: false,
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      description: 'Called when the menu opens or closes: the trigger, Escape, a click outside, or choosing an action.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    isModal: {
      description: 'While open, locks page scroll and makes the rest of the page inert. `false` leaves the page scrollable and clickable.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    container: {
      description: 'Where the popup renders instead of `<body>`, e.g. an element in fullscreen, where a popup in `<body>` would not show.',
      control: false,
      table: { type: { summary: 'HTMLElement | null' } },
    },
    className: {
      description: 'Added to the popup.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
  decorators: [(Story) => <div style={{ minBlockSize: '18rem' }}>{Story()}</div>],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

const isScrollLocked = () =>
  [document.documentElement, document.body].some((el) => /hidden|clip/.test(getComputedStyle(el).overflowY))

export const Default: Story = {
  play: async ({ canvas }) => {
    onDuplicate.mockClear()
    const trigger = canvas.getByRole('button', { name: 'Actions' })
    await expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    await userEvent.click(trigger)
    const menu = await body().findByRole('menu')
    await expect(within(menu).getAllByRole('menuitem')).toHaveLength(4)
    await expect(within(menu).getByRole('menuitem', { name: /Archive/ })).toHaveAttribute('aria-disabled', 'true')
    // Keyboard: arrows move, disabled items are skipped, Enter selects and closes.
    await userEvent.keyboard('{ArrowDown}')
    await waitFor(() => expect(within(menu).getByRole('menuitem', { name: /Edit/ })).toHaveFocus())
    await userEvent.keyboard('{ArrowDown}{Enter}')
    await expect(onDuplicate).toHaveBeenCalledOnce()
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    await expect(trigger).toHaveFocus()
  },
}

/** Modal by default: page scroll is locked while the menu is open. */
export const Modal: Story = {
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Actions' }))
    await body().findByRole('menu')
    await waitFor(() => expect(isScrollLocked()).toBe(true))
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    await waitFor(() => expect(isScrollLocked()).toBe(false))
  },
}

/** `isModal={false}` leaves the page scrollable while the menu is open. */
export const NonModal: Story = {
  args: { isModal: false },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Actions' }))
    await body().findByRole('menu')
    await expect(isScrollLocked()).toBe(false)
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
  },
}

export const Typeahead: Story = {
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Actions' }))
    const menu = await body().findByRole('menu')
    await userEvent.keyboard('del')
    await waitFor(() => expect(within(menu).getByRole('menuitem', { name: /Delete/ })).toHaveFocus())
  },
}

export const Groups: Story = {
  args: {
    trigger: <Button appearance="outlined" variant="accent">View</Button>,
    items: [
      {
        type: 'group',
        label: 'Show',
        items: [
          { type: 'checkbox', label: 'Hidden files', defaultChecked: false },
          { type: 'checkbox', label: 'File extensions', defaultChecked: true },
        ],
      },
      { type: 'separator' },
      {
        type: 'radio',
        label: 'Sort by',
        defaultValue: 'name',
        options: [
          { value: 'name', label: 'Name' },
          { value: 'modified', label: 'Date modified' },
          { value: 'size', label: 'Size' },
        ],
      },
    ],
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'View' }))
    const menu = await body().findByRole('menu')
    const hidden = within(menu).getByRole('menuitemcheckbox', { name: 'Hidden files' })
    await expect(hidden).toHaveAttribute('aria-checked', 'false')
    await userEvent.click(hidden)
    // Toggles stay open, so several can be changed in one go.
    await expect(hidden).toHaveAttribute('aria-checked', 'true')
    const size = within(menu).getByRole('menuitemradio', { name: 'Size' })
    await userEvent.click(size)
    await expect(size).toHaveAttribute('aria-checked', 'true')
    await expect(within(menu).getByRole('menuitemradio', { name: 'Name' })).toHaveAttribute('aria-checked', 'false')
    // The popup fades in from opacity 0; wait for it rather than race it.
    await waitFor(() => expect(within(menu).getByRole('group', { name: 'Sort by' })).toBeVisible())
  },
}

export const Submenu: Story = {
  args: {
    items: [
      { label: 'Rename' },
      {
        label: 'Move to',
        items: [
          { label: 'Design' },
          { label: 'Engineering' },
          { label: 'Archive' },
        ],
      },
      { type: 'separator' },
      { label: 'Delete', isDestructive: true },
    ],
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Actions' }))
    const menu = await body().findByRole('menu')
    const move = within(menu).getByRole('menuitem', { name: 'Move to' })
    await expect(move).toHaveAttribute('aria-haspopup', 'menu')
    await userEvent.keyboard('{ArrowDown}{ArrowDown}')
    await waitFor(() => expect(move).toHaveFocus())
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(body().getAllByRole('menu')).toHaveLength(2))
    await waitFor(() => expect(body().getByRole('menuitem', { name: 'Design' })).toHaveFocus())
    // Left goes back to the parent item.
    await userEvent.keyboard('{ArrowLeft}')
    await waitFor(() => expect(move).toHaveFocus())
  },
}

export const Links: Story = {
  args: {
    trigger: <Button appearance="ghost" variant="accent">Help</Button>,
    items: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Keyboard shortcuts', href: '#shortcuts' },
      { label: 'Billing', href: '#billing', disabled: true },
      { type: 'separator' },
      { label: 'Contact support', href: '#support' },
    ],
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Help' }))
    const menu = await body().findByRole('menu')
    await expect(within(menu).getByRole('menuitem', { name: 'Documentation' })).toHaveAttribute('href', '#docs')
    // A disabled link is inert: no href to follow.
    const billing = within(menu).getByRole('menuitem', { name: 'Billing' })
    await expect(billing).toHaveAttribute('aria-disabled', 'true')
    await expect(billing).not.toHaveAttribute('href')
  },
}

/**
 * The menu open in place, as a picture: rendered inside the story instead of
 * `<body>`, not modal and inert, so a docs page can show it beside other
 * examples without the menu taking focus or locking the page. The popup sits
 * in the flow under the trigger: positioned, it would flip above the trigger
 * whenever the picture is low in the window, out of its frame.
 */
function Pictured(props: MenuProps) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  return (
    <div ref={setContainer} inert data-menu-picture style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-1)' }}>
      <style>{`[data-menu-picture] .${styles.positioner} { position: static !important; transform: none !important; }`}</style>
      {container && <Menu {...props} open isModal={false} container={container} />}
    </div>
  )
}

/** The menu open, for the docs. */
export const Open: Story = {
  tags: ['!dev'],
  render: (args) => <Pictured {...args} />,
  play: async ({ canvas }) => {
    // Rendered inside the story, not <body>.
    const menu = await canvas.findByRole('menu', { hidden: true })
    await expect(within(menu).getAllByRole('menuitem', { hidden: true })).toHaveLength(4)
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Trigger', selector: 'button[aria-haspopup="menu"]', description: 'The button that opens it. Menu merges its props onto your element.' },
  { name: 'Popup', selector: '[role="menu"]', description: 'The surface: the same as the Select list, at least 12rem wide.' },
  { name: 'Group label', selector: '[role="group"] > div:first-child', description: 'Optional. Names a group of items; muted and small.' },
  { name: 'Item', selector: '[role="menuitem"]', description: 'An action, a link or a submenu trigger. One control tier tall.' },
  { name: 'Icon', selector: '[role="menuitem"] > span:first-child', description: 'Optional. Decorative.' },
  { name: 'Shortcut', selector: 'kbd', description: 'Optional, display only: it does not bind the key.' },
  { name: 'Submenu indicator', selector: '[role="menuitem"][aria-haspopup="menu"] > span:last-child', description: 'A chevron on an item that opens a submenu.' },
  { name: 'Separator', selector: '[role="separator"]', description: 'A rule between groups of items.' },
  { name: 'Check', selector: '[role="menuitemcheckbox"] > span:first-child', description: 'Shows a checkbox or radio item is on. Its column lines up with the icons.' },
]

/** Every part present, the menu open in place. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: {
    items: [
      {
        type: 'group',
        label: 'Page',
        items: [
          { label: 'Duplicate', icon: <Icon name="plus" />, shortcut: '⌘ D' },
          { label: 'Move to', icon: <Icon name="menu" />, items: [{ label: 'Design' }, { label: 'Archive' }] },
        ],
      },
      { type: 'separator' },
      { type: 'checkbox', label: 'Pin to top', defaultChecked: true },
      { type: 'separator' },
      { label: 'Delete', icon: <Icon name="close" />, isDestructive: true },
    ],
  },
  render: (args) => <Pictured {...args} />,
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    await waitFor(() => expect(canvasElement.querySelector('[role="menu"]')).not.toBeNull())
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[2]).toHaveTextContent('Page')
    await expect(found[3]).toHaveTextContent('Duplicate')
  },
}

/** Guidelines, Do: the destructive action last, after a separator. */
export const DoDestructiveLast: Story = {
  tags: ['!dev'],
  args: {
    items: [
      { label: 'Rename' },
      { label: 'Duplicate' },
      { type: 'separator' },
      { label: 'Delete', isDestructive: true },
    ],
  },
  render: (args) => <Pictured {...args} />,
}

/** Guidelines, Don't: the destructive action among the others, where a slip of the arrow key lands on it. */
export const DontDestructiveAmongOthers: Story = {
  tags: ['!dev'],
  args: {
    items: [{ label: 'Rename' }, { label: 'Delete', isDestructive: true }, { label: 'Duplicate' }],
  },
  render: (args) => <Pictured {...args} />,
}

/** Guidelines, Do: a menu acts. Picking a value for a form is a Select. */
export const DoActions: Story = {
  tags: ['!dev'],
  args: {
    trigger: <Button appearance="outlined" variant="accent">Export</Button>,
    items: [{ label: 'Download as CSV' }, { label: 'Download as PDF' }, { label: 'Copy link' }],
  },
  render: (args) => <Pictured {...args} />,
}

/** Guidelines, Don't: a menu standing in for a form field, with the choice written into the trigger. */
export const DontMenuAsField: Story = {
  tags: ['!dev'],
  args: {
    trigger: (
      <Button appearance="outlined" variant="secondary" endIcon={<Icon name="chevron-down" />}>
        Country: Vietnam
      </Button>
    ),
    items: [{ label: 'Vietnam' }, { label: 'Thailand' }, { label: 'Japan' }],
  },
  render: (args) => <Pictured {...args} />,
}
