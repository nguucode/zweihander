import { useEffect, useId, useRef, useState, useSyncExternalStore, type MouseEvent } from 'react'
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
import styles from './Playground.module.css'
import {
  DEFAULT_PREVIEW_THEME,
  parsePreviewTheme,
  PREVIEW_THEME_VALUES,
  usePrefersDark,
  type PreviewTheme,
} from './PreviewTheme'
import { PreviewWindow } from './PreviewWindow'
import { VIEWPORTS, type Viewport } from './viewports'

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
 * `?item=`, `?vp=` and the item's changed props from the address bar.
 * Anything unknown falls back: Button, Desktop, the prop's default.
 */
function readUrl(items: ManifestItem[]) {
  const q = new URLSearchParams(location.search)
  const vp = q.get('vp') ?? ''
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
  return { item, vp: Object.hasOwn(VIEWPORTS, vp) ? (vp as Viewport) : 'desktop', args }
}

/**
 * The Preview theme from `?theme-accent=` and the rest. `theme-` because a
 * bare `appearance` is already Button's prop. Unknown values fall back.
 */
function readTheme(): PreviewTheme {
  const q = new URLSearchParams(location.search)
  const theme = { ...DEFAULT_PREVIEW_THEME }
  for (const key of THEME_KEYS) Object.assign(theme, { [key]: parsePreviewTheme(key, q.get(themeParam(key))) ?? theme[key] })
  return theme
}

const THEME_KEYS = Object.keys(DEFAULT_PREVIEW_THEME) as (keyof PreviewTheme)[]
const themeParam = (key: keyof PreviewTheme) => `theme-${key}`

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

/** The current URL with these params set, or removed where undefined. Other params (Storybook's own) stay. */
function urlWith(changes: Record<string, string | undefined>) {
  const url = new URL(location.href)
  for (const [key, value] of Object.entries(changes)) {
    if (value === undefined) url.searchParams.delete(key)
    else url.searchParams.set(key, value)
  }
  return url.href
}

/** Removes an item's props from the URL, so they do not carry over to the next item. */
const withoutProps = (item: ManifestItem) => Object.fromEntries(item.props.map((p) => [p.name, undefined]))

/** The item's story in the full Storybook. */
const storyPage = (storybookUrl: string, item: ManifestItem) => `${storybookUrl}?path=/story/${item.storyId}`

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
  const dark = usePrefersDark()
  const [filters, setFilters] = useState(NO_FILTERS)
  const [folds, setFolds] = useState(NO_FOLDS)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const wide = useWide()

  useEffect(() => {
    const onPop = () => {
      setState(readUrl(items))
      setPreviewTheme(readTheme())
    }
    addEventListener('popstate', onPop)
    return () => removeEventListener('popstate', onPop)
  }, [items])

  // The page's own UI follows the OS; the Preview theme only dresses the frame.
  // On <html>, not a wrapper: popups (Select, the drawer) portal to <body>.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // A new item is a step Back returns to; a viewport or prop change is not.
  const select = (item: ManifestItem) => {
    setDrawerOpen(false)
    if (item.id === state.item.id) return
    history.pushState(null, '', urlWith({ ...withoutProps(state.item), item: item.id }))
    setState((s) => ({ ...s, item, args: {} }))
  }
  const setVp = (vp: Viewport) => {
    history.replaceState(null, '', urlWith({ vp }))
    setState((s) => ({ ...s, vp }))
  }
  // Only a value off the default goes in the URL; undefined (a cleared number) means the default.
  const setProp = (prop: Prop, value: unknown) => {
    const changed = value !== undefined && value !== defaultOf(prop)
    history.replaceState(null, '', urlWith({ [prop.name]: changed ? String(value) : undefined }))
    setState((s) => {
      const { [prop.name]: _, ...args } = s.args
      return { ...s, args: changed ? { ...args, [prop.name]: value } : args }
    })
  }
  const setTheme = (theme: PreviewTheme) => {
    history.replaceState(null, '', urlWith(themeUrl(theme)))
    setPreviewTheme(theme)
  }
  const resetProps = () => {
    history.replaceState(null, '', urlWith(withoutProps(state.item)))
    setState((s) => ({ ...s, args: {} }))
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
        <ThemePopover theme={previewTheme} onChange={setTheme} />
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
                  <Button size="sm" appearance="outlined" variant="secondary" startIcon={<Icon name="menu" />}>
                    Browse
                  </Button>
                }
              >
                {browser}
              </Modal>
            )}
            <div className={styles.viewports}>
              <Tabs
                aria-label="Viewport"
                appearance="pills"
                size="sm"
                // Arrow keys switch at once: a viewport change does not reload the frame.
                activateOnFocus
                items={Object.entries(VIEWPORTS).map(([value, { label }]) => ({ value, label }))}
                value={state.vp}
                onValueChange={(vp) => setVp(vp as Viewport)}
              />
              <Tooltip content="Open in Storybook">
                <Button
                  size="sm"
                  appearance="ghost"
                  variant="secondary"
                  isIconOnly
                  aria-label="Open in Storybook"
                  href={storyPage(storybookUrl, state.item)}
                >
                  <Icon name="external" />
                </Button>
              </Tooltip>
            </div>
          </div>
          <LiveView
            item={state.item}
            vp={state.vp}
            args={state.args}
            theme={previewTheme}
            storybookUrl={storybookUrl}
          />
        </main>

        {state.item.props.length > 0 && (
          <aside aria-labelledby="pg-props" className={styles.aside}>
            <PropsPanel item={state.item} args={state.args} onChange={setProp} onReset={resetProps} />
          </aside>
        )}
      </div>
    </div>
  )
}

