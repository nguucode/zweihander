'use client'

import type { ReactNode } from 'react'
import { Tabs as BaseTabs } from '@base-ui/react/tabs'
import { cn } from '@/lib/utils'
import styles from './Tabs.module.css'

export interface TabItem {
  value: string
  label: ReactNode
  /** The panel shown while this tab is selected. */
  content?: ReactNode
  icon?: ReactNode
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  /** `underline`: a line under the selected tab. `pills`: a filled segment, for switching views in a toolbar. */
  appearance?: 'underline' | 'pills'
  size?: 'sm' | 'md'
  orientation?: 'horizontal' | 'vertical'
  /** Tabs share the full width equally. */
  isFullWidth?: boolean
  /** Select a tab as soon as it gets focus, rather than on Enter or Space. */
  activateOnFocus?: boolean
  /** Keep hidden panels in the DOM, e.g. to preserve their state. */
  keepMounted?: boolean
  /** Names the tab list when nothing on the page does. */
  'aria-label'?: string
  className?: string
}

export function Tabs({
  items,
  value,
  defaultValue,
  onValueChange,
  appearance = 'underline',
  size = 'md',
  orientation = 'horizontal',
  isFullWidth = false,
  activateOnFocus = false,
  keepMounted = false,
  'aria-label': ariaLabel,
  className,
}: TabsProps) {
  return (
    <BaseTabs.Root
      value={value}
      defaultValue={defaultValue ?? (value === undefined ? items.find((i) => !i.disabled)?.value : undefined)}
      onValueChange={onValueChange && ((v) => onValueChange(v as string))}
      orientation={orientation}
      className={cn(styles.tabs, styles[appearance], styles[size], styles[orientation], isFullWidth && styles.fullWidth, className)}
    >
      <BaseTabs.List className={styles.list} activateOnFocus={activateOnFocus} aria-label={ariaLabel}>
        {items.map((item) => (
          <BaseTabs.Tab key={item.value} value={item.value} disabled={item.disabled} className={styles.tab}>
            {item.icon && (
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
            )}
            {item.label}
          </BaseTabs.Tab>
        ))}
        <BaseTabs.Indicator className={styles.indicator} />
      </BaseTabs.List>
      {items.map(
        (item) =>
          item.content !== undefined && (
            <BaseTabs.Panel key={item.value} value={item.value} keepMounted={keepMounted} className={styles.panel}>
              {item.content}
            </BaseTabs.Panel>
          ),
      )}
    </BaseTabs.Root>
  )
}
