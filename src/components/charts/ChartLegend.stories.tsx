import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, userEvent } from 'storybook/test'
import { ChartLegend } from './ChartLegend'
import { colorVar } from './chart-utils'

const items = [
  { key: 'miss', label: 'Miss', color: colorVar('chart-1'), value: '1.16K' },
  { key: 'revalidated', label: 'Revalidated', color: colorVar('chart-2'), value: '928' },
  { key: 'none', label: 'None', color: colorVar('chart-3'), value: '466' },
]

const meta = {
  title: 'Charts/ChartLegend',
  tags: ['beta'],
  component: ChartLegend,
  parameters: { layout: 'padded' },
  args: { items },
  argTypes: {
    items: { control: false, description: 'One per series: `key`, `label`, CSS `color` (usually from `colorVar`), optional `value`.' },
    hiddenKeys: { control: false, description: 'Keys of series switched off.' },
    onToggle: { description: 'Makes each item a toggle button. Without it the legend is a plain list.' },
    onFocusChange: { description: 'Called with the key under the pointer or focus, null when it leaves.' },
    marker: { control: 'inline-radio', options: ['dot', 'line'], description: '`dot` for bars and slices, `line` for line and area series. Off, a dot goes hollow and a line fades.' },
  },
} satisfies Meta<typeof ChartLegend>

export default meta
type Story = StoryObj<typeof meta>

/** Toggles: each item shows or hides its series. The charts wire this up themselves. */
export const Toggles: Story = {
  args: { onFocusChange: fn() },
  render: function Render(args) {
    const [hidden, setHidden] = useState<string[]>([])
    return <ChartLegend {...args} hiddenKeys={hidden} onToggle={(k) => setHidden((h) => (h.includes(k) ? h.filter((x) => x !== k) : [...h, k]))} />
  },
  play: async ({ args, canvas }) => {
    const miss = canvas.getByRole('button', { name: 'Miss 1.16K' })
    await userEvent.click(miss)
    await expect(miss).toHaveAttribute('aria-pressed', 'false')
    // Off reads as struck through, not as a fainter grey that fails contrast on the hover fill.
    await expect(getComputedStyle(miss.querySelector('span:nth-child(2)')!).textDecorationLine).toBe('line-through')
    await expect(getComputedStyle(miss).color).toBe(getComputedStyle(canvas.getByRole('button', { name: /Revalidated/ })).color)
    // Focus reports the item, so the chart can fade the rest.
    await userEvent.tab()
    await expect(args.onFocusChange).toHaveBeenLastCalledWith('revalidated')
  },
}

/** A plain list, as under a pie: no toggles. */
export const Static: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('button')).toBeNull()
    await expect(canvas.getAllByRole('listitem')).toHaveLength(3)
  },
}

/** Line markers, as under a line chart. Off, the marker fades to 40% instead of going hollow. */
export const LineMarker: Story = {
  args: { marker: 'line', items: items.map((item) => ({ ...item, value: undefined })) },
  render: function Render(args) {
    const [hidden, setHidden] = useState<string[]>([])
    return <ChartLegend {...args} hiddenKeys={hidden} onToggle={(k) => setHidden((h) => (h.includes(k) ? h.filter((x) => x !== k) : [...h, k]))} />
  },
  play: async ({ canvas }) => {
    const miss = canvas.getByRole('button', { name: 'Miss' })
    const marker = miss.querySelector('span')!
    await expect(marker.getBoundingClientRect().width).toBeGreaterThan(marker.getBoundingClientRect().height)
    await userEvent.click(miss)
    await expect(getComputedStyle(marker).opacity).toBe('0.4')
  },
}
