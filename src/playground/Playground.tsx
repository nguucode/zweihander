import { useEffect, useId, useRef, useState, useSyncExternalStore, type MouseEvent, type ReactNode } from 'react'
import { Tag } from '@/components/atomic-elements/Tag'
import { Accordion } from '@/components/data-display/Accordion'
import { Button } from '@/components/buttons/Button'
import { RadioGroup } from '@/components/controls/Radio'
import { Switch } from '@/components/controls/Switch'
import { NumberInput } from '@/components/inputs/NumberInput'
import { Search } from '@/components/inputs/Search'
import { Select } from '@/components/inputs/Select'
import { TextInput } from '@/components/inputs/TextInput'
import { Spinner } from '@/components/loaders/Spinner'
import { Tabs } from '@/components/navigation/Tabs'
import { Modal } from '@/components/overlays/Modal'
import { Popover } from '@/components/overlays/Popover'
import { Tooltip } from '@/components/overlays/Tooltip'
import { EmptyState } from '@/components/states/EmptyState'
import { ErrorState } from '@/components/states/ErrorState'
import { Icon } from '@/lib/icon'
import { INSPECT_EVENT, INSPECTED_EVENT, partNumber, partOf, type InspectRequest, type TokenValue } from './inspect'
import styles from './Playground.module.css'
import {
  DEFAULT_PREVIEW_THEME,
  parsePreviewTheme,
  PREVIEW_THEME_VALUES,
  themeCode,
  usePrefersDark,
  type PreviewTheme,
} from './PreviewTheme'

/** One entry of `manifest.json`, written by scripts/build-playground-manifest.mjs. */
export interface ManifestItem {
  kind: 'component' | 'pattern' | 'template'
  /** Slug of the story file's title: what `?item=` holds. */
  id: string
  name: string
  category: string
  status: string
  /** The story the live view shows. */
  storyId: string
  props: Prop[]
  /** The Specs tab: only for an item whose MDX page has DocTabs. */
  specs?: Specs
  /** The Guideline tab, from the same page. */
  guideline?: Guideline
}

/** One `<SpecTable>`: a size (Measurements) or a variant (Color), by its caption. */
export interface SpecTableData {
  caption?: string
  rows: { part: string; property: string; token: string }[]
}

export interface Specs {
  /** The story file's `anatomyParts`: each part's element in the story, by selector. */
  anatomy: { name: string; selector: string; description: string }[]
  measurements: SpecTableData[]
  color: SpecTableData[]
  /** Pseudo-classes the page's States section forces: the Specs tab offers them. */
  pseudo: string[]
}

export interface Guideline {
  /** Markdown paragraphs and lists, docs blocks left out. */
  whenToUse: string[]
  whenNotToUse: string[]
  doDont: { do: { storyId: string; caption: string }; dont: { storyId: string; caption: string } }[]
}

/** One editable prop: the manifest leaves out ReactNode and function props. */
export interface Prop {
  name: string
  /** Storybook's control type; `options` makes it a choice whatever the type. */
  control: string
  options?: (string | number)[]
  default?: unknown
  description?: string
}

/** Props moved off their default, by name. A prop at its default is absent. */
type Args = Record<string, unknown>

export interface Manifest {
  items: ManifestItem[]
}

/** The right column's tabs, in order; `?tab=` holds one. */
const TABS = [
  ['playground', 'Playground'],
  ['specs', 'Specs'],
  ['guideline', 'Guideline'],
] as const
export type PanelTab = (typeof TABS)[number][0]

/** The tabs an item has: Specs and Guideline only once its docs are written. */
const tabsOf = (item: ManifestItem): PanelTab[] => [
  'playground',
  ...(item.specs ? (['specs'] as const) : []),
  ...(item.guideline ? (['guideline'] as const) : []),
]

/** A Do or Don't example from Guideline, shown in the live view in place of the item's own story. */
type Example = { storyId: string; kind: 'do' | 'dont'; caption: string }
const exampleLabel = (kind: Example['kind']) => (kind === 'do' ? 'Do' : "Don't")

/** A row of a Specs table, as the Specs tab hovers it. */
type SpecRow = SpecTableData['rows'][number]

/** A state the Specs tab can show: a forced pseudo-class, or `disabled` through the item's own prop. */
const STATE_LABELS: Record<string, string> = {
  default: 'Default',
  hover: 'Hover',
  'focus-visible': 'Focus',
  focus: 'Focus',
  'focus-within': 'Focus',
  active: 'Pressed',
  disabled: 'Disabled',
}

/** The item's boolean disabled prop, if it has one. */
const disabledProp = (item: ManifestItem) =>
  item.props.find((p) => p.control === 'boolean' && /^(isD|d)isabled$/.test(p.name))

/** The states Specs offers for an item: none for a static one. One Focus, whichever the page forces first. */
function statesOf(item: ManifestItem) {
  const states = ['default', ...(item.specs?.pseudo ?? []), ...(disabledProp(item) ? ['disabled'] : [])]
  const labels = new Set<string>()
  const unique = states.filter((s) => STATE_LABELS[s] && !labels.has(STATE_LABELS[s]) && labels.add(STATE_LABELS[s]))
  return unique.length > 1 ? unique : []
}

/**
 * A row's state, if its part names one after the comma (`Container, hover`),
 * as a test for the state picked. `focus ring` is a part, not a state.
 */
const ROW_STATES: [RegExp, string[]][] = [
  [/hover/i, ['hover']],
  [/focus(?! ring)/i, ['focus-visible', 'focus', 'focus-within']],
  [/press/i, ['active']],
  [/disabled/i, ['disabled']],
]
const rowShows = (row: SpecRow, state: string) => {
  const qualifier = row.part.split(',').slice(1).join(',')
  const named = ROW_STATES.filter(([re]) => re.test(qualifier))
  return !named.length || named.some(([, states]) => states.includes(state))
}

