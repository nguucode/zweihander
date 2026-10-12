import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { Button } from '../buttons/Button'
import { EmptyState } from './EmptyState'

const meta = {
  title: 'Components/States/EmptyState',
  tags: ['beta'],
  component: EmptyState,
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
  // Every prop is listed by hand so the API table and the Playground's props
  // panel carry the same descriptions; react-docgen gives no control for a
  // ReactNode prop.
  argTypes: {
    title: {
      description: 'Says what is empty. A real heading, at `headingLevel`.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    description: {
      description: 'Why it is empty, or what will appear here. Muted, at most 40 characters wide.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    icon: {
      description: 'An icon (`<Icon name="search" />`) or a small illustration, on a disc. Decorative: hidden from screen readers.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    action: {
      description: 'The way forward: usually one Button, at most two.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    size: {
      description: '`sm` for a panel or a table body; `md` for a whole page or section.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    headingLevel: {
      description: 'The title\'s heading level, so it fits the page outline: `3` inside a section headed by an `h2`.',
      control: 'inline-radio',
      options: [2, 3, 4, 5, 6],
      table: { type: { summary: '2 | 3 | 4 | 5 | 6' }, defaultValue: { summary: '2' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'No projects match "atlas"' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Clear search' })).toBeVisible()
    // The icon is decoration.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull()
    // Not a live region: it is not announced when it replaces results.
    await expect(canvas.queryByRole('status')).toBeNull()
    await expect(canvas.queryByRole('alert')).toBeNull()
    await expect(canvasElement.querySelector('[aria-live]')).toBeNull()
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

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: 'div:has(> h2)', description: 'Centres everything; its padding follows the size prop.' },
  { name: 'Icon disc', selector: 'div:has(> h2) > span', description: 'Optional. An icon on a muted disc. Decorative.' },
  { name: 'Title', selector: 'h2', description: 'A real heading, level set by headingLevel. Says what is empty.' },
  { name: 'Description', selector: 'div:has(> h2) > p', description: 'Optional. Says why, or what will appear here.' },
  { name: 'Action', selector: 'div:has(> h2) > div', description: 'Optional. The way forward: usually one Button, at most two.' },
]

/** Every part present, so the docs can point at each. */
export const Anatomy: Story = {
  tags: ['!dev'],
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[4]).toContainElement(canvasElement.querySelector('button'))
  },
}

/** Guidelines, Don't: says nothing about why it is empty, or what to do. */
export const DontNoData: Story = {
  tags: ['!dev'],
  args: { icon: undefined, description: undefined, action: undefined, title: 'No data' },
}
