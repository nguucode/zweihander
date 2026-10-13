import type { Meta, StoryObj } from '@storybook/react-vite'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { expect } from 'storybook/test'
import { PreviewWindow } from './PreviewWindow'

/** The Stage on its own: what the Playground stories rely on, pinned down without timing. */
const meta = {
  title: 'Site/Playground/Stage',
  render: () => <div />,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * The window is in the DOM as soon as React commits, not one rendering step
 * later when a ResizeObserver first reports the Stage's size. WebKit ran
 * play functions in that gap, so a plain `getByTestId` found no window.
 */
export const WindowOnFirstCommit: Story = {
  play: async ({ canvasElement }) => {
    const host = document.createElement('div')
    host.style.cssText = 'display: flex; inline-size: 800px; block-size: 600px'
    canvasElement.append(host)
    const root = createRoot(host)
    flushSync(() =>
      root.render(
        <PreviewWindow vp="desktop" theme={{ accent: 'blue', gray: 'slate', appearance: 'light' }}>
          <p>Page</p>
        </PreviewWindow>,
      ),
    )
    // Read in the same task as the render: no await between them.
    const win = host.querySelector<HTMLElement>('[data-testid="preview-window"]')
    const scaled = win?.getBoundingClientRect().width
    root.unmount()
    host.remove()
    await expect(win).not.toBeNull()
    // Already scaled to the room inside the padding, not 0 or full size.
    await expect(scaled).toBeGreaterThan(0)
    await expect(scaled).toBeLessThan(800)
  },
}
