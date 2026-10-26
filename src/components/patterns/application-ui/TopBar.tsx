'use client'

import { createContext, useContext, type ComponentProps, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './TopBar.module.css'

/**
 * What the shell's pieces need from the App Shell around them: the brand,
 * whether it takes a sidebar-wide cell, and whether the shell is narrower
 * than 64rem, where a NavSidebar is the icon rail. Outside a shell, none of
 * it applies.
 */
export const ShellContext = createContext<{
  brand: ReactNode
  brandCell: boolean
  isNarrow: boolean
}>({
  brand: null,
  brandCell: false,
  isNarrow: false,
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

/** The bar above the page. Inside an App Shell it shows the shell's brand. */
export function TopBar({ start, end, children, className, ...props }: TopBarProps) {
  const shell = useContext(ShellContext)
  return (
    <header className={cn(styles.header, className)} data-brand-cell={shell.brandCell || undefined} {...props}>
      {given(shell.brand) && <div className={styles.brand}>{shell.brand}</div>}
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

/** Navigation links across the Top Bar. When they do not fit, they scroll sideways. */
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
