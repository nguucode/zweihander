import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './Badge.module.css'

export interface BadgeProps extends Omit<ComponentProps<'span'>, 'children'> {
  count?: number
  variant?: 'primary' | 'accent' | 'secondary' | 'destructive' | 'success' | 'warning'
  /**
   * Size of a dot: 8px (`md`) or 6px (`sm`). A count is 16px tall at either.
   * `sm` on a count is deprecated: it renders the `md` badge. In the next
   * release `sm` is for dots only.
   */
  size?: 'sm' | 'md'
  /** A dot with no number: "something new", not "how many". */
  isDot?: boolean
  /** Counts above this show as `maxCount+`. */
  maxCount?: number
  /** Pins the badge to a corner of `children` instead of sitting inline. */
  isFloating?: boolean
  floatingPlacement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  /** The element a floating badge is pinned to. */
  children?: ReactNode
}

let hasWarned = false

export function Badge({
  count,
  variant = 'primary',
  size = 'md',
  isDot = false,
  maxCount,
  isFloating = false,
  floatingPlacement = 'top-end',
  children,
  className,
  ...props
}: BadgeProps) {
  const hasBadge = isDot || count !== undefined
  if (import.meta.env.DEV && !hasWarned && size === 'sm' && hasBadge && !isDot) {
    hasWarned = true
    console.warn('Badge: `size="sm"` on a count is deprecated and renders as `md`. Keep it for dots only.')
  }
  const badge = hasBadge && (
    <span
      // A labelled badge is an image of a state: a plain span may not carry
      // aria-label. An unlabelled dot says nothing, and a floating badge sits
      // outside the element it describes, so both are hidden — the meaning
      // belongs in the anchor's own name.
      role={props['aria-label'] ? 'img' : undefined}
      aria-hidden={!props['aria-label'] && (isDot || isFloating) ? true : undefined}
      className={cn(
        styles.badge,
        styles[variant],
        styles[size],
        isDot && styles.dot,
        isFloating && [styles.floating, styles[floatingPlacement]],
        className,
      )}
      {...props}
    >
      {isDot ? null : maxCount !== undefined && count! > maxCount ? `${maxCount}+` : count}
    </span>
  )

  if (children === undefined) return badge
  return (
    <span className={styles.anchor}>
      {children}
      {badge}
    </span>
  )
}
