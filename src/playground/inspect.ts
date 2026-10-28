/**
 * The Specs tab's drawing over the live item. It runs inside the preview
 * frame (registered in .storybook/preview.tsx), because in development the
 * frame is Storybook on another origin and the Playground cannot reach its
 * DOM. The Playground sends an InspectRequest over Storybook's channel; this
 * numbers each anatomy part, draws the redline of the row being hovered, and
 * sends back each token's value as the frame resolves it.
 */

export interface InspectRequest {
  /** Anatomy parts in order: the first is ①. Selectors are read inside the story's root. */
  parts: { name: string; selector: string }[]
  /** Tokens whose values the Specs tables show. */
  tokens: string[]
  /** The row being hovered or focused, if any. `part` is an anatomy part's name. */
  highlight?: { part: string; property: string; token: string } | null
  /**
   * A pseudo-class to force on the whole item (hover, focus-visible, active),
   * through storybook-addon-pseudo-states' `pseudo-<state>-all` class, as the
   * docs' <States> block does.
   */
  pseudo?: string
}

export type TokenValue = { kind: 'color' | 'length' | 'raw' | 'missing'; text: string }

export const INSPECT_EVENT = 'playground/inspect'
export const INSPECTED_EVENT = 'playground/inspected'

/** ① to ⑳; past twenty, the plain number. */
export const partNumber = (index: number) => (index < 20 ? String.fromCodePoint(0x2460 + index) : String(index + 1))

/** A Specs row's anatomy part: its `part` up to the first comma (`Container, outlined`). */
export const partOf = (rowPart: string) => rowPart.split(',')[0].trim()

/* The same reading as the docs' SpecTable: a colour as `color: var(token)`
   computes it, a length as `flex-basis` resolves it to px, anything else
   as declared. The probe sits in <body>, where the Preview theme is mirrored
   onto <html>, inside a holder whose sentinel colour it inherits when the
   token is not a colour. */
const SENTINEL = 'rgb(1, 2, 3)'
function resolve(probe: HTMLElement, token: string): TokenValue {
  probe.style.cssText = `color: var(${token}); flex-basis: var(${token})`
  const computed = getComputedStyle(probe)
  const raw = computed.getPropertyValue(token).trim()
  if (!raw) return { kind: 'missing', text: 'Not defined here' }
  if (computed.color !== SENTINEL) return { kind: 'color', text: computed.color }
  if (computed.flexBasis !== 'auto') return { kind: 'length', text: computed.flexBasis }
  return { kind: 'raw', text: raw }
}

const INK = '#e5484d'
const css = (el: HTMLElement, style: Partial<CSSStyleDeclaration>) => Object.assign(el.style, style)

function box(layer: HTMLElement, rect: { left: number; top: number; width: number; height: number }, style: Partial<CSSStyleDeclaration>) {
  const el = layer.appendChild(document.createElement('div'))
  css(el, { position: 'fixed', left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, boxSizing: 'border-box', ...style })
  return el
}

function chip(layer: HTMLElement, text: string, left: number, top: number) {
  const el = box(layer, { left, top, width: 0, height: 0 }, {
    width: 'auto',
    height: 'auto',
    padding: '1px 5px',
    borderRadius: '4px',
    background: INK,
    color: '#fff',
    font: '600 11px/16px system-ui, sans-serif',
    whiteSpace: 'nowrap',
  })
  el.textContent = text
  return el
}

