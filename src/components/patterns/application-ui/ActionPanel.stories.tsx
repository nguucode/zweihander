import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { Switch } from '@/components/controls/Switch'
import { TextInput } from '@/components/inputs/TextInput'
import { ActionPanel } from './ActionPanel'

const meta = {
  title: 'Patterns/Application UI/Action Panel',
  tags: ['experimental'],
  component: ActionPanel,
  parameters: { layout: 'padded' },
  args: {
    title: 'Export your data',
    description: 'A ZIP of every project, file and comment, emailed to you within an hour.',
    action: <Button variant="secondary" appearance="outlined">Request export</Button>,
  },
  argTypes: {
    title: { description: 'What the action does, e.g. "Delete account". Names the panel. Required.', control: 'text' },
    description: {
      description: 'What happens when you take it: what changes, what it costs, whether it can be undone. Describes the panel.',
      control: 'text',
    },
    action: {
      description: 'The control: a Button, a Switch, or a small form of an input and a button. Rendered as given.',
      control: false,
    },
    actionPlacement: {
      description: '`below` the text (a button or a form), or at the `end` of the row beside it (a button or a switch).',
    },
    variant: {
      description: '`danger` edges the panel in the destructive colour, for what cannot be undone. Pair it with a destructive Button.',
    },
    headingLevel: { description: 'The title is an h2; use 3 or 4 when the panel sits under a section heading.' },
    size: { description: "The Card's padding and gap." },
    appearance: { description: "The Card's look; `surface` follows the Theme's contentStyle on an App Shell page." },
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: 640 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ActionPanel>

export default meta
type Story = StoryObj<typeof meta>

/** A button under the description: the default. */
export const Simple: Story = {
  play: async ({ canvas }) => {
    const panel = canvas.getByRole('group', { name: 'Export your data' })
    await expect(panel).toHaveAccessibleDescription(/A ZIP of every project/)
    await expect(canvas.getByRole('heading', { level: 2, name: 'Export your data' })).toBeVisible()
    const text = canvas.getByRole('heading').getBoundingClientRect()
    const button = canvas.getByRole('button', { name: 'Request export' }).getBoundingClientRect()
    await expect(button.top).toBeGreaterThan(text.bottom)
  },
}

/** The button at the end of the row, beside the text. */
export const ButtonAtEnd: Story = {
  args: { actionPlacement: 'end' },
  play: async ({ canvas }) => {
    const title = canvas.getByRole('heading').getBoundingClientRect()
    const button = canvas.getByRole('button', { name: 'Request export' }).getBoundingClientRect()
    await expect(button.left).toBeGreaterThan(title.right)
    // Top of the row, by the title, not centred on a long description.
    await expect(Math.abs(button.top - title.top)).toBeLessThan(title.height)
  },
}

/** A setting that takes effect at once, so there is no Save. */
export const WithSwitch: Story = {
  args: {
    title: 'Renew automatically',
    description: 'Your plan renews on 1 December 2026 with the card on file. Turn this off to let it lapse.',
    actionPlacement: 'end',
    action: <Switch aria-label="Renew automatically" defaultChecked />,
  },
  play: async ({ canvas }) => {
    const toggle = canvas.getByRole('switch', { name: 'Renew automatically' })
    await expect(toggle).toBeChecked()
    await userEvent.tab()
    await expect(toggle).toHaveFocus()
    await userEvent.keyboard(' ')
    await expect(toggle).not.toBeChecked()
  },
}

const onSubmit = fn()

/** A small form: one field and its button on a row. */
export const WithInput: Story = {
  args: {
    title: 'Update your email',
    description: 'We send a link to the new address; the change takes effect once you open it.',
    action: (
      <form
        style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', gap: 'var(--space-inline)' }}
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(new FormData(e.currentTarget).get('email'))
        }}
      >
        <TextInput label="New email" name="email" type="email" autoComplete="email" />
        <Button type="submit">Send link</Button>
      </form>
    ),
  },
  play: async ({ canvas }) => {
    onSubmit.mockClear()
    await userEvent.type(canvas.getByRole('textbox', { name: 'New email' }), 'ines@example.org{Enter}')
    await expect(onSubmit).toHaveBeenCalledWith('ines@example.org')
  },
}

/** What cannot be undone: a danger edge and a destructive button. */
export const Danger: Story = {
  args: {
    title: 'Delete workspace',
    description: 'Every project, file and member is removed for good. This cannot be undone.',
    variant: 'danger',
    actionPlacement: 'end',
    action: <Button variant="destructive" appearance="outlined">Delete workspace</Button>,
  },
  play: async ({ canvas }) => {
    const panel = canvas.getByRole('group', { name: 'Delete workspace' })
    const probe = document.createElement('div')
    probe.style.color = 'var(--destructive)'
    panel.append(probe)
    const destructive = getComputedStyle(probe).color
    probe.remove()
    await expect(getComputedStyle(panel).borderBlockStartColor).toBe(destructive)
    await expect(getComputedStyle(panel).borderInlineStartColor).toBe(destructive)
  },
}

/** Danger stays edged on the flat theme's surface, which otherwise drops the side borders. */
export const DangerOnSurface: Story = {
  tags: ['!dev'],
  args: { ...Danger.args, appearance: 'surface' },
  play: Danger.play,
}

/** No description, the title one level down, and more buttons than fit on the row: they wrap. */
export const TitleOnly: Story = {
  args: {
    title: 'Leave the workspace',
    description: undefined,
    headingLevel: 3,
    action: (
      <>
        <Button variant="secondary" appearance="outlined">Transfer ownership first</Button>
        <Button variant="secondary" appearance="outlined">Download my files</Button>
        <Button variant="destructive" appearance="outlined">Leave the workspace</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ inlineSize: 360 }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    const panel = canvas.getByRole('group', { name: 'Leave the workspace' })
    await expect(panel).not.toHaveAttribute('aria-describedby')
    await expect(canvas.getByRole('heading', { level: 3, name: 'Leave the workspace' })).toBeVisible()
    const [first, , last] = canvas.getAllByRole('button').map((b) => b.getBoundingClientRect())
    await expect(last.top).toBeGreaterThan(first.top)
    await expect(last.right).toBeLessThanOrEqual(panel.getBoundingClientRect().right)
  },
}

/** On a narrow card the end action drops under the text, and a long word breaks. */
export const Narrow: Story = {
  args: {
    title: 'Deleteallarchivedsubsidiaryledgerentries',
    actionPlacement: 'end',
  },
  decorators: [
    (Story) => (
      <div data-testid="narrow" style={{ inlineSize: 280 }}>
        {Story()}
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    const title = canvas.getByRole('heading').getBoundingClientRect()
    const button = canvas.getByRole('button', { name: 'Request export' }).getBoundingClientRect()
    await expect(button.top).toBeGreaterThanOrEqual(canvas.getByText(/A ZIP of every project/).getBoundingClientRect().bottom)
    await expect(title.right).toBeLessThanOrEqual(canvas.getByTestId('narrow').getBoundingClientRect().right)
  },
}
