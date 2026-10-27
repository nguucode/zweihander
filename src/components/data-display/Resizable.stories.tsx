import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { expect, fn, userEvent, waitFor } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Resizable } from './Resizable'

const Pane = ({ title, children }: { title: string; children?: ReactNode }) => (
  <div style={{ padding: 'var(--space-4)', display: 'grid', gap: 'var(--space-2)', alignContent: 'start' }}>
    <strong>{title}</strong>
    <span style={{ color: 'var(--muted-foreground)' }}>{children}</span>
  </div>
)

const frame = { blockSize: 240, inlineSize: 600, maxInlineSize: '100%', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }

const meta = {
  title: 'Components/Data Display/Resizable',
  tags: ['experimental'],
  component: Resizable,
  args: {
    start: <Pane title="Inbox">Messages, newest first.</Pane>,
    end: <Pane title="Message">The message picked on the left.</Pane>,
    handleLabel: 'Resize inbox',
  },
  decorators: [(Story) => <div style={frame}>{Story()}</div>],
  // Every prop is listed by hand, with its type and default: these
  // descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    start: {
      description: 'The first pane: on the inline start side by side, on top when stacked. The handle sets its size.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    end: {
      description: 'The second pane. It takes the space the first leaves.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    orientation: {
      description: '`horizontal` puts the panes side by side with an upright handle; `vertical` stacks them with a flat one.',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      table: { type: { summary: "'horizontal' | 'vertical'" }, defaultValue: { summary: "'horizontal'" } },
    },
    size: {
      description: 'The first pane\'s size in percent of the whole, for controlled use. Pair with `onSizeChange`.',
      control: { type: 'number', min: 0, max: 100 },
      table: { type: { summary: 'number' } },
    },
    defaultSize: {
      description: 'The first pane\'s starting size in percent, when uncontrolled.',
      control: { type: 'number', min: 0, max: 100 },
      table: { type: { summary: 'number' }, defaultValue: { summary: '50' } },
    },
    onSizeChange: {
      description: 'Called with the first pane\'s new size in percent while the handle moves. Store it to keep the split across visits.',
      table: { type: { summary: '(size: number) => void' } },
    },
    minSize: {
      description: 'The first pane\'s smallest size in percent. Home moves the handle here.',
      control: { type: 'number', min: 0, max: 100 },
      table: { type: { summary: 'number' }, defaultValue: { summary: '10' } },
    },
    maxSize: {
      description: 'The first pane\'s largest size in percent. End moves the handle here.',
      control: { type: 'number', min: 0, max: 100 },
      table: { type: { summary: 'number' }, defaultValue: { summary: '90' } },
    },
    handleLabel: {
      description: 'The handle\'s accessible name. Name it after the first pane: "Resize inbox".',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Resize'" } },
    },
    className: { table: { disable: true } },
    style: { table: { disable: true } },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Resizable>

export default meta
type Story = StoryObj<typeof meta>

const width = (el: Element) => el.getBoundingClientRect().width
const height = (el: Element) => el.getBoundingClientRect().height

/** Drag the line between the panes, or focus it and use the arrow keys. */
export const Default: Story = {
  args: { onSizeChange: fn() },
  play: async ({ args, canvas, canvasElement, step }) => {
    const handle = canvas.getByRole('separator', { name: 'Resize inbox' })
    const root = canvasElement.querySelector(':scope > div > div')!
    const first = root.firstElementChild!
    await step('The handle is a focusable vertical separator for the first pane, its size as the value', async () => {
      await expect(handle).toHaveAttribute('aria-orientation', 'vertical')
      await expect(handle).toHaveAttribute('aria-controls', first.id)
      await expect(handle).toHaveAttribute('aria-valuenow', '50')
      await expect(handle).toHaveAttribute('aria-valuemin', '10')
      await expect(handle).toHaveAttribute('aria-valuemax', '90')
      await userEvent.tab()
      await expect(handle).toHaveFocus()
    })
    await step('Arrow Right moves the handle 16px right, Arrow Left 16px left', async () => {
      const before = width(first)
      await userEvent.keyboard('{ArrowRight}')
      await waitFor(() => expect(width(first)).toBeCloseTo(before + 16, 0))
      await expect(args.onSizeChange).toHaveBeenCalled()
      await userEvent.keyboard('{ArrowLeft}{ArrowLeft}')
      await waitFor(() => expect(width(first)).toBeCloseTo(before - 16, 0))
    })
    await step('End moves it to the largest size, Home to the smallest', async () => {
      await userEvent.keyboard('{End}')
      await expect(handle).toHaveAttribute('aria-valuenow', '90')
      await userEvent.keyboard('{Home}')
      await expect(handle).toHaveAttribute('aria-valuenow', '10')
      await waitFor(() => expect(width(first) / width(root)).toBeCloseTo(0.1, 2))
    })
    await step('Dragging the handle moves it by the distance dragged', async () => {
      const before = width(first)
      const { x, y } = handle.getBoundingClientRect()
      await userEvent.pointer([
        { keys: '[MouseLeft>]', target: handle, coords: { clientX: x, clientY: y } },
        { target: handle, coords: { clientX: x + 60, clientY: y } },
        { keys: '[/MouseLeft]', target: handle, coords: { clientX: x + 60, clientY: y } },
      ])
      await waitFor(() => expect(width(first)).toBeCloseTo(before + 60, 0))
    })
  },
}

