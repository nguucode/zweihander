'use client'

import type { ReactElement } from 'react'
import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { MenuEntries, MenuSurface, type MenuProps } from './Menu'
import styles from './ContextMenu.module.css'

export interface ContextMenuProps
  extends Pick<MenuProps, 'items' | 'open' | 'defaultOpen' | 'onOpenChange' | 'container' | 'className'> {
  /** The area: one element, its props merged, not wrapped, so a `<tr>` or `<li>` stays valid. */
  children: ReactElement
  disabled?: boolean
}

/** Always modal, as Base UI makes it: page scroll is locked while open. Menu's popup and entries, opened at the pointer by a right click or a long press on an area. */
export function ContextMenu({ children, items, disabled, open, defaultOpen, onOpenChange, container, className }: ContextMenuProps) {
  return (
    <BaseContextMenu.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange && ((next) => onOpenChange(next))}
      disabled={disabled}
    >
      <BaseContextMenu.Trigger className={styles.area} render={children} />
      {/* The popup's corner sits on the pointer, as in the OS menus. */}
      <MenuSurface side="bottom" align="start" sideOffset={0} container={container} className={className}>
        <MenuEntries items={items} />
      </MenuSurface>
    </BaseContextMenu.Root>
  )
}
