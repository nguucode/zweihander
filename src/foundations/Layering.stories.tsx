import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { TokenTable } from './TokenTable'

const TOKENS = [
  { name: '--layer-sticky', use: 'Sticky headers that scroll with the page' },
  { name: '--layer-overlay', use: 'Popover, menu, listbox, date picker, modal, drawer' },
  { name: '--layer-tooltip', use: 'Tooltips, and the skip link' },
  { name: '--layer-toast', use: 'Toasts: above everything, including an open modal' },
]

// Narrative and prose live in Layering.mdx.
const meta = {
  title: 'Foundations/Layering',
  render: () => <TokenTable tokens={TOKENS} />,
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Layers: Story = {
  play: async ({ canvasElement }) => {
    const value = (name: string) => Number(canvasElement.querySelector(`[data-token="${name}"]`)!.textContent)
    // The order is the contract; the numbers only have to keep it.
    await expect(value('--layer-sticky')).toBeLessThan(value('--layer-overlay'))
    await expect(value('--layer-overlay')).toBeLessThan(value('--layer-tooltip'))
    await expect(value('--layer-tooltip')).toBeLessThan(value('--layer-toast'))
  },
}
