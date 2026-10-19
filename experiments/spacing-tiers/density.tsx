import { StrictMode, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToggleButton } from '@/components/buttons/ToggleButton'
import { Tabs } from '@/components/navigation/Tabs'
import { Dashboard, ProductsPage } from './screens'
import { Specimen } from './specimen'

import { CONTROLS, DENSITIES, type Density, LADDER, MAP, ROLES, ROW, type Role, SIZES, TYPE } from './density-core'
import './tiers.css'
import './density.css'

/** A line of text in one type role, with its rendered size and leading. */
function TypeSample({ role, text }: { role: string; text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [m, setM] = useState('')
  useLayoutEffect(() => {
    const cs = getComputedStyle(ref.current!)
    const v = `${Math.round(parseFloat(cs.fontSize))}/${Math.round(parseFloat(cs.lineHeight))}`
    setM((prev) => (prev === v ? prev : v))
  })
  const heading = role.startsWith('heading')
  return (
    <span className="typeSample">
      <span ref={ref} style={{ fontSize: `var(--text-${role})`, lineHeight: `var(--leading-${role})`, fontWeight: heading ? 600 : 400 }}>
        {text}
      </span>
      <span className="measuredPx">{m}</span>
    </span>
  )
}

/* ============================================================== overlay */
interface Region {
  id: number
  role: Role
  part: string
  prop: string
  px: number
  x: number
  y: number
  w: number
  h: number
}
const num = (v: string) => (v === 'normal' ? 0 : parseFloat(v) || 0)

function measure(frame: HTMLElement, scale: number): Region[] {
  const fr = frame.getBoundingClientRect()
  const box = (r: DOMRect) => ({ x: (r.left - fr.left) / scale, y: (r.top - fr.top) / scale, w: r.width / scale, h: r.height / scale })
  const out: Region[] = []
  let id = 0
  let lastPart = ''
  for (const rule of MAP) {
    const part = rule.part || lastPart
    lastPart = part
    for (const el of frame.querySelectorAll<HTMLElement>(rule.sel)) {
      const cs = getComputedStyle(el)
      const r = el.getBoundingClientRect()
      if (cs.display === 'none' || r.width < 2 || r.height < 2) continue
      const b = box(r)
      const add = (prop: string, px: number, x: number, y: number, w: number, h: number) => {
        if (px > 0.5 && w > 0.5 && h > 0.5) out.push({ id: id++, role: rule.role, part, prop, px: Math.round(px * 4) / 4, x, y, w, h })
      }
      const [bt, br, bb, bl] = [cs.borderTopWidth, cs.borderRightWidth, cs.borderBottomWidth, cs.borderLeftWidth].map(num)
      const [pt, pr, pb, pl] = [cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft].map(num)
      const iw = b.w - bl - br
      const ih = b.h - bt - bb
      for (const p of rule.props) {
        if (p === 'padding' || p === 'padding-block' || p === 'padding-block-start') add('padding-top', pt, b.x + bl, b.y + bt, iw, pt)
        if (p === 'padding' || p === 'padding-block' || p === 'padding-block-end') add('padding-bottom', pb, b.x + bl, b.y + b.h - bb - pb, iw, pb)
        if (p === 'padding' || p === 'padding-inline') {
          add('padding-left', pl, b.x + bl, b.y + bt + pt, pl, ih - pt - pb)
          add('padding-right', pr, b.x + b.w - br - pr, b.y + bt + pt, pr, ih - pt - pb)
        }
        if (p === 'margin-block-start') add('margin-top', num(cs.marginTop), b.x, b.y - num(cs.marginTop), b.w, num(cs.marginTop))
        if (p === 'margin-block-end') add('margin-bottom', num(cs.marginBottom), b.x, b.y + b.h, b.w, num(cs.marginBottom))
        if (p === 'gap' || p === 'row-gap' || p === 'column-gap') {
          const rowGap = num(cs.rowGap)
          const colGap = num(cs.columnGap)
          const kids = [...el.children]
            .filter((c): c is HTMLElement => c instanceof HTMLElement)
            .filter((c) => {
              const k = getComputedStyle(c)
              const kr = c.getBoundingClientRect()
              return k.display !== 'none' && k.position !== 'absolute' && kr.width >= 2 && kr.height >= 2
            })
            .map((c) => box(c.getBoundingClientRect()))
          for (let i = 1; i < kids.length; i++) {
            const a = kids[i - 1]
            const c = kids[i]
            const sameRow = c.y < a.y + a.h - 1 && a.y < c.y + c.h - 1
            if (sameRow && colGap > 0.5 && c.x - (a.x + a.w) >= colGap - 1.5) {
              const top = Math.min(a.y, c.y)
              add('column-gap', colGap, a.x + a.w, top, colGap, Math.max(a.y + a.h, c.y + c.h) - top)
            } else if (!sameRow && rowGap > 0.5 && c.y - (a.y + a.h) >= rowGap - 1.5) {
              add('row-gap', rowGap, b.x + bl + pl, a.y + a.h, iw - pl - pr, rowGap)
            }
          }
        }
      }
    }
  }
  return out
}

function Stage({ density, overlay, typeFixed, children }: { density: Density | 'today'; overlay: boolean; typeFixed: boolean; children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(0)
  const [regions, setRegions] = useState<Region[]>([])
  const [tick, setTick] = useState(0)

  useLayoutEffect(() => {
    const ro = new ResizeObserver(() => {
      setScale(Math.min(1, stageRef.current!.clientWidth / 1280))
      setHeight(frameRef.current!.offsetHeight)
    })
    ro.observe(stageRef.current!)
    ro.observe(frameRef.current!)
    return () => ro.disconnect()
  }, [])
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
    setRegions(measure(frameRef.current!, scale))
  }, [scale, tick, height, density, typeFixed])

  return (
    <div ref={stageRef} className="stage" style={{ blockSize: height * scale || undefined }}>
      <div className="scaler" style={{ transform: scale === 1 ? undefined : `scale(${scale})` }}>
        <div ref={frameRef} className="frame" data-density={density} data-type={typeFixed ? 'fixed' : undefined}>
          {children}
        </div>
        {overlay && (
          <div className="overlay" aria-hidden="true">
            {regions.map((r) => {
              const label = r.w >= 70 && r.h >= 14 ? `${r.role} ${r.px}` : r.w >= 18 && r.h >= 14 ? String(r.px) : ''
              return (
                <div
                  key={r.id}
                  className="rg"
                  data-role={r.role}
                  data-kind={r.prop.includes('gap') ? 'gap' : r.prop.startsWith('margin') ? 'margin' : 'padding'}
                  style={{ left: r.x, top: r.y, width: r.w, height: r.h }}
                  title={`${r.part}\n${r.prop}: ${r.px}px · --space-${r.role}`}
                >
                  {label && <span className="rgLabel">{label}</span>}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

/* ================================================================== app */
function App() {
  const [density, setDensity] = useState<Density | 'today'>('default')
  const [overlay, setOverlay] = useState(true)
  const [typeOn, setTypeOn] = useState(true)
  const roleRows = ROLES.map((r) => ({ ...r, parts: [...new Set(MAP.filter((x) => x.role === r.role && x.part).map((x) => x.part))] }))
  const maxPx = 24
  return (
    <main className="doc">
      <header className="intro">
        <p className="eyebrow">Zweihänder · density trial · 19 Oct 2026</p>
        <h1>Six spacing tokens, two densities</h1>
        <p>
          A designer picks one of six tokens by role, never a number, and any component size. The density decides the numbers, for the
          layout and inside every component size. Switch density below and both screens re-space themselves.
        </p>
      </header>

      <section className="section" aria-labelledby="tok-h">
        <div className="sectionHead">
          <h2 id="tok-h">The tokens</h2>
          <p>
            Every value is on the short scale 2 · 4 · 8 · 12 · 16 · 20 · 24. In Compact each role takes the Default value of the role below it;
            section goes from 24 to 20. In Default, container and section share 24.
          </p>
        </div>
        <div className="ladder" aria-label="Which steps each density uses">
          {DENSITIES.map((d) => (
            <div key={d} className={`ladderRow${density === d ? ' isOn' : ''}`}>
              <span className="ladderName">{d[0].toUpperCase() + d.slice(1)}</span>
              {LADDER.map((px) => {
                const roles = ROLES.filter((r) => r.px[d] === px).map((r) => r.role)
                return (
                  <span
                    key={px}
                    className="ladderStep"
                    data-role={roles.at(-1)}
                    data-used={roles.length ? '' : undefined}
                    title={roles.length ? roles.map((r) => `--space-${r}`).join(' and ') : 'not used'}
                  >
                    {px}
                    {roles.length > 1 && <small> ×{roles.length}</small>}
                  </span>
                )
              })}
            </div>
          ))}
        </div>
        <div className="tableWrap">
          <table className="spec density">
            <thead>
              <tr>
                <th scope="col">Token</th>
                <th scope="col">Use it for</th>
                {DENSITIES.map((d) => (
                  <th key={d} scope="col" className={`num${density === d ? ' isOn' : ''}`}>
                    {d[0].toUpperCase() + d.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {roleRows.map((r) => (
                <tr key={r.role}>
                  <td>
                    <span className="tierCell">
                      <span className="swatch" data-role={r.role} />
                      <code>--space-{r.role}</code>
                    </span>
                  </td>
                  <td className="where">{r.use}</td>
                  {DENSITIES.map((d) => (
                    <td key={d} className={`num${density === d ? ' isOn' : ''}`}>
                      <span className="valBar" data-role={r.role} style={{ inlineSize: `${(r.px[d] / maxPx) * 3}rem` }} />
                      {r.px[d]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td>
                  <code>--row-height</code>
                </td>
                <td className="where">A size, not spacing: table and list rows. Thumbnails follow it.</td>
                {DENSITIES.map((d) => (
                  <td key={d} className={`num${density === d ? ' isOn' : ''}`}>
                    {ROW[d]}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sectionHead">
          <h3 className="subHead">Inside components: the control tier</h3>
          <p>
            Every size stays available in both densities. Compact tightens each size instead of replacing it: padding and gap take the values
            of the size below, md loses 4px of height and sm 2px. Buttons, inputs, selects, tabs and tags already read these tokens, so nothing
            in a component changes but the numbers.
          </p>
        </div>
        <div className="tableWrap">
          <table className="spec density">
            <thead>
              <tr>
                <th scope="col">Size</th>
                <th scope="col">Token</th>
                {DENSITIES.map((d) => (
                  <th key={d} scope="col" className={`num${density === d ? ' isOn' : ''}`}>
                    {d[0].toUpperCase() + d.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CONTROLS.flatMap(({ size, px }) =>
                (
                  [
                    ['h', `--control-${size}`, 'height'],
                    ['pad', `--control-${size}-pad`, 'field padding'],
                    ['spacious', `--control-${size}-pad-spacious`, 'button padding'],
                    ['gap', `--control-${size}-gap`, 'icon to label'],
                  ] as const
                ).map(([k, token, what], i) => (
                  <tr key={token}>
                    <td>{i === 0 ? <strong>{size}</strong> : ''}</td>
                    <td>
                      <code>{token}</code> <span className="where">{what}</span>
                    </td>
                    {DENSITIES.map((d) => (
                      <td key={d} className={`num${density === d ? ' isOn' : ''}${px.default[k] !== px.compact[k] && d === 'compact' ? ' isChanged' : ''}`}>
                        {px[d][k]}
                      </td>
                    ))}
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="type-h">
        <div className="sectionHead">
          <h2 id="type-h">Type in each density</h2>
          <p>
            Base text is 14px in Default and 13px in Compact. Text of 12px and below keeps its size in both, since that is the floor for reading.
            Sizes are measured from the page. Turn off <em>Compact type</em> in the bar below to compare Compact with and without it.
          </p>
        </div>
        <div className="tableWrap">
          <table className="spec typeTable">
            <thead>
              <tr>
                <th scope="col">Token</th>
                <th scope="col">Default</th>
                <th scope="col">Compact</th>
              </tr>
            </thead>
            <tbody>
              {TYPE.map((t) => (
                <tr key={t.role}>
                  <td>
                    <code>--text-{t.role}</code>
                    <div className="where">{t.use}</div>
                  </td>
                  <td data-density="default">
                    <TypeSample role={t.role} text={t.sample} />
                  </td>
                  <td data-density="compact" data-type={typeOn ? undefined : 'fixed'} className={t.px.default[0] !== t.px.compact[0] && typeOn ? 'typeChanged' : undefined}>
                    <TypeSample key={String(typeOn)} role={t.role} text={t.sample} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="spec-h">
        <div className="sectionHead">
          <h2 id="spec-h">Every size, both densities</h2>
          <p>The same components at every size. Heights are measured from the page.</p>
        </div>
        <div className="specimens">
          {DENSITIES.slice()
            .reverse()
            .map((d) => (
              <Specimen key={d} density={d} typeFixed={!typeOn} />
            ))}
        </div>
      </section>

      <div className="controls" role="group" aria-label="Density">
        <div className="controlGroup">
          <span className="controlLabel">Density</span>
          <Tabs
            appearance="pills"
            size="sm"
            aria-label="Density"
            value={density}
            onValueChange={(v) => setDensity(v as Density | 'today')}
            items={[
              { value: 'compact', label: 'Compact' },
              { value: 'default', label: 'Default' },
              { value: 'today', label: 'Main today' },
            ]}
          />
        </div>
        <div className="controlGroup">
          <ToggleButton size="sm" variant="secondary" appearance="outlined" pressed={typeOn} onPressedChange={setTypeOn}>
            Compact type
          </ToggleButton>
          <ToggleButton size="sm" variant="secondary" appearance="outlined" pressed={overlay} onPressedChange={setOverlay}>
            Show tokens
          </ToggleButton>
          {ROLES.map((r) => (
            <span key={r.role} className="legendItem">
              <span className="swatch" data-role={r.role} />
              {r.role}
            </span>
          ))}
        </div>
      </div>

      <section className="section" aria-labelledby="dash-h">
        <div className="sectionHead">
          <h2 id="dash-h">Revenue and cost</h2>
          <p>Hover a coloured region for the part and the token. Solid is padding, hatched is gap.</p>
        </div>
        <Stage density={density} overlay={overlay && density !== 'today'} typeFixed={!typeOn}>
          <Dashboard />
        </Stage>
      </section>

      <section className="section" aria-labelledby="prod-h">
        <div className="sectionHead">
          <h2 id="prod-h">Products</h2>
          <p>Compact fits more rows on the same screen: 36px rows and sm controls instead of 48 and md.</p>
        </div>
        <Stage density={density} overlay={overlay && density !== 'today'} typeFixed={!typeOn}>
          <ProductsPage />
        </Stage>
      </section>

      <section className="section" aria-labelledby="map-h">
        <div className="sectionHead">
          <h2 id="map-h">What each token drives</h2>
          <p>
            The complete spec for both screens. The overlay and the CSS are generated from this table. "Main today" is the value before tokens, so
            you can see where Default changes something.
          </p>
        </div>
        <div className="tableWrap">
          <table className="spec">
            <thead>
              <tr>
                <th scope="col">Part</th>
                <th scope="col">Token</th>
                <th scope="col">Property</th>
                <th scope="col" className="num">
                  Default
                </th>
                <th scope="col">Main today</th>
              </tr>
            </thead>
            <tbody>
              {MAP.map((r, i) => {
                const def = ROLES.find((x) => x.role === r.role)!.px.default
                const changed = r.today !== undefined && r.today !== String(def)
                return (
                  <tr key={i}>
                    <td>{r.part || <span className="lyMuted">″</span>}</td>
                    <td>
                      <span className="tierCell">
                        <span className="swatch" data-role={r.role} />
                        <code>{r.value ?? `--space-${r.role}`}</code>
                      </span>
                    </td>
                    <td>
                      <code>{r.props.join(', ')}</code>
                    </td>
                    <td className="num">{def}</td>
                    <td className={changed ? 'isChanged' : 'where'}>{r.today ?? 'trial layout'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="sizes-h">
        <div className="sectionHead">
          <h2 id="sizes-h">Sizes that change with density</h2>
          <p>Sizes outside the control tier that still move with density: calendar and date presets read the control height; checkboxes, radios, switches, progress bars, avatars and badges get their own size tokens. Every size stays available in both densities; in Compact each takes the size below it. The smallest switch (24 × 14), avatar (20) and badge (14) step down further so sizes stay apart; the smallest progress bar stays at 4.</p>
        </div>
        <div className="tableWrap">
          <table className="spec">
            <thead>
              <tr>
                <th scope="col">Part</th>
                <th scope="col">Reads</th>
                <th scope="col" className="num">
                  Default
                </th>
                <th scope="col" className="num">
                  Compact
                </th>
                <th scope="col">Main today</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((x) => (
                <tr key={x.part}>
                  <td>{x.part}</td>
                  <td>
                    <code>{x.reads}</code>
                  </td>
                  <td className="num">{x.px.default}</td>
                  <td className="num">{x.px.compact}</td>
                  <td className="where">{x.today}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="notes-h">
        <div className="sectionHead">
          <h2 id="notes-h">Decisions to make</h2>
        </div>
        <ul className="findings">
          <li>
            <strong>Every component and pattern follows density, overlays included.</strong> Menus, select and combobox lists, popovers,
            tooltips, modals, the date picker and the calendar read the same six tokens and the control tier. Menu and list items were already
            on <code>--control-md</code>; the calendar and date presets used <code>--space-8</code> as a size and now read{' '}
            <code>--control-md</code>, so a Compact calendar has 28px days.
          </li>
          <li>
            <strong>Overlays escape a scoped density.</strong> Select, Combobox and DatePicker portal to <code>&lt;body&gt;</code> and take no{' '}
            <code>container</code>; Popover, Menu, Tooltip and Modal do. So density belongs on the app root, like appearance, and a density set on
            one panel only reaches those three once they accept <code>container</code>. <code>Theme</code>'s scaling has the same gap today. The
            trial copies the trigger's density onto each new popup to show both side by side.
          </li>
          <li>
            <strong>Density reaches inside components, size stays the designer's.</strong> Compact no longer swaps md for sm. Each size keeps its
            name and gets tighter: md is 28px with 8px padding, sm 22px, xs stays 20. A designer can still put an sm tag next to an md button in
            either density.
          </li>
          <li>
            <strong>Patterns read the six tokens; components read the control tier.</strong> Both have a Compact mode, so one switch moves the
            layout and every component together.
          </li>
          <li>
            <strong>Section is 24 in Default, 20 in Compact.</strong> Default now differs from main at the page edge: AppShell padding and the
            header sides go from 32 to 24. In Default, section and container are the same number, so a page relies on card edges and rules, not
            extra air, to separate sections.
          </li>
          <li>
            <strong>Two densities, not three.</strong> Wide was dropped.
          </li>
          <li>
            <strong>One value moves on purpose:</strong> Alert padding goes from 10 to 12; 10px is control padding only. The Stats card gap and
            the page heading's title to description (both 8) stay with their component.
          </li>
          <li>
            <strong>Card sizes are a local density.</strong> <code>sm</code> pads <code>group</code> with a <code>cluster</code> gap;{' '}
            <code>md</code> pads <code>container</code> with a <code>group</code> gap.
          </li>
          <li>
            <strong>Type density is feasible with no component change.</strong> Components set font size through the type tokens in 88 places;
            the only literal sizes left are icons and one 9px label in FileUploader. A Compact mode on the eleven <code>--text-*</code> and{' '}
            <code>--leading-*</code> tokens reaches every component.
          </li>
          <li>
            <strong>Why not just <code>scaling</code> at 93%?</strong> Scaling multiplies everything: 14 becomes 13.0, but 12 becomes 11.2, 11
            becomes 10.2 and 32 becomes 29.8. Type density picks each size: whole pixels, a 12px floor, and headings that land on the existing
            scale. Scaling stays for the reader's own preference.
          </li>
          <li>
            <strong>Compact leading leaves the 4px grid.</strong> Body is 13/18 and heading-xs 13/18. 13/20 would keep the grid but gives back
            most of the density. Rows and controls have fixed heights, so this only shows in wrapped text.
          </li>
          <li>
            <strong>Icons stay 16px</strong> beside 13px text. It reads fine in the screens above; dropping <code>--icon-md</code> to 14px in
            Compact is an option if it looks heavy.
          </li>
          <li>
            <strong>In the real code</strong> the six tokens and the control tier get a density mode in <code>tokens/semantic.json</code>, set by{' '}
            <code>Theme</code> like <code>scaling</code>. Figma: six spacing variables, the control tier and the eleven type sizes and line heights, two modes each (Figma binds number
            variables to font size and line height).
          </li>
        </ul>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
