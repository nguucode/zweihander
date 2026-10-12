import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type MouseEvent, type ReactNode } from 'react'
import { Tag } from '@/components/atomic-elements/Tag'
import { Button } from '@/components/buttons/Button'
import { ToggleButton } from '@/components/buttons/ToggleButton'
import { Search } from '@/components/inputs/Search'
import { Select } from '@/components/inputs/Select'
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
  props: { name: string; control: string; options?: string[]; default?: unknown; description?: string }[]
}

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

/** `?item=` and `?vp=` from the address bar; anything unknown falls back to Button on Desktop. */
function readUrl(items: ManifestItem[]) {
  const q = new URLSearchParams(location.search)
  const vp = q.get('vp') ?? ''
  return {
    item:
      items.find((i) => i.id === q.get('item')) ??
      items.find((i) => i.kind === 'component' && i.name === 'Button') ??
      items[0],
    vp: Object.hasOwn(VIEWPORTS, vp) ? (vp as Viewport) : 'desktop',
  }
}

/** The current URL with one param changed. Other params (Storybook's own, ticket 04's props) stay. */
function urlWith(key: string, value: string) {
  const url = new URL(location.href)
  url.searchParams.set(key, value)
  return url.href
}

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
  /** Right column; ticket 04 puts the props panel here. Omitted, the live view takes the space. */
  aside?: ReactNode
}

export function Playground({ manifest, storybookUrl = '../storybook/', homeUrl = '../', aside }: PlaygroundProps) {
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

  // A new item is a step Back returns to; a viewport change is not.
  const select = (item: ManifestItem) => {
    setDrawerOpen(false)
    if (item.id === state.item.id) return
    history.pushState(null, '', urlWith('item', item.id))
    setState((s) => ({ ...s, item }))
  }
  const setVp = (vp: Viewport) => {
    history.replaceState(null, '', urlWith('vp', vp))
    setState((s) => ({ ...s, vp }))
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
          <LiveView item={state.item} vp={state.vp} theme={dark ? 'dark' : 'light'} storybookUrl={storybookUrl} />
        </main>

        {aside && (
          <aside aria-label="Props" className={styles.aside}>
            {aside}
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
}
const ALL = 'all'
const NO_FILTERS: Filters = { query: '', category: ALL, status: ALL }

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
  const { query, category, status } = filters
  const categories = [...new Set(items.map((i) => i.category))].sort()
  const statuses = [...new Set(items.map((i) => i.status))].sort()
  const needle = query.trim().toLowerCase()
  const visible = items.filter(
    (i) =>
      i.name.toLowerCase().includes(needle) &&
      (category === ALL || i.category === category) &&
      (status === ALL || i.status === status),
  )

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
        onChange={(e) => onFilters({ ...filters, query: e.target.value })}
        isFullWidth
      />
      <div className={styles.filters}>
        <Select
          label="Category"
          options={[{ value: ALL, label: 'All' }, ...categories]}
          value={category}
          onValueChange={(v) => onFilters({ ...filters, category: v ?? ALL })}
          size="sm"
          isFullWidth
        />
        <Select
          label="Status"
          options={[{ value: ALL, label: 'All' }, ...statuses]}
          value={status}
          onValueChange={(v) => onFilters({ ...filters, status: v ?? ALL })}
          size="sm"
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
          return (
            <section key={kind} aria-labelledby={`pg-group-${kind}`} className={styles.group}>
              <h2 id={`pg-group-${kind}`} className={styles.groupTitle}>
                {label}
              </h2>
              <ul className={styles.cards}>
                {group.map((item) => (
                  <li key={item.id}>
                    <a
                      href={urlWith('item', item.id)}
                      aria-current={item.id === selected.id ? 'true' : undefined}
                      className={styles.card}
                      onClick={(e) => open(e, item)}
                    >
                      <span className={styles.cardName}>{item.name}</span>
                      <span className={styles.cardMeta}>
                        {item.category}
                        <Tag text={item.status} size="sm" variant={item.status === 'experimental' ? 'warning' : 'info'} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )
        })
      )}
    </div>
  )
}

// --- center column ----------------------------------------------------------------

function LiveView({
  item,
  vp,
  theme,
  storybookUrl,
}: {
  item: ManifestItem
  vp: Viewport
  theme: 'light' | 'dark'
  storybookUrl: string
}) {
  const { width, label } = VIEWPORTS[vp]
  const stage = useRef<HTMLDivElement>(null)
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
  const src = `${storybookUrl}iframe.html?${new URLSearchParams({ id: item.storyId, viewMode: 'story', embed: 'true', globals: `theme:${theme}` })}`
  const storyLink = `${storybookUrl}?path=/story/${item.storyId}`
  const state = done?.src === src ? (done.ok ? 'ready' : 'error') : 'loading'

  useEffect(() => {
    const timer = setTimeout(() => setDone((d) => (d?.src === src ? d : { src, ok: false })), LOAD_TIMEOUT)
    return () => clearTimeout(timer)
  }, [src])

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
