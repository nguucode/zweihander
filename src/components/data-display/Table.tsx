import { useMemo, useState, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Checkbox } from '../controls/Checkbox'
import styles from './Table.module.css'

export interface TableColumn<Row> {
  /** Unique; also the row field shown when there is no `cell`. */
  key: string
  header: ReactNode
  /** Renders the cell; defaults to `row[key]`. */
  cell?: (row: Row) => ReactNode
  /** Adds a sort button to the header. Sorts by `sortValue`, or `row[key]`. */
  sortable?: boolean
  sortValue?: (row: Row) => string | number | Date | null | undefined
  /** `end` for numbers, so the digits line up. */
  align?: 'start' | 'center' | 'end'
  /** Any CSS width, e.g. `8rem` or `20%`. */
  width?: string
  /** The row's header cell (`<th scope="row">`): usually the name column. */
  isRowHeader?: boolean
}

export interface TableSort {
  key: string
  direction: 'ascending' | 'descending'
}

export interface TableProps<Row> {
  columns: TableColumn<Row>[]
  rows: Row[]
  /** A stable id per row; required for selection. Defaults to the row's index. */
  getRowId?: (row: Row, index: number) => string
  /** Names the table. Visually hidden unless `showCaption`. */
  caption: ReactNode
  showCaption?: boolean
  sort?: TableSort | null
  defaultSort?: TableSort | null
  /**
   * Called with the new sort. When `sort` is controlled, sort the rows
   * yourself (e.g. on the server); otherwise the table sorts its copy.
   */
  onSortChange?: (sort: TableSort | null) => void
  /** Adds a checkbox column. */
  isSelectable?: boolean
  selectedIds?: string[]
  defaultSelectedIds?: string[]
  onSelectionChange?: (ids: string[]) => void
  /** Row height: 40 (`sm`) or 48px (`md`). */
  density?: 'sm' | 'md'
  /** Keep the header row in view while the table scrolls inside its container. */
  hasStickyHeader?: boolean
  /** Shown in place of the rows when there are none, e.g. an Empty State. */
  emptyState?: ReactNode
  className?: string
}

const compare = (a: unknown, b: unknown) => {
  if (a == null) return b == null ? 0 : 1
  if (b == null) return -1
  if (a instanceof Date && b instanceof Date) return a.getTime() - b.getTime()
  if (typeof a === 'number' && typeof b === 'number') return a - b
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' })
}

