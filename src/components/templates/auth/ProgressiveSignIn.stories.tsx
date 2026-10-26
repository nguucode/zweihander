import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { ProgressiveSignIn, type ProgressiveSignInIdentity, type ProgressiveSignInRoute } from './ProgressiveSignIn'

/**
 * The page in a box of the given size: the layout follows its own width, so
 * this is the page at that viewport. Link clicks stay on the test page.
 */
const box = (inlineSize: number, blockSize = 720) => [
  (Story: () => ReactNode) => (
    <div
      style={{ inlineSize, blockSize, overflow: 'auto', border: '1px solid var(--border)' }}
      onClickCapture={(e) => (e.target as HTMLElement).closest('a[href]') && e.preventDefault()}
    >
      {Story()}
    </div>
  ),
]

const brand = (
  <strong style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-heading-xs)' }}>Zweihänder</strong>
)

/** acme.com signs in with Okta; every other domain with a password. */
const route = ({ email }: ProgressiveSignInIdentity): ProgressiveSignInRoute | Promise<ProgressiveSignInRoute> =>
  email.endsWith('@acme.com') ? { sso: 'Okta' } : undefined

const meta = {
  title: 'Templates/Auth/Progressive Sign In',
  tags: ['experimental'],
  component: ProgressiveSignIn,
  parameters: { layout: 'fullscreen' },
  decorators: box(1200),
  args: {
    brand,
    signUpHref: '#sign-up',
    onContinue: fn(route),
    onSignIn: fn(),
    style: { minBlockSize: '100%' },
  },
  argTypes: {
    brand: { control: false },
    aside: { control: false },
    providers: { control: false },
    appearance: { control: 'inline-radio', options: ['card', 'plain'] },
  },
} satisfies Meta<typeof ProgressiveSignIn>

export default meta
type Story = StoryObj<typeof meta>

const next = async (canvas: ReturnType<typeof within>, email: string) => {
  await userEvent.type(canvas.getByLabelText('Email'), `${email}{Enter}`)
}

/** Step 1: the email alone, Remember my email and Continue, in a card. */
export const Default: Story = {
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    await expect(within(main).getByRole('heading', { level: 1, name: 'Sign in to your account' })).toBeVisible()
    const email = canvas.getByLabelText('Email')
    await expect(email).toHaveAttribute('type', 'email')
    await expect(email).toHaveAttribute('autocomplete', 'username')
    await expect(canvas.getByRole('checkbox', { name: 'Remember my email' })).not.toBeChecked()
    await expect(canvas.getByRole('button', { name: 'Continue' })).toBeVisible()
    await expect(canvas.queryByLabelText('Password')).toBeNull()
    await expect(canvas.getByRole('link', { name: 'Sign up' })).toHaveAttribute('href', '#sign-up')
  },
}

/**
 * Step 2, a password account: the email, trimmed, goes to `onContinue`; the
 * page shows it with Change and moves focus to the password. Sign in sends
 * both, with the email in a hidden field for password managers.
 */
