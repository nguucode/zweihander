import { useEffect, useRef, useState, type ComponentProps, type ReactElement, type ReactNode } from 'react'
import { useRender } from '@base-ui/react/use-render'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Breadcrumbs.module.css'

export interface BreadcrumbItem {
  label: ReactNode
  href?: string
  /** Replaces the `<a>`, e.g. a router's `<Link to="…" />`. */
  render?: ReactElement
}

export interface BreadcrumbsProps extends Omit<ComponentProps<'nav'>, 'children'> {
  /** From the top level down. The last one is the current page. */
  items: BreadcrumbItem[]
  /**
   * Collapse the middle when there are more than this many: the first item,
   * "…", and the last `maxItems - 1`. The "…" expands them in place.
   */
  maxItems?: number
  separator?: ReactNode
  size?: 'sm' | 'md'
  /** The nav landmark's name. */
  'aria-label'?: string
}

function Crumb({ item }: { item: BreadcrumbItem }) {
  return useRender({
    render: item.render,
    defaultTagName: 'a',
    props: { href: item.href, className: styles.link, children: item.label },
  })
}

export function Breadcrumbs({
  items,
  maxItems,
  separator,
  size = 'md',
  'aria-label': ariaLabel = 'Breadcrumb',
  className,
  ...props
}: BreadcrumbsProps) {
  const [expanded, setExpanded] = useState(false)
  const listRef = useRef<HTMLOListElement>(null)
  // The "…" button is gone once pressed: move focus to the first item it
  // revealed, rather than dropping it on <body>.
  const justExpanded = useRef(false)
  useEffect(() => {
    if (!justExpanded.current) return
    justExpanded.current = false
    listRef.current?.querySelectorAll<HTMLElement>('li')[1]?.querySelector<HTMLElement>('a, [href], button')?.focus()
  }, [expanded])
  const collapse = !expanded && maxItems !== undefined && maxItems >= 2 && items.length > maxItems
  const shown: (BreadcrumbItem | 'ellipsis')[] = collapse
    ? [items[0], 'ellipsis', ...items.slice(items.length - (maxItems - 1))]
    : items
  const sep = (
    <span className={styles.separator} aria-hidden="true">
      {separator ?? <Icon name="chevron-right" />}
    </span>
  )

  return (
    <nav aria-label={ariaLabel} className={cn(styles.breadcrumbs, styles[size], className)} {...props}>
      <ol ref={listRef} className={styles.list}>
        {shown.map((item, i) => {
          const last = i === shown.length - 1
          return (
            <li key={i} className={styles.item}>
              {item === 'ellipsis' ? (
                <button
                  type="button"
                  className={styles.ellipsis}
                  aria-label={`Show ${items.length - maxItems!} more`}
                  onClick={() => {
                    justExpanded.current = true
                    setExpanded(true)
                  }}
                >
                  <Icon name="more" />
                </button>
              ) : last ? (
                // The current page: text, not a link to itself.
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Crumb item={item} />
              )}
              {!last && sep}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
