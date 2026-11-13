import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, within } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { Tooltip } from '../overlays/Tooltip'
import { ButtonGroup } from './ButtonGroup'
import { ToggleButton } from './ToggleButton'

const meta = {
  title: 'Components/Buttons/ButtonGroup',
  tags: ['beta'],
  component: ButtonGroup,
  // Listed by hand so the API table and the Playground carry the same words.
  argTypes: {
    type: {
      description: '`separate`: ToggleButtons 4px apart. `joined`: one bar, inner corners square, borders shared.',
      control: 'inline-radio',
      options: ['separate', 'joined'],
      table: { type: { summary: "'separate' | 'joined'" }, defaultValue: { summary: "'separate'" } },
    },
    value: {
      description: 'Controlled: the `value` of the ToggleButton that is on. Pair with `onValueChange`.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'Uncontrolled: the value on at first.',
      control: false,
      table: { type: { summary: 'string' } },
    },
    onValueChange: {
      description: 'Called with the value of the ToggleButton just turned on. Pressing the one that is on again does nothing.',
      control: false,
      table: { type: { summary: '(value: string) => void' } },
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
      description: 'ToggleButtons, each with a `value`.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
  },
  args: { 'aria-label': 'View', defaultValue: 'list', onValueChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

const grid = { display: 'grid', gap: 'var(--space-3)', justifyItems: 'start' }

const views = (
  <>
    <ToggleButton value="list" appearance="outlined">List</ToggleButton>
    <ToggleButton value="board" appearance="outlined">Board</ToggleButton>
    <ToggleButton value="calendar" appearance="outlined">Calendar</ToggleButton>
  </>
)

const joinedViews = (
  <>
    <ToggleButton value="list">List</ToggleButton>
    <ToggleButton value="board">Board</ToggleButton>
    <ToggleButton value="calendar">Calendar</ToggleButton>
  </>
)

/** Separate: outlined ToggleButtons 4px apart, exactly one on. */
export const Default: Story = {
  render: (args) => <ButtonGroup {...args}>{views}</ButtonGroup>,
  play: async ({ canvas, userEvent, args }) => {
    await expect(canvas.getByRole('group', { name: 'View' })).toBeVisible()
    const list = canvas.getByRole('button', { name: 'List' })
    const board = canvas.getByRole('button', { name: 'Board' })
    const calendar = canvas.getByRole('button', { name: 'Calendar' })
    await expect(list).toHaveAttribute('aria-pressed', 'true')
    // Separate: exactly the gap between neighbours, no overlap.
    await expect(board.getBoundingClientRect().left - list.getBoundingClientRect().right).toBe(4)
    // Pressing another releases the first.
    await userEvent.click(board)
    await expect(board).toHaveAttribute('aria-pressed', 'true')
    await expect(list).toHaveAttribute('aria-pressed', 'false')
    await expect(args.onValueChange).toHaveBeenLastCalledWith('board')
    // Pressing the one that is on again keeps it: the group always has an answer.
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
    // Arrows only move focus; Space or Enter turns one on.
    await expect(list).toHaveAttribute('aria-pressed', 'false')
    await userEvent.keyboard(' ')
    await expect(list).toHaveAttribute('aria-pressed', 'true')
    await userEvent.tab()
    await expect(canvas.getByRole('group')).not.toContainElement(document.activeElement as HTMLElement)
  },
}

/** Joined: one bar, the toggle that is on raised over its neighbours. */
export const Joined: Story = {
  args: { type: 'joined' },
  render: (args) => <ButtonGroup {...args}>{joinedViews}</ButtonGroup>,
  play: async ({ canvas }) => {
    const [list, board] = canvas.getAllByRole('button')
    // Each toggle after the first overlaps the one before by its 1px border.
    await expect(board.getBoundingClientRect().left - list.getBoundingClientRect().right).toBe(-1)
    await expect(getComputedStyle(list).borderStartEndRadius).toBe('0px')
    await expect(getComputedStyle(list).zIndex).toBe('1')
  },
}

/** Icon-only toggles each need their own `aria-label`. */
export const IconToggles: Story = {
  args: { 'aria-label': 'Layout' },
  render: (args) => (
    <ButtonGroup {...args}>
      <ToggleButton value="list" isIconOnly aria-label="List" appearance="outlined" variant="secondary">
        <Icon name="menu" />
      </ToggleButton>
      <ToggleButton value="calendar" isIconOnly aria-label="Calendar" appearance="outlined" variant="secondary">
        <Icon name="calendar" />
      </ToggleButton>
    </ButtonGroup>
  ),
  play: async ({ canvas, userEvent }) => {
    const calendar = canvas.getByRole('button', { name: 'Calendar' })
    await userEvent.click(calendar)
    await expect(calendar).toHaveAttribute('aria-pressed', 'true')
    await expect(canvas.getByRole('button', { name: 'List' })).toHaveAttribute('aria-pressed', 'false')
  },
}

/** A Tooltip merges onto its toggle rather than wrapping it, so the group still holds only its toggles. */
export const WithTooltips: Story = {
  args: { 'aria-label': 'Layout' },
  render: (args) => (
    <ButtonGroup {...args}>
      <Tooltip content="List">
        <ToggleButton value="list" isIconOnly aria-label="List" appearance="outlined" variant="secondary">
          <Icon name="menu" />
        </ToggleButton>
      </Tooltip>
      <Tooltip content="Calendar">
        <ToggleButton value="calendar" isIconOnly aria-label="Calendar" appearance="outlined" variant="secondary">
          <Icon name="calendar" />
        </ToggleButton>
      </Tooltip>
    </ButtonGroup>
  ),
  play: async ({ canvas, userEvent }) => {
    const group = canvas.getByRole('group', { name: 'Layout' })
    const [list, calendar] = [canvas.getByRole('button', { name: 'List' }), canvas.getByRole('button', { name: 'Calendar' })]
    await expect([...group.children]).toEqual([list, calendar])
    // Opening a tooltip adds nothing inside the group.
    await userEvent.tab()
    await within(document.body).findByRole('tooltip', {}, { timeout: 300 })
    await expect([...group.children]).toEqual([list, calendar])
  },
}

/** The size is each toggle's own; the group only places them. */
export const Sizes: Story = {
  render: (args) => (
    <div style={grid}>
      {(['separate', 'joined'] as const).flatMap((type) =>
        (['sm', 'md'] as const).map((size) => (
          <ButtonGroup key={type + size} {...args} type={type} aria-label={`View, ${type}, ${size}`}>
            <ToggleButton size={size} value="list" appearance={type === 'separate' ? 'outlined' : undefined}>List</ToggleButton>
            <ToggleButton size={size} value="board" appearance={type === 'separate' ? 'outlined' : undefined}>Board</ToggleButton>
            <ToggleButton size={size} value="calendar" appearance={type === 'separate' ? 'outlined' : undefined}>Calendar</ToggleButton>
          </ButtonGroup>
        )),
      )}
    </div>
  ),
  play: async ({ canvas }) => {
    for (const [size, height] of [['sm', 24], ['md', 32]] as const) {
      for (const type of ['separate', 'joined']) {
        const group = canvas.getByRole('group', { name: `View, ${type}, ${size}` })
        for (const button of within(group).getAllByRole('button')) await expect(button.getBoundingClientRect().height).toBe(height)
      }
    }
  },
}

/** Controlled: the parent owns the value. */
export const Controlled: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('board')
    return (
      <div style={grid}>
        <ButtonGroup {...args} defaultValue={undefined} value={value} onValueChange={setValue}>
          {views}
        </ButtonGroup>
        <span>Showing {value}</span>
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
  render: (args) => <ButtonGroup {...args}>{views}</ButtonGroup>,
  play: async ({ canvas }) => {
    for (const toggle of canvas.getAllByRole('button')) await expect(toggle).toBeDisabled()
  },
}

/** Every form on one canvas, for the visual baseline. */
export const Matrix: Story = {
  render: (args) => (
    <div style={grid}>
      <ButtonGroup {...args}>{views}</ButtonGroup>
      <ButtonGroup {...args} type="joined">{joinedViews}</ButtonGroup>
      <ButtonGroup {...args} type="joined" aria-label="Layout" defaultValue="calendar">
        <ToggleButton value="list" isIconOnly aria-label="List" appearance="outlined" variant="secondary">
          <Icon name="menu" />
        </ToggleButton>
        <ToggleButton value="calendar" isIconOnly aria-label="Calendar" appearance="outlined" variant="secondary">
          <Icon name="calendar" />
        </ToggleButton>
      </ButtonGroup>
    </div>
  ),
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: '[role="group"]', description: 'Separate spaces its toggles 4px apart; joined makes one bar, inner corners square, borders shared.' },
  { name: 'Button', selector: 'button:not([aria-pressed="true"])', description: 'A ToggleButton, with a label or an icon.' },
  { name: 'Selected', selector: 'button[aria-pressed="true"]', description: 'The toggle that is on: exactly one.' },
]

/** One on and one off, so the docs can point at each. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { defaultValue: 'board' },
  render: (args) => (
    <ButtonGroup {...args}>
      <ToggleButton value="list" appearance="outlined">List</ToggleButton>
      <ToggleButton value="board" appearance="outlined">Board</ToggleButton>
    </ButtonGroup>
  ),
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[2]).toHaveTextContent('Board')
  },
}

/** Guidelines, Do: one look across the group, so only the one that is on stands out. */
export const DoSameLook: Story = {
  render: (args) => <ButtonGroup {...args}>{views}</ButtonGroup>,
}

/** Guidelines, Don't: a different variant per toggle reads as several states at once. */
export const DontMixLooks: Story = {
  tags: ['!dev'],
  render: (args) => (
    <ButtonGroup {...args}>
      <ToggleButton value="list" appearance="outlined">List</ToggleButton>
      <ToggleButton value="board" variant="destructive">Board</ToggleButton>
      <ToggleButton value="calendar" appearance="ghost">Calendar</ToggleButton>
    </ButtonGroup>
  ),
}
