import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import pkg from '../package.json'
import { Theme, ACCENT_COLORS, type AccentColor, type Radius } from '@/theme/Theme'
import { Button } from '@/components/buttons/Button'
import { ToggleButton } from '@/components/buttons/ToggleButton'
import { TextInput } from '@/components/inputs/TextInput'
import { Switch } from '@/components/controls/Switch'
import { Checkbox } from '@/components/controls/Checkbox'
import { Slider } from '@/components/controls/Slider'
import { ProgressBar } from '@/components/loaders/ProgressBar'
import { Badge } from '@/components/atomic-elements/Badge'
import { Tag } from '@/components/atomic-elements/Tag'
import { Skeleton } from '@/components/loaders/Skeleton'
import { Tabs } from '@/components/navigation/Tabs'
import { Icon } from '@/lib/icon'
import styles from './App.module.css'

const REPO = 'https://github.com/nguucode/zweihander'
const docs = (id: string) => `storybook/?path=/docs/${id}--docs`

/* The 16×16 logo from public/favicon.svg, one rect per run so each row can
   be drawn in on load. Keep in sync with that file. */
const LOGO = {
  body: 'M3 0h10M2 1h12M1 2h14M0 3h6M10 3h6M0 4h7M9 4h7M0 5h7M9 5h7M0 6h4M12 6h4M0 7h7M9 7h7M0 8h5M6 8h1M9 8h1M11 8h5M0 9h7M9 9h7M0 10h7M9 10h7M0 11h7M9 11h7M0 12h7M8 12h8M1 13h14M2 14h12M3 15h10',
  blade: 'M6 3h4M7 4h2M7 5h2M4 6h8M7 7h2M7 8h2M7 9h2M7 10h2M7 11h2M7 12h1',
  hooks: 'M5 8h1M10 8h1',
}
const runs = (d: string) => [...d.matchAll(/M(\d+) (\d+)h(\d+)/g)].map(([, x, y, w]) => ({ x: +x, y: +y, w: +w }))

/** `rows` reveals the logo top-down; unreached rows render as a ghost with the blade cut out. */
function PixelLogo({ size = 24, animated = false, rows = 16 }: { size?: number; animated?: boolean; rows?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden className={animated ? styles.drawn : undefined}>
      {(['body', 'blade', 'hooks'] as const).map((part) =>
        runs(LOGO[part]).map(({ x, y, w }) => (
          <rect
            key={`${part}${x}-${y}`}
            x={x}
            y={y}
            width={w}
            height={1}
            className={y < rows || part === 'blade' ? styles[part] : styles.ghost}
            style={{ '--row': y } as CSSProperties}
          />
        )),
      )}
    </svg>
  )
}

/* The package's public entry points, so the hero count needs no network. */
const COMPONENT_COUNT = Object.values(pkg.exports).filter((e) => typeof e === 'object' && e.import.includes('/components/')).length

const RADII: Radius[] = ['none', 'small', 'medium', 'large', 'full']

const STATS = [
  { value: COMPONENT_COUNT, label: 'Components' },
  { value: ACCENT_COLORS.length, label: 'Accents' },
  { value: RADII.length, label: 'Radii' },
  { value: 1, label: 'Token layer' },
]

/* ---------- scenery ---------- */

/* Fixed positions so the sky is the same on every load. [left %, top %, delay step] */
const STARS = [
  [6, 14, 0], [18, 38, 3], [27, 9, 5], [41, 22, 1], [52, 6, 4], [63, 31, 2], [71, 12, 6],
  [84, 26, 0], [93, 8, 3], [12, 58, 4], [35, 50, 6], [58, 47, 1], [89, 52, 5], [77, 64, 2],
] as const

function Star({ x, y, d }: { x: number; y: number; d: number }) {
  return (
    <svg className={styles.star} viewBox="0 0 5 5" shapeRendering="crispEdges" aria-hidden style={{ left: `${x}%`, top: `${y}%`, '--d': d } as CSSProperties}>
      <path d="M2 0h1v5h-1zM0 2h5v1h-5z" />
    </svg>
  )
}

function Cloud({ className }: { className: string }) {
  return (
    <svg className={`${styles.cloud} ${className}`} viewBox="0 0 32 12" shapeRendering="crispEdges" aria-hidden>
      <path className={styles.cloudLit} d="M10 0h8v2h-8zM6 2h16v2h-16zM4 4h22v2h-22zM2 6h28v2h-28z" />
      <path className={styles.cloudShade} d="M0 8h32v2h-32zM4 10h24v2h-24z" />
    </svg>
  )
}

