import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, userEvent } from 'storybook/test'
import { Button } from '../buttons/Button'
import { Alert } from './Alert'
import { mediaRules } from '@/test/story-helpers'

const meta = {
  title: 'Components/Notifications/Alert',
  tags: ['beta'],
  component: Alert,
  args: {
    title: 'Payment method expiring',
    children: 'The card ending in 4242 expires at the end of this month. Update it to avoid an interruption.',
  },
  // Every prop is described here: these are the docs' API table and the
  // Playground's props panel.
  argTypes: {
    variant: {
      description: 'Colour by meaning. `danger` and `warning` also decide how `isLive` announces it.',
      control: 'inline-radio',
      options: ['info', 'success', 'warning', 'danger'],
      table: { type: { summary: "'info' | 'success' | 'warning' | 'danger'" }, defaultValue: { summary: "'info'" } },
    },
    appearance: {
      description: 'Emphasis, the same three as Tag: `subtle` tint, `outlined` border, `solid` fill.',
      control: 'inline-radio',
      options: ['subtle', 'outlined', 'solid'],
      table: { type: { summary: "'subtle' | 'outlined' | 'solid'" }, defaultValue: { summary: "'subtle'" } },
    },
    title: {
      description: 'Optional, semibold. What happened, in a few words.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    children: {
      description: 'The description: what it means and what to do.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    icon: {
      description: "Replaces the variant's icon; `false` shows none. Decorative: hidden from screen readers.",
      control: false,
      table: { type: { summary: 'ReactNode | false' }, defaultValue: { summary: "the variant's icon" } },
    },
    action: {
      description: 'Buttons or links under the description, e.g. "Retry".',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    onClose: {
      description: 'Shows a close button that calls this. The alert does not hide itself: remove it when this fires.',
      control: false,
      table: { type: { summary: '(event: MouseEvent) => void' } },
    },
    closeLabel: {
      description: "The close button's accessible name.",
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Dismiss'" } },
    },
    isLive: {
      description: 'Announce it when it appears: `danger` and `warning` interrupt (`role="alert"`), the others wait (`role="status"`). Off for an alert that is on the page from the start.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  excludeStories: ['anatomyParts'],
  decorators: [(Story) => <div style={{ maxInlineSize: '36rem' }}>{Story()}</div>],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

const stack = { display: 'grid', gap: 'var(--space-3)' }
const variants = ['info', 'success', 'warning', 'danger'] as const

/** The computed value of `--ring`, resolved the same way an outline colour is. */
const ringColour = (host: Element) => {
  const probe = document.createElement('span')
  probe.style.color = 'var(--ring)'
  host.append(probe)
  const colour = getComputedStyle(probe).color
  probe.remove()
  return colour
}

export const Default: Story = {
  play: async ({ canvasElement }) => {
    // Static by default: no live-region role, so a screen reader does not
    // interrupt the page load to read it.
    await expect(canvasElement.querySelector('[role]')).toBeNull()
  },
}

export const Variants: Story = {
  render: (args) => (
    <div style={stack}>
      {variants.map((variant) => (
        <Alert key={variant} {...args} variant={variant} title={`${variant[0].toUpperCase()}${variant.slice(1)}`} />
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    // Every variant's icon is decorative: the words carry the meaning.
    const icons = Array.from(canvasElement.querySelectorAll('svg'))
    await expect(icons).toHaveLength(variants.length)
    for (const icon of icons) await expect(icon.closest('[aria-hidden="true"]')).not.toBeNull()
  },
}

export const Appearances: Story = {
  render: (args) => (
    <div style={stack}>
      {(['subtle', 'outlined', 'solid'] as const).map((appearance) =>
        variants.map((variant) => (
          <Alert key={appearance + variant} {...args} appearance={appearance} variant={variant} title={`${appearance} ${variant}`}>
            {undefined}
          </Alert>
        )),
      )}
    </div>
  ),
}

export const WithAction: Story = {
  args: {
    variant: 'danger',
    title: 'Upload failed',
    children: 'The connection dropped at 64%. Nothing was saved.',
    action: (
      <>
        <Button size="sm" variant="destructive">
          Retry
        </Button>
        <Button size="sm" variant="accent" appearance="ghost">
          View details
        </Button>
      </>
    ),
  },
}

export const Dismissible: Story = {
  args: { onClose: fn(), variant: 'success', title: 'Profile saved', children: undefined },
  render: function Render(args) {
    const [open, setOpen] = useState(true)
    return open ? (
      <Alert
        {...args}
        onClose={(e) => {
          args.onClose?.(e)
          setOpen(false)
        }}
      />
    ) : (
      <p>Dismissed.</p>
    )
  },
  play: async ({ args, canvas, canvasElement }) => {
    const close = canvas.getByRole('button', { name: 'Dismiss' })
    await userEvent.tab()
    await expect(close).toHaveFocus()
    // Keyboard focus shows the 2px ring in --ring.
    const { outlineStyle, outlineWidth, outlineColor } = getComputedStyle(close)
    await expect([outlineStyle, outlineWidth, outlineColor]).toEqual(['solid', '2px', ringColour(canvasElement)])
    // A 44px touch target on coarse pointers.
    await expect(mediaRules('pointer: coarse', close, '::before').map((r) => [r.style.inlineSize, r.style.blockSize])[0]).toEqual(['var(--target-coarse)', 'var(--target-coarse)'])
    await userEvent.keyboard('{Enter}')
    await expect(args.onClose).toHaveBeenCalledOnce()
    await expect(canvas.getByText('Dismissed.')).toBeVisible()
  },
}

/** Announced when it appears: danger and warning interrupt, info and success wait. */
export const Live: Story = {
  render: function Render(args) {
    const [shown, setShown] = useState<'danger' | 'success' | null>(null)
    return (
      <div style={stack}>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button size="sm" appearance="outlined" onClick={() => setShown('danger')}>
            Fail
          </Button>
          <Button size="sm" appearance="outlined" onClick={() => setShown('success')}>
            Succeed
          </Button>
        </div>
        {shown === 'danger' && <Alert {...args} isLive variant="danger" title="Could not save" children="Try again in a minute." />}
        {shown === 'success' && <Alert {...args} isLive variant="success" title="Saved" children={undefined} />}
      </div>
    )
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Fail' }))
    await expect(canvas.getByRole('alert')).toHaveTextContent('Could not save')
    await userEvent.click(canvas.getByRole('button', { name: 'Succeed' }))
    await expect(canvas.getByRole('status')).toHaveTextContent('Saved')
  },
}

/** Which role each variant gets with `isLive`: danger and warning interrupt, info and success wait. */
export const LiveRoles: Story = {
  render: (args) => (
    <div style={stack}>
      {variants.map((variant) => (
        <Alert key={variant} {...args} isLive variant={variant} title={variant}>
          {undefined}
        </Alert>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('alert').map((el) => el.textContent)).toEqual(['warning', 'danger'])
    await expect(canvas.getAllByRole('status').map((el) => el.textContent)).toEqual(['info', 'success'])
  },
}

/** `closeLabel` renames the close button. */
export const CloseLabel: Story = {
  args: { onClose: fn(), closeLabel: 'Hide this notice' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Hide this notice' })).toBeVisible()
    await expect(canvas.queryByRole('button', { name: 'Dismiss' })).toBeNull()
  },
}

export const WithoutIcon: Story = {
  args: { icon: false, title: undefined, children: 'Maintenance is scheduled for Sunday, 02:00–03:00 UTC.' },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('svg')).toBeNull()
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
const root = 'div:has(> button[aria-label="Dismiss"])'
export const anatomyParts = [
  { name: 'Container', selector: root, description: 'The box: tint, border or fill, from variant × appearance.' },
  { name: 'Icon', selector: `${root} > span`, description: "The variant's filled icon, one line tall. Replaceable, or none." },
  { name: 'Title', selector: `${root} > div > div:nth-child(1)`, description: 'Optional, semibold. What happened.' },
  { name: 'Description', selector: `${root} > div > div:nth-child(2)`, description: '`children`: what it means and what to do.' },
  { name: 'Action', selector: `${root} > div > div:nth-child(3)`, description: 'Optional buttons or links.' },
  { name: 'Close button', selector: `${root} > button`, description: 'Shown when `onClose` is given.' },
]

/** Every part present. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: {
    variant: 'danger',
    title: 'Upload failed',
    children: 'The connection dropped at 64%. Nothing was saved.',
    onClose: fn(),
    action: (
      <Button size="sm" variant="destructive">
        Retry
      </Button>
    ),
  },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[2]).toHaveTextContent('Upload failed')
    await expect(found[4]).toHaveTextContent('Retry')
  },
}

/** Guidelines, Do: the title says what happened, the description what to do next. */
export const DoSayWhatHappened: Story = {
  args: {
    variant: 'danger',
    title: 'Upload failed',
    children: 'The connection dropped at 64%. Nothing was saved.',
    action: (
      <Button size="sm" variant="destructive">
        Retry
      </Button>
    ),
  },
}

/** Guidelines, Don't: a vague message leans on the red box, and leaves no way forward. */
export const DontVague: Story = {
  tags: ['!dev'],
  args: { variant: 'danger', title: 'Error', children: 'Something went wrong.' },
}
