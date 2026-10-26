'use client'

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '../../buttons/Button'
import { Checkbox } from '../../controls/Checkbox'
import { TextInput } from '../../inputs/TextInput'
import { Spinner } from '../../loaders/Spinner'
import { Link } from '../../navigation/Link'
import { Alert } from '../../notifications/Alert'
import { AuthLayout, AuthProviders, focusTitle, type AuthLayoutProps, type AuthProvider } from './AuthLayout'
import { PasswordInput } from './PasswordInput'
import styles from './ProgressiveSignIn.module.css'

export interface ProgressiveSignInIdentity {
  email: string
  /**
   * "Remember my email" is ticked: store the email and pass it back as
   * `defaultEmail`. Always false with `hasRememberEmail={false}`.
   */
  rememberEmail: boolean
}

export interface ProgressiveSignInValues extends ProgressiveSignInIdentity {
  password: string
}

/**
 * What `onContinue` decides. Nothing: ask for the password. `{ sso }`: the
 * account signs in with an identity provider, named here, and you are
 * sending the reader there. A string: a message to show, e.g. the account
 * is locked.
 */
export type ProgressiveSignInRoute = string | void | { sso: string }

export interface ProgressiveSignInProps extends Omit<AuthLayoutProps, 'title' | 'children'> {
  title?: ReactNode
  /** Social buttons above the email, with an "or" line. None by default. */
  providers?: AuthProvider[]
  onProviderSelect?: (id: string) => void
  /** The email to start with: one the reader asked to remember. Ticks "Remember my email". */
  defaultEmail?: string
  /** Shows "Remember my email" in step 1. */
  hasRememberEmail?: boolean
  /**
   * Called with the email once it looks like one. Look up how the account
   * signs in (by its domain, say) and return the route; start the redirect
   * yourself for `{ sso }`. The button shows it is busy while a promise is
   * pending; a thrown error or a rejected promise shows a generic message.
   */
  onContinue?: (values: ProgressiveSignInIdentity) => ProgressiveSignInRoute | Promise<ProgressiveSignInRoute>
  /**
   * Called with the email and the password. Return (or resolve to) a
   * message to show it above the form, e.g. wrong credentials; a thrown
   * error or a rejected promise shows a generic message.
   */
  onSignIn?: (values: ProgressiveSignInValues) => string | void | Promise<string | void>
  forgotPasswordHref?: string
  /** Shows "No account? Sign up" under the form. Leave it out where accounts are by invitation. */
  signUpHref?: string
}

type Step = { name: 'email' } | { name: 'password' } | { name: 'sso'; provider: string }

const generic = 'Something went wrong. Try again.'

/** The handler's result, or a generic message when it throws. */
async function attempt<T>(call: () => T | Promise<T>): Promise<T | string> {
  try {
    return await call()
  } catch {
    return generic
  }
}

/**
 * A sign-in page that asks for the email first, a template: Continue hands
 * it to `onContinue`, which says how that account signs in. Single sign-on
 * accounts go to their identity provider; the rest see the email, with
 * Change, then the password. In the Auth Layout, after Carbon's login. It
 * checks the fields are filled and the email looks like one.
 */