/* Stair-stepped ridge, quantised to 4-unit columns so it reads as pixels. */
function ridge(base: number, amp: number, freq: number, phase: number) {
  let d = 'M0 48'
  for (let x = 0; x < 480; x += 8) {
    const h = base + amp * Math.sin(x / freq + phase) + (amp / 2) * Math.sin(x / (freq / 3) + phase * 2)
    const y = 48 - Math.round(h / 4) * 4
    d += `V${y}H${x + 8}`
  }
  return `${d}V48Z`
}
const FAR = ridge(22, 8, 60, 0.4)
const NEAR = ridge(10, 5, 44, 2.1)

function Hills() {
  return (
    <svg className={styles.hills} viewBox="0 0 480 48" preserveAspectRatio="xMidYMax slice" shapeRendering="crispEdges" aria-hidden>
      <path className={styles.hillFar} d={FAR} />
      <path className={styles.hillNear} d={NEAR} />
    </svg>
  )
}

/* ---------- dialog box ---------- */

const INTRO =
  'A React component kit. CSS Modules over one layer of design tokens, Base UI underneath for focus and keyboard. Copy the source into your repo, or install it from npm.'

/* Isolated so the per-character re-render stays inside this box. */
function Typewriter({ text }: { text: string }) {
  const [shown, setShown] = useState(() => (matchMedia('(prefers-reduced-motion: reduce)').matches ? text.length : 0))
  useEffect(() => {
    if (shown >= text.length) return
    const t = setTimeout(() => setShown((n) => n + 1), 22)
    return () => clearTimeout(t)
  }, [shown, text])
  return (
    <p className={styles.typed}>
      {/* Full text holds the layout and is what screen readers get. */}
      <span className={styles.typedGhost}>{text}</span>
      <span className={styles.typedLive} aria-hidden>
        {text.slice(0, shown)}
        {shown < text.length && <span className={styles.typedCaret} />}
      </span>
    </p>
  )
}

