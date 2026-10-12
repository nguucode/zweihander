import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Atomic Elements/Badge',
  tags: ['beta'],
  component: Badge,
  args: { count: 8 },
  // Every prop is listed by hand, with its type and default: these
  // descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    count: {
      description: 'The number shown. Nothing renders without `count` or `isDot`. `0` shows "0".',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    variant: {
      description:
        'Colour. `accent` is the inverted neutral. For presence: `success` Online, `warning` Away, `destructive` Busy, `secondary` Offline.',
      control: 'inline-radio',
      options: ['primary', 'accent', 'secondary', 'destructive', 'success', 'warning'],
      table: {
        type: { summary: "'primary' | 'accent' | 'secondary' | 'destructive' | 'success' | 'warning'" },
        defaultValue: { summary: "'primary'" },
      },
    },
    size: {
      description: '16px (`sm`) or 20px (`md`) tall. Dots are 6px and 8px.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    isDot: {
      description: 'A dot with no number: "something new", not "how many". Hidden from assistive tech unless it has `aria-label`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    maxCount: {
      description: 'Counts above this show as `maxCount+`, e.g. `99+`, so a large number does not stretch the badge.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    isFloating: {
      description: 'Pins the badge to a corner of `children`, with a ring in the page colour. Hidden from assistive tech.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    floatingPlacement: {
      description: 'The corner a floating badge sits on. Start and end are physical: left and right.',
      control: 'inline-radio',
      options: ['top-start', 'top-end', 'bottom-start', 'bottom-end'],
      table: {
        type: { summary: "'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'" },
        defaultValue: { summary: "'top-end'" },
      },
    },
    children: {
      description: 'The element a floating badge is pinned to. Put the meaning in its name, e.g. "Notifications, 4 unread".',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    'aria-label': {
      description: 'Exposes the badge as an image with this name, e.g. "Online" on a status dot.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

const row = { display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('8')).toBeVisible()
  },
}

const variants = ['primary', 'accent', 'secondary', 'destructive', 'success', 'warning'] as const

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
      <div style={row}>
        {variants.map((v) => <Badge key={v} {...args} variant={v} />)}
      </div>
      <div style={row}>
        {variants.map((v) => <Badge key={v} {...args} isDot variant={v} />)}
      </div>
    </div>
  ),
}

/** Presence on an avatar: a labelled dot per state. */
export const Status: Story = {
  args: { isDot: true },
  render: (args) => (
    <div style={row}>
      <Badge {...args} variant="success" aria-label="Online" />
      <Badge {...args} variant="warning" aria-label="Away" />
      <Badge {...args} variant="destructive" aria-label="Busy" />
      <Badge {...args} variant="secondary" aria-label="Offline" />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('img', { name: 'Online' })).toBeVisible()
  },
}

export const Sizes: Story = {
  args: { count: 3 },
  render: (args) => (
    <div style={row}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="sm" isDot />
      <Badge {...args} size="md" isDot />
    </div>
  ),
  play: async ({ canvas }) => {
    const [sm, md] = canvas.getAllByText('3')
    await expect(sm.getBoundingClientRect().height).toBe(16)
    await expect(md.getBoundingClientRect().height).toBe(20)
    // A single digit stays a circle, not an oval.
    await expect(md.getBoundingClientRect().width).toBe(20)
  },
}

export const MaxCount: Story = {
  args: { count: 120, maxCount: 99, variant: 'destructive' },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('99+')).toBeVisible()
  },
}

export const Dot: Story = {
  args: { isDot: true },
  play: async ({ canvasElement }) => {
    // Unlabelled, a dot is decoration and is hidden from assistive tech.
    await expect(canvasElement.querySelector('span')).toHaveAttribute('aria-hidden', 'true')
  },
}

export const LabelledDot: Story = {
  args: { isDot: true, 'aria-label': 'Online', variant: 'success' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('img', { name: 'Online' })).toBeVisible()
  },
}

export const LabelledCount: Story = {
  args: { count: 3, 'aria-label': '3 unread messages' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('img', { name: '3 unread messages' })).toBeVisible()
  },
}

export const Inline: Story = {
  args: { count: 12 },
  render: (args) => (
    <Button variant="secondary">
      Inbox <Badge {...args} />
    </Button>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toHaveAccessibleName('Inbox 12')
  },
}

export const Floating: Story = {
  args: { count: 4, isFloating: true, variant: 'destructive' },
  render: (args) => (
    <div style={{ ...row, gap: 'var(--space-12)', padding: 'var(--space-6)' }}>
      {(['top-start', 'top-end', 'bottom-start', 'bottom-end'] as const).map((p) => (
        <Badge key={p} {...args} floatingPlacement={p}>
          <Button variant="secondary">{p}</Button>
        </Badge>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /^top-end/ }).getBoundingClientRect()
    const badge = canvas.getAllByText('4')[1].getBoundingClientRect()
    // Hidden: read after the button it would be a stray "4".
    await expect(canvas.getAllByText('4')[1]).toHaveAttribute('aria-hidden', 'true')
    // Centred on the button's top-right corner.
    await expect(Math.round(badge.left + badge.width / 2)).toBe(Math.round(button.right))
    await expect(Math.round(badge.top + badge.height / 2)).toBe(Math.round(button.top))
  },
}

export const FloatingDot: Story = {
  args: { isDot: true, isFloating: true, variant: 'destructive' },
  render: (args) => (
    <div style={{ padding: 'var(--space-4)' }}>
      <Badge {...args}>
        <Button variant="secondary">Notifications</Button>
      </Badge>
    </div>
  ),
}

/** Zero is a count like any other: hide the badge yourself if nothing new means none. */
export const Zero: Story = {
  args: { count: 0 },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('0')).toBeVisible()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Anchor', selector: 'span:has(> button)', description: 'Wraps the element a floating badge pins to.' },
  { name: 'Container', selector: 'button + span', description: 'The pill and its count, in tabular figures. Past maxCount, a "+" follows. Floating, it gets a ring in the page colour.' },
  { name: 'Dot', selector: 'span:has(> button) + span', description: 'The container with no count: something new, not how many.' },
]

/** A floating count past maxCount, and a dot, so every part is on screen. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { count: 120, maxCount: 99, isFloating: true, variant: 'destructive' },
  render: (args) => (
    <div style={{ ...row, gap: 'var(--space-8)', padding: 'var(--space-4)' }}>
      <Badge {...args}>
        <Button variant="secondary">Inbox</Button>
      </Badge>
      <Badge isDot variant="success" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[1]).toHaveTextContent('99+')
    await expect(found[2]).toBeEmptyDOMElement()
  },
}

/** Guidelines, Do: the anchor's name carries the count the floating badge shows. */
export const DoNameTheAnchor: Story = {
  args: { count: 4, isFloating: true, variant: 'destructive' },
  render: (args) => (
    <div style={{ padding: 'var(--space-4)' }}>
      <Badge {...args}>
        <Button variant="secondary" aria-label="Notifications, 4 unread">
          Notifications
        </Button>
      </Badge>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toHaveAccessibleName('Notifications, 4 unread')
  },
}

/** Guidelines, Don't: the floating badge is hidden, so a screen reader never hears the count. */
export const DontCountOnlyInBadge: Story = {
  tags: ['!dev'],
  args: { count: 4, isFloating: true, variant: 'destructive' },
  render: (args) => (
    <div style={{ padding: 'var(--space-4)' }}>
      <Badge {...args}>
        <Button variant="secondary">Notifications</Button>
      </Badge>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toHaveAccessibleName('Notifications')
  },
}
