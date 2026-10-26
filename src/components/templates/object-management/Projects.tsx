'use client'

import { useMemo, useRef, useState, type ComponentProps } from 'react'
import { Icon } from '@/lib/icon'
import { Avatar } from '../../atomic-elements/Avatar'
import { Badge } from '../../atomic-elements/Badge'
import { Button } from '../../buttons/Button'
import { ToggleButton } from '../../buttons/ToggleButton'
import { BarChart } from '../../charts/BarChart'
import { ColumnChooser } from '../../data-display/ColumnChooser'
import { sortRows, Table, type TableColumn, type TableSort } from '../../data-display/Table'
import { Search } from '../../inputs/Search'
import { Menu } from '../../navigation/Menu'
import { Pagination } from '../../navigation/Pagination'
import { NavSidebar, type NavSidebarEntry } from '../../patterns/application-ui/NavSidebar'
import { EmptyState } from '../../states/EmptyState'
import { AppShell } from '../application-ui/AppShell'
import { TableFooter, TableToolbar } from '../../patterns/application-ui/DataTablePage'
import { FilterBar } from '../../patterns/application-ui/FilterBar'
import { downloadCsv, ExportDialog, ImportDialog, type ImportField, type ImportRow } from '../../patterns/application-ui/ImportExport'
import { SavedViews, type SavedView } from '../../patterns/application-ui/SavedViews'
import { TableChartSwitch } from '../../patterns/application-ui/TableChartSwitch'
import { TopBar } from '../../patterns/application-ui/TopBar'
import { ActivityTimeline, fullMoment, HEALTHS, healthLabel, money, STATUSES, statusTag } from './ProjectActivity'
import { sampleProjects, type Project, type ProjectHealth, type ProjectStatus } from './projects-data'
import styles from './Projects.module.css'

const PAGE_SIZES = [10, 25, 50]

// Short on purpose: seven columns have to fit a laptop without the table scrolling.
const day = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short' })
const fullDay = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' })
/** Within one year the year is left out; the activity and the tooltip carry it. */
const sameYear = (a: Date, b: Date) => a.getFullYear() === b.getFullYear()

const columns: TableColumn<Project>[] = [
  { key: 'name', header: 'Project name', sortable: true, isRowHeader: true },
  {
    key: 'pm',
    header: 'PM',
    cell: (p) =>
      p.pm ? (
        // The avatar alone, as in most list screens; its name is the person's.
        <Avatar size="sm" initials={p.pm.initials} imageAlt={p.pm.name} />
      ) : (
        <span className={styles.muted}>Unassigned</span>
      ),
    sortValue: (p) => p.pm?.name,
    sortable: true,
  },
  { key: 'status', header: 'Status', cell: (p) => statusTag(p.status) },
  { key: 'updatedAt', header: 'Last update', sortable: true, cell: (p) => (
      <time className={styles.nowrap} dateTime={p.updatedAt.toISOString()} title={fullMoment.format(p.updatedAt)}>
        {day.format(p.updatedAt)}
      </time>
    ),
  },
  { key: 'resources', header: 'Resources', sortable: true, align: 'end' },
  {
    key: 'timeline',
    header: 'Timeline',
    cell: (p) =>
      p.start && p.end ? (
        <span className={styles.timeline}>
          {sameYear(p.start, p.end) ? day.format(p.start) : fullDay.format(p.start)}
          <span aria-hidden="true">→</span>
          <span className={styles.srOnly}>to</span>
          {sameYear(p.start, p.end) ? day.format(p.end) : fullDay.format(p.end)}
        </span>
      ) : (
        <span className={styles.muted}>Not scheduled</span>
      ),
    sortValue: (p) => p.start,
    sortable: true,
  },
  { key: 'estimation', header: 'Estimation', sortable: true, align: 'end', cell: (p) => money.format(p.estimation) },
]

/** A column as plain text for the export file: names, ISO dates and bare numbers a spreadsheet can read. */
const isoDay = (d: Date) => d.toISOString().slice(0, 10)
const exportValue: Record<string, (p: Project) => string | number | undefined> = {
  name: (p) => p.name,
  pm: (p) => p.pm?.name,
  status: (p) => p.status,
  updatedAt: (p) => isoDay(p.updatedAt),
  resources: (p) => p.resources,
  timeline: (p) => (p.start && p.end ? `${isoDay(p.start)} to ${isoDay(p.end)}` : ''),
  estimation: (p) => p.estimation,
}

