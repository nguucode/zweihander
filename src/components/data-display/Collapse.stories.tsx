import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { Collapse } from './Collapse'

const meta = {
  title: 'Components/Data Display/Collapse',
  component: Collapse,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: {
    label: 'Show details',
    openLabel: 'Hide details',
    children: (
      <p style={{ margin: 0 }}>
        Billed yearly on 1 March. Seats you add mid-year are charged for the months left, and removed seats are
        credited to the next invoice.
      </p>
    ),
    onOpenChange: fn(),
  },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md'] }, children: { control: false } },
  decorators: [(Story) => <div style={{ maxInlineSize: '32rem' }}>{Story()}</div>],
} satisfies Meta<typeof Collapse>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const trigger = canvas.getByRole('button', { name: 'Show details' })
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(trigger)
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true)
    // The name follows the state.
    const open = canvas.getByRole('button', { name: 'Hide details' })
    await expect(open).toHaveAttribute('aria-expanded', 'true')
    await waitFor(() => expect(canvas.getByText(/Billed yearly/)).toBeVisible())
    // The trigger controls the panel it opened.
    const panel = document.getElementById(open.getAttribute('aria-controls')!)!
    await expect(panel).toContainElement(canvas.getByText(/Billed yearly/))
    await userEvent.keyboard('{Enter}')
    await expect(canvas.getByRole('button', { name: 'Show details' })).toHaveAttribute('aria-expanded', 'false')
  },
}

export const Open: Story = { args: { defaultOpen: true } }

export const Small: Story = { args: { size: 'sm', label: 'Advanced settings', openLabel: undefined } }

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Show details' }))
    await expect(args.onOpenChange).not.toHaveBeenCalled()
  },
}

/** Closed content stays findable: it is hidden="until-found", not removed. */
export const Searchable: Story = {
  play: async ({ canvas }) => {
    const text = canvas.getByText(/Billed yearly/, {}) as HTMLElement
    await expect(text.closest('[hidden]')).toHaveAttribute('hidden', 'until-found')
  },
}
