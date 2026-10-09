import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { TokenTable } from './TokenTable'
import docs from './docs.module.css'

const TOKENS = [
  { name: '--focus-width', use: 'Ring thickness, on every focusable element' },
  { name: '--focus-offset', use: 'Ring outside the element: buttons, fields, links, free-standing controls' },
  { name: '--focus-offset-inset', use: 'Ring inside the element: tabs, rows, accordion headers, close buttons in a panel' },
]

const SAMPLE: React.CSSProperties = {
  inlineSize: 'var(--control-md)',
  blockSize: 'var(--control-md)',
  borderRadius: 'var(--radius-control)',
  background: 'var(--muted)',
  outline: 'var(--focus-width) solid var(--ring)',
}

// Both rings drawn at rest, so the page shows the difference without a
// keyboard.
function RingDemo() {
  return (
    <div className={docs.stackWide}>
      <TokenTable tokens={TOKENS} />
      <div className={docs.row}>
        <div data-ring="offset" style={{ ...SAMPLE, outlineOffset: 'var(--focus-offset)' }} />
        <span className={docs.caption}>offset</span>
        <div data-ring="inset" style={{ ...SAMPLE, outlineOffset: 'var(--focus-offset-inset)' }} />
        <span className={docs.caption}>offset-inset</span>
      </div>
    </div>
  )
}

// Narrative and prose live in Focus.mdx.
const meta = {
  title: 'Foundations/Focus',
  render: () => <RingDemo />,
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Rings: Story = {
  play: async ({ canvasElement }) => {
    const ring = (kind: string) => getComputedStyle(canvasElement.querySelector(`[data-ring="${kind}"]`)!)
    await expect(ring('offset').outlineWidth).toBe('2px')
    await expect(ring('offset').outlineOffset).toBe('2px')
    await expect(ring('inset').outlineOffset).toBe('-2px')
  },
}