export function Table<Row>({
  columns,
  rows,
  getRowId = (_row, i) => String(i),
  caption,
  showCaption = false,
  sort: sortProp,
  defaultSort = null,
  onSortChange,
  isSelectable = false,
  selectedIds: selectedProp,
  defaultSelectedIds = [],
  onSelectionChange,
  density = 'md',
  hasStickyHeader = false,
  emptyState,
  className,
}: TableProps<Row>) {
  const [sortState, setSortState] = useState(defaultSort)
  const [selectedState, setSelectedState] = useState(defaultSelectedIds)
  const sort = sortProp !== undefined ? sortProp : sortState
  const selected = new Set(selectedProp ?? selectedState)

  // Uncontrolled sort is done here; a controlled one is the caller's job.
  const shown = useMemo(() => {
    if (!sort || sortProp !== undefined) return rows
    const col = columns.find((c) => c.key === sort.key)
    if (!col) return rows
    const value = col.sortValue ?? ((row: Row) => (row as Record<string, unknown>)[col.key])
    // Descending flips the comparison, not the result: empty values stay
    // last and ties keep their order either way.
    const sign = sort.direction === 'descending' ? -1 : 1
    return [...rows].sort((a, b) => {
      const va = value(a)
      const vb = value(b)
      if (va == null || vb == null) return compare(va, vb)
      return sign * compare(va, vb)
    })
  }, [rows, columns, sort, sortProp])

  const setSort = (key: string) => {
    // Ascending, then descending, then back to unsorted.
    const next: TableSort | null =
      sort?.key !== key ? { key, direction: 'ascending' } : sort.direction === 'ascending' ? { key, direction: 'descending' } : null
    setSortState(next)
    onSortChange?.(next)
  }
  const setSelected = (ids: string[]) => {
    setSelectedState(ids)
    onSelectionChange?.(ids)
  }
  // Ids come from each row's place in `rows`, so sorting does not change them.
  const position = new Map(rows.map((row, i) => [row, i]))
  const ids = shown.map((row, i) => getRowId(row, position.get(row) ?? i))
  const header = columns.find((c) => c.isRowHeader)
  /** What a row is called, for its checkbox: the row header's text if it has one. */
  const rowName = (row: Row, i: number) => {
    const v = header && (header.cell ? header.cell(row) : (row as Record<string, unknown>)[header.key])
    return typeof v === 'string' || typeof v === 'number' ? String(v) : `row ${i + 1}`
  }
  const allSelected = ids.length > 0 && ids.every((id) => selected.has(id))
  const someSelected = !allSelected && ids.some((id) => selected.has(id))

  return (
    <div className={cn(styles.container, hasStickyHeader && styles.sticky, className)}>
      <table className={cn(styles.table, styles[density])}>
        <caption className={showCaption ? styles.caption : styles.srOnly}>{caption}</caption>
        <thead>
          <tr>
            {isSelectable && (
              <th scope="col" className={styles.select}>
                <Checkbox
                  aria-label="Select all rows"
                  checked={allSelected}
                  isIndeterminate={someSelected}
                  // Adds or removes this page's rows only: with rows paged
                  // in, ids selected on other pages are kept.
                  onCheckedChange={(on) =>
                    setSelected(on ? [...new Set([...selected, ...ids])] : [...selected].filter((id) => !ids.includes(id)))
                  }
                />
              </th>
            )}
            {columns.map((col) => {
              const active = sort?.key === col.key
              return (
                <th
                  key={col.key}
                  scope="col"
                  style={{ inlineSize: col.width, textAlign: col.align }}
                  aria-sort={col.sortable ? (active ? sort!.direction : 'none') : undefined}
                  className={cn(styles.th, styles[col.align ?? 'start'])}
                >
                  {col.sortable ? (
                    <button type="button" className={styles.sortButton} onClick={() => setSort(col.key)}>
                      {col.header}
                      <span className={cn(styles.sortIcon, active && styles.sortActive)} aria-hidden="true">
                        <Icon name={active ? (sort!.direction === 'ascending' ? 'chevron-up' : 'chevron-down') : 'chevrons-up-down'} />
                      </span>
                    </button>
                  ) : (
                    col.header
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {shown.length === 0 && emptyState ? (
            <tr>
              <td colSpan={columns.length + (isSelectable ? 1 : 0)} className={styles.empty}>
                {emptyState}
              </td>
            </tr>
          ) : (
            shown.map((row, i) => {
              const id = ids[i]
              const isSelected = selected.has(id)
              return (
                <tr key={id} aria-selected={isSelectable ? isSelected : undefined} className={cn(isSelected && styles.selected)}>
                  {isSelectable && (
                    <td className={styles.select}>
                      <Checkbox
                        aria-label={`Select ${rowName(row, i)}`}
                        checked={isSelected}
                        onCheckedChange={(on) => setSelected(on ? [...selected, id] : [...selected].filter((x) => x !== id))}
                      />
                    </td>
                  )}
                  {columns.map((col) => {
                    const content = col.cell ? col.cell(row) : ((row as Record<string, unknown>)[col.key] as ReactNode)
                    const Cell = col.isRowHeader ? 'th' : 'td'
                    return (
                      <Cell
                        key={col.key}
                        scope={col.isRowHeader ? 'row' : undefined}
                        style={{ textAlign: col.align }}
                        className={cn(styles.td, col.isRowHeader && styles.rowHeader)}
                      >
                        {content}
                      </Cell>
                    )
                  })}
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}
