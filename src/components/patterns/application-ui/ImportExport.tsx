'use client'

import { useState, type ReactElement, type ReactNode } from 'react'
import { Button } from '../../buttons/Button'
import { RadioGroup, type RadioOption } from '../../controls/Radio'
import { Switch } from '../../controls/Switch'
import { ColumnChooser, type ColumnChooserColumn } from '../../data-display/ColumnChooser'
import { Table, type TableColumn } from '../../data-display/Table'
import { FileUploader } from '../../inputs/FileUploader'
import { Select } from '../../inputs/Select'
import { Link } from '../../navigation/Link'
import { Stepper } from '../../navigation/Stepper'
import { InlineAlert } from '../../notifications/InlineAlert'
import { Modal, ModalClose } from '../../overlays/Modal'
import { SuccessState } from '../../states/SuccessState'
import styles from './ImportExport.module.css'

/* ---------- CSV ---------- */

/**
 * Splits CSV text into rows of cells: quoted cells, `""` inside quotes, CRLF,
 * a leading BOM. A blank line is kept as `['']`, so each row keeps its row
 * number as a spreadsheet shows it.
 */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let quoted = false
  const s = text.replace(/^\uFEFF/, '')
  const endRow = () => {
    row.push(cell)
    rows.push(row)
    row = []
    cell = ''
  }
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (quoted) {
      if (c === '"' && s[i + 1] === '"') {
        cell += '"'
        i++
      } else if (c === '"') quoted = false
      else cell += c
    } else if (c === '"') quoted = true
    else if (c === ',') {
      row.push(cell)
      cell = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && s[i + 1] === '\n') i++
      endRow()
    } else cell += c
  }
  // No row after a closing line break.
  if (cell !== '' || row.length > 0) endRow()
  return rows
}

type CsvCell = string | number | null | undefined

/**
 * Rows of cells as CSV text. A cell that starts with `=`, `+`, `-`, `@`, a
 * tab or a carriage return and is not a number gets a leading `'`, so a spreadsheet shows it rather
 * than runs it as a formula (CSV injection).
 */
