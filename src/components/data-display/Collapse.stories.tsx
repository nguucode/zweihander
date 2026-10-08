import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { Collapse } from './Collapse'
import { mediaRules } from '@/test/story-helpers'

const meta = {
  title: 'Components/Data Display/Collapse',
  tags: ['experimental'],
  component: Collapse,
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
    // The chevron is hidden: the exact name above has nothing from it.
    await expect(trigger.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull()
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
    await userEvent.keyboard(' ')
    await expect(canvas.getByRole('button', { name: 'Hide details' })).toHaveAttribute('aria-expanded', 'true')
  },
}

export const Open: Story = { args: { defaultOpen: true } }

export const Small: Story = {
  args: { size: 'sm', label: 'Advanced settings', openLabel: undefined },
  play: async ({ canvas, userEvent }) => {
    // Without openLabel the name stays put; aria-expanded carries the state.
    const trigger = canvas.getByRole('button', { name: 'Advanced settings' })
    await userEvent.tab()
    await expect(trigger).toHaveFocus()
    await userEvent.keyboard(' ')
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await expect(trigger).toHaveAccessibleName('Advanced settings')
    await userEvent.keyboard('{Enter}')
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  },
}

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

/** A play cannot switch the pointer type, so this reads the `(pointer: coarse)` rule that reaches the trigger. */
export const TouchTarget: Story = {
  play: async ({ canvas }) => {
    const [area] = mediaRules('pointer: coarse', canvas.getByRole('button'), '::before')
    await expect(area).toBeDefined()
    await expect([area.style.minInlineSize, area.style.blockSize]).toEqual(['44px', '44px'])
  },
}

/** A play cannot set prefers-reduced-motion, so this reads the rule that reaches the panel and the chevron. */
export const ReducedMotion: Story = {
  // Open, so the panel is mounted.
  args: { defaultOpen: true },
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button')
    const panel = document.getElementById(trigger.getAttribute('aria-controls')!)!
    const chevron = trigger.querySelector('[aria-hidden="true"]')!
    for (const el of [panel, chevron]) {
      const rules = mediaRules('prefers-reduced-motion: reduce', el)
      await expect(rules.map((r) => r.style.transitionProperty)).toContain('none')
    }
  },
}
