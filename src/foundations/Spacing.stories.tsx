import type { Meta, StoryObj } from '@storybook/react-vite'
import docs from './docs.module.css'

const ROLES = ['stack', 'inline', 'cluster', 'group', 'container', 'section']

/* Each role as a bar, read from the token so it shows what the stylesheet resolves. */
function RoleBars() {
  return (
    <div className={docs.stack}>
      {ROLES.map((role) => (
        <div key={role} className={docs.row}>
          <span className={docs.caption} style={{ width: '5rem', flexShrink: 0 }}>
            {role}
          </span>
          <div
            style={{
              height: '1rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--primary)',
              width: `var(--space-${role})`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

// Narrative and prose live in Spacing.mdx.
const meta = {
  title: 'Foundations/Spacing',
  render: () => <RoleBars />,
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Roles: Story = {}
