import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { startInspector, type TokenValue } from './inspect'

/**
 * What the Specs tab draws inside the preview frame: the parts numbered, the
 * hovered row's redline, and the tokens resolved as the frame sees them.
 */
const meta = {
  title: 'Site/Inspect',
  render: () => <Button>Subscribe</Button>,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const layer = () => document.querySelector<HTMLElement>('[data-playground-inspector]')

export const Default: Story = {
  play: async ({ canvasElement }) => {
    let values: Record<string, TokenValue> = {}
    const inspector = startInspector(
      () => canvasElement,
      (v) => (values = v),
    )
    const parts = [
      { name: 'Container', selector: 'button' },
      { name: 'Missing', selector: 'nav' },
    ]
    try {
      inspector.set({ parts, tokens: ['--control-md', '--primary', '--nope'] })
      // One number, on the part that is there; decoration only.
      await waitFor(() => expect(layer()?.textContent).toBe('①'))
      await expect(layer()).toHaveAttribute('aria-hidden', 'true')
      await expect(getComputedStyle(layer()!).pointerEvents).toBe('none')
      await waitFor(() => expect(values['--control-md']).toEqual({ kind: 'length', text: '32px' }))
      await expect(values['--primary'].kind).toBe('color')
      await expect(values['--nope']).toEqual({ kind: 'missing', text: 'Not defined here' })

      // A row's redline: the part's height, with its value.
      inspector.set({ parts, tokens: ['--control-md'], highlight: { part: 'Container', property: 'Height', token: '--control-md' } })
      await waitFor(() => expect(layer()?.textContent).toContain('Height 32px'))
      const button = canvasElement.querySelector('button')!.getBoundingClientRect()
      const line = [...layer()!.children].find((el) => (el as HTMLElement).style.width === '1px') as HTMLElement
      await expect(parseFloat(line.style.height)).toBeCloseTo(button.height, 0)

      // Inline padding shades the two sides.
      inspector.set({ parts, tokens: [], highlight: { part: 'Container', property: 'Inline padding', token: '--x' } })
      await waitFor(() => expect([...layer()!.children].filter((el) => (el as HTMLElement).style.background.includes('0.25'))).toHaveLength(2))

      // A forced state goes on the item's root as the pseudo-states addon's class, and comes off.
      inspector.set({ parts, tokens: [], pseudo: 'hover' })
      await expect(canvasElement).toHaveClass('pseudo-hover-all')
      inspector.set({ parts, tokens: [], pseudo: 'active' })
      await expect(canvasElement).not.toHaveClass('pseudo-hover-all')
      await expect(canvasElement).toHaveClass('pseudo-active-all')
    } finally {
      inspector.set(null)
    }
    await expect(layer()).toBeNull()
    await expect(canvasElement).not.toHaveClass('pseudo-active-all')
  },
}
