import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '../buttons/Button'
import { EmptyState } from './EmptyState'

const meta = {
  title: 'Components/States/EmptyState',
  component: EmptyState,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: {
    icon: <Icon name="search" />,
    title: 'No projects match "atlas"',
    description: 'Check the spelling, or clear the search to see every project.',
    action: (
      <Button appearance="outlined" variant="accent">
        Clear search
      </Button>
    ),
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    headingLevel: { control: 'inline-radio', options: [2, 3, 4, 5, 6] },
    icon: { control: false },
    action: { control: false },
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'No projects match "atlas"' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Clear search' })).toBeVisible()
    // The icon is decoration.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull()
  },
}

/** First use: nothing has been made yet, so the action is the way in. */
export const FirstUse: Story = {
  args: {
    icon: <Icon name="plus" />,
    title: 'No projects yet',
    description: 'Projects keep a team’s files, tasks and conversations in one place.',
    action: (
      <>
        <Button startIcon={<Icon name="plus" />}>New project</Button>
        <Button appearance="ghost" variant="accent">
          Import
        </Button>
      </>
    ),
  },
}

/** Inside a panel or a table body. */
export const Small: Story = {
  args: { size: 'sm', headingLevel: 3, action: undefined, title: 'No comments', description: 'Comments on this file show up here.', icon: <Icon name="info" /> },
  decorators: [(Story) => <div style={{ maxInlineSize: '20rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>{Story()}</div>],
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 3 })).toHaveTextContent('No comments')
  },
}

export const TitleOnly: Story = {
  args: { icon: undefined, description: undefined, action: undefined, title: 'Nothing scheduled for today' },
}