const titleCase = (value: string) => value[0].toUpperCase() + value.slice(1)
const choices = (values: readonly string[]) => values.map((value) => ({ value, label: titleCase(value) }))

/** The header's Theme button and its popover: what the item in the frame wears. */
function ThemePopover({ theme, onChange }: { theme: PreviewTheme; onChange: (theme: PreviewTheme) => void }) {
  const set = (change: Partial<PreviewTheme>) => onChange({ ...theme, ...change })
  return (
    <Popover
      title="Preview theme"
      align="end"
      isModal
      trigger={
        <Button size="sm" appearance="outlined" variant="secondary">
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
        <RadioGroup
          label="Radius"
          orientation="horizontal"
          options={choices(PREVIEW_THEME_VALUES.radius)}
          value={theme.radius}
          onValueChange={(radius) => set({ radius: radius as PreviewTheme['radius'] })}
        />
        <RadioGroup
          label="Theme"
          orientation="horizontal"
          options={choices(PREVIEW_THEME_VALUES.appearance)}
          value={theme.appearance}
          onValueChange={(appearance) => set({ appearance: appearance as PreviewTheme['appearance'] })}
        />
        <div className={styles.themeFooter}>
          <Button size="sm" appearance="ghost" variant="secondary" onClick={() => onChange(DEFAULT_PREVIEW_THEME)}>
            Reset
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
          size="sm"
          headingLevel={3}
          icon={<Icon name="search" />}
          title="Nothing matches"
          description="No item has that name in the chosen Category and status."
          action={
            <Button size="sm" appearance="outlined" variant="secondary" onClick={() => setFilters(NO_FILTERS)}>
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
                size="sm"
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
function channelEvent(data: unknown): { type?: string } | undefined {
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
  vp,
  args,
  theme,
  storybookUrl,
}: {
  item: ManifestItem
  vp: Viewport
  args: Args
  theme: PreviewTheme
  storybookUrl: string
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
  const src = `${storybookUrl}iframe.html?${new URLSearchParams({ id: item.storyId, viewMode: 'story', embed: 'true', globals: `appearance:${DEFAULT_PREVIEW_THEME.appearance}` })}`
  const storyLink = storyPage(storybookUrl, item)
  const state = done?.src === src ? (done.ok ? 'ready' : 'error') : 'loading'

  useEffect(() => {
    const timer = setTimeout(() => setDone((d) => (d?.src === src ? d : { src, ok: false })), LOAD_TIMEOUT)
    return () => clearTimeout(timer)
  }, [src])

  // Storybook takes args over the channel only once the story has rendered:
  // before that the preview has no store and throws. Each src gets a new
  // iframe (key={src}), so the frame's window says which one rendered.
  const [rendered, setRendered] = useState<Window | null>(null)
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const target = frame.current?.contentWindow
      if (target && event.source === target && channelEvent(event.data)?.type === 'storyRendered') setRendered(target)
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
    if (argNames.length) post('resetStoryArgs', { storyId: item.storyId, argNames })
    if (Object.keys(updatedArgs).length) post('updateStoryArgs', { storyId: item.storyId, updatedArgs })
  }, [args, rendered, src, item.storyId])

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

  return (
    <div className={styles.live}>
      <PreviewWindow vp={vp}>
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
              size="sm"
              headingLevel={3}
              title="The live view did not load"
              description={`${item.name} could not be shown here. Storybook has the same story.`}
              action={
                <Button size="sm" href={storyLink}>
                  Open in Storybook
                </Button>
              }
            />
          </div>
        )}
      </PreviewWindow>
    </div>
  )
}

// --- right column ----------------------------------------------------------------

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
        <Button size="sm" appearance="ghost" variant="secondary" onClick={onReset}>
          Reset
        </Button>
      </div>
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
  const field = { label: prop.name, helperText: prop.description, size: 'sm', isFullWidth: true } as const
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
        size="sm"
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
