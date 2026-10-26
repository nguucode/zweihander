import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Link } from '../../navigation/Link'
import { SignUp, type SignUpProps } from './SignUp'

/**
 * The page in a box of the given size: the layout follows its own width, so
 * this is the page at that viewport. Link clicks stay on the test page.
 */
const box = (inlineSize: number, blockSize = 860) => [
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

const providers: SignUpProps['providers'] = [
  { id: 'google', label: 'Sign up with Google' },
  { id: 'microsoft', label: 'Sign up with Microsoft' },
]

const terms = (
  <>
    I agree to the <Link href="#terms">Terms of Service</Link> and the <Link href="#privacy">Privacy Policy</Link>
  </>
)

const meta = {
  title: 'Templates/Auth/Sign Up',
  tags: ['experimental'],
  component: SignUp,
  parameters: { layout: 'fullscreen' },
  args: {
    brand,
    providers,
    terms,
    signInHref: '#sign-in',
    onSignUp: fn(),
    onProviderSelect: fn(),
    style: { minBlockSize: '100%' },
  },
  argTypes: {
    brand: { control: false },
    aside: { control: false },
    providers: { control: false },
    terms: { control: false },
    passwordRules: { control: false },
    appearance: { control: 'inline-radio', options: ['card', 'plain'] },
  },
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

const fields = (canvas: ReturnType<typeof within>) => ({
  name: canvas.getByLabelText('Full name') as HTMLInputElement,
  email: canvas.getByLabelText('Email') as HTMLInputElement,
  password: canvas.getByLabelText('Password') as HTMLInputElement,
  submit: canvas.getByRole('button', { name: 'Create account' }),
})

/** In a card: single sign-on, then full name, email, a new password with its rule, the terms and a link to sign in. */
export const Default: Story = {
  decorators: box(1200),
  play: async ({ canvas, args }) => {
    const main = canvas.getByRole('main')
    await expect(within(main).getByRole('heading', { level: 1, name: 'Create your account' })).toBeVisible()
    await expect(canvas.getAllByRole('heading')).toHaveLength(1)
    const { name, email, password } = fields(canvas)
    await expect(name).toHaveAttribute('autocomplete', 'name')
    await expect(email).toHaveAttribute('type', 'email')
    await expect(email).toHaveAttribute('autocomplete', 'email')
    await expect(password).toHaveAttribute('type', 'password')
    await expect(password).toHaveAttribute('autocomplete', 'new-password')
    await expect(password).toHaveAccessibleDescription('At least 12 characters (not met)')
    await expect(canvas.getByRole('checkbox', { name: /I agree to the Terms of Service/ })).not.toBeChecked()
    await expect(canvas.getByRole('link', { name: 'Sign in' })).toHaveAttribute('href', '#sign-in')
    // Single sign-on comes first, then the "or" line, then the form.
    const google = canvas.getByRole('button', { name: 'Sign up with Google' })
    await expect(canvas.getByText('or')).toBeVisible()
    await expect(google.compareDocumentPosition(name) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    await userEvent.click(google)
    await expect(args.onProviderSelect).toHaveBeenCalledWith('google')
  },
}

/** Valid values go to `onSignUp`, the name and email trimmed; Enter in a field sends the form. */
export const CreatesAccount: Story = {
  decorators: box(1200),
  play: async ({ canvas, args }) => {
    const { name, email, password } = fields(canvas)
    await userEvent.type(name, ' Ana Silva ')
    await userEvent.type(email, 'ana@acme.com ')
    await userEvent.click(canvas.getByRole('checkbox'))
    await userEvent.type(password, 'correct horse battery{Enter}')
    await expect(args.onSignUp).toHaveBeenCalledWith({
      name: 'Ana Silva',
      email: 'ana@acme.com',
      password: 'correct horse battery',
      acceptedTerms: true,
    })
  },
}

/** Each rule is ticked off as the reader types, and says so to a screen reader when the field is read. */
export const PasswordRules: Story = {
  decorators: box(1200),
  args: {
    passwordRules: [
      { label: 'At least 12 characters', test: (password) => password.length >= 12 },
      { label: 'A number', test: (password) => /\d/.test(password) },
    ],
  },
  play: async ({ canvas }) => {
    const { password } = fields(canvas)
    await expect(password).toHaveAccessibleDescription('At least 12 characters (not met) A number (not met)')
    await userEvent.type(password, 'horse1')
    await expect(password).toHaveAccessibleDescription('At least 12 characters (not met) A number (met)')
    await userEvent.type(password, ' battery staple')
    await expect(password).toHaveAccessibleDescription('At least 12 characters (met) A number (met)')
    // Resetting the form unticks them.
    password.form!.reset()
    await waitFor(() => expect(password).toHaveAccessibleDescription('At least 12 characters (not met) A number (not met)'))
  },
}

/** An empty or malformed field, an unmet rule or unticked terms is marked, says how to fix it, and the first gets focus. */
export const Validation: Story = {
  decorators: box(1200),
  play: async ({ canvas, args }) => {
    const { name, email, password, submit } = fields(canvas)
    const agree = canvas.getByRole('checkbox')
    await userEvent.click(submit)
    await expect(name).toHaveAttribute('aria-invalid', 'true')
    await expect(name).toHaveAccessibleDescription('Enter your full name.')
    await expect(email).toHaveAccessibleDescription('Enter your email address.')
    await expect(password).toHaveAccessibleDescription('Enter a password. At least 12 characters (not met)')
    await expect(agree).toHaveAccessibleDescription('Agree to the terms to create an account.')
    await expect(name).toHaveFocus()
    // Typing clears that field's message.
    await userEvent.type(name, 'Ana Silva')
    await expect(name).not.toHaveAttribute('aria-invalid', 'true')

    await userEvent.type(email, 'ana')
    await userEvent.click(submit)
    await expect(email).toHaveFocus()
    await expect(email).toHaveAccessibleDescription('Enter an email address like name@company.com.')

    await userEvent.type(email, '@acme.com')
    await userEvent.type(password, 'short')
    await userEvent.click(submit)
    await expect(password).toHaveFocus()
    await expect(password).toHaveAccessibleDescription('Choose a password that meets every rule. At least 12 characters (not met)')

    await userEvent.type(password, ' but long enough')
    await userEvent.click(submit)
    await expect(agree).toHaveFocus()
    await expect(args.onSignUp).not.toHaveBeenCalled()
    await userEvent.click(agree)
    await expect(agree).not.toHaveAttribute('aria-invalid', 'true')
    await userEvent.click(submit)
    await expect(args.onSignUp).toHaveBeenCalledOnce()
  },
}

/** `onSignUp` returns a message: it is announced above the form, and what was typed stays. */
export const EmailTaken: Story = {
  decorators: box(1200),
  args: {
    terms: undefined,
    onSignUp: fn(
      () =>
        new Promise<string>((resolve) =>
          setTimeout(() => resolve('An account with this email already exists. Sign in instead.'), 200),
        ),
    ),
  },
  play: async ({ canvas }) => {
    const { name, email, password, submit } = fields(canvas)
    await userEvent.type(name, 'Ana Silva')
    await userEvent.type(email, 'ana@acme.com')
    await userEvent.type(password, 'correct horse battery')
    await userEvent.click(submit)
    // Busy while it waits, and a second press sends nothing.
    await expect(submit).toHaveAttribute('aria-busy', 'true')
    await expect(canvas.getByRole('button', { name: 'Sign up with Google' })).toBeDisabled()
    const alert = await canvas.findByRole('alert')
    await expect(alert).toHaveTextContent('An account with this email already exists.')
    await expect(submit).not.toHaveAttribute('aria-busy')
    await expect(email).toHaveValue('ana@acme.com')
    await expect(password).toHaveValue('correct horse battery')
  },
}

/** `onSignUp` throws or rejects: a generic message, and the form can be sent again. */
export const Unavailable: Story = {
  decorators: box(1200),
  args: { terms: undefined, onSignUp: fn(() => Promise.reject(new Error('503'))) },
  play: async ({ canvas }) => {
    const { name, email, password, submit } = fields(canvas)
    await userEvent.type(name, 'Ana Silva')
    await userEvent.type(email, 'ana@acme.com')
    await userEvent.type(password, 'correct horse battery')
    await userEvent.click(submit)
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.')
    await expect(submit).toBeEnabled()
  },
}

/** On the canvas, without a card, single sign-on or terms: the fewest parts. */
export const Plain: Story = {
  decorators: box(1200),
  args: { appearance: 'plain', providers: [], terms: undefined },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('checkbox')).toBeNull()
    await expect(canvas.queryByText('or')).toBeNull()
    await expect(canvas.getByRole('link', { name: 'Sign in' })).toBeVisible()
  },
}

/** A phone with a long unbroken title and rule: the column takes the width, the terms wrap, nothing scrolls sideways. */
export const Phone: Story = {
  decorators: box(320, 760),
  args: {
    title: 'Createyouraccountatacmecorporationfinance',
    passwordRules: [{ label: 'Notthenameofyourcompanyoritsproducts', test: () => true }],
  },
  play: async ({ canvasElement, canvas }) => {
    const frame = canvasElement.firstElementChild as HTMLElement
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth))
    await expect(canvas.getByRole('button', { name: 'Create account' })).toBeVisible()
  },
}
