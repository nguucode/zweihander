'use client'

import { useRef, useState, type ChangeEvent, type ComponentProps, type KeyboardEvent, type ReactNode } from 'react'
import { Field } from '@base-ui/react/field'
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
}

export function Search({
  value,
  defaultValue = '',
  label,
  placeholder = 'Search',
  size = 'md',
  isFullWidth,
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