const importFields: ImportField[] = [
  { key: 'name', label: 'Project name', isRequired: true, aliases: ['Name', 'Project'] },
  { key: 'pm', label: 'PM', aliases: ['Project manager'] },
  { key: 'status', label: 'Status' },
  { key: 'estimation', label: 'Estimation', aliases: ['Budget'] },
]
const validateImport = (row: ImportRow) => {
  const errors: Record<string, string> = {}
  if (row.status && !STATUSES.includes(row.status as ProjectStatus)) errors.status = `“${row.status}” is not a status: use ${STATUSES.join(', ')}.`
  if (row.estimation && Number.isNaN(Number(row.estimation.replace(/[$,]/g, '')))) errors.estimation = 'Estimation is not a number.'
  return errors
}
/** An imported row as a new project: on track, unscheduled, with no activity but its creation. */
const importedProject = (row: ImportRow, i: number): Project => {
  const now = new Date()
  const pm = row.pm ? { name: row.pm, initials: row.pm.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase() } : undefined
  return {
    id: `import-${now.getTime()}-${i}`,
    name: row.name,
    pm,
    status: (row.status as ProjectStatus) || 'Active',
    health: 'on-track',
    isArchived: false,
    updatedAt: now,
    resources: 0,
    estimation: Number((row.estimation ?? '0').replace(/[$,]/g, '')) || 0,
    activity: [{ type: 'created', by: 'Ines Okafor', at: now }],
  }
}

/** What a view saves: which projects (archived or not, the filters), the columns and the sort. The search is not saved. */
interface ViewState {
  isArchived: boolean
  status: ProjectStatus[]
  health: ProjectHealth[]
  columns: string[]
  sort: TableSort | null
}
type View = Omit<SavedView, 'count'> & { state: ViewState }

const base: ViewState = { isArchived: false, status: [], health: [], columns: columns.map((c) => c.key), sort: null }
const PREDEFINED: View[] = [
  { id: 'all', label: 'All', isPredefined: true, state: base },
  { id: 'risk', label: 'Risk', isPredefined: true, state: { ...base, health: ['risk'] } },
  { id: 'on-hold', label: 'On hold', isPredefined: true, state: { ...base, status: ['On hold'] } },
  { id: 'potential-risk', label: 'Potential risk', isPredefined: true, state: { ...base, health: ['potential-risk'] } },
  { id: 'on-track', label: 'On track', isPredefined: true, state: { ...base, health: ['on-track'] } },
  { id: 'archived', label: 'Archived', isPredefined: true, state: { ...base, isArchived: true } },
]

const matches = (p: Project, s: ViewState) =>
  p.isArchived === s.isArchived &&
  (s.status.length === 0 || s.status.includes(p.status)) &&
  (s.health.length === 0 || s.health.includes(p.health))
// Every list keeps a fixed order (STATUSES, HEALTHS, the columns), so equal states stringify the same.
const same = (a: ViewState, b: ViewState) => JSON.stringify(a) === JSON.stringify(b)
const toggle = <T,>(order: readonly T[], list: T[], value: T, on: boolean) =>
  order.filter((x) => (x === value ? on : list.includes(x)))

const navigation = (count: number): NavSidebarEntry[] => [
  { label: 'Dashboard', href: '#dashboard', icon: <Icon name="star" /> },
  { label: 'Projects', href: '#projects', icon: <Icon name="file" />, badge: String(count) },
  { label: 'Team', href: '#team', icon: <Icon name="user" /> },
  { label: 'Calendar', href: '#calendar', icon: <Icon name="calendar" /> },
]

export interface ProjectsProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** The projects to list. Defaults to made-up sample data. */
  projects?: Project[]
}

/**
 * An index page (list report): projects in saved views, narrowed by search
 * and filters, as a table with pages or as a chart of their estimation. The
 * table sorts, hides columns, selects rows for a bulk archive and expands to
 * each project's activity. The state is local; swap it for your data layer
 * when you copy the page.
 */
