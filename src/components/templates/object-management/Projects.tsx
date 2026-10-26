'use client'

import { useMemo, useState, type ComponentProps } from 'react'
import { Icon, type IconName } from '@/lib/icon'
import { Avatar } from '../../atomic-elements/Avatar'
import { Badge } from '../../atomic-elements/Badge'
import { Tag, type TagVariant } from '../../atomic-elements/Tag'
import { Button } from '../../buttons/Button'
import { ToggleButton } from '../../buttons/ToggleButton'
import { Table, type TableColumn } from '../../data-display/Table'
import { Search } from '../../inputs/Search'
import { Menu } from '../../navigation/Menu'
import { NavSidebar, type NavSidebarEntry } from '../../patterns/application-ui/NavSidebar'
import { Tabs } from '../../navigation/Tabs'
import { EmptyState } from '../../states/EmptyState'
import { AppShell } from '../application-ui/AppShell'
import { TableToolbar, TableToolbarGroup } from '../../patterns/application-ui/DataTablePage'
import { TopBar } from '../../patterns/application-ui/TopBar'
import { sampleProjects, type Project, type ProjectActivity, type ProjectStatus } from './projects-data'
import styles from './Projects.module.css'

const STATUSES: ProjectStatus[] = ['Active', 'On hold', 'Expired', 'Inactive', 'On grace period']
const statusTone: Record<ProjectStatus, TagVariant> = {
  Active: 'success',
  'On hold': 'neutral',
  Expired: 'danger',
  Inactive: 'neutral',
  'On grace period': 'warning',
}

/** Each tab is a saved filter; every tab but Archived leaves archived projects out. */
const TABS: { value: string; label: string; matches: (p: Project) => boolean }[] = [
  { value: 'all', label: 'All', matches: (p) => !p.isArchived },
  { value: 'risk', label: 'Risk', matches: (p) => !p.isArchived && p.health === 'risk' },
  { value: 'on-hold', label: 'On hold', matches: (p) => !p.isArchived && p.status === 'On hold' },
  { value: 'potential-risk', label: 'Potential risk', matches: (p) => !p.isArchived && p.health === 'potential-risk' },
  { value: 'on-track', label: 'On track', matches: (p) => !p.isArchived && p.health === 'on-track' },
  { value: 'archived', label: 'Archived', matches: (p) => p.isArchived },
]

// Short on purpose: seven columns have to fit a laptop without the table scrolling.
const day = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short' })
const fullDay = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' })
const fullMoment = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' })
/** Within one year the year is left out; the activity and the tooltip carry it. */
const sameYear = (a: Date, b: Date) => a.getFullYear() === b.getFullYear()
const money = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 1 })

const statusTag = (status: ProjectStatus) => <Tag size="sm" variant={statusTone[status]} text={status} />

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

const activityIcon: Record<ProjectActivity['type'], IconName> = { created: 'plus', status: 'info', estimation: 'file' }

/**
 * What happened to a project, newest first. Local to this template on
 * purpose: it becomes a Timeline component once a second screen needs one.
 */
