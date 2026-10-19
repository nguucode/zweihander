import { StrictMode, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToggleButton } from '@/components/buttons/ToggleButton'
import { Dashboard, ProductsPage } from './screens'
import './tiers.css'

/* ================================================================ theme
   Zweihänder switches appearance with a .dark / .light class; the viewer
   says it with data-theme or the OS setting. */
const mq = matchMedia('(prefers-color-scheme: dark)')
const applyTheme = () => {
  const root = document.documentElement
  const t = root.dataset.theme
  const dark = t ? t === 'dark' : mq.matches
  root.classList.toggle('dark', dark)
  root.classList.toggle('light', !dark)
}
applyTheme()
mq.addEventListener('change', applyTheme)
new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

/* ================================================================ scale */
type Tier = 's' | 'm' | 'l' | 'x'
interface Step {
  px: number
  token: string
  tier: Tier
  isNew?: boolean
  note?: string
}
const SCALE: Step[] = [
  { px: 0, token: '0', tier: 's' },
  { px: 2, token: '--space-0-5', tier: 's', isNew: true },
  { px: 4, token: '--space-1', tier: 's' },
  { px: 6, token: '--space-1-5', tier: 's' },
  { px: 8, token: '--space-2', tier: 's' },
  { px: 10, token: '--space-2-5', tier: 'x', note: 'control only' },
  { px: 12, token: '--space-3', tier: 'm' },
  { px: 16, token: '--space-4', tier: 'm' },
  { px: 20, token: '--space-5', tier: 'm', isNew: true },
  { px: 24, token: '--space-6', tier: 'm' },
  { px: 32, token: '--space-8', tier: 'l' },
  { px: 40, token: '--space-10', tier: 'l' },
  { px: 48, token: '--space-12', tier: 'l' },
  { px: 64, token: '--space-16', tier: 'l', isNew: true },
  { px: 80, token: '--space-20', tier: 'l', isNew: true },
]
const TIER_NAME: Record<Tier, string> = { s: 'Small', m: 'Medium', l: 'Large', x: 'Off-tier' }
const stepFor = (px: number): Step => SCALE.find((s) => Math.abs(s.px - px) < 0.3) ?? { px, token: 'off-scale', tier: 'x' }

/* ============================================================== measure */
type Kind = 'padding' | 'gap' | 'margin'
interface Region {
  id: number
  kind: Kind
  prop: string
  px: number
  step: Step
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
const describe = (el: HTMLElement) => {
  const own = ownName(el)
  if (own) return own
  let p = el.parentElement
  while (p && !ownName(p)) p = p.parentElement
  const tag = el.tagName.toLowerCase()
  return p ? `${ownName(p)} › ${tag}` : tag
}
const num = (v: string) => (v === 'normal' ? 0 : parseFloat(v) || 0)
const round = (v: number) => Math.round(v * 4) / 4

function measure(frame: HTMLElement, scale: number): Region[] {
  const fr = frame.getBoundingClientRect()
  const out: Region[] = []
  let id = 0
  const add = (kind: Kind, prop: string, px: number, el: HTMLElement, x: number, y: number, w: number, h: number) => {
    if (w < 0.5 || h < 0.5) return
    const v = round(px)
    out.push({ id: id++, kind, prop, px: v, step: stepFor(v), owner: describe(el), isLayout: !!el.dataset.spec, x, y, w, h })
  }
  const box = (r: DOMRect) => ({ x: (r.left - fr.left) / scale, y: (r.top - fr.top) / scale, w: r.width / scale, h: r.height / scale })

  for (const node of frame.querySelectorAll('*')) {
    if (!(node instanceof HTMLElement)) continue
    const cs = getComputedStyle(node)
    if (cs.display === 'none' || cs.display === 'contents' || cs.visibility === 'hidden') continue
    const r = node.getBoundingClientRect()
    if (r.width < 2 || r.height < 2) continue
    const b = box(r)
    const [bt, br, bb, bl] = [cs.borderTopWidth, cs.borderRightWidth, cs.borderBottomWidth, cs.borderLeftWidth].map(num)
    const [pt, pr, pb, pl] = [cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft].map(num)
    const innerW = b.w - bl - br
    const innerH = b.h - bt - bb
    if (pt > 0.5) add('padding', 'padding-top', pt, node, b.x + bl, b.y + bt, innerW, pt)
    if (pb > 0.5) add('padding', 'padding-bottom', pb, node, b.x + bl, b.y + b.h - bb - pb, innerW, pb)
    if (pl > 0.5) add('padding', 'padding-left', pl, node, b.x + bl, b.y + bt + pt, pl, innerH - pt - pb)
    if (pr > 0.5) add('padding', 'padding-right', pr, node, b.x + b.w - br - pr, b.y + bt + pt, pr, innerH - pt - pb)

    // Margins: auto margins compute to a used length, so only values that
    // land on the scale are counted. An off-scale margin is almost always auto.
    const [mt, mr, mb, ml] = [cs.marginTop, cs.marginRight, cs.marginBottom, cs.marginLeft].map(num)
    const onScale = (v: number) => v > 0.5 && stepFor(round(v)).token !== 'off-scale'
    if (onScale(mt)) add('margin', 'margin-top', mt, node, b.x, b.y - mt, b.w, mt)
    if (onScale(mb)) add('margin', 'margin-bottom', mb, node, b.x, b.y + b.h, b.w, mb)
    if (onScale(ml)) add('margin', 'margin-left', ml, node, b.x - ml, b.y, ml, b.h)
    if (onScale(mr)) add('margin', 'margin-right', mr, node, b.x + b.w, b.y, mr, b.h)

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
        add('gap', 'column-gap', colGap, node, a.x + a.w, top, colGap, Math.max(a.y + a.h, c.y + c.h) - top)
      } else if (!sameRow && rowGap > 0.5 && c.y - (a.y + a.h) >= rowGap - 1.5) {
        add('gap', 'row-gap', rowGap, node, b.x + bl + pl, a.y + a.h, innerW - pl - pr, rowGap)
      }
    }
  }
  return out
}

