import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { Switch } from './Switch'

const meta = {
  title: 'Components/Controls/Switch',
  tags: ['beta'],
  component: Switch,
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    checked: {
      description: 'Controlled state. Pair with `onCheckedChange`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultChecked: {
      description: 'Starting state when uncontrolled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onCheckedChange: {
      description: 'Called with the new state on click and Space. The setting should take effect here, not on Submit.',
      control: false,
      table: { type: { summary: '(checked: boolean) => void' } },
    },
    label: {
      description: 'Names the setting. Clicking it toggles the switch.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    helperText: {
      description: 'Under the label: the description, or the error message when `validationState` is `error`.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    size: {
      description: 'Track 28×16 (`sm`), 36×20 (`md`) or 44×24px (`lg`).',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: { type: { summary: "'sm' | 'md' | 'lg'" }, defaultValue: { summary: "'md'" } },
    },
    variant: {
      description: 'Colour of the on state. `accent` is the inverted neutral; `destructive` for a setting that is risky to turn on.',
      control: 'inline-radio',
      options: ['primary', 'accent', 'destructive'],
      table: { type: { summary: "'primary' | 'accent' | 'destructive'" }, defaultValue: { summary: "'primary'" } },
    },
    validationState: {
      description: '`error` sets `aria-invalid`, draws a red edge inside the track and turns the helper red; `success` turns the helper green.',
      control: 'inline-radio',
      options: ['default', 'success', 'error'],
      table: { type: { summary: "'default' | 'success' | 'error'" }, defaultValue: { summary: "'default'" } },
    },
    name: {
      description: 'Submitted with a form, when on.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    value: {
      description: 'Submitted under `name` when on, like a checkbox.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'on'" } },
    },
    disabled: {
      description: 'Dimmed, and cannot be changed.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      description: 'Must be on to submit. Adds an asterisk to the label.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'Focusable and submitted, but cannot be changed.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: { label: 'Email notifications', onCheckedChange: fn() },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

const stack = { display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const control = canvas.getByRole('switch', { name: 'Email notifications' })
    await expect(control).toHaveAttribute('aria-checked', 'false')
    await userEvent.click(control)
    await expect(control).toHaveAttribute('aria-checked', 'true')
    await expect(args.onCheckedChange).toHaveBeenLastCalledWith(true)
    // Clicking the label toggles it too.
    await userEvent.click(canvas.getByText('Email notifications'))
    await expect(control).toHaveAttribute('aria-checked', 'false')
    // Space toggles from the keyboard.
    await userEvent.keyboard(' ')
    await expect(control).toHaveAttribute('aria-checked', 'true')
  },
}

export const Variants: Story = {
  render: (args) => (
    <div style={stack}>
      {(['primary', 'accent', 'destructive'] as const).map((variant) => (
        <Switch key={variant} {...args} variant={variant} label={variant} defaultChecked />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div style={stack}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Switch key={size} {...args} size={size} label={size} defaultChecked />
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    const widths = ['sm', 'md', 'lg'].map(
      (n) => canvas.getByRole('switch', { name: n }).getBoundingClientRect().width,
    )
    await expect(widths).toEqual([28, 36, 44])
  },
}

export const WithHelperText: Story = {
  args: { helperText: 'A summary once a day, never more.' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('switch')).toHaveAccessibleDescription('A summary once a day, never more.')
  },
}

export const Validation: Story = {
  render: (args) => (
    <div style={stack}>
      <Switch {...args} label="Accept the terms" validationState="error" helperText="Required to continue." required />
      <Switch {...args} label="Backups" validationState="success" helperText="Backups are on." defaultChecked />
    </div>
  ),
  play: async ({ canvas }) => {
    const terms = canvas.getByRole('switch', { name: /Accept the terms/ })
    await expect(terms).toHaveAttribute('aria-invalid', 'true')
    await expect(terms).toHaveAccessibleDescription('Required to continue.')
  },
}

export const RightToLeft: Story = {
  args: { defaultChecked: true },
  render: (args) => (
    <div dir="rtl" style={{ display: 'grid', gap: 'var(--space-3)', justifyItems: 'start' }}>
      <Switch {...args} label="Right to left" />
      {/* A left-to-right island inside a right-to-left page. */}
      <div dir="ltr">
        <Switch {...args} label="Left to right" />
      </div>
    </div>
  ),
  play: async ({ canvas }) => {
    const gaps = (name: string) => {
      const sw = canvas.getByRole('switch', { name })
      const track = sw.getBoundingClientRect()
      const thumb = sw.firstElementChild!.getBoundingClientRect()
      return { start: thumb.left - track.left, end: track.right - thumb.right }
    }
    // On is the end side: the left in RTL, the right in LTR. The thumb stays inside.
    const rtl = gaps('Right to left')
    await expect(rtl.start).toBeGreaterThanOrEqual(0)
    await expect(rtl.start).toBeLessThan(rtl.end)
    const ltr = gaps('Left to right')
    await expect(ltr.end).toBeGreaterThanOrEqual(0)
    await expect(ltr.end).toBeLessThan(ltr.start)
  },
}

export const Disabled: Story = {
  render: (args) => (
    <div style={stack}>
      <Switch {...args} label="Off, disabled" disabled />
      <Switch {...args} label="On, disabled" disabled defaultChecked />
    </div>
  ),
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('switch', { name: 'Off, disabled' }))
    await expect(args.onCheckedChange).not.toHaveBeenCalled()
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true, defaultChecked: true },
  play: async ({ canvas, userEvent, args }) => {
    const control = canvas.getByRole('switch')
    await userEvent.click(control)
    await expect(control).toHaveAttribute('aria-checked', 'true')
    await expect(args.onCheckedChange).not.toHaveBeenCalled()
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [on, setOn] = useState(true)
    return (
      <div style={stack}>
        <Switch {...args} checked={on} onCheckedChange={setOn} />
        <span>{on ? 'Notifications on' : 'Notifications off'}</span>
      </div>
    )
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('switch'))
    await expect(canvas.getByText('Notifications off')).toBeVisible()
  },
}

/** Submits "on" under its name when on, like a native checkbox. */
export const InAForm: Story = {
  render: (args) => (
    <form aria-label="Settings">
      <Switch {...args} name="notify" defaultChecked />
    </form>
  ),
  play: async ({ canvasElement }) => {
    const data = new FormData(canvasElement.querySelector('form')!)
    await expect(data.get('notify')).toBe('on')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Track', selector: '[role="switch"]', description: 'The pill: `--control-border` when off, the variant’s solid when on.' },
  { name: 'Thumb', selector: '[role="switch"] > span', description: 'Slides to the end when on.' },
  { name: 'Label', selector: 'label > span:last-child', description: 'Names the setting. Part of the click target.' },
  { name: 'Helper text', selector: 'p', description: 'Optional. Indented under the label; the error message in the error state.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { defaultChecked: true, helperText: 'A summary once a day, never more.' },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[2]).toHaveTextContent('Email notifications')
  },
}

/** Guidelines, Do: a switch applies the setting the moment it is flipped. */
export const DoApplyAtOnce: Story = {
  args: { label: 'Dark mode', defaultChecked: true },
}

/** Guidelines, Don't: a switch that waits for a Save button. */
export const DontWaitForSave: Story = {
  tags: ['!dev'],
  render: (args) => (
    <form aria-label="Preferences" style={stack} onSubmit={(e) => e.preventDefault()}>
      <Switch {...args} label="Dark mode" defaultChecked />
      <Button type="submit" size="sm">
        Save
      </Button>
    </form>
  ),
}
