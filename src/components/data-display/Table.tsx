'use client'

import { Fragment, useId, useMemo, useState, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Button } from '../buttons/Button'
import { Checkbox } from '../controls/Checkbox'
import { Menu, type MenuEntry } from '../navigation/Menu'
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
  /** Fills this column's cell in a total row under the rows, e.g. a sum. Any column with one adds the row. */
  footer?: ReactNode
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
  /**
   * Content shown under a row when it is expanded, across the full width.
   * Adds an expand button to each row that returns content; a row that
   * returns `null`, `undefined` or `false` gets none. Runs for every row on
   * each render, open or not, so keep it cheap.
   */
  expandedContent?: (row: Row) => ReactNode
  expandedIds?: string[]
  defaultExpandedIds?: string[]
  onExpandedChange?: (ids: string[]) => void
  /**
   * The items of a menu at the end of each row, behind a "more" button named
   * after the row. A row that returns no items gets no button.
   */
  rowActions?: (row: Row) => MenuEntry[] | null | undefined
  /** Row height. `md` is `--row-height` (48px Default, 36px Compact density); `sm` is one `--space-inline` shorter (40, 32). */
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
  expandedContent,
  expandedIds: expandedProp,
  defaultExpandedIds = [],
  onExpandedChange,
  rowActions,
  density = 'md',
  hasStickyHeader = false,
  emptyState,
  className,
}: TableProps<Row>) {
  const [sortState, setSortState] = useState(defaultSort)
  const [selectedState, setSelectedState] = useState(defaultSelectedIds)
  const sort = sortProp !== undefined ? sortProp : sortState
  const selected = new Set(selectedProp ?? selectedState)
  const [expandedState, setExpandedState] = useState(defaultExpandedIds)
  const expanded = new Set(expandedProp ?? expandedState)
  const baseId = useId()

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
  const setExpanded = (ids: string[]) => {
    setExpandedState(ids)
    onExpandedChange?.(ids)
  }
  const isExpandable = expandedContent !== undefined
  const columnCount = columns.length + (isSelectable ? 1 : 0) + (isExpandable ? 1 : 0) + (rowActions ? 1 : 0)
  // A total of no rows is noise next to an empty state.
  const hasFooter = shown.length > 0 && columns.some((c) => c.footer !== undefined)
  // Ids come from each row's place in `rows`, so sorting does not change them.
  const position = new Map(rows.map((row, i) => [row, i]))
  const ids = shown.map((row, i) => getRowId(row, position.get(row) ?? i))
  const header = columns.find((c) => c.isRowHeader)
  /** What a row is called, for its checkbox: the row header's text if it has one. */
  const rowName = (row: Row) => {
    const v = header && (header.cell ? header.cell(row) : (row as Record<string, unknown>)[header.key])
    // The fallback counts from `rows`, so a sort does not rename the row.
    return typeof v === 'string' || typeof v === 'number' ? String(v) : `row ${(position.get(row) ?? 0) + 1}`
  }
  const rowMenu = (row: Row) => {
    const items = rowActions?.(row)
    return items?.length ? (
      <Menu
        align="end"
        items={items}
        trigger={
          <Button variant="secondary" appearance="ghost" size="sm" isIconOnly aria-label={`Actions for ${rowName(row)}`}>
            <Icon name="more" />
          </Button>
        }
      />
    ) : null
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
            {isExpandable && (
              <th scope="col" className={styles.expand}>
                <span className={styles.srOnly}>Details</span>
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
            {rowActions && (
              <th scope="col" className={styles.actions}>
                <span className={styles.srOnly}>Actions</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {shown.length === 0 && emptyState ? (
            <tr>
              <td colSpan={columnCount} className={styles.empty}>
                {emptyState}
              </td>
            </tr>
          ) : (
            shown.map((row, i) => {
              const id = ids[i]
              const isSelected = selected.has(id)
              const content = expandedContent?.(row)
              const hasContent = content != null && content !== false
              const isExpanded = hasContent && expanded.has(id)
              const contentId = `${baseId}-expanded-${position.get(row) ?? i}`
              return (
                <Fragment key={id}>
                  <tr
                    aria-selected={isSelectable ? isSelected : undefined}
                    className={cn(isSelected && styles.selected, isExpanded && styles.expanded)}
                  >
                    {isSelectable && (
                      <td className={styles.select}>
                        <Checkbox
                          aria-label={`Select ${rowName(row)}`}
                          checked={isSelected}
                          onCheckedChange={(on) => setSelected(on ? [...selected, id] : [...selected].filter((x) => x !== id))}
                        />
                      </td>
                    )}
                    {isExpandable && (
                      <td className={styles.expand}>
                        {hasContent && (
                          <Button
                            variant="secondary"
                            appearance="ghost"
                            size="sm"
                            isIconOnly
                            aria-label={`Expand ${rowName(row)}`}
                            aria-expanded={isExpanded}
                            // Only points at the content row while it exists.
                            aria-controls={isExpanded ? contentId : undefined}
                            onClick={() => setExpanded(isExpanded ? [...expanded].filter((x) => x !== id) : [...expanded, id])}
                          >
                            <span className={styles.expandIcon} aria-hidden="true">
                              <Icon name="chevron-right" />
                            </span>
                          </Button>
                        )}
                      </td>
                    )}
                    {columns.map((col) => {
                      const value = col.cell ? col.cell(row) : ((row as Record<string, unknown>)[col.key] as ReactNode)
                      const Cell = col.isRowHeader ? 'th' : 'td'
                      return (
                        <Cell
                          key={col.key}
                          scope={col.isRowHeader ? 'row' : undefined}
                          style={{ textAlign: col.align }}
                          className={cn(styles.td, col.isRowHeader && styles.rowHeader)}
                        >
                          {value}
                        </Cell>
                      )
                    })}
                    {rowActions && <td className={styles.actions}>{rowMenu(row)}</td>}
                  </tr>
                  {isExpanded && (
                    <tr className={styles.expandedRow}>
                      <td id={contentId} colSpan={columnCount} className={styles.expandedContent}>
                        {content}
                      </td>
                    </tr>
                  )}
                </Fragment>
              )
            })
          )}
        </tbody>
        {hasFooter && (
          <tfoot>
            <tr>
              {isSelectable && <td className={styles.select} />}
              {isExpandable && <td className={styles.expand} />}
              {columns.map((col) => {
                const Cell = col.isRowHeader ? 'th' : 'td'
                return (
                  <Cell
                    key={col.key}
                    scope={col.isRowHeader ? 'row' : undefined}
                    style={{ textAlign: col.align }}
                    className={styles.td}
                  >
                    {col.footer}
                  </Cell>
                )
              })}
              {rowActions && <td className={styles.actions} />}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}
