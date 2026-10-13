import { useLayoutEffect, useSyncExternalStore, type ReactNode } from 'react'
import { Theme } from '@/theme/Theme'

/**
 * The Preview theme: how the Playground dresses the item in its frame. It
 * travels to Storybook's preview as globals over the channel, and the preview
 * decorator turns it back into a `<Theme>` around the story.
 */
export const APPEARANCES = ['light', 'dark', 'system'] as const
export type PreviewAppearance = (typeof APPEARANCES)[number]

export interface PreviewTheme {
  appearance: PreviewAppearance
}

export const DEFAULT_PREVIEW_THEME: PreviewTheme = { appearance: 'system' }

const DARK = '(prefers-color-scheme: dark)'

/** Whether the OS asks for dark, kept current as the user switches. */
export function usePrefersDark() {
  return useSyncExternalStore(
    (onChange) => {
      const query = matchMedia(DARK)
      query.addEventListener('change', onChange)
      return () => query.removeEventListener('change', onChange)
    },
    () => matchMedia(DARK).matches,
  )
}

/**
 * Wraps a story in the Preview theme. Runs inside Storybook's preview, so
 * `system` resolves against the frame's own media query.
 */
export function PreviewThemeScope({ appearance, children }: PreviewTheme & { children: ReactNode }) {
  const prefersDark = usePrefersDark()
  const resolved = appearance === 'system' ? (prefersDark ? 'dark' : 'light') : appearance
  // The frame's <html> too: popups portal to <body>, outside the wrapper,
  // and the page behind the story should not stay light under a dark one.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', resolved === 'dark')
    return () => document.documentElement.classList.remove('dark')
  }, [resolved])
  // display: contents keeps the story's own layout; tokens still inherit.
  return (
    <Theme appearance={resolved} data-preview-theme="" style={{ display: 'contents' }}>
      {children}
    </Theme>
  )
}
