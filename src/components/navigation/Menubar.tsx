'use client'

import { Menu as BaseMenu } from '@base-ui/react/menu'
import { Menubar as BaseMenubar } from '@base-ui/react/menubar'
import { cn } from '@/lib/utils'
import { MenuEntries, MenuSurface, type MenuEntry } from './Menu'
import styles from './Menubar.module.css'

export interface MenubarMenu {
  /** The top-level item: File, Edit, View. */
  label: string
  /** The flyout's entries, the same data as Menu's `items`. */
  items: MenuEntry[]
  disabled?: boolean
  /** Open this menu on first render, uncontrolled. */
  defaultOpen?: boolean
}

export interface MenubarProps {
  menus: MenubarMenu[]
  /** Names the bar. Needed when a page has more than one menubar. */
  'aria-label'?: string
  /**
   * While a flyout is open, lock page scroll and make the rest of the page
   * inert. `false` leaves the page as is.
   */
  isModal?: boolean
  /** Where the flyouts render instead of `<body>`, e.g. an element in fullscreen. */
  container?: HTMLElement | null
  className?: string
}

/** A row of menus, as in a desktop app: File, Edit, View, each opening a flyout. */
export function Menubar({ menus, 'aria-label': ariaLabel, isModal = true, container, className }: MenubarProps) {
  return (
    <BaseMenubar aria-label={ariaLabel} modal={isModal} className={cn(styles.bar, className)}>
      {menus.map((menu, i) => (
        <BaseMenu.Root key={i} disabled={menu.disabled} defaultOpen={menu.defaultOpen}>
          <BaseMenu.Trigger className={styles.trigger}>{menu.label}</BaseMenu.Trigger>
          <MenuSurface side="bottom" align="start" container={container}>
            <MenuEntries items={menu.items} />
          </MenuSurface>
        </BaseMenu.Root>
      ))}
    </BaseMenubar>
  )
}
