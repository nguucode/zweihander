import { useRef } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy, Pictured } from '../../../.storybook/blocks'
import { Button } from '../buttons/Button'
import { Select } from '../inputs/Select'
import { TextInput } from '../inputs/TextInput'
import { Drawer, DrawerClose, type DrawerProps } from './Drawer'
import styles from './Drawer.module.css'

const form = (
  <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
    <TextInput label="Company" defaultValue="Northwind Traders" isFullWidth />
    <TextInput label="Contact" defaultValue="Sam Rivera" isFullWidth />
    <TextInput label="Email" defaultValue="sam@northwind.example" isFullWidth />
  </div>
)

const meta = {
  title: 'Components/Overlays/Drawer',
  tags: ['beta'],
  component: Drawer,
  args: {
    trigger: <Button>Edit customer</Button>,
    title: 'Edit customer',
    description: 'Changes apply to every open invoice for this customer.',
    children: form,
    footer: (
      <>
        <DrawerClose render={<Button variant="secondary" />}>Cancel</DrawerClose>
        <Button>Save</Button>
      </>
    ),
    onOpenChange: fn(),
  },
  argTypes: {
    title: {
      description: 'Required: it names the dialog. Say what the drawer holds: "Filters", "Invoice INV-0042".',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    trigger: {
      description: 'The button that opens it. Omit when `open` is controlled from elsewhere, e.g. a table row.',
      control: false,
      table: { type: { summary: 'ReactElement' } },
    },
    description: {
      description: 'Optional, under the title in `--muted-foreground`. Read as the dialog\'s description.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    children: {
      description: 'The body. Scrolls between the header and the footer, which stay in view.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    footer: {
      description: 'Actions, pinned to the bottom, right-aligned, the main one last. Close it from a button with `<DrawerClose render={<Button />}>`.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    side: {
      description: 'The edge it slides in from, and the way a swipe dismisses it. `bottom` is a sheet as tall as its content.',
      control: 'inline-radio',
      options: ['right', 'left', 'bottom'],
      table: { type: { summary: "'right' | 'left' | 'bottom'" }, defaultValue: { summary: "'right'" } },
    },
    size: {
      description: 'Width of a side drawer: 20rem (`sm`), 28rem (`md`) or 40rem (`lg`), always leaving a touch target of backdrop. Ignored at the bottom.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: { type: { summary: "'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'md'" } },
    },
    hasCloseButton: {
      description: 'The close button in the corner.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    closeLabel: {
      description: 'Accessible name of the close button.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Close'" } },
    },
    closeOnBackdropClick: {
      description: 'Close on a press on the backdrop. Turn it off for a form that would lose its input.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    initialFocus: {
      description: 'Where focus goes on open. By default, the drawer itself, so its title is read first.',
      control: false,
      table: { type: { summary: 'RefObject<HTMLElement | null>' } },
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
      description: 'Called with the next open state: on open, on close, on Escape, on a press outside and on a swipe.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    isModal: {
      description: 'While open, traps focus, locks page scroll and makes the rest of the page inert. `false` drops those three, for pictures of a drawer; the backdrop still covers the page.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    container: {
      description: 'Where the drawer renders instead of `<body>`, e.g. an element in fullscreen.',
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
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Edit customer' })
    await userEvent.click(trigger)
    const dialog = await body().findByRole('dialog', { name: 'Edit customer' })
    await expect(dialog).toHaveAccessibleDescription('Changes apply to every open invoice for this customer.')
    // The page behind is hidden from assistive tech and stops scrolling.
    await expect(trigger.closest('[aria-hidden="true"]')).not.toBeNull()
    await waitFor(() => expect(getComputedStyle(document.documentElement).overflow + getComputedStyle(document.body).overflow).toContain('hidden'))
    // Focus goes to the panel itself, so its title is read first.
    await waitFor(() => expect(dialog).toHaveFocus())
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true)
    // Against the right edge, full height.
    await waitFor(() => {
      const r = dialog.getBoundingClientRect()
      expect(Math.round(r.right)).toBe(window.innerWidth)
      expect(Math.round(r.height)).toBe(window.innerHeight)
    })
    // Cancel is a DrawerClose: it closes, and focus goes back to the trigger.
    await userEvent.click(within(dialog).getByRole('button', { name: 'Cancel' }))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(trigger).toHaveFocus()
    // From the keyboard too: the panel first, then Tab reaches the close button.
    await userEvent.keyboard('{Enter}')
    const again = await body().findByRole('dialog')
    await waitFor(() => expect(again).toHaveFocus())
    await userEvent.tab()
    await expect(within(again).getByRole('button', { name: 'Close' })).toHaveFocus()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(trigger).toHaveFocus()
  },
}

export const Dismissing: Story = {
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Edit customer' })
    await userEvent.click(trigger)
    let dialog = await body().findByRole('dialog')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    // A press outside, left of the drawer, closes it too.
    await userEvent.click(trigger)
    dialog = await body().findByRole('dialog')
    await userEvent.click(dialog.parentElement!, { clientX: 2, clientY: 2 } as never)
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    // So does the close button.
    await userEvent.click(trigger)
    dialog = await body().findByRole('dialog')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Close' }))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
  },
}

