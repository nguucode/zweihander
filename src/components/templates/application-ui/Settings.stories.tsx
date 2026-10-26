import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Settings } from './Settings'

/**
 * The page in a box of the given width: the shell and the page lay out by
 * their own width, so this is the page at that viewport. Link clicks stay
 * on the test page.
 */
const box = (inlineSize: number) => [
  (Story: () => ReactNode) => (
    <div
      style={{ inlineSize, blockSize: 760, border: '1px solid var(--border)' }}
      onClickCapture={(e) => (e.target as HTMLElement).closest('a[href]') && e.preventDefault()}
    >
      {Story()}
    </div>
  ),
]

const meta = {
  title: 'Templates/Application UI/Settings',
  tags: ['experimental'],
  component: Settings,
  parameters: { layout: 'fullscreen' },
  argTypes: { defaultSection: { control: 'inline-radio', options: ['profile', 'account', 'notifications'] } },
  args: { onSave: fn(), onDeleteAccount: fn() },
} satisfies Meta<typeof Settings>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

/** Profile: the nav beside the section, Save stores the form, Discard goes back to what was saved. */
export const Default: Story = {
  decorators: box(1400),
  play: async ({ canvas, args }) => {
    await expect(canvas.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    await expect(canvas.getByRole('heading', { level: 1, name: 'Settings' })).toBeVisible()
    const nav = canvas.getByRole('navigation', { name: 'Settings' })
    await expect(within(nav).getByRole('link', { name: 'Profile' })).toHaveAttribute('aria-current', 'page')
    const form = canvas.getByRole('form', { name: 'Profile' })
    // Wide: the nav is a column left of the section.
    await waitFor(() => expect(form.getBoundingClientRect().left).toBeGreaterThan(nav.getBoundingClientRect().right))

    const name = within(form).getByRole('textbox', { name: /Full name/ })
    await userEvent.clear(name)
    await userEvent.type(name, 'Ines O.')
    await userEvent.click(within(form).getByRole('button', { name: 'Save' }))
    await expect(args.onSave).toHaveBeenCalledWith('profile', expect.objectContaining({ name: 'Ines O.', username: 'ines' }))
    // The email is read-only: focusable and sent, not editable.
    await expect(within(form).getByRole('textbox', { name: 'Email' })).toHaveAttribute('readonly')
    await expect(within(form).getByRole('status')).toHaveTextContent('Saved.')

    // Discard goes back to the saved value, not the first one.
    await userEvent.type(within(form).getByRole('textbox', { name: /Full name/ }), ' draft')
    await expect(within(form).getByRole('status')).toBeEmptyDOMElement()
    await userEvent.click(within(form).getByRole('button', { name: 'Discard' }))
    await expect(within(form).getByRole('textbox', { name: /Full name/ })).toHaveValue('Ines O.')
    await expect(within(form).getByRole('status')).toHaveTextContent('Changes discarded.')
  },
}

/** The nav swaps the section in place; a draft survives a look at another section. */
export const SwitchSections: Story = {
  decorators: box(1400),
  play: async ({ canvas, args }) => {
    const nav = canvas.getByRole('navigation', { name: 'Settings' })
    await userEvent.type(canvas.getByRole('textbox', { name: /Username/ }), '-draft')

    const notifications = within(nav).getByRole('link', { name: 'Notifications' })
    await userEvent.click(notifications)
    await expect(notifications).toHaveAttribute('aria-current', 'page')
    // Focus stays on the link; the section follows it.
    await expect(notifications).toHaveFocus()
    await expect(canvas.queryByRole('form', { name: 'Profile' })).toBeNull()
    const form = canvas.getByRole('form', { name: 'Notifications' })
    await expect(within(within(form).getByRole('group', { name: 'By email' })).getAllByRole('checkbox')).toHaveLength(2)
    await userEvent.click(within(form).getByRole('checkbox', { name: /Mentions/ }))
    await userEvent.click(within(form).getByRole('radio', { name: 'Everything' }))
    await userEvent.click(within(form).getByRole('button', { name: 'Save' }))
    await expect(args.onSave).toHaveBeenCalledWith('notifications', { comments: 'on', mentions: 'on', push: 'everything' })

    await userEvent.click(within(nav).getByRole('link', { name: 'Profile' }))
    await expect(canvas.getByRole('textbox', { name: /Username/ })).toHaveValue('ines-draft')
  },
}

/** Account: change the password, then the danger zone. */
export const Account: Story = {
  decorators: box(1400),
  args: { defaultSection: 'account' },
  play: async ({ canvas, args }) => {
    const form = canvas.getByRole('form', { name: 'Change password' })
    const current = within(form).getByLabelText('Current password')
    const next = within(form).getByLabelText('New password')
    await expect(current).toHaveAttribute('autocomplete', 'current-password')
    await expect(next).toHaveAttribute('autocomplete', 'new-password')

    // Both checked on send; focus goes to the first field to fix.
    const change = within(form).getByRole('button', { name: 'Change password' })
    await userEvent.type(next, 'short')
    await userEvent.click(change)
    await expect(current).toHaveAttribute('aria-invalid', 'true')
    await expect(current).toHaveAccessibleDescription('Enter your current password.')
    await expect(next).toHaveAccessibleDescription('Choose a password that meets every rule. At least 12 characters (not met)')
    await expect(current).toHaveFocus()
    await expect(args.onSave).not.toHaveBeenCalled()

    await userEvent.type(current, 'hunter2')
    await userEvent.type(next, ' but long enough')
    await userEvent.click(change)
    await expect(args.onSave).toHaveBeenCalledWith('account', { currentPassword: 'hunter2', newPassword: 'short but long enough' })
    await expect(within(form).getByRole('status')).toHaveTextContent('Password changed.')
    // The fields empty, so the password is not left on screen.
    await expect(within(form).getByLabelText('New password')).toHaveValue('')
  },
}

/** Delete account asks first, and waits until the username is typed; Cancel keeps everything. */
export const DeleteAccount: Story = {
  decorators: box(1400),
  args: { defaultSection: 'account' },
  play: async ({ canvas, args }) => {
    const trigger = canvas.getByRole('button', { name: 'Delete account' })
    await userEvent.click(trigger)
    let dialog = await body().findByRole('alertdialog', { name: 'Delete your account?' })
    const field = within(dialog).getByRole('textbox', { name: 'To confirm, type ines' })
    await waitFor(() => expect(field).toHaveFocus())
    await expect(within(dialog).getByRole('button', { name: 'Delete account' })).toBeDisabled()
    await userEvent.click(within(dialog).getByRole('button', { name: 'Cancel' }))
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
    await waitFor(() => expect(trigger).toHaveFocus())
    await expect(args.onDeleteAccount).not.toHaveBeenCalled()

    await userEvent.click(trigger)
    dialog = await body().findByRole('alertdialog', { name: 'Delete your account?' })
    await userEvent.type(within(dialog).getByRole('textbox'), 'ines')
    await userEvent.click(within(dialog).getByRole('button', { name: 'Delete account' }))
    await expect(args.onDeleteAccount).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull())
  },
}

/** A phone: the nav stacks above the section, every link still in view. */
export const Narrow: Story = {
  decorators: box(390),
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Settings' })
    const form = canvas.getByRole('form', { name: 'Profile' })
    await waitFor(() => expect(form.getBoundingClientRect().top).toBeGreaterThanOrEqual(nav.getBoundingClientRect().bottom))
    await expect(within(nav).getAllByRole('link')).toHaveLength(3)
    for (const link of within(nav).getAllByRole('link')) await expect(link).toBeVisible()
  },
}