/* ================================================================ stage */
interface Filters {
  tiers: Record<Tier, boolean>
  kinds: Record<Kind, boolean>
  layoutOnly: boolean
  overlay: boolean
  actual: boolean
}
interface Focus {
  screen: string
  px: number
}

function Stage({
  name,
  filters,
  focus,
  onRegions,
  children,
}: {
  name: string
  filters: Filters
  focus: Focus | null
  onRegions: (screen: string, r: Region[]) => void
  children: ReactNode
}) {
  const stageRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(0)
  const [regions, setRegions] = useState<Region[]>([])
  const [tick, setTick] = useState(0)

  useLayoutEffect(() => {
    const stage = stageRef.current!
    const ro = new ResizeObserver(() => {
      const w = stage.clientWidth
      setScale(filters.actual ? 1 : Math.min(1, w / 1280))
      setHeight(frameRef.current!.offsetHeight)
    })
    ro.observe(stage)
    ro.observe(frameRef.current!)
    return () => ro.disconnect()
  }, [filters.actual])

  useEffect(() => {
    let t = 0
    const mo = new MutationObserver(() => {
      clearTimeout(t)
      t = window.setTimeout(() => setTick((n) => n + 1), 120)
    })
    mo.observe(frameRef.current!, { childList: true, subtree: true, characterData: true })
    document.fonts?.ready.then(() => setTick((n) => n + 1))
    return () => mo.disconnect()
  }, [])

  useLayoutEffect(() => {
    const r = measure(frameRef.current!, scale)
    setRegions(r)
    onRegions(name, r)
  }, [scale, tick, height, name, onRegions])

  const shown = regions.filter((r) => filters.tiers[r.step.tier] && filters.kinds[r.kind] && (!filters.layoutOnly || r.isLayout))
  const hasFocus = focus?.screen === name
  return (
    <div ref={stageRef} className={`stage${filters.actual ? ' isActual' : ''}`} style={{ blockSize: filters.actual ? undefined : height * scale || undefined }}>
      <div className="scaler" style={{ transform: scale === 1 ? undefined : `scale(${scale})` }}>
        <div ref={frameRef} className="frame">
          {children}
        </div>
        {filters.overlay && (
          <div className={`overlay${hasFocus ? ' hasFocus' : ''}`} aria-hidden="true">
            {shown.map((r) => {
              const label = `${r.px}`
              const fits = r.w >= label.length * 6 + 6 && r.h >= 14
              return (
                <div
                  key={r.id}
                  className={`rg${hasFocus && Math.abs(focus.px - r.px) < 0.3 ? ' isFocus' : ''}`}
                  data-tier={r.step.tier}
                  data-kind={r.kind}
                  style={{ left: r.x, top: r.y, width: r.w, height: r.h }}
                  title={`${r.owner}\n${r.prop}: ${r.px}px · ${r.step.token} · ${TIER_NAME[r.step.tier]}`}
                >
                  {fits && <span className="rgLabel">{label}</span>}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

/* ================================================================ specs */
interface Row {
  px: number
  step: Step
  padding: number
  gap: number
  margin: number
  owners: [string, number][]
}
const summarise = (regions: Region[]): Row[] => {
  const by = new Map<number, Region[]>()
  for (const r of regions) by.set(r.px, [...(by.get(r.px) ?? []), r])
  return [...by.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([px, rs]) => {
      const owners = new Map<string, number>()
      for (const r of rs) {
        const k = `${r.owner} (${r.prop})`
        owners.set(k, (owners.get(k) ?? 0) + 1)
      }
      return {
        px,
        step: rs[0].step,
        padding: rs.filter((r) => r.kind === 'padding').length,
        gap: rs.filter((r) => r.kind === 'gap').length,
        margin: rs.filter((r) => r.kind === 'margin').length,
        owners: [...owners.entries()].sort((a, b) => b[1] - a[1]),
      }
    })
}

function SpecTable({ screen, regions, focus, setFocus }: { screen: string; regions: Region[]; focus: Focus | null; setFocus: (f: Focus | null) => void }) {
  const rows = summarise(regions)
  return (
    <div className="tableWrap">
      <table className="spec">
        <caption className="srOnly">
          Spacing values used on {screen}
        </caption>
        <thead>
          <tr>
            <th scope="col" className="num">Value</th>
            <th scope="col">Token</th>
            <th scope="col">Tier</th>
            <th scope="col" className="num">Padding</th>
            <th scope="col" className="num">Gap</th>
            <th scope="col" className="num">Margin</th>
            <th scope="col">Where (element › class, property, times)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.px}
              className={focus?.screen === screen && focus.px === r.px ? 'isFocus' : undefined}
              onMouseEnter={() => setFocus({ screen, px: r.px })}
              onMouseLeave={() => setFocus(null)}
            >
              <td className="num">{r.px}px</td>
              <td>
                <code>{r.step.token}</code>
              </td>
              <td>
                <span className="tierCell">
                  <span className="swatch" data-tier={r.step.tier} />
                  {TIER_NAME[r.step.tier]}
                  {r.step.note ? ` (${r.step.note})` : ''}
                </span>
              </td>
              <td className="num">{r.padding || ''}</td>
              <td className="num">{r.gap || ''}</td>
              <td className="num">{r.margin || ''}</td>
              <td className="where">
                {r.owners.map(([o, n], i) => (
                  <span key={o}>
                    {i > 0 && ', '}
                    <code>{o}</code> ×{n}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ================================================================== app */
const SCREENS = ['Revenue and cost', 'Products'] as const

function App() {
  const [filters, setFilters] = useState<Filters>({
    tiers: { s: true, m: true, l: true, x: true },
    kinds: { padding: true, gap: true, margin: true },
    layoutOnly: false,
    overlay: true,
    actual: false,
  })
  const [focus, setFocus] = useState<Focus | null>(null)
  const [all, setAll] = useState<Record<string, Region[]>>({})
  const onRegions = useMemo(() => (screen: string, r: Region[]) => setAll((a) => ({ ...a, [screen]: r })), [])
  const [copied, setCopied] = useState(false)

  const counts = useMemo(() => {
    const c = new Map<number, number>()
    for (const rs of Object.values(all)) for (const r of rs) c.set(r.px, (c.get(r.px) ?? 0) + 1)
    return c
  }, [all])
  const maxCount = Math.max(1, ...counts.values())
  const offScale = useMemo(
    () =>
      Object.entries(all).flatMap(([screen, rs]) =>
        summarise(rs.filter((r) => r.step.tier === 'x')).map((row) => ({ screen, row })),
      ),
    [all],
  )

  const copy = () => {
    const data = Object.entries(all).flatMap(([screen, rs]) =>
      summarise(rs).flatMap((row) =>
        row.owners.map(([where, times]) => ({ screen, px: row.px, token: row.step.token, tier: TIER_NAME[row.step.tier], where, times })),
      ),
    )
    navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(
      () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      },
      () => setCopied(false),
    )
  }

  const toggle = <K extends 'tiers' | 'kinds'>(group: K, key: keyof Filters[K]) => (on: boolean) =>
    setFilters((f) => ({ ...f, [group]: { ...f[group], [key]: on } }))

  return (
    <main className="doc">
      <header className="intro">
        <p className="eyebrow">Zweihänder · spacing trial · 19 Oct 2026</p>
        <h1>Three tiers of spacing, tried on two real screens</h1>
        <p>
          Both screens are built from Zweihänder components as they are on main. Page layout around them picks every value by tier: Small inside a
          row, Medium between items in a group and for card padding, Large between page sections. The overlay is measured from the rendered page,
          not typed by hand, so it also shows what the components already do.
        </p>
      </header>

      <section className="section" aria-labelledby="scale-h">
        <div className="sectionHead">
          <h2 id="scale-h">The scale</h2>
          <p>
            Fifteen steps. Four are new from the research (2, 20, 64, 80px). 10px stays only for control padding. The bar under each step is how often
            it appears across both screens.
          </p>
        </div>
        <div className="scaleWrap">
          <div className="scale">
            {SCALE.map((s) => (
              <div key={s.px} className="step" data-tier={s.tier}>
                <span className="stepPx">{s.px}</span>
                <span className="stepToken">{s.token}</span>
                {s.isNew ? <span className="stepNew">New</span> : s.note ? <span className="stepCount">{s.note}</span> : <span />}
                <div style={{ display: 'grid', gap: 'var(--space-1)' }}>
                  <span className="stepCount">{counts.get(s.px) ?? 0} uses</span>
                  <span className="stepBar">
                    <span style={{ inlineSize: `${((counts.get(s.px) ?? 0) / maxCount) * 100}%` }} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tierRules">
          <div className="tierRule">
            <h3>
              <span className="swatch" data-tier="s" />
              Small · 2 to 8px
            </h3>
            <p>Inside one row or one small component.</p>
            <ul>
              <li>Icon to text, swatch to label, number to tag</li>
              <li>Title to description in a card</li>
              <li>Padding of badges, tags, table cells (control tokens first)</li>
              <li>Trigger to popover</li>
            </ul>
          </div>
          <div className="tierRule">
            <h3>
              <span className="swatch" data-tier="m" />
              Medium · 12 to 24px
            </h3>
            <p>Between items in one group, and container padding.</p>
            <ul>
              <li>Card padding (sm 16, md 24)</li>
              <li>Cards in a row, rows in a list</li>
              <li>Thumbnail or avatar to its content</li>
              <li>Toolbar, tabs and table inside one block</li>
            </ul>
          </div>
          <div className="tierRule">
            <h3>
              <span className="swatch" data-tier="l" />
              Large · 32 to 80px
            </h3>
            <p>Page layout only.</p>
            <ul>
              <li>Between page sections (heading, stats, cards, table)</li>
              <li>Page padding inside the shell</li>
              <li>64 and 80 wait for marketing or empty pages</li>
            </ul>
          </div>
          <div className="tierRule">
            <h3>
              <span className="swatch" data-tier="x" />
              Off-tier
            </h3>
            <p>Any value outside the scale, and 10px outside a control. Each one is a question for the research, listed under Findings.</p>
          </div>
        </div>
      </section>

      <div className="controls" role="group" aria-label="Overlay">
        <div className="controlGroup">
          <span className="controlLabel">Overlay</span>
          <ToggleButton size="sm" variant="secondary" appearance="outlined" pressed={filters.overlay} onPressedChange={(on) => setFilters((f) => ({ ...f, overlay: on }))}>
            Show
          </ToggleButton>
          <ToggleButton size="sm" variant="secondary" appearance="outlined" pressed={filters.layoutOnly} onPressedChange={(on) => setFilters((f) => ({ ...f, layoutOnly: on }))}>
            Page layout only
          </ToggleButton>
        </div>
        <div className="controlGroup">
          <span className="controlLabel">Tier</span>
          {(['s', 'm', 'l', 'x'] as Tier[]).map((t) => (
            <ToggleButton key={t} size="sm" variant="secondary" appearance="outlined" pressed={filters.tiers[t]} onPressedChange={toggle('tiers', t)}>
              <span className="swatch" data-tier={t} />
              {TIER_NAME[t]}
            </ToggleButton>
          ))}
        </div>
        <div className="controlGroup">
          <span className="controlLabel">Kind</span>
          {(['padding', 'gap', 'margin'] as Kind[]).map((k) => (
            <ToggleButton key={k} size="sm" variant="secondary" appearance="outlined" pressed={filters.kinds[k]} onPressedChange={toggle('kinds', k)}>
              {k[0].toUpperCase() + k.slice(1)}
            </ToggleButton>
          ))}
        </div>
        <div className="controlGroup">
          <ToggleButton size="sm" variant="secondary" appearance="outlined" pressed={filters.actual} onPressedChange={(on) => setFilters((f) => ({ ...f, actual: on }))}>
            Actual size
          </ToggleButton>
        </div>
      </div>

      <section className="section" aria-labelledby="dash-h">
        <div className="sectionHead">
          <h2 id="dash-h">Screen 1 · Revenue and cost</h2>
          <p>Merchant dashboard at 1280px. Solid fill is padding, hatched is gap. Hover a region for its element, property and token.</p>
        </div>
        <Stage name={SCREENS[0]} filters={filters} focus={focus} onRegions={onRegions}>
          <Dashboard />
        </Stage>
      </section>

      <section className="section" aria-labelledby="prod-h">
        <div className="sectionHead">
          <h2 id="prod-h">Screen 2 · Products</h2>
          <p>Product management at 1280px: summary, toolbar, status tabs, table, pagination.</p>
        </div>
        <Stage name={SCREENS[1]} filters={filters} focus={focus} onRegions={onRegions}>
          <ProductsPage />
        </Stage>
      </section>

      <section className="section" aria-labelledby="spec-h">
        <div className="sectionHead">
          <h2 id="spec-h">Every spacing value used</h2>
          <p>
            Measured from both screens above, at 100% scaling. Hover a row to light up its regions. Margins that land off the scale are skipped, since
            they are almost always <code>auto</code>.
          </p>
        </div>
        <div className="controlGroup">
          <ToggleButton size="sm" variant="secondary" appearance="outlined" pressed={copied} onPressedChange={copy}>
            {copied ? 'Copied' : 'Copy all as JSON'}
          </ToggleButton>
        </div>
        <div className="specGrid">
          {SCREENS.map((s) => (
            <div key={s} className="specBlock">
              <h3>{s}</h3>
              <SpecTable screen={s} regions={all[s] ?? []} focus={focus} setFocus={setFocus} />
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="find-h">
        <div className="sectionHead">
          <h2 id="find-h">Findings</h2>
          <p>Off-tier values the measurement found, then what the trial says about the rules.</p>
        </div>
        <ul className="findings">
          {offScale.map(({ screen, row }) => (
            <li key={`${screen}-${row.px}`}>
              <strong>
                {row.px}px on {screen}
              </strong>{' '}
              ({row.step.token}): {row.owners.map(([o, n]) => `${o} ×${n}`).join(', ')}
            </li>
          ))}
          <Notes />
        </ul>
      </section>
    </main>
  )
}

/** Written after reading the measurement; see the research note. */
function Notes() {
  return (
    <>
      <li>
        <strong>Tiers narrow the choice, they do not make it.</strong> "Cards in a row" came out as 16px in <code>Stats</code> and the summary row,
        and 24px in the chart row. Both are Medium, so both pass. A tier rule needs a short role table next to it (cards in a row: 16; page sections:
        32; title to description: 4) or two people will still pick differently.
      </li>
      <li>
        <strong>Table cells break Atlassian's wording.</strong> Atlassian puts table cell padding in Small. Zweihänder's <code>Table</code> pads cells
        16px (<code>--space-3 --space-4</code>), which is Medium, and it is the single most used value here (over 200 times). Either the rule
        names tables as a larger component, or density moves cells to 8/12px. That is a product call, not a token one.
      </li>
      <li>
        <strong>
          <code>Alert</code> uses 10px outside a control.
        </strong>{' '}
        <code>padding: var(--space-2-5)</code> on all four sides. Under the rule 10px is control padding only, so Alert should move to 8 or 12.
      </li>
      <li>
        <strong>The 1px values are not spacing.</strong> <code>Tag</code> sets 1px block padding on purpose to land its height. <code>Button</code>{' '}
        sets only <code>padding-inline</code>, so the browser's own 1px block padding leaks through; harmless under a fixed height, but it should be
        reset. Vertical padding inside a fixed-height control should be left out of the tier rule altogether.
      </li>
      <li>
        <strong>2px earns its token.</strong> It appears 18 times on Products and 13 on the dashboard: name to SKU, the Stats change chip (today a
        stylelint-disabled <code>0.125rem</code>), Badge padding.
      </li>
      <li>
        <strong>20, 40, 48, 64 and 80px were never needed.</strong> Two dense app screens used nothing above 32px. This supports adding 20px for
        the calc() cases the research found but holding 64 and 80 until a page needs them.
      </li>
      <li>
        <strong>Heading to content reads as 56px.</strong> <code>PageHeading</code> adds 24px padding and a rule, then the page gap adds 32px. Worth
        deciding whether the heading keeps its own bottom padding when it sits in a page that already spaces sections.
      </li>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
