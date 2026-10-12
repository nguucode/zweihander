import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { ToggleButton } from './ToggleButton'

const meta = {
  title: 'Components/Buttons/ToggleButton',
  tags: ['beta'],
  component: ToggleButton,
  // Listed by hand: ToggleButtonProps is a union (icon-only needs
  // aria-label), and react-docgen reads no types from a union. These
  // descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    pressed: {
      description: 'Controlled pressed state. Pair with `onPressedChange`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultPressed: {
      description: 'Starting pressed state when uncontrolled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onPressedChange: {
      description: 'Called with the new state on click, Enter and Space.',
      control: false,
      table: { type: { summary: '(pressed: boolean) => void' } },
    },
    variant: {
      description: 'Colour of the pressed state. Unpressed is always neutral.',
      control: 'inline-radio',
      options: ['primary', 'accent', 'secondary', 'destructive'],
      table: { type: { summary: "'primary' | 'accent' | 'secondary' | 'destructive'" }, defaultValue: { summary: "'primary'" } },
    },
    appearance: {
      description: 'Style of the pressed state. Unpressed is `outlined`, or `ghost` when this is `ghost`.',
      control: 'inline-radio',
      options: ['contained', 'outlined', 'ghost'],
      table: { type: { summary: "'contained' | 'outlined' | 'ghost'" }, defaultValue: { summary: "'contained'" } },
    },
    size: {
      description: '24px (`sm`) or 32px (`md`) tall, as on Button.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    children: {
      description: 'The label. Keep it the same in both states: `aria-pressed` carries the state.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    startIcon: {
      description: 'Icon before the label. Decorative.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    endIcon: {
      description: 'Icon after the label. Decorative.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    isIconOnly: {
      description: 'Square, for an icon with no visible label. Requires `aria-label`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isLoading: {
      description: 'Shows a spinner and stops toggling, keeping focus.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isFullWidth: {
      description: 'Fills the width of its container.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Native `disabled`: dimmed and out of the tab order.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    value: {
      description: 'Identifies the toggle inside a group.',
      control: false,
      table: { type: { summary: 'string' } },
    },
  },
  args: { children: 'Subscribe', onPressedChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof ToggleButton>

export default meta
type Story = StoryObj<typeof meta>

const row = { display: 'flex', flexWrap: 'wrap' as const, gap: 'var(--space-3)', alignItems: 'center' }
const grid = { display: 'grid', gap: 'var(--space-3)' }

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const toggle = canvas.getByRole('button', { name: 'Subscribe' })
    await expect(toggle).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('aria-pressed', 'true')
    await expect(args.onPressedChange).toHaveBeenLastCalledWith(true)
    // Space and Enter both toggle, like any button.
    await userEvent.keyboard(' ')
    await expect(toggle).toHaveAttribute('aria-pressed', 'false')
    await userEvent.keyboard('{Enter}')
    await expect(toggle).toHaveAttribute('aria-pressed', 'true')
    // The name does not change with the state; aria-pressed carries it.
    await expect(toggle).toHaveAccessibleName('Subscribe')
  },
}

/** Each pair: unpressed, then pressed. Unpressed is always neutral. */
export const Matrix: Story = {
  render: (args) => (
    <div style={grid}>
      {(['contained', 'outlined', 'ghost'] as const).map((appearance) => (
        <div key={appearance} style={row}>
          {(['primary', 'accent', 'secondary', 'destructive'] as const).flatMap((variant) => [
            <ToggleButton key={`${variant}-off`} {...args} variant={variant} appearance={appearance}>
              {variant}
            </ToggleButton>,
            <ToggleButton key={`${variant}-on`} {...args} variant={variant} appearance={appearance} defaultPressed>
              {variant}
            </ToggleButton>,
          ])}
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div style={row}>
      {(['sm', 'md'] as const).map((size) => (
        <ToggleButton key={size} {...args} size={size} defaultPressed>
          {size}
        </ToggleButton>
      ))}
    </div>
  ),
}

export const IconOnly: Story = {
  args: { isIconOnly: true, 'aria-label': 'Favourite', children: <Icon name="star" />, appearance: 'ghost' },
  play: async ({ canvas, userEvent }) => {
    const toggle = canvas.getByRole('button', { name: 'Favourite' })
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('aria-pressed', 'true')
  },
}

export const WithIcon: Story = {
  args: { startIcon: <Icon name="star" />, children: 'Star', appearance: 'outlined', defaultPressed: true },
}

/** Controlled: the parent owns the state. */
export const Controlled: Story = {
  render: function Render(args) {
    const [on, setOn] = useState(false)
    return (
      <div style={row}>
        <ToggleButton {...args} pressed={on} onPressedChange={setOn}>
          Bold
        </ToggleButton>
        <span>{on ? 'Bold on' : 'Bold off'}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Bold' }))
    await expect(canvas.getByText('Bold on')).toBeVisible()
  },
}

export const FullWidth: Story = {
  args: { isFullWidth: true, defaultPressed: true },
  render: (args) => (
    <div style={{ inlineSize: '20rem' }}>
      <ToggleButton {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Subscribe' })).toBeDisabled()
  },
}

export const Loading: Story = {
  args: { isLoading: true },
  play: async ({ canvas, userEvent, args }) => {
    const toggle = canvas.getByRole('button', { name: 'Subscribe' })
    await expect(toggle).toHaveAttribute('aria-busy', 'true')
    // Focusable while busy, but pressing it does nothing.
    await userEvent.tab()
    await expect(toggle).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await userEvent.keyboard(' ')
    await expect(args.onPressedChange).not.toHaveBeenCalled()
    await expect(toggle).toHaveAttribute('aria-pressed', 'false')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: 'button', description: 'Neutral when unpressed; the pressed style comes from variant × appearance.' },
  { name: 'Icon', selector: 'button > span:first-child', description: 'The start or end icon. Decorative.' },
  { name: 'Label', selector: 'button > span:last-child', description: 'The text, kept the same in both states.' },
]

/** Pressed, with an icon, the label in its own element so the docs can point at it. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { startIcon: <Icon name="star" />, children: <span>Star</span>, defaultPressed: true },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[2]).toHaveTextContent('Star')
  },
}

/** Guidelines, Do: the label names the setting; `aria-pressed` says whether it is on. */
export const DoSameLabel: Story = {
  args: { children: 'Follow', defaultPressed: true },
}

/** Guidelines, Don't: a label that flips to the action reads as "Unfollow, pressed". */
export const DontSwitchLabel: Story = {
  tags: ['!dev'],
  args: { children: 'Unfollow', defaultPressed: true },
}
