import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { Button } from '../buttons/Button'
import { SuccessState } from './SuccessState'

const meta = {
  title: 'Components/States/SuccessState',
  component: SuccessState,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: {
    title: 'Invites sent',
    description: '3 people will get an email with a link to join Atlas.',
    action: (
      <>
        <Button>Go to project</Button>
        <Button appearance="ghost" variant="accent">
          Invite more
        </Button>
      </>
    ),
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    headingLevel: { control: 'inline-radio', options: [2, 3, 4, 5, 6] },
    icon: { control: false },
    action: { control: false },
  },
} satisfies Meta<typeof SuccessState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'Invites sent' })).toBeVisible()
  },
}

export const Small: Story = {
  args: { size: 'sm', headingLevel: 3, title: 'All caught up', description: 'No new notifications.', action: undefined },
  decorators: [(Story) => <div style={{ maxInlineSize: '20rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>{Story()}</div>],
}

/** Replaces a form once it is sent, and is announced. */
export const AfterSubmit: Story = {
  render: function Render(args) {
    const [sent, setSent] = useState(false)
    return sent ? <SuccessState {...args} isLive /> : <Button onClick={() => setSent(true)}>Send invites</Button>
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Send invites' }))
    await expect(await canvas.findByRole('status')).toHaveTextContent('Invites sent')
  },
}