/** A form that would lose its input: a press outside does nothing; Escape and the buttons still close it. */
export const KeepInput: Story = {
  args: { closeOnBackdropClick: false },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Edit customer' }))
    const dialog = await body().findByRole('dialog')
    await userEvent.click(dialog.parentElement!, { clientX: 2, clientY: 2 } as never)
    await new Promise((r) => setTimeout(r, 200))
    await expect(body().getByRole('dialog')).toBeVisible()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
  },
}

/** From the left edge. */
export const Left: Story = {
  args: {
    side: 'left',
    size: 'sm',
    trigger: <Button appearance="outlined">Filters</Button>,
    title: 'Filters',
    description: undefined,
    children: (
      <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
        <Select label="Status" options={['Any', 'Draft', 'Sent', 'Paid', 'Overdue']} defaultValue="Any" isFullWidth />
        <Select label="Owner" options={['Anyone', 'Me', 'My team']} defaultValue="Anyone" isFullWidth />
      </div>
    ),
    footer: (
      <>
        <DrawerClose render={<Button variant="secondary" />}>Clear</DrawerClose>
        <DrawerClose render={<Button />}>Apply</DrawerClose>
      </>
    ),
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Filters' }))
    const dialog = await body().findByRole('dialog', { name: 'Filters' })
    await waitFor(() => expect(Math.round(dialog.getBoundingClientRect().left)).toBe(0))
    // A Select opened inside a drawer lists its options above it.
    await userEvent.click(within(dialog).getByRole('combobox', { name: 'Status' }))
    const option = await body().findByRole('option', { name: 'Paid' })
    await waitFor(() => {
      const r = option.getBoundingClientRect()
      const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)
      return expect(option.contains(hit)).toBe(true)
    })
  },
}

/** `initialFocus` sends focus to a field instead of the close button. */
export const InitialFocus: Story = {
  render: function Render(args) {
    const ref = useRef<HTMLInputElement>(null)
    return (
      <Drawer
        {...args}
        initialFocus={ref}
        children={<TextInput ref={ref} label="Note" isFullWidth />}
        title="Add a note"
        description={undefined}
        trigger={<Button>Add note</Button>}
      />
    )
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Add note' }))
    const dialog = await body().findByRole('dialog', { name: 'Add a note' })
    await waitFor(() => expect(within(dialog).getByRole('textbox', { name: 'Note' })).toHaveFocus())
  },
}

/** `side` is physical: a right drawer stays on the right of a right-to-left page. */
export const RightToLeft: Story = {
  play: async ({ canvas }) => {
    document.documentElement.dir = 'rtl'
    try {
      await userEvent.click(canvas.getByRole('button', { name: 'Edit customer' }))
      const dialog = await body().findByRole('dialog')
      await waitFor(() => expect(Math.round(dialog.getBoundingClientRect().right)).toBe(window.innerWidth))
      await userEvent.keyboard('{Escape}')
      await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    } finally {
      document.documentElement.dir = ''
    }
  },
}

/** A bottom sheet: full width, as tall as its content. */
export const Bottom: Story = {
  args: {
    side: 'bottom',
    trigger: <Button appearance="outlined">Share</Button>,
    title: 'Share invoice INV-0042',
    description: undefined,
    children: <TextInput label="Link" defaultValue="https://pay.example/inv-0042" readOnly isFullWidth />,
    footer: <DrawerClose render={<Button />}>Done</DrawerClose>,
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Share' }))
    const dialog = await body().findByRole('dialog', { name: 'Share invoice INV-0042' })
    await waitFor(() => {
      const r = dialog.getBoundingClientRect()
      expect(Math.round(r.bottom)).toBe(window.innerHeight)
      expect(Math.round(r.width)).toBe(window.innerWidth)
      expect(r.height).toBeLessThan(window.innerHeight / 2)
    })
  },
}

export const Long: Story = {
  args: {
    title: 'Invoice INV-0042',
    description: undefined,
    size: 'lg',
    trigger: <Button appearance="outlined">View invoice</Button>,
    children: (
      <div>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ margin: '0 0 var(--space-3)' }}>
            Line {i + 1}. Consulting, 8 hours at the agreed day rate, billed to the Northwind Traders account.
          </p>
        ))}
      </div>
    ),
    footer: <DrawerClose render={<Button />}>Close invoice</DrawerClose>,
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'View invoice' }))
    const dialog = await body().findByRole('dialog')
    // The body scrolls; the footer stays on screen.
    const done = within(dialog).getByRole('button', { name: 'Close invoice' })
    await waitFor(() => expect(done.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight))
  },
}

