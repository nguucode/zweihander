import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { Link } from './Link'

const meta = {
  title: 'Components/Navigation/Link',
  tags: ['beta'],
  component: Link,
  args: { href: '#pricing', children: 'See pricing' },
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    href: {
      description: 'Where it goes. Without one (or with `isDisabled`) it cannot navigate and is no longer a link to assistive tech.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    children: {
      description: 'The link text. Say where it goes ("See pricing"), not "click here".',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    variant: {
      description: 'Colour. `accent` is the foreground, as on Button; `secondary` is muted, for footers and meta text.',
      control: 'inline-radio',
      options: ['primary', 'accent', 'secondary'],
      table: { type: { summary: "'primary' | 'accent' | 'secondary'" }, defaultValue: { summary: "'primary'" } },
    },
    size: {
      description: 'Text size: `body-sm`, `body` or `body-lg`. Omit it to inherit the size of the sentence around the link.',
      control: 'inline-radio',
      options: [undefined, 'sm', 'md', 'lg'],
      table: { type: { summary: "'sm' | 'md' | 'lg'" }, defaultValue: { summary: 'inherit' } },
    },
    underline: {
      description: '`always` inside running text: colour alone does not mark a link. `hover` only where the context already says "these are links", like a nav list.',
      control: 'inline-radio',
      options: ['always', 'hover'],
      table: { type: { summary: "'always' | 'hover'" }, defaultValue: { summary: "'always'" } },
    },
    isExternal: {
      description: 'Opens in a new tab, with `rel="noopener noreferrer"`, an external icon and "(opens in a new tab)" for screen readers.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isDisabled: {
      description: 'Drops `href` and every `on*` handler, so it cannot navigate; sets `aria-disabled`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    render: {
      description: "Replaces the rendered element, e.g. a router's `<Link />`. Props and styles merge onto it.",
      control: false,
      table: { type: { summary: 'ReactElement | (props, state) => ReactElement' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

const row = { display: 'flex', gap: 'var(--space-6)', alignItems: 'baseline' }

export const Default: Story = {
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: 'See pricing' })
    await expect(link).toHaveAttribute('href', '#pricing')
    await expect(getComputedStyle(link).textDecorationLine).toBe('underline')
    // A real link: in the tab order.
    await userEvent.tab()
    await expect(link).toHaveFocus()
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
    // And it is out of the tab order.
    await userEvent.tab()
    await expect(a).not.toHaveFocus()
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

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Text', selector: 'a > span:first-child', description: 'The link\'s name, underlined: 1px, 2px on hover.' },
  { name: 'External icon', selector: 'a > svg', description: 'With isExternal: an arrow out of a box. Decorative; screen readers hear "(opens in a new tab)" instead.' },
]

/** Every part present, the text in its own element so the docs can point at it. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { href: 'https://base-ui.com', isExternal: true, size: 'lg', children: <span>Base UI docs</span> },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[0]).toHaveTextContent('Base UI docs')
  },
}

const sentence = { fontSize: 'var(--text-body)', maxInlineSize: '24rem', margin: 0 }

/** Guidelines, Do: the link text says where it goes. */
export const DoSayWhere: Story = {
  render: (args) => (
    <p style={sentence}>
      Storage depends on the plan. <Link {...args}>Compare plans</Link> before you upgrade.
    </p>
  ),
}

/** Guidelines, Don't: "click here" means nothing out of context, e.g. in a screen reader's list of links. */
export const DontClickHere: Story = {
  tags: ['!dev'],
  render: (args) => (
    <p style={sentence}>
      Storage depends on the plan. To compare plans, <Link {...args}>click here</Link>.
    </p>
  ),
}
