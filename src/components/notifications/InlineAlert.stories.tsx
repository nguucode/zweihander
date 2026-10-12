import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { Button } from '../buttons/Button'
import { Link } from '../navigation/Link'
import { TextInput } from '../inputs/TextInput'
import { InlineAlert } from './InlineAlert'

const meta = {
  title: 'Components/Notifications/InlineAlert',
  tags: ['beta'],
  component: InlineAlert,
  args: { children: 'Changes are saved automatically.' },
  // Every prop is described here: these are the docs' API table and the
  // Playground's props panel.
  argTypes: {
    variant: {
      description: 'Colour by meaning: the whole line takes it. `danger` and `warning` also decide how `isLive` announces it.',
      control: 'inline-radio',
      options: ['info', 'success', 'warning', 'danger'],
      table: { type: { summary: "'info' | 'success' | 'warning' | 'danger'" }, defaultValue: { summary: "'info'" } },
    },
    size: {
      description: 'Body text (`md`) or small body text (`sm`), with the icon to match.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    children: {
      description: 'The message.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    icon: {
      description: "Replaces the variant's icon; `false` shows none. Decorative: hidden from screen readers.",
      control: false,
      table: { type: { summary: 'ReactNode | false' }, defaultValue: { summary: "the variant's icon" } },
    },
    action: {
      description: 'A short link or button after the message, e.g. "Retry".',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    isLive: {
      description: 'Announce it when it appears: `danger` and `warning` interrupt (`role="alert"`), the others wait (`role="status"`).',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  excludeStories: ['anatomyParts'],
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

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
const root = 'div:has(> span[aria-hidden="true"])'
export const anatomyParts = [
  { name: 'Icon', selector: `${root} > span:nth-child(1)`, description: "The variant's filled icon, one line tall. Replaceable, or none." },
  { name: 'Message', selector: `${root} > span:nth-child(2)`, description: "`children`, in the variant's text colour." },
  { name: 'Action', selector: `${root} > span:nth-child(3)`, description: 'Optional short link or button.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { variant: 'danger', children: 'Couldn’t load comments.', action: <Link href="#retry" variant="accent">Retry</Link> },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[1]).toHaveTextContent('Couldn’t load comments.')
    await expect(found[2]).toHaveTextContent('Retry')
  },
}

/** Guidelines, Don't: an error about one field belongs to the field, tied to it. */
export const DontForOneField: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={stack}>
      <TextInput label="Workspace URL" defaultValue="atlas" isFullWidth />
      <InlineAlert variant="danger">That URL is taken.</InlineAlert>
    </div>
  ),
}

/** Guidelines, Do: the field's own error, announced with it. */
export const DoFieldError: Story = {
  tags: ['!dev'],
  render: () => (
    <TextInput label="Workspace URL" defaultValue="atlas" validationState="error" helperText="That URL is taken." isFullWidth />
  ),
  play: async ({ canvas }) => {
    // The message is the field's description: read when the field is focused.
    await expect(canvas.getByRole('textbox')).toHaveAccessibleDescription('That URL is taken.')
  },
}