function ActivityTimeline({ project }: { project: Project }) {
  return (
    <section className={styles.activity} aria-label={`${project.name} activity`}>
      <ol className={styles.events}>
        {project.activity.map((event, i) => (
          <li key={i} className={styles.event}>
            <span className={styles.eventIcon} aria-hidden="true">
              <Icon name={activityIcon[event.type]} />
            </span>
            <div className={styles.eventBody}>
              <p className={styles.eventText}>
                <strong>{event.by}</strong>{' '}
                {event.type === 'created' && 'created the project'}
                {event.type === 'estimation' && (
                  <>
                    changed the estimation from <strong>{money.format(event.from)}</strong> to{' '}
                    <strong>{money.format(event.to)}</strong>
                  </>
                )}
                {event.type === 'status' && (
                  <>
                    changed the status from {statusTag(event.from)} to {statusTag(event.to)}
                  </>
                )}{' '}
                <time className={styles.muted} dateTime={event.at.toISOString()}>
                  {fullMoment.format(event.at)}
                </time>
              </p>
              {event.type === 'status' && event.note && <p className={styles.note}>{event.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

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
 * An object-management page: projects in a table, sliced by tabs, narrowed by
 * search and a status filter, sortable, selectable for bulk archive, and
 * expandable to each project's activity. The state is local; swap it for
 * your data layer when you copy the page.
 */
export function Projects({ projects: initialProjects = sampleProjects, ...props }: ProjectsProps) {
  const [projects, setProjects] = useState(initialProjects)
  const [tab, setTab] = useState('all')
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('all')
  const [selected, setSelected] = useState<string[]>([])
  const [isCompact, setIsCompact] = useState(false)

  // Tab counts follow the search and the status filter, so a count always
  // matches the rows its tab shows.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter(
      (p) =>
        (status === 'all' || p.status === status) &&
        (!q || p.name.toLowerCase().includes(q) || !!p.pm?.name.toLowerCase().includes(q)),
    )
  }, [projects, query, status])
  const activeTab = TABS.find((t) => t.value === tab) ?? TABS[0]
  const rows = filtered.filter(activeTab.matches)
  const openCount = projects.filter((p) => !p.isArchived).length

  const clearFilters = () => {
    setQuery('')
    setStatus('all')
  }

  const table = (
    <Table
      columns={columns}
      rows={rows}
      getRowId={(p) => p.id}
      caption={`${activeTab.label} projects`}
      density={isCompact ? 'sm' : 'md'}
      isSelectable
      selectedIds={selected}
      onSelectionChange={setSelected}
      expandedContent={(p) => p.activity.length > 0 && <ActivityTimeline project={p} />}
      emptyState={
        <EmptyState
          size="sm"
          headingLevel={2}
          title={query ? `No projects match “${query}”` : 'No projects here'}
          description="Try another name or PM, another tab, or clear the filters."
          action={
            <Button size="sm" variant="secondary" appearance="outlined" onClick={clearFilters}>
              Clear filters
            </Button>
          }
        />
      }
    />
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
        <h1 className={styles.title}>
          Projects <Badge count={openCount} variant="secondary" />
        </h1>
        <TableToolbar
          selectedCount={selected.length}
          onClearSelection={() => setSelected([])}
          selectionActions={
            <Button
              size="sm"
              variant="secondary"
              appearance="outlined"
              onClick={() => {
                setProjects((all) => all.map((p) => (selected.includes(p.id) ? { ...p, isArchived: true } : p)))
                setSelected([])
              }}
            >
              Archive
            </Button>
          }
        >
          <TableToolbarGroup>
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
            <Menu
              trigger={
                <Button variant="secondary" appearance="outlined" endIcon={<Icon name="chevron-down" />}>
                  {status === 'all' ? 'All statuses' : status}
                </Button>
              }
              items={[
                {
                  type: 'radio',
                  label: 'Status',
                  value: status,
                  onValueChange: setStatus,
                  options: [{ value: 'all', label: 'All statuses' }, ...STATUSES.map((s) => ({ value: s, label: s }))],
                },
              ]}
            />
            <Search
              aria-label="Search projects"
              placeholder="Search projects or PMs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.search}
            />
          </TableToolbarGroup>
          <Button startIcon={<Icon name="plus" />}>Add project</Button>
        </TableToolbar>
        <Tabs
          aria-label="Project views"
          className={styles.tabs}
          value={tab}
          onValueChange={(next) => {
            setTab(next)
            // Selection is per view: archiving rows you can no longer see would surprise.
            setSelected([])
          }}
          items={TABS.map((t) => ({
            value: t.value,
            label: (
              <>
                {t.label} <Badge count={filtered.filter(t.matches).length} size="sm" variant="secondary" />
              </>
            ),
            // One table, in the selected tab's panel only. Base UI keeps a closing
            // panel mounted for a frame, so the same table in every panel showed twice.
            content: t.value === tab ? table : undefined,
          }))}
        />
      </div>
    </AppShell>
  )
}
