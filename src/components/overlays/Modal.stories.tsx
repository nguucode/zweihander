import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Button } from '../buttons/Button'
import { Select } from '../inputs/Select'
import { TextInput } from '../inputs/TextInput'
import { Modal, ModalClose, type ModalProps } from './Modal'
import styles from './Modal.module.css'

const meta = {
  title: 'Components/Overlays/Modal',
  tags: ['beta'],
  component: Modal,
  args: {
    trigger: <Button>Edit profile</Button>,
    title: 'Edit profile',
    description: 'Changes show on your public page straight away.',
    children: (
      <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
        <TextInput label="Name" defaultValue="Sam Rivera" isFullWidth />
        <TextInput label="Title" defaultValue="Product designer" isFullWidth />
      </div>
    ),
    footer: (
      <>
        <ModalClose render={<Button variant="secondary" />}>Cancel</ModalClose>
        <Button>Save</Button>
      </>
    ),
    onOpenChange: fn(),
  },
  argTypes: {
    title: {
      description: 'Required: it names the dialog. Say what the modal is for: "Edit profile", "Delete “Atlas”?".',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    trigger: {
      description: 'The button that opens it. Omit when `open` is controlled from elsewhere.',
      control: false,
      table: { type: { summary: 'ReactElement' } },
    },
    description: {
      description: 'Optional, under the title in `--muted-foreground`. Read as the dialog\'s description.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    children: {
      description: 'The body. Scrolls when the modal is taller than the screen; title and footer stay in view.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    footer: {
      description: 'Actions, right-aligned, the main one last. Close it from a button with `<ModalClose render={<Button />}>`.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    size: {
      description: 'Max width: 24rem (`sm`), 32rem (`md`) or 48rem (`lg`). Never wider than the screen.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: { type: { summary: "'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'md'" } },
    },
    hasCloseButton: {
      description: 'The close button in the corner.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: '!isAlert' } },
    },
    closeLabel: {
      description: 'Accessible name of the close button.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Close'" } },
    },
    isAlert: {
      description: 'A decision that must be made: `role="alertdialog"`, no close button by default, and a press on the backdrop does not close it.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    closeOnBackdropClick: {
      description: 'Close on a press on the backdrop. Ignored when `isAlert`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    initialFocus: {
      description: 'Where focus goes on open. By default, the first focusable element.',
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
      description: 'Called with the next open state: on open, on close, on Escape and on a press outside.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    isModal: {
      description: 'While open, traps focus, locks page scroll and makes the rest of the page inert. `false` leaves the page usable. Ignored when `isAlert`: an alert is always modal.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    container: {
      description: 'Where the modal renders instead of `<body>`, e.g. an element in fullscreen, where a modal in `<body>` would not show.',
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
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Edit profile' })
    await userEvent.click(trigger)
    const dialog = await body().findByRole('dialog', { name: 'Edit profile' })
    await expect(dialog).toHaveAccessibleDescription('Changes show on your public page straight away.')
    // The page behind is hidden from assistive tech and stops scrolling.
    await expect(trigger.closest('[aria-hidden="true"]')).not.toBeNull()
    await expect(getComputedStyle(document.body).overflow).toBe('hidden')
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true))
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true)
    // Cancel is a ModalClose: it closes, and focus goes back to the trigger.
    await userEvent.click(within(dialog).getByRole('button', { name: 'Cancel' }))
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    await expect(trigger).toHaveFocus()
  },
}

export const Dismissing: Story = {
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Edit profile' }))
    let dialog = await body().findByRole('dialog')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
    // A press outside the popup closes it too.
    await userEvent.click(canvas.getByRole('button', { name: 'Edit profile' }))
    dialog = await body().findByRole('dialog')
    await userEvent.click(dialog.parentElement!, { clientX: 2, clientY: 2 } as never)
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull())
  },
}

/** A decision that must be made: role="alertdialog", no close button, and a press outside does nothing. */
export const Alert: Story = {
  args: {
    isAlert: true,
    trigger: <Button variant="destructive">Delete project</Button>,
    title: 'Delete “Atlas”?',
    description: 'Its 214 files and every comment on them are deleted for everyone. This cannot be undone.',
    children: undefined,
    size: 'sm',
    footer: (
      <>
        <ModalClose render={<Button variant="secondary" />}>Keep project</ModalClose>
        <Button variant="destructive">Delete</Button>
      </>
    ),
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Delete project' }))
    const dialog = await body().findByRole('alertdialog', { name: 'Delete “Atlas”?' })
    await expect(within(dialog).queryByRole('button', { name: 'Close' })).toBeNull()
    await userEvent.click(dialog.parentElement!, { clientX: 2, clientY: 2 } as never)
    await new Promise((r) => setTimeout(r, 200))
    await waitFor(() => expect(body().getByRole('alertdialog')).toBeVisible())
    await userEvent.click(within(dialog).getByRole('button', { name: 'Keep project' }))
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
    // Escape still closes it.
    await userEvent.click(canvas.getByRole('button', { name: 'Delete project' }))
    await body().findByRole('alertdialog')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
  },
}

