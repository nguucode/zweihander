import { useState, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { SessionTimeout, SignedOut, type SessionTimeoutProps } from './Session'

/**
 * The page in a box of the given size: the layout follows its own width, so
 * this is the page at that viewport. Link clicks stay on the test page.
 */
const box = (inlineSize: number, blockSize = 640) => [
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
  title: 'Patterns/Application UI/Session',
  tags: ['experimental'],
  component: SignedOut,
  parameters: { layout: 'fullscreen' },
  decorators: box(1200),
  args: { brand, style: { minBlockSize: '100%' } },
  argTypes: {
    brand: { control: false },
    aside: { control: false },
    appearance: { control: 'inline-radio', options: ['card', 'plain'] },
    reason: {
      control: 'inline-radio',
      options: ['signed-out', 'inactive', 'expired'],
      description: 'Why the session ended: picks the title and the line under it.',
    },
    title: { control: 'text', description: "Replaces the reason's title." },
    description: { control: 'text', description: "Replaces the reason's line under the title." },
    account: {
      control: 'text',
      description: 'The remembered account (an email or a username, masked if need be), shown above Sign in again.',
    },
    signInHref: { control: 'text', description: 'Where Sign in again goes. Carry the remembered account there.' },
    otherAccountHref: { control: 'text', description: 'Shows "Use another account" under Sign in again, when `account` is set.' },
  },
} satisfies Meta<typeof SignedOut>

export default meta
type Story = StoryObj<typeof meta>

// --- Signed out page ---------------------------------------------------------

/** The reader pressed Sign out: no account remembered on a shared computer. */
export const SignedOutPage: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: "You're signed out" })).toBeVisible()
    // One h1, inside main.
    await expect(canvas.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    await expect(within(canvas.getByRole('main')).getByRole('heading', { level: 1 })).toBeVisible()
    const again = canvas.getByRole('link', { name: 'Sign in again' })
    await expect(again).toHaveAttribute('href', '#sign-in')
    await expect(canvas.queryByText('Account')).toBeNull()
    await expect(canvas.queryByRole('link', { name: 'Use another account' })).toBeNull()
  },
}

/** Signed out after the warning ran out, with the account remembered. */
export const Inactive: Story = {
  args: {
    reason: 'inactive',
    account: 'ava.stone@example.com',
    signInHref: '/sign-in?account=remembered',
    otherAccountHref: '/sign-in',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'You were signed out' })).toBeVisible()
    await expect(canvas.getByText(/weren't active for a while/)).toBeVisible()
    await expect(canvas.getByText('ava.stone@example.com')).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Sign in again' })).toHaveAttribute('href', '/sign-in?account=remembered')
    await expect(canvas.getByRole('link', { name: 'Use another account' })).toHaveAttribute('href', '/sign-in')
    // Sign in again comes first in the tab order: it is what most readers want.
    await userEvent.tab()
    await expect(canvas.getByRole('link', { name: 'Sign in again' })).toHaveFocus()
    await userEvent.tab()
    await expect(canvas.getByRole('link', { name: 'Use another account' })).toHaveFocus()
  },
}

/** The session ran out on the server (a token expired), not from inactivity. */
export const Expired: Story = {
  args: { reason: 'expired', account: 'ava.stone@example.com' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1, name: 'Your session has ended' })).toBeVisible()
    // No href for another account: the link is left out.
    await expect(canvas.queryByRole('link', { name: 'Use another account' })).toBeNull()
  },
}

/** A 320px phone with a long id: the id breaks, the page does not scroll sideways. */
export const Narrow: Story = {
  decorators: box(320),
  args: {
    reason: 'inactive',
    account: 'procurement.department.northern-region.long-address@enterprise-holdings.example.com',
    otherAccountHref: '/sign-in',
  },
  play: async ({ canvasElement, canvas }) => {
    const frame = canvasElement.firstElementChild as HTMLElement
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth))
    await expect(canvas.getByRole('link', { name: 'Sign in again' })).toBeVisible()
  },
}

// --- Session timeout warning ---------------------------------------------------