/**
 * The tables for the item as it stands. A caption that is one of a choice
 * prop's options (`md` of size, `primary` of variant) shows only while that
 * prop has that value; any other caption (Every size) always shows. Rows
 * naming a state show only in that state.
 */
function tablesFor(tables: SpecTableData[], item: ManifestItem, args: Args, state: string) {
  const choices = item.props.filter((p) => p.options)
  return tables
    .filter((t) => {
      const owners = choices.filter((p) => p.options!.map(String).includes(t.caption ?? ''))
      return !owners.length || owners.some((p) => String(args[p.name] ?? p.default) === t.caption)
    })
    .map((t) => ({ ...t, rows: t.rows.filter((r) => rowShows(r, state)) }))
    .filter((t) => t.rows.length)
}

/** What the frame draws and resolves while Specs is open. */
function inspectRequest(item: ManifestItem, args: Args, state: string, highlight: SpecRow | null): InspectRequest | null {
  if (!item.specs) return null
  const tables = [...item.specs.measurements, ...item.specs.color]
  return {
    parts: item.specs.anatomy.map(({ name, selector }) => ({ name, selector })),
    tokens: [...new Set(tablesFor(tables, item, args, state).flatMap((t) => t.rows.map((r) => r.token)))],
    highlight: highlight && { part: partOf(highlight.part), property: highlight.property, token: highlight.token },
    ...(state === 'default' || state === 'disabled' ? {} : { pseudo: state }),
  }
}

const GROUPS = [
  ['component', 'Components'],
  ['pattern', 'Patterns'],
  ['template', 'Templates'],
] as const

/** Under this the item list moves into a drawer. */
const WIDE = '(min-width: 1024px)'

/**
 * No load event after this long means the live view is not coming. A story
 * that throws still loads: Storybook shows its own error inside the frame.
 */
const LOAD_TIMEOUT = 20000

// --- URL state ----------------------------------------------------------------

/**
 * `?item=`, `?tab=` and the item's changed props from the address bar.
 * Anything unknown falls back: Button, Playground, the prop's default.
 */
function readUrl(items: ManifestItem[]) {
  const q = new URLSearchParams(location.search)
  const tab = TABS.find(([value]) => value === q.get('tab'))?.[0] ?? 'playground'
  const item =
    items.find((i) => i.id === q.get('item')) ??
    items.find((i) => i.kind === 'component' && i.name === 'Button') ??
    items[0]
  const args: Args = {}
  for (const prop of item.props) {
    const raw = q.get(prop.name)
    const value = raw === null ? undefined : parseValue(prop, raw)
    if (value !== undefined && value !== defaultOf(prop)) args[prop.name] = value
  }
  return {
    item,
    tab,
    args,
  }
}

/**
 * The Preview theme from `?theme-accent=` and the rest. `theme-` because a
 * bare `appearance` is already Button's prop. Unknown values fall back.
 */
const THEME_KEYS = Object.keys(DEFAULT_PREVIEW_THEME) as (keyof PreviewTheme)[]
const themeParam = (key: keyof PreviewTheme) => `theme-${key}`

function readTheme(): PreviewTheme {
  const q = new URLSearchParams(location.search)
  const read = <K extends keyof PreviewTheme>(key: K) =>
    parsePreviewTheme(key, q.get(themeParam(key))) ?? DEFAULT_PREVIEW_THEME[key]
  return {
    accent: read('accent'),
    gray: read('gray'),
    radius: read('radius'),
    canvas: read('canvas'),
    contentStyle: read('contentStyle'),
    font: read('font'),
    scaling: read('scaling'),
    appearance: read('appearance'),
  }
}

/** The Preview theme as URL changes: only values off the default stay. */
const themeUrl = (theme: PreviewTheme) =>
  Object.fromEntries(
    THEME_KEYS.map((key) => [themeParam(key), theme[key] === DEFAULT_PREVIEW_THEME[key] ? undefined : theme[key]]),
  )

/** The value a URL param stands for, or undefined when it does not fit the prop. */
function parseValue(prop: Prop, raw: string): unknown {
  if (prop.options) return prop.options.find((o) => String(o) === raw)
  if (prop.control === 'boolean') return raw === 'true' ? true : raw === 'false' ? false : undefined
  if (prop.control === 'number') return raw.trim() && Number.isFinite(Number(raw)) ? Number(raw) : undefined
  return raw
}

/** Where a control starts. An unset boolean reads as off and an unset string as empty. */
const defaultOf = (prop: Prop) => prop.default ?? { boolean: false, text: '' }[prop.control]

/**
 * Writes to the address bar go through here. WebKit throws a SecurityError
 * past 100 replaceState calls in 10 seconds, which typing into the address
 * or a text prop reaches, and the keystroke is lost. So a burst is written at
 * most once per URL_WRITE_MS, always ending on its last URL.
 */
const URL_WRITE_MS = 200
let pendingUrl: string | null = null
let lastUrlWrite = 0
let urlTimer: ReturnType<typeof setTimeout> | undefined

/** Drops a write still waiting: on Back, and when the Playground goes away. */
function dropUrl() {
  clearTimeout(urlTimer)
  urlTimer = undefined
  pendingUrl = null
}

function flushUrl() {
  if (pendingUrl !== null && pendingUrl !== location.href) {
    history.replaceState(null, '', pendingUrl)
    lastUrlWrite = Date.now()
  }
  dropUrl()
}

function replaceUrl(url: string) {
  pendingUrl = url
  if (urlTimer) return
  const wait = lastUrlWrite + URL_WRITE_MS - Date.now()
  if (wait <= 0) flushUrl()
  else urlTimer = setTimeout(flushUrl, wait)
}