/** Stacked panes: the handle lies flat and moves with Arrow Up and Arrow Down. */
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    start: <Pane title="Query">select * from invoices</Pane>,
    end: <Pane title="Results">12 rows</Pane>,
    handleLabel: 'Resize query',
  },
  play: async ({ canvas, canvasElement }) => {
    const handle = canvas.getByRole('separator', { name: 'Resize query' })
    const first = canvasElement.querySelector(':scope > div > div > div:first-child')!
    await expect(handle).toHaveAttribute('aria-orientation', 'horizontal')
    handle.focus()
    const before = height(first)
    await userEvent.keyboard('{ArrowDown}')
    await waitFor(() => expect(height(first)).toBeCloseTo(before + 16, 0))
    await userEvent.keyboard('{ArrowUp}{ArrowUp}')
    await waitFor(() => expect(height(first)).toBeCloseTo(before - 16, 0))
    // The other axis does nothing.
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(height(first)).toBeCloseTo(before - 16, 0))
  },
}

/** Limits: the first pane stays between 20% and 40%, however far the handle is dragged. */
export const Limits: Story = {
  args: { defaultSize: 30, minSize: 20, maxSize: 40 },
  play: async ({ canvas }) => {
    const handle = canvas.getByRole('separator')
    const { x, y } = handle.getBoundingClientRect()
    await userEvent.pointer([
      { keys: '[MouseLeft>]', target: handle, coords: { clientX: x, clientY: y } },
      { target: handle, coords: { clientX: x + 500, clientY: y } },
      { keys: '[/MouseLeft]', target: handle, coords: { clientX: x + 500, clientY: y } },
    ])
    await expect(handle).toHaveAttribute('aria-valuenow', '40')
    await userEvent.pointer([
      { keys: '[MouseLeft>]', target: handle, coords: { clientX: x, clientY: y } },
      { target: handle, coords: { clientX: x - 500, clientY: y } },
      { keys: '[/MouseLeft]', target: handle, coords: { clientX: x - 500, clientY: y } },
    ])
    await expect(handle).toHaveAttribute('aria-valuenow', '20')
  },
}

/** Right to left: the first pane is on the right, so Arrow Left grows it. */
export const Rtl: Story = {
  decorators: [(Story) => <div dir="rtl">{Story()}</div>],
  play: async ({ canvas }) => {
    const handle = canvas.getByRole('separator')
    handle.focus()
    await userEvent.keyboard('{ArrowLeft}')
    await waitFor(() => expect(Number(handle.getAttribute('aria-valuenow'))).toBeGreaterThan(50))
    await userEvent.keyboard('{ArrowRight}{ArrowRight}')
    await waitFor(() => expect(Number(handle.getAttribute('aria-valuenow'))).toBeLessThan(50))
  },
}

/** The size owned by the caller: the handle reports, the caller decides. */
export const Controlled: Story = {
  args: { size: 30, onSizeChange: fn() },
  play: async ({ args, canvas }) => {
    const handle = canvas.getByRole('separator')
    handle.focus()
    await userEvent.keyboard('{End}')
    await expect(args.onSizeChange).toHaveBeenLastCalledWith(90)
    // Not stored by the caller, so it stays where it was.
    await expect(handle).toHaveAttribute('aria-valuenow', '30')
  },
}

/** Three panes: a Resizable in the second pane of another. Each handle is named after its own pane. */
export const DoNameEachHandle: Story = {
  tags: ['!dev'],
  args: {
    defaultSize: 25,
    start: <Pane title="Folders" />,
    handleLabel: 'Resize folders',
    end: <Resizable defaultSize={40} start={<Pane title="Inbox" />} end={<Pane title="Message" />} handleLabel="Resize inbox" />,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('separator', { name: 'Resize folders' })).toBeInTheDocument()
    await expect(canvas.getByRole('separator', { name: 'Resize inbox' })).toBeInTheDocument()
  },
}

/** Both handles keep the default name: a screen reader hears "Resize" twice and cannot tell them apart. */
export const DontKeepDefaultName: Story = {
  tags: ['!dev'],
  args: {
    defaultSize: 25,
    start: <Pane title="Folders" />,
    handleLabel: undefined,
    end: <Resizable defaultSize={40} start={<Pane title="Inbox" />} end={<Pane title="Message" />} />,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('separator', { name: 'Resize' })).toHaveLength(2)
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Pane A', selector: 'div:has(+ [role="separator"])', description: 'The first pane. Its size is a percentage of the whole, set by the handle; it scrolls when its content is longer.' },
  { name: 'Handle', selector: '[role="separator"]', description: 'A 1px `--border` line with a 24px hit area (44px on touch). Hover and drag turn it 2px `--primary`.' },
  { name: 'Pane B', selector: '[role="separator"] + div', description: 'The second pane: the space the first leaves.' },
]

export const Anatomy: Story = {
  tags: ['!dev'],
  args: { defaultSize: 40 },
  play: async ({ canvasElement }) => {
    await expectAnatomy(canvasElement, anatomyParts)
  },
}
