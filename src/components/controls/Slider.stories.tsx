import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { Slider } from './Slider'

const meta = {
  title: 'Components/Controls/Slider',
  component: Slider,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: { label: 'Volume', defaultValue: 40, showValue: true, onValueChange: fn(), onValueCommitted: fn() },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  decorators: [(Story) => <div style={{ maxInlineSize: '24rem' }}>{Story()}</div>],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const thumb = canvas.getByRole('slider', { name: 'Volume' })
    await expect(thumb).toHaveAttribute('aria-valuenow', '40')
    await expect(canvas.getByText('40')).toBeVisible()
    // Keyboard: arrows step by `step`, Page Up by `largeStep`, End to max.
    await userEvent.click(thumb)
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(thumb).toHaveAttribute('aria-valuenow', '41'))
    await expect(args.onValueChange).toHaveBeenLastCalledWith(41)
    await userEvent.keyboard('{End}')
    await waitFor(() => expect(thumb).toHaveAttribute('aria-valuenow', '100'))
    await expect(args.onValueCommitted).toHaveBeenCalled()
  },
}

/** Two thumbs, each with its own name. */
export const Range: Story = {
  args: {
    label: 'Price',
    defaultValue: [20, 80] as never,
    format: { style: 'currency', currency: 'USD', maximumFractionDigits: 0 },
    thumbLabels: ['Minimum price', 'Maximum price'],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('slider', { name: 'Minimum price' })).toHaveAttribute('aria-valuenow', '20')
    await expect(canvas.getByRole('slider', { name: 'Maximum price' })).toHaveAttribute('aria-valuenow', '80')
    await expect(canvas.getByText('$20 – $80')).toBeVisible()
  },
}

export const Steps: Story = { args: { label: 'Rating', defaultValue: 3, min: 1, max: 5, step: 1 } }

export const Small: Story = { args: { size: 'sm' } }

export const WithoutVisibleLabel: Story = {
  args: { label: undefined, showValue: false, 'aria-label': 'Brush size' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('slider', { name: 'Brush size' })).toBeVisible()
  },
}

export const Vertical: Story = {
  args: { orientation: 'vertical', label: 'Level' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('slider')).toHaveAttribute('aria-orientation', 'vertical')
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('slider')).toBeDisabled()
  },
}
