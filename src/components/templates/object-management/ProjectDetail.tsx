'use client'

import { useId, useState, type ComponentProps, type FormEvent } from 'react'
import { Icon } from '@/lib/icon'
import { Avatar } from '../../atomic-elements/Avatar'
import { Tag } from '../../atomic-elements/Tag'
import { Button } from '../../buttons/Button'
import { Table, type TableColumn } from '../../data-display/Table'
import { NumberInput } from '../../inputs/NumberInput'
import { Select } from '../../inputs/Select'
import { TextInput } from '../../inputs/TextInput'
import { Breadcrumbs } from '../../navigation/Breadcrumbs'
import { Menu } from '../../navigation/Menu'
import { Tabs } from '../../navigation/Tabs'
import { Drawer } from '../../overlays/Drawer'
import { DescriptionList } from '../../patterns/application-ui/DescriptionList'
import { NavSidebar } from '../../patterns/application-ui/NavSidebar'
import { TopBar } from '../../patterns/application-ui/TopBar'
import { EmptyState } from '../../states/EmptyState'
import { AppShell } from '../application-ui/AppShell'
import { ActivityTimeline, fullMoment, healthLabel, money, STATUSES, statusTag } from './ProjectActivity'
import { sampleProjects, sampleTeam, type Project, type ProjectActivity, type ProjectStatus, type TeamMember } from './projects-data'
import styles from './ProjectDetail.module.css'

const fullDay = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' })
/** Who makes the edits in this sample: the signed-in user. */
const ME = 'Ines Okafor'

const teamColumns: TableColumn<TeamMember>[] = [
  {
    key: 'name',
    header: 'Name',
    isRowHeader: true,
    cell: (m) => (
      <span className={styles.person}>
        <Avatar size="sm" initials={m.person.initials} />
        {m.person.name}
      </span>
    ),
  },
  { key: 'role', header: 'Role', cell: (m) => m.role },
  { key: 'allocation', header: 'Allocation', align: 'end', cell: (m) => `${m.allocation}%` },
]

const timeline = (p: Project) => (p.start && p.end ? `${fullDay.format(p.start)} to ${fullDay.format(p.end)}` : 'Not scheduled')

export interface ProjectDetailProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** The record to show. Defaults to the first sample project. */
  project?: Project
  /** The people on it, for the Team tab and the header's head count. Defaults to the sample project's team. */
  team?: TeamMember[]
}

/**
 * An object page: one project, with a breadcrumb back to the list, a header
 * holding its name, status, key facts and actions, tabs for its sections,
 * and an aside with its summary and activity. Edit opens a Drawer; saving
 * adds what changed to the activity. The state is local; swap it for your
 * data layer when you copy the page.
 */