/** The current URL, or the one waiting to be written, with these params set, or removed where undefined. Other params (Storybook's own) stay. */
function urlWith(changes: Record<string, string | undefined>) {
  const url = new URL(pendingUrl ?? location.href)
  for (const [key, value] of Object.entries(changes)) {
    if (value === undefined) url.searchParams.delete(key)
    else url.searchParams.set(key, value)
  }
  return url.href
}

/** Removes an item's props from the URL, so they do not carry over to the next item. */
const withoutProps = (item: ManifestItem) => Object.fromEntries(item.props.map((p) => [p.name, undefined]))

/** The item's story in the full Storybook. */
const storyPage = (storybookUrl: string, storyId: string) => `${storybookUrl}?path=/story/${storyId}`
/** The item's docs page in the full Storybook, on one of its tabs. */
const docsPage = (storybookUrl: string, item: ManifestItem, docTab: string) =>
  `${storybookUrl}?path=/docs/${item.id}--docs&docTab=${docTab}`

function useWide() {
  return useSyncExternalStore(
    (onChange) => {
      const query = matchMedia(WIDE)
      query.addEventListener('change', onChange)
      return () => query.removeEventListener('change', onChange)
    },
    () => matchMedia(WIDE).matches,
  )
}

// --- the page -----------------------------------------------------------------

export interface PlaygroundProps {
  manifest: Manifest
  /** Where the deployed Storybook lives, relative to the page. */
  storybookUrl?: string
  homeUrl?: string
}

export function Playground({ manifest, storybookUrl = '../storybook/', homeUrl = '../' }: PlaygroundProps) {
  const { items } = manifest
  const [state, setState] = useState(() => readUrl(items))
  const [previewTheme, setPreviewTheme] = useState(readTheme)
  const themeRef = useRef(previewTheme)
  const dark = usePrefersDark()
  const [filters, setFilters] = useState(NO_FILTERS)
  const [folds, setFolds] = useState(NO_FOLDS)
  const [drawerOpen, setDrawerOpen] = useState(false)
  // The Specs row under the pointer or focus, and the token values the frame sent back.
  const [highlight, setHighlight] = useState<SpecRow | null>(null)
  const [values, setValues] = useState<Record<string, TokenValue>>({})
  // The forced state on Specs. Disabled is the item's own prop, so it shows on Playground too.
  const [forcedState, setForcedState] = useState('default')
  const [example, setExample] = useState<Example | null>(null)
  const wide = useWide()

  useEffect(() => {
    // The Preview theme is the page's, not the item's: Back keeps it, and
    // puts it on the entry it lands on.
    const onPop = () => {
      dropUrl()
      setState(readUrl(items))
      replaceUrl(urlWith(themeUrl(themeRef.current)))
    }
    addEventListener('popstate', onPop)
    return () => removeEventListener('popstate', onPop)
  }, [items])

  // A reload or a closed tab still keeps the last edit.
  useEffect(() => {
    addEventListener('pagehide', flushUrl)
    return () => {
      removeEventListener('pagehide', flushUrl)
      dropUrl()
    }
  }, [])

  // The page's own UI follows the OS; the Preview theme only dresses the frame.
  // On <html>, not a wrapper: popups (Select, the drawer) portal to <body>.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // A new item is a step Back returns to; a tab or prop change is not.
  const select = (item: ManifestItem) => {
    setDrawerOpen(false)
    setHighlight(null)
    setForcedState('default')
    setExample(null)
    if (item.id === state.item.id) return
    const url = urlWith({ ...withoutProps(state.item), item: item.id })
    flushUrl()
    history.pushState(null, '', url)
    setState((s) => ({ ...s, item, args: {} }))
  }
  // The tab stays across items; one an item does not have shows Playground.
  const setTab = (tab: PanelTab) => {
    setExample(null)
    replaceUrl(urlWith({ tab: tab === 'playground' ? undefined : tab }))
    setState((s) => ({ ...s, tab }))
  }
  // Only a value off the default goes in the URL; undefined (a cleared number) means the default.
  const setProp = (prop: Prop, value: unknown) => {
    const changed = value !== undefined && value !== defaultOf(prop)
    replaceUrl(urlWith({ [prop.name]: changed ? String(value) : undefined }))
    setState((s) => {
      const { [prop.name]: _, ...args } = s.args
      return { ...s, args: changed ? { ...args, [prop.name]: value } : args }
    })
  }
  const setTheme = (theme: PreviewTheme) => {
    replaceUrl(urlWith(themeUrl(theme)))
    themeRef.current = theme
    setPreviewTheme(theme)
  }
  const resetProps = () => {
    replaceUrl(urlWith(withoutProps(state.item)))
    setState((s) => ({ ...s, args: {} }))
  }

  // The wanted tab, or Playground when this item has not got it.
  const has = tabsOf(state.item)
  const tab = has.includes(state.tab) ? state.tab : 'playground'
  const disabled = disabledProp(state.item)
  const specState = disabled && state.args[disabled.name] === true ? 'disabled' : forcedState
  const setSpecState = (next: string) => {
    if (disabled && (next === 'disabled') !== (specState === 'disabled')) setProp(disabled, next === 'disabled')
    // Disabled drops a forced state, so turning the prop off later shows Default.
    setForcedState(next === 'disabled' ? 'default' : next)
  }

  const browser = (
    <Browser
      items={items}
      selected={state.item}
      filters={filters}
      onFilters={setFilters}
      folds={folds}
      onFolds={setFolds}
      onSelect={select}
    />
  )

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <a href={homeUrl} className={styles.brand}>
          zweihänder
        </a>
        <h1 className={styles.title}>Playground</h1>
        <a href={storybookUrl} className={styles.headerLink}>
          Storybook
        </a>
      </header>

      <div className={styles.columns}>
        {wide && (
          <nav aria-label="Items" className={styles.browser}>
            {browser}
          </nav>
        )}

        <main className={styles.center}>
          <div className={styles.toolbar}>
            {!wide && (
              <Modal
                title="Items"
                open={drawerOpen}
                onOpenChange={setDrawerOpen}
                className={styles.drawer}
                trigger={
                  <Button appearance="outlined" variant="secondary" startIcon={<Icon name="menu" />}>
                    Browse
                  </Button>
                }
              >
                {browser}
              </Modal>
            )}
            <h2 className={styles.itemName}>{state.item.name}</h2>
            {example && (
              <>
                <Tag text={exampleLabel(example.kind)} variant={example.kind === 'do' ? 'success' : 'danger'} />
                <Button appearance="ghost" variant="secondary" startIcon={<Icon name="chevron-left" />} onClick={() => setExample(null)}>
                  Back to {state.item.name}
                </Button>
              </>
            )}
            <div className={styles.tools}>
              <ThemePopover theme={previewTheme} onChange={setTheme} />
              <Tooltip content="Open in Storybook">
                <Button
                  appearance="ghost"
                  variant="secondary"
                  isIconOnly
                  aria-label="Open in Storybook"
                  // The story on show: the Do/Don't example while one is picked.
                  href={storyPage(storybookUrl, example?.storyId ?? state.item.storyId)}
                >
                  <Icon name="external" />
                </Button>
              </Tooltip>
            </div>
          </div>
          <LiveView
            item={state.item}
            storyId={example?.storyId}
            args={example ? {} : state.args}
            theme={previewTheme}
            storybookUrl={storybookUrl}
            inspect={tab === 'specs' && !example ? inspectRequest(state.item, state.args, specState, highlight) : null}
            onValues={setValues}
          />
        </main>

        <aside aria-label="Details" className={styles.aside}>
          <Panel
            item={state.item}
            has={has}
            tab={tab}
            onTab={setTab}
            content={{
              playground: <PropsPanel item={state.item} args={state.args} onChange={setProp} onReset={resetProps} />,
              specs: state.item.specs && (
                <SpecsPanel
                  specs={state.item.specs}
                  measurements={tablesFor(state.item.specs.measurements, state.item, state.args, specState)}
                  color={tablesFor(state.item.specs.color, state.item, state.args, specState)}
                  states={statesOf(state.item)}
                  state={specState}
                  onState={setSpecState}
                  values={values}
                  highlight={highlight}
                  onHighlight={setHighlight}
                />
              ),
              guideline: state.item.guideline && (
                <GuidelinePanel
                  guideline={state.item.guideline}
                  example={example}
                  onExample={setExample}
                  docsUrl={docsPage(storybookUrl, state.item, 'guidelines')}
                />
              ),
            }}
          />
        </aside>
      </div>
    </div>
  )
}

