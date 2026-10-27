'use client'

import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '../../buttons/Button'
import { Checkbox } from '../../controls/Checkbox'
import { TextInput } from '../../inputs/TextInput'
import { Link } from '../../navigation/Link'
import { Alert } from '../../notifications/Alert'
import { attempt, AuthLayout, AuthProviders, type AuthLayoutProps, type AuthProvider } from './AuthLayout'
import { PasswordInput, defaultPasswordRules, type PasswordRule } from '../../inputs/PasswordInput'
import styles from './SignUp.module.css'

export interface SignUpValues {
  name: string
  email: string
  password: string
  /** Whether the terms checkbox was ticked; `false` when there is none. */
  acceptedTerms: boolean
}

export interface SignUpProps extends Omit<AuthLayoutProps, 'title' | 'children'> {
  title?: ReactNode
  /** Single sign-on and social buttons, above the form with an "or" line. None by default. */
  providers?: AuthProvider[]
  onProviderSelect?: (id: string) => void
  /**
   * What the password needs, ticked off as the reader types; the form is not
   * sent until every one is met. At least 12 characters by default.
   */
  passwordRules?: PasswordRule[]
  /**
   * The label of a checkbox the reader must tick to create the account,
   * with links to the documents: "I agree to the <Link>Terms</Link>".
   * No checkbox when left out.
   */
  terms?: ReactNode
  /**
   * Called with valid values. Return (or resolve to) a message to show it
   * above the form, e.g. the email already has an account; the button shows
   * it is busy while a promise is pending. A thrown error or a rejected
   * promise shows a generic message.
   */
  onSignUp?: (values: SignUpValues) => string | void | Promise<string | void>
  /** Where "Already have an account? Sign in" goes. */
  signInHref?: string
}

type Errors = Partial<Record<'name' | 'email' | 'password' | 'terms', string>>

/**
 * A sign-up page, a template: full name, email and a new password with its
 * rules in the Auth Layout, with optional single sign-on buttons and a terms
 * checkbox, and a link back to sign in. It checks the fields; whether the
 * account can be made is for `onSignUp`.
 */
export function SignUp({
  title = 'Create your account',
  providers = [],
  onProviderSelect,
  passwordRules = defaultPasswordRules,
  terms,
  onSignUp,
  signInHref = '#sign-in',
  footer,
  ...props
}: SignUpProps) {
  const [errors, setErrors] = useState<Errors>({})
  const [failure, setFailure] = useState<string>()
  const [isPending, setIsPending] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const termsRef = useRef<HTMLElement>(null)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isPending) return
    const data = new FormData(event.currentTarget)
    const values: SignUpValues = {
      name: String(data.get('name')).trim(),
      email: String(data.get('email')).trim(),
      password: String(data.get('password')),
      acceptedTerms: data.get('terms') != null,
    }
    const next: Errors = {}
    if (!values.name) next.name = 'Enter your full name.'
    if (!values.email) next.email = 'Enter your email address.'
    else if (emailRef.current?.validity.typeMismatch) next.email = 'Enter an email address like name@company.com.'
    if (!values.password) next.password = 'Enter a password.'
    else if (!passwordRules.every((rule) => rule.test(values.password))) next.password = 'Choose a password that meets every rule.'
    if (terms && !values.acceptedTerms) next.terms = 'Agree to the terms to create an account.'
    setErrors(next)
    setFailure(undefined)
    // Focus the first field to fix; its message is its description.
    if (next.name) return nameRef.current?.focus()
    if (next.email) return emailRef.current?.focus()
    if (next.password) return passwordRef.current?.focus()
    if (next.terms) return termsRef.current?.focus()

    setIsPending(true)
    try {
      const message = await attempt(() => onSignUp?.(values))
      // The alert is announced; focus stays where it was, nothing needs retyping.
      if (message) setFailure(message)
    } finally {
      setIsPending(false)
    }
  }

  // Typing in a field clears its message.
  const clear = (key: keyof Errors) => () => errors[key] && setErrors({ ...errors, [key]: undefined })

  return (
    <AuthLayout
      title={title}
      footer={
        <>
          <p className={styles.signIn}>
            Already have an account? <Link href={signInHref}>Sign in</Link>
          </p>
          {footer}
        </>
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
          ref={nameRef}
          label="Full name"
          name="name"
          autoComplete="name"
          isFullWidth
          validationState={errors.name ? 'error' : undefined}
          helperText={errors.name}
          onChange={clear('name')}
        />
        <TextInput
          ref={emailRef}
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          isFullWidth
          validationState={errors.email ? 'error' : undefined}
          helperText={errors.email}
          onChange={clear('email')}
        />
        <PasswordInput
          ref={passwordRef}
          name="password"
          autoComplete="new-password"
          rules={passwordRules}
          isFullWidth
          validationState={errors.password ? 'error' : undefined}
          helperText={errors.password}
          onChange={clear('password')}
        />
        {terms && (
          <Checkbox
            ref={termsRef}
            name="terms"
            label={terms}
            validationState={errors.terms ? 'error' : undefined}
            helperText={errors.terms}
            onCheckedChange={clear('terms')}
          />
        )}
        <Button type="submit" isFullWidth isLoading={isPending}>
          Create account
        </Button>
      </form>
    </AuthLayout>
  )
}
