import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Theme } from '@/theme/Theme'
import { Card } from '@/components/data-display/Card'
import { AppShell } from '@/components/templates/application-ui/AppShell'
import { AppContent } from './AppContent'
import { PageHeading } from './PageHeading'

const page = (
  <div style={{ display: 'grid', gap: 'var(--space-group)' }}>
    <PageHeading title="Dashboard" description="What happened across your projects this month." />
    <div style={{ display: 'grid', gap: 'var(--space-group)', gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))' }}>
      {['Active projects', 'Open tasks', 'Team members'].map((label) => (
        <Card key={label} appearance="surface" size="sm">
          {label}
        </Card>
      ))}
    </div>
  </div>
)

const meta = {
  title: 'Patterns/Application UI/App Content',
  tags: ['experimental'],
  component: AppContent,
  parameters: { layout: 'padded' },
  argTypes: { children: { control: false } },
  // AppContent reads the App Shell's grid and canvas, so it is shown in one.
  render: (_args, { parameters }) => (
    <Theme canvas="neutral" contentStyle={parameters.contentStyle} style={{ blockSize: 480, border: '1px solid var(--border)' }}>
      <AppShell style={{ blockSize: '100%' }}>
        {page}
      </AppShell>
    </Theme>
  ),
} satisfies Meta<typeof AppContent>

export default meta
type Story = StoryObj<typeof meta>

/** contentStyle="flat": one card surface, inset 8px; the blocks are ruled-off sections. */
export const Flat: Story = {
  parameters: { contentStyle: 'flat' },
  play: async ({ canvas }) => {
    await expect(getComputedStyle(canvas.getByRole('main')).backgroundColor).not.toBe('rgba(0, 0, 0, 0)')
  },
}

/** contentStyle="card": the page sits on the canvas and each block is a raised Card. */
export const OnCanvas: Story = {
  parameters: { contentStyle: 'card' },
  play: async ({ canvas }) => {
    await expect(getComputedStyle(canvas.getByRole('main')).backgroundColor).toBe('rgba(0, 0, 0, 0)')
  },
}
