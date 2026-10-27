import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { MediaObject } from './MediaObject'

const comment =
  'Reconciled the October bank feed. Two card refunds are still unmatched; I left them in suspense until the statements arrive.'

// A flat placeholder thumbnail that grows to whatever height it is given,
// so the stretch story needs no network and the visual baseline stays stable.
const thumbnail = (
  <div
    data-testid="thumbnail"
    style={{
      inlineSize: 'var(--box-xl)',
      minBlockSize: 'var(--box-xl)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border)',
      background: 'var(--surface-filled)',
    }}
  />
)

const meta = {
  title: 'Patterns/Application UI/Media Object',
  tags: ['experimental'],
  component: MediaObject,
  parameters: { layout: 'padded' },
  args: {
    media: <Avatar initials="IO" color="teal" />,
    title: 'Ines Okafor',
    description: comment,
    style: { maxInlineSize: 560 },
  },
  argTypes: {
    media: {
      description: 'An Avatar, an Icon or an image beside the text. Decorative and hidden from assistive tech: the title names what it shows, so it must not be interactive.',
      control: false,
    },
    title: { description: 'What the object is: a person, a product, the author of a comment. Required.', control: 'text' },
    description: { description: 'A line or a paragraph under the title, in muted text.', control: 'text' },
    children: { description: 'Anything after the description: actions, or nested Media Objects for replies.', control: false },
    align: { description: 'Where the media sits against the text: top, middle, bottom, or stretched to the height of the text.' },
    mediaPosition: { description: 'Which side the media is on. The DOM order stays media first either way.' },
    headingLevel: { description: 'Makes the title a heading of this level. Leave it out in a list of comments, where the titles are not sections.' },
  },
} satisfies Meta<typeof MediaObject>

export default meta
type Story = StoryObj<typeof meta>

const box = (el: Element) => el.getBoundingClientRect()
const parts = (root: HTMLElement) => {
  const media = root.querySelector('[aria-hidden="true"]')!
  return { media: box(media), body: box(media.nextElementSibling!) }
}

/** An Avatar at the top beside a title and a paragraph. The title is bold text, not a heading. */
export const Basic: Story = {
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByText('Ines Okafor').tagName).toBe('P')
    await expect(canvas.queryByRole('heading')).toBeNull()
    await waitFor(() => {
      const { media, body } = parts(canvasElement)
      expect(media.right).toBeLessThanOrEqual(body.left)
      expect(Math.abs(media.top - body.top)).toBeLessThanOrEqual(1)
    })
  },
}

/** `headingLevel` makes the title a heading, for a media object that starts a section. */
export const AsHeading: Story = {
  args: {
    media: <Icon name="notifications" />,
    title: 'Email alerts',
    description: 'Get an email when an invoice is overdue.',
    headingLevel: 3,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 3, name: 'Email alerts' })).toBeVisible()
  },
}

/** The media in the middle of the text. */
export const AlignCenter: Story = {
  args: { align: 'center' },
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const { media, body } = parts(canvasElement)
      expect(Math.abs(media.top + media.height / 2 - (body.top + body.height / 2))).toBeLessThanOrEqual(1)
    })
  },
}

/** The media at the bottom of the text. */
export const AlignEnd: Story = {
  args: { align: 'end' },
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const { media, body } = parts(canvasElement)
      expect(Math.abs(media.bottom - body.bottom)).toBeLessThanOrEqual(1)
    })
  },
}

/** A thumbnail stretched to the full height of the text. */
export const Stretch: Story = {
  args: { align: 'stretch', media: thumbnail, title: 'Harbor Lights', description: `${comment} ${comment}` },
  play: async ({ canvas, canvasElement }) => {
    await waitFor(() => {
      const { body } = parts(canvasElement)
      expect(Math.abs(box(canvas.getByTestId('thumbnail')).height - body.height)).toBeLessThanOrEqual(1)
    })
  },
}

/** The media after the text, for example a product photo at the end of a line. */
export const MediaAtEnd: Story = {
  args: { mediaPosition: 'end', media: thumbnail, title: 'Harbor Lights', description: 'Due Nov 14, owned by Ines Okafor.' },
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      const { media, body } = parts(canvasElement)
      expect(media.left).toBeGreaterThanOrEqual(body.right)
    })
    // Visual only: the DOM, so reading order, stays media first.
    await expect(canvasElement.querySelector('[data-align]')!.firstElementChild).toHaveAttribute('aria-hidden', 'true')
  },
}

/** A reply nested in `children`, with an action under it. The reply lines up with the parent's text. */
export const Nested: Story = {
  args: {
    children: (
      <>
        <div>
          <Button variant="secondary" appearance="ghost" size="sm">
            Reply
          </Button>
        </div>
        <MediaObject media={<Avatar initials="TL" color="violet" />} title="Tomas Lindqvist" description="Thanks. I will chase the card provider on Monday." />
      </>
    ),
  },
  play: async ({ canvas }) => {
    await waitFor(() => {
      const parent = box(canvas.getByText('Ines Okafor'))
      const reply = box(canvas.getByText('TL'))
      expect(reply.left).toBeGreaterThanOrEqual(parent.left)
      expect(reply.top).toBeGreaterThan(parent.bottom)
    })
    await expect(canvas.getByRole('button', { name: 'Reply' })).toBeVisible()
  },
}

/** In a narrow column the text wraps under the media, and a long word breaks instead of overflowing. */
export const Narrow: Story = {
  args: {
    title: 'Quarterlyreconciliationofsubsidiaryaccountsreceivable',
    description: 'Due 31 October 2026',
    style: { inlineSize: 200 },
  },
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector('[data-align]')!
    await waitFor(() => {
      const { media, body } = parts(canvasElement)
      expect(body.top).toBeGreaterThanOrEqual(media.bottom)
      expect(body.right).toBeLessThanOrEqual(box(root).right)
    })
  },
}

/** Media at the end in a narrow column: it drops under the text at the start edge. */
export const NarrowMediaAtEnd: Story = {
  args: { ...Narrow.args, mediaPosition: 'end' },
  tags: ['!dev'],
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector('[data-align]')!
    await waitFor(() => {
      const { media, body } = parts(canvasElement)
      expect(media.top).toBeGreaterThanOrEqual(body.bottom)
      expect(Math.abs(media.left - box(root).left)).toBeLessThanOrEqual(1)
    })
  },
}

/** Every option at once, for the visual baseline. */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--space-6)', maxInlineSize: 560 }}>
      <MediaObject {...args} style={undefined} />
      <MediaObject {...args} style={undefined} align="center" media={<Icon name="notifications" />} title="Email alerts" description="Get an email when an invoice is overdue." />
      <MediaObject {...args} style={undefined} align="stretch" mediaPosition="end" media={thumbnail} title="Harbor Lights" />
    </div>
  ),
}

/** Dark mode, so the accessibility check covers both themes. */
export const Dark: Story = {
  args: { ...Nested.args },
  globals: { theme: 'dark' },
}
