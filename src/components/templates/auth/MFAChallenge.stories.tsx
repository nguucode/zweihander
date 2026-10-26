import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { MFAChallenge, type MFAMethod } from './MFAChallenge'

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

const app: MFAMethod = { id: 'app', kind: 'app' }
const sms: MFAMethod = { id: 'sms', kind: 'sms', destination: '•••• 4821' }
const email: MFAMethod = { id: 'email', kind: 'email', destination: 'a•••@example.com' }

const meta = {
  title: 'Templates/Auth/MFA Challenge',
  tags: ['experimental'],
  component: MFAChallenge,
  parameters: { layout: 'fullscreen' },
  decorators: box(1200),
  args: {
    brand,
    methods: [app, sms, email],
    onVerify: fn(),
    onResend: fn(),
    onMethodSelect: fn(),
    style: { minBlockSize: '100%' },
  },
  argTypes: {
    brand: { control: false },
    aside: { control: false },
    methods: { control: false },
    appearance: { control: 'inline-radio', options: ['card', 'plain'] },
  },
} satisfies Meta<typeof MFAChallenge>

export default meta
type Story = StoryObj<typeof meta>

const codeField = (canvas: ReturnType<typeof within>) => canvas.getByRole('textbox', { name: 'Verification code' })

/** Typed in full, the code sends itself. */
const enter = async (canvas: ReturnType<typeof within>, code: string) => {
  await userEvent.click(codeField(canvas))
  await userEvent.keyboard(code)
}

/** An authenticator app: the code cells, Remember this device, Verify and the other ways in. Nothing to resend. */
export const Default: Story = {
  play: async ({ canvas }) => {
    const main = canvas.getByRole('main')
    await expect(within(main).getByRole('heading', { level: 1, name: 'Two-step verification' })).toBeVisible()
    await expect(canvas.getByText('Enter the 6-digit code from your authenticator app.')).toBeVisible()
    await expect(codeField(canvas)).toHaveAttribute('autocomplete', 'one-time-code')
    await expect(canvas.getByRole('checkbox', { name: 'Remember this device for 30 days' })).not.toBeChecked()
    await expect(canvas.getByRole('button', { name: 'Verify' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Try another way' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Use a backup code' })).toBeVisible()
    await expect(canvas.queryByRole('button', { name: /Resend code/ })).toBeNull()
    await expect(canvas.getByRole('link', { name: 'Back to sign in' })).toHaveAttribute('href', '#sign-in')
  },
}

/** The sixth digit sends the code, with the method and Remember this device, to `onVerify`. */
export const Verify: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Remember this device for 30 days' }))
    await enter(canvas, '123456')
    await waitFor(() =>
      expect(args.onVerify).toHaveBeenCalledWith({ method: 'app', code: '123456', rememberDevice: true }),
    )
  },
}

/** `onVerify` returns a message, busy while it waits: it is announced, the code is cleared and the first cell focused. */
export const WrongCode: Story = {
  args: {
    onVerify: fn(() => new Promise<string>((resolve) => setTimeout(() => resolve('That code is not right.'), 200))),
  },
  play: async ({ canvas }) => {
    await enter(canvas, '000000')
    await expect(canvas.getByRole('button', { name: 'Verify' })).toHaveAttribute('aria-busy', 'true')
    await expect(await canvas.findByRole('alert')).toHaveTextContent('That code is not right.')
    const first = codeField(canvas)
    await waitFor(() => expect(first).toHaveFocus())
    await expect(first).toHaveValue('')
  },
}

/** Verify with cells left empty: the field is marked, says what is missing and keeps focus; nothing is sent. */
export const Validation: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Verify' }))
    const first = codeField(canvas)
    await expect(first).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByRole('group', { name: 'Verification code' })).toHaveAccessibleDescription(
      'Enter the 6-digit code.',
    )
    await expect(first).toHaveFocus()
    await expect(args.onVerify).not.toHaveBeenCalled()
    await userEvent.keyboard('1')
    await expect(first).not.toHaveAttribute('aria-invalid')
  },
}

/**
 * A code sent by text message: the page names where it went, and Resend
 * code counts down, then sends again through `onResend` and says so.
 */
