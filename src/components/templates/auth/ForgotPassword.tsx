'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Button } from '../../buttons/Button'
import { ResendButton } from '../../buttons/ResendButton'
import { TextInput } from '../../inputs/TextInput'
import { Link } from '../../navigation/Link'
import { Alert } from '../../notifications/Alert'
import { attempt, AuthLayout, focusTitle, type AuthLayoutProps } from './AuthLayout'
import styles from './PasswordReset.module.css'

export interface ForgotPasswordValues {
  email: string
}

export interface ForgotPasswordProps extends Omit<AuthLayoutProps, 'title' | 'description' | 'children'> {
  /**
   * Called with the email, from the form and from Resend link. Return (or
   * resolve to) a message to show it instead of moving on, e.g. too many
   * requests; the button shows it is busy while a promise is pending. A
   * thrown error or a rejected promise shows a generic message. Never
   * return "no account with this email": the next screen does not say
   * whether one exists.
   */
  onRequest?: (values: ForgotPasswordValues) => string | void | Promise<string | void>
  /** Seconds before Resend link is allowed, from when the link was sent and after each resend. */
  resendCooldown?: number
  /** Where "Back to sign in" goes. */
  signInHref?: string
}

/**
 * A forgot-password page, a template, in two steps in the Auth Layout: the
 * reader enters their email, then is told to check it, with Resend link and
 * Use a different email. It checks the email looks like one; sending the
 * link is for `onRequest`. The link leads to Reset Password.
 */
export function ForgotPassword({
  onRequest,
  resendCooldown = 30,
  signInHref = '#sign-in',
  footer,
  ...props
}: ForgotPasswordProps) {
  // Kept across steps: "Use a different email" brings it back to edit.
  const [email, setEmail] = useState('')
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState<string>()
  const [failure, setFailure] = useState<string>()
  const [notice, setNotice] = useState<string>()
  const [isPending, setIsPending] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  // Each step replaces the other, and the button that was pressed with it.
  // Set by the step change, so a mount (twice, in StrictMode) moves nothing.
  const shouldMoveFocus = useRef(false)
  // Bumped on leaving step 2, so a resend that settles after it is ignored.
  const visit = useRef(0)
  useEffect(() => {
    if (!shouldMoveFocus.current) return
    shouldMoveFocus.current = false
    if (isSent) focusTitle(pageRef.current)
    else emailRef.current?.focus()
  }, [isSent])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isPending) return
    const typed = String(new FormData(event.currentTarget).get('email')).trim()
    const next = !typed
      ? 'Enter your email address.'
      : emailRef.current?.validity.typeMismatch
        ? 'Enter an email address like name@company.com.'
        : undefined
    setError(next)
    setFailure(undefined)
    if (next) return emailRef.current?.focus()

    setIsPending(true)
    try {
      const message = await attempt(() => onRequest?.({ email: typed }))
      if (message) return setFailure(message)
      setEmail(typed)
      shouldMoveFocus.current = true
      setIsSent(true)
    } finally {
      setIsPending(false)
    }
  }

  async function resend() {
    setFailure(undefined)
    setNotice(undefined)
    const at = visit.current
    const message = await attempt(() => onRequest?.({ email }))
    if (at !== visit.current) return
    if (message) {
      setFailure(message)
      // Rejecting keeps the button ready for another try, with no cooldown.
      throw new Error(message)
    }
    setNotice(`We sent another link to ${email}.`)
    // The button is about to be disabled for the cooldown.
    focusTitle(pageRef.current)
  }

  function useDifferentEmail() {
    setFailure(undefined)
    setNotice(undefined)
    visit.current++
    shouldMoveFocus.current = true
    setIsSent(false)
  }

  return (
    <AuthLayout
      ref={pageRef}
      title={isSent ? 'Check your email' : 'Reset your password'}
      description={
        isSent ? (
          <>
            If an account exists for <strong className={styles.email}>{email}</strong>, we sent it a link to choose a
            new password.
          </>
        ) : (
          'Enter the email you sign in with, and we will send you a link to choose a new password.'
        )
      }
      footer={
        <>
          <p className={styles.back}>
            <Link href={signInHref}>Back to sign in</Link>
          </p>
          {footer}
        </>
      }
      {...props}
    >
      {failure && (
        <Alert variant="danger" isLive>
          {failure}
        </Alert>
      )}
      {notice && (
        <Alert variant="success" isLive>
          {notice}
        </Alert>
      )}
      {isSent ? (
        <div className={styles.sent}>
          <div className={styles.again}>
            <p className={styles.hint}>Not there? Check your spam folder, or send it again.</p>
            <ResendButton className={styles.resend} label="Resend link" cooldown={resendCooldown} onResend={resend} />
          </div>
          <Button variant="secondary" appearance="outlined" isFullWidth onClick={useDifferentEmail}>
            Use a different email
          </Button>
        </div>
      ) : (
        <form className={styles.form} noValidate onSubmit={submit}>
          <TextInput
            ref={emailRef}
            label="Email"
            name="email"
            type="email"
            autoComplete="username"
            defaultValue={email}
            isFullWidth
            validationState={error ? 'error' : undefined}
            helperText={error}
            onChange={() => error && setError(undefined)}
          />
          <Button type="submit" isFullWidth isLoading={isPending}>
            Send reset link
          </Button>
        </form>
      )}
    </AuthLayout>
  )
}
