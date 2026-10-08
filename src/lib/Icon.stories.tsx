import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Icon, type IconName } from './icon'

const meta = {
  title: 'Foundations/Icons',
  component: Icon,
  parameters: { a11y: { test: 'error' } },
  args: { name: 'close' },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

const names = [
  'calendar', 'check', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up',
  'chevrons-up-down', 'clear', 'close', 'danger', 'danger-filled', 'external', 'file', 'info', 'info-filled', 'menu', 'minus', 'more', 'pause', 'play', 'plus',
  'search', 'star', 'star-filled', 'success', 'success-filled', 'upload', 'user', 'warning', 'warning-filled',
] satisfies IconName[]

/** Every icon the kit ships, by the name components use. Google Material Symbols, Apache 2.0. */
export const Catalog: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(8rem, 1fr))',
        gap: 'var(--space-4)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-body-sm)',
        color: 'var(--foreground)',
      }}
    >
      {names.map((name) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Icon name={name} style={{ fontSize: 24 }} />
          <code>{name}</code>
        </div>
      ))}
    </div>
  ),
}

export const Decorative: Story = {
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  },
}

export const Labelled: Story = {
  args: { name: 'warning', label: 'Warning' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('img', { name: 'Warning' })).toBeVisible()
  },
}
