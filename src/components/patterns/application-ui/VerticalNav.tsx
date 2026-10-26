'use client'

import { useId, type ComponentProps, type ReactElement, type ReactNode } from 'react'
import { useRender } from '@base-ui/react/use-render'
import { cn } from '@/lib/utils'
import { Badge } from '../../atomic-elements/Badge'
import styles from './VerticalNav.module.css'

export interface VerticalNavItem {
  type?: 'item'
  label: string
  href?: string
  icon?: ReactNode
  /** A count after the label, e.g. the number of members. Joins the link's name: "Members, 12". */
  badge?: number
  /** Replaces the `<a>`, e.g. a router's `<Link to="…" />`. */
  render?: ReactElement
}
/** A named list of items. */
export interface VerticalNavGroup {
  type: 'group'
  label: string
  items: VerticalNavItem[]
}
export type VerticalNavEntry = VerticalNavItem | VerticalNavGroup

export interface VerticalNavProps extends Omit<ComponentProps<'nav'>, 'children'> {
  items: VerticalNavEntry[]
  /** The href of the page the reader is on: that item gets aria-current="page". */
  currentHref?: string
  /** The nav landmark's name, e.g. "Settings". Required: the app's own nav is already a navigation landmark. */
  'aria-label': string
}

function Item({ item, current }: { item: VerticalNavItem; current: boolean }) {
  // The count joins the name with a comma ("Members, 12"), not run on ("Members12").
  const name = item.badge === undefined ? item.label : `${item.label}, ${item.badge}`
  return useRender({
    render: item.render,
    defaultTagName: 'a',
    props: {
      href: item.href,
      className: cn(styles.item, current && styles.current),
      'aria-current': current ? ('page' as const) : undefined,
      'aria-label': name !== item.label ? name : undefined,
      children: (
        <>
          {item.icon && (
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
          )}
          <span className={styles.label}>{item.label}</span>
          {item.badge !== undefined && <Badge count={item.badge} size="sm" variant="secondary" />}
        </>
      ),
    },
  })
}

/**
 * Secondary navigation inside a page, e.g. the sections of Settings. The
 * app's own navigation is NavSidebar; this one has no rail, no collapse and
 * no fill of its own, and takes the width its container gives it.
 */
export function VerticalNav({ items, currentHref, className, ...props }: VerticalNavProps) {
  const id = useId()
  const list = (entries: VerticalNavItem[], labelledBy?: string) => (
    <ul className={styles.list} aria-labelledby={labelledBy}>
      {entries.map((item) => (
        <li key={item.href ?? item.label}>
          <Item item={item} current={item.href !== undefined && item.href === currentHref} />
        </li>
      ))}
    </ul>
  )
  // Runs of ungrouped items become one list; groups stay as they are.
  const sections: (VerticalNavItem[] | VerticalNavGroup)[] = []
  for (const entry of items) {
    const last = sections.at(-1)
    if (entry.type === 'group') sections.push(entry)
    else if (Array.isArray(last)) last.push(entry)
    else sections.push([entry])
  }

  return (
    <nav className={cn(styles.nav, className)} {...props}>
      {sections.map((section, i) =>
        Array.isArray(section) ? (
          <div key={i}>{list(section)}</div>
        ) : (
          // The label names the list rather than being a heading, so it
          // cannot break the page's outline.
          <div key={i} className={styles.group}>
            <div id={`${id}-${i}`} className={styles.groupLabel}>
              {section.label}
            </div>
            {list(section.items, `${id}-${i}`)}
          </div>
        ),
      )}
    </nav>
  )
}
