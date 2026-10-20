'use client'

import { createContext, useContext, type ComponentProps, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Button } from '../../buttons/Button'
import styles from './TopBar.module.css'

/**
 * What the Top Bar needs from the App Shell around it: the drawer (whether
 * there is one, what it holds, how to open it), the brand, and whether the
 * brand takes a sidebar-wide cell. Outside a shell, none of it applies.
 */
export const ShellContext = createContext<{
  hasDrawer: boolean
  drawerHolds: 'sidebar' | 'links'
  isOpen: boolean
  open: () => void
  label: string
  brand: ReactNode
  brandCell: boolean
}>({
  hasDrawer: false,
  drawerHolds: 'sidebar',
  isOpen: false,
  open: () => {},
  label: 'Navigation',
  brand: null,
  brandCell: false,
})

/** `null`, `false` and `undefined` render nothing. */
const given = (node: ReactNode) => node != null && node !== false

export interface TopBarProps extends ComponentProps<'header'> {
  /** Breadcrumbs, or TopBarNav links. */
  start?: ReactNode
  /** Search, notifications, the account menu. */
  end?: ReactNode
  children?: ReactNode
}

/**
 * The bar above the page. Inside an App Shell it shows the shell's brand and,
 * on narrow screens, the menu button that opens the navigation drawer.
 */
export function TopBar({ start, end, children, className, ...props }: TopBarProps) {
  const drawer = useContext(ShellContext)
  return (
    <header
      className={cn(styles.header, className)}
      data-drawer={drawer.hasDrawer ? drawer.drawerHolds : undefined}
      data-brand-cell={drawer.brandCell || undefined}
      {...props}
    >
      {drawer.hasDrawer && (
        <Button
          variant="secondary"
          appearance="ghost"
          isIconOnly
          aria-label={`Open ${drawer.label.toLowerCase()}`}
          aria-haspopup="dialog"
          aria-expanded={drawer.isOpen}
          className={styles.menuButton}
          onClick={drawer.open}
        >
          <Icon name="menu" />
        </Button>
      )}
      {given(drawer.brand) && <div className={styles.brand}>{drawer.brand}</div>}
      {start && <div className={styles.start}>{start}</div>}
      {children && <div className={styles.center}>{children}</div>}
      {end && <div className={styles.end}>{end}</div>}
    </header>
  )
}

export interface TopBarNavItem {
  label: string
  href: string
}

export interface TopBarNavProps extends Omit<ComponentProps<'nav'>, 'children'> {
  items: TopBarNavItem[]
  /** The href of the page you are on. */
  currentHref?: string
  'aria-label'?: string
}

/** Navigation links across the Top Bar. Hidden below 48rem, where the drawer holds them. */
export function TopBarNav({ items, currentHref, className, 'aria-label': ariaLabel = 'Main', ...props }: TopBarNavProps) {
  return (
    <nav aria-label={ariaLabel} className={cn(styles.nav, className)} {...props}>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={styles.navLink} aria-current={item.href === currentHref ? 'page' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
