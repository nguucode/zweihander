'use client'

import { useEffect, useState } from 'react'
import { Button } from './Button'

export interface ResendButtonProps {
  /**
   * Sends again. Return a promise to show the button busy until it settles:
   * the cooldown restarts only if it resolves, so a failed send can be retried.
   */
  onResend: () => void | Promise<unknown>
  /** Seconds before resend is allowed, from mount and after each send. */
  cooldown?: number
  label?: string
  disabled?: boolean
  className?: string
}

/** 75 → "1:15". */
const formatSeconds = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

/**
 * Internal: the small "Resend code" / "Resend link" button shared by OTP
 * Input and the auth templates, disabled with a countdown while it cools
 * down. Its name carries the time left.
 */
export function ResendButton({ onResend, cooldown = 30, label = 'Resend code', disabled, className }: ResendButtonProps) {
  // The cooldown starts on mount: the screen appears because something was just sent.
  const [secondsLeft, setSecondsLeft] = useState(cooldown)
  const [isSending, setIsSending] = useState(false)
  useEffect(() => {
    if (secondsLeft <= 0) return
    const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [secondsLeft])

  async function resend() {
    setIsSending(true)
    try {
      await onResend()
    } catch {
      // The caller shows the error; the button stays ready for a retry.
      return
    } finally {
      setIsSending(false)
    }
    setSecondsLeft(cooldown)
  }

  return (
    <Button
      variant="secondary"
      appearance="ghost"
      size="sm"
      className={className}
      disabled={disabled || secondsLeft > 0}
      isLoading={isSending}
      onClick={resend}
    >
      {secondsLeft > 0 ? `${label} (${formatSeconds(secondsLeft)})` : label}
    </Button>
  )
}
