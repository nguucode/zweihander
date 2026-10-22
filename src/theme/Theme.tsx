'use client'

import type { ComponentProps, CSSProperties } from 'react'
import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cn } from '@/lib/utils'
/* The palette names come out of the same build as the [data-accent] /
   [data-gray] blocks they have to match, so a hue cannot exist in one and
   not the other. Re-exported here because this is where consumers look. */
import type { AccentColor, GrayColor } from '@/theme/palettes'

export { ACCENT_COLORS, GRAY_COLORS } from '@/theme/palettes'
export type { AccentColor, GrayColor }

export type Appearance = 'light' | 'dark' | 'inherit'

export type Radius = 'sharp' | 'rounded' | 'full-rounded'

/**
 * Each preset scales the whole radius scale. Only `full-rounded` raises
 * `--radius-full`, which is what lets controls opt into a pill while fields
 * and panels keep their step. `rounded` is the default.
 */
const RADIUS_PRESETS: Record<Radius, Record<string, string>> = {
  sharp: { 'radius-factor': '0', 'radius-full': '0px' },
  rounded: { 'radius-factor': '1', 'radius-full': '0px' },
  'full-rounded': { 'radius-factor': '1.5', 'radius-full': '9999px' },
}

export const SCALINGS = ['90%', '95%', '100%', '105%', '110%'] as const
export type Scaling = (typeof SCALINGS)[number]

export const DENSITIES = ['default', 'compact'] as const
export type Density = (typeof DENSITIES)[number]

export const CANVASES = ['plain', 'neutral', 'tinted'] as const
export type Canvas = (typeof CANVASES)[number]

export const CONTENT_STYLES = ['card', 'flat'] as const
export type ContentStyle = (typeof CONTENT_STYLES)[number]

export interface ThemeProps extends ComponentProps<'div'> {
  /** `inherit` (default) leaves the surrounding appearance alone. */
  appearance?: Appearance
  /**
   * The brand hue. Drives `--primary` and `--ring` — not the token named
   * `--accent`, which is a subtle surface and a different thing entirely.
   */
  accentColor?: AccentColor
  /** The neutral ramp behind backgrounds, text, borders and muted surfaces. */
  grayColor?: GrayColor
  /** Multiplies spacing and the type scale. */
  scaling?: Scaling
  /**
   * Picks the numbers behind the spacing roles, the control tier, the type
   * scale and component sizes: `compact` tightens each, keeping every size.
   * Inherits when omitted. Independent of `scaling`, which multiplies.
   */
  density?: Density
  /** Rescales rounding for this scope. Inherits when omitted. */
  radius?: Radius
  /**
   * What an AppShell sits on: `plain` (the card colour), `neutral` (the page
   * gray) or `tinted` (the accent's subtle step). For any other colour or a
   * gradient, pass `tokens={{ canvas, 'canvas-solid', 'canvas-foreground',
   * 'canvas-muted-foreground' }}` (`canvas-solid`: one colour standing for
   * it, for rings and fills), and for a transparent NavSidebar on it
   * `canvas-hover`, `canvas-selected`, `canvas-field`, `canvas-field-border`,
   * `canvas-badge`, `canvas-badge-foreground`; contrast is then yours to
   * check, in both appearances. Inherits when omitted; the default is `neutral`.
   */
  canvas?: Canvas
  /**
   * How an AppShell's content meets the canvas: `flat` puts it on one card
   * surface inset from the edges, `card` leaves it on the canvas so each block
   * is its own Card (`appearance="surface"`). Inherits when omitted; the
   * default is `flat`.
   */
  contentStyle?: ContentStyle
  /**
   * Token overrides for this scope, without the `--` prefix:
   * `{ radius: '1rem', primary: 'oklch(0.55 0.2 260)' }`. Any custom property
   * works, including ones Zweihänder doesn't define.
   */
  tokens?: Record<string, string>
  /** Apply to this element instead of rendering a wrapper `<div>`. */
  render?: useRender.RenderProp
}

export function Theme({
  appearance = 'inherit',
  accentColor,
  grayColor,
  scaling,
  density,
  radius,
  canvas,
  contentStyle,
  tokens,
  render,
  className,
  style,
  ...props
}: ThemeProps) {
  // `tokens` is applied last so an explicit --radius-factor or --scaling can
  // override whatever preset selected it.
  const resolved = {
    ...(radius && RADIUS_PRESETS[radius]),
    ...(scaling && { scaling: String(Number.parseInt(scaling, 10) / 100) }),
    ...tokens,
  }
  return useRender({
    render,
    defaultTagName: 'div',
    props: mergeProps<'div'>(
      {
        // Attributes rather than inline styles: an accent is a whole palette
        // of six values, and [data-accent] keeps them in the stylesheet
        // instead of restating them on every scope.
        'data-accent': accentColor,
        'data-gray': grayColor,
        'data-density': density,
        'data-canvas': canvas,
        'data-content-style': contentStyle,
        className: cn(appearance !== 'inherit' && appearance, className),
        style: { ...tokensToStyle(resolved), ...style } as CSSProperties,
      } as ComponentProps<'div'>,
      props,
    ),
  })
}

function tokensToStyle(tokens: Record<string, string> | undefined) {
  if (!tokens) return undefined
  return Object.fromEntries(
    Object.entries(tokens).map(([name, value]) => [
      name.startsWith('--') ? name : `--${name}`,
      value,
    ]),
  )
}