const titleCase = (value: string) => value[0].toUpperCase() + value.slice(1).replaceAll('-', ' ')
const choices = (values: readonly string[]) => values.map((value) => ({ value, label: titleCase(value) }))

/** The header's Theme button and its popover: what the item in the frame wears. */
function ThemePopover({ theme, onChange }: { theme: PreviewTheme; onChange: (theme: PreviewTheme) => void }) {
  const set = (change: Partial<PreviewTheme>) => onChange({ ...theme, ...change })
  // Said in the footer's live region; emptied first so a second copy is said again.
  const [copyStatus, setCopyStatus] = useState('')
  const clearTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => () => clearTimeout(clearTimer.current), [])
  const copy = async () => {
    clearTimeout(clearTimer.current)
    setCopyStatus('')
    try {
      await navigator.clipboard.writeText(themeCode(theme))
      setCopyStatus('Code copied')
    } catch {
      setCopyStatus('Could not copy: the browser blocked the clipboard')
    }
    clearTimer.current = setTimeout(() => setCopyStatus(''), 3000)
  }
  return (
    <Popover
      title="Preview theme"
      align="end"
      isModal
      trigger={
        <Button appearance="outlined" variant="secondary">
          Theme
        </Button>
      }
    >
      <div className={styles.themeSections}>
        <fieldset className={styles.themeSection}>
          <legend className={styles.themeLegend}>Color</legend>
          <Swatches
            label="Accent"
            attribute="data-accent"
            values={PREVIEW_THEME_VALUES.accent}
            value={theme.accent}
            onChange={(accent) => set({ accent })}
          />
          <Swatches
            label="Gray"
            attribute="data-gray"
            values={PREVIEW_THEME_VALUES.gray}
            value={theme.gray}
            onChange={(gray) => set({ gray })}
          />
        </fieldset>
        <fieldset className={styles.themeSection}>
          <legend className={styles.themeLegend}>Typo</legend>
          <div className={styles.themeRow}>
            <Select
              label="Font"
              options={choices(PREVIEW_THEME_VALUES.font)}
              value={theme.font}
              onValueChange={(font) => font && set({ font: font as PreviewTheme['font'] })}
              isFullWidth
            />
            <Select
              label="Scaling"
              options={choices(PREVIEW_THEME_VALUES.scaling)}
              value={theme.scaling}
              onValueChange={(scaling) => scaling && set({ scaling: scaling as PreviewTheme['scaling'] })}
              isFullWidth
            />
          </div>
        </fieldset>
        <RadioGroup
          label="Radius"
          orientation="horizontal"
          options={choices(PREVIEW_THEME_VALUES.radius)}
          value={theme.radius}
          onValueChange={(radius) => set({ radius: radius as PreviewTheme['radius'] })}
        />
        {/* What an AppShell sits on, and how its page meets that canvas. */}
        <RadioGroup
          label="Canvas"
          orientation="horizontal"
          options={choices(PREVIEW_THEME_VALUES.canvas)}
          value={theme.canvas}
          onValueChange={(canvas) => set({ canvas: canvas as PreviewTheme['canvas'] })}
        />
        <RadioGroup
          label="Content"
          orientation="horizontal"
          options={choices(PREVIEW_THEME_VALUES.contentStyle)}
          value={theme.contentStyle}
          onValueChange={(contentStyle) => set({ contentStyle: contentStyle as PreviewTheme['contentStyle'] })}
        />
        <RadioGroup
          label="Theme"
          orientation="horizontal"
          options={choices(PREVIEW_THEME_VALUES.appearance)}
          value={theme.appearance}
          onValueChange={(appearance) => set({ appearance: appearance as PreviewTheme['appearance'] })}
        />
        <div className={styles.themeFooter}>
          <span role="status" className={styles.themeCopied}>
            {copyStatus}
          </span>
          <Button appearance="ghost" variant="secondary" onClick={() => onChange(DEFAULT_PREVIEW_THEME)}>
            Reset
          </Button>
          <Button appearance="outlined" variant="secondary" onClick={copy}>
            Copy code
          </Button>
        </div>
      </div>
    </Popover>
  )
}

