import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Divider } from './Divider'

const menu = { display: 'grid', gap: 'var(--space-2)', inlineSize: '12rem' }

const meta = {
  title: 'Components/Atomic Elements/Divider',
  tags: ['beta'],
  component: Divider,
  // Every prop is listed by hand, with its type and default: these
  // descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    orientation: {
      description: 'Horizontal between stacked blocks; vertical between items in a row, where it stretches to the row.',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      table: { type: { summary: "'horizontal' | 'vertical'" }, defaultValue: { summary: "'horizontal'" } },
    },
    inset: {
      description: 'Indents both ends so the line stops short of its container: 16px horizontal, 8px vertical.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    size: {
      description: 'Line thickness: 1px, 2px or 4px.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: { type: { summary: "'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'sm'" } },
    },
    appearance: {
      description: "Line style. The spec's `variant`: here `variant` always means colour.",
      control: 'inline-radio',
      options: ['solid', 'dashed'],
      table: { type: { summary: "'solid' | 'dashed'" }, defaultValue: { summary: "'solid'" } },
    },
  },
  excludeStories: ['anatomyParts'],
  decorators: [
    // A story that brings its own surroundings sets `parameters.bare`.
    (Story, { args, parameters }) =>
      parameters.bare ? (
        <Story />
      ) : args.orientation === 'vertical' ? (
        <div style={{ display: 'flex', gap: 'var(--space-4)', height: 'var(--space-12)' }}>
          <span>Left</span>
          <Story />
          <span>Right</span>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <span>Above</span>
          <Story />
          <span>Below</span>
        </div>
      ),
  ],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    const divider = canvas.getByRole('separator')
    // Horizontal is the implicit orientation of <hr>; saying it again is noise.
    await expect(divider).not.toHaveAttribute('aria-orientation')
    await expect(getComputedStyle(divider).borderTopWidth).toBe('1px')
  },
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  play: async ({ canvas }) => {
    const divider = canvas.getByRole('separator')
    await expect(divider).toHaveAttribute('aria-orientation', 'vertical')
    await expect(divider.getBoundingClientRect().height).toBeGreaterThan(0)
  },
}

export const Sizes: Story = {
  render: (args) => (
    <>
      <Divider {...args} size="sm" />
      <Divider {...args} size="md" />
      <Divider {...args} size="lg" />
    </>
  ),
  play: async ({ canvas }) => {
    const widths = canvas.getAllByRole('separator').map((d) => getComputedStyle(d).borderTopWidth)
    await expect(widths).toEqual(['1px', '2px', '4px'])
  },
}

export const VerticalSizes: Story = {
  ...Sizes,
  args: { orientation: 'vertical' },
  play: async ({ canvas }) => {
    const dividers = canvas.getAllByRole('separator')
    await expect(dividers.map((d) => getComputedStyle(d).borderLeftWidth)).toEqual(['1px', '2px', '4px'])
    // The box is only as wide as its line.
    await expect(dividers.map((d) => d.getBoundingClientRect().width)).toEqual([1, 2, 4])
  },
}

export const Dashed: Story = {
  args: { appearance: 'dashed', size: 'md' },
  play: async ({ canvas }) => {
    await expect(getComputedStyle(canvas.getByRole('separator')).borderTopStyle).toBe('dashed')
  },
}

export const Inset: Story = {
  args: { inset: true },
  play: async ({ canvas }) => {
    const divider = canvas.getByRole('separator')
    const parent = divider.parentElement!.getBoundingClientRect()
    await expect(divider.getBoundingClientRect().width).toBeLessThan(parent.width)
  },
}

export const VerticalDashed: Story = {
  args: { orientation: 'vertical', appearance: 'dashed', size: 'md' },
  play: async ({ canvas }) => {
    await expect(getComputedStyle(canvas.getByRole('separator')).borderLeftStyle).toBe('dashed')
  },
}

export const VerticalInset: Story = {
  args: { orientation: 'vertical', inset: true },
  play: async ({ canvas }) => {
    const divider = canvas.getByRole('separator')
    const row = divider.parentElement!.getBoundingClientRect()
    await expect(divider.getBoundingClientRect().height).toBeLessThan(row.height)
  },
}

/** Between two icons already grouped, the line is decoration: hidden, not announced. */
export const Decorative: Story = {
  args: { orientation: 'vertical', 'aria-hidden': true },
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.queryByRole('separator')).toBeNull()
    await expect(canvasElement.querySelector('hr')).toBeVisible()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Line', selector: 'hr', description: 'An <hr>, drawn as a border in the border colour.' },
]

/** The thickest line, so the marker has something to point at. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { size: 'lg' },
  // Alone, at a width: the marker's leader would otherwise cross the text.
  parameters: { bare: true },
  render: (args) => (
    <div style={{ inlineSize: '16rem' }}>
      <Divider {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await expectAnatomy(canvasElement, anatomyParts)
  },
}

/** Guidelines, Do: one divider between two groups. */
export const DoDivideGroups: Story = {
  parameters: { bare: true },
  render: (args) => (
    <div style={menu}>
      <span>Profile</span>
      <span>Settings</span>
      <Divider {...args} />
      <span>Sign out</span>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('separator')).toHaveLength(1)
  },
}

/** Guidelines, Don't: a line after every item turns the list into stripes. */
export const DontDivideEveryItem: Story = {
  tags: ['!dev'],
  parameters: { bare: true },
  render: (args) => (
    <div style={menu}>
      <span>Profile</span>
      <Divider {...args} />
      <span>Settings</span>
      <Divider {...args} />
      <span>Sign out</span>
    </div>
  ),
}
