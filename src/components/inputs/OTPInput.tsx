'use client'

import { Fragment, useEffect, useRef, useState, type ReactNode, type Ref } from 'react'
import { OTPField } from '@base-ui/react/otp-field'
import { Button } from '../buttons/Button'
import { cn } from '@/lib/utils'
import { InputField, assignRef, type InputSize, type ValidationState } from './InputField'
import styles from './OTPInput.module.css'

export interface OTPInputProps {
  /** Points at the first cell. */
  ref?: Ref<HTMLInputElement>
  /** Number of characters. */
  length?: number
  /** Splits the cells into groups of this many, with a dash between groups. */
  groupSize?: number
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  /** Called once every cell is filled, typed or pasted. */
  onValueComplete?: (value: string) => void
  /** Which characters a cell accepts; others are dropped. */
  validationType?: 'numeric' | 'alpha' | 'alphanumeric'
  /** Shows dots instead of the characters. */
  mask?: boolean
  /** Submits the surrounding form once every cell is filled. */
  autoSubmit?: boolean
  /**
   * Shows a resend button under the cells, disabled while the cooldown counts
   * down. Return a promise to show the button busy until it settles: the
   * cooldown restarts only if it resolves, so a failed send can be retried.
   */
  onResend?: () => void | Promise<unknown>
  /** Seconds before resend is allowed, from mount and after each resend. */
  resendCooldown?: number
  resendLabel?: string
  /** The accessible name of each cell after the first, which the label names. */
  slotLabel?: (position: number, length: number) => string
  /** Names the group and the first cell. Required: Base UI names the first cell only through a label. */
  label: ReactNode
  helperText?: ReactNode
  validationState?: ValidationState
  size?: InputSize
  name?: string
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  id?: string
  className?: string
}

const defaultSlotLabel = (position: number, length: number) => `Character ${position} of ${length}`

/** 75 → "1:15". */
const formatSeconds = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

export function OTPInput({
  ref,
  length = 6,
  groupSize,
  onValueChange,
  onValueComplete,
  onResend,
  resendCooldown = 30,
  resendLabel = 'Resend code',
  slotLabel = defaultSlotLabel,
  label,
  helperText,
  validationState,
  size = 'md',
  name,
  disabled,
  required,
  className,
  ...props
}: OTPInputProps) {
  // The cooldown starts on mount: the screen appears because a code was just sent.
  const [secondsLeft, setSecondsLeft] = useState(resendCooldown)
  const [isSending, setIsSending] = useState(false)
  const firstCell = useRef<HTMLInputElement>(null)
  // Keyed to whether there is a resend, not the callback: an inline arrow is
  // new on every render, and re-arming the timer on each would stall it.
  const hasResend = onResend !== undefined
  useEffect(() => {
    if (!hasResend || secondsLeft <= 0) return
    const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [hasResend, secondsLeft])

  async function resend() {
    setIsSending(true)
    try {
      await onResend?.()
    } catch {
      // The caller shows the error; the button stays ready for a retry.
      return
    } finally {
      setIsSending(false)
    }
    setSecondsLeft(resendCooldown)
    // The button is about to be disabled: move focus to where the new code goes.
    firstCell.current?.focus()
  }

  return (
    <InputField
      label={label}
      helperText={helperText}
      validationState={validationState}
      required={required}
      disabled={disabled}
      name={name}
      className={className}
      footer={
        onResend && (
          <Button
            variant="secondary"
            appearance="ghost"
            size="sm"
            className={styles.resend}
            disabled={disabled || secondsLeft > 0}
            isLoading={isSending}
            onClick={resend}
          >
            {secondsLeft > 0 ? `${resendLabel} (${formatSeconds(secondsLeft)})` : resendLabel}
          </Button>
        )
      }
    >
      <OTPField.Root
        {...props}
        length={length}
        required={required}
        // Only the value: Base UI's event details are not part of this API.
        onValueChange={onValueChange && ((next) => onValueChange(next))}
        onValueComplete={onValueComplete && ((next) => onValueComplete(next))}
        className={cn(styles.root, styles[size])}
      >
        {Array.from({ length }, (_, i) => (
          <Fragment key={i}>
            {groupSize && i > 0 && i % groupSize === 0 && (
              <OTPField.Separator className={styles.separator}>–</OTPField.Separator>
            )}
            <OTPField.Input
              ref={
                i === 0
                  ? (node: HTMLInputElement | null) => {
                      firstCell.current = node
                      assignRef(ref, node)
                    }
                  : undefined
              }
              aria-label={i === 0 ? undefined : slotLabel(i + 1, length)}
              className={styles.cell}
            />
          </Fragment>
        ))}
      </OTPField.Root>
    </InputField>
  )
}