/**
 * One colour choice as swatches: native radios, so one tab stop and arrows
 * to move, each named for screen readers. A swatch shows its palette by
 * carrying the palette's own attribute, as a `<Theme>` would.
 */
function Swatches<T extends string>({
  label,
  attribute,
  values,
  value,
  onChange,
}: {
  label: string
  attribute: 'data-accent' | 'data-gray'
  values: readonly T[]
  value: T
  onChange: (value: T) => void
}) {
  const name = useId()
  return (
    <div role="radiogroup" aria-labelledby={`${name}-label`} className={styles.swatchGroup}>
      <span id={`${name}-label`} className={styles.swatchLabel}>
        {label}
      </span>
      <div className={styles.swatches}>
        {values.map((v) => (
          <input
            key={v}
            type="radio"
            name={name}
            aria-label={titleCase(v)}
            {...{ [attribute]: v }}
            className={styles.swatch}
            checked={v === value}
            onChange={() => onChange(v)}
          />
        ))}
      </div>
    </div>
  )
}

// --- left column ----------------------------------------------------------------

interface Filters {
  query: string
  category: string
  status: string
}
const ALL = 'all'
const NO_FILTERS: Filters = { query: '', category: ALL, status: ALL }

/**
 * Category sections the visitor folded, as `kind:category`; not in the URL.
 * Folds made while searching or filtering are their own set, emptied by each
 * new search or filter so a match never sits in a folded section; the folds
 * from before come back once the search is cleared.
 */
interface Folds {
  browsing: string[]
  filtering: string[]
}
const NO_FOLDS: Folds = { browsing: [], filtering: [] }

const sortedUnique = (values: string[]) => [...new Set(values)].sort()

function Browser({
  items,
  selected,
  filters,
  onFilters,
  folds,
  onFolds,
  onSelect,
}: {
  items: ManifestItem[]
  selected: ManifestItem
  filters: Filters
  onFilters: (f: Filters) => void
  folds: Folds
  onFolds: (f: Folds) => void
  onSelect: (item: ManifestItem) => void
}) {
  const { query, category, status } = filters
  const categories = sortedUnique(items.map((i) => i.category))
  const statuses = sortedUnique(items.map((i) => i.status))
  const needle = query.trim().toLowerCase()
  const visible = items.filter(
    (i) =>
      i.name.toLowerCase().includes(needle) &&
      (category === ALL || i.category === category) &&
      (status === ALL || i.status === status),
  )

  const isFiltering = needle !== '' || category !== ALL || status !== ALL
  const folded = isFiltering ? folds.filtering : folds.browsing
  const setFilters = (next: Filters) => {
    onFilters(next)
    onFolds({ ...folds, filtering: [] })
  }
  const setFilter = (change: Partial<Filters>) => setFilters({ ...filters, ...change })

  const open = (event: MouseEvent, item: ManifestItem) => {
    // Let a new tab or window open from the link as usual.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    onSelect(item)
  }

  return (
    <div className={styles.browserBody}>
      <Search
        aria-label="Search by name"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setFilter({ query: e.target.value })}
        isFullWidth
      />
      <div className={styles.filters}>
        <Select
          label="Category"
          options={[{ value: ALL, label: 'All' }, ...categories]}
          value={category}
          onValueChange={(v) => setFilter({ category: v ?? ALL })}
          isFullWidth
        />
        <Select
          label="Status"
          options={[{ value: ALL, label: 'All' }, ...statuses]}
          value={status}
          onValueChange={(v) => setFilter({ status: v ?? ALL })}
          isFullWidth
        />
      </div>
      <p role="status" className={styles.count}>
        {visible.length === 1 ? '1 item' : `${visible.length} items`}
      </p>

      {visible.length === 0 ? (
        <EmptyState
          headingLevel={3}
          icon={<Icon name="search" />}
          title="Nothing matches"
          description="No item has that name in the chosen Category and status."
          action={
            <Button appearance="outlined" variant="secondary" onClick={() => setFilters(NO_FILTERS)}>
              Clear search and filters
            </Button>
          }
        />
      ) : (
        GROUPS.map(([kind, label]) => {
          const group = visible.filter((i) => i.kind === kind)
          if (!group.length) return null
          // Sections with no match are not built at all, so they hide with their items.
          const sections = sortedUnique(group.map((i) => i.category))
          const keys = sections.map((section) => `${kind}:${section}`)
          return (
            <section key={kind} aria-labelledby={`pg-group-${kind}`} className={styles.group}>
              <h2 id={`pg-group-${kind}`} className={styles.groupTitle}>
                {label}
              </h2>
              <Accordion
                multiple
                appearance="flush"
                value={keys.filter((key) => !folded.includes(key))}
                onValueChange={(opened) =>
                  onFolds({
                    ...folds,
                    [isFiltering ? 'filtering' : 'browsing']: [
                      ...folded.filter((key) => !keys.includes(key)),
                      ...keys.filter((key) => !opened.includes(key)),
                    ],
                  })
                }
                items={sections.map((section, index) => ({
                  value: keys[index],
                  title: section,
                  content: (
                    <ul className={styles.cards}>
                      {group
                        .filter((item) => item.category === section)
                        .map((item) => (
                          <li key={item.id}>
                            <a
                              href={urlWith({ ...withoutProps(selected), item: item.id })}
                              aria-current={item.id === selected.id ? 'true' : undefined}
                              className={styles.card}
                              onClick={(e) => open(e, item)}
                            >
                              <span className={styles.cardName}>{item.name}</span>
                              {/* sm on purpose: at md "experimental" truncates in the two-column item grid. */}
                              <Tag
                                text={item.status}
                                size="sm"
                                variant={item.status === 'experimental' ? 'warning' : 'info'}
                              />
                            </a>
                          </li>
                        ))}
                    </ul>
                  ),
                }))}
              />
            </section>
          )
        })
      )}
    </div>
  )
}

