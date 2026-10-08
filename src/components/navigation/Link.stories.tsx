import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { Link } from './Link'

const meta = {
  title: 'Components/Navigation/Link',
  tags: ['beta'],
  component: Link,
  args: { href: '#pricing', children: 'See pricing' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'accent', 'secondary'] },
    size: { control: 'inline-radio', options: [undefined, 'sm', 'md', 'lg'] },
    underline: { control: 'inline-radio', options: ['always', 'hover'] },
    render: { control: false },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

const row = { display: 'flex', gap: 'var(--space-6)', alignItems: 'baseline' }

export const Default: Story = {
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: 'See pricing' })
    await expect(link).toHaveAttribute('href', '#pricing')
    await expect(getComputedStyle(link).textDecorationLine).toBe('underline')
  },
}

/** Without a size it takes the size of the sentence around it. */
export const InText: Story = {
  render: (args) => (
    <p style={{ fontSize: 'var(--text-body-lg)', maxInlineSize: '32rem', margin: 0 }}>
      Every plan includes unlimited projects. <Link {...args} /> to compare storage and seats.
    </p>
  ),
  play: async ({ canvas, canvasElement }) => {
    const p = canvasElement.querySelector('p')!
    await expect(getComputedStyle(canvas.getByRole('link')).fontSize).toBe(getComputedStyle(p).fontSize)
  },
}

export const Variants: Story = {
  render: (args) => (
    <div style={row}>
      {(['primary', 'accent', 'secondary'] as const).map((variant) => (
        <Link key={variant} {...args} variant={variant}>
          {variant}
        </Link>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div style={row}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Link key={size} {...args} size={size}>
          {size}
        </Link>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    const sizes = ['sm', 'md', 'lg'].map((n) => parseFloat(getComputedStyle(canvas.getByText(n)).fontSize))
    await expect(sizes[0]).toBeLessThan(sizes[1])
    await expect(sizes[1]).toBeLessThan(sizes[2])
  },
}

/** For navigation lists, where the context already says "these are links". */
export const UnderlineOnHover: Story = {
  args: { underline: 'hover', variant: 'accent' },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link')
    // At rest there is no line; CSS :hover adds it (a synthetic hover cannot trigger :hover).
    await expect(getComputedStyle(link).textDecorationLine).toBe('none')
  },
}

export const External: Story = {
  args: { href: 'https://base-ui.com', isExternal: true, children: 'Base UI docs' },
  play: async ({ canvas }) => {
    // The new tab is announced, not just drawn.
    const link = canvas.getByRole('link', { name: 'Base UI docs (opens in a new tab)' })
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  },
}

export const Disabled: Story = {
  args: { isDisabled: true, onClick: fn() },
  play: async ({ args, canvasElement }) => {
    // No href: it cannot navigate, and so is no longer a link role.
    const a = canvasElement.querySelector('a')!
    await expect(a).not.toHaveAttribute('href')
    await expect(a).toHaveAttribute('aria-disabled', 'true')
    // Its handlers are dropped too: a click does nothing.
    await userEvent.click(a)
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}

/** A router's link keeps its own element; Link only styles it. */
export const Render: Story = {
  args: { render: <a data-router="true" />, href: '/settings', children: 'Settings' },
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: 'Settings' })
    await expect(link).toHaveAttribute('data-router', 'true')
    await expect(link).toHaveAttribute('href', '/settings')
  },
}
