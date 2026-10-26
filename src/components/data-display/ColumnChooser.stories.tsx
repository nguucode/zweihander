import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy, Pictured } from '../../../.storybook/blocks'
import popoverStyles from '../overlays/Popover.module.css'
import { ColumnChooser, type ColumnChooserProps } from './ColumnChooser'
import { Table, type TableColumn } from './Table'

interface Project {
  id: string
  name: string
  owner: string
  status: string
  files: number
}

const projects: Project[] = [
  { id: 'p1', name: 'Atlas', owner: 'Sam Rivera', status: 'Active', files: 214 },
  { id: 'p2', name: 'Billing revamp', owner: 'Mia Chen', status: 'Paused', files: 38 },
  { id: 'p3', name: 'Onboarding', owner: 'Leo Park', status: 'Active', files: 1203 },
]

const columns: TableColumn<Project>[] = [
  { key: 'name', header: 'Project', isRowHeader: true },
  { key: 'owner', header: 'Owner' },
  { key: 'status', header: 'Status' },
  { key: 'files', header: 'Files', align: 'end' },
]

const meta = {
  title: 'Components/Data Display/Column Chooser',
  tags: ['beta'],
  component: ColumnChooser,
  args: {
    columns,
    onVisibleKeysChange: fn(),
    onReset: fn(),
  },
  argTypes: {
    columns: {
      description:
        'Every column, hidden ones included, in table order: `{ key, header, isRowHeader? }`. A Table\'s `columns` fit as they are. The row header cannot be hidden.',
      control: false,
      table: { type: { summary: 'ColumnChooserColumn[]' } },
    },
    visibleKeys: {
      description: 'The shown columns\' keys, controlled. Pair with `onVisibleKeysChange`.',
      control: false,
      table: { type: { summary: 'string[]' } },
    },
    defaultVisibleKeys: {
      description: 'Shown at first, uncontrolled, and what Reset brings back.',
      control: false,
      table: { type: { summary: 'string[]' }, defaultValue: { summary: 'every column' } },
    },
    onVisibleKeysChange: {
      description: 'Called with the shown keys, in column order, when a box is ticked or Reset is pressed. Filter the Table\'s `columns` with it.',
      control: false,
      table: { type: { summary: '(keys: string[]) => void' } },
    },
    onReset: {
      description: 'Also called by Reset, to put back what lives outside the chooser, such as column widths.',
      control: false,
      table: { type: { summary: '() => void' } },
    },
    label: {
      description: 'The button\'s text and the popover\'s title.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Columns'" } },
    },
    resetLabel: {
      description: 'The Reset button\'s text.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Reset'" } },
    },
    open: {
      description: 'Controlled open state. Pair with `onOpenChange`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultOpen: {
      description: 'Open on first render, uncontrolled.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      description: 'Called with the next open state.',
      control: false,
      table: { type: { summary: '(open: boolean) => void' } },
    },
    container: {
      description: 'Where the popup renders instead of `<body>`.',
      control: false,
      table: { type: { summary: 'HTMLElement | null' } },
    },
    className: {
      description: 'Added to the button.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
  excludeStories: ['anatomyParts'],
  decorators: [
    (Story, { parameters }) =>
      parameters.picture ? Story() : <div style={{ minBlockSize: '20rem', paddingBlock: 'var(--space-2)' }}>{Story()}</div>,
  ],
} satisfies Meta<typeof ColumnChooser>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)
const headers = (canvas: ReturnType<typeof within>) => canvas.getAllByRole('columnheader').map((th: HTMLElement) => th.textContent)

/** The chooser above a resizable table: what it is for. Reset puts the widths back too. */
function WithTable(args: ColumnChooserProps) {
  const [visible, setVisible] = useState(args.defaultVisibleKeys ?? columns.map((c) => c.key))
  const [widths, setWidths] = useState<Record<string, number>>({})
  return (
    <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <ColumnChooser
          {...args}
          visibleKeys={visible}
          onVisibleKeysChange={(keys) => {
            setVisible(keys)
            args.onVisibleKeysChange?.(keys)
          }}
          onReset={() => {
            setWidths({})
            args.onReset?.()
          }}
        />
      </div>
      <Table
        caption="Projects"
        columns={columns.filter((c) => visible.includes(c.key))}
        rows={projects}
        getRowId={(p) => p.id}
        isResizable
        columnWidths={widths}
        onColumnWidthsChange={setWidths}
      />
    </div>
  )
}

export const Default: Story = {
  render: (args) => <WithTable {...args} />,
  play: async ({ args, canvas, step }) => {
    const trigger = canvas.getByRole('button', { name: 'Columns' })
    await step('The button opens a dialog named Columns and moves focus into it', async () => {
      await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog')
      await userEvent.click(trigger)
      const dialog = await body().findByRole('dialog', { name: 'Columns' })
      await expect(trigger).toHaveAttribute('aria-expanded', 'true')
      await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true))
    })
    await step('Each column is a checkbox named by its header; the row header is locked on', async () => {
      const dialog = body().getByRole('dialog', { name: 'Columns' })
      const boxes = within(dialog).getAllByRole('checkbox')
      await expect(boxes).toHaveLength(4)
      for (const [i, name] of ['Project', 'Owner', 'Status', 'Files'].entries()) await expect(boxes[i]).toHaveAccessibleName(name)
      const project = within(dialog).getByRole('checkbox', { name: 'Project' })
      await expect(project).toBeChecked()
      await expect(project).toHaveAttribute('aria-disabled', 'true')
    })
    await step('Space on a box hides its column and reports the shown keys in order', async () => {
      const owner = within(body().getByRole('dialog')).getByRole('checkbox', { name: 'Owner' })
      owner.focus()
      await userEvent.keyboard(' ')
      await expect(owner).not.toBeChecked()
      await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'status', 'files'])
      await expect(headers(canvas)).toEqual(['Project', 'Status', 'Files'])
      await userEvent.keyboard(' ')
      await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'owner', 'status', 'files'])
    })
    await step('Reset brings every column back', async () => {
      const dialog = body().getByRole('dialog')
      await userEvent.click(within(dialog).getByRole('checkbox', { name: 'Status' }))
      await userEvent.click(within(dialog).getByRole('button', { name: 'Reset' }))
      await expect(args.onReset).toHaveBeenCalled()
      await expect(headers(canvas)).toEqual(['Project', 'Owner', 'Status', 'Files'])
    })
    await step('Escape closes it and returns focus to the button', async () => {
      await userEvent.keyboard('{Escape}')
      await waitFor(() => expect(trigger).toHaveAttribute('aria-expanded', 'false'))
      await waitFor(() => expect(trigger).toHaveFocus())
    })
  },
}

