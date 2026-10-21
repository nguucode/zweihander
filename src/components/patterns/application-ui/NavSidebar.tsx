'use client'

import {
  createContext,
  useContext,
  useId,
  useState,
  type ComponentProps,
  type ReactElement,
  type ReactNode,
} from 'react'
import { useRender } from '@base-ui/react/use-render'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Tooltip } from '../../overlays/Tooltip'
import { ShellContext } from './TopBar'
import styles from './NavSidebar.module.css'

export interface NavSidebarItem {
  type?: 'item'
  label: string
  href?: string
  /** Needed to show in the rail: an item without one is left out of it. */
  icon?: ReactNode
  /** A count or short tag after the label, e.g. unread items. */
  badge?: ReactNode
  /** Replaces the `<a>`, e.g. a router's `<Link to="…" />`. */
  render?: ReactElement
}
/** A category: a named list of items. */
export interface NavSidebarGroup {
  type: 'group'
  label: string
  items: NavSidebarItem[]
  /** At the end of the label row, e.g. an icon Button that adds an item. Shows on hover and focus. */
  action?: ReactNode
  /** The label becomes a button that shows and hides the items. */
  isCollapsible?: boolean
  isCollapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  /** Show this many items and a "Show more" button for the rest. */
  limit?: number
}
export type NavSidebarEntry = NavSidebarItem | NavSidebarGroup

export interface NavSidebarProps extends Omit<ComponentProps<'nav'>, 'children'> {
  items: NavSidebarEntry[]
  /** The href of the page the reader is on: that item gets aria-current="page". */
  currentHref?: string
  /**
   * The logo, in the top row with the collapse button. Inside an AppShell's
   * sidebar layout the shell passes its own `brand` here.
   */
  brand?: ReactNode
  /** Under the logo, e.g. a tenant switcher and search, built from NavSidebarButton. Stays in the rail. */
  header?: ReactNode
  /** Pinned to the bottom, e.g. the account, notifications and help. Stays in the rail, stacked. */
  footer?: ReactNode
  /** An icon rail: labels move into tooltips; items without an icon are left out. */
  isCollapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  /** Show a button that collapses and expands the sidebar. */
  isCollapsible?: boolean
  /** The nav landmark's name. */
  'aria-label'?: string
}

/** Whether the sidebar is the rail, for the parts in its header and footer. */
const RailContext = createContext(false)

/** `null`, `false` and `undefined` render nothing. */
const given = (node: ReactNode) => node != null && node !== false

