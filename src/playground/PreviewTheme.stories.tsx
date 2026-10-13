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

export const Typography: Story = {
  globals: { appearance: 'light', font: 'inter', scaling: '110%' },
  play: async ({ canvasElement }) => {
    const scope = wrapper(canvasElement) as HTMLElement
    await expect(scope.style.getPropertyValue('--font-sans')).toContain('Inter')
    await expect(scope.style.getPropertyValue('--scaling')).toBe('1.1')
    // Headings follow: --font-heading derives from --font-sans on every element.
    const text = canvasElement.querySelector('p')!
    await expect(getComputedStyle(text).getPropertyValue('--font-heading')).toContain('Inter')
    await expect(getComputedStyle(text).fontFamily).toContain('Inter')
    // Popups portal to <body>: the frame's <html> wears the same.
    await expect(getComputedStyle(document.body).getPropertyValue('--font-heading')).toContain('Inter')
    await expect(document.documentElement.style.getPropertyValue('--scaling')).toBe('1.1')
    // The face is there: bundled with the preview (the build has no font CDN request).
    await document.fonts.load('16px "Inter Variable"')
    await expect(document.fonts.check('16px "Inter Variable"')).toBe(true)
  },
}

/** System is the token's own stack: nothing set, so the default stays. */
export const SystemFont: Story = {
  globals: { appearance: 'light', font: 'system', scaling: '100%' },
  play: async ({ canvasElement }) => {
    const scope = wrapper(canvasElement) as HTMLElement
    await expect(scope.style.getPropertyValue('--font-sans')).toBe('')
    await expect(scope.style.getPropertyValue('--scaling')).toBe('1')
  },
}

/** A value the kit does not have is dropped: the default stays. */
export const UnknownValues: Story = {
  globals: { appearance: 'light', accent: 'foo', radius: 'huge', font: 'comic', scaling: '200%' },
  play: async ({ canvasElement }) => {
    const scope = wrapper(canvasElement) as HTMLElement
    await expect(scope).not.toHaveAttribute('data-accent')
    await expect(scope.style.getPropertyValue('--radius-factor')).toBe('')
    await expect(scope.style.getPropertyValue('--font-sans')).toBe('')
    await expect(scope.style.getPropertyValue('--scaling')).toBe('')
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