/** A Select opened inside a modal lists its options above it. */
export const WithSelect: Story = {
  args: {
    title: 'Invite people',
    description: undefined,
    trigger: <Button>Invite</Button>,
    children: <Select label="Role" options={['Viewer', 'Commenter', 'Editor']} defaultValue="Viewer" isFullWidth />,
    footer: <Button>Send invites</Button>,
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Invite' }))
    const dialog = await body().findByRole('dialog')
    await userEvent.click(within(dialog).getByRole('combobox', { name: 'Role' }))
    const option = await body().findByRole('option', { name: 'Editor' })
    await waitFor(() => {
      const r = option.getBoundingClientRect()
      const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)
      return expect(option.contains(hit)).toBe(true)
    })
  },
}

export const Long: Story = {
  args: {
    title: 'Terms of service',
    description: undefined,
    size: 'lg',
    trigger: <Button appearance="outlined">Read the terms</Button>,
    children: (
      <div>
        {Array.from({ length: 12 }, (_, i) => (
          <p key={i} style={{ margin: '0 0 var(--space-3)' }}>
            {i + 1}. These terms govern your use of the service. By creating an account you agree to them, and to the
            privacy notice that explains what we collect and why.
          </p>
        ))}
      </div>
    ),
    footer: <ModalClose render={<Button />}>Accept</ModalClose>,
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Read the terms' }))
    const dialog = await body().findByRole('dialog')
    // The body scrolls; the footer stays on screen.
    const accept = within(dialog).getByRole('button', { name: 'Accept' })
    await waitFor(() => expect(accept.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight))
  },
}

/**
 * The modal open in place, as a picture: rendered inside the story instead
 * of `<body>`, not modal and inert, so a docs page can show it beside other
 * examples without it taking focus or locking the page. The frame contains
 * layout, so the fixed backdrop and viewport fill the frame, not the window.
 * On a phone the full-size picture is drawn at 75%: a form modal is wider
 * than a docs example has room for.
 */
function Pictured({ width, height = '20rem', ...props }: ModalProps & { width?: string; height?: string }) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  return (
    <div
      ref={setContainer}
      inert
      data-modal-picture={width ? undefined : ''}
      style={{ position: 'relative', contain: 'layout paint', inlineSize: width ?? 'min(34rem, 100vw - 10rem)', blockSize: height, borderRadius: 'var(--radius-panel)' }}
    >
      {!width && <style>{'@media (max-width: 30rem) { [data-modal-picture] { zoom: 0.75; inline-size: calc((100vw - 10rem) / 0.75) !important; } }'}</style>}
      {container && <Modal {...props} trigger={undefined} open isModal={false} container={container} />}
    </div>
  )
}

const editFooter = (
  <>
    <Button variant="secondary">Cancel</Button>
    <Button>Save</Button>
  </>
)

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Backdrop', selector: `.${styles.backdrop}`, description: 'A scrim over the whole page. It blocks the page until the modal closes.' },
  { name: 'Container', selector: '[role="dialog"]', description: 'The surface, centred. Never wider than the screen.' },
  { name: 'Title', selector: '[role="dialog"] h2', description: 'Required: it names the dialog.' },
  { name: 'Close button', selector: 'button[aria-label="Close"]', description: 'On by default, off for an alert.' },
  { name: 'Description', selector: `.${styles.description}`, description: 'Optional. What the modal is for, or what will happen.' },
  { name: 'Body', selector: `.${styles.body}`, description: 'children. Scrolls when the modal is taller than the screen.' },
  { name: 'Footer', selector: `.${styles.footer}`, description: 'Actions, right-aligned, the main one last.' },
]

/** Every part present, the modal open in place. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { footer: editFooter },
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
    await expect(found[2]).toHaveTextContent('Edit profile')
    // Not modal: the page around the picture keeps its scroll.
    await expect(getComputedStyle(document.documentElement).overflow).not.toBe('hidden')
  },
}

/** Specs, States: the close button, in a modal with only a title. */
export const CloseButton: Story = {
  tags: ['!dev'],
  args: { size: 'sm', description: undefined, children: undefined, footer: undefined },
  render: (args) => <Pictured {...args} width="15rem" height="7rem" />,
}

/** Looks like an alert: no close button, a small modal. A picture cannot be an alert dialog, which is always modal. */
const alert = {
  title: 'Delete “Atlas”?',
  description: 'Its 214 files and every comment on them are deleted for everyone. This cannot be undone.',
  children: undefined,
  size: 'sm',
  hasCloseButton: false,
} as const

/** Guidelines, Do: the buttons say what they do. */
export const DoNameTheActions: Story = {
  tags: ['!dev'],
  args: {
    ...alert,
    footer: (
      <>
        <Button variant="secondary">Keep project</Button>
        <Button variant="destructive">Delete</Button>
      </>
    ),
  },
  render: (args) => <Pictured {...args} width="min(22rem, 100vw - 10rem)" height="15rem" />,
}

/** Guidelines, Don't: OK and Cancel make the reader go back to the question. */
export const DontOkCancel: Story = {
  tags: ['!dev'],
  args: {
    ...alert,
    footer: (
      <>
        <Button variant="secondary">Cancel</Button>
        <Button>OK</Button>
      </>
    ),
  },
  render: (args) => <Pictured {...args} width="min(22rem, 100vw - 10rem)" height="15rem" />,
}
