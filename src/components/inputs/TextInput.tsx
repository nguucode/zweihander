'use client'

import { createContext, useContext, type ComponentProps, type ReactNode } from 'react'
import { Field } from '@base-ui/react/field'
import { cn } from '@/lib/utils'
import {
  InputField,
  boxClass,
  focusControl,
  inputStyles,
  type InputSize,
  type ValidationState,
} from './InputField'

export interface TextInputProps extends Omit<ComponentProps<'input'>, 'size' | 'prefix'> {
  label?: ReactNode
  /** Under the field; the error message when `validationState` is error. */
  helperText?: ReactNode
  validationState?: ValidationState
  size?: InputSize
  /** Text or an icon before the value, e.g. `<Icon name="search" />` or "https://". */
  prefix?: ReactNode
  /** Text or an icon after the value, e.g. "kg". */
  suffix?: ReactNode
  /** A filled segment joined to the start of the box: text that belongs to the value ("https://", "USD") or a `TextInputButton`. */
  startAddon?: ReactNode
  /** A filled segment joined to the end of the box: text (".com") or an attached `TextInputButton` ("Apply"). */
  endAddon?: ReactNode
  isFullWidth?: boolean
}

/** Lets a TextInputButton follow the field's `disabled` without being told twice. */
const FieldDisabledContext = createContext(false)

export function TextInput({
  label,
  helperText,
  validationState,
  size = 'md',
  prefix,
  suffix,
  startAddon,
  endAddon,
  isFullWidth,
  required,
  disabled,
  name,
  className,
  ...props
}: TextInputProps) {
  return (
    <InputField
      label={label}
      helperText={helperText}
      validationState={validationState}
      required={required}
      disabled={disabled}
      name={name}
      isFullWidth={isFullWidth}
      className={className}
    >
      <FieldDisabledContext value={Boolean(disabled)}>
        <span className={boxClass(size)} onMouseDown={focusControl}>
          {startAddon && <span className={cn(inputStyles.addon, inputStyles.addonStart)}>{startAddon}</span>}
          {prefix && <span className={inputStyles.affix}>{prefix}</span>}
          <Field.Control {...props} required={required} className={cn(inputStyles.control)} />
          {suffix && <span className={inputStyles.affix}>{suffix}</span>}
          {endAddon && <span className={cn(inputStyles.addon, inputStyles.addonEnd)}>{endAddon}</span>}
        </span>
      </FieldDisabledContext>
    </InputField>
  )
}

export type TextInputButtonProps = ComponentProps<'button'>

/**
 * A button inside a Text Input: an icon in `prefix` or `suffix` (give it an
 * `aria-label`), or a word in an add-on, where it fills the segment. Disabled
 * with the field; a read-only field keeps it, since copying or opening a
 * fixed value is what it is for.
 */
export function TextInputButton({ type = 'button', disabled, className, ...props }: TextInputButtonProps) {
  const fieldDisabled = useContext(FieldDisabledContext)
  return (
    <button
      type={type}
      disabled={disabled || fieldDisabled}
      className={cn(inputStyles.iconButton, className)}
      {...props}
    />
  )
}