export function Projects({ projects: initialProjects = sampleProjects, ...props }: ProjectsProps) {
  const [projects, setProjects] = useState(initialProjects)
  const [views, setViews] = useState(PREDEFINED)
  const [viewId, setViewId] = useState('all')
  const active = views.find((v) => v.id === viewId) ?? views[0]
  const [state, setState] = useState(active.state)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0])
  const [selected, setSelected] = useState<string[]>([])
  const [isCompact, setIsCompact] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  // Any change to the rows shown starts again at the first page and drops
  // the selection, so Archive never acts on rows you can no longer see.
  const goTo = (n: number) => {
    setPage(n)
    setSelected([])
  }
  const update = (patch: Partial<ViewState>) => {
    setState((s) => ({ ...s, ...patch }))
    goTo(1)
  }
  const pick = (id: string) => {
    setViewId(id)
    setState(views.find((v) => v.id === id)?.state ?? base)
    goTo(1)
  }

  // The search narrows every view, so a view's count is the rows it would show.
  const searched = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? projects.filter((p) => p.name.toLowerCase().includes(q) || !!p.pm?.name.toLowerCase().includes(q)) : projects
  }, [projects, query])
  // Sorted before paging, so the sort covers every page.
  const rows = sortRows(searched.filter((p) => matches(p, state)), columns, state.sort)
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize))
  const current = Math.min(page, pageCount)
  const pageRows = rows.slice((current - 1) * pageSize, current * pageSize)
  // An archive can move rows out from under the selection.
  const shownSelected = selected.filter((id) => pageRows.some((p) => p.id === id))
  const openCount = projects.filter((p) => !p.isArchived).length

  // Back to the view's own filters: clearing must not leave the view.
  const canClear = !!query || state.status.join() !== active.state.status.join() || state.health.join() !== active.state.health.join()
  const clearFilters = () => {
    setQuery('')
    update({ status: active.state.status, health: active.state.health })
    // The empty state, and this button with it, is about to go.
    searchRef.current?.focus()
  }

  const byStatus = STATUSES.map((status) => ({
    status,
    estimation: rows.filter((p) => p.status === status).reduce((sum, p) => sum + p.estimation, 0),
  }))

  const filterMenu = <T extends string>(label: string, options: { value: T; label: string }[], value: T[], set: (next: T[]) => void) => (
    <Menu
      trigger={
        <Button variant="secondary" appearance="outlined" endIcon={<Icon name="chevron-down" />}>
          {label}
        </Button>
      }
      items={options.map((o) => ({
        type: 'checkbox' as const,
        label: o.label,
        checked: value.includes(o.value),
        onCheckedChange: (on: boolean) => set(toggle(options.map((x) => x.value), value, o.value, on)),
      }))}
    />
  )

  const table = (
    <>
      <Table
        columns={columns.filter((c) => state.columns.includes(c.key))}
        rows={pageRows}
        getRowId={(p) => p.id}
        caption={`${active.label} projects`}
        density={isCompact ? 'sm' : 'md'}
        sort={state.sort}
        onSortChange={(sort) => update({ sort })}
        isSelectable
        selectedIds={shownSelected}
        onSelectionChange={setSelected}
        expandedContent={(p) => p.activity.length > 0 && <ActivityTimeline project={p} className={styles.activity} />}
        emptyState={
          <EmptyState
            size="sm"
            headingLevel={2}
            title={query ? `No projects match “${query}”` : 'No projects here'}
            description="Try another name or PM, another view, or clear the filters."
            action={
              canClear && (
                <Button size="sm" variant="secondary" appearance="outlined" onClick={clearFilters}>
                  Clear filters
                </Button>
              )
            }
          />
        }
      />
      {rows.length > 0 && (
        <TableFooter>
          <Pagination
            totalItems={rows.length}
            page={current}
            onPageChange={goTo}
            pageSize={pageSize}
            onPageSizeChange={(size) => {
              setPageSize(size)
              goTo(1)
            }}
            pageSizeOptions={PAGE_SIZES}
            size="sm"
            aria-label="Project pages"
          />
        </TableFooter>
      )}
    </>
  )

  // No top bar in the sidebar layout: the account and notifications live in the sidebar's footer.
  const account = (
    <div className={styles.account}>
      <Menu
        align="start"
        trigger={
          <Button variant="secondary" appearance="ghost" startIcon={<Avatar initials="IO" size="sm" />}>
            Ines Okafor
          </Button>
        }
        items={[{ label: 'Your profile' }, { label: 'Settings' }, { type: 'separator' }, { label: 'Sign out' }]}
      />
      <Button variant="secondary" appearance="ghost" isIconOnly aria-label="Notifications">
        <Icon name="info" />
      </Button>
    </div>
  )

  return (
    <AppShell
      brand={<strong className={styles.brand}>Zweihänder</strong>}
      sidebar={
        <NavSidebar
          items={navigation(openCount)}
          currentHref="#projects"
          className={styles.sidebar}
          footer={account}
        />
      }
      // Under 64rem the sidebar is the rail, which hides its footer: the bar holds the account there.
      header={<TopBar end={account} />}
      {...props}
    >
      <div className={styles.page}>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            Projects <Badge count={openCount} variant="secondary" />
          </h1>
          <div className={styles.headingActions}>
            <ImportDialog
              title="Import projects"
              noun={['project', 'projects']}
              fields={importFields}
              validate={validateImport}
              onImport={(rows) => setProjects((all) => [...rows.map(importedProject), ...all])}
              trigger={
                <Button variant="secondary" appearance="outlined">
                  Import
                </Button>
              }
            />
            <ExportDialog
              title="Export projects"
              scopes={[
                { value: 'view', label: `${active.label} view (${rows.length})`, helperText: 'With the search and filters applied now.' },
                { value: 'selected', label: `Selected (${shownSelected.length})`, disabled: shownSelected.length === 0 },
                { value: 'all', label: `All projects (${projects.length})`, helperText: 'Archived ones too.' },
              ]}
              defaultScope={shownSelected.length > 0 ? 'selected' : 'view'}
              columns={columns}
              defaultColumnKeys={state.columns}
              onExport={({ scope, columns: keys }) => {
                const list = scope === 'all' ? projects : scope === 'selected' ? rows.filter((p) => shownSelected.includes(p.id)) : rows
                const shown = columns.filter((c) => keys.includes(c.key))
                downloadCsv('projects.csv', [shown.map((c) => String(c.header)), ...list.map((p) => shown.map((c) => exportValue[c.key](p)))])
              }}
              trigger={
                <Button variant="secondary" appearance="outlined">
                  Export
                </Button>
              }
            />
            <Button startIcon={<Icon name="plus" />}>Add project</Button>
          </div>
        </div>
        <SavedViews
          aria-label="Project views"
          // The view in force counts what it shows now, saved or not.
          views={views.map(({ state: s, ...view }) => ({ ...view, count: searched.filter((p) => matches(p, view.id === active.id ? state : s)).length }))}
          value={active.id}
          onValueChange={pick}
          isModified={!same(state, active.state)}
          onSave={() => setViews((all) => all.map((v) => (v.id === active.id ? { ...v, state } : v)))}
          onDiscard={() => update(active.state)}
          onSaveAs={({ label, isShared }) => {
            const id = `view-${Date.now()}`
            setViews((all) => [...all, { id, label, isShared, state }])
            setViewId(id)
          }}
          isShareable
          onDelete={(id) => {
            setViews((all) => all.filter((v) => v.id !== id))
            if (id === active.id) pick('all')
          }}
        />
        <TableChartSwitch
          aria-label="Show projects as"
          summary={`${rows.length} ${rows.length === 1 ? 'project' : 'projects'}`}
          filters={
            <TableToolbar
              className={styles.toolbar}
              selectedCount={shownSelected.length}
              onClearSelection={() => setSelected([])}
              selectionActions={
                <Button
                  size="sm"
                  variant="secondary"
                  appearance="outlined"
                  onClick={() => {
                    setProjects((all) => all.map((p) => (shownSelected.includes(p.id) ? { ...p, isArchived: true } : p)))
                    setSelected([])
                  }}
                >
                  Archive
                </Button>
              }
            >
              <FilterBar
                aria-label="Project filters"
                search={
                  <Search
                    ref={searchRef}
                    aria-label="Search projects"
                    placeholder="Search projects or PMs"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      goTo(1)
                    }}
                    className={styles.search}
                  />
                }
                filters={
                  <>
                    {filterMenu('Status', STATUSES.map((s) => ({ value: s, label: s })), state.status, (status) => update({ status }))}
                    {filterMenu('Health', HEALTHS.map((h) => ({ value: h, label: healthLabel[h] })), state.health, (health) => update({ health }))}
                  </>
                }
                applied={[
                  ...state.status.map((s) => ({ id: `status:${s}`, label: `Status: ${s}` })),
                  ...state.health.map((h) => ({ id: `health:${h}`, label: `Health: ${healthLabel[h]}` })),
                ]}
                onRemove={(id) => {
                  const [field, value] = id.split(/:(.*)/)
                  if (field === 'status') update({ status: state.status.filter((s) => s !== value) })
                  else update({ health: state.health.filter((h) => h !== value) })
                }}
                onClearAll={() => update({ status: [], health: [] })}
              />
              <div className={styles.tableSettings}>
                <ToggleButton
                  isIconOnly
                  aria-label="Compact rows"
                  variant="secondary"
                  appearance="outlined"
                  pressed={isCompact}
                  onPressedChange={setIsCompact}
                >
                  <Icon name="menu" />
                </ToggleButton>
                <ColumnChooser columns={columns} visibleKeys={state.columns} onVisibleKeysChange={(keys) => update({ columns: keys })} />
              </div>
            </TableToolbar>
          }
          table={table}
          chart={
            <BarChart
              title="Estimation by status"
              data={rows.length ? byStatus : []}
              x="status"
              series={[{ key: 'estimation', label: 'Estimation' }]}
              format={money.format}
            />
          }
        />
      </div>
    </AppShell>
  )
}