// --- center column ----------------------------------------------------------------

/** Storybook's preview channel event in a postMessage, if this is one. */
function channelEvent(data: unknown): { type?: string; args?: unknown[] } | undefined {
  try {
    const message = typeof data === 'string' ? JSON.parse(data) : data
    return message?.key === STORYBOOK_CHANNEL ? message.event : undefined
  } catch {
    return undefined
  }
}

/**
 * How Storybook's manager talks to its preview iframe: a JSON string on
 * postMessage. The event names are Storybook's public core events. Not the
 * iframe's `args=` URL param: Storybook drops union-typed props from it
 * (every `'sm' | 'md'` prop here) and strings with punctuation.
 */
const STORYBOOK_CHANNEL = 'storybook-channel'

/** Sends one channel event into the frame showing `src`. */
const postTo = (target: Window, src: string) => (type: string, payload: object) =>
  target.postMessage(
    JSON.stringify({ key: STORYBOOK_CHANNEL, event: { type, args: [payload] } }),
    new URL(src, location.href).origin,
  )

function LiveView({
  item,
  storyId = item.storyId,
  args,
  theme,
  storybookUrl,
  inspect,
  onValues,
}: {
  item: ManifestItem
  /** The story to show: the item's own unless a Guideline example stands in. */
  storyId?: string
  args: Args
  theme: PreviewTheme
  storybookUrl: string
  /** What the Specs tab asks the frame to draw; null clears it. */
  inspect: InspectRequest | null
  onValues: (values: Record<string, TokenValue>) => void
}) {
  const frame = useRef<HTMLIFrameElement>(null)
  // Which src finished, and how. A src that has not finished is loading.
  const [done, setDone] = useState<{ src: string; ok: boolean } | null>(null)

  // embed=true: Storybook skips play functions, so the item shows its starting
  // state, not where a story test left it.
  // Props and the Preview theme are not in the src: they go over Storybook's
  // channel (below), so a change re-renders the story without reloading the
  // frame. The src only starts the frame on the default theme, so the common
  // case needs no update after the first render.
  const src = `${storybookUrl}iframe.html?${new URLSearchParams({ id: storyId, viewMode: 'story', embed: 'true', globals: `appearance:${DEFAULT_PREVIEW_THEME.appearance}` })}`
  const storyLink = storyPage(storybookUrl, storyId)
  const state = done?.src === src ? (done.ok ? 'ready' : 'error') : 'loading'

  useEffect(() => {
    const timer = setTimeout(() => setDone((d) => (d?.src === src ? d : { src, ok: false })), LOAD_TIMEOUT)
    return () => clearTimeout(timer)
  }, [src])

  // Storybook takes args over the channel only once the story has rendered:
  // before that the preview has no store and throws. Each src gets a new
  // iframe (key={src}), so the frame's window says which one rendered.
  const [rendered, setRendered] = useState<Window | null>(null)
  const onValuesRef = useRef(onValues)
  useEffect(() => {
    onValuesRef.current = onValues
  })
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const target = frame.current?.contentWindow
      if (!target || event.source !== target) return
      const channel = channelEvent(event.data)
      if (channel?.type === 'storyRendered') setRendered(target)
      const payload = channel?.args?.[0] as { values?: Record<string, TokenValue> } | undefined
      if (channel?.type === INSPECTED_EVENT && payload?.values) onValuesRef.current(payload.values)
    }
    addEventListener('message', onMessage)
    return () => removeEventListener('message', onMessage)
  }, [])

  // What the frame holds now, so a change sends only the difference. A
  // frame that just rendered holds the story's own args, so props from a
  // shared link go in right after its first render.
  const sent = useRef<{ target: Window; args: Args } | null>(null)
  useEffect(() => {
    const target = frame.current?.contentWindow
    if (!target || target !== rendered) return
    const before = sent.current?.target === target ? sent.current.args : {}
    sent.current = { target, args }
    const post = postTo(target, src)
    // Back to default is a reset: Storybook then uses the story's own args.
    const argNames = Object.keys(before).filter((name) => !Object.hasOwn(args, name))
    const updatedArgs = Object.fromEntries(Object.entries(args).filter(([name, value]) => before[name] !== value))
    if (argNames.length) post('resetStoryArgs', { storyId, argNames })
    if (Object.keys(updatedArgs).length) post('updateStoryArgs', { storyId, updatedArgs })
  }, [args, rendered, src, storyId])

  // The Preview theme the same way, as Storybook globals. A new frame starts
  // on the default (its src says so).
  const sentTheme = useRef<{ target: Window; theme: PreviewTheme } | null>(null)
  useEffect(() => {
    const target = frame.current?.contentWindow
    if (!target || target !== rendered) return
    const before = sentTheme.current?.target === target ? sentTheme.current.theme : DEFAULT_PREVIEW_THEME
    sentTheme.current = { target, theme }
    const globals = Object.fromEntries(
      Object.entries(theme).filter(([key, value]) => before[key as keyof PreviewTheme] !== value),
    )
    if (Object.keys(globals).length) postTo(target, src)('updateGlobals', { globals })
  }, [theme, rendered, src])

  // The Specs drawing, sent again only when it changes. A new frame starts with none.
  const request = JSON.stringify(inspect)
  const sentInspect = useRef<{ target: Window; request: string } | null>(null)
  useEffect(() => {
    const target = frame.current?.contentWindow
    if (!target || target !== rendered) return
    const before = sentInspect.current?.target === target ? sentInspect.current.request : 'null'
    sentInspect.current = { target, request }
    if (request !== before) postTo(target, src)(INSPECT_EVENT, { request: JSON.parse(request) })
  }, [request, rendered, src])

  return (
    <div className={styles.live}>
        <iframe
          key={src}
          ref={frame}
          title={`${item.name} live view`}
          src={src}
          className={styles.frame}
          onLoad={() => setDone({ src, ok: true })}
        />
        {state === 'loading' && (
          <div className={styles.overlay}>
            <Spinner label={`Loading ${item.name}`} />
          </div>
        )}
        {state === 'error' && (
          <div className={styles.overlay}>
            <ErrorState
              headingLevel={3}
              title="The live view did not load"
              description={`${item.name} could not be shown here. Storybook has the same story.`}
              action={
                <Button href={storyLink}>
                  Open in Storybook
                </Button>
              }
            />
          </div>
        )}
    </div>
  )
}

