import { useState, type FormEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Textarea } from '@/components/inputs/Textarea'
import { Feed, type FeedItem } from './Feed'

const at = (day: number, hour: number) => new Date(2026, 9, day, hour)

const events: FeedItem[] = [
  { id: 1, media: <Icon name="plus" />, actor: 'Ines Okafor', action: <>created <strong>Harbor Lights</strong></>, at: at(2, 9) },
  { id: 2, media: <Icon name="file" />, actor: 'Tomas Lindqvist', action: <>changed the estimation from <strong>$40K</strong> to <strong>$52K</strong></>, at: at(9, 14) },
  { id: 3, media: <Icon name="info" />, actor: 'Noor Haddad', action: <>moved it to <strong>On hold</strong></>, at: at(20, 11) },
]

const people = {
  ines: <Avatar size="sm" initials="IO" color="teal" />,
  noor: <Avatar size="sm" initials="NH" color="violet" />,
  me: <Avatar size="sm" initials="SR" color="amber" />,
}

const conversation: FeedItem[] = [
  { id: 1, media: people.ines, actor: 'Ines Okafor', action: 'commented', at: at(20, 11), comment: 'Budget is approved for the second phase. Can we start on Monday?' },
  { id: 2, media: <Icon name="info" />, actor: 'Noor Haddad', action: <>moved it to <strong>Active</strong></>, at: at(20, 15) },
  { id: 3, media: people.noor, actor: 'Noor Haddad', action: 'commented', at: at(21, 9), comment: 'Monday works. I booked the kickoff for 10:00.' },
]

const meta = {
  title: 'Patterns/Application UI/Feed',
  tags: ['experimental'],
  component: Feed,
  parameters: { layout: 'padded' },
  args: { items: events, 'aria-label': 'Harbor Lights activity', role: 'region' },
  argTypes: {
    items: {
      description:
        'The events, in the order shown (newest first is the norm). Each has `actor`, `action` (the rest of the sentence) and `at`, and may have `media` (an Avatar or an Icon), `comment` and `id`.',
      control: false,
    },
    hasConnector: { description: 'The vertical line joining one event to the next. Off for a short, loose list.', table: { defaultValue: { summary: 'true' } } },
    composer: { description: 'A form to add a comment, after the last event, lined up with the text. Rendered as given.', control: false },
    empty: { description: 'Shown instead of the list when there are no items.', control: 'text', table: { defaultValue: { summary: '"No activity yet."' } } },
    formatTime: { description: 'How the time reads. The `<time>` element carries the ISO moment either way.', control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Feed>

export default meta
type Story = StoryObj<typeof meta>

/** An icon per kind of event, joined by a line: a record's history. */
export const Simple: Story = {
  play: async ({ canvas }) => {
    const feed = canvas.getByRole('region', { name: 'Harbor Lights activity' })
    // An ordered list: position and count are announced.
    await expect(canvas.getByRole('list').tagName).toBe('OL')
    const items = canvas.getAllByRole('listitem')
    await expect(items).toHaveLength(3)
    // One sentence per event, read in order: who, what, when.
    await expect(items[1]).toHaveTextContent('Tomas Lindqvist changed the estimation from $40K to $52K Oct 9, 2026')
    const time = items[1].querySelector('time')!
    await expect(time.dateTime).toBe(at(9, 14).toISOString())
    // The media says nothing the sentence does not.
    await expect(items[0].querySelector('[aria-hidden="true"]')).not.toBeNull()
    // The line runs from one media to the next.
    const line = getComputedStyle(items[0], '::before')
    await expect(line.borderInlineStartWidth).toBe('1px')
    await expect(getComputedStyle(items[2], '::before').content).toBe('none')
    await expect(feed).toBeVisible()
  },
}

/** Avatars for people, an icon for a system event, and what people wrote in a box under the sentence. */
export const WithComments: Story = {
  args: { items: conversation, 'aria-label': 'Comments' },
  play: async ({ canvas }) => {
    const items = canvas.getAllByRole('listitem')
    await expect(items[0]).toHaveTextContent(/Ines Okafor commented.*Budget is approved/)
    // The comment sits under its sentence, past the media.
    const sentence = items[0].querySelector('p')!.getBoundingClientRect()
    const comment = canvas.getByText(/Budget is approved/).getBoundingClientRect()
    await expect(comment.top).toBeGreaterThanOrEqual(sentence.bottom)
    await expect(Math.round(comment.left)).toBe(Math.round(sentence.left))
  },
}

/** No line: a short list where each event stands alone. */
export const WithoutConnector: Story = {
  args: { hasConnector: false },
  play: async ({ canvas }) => {
    await expect(getComputedStyle(canvas.getAllByRole('listitem')[0], '::before').content).toBe('none')
  },
}

function CommentThread() {
  const [items, setItems] = useState(conversation)
  const [text, setText] = useState('')
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    setItems((all) => [...all, { id: all.length + 1, media: people.me, actor: 'Sam Rivera', action: 'commented', at: at(21, 12), comment: text }])
    setText('')
  }
  return (
    <Feed
      role="region"
      aria-label="Comments"
      items={items}
      composer={
        <form onSubmit={submit} style={{ display: 'grid', gap: 'var(--space-2)', justifyItems: 'end' }}>
          <Textarea label="Add a comment" isFullWidth minRows={2} value={text} onChange={(e) => setText(e.target.value)} />
          <Button type="submit" variant="secondary" appearance="outlined">
            Comment
          </Button>
        </form>
      }
    />
  )
}

/** A form after the last event to add a comment, oldest first so the newest sits by the box. The form is the story's, not the feed's. */
export const WithComposer: Story = {
  render: () => <CommentThread />,
  play: async ({ canvas }) => {
    const box = canvas.getByRole('textbox', { name: 'Add a comment' })
    // Lined up with the sentences, not the media.
    const sentence = canvas.getAllByRole('listitem')[0].querySelector('p')!.getBoundingClientRect()
    await expect(Math.round(box.getBoundingClientRect().left)).toBeGreaterThanOrEqual(Math.round(sentence.left))
    await userEvent.type(box, 'See you there.')
    await userEvent.click(canvas.getByRole('button', { name: 'Comment' }))
    await waitFor(() => expect(canvas.getAllByRole('listitem')).toHaveLength(4))
    await expect(canvas.getAllByRole('listitem')[3]).toHaveTextContent('Sam Rivera commented')
    await expect(box).toHaveValue('')
  },
}

/** Nothing yet: a line in place of the list. */
export const Empty: Story = {
  args: { items: [] },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('list')).toBeNull()
    await expect(canvas.getByText('No activity yet.')).toBeVisible()
  },
}

/** Harsh content: a name and a comment with no spaces, in a narrow column. They wrap, never overflow. */
export const LongContent: Story = {
  args: {
    items: [
      {
        media: <Icon name="info" />,
        actor: 'Maximiliana Wolfeschlegelsteinhausenbergerdorff',
        action: <>renamed it to <strong>Quarterly_reconciliation_export_for_the_northern_region_v2_final</strong></>,
        at: at(20, 11),
        comment: 'https://example.com/projects/harbor-lights/files/quarterly-reconciliation-export-for-the-northern-region',
      },
      ...events,
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ inlineSize: 280 }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    const feed = canvas.getByRole('region')
    await expect(feed.scrollWidth).toBeLessThanOrEqual(feed.clientWidth)
  },
}

/** Dark mode, with comments, so the accessibility check covers both themes. */
export const Dark: Story = {
  ...WithComments,
  globals: { theme: 'dark' },
}
