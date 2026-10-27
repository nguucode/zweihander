'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Button } from '../../buttons/Button'
import { Link } from '../../navigation/Link'
import { Alert } from '../../notifications/Alert'
import { attempt, AuthLayout, focusTitle, type AuthLayoutProps } from './AuthLayout'
import { PasswordInput, defaultPasswordRules, type PasswordRule } from '../../inputs/PasswordInput'
import styles from './PasswordReset.module.css'

export interface ResetPasswordValues {
  password: string
}

export interface ResetPasswordProps extends Omit<AuthLayoutProps, 'title' | 'description' | 'children'> {
  /**
   * The account's email, from the link. Named in the description, and given
   * to password managers so they save the new password under it.
   */
  email?: string
  /**
   * What the new password needs, ticked off as the reader types; the form is
   * not sent until every one is met. At least 12 characters by default.
   */
  passwordRules?: PasswordRule[]
  /**
   * Called with a valid password. Return (or resolve to) a message to show
   * it above the form, e.g. the link has expired; the button shows it is
   * busy while a promise is pending. A thrown error or a rejected promise
   * shows a generic message. Otherwise the page says the password changed.
   */
  onChangePassword?: (values: ResetPasswordValues) => string | void | Promise<string | void>
  /** Where "Back to sign in" and, once changed, "Sign in" go. */
  signInHref?: string
}

/**
 * A reset-password page, a template: the page the emailed link opens, after
 * Forgot Password. A new password with its rules in the Auth Layout, then
 * "Password changed" with a way to sign in. It checks the rules; whether
 * the link is still good is for `onChangePassword`.
 */
export function ResetPassword({
  email,
  passwordRules = defaultPasswordRules,
  onChangePassword,
  signInHref = '#sign-in',
  footer,
  ...props
}: ResetPasswordProps) {
  const [error, setError] = useState<string>()
  const [failure, setFailure] = useState<string>()
  const [isPending, setIsPending] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  // The form gives way to "Password changed", and the button with it.
  useEffect(() => {
    if (isDone) focusTitle(pageRef.current)
  }, [isDone])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isPending) return
    const password = String(new FormData(event.currentTarget).get('password'))
    const next = !password
      ? 'Enter a new password.'
      : passwordRules.every((rule) => rule.test(password))
        ? undefined
        : 'Choose a password that meets every rule.'
    setError(next)
    setFailure(undefined)
    if (next) return passwordRef.current?.focus()

    setIsPending(true)
    try {
      const message = await attempt(() => onChangePassword?.({ password }))
      if (message) setFailure(message)
      else setIsDone(true)
    } finally {
      setIsPending(false)
    }
  }

  if (isDone)
    return (
      <AuthLayout
        ref={pageRef}
        title="Password changed"
        description="Sign in with your new password."
        footer={footer}
        {...props}
      >
        <Button href={signInHref} isFullWidth>
          Sign in
        </Button>
      </AuthLayout>
    )

  return (
    <AuthLayout
      ref={pageRef}
      title="Choose a new password"
      description={
        email && (
          <>
            For <strong className={styles.email}>{email}</strong>.
          </>
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
      <form className={styles.form} noValidate onSubmit={submit}>
        {/* Password managers save the new password under this name. */}
        {email && <input type="email" name="username" autoComplete="username" value={email} readOnly hidden />}
        <PasswordInput
          ref={passwordRef}
          label="New password"
          name="password"
          autoComplete="new-password"
          rules={passwordRules}
          isFullWidth
          validationState={error ? 'error' : undefined}
          helperText={error}
          onChange={() => error && setError(undefined)}
        />
        <Button type="submit" isFullWidth isLoading={isPending}>
          Change password
        </Button>
      </form>
    </AuthLayout>
  )
}
