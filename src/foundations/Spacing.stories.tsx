import type { Meta, StoryObj } from '@storybook/react-vite'
import { DENSITIES } from '@/theme/Theme'
import docs from './docs.module.css'

const ROLES = ['stack', 'inline', 'cluster', 'group', 'container', 'section']

/* Each role as a bar, once per density. The bars read the tokens inside a
   [data-density] scope, so they show what the stylesheet resolves. */
function RoleBars() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', gap: 'var(--space-container)' }}>
      {DENSITIES.map((density) => (
        <div key={density} data-density={density} className={docs.stack}>
          <strong className={docs.caption}>{density === 'default' ? 'Default' : 'Compact'}</strong>
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
