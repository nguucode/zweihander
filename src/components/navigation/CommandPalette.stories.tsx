import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy, Pictured } from '../../../.storybook/blocks'
import { Kbd } from '../atomic-elements/Kbd'
import { Button } from '../buttons/Button'
import { Icon } from '@/lib/icon'
import { CommandPalette, type CommandPaletteGroup, type CommandPaletteProps } from './CommandPalette'
import styles from './CommandPalette.module.css'

const groups: CommandPaletteGroup[] = [
  {
    label: 'Recent',
    items: [
      { value: 'inv-1042', label: 'Invoice INV-1042, Shore Holdings', icon: <Icon name="file" /> },
      { value: 'acme', label: 'Acme Logistics', icon: <Icon name="user" /> },
    ],
  },
  {
    label: 'Commands',
    items: [
      { value: 'new-invoice', label: 'New invoice', icon: <Icon name="plus" />, keywords: ['bill'], shortcut: ['⌘', 'N'] },
      { value: 'new-customer', label: 'New customer', icon: <Icon name="plus" /> },
      { value: 'export', label: 'Export ledger', icon: <Icon name="upload" />, shortcut: ['⌘', '⇧', 'E'] },
      { value: 'close-period', label: 'Close period', icon: <Icon name="calendar" />, disabled: true },
      { value: 'help', label: 'Open help', icon: <Icon name="help" />, shortcut: ['⌘', '/'] },
    ],
  },
  {
    label: 'Customers',
    items: [
      { value: 'hoa-binh', label: 'Hòa Bình Trading', icon: <Icon name="user" /> },
      { value: 'shore', label: 'Shore Holdings', icon: <Icon name="user" /> },
    ],
  },
]