export const TextMessage: Story = {
  args: { methods: [sms, app], resendCooldown: 1 },
  play: async ({ canvas, args }) => {
    await expect(canvas.getByText(/We sent a 6-digit code to/)).toHaveTextContent('We sent a 6-digit code to •••• 4821.')
    const resend = canvas.getByRole('button', { name: /Resend code/ })
    await expect(resend).toHaveTextContent('Resend code (0:01)')
    await waitFor(() => expect(resend).toHaveTextContent(/^Resend code$/), { timeout: 3000 })
    await userEvent.click(resend)
    await expect(args.onResend).toHaveBeenCalledWith('sms')
    await expect(await canvas.findByRole('status')).toHaveTextContent('We sent a new code to •••• 4821.')
  },
}

/**
 * Try another way lists the methods, with focus on the new title; picking
 * one calls `onMethodSelect` (to send its code) and brings its code step,
 * focused on the first cell.
 */
export const TryAnotherWay: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Try another way' }))
    await expect(canvas.getByRole('heading', { level: 1, name: 'Choose another way to verify' })).toHaveFocus()
    await expect(canvas.queryByRole('button', { name: 'Authenticator app' })).toBeNull()
    await expect(canvas.getByRole('button', { name: 'Email to a•••@example.com' })).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Back' }))
    await waitFor(() => expect(codeField(canvas)).toHaveFocus())
    await expect(args.onMethodSelect).not.toHaveBeenCalled()
    await userEvent.click(canvas.getByRole('button', { name: 'Try another way' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Text message to •••• 4821' }))
    await expect(args.onMethodSelect).toHaveBeenCalledWith('sms')
    await waitFor(() => expect(codeField(canvas)).toHaveFocus())
    await expect(canvas.getByText(/We sent a 6-digit code to/)).toHaveTextContent('•••• 4821')
  },
}

/** `onMethodSelect` returns a message: the reader stays on the list. */
export const MethodFails: Story = {
  args: { onMethodSelect: fn(() => 'Too many codes sent. Try again in an hour.') },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Try another way' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Text message to •••• 4821' }))
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Too many codes sent.')
    await expect(canvas.getByRole('heading', { level: 1, name: 'Choose another way to verify' })).toBeVisible()
  },
}

/**
 * A backup code: a plain text field, checked for being filled, sent as
 * method `'backup'`. Use a verification code instead goes back.
 */
export const BackupCode: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Use a backup code' }))
    await expect(canvas.getByRole('heading', { level: 1, name: 'Enter a backup code' })).toBeVisible()
    const field = canvas.getByLabelText('Backup code')
    await expect(field).toHaveFocus()
    await userEvent.click(canvas.getByRole('button', { name: 'Verify' }))
    await expect(field).toHaveAccessibleDescription('Enter a backup code.')
    await expect(field).toHaveFocus()
    await userEvent.type(field, ' ab12-cd34 {Enter}')
    await expect(args.onVerify).toHaveBeenCalledWith({ method: 'backup', code: 'ab12-cd34', rememberDevice: false })
    await userEvent.click(canvas.getByRole('button', { name: 'Use a verification code instead' }))
    await expect(codeField(canvas)).toHaveFocus()
  },
}

/** One method and no backup codes: no other ways in to offer. */
export const OnlyOneWay: Story = {
  args: { methods: [app], hasBackupCode: false, hasRememberDevice: false },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('button', { name: 'Try another way' })).toBeNull()
    await expect(canvas.queryByRole('button', { name: 'Use a backup code' })).toBeNull()
    await expect(canvas.queryByRole('checkbox')).toBeNull()
  },
}

/** `onVerify` throws or rejects: a generic message. */
export const Unavailable: Story = {
  args: { onVerify: fn(() => Promise.reject(new Error('503'))) },
  play: async ({ canvas }) => {
    await enter(canvas, '123456')
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.')
  },
}

/** A phone with a long email: the six cells and the two links fit, nothing scrolls sideways. */
export const Phone: Story = {
  decorators: box(320, 680),
  args: { methods: [{ id: 'email', kind: 'email', destination: 'a•••••••••••••••••••@acmecorporationholdings.example' }, app] },
  play: async ({ canvasElement }) => {
    const frame = canvasElement.firstElementChild as HTMLElement
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth))
  },
}