// --- right column ----------------------------------------------------------------

/**
 * The right column's tabs. One the item has not got is disabled, with a line
 * saying so, and the panel falls back to Playground.
 */
function Panel({
  item,
  has,
  tab,
  onTab,
  content,
}: {
  item: ManifestItem
  has: PanelTab[]
  tab: PanelTab
  onTab: (tab: PanelTab) => void
  content: Partial<Record<PanelTab, ReactNode>>
}) {
  const missing = TABS.filter(([value]) => !has.includes(value)).map(([, label]) => label)
  return (
    <div className={styles.panel}>
      <Tabs
        aria-label="Details"
        isFullWidth
        items={TABS.map(([value, label]) => ({
          value,
          label,
          disabled: !has.includes(value),
          content: content[value] ?? null,
        }))}
        value={tab}
        onValueChange={(value) => onTab(value as PanelTab)}
      />
      {missing.length > 0 && (
        <p className={styles.missing}>
          {missing.join(' and ')} {missing.length === 1 ? 'is' : 'are'} not written for {item.name} yet.
        </p>
      )}
    </div>
  )
}

/**
 * The Specs tab: the anatomy parts, numbered as the frame numbers them, then
 * the Measurements tables for the current size and the Color tables. Each
 * value is the token as the frame resolves it, in the Preview theme. Hovering
 * or focusing a row asks the frame to draw that row's redline.
 */
