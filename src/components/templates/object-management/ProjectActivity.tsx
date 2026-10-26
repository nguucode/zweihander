import { Icon, type IconName } from '@/lib/icon'
import type { ReactNode } from 'react'
import { Tag, type TagVariant } from '../../atomic-elements/Tag'
import type { Project, ProjectActivity, ProjectHealth, ProjectStatus } from './projects-data'
import { Feed } from '../../patterns/application-ui/Feed'

/* Shared by the Projects and Project Detail templates: a project's status
   tag and its activity read the same on the list and on the record. */

export const statusTone: Record<ProjectStatus, TagVariant> = {
  Active: 'success',
  'On hold': 'neutral',
  Expired: 'danger',
  Inactive: 'neutral',
  'On grace period': 'warning',
}

/** Every status, in the order a picker lists them. */
export const STATUSES = Object.keys(statusTone) as ProjectStatus[]

export const healthLabel: Record<ProjectHealth, string> = { risk: 'Risk', 'potential-risk': 'Potential risk', 'on-track': 'On track' }
/** Every health, worst first, in the order a picker lists them. */
export const HEALTHS = Object.keys(healthLabel) as ProjectHealth[]

export const statusTag = (status: ProjectStatus) => <Tag size="sm" variant={statusTone[status]} text={status} />

export const fullMoment = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' })
export const money = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 1 })

const activityIcon: Record<ProjectActivity['type'], IconName> = { created: 'plus', status: 'info', estimation: 'file' }

/** An event that names its project, for a list that spans several. */
export type ActivityEvent = ProjectActivity & { project?: string }

type ActivityTimelineProps = { className?: string } & (
  | { project: Project }
  /** Events across projects, as Home lists them: each names its project. The landmark around the list names it. */
  | { events: ActivityEvent[] }
)

/** What one event says after its author's name. */
function action(event: ActivityEvent): ReactNode {
  const of = event.project && (
    <>
      {' '}
      of <strong>{event.project}</strong>
    </>
  )
  switch (event.type) {
    case 'created':
      return event.project ? (
        <>
          created <strong>{event.project}</strong>
        </>
      ) : (
        'created the project'
      )
    case 'estimation':
      return (
        <>
          changed the estimation{of} from <strong>{money.format(event.from)}</strong> to <strong>{money.format(event.to)}</strong>
        </>
      )
    case 'status':
      return (
        <>
          changed the status{of} from {statusTag(event.from)} to {statusTag(event.to)}
        </>
      )
  }
}

/**
 * What happened, newest first, on the Feed pattern: one project's activity,
 * as the Projects row and the Project Detail aside show it (a region named
 * after the project), or events across projects, as Home shows them.
 */
export function ActivityTimeline({ className, ...props }: ActivityTimelineProps) {
  const [events, label]: [ActivityEvent[], string | undefined] =
    'project' in props ? [props.project.activity, `${props.project.name} activity`] : [props.events, undefined]
  return (
    <Feed
      role={label ? 'region' : undefined}
      aria-label={label}
      className={className}
      items={events.map((event) => ({
        media: <Icon name={activityIcon[event.type]} />,
        actor: event.by,
        action: action(event),
        at: event.at,
        comment: event.type === 'status' ? event.note : undefined,
      }))}
    />
  )
}
