import { useState, type ComponentProps, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Pagination.module.css'

export interface PaginationProps extends Omit<ComponentProps<'nav'>, 'children' | 'onChange'> {
  totalPages: number
  /** 1-based. */
  page?: number
  defaultPage?: number
  onPageChange?: (page: number) => void
  /** Pages shown either side of the current one. */
  siblingCount?: number
  /** Pages always shown at each end. */
  boundaryCount?: number
  size?: 'sm' | 'md'
  /** Render links instead of buttons, for pages with their own URL. */
  getHref?: (page: number) => string
  /** The nav landmark's name. */
  'aria-label'?: string
}

const range = (from: number, to: number) => Array.from({ length: Math.max(0, to - from + 1) }, (_, i) => from + i)

/** The page numbers to show, with 'start-ellipsis' / 'end-ellipsis' where a run is skipped. */
export function paginationItems(page: number, total: number, siblings = 1, boundary = 1) {
  const start = range(1, Math.min(boundary, total))
  const end = range(Math.max(total - boundary + 1, boundary + 1), total)
  const siblingsStart = Math.max(Math.min(page - siblings, total - boundary - siblings * 2 - 1), boundary + 2)
  const siblingsEnd = Math.min(Math.max(page + siblings, boundary + siblings * 2 + 2), end.length > 0 ? end[0] - 2 : total - 1)
  return [
    ...start,
    ...(siblingsStart > boundary + 2 ? ['start-ellipsis' as const] : boundary + 1 < total - boundary ? [boundary + 1] : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < total - boundary - 1 ? ['end-ellipsis' as const] : total - boundary > boundary ? [total - boundary] : []),
    ...end,
  ]
}

export function Pagination({
  totalPages,
  page: pageProp,
  defaultPage = 1,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  size = 'md',
  getHref,
  'aria-label': ariaLabel = 'Pagination',
  className,
  ...props
}: PaginationProps) {
  const [pageState, setPageState] = useState(defaultPage)
  const total = Math.max(1, totalPages)
  const page = Math.min(Math.max(1, pageProp ?? pageState), total)
  const go = (p: number) => {
    setPageState(p)
    onPageChange?.(p)
  }

  const control = (target: number, label: string, content: ReactNode, extra?: string, current?: boolean) => {
    const disabled = target < 1 || target > total
    const common = {
      className: cn(styles.control, extra, current && styles.current),
      'aria-label': label,
      'aria-current': current ? ('page' as const) : undefined,
    }
    if (getHref) {
      // A link at the ends has nowhere to go: no href, aria-disabled.
      return disabled ? (
        <a {...common} aria-disabled="true">
          {content}
        </a>
      ) : (
        <a {...common} href={getHref(target)} onClick={() => !current && go(target)}>
          {content}
        </a>
      )
    }
    return (
      <button type="button" {...common} disabled={disabled} onClick={() => !current && go(target)}>
        {content}
      </button>
    )
  }

  return (
    <nav aria-label={ariaLabel} className={cn(styles.pagination, styles[size], className)} {...props}>
      <ul className={styles.list}>
        <li>{control(page - 1, 'Previous page', <Icon name="chevron-left" />, styles.step)}</li>
        {paginationItems(page, total, siblingCount, boundaryCount).map((item) => (
          <li key={item}>
            {typeof item === 'string' ? (
              <span className={styles.ellipsis} aria-hidden="true">
                …
              </span>
            ) : (
              control(item, `Page ${item}`, item, undefined, item === page)
            )}
          </li>
        ))}
        <li>{control(page + 1, 'Next page', <Icon name="chevron-right" />, styles.step)}</li>
      </ul>
    </nav>
  )
}
