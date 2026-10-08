import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '@/components/buttons/Button'
import { Link } from '@/components/navigation/Link'
import { DescriptionList, type DescriptionItem } from './DescriptionList'

const about =
  'Product designer with eight years in B2B software, most recently leading the design system at a payments company. Wants to own a product area end to end.'

const attachments = (
  <ul style={{ display: 'grid', gap: 'var(--space-2)', margin: 0, padding: 0, listStyle: 'none' }}>
    {['resume_ava_stone.pdf', 'portfolio_2026.pdf'].map((f) => (
      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        <Icon name="file" />
        <span style={{ flex: 1, color: 'var(--foreground)' }}>{f}</span>
        <Link href={`#${f}`} size="sm">
          Download<span style={{ position: 'absolute', inlineSize: 1, blockSize: 1, overflow: 'hidden', clipPath: 'inset(50%)' }}> {f}</span>
        </Link>
      </li>
    ))}
  </ul>
)

const applicant: DescriptionItem[] = [
  { term: 'Full name', details: 'Ava Stone' },
  { term: 'Application for', details: 'Senior Product Designer' },
  { term: 'Email address', details: 'ava.stone@example.com' },
  { term: 'Salary expectation', details: '$120,000' },
  { term: 'About', details: about, isWide: true },
  { term: 'Attachments', details: attachments, isWide: true },
]

const update = (field: string) => (
  <Link href={`#edit-${field}`} size="sm">
    Update<span style={{ position: 'absolute', inlineSize: 1, blockSize: 1, overflow: 'hidden', clipPath: 'inset(50%)' }}> {field}</span>
  </Link>
)

const meta = {
  title: 'Patterns/Application UI/Description List',
  tags: ['experimental'],
  component: DescriptionList,
  parameters: { layout: 'padded' },
  args: { title: 'Applicant information', description: 'Personal details and application.', items: applicant },
  argTypes: { items: { control: false }, actions: { control: false }, layout: { control: 'inline-radio', options: ['columns', 'grid', 'stacked'] } },
  decorators: [(Story) => <div style={{ maxInlineSize: '48rem' }}>{Story()}</div>],
} satisfies Meta<typeof DescriptionList>

export default meta
type Story = StoryObj<typeof meta>

/** Term and details side by side, a line between rows, an action per row. */
export const Columns: Story = {
  args: { items: applicant.map((i) => (i.term === 'About' || i.term === 'Attachments' ? i : { ...i, action: update(i.term) })) },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('term')).toHaveLength(6)
    const [term, details] = [canvas.getAllByRole('term')[0], canvas.getByText('Ava Stone')].map((e) => e.getBoundingClientRect())
    // Side by side at this width.
    await expect(Math.abs(term.top - details.top)).toBeLessThan(4)
    await expect(canvas.getByRole('link', { name: 'Update Email address' })).toBeVisible()
  },
}

/** On a card: header with actions in a top band, two columns of fields, long ones full width. */
export const InCard: Story = {
  args: {
    layout: 'grid',
    isCard: true,
    actions: (
      <Button variant="secondary" appearance="outlined" size="sm">
        Edit
      </Button>
    ),
  },
  play: async ({ canvas }) => {
    const email = canvas.getByText('Full name').closest('div')!.getBoundingClientRect()
    const role = canvas.getByText('Application for').closest('div')!.getBoundingClientRect()
    const aboutRow = canvas.getByText('About').closest('div')!.getBoundingClientRect()
    // Two per row, and the wide field spans both.
    await expect(Math.abs(email.top - role.top)).toBeLessThan(4)
    await expect(aboutRow.width).toBeGreaterThan(role.width * 1.8)
    await expect(within(canvas.getByText('Attachments').closest('div')!).getByRole('link', { name: 'Download portfolio_2026.pdf' })).toBeVisible()
  },
}

/** Term over details, one field after another: for a sidebar or a phone. */
export const Stacked: Story = {
  args: { layout: 'stacked', items: applicant.slice(0, 4), description: undefined },
  decorators: [(Story) => <div style={{ inlineSize: 320 }}>{Story()}</div>],
  play: async ({ canvas }) => {
    const [term, details] = [canvas.getAllByRole('term')[0], canvas.getByText('Ava Stone')].map((e) => e.getBoundingClientRect())
    await expect(details.top).toBeGreaterThanOrEqual(term.bottom)
  },
}

/** Columns stack by themselves when the list is narrow, whatever the viewport. */
export const ColumnsNarrow: Story = {
  ...Columns,
  decorators: [(Story) => <div style={{ inlineSize: 360 }}>{Story()}</div>],
  play: async ({ canvas }) => {
    const [term, details] = [canvas.getAllByRole('term')[0], canvas.getByText('Ava Stone')].map((e) => e.getBoundingClientRect())
    await expect(details.top).toBeGreaterThanOrEqual(term.bottom)
  },
}
