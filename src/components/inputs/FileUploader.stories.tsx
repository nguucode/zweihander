import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, waitFor } from 'storybook/test'
import { Button } from '../buttons/Button'
import { FileUploader } from './FileUploader'

const file = (name: string, size: number, type: string) =>
  new File([new Uint8Array(size)], name, { type, lastModified: 1_790_000_000_000 })

const report = file('Q3 report.pdf', 240_000, 'application/pdf')
const photo = file('team-photo.jpg', 1_800_000, 'image/jpeg')
const huge = file('raw-scan.png', 12_000_000, 'image/png')
const gif = file('party.gif', 90_000, 'image/gif')

const meta = {
  title: 'Components/Inputs/File Uploader',
  component: FileUploader,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: {
    label: 'Attachments',
    helperText: 'PDF, PNG or JPG, up to 5 MB each.',
    accept: '.pdf,image/png,image/jpeg',
    maxSize: 5_000_000,
    multiple: true,
    onFilesChange: fn(),
    onReject: fn(),
  },
} satisfies Meta<typeof FileUploader>

export default meta
type Story = StoryObj<typeof meta>

const transfer = (files: File[]) => {
  const t = new DataTransfer()
  files.forEach((f) => t.items.add(f))
  return t
}

/** A drag event carrying files. fireEvent copies dataTransfer into a plain object, which loses the file list. */
const drag = (el: HTMLElement, type: 'dragenter' | 'drop', files: File[]) =>
  el.dispatchEvent(new DragEvent(type, { bubbles: true, cancelable: true, dataTransfer: transfer(files) }))

/** What the native picker does: replace the input's files, then fire change. */
const pick = (el: HTMLElement, files: File[]) => {
  const input = el.querySelector<HTMLInputElement>('input[type=file]')!
  input.files = transfer(files).files
  fireEvent.change(input)
}

export const Default: Story = {
  play: async ({ args, canvas, canvasElement }) => {
    const group = canvas.getByRole('group', { name: 'Attachments' })
    const choose = canvas.getByRole('button', { name: 'Choose files' })
    await expect(choose).toHaveAccessibleDescription('PDF, PNG or JPG, up to 5 MB each.')
    pick(canvasElement, [report, photo])
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([report, photo])
    await expect(canvas.getByRole('status')).toHaveTextContent('2 files added.')
    const list = canvas.getByRole('list', { name: 'Chosen files' })
    await expect(list.querySelectorAll('li')).toHaveLength(2)
    await expect(group).toHaveTextContent('240 kB')
    // Removing moves focus to the next file's button, then back to Choose.
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Q3 report.pdf' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('Q3 report.pdf removed.')
    await waitFor(() => expect(canvas.getByRole('button', { name: 'Remove team-photo.jpg' })).toHaveFocus())
    await userEvent.click(canvas.getByRole('button', { name: 'Remove team-photo.jpg' }))
    await waitFor(() => expect(choose).toHaveFocus())
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([])
  },
}

export const Rejected: Story = {
  args: { maxFiles: 2 },
  play: async ({ args, canvas, canvasElement }) => {
    // The native picker filters by accept, but a drop or "All files" does not, so the uploader checks too.
    pick(canvasElement, [report, huge, gif, photo, file('notes.pdf', 10, 'application/pdf')])
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([report, photo])
    await expect(args.onReject).toHaveBeenCalledWith([
      expect.objectContaining({ reason: 'size', file: huge }),
      expect.objectContaining({ reason: 'type', file: gif }),
      expect.objectContaining({ reason: 'count' }),
    ])
    await expect(canvas.getByText('raw-scan.png is larger than 5 MB.')).toBeVisible()
    await expect(canvas.getByText('party.gif is not an accepted type.')).toBeVisible()
    await expect(canvas.getByText('notes.pdf was not added: the limit is 2 files.')).toBeVisible()
    await expect(canvas.getByRole('status')).toHaveTextContent('2 files added. 3 not added.')
    // The errors are part of the button's description, for whoever lands on it next.
    await expect(canvas.getByRole('button', { name: 'Choose files' })).toHaveAccessibleDescription(/party\.gif is not an accepted type/)
  },
}

export const Drop: Story = {
  play: async ({ args, canvas }) => {
    const zone = canvas.getByText(/Drag files here/).parentElement!
    drag(zone, 'dragenter', [])
    await waitFor(() => expect(zone.className).toMatch(/dragging/))
    drag(zone, 'drop', [report])
    await waitFor(() => expect(zone.className).not.toMatch(/dragging/))
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([report])
    // The same file again is not added twice.
    drag(zone, 'drop', [report])
    await expect(args.onFilesChange).toHaveBeenCalledTimes(1)
  },
}

