import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Table, type TableColumn } from '@/components/data-display/Table'
import { Modal } from '@/components/overlays/Modal'
import { DescriptionList } from './DescriptionList'
import { InlineEdit, type InlineEditProps } from './InlineEdit'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Keeps its own value, so a story can save and see the change. */
function Editable({ value: initial, onSave, ...props }: InlineEditProps) {
  const [value, setValue] = useState(initial)
  return (
    <InlineEdit
      {...props}
      value={value}
      onSave={async (next) => {
        const message = await onSave(next)
        if (!message) setValue(next)
        return message
      }}
    />
  )
}

const checkEmail = (next: string) => (EMAIL.test(next) ? undefined : 'Enter an email address like name@example.com.')

/** A customer record: each detail edits in its row. */
function Customer({ onSave = () => undefined }: { onSave?: InlineEditProps['onSave'] }) {
  const row = (term: string, value: string, extra?: Partial<InlineEditProps>) => ({
    term,
    details: <Editable label={term} value={value} onSave={onSave} {...extra} />,
  })
  return (
    <DescriptionList
      title="Customer"
      description="Click a detail to change it."
      items={[
        row('Company', 'Acme Corp'),
        row('Email', 'billing@acme.example', { inputMode: 'email', onSave: (v) => checkEmail(v) ?? onSave(v) }),
        row('Phone', '', { inputMode: 'tel', placeholder: 'Add a phone number' }),
        row('Payment terms', 'Net 30'),
      ]}
    />
  )
}

interface Invoice {
  id: string
  customer: string
  reference: string
}

const INVOICES: Invoice[] = [
  { id: 'INV-1040', customer: 'Acme Corp', reference: 'PO-2291' },
  { id: 'INV-1041', customer: 'Globex', reference: '' },
  { id: 'INV-1042', customer: 'Initech', reference: 'PO-2307' },
]

function Invoices() {
  const [rows, setRows] = useState(INVOICES)
  const set = (id: string, reference: string) => setRows((all) => all.map((r) => (r.id === id ? { ...r, reference } : r)))
  const columns: TableColumn<Invoice>[] = [
    { key: 'id', header: 'Invoice', isRowHeader: true },
    { key: 'customer', header: 'Customer' },
    {
      key: 'reference',
      header: 'PO reference',
      cell: (row) => (
        <InlineEdit
          size="sm"
          label={`PO reference for ${row.id}`}
          value={row.reference}
          placeholder="Add"
          onSave={(next) => set(row.id, next)}
        />
      ),
    },
  ]
  return <Table caption="Invoices" columns={columns} rows={rows} getRowId={(r) => r.id} />
}

const meta = {
  title: 'Patterns/Application UI/Inline Edit',
  tags: ['experimental'],
  component: InlineEdit,
  parameters: { layout: 'padded' },
  argTypes: {
    value: { description: 'The saved value. Update it after `onSave` succeeds.', control: 'text' },
    label: { description: 'What the value is, e.g. "Email". Names the input, and the value\'s button as "Edit Email".', control: 'text' },
    onSave: {
      description:
        'Called with the new value on Enter, Save or leaving the field, only when it changed. Return or resolve a message to show it under the field and stay in edit; a throw or rejection shows its message the same way. While a promise is pending the field is saving.',
    },
    placeholder: { description: 'Shown, muted, in place of an empty value.', control: 'text', table: { defaultValue: { summary: 'Empty' } } },
    inputMode: {
      description: 'The on-screen keyboard to offer. The input stays `type="text"`, so the whole value can be selected on edit; check the format in `onSave`.',
      control: 'select',
      options: ['text', 'email', 'numeric', 'decimal', 'tel', 'url'],
    },
    size: { description: '`sm` in a compact table row.', control: 'inline-radio', options: ['sm', 'md'], table: { defaultValue: { summary: 'md' } } },
  },
  args: { value: 'Acme Corp', label: 'Company', onSave: fn() },
  decorators: [(Story) => <div style={{ maxInlineSize: '40rem' }}>{Story()}</div>],
} satisfies Meta<typeof InlineEdit>

export default meta
type Story = StoryObj<typeof meta>

