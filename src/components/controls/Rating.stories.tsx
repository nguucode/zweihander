import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { Rating } from './Rating'

const meta = {
  title: 'Components/Controls/Rating',
  tags: ['beta'],
  component: Rating,
  args: { label: 'Rate this template', defaultValue: 3, onValueChange: fn() },
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    value: {
      description: 'Controlled score. 0 is unrated. Read-only ratings take fractions, e.g. 4.5.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    defaultValue: {
      description: 'Starting score when uncontrolled.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    onValueChange: {
      description: 'Called with the new score on click and arrow keys.',
      control: false,
      table: { type: { summary: '(value: number) => void' } },
    },
    max: {
      description: 'How many stars.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '5' } },
    },
    size: {
      description: 'Stars of 16px (`sm`), 24px (`md`) or 32px (`lg`).',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: { type: { summary: "'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'md'" } },
    },
    readOnly: {
      description: 'Shows a rating rather than asking for one: one image, read once, fractions drawn part-filled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Dimmed, and cannot be changed.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: {
      description: 'Visible label over the stars; names the group.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    'aria-label': {
      description: 'The name when there is no visible `label`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    name: {
      description: 'Submitted with a form, with the chosen score.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    getValueText: {
      description: 'How each score is spoken, e.g. `(n) => ["Easy", "Medium", "Hard"][n - 1]`.',
      control: false,
      table: { type: { summary: '(value: number, max: number) => string' }, defaultValue: { summary: '"3 out of 5 stars"' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const group = canvas.getByRole('group', { name: 'Rate this template' })
    await expect(group).toBeVisible()
    await expect(canvas.getByRole('radio', { name: '3 out of 5 stars' })).toBeChecked()
    await userEvent.click(canvas.getByRole('radio', { name: '5 out of 5 stars' }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith(5)
    // Arrows move the choice, as in any radio group.
    await userEvent.keyboard('{ArrowLeft}')
    await expect(canvas.getByRole('radio', { name: '4 out of 5 stars' })).toBeChecked()
    await expect(args.onValueChange).toHaveBeenLastCalledWith(4)
  },
}

/** Shows a rating: one image, fractions allowed. */
export const ReadOnly: Story = {
  args: { readOnly: true, value: 4.5, label: undefined },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('img', { name: '4.5 out of 5 stars' })).toBeVisible()
    await expect(canvas.queryByRole('radio')).toBeNull()
    // The fifth star is filled halfway, cut rather than shrunk.
    const img = canvas.getByRole('img')
    const fifth = img.children[4] as HTMLElement
    const fill = fifth.lastElementChild as HTMLElement
    await expect(Math.round((fill.getBoundingClientRect().width / fifth.getBoundingClientRect().width) * 100)).toBe(50)
    await expect(fill.querySelector('svg')!.getBoundingClientRect().width).toBe(fifth.getBoundingClientRect().width)
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Rating key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
}

export const Unrated: Story = {
  args: { defaultValue: 0 },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('radio').filter((r) => (r as HTMLInputElement).checked)).toHaveLength(0)
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    for (const radio of canvas.getAllByRole('radio')) await expect(radio).toBeDisabled()
  },
}

export const CustomText: Story = {
  args: { max: 3, defaultValue: 2, label: 'Difficulty', getValueText: (n: number) => ['Easy', 'Medium', 'Hard'][n - 1] },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('radio', { name: 'Medium' })).toBeChecked()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: 'legend', description: 'Optional. Names the group; without it, pass `aria-label`.' },
  { name: 'Filled star', selector: 'fieldset > span > label:first-child', description: 'Up to the score, in the bright amber.' },
  { name: 'Empty star', selector: 'fieldset > span > label:last-child', description: 'After the score, outlined. Each star holds an invisible radio.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[0]).toHaveTextContent('Rate this template')
  },
}

/** Guidelines, Do: five stars, few enough to hit and to tell apart. */
export const DoFiveStars: Story = {}

/** Guidelines, Don't: ten stars are hard to hit and to tell apart. */
export const DontTenStars: Story = {
  tags: ['!dev'],
  args: { max: 10, defaultValue: 7 },
}
