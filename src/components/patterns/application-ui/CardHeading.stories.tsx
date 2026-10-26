import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Divider } from '@/components/atomic-elements/Divider'
import { Button } from '@/components/buttons/Button'
import { Card } from '@/components/data-display/Card'
import { Menu } from '@/components/navigation/Menu'
import { CardHeading } from './CardHeading'

const meta = {
  title: 'Patterns/Application UI/Card Heading',
  tags: ['experimental'],
  component: CardHeading,
  parameters: { layout: 'padded' },
  args: { title: 'Job postings' },
  argTypes: {
    title: { description: "The card's name. Required.", control: 'text' },
    description: { description: 'One line of context under the title, in muted text.', control: 'text' },
    media: { description: 'An Avatar or an Icon before the title. Decorative and hidden from assistive tech, so it must not be interactive or say anything the title does not.', control: false },
    actions: {
      description: 'Buttons or a Menu at the end of the row. They wrap under the title on a narrow card.',
      control: false,
    },
    headingLevel: { description: 'The title is an h2; use 3 or 4 when the card sits under a section heading.' },
  },
  decorators: [
    (Story) => (
      <Card style={{ maxInlineSize: 640 }}>
        <Story />
        <p style={{ margin: 0, color: 'var(--muted-foreground)' }}>Card content.</p>
      </Card>
    ),
  ],
} satisfies Meta<typeof CardHeading>

export default meta
type Story = StoryObj<typeof meta>

/** A title and a line of context. */
export const Simple: Story = {
  args: { description: 'Open roles across every team, newest first.' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'Job postings' })).toBeVisible()
    await expect(canvas.getByText('Open roles across every team, newest first.')).toBeVisible()
  },
}

/** The card's one action at the end of the title row. */
export const WithAction: Story = {
  args: {
    ...Simple.args,
    actions: <Button startIcon={<Icon name="plus" />}>New job</Button>,
  },
  play: async ({ canvas }) => {
    const title = canvas.getByRole('heading', { level: 2 }).getBoundingClientRect()
    const action = canvas.getByRole('button', { name: 'New job' }).getBoundingClientRect()
    // Same row, at its end.
    await expect(action.top).toBeLessThan(title.bottom)
    await expect(action.left).toBeGreaterThan(title.right)
  },
}

/** Who the card is about, and its actions behind a menu so the row stays short. */
export const WithAvatarAndMenu: Story = {
  args: {
    title: 'Chelsea Hagon',
    description: 'Product designer, joined 12 March 2026',
    media: <Avatar initials="CH" color="blue" />,
    actions: (
      <Menu
        align="end"
        trigger={
          <Button variant="secondary" appearance="ghost" isIconOnly aria-label="More actions">
            <Icon name="more" />
          </Button>
        }
        items={[{ label: 'Edit' }, { label: 'Remove' }]}
      />
    ),
  },
  play: async ({ canvas }) => {
    const title = canvas.getByRole('heading', { level: 2, name: 'Chelsea Hagon' }).getBoundingClientRect()
    const avatar = canvas.getByText('CH').getBoundingClientRect()
    await expect(avatar.right).toBeLessThanOrEqual(title.left)
    await userEvent.click(canvas.getByRole('button', { name: 'More actions' }))
    const remove = await within(document.body).findByRole('menuitem', { name: 'Remove' })
    await waitFor(() => expect(remove).toBeVisible())
    await userEvent.keyboard('{Escape}')
    // Let it finish closing: its focus guards are still in the page until then.
    await waitFor(() => expect(within(document.body).queryByRole('menu')).toBeNull())
  },
}

/** Every slot at once, a Divider under the heading, and the title one level down. */
export const WithIconAndRule: Story = {
  args: {
    title: 'Billing contact',
    description: 'Invoices and receipts go to this address.',
    media: <Icon name="user" />,
    headingLevel: 3,
    actions: (
      <>
        <Button variant="secondary" appearance="outlined">
          Change
        </Button>
        <Button variant="secondary" appearance="ghost">
          Remove
        </Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Divider />
      </>
    ),
  ],
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 3, name: 'Billing contact' })).toBeVisible()
    await expect(canvas.getAllByRole('button')).toHaveLength(2)
  },
}

/** On a narrow card the actions drop under the title, and a long word breaks instead of overflowing. */
export const Narrow: Story = {
  args: {
    title: 'Quarterlyreconciliationofsubsidiaryaccountsreceivable',
    description: 'Due 31 October 2026',
    actions: (
      <Button variant="secondary" appearance="outlined">
        Open
      </Button>
    ),
  },
  decorators: [
    (Story) => (
      <div data-testid="narrow" style={{ inlineSize: 280 }}>
        {Story()}
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    const title = canvas.getByRole('heading', { level: 2 }).getBoundingClientRect()
    const action = canvas.getByRole('button', { name: 'Open' }).getBoundingClientRect()
    await expect(action.top).toBeGreaterThanOrEqual(title.bottom)
    await expect(title.right).toBeLessThanOrEqual(canvas.getByTestId('narrow').getBoundingClientRect().right)
  },
}
