// Measures every padding, gap and margin under an element from the rendered
// page. Shared by the spacing overlay and the component density review.

export type Kind = 'padding' | 'gap' | 'margin'
export interface Spacing {
  id: number
  /** Stable across two renders of the same tree: element order, property, gap index. */
  key: string
  kind: Kind
  prop: string
  px: number
  owner: string
  isLayout: boolean
  x: number
  y: number
  w: number
  h: number
}

const MOD = /^(.+?)-module__(.+)$/
const ownName = (el: HTMLElement) => {
  if (el.dataset.spec) return el.dataset.spec
  const mods = [...el.classList].map((c) => c.match(MOD)).filter((m): m is RegExpMatchArray => !!m)
  if (!mods.length) return null
  return `${mods[0][1]} › ${mods
    .map((m) => m[2])
    .slice(0, 2)
    .join('.')}`
}
export const describe = (el: HTMLElement) => {
  const own = ownName(el)
  if (own) return own
  let p = el.parentElement
  while (p && !ownName(p)) p = p.parentElement
  const tag = el.tagName.toLowerCase()
  return p ? `${ownName(p)} › ${tag}` : tag
}
const num = (v: string) => (v === 'normal' ? 0 : parseFloat(v) || 0)
export const round = (v: number) => Math.round(v * 4) / 4

/**
 * `keepMargin` decides which margins count: auto margins compute to a used
 * length, so callers pass only values on their scale.
 */
export function measureSpacing(frame: HTMLElement, scale: number, keepMargin: (px: number) => boolean): Spacing[] {
  const fr = frame.getBoundingClientRect()
  const out: Spacing[] = []
  let id = 0
  let index = 0
  const box = (r: DOMRect) => ({ x: (r.left - fr.left) / scale, y: (r.top - fr.top) / scale, w: r.width / scale, h: r.height / scale })

  for (const node of frame.querySelectorAll('*')) {
    index++
    if (!(node instanceof HTMLElement)) continue
    const add = (kind: Kind, prop: string, px: number, x: number, y: number, w: number, h: number, n = 0) => {
      if (w < 0.5 || h < 0.5) return
      out.push({ id: id++, key: `${index}:${prop}:${n}`, kind, prop, px: round(px), owner: describe(node), isLayout: !!node.dataset.spec, x, y, w, h })
    }
    const cs = getComputedStyle(node)
    if (cs.display === 'none' || cs.display === 'contents' || cs.visibility === 'hidden') continue
    const r = node.getBoundingClientRect()
    if (r.width < 2 || r.height < 2) continue
    const b = box(r)
    const [bt, br, bb, bl] = [cs.borderTopWidth, cs.borderRightWidth, cs.borderBottomWidth, cs.borderLeftWidth].map(num)
    const [pt, pr, pb, pl] = [cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft].map(num)
    const innerW = b.w - bl - br
    const innerH = b.h - bt - bb
    if (pt > 0.5) add('padding', 'padding-top', pt, b.x + bl, b.y + bt, innerW, pt)
    if (pb > 0.5) add('padding', 'padding-bottom', pb, b.x + bl, b.y + b.h - bb - pb, innerW, pb)
    if (pl > 0.5) add('padding', 'padding-left', pl, b.x + bl, b.y + bt + pt, pl, innerH - pt - pb)
    if (pr > 0.5) add('padding', 'padding-right', pr, b.x + b.w - br - pr, b.y + bt + pt, pr, innerH - pt - pb)

    const [mt, mr, mb, ml] = [cs.marginTop, cs.marginRight, cs.marginBottom, cs.marginLeft].map(num)
    const keep = (v: number) => v > 0.5 && keepMargin(round(v))
    if (keep(mt)) add('margin', 'margin-top', mt, b.x, b.y - mt, b.w, mt)
    if (keep(mb)) add('margin', 'margin-bottom', mb, b.x, b.y + b.h, b.w, mb)
    if (keep(ml)) add('margin', 'margin-left', ml, b.x - ml, b.y, ml, b.h)
    if (keep(mr)) add('margin', 'margin-right', mr, b.x + b.w, b.y, mr, b.h)

    if (!/flex|grid/.test(cs.display)) continue
    const rowGap = num(cs.rowGap)
    const colGap = num(cs.columnGap)
    if (rowGap < 0.5 && colGap < 0.5) continue
    const kids = [...node.children]
      .filter((c): c is HTMLElement => c instanceof HTMLElement)
      .filter((c) => {
        const k = getComputedStyle(c)
        if (k.display === 'none' || k.position === 'absolute' || k.position === 'fixed') return false
        const kr = c.getBoundingClientRect()
        return kr.width >= 2 && kr.height >= 2
      })
      .map((c) => box(c.getBoundingClientRect()))
    for (let i = 1; i < kids.length; i++) {
      const a = kids[i - 1]
      const c = kids[i]
      const sameRow = c.y < a.y + a.h - 1 && a.y < c.y + c.h - 1
      if (sameRow && colGap > 0.5 && c.x - (a.x + a.w) >= colGap - 1.5) {
        const top = Math.min(a.y, c.y)
        add('gap', 'column-gap', colGap, a.x + a.w, top, colGap, Math.max(a.y + a.h, c.y + c.h) - top, i)
      } else if (!sameRow && rowGap > 0.5 && c.y - (a.y + a.h) >= rowGap - 1.5) {
        add('gap', 'row-gap', rowGap, b.x + bl + pl, a.y + a.h, innerW - pl - pr, rowGap, i)
      }
    }
  }
  return out
}
