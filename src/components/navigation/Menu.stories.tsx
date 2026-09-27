import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Icon } from '@/lib/icon'
import { Button } from '../buttons/Button'
import { Menu } from './Menu'

const onDuplicate = fn()
const onDelete = fn()

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' } },
  args: {
    trigger: (
      <Button appearance="outlined" variant="accent" endIcon={<Icon name="chevron-down" />}>
        Actions
      </Button>
    ),
    items: [
      { label: 'Edit', icon: <Icon name="calendar" />, shortcut: '⌘ E' },
      { label: 'Duplicate', icon: <Icon name="plus" />, shortcut: '⌘ D', onSelect: onDuplicate },
      { label: 'Archive', disabled: true },
      { type: 'separator' },
      { label: 'Delete', icon: <Icon name="close" />, isDestructive: true, onSelect: onDelete },
    ],
  },
  argTypes: {
    side: { control: 'inline-radio', options: ['top', 'right', 'bottom', 'left'] },
    align: { control: 'inline-radio', options: ['start', 'center', 'end'] },
    trigger: { control: false },
    items: { control: false },
  },
  decorators: [(Story) => <div style={{ minBlockSize: '18rem' }}>{Story()}</div>],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

const body = () => within(document.body)

export const Default: Story = {
  play: async ({ canvas }) => {
    onDuplicate.mockClear()
    const trigger = canvas.getByRole('button', { name: 'Actions' })
    await expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    await userEvent.click(trigger)
    const menu = await body().findByRole('menu')
    await expect(within(menu).getAllByRole('menuitem')).toHaveLength(4)
    await expect(within(menu).getByRole('menuitem', { name: /Archive/ })).toHaveAttribute('aria-disabled', 'true')
    // Keyboard: arrows move, disabled items are skipped, Enter selects and closes.
    await userEvent.keyboard('{ArrowDown}')
    await waitFor(() => expect(within(menu).getByRole('menuitem', { name: /Edit/ })).toHaveFocus())
    await userEvent.keyboard('{ArrowDown}{Enter}')
    await expect(onDuplicate).toHaveBeenCalledOnce()
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull())
    await expect(trigger).toHaveFocus()
  },
}

export const Typeahead: Story = {
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Actions' }))
    const menu = await body().findByRole('menu')
    await userEvent.keyboard('del')
    await waitFor(() => expect(within(menu).getByRole('menuitem', { name: /Delete/ })).toHaveFocus())
  },
}

export const Groups: Story = {
  args: {
    trigger: <Button appearance="outlined" variant="accent">View</Button>,
    items: [
      {
        type: 'group',
        label: 'Show',
        items: [
          { type: 'checkbox', label: 'Hidden files', defaultChecked: false },
          { type: 'checkbox', label: 'File extensions', defaultChecked: true },
        ],
      },
      { type: 'separator' },
      {
        type: 'radio',
        label: 'Sort by',
        defaultValue: 'name',
        options: [
          { value: 'name', label: 'Name' },
          { value: 'modified', label: 'Date modified' },
          { value: 'size', label: 'Size' },
        ],
      },
    ],
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'View' }))
    const menu = await body().findByRole('menu')
    const hidden = within(menu).getByRole('menuitemcheckbox', { name: 'Hidden files' })
    await expect(hidden).toHaveAttribute('aria-checked', 'false')
    await userEvent.click(hidden)
    // Toggles stay open, so several can be changed in one go.
    await expect(hidden).toHaveAttribute('aria-checked', 'true')
    const size = within(menu).getByRole('menuitemradio', { name: 'Size' })
    await userEvent.click(size)
    await expect(size).toHaveAttribute('aria-checked', 'true')
    await expect(within(menu).getByRole('menuitemradio', { name: 'Name' })).toHaveAttribute('aria-checked', 'false')
    // The popup fades in from opacity 0; wait for it rather than race it.
    await waitFor(() => expect(within(menu).getByRole('group', { name: 'Sort by' })).toBeVisible())
  },
}

export const Submenu: Story = {
  args: {
    items: [
      { label: 'Rename' },
      {
        label: 'Move to',
        items: [
          { label: 'Design' },
          { label: 'Engineering' },
          { label: 'Archive' },
        ],
      },
      { type: 'separator' },
      { label: 'Delete', isDestructive: true },
    ],
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Actions' }))
    const menu = await body().findByRole('menu')
    const move = within(menu).getByRole('menuitem', { name: 'Move to' })
    await expect(move).toHaveAttribute('aria-haspopup', 'menu')
    await userEvent.keyboard('{ArrowDown}{ArrowDown}')
    await waitFor(() => expect(move).toHaveFocus())
    await userEvent.keyboard('{ArrowRight}')
    await waitFor(() => expect(body().getAllByRole('menu')).toHaveLength(2))
    await waitFor(() => expect(body().getByRole('menuitem', { name: 'Design' })).toHaveFocus())
    // Left goes back to the parent item.
    await userEvent.keyboard('{ArrowLeft}')
    await waitFor(() => expect(move).toHaveFocus())
  },
}

export const Links: Story = {
  args: {
    trigger: <Button appearance="ghost" variant="accent">Help</Button>,
    items: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Keyboard shortcuts', href: '#shortcuts' },
      { label: 'Billing', href: '#billing', disabled: true },
      { type: 'separator' },
      { label: 'Contact support', href: '#support' },
    ],
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Help' }))
    const menu = await body().findByRole('menu')
    await expect(within(menu).getByRole('menuitem', { name: 'Documentation' })).toHaveAttribute('href', '#docs')
    // A disabled link is inert: no href to follow.
    const billing = within(menu).getByRole('menuitem', { name: 'Billing' })
    await expect(billing).toHaveAttribute('aria-disabled', 'true')
    await expect(billing).not.toHaveAttribute('href')
  },
}
