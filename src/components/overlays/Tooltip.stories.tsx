import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy, Pictured } from '../../../.storybook/blocks'
import { Icon } from '@/lib/icon'
import { Avatar } from '../atomic-elements/Avatar'
import { Button } from '../buttons/Button'
import { Link } from '../navigation/Link'
import { TextInput } from '../inputs/TextInput'
import { HoverCard, Tooltip, TooltipGroup, type HoverCardProps, type TooltipProps } from './Tooltip'
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
  excludeStories: ['anatomyParts', 'hoverCardParts'],
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

/** The tooltip open in place, as a picture, 6px above the trigger. */
const picture = (args: TooltipProps) => (
  <Pictured positioner={styles.positioner} style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', gap: 6 }}>
    {(container) => <Tooltip {...args} open container={container} />}
  </Pictured>
)

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
  render: picture,
  play: async ({ canvas, canvasElement }) => {
    // Rendered inside the story, not <body>.
    const tip = await canvas.findByRole('tooltip', { hidden: true })
    const found = await expectAnatomy(canvasElement, anatomyParts)
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
  render: picture,
}

/** Guidelines, Do: a short label for an icon-only button. */
export const DoShortLabel: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  render: picture,
}

/** Guidelines, Don't: something the reader needs, hidden in a tooltip. */
export const DontEssentialInfo: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: {
    content: 'At least 12 characters, with a number and a symbol.',
    children: (
      <Button isIconOnly aria-label="Password rules" appearance="ghost" variant="accent">
        <Icon name="info" />
      </Button>
    ),
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'end', gap: 'var(--space-1)' }}>
      <TextInput label="Password" type="password" />
      {picture(args)}
    </div>
  ),
}

/** A person: the anatomy the hover card is drawn for. */
const mary: HoverCardProps = {
  trigger: <Link href="#mary">Mary Thompson</Link>,
  avatar: <Avatar size="lg" initials="MT" color="teal" />,
  title: 'Mary Thompson',
  description: 'Finance lead, Accounts Payable · Active 5m ago',
  action: (
    <Button size="sm" appearance="outlined">
      Message
    </Button>
  ),
}

/** Hover card: a preview of a person on hover or focus of a link to them. */
export const HoverCardPerson: Story = {
  render: () => (
    <p style={{ margin: 0 }}>
      Approved by <HoverCard {...mary} delay={300} /> on 12 March.
    </p>
  ),
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: 'Mary Thompson' })
    await userEvent.hover(link)
    const card = await waitFor(() => {
      const el = document.querySelector(`.${styles.card}`)
      expect(el).not.toBeNull()
      return el as HTMLElement
    })
    // Visible once it has faded in.
    await waitFor(() => expect(within(card).getByText('Finance lead, Accounts Payable · Active 5m ago')).toBeVisible())
    // The pointer can cross to the card: closeDelay keeps it open on the way.
    await userEvent.hover(card)
    await expect(within(card).getByRole('button', { name: 'Message' })).toBeVisible()
    await userEvent.unhover(card)
    await waitFor(() => expect(document.querySelector(`.${styles.card}`)).toBeNull())
  },
}

/** Keyboard focus on the link opens it too, after the same delay. */
export const HoverCardFocus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
      <HoverCard {...mary} delay={0} />
      <Button appearance="outlined">Next</Button>
    </div>
  ),
  play: async ({ canvas }) => {
    await userEvent.tab()
    await expect(canvas.getByRole('link', { name: 'Mary Thompson' })).toHaveFocus()
    await waitFor(() => expect(document.querySelector(`.${styles.card}`)).not.toBeNull())
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(document.querySelector(`.${styles.card}`)).toBeNull())
    // Not a dialog: focus stays on the link, and Tab moves past the card, its action included.
    await userEvent.keyboard('{Shift>}{Tab}{/Shift}')
    await userEvent.tab()
    await waitFor(() => expect(document.querySelector(`.${styles.card}`)).not.toBeNull())
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Next' })).toHaveFocus()
  },
}

/** The hover card open in place, as a picture, 6px under the link. */
const cardPicture = (props: HoverCardProps) => (
  <Pictured positioner={styles.cardPositioner} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 6 }}>
    {(container) => <HoverCard {...props} open container={container} />}
  </Pictured>
)

export const hoverCardParts = [
  { name: 'Container', selector: `.${styles.card}`, description: 'A raised `--popover` surface, 6px from the link, at most 20rem wide.' },
  { name: 'Avatar', selector: `.${styles.cardAvatar}`, description: 'Optional. At the start, beside the name and the meta.' },
  { name: 'Name', selector: `.${styles.cardTitle}`, description: 'What is previewed: a person, a record, a document.' },
  { name: 'Meta', selector: `.${styles.cardDescription}`, description: 'Optional. One or two muted lines: role, team, last active.' },
  { name: 'Action', selector: `.${styles.cardAction}`, description: 'Optional. A shortcut that the linked page offers too.' },
  { name: 'Trigger', selector: 'a', description: 'A link to what the card previews. Hover or focus opens the card.' },
]

/** Every part of the hover card present, open in place. */
export const HoverCardAnatomy: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  render: () => cardPicture(mary),
  play: async ({ canvasElement }) => {
    await expectAnatomy(canvasElement, hoverCardParts)
  },
}

/** Overview and Specs: the hover card open, without an action. */
export const HoverCardPicture: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  render: () => cardPicture({ ...mary, action: undefined }),
}
