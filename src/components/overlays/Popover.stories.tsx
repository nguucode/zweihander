import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Button } from '../buttons/Button'
import { TextInput } from '../inputs/TextInput'
import { Popover, type PopoverProps } from './Popover'
import styles from './Popover.module.css'

const meta = {
  title: 'Components/Overlays/Popover',
  tags: ['beta'],
  component: Popover,
  args: {
    trigger: <Button appearance="outlined" variant="accent">Share</Button>,
    title: 'Share this file',
    description: 'Anyone you invite can view and comment.',
    children: (
      <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'end' }}>
        <TextInput label="Email" placeholder="name@company.com" />
        <Button>Invite</Button>
      </div>
    ),
    onOpenChange: fn(),
  },
  argTypes: {
    trigger: {
      description: 'The element that opens it: one button. Popover merges its props onto it rather than wrapping it.',
      control: false,
      table: { type: { summary: 'ReactElement' } },
    },
    title: {
      description: 'Names the popover, which is a dialog. Without one, pass `aria-label`.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    description: {
      description: 'Optional, under the title in `--muted-foreground`. Read as the dialog\'s description.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    children: {
      description: 'The content: a short form, a filter, a list of options.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    side: {
      description: 'Which side of the trigger it opens on. Flips when there is no room.',
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
      table: { type: { summary: "'top' | 'right' | 'bottom' | 'left'" }, defaultValue: { summary: "'bottom'" } },
    },
    align: {
      description: 'How it lines up with the trigger along that side.',
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
      table: { type: { summary: "'start' | 'center' | 'end'" }, defaultValue: { summary: "'center'" } },
    },
    hasCloseButton: {
      description: 'A close button in the corner. Escape and a press outside close it either way.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    closeLabel: {
      description: 'Accessible name of the close button.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Close'" } },
    },
    openOnHover: {
      description: 'Open on hover as well as on click, for previews. Click, keyboard and touch still open it.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isModal: {
      description: 'Trap focus inside while open, lock page scroll and block presses outside (Base UI\'s modal mode).',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
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
      description: 'Called with the next open state.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    container: {
      description: 'Where the popup renders instead of `<body>`, e.g. an element in fullscreen, where a popup in `<body>` would not show.',
      control: false,
      table: { type: { summary: 'HTMLElement | null' } },
    },
    'aria-label': {
      description: 'Names the popover when it has no `title`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    className: {
      description: 'Added to the popup.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
  // Room for the popup to open into. A picture lays its popup out itself.
  decorators: [
    (Story, { parameters }) =>
      parameters.picture ? (
        Story()
      ) : (
        <div style={{ minBlockSize: '16rem', display: 'flex', justifyContent: 'center', alignItems: 'start', paddingBlock: 'var(--space-6)' }}>{Story()}</div>
      ),
  ],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

/** A Share popover with another button beside it, to test what happens to the page around it. */
const withNeighbour: Story['render'] = (args) => (
  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
    <Popover {...args} />
    <Button appearance="outlined">Next</Button>
  </div>
)

/** Whether a real click at the centre of `el` would land on it (user-event does not hit-test). */
const takesClicks = (el: Element) => {
  const r = el.getBoundingClientRect()
  return el.contains(document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2))
}

const isScrollLocked = () =>
  [document.documentElement, document.body].some((el) => /hidden|clip/.test(getComputedStyle(el).overflowY))

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Share' })
    await userEvent.click(trigger)
    const dialog = await body().findByRole('dialog', { name: 'Share this file' })
    await expect(dialog).toHaveAccessibleDescription('Anyone you invite can view and comment.')
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog')
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true)
    // Opening moves focus into the popup.
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true))
    // Escape closes it and puts focus back on the trigger.
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(trigger).toHaveFocus()
  },
}

/** A click outside closes it and puts focus back on the trigger. */
export const ClickOutside: Story = {
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Share' })
    await userEvent.click(trigger)
    const dialog = await body().findByRole('dialog')
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true))
    await userEvent.click(document.body)
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await waitFor(() => expect(trigger).toHaveFocus())
  },
}

/** Non-modal: Tab can leave the popup, and the page around it still takes clicks and scrolls. */
export const NonModal: Story = {
  render: withNeighbour,
  play: async ({ canvas }) => {
    const next = canvas.getByRole('button', { name: 'Next' })
    await userEvent.click(canvas.getByRole('button', { name: 'Share' }))
    const dialog = await body().findByRole('dialog')
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true))
    await expect(takesClicks(next)).toBe(true)
    await expect(isScrollLocked()).toBe(false)
    // Tab past the last control and focus is out of the popup.
    for (let i = 0; i < 5 && dialog.contains(document.activeElement); i++) await userEvent.tab()
    await expect(dialog.contains(document.activeElement)).toBe(false)
  },
}

/** Modal: page scroll is locked and clicks outside are blocked while it is open. */
export const ModalBlocksPage: Story = {
  args: { isModal: true },
  render: withNeighbour,
  play: async ({ canvas }) => {
    const next = canvas.getByRole('button', { name: 'Next' })
    await userEvent.click(canvas.getByRole('button', { name: 'Share' }))
    await body().findByRole('dialog')
    await waitFor(() => expect(isScrollLocked()).toBe(true))
    await expect(takesClicks(next)).toBe(false)
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await waitFor(() => expect(isScrollLocked()).toBe(false))
    await expect(takesClicks(next)).toBe(true)
  },
}