/** Rows of a description list. Click a value, change it, press Enter. */
export const Default: Story = {
  render: () => <Customer />,
  play: async ({ canvas }) => {
    const before = within(canvas.getByRole('button', { name: 'Edit Company: Acme Corp' })).getByText('Acme Corp').getBoundingClientRect()
    await userEvent.click(canvas.getByRole('button', { name: 'Edit Company: Acme Corp' }))
    const input = canvas.getByRole('textbox', { name: 'Company' })
    await expect(input).toHaveFocus()
    // The input's text starts where the value's did: edit mode does not shift it.
    const box = input.getBoundingClientRect()
    await expect(Math.abs(box.left + parseFloat(getComputedStyle(input).paddingInlineStart) - before.left)).toBeLessThan(2)
    // And on the term's line: the value's text shares its top with the term's.
    await expect(Math.abs(before.top - canvas.getByText('Company').getBoundingClientRect().top)).toBeLessThan(2)
    // The whole value is selected, so typing replaces it.
    await expect([(input as HTMLInputElement).selectionStart, (input as HTMLInputElement).selectionEnd]).toEqual([0, 9])
    await userEvent.keyboard('Acme Corporation{Enter}')
    const value = await canvas.findByRole('button', { name: 'Edit Company: Acme Corporation' })
    await expect(value).toHaveFocus()
  },
}

/** A column of a table, at `sm`. The value lines up with the text in the cells beside it. */
export const InTable: Story = {
  render: () => <Invoices />,
  play: async ({ canvas }) => {
    const cell = canvas.getByRole('button', { name: 'Edit PO reference for INV-1040: PO-2291' })
    const text = within(cell).getByText('PO-2291').getBoundingClientRect()
    const header = canvas.getByRole('columnheader', { name: 'PO reference' })
    const headerText = header.getBoundingClientRect().left + parseFloat(getComputedStyle(header).paddingInlineStart)
    await expect(Math.abs(text.left - headerText)).toBeLessThan(2)
    await userEvent.click(canvas.getByRole('button', { name: 'Edit PO reference for INV-1041: Add' }))
    await userEvent.keyboard('PO-2300{Enter}')
    await expect(await canvas.findByRole('button', { name: 'Edit PO reference for INV-1041: PO-2300' })).toBeVisible()
  },
}

/**
 * Tab to a value, Enter to edit, Escape to drop the change: the old value
 * stays and focus is back on it.
 */
export const Keyboard: Story = {
  render: (args) => <Editable {...args} />,
  play: async ({ args, canvas }) => {
    await userEvent.tab()
    const value = canvas.getByRole('button', { name: 'Edit Company: Acme Corp' })
    await expect(value).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(canvas.getByRole('textbox', { name: 'Company' })).toHaveFocus()
    await userEvent.keyboard('Globex{Escape}')
    const back = await canvas.findByRole('button', { name: 'Edit Company: Acme Corp' })
    await expect(back).toHaveFocus()
    await expect(args.onSave).not.toHaveBeenCalled()
    // Space opens it too.
    await userEvent.keyboard(' ')
    await expect(canvas.getByRole('textbox', { name: 'Company' })).toHaveFocus()
    await userEvent.keyboard('{Escape}')
    await expect(await canvas.findByRole('button', { name: 'Edit Company: Acme Corp' })).toHaveFocus()
    // Unchanged, Enter just closes the field.
    await userEvent.keyboard('{Enter}{Enter}')
    await expect(await canvas.findByRole('button', { name: 'Edit Company: Acme Corp' })).toHaveFocus()
    await expect(args.onSave).not.toHaveBeenCalled()
  },
}

/** Save and Cancel do what Enter and Escape do, for a pointer or a touch screen. */
export const SaveAndCancel: Story = {
  render: (args) => <Editable {...args} />,
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^Edit Company/ }))
    await userEvent.keyboard('Globex')
    await userEvent.click(canvas.getByRole('button', { name: 'Cancel' }))
    await expect(await canvas.findByRole('button', { name: 'Edit Company: Acme Corp' })).toHaveFocus()
    await expect(args.onSave).not.toHaveBeenCalled()

    await userEvent.click(canvas.getByRole('button', { name: /^Edit Company/ }))
    await userEvent.keyboard('Globex')
    await userEvent.click(canvas.getByRole('button', { name: 'Save' }))
    await expect(await canvas.findByRole('button', { name: 'Edit Company: Globex' })).toHaveFocus()
    await expect(args.onSave).toHaveBeenCalledTimes(1)
    await expect(args.onSave).toHaveBeenCalledWith('Globex')
  },
}

