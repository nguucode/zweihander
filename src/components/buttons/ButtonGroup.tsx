'use client'

import type { ComponentProps } from 'react'
import { ToggleGroup } from '@base-ui/react/toggle-group'
import { cn } from '@/lib/utils'
import styles from './ButtonGroup.module.css'

export interface ButtonGroupProps
  extends Omit<ComponentProps<'div'>, 'defaultValue' | 'onChange' | 'dir'> {
  /** `separate`: ToggleButtons 4px apart. `joined`: one bar, inner corners square, borders shared. */
  type?: 'separate' | 'joined'
  /** Controlled: the `value` of the ToggleButton that is on. Pair with `onValueChange`. */
  value?: string
  /** Uncontrolled: the value on at first. */
  defaultValue?: string
  /** Called with the value of the ToggleButton just turned on. */
  onValueChange?: (value: string) => void
  /** Disables every toggle in the group. */
  disabled?: boolean
}

/** ToggleButtons that share one selection, exactly one on at a time, like Tabs. */
export function ButtonGroup({
  type = 'separate',
  value,
  defaultValue,
  onValueChange,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <ToggleGroup
      {...props}
      value={value === undefined ? undefined : [value]}
      defaultValue={defaultValue === undefined ? undefined : [defaultValue]}
      onValueChange={(next, details) => {
        // Once one is on, pressing it again does not leave none on.
        if (next.length === 0) return details.cancel()
        onValueChange?.(next[0])
      }}
      className={cn(styles[type], className)}
    />
  )
}
