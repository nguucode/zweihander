import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Slider } from './Slider'

const meta = {
  title: 'Components/Controls/Slider',
  tags: ['beta'],
  component: Slider,
  args: { label: 'Volume', defaultValue: 40, showValue: true, onValueChange: fn(), onValueCommitted: fn() },
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    value: {
      description: 'Controlled value: a number for one thumb, an array of two for a range.',
      control: false,
      table: { type: { summary: 'number | number[]' } },
    },
    defaultValue: {
      description: 'Starting value when uncontrolled. An array makes it a range.',
      control: false,
      table: { type: { summary: 'number | number[]' }, defaultValue: { summary: 'min' } },
    },
    onValueChange: {
      description: 'Called on every step while dragging or pressing keys.',
      control: false,
      table: { type: { summary: '(value: number | number[]) => void' } },
    },
    onValueCommitted: {
      description: 'Called once, when the pointer or key is released. Use it for anything expensive.',
      control: false,
      table: { type: { summary: '(value: number | number[]) => void' } },
    },
    min: {
      description: 'The lowest value.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    max: {
      description: 'The highest value.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '100' } },
    },
    step: {
      description: 'What an arrow key moves by, and the values a drag snaps to.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } },
    },
    largeStep: {
      description: 'What Page Up, Page Down and Shift with an arrow move by.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '10' } },
    },
    label: {
      description: 'Visible label over the track; also the name of a single thumb.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    showValue: {
      description: 'Shows the value, or the range, after the label.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    format: {
      description: 'How the value is written and spoken, e.g. `{ style: "currency", currency: "USD" }`.',
      control: false,
      table: { type: { summary: 'Intl.NumberFormatOptions' } },
    },
    thumbLabels: {
      description: 'One name per thumb for a range, e.g. `["Minimum price", "Maximum price"]`.',
      control: false,
      table: { type: { summary: 'string[]' } },
    },
    size: {
      description: 'A 20px thumb on a 6px track (`md`), or 16px on 4px with a 12px label (`sm`).',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    orientation: {
      description: 'A vertical slider is 12rem tall; arrow keys follow the axis.',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      table: { type: { summary: "'horizontal' | 'vertical'" }, defaultValue: { summary: "'horizontal'" } },
    },
    disabled: {
      description: 'Dims the control and stops it moving. The label and value stay readable.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    name: {
      description: 'Submitted with a form.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    'aria-label': {
      description: 'The name when there is no visible `label`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
  decorators: [(Story) => <div style={{ maxInlineSize: '24rem' }}>{Story()}</div>],
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const thumb = canvas.getByRole('slider', { name: 'Volume' })
    await expect(thumb).toHaveAttribute('aria-valuenow', '40')
    await expect(canvas.getByText('40')).toBeVisible()
    // Keyboard: arrows step by `step`, Page Up by `largeStep`, End to max.
    // Tab, not a click: WebKit maps a click on the hidden input to the track's start.
    await userEvent.tab()
    await expect(thumb).toHaveFocus()
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
    // Formatted in the browser's locale, as the component does: WebKit's default
    // locale writes US$.
    const usd = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
    await expect(canvas.getByText(`${usd.format(20)} – ${usd.format(80)}`)).toBeVisible()
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

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Label', selector: '[id$="-label"]', description: 'Optional. Names a single thumb.' },
  { name: 'Value', selector: 'output', description: 'Optional, with `showValue`: the value or range, formatted, in tabular figures.' },
  { name: 'Track', selector: '[data-base-ui-slider-control] > div', description: 'The full range.' },
  { name: 'Indicator', selector: '[data-base-ui-slider-indicator]', description: 'The filled part: from the start to the thumb, or between two thumbs.' },
  { name: 'Thumb', selector: '[data-index="0"]', description: 'One per value. Drag it, or focus it and use the keys.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[0]).toHaveTextContent('Volume')
  },
}

/** Guidelines, Do: an approximate value, with the number shown as it moves. */
export const DoApproximate: Story = {
  args: { label: 'Brightness', defaultValue: 0.7, format: { style: 'percent' }, min: 0, max: 1, step: 0.01, largeStep: 0.1 },
}

/** Guidelines, Don't: an exact figure picked by dragging. */
export const DontExactNumber: Story = {
  tags: ['!dev'],
  args: { label: 'Quantity', defaultValue: 137, min: 1, max: 500 },
}