/** The measured part of `el` for a property: its height, width, padding or the gaps between its children. */
function redline(layer: HTMLElement, el: Element, property: string, value: string) {
  const r = el.getBoundingClientRect()
  const cs = getComputedStyle(el)
  const p = property.toLowerCase()
  const shade = { background: 'rgb(229 72 77 / 0.25)' }
  box(layer, r, { border: `1px solid ${INK}` })
  if (p.includes('padding')) {
    const [t, rt, b, l] = ['top', 'right', 'bottom', 'left'].map((side) => parseFloat(cs.getPropertyValue(`padding-${side}`)) || 0)
    const inline = !p.includes('block')
    const block = !p.includes('inline')
    if (inline) {
      box(layer, { left: r.left, top: r.top, width: l, height: r.height }, shade)
      box(layer, { left: r.right - rt, top: r.top, width: rt, height: r.height }, shade)
    }
    if (block) {
      box(layer, { left: r.left, top: r.top, width: r.width, height: t }, shade)
      box(layer, { left: r.left, top: r.bottom - b, width: r.width, height: b }, shade)
    }
  } else if (p.includes('gap')) {
    const kids = [...el.children].map((k) => k.getBoundingClientRect()).filter((k) => k.width && k.height)
    const row = !cs.flexDirection.startsWith('column')
    for (let i = 1; i < kids.length; i++) {
      const a = kids[i - 1]
      const b = kids[i]
      if (row && b.left > a.right) box(layer, { left: a.right, top: r.top, width: b.left - a.right, height: r.height }, shade)
      if (!row && b.top > a.bottom) box(layer, { left: r.left, top: a.bottom, width: r.width, height: b.top - a.bottom }, shade)
    }
  } else if (p.includes('height')) {
    box(layer, { left: r.right + 4, top: r.top, width: 1, height: r.height }, { background: INK })
  } else if (p.includes('width') || p === 'size') {
    box(layer, { left: r.left, top: r.bottom + 4, width: r.width, height: 1 }, { background: INK })
  }
  chip(layer, `${property} ${value}`, r.left, Math.max(0, r.top - 20))
}

/**
 * Starts the inspector: idle until a request comes. While a request is set it
 * redraws every frame, so it follows prop changes, animations and resizes.
 */
export function startInspector(root: () => Element | null, onValues: (values: Record<string, TokenValue>) => void) {
  let request: InspectRequest | null = null
  let frame = 0
  let sent = ''
  const layer = document.createElement('div')
  layer.dataset.playgroundInspector = ''
  layer.setAttribute('aria-hidden', 'true')
  css(layer, { position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '2147483647' })
  const holder = document.createElement('span')
  css(holder, { position: 'absolute', visibility: 'hidden', color: SENTINEL })
  const probe = holder.appendChild(document.createElement('span'))

  // ponytail: reads layout every animation frame while Specs is open; an observer per part if it ever shows in a profile.
  const draw = () => {
    frame = requestAnimationFrame(draw)
    if (!request) return
    if (!layer.isConnected) document.body.append(layer, holder)
    layer.replaceChildren()
    const scope = root() ?? document.body
    const elements = new Map(request.parts.map((part) => [part.name, scope.querySelector(part.selector)]))
    const values = Object.fromEntries(request.tokens.map((token) => [token, resolve(probe, token)]))
    const json = JSON.stringify(values)
    if (json !== sent) {
      sent = json
      onValues(values)
    }
    const lit = request.highlight
    const target = lit && elements.get(lit.part)
    if (lit && target) redline(layer, target, lit.property, values[lit.token]?.text ?? '')
    request.parts.forEach((part, index) => {
      const el = elements.get(part.name)
      if (!el || (lit && part.name !== lit.part)) return
      const r = el.getBoundingClientRect()
      if (!r.width && !r.height) return
      chip(layer, partNumber(index), r.left - 6, r.top - 8).style.borderRadius = '999px'
    })
  }

  let forced: { el: Element; name: string } | null = null
  const force = (pseudo?: string) => {
    forced?.el.classList.remove(forced.name)
    const el = root()
    forced = pseudo && el ? { el, name: `pseudo-${pseudo}-all` } : null
    if (forced) forced.el.classList.add(forced.name)
  }

  return {
    set(next: InspectRequest | null) {
      request = next
      force(next?.pseudo)
      sent = ''
      if (next && !frame) frame = requestAnimationFrame(draw)
      if (!next) {
        cancelAnimationFrame(frame)
        frame = 0
        layer.remove()
        holder.remove()
      }
    },
  }
}