function ItemLink({ item, current, collapsed }: { item: NavSidebarItem; current: boolean; collapsed: boolean }) {
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

export interface NavSidebarButtonProps extends ComponentProps<'button'> {
  icon: ReactNode
  /** The visible text, and the button's name in the rail. */
  label: string
  /** A second, quieter line, e.g. the account's role. */
  description?: ReactNode
  /** After the label, e.g. a chevron or a shortcut hint. */
  end?: ReactNode
  /** `field` draws it as an input, for a search button that opens a command palette. */
  appearance?: 'ghost' | 'field'
}

/**
 * A row for the header and footer: a tenant switcher, a search button, the
 * account. A button, so it can be a Menu's or Popover's trigger; in the rail
 * it is its icon, named by its label.
 */
export function NavSidebarButton({
  icon,
  label,
  description,
  end,
  appearance = 'ghost',
  className,
  ...props
}: NavSidebarButtonProps) {
  const collapsed = useContext(RailContext)
  const button = (
    <button
      type="button"
      className={cn(styles.item, styles.button, appearance === 'field' && styles.field, className)}
      aria-label={collapsed ? label : undefined}
      {...props}
    >
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </span>
      {end && <span className={styles.end}>{end}</span>}
    </button>
  )
  return collapsed ? (
    <Tooltip content={label} side="right">
      {button}
    </Tooltip>
  ) : (
    button
  )
}

/** Runs of ungrouped items become one list; groups stay as they are. */
function sections(items: NavSidebarEntry[]) {
  const out: (NavSidebarItem[] | NavSidebarGroup)[] = []
  for (const entry of items) {
    if (entry.type === 'group') out.push(entry)
    else if (Array.isArray(out.at(-1))) (out.at(-1) as NavSidebarItem[]).push(entry)
    else out.push([entry])
  }
  return out
}

function Group({
  group,
  id,
  collapsed,
  list,
  currentHref,
}: {
  group: NavSidebarGroup
  id: string
  collapsed: boolean
  list: (entries: NavSidebarItem[], labelledBy?: string) => ReactNode
  currentHref?: string
}) {
  const [closedState, setClosedState] = useState(group.defaultCollapsed ?? false)
  const closed = group.isCollapsed ?? closedState
  const toggle = () => {
    setClosedState(!closed)
    group.onCollapsedChange?.(!closed)
  }
  // Open from the start when the current page is past the limit, so it is never hidden.
  const [showAll, setShowAll] = useState(
    () => group.limit !== undefined && group.items.findIndex((it) => it.href === currentHref) >= group.limit,
  )
  // The rail has no label to reopen a category or a "Show more" to press, so it shows every item it can.
  const items = collapsed
    ? group.items
    : group.limit !== undefined && !showAll
      ? group.items.slice(0, group.limit)
      : group.items
  const hasMore = !collapsed && group.limit !== undefined && group.items.length > group.limit
  const hidden = closed && !collapsed

  return (
    // The label names the list ("Pinned, list, 3 items") rather than being a
    // heading, so it cannot break the page's outline.
    <div className={styles.group}>
      <div className={styles.groupHead}>
        {group.isCollapsible ? (
          <button
            type="button"
            id={`${id}-label`}
            className={cn(styles.groupLabel, styles.groupToggle)}
            aria-expanded={!closed}
            aria-controls={`${id}-list`}
            onClick={toggle}
          >
            {group.label}
            <Icon name={closed ? 'chevron-right' : 'chevron-down'} className={styles.groupChevron} />
          </button>
        ) : (
          <div id={`${id}-label`} className={styles.groupLabel}>
            {group.label}
          </div>
        )}
        {given(group.action) && <div className={styles.groupAction}>{group.action}</div>}
      </div>
      <div id={`${id}-list`} hidden={hidden}>
        {list(items, `${id}-label`)}
        {hasMore && (
          <button type="button" className={cn(styles.item, styles.button, styles.more)} onClick={() => setShowAll(!showAll)}>
            <span className={styles.label}>{showAll ? 'Show less' : 'Show more'}</span>
          </button>
        )}
      </div>
    </div>
  )
}

export function NavSidebar({
  items,
  currentHref,
  brand: brandProp,
  header,
  footer,
  isCollapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  isCollapsible = false,
  'aria-label': ariaLabel = 'Main',
  className,
  ...props
}: NavSidebarProps) {
  const [collapsedState, setCollapsedState] = useState(defaultCollapsed)
  const collapsed = isCollapsed ?? collapsedState
  const toggle = () => {
    setCollapsedState(!collapsed)
    onCollapsedChange?.(!collapsed)
  }
  const shell = useContext(ShellContext)
  const brand = given(brandProp) ? brandProp : shell.sidebarBrand
  const id = useId()
  const list = (entries: NavSidebarItem[], labelledBy?: string) => (
    <ul className={styles.list} aria-labelledby={labelledBy}>
      {entries.map((item) => (
        <li key={item.href ?? item.label}>
          <ItemLink item={item} current={item.href !== undefined && item.href === currentHref} collapsed={collapsed} />
        </li>
      ))}
    </ul>
  )
  // The rail shows icons only, so an item without one has nothing to show there.
  const shown = collapsed
    ? sections(items)
        .map((s) => (Array.isArray(s) ? s.filter((it) => it.icon) : { ...s, items: s.items.filter((it) => it.icon) }))
        .filter((s) => (Array.isArray(s) ? s : s.items).length > 0)
    : sections(items)

  return (
    <RailContext.Provider value={collapsed}>
      <nav aria-label={ariaLabel} className={cn(styles.sidebar, collapsed && styles.collapsed, className)} {...props}>
        {(given(brand) || isCollapsible) && (
          <div className={cn(styles.brandRow, given(brand) && styles.withBrand)}>
            {given(brand) && <div className={styles.brand}>{brand}</div>}
            {isCollapsible && (
              <button
                type="button"
                className={styles.toggle}
                aria-expanded={!collapsed}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                onClick={toggle}
              >
                <Icon name={collapsed ? 'sidebar-expand' : 'sidebar-collapse'} />
              </button>
            )}
          </div>
        )}
        {given(header) && <div className={styles.header}>{header}</div>}
        <div className={styles.body}>
          {shown.map((section, i) =>
            Array.isArray(section) ? (
              <div key={i}>{list(section)}</div>
            ) : (
              <Group
                key={section.label}
                group={section}
                id={`${id}-group-${i}`}
                collapsed={collapsed}
                list={list}
                currentHref={currentHref}
              />
            ),
          )}
        </div>
        {given(footer) && <div className={styles.footer}>{footer}</div>}
      </nav>
    </RailContext.Provider>
  )
}
