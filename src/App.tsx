import { useEffect, useState, type CSSProperties } from 'react'
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
const docs = (id: string) => `storybook/?path=/docs/${id}--docs`

/* The 16×16 logo from public/favicon.svg, one rect per run so each row can
   be drawn in on load. Keep in sync with that file. */
const LOGO = {
  body: 'M3 0h10M2 1h12M1 2h14M0 3h6M10 3h6M0 4h7M9 4h7M0 5h7M9 5h7M0 6h4M12 6h4M0 7h7M9 7h7M0 8h5M6 8h1M9 8h1M11 8h5M0 9h7M9 9h7M0 10h7M9 10h7M0 11h7M9 11h7M0 12h7M8 12h8M1 13h14M2 14h12M3 15h10',
  blade: 'M6 3h4M7 4h2M7 5h2M4 6h8M7 7h2M7 8h2M7 9h2M7 10h2M7 11h2M7 12h1',
  hooks: 'M5 8h1M10 8h1',
}
const runs = (d: string) => [...d.matchAll(/M(\d+) (\d+)h(\d+)/g)].map(([, x, y, w]) => ({ x: +x, y: +y, w: +w }))

function PixelLogo({ size = 24, animated = false }: { size?: number; animated?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden className={animated ? styles.drawn : undefined}>
      {(['body', 'blade', 'hooks'] as const).map((part) =>
        runs(LOGO[part]).map(({ x, y, w }) => (
          <rect key={`${part}${x}-${y}`} x={x} y={y} width={w} height={1} className={styles[part]} style={{ '--row': y } as CSSProperties} />
        )),
      )}
    </svg>
  )
}

/* The package's public entry points, so the hero count needs no network. */
const COMPONENT_COUNT = Object.values(pkg.exports).filter((e) => typeof e === 'object' && e.import.includes('/components/')).length

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

