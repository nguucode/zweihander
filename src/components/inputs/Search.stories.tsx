import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { Search } from './Search'
import { TextInput } from './TextInput'

const meta = {
  title: 'Components/Inputs/Search',
  tags: ['beta'],
  component: Search,
  // Every prop is listed by hand, with a description: react-docgen reads the
  // types but not what each prop is for. These are the docs' API table and
  // the Playground's props panel.
  argTypes: {
    placeholder: {
      description: 'What can be searched, e.g. "Search components". Not a name: the field is named by `label` or `aria-label`.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Search'" } },
    },
    label: {
      description: 'An optional visible label, above the field. Without one, `aria-label` names it.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    'aria-label': {
      description: 'The name when there is no visible `label`.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Search'" } },
    },
    size: {
      description: '24px (`sm`) or 32px (`md`) tall, from the control tiers. Match the toolbar or form it sits in.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    isFullWidth: {
      description: 'Fills the width of its container. Otherwise 20rem, capped at the container.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Native `disabled`: dimmed, out of the tab order, no clear button.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'Native `readOnly`: the query can be read and copied, not changed. No clear button.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    value: {
      description: 'The query, controlled. Pair with `onChange`.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'The starting query, uncontrolled.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } },
    },
    onChange: {
      description: 'The native change event, also fired when the clear button or Escape empties the field.',
      control: false,
      table: { type: { summary: '(event: ChangeEvent<HTMLInputElement>) => void' } },
    },
  },
  args: { onChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    const field = canvas.getByRole('searchbox', { name: 'Search' })
    await expect(field).toHaveAttribute('placeholder', 'Search')
    // The search icon is decorative.
    await expect(canvasElement.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    // No clear button until there is something to clear.
    await expect(canvas.queryByRole('button', { name: 'Clear search' })).toBeNull()
    await userEvent.type(field, 'badge')
    await expect(field).toHaveValue('badge')
  },
}

export const Clear: Story = {
  args: { defaultValue: 'tooltip' },
  play: async ({ canvas, userEvent, args }) => {
    const field = canvas.getByRole('searchbox')
    await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }))
    await expect(field).toHaveValue('')
    // A pointer press keeps an idle field idle, and onChange hears about it.
    await expect(field).not.toHaveFocus()
    await expect(args.onChange).toHaveBeenCalled()
    await expect(canvas.queryByRole('button', { name: 'Clear search' })).toBeNull()
    // From the keyboard, focus goes back to the field rather than being lost.
    await userEvent.type(field, 'modal')
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Clear search' })).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(field).toHaveValue('')
    await expect(field).toHaveFocus()
  },
}

export const EscapeClears: Story = {
  args: { defaultValue: 'modal' },
  play: async ({ canvas, userEvent }) => {
    const field = canvas.getByRole('searchbox')
    await userEvent.click(field)
    await userEvent.keyboard('{Escape}')
    await expect(field).toHaveValue('')
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [q, setQ] = useState('card')
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
        <Search {...args} value={q} onChange={(e) => setQ(e.target.value)} />
        <span>Query: “{q}”</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }))
    await expect(canvas.getByText('Query: “”')).toBeVisible()
    await userEvent.type(canvas.getByRole('searchbox'), 'tag')
    await expect(canvas.getByText('Query: “tag”')).toBeVisible()
  },
}

export const WithLabel: Story = {
  args: { label: 'Find a component' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('searchbox', { name: 'Find a component' })).toBeVisible()
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
      {(['sm', 'md'] as const).map((size) => (
        <Search key={size} {...args} size={size} aria-label={`Search ${size}`} defaultValue="query" />
      ))}
    </div>
  ),
}

export const FullWidth: Story = {
  args: { isFullWidth: true },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'locked' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('searchbox')).toBeDisabled()
    await expect(canvas.queryByRole('button', { name: 'Clear search' })).toBeNull()
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: 'fixed' },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('button', { name: 'Clear search' })).toBeNull()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'label', description: 'Optional. Without it, the field is named "Search" or by `aria-label`.' },
  { name: 'Container', selector: 'span:has(> input)', description: 'The box: edge, fill and focus ring.' },
  { name: 'Search icon', selector: 'span:has(> input) > span:first-child', description: 'Decorative: hidden from screen readers.' },
  { name: 'Input', selector: 'input', description: 'The query, or the placeholder while empty.' },
  { name: 'Clear button', selector: 'button', description: 'Shown while there is a query, unless disabled or read-only. Named "Clear search".' },
]

/** Every part present: a label, and a query so the clear button shows. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { label: 'Find a component', defaultValue: 'tooltip' },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[4]).toHaveAccessibleName('Clear search')
  },
}

/** Guidelines, Do: the placeholder says what is searched. */
export const DoSaySearchWhat: Story = {
  args: { placeholder: 'Search components' },
}

/** Guidelines, Don't: a Text Input with a search icon is not a search field. */
export const DontTextInputWithIcon: Story = {
  tags: ['!dev'],
  render: () => <TextInput aria-label="Search" placeholder="Search components" prefix={<Icon name="search" />} defaultValue="tool" />,
}
