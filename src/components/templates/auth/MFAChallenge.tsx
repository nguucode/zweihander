'use client'

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '../../buttons/Button'
import { Checkbox } from '../../controls/Checkbox'
import { OTPInput } from '../../inputs/OTPInput'
import { TextInput } from '../../inputs/TextInput'
import { Link } from '../../navigation/Link'
import { Alert } from '../../notifications/Alert'
import { AuthLayout, focusTitle, type AuthLayoutProps } from './AuthLayout'
import styles from './MFAChallenge.module.css'

/**
 * A second factor. `app`: an authenticator app, nothing is sent. `sms` and
 * `email`: a code is sent to `destination` and can be sent again.
 */
export type MFAMethod =
  | { id: string; kind: 'app' }
  | {
      id: string
      kind: 'sms' | 'email'
      /** Where the code goes, masked: "•••• 4821", "a•••@example.com". */
      destination: string
    }

export interface MFAChallengeValues {
  /** The id of the method the code came from, or `'backup'` for a backup code. */
  method: string
  code: string
  /** "Remember this device" is ticked. Always false with `hasRememberDevice={false}`. */
  rememberDevice: boolean
}

type Result = string | void | Promise<string | void>

export interface MFAChallengeProps extends Omit<AuthLayoutProps, 'title' | 'description' | 'children'> {
  /** The account's second factors, the one to start with first. At least one. */
  methods: MFAMethod[]
  /** Digits in a code from a method. */
  codeLength?: number
  /**
   * Called with the code once it is typed in full or pasted (the form sends
   * itself), or with a backup code. Return (or resolve to) a message to
   * show it above the form, e.g. a wrong code; a thrown error or a
   * rejected promise shows a generic message.
   */
  onVerify?: (values: MFAChallengeValues) => Result
  /** Sends a new code for an `sms` or `email` method, from Resend code. A returned message shows above the form. */
  onResend?: (method: string) => Result
  /**
   * Called when the reader picks a method under Try another way: send its
   * code for `sms` and `email`. A returned message keeps the reader on the
   * list.
   */
  onMethodSelect?: (method: string) => Result
  /** Seconds before Resend code is allowed, from when the code was sent and after each resend. */
  resendCooldown?: number
  /** Shows "Remember this device for N days". */
  hasRememberDevice?: boolean
  /** The N in "Remember this device for N days": how long your server trusts the device. */
  rememberDeviceDays?: number
  /** Shows Use a backup code. */
  hasBackupCode?: boolean
  /** Where "Back to sign in" goes. */
  signInHref?: string
}

type Step = 'code' | 'methods' | 'backup'

const generic = 'Something went wrong. Try again.'

/** The handler's message, or a generic one when it throws. */
async function attempt(call: () => Result) {
  try {
    return (await call()) || undefined
  } catch {
    return generic
  }
}

/** The method's button under Try another way. */
const choice = (m: MFAMethod) =>
  m.kind === 'app' ? 'Authenticator app' : `${m.kind === 'sms' ? 'Text message' : 'Email'} to ${m.destination}`

/**
 * The second step of signing in, a template, in the Auth Layout: the
 * reader enters the code from their authenticator app, or the one sent to
 * their phone or email. Try another way lists the account's methods, and a
 * backup code is a way in when none is at hand. Checking a code is for
 * `onVerify`.
 */
