import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '../buttons/Button'
import { TextInput } from '../inputs/TextInput'
import { Tooltip, TooltipGroup, type TooltipProps } from './Tooltip'
import styles from './Tooltip.module.css'

const meta = {
  title: 'Components/Overlays/Tooltip',
  tags: ['beta'],
  component: Tooltip,
  args: {
    content: 'Copy link',
    children: (
      <Button isIconOnly aria-label="Copy link" appearance="ghost" variant="accent">
        <Icon name="external" />
      </Button>
    ),
  },
  argTypes: {
    content: {
      description: 'What the tooltip says. Short: a label or a hint, never the only way to learn something essential.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    children: {
      description: 'The trigger: one focusable element, such as a Button. Tooltip merges its props onto it rather than wrapping it.',
      control: false,
      table: { type: { summary: 'ReactElement' } },
    },
    side: {
      description: 'Which side of the trigger it opens on. Flips when there is no room.',
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
      table: { type: { summary: "'top' | 'right' | 'bottom' | 'left'" }, defaultValue: { summary: "'top'" } },
    },
    align: {
      description: 'How it lines up with the trigger along that side.',
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
      table: { type: { summary: "'start' | 'center' | 'end'" }, defaultValue: { summary: "'center'" } },
    },
    delay: {
      description: 'Milliseconds of hover before it opens. Focus opens it at once.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '300' } },
    },
    closeDelay: {
      description: 'Milliseconds before it closes once the pointer leaves.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    open: {
      description: 'Controlled open state. Pair with `onOpenChange`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultOpen: {
      description: 'Open on first render, uncontrolled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      description: 'Called with the next open state.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    disabled: {
      description: 'Never open, e.g. while the trigger\'s label is already visible.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    container: {
      description: 'Where the tooltip renders instead of `<body>`, e.g. an element in fullscreen, where a tooltip in `<body>` would not show.',
      control: false,
      table: { type: { summary: 'HTMLElement | null' } },
    },
    className: {
      description: 'Added to the popup.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
  // Room for the tooltip to open into. A picture lays its popup out itself.
  decorators: [
    (Story, { parameters }) =>
      parameters.picture ? Story() : <div style={{ padding: 'var(--space-12)', display: 'flex', justifyContent: 'center' }}>{Story()}</div>,
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

// The popup is portalled to <body>, outside the story canvas.
const body = () => within(document.body)

export const Default: Story = {
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Copy link' })
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    // Focus opens it at once, without the 300ms hover delay.
    const tip = await body().findByRole('tooltip', {}, { timeout: 300 })
    await expect(tip).toHaveTextContent('Copy link')
    // Read as the trigger's description while it is open, not as its name.
    await expect(trigger).toHaveAttribute('aria-describedby', tip.id)
    await expect(trigger).toHaveAccessibleDescription('Copy link')
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull())
    await expect(trigger).not.toHaveAttribute('aria-describedby')
  },
}

/** Open from the start. Only one tooltip is open at a time, so this is the one on the docs page. */
export const LongContent: Story = {
  args: {
    content: 'Anyone with the link can view this file. Change it under Share → General access.',
    defaultOpen: true,
    children: <Button appearance="outlined">Link sharing on</Button>,
  },
  play: async ({ canvas }) => {
    // The tooltip describes the trigger; it does not rename it.
    const trigger = canvas.getByRole('button', { name: 'Link sharing on' })
    await expect(trigger).toHaveAccessibleDescription(
      'Anyone with the link can view this file. Change it under Share → General access.',
    )
  },
}

/** Hover opens it after `delay`; pointer leave closes it. */
export const Hover: Story = {
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Copy link' })
    await userEvent.hover(trigger)
    // Not yet: the 300ms delay is still running.
    await new Promise((r) => setTimeout(r, 100))
    await expect(body().queryByRole('tooltip')).toBeNull()
    await expect(await body().findByRole('tooltip')).toHaveTextContent('Copy link')
    await userEvent.unhover(trigger)
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull())
  },
}

/** Moving focus away closes it. */
export const Blur: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <Tooltip {...args} />
      <Button appearance="outlined">Next</Button>
    </div>
  ),
  play: async ({ canvas }) => {
    await userEvent.tab()
    await body().findByRole('tooltip', {}, { timeout: 300 })
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Next' })).toHaveFocus()
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull())
  },
}

/** Once one tooltip in a group is open, the next opens without the delay. */
export const Group: Story = {
  render: () => (
    <TooltipGroup>
      <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
        {(['plus', 'minus', 'search', 'more'] as const).map((name) => (
          <Tooltip key={name} content={name[0].toUpperCase() + name.slice(1)}>
            <Button isIconOnly aria-label={name} appearance="ghost" variant="accent">
              <Icon name={name} />
            </Button>
          </Tooltip>
        ))}
      </div>
    </TooltipGroup>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    await userEvent.tab()
    await expect(canvas.getByRole('button')).toHaveFocus()
    await new Promise((r) => setTimeout(r, 100))
    await expect(body().queryByRole('tooltip')).toBeNull()
  },
}

/**
 * The tooltip open in place, as a picture: rendered inside the story instead
 * of `<body>`, and inert, so a docs page can show several beside other
 * examples. The popup sits in the flow 6px above the trigger, as it opens:
 * positioned, it would flip below the trigger whenever the picture is high
 * in the window.
 */
function Pictured(props: TooltipProps) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  return (
    <div ref={setContainer} inert data-tooltip-picture style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', gap: 6 }}>
      <style>{`[data-tooltip-picture] .${styles.positioner} { position: static !important; transform: none !important; }`}</style>
      {container && <Tooltip {...props} open container={container} />}
    </div>
  )
}

const linkSharing = {
  content: 'Anyone with the link can view this file. Change it under Share → General access.',
  children: <Button appearance="outlined">Link sharing on</Button>,
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: '[role="tooltip"]', description: 'Inverted surface with the text, 6px from the trigger. At most 20rem wide.' },
  { name: 'Trigger', selector: 'button[aria-describedby]', description: 'One focusable element. While the tooltip is open, its aria-describedby points at it.' },
]

/** Every part present, the tooltip open in place. */
export const Anatomy: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: linkSharing,
  render: (args) => <Pictured {...args} />,
  play: async ({ canvas, canvasElement }) => {
    // Rendered inside the story, not <body>.
    const tip = await canvas.findByRole('tooltip', { hidden: true })
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[0]).toBe(tip)
    await expect(found[1]).toHaveAttribute('aria-describedby', tip.id)
  },
}

/** Specs, States: closed, the trigger alone. */
export const Closed: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: linkSharing,
}

/** Specs, States: open. */
export const OpenPicture: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: linkSharing,
  render: (args) => <Pictured {...args} />,
}

/** Guidelines, Do: a short label for an icon-only button. */
export const DoShortLabel: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  render: (args) => <Pictured {...args} />,
}

/** Guidelines, Don't: something the reader needs, hidden in a tooltip. */
export const DontEssentialInfo: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: { content: 'At least 12 characters, with a number and a symbol.', children: <TextInput label="Password" type="password" /> },
  render: (args) => <Pictured {...args} />,
}
