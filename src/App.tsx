import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import pkg from '../package.json'
import { Theme, type AccentColor, type Radius } from '@/theme/Theme'
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
const NPM = 'https://www.npmjs.com/package/zweihander'
const docs = (id: string) => `storybook/?path=/docs/${id}--docs`

/* The 16×16 logo from public/favicon.svg, one rect per run. Keep in sync
   with that file. */
const LOGO = {
  body: 'M3 0h10M2 1h12M1 2h14M0 3h6M10 3h6M0 4h7M9 4h7M0 5h7M9 5h7M0 6h4M12 6h4M0 7h7M9 7h7M0 8h5M6 8h1M9 8h1M11 8h5M0 9h7M9 9h7M0 10h7M9 10h7M0 11h7M9 11h7M0 12h7M8 12h8M1 13h14M2 14h12M3 15h10',
  blade: 'M6 3h4M7 4h2M7 5h2M4 6h8M7 7h2M7 8h2M7 9h2M7 10h2M7 11h2M7 12h1',
  hooks: 'M5 8h1M10 8h1',
}
const runs = (d: string) => [...d.matchAll(/M(\d+) (\d+)h(\d+)/g)].map(([, x, y, w]) => ({ x: +x, y: +y, w: +w }))

function PixelLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden>
      {(['body', 'blade', 'hooks'] as const).map((part) =>
        runs(LOGO[part]).map(({ x, y, w }) => (
          <rect key={`${part}${x}-${y}`} x={x} y={y} width={w} height={1} className={styles[part]} />
        )),
      )}
    </svg>
  )
}

/* The package's public entry points, so the count needs no network. */
const COMPONENT_COUNT = Object.values(pkg.exports).filter((e) => typeof e === 'object' && e.import.includes('/components/')).length

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

/* ---------- theme playground ---------- */

const ACCENTS: AccentColor[] = ['blue', 'orange', 'emerald', 'rose', 'amber']
const RADII: Radius[] = ['sharp', 'rounded', 'full-rounded']

