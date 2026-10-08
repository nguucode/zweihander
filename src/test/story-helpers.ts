// Helpers for play functions only: not part of the registry or the npm build.

const ctx = document.createElement('canvas').getContext('2d', { willReadFrequently: true })!

/** Any CSS colour (oklch, alpha) to sRGB, painted over the layers beneath it. */
export const paint = (...layers: string[]) => {
  ctx.clearRect(0, 0, 1, 1)
  for (const layer of layers) {
    ctx.fillStyle = layer
    ctx.fillRect(0, 0, 1, 1)
  }
  return [...ctx.getImageData(0, 0, 1, 1).data.slice(0, 3)]
}

/** WCAG relative luminance of an sRGB triple. */
export const lum = (rgb: number[]) =>
  rgb
    .map((c) => c / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
    .reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0)

/** WCAG ratio of `fg` on the stacked backgrounds, page first. */
export const contrast = (fg: string, ...under: string[]) => {
  const [x, y] = [lum(paint(...under, fg)), lum(paint(...under))].sort((m, n) => n - m)
  return (x + 0.05) / (y + 0.05)
}

const sheetRules = () =>
  [...document.styleSheets].flatMap((sheet) => {
    try {
      return [...sheet.cssRules]
    } catch {
      return [] // cross-origin sheet
    }
  })

/**
 * Style rules inside `@media <query>` that reach `el` (or its `pseudo`), read
 * from the shipped stylesheets. A play cannot switch the pointer type or
 * reduced motion, so it reads the rule that would apply.
 */
export const mediaRules = (query: string, el: Element, pseudo = '') =>
  sheetRules()
    .filter((r): r is CSSMediaRule => r instanceof CSSMediaRule && r.conditionText.includes(query))
    .flatMap((m) => [...m.cssRules])
    .filter(
      (r): r is CSSStyleRule =>
        r instanceof CSSStyleRule &&
        r.selectorText
          .split(',')
          .map((sel) => sel.trim())
          .some((sel) => sel.endsWith(pseudo) && el.matches(sel.slice(0, sel.length - pseudo.length))),
    )

/** The `:hover` rules that reach `el`: a play cannot hover for CSS. */
export const hoverRules = (el: Element) =>
  sheetRules().filter(
    (r): r is CSSStyleRule =>
      r instanceof CSSStyleRule && r.selectorText.includes(':hover') && el.matches(r.selectorText.replaceAll(':hover', '')),
  )