const meta = {
  title: 'Components/Navigation/Command Palette',
  tags: ['beta'],
  component: CommandPalette,
  args: {
    groups,
    trigger: (
      <Button appearance="outlined" variant="secondary" aria-keyshortcuts="Meta+K Control+K">
        Search <Kbd size="sm" keys={['⌘', 'K']} aria-hidden />
      </Button>
    ),
    // Only the stories that test it bind ⌘K: on the docs page every
    // palette would answer it at once.
    hotkey: false,
    onSelect: fn(),
    onOpenChange: fn(),
  },
  argTypes: {
    groups: {
      description:
        'Titled groups of items: `{ label, items }`. An item is `{ value, label, icon?, keywords?, shortcut?, disabled?, onSelect? }`. Typing matches `label` and `keywords`, ignoring case and accents; a group with no match is left out. Recent items are a group you pass: the palette does not remember them.',
      control: false,
      table: { type: { summary: 'CommandPaletteGroup[]' } },
    },
    trigger: {
      description: 'The button that opens it, e.g. a search field in the sidebar. Its props are merged, not wrapped.',
      control: false,
      table: { type: { summary: 'ReactElement' } },
    },
    hotkey: {
      description: 'The letter that toggles it with ⌘ or Ctrl, anywhere on the page. `false` binds nothing: only one palette on a page should own the key.',
      control: 'text',
      table: { type: { summary: 'string | false' }, defaultValue: { summary: "'k'" } },
    },
    onSelect: {
      description: 'Called with the chosen item (pointer or Enter), after the item\'s own `onSelect`, once the palette has closed and focus is back on the trigger.',
      control: false,
      table: { type: { summary: '(item: CommandPaletteItem) => void' } },
    },
    placeholder: {
      description: 'In the empty input.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Search commands…'" } },
    },
    inputLabel: {
      description: 'Accessible name of the search input.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Search commands'" } },
    },
    emptyText: {
      description: 'Shown when nothing matches.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'No results'" } },
    },
    label: {
      description: 'Names the dialog.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Command palette'" } },
    },
    open: {
      description: 'Controlled open state. Pair with `onOpenChange`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultOpen: {
      description: 'Open on first render, uncontrolled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      description: 'Called with the next open state: on the trigger, the hotkey, Escape, a press outside and a choice.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    isModal: {
      description: 'While open, traps focus, locks page scroll and makes the rest of the page inert. `false` is for pictures of it.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    container: {
      description: 'Where it renders instead of `<body>`, e.g. an element in fullscreen.',
      control: false,
      table: { type: { summary: 'HTMLElement | null' } },
    },
    className: {
      description: 'Added to the popup.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof CommandPalette>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)
const open = async (canvas: ReturnType<typeof within>) => {
  await userEvent.click(canvas.getByRole('button', { name: 'Search' }))
  const dialog = await body().findByRole('dialog', { name: 'Command palette' })
  const input = within(dialog).getByRole('combobox', { name: 'Search commands' })
  await waitFor(() => expect(input).toHaveFocus())
  return { dialog, input }
}
const highlighted = (dialog: HTMLElement) => dialog.querySelector('[role="option"][data-highlighted]')

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Search' })
    const { dialog, input } = await open(canvas)
    await expect(input).toHaveAccessibleDescription('Arrow keys to move, Enter to choose, Escape to close.')
    // Groups are named by their label, and the first item is highlighted.
    await expect(within(dialog).getByRole('group', { name: 'Commands' })).toBeInTheDocument()
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('Invoice INV-1042'))
    // Focus stays in the input; the highlight is its active descendant.
    await expect(input).toHaveAttribute('aria-activedescendant', highlighted(dialog)!.id)
    // A shortcut is shown, not part of the item's name.
    await expect(within(dialog).getByRole('option', { name: 'New invoice' })).toBeInTheDocument()
    // Typing filters; the first match is highlighted; Enter chooses it.
    await userEvent.type(input, 'export')
    await waitFor(() => expect(within(dialog).getAllByRole('option')).toHaveLength(1))
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('Export ledger'))
    await userEvent.keyboard('{Enter}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    // The choice runs once focus is back on the trigger.
    await waitFor(() => expect(args.onSelect).toHaveBeenCalledWith(expect.objectContaining({ value: 'export' })))
    await expect(trigger).toHaveFocus()
  },
}

/** Arrow keys move the highlight. A disabled item can be reached, but Enter does nothing on it. A click chooses. */
export const Keyboard: Story = {
  play: async ({ args, canvas }) => {
    const { dialog } = await open(canvas)
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('Invoice INV-1042'))
    await userEvent.keyboard('{ArrowDown}{ArrowDown}')
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('New invoice'))
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}')
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('Close period'))
    await expect(highlighted(dialog)).toHaveAttribute('aria-disabled', 'true')
    await userEvent.keyboard('{Enter}')
    await expect(args.onSelect).not.toHaveBeenCalled()
    await expect(body().getByRole('dialog')).toBeVisible()
    await userEvent.click(within(dialog).getByRole('option', { name: 'Hòa Bình Trading' }))
    await waitFor(() => expect(args.onSelect).toHaveBeenCalledWith(expect.objectContaining({ value: 'hoa-binh' })))
  },
}

/** Keywords match, and accents do not have to be typed. */
export const Matching: Story = {
  play: async ({ canvas }) => {
    const { dialog, input } = await open(canvas)
    await userEvent.type(input, 'bill')
    await waitFor(() => expect(within(dialog).getAllByRole('option').map((o) => o.textContent)).toEqual([expect.stringContaining('New invoice')]))
    await userEvent.clear(input)
    await userEvent.type(input, 'hoa binh')
    await waitFor(() => expect(within(dialog).getAllByRole('option').map((o) => o.textContent)).toEqual(['Hòa Bình Trading']))
    // Only the group with a match is left.
    await expect(within(dialog).queryByRole('group', { name: 'Commands' })).toBeNull()
  },
}

export const Empty: Story = {
  play: async ({ canvas }) => {
    const { dialog, input } = await open(canvas)
    await userEvent.type(input, 'zzz')
    await waitFor(() => expect(within(dialog).getByText('No results')).toBeVisible())
    await expect(within(dialog).queryAllByRole('option')).toHaveLength(0)
    // Escape closes it, and so does a press outside.
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    const again = await open(canvas)
    await userEvent.click(again.dialog.parentElement!, { clientX: 2, clientY: 2 } as never)
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
  },
}

