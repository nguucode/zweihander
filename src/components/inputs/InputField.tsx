'use client'

import { useId, type CSSProperties, type MouseEvent, type ReactNode, type Ref } from 'react'
import { Field } from '@base-ui/react/field'
import { Popover } from '@base-ui/react/popover'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './InputField.module.css'

export type ValidationState = 'default' | 'success' | 'error'
export type InputSize = 'sm' | 'md'

/**
 * The shared classes. `box` goes on the element that draws the field (the
 * border, fill and focus ring); `control` on the <input>/<textarea> inside
 * it; `affix` on a prefix or suffix.
 */
export const inputStyles = styles

/** The class list for a field box of this size. */
export function boxClass(size: InputSize) {
  return cn(styles.box, styles[size])
}

/**
 * Style for an option list's popup: it renders in a portal, so it cannot
 * read the field's padding. Options are inset by it, so their content starts
 * where the field's text does.
 */
export function popupInset(size: InputSize) {
  return { '--field-inset': `var(--control-${size}-pad)` } as CSSProperties
}

/**
 * For the box's onMouseDown: a press on its padding or a prefix focuses the
 * control, as a click anywhere on a native field would. Presses on the
 * control itself or on a button in the box are left alone.
 */
export function focusControl(event: MouseEvent<HTMLElement>) {
  const target = event.target as HTMLElement
  if (target.closest('input, textarea, button')) return
  const control = event.currentTarget.querySelector<HTMLElement>('input, textarea')
  if (!control || control.matches(':disabled')) return
  event.preventDefault()
  control.focus()
}

/** Hand a node to a ref prop of either kind, alongside a component's own. */
export function assignRef<T>(ref: Ref<T> | undefined, node: T | null) {
  if (typeof ref === 'function') ref(node)
  else if (ref) ref.current = node
}

export interface InputFieldProps {
  /** The field box, carrying `boxClass()`, with a Field.Control inside. */
  children: ReactNode
  label?: ReactNode
  /** More about the label, behind an info button after it. */
  labelInfo?: ReactNode
  /** The info button's accessible name; the label is read after it. */
  infoLabel?: string
  helperText?: ReactNode
  validationState?: ValidationState
  required?: boolean
  disabled?: boolean
  name?: string
  isFullWidth?: boolean
  /**
   * For a control that is a button (Select's trigger): render the label as a
   * <div> so clicking it focuses the control without also clicking it.
   */
  hasButtonControl?: boolean
  /** An id for the label, for a part beyond the control that it also names. */
  labelId?: string
  className?: string
}

/**
 * The label, helper text and validation wiring shared by Text Input,
 * Textarea, Search and Number Input. Base UI's Field associates the label
 * with the control, makes the helper its description and puts
 * aria-invalid on it. Internal — not exported from the package.
 */
export function InputField({
  children,
  label,
  labelInfo,
  infoLabel = 'More information',
  helperText,
  validationState = 'default',
  required,
  disabled,
  name,
  isFullWidth,
  hasButtonControl,
  labelId,
  className,
}: InputFieldProps) {
  const ownLabelId = useId()
  const resolvedLabelId = labelId ?? ownLabelId
  const labelNode = label && (
    <Field.Label
      id={resolvedLabelId}
      className={styles.label}
      {...(hasButtonControl && { nativeLabel: false, render: <div /> })}
    >
      {label}
      {required && (
        <span aria-hidden="true" className={styles.required}>
          *
        </span>
      )}
    </Field.Label>
  )
  return (
    <Field.Root
      name={name}
      disabled={disabled}
      invalid={validationState === 'error'}
      className={cn(styles.field, styles[`state-${validationState}`], isFullWidth && styles.fullWidth, className)}
    >
      {labelInfo && labelNode ? (
        <div className={styles.labelRow}>
          {labelNode}
          {/* A toggletip, not a tooltip: it opens on tap and stays open to be
              read, and the button sits outside the <label> so pressing it does
              not also focus the control. */}
          <Popover.Root>
            <Popover.Trigger className={styles.iconButton} aria-label={infoLabel} aria-describedby={resolvedLabelId}>
              <Icon name="info" />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Positioner className={styles.positioner} side="top" sideOffset={6}>
                <Popover.Popup className={styles.info} aria-labelledby={resolvedLabelId}>{labelInfo}</Popover.Popup>
              </Popover.Positioner>
            </Popover.Portal>
          </Popover.Root>
        </div>
      ) : (
        labelNode
      )}
      {children}
      {helperText && <Field.Description className={styles.helper}>{helperText}</Field.Description>}
    </Field.Root>
  )
}
