import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { Button } from '../buttons/Button'
import { SuccessState } from './SuccessState'

const meta = {
  title: 'Components/States/SuccessState',
  tags: ['beta'],
  component: SuccessState,
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
  // Every prop is listed by hand: react-docgen does not follow the props
  // inherited from EmptyState, so neither the API table nor the Playground
  // would describe them otherwise.
  argTypes: {
    title: {
      description: 'What was done: "Invites sent", "Import finished".',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    description: {
      description: 'What happens next, or what the reader can now do.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    action: {
      description: 'The next step: where the reader goes now. Usually one or two Buttons.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    icon: {
      description: 'Replaces the `success` icon on the disc. Decorative: hidden from screen readers.',
      control: false,
      table: { type: { summary: 'ReactNode' }, defaultValue: { summary: '<Icon name="success" />' } },
    },
    isLive: {
      description: 'Makes it a `role="status"`, read politely when it replaces a form or a progress view.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    size: {
      description: '`sm` for a panel or a table body; `md` for a whole page or section.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    headingLevel: {
      description: 'The title\'s heading level, so it fits the page outline.',
      control: 'inline-radio',
      options: [2, 3, 4, 5, 6],
      table: { type: { summary: '2 | 3 | 4 | 5 | 6' }, defaultValue: { summary: '2' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof SuccessState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'Invites sent' })).toBeVisible()
    // The icon is decoration; the title says it.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull()
    // Not announced unless isLive.
    await expect(canvas.queryByRole('status')).toBeNull()
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

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: 'div:has(> h2)', description: 'Empty State\'s container: centred, padding from the size prop.' },
  { name: 'Icon disc', selector: 'div:has(> h2) > span', description: 'The success icon on a disc in the success tone. Decorative.' },
  { name: 'Title', selector: 'h2', description: 'A real heading: what was done.' },
  { name: 'Description', selector: 'div:has(> h2) > p', description: 'Optional. What happens next.' },
  { name: 'Action', selector: 'div:has(> h2) > div', description: 'Optional. The next step.' },
]

/** Every part present, so the docs can point at each. */
export const Anatomy: Story = {
  tags: ['!dev'],
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[4]).toContainElement(canvasElement.querySelector('button'))
  },
}

/** Guidelines, Don't: a whole success screen for a quick save, in place of the form being edited. */
export const DontForQuickSave: Story = {
  tags: ['!dev'],
  args: { size: 'sm', headingLevel: 3, title: 'Changes saved', description: undefined, action: undefined },
  decorators: [
    (Story) => (
      <section style={{ maxInlineSize: '20rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
        <h2 style={{ margin: 0, padding: 'var(--space-3) var(--space-4) 0', fontSize: 'var(--text-heading-sm)' }}>Profile</h2>
        {Story()}
      </section>
    ),
  ],
}