/** ⌘K or Ctrl+K toggles it from anywhere on the page. */
export const Hotkey: Story = {
  args: { hotkey: 'k', trigger: undefined },
  render: (args) => (
    <p style={{ margin: 0 }}>
      Press <Kbd keys={['⌘', 'K']} /> or <Kbd keys={['Ctrl', 'K']} /> to open the palette.
      <CommandPalette {...args} />
    </p>
  ),
  play: async ({ args }) => {
    await userEvent.keyboard('{Meta>}k{/Meta}')
    const dialog = await body().findByRole('dialog', { name: 'Command palette' })
    await waitFor(() => expect(within(dialog).getByRole('combobox')).toHaveFocus())
    await userEvent.keyboard('{Meta>}k{/Meta}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await userEvent.keyboard('{Control>}k{/Control}')
    await body().findByRole('dialog')
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true)
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
  },
}

/**
 * The palette open in place, as a picture, and not modal: it must not lock
 * the docs page. The frame contains layout, so the fixed backdrop and
 * viewport fill the frame, not the window.
 */
const picture = ({ height = '30rem', ...args }: CommandPaletteProps & { height?: string }) => (
  <Pictured style={{ position: 'relative', contain: 'layout paint', inlineSize: 'min(44rem, 100vw - 4rem)', blockSize: height, borderRadius: 'var(--radius-panel)' }}>
    {(container) => <CommandPalette {...args} trigger={undefined} open isModal={false} container={container} />}
  </Pictured>
)

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: '[role="dialog"]', description: 'A dialog near the top of the screen, over a scrim. Opened by its trigger or ⌘K.' },
  { name: 'Search input', selector: '[role="combobox"]', description: 'Focused on open. Typing filters every group at once.' },
  { name: 'Group label', selector: `.${styles.groupLabel}`, description: 'Names a group: Recent, Commands, an object type. It names the group for a screen reader too.' },
  { name: 'Item', selector: '[role="option"]', description: 'The first match is highlighted, so Enter always does something.' },
  { name: 'Icon', selector: `.${styles.icon}`, description: 'Optional. What kind of thing the item is.' },
  { name: 'Shortcut', selector: '[role="option"] kbd:has(> kbd)', description: 'Optional. The key that does the same outside the palette, as Kbd caps. Shown, not read.' },
  { name: 'Key hints', selector: `.${styles.footer}`, description: 'The keys that work here. Read once, as the input\'s description.' },
]

export const Anatomy: Story = {
  tags: ['!dev'],
  render: picture,
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[3]).toHaveAttribute('data-highlighted')
  },
}

/** Specs, States: the open palette with results. */
export const Results: Story = {
  tags: ['!dev'],
  render: picture,
}

/** Specs, States: nothing to list. */
export const NoResults: Story = {
  tags: ['!dev'],
  args: { groups: [] },
  render: (args) => picture({ ...args, height: '14rem' }),
  play: async ({ canvas }) => {
    await expect(await canvas.findByText('No results')).toBeInTheDocument()
  },
}

/** Guidelines, Do: grouped, each command a verb, objects under their type. */
export const DoGroup: Story = {
  tags: ['!dev'],
  render: picture,
}

/** Guidelines, Don't: one long list of nouns, commands and records mixed. */
export const DontMix: Story = {
  tags: ['!dev'],
  args: {
    groups: [
      {
        label: 'Results',
        items: [
          { value: 'invoice', label: 'Invoice' },
          { value: 'acme', label: 'Acme Logistics' },
          { value: 'export', label: 'Export' },
          { value: 'settings', label: 'Settings' },
          { value: 'shore', label: 'Shore Holdings' },
          { value: 'customer', label: 'Customer' },
          { value: 'period', label: 'Period' },
        ],
      },
    ],
  },
  render: picture,
}
