import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { ColorPanel, ColorPicker, normalizeHex, parseColor } from './ColorPicker'

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
  tags: ['beta'],
  component: ColorPicker,
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
    // Focus goes back once the exit transition ends and the popup unmounts,
    // which WebKit on the CI runner can hold past one 3s wait.
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull())
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
    await expect(canvas.getByText('Enter a colour, e.g. #3b82f6, rgb(59 130 246) or hsl(217 91% 60%).')).toBeVisible()
    await expect(args.onValueChange).toHaveBeenCalledTimes(1)
    // Any CSS colour is read, and shown back as hex.
    for (const [typed, hex] of [
      ['rgb(0 128 255)', '#0080ff'],
      ['hsl(120 100% 25% / 50%)', '#00800080'],
      ['rebeccapurple', '#663399'],
    ]) {
      await userEvent.clear(input)
      await userEvent.type(input, `${typed}{Enter}`)
      await expect(args.onValueChange).toHaveBeenLastCalledWith(hex)
      await expect(input).toHaveValue(hex)
    }
  },
}

export const Swatches: Story = {
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Choose colour/ }))
    const dialog = within(await popup())
    const swatches = within(dialog.getByRole('radiogroup', { name: 'Swatches' }))
    await expect(swatches.getByRole('radio', { name: 'Blue' })).toBeChecked()
    await userEvent.click(swatches.getByRole('radio', { name: 'Violet' }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#8b5cf6')
    await expect(swatches.getByRole('radio', { name: 'Violet' })).toBeChecked()
    await expect(swatches.getByRole('radio', { name: 'Blue' })).not.toBeChecked()
    // One tab stop; arrows move between swatches and choose.
    await userEvent.keyboard('{ArrowRight}')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#ec4899')
    await expect(swatches.getByRole('radio', { name: 'Pink' })).toHaveFocus()
  },
}

// The format menu is the kit's Select: open it, pick the option.
const chooseFormat = async (dialog: ReturnType<typeof within>, label: string) => {
  await userEvent.click(dialog.getByRole('combobox', { name: 'Colour format' }))
  await userEvent.click(await within(document.body).findByRole('option', { name: label }))
  await waitFor(() => expect(within(document.body).queryByRole('listbox')).toBeNull())
}

// Width a field's text needs against the room inside its padding.
const room = (input: HTMLInputElement, text: string) => {
  const cs = getComputedStyle(input)
  const cv = document.createElement('canvas').getContext('2d')!
  cv.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
  // From the computed border-box width: Firefox's clientWidth on an input
  // already leaves out the padding.
  const inner = ['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth'].reduce(
    (w, k) => w - parseFloat(cs[k as 'paddingLeft']),
    parseFloat(cs.width),
  )
  return inner - cv.measureText(text).width
}

/** Channel fields in Hex, RGB, HSL or HSB, and opacity, as in Figma. */
export const FormatsAndOpacity: Story = {
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Choose colour/ }))
    const dialog = within(await popup())
    await expect(dialog.getByRole('textbox', { name: 'Hex' })).toHaveValue('3b82f6')
    await chooseFormat(dialog, 'RGB')
    const red = dialog.getByRole('textbox', { name: 'Red' })
    await expect(red).toHaveValue('59')
    await userEvent.clear(red)
    await userEvent.type(red, '255{Enter}')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#ff82f6')
    // The widest values show in full, with a pixel for the caret.
    for (const name of ['Red', 'Green', 'Blue']) {
      await expect(room(dialog.getByRole('textbox', { name }) as HTMLInputElement, '255')).toBeGreaterThanOrEqual(1)
    }
    await expect(room(dialog.getByRole('textbox', { name: 'Opacity percent' }) as HTMLInputElement, '100')).toBeGreaterThanOrEqual(1)
    // Up and down step, Shift by 10.
    await userEvent.keyboard('{ArrowDown}')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#fe82f6')
    await chooseFormat(dialog, 'HSL')
    await expect(dialog.getByRole('textbox', { name: 'Lightness percent' })).toHaveValue('75')
    // Opacity below 100% adds the alpha byte.
    const opacity = dialog.getByRole('textbox', { name: 'Opacity percent' })
    await userEvent.clear(opacity)
    await userEvent.type(opacity, '50{Enter}')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#fe82f680')
    await expect(dialog.getByRole('slider', { name: 'Opacity' })).toHaveAttribute('aria-valuetext', '50%')
    await expect(canvas.getByRole('textbox', { name: 'Brand colour' })).toHaveValue('#fe82f680')
  },
}

/** `alpha={false}`: no opacity, and the value stays `#rrggbb`. */
export const WithoutAlpha: Story = {
  args: { alpha: false, defaultValue: '#3b82f680' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox', { name: 'Brand colour' })).toHaveValue('#3b82f6')
    await userEvent.click(canvas.getByRole('button', { name: /Choose colour/ }))
    const dialog = within(await popup())
    await expect(dialog.queryByRole('slider', { name: 'Opacity' })).toBeNull()
    await expect(dialog.queryByRole('textbox', { name: 'Opacity percent' })).toBeNull()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull())
  },
}

export const Required: Story = {
  args: { required: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox', { name: /Brand colour/ })).toBeRequired()
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
    await expect(normalizeHex('#3b82f680')).toBe('#3b82f680')
    await expect(normalizeHex('#3b82f6FF')).toBe('#3b82f6')
    await expect(normalizeHex('#abc8')).toBe('#aabbcc88')
    await expect(parseColor('rgb(59, 130, 246)')).toBe('#3b82f6')
    await expect(parseColor('hsl(0 100% 50% / 0.5)')).toBe('#ff000080')
    await expect(parseColor('white')).toBe('#ffffff')
    await expect(parseColor('oklch(62.3% 0.214 259.8)')).toMatch(/^#[0-9a-f]{6}$/)
    await expect(parseColor('reddish')).toBeNull()
  },
}
