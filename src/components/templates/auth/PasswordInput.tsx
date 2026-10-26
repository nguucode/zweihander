'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { TextInput, TextInputButton, type TextInputProps } from '../../inputs/TextInput'

export type PasswordInputProps = Omit<TextInputProps, 'type' | 'endAddon'>

/**
 * A password field with a Show / Hide button, for every auth screen. The
 * button's name says what it does next and to which field ("Show password",
 * "Show confirm password", from a text `label`), and its text is the
 * visible part of that name. The value is hidden again when the form
 * is sent, so the browser never keeps it as plain text in its form history.
 */
export function PasswordInput({ label = 'Password', autoComplete = 'current-password', ref, ...props }: PasswordInputProps) {
  const [isShown, setIsShown] = useState(false)
  const own = useRef<HTMLInputElement>(null)
  const setRef = useCallback(
    (node: HTMLInputElement | null) => {
      own.current = node
      if (typeof ref === 'function') ref(node)
      else if (ref) ref.current = node
    },
    [ref],
  )
  const field = typeof label === 'string' ? label.toLowerCase() : 'password'
  useEffect(() => {
    const form = own.current?.form
    if (!form) return
    const hide = () => setIsShown(false)
    form.addEventListener('submit', hide)
    return () => form.removeEventListener('submit', hide)
  }, [])
  return (
    <TextInput
      {...props}
      ref={setRef}
      label={label}
      autoComplete={autoComplete}
      type={isShown ? 'text' : 'password'}
      endAddon={
        <TextInputButton aria-label={`${isShown ? 'Hide' : 'Show'} ${field}`} onClick={() => setIsShown((shown) => !shown)}>
          {isShown ? 'Hide' : 'Show'}
        </TextInputButton>
      }
    />
  )
}
