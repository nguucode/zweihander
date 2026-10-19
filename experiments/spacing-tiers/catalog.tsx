import { StrictMode, useEffect, useLayoutEffect, useMemo, useRef, useState, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { composeStories } from '@storybook/react-vite'
import { ToggleButton } from '@/components/buttons/ToggleButton'
import { CONTROLS, ROLES, ROW, TYPE } from './density-core'
import { measureSpacing, type Spacing } from './measure'
import './tiers.css'
import './density.css'
import './catalog.css'

/* Every component and pattern, rendered from its own story in Default and
   Compact side by side. The story is the one the visual regression test
   uses (src/visual.test.tsx): the one with the most variants. Overlays use
   the story that draws them open in place instead of in a portal. */
const STORIES: Record<string, { story: string; args?: Record<string, unknown> }> = {
  'atomic-elements/Avatar': { story: 'Colors' },
  'atomic-elements/Badge': { story: 'Variants' },
  'atomic-elements/Divider': { story: 'Sizes' },
  'atomic-elements/Tag': { story: 'Matrix' },
  'buttons/Button': { story: 'Matrix' },
  'buttons/ToggleButton': { story: 'Matrix' },
  'controls/Checkbox': { story: 'Variants' },
  'controls/ColorPicker': { story: 'Panel' },
  'controls/Radio': { story: 'Variants' },
  'controls/Rating': { story: 'Sizes' },
  'controls/Slider': { story: 'Range' },
  'controls/Switch': { story: 'Variants' },
  'data-display/Accordion': { story: 'Default' },
  'data-display/Calendar': { story: 'Range' },
  'data-display/Card': { story: 'Appearances' },
  'data-display/Carousel': { story: 'Default' },
  'data-display/Collapse': { story: 'Open' },
  'data-display/Table': { story: 'Selectable' },
  'inputs/Combobox': { story: 'Sizes' },
  'inputs/DatePicker': { story: 'Default' },
  'inputs/DateRangePicker': { story: 'Default' },
  'inputs/FileUploader': { story: 'WithStatus' },
  'inputs/NumberInput': { story: 'Sizes' },
  'inputs/Search': { story: 'Sizes' },
  'inputs/Select': { story: 'Sizes' },
  'inputs/TextInput': { story: 'Sizes' },
  'inputs/Textarea': { story: 'Sizes' },
  'loaders/ProgressBar': { story: 'Variants' },
  'loaders/Skeleton': { story: 'Appearances' },
  'loaders/Spinner': { story: 'Variants' },
  'navigation/Breadcrumbs': { story: 'Default' },
  'navigation/Link': { story: 'Variants' },
  'navigation/Menu': { story: 'Anatomy' },
  'navigation/Pagination': { story: 'Default' },
  'navigation/Sidebar': { story: 'Default' },
  'navigation/Stepper': { story: 'Default' },
  'navigation/Tabs': { story: 'Default' },
  'notifications/Alert': { story: 'Variants' },
  'notifications/InlineAlert': { story: 'Variants' },
  'notifications/Toast': { story: 'Variants' },
  'overlays/Modal': { story: 'Anatomy' },
  'overlays/Popover': { story: 'Open' },
  'overlays/Tooltip': { story: 'Anatomy' },
  'patterns/application-ui/AppShell': { story: 'WithSidebar' },
  'patterns/application-ui/DataTablePage': { story: 'ToolbarAndPagination' },
  'patterns/application-ui/DescriptionList': { story: 'Columns' },
  'patterns/application-ui/FormLayouts': { story: 'SettingsSections' },
  'patterns/application-ui/PageHeading': { story: 'WithBreadcrumbsAndMeta' },
  'patterns/application-ui/Stats': { story: 'WithTrend' },
  'states/EmptyState': { story: 'Default' },
  'states/ErrorState': { story: 'Default' },
  'states/SuccessState': { story: 'Default' },
  'templates/object-management/Projects': { story: 'Default' },
}

const modules = import.meta.glob<Parameters<typeof composeStories>[0]>(['../../src/components/**/*.stories.tsx', '!**/._*'], { eager: true })

interface Entry {
  path: string
  name: string
  group: string
  Story: ComponentType<Record<string, unknown>> | null
  args?: Record<string, unknown>
}
const GROUP_NAMES: Record<string, string> = {
  'atomic-elements': 'Atomic elements',
  buttons: 'Buttons',
  controls: 'Controls',
  'data-display': 'Data display',
  inputs: 'Inputs',
  loaders: 'Loaders',
  navigation: 'Navigation',
  notifications: 'Notifications',
  overlays: 'Overlays',
  patterns: 'Patterns',
  states: 'States',
  templates: 'Templates',
}
const ENTRIES: Entry[] = Object.entries(modules)
  .map(([file, mod]) => {
    const path = file.replace('../../src/components/', '').replace('.stories.tsx', '')
    const pick = STORIES[path]
    const stories = composeStories(mod) as Record<string, ComponentType<Record<string, unknown>>>
    return {
      path,
      name: path.split('/').at(-1)!,
      group: GROUP_NAMES[path.split('/')[0]] ?? path.split('/')[0],
      Story: pick ? (stories[pick.story] ?? null) : (Object.values(stories)[0] ?? null),
      args: pick?.args,
    }
  })
  .sort((a, b) => Object.keys(GROUP_NAMES).indexOf(a.path.split('/')[0]) - Object.keys(GROUP_NAMES).indexOf(b.path.split('/')[0]) || a.name.localeCompare(b.name))

/* ============================================================== review */
type State = 'follows' | 'static'
interface Pair {
  key: string
  owner: string
  prop: string
  d: number
  c: number
  state: State
}
interface Result {
  pairs: Pair[]
  d: Spacing[]
  c: Spacing[]
  h: [number, number]
}
// Margins count only on a spacing step; anything else is almost always auto.
const STEPS = new Set([2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48])

function compare(d: Spacing[], c: Spacing[]): Pair[] {
  const byKey = new Map(c.map((r) => [r.key, r]))
  return d
    // An owner with no component class is the story's own layout, not the component.
    .filter((r) => byKey.has(r.key) && r.owner.includes('›'))
    .map((r) => {
      const cr = byKey.get(r.key)!
      return { key: r.key, owner: r.owner, prop: r.prop, d: r.px, c: cr.px, state: Math.abs(r.px - cr.px) > 0.3 ? 'follows' : 'static' }
    })
}

function Cell({ density, entry, result, side, overlay, innerRef }: { density: 'default' | 'compact'; entry: Entry; result: Result | null; side: 'd' | 'c'; overlay: boolean; innerRef: (el: HTMLDivElement | null) => void }) {
  const { Story } = entry
  const states = useMemo(() => new Map(result?.pairs.map((p) => [p.key, p]) ?? []), [result])
  return (
    <div className="catCell" data-density={density}>
      <div className="catLabel">{density === 'default' ? 'Default' : 'Compact'}</div>
      <div className="catScroll">
        <div className="catInner">
          <div ref={innerRef} className="catStory">
            {Story ? <Story {...entry.args} /> : <p className="lyMuted">No story to render.</p>}
          </div>
          {overlay && result && (
            <div className="overlay" aria-hidden="true">
              {result[side].filter((r) => r.owner.includes('›')).map((r) => {
                const pair = states.get(r.key)
                const state = pair?.state ?? 'static'
                const label = side === 'c' && pair && state === 'follows' ? `${pair.d}→${pair.c}` : String(r.px)
                const fits = r.w >= label.length * 6 + 6 && r.h >= 14
                return (
                  <div
                    key={r.id}
                    className="rg catRg"
                    data-state={state}
                    data-kind={r.kind}
                    style={{ left: r.x, top: r.y, width: r.w, height: r.h }}
                    title={`${r.owner}\n${r.prop}: ${pair ? `${pair.d}px Default, ${pair.c}px Compact` : `${r.px}px`}`}
                  >
                    {fits && <span className="rgLabel">{label}</span>}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Review({ entry, overlay, onResult }: { entry: Entry; overlay: boolean; onResult: (path: string, r: Result) => void }) {
  const dRef = useRef<HTMLDivElement | null>(null)
  const cRef = useRef<HTMLDivElement | null>(null)
  const [result, setResult] = useState<Result | null>(null)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    let t = 0
    const bump = () => {
      clearTimeout(t)
      t = window.setTimeout(() => setTick((n) => n + 1), 200)
    }
    const mo = new MutationObserver(bump)
    for (const el of [dRef.current, cRef.current]) if (el) mo.observe(el, { childList: true, subtree: true })
    document.fonts?.ready.then(bump)
    bump()
    return () => mo.disconnect()
  }, [])

  useLayoutEffect(() => {
    if (!tick || !dRef.current || !cRef.current) return
    const d = measureSpacing(dRef.current, 1, (v) => STEPS.has(v))
    const c = measureSpacing(cRef.current, 1, (v) => STEPS.has(v))
    const height = (el: HTMLElement) => Math.round((el.firstElementChild as HTMLElement | null)?.getBoundingClientRect().height ?? 0)
    const r = { pairs: compare(d, c), d, c, h: [height(dRef.current), height(cRef.current)] as [number, number] }
    setResult(r)
    onResult(entry.path, r)
  }, [tick, entry.path, onResult])

  const follows = result?.pairs.filter((p) => p.state === 'follows') ?? []
  const fixed = result?.pairs.filter((p) => p.state === 'static') ?? []
  const fixedRows = useMemo(() => {
    const m = new Map<string, { owner: string; prop: string; px: number; n: number }>()
    for (const p of fixed) {
      const prop = p.prop.replace(/-(top|bottom)$/, '-block').replace(/-(left|right)$/, '-inline')
      const k = `${p.owner}|${prop}|${p.d}`
      const row = m.get(k)
      if (row) row.n++
      else m.set(k, { owner: p.owner, prop, px: p.d, n: 1 })
    }
    return [...m.values()].sort((a, b) => b.px - a.px)
  }, [fixed])

  return (
    <article className="catCard" id={entry.path.replaceAll('/', '-')}>
      <header className="catHead">
        <div className="catTitle">
          <span className="eyebrow">{entry.group}</span>
          <h3>{entry.name}</h3>
        </div>
        {result && (
          <div className="catStats">
            <Status pairs={result.pairs} />
            <span>
              {follows.length} of {result.pairs.length} spacing values follow
            </span>
            <span>
              Height {result.h[0]} → {result.h[1]}
            </span>
          </div>
        )}
      </header>
      <div className="catPair">
        <Cell density="default" side="d" entry={entry} result={result} overlay={overlay} innerRef={(el) => (dRef.current = el)} />
        <Cell density="compact" side="c" entry={entry} result={result} overlay={overlay} innerRef={(el) => (cRef.current = el)} />
      </div>
      {fixedRows.length > 0 && (
        <details className="catDetails">
          <summary>
            {fixed.length} spacing values stay the same in Compact ({fixedRows.length} distinct)
          </summary>
          <div className="tableWrap">
            <table className="spec">
              <thead>
                <tr>
                  <th scope="col">Element</th>
                  <th scope="col">Property</th>
                  <th scope="col" className="num">
                    Both densities
                  </th>
                  <th scope="col" className="num">
                    Times
                  </th>
                </tr>
              </thead>
              <tbody>
                {fixedRows.map((r) => (
                  <tr key={`${r.owner}${r.prop}${r.px}`}>
                    <td>
                      <code>{r.owner}</code>
                    </td>
                    <td>
                      <code>{r.prop}</code>
                    </td>
                    <td className="num">{r.px}px</td>
                    <td className="num">{r.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      )}
    </article>
  )
}

function Status({ pairs }: { pairs: Pair[] }) {
  const n = pairs.length
  const f = pairs.filter((p) => p.state === 'follows').length
  const state = n === 0 ? 'none' : f === n ? 'all' : f === 0 ? 'none' : f / n >= 0.6 ? 'most' : 'some'
  const text = { all: 'All follow', most: 'Mostly follows', some: 'Partly follows', none: n ? 'Static' : 'No spacing' }[state]
  return (
    <span className="catStatus" data-status={state}>
      {text}
    </span>
  )
}

/* ================================================================== app */
function App() {
  const [overlay, setOverlay] = useState(true)
  const [results, setResults] = useState<Record<string, Result>>({})
  const onResult = useMemo(() => (path: string, r: Result) => setResults((all) => ({ ...all, [path]: r })), [])
  const groups = [...new Set(ENTRIES.map((e) => e.group))]
  const total = Object.values(results).reduce(
    (t, r) => ({ n: t.n + r.pairs.length, f: t.f + r.pairs.filter((p) => p.state === 'follows').length }),
    { n: 0, f: 0 },
  )
  const md = CONTROLS.find((c) => c.size === 'md')!.px
  return (
    <main className="doc">
      <header className="intro">
        <p className="eyebrow">Zweihänder · density review · 19 Oct 2026</p>
        <h1>Every component in Default and Compact</h1>
        <p>
          {ENTRIES.length} components and patterns, each rendered from its own story twice: once in Default, once in Compact. Every padding, gap
          and margin is measured in both and paired up. Green moved with density, orange stayed the same. The orange ones are the review: each is
          either right to stay (a 1px border inset, a 2px chip) or a component that still has to read the tokens.
        </p>
        <p className="catKey">
          Compact here: spacing roles {ROLES.map((r) => `${r.role} ${r.px.default}→${r.px.compact}`).join(', ')}; controls md {md.default.h}→
          {md.compact.h}; rows {ROW.default}→{ROW.compact}; body text {TYPE.find((t) => t.role === 'body')!.px.default[0]}→
          {TYPE.find((t) => t.role === 'body')!.px.compact[0]}px.
        </p>
      </header>

      <section className="section" aria-labelledby="sum-h">
        <div className="sectionHead">
          <h2 id="sum-h">Summary</h2>
          <p>
            {total.f} of {total.n} measured spacing values follow density across all components.
          </p>
        </div>
        <div className="tableWrap">
          <table className="spec catSummary">
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Group</th>
                <th scope="col">Status</th>
                <th scope="col" className="num">
                  Follow
                </th>
                <th scope="col" className="num">
                  Stay
                </th>
                <th scope="col" className="num">
                  Height D → C
                </th>
              </tr>
            </thead>
            <tbody>
              {ENTRIES.map((e) => {
                const r = results[e.path]
                return (
                  <tr key={e.path}>
                    <td>
                      <a href={`#${e.path.replaceAll('/', '-')}`}>{e.name}</a>
                    </td>
                    <td className="where">{e.group}</td>
                    <td>{r ? <Status pairs={r.pairs} /> : '…'}</td>
                    <td className="num">{r ? r.pairs.filter((p) => p.state === 'follows').length : ''}</td>
                    <td className="num">{r ? r.pairs.filter((p) => p.state === 'static').length : ''}</td>
                    <td className="num">{r ? `${r.h[0]} → ${r.h[1]}` : ''}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="stay-h">
        <div className="sectionHead">
          <h2 id="stay-h">What stays the same, and why</h2>
          <p>Every orange value below falls into one of four groups. Only the second needs a decision before this becomes code.</p>
        </div>
        <ul className="findings">
          <li>
            <strong>Insets inside a fixed-height control: right to stay.</strong> The 1px block padding of Button and Tag, the 2px inset of the
            Switch track, the 2px half-gap between calendar days, 2px between rating stars and on the Stats change chip. The control's height
            already shrinks; these keep its parts aligned inside it.
          </li>
          <li>
            <strong>Small controls inside components: decide.</strong> Table sort buttons (4/8 with a matching negative margin), Badge (4 and 2),
            the Sidebar count (6), NumberInput steppers, ColorPicker channel fields, textarea padding (8 and 6), the menu group label, the modal
            close button, the skip link. They are controls in all but name; the clean fix is to give each one the control tier of its size, not
            a spacing role.
          </li>
          <li>
            <strong>Alignment offsets: should follow, by formula.</strong> Checkbox and radio helper text is indented 28px, the box plus its gap.
            It should be computed from those two, so it moves when the gap does.
          </li>
          <li>
            <strong>Story content, not the component.</strong> The carousel's sample slides, the sidebar story's header text, the modal story's
            form, the description list's sample lists and the form story's fieldsets are inline styles in the stories. They are counted because
            they render, not because a component owns them.
          </li>
          <li>
            <strong>Default differs from main in four places, all on purpose.</strong> Page padding and header sides 32 → 24 and form sections 32
            → 24 (the 24px section token); Alert padding 10 → 12; menu item block padding 6 → 4, invisible since the item keeps its 32px height.
            One is not on purpose: the app header's sides on narrow screens go 16 → 24, because the trial maps one value where AppShell has two
            breakpoints. In code the section token would apply only from 64rem.
          </li>
          <li>
            <strong>Description list columns use 20px</strong>, which is not a Default role. It stays until someone picks <code>group</code> or{' '}
            <code>container</code> for it.
          </li>
        </ul>
      </section>

      <div className="controls" role="group" aria-label="Review">
        <div className="controlGroup">
          <ToggleButton size="sm" variant="secondary" appearance="outlined" pressed={overlay} onPressedChange={setOverlay}>
            Show spacing
          </ToggleButton>
          <span className="legendItem">
            <span className="swatch catSwatch" data-state="follows" />
            follows density
          </span>
          <span className="legendItem">
            <span className="swatch catSwatch" data-state="static" />
            stays the same
          </span>
        </div>
        <nav className="controlGroup catNav" aria-label="Groups">
          {groups.map((g) => (
            <a key={g} href={`#group-${g.replaceAll(' ', '-')}`}>
              {g}
            </a>
          ))}
        </nav>
      </div>

      {groups.map((g) => (
        <section key={g} className="section" id={`group-${g.replaceAll(' ', '-')}`} aria-label={g}>
          <div className="sectionHead">
            <h2>{g}</h2>
          </div>
          {ENTRIES.filter((e) => e.group === g).map((e) => (
            <Review key={e.path} entry={e} overlay={overlay} onResult={onResult} />
          ))}
        </section>
      ))}
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
