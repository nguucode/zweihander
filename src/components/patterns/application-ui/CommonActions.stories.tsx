import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '@/components/buttons/Button'
import { Card } from '@/components/data-display/Card'
import { Menu } from '@/components/navigation/Menu'
import { ToastProvider, useToast } from '@/components/notifications/Toast'
import { ConfirmDialog } from '@/components/overlays/ConfirmDialog'
import { TextInput } from '@/components/inputs/TextInput'
import { ActionPanel } from './ActionPanel'
import { CardHeading } from './CardHeading'
import { CommonActionsTable, commonActions, type CommonAction, type CommonActionId } from './CommonActions'
import { FormActions } from './FormLayouts'

/** The catalogue's button style for an action, so every story follows the table. */
const look = (id: CommonActionId) => (commonActions[id] as CommonAction).button

const onSave = fn()
const onDelete = fn()
const onUndo = fn()

const meta = {
  title: 'Patterns/Application UI/Common Actions',
  tags: ['experimental'],
  component: CommonActionsTable,
  parameters: { layout: 'padded' },
  argTypes: {
    caption: { description: 'Names the table for assistive tech. Visually hidden.', control: 'text', table: { defaultValue: { summary: '"Common actions"' } } },
  },
} satisfies Meta<typeof CommonActionsTable>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

/** Every common action: its label, what it is for, where it goes, its button, how much it asks first and its shortcut. */
export const Reference: Story = {
  play: async ({ canvas }) => {
    const table = canvas.getByRole('table', { name: 'Common actions' })
    const names = within(table)
      .getAllByRole('rowheader')
      .map((cell) => cell.textContent)
    await expect(names).toEqual(Object.values(commonActions).map((a) => a.label))
    const save = within(table).getByRole('rowheader', { name: 'Save' }).closest('tr')!
    await expect(save.querySelectorAll('kbd kbd')).toHaveLength(2)
    const del = within(table).getByRole('rowheader', { name: 'Delete' }).closest('tr')!
    await expect(within(del).getByText('Confirm Dialog')).toBeVisible()
  },
}

function EditForm({ save = 'Save', cancel = 'Cancel' }: { save?: string; cancel?: string }) {
  return (
    <form
      aria-label="Edit invoice"
      onSubmit={(e) => {
        e.preventDefault()
        onSave()
      }}
    >
      <TextInput label="Reference" name="reference" defaultValue="INV-0042" isFullWidth />
      <FormActions style={{ paddingBlockStart: 'var(--space-4)' }}>
        <Button type="button" {...look('cancel')}>
          {cancel}
        </Button>
        <Button type="submit" {...look('save')}>
          {save}
        </Button>
      </FormActions>
    </form>
  )
}

/** Cancel then Save, at the end of the form. Save is the submit button, so Enter in a field saves. */
export const FormFooter: Story = {
  render: () => <EditForm />,
  play: async ({ canvas }) => {
    onSave.mockClear()
    const [cancel, save] = within(canvas.getByRole('form', { name: 'Edit invoice' })).getAllByRole('button')
    // Enter in a field presses the submit button.
    await userEvent.type(canvas.getByRole('textbox', { name: 'Reference' }), '{Enter}')
    await expect(onSave).toHaveBeenCalledOnce()
    onSave.mockClear()
    await expect(cancel).toHaveAccessibleName('Cancel')
    await expect(save).toHaveAccessibleName('Save')
    await expect(save).toHaveAttribute('type', 'submit')
    await waitFor(() => expect(save.getBoundingClientRect().left).toBeGreaterThan(cancel.getBoundingClientRect().right))
    await userEvent.click(save)
    await expect(onSave).toHaveBeenCalledOnce()
  },
}

/** Long labels in a phone-width column: the buttons wrap instead of overflowing, and Save stays last. */
export const Narrow: Story = {
  render: () => (
    <div data-testid="frame" style={{ inlineSize: 288 }}>
      <EditForm save="Save and send to the approver" cancel="Discard my changes" />
    </div>
  ),
  play: async ({ canvas }) => {
    const frame = canvas.getByTestId('frame')
    const save = canvas.getByRole('button', { name: 'Save and send to the approver' })
    await waitFor(() => {
      expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth)
      expect(save.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right + 1)
    })
  },
}

/** Import and Export before Create, at the end of a list's header. Create is the page's one primary button. */
export const ListHeader: Story = {
  render: () => (
    <CardHeading
      title="Invoices"
      description="Everything billed this year."
      actions={
        <>
          <Button {...look('import')}>
            Import
          </Button>
          <Button {...look('export')}>
            Export
          </Button>
          <Button {...look('create')} startIcon={<Icon name="plus" />}>
            Create invoice
          </Button>
        </>
      }
    />
  ),
  play: async ({ canvas }) => {
    const names = canvas.getAllByRole('button').map((b) => b.textContent)
    await expect(names).toEqual(['Import', 'Export', 'Create invoice'])
  },
}