export function ProgressiveSignIn({
  title = 'Sign in to your account',
  providers = [],
  onProviderSelect,
  defaultEmail = '',
  hasRememberEmail = true,
  onContinue,
  onSignIn,
  forgotPasswordHref = '#forgot-password',
  signUpHref,
  footer,
  ...props
}: ProgressiveSignInProps) {
  const [step, setStep] = useState<Step>({ name: 'email' })
  // Kept across steps: Change brings both back to edit.
  const [identity, setIdentity] = useState<ProgressiveSignInIdentity>({
    email: defaultEmail,
    rememberEmail: Boolean(defaultEmail),
  })
  const [error, setError] = useState<Partial<Record<'email' | 'password', string>>>({})
  const [failure, setFailure] = useState<string>()
  const [isPending, setIsPending] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  // Each step replaces the last, and the button that was pressed with it.
  // Set by the step change, so a mount (twice, in StrictMode) moves nothing.
  const shouldMoveFocus = useRef(false)
  useEffect(() => {
    if (!shouldMoveFocus.current) return
    shouldMoveFocus.current = false
    if (step.name === 'email') emailRef.current?.focus()
    else if (step.name === 'password') passwordRef.current?.focus()
    else focusTitle(pageRef.current)
  }, [step])

  function go(next: Step) {
    setFailure(undefined)
    setError({})
    shouldMoveFocus.current = true
    setStep(next)
  }

  async function submitEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isPending) return
    const data = new FormData(event.currentTarget)
    const typed: ProgressiveSignInIdentity = {
      email: String(data.get('email')).trim(),
      rememberEmail: data.get('rememberEmail') != null,
    }
    const message = !typed.email
      ? 'Enter your email address.'
      : emailRef.current?.validity.typeMismatch
        ? 'Enter an email address like name@company.com.'
        : undefined
    setError({ email: message })
    setFailure(undefined)
    if (message) return emailRef.current?.focus()

    setIsPending(true)
    try {
      const route = await attempt(() => onContinue?.(typed))
      if (typeof route === 'string' && route) {
        setFailure(route)
        return emailRef.current?.focus()
      }
      setIdentity(typed)
      go(route && typeof route === 'object' ? { name: 'sso', provider: route.sso } : { name: 'password' })
    } finally {
      setIsPending(false)
    }
  }

  async function submitPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isPending) return
    const password = String(new FormData(event.currentTarget).get('password'))
    setError({ password: password ? undefined : 'Enter your password.' })
    setFailure(undefined)
    if (!password) return passwordRef.current?.focus()

    setIsPending(true)
    try {
      const message = await attempt(() => onSignIn?.({ ...identity, password }))
      if (message) {
        setFailure(message)
        // The alert is announced; the password is the field to retype.
        if (passwordRef.current) passwordRef.current.value = ''
        passwordRef.current?.focus()
      }
    } finally {
      setIsPending(false)
    }
  }

  const email = <strong className={styles.email}>{identity.email}</strong>

  return (
    <AuthLayout
      ref={pageRef}
      title={step.name === 'sso' ? `Continuing to ${step.provider}` : title}
      footer={
        (signUpHref || footer) && (
          <>
            {signUpHref && (
              <p className={styles.text}>
                No account? <Link href={signUpHref}>Sign up</Link>
              </p>
            )}
            {footer}
          </>
        )
      }
      {...props}
    >
      {step.name === 'email' && (
        <AuthProviders providers={providers} onSelect={onProviderSelect} disabled={isPending} />
      )}
      {failure && (
        <Alert variant="danger" isLive>
          {failure}
        </Alert>
      )}
      {step.name === 'email' && (
        <form className={styles.form} noValidate onSubmit={submitEmail}>
          <TextInput
            ref={emailRef}
            label="Email"
            name="email"
            type="email"
            autoComplete="username"
            defaultValue={identity.email}
            isFullWidth
            validationState={error.email ? 'error' : undefined}
            helperText={error.email}
            onChange={() => error.email && setError({})}
          />
          {hasRememberEmail && (
            <Checkbox name="rememberEmail" label="Remember my email" defaultChecked={identity.rememberEmail} />
          )}
          <Button type="submit" isFullWidth isLoading={isPending}>
            Continue
          </Button>
        </form>
      )}
      {step.name === 'password' && (
        <form className={styles.form} noValidate onSubmit={submitPassword}>
          <div className={styles.identity}>
            <p className={styles.text}>Signing in as {email}</p>
            <Button
              variant="secondary"
              appearance="ghost"
              size="sm"
              aria-label="Change email"
              disabled={isPending}
              onClick={() => go({ name: 'email' })}
            >
              Change
            </Button>
          </div>
          {/* For password managers: the account the password belongs to. */}
          <input type="email" name="username" autoComplete="username" value={identity.email} readOnly hidden />
          <PasswordInput
            ref={passwordRef}
            name="password"
            isFullWidth
            validationState={error.password ? 'error' : undefined}
            helperText={error.password}
            onChange={() => error.password && setError({})}
          />
          <Link href={forgotPasswordHref} className={styles.forgot}>
            Forgot password?
          </Link>
          <Button type="submit" isFullWidth isLoading={isPending}>
            Sign in
          </Button>
        </form>
      )}
      {step.name === 'sso' && (
        <div className={styles.form}>
          <div className={styles.sso}>
            <Spinner size="sm" label={`Taking you to ${step.provider}…`} />
            <p className={styles.text}>
              Your organization signs in with {step.provider}. Signing in as {email}.
            </p>
          </div>
          <Button variant="secondary" appearance="outlined" isFullWidth onClick={() => go({ name: 'email' })}>
            Use a different email
          </Button>
        </div>
      )}
    </AuthLayout>
  )
}