/** `openOnHover` adds hover to click: keyboard and touch still open it. */
export const OpenOnHover: Story = {
  args: { openOnHover: true },
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Share' })
    // Keyboard.
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await body().findByRole('dialog')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    // Touch: a tap.
    await userEvent.pointer({ keys: '[TouchA]', target: trigger })
    await body().findByRole('dialog')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    // Hover.
    await userEvent.hover(trigger)
    await body().findByRole('dialog')
  },
}

/** Open from the start, with the close button. */
export const Open: Story = {
  args: { defaultOpen: true, hasCloseButton: true },
  play: async () => {
    const dialog = await body().findByRole('dialog')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Close' }))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
  },
}

export const ContentOnly: Story = {
  args: {
    title: undefined,
    description: undefined,
    'aria-label': 'Keyboard shortcuts',
    trigger: <Button appearance="ghost" variant="accent">Shortcuts</Button>,
    children: (
      <dl style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: 'var(--space-1) var(--space-4)', margin: 0 }}>
        <dt>Search</dt>
        <dd style={{ margin: 0 }}>⌘ K</dd>
        <dt>New file</dt>
        <dd style={{ margin: 0 }}>⌘ N</dd>
      </dl>
    ),
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Shortcuts' }))
    const dialog = await body().findByRole('dialog', { name: 'Keyboard shortcuts' })
    // It fades in from opacity 0.
    await waitFor(() => expect(dialog).toBeVisible())
    await expect(dialog).toHaveTextContent('⌘ K')
  },
}

/** Modal: focus moves inside and is kept there until it closes. */
export const Modal: Story = {
  args: { isModal: true },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Share' }))
    const dialog = await body().findByRole('dialog')
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true))
    // Focus moves in, to the first control. Base UI's modal mode then keeps
    // it there; a synthetic Tab cannot exercise that trap, so it is not asserted.
    // With no visible close button, a hidden one is rendered: Base UI only
    // traps focus when there is one, and it takes focus first.
    const close = within(dialog).getByRole('button', { name: 'Close' })
    await expect(close).toHaveFocus()
    // Shown while it has keyboard focus, so focus is never invisible...
    await expect(close.getBoundingClientRect().width).toBeGreaterThan(1)
    // ...and out of sight once focus moves on.
    await userEvent.tab()
    await expect(close).not.toHaveFocus()
    await expect(close.getBoundingClientRect().width).toBeLessThanOrEqual(1)
    await userEvent.tab({ shift: true })
    await expect(close).toHaveFocus()
    await expect(close.getBoundingClientRect().width).toBeGreaterThan(1)
  },
}

/**
 * The popover open in place, as a picture: rendered inside the story instead
 * of `<body>`, and inert, so a docs page can show it beside other examples
 * without it taking focus. The popup sits in the flow 6px under the trigger,
 * as it opens: positioned, it would flip above the trigger whenever the
 * picture is low in the window, out of its frame.
 */
function Pictured(props: PopoverProps) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  return (
    <div ref={setContainer} inert data-popover-picture style={{ display: 'grid', justifyItems: 'center', gap: 6 }}>
      <style>{`[data-popover-picture] .${styles.positioner} { position: static !important; transform: none !important; }`}</style>
      {container && <Popover {...props} open container={container} />}
    </div>
  )
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Trigger', selector: 'button[aria-haspopup="dialog"]', description: 'One button. Popover adds aria-expanded and aria-haspopup to it.' },
  { name: 'Container', selector: '[role="dialog"]', description: 'The surface, 6px from the trigger. At most 22rem wide.' },
  { name: 'Title', selector: '[role="dialog"] h2', description: 'Optional: names the popover. Without one, pass aria-label.' },
  { name: 'Close button', selector: 'button[aria-label="Close"]', description: 'Optional, in the corner.' },
  { name: 'Description', selector: `.${styles.description}`, description: 'Optional. What the popover is for.' },
  { name: 'Body', selector: `.${styles.body}`, description: 'children: the content.' },
]

/** Every part present, the popover open in place. */
export const Anatomy: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: { hasCloseButton: true },
  render: (args) => <Pictured {...args} />,
  play: async ({ canvas, canvasElement }) => {
    // Rendered inside the story, not <body>.
    const dialog = await canvas.findByRole('dialog', { hidden: true })
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[1]).toBe(dialog)
    await expect(found[2]).toHaveTextContent('Share this file')
  },
}

/** Specs, States: the close button. */
export const CloseButton: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: { description: undefined, children: undefined, hasCloseButton: true },
  render: (args) => <Pictured {...args} />,
}

/** Guidelines, Do: a short task tied to the button that opens it. */
export const DoShortTask: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  render: (args) => <Pictured {...args} />,
}

/** Guidelines, Don't: a long form crammed into a popover. */
export const DontLongForm: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: {
    trigger: <Button appearance="outlined" variant="accent">New project</Button>,
    title: 'New project',
    description: undefined,
    children: (
      <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
        <TextInput label="Name" isFullWidth />
        <TextInput label="Client" isFullWidth />
        <TextInput label="Budget" isFullWidth />
        <TextInput label="Start date" isFullWidth />
        <Button>Create project</Button>
      </div>
    ),
  },
  render: (args) => <Pictured {...args} />,
}
