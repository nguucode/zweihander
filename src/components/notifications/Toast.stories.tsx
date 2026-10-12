import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
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
  tags: ['beta'],
  component: ToastProvider,
  args: { children: null, placement: 'bottom-right', timeout: 5000, limit: 3 },
  // Every prop is described here: these are the docs' API table and the
  // Playground's props panel.
  argTypes: {
    children: {
      description: 'The app. `useToast()` works anywhere inside it.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    placement: {
      description: 'The corner, or edge centre, toasts appear in. They swipe away toward the nearest edge.',
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      table: {
        type: { summary: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'" },
        defaultValue: { summary: "'bottom-right'" },
      },
    },
    timeout: {
      description: 'Default time on screen, in milliseconds. A toast can set its own; `0` keeps it until dismissed.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '5000' } },
    },
    limit: {
      description: 'Toasts shown at once; newer ones wait until one closes.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '3' } },
    },
    container: {
      description: "Where the toasts render. In an element with a `transform` they sit in its corner instead of the window's; in a size container (`container-type: inline-size`) they fit its width.",
      control: false,
      table: { type: { summary: 'HTMLElement | RefObject<HTMLElement | null> | null' }, defaultValue: { summary: 'document.body' } },
    },
  },
  excludeStories: ['anatomyParts'],
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

function UpdateDemo() {
  const toast = useToast()
  return (
    <Button
      onClick={() => {
        const id = toast.add({ variant: 'success', title: 'Moved', action: { label: 'Undo', onClick: () => {} } })
        setTimeout(() => toast.update(id, { description: '3 files' }), 100)
      }}
    >
      Move
    </Button>
  )
}

/** A partial update changes only what it names: the variant and action stay. */
export const Update: Story = {
  render: (args) => (
    <ToastProvider {...args}>
      <UpdateDemo />
    </ToastProvider>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Move' }))
    await body().findByText('3 files', {}, { timeout: 3000 })
    const toast = document.querySelector('[role="dialog"]')!
    await expect(toast).toHaveAttribute('data-type', 'success')
    await expect(within(toast as HTMLElement).getByRole('button', { name: 'Undo' })).toBeVisible()
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

/** Shows these toasts on mount, kept open, and closes them on unmount. */
function Shown({ toasts, pending }: { toasts: ToastOptions[]; pending?: string }) {
  const toast = useToast()
  useEffect(() => {
    for (const options of toasts) toast.add({ timeout: 0, ...options })
    // A promise that never settles keeps a loading toast on screen.
    if (pending) toast.promise(new Promise(() => {}), { loading: pending, success: '', error: '' })
    return () => toast.close()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps -- shown once, on mount
  return null
}

/**
 * Toasts drawn in place, for the docs. The inner layer's `transform` makes it
 * the containing block of the fixed viewport, so the toasts sit in its corner
 * rather than the window's; as a size container, they fit its width.
 */
function Preview({ toasts, pending, height = '7rem' }: { toasts: ToastOptions[]; pending?: string; height?: string }) {
  // The layer must exist before the portal mounts into it.
  const [layer, setLayer] = useState<HTMLDivElement | null>(null)
  return (
    <div style={{ position: 'relative', blockSize: height }}>
      {/* Sets the width: a toast's, or less when there is less room. The
          fixed toasts give the box no width of their own, and a replaced
          element with a percentage max-width can shrink to fit. */}
      <svg aria-hidden="true" style={{ display: 'block', inlineSize: '26rem', maxInlineSize: '100%', blockSize: 0 }} />
      <div ref={setLayer} style={{ position: 'absolute', inset: 0, containerType: 'inline-size', transform: 'translateZ(0)' }}>
        {layer && (
          <ToastProvider container={layer} placement="top-left" limit={toasts.length + (pending ? 1 : 0)}>
            <Shown toasts={toasts} pending={pending} />
          </ToastProvider>
        )}
      </div>
    </div>
  )
}

const moved: ToastOptions = { title: 'File moved to Trash', description: 'Q3 report.pdf', action: { label: 'Undo', onClick: () => {} } }

/** One toast in place, every part showing. */
export const Static: Story = {
  render: () => <Preview toasts={[moved]} />,
  play: async ({ canvasElement }) => {
    // Rendered into the story, not the page's corner.
    const toast = await within(canvasElement).findByRole('dialog', {}, { timeout: 3000 })
    await expect(toast).toHaveTextContent('File moved to Trash')
  },
}

/** Every variant in place: the colour is on the icon only. */
export const VariantsStatic: Story = {
  render: () => (
    <Preview
      height="22rem"
      toasts={(['default', 'info', 'success', 'warning', 'danger'] as const).map((variant) => ({
        variant,
        title: `${variant[0].toUpperCase()}${variant.slice(1)}`,
        description: 'Something happened.',
        // A picture of each variant. A high-priority toast hides itself from
        // assistive tech until focused (Base UI announces its text through a
        // live region of its own), which axe flags in a static preview.
        priority: 'low',
      }))}
    />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() => expect(canvasElement.querySelectorAll('[role="dialog"], [role="alertdialog"]')).toHaveLength(5))
  },
}

/** The States block's example: four side by side are narrow, so the title wraps. */
export const StateExample: Story = {
  tags: ['!dev'],
  render: () => <Preview toasts={[moved]} height="8.5rem" />,
}

/** While a `promise()` is pending: a spinner in place of the icon. */
export const Pending: Story = {
  tags: ['!dev'],
  render: () => <Preview toasts={[]} pending="Uploading 3 files…" height="5.5rem" />,
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: '[role="dialog"]', description: 'The surface, in the opposite appearance to the page.' },
  { name: 'Icon', selector: '[role="dialog"] > span[aria-hidden="true"]', description: "The variant's filled icon; none for `default`, a spinner while pending." },
  { name: 'Title', selector: '[role="dialog"] h2', description: 'Semibold. What happened.' },
  { name: 'Description', selector: '[role="dialog"] p', description: 'Optional, muted.' },
  { name: 'Action', selector: '[role="dialog"] button:not([aria-label])', description: 'Optional, one text button, e.g. "Undo".' },
  { name: 'Close button', selector: '[role="dialog"] button[aria-label="Dismiss"]', description: 'Always there.' },
]

/** Every part present, in place. */
export const Anatomy: Story = {
  tags: ['!dev'],
  render: () => <Preview toasts={[{ ...moved, variant: 'success' }]} />,
  play: async ({ canvasElement }) => {
    await within(canvasElement).findByRole('dialog', {}, { timeout: 3000 })
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[2]).toHaveTextContent('File moved to Trash')
    await expect(found[4]).toHaveTextContent('Undo')
  },
}

/** Guidelines, Do: news about something done, with a way to undo it. */
export const DoUndo: Story = {
  tags: ['!dev'],
  render: () => <Preview toasts={[moved]} />,
}

/** Guidelines, Don't: a problem the reader must fix, in something that goes away. */
export const DontMustAct: Story = {
  tags: ['!dev'],
  render: () => (
    <Preview
      toasts={[
        {
          variant: 'warning',
          title: 'Your card expires tomorrow',
          description: 'Update it to keep your plan.',
          action: { label: 'Update card', onClick: () => {} },
        },
      ]}
    />
  ),
}