export const Password: Story = {
  play: async ({ canvas, canvasElement, args }) => {
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Remember my email' }))
    await next(canvas, ' ana@example.com ')
    await expect(args.onContinue).toHaveBeenCalledWith({ email: 'ana@example.com', rememberEmail: true })
    const password = await canvas.findByLabelText('Password')
    await expect(password).toHaveFocus()
    await expect(canvas.getByText(/Signing in as/)).toHaveTextContent('Signing in as ana@example.com')
    await expect(canvas.getByRole('button', { name: 'Change email' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Forgot password?' })).toHaveAttribute('href', '#forgot-password')
    await expect(canvasElement.querySelector('input[autocomplete="username"]')).toHaveValue('ana@example.com')
    await userEvent.type(password, 'correct horse{Enter}')
    await expect(args.onSignIn).toHaveBeenCalledWith({
      email: 'ana@example.com',
      rememberEmail: true,
      password: 'correct horse',
    })
  },
}

/** Change goes back to step 1 with the email filled in and focused. */
export const Change: Story = {
  play: async ({ canvas }) => {
    await next(canvas, 'ana@example.com')
    await userEvent.click(await canvas.findByRole('button', { name: 'Change email' }))
    const email = canvas.getByLabelText('Email')
    await expect(email).toHaveValue('ana@example.com')
    await expect(email).toHaveFocus()
  },
}

/**
 * Step 2, a single sign-on account: `onContinue` returns `{ sso }` and
 * starts the redirect; the page says where the reader is going, with focus
 * on the new title, and asks for no password.
 */
export const SingleSignOn: Story = {
  play: async ({ canvas }) => {
    await next(canvas, 'ana@acme.com')
    const title = await canvas.findByRole('heading', { level: 1, name: 'Continuing to Okta' })
    await expect(title).toHaveFocus()
    await expect(canvas.getByText(/Your organization signs in with/)).toHaveTextContent(
      'Your organization signs in with Okta. Signing in as ana@acme.com.',
    )
    await expect(canvas.queryByLabelText('Password')).toBeNull()
    await waitFor(() => expect(canvas.getByRole('status')).toHaveTextContent('Taking you to Okta…'))
    await userEvent.click(canvas.getByRole('button', { name: 'Use a different email' }))
    await expect(canvas.getByLabelText('Email')).toHaveFocus()
    await expect(canvas.getByRole('heading', { level: 1, name: 'Sign in to your account' })).toBeVisible()
  },
}

/** A remembered email starts filled in, with Remember my email ticked. */
export const Remembered: Story = {
  args: { defaultEmail: 'ana@example.com' },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Email')).toHaveValue('ana@example.com')
    await expect(canvas.getByRole('checkbox', { name: 'Remember my email' })).toBeChecked()
  },
}

/** Social buttons sit above the email, with the "or" line, on step 1 only. */
export const WithProviders: Story = {
  args: {
    providers: [
      { id: 'google', label: 'Continue with Google' },
      { id: 'microsoft', label: 'Continue with Microsoft' },
    ],
    onProviderSelect: fn(),
  },
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Continue with Google' }))
    await expect(args.onProviderSelect).toHaveBeenCalledWith('google')
    await next(canvas, 'ana@example.com')
    await canvas.findByLabelText('Password')
    await expect(canvas.queryByRole('button', { name: 'Continue with Google' })).toBeNull()
  },
}

/** Empty or malformed fields are marked, say how to fix them and keep focus; nothing is sent. */
export const Validation: Story = {
  play: async ({ canvas, args }) => {
    const email = canvas.getByLabelText('Email')
    await userEvent.click(canvas.getByRole('button', { name: 'Continue' }))
    await expect(email).toHaveAttribute('aria-invalid', 'true')
    await expect(email).toHaveAccessibleDescription('Enter your email address.')
    await expect(email).toHaveFocus()
    await userEvent.type(email, 'ana{Enter}')
    await expect(email).toHaveAccessibleDescription('Enter an email address like name@company.com.')
    await expect(args.onContinue).not.toHaveBeenCalled()
    await userEvent.type(email, '@example.com{Enter}')
    await userEvent.click(await canvas.findByRole('button', { name: 'Sign in' }))
    const password = canvas.getByLabelText('Password')
    await expect(password).toHaveAccessibleDescription('Enter your password.')
    await expect(password).toHaveFocus()
    await expect(args.onSignIn).not.toHaveBeenCalled()
  },
}

/** `onContinue` returns a message: it is announced and the reader stays on step 1. */
export const ContinueFails: Story = {
  args: { onContinue: fn<typeof route>(() => 'This account is locked. Ask your administrator.') },
  play: async ({ canvas }) => {
    await next(canvas, 'ana@example.com')
    await expect(await canvas.findByRole('alert')).toHaveTextContent('This account is locked.')
    await expect(canvas.getByLabelText('Email')).toHaveFocus()
  },
}

/** `onSignIn` returns a message, busy while it waits: the password is cleared and focused. */
export const SignInFails: Story = {
  args: {
    onSignIn: fn(
      () => new Promise<string>((resolve) => setTimeout(() => resolve('Wrong email or password.'), 200)),
    ),
  },
  play: async ({ canvas }) => {
    await next(canvas, 'ana@example.com')
    await userEvent.type(await canvas.findByLabelText('Password'), 'wrong{Enter}')
    await expect(canvas.getByRole('button', { name: 'Sign in' })).toHaveAttribute('aria-busy', 'true')
    await expect(canvas.getByRole('button', { name: 'Change email' })).toBeDisabled()
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Wrong email or password.')
    const password = canvas.getByLabelText('Password')
    await expect(password).toHaveValue('')
    await expect(password).toHaveFocus()
  },
}

/** `onContinue` throws or rejects: a generic message. */
export const Unavailable: Story = {
  args: { onContinue: fn<typeof route>(() => Promise.reject(new Error('503'))) },
  play: async ({ canvas }) => {
    await next(canvas, 'ana@example.com')
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.')
  },
}

/** A phone with a long unbroken email: Change drops under it, nothing scrolls sideways. */
export const Phone: Story = {
  decorators: box(320, 640),
  play: async ({ canvasElement, canvas }) => {
    await next(canvas, 'ana.silva.from.the.finance.department@acmecorporationholdings.example')
    await canvas.findByLabelText('Password')
    const frame = canvasElement.firstElementChild as HTMLElement
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth))
  },
}
