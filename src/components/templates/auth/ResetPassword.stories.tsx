import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ResetPassword } from './ResetPassword'

/** The page in a box the size of a desktop viewport. Link clicks stay on the test page. */
const box = (Story: () => ReactNode) => (
  <div
    style={{ inlineSize: 1200, blockSize: 720, overflow: 'auto', border: '1px solid var(--border)' }}
    onClickCapture={(e) => (e.target as HTMLElement).closest('a[href]') && e.preventDefault()}
  >
    {Story()}
  </div>
)

const brand = (
  <strong style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-heading-xs)' }}>Zweihänder</strong>
)

const meta = {
  title: 'Templates/Auth/Reset Password',
  tags: ['experimental'],
  component: ResetPassword,
  parameters: { layout: 'fullscreen' },
  decorators: [box],
  args: {
    brand,
    email: 'ana@acme.com',
    signInHref: '#sign-in',
    onChangePassword: fn(),
    style: { minBlockSize: '100%' },
  },
  argTypes: {
    brand: { control: false },
    aside: { control: false },
    passwordRules: { control: false },
    appearance: { control: 'inline-radio', options: ['card', 'plain'] },
  },
} satisfies Meta<typeof ResetPassword>

export default meta
type Story = StoryObj<typeof meta>

/** Step 3: a new password with its rules, for the account the link named. */
export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    const main = canvas.getByRole('main')
    await expect(within(main).getByRole('heading', { level: 1, name: 'Choose a new password' })).toBeVisible()
    await expect(canvas.getByText(/^For/)).toHaveTextContent('For ana@acme.com.')
    const password = canvas.getByLabelText('New password')
    await expect(password).toHaveAttribute('autocomplete', 'new-password')
    await expect(password).toHaveAccessibleDescription('At least 12 characters (not met)')
    await expect(canvas.getByRole('button', { name: 'Show new password' })).toBeVisible()
    // A hidden username for password managers, out of the tab order and the accessibility tree.
    const username = canvasElement.querySelector('input[autocomplete="username"]')
    await expect(username).toHaveValue('ana@acme.com')
    await expect(username).not.toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Back to sign in' })).toHaveAttribute('href', '#sign-in')
  },
}

/** A valid password goes to `onChangePassword`; the page says it changed, focuses that, and offers Sign in. */
export const Changed: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.type(canvas.getByLabelText('New password'), 'correct horse battery{Enter}')
    await expect(args.onChangePassword).toHaveBeenCalledWith({ password: 'correct horse battery' })
    const title = await canvas.findByRole('heading', { level: 1, name: 'Password changed' })
    await expect(title).toHaveFocus()
    await expect(canvas.getByRole('link', { name: 'Sign in' })).toHaveAttribute('href', '#sign-in')
    await expect(canvas.queryByRole('link', { name: 'Back to sign in' })).toBeNull()
  },
}

/** An empty password or an unmet rule is marked and keeps focus; nothing is sent. */
export const Validation: Story = {
  play: async ({ canvas, args }) => {
    const password = canvas.getByLabelText('New password')
    const submit = canvas.getByRole('button', { name: 'Change password' })
    await userEvent.click(submit)
    await expect(password).toHaveAttribute('aria-invalid', 'true')
    await expect(password).toHaveAccessibleDescription('Enter a new password. At least 12 characters (not met)')
    await expect(password).toHaveFocus()
    await userEvent.type(password, 'short')
    await expect(password).not.toHaveAttribute('aria-invalid', 'true')
    await userEvent.click(submit)
    await expect(password).toHaveAccessibleDescription(
      'Choose a password that meets every rule. At least 12 characters (not met)',
    )
    await expect(args.onChangePassword).not.toHaveBeenCalled()
  },
}

/** `onChangePassword` returns a message, e.g. the link expired: announced above the form, busy while it waits. */
export const LinkExpired: Story = {
  args: {
    onChangePassword: fn(
      () =>
        new Promise<string>((resolve) =>
          setTimeout(() => resolve('This link has expired. Go back to sign in and request a new one.'), 200),
        ),
    ),
  },
  play: async ({ canvas }) => {
    await userEvent.type(canvas.getByLabelText('New password'), 'correct horse battery{Enter}')
    await expect(canvas.getByRole('button', { name: 'Change password' })).toHaveAttribute('aria-busy', 'true')
    await expect(await canvas.findByRole('alert')).toHaveTextContent('This link has expired.')
    await expect(canvas.getByRole('heading', { level: 1, name: 'Choose a new password' })).toBeVisible()
  },
}

/** `onChangePassword` throws or rejects: a generic message. */
export const Unavailable: Story = {
  args: { onChangePassword: fn(() => Promise.reject(new Error('503'))) },
  play: async ({ canvas }) => {
    await userEvent.type(canvas.getByLabelText('New password'), 'correct horse battery{Enter}')
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.')
  },
}

/** Without an email there is no description and no hidden username. */
export const WithoutEmail: Story = {
  args: { email: undefined, appearance: 'plain' },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('input[autocomplete="username"]')).toBeNull()
  },
}
