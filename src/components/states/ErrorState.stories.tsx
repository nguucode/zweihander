import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, userEvent } from 'storybook/test'
import { Button } from '../buttons/Button'
import { ErrorState } from './ErrorState'

const meta = {
  title: 'Components/States/ErrorState',
  tags: ['beta'],
  component: ErrorState,
  args: {
    title: 'Couldn’t load projects',
    description: 'The server didn’t answer. Your projects are safe; try again in a moment.',
    action: <Button onClick={fn()}>Try again</Button>,
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    headingLevel: { control: 'inline-radio', options: [2, 3, 4, 5, 6] },
    icon: { control: false },
    action: { control: false },
  },
} satisfies Meta<typeof ErrorState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'Couldn’t load projects' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Try again' })).toBeVisible()
  },
}

/** A reference for support: small, monospaced, selected in one click. */
export const WithDetails: Story = {
  args: { details: 'Error 503 · req_8f2c91ad' },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Error 503 · req_8f2c91ad')).toBeVisible()
  },
}

export const DefaultTitle: Story = {
  args: { title: undefined, description: 'Reload the page to try again.', action: undefined },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Something went wrong' })).toBeVisible()
  },
}

export const Small: Story = {
  args: { size: 'sm', headingLevel: 3, title: 'Couldn’t load comments', description: undefined, action: <Button size="sm" appearance="outlined" variant="accent">Retry</Button> },
  decorators: [(Story) => <div style={{ maxInlineSize: '20rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>{Story()}</div>],
}

/** Replaces a list that failed to load, and is announced. */
export const Live: Story = {
  render: function Render(args) {
    const [failed, setFailed] = useState(false)
    return failed ? <ErrorState {...args} isLive /> : <Button onClick={() => setFailed(true)}>Load projects</Button>
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Load projects' }))
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Couldn’t load projects')
  },
}
