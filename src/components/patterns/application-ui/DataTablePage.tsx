'use client'

import { useLayoutEffect, useRef, type ComponentProps, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../../buttons/Button'
import styles from './DataTablePage.module.css'

const focusable =
  'input:not([disabled]):not([type="hidden"]), button:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'

export interface TableToolbarProps extends ComponentProps<'div'> {
  /** Search, filters and the primary action. Shown while nothing is selected. */
  children: ReactNode
  /** How many rows are selected. From 1 up, the toolbar shows the selection's actions instead. */
  selectedCount?: number
  /** Actions for the selected rows, e.g. Archive and Delete. */
  selectionActions?: ReactNode
  onClearSelection?: () => void
  /** Defaults to "{n} selected". */
  selectionLabel?: (count: number) => string
}

/**
 * The bar above a table: search, filters and the page's main action; while
 * rows are selected, what you can do with them instead.
 */
export function TableToolbar({
  children,
  selectedCount = 0,
  selectionActions,
  onClearSelection,
  selectionLabel = (n) => `${n} selected`,
  className,
  ref,
  ...props
}: TableToolbarProps) {
  const selecting = selectedCount > 0
  const toolbarRef = useRef<HTMLDivElement>(null)
  const wasSelecting = useRef(selecting)
  // Archive or Clear selection unmounts the button that had focus, which
  // drops it on the body. Pick it up in the tools that came back instead.
  useLayoutEffect(() => {
    const toolbar = toolbarRef.current
    if (wasSelecting.current && !selecting && toolbar) {
      const active = document.activeElement
      if (!active || active === document.body || !active.isConnected) {
        const first = toolbar.querySelector<HTMLElement>(focusable)
        if (first) first.focus()
        else {
          toolbar.tabIndex = -1
          toolbar.focus()
        }
      }
    }
    wasSelecting.current = selecting
  }, [selecting])
  return (
    <div
      ref={(node) => {
        toolbarRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
      className={cn(styles.toolbar, selecting && styles.selecting, className)}
      {...props}
    >
      {/* Always in the page, so the count is announced as it changes. */}
      <p role="status" className={selecting ? styles.count : styles.srOnly}>
        {selecting ? selectionLabel(selectedCount) : ''}
      </p>
      {selecting ? (
        <div className={styles.selectionActions}>
          {selectionActions}
          {onClearSelection && (
            <Button variant="secondary" appearance="ghost" size="sm" onClick={onClearSelection}>
              Clear selection
            </Button>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  )
}

/** Put the filters' flexible part here: it takes the free space and wraps first. */
export function TableToolbarGroup({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn(styles.group, className)} {...props} />
}

export interface TableFooterProps extends ComponentProps<'div'> {
  /** E.g. "Showing 1–10 of 57". */
  summary?: ReactNode
  /** Usually Pagination. */
  children?: ReactNode
}

/** The bar under a table: what is shown, and the pages. */
export function TableFooter({ summary, children, className, ...props }: TableFooterProps) {
  return (
    <div className={cn(styles.footer, className)} {...props}>
      {summary && <p className={styles.summary}>{summary}</p>}
      {children}
    </div>
  )
}
