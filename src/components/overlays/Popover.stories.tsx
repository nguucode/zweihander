import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Button } from '../buttons/Button'
import { TextInput } from '../inputs/TextInput'
import { Popover } from './Popover'

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
    side: { control: 'inline-radio', options: ['top', 'right', 'bottom', 'left'] },
    align: { control: 'inline-radio', options: ['start', 'center', 'end'] },
    trigger: { control: false },
    children: { control: false },
  },
  decorators: [(Story) => <div style={{ minBlockSize: '16rem', display: 'flex', justifyContent: 'center', alignItems: 'start', paddingBlock: 'var(--space-6)' }}>{Story()}</div>],
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