function SpecsPanel({
  specs,
  measurements,
  color,
  states,
  state,
  onState,
  values,
  highlight,
  onHighlight,
}: {
  specs: Specs
  measurements: SpecTableData[]
  color: SpecTableData[]
  /** Empty for a static item: no picker. */
  states: string[]
  state: string
  onState: (state: string) => void
  values: Record<string, TokenValue>
  highlight: SpecRow | null
  onHighlight: (row: SpecRow | null) => void
}) {
  const parts = specs.anatomy.map((a) => a.name)
  const table = (data: SpecTableData, index: number) => (
    <table key={index} className={styles.specTable}>
      {data.caption && <caption className={styles.specCaption}>{data.caption}</caption>}
      <thead>
        <tr>
          <th scope="col">Part</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, i) => {
          const value = values[row.token]
          const part = parts.indexOf(partOf(row.part))
          return (
            <tr
              key={i}
              // Focusable so the keyboard can ask for the redline too.
              tabIndex={0}
              aria-current={row === highlight ? 'true' : undefined}
              className={styles.specRow}
              onMouseEnter={() => onHighlight(row)}
              onMouseLeave={() => onHighlight(null)}
              onFocus={() => onHighlight(row)}
              // A tap where a touch browser does not focus the row.
              onClick={() => onHighlight(row)}
              onBlur={() => onHighlight(null)}
            >
              <td>
                <span className={styles.specPart}>
                  {part >= 0 && <span aria-hidden="true">{partNumber(part)} </span>}
                  {row.part}
                </span>
                <span className={styles.specProperty}>{row.property}</span>
              </td>
              <td>
                <span className={styles.specValue}>
                  {value?.kind === 'color' && (
                    <span aria-hidden="true" className={styles.specSwatch} style={{ background: value.text }} />
                  )}
                  {value?.text ?? '…'}
                </span>
                <code className={styles.specToken}>{row.token}</code>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
  return (
    <div className={styles.sections}>
      {states.length > 0 && (
        <RadioGroup
          label="State"
          helperText="Forced on the live item. Color rows follow it."
          orientation="horizontal"
          options={states.map((value) => ({ value, label: STATE_LABELS[value] }))}
          value={state}
          onValueChange={(value) => onState(value as string)}
        />
      )}
      {specs.anatomy.length > 0 && (
        <section aria-labelledby="pg-anatomy" className={styles.section}>
          <h2 id="pg-anatomy" className={styles.groupTitle}>
            Anatomy
          </h2>
          <ol className={styles.anatomy}>
            {specs.anatomy.map((part, i) => (
              <li key={part.name}>
                <span aria-hidden="true" className={styles.anatomyNumber}>
                  {partNumber(i)}
                </span>
                <span>
                  <strong>{part.name}</strong> {part.description}
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}
      {measurements.length > 0 && (
        <section aria-labelledby="pg-measurements" className={styles.section}>
          <h2 id="pg-measurements" className={styles.groupTitle}>
            Measurements
          </h2>
          {measurements.map(table)}
        </section>
      )}
      {color.length > 0 && (
        <section aria-labelledby="pg-color" className={styles.section}>
          <h2 id="pg-color" className={styles.groupTitle}>
            Color
          </h2>
          {color.map(table)}
        </section>
      )}
    </div>
  )
}

/** `code`, **bold** and [links](…) in a line of the page's markdown, as text and elements; line breaks become spaces. */
function inlineMarkdown(text: string) {
  return text.replace(/\s*\n\s*/g, ' ').split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    if (part.startsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>
    if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    // A link's target is a Storybook path that means nothing here: its words stay.
    if (part.startsWith('[')) return part.slice(1, part.indexOf(']'))
    return part
  })
}

/** Paragraphs of the page's markdown: a run of `- ` lines is a list. */
function Prose({ blocks }: { blocks: string[] }) {
  return blocks.map((block, i) =>
    block.startsWith('- ') ? (
      <ul key={i} className={styles.proseList}>
        {block.split(/\n(?=- )/).map((line, j) => (
          <li key={j}>{inlineMarkdown(line.slice(2))}</li>
        ))}
      </ul>
    ) : (
      <p key={i} className={styles.prose}>
        {inlineMarkdown(block)}
      </p>
    ),
  )
}

/**
 * The Guideline tab: when to use the item and when not, then the page's
 * Do/Don't pairs. Picking one shows its story in the live view; the toolbar
 * says which and leads back. The rest of the guidelines (accessibility,
 * content) stay on the docs page, one link away.
 */
function GuidelinePanel({
  guideline,
  example,
  onExample,
  docsUrl,
}: {
  guideline: Guideline
  example: Example | null
  onExample: (example: Example) => void
  docsUrl: string
}) {
  const side = (kind: Example['kind'], { storyId, caption }: { storyId: string; caption: string }) => (
    <button
      type="button"
      aria-pressed={example?.storyId === storyId}
      className={styles.example}
      data-kind={kind}
      onClick={() => onExample({ storyId, kind, caption })}
    >
      <span className={styles.exampleKind}>{exampleLabel(kind)}</span>
      {caption}
    </button>
  )
  return (
    <div className={styles.sections}>
      {guideline.whenToUse.length > 0 && (
        <section aria-labelledby="pg-when" className={styles.section}>
          <h2 id="pg-when" className={styles.groupTitle}>
            When to use
          </h2>
          <Prose blocks={guideline.whenToUse} />
        </section>
      )}
      {guideline.whenNotToUse.length > 0 && (
        <section aria-labelledby="pg-when-not" className={styles.section}>
          <h2 id="pg-when-not" className={styles.groupTitle}>
            When not to use
          </h2>
          <Prose blocks={guideline.whenNotToUse} />
        </section>
      )}
      {guideline.doDont.length > 0 && (
        <section aria-labelledby="pg-dodont" className={styles.section}>
          <h2 id="pg-dodont" className={styles.groupTitle}>
            Do and don't
          </h2>
          <p className={styles.hint}>Pick one to see it in the live view.</p>
          {guideline.doDont.map((pair, i) => (
            <div key={i} className={styles.pair}>
              {side('do', pair.do)}
              {side('dont', pair.dont)}
            </div>
          ))}
        </section>
      )}
      <a href={docsUrl} className={styles.headerLink}>
        Accessibility and the rest of the guidelines
      </a>
    </div>
  )
}

function PropsPanel({
  item,
  args,
  onChange,
  onReset,
}: {
  item: ManifestItem
  args: Args
  onChange: (prop: Prop, value: unknown) => void
  onReset: () => void
}) {
  return (
    <div className={styles.props}>
      <div className={styles.propsHeader}>
        <h2 id="pg-props" className={styles.groupTitle}>
          Props
        </h2>
        <Button appearance="ghost" variant="secondary" onClick={onReset}>
          Reset
        </Button>
      </div>
      {item.props.length === 0 && <p className={styles.missing}>{item.name} has no props to change here.</p>}
      {item.props.map((prop) => (
        <PropControl
          key={`${item.id} ${prop.name}`}
          prop={prop}
          value={Object.hasOwn(args, prop.name) ? args[prop.name] : defaultOf(prop)}
          onChange={(value) => onChange(prop, value)}
        />
      ))}
    </div>
  )
}

/** A choice is a Select, a boolean a Switch, a number a NumberInput, anything else a TextInput. */
function PropControl({ prop, value, onChange }: { prop: Prop; value: unknown; onChange: (value: unknown) => void }) {
  const field = { label: prop.name, helperText: prop.description, isFullWidth: true } as const
  const { options } = prop
  if (options)
    return (
      <Select
        {...field}
        options={options.map(String)}
        value={value === undefined ? null : String(value)}
        placeholder="Not set"
        onValueChange={(v) => onChange(options.find((o) => String(o) === v))}
      />
    )
  if (prop.control === 'boolean')
    return (
      <Switch
        label={prop.name}
        helperText={prop.description}
        checked={value === true}
        onCheckedChange={onChange}
      />
    )
  if (prop.control === 'number')
    return (
      <NumberInput
        {...field}
        value={typeof value === 'number' ? value : null}
        onValueChange={(v) => onChange(v ?? undefined)}
      />
    )
  return <TextInput {...field} value={String(value ?? '')} onChange={(e) => onChange(e.target.value)} />
}
