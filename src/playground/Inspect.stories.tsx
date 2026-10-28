import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { anatomyPartFor, startInspector, type TokenValue } from './inspect'

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

/** Which anatomy part a Specs row is about. */
export const RowToPart: Story = {
  play: async () => {
    const names = ['Container', 'Start icon', 'Label', 'Title', 'Previous month']
    await expect(anatomyPartFor('Container, outlined', names)).toBe('Container')
    await expect(anatomyPartFor('Title and description', names)).toBe('Title')
    await expect(anatomyPartFor('Icon', names)).toBe('Start icon')
    await expect(anatomyPartFor('Previous and next', names)).toBe('Previous month')
    await expect(anatomyPartFor('Focus ring', names)).toBe('Focus ring')
    // A whole word only: "Lab" is not Label.
    await expect(anatomyPartFor('Lab', names)).toBeNull()
    await expect(anatomyPartFor('Option', names)).toBeNull()
  },
}

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

      // The focus ring at its width and offset around the focusable element, though no anatomy part names it.
      inspector.set({ parts, tokens: ['--focus-width'], highlight: { part: 'Focus ring', property: 'Width', token: '--focus-width' } })
      await waitFor(() => expect(layer()?.textContent).toContain('Width 2px'))
      const ring = [...layer()!.children].find((el) => (el as HTMLElement).style.borderWidth === '2px') as HTMLElement
      await expect(parseFloat(ring.style.width)).toBeCloseTo(button.width + 2 * (2 + 2), 0)

      // Radius marks the corner; font size shades the first line of text.
      inspector.set({ parts, tokens: [], highlight: { part: 'Container', property: 'Corner radius', token: '--x' } })
      await waitFor(() => expect([...layer()!.children].some((el) => (el as HTMLElement).style.borderTopLeftRadius !== '')).toBe(true))
      inspector.set({ parts, tokens: [], highlight: { part: 'Container', property: 'Font size', token: '--x' } })
      await waitFor(() => expect([...layer()!.children].filter((el) => (el as HTMLElement).style.background.includes('0.25'))).toHaveLength(1))

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