/** A page that opens the warning from a button and closes it on any answer, as an app would. */
function Demo(props: Omit<SessionTimeoutProps, 'open'>) {
  const [open, setOpen] = useState(false)
  const close = (handler?: () => void) => () => {
    setOpen(false)
    handler?.()
  }
  return (
    <div style={{ padding: 'var(--space-section)' }}>
      <Button variant="secondary" appearance="outlined" onClick={() => setOpen(true)}>
        Show the warning
      </Button>
      <SessionTimeout
        {...props}
        open={open}
        onContinue={close(props.onContinue)}
        onSignOut={close(props.onSignOut)}
        onExpire={props.onExpire && close(props.onExpire)}
      />
    </div>
  )
}

const spies = () => ({ onContinue: fn(), onSignOut: fn(), onExpire: fn() })
/** Forget calls from an earlier run of the story. */
const reset = (s: ReturnType<typeof spies>) => Object.values(s).forEach((spy) => spy.mockClear())

const open = async (canvas: ReturnType<typeof within>) => {
  await userEvent.click(canvas.getByRole('button', { name: 'Show the warning' }))
  const dialog = await within(document.body).findByRole('alertdialog', { name: 'Your session is about to end' })
  await waitFor(() => expect(dialog).toBeVisible())
  return dialog
}

const closed = () => waitFor(() => expect(within(document.body).queryByRole('alertdialog')).toBeNull())

const timeout = spies()
/** The warning, a minute before the session ends. Stay signed in has focus; it keeps the session. */
export const Warning: Story = {
  decorators: box(1200, 320),
  render: () => <Demo {...timeout} />,
  play: async ({ canvas }) => {
    reset(timeout)
    const dialog = await open(canvas)
    const stay = within(dialog).getByRole('button', { name: 'Stay signed in' })
    await waitFor(() => expect(stay).toHaveFocus())
    const timer = within(dialog).getByRole('timer')
    await expect(timer).toHaveTextContent(/^(1:00|0:59)$/)
    // Not live: it is read with the dialog, not every second.
    await expect(timer).not.toHaveAttribute('aria-live')
    await expect(dialog).toHaveAccessibleDescription(/we'll sign you out in (1:00|0:59)/)
    await userEvent.keyboard('{Enter}')
    await closed()
    await expect(timeout.onContinue).toHaveBeenCalledOnce()
    await expect(timeout.onSignOut).not.toHaveBeenCalled()
  },
}

const escape = spies()
/** Escape counts as Stay signed in: the reader is at the keyboard. */
export const EscapeContinues: Story = {
  tags: ['!dev'],
  decorators: box(1200, 320),
  render: () => <Demo {...escape} />,
  play: async ({ canvas }) => {
    reset(escape)
    await open(canvas)
    await userEvent.keyboard('{Escape}')
    await closed()
    await expect(escape.onContinue).toHaveBeenCalledOnce()
    await expect(canvas.getByRole('button', { name: 'Show the warning' })).toHaveFocus()
  },
}

const signOut = spies()
/** Sign out ends the session now. */
export const SignOut: Story = {
  tags: ['!dev'],
  decorators: box(1200, 320),
  render: () => <Demo {...signOut} />,
  play: async ({ canvas }) => {
    reset(signOut)
    const dialog = await open(canvas)
    await userEvent.click(within(dialog).getByRole('button', { name: 'Sign out' }))
    await closed()
    await expect(signOut.onSignOut).toHaveBeenCalledOnce()
    await expect(signOut.onExpire).not.toHaveBeenCalled()
  },
}

const expiry = spies()
/** Nobody answers: at zero it calls `onExpire`. A 2-second countdown here; give at least 20 in an app. */
export const Expires: Story = {
  tags: ['!dev'],
  decorators: box(1200, 320),
  render: () => <Demo {...expiry} countdown={2} />,
  play: async ({ canvas }) => {
    reset(expiry)
    const dialog = await open(canvas)
    await expect(within(dialog).getByRole('timer')).toHaveTextContent(/^0:0[12]$/)
    await waitFor(() => expect(expiry.onExpire).toHaveBeenCalledOnce(), { timeout: 4000 })
    await closed()
    await expect(expiry.onContinue).not.toHaveBeenCalled()
    await expect(expiry.onSignOut).not.toHaveBeenCalled()
  },
}
