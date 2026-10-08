import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { Button } from '../buttons/Button'
import { Link } from '../navigation/Link'
import { TextInput } from '../inputs/TextInput'
import { InlineAlert } from './InlineAlert'

const meta = {
  title: 'Components/Notifications/InlineAlert',
  tags: ['experimental'],
  component: InlineAlert,
  args: { children: 'Changes are saved automatically.' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['info', 'success', 'warning', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    icon: { control: false },
    action: { control: false },
  },
  decorators: [(Story) => <div style={{ maxInlineSize: '28rem' }}>{Story()}</div>],
} satisfies Meta<typeof InlineAlert>

export default meta
type Story = StoryObj<typeof meta>

const stack = { display: 'grid', gap: 'var(--space-3)' }

export const Default: Story = {
  play: async ({ canvasElement }) => {
    // Static by default, like Alert: no live-region role.
    await expect(canvasElement.querySelector('[role]')).toBeNull()
  },
}

export const Variants: Story = {
  render: (args) => (
    <div style={stack}>
      <InlineAlert {...args} variant="info">Your trial ends in 5 days.</InlineAlert>
      <InlineAlert {...args} variant="success">Domain verified.</InlineAlert>
      <InlineAlert {...args} variant="warning">This link expires in 24 hours.</InlineAlert>
      <InlineAlert {...args} variant="danger">Couldn’t reach the server.</InlineAlert>
    </div>
  ),
  play: async ({ canvasElement }) => {
    // Every icon is decorative: the words carry the meaning.
    const icons = Array.from(canvasElement.querySelectorAll('svg'))
    await expect(icons).toHaveLength(4)
    for (const icon of icons) await expect(icon.closest('[aria-hidden="true"]')).not.toBeNull()
  },
}

/** Which role each variant gets with `isLive`: danger and warning interrupt, info and success wait. */
export const LiveRoles: Story = {
  render: (args) => (
    <div style={stack}>
      {(['info', 'success', 'warning', 'danger'] as const).map((variant) => (
        <InlineAlert key={variant} {...args} isLive variant={variant}>
          {variant}
        </InlineAlert>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('alert').map((el) => el.textContent)).toEqual(['warning', 'danger'])
    await expect(canvas.getAllByRole('status').map((el) => el.textContent)).toEqual(['info', 'success'])
  },
}

export const Small: Story = { args: { size: 'sm', variant: 'warning', children: 'Only the owner can change billing.' } }

export const WithAction: Story = {
  args: { variant: 'danger', children: 'Couldn’t load comments.', action: <Link href="#retry" variant="accent">Retry</Link> },
}

export const LongMessage: Story = {
  args: {
    variant: 'warning',
    children: 'Guests can see every file in this folder, including the ones added later. Move private files elsewhere before you share the link.',
  },
}

/** Under a form, announced when a submit fails. */
export const InAForm: Story = {
  render: function Render() {
    const [error, setError] = useState(false)
    return (
      <form
        style={stack}
        onSubmit={(e) => {
          e.preventDefault()
          setError(true)
        }}
      >
        <TextInput label="Workspace URL" defaultValue="atlas" isFullWidth />
        <div>
          <Button type="submit">Save</Button>
        </div>
        {error && (
          <InlineAlert variant="danger" isLive>
            That URL is taken. Try another.
          </InlineAlert>
        )}
      </form>
    )
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Save' }))
    await expect(await canvas.findByRole('alert')).toHaveTextContent('That URL is taken')
  },
}