export function MFAChallenge({
  methods,
  codeLength = 6,
  onVerify,
  onResend,
  onMethodSelect,
  resendCooldown = 30,
  hasRememberDevice = true,
  rememberDeviceDays = 30,
  hasBackupCode = true,
  signInHref = '#sign-in',
  footer,
  ...props
}: MFAChallengeProps) {
  const [step, setStep] = useState<Step>('code')
  const [methodId, setMethodId] = useState(methods[0]?.id)
  const method = methods.find((m) => m.id === methodId) ?? methods[0]
  const [code, setCode] = useState('')
  // Read on submit: autoSubmit sends the form before the new value renders.
  const codeRef = useRef('')
  const [rememberDevice, setRememberDevice] = useState(false)
  const [error, setError] = useState<string>()
  const [failure, setFailure] = useState<string>()
  const [notice, setNotice] = useState<string>()
  /** What waits on a handler: `'verify'`, or the id of the method being picked. */
  const [pending, setPending] = useState<string>()
  const pageRef = useRef<HTMLDivElement>(null)
  const codeInputRef = useRef<HTMLInputElement>(null)
  const backupRef = useRef<HTMLInputElement>(null)

  // Each step replaces the last, and the button that was pressed with it.
  // Set by the step change, so a mount (twice, in StrictMode) moves nothing.
  const shouldMoveFocus = useRef(false)
  // Bumped on each step change, so a resend that settles after it is ignored.
  const visit = useRef(0)
  useEffect(() => {
    if (!shouldMoveFocus.current) return
    shouldMoveFocus.current = false
    if (step === 'code') codeInputRef.current?.focus()
    else if (step === 'backup') backupRef.current?.focus()
    else focusTitle(pageRef.current)
  }, [step, methodId])

  // After a wrong code: the field is enabled again once the check settles.
  const shouldRefocus = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    if (pending || !shouldRefocus.current) return
    shouldRefocus.current.focus()
    shouldRefocus.current = null
  }, [pending])

  function changeCode(next: string) {
    codeRef.current = next
    setCode(next)
    setError(undefined)
  }

  function go(next: Step) {
    setFailure(undefined)
    setNotice(undefined)
    setError(undefined)
    changeCode('')
    visit.current++
    shouldMoveFocus.current = true
    setStep(next)
  }

  async function verify(values: MFAChallengeValues, field: HTMLInputElement | null) {
    setPending('verify')
    try {
      const message = await attempt(() => onVerify?.(values))
      if (!message) return
      setFailure(message)
      // The alert is announced; the code is the field to retype.
      if (values.method !== 'backup') changeCode('')
      else if (field) field.value = ''
      shouldRefocus.current = field
    } finally {
      setPending(undefined)
    }
  }

  async function submitCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending) return
    const typed = codeRef.current
    const message = typed.length < codeLength ? `Enter the ${codeLength}-digit code.` : undefined
    setError(message)
    setFailure(undefined)
    setNotice(undefined)
    if (message) {
      codeInputRef.current?.focus()
      return
    }
    await verify({ method: method.id, code: typed, rememberDevice }, codeInputRef.current)
  }

  async function submitBackup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending) return
    const typed = String(new FormData(event.currentTarget).get('backupCode')).trim()
    setError(typed ? undefined : 'Enter a backup code.')
    setFailure(undefined)
    if (!typed) {
      backupRef.current?.focus()
      return
    }
    await verify({ method: 'backup', code: typed, rememberDevice }, backupRef.current)
  }

  async function resend() {
    if (method.kind === 'app') return
    setFailure(undefined)
    setNotice(undefined)
    const at = visit.current
    const message = await attempt(() => onResend?.(method.id))
    if (at !== visit.current) return
    if (message) {
      setFailure(message)
      // Rejecting keeps the button ready for another try, with no cooldown.
      throw new Error(message)
    }
    setNotice(`We sent a new code to ${method.destination}.`)
  }

  async function select(next: MFAMethod) {
    if (pending) return
    setFailure(undefined)
    setPending(next.id)
    try {
      const message = await attempt(() => onMethodSelect?.(next.id))
      if (message) {
        setFailure(message)
        return
      }
      setMethodId(next.id)
      go('code')
    } finally {
      setPending(undefined)
    }
  }

  const isVerifying = pending === 'verify'
  const remember = hasRememberDevice && (
    <Checkbox
      name="rememberDevice"
      label={`Remember this device for ${rememberDeviceDays} days`}
      checked={rememberDevice}
      onCheckedChange={setRememberDevice}
    />
  )

  const heading: Record<Step, { title: string; description: ReactNode }> = {
    code: {
      title: 'Two-step verification',
      description:
        method.kind === 'app' ? (
          `Enter the ${codeLength}-digit code from your authenticator app.`
        ) : (
          <>
            We sent a {codeLength}-digit code to <strong className={styles.destination}>{method.destination}</strong>.
          </>
        ),
    },
    methods: { title: 'Choose another way to verify', description: 'Pick where to get your code.' },
    backup: {
      title: 'Enter a backup code',
      description: 'One of the codes you saved when you set up two-step verification. Each one works once.',
    },
  }

  return (
    <AuthLayout
      ref={pageRef}
      title={heading[step].title}
      description={heading[step].description}
      footer={
        <>
          <p className={styles.text}>
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
      {step === 'code' && (
        <form className={styles.form} noValidate onSubmit={submitCode}>
          <OTPInput
            // A new method is a new code, and its cooldown starts again.
            key={method.id}
            ref={codeInputRef}
            label="Verification code"
            length={codeLength}
            value={code}
            onValueChange={changeCode}
            autoSubmit
            // Read-only, not disabled: focus stays in the cells while the code is checked.
            readOnly={isVerifying}
            validationState={error ? 'error' : undefined}
            helperText={error}
            resendCooldown={resendCooldown}
            onResend={method.kind === 'app' ? undefined : resend}
          />
          {remember}
          <Button type="submit" isFullWidth isLoading={isVerifying}>
            Verify
          </Button>
          {(methods.length > 1 || hasBackupCode) && (
            <div className={styles.others}>
              {methods.length > 1 && (
                <Button variant="secondary" appearance="ghost" size="sm" disabled={isVerifying} onClick={() => go('methods')}>
                  Try another way
                </Button>
              )}
              {hasBackupCode && (
                <Button variant="secondary" appearance="ghost" size="sm" disabled={isVerifying} onClick={() => go('backup')}>
                  Use a backup code
                </Button>
              )}
            </div>
          )}
        </form>
      )}
      {step === 'methods' && (
        <div className={styles.form}>
          {methods
            .filter((m) => m.id !== method.id)
            .map((m) => (
              <Button
                key={m.id}
                variant="secondary"
                appearance="outlined"
                isFullWidth
                disabled={pending !== undefined && pending !== m.id}
                isLoading={pending === m.id}
                onClick={() => select(m)}
              >
                {choice(m)}
              </Button>
            ))}
          <Button variant="secondary" appearance="ghost" disabled={pending !== undefined} onClick={() => go('code')}>
            Back
          </Button>
        </div>
      )}
      {step === 'backup' && (
        <form className={styles.form} noValidate onSubmit={submitBackup}>
          <TextInput
            ref={backupRef}
            label="Backup code"
            name="backupCode"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            isFullWidth
            validationState={error ? 'error' : undefined}
            helperText={error}
            onChange={() => error && setError(undefined)}
          />
          {remember}
          <Button type="submit" isFullWidth isLoading={isVerifying}>
            Verify
          </Button>
          <Button variant="secondary" appearance="outlined" isFullWidth disabled={isVerifying} onClick={() => go('code')}>
            Use a verification code instead
          </Button>
        </form>
      )}
    </AuthLayout>
  )
}