/** Some columns start hidden; Reset hides them again. */
export const SomeHiddenByDefault: Story = {
  args: { defaultVisibleKeys: ['name', 'owner'] },
  render: (args) => <WithTable {...args} />,
  play: async ({ args, canvas }) => {
    await expect(headers(canvas)).toEqual(['Project', 'Owner'])
    await userEvent.click(canvas.getByRole('button', { name: 'Columns' }))
    const dialog = await body().findByRole('dialog')
    await userEvent.click(within(dialog).getByRole('checkbox', { name: 'Files' }))
    await expect(headers(canvas)).toEqual(['Project', 'Owner', 'Files'])
    await userEvent.click(within(dialog).getByRole('button', { name: 'Reset' }))
    await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'owner'])
    await expect(headers(canvas)).toEqual(['Project', 'Owner'])
  },
}

/** Keys that leave out the row header still report it: it cannot be hidden. */
export const RowHeaderAlwaysReported: Story = {
  args: { defaultVisibleKeys: ['files', 'owner'], defaultOpen: true },
  play: async ({ args }) => {
    const dialog = await body().findByRole('dialog')
    await expect(within(dialog).getByRole('checkbox', { name: 'Project' })).toBeChecked()
    await userEvent.click(within(dialog).getByRole('button', { name: 'Reset' }))
    await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'owner', 'files'])
  },
}

/** With no row header, the last column left cannot be hidden: a table needs one. */
export const LastColumnStays: Story = {
  args: { columns: columns.map(({ isRowHeader: _r, ...c }) => c), defaultVisibleKeys: ['owner'], defaultOpen: true },
  play: async () => {
    const dialog = await body().findByRole('dialog')
    await expect(within(dialog).getByRole('checkbox', { name: 'Owner' })).toHaveAttribute('aria-disabled', 'true')
    await expect(within(dialog).getByRole('checkbox', { name: 'Project' })).not.toHaveAttribute('aria-disabled')
  },
}

const picture = (args: ColumnChooserProps) => (
  <Pictured positioner={popoverStyles.positioner} style={{ display: 'grid', justifyItems: 'end', gap: 6, minInlineSize: '16rem' }}>
    {(container) => <ColumnChooser {...args} open container={container} />}
  </Pictured>
)

/** Open, as a picture: the docs' main example. Owner hidden. */
export const Open: Story = {
  parameters: { picture: true },
  args: { defaultVisibleKeys: ['name', 'status', 'files'] },
  render: picture,
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Button', selector: 'button[aria-haspopup="dialog"]', description: 'An outlined secondary Button, "Columns", with a chevron. Opens the popover.' },
  { name: 'Popover', selector: '[role="dialog"]', description: 'A Popover titled like the button, lined up with its end.' },
  { name: 'Locked column', selector: '[role="dialog"] [role="checkbox"][aria-disabled="true"]', description: 'The row header: always shown, so its box is ticked and disabled.' },
  { name: 'Column checkbox', selector: '[role="dialog"] [role="checkbox"]:not([aria-checked="true"])', description: 'One per column, named by its header, in table order. Ticked means shown.' },
  { name: 'Reset', selector: '[role="dialog"] button:not([aria-haspopup])', description: 'A small ghost Button: brings back the default columns and calls onReset.' },
]

export const Anatomy: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: { defaultVisibleKeys: ['name', 'status', 'files'] },
  render: picture,
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[2]).toHaveAccessibleName('Project')
    await expect(found[3]).toHaveAccessibleName('Owner')
    await expect(found[4]).toHaveTextContent('Reset')
  },
}

/** Specs, States: the closed button, for its own states. */
export const StateButton: Story = { tags: ['!dev'], parameters: { picture: true } }

/** Guidelines, Do: a handful of optional columns, the name locked. */
export const DoFewColumns: Story = { tags: ['!dev'], parameters: { picture: true }, render: picture }

/** Guidelines, Don't: a chooser for a two-column table; there is nothing to choose. */
export const DontTwoColumns: Story = {
  tags: ['!dev'],
  parameters: { picture: true },
  args: { columns: columns.slice(0, 2) },
  render: picture,
}
