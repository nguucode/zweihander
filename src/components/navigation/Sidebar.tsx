import { useId, useState, type ComponentProps, type ReactElement, type ReactNode } from 'react'
import { useRender } from '@base-ui/react/use-render'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Tooltip } from '../overlays/Tooltip'
import styles from './Sidebar.module.css'

export interface SidebarItem {
  type?: 'item'
  label: string
  href?: string
  icon?: ReactNode
  /** A count or short tag after the label, e.g. unread items. */
  badge?: ReactNode
  /** Replaces the `<a>`, e.g. a router's `<Link to="…" />`. */
  render?: ReactElement
}
export interface SidebarGroup {
  type: 'group'
  label: string
  items: SidebarItem[]
}
export type SidebarEntry = SidebarItem | SidebarGroup

export interface SidebarProps extends Omit<ComponentProps<'nav'>, 'children'> {
  items: SidebarEntry[]
  /** The href of the page the reader is on: that item gets aria-current="page". */
  currentHref?: string
  /** Above the items, e.g. the product name or a workspace switcher. */
  header?: ReactNode
  /** Pinned to the bottom, e.g. the signed-in user. */
  footer?: ReactNode
  /** An icon rail: labels move into tooltips. Every item needs an icon. */
  isCollapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  /** Show a button that collapses and expands the sidebar. */
  isCollapsible?: boolean
  /** The nav landmark's name. */
  'aria-label'?: string
}

function ItemLink({ item, current, collapsed }: { item: SidebarItem; current: boolean; collapsed: boolean }) {
  // Collapsed hides the badge too, so a count or short tag joins the name.
  const name =
    typeof item.badge === 'string' || typeof item.badge === 'number' ? `${item.label}, ${item.badge}` : item.label
  const link = useRender({
    render: item.render,
    defaultTagName: 'a',
    props: {
      href: item.href,
      className: cn(styles.item, current && styles.current),
      'aria-current': current ? ('page' as const) : undefined,
      // Collapsed, the label is gone from view but must still name the link.
      'aria-label': collapsed ? name : undefined,
      children: (
        <>
          {item.icon && (
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
          )}
          <span className={styles.label}>{item.label}</span>
          {item.badge !== undefined && <span className={styles.badge}>{item.badge}</span>}
        </>
      ),
    },
  })
  return collapsed ? (
    <Tooltip content={name} side="right">
      {link}
    </Tooltip>
  ) : (
    link
  )
}

/** Runs of ungrouped items become one list; groups stay as they are. */
function sections(items: SidebarEntry[]) {
  const out: (SidebarItem[] | SidebarGroup)[] = []
  for (const entry of items) {
    if (entry.type === 'group') out.push(entry)
    else if (Array.isArray(out.at(-1))) (out.at(-1) as SidebarItem[]).push(entry)
    else out.push([entry])
  }
  return out
}

export function Sidebar({
  items,
  currentHref,
  header,
  footer,
  isCollapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  isCollapsible = false,
  'aria-label': ariaLabel = 'Main',
  className,
  ...props
}: SidebarProps) {
  const [collapsedState, setCollapsedState] = useState(defaultCollapsed)
  const collapsed = isCollapsed ?? collapsedState
  const toggle = () => {
    setCollapsedState(!collapsed)
    onCollapsedChange?.(!collapsed)
  }
  const id = useId()
  const list = (entries: SidebarItem[], labelledBy?: string) => (
    <ul className={styles.list} aria-labelledby={labelledBy}>
      {entries.map((item) => (
        <li key={item.href ?? item.label}>
          <ItemLink item={item} current={item.href !== undefined && item.href === currentHref} collapsed={collapsed} />
        </li>
      ))}
    </ul>
  )

  return (
    <nav aria-label={ariaLabel} className={cn(styles.sidebar, collapsed && styles.collapsed, className)} {...props}>
      {(header || isCollapsible) && (
        <div className={styles.header}>
          {header && <div className={styles.headerContent}>{header}</div>}
          {isCollapsible && (
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={!collapsed}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              onClick={toggle}
            >
              <Icon name={collapsed ? 'chevron-right' : 'chevron-left'} />
            </button>
          )}
        </div>
      )}
      <div className={styles.body}>
        {sections(items).map((section, i) =>
          Array.isArray(section) ? (
            <div key={i}>{list(section)}</div>
          ) : (
            // The label names the list ("Projects, list, 3 items") rather
            // than being a heading, so it cannot break the page's outline.
            <div key={i} className={styles.group}>
              <div id={`${id}-group-${i}`} className={styles.groupLabel}>
                {section.label}
              </div>
              {list(section.items, `${id}-group-${i}`)}
            </div>
          ),
        )}
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </nav>
  )
}
