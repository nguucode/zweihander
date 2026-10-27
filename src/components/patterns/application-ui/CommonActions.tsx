import type { ReactNode } from 'react'
import { Kbd } from '../../atomic-elements/Kbd'
import type { ButtonProps } from '../../buttons/Button'
import { Table, type TableColumn } from '../../data-display/Table'

/**
 * How much the app asks before an action runs, from least to most:
 * - `none`: it runs. It is easy to reverse, or there is nothing to lose.
 * - `undo`: it runs, and a toast offers Undo for a few seconds.
 * - `dialog`: a Confirm Dialog asks first.
 * - `typed`: the Confirm Dialog also asks for the name of what goes, for a
 *   delete that cannot be restored and takes other records with it.
 */
export type ConfirmLevel = 'none' | 'undo' | 'dialog' | 'typed'

export interface CommonAction {
  /** The button text: a verb, in sentence case. Add the object when the page has more than one kind ("Create invoice"). */
  label: string
  /** What it does, and how it differs from the action it is mixed up with. */
  purpose: string
  /** Where it goes on the page. */
  placement: string
  /** The Button's style. Left out for an action that only lives in a menu, where it is a Menu entry. */
  button?: { variant: NonNullable<ButtonProps['variant']>; appearance: NonNullable<ButtonProps['appearance']> }
  confirm: ConfirmLevel
  /** Key caps for Kbd, in Mac glyphs: show Ctrl for ⌘ on other systems. Only shortcuts the platform already teaches. */
  shortcut?: readonly string[]
}

/**
 * The actions every record and form in an enterprise app shares, each with
 * one label, place, button style, confirmation and shortcut, so Delete
 * reads and behaves the same on an invoice as on a user. Read it when you
 * place a button; `CommonActionsTable` renders it.
 */
export const commonActions = {
  create: {
    label: 'Create',
    purpose: 'Makes a new record from nothing. Not Add, which puts something into a set.',
    placement: 'Page header, at the end',
    button: { variant: 'primary', appearance: 'contained' },
    confirm: 'none',
  },
  add: {
    label: 'Add',
    purpose: 'Puts something into this set: a member into a team, a line into an invoice.',
    placement: 'Header of the section it adds to, at the end',
    button: { variant: 'secondary', appearance: 'outlined' },
    confirm: 'none',
  },
  edit: {
    label: 'Edit',
    purpose: 'Opens the record, or one section of it, for changes.',
    placement: 'Record or card header, before the overflow menu',
    button: { variant: 'secondary', appearance: 'outlined' },
    confirm: 'none',
  },
  save: {
    label: 'Save',
    purpose: 'Keeps the changes. The form’s submit button.',
    placement: 'Form footer, last',
    button: { variant: 'primary', appearance: 'contained' },
    confirm: 'none',
    shortcut: ['⌘', 'S'],
  },
  cancel: {
    label: 'Cancel',
    purpose: 'Leaves a form or a flow without saving. Ask to discard only when something changed. Esc cancels only in a dialog or drawer.',
    placement: 'Form footer, before Save',
    button: { variant: 'secondary', appearance: 'ghost' },
    confirm: 'none',
  },
  close: {
    label: 'Close',
    purpose: 'Dismisses a dialog, drawer or panel with nothing to save. Not Cancel, which throws input away.',
    placement: 'Top end of the surface, an icon button named Close',
    button: { variant: 'secondary', appearance: 'ghost' },
    confirm: 'none',
    shortcut: ['Esc'],
  },
  duplicate: {
    label: 'Duplicate',
    purpose: 'Creates a copy named “Copy of …” and opens it.',
    placement: 'Overflow menu',
    confirm: 'none',
  },
  archive: {
    label: 'Archive',
    purpose: 'Hides the record from lists and keeps its history. Prefer it to Delete for anything with transactions.',
    placement: 'Overflow menu',
    confirm: 'undo',
  },
  remove: {
    label: 'Remove',
    purpose: 'Takes something out of this set; the thing itself stays. The reverse of Add.',
    placement: 'On the row or chip it removes, or in the row’s menu',
    button: { variant: 'secondary', appearance: 'ghost' },
    confirm: 'undo',
  },
  delete: {
    label: 'Delete',
    purpose: 'Destroys the record. Type to confirm when it cannot be restored and takes other records with it.',
    placement: 'Last in the overflow menu, after a separator, as a destructive entry; in settings, a danger Action Panel',
    button: { variant: 'destructive', appearance: 'outlined' },
    confirm: 'dialog',
  },
  import: {
    label: 'Import',
    purpose: 'Brings records in from a file, through the Import Export steps.',
    placement: 'List header, before Create',
    button: { variant: 'secondary', appearance: 'outlined' },
    confirm: 'none',
  },
  export: {
    label: 'Export',
    purpose: 'Downloads the rows in view, with the filters applied.',
    placement: 'List header, before Create',
    button: { variant: 'secondary', appearance: 'outlined' },
    confirm: 'none',
  },
  undo: {
    label: 'Undo',
    purpose: 'Reverses the action that raised the toast.',
    placement: 'In the toast',
    button: { variant: 'secondary', appearance: 'ghost' },
    confirm: 'none',
    shortcut: ['⌘', 'Z'],
  },
} as const satisfies Record<string, CommonAction>

export type CommonActionId = keyof typeof commonActions

const confirmLabels: Record<ConfirmLevel, string> = {
  none: 'None',
  undo: 'Undo toast',
  dialog: 'Confirm Dialog',
  typed: 'Type to confirm',
}

type Row = CommonAction & { id: CommonActionId }

const columns: TableColumn<Row>[] = [
  { key: 'label', header: 'Action', isRowHeader: true, width: '7rem' },
  { key: 'purpose', header: 'Use for' },
  { key: 'placement', header: 'Where' },
  { key: 'button', header: 'Button', width: '9rem', cell: (row) => (row.button ? `${row.button.variant}, ${row.button.appearance}` : 'Menu entry') },
  { key: 'confirm', header: 'Confirm', width: '9rem', cell: (row) => confirmLabels[row.confirm] },
  { key: 'shortcut', header: 'Shortcut', width: '7rem', cell: (row) => (row.shortcut ? <Kbd keys={[...row.shortcut]} size="sm" /> : 'None') },
]

const rows: Row[] = (Object.keys(commonActions) as CommonActionId[]).map((id) => ({ id, ...commonActions[id] }))

export interface CommonActionsTableProps {
  /** Names the table. Visually hidden. */
  caption?: ReactNode
}

/** The common actions as a reference table: label, use, place, button, confirmation and shortcut. */
export function CommonActionsTable({ caption = 'Common actions' }: CommonActionsTableProps) {
  return <Table caption={caption} columns={columns} rows={rows} getRowId={(row) => row.id} />
}
