import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { Button } from './Button'
import { ButtonGroup, ToggleGroup } from './ButtonGroup'
import { ToggleButton } from './ToggleButton'

const meta = {
  title: 'Components/Buttons/ButtonGroup',
  tags: ['experimental'],
  component: ToggleGroup,
  // Listed by hand so the API table and the Playground carry the same words.
  argTypes: {
    value: {
      description: 'Controlled: the `value` of each pressed ToggleButton. Pair with `onValueChange`.',
      control: false,
      table: { type: { summary: 'string[]' } },
    },
    defaultValue: {
      description: 'Uncontrolled: the values pressed at first.',
      control: false,
      table: { type: { summary: 'string[]' } },
    },
    onValueChange: {
      description: 'Called with the new list of pressed values.',
      control: false,
      table: { type: { summary: '(value: string[]) => void' } },
    },
    multiple: {
      description:
        'Any number pressed at once. Without it, one at a time (a segmented control): once one is pressed, pressing it again keeps it pressed.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Disables every toggle in the group.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    'aria-label': {
      description: 'Names the group for a screen reader, e.g. "View".',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    children: {
      description: 'ToggleButtons, each with a `value`. ButtonGroup takes Buttons instead.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
  },
  args: { 'aria-label': 'View', defaultValue: ['list'], onValueChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

const grid = { display: 'grid', gap: 'var(--space-3)', justifyItems: 'start' }

const views = (
  <>
    <ToggleButton value="list">List</ToggleButton>
    <ToggleButton value="board">Board</ToggleButton>
    <ToggleButton value="calendar">Calendar</ToggleButton>
  </>
)

const periods = (
  <ButtonGroup aria-label="Period">
        <Button variant="secondary" appearance="outlined">Years</Button>
        <Button variant="secondary" appearance="outlined">Months</Button>
        <Button variant="secondary" appearance="outlined">Days</Button>
      </ButtonGroup>
)

const pages = (
  <ButtonGroup aria-label="Pages">
        <Button variant="secondary" appearance="outlined" isIconOnly aria-label="Previous">
          <Icon name="chevron-left" />
        </Button>
        <Button variant="secondary" appearance="outlined" isIconOnly aria-label="Next">
          <Icon name="chevron-right" />
        </Button>
      </ButtonGroup>
)

/** Segmented control: one view at a time. */
export const Default: Story = {
  render: (args) => <ToggleGroup {...args}>{views}</ToggleGroup>,
  play: async ({ canvas, userEvent, args }) => {
    await expect(canvas.getByRole('group', { name: 'View' })).toBeVisible()
    const list = canvas.getByRole('button', { name: 'List' })
    const board = canvas.getByRole('button', { name: 'Board' })
    const calendar = canvas.getByRole('button', { name: 'Calendar' })
    await expect(list).toHaveAttribute('aria-pressed', 'true')
    // Pressing another releases the first.
    await userEvent.click(board)
    await expect(board).toHaveAttribute('aria-pressed', 'true')
    await expect(list).toHaveAttribute('aria-pressed', 'false')
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['board'])
    // Pressing the pressed one again keeps it: a segmented control always has an answer.
    await userEvent.click(board)
    await expect(board).toHaveAttribute('aria-pressed', 'true')
    // One tab stop; arrow keys move between toggles, Home and End jump, and the focus wraps.
    await expect(board).toHaveFocus()
    await userEvent.keyboard('{ArrowRight}')
    await expect(calendar).toHaveFocus()
    await userEvent.keyboard('{ArrowRight}')
    await expect(list).toHaveFocus()
    await userEvent.keyboard('{End}')
    await expect(calendar).toHaveFocus()
    await userEvent.keyboard('{Home}')
    await expect(list).toHaveFocus()
    // Arrows only move focus; Space or Enter presses.
    await expect(list).toHaveAttribute('aria-pressed', 'false')
    await userEvent.keyboard(' ')
    await expect(list).toHaveAttribute('aria-pressed', 'true')
    await userEvent.tab()
    await expect(canvas.getByRole('group')).not.toContainElement(document.activeElement as HTMLElement)
  },
}

/** Several at once: filters that combine. */
export const Multiple: Story = {
  args: { multiple: true, 'aria-label': 'Status', defaultValue: ['open'] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleButton value="open">Open</ToggleButton>
      <ToggleButton value="pending">Pending</ToggleButton>
      <ToggleButton value="closed">Closed</ToggleButton>
    </ToggleGroup>
  ),
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Pending' }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['open', 'pending'])
    await expect(canvas.getByRole('button', { name: 'Open' })).toHaveAttribute('aria-pressed', 'true')
    // In a multiple group every toggle can be released, down to none.
    await userEvent.click(canvas.getByRole('button', { name: 'Open' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Pending' }))
    await expect(args.onValueChange).toHaveBeenLastCalledWith([])
  },
}

/** Button group: related actions joined into one bar. Nothing stays pressed. */
export const Actions: Story = {
  render: () => periods,
  play: async ({ canvas, userEvent }) => {
    const group = canvas.getByRole('group', { name: 'Period' })
    // Unlike a toggle group, Tab stops on each button in turn.
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Years' })).toHaveFocus()
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Months' })).toHaveFocus()
    // Nothing stays pressed.
    for (const button of canvas.getAllByRole('button')) {
      await expect(group).toContainElement(button)
      await expect(button).not.toHaveAttribute('aria-pressed')
      await expect(button).not.toHaveAttribute('tabindex', '-1')
    }
  },
}

/** Icon-only buttons each need their own `aria-label`. */
export const IconOnly: Story = {
  render: () => pages,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Previous' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Next' })).toBeVisible()
  },
}

/** Icon-only toggles each need their own `aria-label`. */
export const IconToggles: Story = {
  args: { 'aria-label': 'Layout' },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleButton value="list" isIconOnly aria-label="List" appearance="outlined" variant="secondary">
        <Icon name="menu" />
      </ToggleButton>
      <ToggleButton value="calendar" isIconOnly aria-label="Calendar" appearance="outlined" variant="secondary">
        <Icon name="calendar" />
      </ToggleButton>
    </ToggleGroup>
  ),
  play: async ({ canvas, userEvent }) => {
    const calendar = canvas.getByRole('button', { name: 'Calendar' })
    await userEvent.click(calendar)
    await expect(calendar).toHaveAttribute('aria-pressed', 'true')
    await expect(canvas.getByRole('button', { name: 'List' })).toHaveAttribute('aria-pressed', 'false')
  },
}

