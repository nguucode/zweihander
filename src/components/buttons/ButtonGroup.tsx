'use client'

import type { ComponentProps } from 'react'
import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group'
import { cn } from '@/lib/utils'
import styles from './ButtonGroup.module.css'

export type ButtonGroupProps = ComponentProps<'div'>

/** Buttons joined into one bar: related actions that read as a set. */
export function ButtonGroup({ className, ...props }: ButtonGroupProps) {
  return <div role="group" {...props} className={cn(styles.group, className)} />
}

export interface ToggleGroupProps
  extends Omit<ComponentProps<'div'>, 'defaultValue' | 'onChange' | 'dir'> {
  /** Controlled: the `value` of each pressed ToggleButton. */
  value?: string[]
  /** Uncontrolled: the values pressed at first. */
  defaultValue?: string[]
  /** Base UI's second argument (event details) is dropped: nothing here needs it. */
  onValueChange?: (value: string[]) => void
  /** Any number pressed at once. Without it, one at a time: a segmented control. */
  multiple?: boolean
  /** Disables every toggle in the group. */
  disabled?: boolean
}

/** ToggleButtons joined into one bar, sharing one selection. */
export function ToggleGroup({ onValueChange, multiple = false, className, ...props }: ToggleGroupProps) {
  return (
    <BaseToggleGroup
      {...props}
      multiple={multiple}
      onValueChange={(next, details) => {
        // Single choice is a segmented control: once a segment is chosen,
        // pressing it again does not leave none chosen.
        if (!multiple && next.length === 0) return details.cancel()
        onValueChange?.(next)
      }}
      className={cn(styles.group, className)}
    />
  )
}
