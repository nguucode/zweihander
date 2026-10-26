import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within, type Mock } from 'storybook/test'
import { ForgotPassword } from './ForgotPassword'

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

const meta = {
  title: 'Templates/Auth/Forgot Password',
  tags: ['experimental'],
  component: ForgotPassword,
  parameters: { layout: 'fullscreen' },
  decorators: box(1200),
  args: {
    brand,
    signInHref: '#sign-in',
    onRequest: fn(),
    style: { minBlockSize: '100%' },
  },
  argTypes: {
    brand: { control: false },
    aside: { control: false },
    appearance: { control: 'inline-radio', options: ['card', 'plain'] },
  },
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

const send = async (canvas: ReturnType<typeof within>, email = 'ana@acme.com') => {
  await userEvent.type(canvas.getByLabelText('Email'), `${email}{Enter}`)
}

/** Step 1: the email and Send reset link, in a card, with a way back to sign in. */
export const Default: Story = {
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    await expect(within(main).getByRole('heading', { level: 1, name: 'Reset your password' })).toBeVisible()
    await expect(canvas.getAllByRole('heading')).toHaveLength(1)
    const email = canvas.getByLabelText('Email')
    await expect(email).toHaveAttribute('type', 'email')
    await expect(email).toHaveAttribute('autocomplete', 'username')
    await expect(canvas.getByRole('button', { name: 'Send reset link' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Back to sign in' })).toHaveAttribute('href', '#sign-in')
  },
}

/**
 * Step 2: the email goes to `onRequest`, trimmed, and the page says to check
 * it without saying whether an account exists. Focus moves to the new title.
 */
export const Sent: Story = {
  args: { resendCooldown: 0 },
  play: async ({ canvas, args }) => {
    await send(canvas, ' ana@acme.com ')
    await expect(args.onRequest).toHaveBeenCalledWith({ email: 'ana@acme.com' })
    const title = await canvas.findByRole('heading', { level: 1, name: 'Check your email' })
    await expect(title).toHaveFocus()
    await expect(canvas.getByText(/If an account exists for/)).toHaveTextContent(
      'If an account exists for ana@acme.com, we sent it a link to choose a new password.',
    )
    await expect(canvas.queryByLabelText('Email')).toBeNull()
    await expect(canvas.getByRole('link', { name: 'Back to sign in' })).toBeVisible()
  },
}

/** Resend link waits out a cooldown, sends to the same email, and says it did. */
export const Resend: Story = {
  args: { resendCooldown: 1 },
  play: async ({ canvas, args }) => {
    await send(canvas)
    const resend = await canvas.findByRole('button', { name: /resend link/i })
    await expect(resend).toBeDisabled()
    await expect(resend).toHaveTextContent('Resend link (0:01)')
    await waitFor(() => expect(resend).toBeEnabled(), { timeout: 2000 })
    await userEvent.click(resend)
    await expect(args.onRequest).toHaveBeenCalledTimes(2)
    await expect(args.onRequest).toHaveBeenLastCalledWith({ email: 'ana@acme.com' })
    await expect(await canvas.findByRole('status')).toHaveTextContent('We sent another link to ana@acme.com.')
    // The button cools down again; focus is not dropped with it.
    await expect(resend).toBeDisabled()
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveFocus()
  },
}

/** A resend that fails shows why, starts no cooldown, and can be tried again. */
export const ResendFails: Story = {
  args: { resendCooldown: 0 },
  play: async ({ canvas, args }) => {
    await send(canvas)
    // The first send went; the next is refused.
    ;(args.onRequest as Mock).mockReturnValue('Too many requests. Try again in a few minutes.')
    const resend = await canvas.findByRole('button', { name: 'Resend link' })
    await userEvent.click(resend)
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Too many requests.')
    await expect(resend).toBeEnabled()
  },
}

/** Use a different email goes back to step 1 with the email filled in and focused. */
export const DifferentEmail: Story = {
  args: { resendCooldown: 0 },
  play: async ({ canvas }) => {
    await send(canvas)
    await userEvent.click(await canvas.findByRole('button', { name: 'Use a different email' }))
    const email = canvas.getByLabelText('Email')
    await expect(email).toHaveValue('ana@acme.com')
    await expect(email).toHaveFocus()
    await expect(canvas.getByRole('heading', { level: 1, name: 'Reset your password' })).toBeVisible()
  },
}

/** An empty or malformed email is marked, says how to fix it, and keeps focus; nothing is sent. */
export const Validation: Story = {
  play: async ({ canvas, args }) => {
    const email = canvas.getByLabelText('Email')
    await userEvent.click(canvas.getByRole('button', { name: 'Send reset link' }))
    await expect(email).toHaveAttribute('aria-invalid', 'true')
    await expect(email).toHaveAccessibleDescription('Enter your email address.')
    await expect(email).toHaveFocus()
    await userEvent.type(email, 'ana{Enter}')
    await expect(email).toHaveAccessibleDescription('Enter an email address like name@company.com.')
    await expect(args.onRequest).not.toHaveBeenCalled()
  },
}

/** `onRequest` returns a message: it is announced above the form, which stays, busy while it waits. */
export const RequestFails: Story = {
  args: {
    onRequest: fn(
      () => new Promise<string>((resolve) => setTimeout(() => resolve('Too many requests. Try again later.'), 200)),
    ),
  },
  play: async ({ canvas }) => {
    await send(canvas)
    await expect(canvas.getByRole('button', { name: 'Send reset link' })).toHaveAttribute('aria-busy', 'true')
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Too many requests. Try again later.')
    await expect(canvas.getByLabelText('Email')).toHaveValue('ana@acme.com')
  },
}

/** `onRequest` throws or rejects: a generic message. */
export const Unavailable: Story = {
  args: { onRequest: fn(() => Promise.reject(new Error('503'))) },
  play: async ({ canvas }) => {
    await send(canvas)
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.')
  },
}

/** A phone with a long unbroken email: it wraps, nothing scrolls sideways. */
export const Phone: Story = {
  decorators: box(320, 640),
  args: { resendCooldown: 0 },
  play: async ({ canvasElement, canvas }) => {
    await send(canvas, 'ana.silva.from.the.finance.department@acmecorporationholdings.com')
    await canvas.findByRole('heading', { name: 'Check your email' })
    const frame = canvasElement.firstElementChild as HTMLElement
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth))
  },
}
