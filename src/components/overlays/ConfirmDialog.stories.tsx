import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy, Pictured } from '../../../.storybook/blocks'
import { Button } from '../buttons/Button'
import { ConfirmDialog, type ConfirmDialogProps } from './ConfirmDialog'
import styles from './ConfirmDialog.module.css'
import modalStyles from './Modal.module.css'

const meta = {
  title: 'Components/Overlays/Confirm Dialog',
  tags: ['beta'],
  component: ConfirmDialog,
  args: {
    trigger: <Button variant="destructive">Delete project</Button>,
    title: 'Delete “Atlas”?',
    description: 'Its 214 files and every comment on them are deleted for everyone. You cannot undo this.',
    confirmLabel: 'Delete project',
    onConfirm: fn(),
    onOpenChange: fn(),
  },
  argTypes: {
    title: {
      description: 'The action, as a question: "Delete “Atlas”?". Names the dialog; the warning icon is not part of the name.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    description: {
      description: 'Required: what happens, to what, and that it cannot be undone. Read as the dialog\'s description.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    confirmLabel: {
      description: 'Required: the destructive button, named after what it does ("Delete project"), never "OK".',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    cancelLabel: {
      description: 'The safe button. It has focus when the dialog opens.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Cancel'" } },
    },
    confirmText: {
      description:
        'Type to confirm: adds a field, and the confirm button stays disabled until the reader types this exactly (case-sensitive, spaces around it ignored). Use the name of what is deleted. Only for a delete that is large and cannot be undone; empty means no field.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onConfirm: {
      description: 'Called when the reader confirms, by the button or Enter in the field. The dialog then closes.',
      control: false,
      table: { type: { summary: '() => void' } },
    },
    trigger: {
      description: 'The button that opens it. Omit when `open` is controlled from elsewhere.',
      control: false,
      table: { type: { summary: 'ReactElement' } },
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
      description: 'Called with the next open state: on open, Cancel, Escape and confirm.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    container: {
      description: 'Where it renders instead of `<body>`, e.g. an element in fullscreen.',
      control: false,
      table: { type: { summary: 'HTMLElement | null' } },
    },
    isModal: {
      description: '`false` renders a plain, non-modal dialog, for pictures of it such as the ones on these docs. A real confirm dialog stays modal.',
      control: false,
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof ConfirmDialog>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

const workspace = {
  title: 'Delete the “northwind” workspace?',
  description: 'Its 12 projects, 3,480 files and every member’s access are deleted for good. You cannot undo this.',
  confirmLabel: 'Delete workspace',
  confirmText: 'northwind',
} as const

/** An everyday delete: say what happens, then Cancel or the action. */
export const Default: Story = {
  play: async ({ args, canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Delete project' })
    await userEvent.click(trigger)
    const dialog = await body().findByRole('alertdialog', { name: 'Delete “Atlas”?' })
    await expect(dialog).toHaveAccessibleDescription(args.description as string)
    // The safe choice has focus, so Enter cannot delete.
    const cancel = within(dialog).getByRole('button', { name: 'Cancel' })
    await waitFor(() => expect(cancel).toHaveFocus())
    // A press outside does nothing.
    await userEvent.click(dialog.parentElement!, { clientX: 2, clientY: 2 } as never)
    await new Promise((r) => setTimeout(r, 200))
    await expect(body().getByRole('alertdialog')).toBeVisible()
    await userEvent.click(cancel)
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
    await waitFor(() => expect(trigger).toHaveFocus())
    await expect(args.onConfirm).not.toHaveBeenCalled()
    // Escape closes it too.
    await userEvent.click(trigger)
    await body().findByRole('alertdialog')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
    await expect(args.onConfirm).not.toHaveBeenCalled()
    // The action confirms, once, and closes.
    await userEvent.click(trigger)
    const again = await body().findByRole('alertdialog')
    await userEvent.click(within(again).getByRole('button', { name: 'Delete project' }))
    await expect(args.onConfirm).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(false)
  },
}

/** A large delete that cannot be undone: the button waits until the name is typed. */
export const TypeToConfirm: Story = {
  args: { ...workspace, trigger: <Button variant="destructive">Delete workspace</Button> },
  play: async ({ args, canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Delete workspace' })
    await userEvent.click(trigger)
    const dialog = await body().findByRole('alertdialog', { name: 'Delete the “northwind” workspace?' })
    const field = within(dialog).getByRole('textbox', { name: 'To confirm, type northwind' })
    const confirm = within(dialog).getByRole('button', { name: 'Delete workspace' })
    // The field is the first thing to tab to, so it has focus.
    await waitFor(() => expect(field).toHaveFocus())
    await expect(confirm).toBeDisabled()
    // Case counts; Enter before a match does nothing.
    await userEvent.type(field, 'Northwind{Enter}')
    await expect(confirm).toBeDisabled()
    await expect(args.onConfirm).not.toHaveBeenCalled()
    await userEvent.clear(field)
    await userEvent.type(field, ' northwind ')
    await expect(confirm).toBeEnabled()
    // Enter in the field confirms once it matches.
    await userEvent.keyboard('{Enter}')
    await expect(args.onConfirm).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
    // Reopened, the field starts empty again.
    await userEvent.click(trigger)
    const again = await body().findByRole('alertdialog')
    await expect(within(again).getByRole('textbox')).toHaveValue('')
    await expect(within(again).getByRole('button', { name: 'Delete workspace' })).toBeDisabled()
  },
}

/** The dialog open in place, as a picture, not modal: it must not lock the docs page. */
const picture = ({ height = '19rem', ...args }: ConfirmDialogProps & { height?: string }) => (
  <Pictured
    style={{ position: 'relative', contain: 'layout paint', inlineSize: 'min(26rem, 100vw - 6rem)', blockSize: height, borderRadius: 'var(--radius-panel)' }}
  >
    {(container) => <ConfirmDialog {...args} trigger={undefined} open isModal={false} container={container} />}
  </Pictured>
)


/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Warning icon', selector: `.${styles.icon}`, description: 'In `--destructive`. Decorative: not part of the name.' },
  { name: 'Title', selector: '[role="dialog"] h2', description: 'The action, as a question. Names the dialog.' },
  { name: 'Consequence', selector: `.${modalStyles.description}`, description: 'What happens, to what, and that it cannot be undone.' },
  { name: 'Type to confirm', selector: '[role="dialog"] input', description: 'Optional, `confirmText`. The confirm button waits for an exact match.' },
  { name: 'Cancel', selector: `.${modalStyles.footer} > :first-child`, description: 'The safe choice. Focus starts here, or in the field.' },
  { name: 'Confirm', selector: `.${modalStyles.footer} > :last-child`, description: '`destructive`, named after what it does.' },
]

/** Every part present, the dialog open in place. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: workspace,
  render: picture,
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[1]).toHaveTextContent('Delete the “northwind” workspace?')
    await expect(found[5]).toBeDisabled()
  },
}

/** Specs, States: the field empty, the confirm button disabled. */
export const StateWaiting: Story = {
  tags: ['!dev'],
  args: workspace,
  render: picture,
}

/** Guidelines, Do: an everyday delete asks once, with no typing. */
export const DoEverydayDelete: Story = {
  tags: ['!dev'],
  args: {
    title: 'Delete this comment?',
    description: 'It is removed from the thread for everyone.',
    confirmLabel: 'Delete comment',
  },
  render: (args) => picture({ ...args, height: '14rem' }),
}

/** Guidelines, Don't: typing for a small delete teaches readers to type without reading. */
export const DontTypeForSmall: Story = {
  tags: ['!dev'],
  args: {
    title: 'Delete this comment?',
    description: 'It is removed from the thread for everyone.',
    confirmLabel: 'Delete comment',
    confirmText: 'delete',
  },
  render: (args) => picture({ ...args, height: '19rem' }),
}