function InvoiceCard() {
  const toast = useToast()
  const [confirming, setConfirming] = useState(false)
  return (
    <Card>
      <CardHeading
        title="Invoice INV-0042"
        description="Northwind Traders, due 14 November"
        actions={
          <>
            <Button {...look('edit')}>Edit</Button>
            <Menu
              align="end"
              trigger={
                <Button variant="secondary" appearance="ghost" isIconOnly aria-label="More actions">
                  <Icon name="more" />
                </Button>
              }
              items={[
                { label: 'Duplicate' },
                {
                  label: 'Archive',
                  onSelect: () => toast.add({ title: 'Invoice INV-0042 archived', action: { label: 'Undo', onClick: onUndo } }),
                },
                { type: 'separator' },
                { label: 'Delete', isDestructive: true, onSelect: () => setConfirming(true) },
              ]}
            />
          </>
        }
      />
      <ConfirmDialog
        open={confirming}
        onOpenChange={setConfirming}
        title="Delete invoice INV-0042?"
        description="The invoice and its payment history are deleted. This cannot be undone."
        confirmLabel="Delete invoice"
        onConfirm={onDelete}
      />
    </Card>
  )
}

const record = () => (
  <ToastProvider>
    <div style={{ maxInlineSize: 560, minBlockSize: '18rem' }}>
      <InvoiceCard />
    </div>
  </ToastProvider>
)

/** Edit beside the record's title; Duplicate, Archive and, after a separator, Delete in the overflow menu. */
export const RecordHeader: Story = {
  render: record,
  play: async ({ canvas }) => {
    const [edit, more] = canvas.getAllByRole('button')
    await expect(edit).toHaveAccessibleName('Edit')
    await expect(more).toHaveAccessibleName('More actions')
    await userEvent.click(more)
    const items = await body().findAllByRole('menuitem')
    await expect(items.map((i) => i.textContent)).toEqual(['Duplicate', 'Archive', 'Delete'])
    await expect(body().getByRole('separator')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
  },
}

/** Archive runs at once and offers Undo in a toast: it is easy to reverse, so a dialog would only slow it down. */
export const ArchiveWithUndo: Story = {
  render: record,
  play: async ({ canvas }) => {
    onUndo.mockClear()
    await userEvent.click(canvas.getByRole('button', { name: 'More actions' }))
    await userEvent.click(await body().findByRole('menuitem', { name: 'Archive' }))
    await waitFor(() => expect(body().getByText('Invoice INV-0042 archived')).toBeVisible())
    await expect(body().queryByRole('alertdialog')).toBeNull()
    await userEvent.click(await body().findByRole('button', { name: 'Undo' }))
    await expect(onUndo).toHaveBeenCalledOnce()
  },
}

/** Delete asks first in a Confirm Dialog, with Cancel focused, so Enter cannot delete. */
export const DeleteWithConfirm: Story = {
  render: record,
  play: async ({ canvas }) => {
    onDelete.mockClear()
    await userEvent.click(canvas.getByRole('button', { name: 'More actions' }))
    await userEvent.click(await body().findByRole('menuitem', { name: 'Delete' }))
    const dialog = await body().findByRole('alertdialog', { name: 'Delete invoice INV-0042?' })
    await waitFor(() => expect(within(dialog).getByRole('button', { name: 'Cancel' })).toHaveFocus())
    await expect(onDelete).not.toHaveBeenCalled()
    await userEvent.click(within(dialog).getByRole('button', { name: 'Delete invoice' }))
    await expect(onDelete).toHaveBeenCalledOnce()
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
  },
}

/** A delete that cannot be restored and takes other records with it: a danger Action Panel, and the name typed to confirm. */
export const TypeToConfirm: Story = {
  render: () => (
    <ActionPanel
      variant="danger"
      actionPlacement="end"
      style={{ maxInlineSize: 640 }}
      title="Delete workspace"
      description="Deletes every ledger, invoice and member in northwind."
      action={
        <ConfirmDialog
          trigger={<Button {...look('delete')}>Delete workspace</Button>}
          title="Delete the “northwind” workspace?"
          description="Every ledger, invoice and member goes with it. This cannot be undone."
          confirmLabel="Delete workspace"
          confirmText="northwind"
          onConfirm={onDelete}
        />
      }
    />
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Delete workspace' }))
    const dialog = await body().findByRole('alertdialog')
    const confirm = within(dialog).getByRole('button', { name: 'Delete workspace' })
    await expect(confirm).toBeDisabled()
    // With a phrase to type, the field has focus, not Cancel.
    const field = within(dialog).getByRole('textbox')
    await waitFor(() => expect(field).toHaveFocus())
    await userEvent.type(field, 'northwind')
    await expect(confirm).toBeEnabled()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
  },
}