function Playground() {
  const [accent, setAccent] = useState<AccentColor>('blue')
  const [radius, setRadius] = useState<Radius>('rounded')
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
                <button type="button" className={styles.swatch} aria-pressed={accent === a} aria-label={a} onClick={() => setAccent(a)} />
              </Theme>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Radius</legend>
          <div className={styles.segment}>
            {RADII.map((r) => (
              <ToggleButton key={r} size="sm" appearance="outlined" variant="secondary" pressed={radius === r} onPressedChange={() => setRadius(r)}>
                {r}
              </ToggleButton>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Appearance</legend>
          <Switch label="Dark" checked={dark} onCheckedChange={setDark} />
        </fieldset>
        <pre className={styles.snippet} aria-label="The wrapper behind this preview">
          {`<Theme\n  accentColor="${accent}"\n  radius="${radius}"\n  appearance="${dark ? 'dark' : 'light'}"\n>`}
        </pre>
      </div>

      <Theme accentColor={accent} radius={radius} appearance={dark ? 'dark' : 'light'} className={styles.preview}>
        <div className={styles.previewHead}>
          <strong>Workspace settings</strong>
          <Badge count={3} variant="primary" />
        </div>
        <Tabs
          aria-label="Workspace settings"
          size="sm"
          items={[
            {
              value: 'account',
              label: 'Account',
              content: (
                <div className={styles.stack}>
                  <TextInput label="Display name" defaultValue="Halvard Østby" />
                  <Checkbox label="Sign every invoice" defaultChecked />
                  <Switch label="Email on approval" defaultChecked />
                </div>
              ),
            },
            {
              value: 'limits',
              label: 'Limits',
              content: (
                <div className={styles.stack}>
                  <Slider label="Monthly cap" value={heat} onValueChange={setHeat} showValue />
                  <ProgressBar label="Used this month" value={heat} showValueLabel />
                </div>
              ),
            },
          ]}
        />
        <div className={styles.previewFoot}>
          <Tag text="Synced" variant="success" startIcon={<Icon name="success" />} />
          <span className={styles.spacer} />
          <Button appearance="ghost" variant="secondary" size="sm">Cancel</Button>
          <Button size="sm">Save</Button>
        </div>
      </Theme>
    </div>
  )
}

/* ---------- component index ---------- */

/* Storybook's own index is the only reliable source of doc ids: several
   titles are set by hand, so an id cannot be derived from the file name. */
type Item = { name: string; id: string; category: string }
function useComponentIndex() {
  const [state, setState] = useState<Item[] | 'loading' | 'error'>('loading')
  useEffect(() => {
    fetch('storybook/index.json')
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(({ entries }: { entries: Record<string, { id: string; title: string; type: string }> }) => {
        const items: Item[] = []
        for (const { id, title, type } of Object.values(entries)) {
          const [root, category, name] = title.split('/')
          if (type === 'docs' && root === 'Components' && name) items.push({ name, category, id: id.replace(/--docs$/, '') })
        }
        setState(items)
      })
      .catch(() => setState('error'))
  }, [])
  return state
}

function ComponentIndex() {
  const index = useComponentIndex()
  const [filter, setFilter] = useState('All')

  if (index === 'error')
    return (
      <div className={styles.empty}>
        <p>The component index did not load. Storybook has the same list.</p>
        <Button appearance="outlined" variant="secondary" size="sm" href="storybook/">Open Storybook</Button>
      </div>
    )
  if (index === 'loading')
    return (
      <ul className={styles.rows} aria-busy>
        {Array.from({ length: 6 }, (_, i) => (
          <li key={i} className={styles.row}>
            <Skeleton className={styles.skeletonNo} />
            <Skeleton className={styles.skeletonName} />
          </li>
        ))}
      </ul>
    )

  const categories = ['All', ...new Set(index.map((c) => c.category))]
  const shown = filter === 'All' ? index : index.filter((c) => c.category === filter)
  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter by category">
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
        <span className={styles.filterCount}>{shown.length} shown</span>
      </div>
      <ul className={styles.rows}>
        {shown.map((c, i) => (
          <li key={c.id} style={{ '--i': i } as CSSProperties}>
            <a href={docs(c.id)} className={styles.row}>
              <span className={styles.rowNo}>{String(index.indexOf(c) + 1).padStart(2, '0')}</span>
              <span className={styles.rowTitle}>{c.name}</span>
              <span className={styles.rowMeta}>{c.category}</span>
              <Icon name="chevron-right" className={styles.rowArrow} />
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

/* ---------- page ---------- */

const PRINCIPLES = [
  {
    title: 'You own the source',
    body: 'Components ship in the shadcn registry format. The CLI drops the file into your repo and rewrites its imports, so a breaking change is a diff you read, not one that arrives.',
    href: docs('getting-started-installation'),
  },
  {
    title: 'Contrast is measured, not picked',
    body: 'Each accent picks its solid step by computing OKLCH to sRGB to WCAG contrast and taking the first step that clears 4.5:1. If a ramp cannot carry a readable label, the build fails.',
    href: docs('foundations-colors'),
  },
  {
    title: 'Keyboard first',
    body: 'Focus, ARIA and keyboard handling come from Base UI. Styling is plain CSS Modules over custom properties, with no framework to configure.',
    href: docs('foundations-overview'),
  },
]

/* Single-key shortcuts, as on claude.dev. Each nav entry shows its key. */
const NAV = [
  { key: 'D', label: 'Docs', href: docs('getting-started-introduction') },
  { key: 'C', label: 'Components', href: '#components' },
  { key: 'P', label: 'Playground', href: 'playground/' },
  { key: 'G', label: 'GitHub', href: REPO },
]

const SECTIONS = [
  { id: 'theme', label: 'Try the theme' },
  { id: 'components', label: 'Components' },
  { id: 'principles', label: 'How it is built' },
  { id: 'install', label: 'Install' },
]

/* Marks the section nearest the top of the viewport. */
function Toc() {
  const [current, setCurrent] = useState(SECTIONS[0].id)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-20% 0px -70% 0px' },
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return (
    <nav aria-label="On this page" className={styles.toc}>
      <p>On this page</p>
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} aria-current={current === s.id ? 'true' : undefined}>
          {s.label}
        </a>
      ))}
    </nav>
  )
}

function Section({ id, label, aside, children }: { id: string; label: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-h`}>
      <header className={styles.sectionHead}>
        <h2 id={`${id}-h`}>{label}</h2>
        {aside}
      </header>
      {children}
    </section>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return
      const t = e.target as HTMLElement
      if (t.closest('input, textarea, select, [contenteditable="true"]')) return
      const key = e.key.toUpperCase()
      if (key === 'T') return setDark((d) => !d)
      if (key === 'I') return document.getElementById('install')?.scrollIntoView()
      const hit = NAV.find((n) => n.key === key)
      if (hit) location.href = hit.href
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <Theme accentColor="blue" grayColor="gray" radius="sharp" appearance={dark ? 'dark' : 'light'} className={styles.page}>
      <a href="#main" className={styles.skip}>Skip to content</a>
      <header className={styles.header}>
        <a href="./" className={styles.brand} aria-label="Zweihänder home">
          <PixelLogo size={40} />
        </a>
        <nav aria-label="Main" className={styles.nav}>
          {NAV.map((n) => (
            <a key={n.key} href={n.href} aria-keyshortcuts={n.key}>
              <kbd>[{n.key}]</kbd> {n.label}
            </a>
          ))}
          <button type="button" className={styles.navButton} onClick={() => setDark((d) => !d)} aria-keyshortcuts="T" aria-pressed={dark}>
            <kbd>[T]</kbd> {dark ? 'Dark' : 'Light'}
          </button>
        </nav>
        <Button size="sm" href="#install" className={styles.cta} aria-keyshortcuts="I">
          Install
        </Button>
      </header>

      <div className={styles.layout}>
        <aside className={styles.aside}>
          <h1 className={styles.wordmark}>zweihänder</h1>
          <p className={styles.lede}>
            Plain CSS over custom properties, keyboard handling from Base UI, and one <code>&lt;Theme&gt;</code> wrapper for accent, gray, radius and density.
          </p>
          <CopyCommand command="npm install zweihander" />
          <dl className={styles.meta}>
            <dt>Version</dt>
            <dd>{pkg.version}</dd>
            <dt>Components</dt>
            <dd>{COMPONENT_COUNT}</dd>
            <dt>License</dt>
            <dd>MIT</dd>
            <dt>Status</dt>
            <dd>Early access</dd>
          </dl>
        </aside>

        <main id="main" className={styles.main}>
          <Section id="theme" label="Try the theme" aside={<span className={styles.sectionNote}>Every control here is a Zweihänder component</span>}>
            <Playground />
          </Section>

          <Section id="components" label="Components" aside={<a className={styles.sectionNote} href="storybook/">Storybook ↗</a>}>
            <ComponentIndex />
          </Section>

          <Section id="principles" label="How it is built">
            <ol className={styles.principles}>
              {PRINCIPLES.map((p, i) => (
                <li key={p.title} className={styles.principle}>
                  <span className={styles.rowNo}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <a href={p.href} className={styles.more}>Read more <Icon name="chevron-right" /></a>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="install" label="Install" aside={<span className={styles.sectionNote}>Press I to jump here</span>}>
            <Tabs
              aria-label="Install method"
              size="sm"
              items={[
                {
                  value: 'copy',
                  label: 'Copy the source',
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
          </Section>
        </main>

        <Toc />
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <PixelLogo size={32} />
          <p>zweihänder {pkg.version}</p>
          <p className={styles.muted}>MIT · built with its own components</p>
        </div>
        <nav aria-label="Resources" className={styles.footerCol}>
          <p>Resources</p>
          <a href={docs('getting-started-introduction')}>Docs</a>
          <a href="storybook/">Storybook</a>
          <a href="playground/">Playground</a>
        </nav>
        <nav aria-label="Connect" className={styles.footerCol}>
          <p>Connect</p>
          <a href={REPO}>GitHub</a>
          <a href={NPM}>npm</a>
          <a href="https://ontheshore.biz">ontheshore</a>
        </nav>
      </footer>
    </Theme>
  )
}