function CopyCommand({ command }: { command: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const copy = () =>
    navigator.clipboard.writeText(command).then(
      () => setState('copied'),
      () => setState('failed'),
    ).finally(() => setTimeout(() => setState('idle'), 1600))
  return (
    <div className={styles.command}>
      <code><span aria-hidden className={styles.prompt}>$</span> {command}</code>
      <button type="button" className={styles.copy} onClick={copy} aria-live="polite">
        {state === 'idle' ? 'Copy' : state === 'copied' ? 'Copied' : 'Select it'}
      </button>
    </div>
  )
}

/* ---------- forge mini-game ---------- */

const CELLS = 32
const HI_KEY = 'zwh-forge-hi'
const readHi = () => {
  try {
    return Number(localStorage.getItem(HI_KEY)) || 0
  } catch {
    return 0
  }
}

type Phase = 'idle' | 'play' | 'won' | 'over'
type Verdict = { text: 'Perfect' | 'Good' | 'Miss'; id: number }

function Heart({ full }: { full: boolean }) {
  return (
    <svg viewBox="0 0 7 6" width={21} height={18} shapeRendering="crispEdges" aria-hidden className={full ? styles.heart : styles.heartEmpty}>
      <path d="M1 0h2v1h1v-1h2v1h1v2h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-2h1z" />
    </svg>
  )
}

/**
 * Timing game: strike while the cursor is over the hot zone. Each hit forges
 * one more row of the logo; sixteen rows wins. The cursor runs on a ref and
 * rAF, so the 60fps loop never re-renders React.
 */
function ForgeGame({ onHiScore }: { onHiScore: (n: number) => void }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [rows, setRows] = useState(0)
  const [lives, setLives] = useState(3)
  const [score, setScore] = useState(0)
  const [combo, setCombo] = useState(0)
  const [zone, setZone] = useState({ at: 20, half: 3 })
  const [verdict, setVerdict] = useState<Verdict | null>(null)
  const [hi, setHi] = useState(readHi)

  const pos = useRef(0)
  const dir = useRef(1)
  const speed = useRef(14) // cells per second
  const cursor = useRef<HTMLSpanElement>(null)

  const start = () => {
    pos.current = 0
    dir.current = 1
    speed.current = 14
    setRows(0)
    setLives(3)
    setScore(0)
    setCombo(0)
    setVerdict(null)
    setZone({ at: 8 + Math.floor(Math.random() * 18), half: 3 })
    setPhase('play')
  }

  useEffect(() => {
    if (phase !== 'play') return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      pos.current += dir.current * speed.current * dt
      if (pos.current >= CELLS - 1) dir.current = -1
      if (pos.current <= 0) dir.current = 1
      pos.current = Math.min(CELLS - 1, Math.max(0, pos.current))
      // Snap to whole cells: the cursor moves like a sprite, not a tween.
      if (cursor.current) cursor.current.style.transform = `translateX(${Math.round(pos.current) * 100}%)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [phase])

  const finish = useCallback(
    (result: Phase, final: number) => {
      setPhase(result)
      if (final > hi) {
        setHi(final)
        onHiScore(final)
        try {
          localStorage.setItem(HI_KEY, String(final))
        } catch {
          /* private mode: the score just is not kept */
        }
      }
    },
    [hi, onHiScore],
  )

  const strike = useCallback(() => {
    if (phase !== 'play') return
    const dist = Math.abs(Math.round(pos.current) - zone.at)
    const id = Date.now()
    if (dist <= zone.half) {
      const perfect = dist === 0
      const gained = (perfect ? 100 : 50) * (combo + 1)
      const nextRows = rows + 1
      setScore((s) => s + gained)
      setCombo((c) => c + 1)
      setRows(nextRows)
      setVerdict({ text: perfect ? 'Perfect' : 'Good', id })
      speed.current *= 1.07
      setZone({ at: 3 + Math.floor(Math.random() * (CELLS - 6)), half: Math.max(1, 3 - Math.floor(nextRows / 5)) })
      if (nextRows === 16) finish('won', score + gained + lives * 500)
    } else {
      setCombo(0)
      setLives((l) => l - 1)
      setVerdict({ text: 'Miss', id })
      if (lives === 1) finish('over', score)
    }
  }, [phase, zone, combo, rows, score, lives, finish])

  // Space strikes while a round is running; it would otherwise scroll the page.
  useEffect(() => {
    if (phase !== 'play') return
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== 'Space' || e.repeat) return
      e.preventDefault()
      strike()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, strike])

  const zoneStyle = { '--from': zone.at - zone.half, '--span': zone.half * 2 + 1 } as CSSProperties

  return (
    <div className={styles.forge}>
      <div className={styles.screen} data-shake={verdict?.text === 'Miss' ? verdict.id % 2 : undefined}>
        <div className={styles.screenHud}>
          <span>Score {String(score).padStart(6, '0')}</span>
          <span>Combo x{combo}</span>
          <span className={styles.lives} aria-label={`${lives} lives`}>
            {[0, 1, 2].map((i) => <Heart key={i} full={i < lives} />)}
          </span>
        </div>

        <div className={styles.anvil}>
          <PixelLogo size={160} rows={rows} />
          {verdict && verdict.text !== 'Miss' && (
            <span key={verdict.id} className={styles.sparks} aria-hidden>
              {Array.from({ length: 8 }, (_, i) => <i key={i} style={{ '--a': `${i * 45}deg` } as CSSProperties} />)}
            </span>
          )}
          {verdict && (
            <span key={`v${verdict.id}`} className={styles.verdict} data-kind={verdict.text}>
              {verdict.text}
            </span>
          )}
        </div>

        <div className={styles.track} style={zoneStyle} aria-hidden>
          <span className={styles.zone} />
          <span ref={cursor} className={styles.cursor} />
        </div>
        <ProgressBar label="Blade forged" value={(rows / 16) * 100} showValueLabel className={styles.forged} />

        {phase !== 'play' && (
          <div className={styles.overlay}>
            {phase === 'idle' && <p className={styles.overlayTitle}>Forge the blade</p>}
            {phase === 'won' && <p className={styles.overlayTitle}>Blade forged</p>}
            {phase === 'over' && <p className={styles.overlayTitle}>Game over</p>}
            <p className={styles.overlayBody}>
              {phase === 'idle'
                ? 'Strike when the cursor is inside the hot zone. Sixteen hits forge the sword. Three misses and the steel cracks.'
                : `Score ${score.toLocaleString('en')}${phase === 'won' ? ` · ${lives} lives left` : ` · ${rows} of 16 rows`}`}
            </p>
            <button type="button" className={styles.pressStart} onClick={start} autoFocus={phase !== 'idle'}>
              {phase === 'idle' ? 'Press start' : 'Play again'}
            </button>
          </div>
        )}
      </div>

      <div className={styles.forgeSide}>
        <Button onClick={strike} disabled={phase !== 'play'} className={styles.strike}>
          Strike
        </Button>
        <p className={styles.note}>
          <kbd>Space</kbd> also strikes. The zone narrows every five rows and the cursor speeds up on every hit.
        </p>
        <dl className={styles.hiTable}>
          <dt>Best</dt>
          <dd>{String(hi).padStart(6, '0')}</dd>
          <dt>Perfect</dt>
          <dd>100 × combo</dd>
          <dt>Good</dt>
          <dd>50 × combo</dd>
          <dt>Clear</dt>
          <dd>500 per life</dd>
        </dl>
      </div>
    </div>
  )
}

/* ---------- options (theme playground) ---------- */

const ACCENTS: AccentColor[] = ['blue', 'red', 'amber', 'green', 'teal']

function Playground() {
  const [accent, setAccent] = useState<AccentColor>('blue')
  const [radius, setRadius] = useState<Radius>('none')
  const [dark, setDark] = useState(false)
  const [heat, setHeat] = useState(64)

  return (
    <div className={styles.playground}>
      <div className={styles.controls}>
        <fieldset>
          <legend>Accent</legend>
          <div className={styles.swatches}>
            {ACCENTS.map((a) => (
              <Theme key={a} accentColor={a} render={<span />}>
                <button
                  type="button"
                  className={styles.swatch}
                  aria-pressed={accent === a}
                  aria-label={a}
                  onClick={() => setAccent(a)}
                />
              </Theme>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Radius</legend>
          <div className={styles.segment}>
            {RADII.map((r) => (
              <ToggleButton key={r} size="sm" appearance="outlined" pressed={radius === r} onPressedChange={() => setRadius(r)}>
                {r}
              </ToggleButton>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Appearance</legend>
          <Switch label="Dark" checked={dark} onCheckedChange={setDark} />
        </fieldset>
        <p className={styles.note}>
          Every control in the panel is a real Zweihänder component, re-themed through one <code>&lt;Theme&gt;</code> wrapper.
        </p>
      </div>

      <Theme accentColor={accent} radius={radius} appearance={dark ? 'dark' : 'light'} className={styles.preview}>
        <div className={styles.previewHead}>
          <strong>Forge settings</strong>
          <Badge count={3} variant="primary" />
        </div>
        <Tabs
          aria-label="Forge settings"
          size="sm"
          items={[
            {
              value: 'account',
              label: 'Account',
              content: (
                <div className={styles.stack}>
                  <TextInput label="Smith name" defaultValue="Halvard Østby" />
                  <Checkbox label="Sign every blade" defaultChecked />
                  <Switch label="Notify on quench" defaultChecked />
                </div>
              ),
            },
            {
              value: 'furnace',
              label: 'Furnace',
              content: (
                <div className={styles.stack}>
                  <Slider label="Heat" value={heat} onValueChange={setHeat} showValue />
                  <ProgressBar label="Tempering" value={heat} showValueLabel />
                </div>
              ),
            },
          ]}
        />
        <div className={styles.previewFoot}>
          <Tag text="Ready" variant="success" startIcon={<Icon name="success" />} />
          <span className={styles.spacer} />
          <Button appearance="ghost" variant="secondary" size="sm">Cancel</Button>
          <Button size="sm">Save</Button>
        </div>
      </Theme>
    </div>
  )
}

/* ---------- inventory (component index) ---------- */

/* Storybook's own index is the only reliable source of doc ids: several
   titles are set by hand, so an id cannot be derived from the file name. */
type Group = [category: string, items: { name: string; id: string }[]]
function useComponentIndex() {
  const [state, setState] = useState<Group[] | 'loading' | 'error'>('loading')
  useEffect(() => {
    fetch('storybook/index.json')
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(({ entries }: { entries: Record<string, { id: string; title: string; type: string }> }) => {
        const groups = new Map<string, Group[1]>()
        for (const { id, title, type } of Object.values(entries)) {
          const [root, category, name] = title.split('/')
          if (type !== 'docs' || root !== 'Components' || !name) continue
          if (!groups.has(category)) groups.set(category, [])
          groups.get(category)!.push({ name, id: id.replace(/--docs$/, '') })
        }
        setState([...groups])
      })
      .catch(() => setState('error'))
  }, [])
  return state
}

function Inventory() {
  const index = useComponentIndex()
  if (index === 'error')
    return (
      <div className={styles.empty}>
        <p className={styles.overlayTitle}>Inventory not loaded</p>
        <p>The component index did not load. Storybook has the same list.</p>
        <Button appearance="outlined" variant="secondary" href="storybook/">Open Storybook</Button>
      </div>
    )
  if (index === 'loading')
    return (
      <div className={styles.worlds} aria-busy>
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className={styles.world}>
            <Skeleton className={styles.skeletonTitle} />
            <div className={styles.slots}>
              {Array.from({ length: 4 + i }, (_, j) => <Skeleton key={j} className={styles.skeletonSlot} />)}
            </div>
          </div>
        ))}
      </div>
    )
  let n = 0
  return (
    <div className={styles.worlds}>
      {index.map(([category, items], w) => (
        <div key={category} className={styles.world}>
          <h3 className={styles.worldTitle}>
            <span className={styles.worldNo}>W{w + 1}</span> {category} <span className={styles.worldCount}>{items.length}</span>
          </h3>
          <ul className={styles.slots}>
            {items.map((c) => (
              <li key={c.id} style={{ '--i': n } as CSSProperties}>
                <a href={docs(c.id)} className={styles.slot}>
                  <span className={styles.slotNo}>#{String(++n).padStart(2, '0')}</span>
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/* ---------- quest log ---------- */

const QUESTS = [
  {
    title: 'Copy the source',
    body: 'Components ship in the shadcn registry format. The CLI drops the file into your repo and rewrites its imports, so a breaking change is a diff you read, not one that arrives.',
    href: docs('getting-started-installation'),
  },
  {
    title: 'Measure the tokens',
    body: 'Each accent picks its solid step by computing OKLCH to sRGB to WCAG contrast and taking the first step that clears 4.5:1. If a ramp cannot carry a readable label, the build fails.',
    href: docs('foundations-colors'),
  },
  {
    title: 'Keyboard first',
    body: 'Focus, ARIA and keyboard handling come from Base UI. Styling is plain CSS Modules over custom properties, with no framework to configure.',
    href: docs('foundations-overview'),
  },
]

function Stage({ id, no, title, kicker, children }: { id: string; no: string; title: string; kicker: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-h`}>
      <header className={styles.sectionHead}>
        <p className={styles.stageNo}>{no}</p>
        <div>
          <h2 id={`${id}-h`} className={styles.h2}>{title}</h2>
          <p className={styles.kicker}>{kicker}</p>
        </div>
      </header>
      {children}
    </section>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => matchMedia('(prefers-color-scheme: dark)').matches)
  const [hi, setHi] = useState(readHi)

  return (
    <Theme accentColor="blue" radius="none" appearance={dark ? 'dark' : 'light'} className={styles.page}>
      <a href="#main" className={styles.skip}>Skip to content</a>
      <header className={styles.header}>
        <a href="./" className={styles.brand}>
          <PixelLogo />
          <span>zweihänder</span>
        </a>
        <span className={styles.version}>Lv {pkg.version}</span>
        <nav aria-label="Main" className={styles.nav}>
          <a href={docs('getting-started-introduction')}>Docs</a>
          <a href="#forge" className={styles.hideSm}>Play</a>
          <a href="#inventory" className={styles.hideSm}>Components</a>
          <a href="#install" className={styles.hideSm}>Install</a>
          <a href={REPO} className={styles.hideSm}>GitHub</a>
        </nav>
        <span className={styles.hiScore} aria-label={`High score ${hi}`}>Hi {String(hi).padStart(6, '0')}</span>
        <ToggleButton size="sm" appearance="outlined" variant="secondary" pressed={dark} onPressedChange={setDark}>
          {dark ? 'Night' : 'Day'}
        </ToggleButton>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="title">
          <div className={styles.sky} aria-hidden>
            {[0, 1, 2, 3, 4].map((b) => <span key={b} className={styles.band} />)}
            {STARS.map(([x, y, d]) => <Star key={`${x}-${y}`} x={x} y={y} d={d} />)}
            <Cloud className={styles.cloudA} />
            <Cloud className={styles.cloudB} />
            <Cloud className={styles.cloudC} />
            <Hills />
          </div>

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>React UI kit · early access</p>
              <h1 id="title" className={styles.title} aria-label="Zweihänder">
                <span aria-hidden>Zwei</span>
                <span aria-hidden>H<span className={styles.umlaut}>a</span>nder</span>
              </h1>
              <p className={styles.tagline}>Two hands. One system.</p>

              <dl className={styles.stats}>
                {STATS.map((s, i) => (
                  <div key={s.label} style={{ '--i': i } as CSSProperties}>
                    <dt>{s.label}</dt>
                    <dd>{String(s.value).padStart(2, '0')}</dd>
                  </div>
                ))}
              </dl>

              <div className={styles.actions}>
                <a href="#forge" className={styles.pressStart}>Press start</a>
                <a href={docs('getting-started-introduction')} className={styles.ghostLink}>
                  Read the docs <Icon name="chevron-right" />
                </a>
              </div>
            </div>

            <div className={styles.heroArt}>
              <PixelLogo size={256} animated />
            </div>
          </div>

          <div className={styles.dialog}>
            <p className={styles.speaker}>Zweihänder</p>
            <Typewriter text={INTRO} />
            <CopyCommand command="npm install zweihander" />
            <span className={styles.more} aria-hidden />
          </div>
        </section>

        <Stage id="forge" no="1-1" title="Forge the blade" kicker={`Mini-game · built with the kit's own Button and ProgressBar`}>
          <ForgeGame onHiScore={setHi} />
        </Stage>

        <Stage id="options" no="1-2" title="Options" kicker="One wrapper, every token">
          <Playground />
        </Stage>

        <Stage id="inventory" no="1-3" title="Inventory" kicker={`${COMPONENT_COUNT} components, one doc page each`}>
          <Inventory />
        </Stage>

        <Stage id="quests" no="1-4" title="Quest log" kicker="How it is built">
          <ol className={styles.quests}>
            {QUESTS.map((q, i) => (
              <li key={q.title}>
                <span className={styles.questBox} aria-hidden />
                <div>
                  <p className={styles.questNo}>Quest {String(i + 1).padStart(2, '0')} · Cleared</p>
                  <h3 className={styles.h3}>{q.title}</h3>
                  <p>{q.body}</p>
                  <a href={q.href} className={styles.ghostLink}>Read more <Icon name="chevron-right" /></a>
                </div>
              </li>
            ))}
          </ol>
        </Stage>

        <Stage id="install" no="1-5" title="Save point" kicker="Two ways in">
          <Tabs
            aria-label="Install method"
            className={styles.install}
            items={[
              {
                value: 'copy',
                label: 'Copy-source',
                content: (
                  <div className={styles.stack}>
                    <p>Needs a <code>components.json</code>. Run <code>npx shadcn@latest init</code> first if your project has none. Tokens first, then any component.</p>
                    <CopyCommand command="npx shadcn@latest add https://zweihander.ontheshore.biz/r/tokens.json" />
                    <CopyCommand command="npx shadcn@latest add https://zweihander.ontheshore.biz/r/button.json" />
                  </div>
                ),
              },
              {
                value: 'npm',
                label: 'npm',
                content: (
                  <div className={styles.stack}>
                    <p>Version-pinned, one entry point per component. Import the tokens once at the root.</p>
                    <CopyCommand command="npm install zweihander" />
                    <pre className={styles.code}>{`import 'zweihander/tokens.css'
import { Button } from 'zweihander/button'`}</pre>
                  </div>
                ),
              },
            ]}
          />
          <p className={styles.note}>
            The kit is 0.x and incomplete. Expect breaking changes on any minor bump. <a href={docs('getting-started-installation')}>Full install guide</a>
          </p>
        </Stage>
      </main>

      <footer className={styles.footer}>
        <p className={styles.thanks}>Thanks for playing</p>
        <div className={styles.credits}>
          <PixelLogo size={32} />
          <p>Zweihänder {pkg.version} · MIT · built with its own components</p>
          <nav aria-label="Footer" className={styles.nav}>
            <a href="storybook/">Storybook</a>
            <a href={REPO}>GitHub</a>
            <a href="https://ontheshore.biz">ontheshore</a>
          </nav>
        </div>
      </footer>
    </Theme>
  )
}
