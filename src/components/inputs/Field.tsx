'use client'

import type { ReactNode } from 'react'
import { Field as BaseField } from '@base-ui/react/field'
import { InputField, type ValidationState } from './InputField'

export interface FieldProps {
  /** The control: a Base UI control, or `FieldControl` rendering your own element. */
  children: ReactNode
  /** Names the control. */
  label: ReactNode
  /** A longer note about the label, behind an info button after it. Opens on press, not hover. */
  labelInfo?: ReactNode
  /** The info button's accessible name; the label is read after it as its description. */
  infoLabel?: string
  /** Under the control, read as its description. The error message when `validationState` is error. */
  helperText?: ReactNode
  validationState?: ValidationState
  /** Adds an asterisk after the label. Put `required` on the control too. */
  required?: boolean
  disabled?: boolean
  /** The name the control submits under, and the key for a Base UI Form's errors. */
  name?: string
  isFullWidth?: boolean
  className?: string
}

/**
 * Label, helper text and validation for a control that has none of its own.
 * Text Input, Select, Checkbox and the other Zweihänder controls already
 * carry this anatomy: do not wrap them.
 */
export function Field(props: FieldProps) {
  return <InputField {...props} />
}

/** Base UI's field control: an <input> by default, any element through `render`. Wired to the label, helper and invalid state. */
export const FieldControl = BaseField.Control
