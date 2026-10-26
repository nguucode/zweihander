'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentProps,
  type PointerEvent as ReactPointerEvent,
  type ReactElement,
  type ReactNode,
  type RefObject,
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
      // Collapsed, the label is gone from view but must still name the link;
      // with a badge, the name puts a comma between them ("Inbox, 12").
      'aria-label': collapsed || name !== item.label ? name : undefined,
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
  /** A count after the label, e.g. unread notifications. Joins the name in the rail. */
  badge?: ReactNode
  /** A chevron or a shortcut hint: right after the label for `switcher`, at the far end otherwise. */
  end?: ReactNode
  /**
   * `ghost`: a row like an item (notifications, help, the account).
   * `switcher`: the label in medium weight with its chevron right after it,
   * for a tenant or workspace switcher. `field`: drawn as an input, for a
   * search button that opens a command palette.
   */
  appearance?: 'ghost' | 'switcher' | 'field'
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
  badge,
  end,
  appearance = 'ghost',
  className,
  ...props
}: NavSidebarButtonProps) {
  const collapsed = useContext(RailContext)
  // Collapsed hides the badge, so a count joins the name, as on an item.
  const name = typeof badge === 'string' || typeof badge === 'number' ? `${label}, ${badge}` : label
  const button = (
    <button
      type="button"
      className={cn(styles.item, styles.button, styles[appearance], className)}
      aria-label={collapsed || name !== label ? name : undefined}
      {...props}
    >
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </span>
      {badge !== undefined && <span className={styles.badge}>{badge}</span>}
      {/* A chevron or a shortcut hint: shown, not part of the name ("Search", not "Search⌘K"). */}
      {end && (
        <span className={styles.end} aria-hidden="true">
          {end}
        </span>
      )}
    </button>
  )
  return collapsed ? (
    <Tooltip content={name} side="right">
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
  const shell = useContext(ShellContext)
  // In an App Shell under 64rem it is always the rail: expanded, it would
  // cover most of a phone. The hover preview still floats over the page, but
  // there is no expanding or docking it there.
  const isRail = shell.isNarrow || (isCollapsed ?? collapsedState)
  const canToggle = isCollapsible && !shell.isNarrow
  const setRail = (next: boolean) => {
    setCollapsedState(next)
    onCollapsedChange?.(next)
  }
  const brand = given(brandProp) ? brandProp : shell.sidebarBrand
  const id = useId()
  const slotRef = useRef<HTMLDivElement>(null)
  const peek = usePeek(isRail, slotRef)
  // While the pointer rests on the rail, the full sidebar floats over the
  // page (as in the Claude apps); its button docks it.
  const collapsed = isRail && !peek.isOpen
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
      {/* The slot keeps the rail's width in the layout while the preview
          floats; expanded it is display: contents and lays out nothing. */}
      <div
        ref={slotRef}
        className={cn(styles.slot, isRail && styles.railSlot)}
        onPointerEnter={peek.onPointerEnter}
        onPointerLeave={peek.onPointerLeave}
      >
        <nav
          aria-label={ariaLabel}
          className={cn(styles.sidebar, collapsed && styles.collapsed, peek.isOpen && styles.peek, className)}
          {...props}
        >
          {(given(brand) || canToggle) && (
            <div className={cn(styles.brandRow, given(brand) && styles.withBrand)}>
              {given(brand) && <div className={styles.brand}>{brand}</div>}
              {canToggle && (
                <button
                  type="button"
                  className={styles.toggle}
                  aria-expanded={!isRail}
                  aria-label={peek.isOpen ? 'Keep sidebar open' : isRail ? 'Expand sidebar' : 'Collapse sidebar'}
                  onClick={() => {
                    peek.close()
                    setRail(!isRail)
                  }}
                >
                  <Icon name={isRail ? 'sidebar-expand' : 'sidebar-collapse'} />
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
      </div>
    </RailContext.Provider>
  )
}

/** Hover delay before the rail previews the full sidebar, so passing the pointer across does not flash it. */
const PEEK_DELAY = 120

/**
 * The rail's hover preview. Mouse only: touch has no hover, and keyboard
 * focus reaches the same links in the rail (the expand button docks it). It
 * stays open while one of its menus is, and closes once the pointer is
 * elsewhere and no menu is open.
 */
/** Whether a menu or popover opened from inside the element is still open. */
const hasOpenMenu = (el: HTMLElement | null) => el?.querySelector('[aria-haspopup][aria-expanded="true"]') != null

function usePeek(isRail: boolean, ref: RefObject<HTMLDivElement | null>) {
  const [isOpen, setIsOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const close = () => {
    clearTimeout(timer.current)
    setIsOpen(false)
  }
  useEffect(() => () => clearTimeout(timer.current), [])
  // A menu opened from the preview keeps it; once that menu closes, the next
  // pointer move outside closes the preview.
  useEffect(() => {
    if (!isOpen) return
    const onMove = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node) && !hasOpenMenu(ref.current)) setIsOpen(false)
    }
    document.addEventListener('pointermove', onMove)
    return () => document.removeEventListener('pointermove', onMove)
  }, [isOpen, ref])
  return {
    // Only the rail previews; a stale open state from before docking is ignored.
    isOpen: isRail && isOpen,
    close,
    onPointerEnter: (e: ReactPointerEvent<HTMLDivElement>) => {
      if (!isRail || e.pointerType !== 'mouse') return
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setIsOpen(true), PEEK_DELAY)
    },
    onPointerLeave: () => {
      clearTimeout(timer.current)
      if (!hasOpenMenu(ref.current)) setIsOpen(false)
    },
  }
}
