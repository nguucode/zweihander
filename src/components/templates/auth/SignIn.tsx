'use client'

import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '../../buttons/Button'
import { Checkbox } from '../../controls/Checkbox'
import { TextInput } from '../../inputs/TextInput'
import { Link } from '../../navigation/Link'
import { Alert } from '../../notifications/Alert'
import { AuthLayout, AuthProviders, type AuthLayoutProps, type AuthProvider } from './AuthLayout'
import { PasswordInput } from '../../inputs/PasswordInput'
import styles from './SignIn.module.css'

export interface SignInValues {
  email: string
  password: string
  remember: boolean
}

/** The same as `AuthProvider`; kept so code that imports this name still compiles. */
export type SignInProvider = AuthProvider

export interface SignInProps extends Omit<AuthLayoutProps, 'title' | 'children'> {
  title?: ReactNode
  /** Single sign-on and social buttons, above the form with an "or" line. None by default. */
  providers?: SignInProvider[]
  onProviderSelect?: (id: string) => void
  /**
   * Called with valid values. Return (or resolve to) a message to show it
   * above the form, e.g. wrong credentials; the button shows it is busy
   * while a promise is pending. A thrown error or a rejected promise
   * shows a generic message.
   */
  onSignIn?: (values: SignInValues) => string | void | Promise<string | void>
  /** Shows "Keep me signed in". */
  hasRememberMe?: boolean
  forgotPasswordHref?: string
  /** Shows "No account? Sign up" under the form. Leave it out where accounts are by invitation. */
  signUpHref?: string
}

type Errors = Partial<Record<'email' | 'password', string>>

/**
 * A sign-in page, a template: email and password in the Auth Layout, with
 * optional single sign-on buttons, "Keep me signed in", a link to reset the
 * password and one to sign up. It checks that both fields are filled and
 * the email looks like one; whether they are right is for `onSignIn`.
 */
export function SignIn({
  title = 'Sign in to your account',
  providers = [],
  onProviderSelect,
  onSignIn,
  hasRememberMe = true,
  forgotPasswordHref = '#forgot-password',
  signUpHref,
  footer,
  ...props
}: SignInProps) {
  const [errors, setErrors] = useState<Errors>({})
  const [failure, setFailure] = useState<string>()
  const [isPending, setIsPending] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isPending) return
    const form = event.currentTarget
    const data = new FormData(form)
    const values: SignInValues = {
      email: String(data.get('email')).trim(),
      password: String(data.get('password')),
      remember: data.get('remember') != null,
    }
    const next: Errors = {}
    if (!values.email) next.email = 'Enter your email address.'
    else if (emailRef.current?.validity.typeMismatch) next.email = 'Enter an email address like name@company.com.'
    if (!values.password) next.password = 'Enter your password.'
    setErrors(next)
    setFailure(undefined)
    // Focus the first field to fix; its message is its description.
    if (next.email) return emailRef.current?.focus()
    if (next.password) return passwordRef.current?.focus()

    setIsPending(true)
    try {
      let message: string | void
      try {
        message = await onSignIn?.(values)
      } catch {
        message = 'Something went wrong. Try again.'
      }
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

  return (
    <AuthLayout
      title={title}
      footer={
        (signUpHref || footer) && (
          <>
            {signUpHref && (
              <p className={styles.signUp}>
                No account? <Link href={signUpHref}>Sign up</Link>
              </p>
            )}
            {footer}
          </>
        )
      }
      {...props}
    >
      <AuthProviders providers={providers} onSelect={onProviderSelect} disabled={isPending} />
      {failure && (
        <Alert variant="danger" isLive>
          {failure}
        </Alert>
      )}
      <form className={styles.form} noValidate onSubmit={submit}>
        <TextInput
          ref={emailRef}
          label="Email"
          name="email"
          type="email"
          autoComplete="username"
          isFullWidth
          validationState={errors.email ? 'error' : undefined}
          helperText={errors.email}
          onChange={() => errors.email && setErrors({ ...errors, email: undefined })}
        />
        <PasswordInput
          ref={passwordRef}
          name="password"
          isFullWidth
          validationState={errors.password ? 'error' : undefined}
          helperText={errors.password}
          onChange={() => errors.password && setErrors({ ...errors, password: undefined })}
        />
        <div className={styles.row}>
          {hasRememberMe && <Checkbox name="remember" label="Keep me signed in" />}
          <Link href={forgotPasswordHref} className={styles.forgot}>
            Forgot password?
          </Link>
        </div>
        <Button type="submit" isFullWidth isLoading={isPending}>
          Sign in
        </Button>
      </form>
    </AuthLayout>
  )
}