export const Single: Story = {
  args: { multiple: false, label: 'Avatar', accept: 'image/*', helperText: 'A square image works best.' },
  play: async ({ args, canvas, canvasElement }) => {
    await expect(canvas.getByText('Drag a file here or')).toBeVisible()
    pick(canvasElement, [photo])
    await expect(canvas.getByRole('list', { name: 'Chosen file' })).toHaveTextContent('team-photo.jpg')
    // Choosing again replaces it.
    pick(canvasElement, [file('me.png', 30_000, 'image/png')])
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([expect.objectContaining({ name: 'me.png' })])
    // A rejected file does not replace the chosen one.
    ;(args.onFilesChange as ReturnType<typeof fn>).mockClear()
    pick(canvasElement, [report])
    await expect(canvas.getByText('Q3 report.pdf is not an accepted type.')).toBeVisible()
    await expect(args.onFilesChange).not.toHaveBeenCalled()
    await expect(canvas.getByRole('list', { name: 'Chosen file' })).toHaveTextContent('me.png')
  },
}

/** Uploading is yours; `getFileStatus` shows how it is going. */
export const WithStatus: Story = {
  args: {
    defaultFiles: [report, photo, file('contract.pdf', 1_200_000, 'application/pdf')],
    getFileStatus: (f) =>
      f.name === 'team-photo.jpg' ? { progress: 45 } : f.name === 'contract.pdf' ? { error: 'Upload failed. Try again.' } : undefined,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar', { name: 'Uploading team-photo.jpg' })).toHaveAttribute('aria-valuenow', '45')
    await expect(canvas.getByText('Upload failed. Try again.')).toBeVisible()
  },
}

export const Required: Story = {
  args: { required: true },
  render: (args) => (
    <form aria-label="Expense claim" onSubmit={(e) => e.preventDefault()}>
      <FileUploader {...args} />
    </form>
  ),
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('group', { name: 'Attachments (required)' })).toBeVisible()
    // Submitting empty: our message, and focus on Choose, not on the hidden input.
    ;(canvas.getByRole('form') as HTMLFormElement).requestSubmit()
    const choose = canvas.getByRole('button', { name: 'Choose files' })
    await waitFor(() => expect(choose).toHaveFocus())
    await expect(choose).toHaveAccessibleDescription(/Choose at least one file\./)
    pick(canvasElement, [report])
    await expect(canvas.queryByText('Choose at least one file.')).toBeNull()
  },
}

function ControlledUploader(props: { onFilesChange: (files: File[]) => void }) {
  const [files, setFiles] = useState<File[]>([])
  return (
    <form aria-label="Upload" style={{ display: 'grid', gap: 'var(--space-3)', justifyItems: 'start' }}>
      <FileUploader
        label="Attachments"
        name="attachments"
        multiple
        files={files}
        onFilesChange={(next) => {
          setFiles(next)
          props.onFilesChange(next)
        }}
      />
      <Button variant="secondary" appearance="outlined" size="sm" onClick={() => setFiles([])}>
        Clear after upload
      </Button>
    </form>
  )
}

/** A controlled list cleared from outside clears what the form sends, too. */
export const Controlled: Story = {
  render: (args) => <ControlledUploader onFilesChange={args.onFilesChange!} />,
  play: async ({ canvas, canvasElement }) => {
    pick(canvasElement, [report, photo])
    const form = canvas.getByRole('form') as HTMLFormElement
    await expect(new FormData(form).getAll('attachments')).toHaveLength(2)
    await userEvent.click(canvas.getByRole('button', { name: 'Clear after upload' }))
    await expect(canvas.queryByRole('list')).toBeNull()
    await waitFor(() => expect((new FormData(form).getAll('attachments') as File[]).filter((f) => f.size > 0)).toHaveLength(0))
  },
}

export const Disabled: Story = {
  args: { disabled: true, defaultFiles: [report] },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Choose files' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Remove Q3 report.pdf' })).toBeDisabled()
  },
}

export const InForm: Story = {
  args: { name: 'attachments' },
  render: (args) => (
    <form aria-label="Expense claim">
      <FileUploader {...args} />
    </form>
  ),
  play: async ({ canvas, canvasElement }) => {
    pick(canvasElement, [report])
    pick(canvasElement, [photo])
    // The native input holds the whole list, not just the last pick.
    const sent = new FormData(canvas.getByRole('form') as HTMLFormElement).getAll('attachments') as File[]
    await expect(sent.map((f) => f.name)).toEqual(['Q3 report.pdf', 'team-photo.jpg'])
  },
}
