import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { SignIn, type SignInProps } from './SignIn'

/**
 * The page in a box of the given size: the layout follows its own width, so
 * this is the page at that viewport. Link clicks stay on the test page.
 */
const box = (inlineSize: number, blockSize = 760) => [
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

const providers: SignInProps['providers'] = [
  { id: 'google', label: 'Continue with Google' },
  { id: 'microsoft', label: 'Continue with Microsoft' },
]

/** A panel that says something, so it is named; an image would be `alt=""` and need no name. */
const aside = (
  <figure
    style={{
      display: 'grid',
      alignContent: 'end',
      gap: 'var(--space-group)',
      blockSize: '100%',
      margin: 0,
      padding: 'var(--space-12)',
      boxSizing: 'border-box',
      background: 'var(--primary-subtle)',
      color: 'var(--primary-subtle-text)',
    }}
  >
    <blockquote style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: 'var(--text-heading-md)', lineHeight: 'var(--leading-heading-md)' }}>
      “Month-end close went from five days to two.”
    </blockquote>
    <figcaption>Ana Silva, Finance lead at Acme Corp</figcaption>
  </figure>
)

const meta = {
  title: 'Templates/Auth/Sign In',
  tags: ['experimental'],
  component: SignIn,
  parameters: { layout: 'fullscreen' },
  args: {
    brand,
    providers,
    signUpHref: '#sign-up',
    onSignIn: fn(),
    onProviderSelect: fn(),
    style: { minBlockSize: '100%' },
  },
  argTypes: {
    brand: { control: false },
    aside: { control: false },
    providers: { control: false },
    appearance: { control: 'inline-radio', options: ['card', 'plain'] },
  },
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

const fields = (canvas: ReturnType<typeof within>) => ({
  email: canvas.getByLabelText('Email') as HTMLInputElement,
  password: canvas.getByLabelText('Password') as HTMLInputElement,
  submit: canvas.getByRole('button', { name: 'Sign in' }),
})

/** In a card on the canvas: single sign-on, then email and password, Keep me signed in, the reset link and sign-up. */
export const Default: Story = {
  decorators: box(1200),
  play: async ({ canvas, args }) => {
    const main = canvas.getByRole('main')
    await expect(within(main).getByRole('heading', { level: 1, name: 'Sign in to your account' })).toBeVisible()
    await expect(canvas.getAllByRole('heading')).toHaveLength(1)
    const { email, password } = fields(canvas)
    await expect(email).toHaveAttribute('type', 'email')
    await expect(email).toHaveAttribute('autocomplete', 'username')
    await expect(password).toHaveAttribute('type', 'password')
    await expect(password).toHaveAttribute('autocomplete', 'current-password')
    await expect(canvas.getByRole('checkbox', { name: 'Keep me signed in' })).not.toBeChecked()
    await expect(canvas.getByRole('link', { name: 'Forgot password?' })).toHaveAttribute('href', '#forgot-password')
    await expect(canvas.getByRole('link', { name: 'Sign up' })).toHaveAttribute('href', '#sign-up')
    // Single sign-on comes first, then the "or" line, then the form.
    const google = canvas.getByRole('button', { name: 'Continue with Google' })
    await expect(canvas.getByText('or')).toBeVisible()
    await expect(google.compareDocumentPosition(email) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    await userEvent.click(google)
    await expect(args.onProviderSelect).toHaveBeenCalledWith('google')
    // The column is centred on the page.
    const column = canvas.getByRole('heading', { level: 1 }).closest('header')!.parentElement!
    const page = main.getBoundingClientRect()
    const rect = column.getBoundingClientRect()
    await waitFor(() => expect(Math.abs(rect.left - page.left - (page.right - rect.right))).toBeLessThan(2))
  },
}

/** Valid values go to `onSignIn`; Enter in a field sends the form. */
export const SignsIn: Story = {
  decorators: box(1200),
  play: async ({ canvas, args }) => {
    const { email, password } = fields(canvas)
    await userEvent.type(email, '  ana@acme.com ')
    await userEvent.type(password, 'correct horse')
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Keep me signed in' }))
    await userEvent.keyboard('{Enter}')
    await expect(args.onSignIn).toHaveBeenCalledWith({ email: 'ana@acme.com', password: 'correct horse', remember: true })
  },
}

/** An empty or malformed field is marked, says how to fix it, and gets focus; typing clears its message. */
export const Validation: Story = {
  decorators: box(1200),
  play: async ({ canvas, args }) => {
    const { email, password, submit } = fields(canvas)
    await userEvent.click(submit)
    await expect(email).toHaveAttribute('aria-invalid', 'true')
    await expect(email).toHaveAccessibleDescription('Enter your email address.')
    await expect(password).toHaveAccessibleDescription('Enter your password.')
    await expect(email).toHaveFocus()
    await expect(args.onSignIn).not.toHaveBeenCalled()

    await userEvent.type(email, 'ana')
    await expect(email).not.toHaveAttribute('aria-invalid', 'true')
    await userEvent.click(submit)
    await expect(email).toHaveAccessibleDescription('Enter an email address like name@company.com.')

    await userEvent.type(email, '@acme.com')
    await userEvent.click(submit)
    await expect(password).toHaveFocus()
    await expect(email).not.toHaveAttribute('aria-invalid', 'true')
    await expect(args.onSignIn).not.toHaveBeenCalled()
  },
}

/** `onSignIn` returns a message: it is announced above the form, the password is cleared and focused. */
export const WrongPassword: Story = {
  decorators: box(1200),
  args: {
    onSignIn: fn(() => new Promise<string>((resolve) => setTimeout(() => resolve('The email or password is incorrect.'), 200))),
  },
  play: async ({ canvas }) => {
    const { email, password, submit } = fields(canvas)
    await userEvent.type(email, 'ana@acme.com')
    await userEvent.type(password, 'wrong')
    await userEvent.click(submit)
    // Busy while it waits, and a second press sends nothing.
    await expect(submit).toHaveAttribute('aria-busy', 'true')
    await expect(canvas.getByRole('button', { name: 'Continue with Google' })).toBeDisabled()
    const alert = await canvas.findByRole('alert')
    await expect(alert).toHaveTextContent('The email or password is incorrect.')
    await expect(submit).not.toHaveAttribute('aria-busy')
    await expect(password).toHaveValue('')
    await expect(password).toHaveFocus()
    await expect(email).toHaveValue('ana@acme.com')
  },
}

/** `onSignIn` throws or rejects (the server is down): a generic message, and the form can be sent again. */
export const Unavailable: Story = {
  decorators: box(1200),
  args: { onSignIn: fn(() => Promise.reject(new Error('503'))) },
  play: async ({ canvas }) => {
    const { email, password, submit } = fields(canvas)
    await userEvent.type(email, 'ana@acme.com')
    await userEvent.type(password, 'correct horse')
    await userEvent.click(submit)
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.')
    await expect(submit).toBeEnabled()
  },
}

/** Show reveals the password and the button becomes Hide; sending the form hides it again. */
export const ShowPassword: Story = {
  decorators: box(1200),
  play: async ({ canvas }) => {
    const { email, password } = fields(canvas)
    await userEvent.type(password, 'correct horse')
    await userEvent.click(canvas.getByRole('button', { name: 'Show password' }))
    await expect(password).toHaveAttribute('type', 'text')
    const hide = canvas.getByRole('button', { name: 'Hide password' })
    await expect(hide).toHaveTextContent('Hide')
    await userEvent.type(email, 'ana@acme.com{Enter}')
    await expect(password).toHaveAttribute('type', 'password')
    await expect(canvas.getByRole('button', { name: 'Show password' })).toBeVisible()
  },
}

/** On the canvas, without a card, single sign-on, Keep me signed in or sign-up: where accounts come by invitation. */
export const Plain: Story = {
  decorators: box(1200),
  args: {
    appearance: 'plain',
    providers: [],
    hasRememberMe: false,
    signUpHref: undefined,
    footer: <span>Need access? Ask your administrator.</span>,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Need access? Ask your administrator.')).toBeVisible()
    await expect(canvas.queryByRole('checkbox')).toBeNull()
    await expect(canvas.queryByRole('link', { name: 'Sign up' })).toBeNull()
    await expect(canvas.queryByText('or')).toBeNull()
    await expect(canvas.getByRole('link', { name: 'Forgot password?' })).toBeVisible()
  },
}

/** With a panel beside the form from 64rem: the form keeps the left half, the panel the right. */
export const WithAside: Story = {
  decorators: box(1280),
  args: { aside, asideLabel: 'Customer story', description: 'Welcome back. Use your work email.' },
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    const panel = canvas.getByRole('complementary', { name: 'Customer story' })
    await waitFor(() => expect(panel.getBoundingClientRect().left).toBeGreaterThanOrEqual(main.getBoundingClientRect().right - 1))
    await expect(main.compareDocumentPosition(panel) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  },
}

/** Under 64rem the panel is hidden and the form has the page. */
export const WithAsideNarrow: Story = {
  ...WithAside,
  decorators: box(600),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.queryByRole('complementary')).toBeNull())
    await expect(canvas.getByRole('heading', { level: 1 })).toBeVisible()
  },
}

/** A phone with a long unbroken title: the column takes the width and nothing scrolls sideways. */
export const Phone: Story = {
  decorators: box(320, 640),
  args: { title: 'Signintoyouraccountatacmecorporationfinance' },
  play: async ({ canvasElement, canvas }) => {
    const frame = canvasElement.firstElementChild as HTMLElement
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth))
    await expect(canvas.getByRole('button', { name: 'Sign in' })).toBeVisible()
  },
}
