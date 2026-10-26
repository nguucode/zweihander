'use client'

import { useLayoutEffect, useRef, type ComponentProps, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Tag } from '../../atomic-elements/Tag'
import { Button } from '../../buttons/Button'
import styles from './FilterBar.module.css'

const focusable =
  'input:not([disabled]):not([type="hidden"]), button:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'

export interface AppliedFilter {
  id: string
  /** What the chip says, field and value: "Status: Active". */
  label: string
}

export interface FilterBarProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** Usually a Search. */
  search?: ReactNode
  /** A button per field that opens its choices (a Menu or a Popover), then Add filter or More filters. */
  filters?: ReactNode
  /** The filters in force, one removable chip each. The row hides when empty. */
  applied?: AppliedFilter[]
  onRemove?: (id: string) => void
  /** Shows Clear all after the chips. */
  onClearAll?: () => void
  /** Defaults to "Clear all". */
  clearAllLabel?: string
  /** Names the chip list. Defaults to "Applied filters". */
  appliedLabel?: string
}

/**
 * Search and filters above a list or table, with what is applied as chips
 * that each remove on their own, and Clear all.
 */
export function FilterBar({
  search,
  filters,
  applied = [],
  onRemove,
  onClearAll,
  clearAllLabel = 'Clear all',
  appliedLabel = 'Applied filters',
  'aria-label': ariaLabel = 'Filters',
  className,
  ref,
  ...props
}: FilterBarProps) {
  const barRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  // The chip whose remove button had focus. Removing it unmounts the button,
  // which would drop focus on the body, so take it to the chip that slid into
  // its place, or the one before; with no chips left, back to the controls.
  // Wait for that chip to leave `applied`: the removal may be async, or refused.
  const pendingFocus = useRef<{ index: number; id: string } | null>(null)
  useLayoutEffect(() => {
    const pending = pendingFocus.current
    if (!pending || applied.some((f) => f.id === pending.id)) return
    pendingFocus.current = null
    const removes = listRef.current?.querySelectorAll<HTMLElement>('li button') ?? []
    const bar = barRef.current
    const next = removes[Math.min(pending.index, removes.length - 1)] ?? bar?.querySelector<HTMLElement>(focusable)
    if (next) next.focus()
    else if (bar) {
      bar.tabIndex = -1
      bar.focus()
    }
  }, [applied])

  return (
    <div role="search" aria-label={ariaLabel} ref={(node) => {
        barRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
      className={cn(styles.bar, className)} {...props}>
      <div className={styles.controls}>
        {search}
        {filters}
      </div>
      {applied.length > 0 && (
        <div className={styles.applied}>
          <ul ref={listRef} aria-label={appliedLabel} className={styles.chips}>
            {applied.map((filter, i) => (
              <li key={filter.id}>
                <Tag
                  text={filter.label}
                  variant="neutral"
                  hasRemoveButton={!!onRemove}
                  onRemove={() => {
                    pendingFocus.current = { index: i, id: filter.id }
                    onRemove?.(filter.id)
                  }}
                />
              </li>
            ))}
          </ul>
          {onClearAll && (
            <Button
              variant="secondary"
              appearance="ghost"
              size="sm"
              onClick={() => {
                pendingFocus.current = { index: 0, id: applied[0].id }
                onClearAll()
              }}
            >
              {clearAllLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