function ComponentIndex() {
  const index = useComponentIndex()
  if (index === 'error')
    return (
      <div className={styles.empty}>
        <p>The component index did not load.</p>
        <Button appearance="outlined" variant="secondary" href="storybook/">Open Storybook instead</Button>
      </div>
    )
  if (index === 'loading')
    return (
      <div className={styles.index} aria-busy>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className={styles.group}>
            <Skeleton className={styles.skeletonTitle} />
            {Array.from({ length: 3 + (i % 3) }, (_, j) => <Skeleton key={j} className={styles.skeletonRow} />)}
          </div>
        ))}
      </div>
    )
  return (
    <div className={styles.index}>
      {index.map(([category, items]) => (
        <div key={category} className={styles.group}>
          <h3 className={styles.groupTitle}>
            {category} <span>{items.length}</span>
          </h3>
          <ul>
            {items.map((c) => (
              <li key={c.id}><a href={docs(c.id)}>{c.name}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
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

const ACCENTS: AccentColor[] = ['blue', 'red', 'amber', 'green', 'teal']
const RADII: Radius[] = ['none', 'small', 'medium', 'full']

function Playground() {
  const [accent, setAccent] = useState<AccentColor>('blue')
  const [radius, setRadius] = useState<Radius>('none')
  const [dark, setDark] = useState(false)
  const [volume, setVolume] = useState(64)

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
          Every control on the right is a real Zweihänder component, re-themed through one <code>&lt;Theme&gt;</code> wrapper.
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
                  <Slider label="Heat" value={volume} onValueChange={setVolume} showValue />
                  <ProgressBar label="Tempering" value={volume} showValueLabel />
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

const PRINCIPLES = [
  {
    n: '01',
    title: 'Copy the source',
    body: 'Components ship in the shadcn registry format. The CLI drops the file into your repo and rewrites its imports, so a breaking change is a diff you read, not one that arrives.',
    href: docs('getting-started-installation'),
  },
  {
    n: '02',
    title: 'Tokens are measured',
    body: 'Each accent picks its solid step by computing OKLCH to sRGB to WCAG contrast and taking the first step that clears 4.5:1. If a ramp cannot carry a readable label, the build fails.',
    href: docs('foundations-colors'),
  },
  {
    n: '03',
    title: 'Keyboard first',
    body: 'Focus, ARIA and keyboard handling come from Base UI. Styling is plain CSS Modules over custom properties, with no framework to configure.',
    href: docs('foundations-overview'),
  },
]

export default function App() {
  const [dark, setDark] = useState(() => matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <Theme accentColor="blue" radius="none" appearance={dark ? 'dark' : 'light'} className={styles.page}>
      <a href="#main" className={styles.skip}>Skip to content</a>
      <header className={styles.header}>
        <a href="./" className={styles.brand}>
          <PixelLogo />
          <span>zweihänder</span>
        </a>
        <span className={styles.version}>v{pkg.version}</span>
        <nav aria-label="Main" className={styles.nav}>
          <a href={docs('getting-started-introduction')}>Docs</a>
          <a href="#components" className={styles.hideSm}>Components</a>
          <a href="#install" className={styles.hideSm}>Install</a>
          <a href={REPO}>GitHub</a>
        </nav>
        <ToggleButton
          size="sm"
          appearance="outlined"
          variant="secondary"
          pressed={dark}
          onPressedChange={setDark}
        >
          Dark
        </ToggleButton>
      </header>

      <main id="main">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>React UI kit · early access</p>
            <h1 className={styles.display}>
              Two hands.<br />One system.<span className={styles.caret} aria-hidden />
            </h1>
            <p className={styles.lede}>
              Zweihänder is a React component kit styled with CSS Modules over a single layer of design tokens.
              Copy the source into your repo or install it from npm. {COMPONENT_COUNT} components so far, documented one page each.
            </p>
            <div className={styles.actions}>
              <Button size="lg" href={docs('getting-started-introduction')} endIcon={<Icon name="chevron-right" />}>
                Read the docs
              </Button>
              <Button size="lg" appearance="outlined" variant="secondary" href="#components">
                Browse components
              </Button>
            </div>
            <CopyCommand command="npm install zweihander" />
          </div>
          <div className={styles.heroArt}>
            <div className={styles.cartridge}>
              <PixelLogo size={256} animated />
              <p className={styles.cartLabel}>
                <span>ZWH-{pkg.version.replace(/\./g, '')}</span>
                <span>16 × 16</span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="try">
          <header className={styles.sectionHead}>
            <p className={styles.eyebrow}>Playground</p>
            <h2 id="try" className={styles.h2}>One wrapper, every token.</h2>
          </header>
          <Playground />
        </section>

        <section className={styles.section} aria-labelledby="why">
          <header className={styles.sectionHead}>
            <p className={styles.eyebrow}>How it is built</p>
            <h2 id="why" className={styles.h2}>Small, owned, checked.</h2>
          </header>
          <ol className={styles.principles}>
            {PRINCIPLES.map((p) => (
              <li key={p.n}>
                <span className={styles.num}>{p.n}</span>
                <div>
                  <h3 className={styles.h3}>{p.title}</h3>
                  <p>{p.body}</p>
                  <a href={p.href} className={styles.more}>Read more <Icon name="chevron-right" /></a>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="components" className={styles.section} aria-labelledby="components-h">
          <header className={styles.sectionHead}>
            <p className={styles.eyebrow}>{COMPONENT_COUNT} components</p>
            <h2 id="components-h" className={styles.h2}>Components</h2>
          </header>
          <ComponentIndex />
        </section>

        <section id="install" className={styles.section} aria-labelledby="install-h">
          <header className={styles.sectionHead}>
            <p className={styles.eyebrow}>Install</p>
            <h2 id="install-h" className={styles.h2}>Two ways in.</h2>
          </header>
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
        </section>
      </main>

      <footer className={styles.footer}>
        <PixelLogo size={32} />
        <p>Zweihänder {pkg.version} · MIT · built with its own components</p>
        <nav aria-label="Footer" className={styles.nav}>
          <a href="storybook/">Storybook</a>
          <a href={REPO}>GitHub</a>
          <a href="https://ontheshore.biz">ontheshore</a>
        </nav>
      </footer>
    </Theme>
  )
}
