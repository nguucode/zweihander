import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Button } from '../buttons/Button'
import { Modal } from '../overlays/Modal'
import { ToastProvider, useToast, type ToastOptions } from './Toast'

const onUndo = fn()

function Demo({ options, label = 'Show toast' }: { options: ToastOptions; label?: string }) {
  const toast = useToast()
  return <Button onClick={() => toast.add(options)}>{label}</Button>
}

const meta = {
  title: 'Components/Notifications/Toast',
  component: ToastProvider,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: { children: null, placement: 'bottom-right', timeout: 5000, limit: 3 },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
    },
    children: { control: false },
  },
} satisfies Meta<typeof ToastProvider>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)
const row = { display: 'flex', flexWrap: 'wrap' as const, gap: 'var(--space-2)' }

export const Default: Story = {
  render: (args) => (
    <ToastProvider {...args}>
      <Demo options={{ title: 'File moved to Trash', description: 'Q3 report.pdf', action: { label: 'Undo', onClick: onUndo } }} />
    </ToastProvider>
  ),
  play: async ({ canvas }) => {
    onUndo.mockClear()
    await userEvent.click(canvas.getByRole('button', { name: 'Show toast' }))
    const title = await body().findByText('File moved to Trash', {}, { timeout: 3000 })
    const toast = title.closest('[data-base-ui-toast], [role]') as HTMLElement
    // It fades in from opacity 0.
    await waitFor(() => expect(body().getByText('Q3 report.pdf')).toBeVisible())
    await userEvent.click(await body().findByRole('button', { name: 'Undo' }))
    await expect(onUndo).toHaveBeenCalledOnce()
    await userEvent.click(within(toast).getByRole('button', { name: 'Dismiss' }))
    await waitFor(() => expect(body().queryByText('File moved to Trash')).toBeNull(), { timeout: 3000 })
  },
}

export const Variants: Story = {
  render: (args) => (
    <ToastProvider {...args} limit={5}>
      <div style={row}>
        {(['default', 'info', 'success', 'warning', 'danger'] as const).map((variant) => (
          <Demo key={variant} label={variant} options={{ variant, title: `${variant[0].toUpperCase()}${variant.slice(1)}`, description: 'Something happened.' }} />
        ))}
      </div>
    </ToastProvider>
  ),
  play: async ({ canvas }) => {
    for (const v of ['default', 'info', 'success', 'warning', 'danger']) await userEvent.click(canvas.getByRole('button', { name: v }))
    // Each toast is a non-modal dialog; all five fit under the limit.
    // All five fit under the limit. Danger is high priority: an alertdialog
    // whose text Base UI announces assertively through a separate live region.
    await waitFor(() => expect(document.querySelectorAll('[role="dialog"], [role="alertdialog"]')).toHaveLength(5))
    await expect(document.querySelector('[role="alertdialog"]')).toHaveTextContent('Danger')
  },
}

/** Closes itself after `timeout`. */
export const Timeout: Story = {
  render: (args) => (
    <ToastProvider {...args} timeout={400}>
      <Demo options={{ title: 'Saved' }} />
    </ToastProvider>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Show toast' }))
    await body().findByText('Saved')
    await waitFor(() => expect(body().queryByText('Saved')).toBeNull(), { timeout: 3000 })
  },
}

function PromiseDemo() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast.promise(new Promise((resolve) => setTimeout(resolve, 600)), {
          loading: 'Uploading 3 files…',
          success: 'Uploaded 3 files',
          error: 'Upload failed',
        })
      }
    >
      Upload
    </Button>
  )
}

/** A loading toast that becomes success or danger when the promise settles. */
export const PromiseToast: Story = {
  render: (args) => (
    <ToastProvider {...args}>
      <PromiseDemo />
    </ToastProvider>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Upload' }))
    await body().findByText('Uploading 3 files…')
    // Named by its message, since promise() gives it no title.
    await expect(await body().findByRole('dialog', { name: 'Uploaded 3 files' }, { timeout: 3000 })).toBeVisible()
  },
}

export const TopCenter: Story = {
  args: { placement: 'top-center' },
  render: (args) => (
    <ToastProvider {...args}>
      <Demo options={{ variant: 'success', title: 'Invite sent' }} />
    </ToastProvider>
  ),
}

function ModalDemo() {
  const toast = useToast()
  return (
    <Modal
      trigger={<Button>Open modal</Button>}
      title="Share"
      footer={<Button onClick={() => toast.add({ variant: 'success', title: 'Link copied' })}>Copy link</Button>}
    />
  )
}

/** A toast raised from inside a modal shows above it and stays reachable. */
export const FromModal: Story = {
  render: (args) => (
    <ToastProvider {...args}>
      <ModalDemo />
    </ToastProvider>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open modal' }))
    const dialog = await body().findByRole('dialog')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Copy link' }))
    const title = await body().findByText('Link copied')
    // Not hidden from assistive tech by the modal, and drawn on top of it.
    await expect(title.closest('[aria-hidden="true"]')).toBeNull()
    await waitFor(() => {
      const r = title.getBoundingClientRect()
      return expect(title.contains(document.elementFromPoint(r.x + 2, r.y + r.height / 2))).toBe(true)
    })
  },
}
