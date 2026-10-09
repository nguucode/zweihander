import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { TokenTable } from './TokenTable'

const TOKENS = [
  { name: '--duration-fast', use: 'Popups appearing: menu, tooltip, popover, date picker, listbox' },
  { name: '--duration-base', use: 'State changes: hover and press colours, switch, accordion, modal' },
  { name: '--duration-slow', use: 'Things that travel: the tab indicator, a toast sliding in, a drawer' },
  { name: '--duration-spin', use: 'One turn of every spinner' },
  { name: '--duration-spin-reduced', use: 'One turn under prefers-reduced-motion' },
]

// Narrative and prose live in Motion.mdx.
const meta = {
  title: 'Foundations/Motion',
  render: () => <TokenTable tokens={TOKENS} />,
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Durations: Story = {
  play: async ({ canvasElement }) => {
    const value = (name: string) => canvasElement.querySelector(`[data-token="${name}"]`)!.textContent
    // Under reduced motion the three transition steps resolve to 0ms, which
    // is the point of the token; the test runner does not emulate it.
    await expect(value('--duration-fast')).toBe('100ms')
    await expect(value('--duration-base')).toBe('150ms')
    await expect(value('--duration-slow')).toBe('200ms')
    await expect(value('--duration-spin')).toBe('800ms')
    await expect(value('--duration-spin-reduced')).toBe('2.5s')
  },
}
