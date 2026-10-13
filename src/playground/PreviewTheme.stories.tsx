import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { withPrefersDark } from '@/test/story-helpers'

/**
 * The preview decorator's side of the Preview theme: the globals the
 * Playground sends become a `<Theme>` around the story.
 */
const meta = {
  title: 'Site/Preview theme',
  render: () => <p>Themed content</p>,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const wrapper = (canvasElement: HTMLElement) => canvasElement.querySelector('[data-preview-theme]')

export const Dark: Story = {
  globals: { appearance: 'dark' },
  play: async ({ canvasElement }) => {
    await expect(wrapper(canvasElement)).toHaveClass('dark')
    // Popups portal to <body>: the frame's <html> goes dark with it.
    await expect(document.documentElement).toHaveClass('dark')
  },
}

export const Light: Story = {
  globals: { appearance: 'light' },
  play: async ({ canvasElement }) => {
    await expect(wrapper(canvasElement)).toHaveClass('light')
    await expect(document.documentElement).not.toHaveClass('dark')
  },
}

export const SystemOnDarkOs: Story = {
  globals: { appearance: 'system' },
  beforeEach: withPrefersDark(true),
  play: async ({ canvasElement }) => {
    await expect(wrapper(canvasElement)).toHaveClass('dark')
  },
}

export const SystemOnLightOs: Story = {
  globals: { appearance: 'system' },
  beforeEach: withPrefersDark(false),
  play: async ({ canvasElement }) => {
    await expect(wrapper(canvasElement)).toHaveClass('light')
  },
}

export const ColorAndRadius: Story = {
  globals: { appearance: 'light', accent: 'rose', gray: 'slate', radius: 'full' },
  play: async ({ canvasElement }) => {
    const scope = wrapper(canvasElement) as HTMLElement
    await expect(scope).toHaveAttribute('data-accent', 'rose')
    await expect(scope).toHaveAttribute('data-gray', 'slate')
    await expect(scope.style.getPropertyValue('--radius-factor')).toBe('1.5')
    await expect(scope.style.getPropertyValue('--radius-full')).toBe('9999px')
    // Popups portal to <body>: the frame's <html> wears the same.
    await expect(document.documentElement).toHaveAttribute('data-accent', 'rose')
    await expect(document.documentElement.style.getPropertyValue('--radius-factor')).toBe('1.5')
  },
}

/** A value the kit does not have is dropped: the default stays. */
export const UnknownValues: Story = {
  globals: { appearance: 'light', accent: 'foo', radius: 'huge' },
  play: async ({ canvasElement }) => {
    const scope = wrapper(canvasElement) as HTMLElement
    await expect(scope).not.toHaveAttribute('data-accent')
    await expect(scope.style.getPropertyValue('--radius-factor')).toBe('')
  },
}

/** Outside the Playground no appearance is set: no wrapper, the toolbar's theme as before. */
export const ToolbarTheme: Story = {
  globals: { theme: 'dark' },
  play: async ({ canvasElement }) => {
    await expect(wrapper(canvasElement)).toBeNull()
    await expect(document.documentElement).toHaveClass('dark')
  },
}
