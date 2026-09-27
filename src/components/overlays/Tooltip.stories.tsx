import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '../buttons/Button'
import { Tooltip, TooltipGroup } from './Tooltip'

const meta = {
  title: 'Components/Overlays/Tooltip',
  component: Tooltip,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: {
    content: 'Copy link',
    children: (
      <Button isIconOnly aria-label="Copy link" appearance="ghost" variant="accent">
        <Icon name="external" />
      </Button>
    ),
  },
  argTypes: {
    side: { control: 'inline-radio', options: ['top', 'right', 'bottom', 'left'] },
    align: { control: 'inline-radio', options: ['start', 'center', 'end'] },
    children: { control: false },
  },
  decorators: [(Story) => <div style={{ padding: 'var(--space-12)', display: 'flex', justifyContent: 'center' }}>{Story()}</div>],
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
    // Focus opens it at once, without the 600ms hover delay.
    const tip = await body().findByRole('tooltip', {}, { timeout: 300 })
    await expect(tip).toHaveTextContent('Copy link')
    // Read as the trigger's description while it is open.
    await expect(trigger).toHaveAttribute('aria-describedby', tip.id)
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
}

export const WithoutArrow: Story = {
  args: { hasArrow: false },
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
