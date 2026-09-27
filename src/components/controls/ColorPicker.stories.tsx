import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { ColorPanel, ColorPicker, normalizeHex } from './ColorPicker'

const brand = [
  { value: '#0a0a0a', label: 'Ink' },
  { value: '#ffffff', label: 'Paper' },
  { value: '#ef4444', label: 'Red' },
  { value: '#f59e0b', label: 'Amber' },
  { value: '#22c55e', label: 'Green' },
  { value: '#3b82f6', label: 'Blue' },
  { value: '#8b5cf6', label: 'Violet' },
  { value: '#ec4899', label: 'Pink' },
]

const meta = {
  title: 'Components/Controls/Color Picker',
  component: ColorPicker,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: { label: 'Brand colour', defaultValue: '#3b82f6', swatches: brand, onValueChange: fn() },
} satisfies Meta<typeof ColorPicker>

export default meta
type Story = StoryObj<typeof meta>

const popup = () => within(document.body).findByRole('dialog', { name: 'Choose colour' })

export const Default: Story = {
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('textbox', { name: 'Brand colour' })).toHaveValue('#3b82f6')
    await userEvent.click(canvas.getByRole('button', { name: 'Choose colour, #3b82f6 selected' }))
    const dialog = within(await popup())
    const area = dialog.getByRole('slider', { name: 'Saturation' })
    // Opening puts focus in the area, the first thing in the popup.
    await waitFor(() => expect(area).toHaveFocus())
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 76%, brightness 96%')
    await expect(dialog.getByRole('slider', { name: 'Hue' })).toHaveAttribute('aria-valuetext', '217 degrees')
    // Up and down are brightness; left and right, saturation.
    await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}')
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 76%, brightness 86%')
    await userEvent.keyboard('{ArrowLeft}')
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 75%, brightness 86%')
    const last = (args.onValueChange as ReturnType<typeof fn>).mock.lastCall![0] as string
    await expect(canvas.getByRole('textbox')).toHaveValue(last)
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(canvas.getByRole('button', { name: `Choose colour, ${last} selected` })).toHaveFocus())
  },
}

export const TypeAHex: Story = {
  play: async ({ args, canvas }) => {
    const input = canvas.getByRole('textbox', { name: 'Brand colour' })
    await userEvent.clear(input)
    await userEvent.type(input, 'F00{Enter}')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#ff0000')
    await expect(input).toHaveValue('#ff0000')
    await userEvent.clear(input)
    await userEvent.type(input, 'reddish{Enter}')
    await expect(input).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByText('Enter a colour as #rrggbb, e.g. #3b82f6.')).toBeVisible()
    await expect(args.onValueChange).toHaveBeenCalledTimes(1)
  },
}

export const Swatches: Story = {
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Choose colour/ }))
    const dialog = within(await popup())
    await expect(dialog.getByRole('button', { name: 'Blue' })).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(dialog.getByRole('button', { name: 'Violet' }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#8b5cf6')
    await expect(dialog.getByRole('button', { name: 'Violet' })).toHaveAttribute('aria-pressed', 'true')
    await expect(dialog.getByRole('button', { name: 'Blue' })).toHaveAttribute('aria-pressed', 'false')
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox')).toBeDisabled()
    await expect(canvas.getByRole('button', { name: /Choose colour/ })).toBeDisabled()
  },
}

export const InForm: Story = {
  args: { name: 'brand' },
  render: (args) => (
    <form aria-label="Theme">
      <ColorPicker {...args} />
    </form>
  ),
  play: async ({ canvas }) => {
    const form = canvas.getByRole('form') as HTMLFormElement
    await expect(new FormData(form).get('brand')).toBe('#3b82f6')
  },
}

function ControlledPanel() {
  const [hex, setHex] = useState('#3b82f6')
  return (
    <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
      <ColorPanel value={hex} onValueChange={setHex} swatches={brand} />
      <output>{hex}</output>
    </div>
  )
}

/** The panel alone, e.g. in a sidebar. */
export const Panel: Story = {
  render: () => <ControlledPanel />,
  play: async ({ canvas }) => {
    const area = canvas.getByRole('slider', { name: 'Saturation' })
    // A click in the top-right corner is the pure hue.
    const box = area.closest('div')!.parentElement!.getBoundingClientRect()
    await userEvent.pointer({ keys: '[MouseLeft]', coords: { clientX: box.right - 1, clientY: box.top + 1 }, target: area.closest('div')!.parentElement! })
    await waitFor(() => expect(area).toHaveAttribute('aria-valuetext', expect.stringMatching(/^Saturation (99|100)%, brightness (99|100)%$/)))
    await expect(area).toHaveFocus()
    // Down to black: the hex forgets the hue, the strip does not.
    area.focus()
    for (let i = 0; i < 11; i++) await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}')
    await expect(canvas.getByRole('status')).toHaveTextContent('#000000')
    await expect(canvas.getByRole('slider', { name: 'Hue' })).toHaveAttribute('aria-valuetext', '217 degrees')
  },
}

export const Normalize: Story = {
  tags: ['!dev', '!autodocs'],
  play: async () => {
    await expect(normalizeHex('#ABC')).toBe('#aabbcc')
    await expect(normalizeHex('3B82F6')).toBe('#3b82f6')
    await expect(normalizeHex('#3b82f')).toBeNull()
    await expect(normalizeHex('blue')).toBeNull()
  },
}
