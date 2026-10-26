'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { assignRef } from './InputField'
import { TextInput, TextInputButton, type TextInputProps } from './TextInput'
import styles from './PasswordInput.module.css'

export interface PasswordRule {
  /** What the password needs, as the reader sees it: "At least 12 characters". */
  label: ReactNode
  test: (password: string) => boolean
}

/** Long enough to resist guessing, with no rules about character kinds (NIST SP 800-63B). */
export const defaultPasswordRules: PasswordRule[] = [
  { label: 'At least 12 characters', test: (password) => password.length >= 12 },
]

export interface PasswordInputProps extends Omit<TextInputProps, 'type' | 'endAddon'> {
  /**
   * What a new password needs, listed under the field and ticked off as the
   * reader types. Checking them before sending is the form's job.
   */
  rules?: PasswordRule[]
}

/**
 * A password field with a Show / Hide button, for every auth screen. The
 * button's name says what it does next and to which field ("Show password",
 * "Show confirm password", from a text `label`), and its text is the
 * visible part of that name. The value is hidden again when the form
 * is sent, so the browser never keeps it as plain text in its form history.
 * Where a password is being chosen, `rules` lists what it needs.
 */
export function PasswordInput({
  label = 'Password',
  autoComplete = 'current-password',
  rules,
  helperText,
  onChange,
  ref,
  ...props
}: PasswordInputProps) {
  const [isShown, setIsShown] = useState(false)
  const [typed, setTyped] = useState(String(props.defaultValue ?? ''))
  const own = useRef<HTMLInputElement>(null)
  const setRef = useCallback(
    (node: HTMLInputElement | null) => {
      own.current = node
      assignRef(ref, node)
    },
    [ref],
  )
  const field = typeof label === 'string' ? label.toLowerCase() : 'password'
  useEffect(() => {
    const input = own.current
    const form = input?.form
    if (!input || !form) return
    const hide = () => setIsShown(false)
    // `reset` fires before the form empties the field: read it a task later.
    const reread = () => setTimeout(() => setTyped(input.value))
    form.addEventListener('submit', hide)
    form.addEventListener('reset', reread)
    return () => {
      form.removeEventListener('submit', hide)
      form.removeEventListener('reset', reread)
    }
  }, [])
  const value = props.value == null ? typed : String(props.value)
  return (
    <TextInput
      {...props}
      ref={setRef}
      label={label}
      autoComplete={autoComplete}
      type={isShown ? 'text' : 'password'}
      onChange={(event) => {
        setTyped(event.target.value)
        onChange?.(event)
      }}
      // The rules are part of the field's description, read when it gets
      // focus; ticking one off is not announced on every keystroke.
      helperText={
        rules?.length ? (
          <>
            {helperText && <span className={styles.message}>{helperText}</span>}
            {rules.map((rule, index) => {
              const isMet = rule.test(value)
              return (
                <span key={index} className={styles.rule} data-met={isMet || undefined}>
                  <Icon name={isMet ? 'check' : 'minus'} className={styles.mark} />
                  {rule.label}
                  <span className={styles.hidden}>{isMet ? ' (met)' : ' (not met)'}</span>
                </span>
              )
            })}
          </>
        ) : (
          helperText
        )
      }
      endAddon={
        <TextInputButton aria-label={`${isShown ? 'Hide' : 'Show'} ${field}`} onClick={() => setIsShown((shown) => !shown)}>
          {isShown ? 'Hide' : 'Show'}
        </TextInputButton>
      }
    />
  )
}
