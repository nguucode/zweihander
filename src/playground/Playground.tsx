import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type MouseEvent } from 'react'
import { Tag } from '@/components/atomic-elements/Tag'
import { Accordion } from '@/components/data-display/Accordion'
import { Button } from '@/components/buttons/Button'
import { ToggleButton } from '@/components/buttons/ToggleButton'
import { Switch } from '@/components/controls/Switch'
import { NumberInput } from '@/components/inputs/NumberInput'
import { Search } from '@/components/inputs/Search'
import { Select } from '@/components/inputs/Select'
import { TextInput } from '@/components/inputs/TextInput'
import { Spinner } from '@/components/loaders/Spinner'
import { Modal } from '@/components/overlays/Modal'
import { EmptyState } from '@/components/states/EmptyState'
import { ErrorState } from '@/components/states/ErrorState'
import { Icon } from '@/lib/icon'
import styles from './Playground.module.css'

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

const VIEWPORTS = {
  desktop: { label: 'Desktop', width: 1280 },
  tablet: { label: 'Tablet', width: 768 },
  mobile: { label: 'Mobile', width: 375 },
} as const
type Viewport = keyof typeof VIEWPORTS

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
  const [dark, setDark] = useState(() => matchMedia('(prefers-color-scheme: dark)').matches)
  const [filters, setFilters] = useState(NO_FILTERS)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const wide = useWide()

  useEffect(() => {
    const onPop = () => setState(readUrl(items))
    addEventListener('popstate', onPop)
    return () => removeEventListener('popstate', onPop)
  }, [items])

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
  const resetProps = () => {
    history.replaceState(null, '', urlWith(withoutProps(state.item)))
    setState((s) => ({ ...s, args: {} }))
  }

  const browser = <Browser items={items} selected={state.item} filters={filters} onFilters={setFilters} onSelect={select} />

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
        <ToggleButton size="sm" appearance="outlined" variant="secondary" pressed={dark} onPressedChange={setDark}>
          Dark
        </ToggleButton>
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
            <h2 className={styles.current}>{state.item.name}</h2>
            <div role="group" aria-label="Viewport" className={styles.viewports}>
              {(Object.keys(VIEWPORTS) as Viewport[]).map((vp) => (
                <ToggleButton
                  key={vp}
                  size="sm"
                  appearance="outlined"
                  pressed={state.vp === vp}
                  // Pressing the current one again keeps it: one is always on.
                  onPressedChange={(on) => on && setVp(vp)}
                >
                  {VIEWPORTS[vp].label}
                </ToggleButton>
              ))}
            </div>
          </div>
          <LiveView
            item={state.item}
            vp={state.vp}
            args={state.args}
            theme={dark ? 'dark' : 'light'}
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

// --- left column ----------------------------------------------------------------

interface Filters {
  query: string
  category: string
  status: string
  /** Category sections the visitor folded, as `kind/category`. Not in the URL. */
  closed: string[]
}
const ALL = 'all'
const NO_FILTERS: Filters = { query: '', category: ALL, status: ALL, closed: [] }