/** The size is each button's own; the group only joins them. */
export const Sizes: Story = {
  render: (args) => (
    <div style={grid}>
      {(['sm', 'md'] as const).map((size) => (
        <ToggleGroup key={size} {...args} aria-label={`View, ${size}`}>
          <ToggleButton size={size} value="list">List</ToggleButton>
          <ToggleButton size={size} value="board">Board</ToggleButton>
          <ToggleButton size={size} value="calendar">Calendar</ToggleButton>
        </ToggleGroup>
      ))}
    </div>
  ),
}

/** Controlled: the parent owns the value. */
export const Controlled: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(['board'])
    return (
      <div style={grid}>
        <ToggleGroup {...args} defaultValue={undefined} value={value} onValueChange={setValue}>
          {views}
        </ToggleGroup>
        <span>Showing {value.join(', ')}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Calendar' }))
    await expect(canvas.getByText('Showing calendar')).toBeVisible()
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => <ToggleGroup {...args}>{views}</ToggleGroup>,
  play: async ({ canvas }) => {
    for (const toggle of canvas.getAllByRole('button')) await expect(toggle).toBeDisabled()
  },
}

/** Every form on one canvas, for the visual baseline. */
export const Matrix: Story = {
  render: (args) => (
    <div style={grid}>
      <ToggleGroup {...args}>{views}</ToggleGroup>
      <ToggleGroup {...args} aria-label="Status" multiple defaultValue={['open', 'closed']}>
        <ToggleButton appearance="outlined" variant="secondary" value="open">Open</ToggleButton>
        <ToggleButton appearance="outlined" variant="secondary" value="pending">Pending</ToggleButton>
        <ToggleButton appearance="outlined" variant="secondary" value="closed">Closed</ToggleButton>
      </ToggleGroup>
      {periods}
      {pages}
    </div>
  ),
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: '[role="group"]', description: 'Joins the buttons: inner corners square, borders shared.' },
  { name: 'Button', selector: 'button:not([aria-pressed="true"])', description: 'A ToggleButton (or a Button in ButtonGroup), with a label or an icon.' },
  { name: 'Selected', selector: 'button[aria-pressed="true"]', description: 'The pressed toggle: one at a time, or several with `multiple`.' },
]

/** One pressed and one not, so the docs can point at each. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { defaultValue: ['board'] },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleButton value="list">List</ToggleButton>
      <ToggleButton value="board">Board</ToggleButton>
    </ToggleGroup>
  ),
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[2]).toHaveTextContent('Board')
  },
}

/** Guidelines, Do: one look across the group, so only the pressed one stands out. */
export const DoSameLook: Story = {
  render: (args) => <ToggleGroup {...args}>{views}</ToggleGroup>,
}

/** Guidelines, Don't: a different variant per button reads as several states at once. */
export const DontMixLooks: Story = {
  tags: ['!dev'],
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleButton value="list">List</ToggleButton>
      <ToggleButton value="board" variant="destructive">Board</ToggleButton>
      <ToggleButton value="calendar" appearance="ghost">Calendar</ToggleButton>
    </ToggleGroup>
  ),
}
