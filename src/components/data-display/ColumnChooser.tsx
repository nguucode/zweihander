'use client'

import { useState, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { Button } from '../buttons/Button'
import { Checkbox } from '../controls/Checkbox'
import { Popover } from '../overlays/Popover'
import styles from './ColumnChooser.module.css'

/** A Table column fits as is: only these fields are read. Declared here, not picked from Table, so the chooser installs without it. */
export interface ColumnChooserColumn {
  key: string
  header: ReactNode
  /** The row header names each row, so it cannot be hidden. */
  isRowHeader?: boolean
}

export interface ColumnChooserProps {
  /** Every column, hidden ones included, in table order. */
  columns: ColumnChooserColumn[]
  /** The shown columns' keys. Pair with `onVisibleKeysChange`. */
  visibleKeys?: string[]
  /** Shown at first, uncontrolled, and what Reset brings back. Defaults to every column. */
  defaultVisibleKeys?: string[]
  /** Called with the shown keys, in column order, when a box is ticked or Reset is pressed. */
  onVisibleKeysChange?: (keys: string[]) => void
  /** Also called by Reset, to put back what lives outside the chooser, such as column widths. */
  onReset?: () => void
  /** The button's text and the popover's title. */
  label?: string
  resetLabel?: string
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Where the popup renders instead of `<body>`. */
  container?: HTMLElement | null
  className?: string
}

/** A button that opens a list of a table's columns, each with a checkbox to show or hide it. */
export function ColumnChooser({
  columns,
  visibleKeys,
  defaultVisibleKeys,
  onVisibleKeysChange,
  onReset,
  label = 'Columns',
  resetLabel = 'Reset',
  open,
  defaultOpen,
  onOpenChange,
  container,
  className,
}: ColumnChooserProps) {
  // Column order, whatever order the keys came in; the row header always in.
  const ordered = (keys: Set<string>) => columns.filter((c) => c.isRowHeader || keys.has(c.key)).map((c) => c.key)
  const initial = defaultVisibleKeys ? ordered(new Set(defaultVisibleKeys)) : columns.map((c) => c.key)
  const [state, setState] = useState(initial)
  const shown = new Set(visibleKeys ?? state)
  const set = (keys: Set<string>) => {
    const next = ordered(keys)
    setState(next)
    onVisibleKeysChange?.(next)
  }
  const shownCount = columns.filter((c) => shown.has(c.key)).length
  return (
    <Popover
      trigger={
        <Button variant="secondary" appearance="outlined" endIcon={<Icon name="chevron-down" />} className={className}>
          {label}
        </Button>
      }
      title={label}
      align="end"
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      container={container}
    >
      <div className={styles.list}>
        {columns.map((col) => {
          const checked = col.isRowHeader || shown.has(col.key)
          return (
            <Checkbox
              key={col.key}
              label={col.header}
              checked={checked}
              // The row header always shows, and so does the last column left.
              disabled={col.isRowHeader || (checked && shownCount <= 1)}
              onCheckedChange={(on) => {
                const next = new Set(shown)
                if (on) next.add(col.key)
                else next.delete(col.key)
                set(next)
              }}
            />
          )
        })}
      </div>
      <Button
        variant="secondary"
        appearance="ghost"
        size="sm"
        className={styles.reset}
        onClick={() => {
          set(new Set(initial))
          onReset?.()
        }}
      >
        {resetLabel}
      </Button>
    </Popover>
  )
}
