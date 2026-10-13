import { useLayoutEffect, useRef, useSyncExternalStore, type ReactNode } from 'react'
import { ACCENT_COLORS, GRAY_COLORS, Theme, type AccentColor, type GrayColor, type Radius } from '@/theme/Theme'

/**
 * The Preview theme: how the Playground dresses the item in its frame. It
 * travels to Storybook's preview as globals over the channel, and the preview
 * decorator turns it back into a `<Theme>` around the story.
 */
export const APPEARANCES = ['light', 'dark', 'system'] as const
export type PreviewAppearance = (typeof APPEARANCES)[number]

// A record, not a list, so a preset added to Theme fails here until it is listed.
export const RADII = Object.keys({ none: 0, small: 0, medium: 0, large: 0, full: 0 } satisfies Record<Radius, 0>) as Radius[]

export interface PreviewTheme {
  accent: AccentColor
  gray: GrayColor
  radius: Radius
  appearance: PreviewAppearance
}

/** The kit's own defaults: what a `<Theme>` with no props looks like. */
export const DEFAULT_PREVIEW_THEME: PreviewTheme = { accent: 'blue', gray: 'gray', radius: 'medium', appearance: 'system' }

/** The values each option takes. The keys double as the globals' names. */
export const PREVIEW_THEME_VALUES: { [K in keyof PreviewTheme]: readonly PreviewTheme[K][] } = {
  accent: ACCENT_COLORS,
  gray: GRAY_COLORS,
  radius: RADII,
  appearance: APPEARANCES,
}

/** The option's value if `raw` is one of its values, else undefined. */
export const parsePreviewTheme = <K extends keyof PreviewTheme>(key: K, raw: unknown) =>
  (PREVIEW_THEME_VALUES[key] as readonly unknown[]).includes(raw) ? (raw as PreviewTheme[K]) : undefined

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

/** Light or dark: `system` follows the OS. */
export const resolveAppearance = (appearance: PreviewAppearance, prefersDark: boolean) =>
  appearance === 'system' ? (prefersDark ? 'dark' : 'light') : appearance

/**
 * Wraps a story in the Preview theme. Runs inside Storybook's preview, so
 * `system` resolves against the frame's own media query.
 */
export function PreviewThemeScope({
  accent,
  gray,
  radius,
  appearance,
  children,
}: Partial<PreviewTheme> & Pick<PreviewTheme, 'appearance'> & { children: ReactNode }) {
  const prefersDark = usePrefersDark()
  const resolved = resolveAppearance(appearance, prefersDark)
  const scope = useRef<HTMLDivElement>(null)
  // The frame's <html> too: popups portal to <body>, outside the wrapper,
  // and the page behind the story should not stay light under a dark one.
  // It copies what the wrapper got, so <Theme> stays the one mapping.
  useLayoutEffect(() => {
    const html = document.documentElement
    const from = scope.current!
    html.classList.toggle('dark', resolved === 'dark')
    const attributes = ['data-accent', 'data-gray'].filter((name) => from.hasAttribute(name))
    const tokens = [...from.style].filter((name) => name.startsWith('--'))
    for (const name of attributes) html.setAttribute(name, from.getAttribute(name)!)
    for (const name of tokens) html.style.setProperty(name, from.style.getPropertyValue(name))
    return () => {
      html.classList.remove('dark')
      for (const name of attributes) html.removeAttribute(name)
      for (const name of tokens) html.style.removeProperty(name)
    }
  }, [resolved, accent, gray, radius])
  // display: contents keeps the story's own layout; tokens still inherit.
  return (
    <Theme
      ref={scope}
      appearance={resolved}
      accentColor={accent}
      grayColor={gray}
      radius={radius}
      data-preview-theme=""
      style={{ display: 'contents' }}
    >
      {children}
    </Theme>
  )
}
