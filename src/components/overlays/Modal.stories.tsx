import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Button } from '../buttons/Button'
import { Select } from '../inputs/Select'
import { TextInput } from '../inputs/TextInput'
import { Modal, ModalClose } from './Modal'

const meta = {
  title: 'Components/Overlays/Modal',
  component: Modal,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
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
        <ModalClose render={<Button appearance="outlined" variant="accent" />}>Cancel</ModalClose>
        <Button>Save</Button>
      </>
    ),
    onOpenChange: fn(),
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    trigger: { control: false },
    children: { control: false },
    footer: { control: false },
    initialFocus: { control: false },
  },
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
        <ModalClose render={<Button appearance="outlined" variant="accent" />}>Keep project</ModalClose>
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
    await expect(body().getByRole('alertdialog')).toBeVisible()
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
