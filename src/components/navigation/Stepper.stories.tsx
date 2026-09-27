import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, userEvent, within } from 'storybook/test'
import { Button } from '../buttons/Button'
import { Stepper } from './Stepper'

const steps = [
  { label: 'Account', description: 'Email and password' },
  { label: 'Workspace', description: 'Name and URL' },
  { label: 'Invite', description: 'Add your team' },
  { label: 'Done' },
]

const meta = {
  title: 'Components/Navigation/Stepper',
  component: Stepper,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: { steps, current: 1 },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    current: { control: { type: 'range', min: 0, max: 3 } },
    steps: { control: false },
  },
  decorators: [(Story) => <div style={{ maxInlineSize: '44rem' }}>{Story()}</div>],
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Progress' })
    const items = within(nav).getAllByRole('listitem')
    await expect(items).toHaveLength(4)
    await expect(items[1]).toHaveAttribute('aria-current', 'step')
    // Status is spoken with the label, since the marker is decorative.
    await expect(items[0]).toHaveTextContent('Account, completed')
    await expect(items[2]).toHaveTextContent('Invite, not started')
    // Without onStepClick nothing is a button.
    await expect(within(nav).queryByRole('button')).toBeNull()
  },
}

export const Vertical: Story = { args: { orientation: 'vertical', current: 2 } }

export const Small: Story = { args: { size: 'sm' } }

export const WithError: Story = {
  args: {
    current: 2,
    steps: [steps[0], { ...steps[1], status: 'error', description: 'That URL is taken' }, steps[2], steps[3]],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('listitem')[1]).toHaveTextContent('Workspace, has an error')
  },
}

/** Finished steps become buttons that go back; upcoming ones cannot be skipped to. */
export const Navigable: Story = {
  render: function Render(args) {
    const [current, setCurrent] = useState(2)
    return (
      <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
        <Stepper {...args} current={current} onStepClick={setCurrent} />
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button appearance="outlined" variant="accent" disabled={current === 0} onClick={() => setCurrent(current - 1)}>
            Back
          </Button>
          <Button disabled={current === steps.length - 1} onClick={() => setCurrent(current + 1)}>
            Next
          </Button>
        </div>
      </div>
    )
  },
  play: async ({ canvas }) => {
    const nav = canvas.getByRole('navigation')
    // Account, Workspace (done) and Invite (current) are buttons; Done is not.
    await expect(within(nav).getAllByRole('button')).toHaveLength(3)
    await userEvent.click(within(nav).getByRole('button', { name: /Account/ }))
    await expect(within(nav).getAllByRole('listitem')[0]).toHaveAttribute('aria-current', 'step')
  },
}