export function ProjectDetail({ project: initialProject = sampleProjects[0], team = sampleTeam, ...props }: ProjectDetailProps) {
  const [project, setProject] = useState(initialProject)
  const [isEditing, setIsEditing] = useState(false)

  const account = (
    <div className={styles.account}>
      <Menu
        align="start"
        trigger={
          <Button variant="secondary" appearance="ghost" startIcon={<Avatar initials="IO" size="sm" />}>
            {ME}
          </Button>
        }
        items={[{ label: 'Your profile' }, { label: 'Settings' }, { type: 'separator' }, { label: 'Sign out' }]}
      />
    </div>
  )

  const aside = (
    <div className={styles.aside}>
      <DescriptionList
        title="Summary"
        layout="stacked"
        items={[
          { term: 'Status', details: statusTag(project.status) },
          { term: 'Health', details: healthLabel[project.health] },
          {
            term: 'Last update',
            details: <time dateTime={project.updatedAt.toISOString()}>{fullMoment.format(project.updatedAt)}</time>,
          },
        ]}
      />
      {/* A div, not a section: the timeline is already the region. */}
      <div className={styles.asideSection}>
        <h2 className={styles.sectionTitle}>Activity</h2>
        <ActivityTimeline project={project} className={styles.activity} />
      </div>
    </div>
  )

  return (
    <AppShell
      brand={<strong className={styles.brand}>Zweihänder</strong>}
      sidebar={
        <NavSidebar
          items={[
            { label: 'Dashboard', href: '#dashboard', icon: <Icon name="star" /> },
            { label: 'Projects', href: '#projects', icon: <Icon name="file" /> },
            { label: 'Team', href: '#team', icon: <Icon name="user" /> },
            { label: 'Calendar', href: '#calendar', icon: <Icon name="calendar" /> },
          ]}
          currentHref="#projects"
          className={styles.sidebar}
          footer={account}
        />
      }
      header={<TopBar end={account} />}
      aside={aside}
      asideLabel="Project summary"
      {...props}
    >
      <div className={styles.page}>
        <Breadcrumbs items={[{ label: 'Projects', href: '#projects' }, { label: project.name }]} />
        <div className={styles.header}>
          <div className={styles.heading}>
            <div className={styles.titleRow}>
              <h1 className={styles.title}>{project.name}</h1>
              {statusTag(project.status)}
              {project.isArchived && <Tag size="sm" text="Archived" />}
            </div>
            <ul className={styles.meta} aria-label="Key facts">
              <li>
                <Icon name="user" aria-hidden="true" />
                {project.pm?.name ?? 'Unassigned'}
              </li>
              <li>
                <Icon name="calendar" aria-hidden="true" />
                {timeline(project)}
              </li>
              <li>{team.length === 1 ? '1 person' : `${team.length} people`}</li>
            </ul>
          </div>
          <div className={styles.actions}>
            <Button variant="secondary" appearance="outlined" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
            <Menu
              align="end"
              trigger={
                <Button variant="secondary" appearance="outlined" isIconOnly aria-label="More actions">
                  <Icon name="more" />
                </Button>
              }
              items={[
                {
                  label: project.isArchived ? 'Restore' : 'Archive',
                  onSelect: () => setProject((p) => ({ ...p, isArchived: !p.isArchived })),
                },
              ]}
            />
          </div>
        </div>
        <Tabs
          aria-label="Project sections"
          className={styles.tabs}
          items={[
            {
              value: 'overview',
              label: 'Overview',
              content: (
                <DescriptionList
                  title="Details"
                  items={[
                    { term: 'Project manager', details: project.pm?.name ?? 'Unassigned' },
                    { term: 'Timeline', details: timeline(project) },
                    { term: 'Estimation', details: money.format(project.estimation) },
                  ]}
                />
              ),
            },
            {
              value: 'team',
              label: 'Team',
              content: (
                <Table
                  columns={teamColumns}
                  rows={team}
                  getRowId={(m) => m.person.name}
                  caption="Team"
                  emptyState={<EmptyState size="sm" headingLevel={2} title="Nobody on this project yet" />}
                />
              ),
            },
          ]}
        />
      </div>
      <EditProject
        project={project}
        open={isEditing}
        onOpenChange={setIsEditing}
        onSave={(next) => {
          setProject((p) => applyEdit(p, next))
          setIsEditing(false)
        }}
      />
    </AppShell>
  )
}

type Draft = Pick<Project, 'name' | 'status' | 'estimation'>

/** The edited record, with what changed added to the top of its activity. */
function applyEdit(p: Project, next: Draft): Project {
  const at = new Date()
  const events: ProjectActivity[] = []
  if (next.estimation !== p.estimation) events.push({ type: 'estimation', by: ME, at, from: p.estimation, to: next.estimation })
  if (next.status !== p.status) events.push({ type: 'status', by: ME, at, from: p.status, to: next.status })
  return { ...p, ...next, updatedAt: events.length || next.name !== p.name ? at : p.updatedAt, activity: [...events, ...p.activity] }
}

/**
 * The edit form in a Drawer, instead of a save bar on the page: the page
 * stays readable, and closing the drawer is the cancel.
 */
function EditProject({
  project,
  open,
  onOpenChange,
  onSave,
}: {
  project: Project
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (draft: Draft) => void
}) {
  const formId = useId()
  const [draft, setDraft] = useState<Draft>(project)
  const [isNameInvalid, setIsNameInvalid] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const name = draft.name.trim()
    if (!name) return setIsNameInvalid(true)
    onSave({ ...draft, name })
  }
  return (
    <Drawer
      title="Edit project"
      open={open}
      onOpenChange={(next) => {
        // Every open starts from the record, so a cancelled edit leaves nothing behind.
        if (next) setDraft(project)
        setIsNameInvalid(false)
        onOpenChange(next)
      }}
      // A stray press on the backdrop would lose the edit.
      closeOnBackdropClick={false}
      footer={
        <>
          <Button variant="secondary" appearance="outlined" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="submit" form={formId}>
            Save
          </Button>
        </>
      }
    >
      <form id={formId} className={styles.form} onSubmit={submit} noValidate>
        <TextInput
          label="Name"
          required
          isFullWidth
          value={draft.name}
          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          validationState={isNameInvalid ? 'error' : 'default'}
          helperText={isNameInvalid ? 'Enter a name.' : undefined}
        />
        <Select
          label="Status"
          isFullWidth
          options={STATUSES}
          value={draft.status}
          onValueChange={(status) => status && setDraft({ ...draft, status: status as ProjectStatus })}
        />
        <NumberInput
          label="Estimation (USD)"
          isFullWidth
          min={0}
          step={100}
          value={draft.estimation}
          onValueChange={(estimation) => setDraft({ ...draft, estimation: estimation ?? 0 })}
        />
      </form>
    </Drawer>
  )
}