/**
 * The drawer open in place, as a picture, and not modal: it must not lock
 * the docs page. The frame contains layout, so the fixed backdrop and
 * viewport fill the frame, not the window.
 */
const picture = ({ width = 'min(40rem, 100vw - 10rem)', height = '24rem', ...args }: DrawerProps & { width?: string; height?: string }) => (
  <Pictured style={{ position: 'relative', contain: 'layout paint', inlineSize: width, blockSize: height, borderRadius: 'var(--radius-panel)' }}>
    {(container) => <Drawer {...args} trigger={undefined} open isModal={false} container={container} />}
  </Pictured>
)

const editFooter = (
  <>
    <Button variant="secondary">Cancel</Button>
    <Button>Save</Button>
  </>
)

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Backdrop', selector: `.${styles.backdrop}`, description: 'A scrim over the page. It blocks the page until the drawer closes.' },
  { name: 'Container', selector: '[role="dialog"]', description: 'The panel, against one edge, full height (or full width at the bottom).' },
  { name: 'Header', selector: `.${styles.header}`, description: 'Title, close button and description. Stays in view.' },
  { name: 'Title', selector: '[role="dialog"] h2', description: 'Required: it names the dialog.' },
  { name: 'Close button', selector: 'button[aria-label="Close"]', description: 'On by default.' },
  { name: 'Description', selector: `.${styles.description}`, description: 'Optional. What the drawer is for.' },
  { name: 'Body', selector: `.${styles.body}`, description: 'children. Scrolls between header and footer.' },
  { name: 'Footer', selector: `.${styles.footer}`, description: 'Actions, pinned to the bottom, right-aligned, the main one last.' },
]

/** Every part present, the drawer open in place. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { size: 'sm', footer: editFooter },
  render: picture,
  play: async ({ canvas, canvasElement }) => {
    const dialog = await canvas.findByRole('dialog', { hidden: true })
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[1]).toBe(dialog)
    await expect(found[3]).toHaveTextContent('Edit customer')
    await expect(getComputedStyle(document.body).overflow).not.toBe('hidden')
  },
}

/** Overview, Variants: the three sides as pictures. */
export const Sides: Story = {
  tags: ['!dev'],
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
      {(['right', 'left', 'bottom'] as const).map((side) => (
        <div key={side} style={{ display: 'grid', gap: 'var(--space-2)' }}>
          {picture({
            ...args,
            side,
            size: 'sm',
            title: side === 'bottom' ? 'Bottom' : side === 'left' ? 'Left' : 'Right',
            description: undefined,
            children: undefined,
            footer: <Button>Done</Button>,
            width: '15rem',
            height: '14rem',
          })}
        </div>
      ))}
    </div>
  ),
}

/** Specs, States: the close button, in a drawer with only a title. */
export const CloseButton: Story = {
  tags: ['!dev'],
  args: { size: 'sm', description: undefined, children: undefined, footer: undefined },
  render: (args) => picture({ ...args, width: '17rem', height: '6rem' }),
}

const record = (
  <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space-2) var(--space-4)', margin: 0 }}>
    <dt>Customer</dt>
    <dd style={{ margin: 0 }}>Northwind Traders</dd>
    <dt>Amount</dt>
    <dd style={{ margin: 0 }}>$4,200.00</dd>
    <dt>Due</dt>
    <dd style={{ margin: 0 }}>12 Nov 2026</dd>
  </dl>
)

/** Guidelines, Do: a record looked at from its list, which stays in place behind it. */
export const DoQuickView: Story = {
  tags: ['!dev'],
  args: { size: 'sm', title: 'Invoice INV-0042', description: undefined, children: record, footer: <Button appearance="outlined">Open invoice</Button> },
  render: (args) => picture({ ...args, width: 'min(26rem, 100vw - 10rem)', height: '16rem' }),
}

/** Guidelines, Don't: a yes-or-no decision pushed to the edge of the screen. */
export const DontConfirm: Story = {
  tags: ['!dev'],
  args: {
    size: 'sm',
    title: 'Delete invoice?',
    description: 'INV-0042 is deleted for everyone.',
    children: undefined,
    footer: (
      <>
        <Button variant="secondary">Keep</Button>
        <Button variant="destructive">Delete</Button>
      </>
    ),
  },
  render: (args) => picture({ ...args, width: 'min(26rem, 100vw - 10rem)', height: '16rem' }),
}
