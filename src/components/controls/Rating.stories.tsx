import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { Rating } from './Rating'

const meta = {
  title: 'Components/Controls/Rating',
  tags: ['experimental'],
  component: Rating,
  args: { label: 'Rate this template', defaultValue: 3, onValueChange: fn() },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] } },
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
