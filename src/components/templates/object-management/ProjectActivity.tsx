import { Icon, type IconName } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Tag, type TagVariant } from '../../atomic-elements/Tag'
import type { Project, ProjectActivity, ProjectHealth, ProjectStatus } from './projects-data'
import styles from './ProjectActivity.module.css'

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

/**
 * What happened to a project, newest first, as the Projects row and the
 * Project Detail aside both show it. It stays with these templates, which
 * ship it, until the Feed pattern (Application UI queue item 33) replaces it.
 */
export function ActivityTimeline({ project, className }: { project: Project; className?: string }) {
  return (
    <section className={cn(styles.activity, className)} aria-label={`${project.name} activity`}>
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