function Browser({
  items,
  selected,
  filters,
  onFilters,
  onSelect,
}: {
  items: ManifestItem[]
  selected: ManifestItem
  filters: Filters
  onFilters: (f: Filters) => void
  onSelect: (item: ManifestItem) => void
}) {
  const { query, category, status, closed } = filters
  const categories = [...new Set(items.map((i) => i.category))].sort()
  const statuses = [...new Set(items.map((i) => i.status))].sort()
  const needle = query.trim().toLowerCase()
  const visible = items.filter(
    (i) =>
      i.name.toLowerCase().includes(needle) &&
      (category === ALL || i.category === category) &&
      (status === ALL || i.status === status),
  )

  // A new search or filter opens every section, so a match never sits in a folded one.
  const filter = (change: Partial<Filters>) => onFilters({ ...filters, ...change, closed: [] })

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
        onChange={(e) => filter({ query: e.target.value })}
        isFullWidth
      />
      <div className={styles.filters}>
        <Select
          label="Category"
          options={[{ value: ALL, label: 'All' }, ...categories]}
          value={category}
          onValueChange={(v) => filter({ category: v ?? ALL })}
          isFullWidth
        />
        <Select
          label="Status"
          options={[{ value: ALL, label: 'All' }, ...statuses]}
          value={status}
          onValueChange={(v) => filter({ status: v ?? ALL })}
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
            <Button size="sm" appearance="outlined" variant="secondary" onClick={() => onFilters(NO_FILTERS)}>
              Clear search and filters
            </Button>
          }
        />
      ) : (
        GROUPS.map(([kind, label]) => {
          const group = visible.filter((i) => i.kind === kind)
          if (!group.length) return null
          // Sections with no match are not built at all, so they hide with their items.
          const sections = [...new Set(group.map((i) => i.category))].sort()
          const keyOf = (c: string) => `${kind}/${c}`
          return (
            <section key={kind} aria-labelledby={`pg-group-${kind}`} className={styles.group}>
              <h2 id={`pg-group-${kind}`} className={styles.groupTitle}>
                {label}
              </h2>
              <Accordion
                multiple
                appearance="flush"
                size="sm"
                value={sections.map(keyOf).filter((key) => !closed.includes(key))}
                onValueChange={(opened) =>
                  onFilters({
                    ...filters,
                    closed: [
                      ...closed.filter((key) => !key.startsWith(`${kind}/`)),
                      ...sections.map(keyOf).filter((key) => !opened.includes(key)),
                    ],
                  })
                }
                items={sections.map((section) => ({
                  value: keyOf(section),
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
  theme: 'light' | 'dark'
  storybookUrl: string
}) {
  const { width, label } = VIEWPORTS[vp]
  const stage = useRef<HTMLDivElement>(null)
  const frame = useRef<HTMLIFrameElement>(null)
  const [box, setBox] = useState({ w: 0, h: 0 })
  // Which src finished, and how. A src that has not finished is loading.
  const [done, setDone] = useState<{ src: string; ok: boolean } | null>(null)

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) =>
      setBox({ w: entry.contentRect.width, h: entry.contentRect.height }),
    )
    observer.observe(stage.current!)
    return () => observer.disconnect()
  }, [])

  // The frame is the real width, so media and container queries inside it
  // fire as they would on a device; it is scaled down when the column is narrower.
  const scale = box.w ? Math.min(1, box.w / width) : 1
  // embed=true: Storybook skips play functions, so the item shows its starting
  // state, not where a story test left it.
  // Props are not in the src: they go over Storybook's channel (below), so a
  // change re-renders the story without reloading the frame.
  const src = `${storybookUrl}iframe.html?${new URLSearchParams({ id: item.storyId, viewMode: 'story', embed: 'true', globals: `theme:${theme}` })}`
  const storyLink = `${storybookUrl}?path=/story/${item.storyId}`
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
    const post = (type: string, payload: object) =>
      target.postMessage(
        JSON.stringify({ key: STORYBOOK_CHANNEL, event: { type, args: [payload] } }),
        new URL(src, location.href).origin,
      )
    // Back to default is a reset: Storybook then uses the story's own args.
    const argNames = Object.keys(before).filter((name) => !Object.hasOwn(args, name))
    const updatedArgs = Object.fromEntries(Object.entries(args).filter(([name, value]) => before[name] !== value))
    if (argNames.length) post('resetStoryArgs', { storyId: item.storyId, argNames })
    if (Object.keys(updatedArgs).length) post('updateStoryArgs', { storyId: item.storyId, updatedArgs })
  }, [args, rendered, src, item.storyId])

  return (
    <div className={styles.live}>
      <p className={styles.size}>
        {label} {width} px{scale < 1 && ` · shown at ${Math.round(scale * 100)}%`} ·{' '}
        <a href={storyLink} className={styles.storyLink}>
          Open in Storybook
        </a>
      </p>
      <div ref={stage} className={styles.stage}>
        {box.h > 0 && (
          <div className={styles.frameBox} style={{ width: width * scale, height: box.h }}>
            <iframe
              key={src}
              ref={frame}
              title={`${item.name} live view`}
              src={src}
              className={styles.frame}
              style={{ width, height: box.h / scale, transform: `scale(${scale})` }}
              onLoad={() => setDone({ src, ok: true })}
            />
          </div>
        )}
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
      </div>
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