/** Leaving the field keeps the change, so a click elsewhere never loses typing. */
export const SaveOnBlur: Story = {
  render: (args) => (
    <>
      <Editable {...args} />
      <button type="button">Elsewhere</button>
    </>
  ),
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^Edit Company/ }))
    await userEvent.keyboard('Globex')
    await userEvent.click(canvas.getByRole('button', { name: 'Elsewhere' }))
    await expect(await canvas.findByRole('button', { name: 'Edit Company: Globex' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Elsewhere' })).toHaveFocus()
    await expect(args.onSave).toHaveBeenCalledTimes(1)
  },
}

/** The error shows at the field, which stays open with what was typed. */
export const Invalid: Story = {
  render: () => <Customer />,
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^Edit Email/ }))
    await userEvent.keyboard('billing at acme{Enter}')
    const input = canvas.getByRole('textbox', { name: 'Email' })
    await waitFor(() => expect(input).toHaveAttribute('aria-invalid', 'true'))
    await expect(input).toHaveAccessibleDescription('Enter an email address like name@example.com.')
    await expect(input).toHaveValue('billing at acme')
    await expect(input).toHaveFocus()
    // Typing clears the error.
    await userEvent.keyboard('{Backspace}')
    await expect(input).not.toHaveAttribute('aria-invalid', 'true')
  },
}

/**
 * While `onSave`'s promise is pending, the field is read-only, Save spins and
 * a status says Saving. A rejection shows its message at the field.
 */
export const Saving: Story = {
  render: (args) => <Editable {...args} />,
  args: {
    onSave: fn(
      (next: string) =>
        new Promise<void>((resolve, reject) => setTimeout(() => (next === 'Fail' ? reject(new Error('The server is not answering. Try again.')) : resolve()), 400)),
    ),
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^Edit Company/ }))
    await userEvent.keyboard('Fail{Enter}')
    const input = canvas.getByRole('textbox', { name: 'Company' })
    await expect(canvas.getByRole('status')).toHaveTextContent('Saving')
    await expect(input).toHaveAttribute('readonly')
    await expect(canvas.getByRole('button', { name: 'Save' })).toHaveAttribute('aria-busy', 'true')
    await waitFor(() => expect(input).toHaveAccessibleDescription('The server is not answering. Try again.'))
    // The error is announced, too, in case focus has left the field.
    await expect(canvas.getByRole('status')).toHaveTextContent('The server is not answering. Try again.')
    await expect(input).not.toHaveAttribute('readonly')

    await userEvent.clear(input)
    await userEvent.keyboard('Globex{Enter}')
    await expect(await canvas.findByRole('button', { name: 'Edit Company: Globex' })).toHaveFocus()
  },
}

/** No value: the placeholder stands in, muted. A very long value wraps instead of widening the page. */
export const EmptyAndLong: Story = {
  render: (args) => (
    <div data-testid="column" style={{ display: 'grid', gap: 'var(--space-4)', maxInlineSize: '16rem' }}>
      <Editable {...args} label="Phone" value="" placeholder="Add a phone number" />
      <Editable {...args} label="Notes" value={'Deliver-to-the-loading-dock-behind-building-C-'.repeat(3)} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Edit Phone: Add a phone number' })).toBeVisible()
    const notes = canvas.getByRole('button', { name: /^Edit Notes/ })
    // The root pulls back by the field's padding on each side, so allow for it.
    const column = canvas.getByTestId('column').getBoundingClientRect()
    const pullBack = -parseFloat(getComputedStyle(notes.parentElement!).marginInlineEnd)
    await waitFor(() => expect(notes.getBoundingClientRect().right).toBeLessThanOrEqual(column.right + pullBack + 1))
  },
}

/** In a Modal, Escape cancels the edit and leaves the Modal open; a second Escape closes it. */
export const InModal: Story = {
  render: (args) => (
    <Modal title="Customer" defaultOpen>
      <Editable {...args} />
    </Modal>
  ),
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body)
    const dialog = await body.findByRole('dialog', { name: 'Customer' })
    await userEvent.click(within(dialog).getByRole('button', { name: /^Edit Company/ }))
    await userEvent.keyboard('Globex{Escape}')
    await expect(await within(dialog).findByRole('button', { name: 'Edit Company: Acme Corp' })).toHaveFocus()
    await expect(dialog).toBeVisible()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull())
  },
}

/** Press Enter, then move on while the save is pending: focus stays where the viewer put it. */
export const SlowSaveKeepsFocus: Story = {
  render: (args) => (
    <>
      <Editable {...args} />
      <button type="button">Elsewhere</button>
    </>
  ),
  args: { onSave: fn(() => new Promise<void>((resolve) => setTimeout(resolve, 300))) },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^Edit Company/ }))
    await userEvent.keyboard('Globex{Enter}')
    await userEvent.click(canvas.getByRole('button', { name: 'Elsewhere' }))
    await expect(await canvas.findByRole('button', { name: 'Edit Company: Globex' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Elsewhere' })).toHaveFocus()
  },
}