export function toCsv(rows: CsvCell[][]): string {
  const cell = (value: CsvCell) => {
    let v = value == null ? '' : String(value)
    if (/^[=+\-@\t\r]/.test(v) && Number.isNaN(Number(v))) v = `'${v}`
    return /[",\r\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v
  }
  return rows.map((r) => r.map(cell).join(',')).join('\r\n')
}

/** Saves rows as a CSV file, with a BOM so Excel reads it as UTF-8. */
export function downloadCsv(filename: string, rows: CsvCell[][]) {
  const url = URL.createObjectURL(new Blob(['\uFEFF', toCsv(rows)], { type: 'text/csv;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  // Safari starts the download after the click returns: revoke later.
  setTimeout(() => URL.revokeObjectURL(url))
}

/* ---------- Import ---------- */

export interface ImportField {
  key: string
  label: string
  isRequired?: boolean
  /** Other column headings that map to it on their own, e.g. `['Project']` for a Name field. Its key and label always do. */
  aliases?: string[]
}

/** A file read into its heading row and the rows under it. */
export interface ImportSheet {
  columns: string[]
  rows: string[][]
}

/** One row of the file by field key, trimmed. Fields no column maps to are missing. */
export type ImportRow = Record<string, string>

export interface ImportDialogProps {
  /** The button that opens it. Omit when `open` is controlled from elsewhere. */
  trigger?: ReactElement
  /** The fields a column can go into, in the order they are offered. */
  fields: ImportField[]
  /**
   * Imports the rows without problems. A thrown error stays on the review
   * step with its message, and the rows stay, so it can be tried again.
   */
  onImport: (rows: ImportRow[]) => void | Promise<void>
  /** Problems with one row, by field key. Required fields left empty are flagged without it. */
  validate?: (row: ImportRow) => Record<string, string> | null | undefined
  /** Reads the chosen file. Defaults to reading it as CSV text; pass your own for Excel. */
  readFile?: (file: File) => Promise<ImportSheet>
  /** As the native attribute. */
  accept?: string
  /** In bytes. */
  maxSize?: number
  /** Inside the drop zone, under its button. */
  helperText?: ReactNode
  /** A blank file with the right headings, linked from the upload step. */
  templateHref?: string
  /** What a row is, singular and plural, as in "48 projects imported". */
  noun?: [one: string, other: string]
  title?: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Where the dialog renders instead of `<body>`. */
  container?: HTMLElement | null
}

const SKIP = '__skip'
// ponytail: the review shows the first 100 rows; page it if people need to read past that.
const PREVIEW_ROWS = 100

/** Blank rows are kept, for the row numbers, and left out of the import. */
const readCsv = async (file: File): Promise<ImportSheet> => {
  const [columns = [], ...rows] = parseCsv(await file.text())
  return { columns, rows }
}
const norm = (s: string) => s.trim().toLowerCase().replace(/[\s_-]+/g, ' ')

/** Each column to the first unused field whose key, label or alias it matches. */
function autoMap(columns: string[], fields: ImportField[]) {
  const used = new Set<string>()
  return columns.map((col) => {
    const field = fields.find((f) => !used.has(f.key) && [f.key, f.label, ...(f.aliases ?? [])].some((n) => norm(n) === norm(col)))
    if (!field) return SKIP
    used.add(field.key)
    return field.key
  })
}

type Step = 'upload' | 'map' | 'review' | 'done'
interface Flow {
  step: Step
  files: File[]
  sheet: ImportSheet | null
  /** A field key per column of the file, or SKIP. */
  mapping: string[]
  onlyProblems: boolean
  error: string
  busy: boolean
  imported: number
}
const START: Flow = { step: 'upload', files: [], sheet: null, mapping: [], onlyProblems: false, error: '', busy: false, imported: 0 }

interface CheckedRow {
  /** The row as a spreadsheet numbers it; row 1 is the heading row. */
  line: number
  row: ImportRow
  source: string[]
  problems: string[]
}

/**
 * Brings a file into a list, in a dialog of three steps: upload a CSV (or
 * Excel, with your own `readFile`), map its columns to your fields, then
 * review every row with its problems and import the rows that have none.
 * Ends on the result, with the skipped rows to download, fix and upload again.
 */
export function ImportDialog({
  trigger,
  fields,
  onImport,
  validate,
  readFile = readCsv,
  accept = '.csv',
  maxSize,
  helperText = 'A CSV file with a heading row.',
  templateHref,
  noun = ['row', 'rows'],
  title = 'Import',
  open,
  defaultOpen,
  onOpenChange,
  container,
}: ImportDialogProps) {
  const [openState, setOpenState] = useState(defaultOpen ?? false)
  const isOpen = open ?? openState
  const [flow, setFlow] = useState(START)
  const set = (patch: Partial<Flow>) => setFlow((f) => ({ ...f, ...patch }))
  // Every opening starts over, controlled or not. Closing leaves the step as it was while the dialog fades.
  const [wasOpen, setWasOpen] = useState(isOpen)
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen)
    if (isOpen) setFlow(START)
  }
  const setOpen = (next: boolean) => {
    setOpenState(next)
    onOpenChange?.(next)
  }

  const count = (n: number) => `${n.toLocaleString('en')} ${n === 1 ? noun[0] : noun[1]}`
  const { step, sheet, mapping } = flow
  const columnName = (i: number) => sheet?.columns[i] || `Column ${i + 1}`
  const missing = fields.filter((f) => f.isRequired && !mapping.includes(f.key))
  const mapped = fields.filter((f) => mapping.includes(f.key))

  const rows = (sheet?.rows ?? []).map((source, i) => ({ source, line: i + 2 })).filter(({ source }) => source.some((v) => v.trim()))
  const checked: CheckedRow[] = rows.map(({ source, line }) => {
    const row: ImportRow = {}
    mapping.forEach((key, col) => {
      if (key !== SKIP) row[key] = (source[col] ?? '').trim()
    })
    const errors: Record<string, string> = { ...validate?.(row) }
    for (const f of mapped) if (f.isRequired && !row[f.key] && !errors[f.key]) errors[f.key] = `${f.label} is empty.`
    return { line, row, source, problems: mapped.filter((f) => errors[f.key]).map((f) => errors[f.key]) }
  })
  const valid = checked.filter((c) => c.problems.length === 0)
  const skipped = checked.filter((c) => c.problems.length > 0)
  const listed = flow.onlyProblems ? skipped : checked

  const read = async () => {
    const [file] = flow.files
    set({ busy: true, error: '' })
    try {
      const next = await readFile(file)
      if (!next.rows.some((r) => r.some((v) => v.trim()))) set({ busy: false, error: `${file.name} has no rows under its heading row.` })
      else set({ busy: false, sheet: next, mapping: autoMap(next.columns, fields), step: 'map' })
    } catch {
      set({ busy: false, error: `${file.name} could not be read. Check that it is a ${accept} file and try again.` })
    }
  }

  const runImport = async () => {
    set({ busy: true, error: '' })
    try {
      await onImport(valid.map((c) => c.row))
      set({ busy: false, step: 'done', imported: valid.length })
    } catch (e) {
      set({ busy: false, error: e instanceof Error ? e.message : 'The import failed. Try again.' })
    }
  }

  const error = flow.error && (
    <InlineAlert variant="danger" isLive>
      {flow.error}
    </InlineAlert>
  )

  const mapColumns: TableColumn<number>[] = [
    { key: 'column', header: 'Column in your file', isRowHeader: true, cell: columnName },
    { key: 'sample', header: 'First value', cell: (i) => <span className={styles.sample}>{sheet?.rows.find((r) => r[i])?.[i]}</span> },
    {
      key: 'field',
      header: 'Imports into',
      width: '15rem',
      cell: (i) => (
        <Select
          size="sm"
          isFullWidth
          container={container}
          aria-label={`Field for ${columnName(i)}`}
          value={mapping[i]}
          options={[{ value: SKIP, label: 'Do not import' }, ...fields.map((f) => ({ value: f.key, label: f.isRequired ? `${f.label} (required)` : f.label }))]}
          onValueChange={(key) =>
            // A field takes one column: picking it here frees it wherever it was.
            set({ mapping: mapping.map((k, j) => (j === i ? (key ?? SKIP) : k === key ? SKIP : k)) })
          }
        />
      ),
    },
  ]

  const reviewColumns: TableColumn<CheckedRow>[] = [
    { key: 'line', header: 'Row', isRowHeader: true, align: 'end', width: '4.5rem', cell: (c) => c.line },
    ...mapped.map((f) => ({ key: f.key, header: f.label, cell: (c: CheckedRow) => <span className={styles.value}>{c.row[f.key]}</span> })),
    // Only when some row has one: an empty column would only take room.
    ...(skipped.length > 0
      ? [
          {
            key: 'problems',
            header: 'Problems',
            cell: (c: CheckedRow) =>
              c.problems.length > 0 && (
                <InlineAlert variant="danger" size="sm">
                  {c.problems.join(' ')}
                </InlineAlert>
              ),
          },
        ]
      : []),
  ]

  const body = {
    upload: (
      <>
        <FileUploader
          label="File"
          accept={accept}
          maxSize={maxSize}
          helperText={helperText}
          files={flow.files}
          onFilesChange={(files) => set({ files, error: '' })}
          isFullWidth
        />
        {templateHref && (
          <p className={styles.note}>
            Not sure how to lay it out?{' '}
            <Link href={templateHref} download>
              Download a template
            </Link>
          </p>
        )}
      </>
    ),
    map: (
      <>
        <p className={styles.note}>
          {flow.files[0]?.name}: {sheet?.columns.length} columns, {count(rows.length)}. Choose the field each column goes into.
        </p>
        <Table caption="Columns to map" columns={mapColumns} rows={sheet?.columns.map((_, i) => i) ?? []} getRowId={String} density="sm" />
        {missing.length > 0 && <InlineAlert variant="danger">Choose a column for {missing.map((f) => f.label).join(', ')}.</InlineAlert>}
      </>
    ),
    review: (
      <>
        {skipped.length > 0 ? (
          <InlineAlert variant="warning">
            {count(skipped.length)} {skipped.length === 1 ? 'has' : 'have'} problems and will be skipped. After the import you can download them, fix them
            and upload them again.
          </InlineAlert>
        ) : (
          <InlineAlert variant="success">{valid.length === 1 ? `The ${noun[0]} is` : `All ${count(valid.length)} are`} ready to import.</InlineAlert>
        )}
        {skipped.length > 0 && (
          <Switch size="sm" label="Only rows with problems" checked={flow.onlyProblems} onCheckedChange={(onlyProblems) => set({ onlyProblems })} />
        )}
        {/* It scrolls, so it takes focus: the keyboard scrolls it too. */}
        <div className={styles.preview} data-testid="import-preview" role="region" aria-label="Rows to import" tabIndex={0}>
          <Table
            caption="Rows to import"
            columns={reviewColumns}
            rows={listed.slice(0, PREVIEW_ROWS)}
            getRowId={(c) => String(c.line)}
            density="sm"
            hasStickyHeader
          />
        </div>
        {listed.length > PREVIEW_ROWS && (
          <p className={styles.note}>
            Showing the first {PREVIEW_ROWS} of {count(listed.length)}.
          </p>
        )}
      </>
    ),
    done: (
      <SuccessState
        isLive
        size="sm"
        headingLevel={3}
        title={`${count(flow.imported)} imported`}
        description={skipped.length > 0 ? `${count(skipped.length)} skipped for problems.` : undefined}
        action={
          skipped.length > 0 && (
            <Button
              size="sm"
              variant="secondary"
              appearance="outlined"
              onClick={() => downloadCsv('skipped-rows.csv', [[...(sheet?.columns ?? []), 'Problems'], ...skipped.map((c) => [...c.source, c.problems.join(' ')])])}
            >
              Download skipped rows
            </Button>
          )
        }
      />
    ),
  }[step]

  const back = (to: Step) => (
    <Button variant="secondary" appearance="outlined" disabled={flow.busy} onClick={() => set({ step: to, error: '' })}>
      Back
    </Button>
  )
  const footer = {
    upload: (
      <Button disabled={flow.files.length === 0} isLoading={flow.busy} onClick={read}>
        Next
      </Button>
    ),
    map: (
      <>
        {back('upload')}
        <Button disabled={missing.length > 0} onClick={() => set({ step: 'review', onlyProblems: false })}>
          Next
        </Button>
      </>
    ),
    review: (
      <>
        {back('map')}
        <Button disabled={valid.length === 0} isLoading={flow.busy} onClick={runImport}>
          Import {count(valid.length)}
        </Button>
      </>
    ),
    done: <ModalClose render={<Button />}>Done</ModalClose>,
  }[step]

  return (
    <Modal
      trigger={trigger}
      title={title}
      size="lg"
      open={isOpen}
      onOpenChange={setOpen}
      // A stray click outside should not throw away a mapped file.
      closeOnBackdropClick={false}
      container={container}
      footer={footer}
    >
      <div className={styles.body}>
        {step !== 'done' && (
          <Stepper
            size="sm"
            aria-label="Import steps"
            current={{ upload: 0, map: 1, review: 2 }[step]}
            steps={[{ label: 'Upload' }, { label: 'Map columns' }, { label: 'Review' }]}
          />
        )}
        {body}
        {step !== 'done' && error}
      </div>
    </Modal>
  )
}

/* ---------- Export ---------- */

export interface ExportRequest {
  format: string
  scope: string
  /** The ticked columns' keys, in table order. */
  columns: string[]
}

export interface ExportDialogProps {
  /** The button that opens it. Omit when `open` is controlled from elsewhere. */
  trigger?: ReactElement
  /** Which rows: all, the current view, the selected rows, each with its count in the label. */
  scopes: RadioOption[]
  /** Picked at each opening. Defaults to the first scope that is not disabled. */
  defaultScope?: string
  /** File formats. With only one, the choice is not shown. */
  formats?: RadioOption[]
  /** Every column, as for the Column Chooser. */
  columns: ColumnChooserColumn[]
  /** Ticked at each opening, usually the columns on screen. Defaults to all. */
  defaultColumnKeys?: string[]
  /**
   * Starts the export. A promise keeps the button busy until it settles,
   * then closes the dialog; a thrown error stays in it. For a long export,
   * return at once and say when the file is ready, with a Toast and a
   * Download action.
   */
  onExport: (request: ExportRequest) => void | Promise<void>
  title?: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Where the dialog renders instead of `<body>`. */
  container?: HTMLElement | null
}

const CSV: RadioOption[] = [{ value: 'csv', label: 'CSV' }]

/** Takes rows out of a list into a file: which rows, which columns and, when there is a choice, which format. */
export function ExportDialog({
  trigger,
  scopes,
  defaultScope,
  formats = CSV,
  columns,
  defaultColumnKeys,
  onExport,
  title = 'Export',
  open,
  defaultOpen,
  onOpenChange,
  container,
}: ExportDialogProps) {
  const [openState, setOpenState] = useState(defaultOpen ?? false)
  const isOpen = open ?? openState
  const setOpen = (next: boolean) => {
    setOpenState(next)
    onOpenChange?.(next)
  }
  const initialScope = defaultScope ?? scopes.find((s) => !s.disabled)?.value ?? ''
  const initialKeys = defaultColumnKeys ?? columns.map((c) => c.key)
  const [scope, setScope] = useState(initialScope)
  const [format, setFormat] = useState(formats[0]?.value ?? '')
  const [keys, setKeys] = useState(initialKeys)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  // Each opening starts from the defaults: the view or the selection may have changed since.
  const [wasOpen, setWasOpen] = useState(isOpen)
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen)
    if (isOpen) {
      setScope(initialScope)
      setKeys(initialKeys)
      setError('')
    }
  }

  const submit = async () => {
    setBusy(true)
    setError('')
    try {
      await onExport({ format, scope, columns: keys })
      setOpen(false)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'The export failed. Try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <Modal
      trigger={trigger}
      title={title}
      open={isOpen}
      onOpenChange={setOpen}
      container={container}
      footer={
        <>
          <ModalClose render={<Button variant="secondary" appearance="outlined" disabled={busy} />}>Cancel</ModalClose>
          <Button isLoading={busy} disabled={keys.length === 0} onClick={submit}>
            Export
          </Button>
        </>
      }
    >
      <div className={styles.body}>
        <RadioGroup label="Rows" options={scopes} value={scope} onValueChange={setScope} />
        {formats.length > 1 && <RadioGroup label="Format" options={formats} value={format} onValueChange={setFormat} />}
        <div className={styles.columns}>
          <span>
            {keys.length} of {columns.length} columns
          </span>
          <ColumnChooser columns={columns} visibleKeys={keys} onVisibleKeysChange={setKeys} container={container} />
        </div>
        {error && (
          <InlineAlert variant="danger" isLive>
            {error}
          </InlineAlert>
        )}
      </div>
    </Modal>
  )
}
