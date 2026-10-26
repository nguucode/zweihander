'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Button } from '../../buttons/Button'
import { Link } from '../../navigation/Link'
import { Modal } from '../../overlays/Modal'
import { AuthLayout, type AuthLayoutProps } from '../../templates/auth/AuthLayout'
import styles from './Session.module.css'

export interface SessionTimeoutProps {
  /** Open it when the session is about to end. The app tracks inactivity, not this pattern. */
  open: boolean
  /** Seconds left when it opens. Give at least 20 (WCAG 2.2.1). */
  countdown?: number
  /** Stay signed in, or Escape: the reader is here. Extend the session, then close it. */
  onContinue: () => void
  /** Sign out, pressed by the reader. */
  onSignOut: () => void
  /** The countdown reached zero. Defaults to `onSignOut`; send the reader to Signed Out with reason `inactive`. */
  onExpire?: () => void
  title?: ReactNode
}

/** 75 → "1:15". */
const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

/**
 * The warning before a session ends for inactivity: a countdown, Stay
 * signed in and Sign out, in an alert dialog. It owns the countdown only;
 * when to open it and what each button does is the app's.
 */
export function SessionTimeout({
  open,
  countdown = 60,
  onContinue,
  onSignOut,
  onExpire = onSignOut,
  title = 'Your session is about to end',
}: SessionTimeoutProps) {
  const [left, setLeft] = useState(countdown)
  // Reset while rendering, not in the effect: a reopened warning would
  // otherwise paint the last count (0:00) for a frame.
  const [wasOpen, setWasOpen] = useState(open)
  if (open !== wasOpen) {
    setWasOpen(open)
    if (open) setLeft(countdown)
  }
  const stayRef = useRef<HTMLElement>(null)
  // The latest handler, so a new function each render does not restart the clock.
  const expire = useRef(onExpire)
  useEffect(() => {
    expire.current = onExpire
  })

  useEffect(() => {
    if (!open) return
    // Counted down to a fixed end, not by ticks: a background tab throttles timers.
    const end = Date.now() + countdown * 1000
    const id = setInterval(() => {
      const next = Math.max(0, Math.ceil((end - Date.now()) / 1000))
      setLeft(next)
      if (next === 0) {
        clearInterval(id)
        expire.current()
      }
    }, 250)
    return () => clearInterval(id)
  }, [open, countdown])

  return (
    <Modal
      isAlert
      size="sm"
      open={open}
      // Escape closes an alert dialog: the reader pressed a key, so they are here.
      onOpenChange={(next) => !next && onContinue()}
      initialFocus={stayRef}
      title={title}
      description={
        <>
          You haven't done anything for a while. For your security, we'll sign you out in{' '}
          {/* role="timer" is not live: the time is read once with the dialog, not every second. */}
          <strong role="timer" className={styles.timer}>
            {clock(left)}
          </strong>
          .
        </>
      }
      footer={
        <>
          <Button variant="secondary" appearance="outlined" onClick={onSignOut}>
            Sign out
          </Button>
          <Button ref={stayRef} onClick={onContinue}>
            Stay signed in
          </Button>
        </>
      }
    />
  )
}

/** Why the reader is on the signed-out page. */
export type SignedOutReason = 'signed-out' | 'inactive' | 'expired'

const copy: Record<SignedOutReason, { title: string; description: string }> = {
  'signed-out': { title: "You're signed out", description: 'Sign in again to pick up where you left off.' },
  inactive: {
    title: 'You were signed out',
    description: "You weren't active for a while, so we signed you out to keep your account safe.",
  },
  expired: { title: 'Your session has ended', description: 'Sign in again to continue.' },
}

export interface SignedOutProps extends Omit<AuthLayoutProps, 'title' | 'children'> {
  /** Picks the title and the line under it. */
  reason?: SignedOutReason
  /** Replaces the reason's title. */
  title?: ReactNode
  /** The account that was signed in, remembered: an email or a username, masked by you if need be. */
  account?: string
  /** Where Sign in again goes. Carry the remembered account there, so the reader only types a password. */
  signInHref?: string
  /** Shows "Use another account" under Sign in again, when `account` is set. */
  otherAccountHref?: string
}

/**
 * The page after a session ends, in the Auth Layout: why (the reader
 * signed out, was inactive, or the session expired), the remembered
 * account, and Sign in again.
 */
export function SignedOut({
  reason = 'signed-out',
  title,
  description,
  account,
  signInHref = '#sign-in',
  otherAccountHref,
  ...props
}: SignedOutProps) {
  const hasAccount = Boolean(account)
  return (
    <AuthLayout title={title ?? copy[reason].title} description={description ?? copy[reason].description} {...props}>
      {hasAccount && (
        <p className={styles.account}>
          <span className={styles.label}>Account</span>
          <strong className={styles.id}>{account}</strong>
        </p>
      )}
      <Button href={signInHref} isFullWidth>
        Sign in again
      </Button>
      {hasAccount && otherAccountHref && (
        <p className={styles.other}>
          <Link href={otherAccountHref}>Use another account</Link>
        </p>
      )}
    </AuthLayout>
  )
}
