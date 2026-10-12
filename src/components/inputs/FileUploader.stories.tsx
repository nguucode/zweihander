import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, waitFor } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
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
  tags: ['beta'],
  component: FileUploader,
  // These descriptions are the docs' API table and the Playground's props
  // panel; react-docgen supplies the types and defaults.
  argTypes: {
    files: { description: 'Controlled list. Pair with `onFilesChange`.', control: false },
    defaultFiles: { description: 'Starting list when uncontrolled.', control: false },
    onFilesChange: { description: 'The list after an add or a remove. Rejected files are never in it. Start uploads here.', control: false },
    onReject: {
      description: 'Files that did not pass `accept`, `maxSize` or `maxFiles`: `{ file, reason, message }[]`, `reason` being `type`, `size` or `count`.',
      control: false,
    },
    accept: { description: 'As the native attribute: extensions and MIME types, e.g. `.pdf,image/*`. Checked on drop too.', control: 'text' },
    multiple: { description: 'Many files, appended. Without it, a new file replaces the chosen one.', control: 'boolean' },
    maxSize: { description: 'Largest file, in bytes.', control: 'number' },
    maxFiles: { description: 'Most files in the list, with `multiple`.', control: 'number' },
    label: { description: 'Names the whole uploader, a group.', control: 'text' },
    helperText: { description: 'Inside the drop zone, under the button: what is allowed, e.g. "PNG or JPG, up to 5 MB."', control: 'text' },
    getFileStatus: {
      description: 'Upload progress (0–100) or a short error per file. The uploader does not upload: your code does, and reports here.',
      control: false,
    },
    name: { description: 'Submitted with the form, as a native file input carrying the whole list.', control: 'text' },
    disabled: { description: 'Fades the icon and buttons; nothing can be added or removed.', control: 'boolean' },
    required: { description: 'An empty submit shows "Choose at least one file." and focuses the Choose button.', control: 'boolean' },
    isFullWidth: { description: 'Fills the width of its container instead of 24rem.', control: 'boolean' },
    className: { description: 'On the outer group.', control: false },
  },
  args: {
    label: 'Attachments',
    helperText: 'PDF, PNG or JPG, up to 5 MB each.',
    accept: '.pdf,image/png,image/jpeg',
    maxSize: 5_000_000,
    multiple: true,
    onFilesChange: fn(),
    onReject: fn(),
  },
  excludeStories: ['anatomyParts'],
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
      f.name === 'team-photo.jpg' ? { progress: 45 } : f.name === 'contract.pdf' ? { error: 'Upload failed' } : undefined,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar', { name: 'Uploading team-photo.jpg' })).toHaveAttribute('aria-valuenow', '45')
    await expect(canvas.getByText('Upload failed')).toBeVisible()
  },
}

/** Word, Excel, PowerPoint, PDF, image and audio get a coloured badge; anything else the bare page. */
export const FileTypes: Story = {
  args: {
    accept: undefined,
    helperText: undefined,
    defaultFiles: [
      file('Proposal.docx', 84_000, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'),
      file('Budget.xlsx', 52_000, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
      file('Kick-off.pptx', 3_400_000, 'application/vnd.openxmlformats-officedocument.presentationml.presentation'),
      report,
      photo,
      file('Interview.mp3', 4_100_000, 'audio/mpeg'),
      file('notes.txt', 900, 'text/plain'),
      file('Minutes of the quarterly steering committee meeting, final version.docx', 128_000, 'application/msword'),
    ],
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

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: '[id$="-label"]', description: 'Names the whole uploader, a group.' },
  { name: 'Drop zone', selector: 'div:has(> input[type="file"])', description: 'Dashed edge; solid while a file is dragged over it.' },
  { name: 'Choose button', selector: 'div:has(> input[type="file"]) > button', description: 'An accent contained Button. Opens the system picker: the way in for keyboard, screen reader and touch.' },
  { name: 'Helper text', selector: '[id$="-helper"]', description: 'What is allowed. Describes the Choose button.' },
  { name: 'File row', selector: 'li', description: 'Type icon, name and size on one line. The name truncates, the size never does.' },
  { name: 'Type icon', selector: 'li > svg', description: 'A page with a coloured badge for Word, Excel, PowerPoint, PDF, image and audio.' },
  { name: 'Progress ring', selector: '[role="progressbar"]', description: 'While getFileStatus reports progress under 100. An error takes its place.' },
  { name: 'Remove button', selector: '[data-remove]', description: 'A ghost icon Button named "Remove <file name>".' },
]

/** Every part present: helper text, one file uploading and one done. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: {
    defaultFiles: [photo, report],
    getFileStatus: (f) => (f.name === 'team-photo.jpg' ? { progress: 45 } : undefined),
  },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[2]).toHaveAccessibleName('Choose files')
    await expect(found[4]).toContainElement(found[6] as HTMLElement)
  },
}

/** Guidelines, Do: the rules up front, so nobody learns them from a rejection. */
export const DoStateTheRules: Story = {}

/** Guidelines, Don't: no rules shown, so people learn them from a rejection. */
export const DontHideTheRules: Story = {
  tags: ['!dev'],
  args: { helperText: undefined },
}
