'use client'

import { useEffect, useRef, useState, type ChangeEvent, type ComponentProps, type KeyboardEvent, type ReactNode } from 'react'
import { Field } from '@base-ui/react/field'
import { Kbd } from '../atomic-elements/Kbd'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import {
  assignRef,
  InputField,
  boxClass,
  focusControl,
  inputStyles,
  type InputSize,
} from './InputField'
import styles from './Search.module.css'

export interface SearchProps extends Omit<ComponentProps<'input'>, 'size' | 'type' | 'value' | 'defaultValue'> {
  value?: string
  defaultValue?: string
  /** A visible label. Without one the field is named by `aria-label` ("Search" by default). */
  label?: ReactNode
  size?: InputSize
  isFullWidth?: boolean
  /**
   * One key, e.g. `/`, that focuses the field from anywhere on the page.
   * No modifiers: ⌘K belongs to the Command Palette. One per page.
   */
  shortcut?: string
}

// Focus is in a form field: the key belongs to it, not to us.
const isInField = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || el.matches('input, textarea, select'))

export function Search({
  value,
  defaultValue = '',
  label,
  placeholder = 'Search',
  size = 'md',
  isFullWidth,
  shortcut,
  disabled,
  readOnly,
  onChange,
  onKeyDown,
  className,
  ref,
  'aria-label': ariaLabel,
  ...props
}: SearchProps) {
  const input = useRef<HTMLInputElement | null>(null)
  // Only to know whether to show the clear button; the input stays the
  // source of truth for an uncontrolled field.
  const [uncontrolled, setUncontrolled] = useState(defaultValue)
  const current = value ?? uncontrolled
  const canClear = current !== '' && !disabled && !readOnly

  // Disabled or read-only, the field has nothing to type into.
  const key = disabled || readOnly ? undefined : shortcut

  useEffect(() => {
    if (!key) return
    const onKey = (e: globalThis.KeyboardEvent) => {
      // Case-blind, as Command Palette's hotkey, so Caps Lock does not matter.
      if (e.key.toLowerCase() !== key.toLowerCase() || e.metaKey || e.ctrlKey || e.altKey || e.repeat || e.isComposing) return
      if (e.defaultPrevented || isInField(e.target)) return
      // Or the key would be typed into the field, and Firefox's quick find takes `/`.
      e.preventDefault()
      input.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [key])

  const clear = () => {
    const el = input.current
    if (!el) return
    // Set the value the way typing would, so onChange receives a real event
    // whether the field is controlled or not.
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!.call(el, '')
    el.dispatchEvent(new Event('input', { bubbles: true }))
    // The button unmounts once the field is empty; hand keyboard focus back
    // to the input rather than losing it. A pointer press never focuses the
    // button (see onMouseDown), so an idle field stays idle.
    if (document.activeElement?.tagName === 'BUTTON') el.focus()
  }

  return (
    <InputField label={label} disabled={disabled} isFullWidth={isFullWidth} className={className}>
      <span className={boxClass(size)} onMouseDown={focusControl}>
        <span className={inputStyles.affix}>
          <Icon name="search" />
        </span>
        <Field.Control
          {...props}
          ref={(node: HTMLInputElement | null) => {
            input.current = node
            assignRef(ref, node)
          }}
          type="search"
          value={value}
          defaultValue={value === undefined ? defaultValue : undefined}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          aria-label={label ? ariaLabel : (ariaLabel ?? 'Search')}
          aria-keyshortcuts={key}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUncontrolled(event.target.value)
            onChange?.(event)
          }}
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
            onKeyDown?.(event)
            // Firefox does not clear a search field on Escape; Chrome and
            // Safari do. Doing it here makes them all agree.
            if (event.key === 'Escape' && canClear && !event.defaultPrevented) {
              event.preventDefault()
              clear()
            }
          }}
          className={cn(inputStyles.control, styles.input)}
        />
        {/* Where the clear button goes: the two never show at once. */}
        {key && current === '' && (
          <Kbd size={size} aria-hidden="true" className={styles.shortcut}>
            {key}
          </Kbd>
        )}
        {canClear && (
          <button
            type="button"
            aria-label="Clear search"
            className={inputStyles.iconButton}
            // Keep focus where it is: a focused field stays focused, an idle one stays idle.
            onMouseDown={(event) => event.preventDefault()}
            onClick={clear}
          >
            <Icon name="clear" />
          </button>
        )}
      </span>
    </InputField>
  )
}
