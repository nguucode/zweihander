import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Button } from '../buttons/Button'
import { TextInput } from '../inputs/TextInput'
import { Popover } from './Popover'

const meta = {
  title: 'Components/Overlays/Popover',
  component: Popover,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
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

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Share' })
    await userEvent.click(trigger)
    const dialog = await body().findByRole('dialog', { name: 'Share this file' })
    await expect(dialog).toHaveAccessibleDescription('Anyone you invite can view and comment.')
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true)
    // Escape closes it and puts focus back on the trigger.
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(trigger).toHaveFocus()
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
    await expect(within(dialog).getByRole('button', { name: 'Close' })).toHaveFocus()
  },
}
