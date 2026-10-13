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

/** Outside the Playground no appearance is set: no wrapper, the toolbar's theme as before. */
export const ToolbarTheme: Story = {
  globals: { theme: 'dark' },
  play: async ({ canvasElement }) => {
    await expect(wrapper(canvasElement)).toBeNull()
    await expect(document.documentElement).toHaveClass('dark')
  },
}
