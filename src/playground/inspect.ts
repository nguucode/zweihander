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
  /** The row being hovered or focused, if any. `part` is an anatomy part's name, or one of FOCUS_PARTS. */
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

/** Rows about the focus ring or the hit area name no anatomy part: they are about the item's focusable element. */
export const FOCUS_PARTS = ['Focus ring', 'Hit area']
const FOCUSABLE = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

/**
 * The anatomy part a Specs row is about, or null. Its `part` up to the
 * first comma (`Container, outlined`), then up to " and " or " to "
 * (`Title and description`), matched by name, else the first part whose
 * name has it as a whole word (`Icon` → Start icon). Focus ring and Hit
 * area stand as they are.
 */
export function anatomyPartFor(rowPart: string, names: string[]): string | null {
  const head = rowPart.split(',')[0].split(/ (?:and|to) /)[0].trim()
  if (FOCUS_PARTS.includes(head) || names.includes(head)) return head
  const word = new RegExp(`\\b${head.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
  return names.find((name) => word.test(name)) ?? null
}

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

const px = (value: TokenValue) => (value.kind === 'length' ? parseFloat(value.text) : 0)

/**
 * The measured part of `el` for a property: its height, width, padding, the
 * gaps between its children, a corner's radius, its first line of text; for
 * the focus ring the ring at its width and offset, for the hit area the
 * minimum box around it.
 */
function redline(layer: HTMLElement, el: Element, part: string, property: string, value: string, read: (token: string) => TokenValue) {
  const r = el.getBoundingClientRect()
  const cs = getComputedStyle(el)
  const p = property.toLowerCase()
  const shade = { background: 'rgb(229 72 77 / 0.25)' }
  chip(layer, `${property} ${value}`, r.left, Math.max(0, r.top - 20))
  if (part === 'Focus ring') {
    const width = px(read('--focus-width'))
    const offset = px(read('--focus-offset'))
    const out = offset + width
    box(layer, { left: r.left - out, top: r.top - out, width: r.width + 2 * out, height: r.height + 2 * out }, {
      border: `${width}px solid ${INK}`,
      borderRadius: `calc(${cs.borderTopLeftRadius} + ${out}px)`,
    })
    return
  }
  if (part === 'Hit area') {
    const min = parseFloat(value) || 0
    const w = Math.max(r.width, min)
    const h = Math.max(r.height, min)
    box(layer, { left: r.left - (w - r.width) / 2, top: r.top - (h - r.height) / 2, width: w, height: h }, { border: `1px dashed ${INK}`, ...shade })
    return
  }
  box(layer, r, { border: `1px solid ${INK}` })
  if (p.includes('radius')) {
    const radius = parseFloat(cs.borderTopLeftRadius) || 0
    box(layer, { left: r.left, top: r.top, width: Math.max(radius, 4), height: Math.max(radius, 4) }, {
      borderTop: `2px solid ${INK}`,
      borderLeft: `2px solid ${INK}`,
      borderTopLeftRadius: `${radius}px`,
    })
  } else if (/font|line height|text|letter/.test(p)) {
    // The first line of its text: the line box for line height, the glyphs' box otherwise.
    const range = document.createRange()
    range.selectNodeContents(el)
    const line = range.getClientRects()[0]
    if (line) {
      const lineHeight = parseFloat(cs.lineHeight)
      const tall = p.includes('line height') && lineHeight ? lineHeight : line.height
      box(layer, { left: line.left, top: line.top + (line.height - tall) / 2, width: line.width, height: tall }, shade)
    }
  } else if (p.includes('padding')) {
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
    const target = lit && (elements.get(lit.part) ?? (FOCUS_PARTS.includes(lit.part) ? scope.querySelector(FOCUSABLE) : null))
    if (lit && target) redline(layer, target, lit.part, lit.property, values[lit.token]?.text ?? '', (token) => resolve(probe, token))
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
