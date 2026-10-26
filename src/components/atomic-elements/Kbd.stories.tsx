import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Button } from '@/components/buttons/Button'
import { Kbd } from './Kbd'

const meta = {
  title: 'Components/Atomic Elements/Kbd',
  tags: ['experimental'],
  component: Kbd,
  args: { children: 'Esc' },
  // Every prop is listed by hand, with its type and default: these
  // descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    children: {
      description: 'One key: a glyph (`⌘`, `⇧`, `↵`) or a short word (`Esc`, `Tab`). Ignored when `keys` is set.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    keys: {
      description:
        'A combination, one key cap per entry, pressed together: `[\'⌘\', \'K\']`. Renders a `<kbd>` of `<kbd>`s and takes the place of `children`.',
      control: 'object',
      table: { type: { summary: 'string[]' } },
    },
    size: {
      description: '20px (`md`) or 16px (`sm`) tall. `sm` fits inside a small control or a dense row.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

const row = { display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }

export const Default: Story = {
  play: async ({ canvas }) => {
    const key = canvas.getByText('Esc')
    await expect(key.tagName).toBe('KBD')
    await expect(key).not.toHaveAttribute('role')
    // A key cap is a picture of a key, not a control: never in the tab order.
    await userEvent.tab()
    await expect(key).not.toHaveFocus()
  },
}

/** A combination: one cap per key, inside one outer `<kbd>`. */
export const Combination: Story = {
  args: { keys: ['⌘', '⇧', 'P'] },
  play: async ({ canvasElement }) => {
    const group = canvasElement.querySelector(':scope kbd:has(> kbd)')!
    await expect(group.querySelectorAll(':scope > kbd')).toHaveLength(3)
    await expect(group).toHaveTextContent('⌘⇧P')
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
      {(['md', 'sm'] as const).map((size) => (
        <div key={size} style={row}>
          <Kbd size={size}>Esc</Kbd>
          <Kbd size={size}>⌘</Kbd>
          <Kbd size={size} keys={['⌘', 'K']} />
          <Kbd size={size} keys={['Ctrl', 'Shift', 'P']} />
        </div>
      ))}
    </div>
  ),
}

/** In running text, read where it sits: "Press Esc to close". */
export const InText: Story = {
  render: () => (
    <p style={{ margin: 0 }}>
      Press <Kbd>Esc</Kbd> to close, or <Kbd keys={['⌘', 'S']} /> to save and close.
    </p>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Press/)).toHaveTextContent('Press Esc to close, or ⌘S to save and close.')
  },
}

/** A shortcut hint inside a control: hidden from assistive tech, announced through `aria-keyshortcuts`. */
export const DoHideInControl: Story = {
  tags: ['!dev'],
  render: () => (
    <Button appearance="outlined" variant="secondary" aria-keyshortcuts="Meta+K">
      Search <Kbd size="sm" keys={['⌘', 'K']} aria-hidden />
    </Button>
  ),
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Search' })
    await expect(button).toHaveAttribute('aria-keyshortcuts', 'Meta+K')
  },
}

/** The hint left in the name: a screen reader hears "Search ⌘ K", glyphs and all. */
export const DontLeaveInName: Story = {
  tags: ['!dev'],
  render: () => (
    <Button appearance="outlined" variant="secondary">
      Search <Kbd size="sm" keys={['⌘', 'K']} />
    </Button>
  ),
  play: async ({ canvas }) => {
    // Engines differ on spacing between the caps; the glyphs are in the name either way.
    await expect(canvas.getByRole('button')).toHaveAccessibleName(/^Search\s*⌘\s*K$/)
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Key', selector: 'kbd > kbd:first-child', description: 'One key cap: a glyph or a short word on a bordered chip, its lower edge thicker like a raised key.' },
  { name: 'Group', selector: 'kbd:has(> kbd)', description: 'Optional, with `keys`: the outer `<kbd>` that holds a combination, the caps a small gap apart.' },
]

export const Anatomy: Story = {
  tags: ['!dev'],
  args: { keys: ['⌘', 'K'] },
  render: (args) => (
    <div style={{ padding: 'var(--space-4)' }}>
      <Kbd {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await expectAnatomy(canvasElement, anatomyParts)
  },
}
