import type { ComponentProps, Key, MouseEventHandler, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '../../atomic-elements/Badge'
import styles from './Feed.module.css'

export interface FeedItem {
  /** A stable key. Without it the index is the key, which is fine for a list re-rendered whole. */
  id?: Key
  /** An Avatar of who did it, or an Icon for the kind of event. Decorative: the sentence says it all. */
  media?: ReactNode
  /** Who did it, in bold. */
  actor: ReactNode
  /** The rest of the sentence: what they did, and to what ("changed the status of Harbor Lights"). */
  action: ReactNode
  /** When it happened. */
  at: Date
  /** What they wrote, in a box under the sentence. */
  comment?: ReactNode
  /** Makes the sentence a link, and the whole row clickable. Keep links out of `actor` and `action` then: links cannot nest. */
  href?: string
  /** Runs when the link is followed, e.g. to mark the item read. */
  onClick?: MouseEventHandler<HTMLAnchorElement>
  /** Not seen yet: a dot at the end of the row, read out as "Unread". */
  isUnread?: boolean
}

export interface FeedProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** The events, in the order to show them; newest first is the norm. */
  items: FeedItem[]
  /** The vertical line joining one event to the next. */
  hasConnector?: boolean
  /** A form to add a comment, after the last event. The form is yours: the feed lines it up with the text. */
  composer?: ReactNode
  /** Shown instead of the list when there are no items. */
  empty?: ReactNode
  /** How the time reads. The `<time>` element carries the full ISO moment either way. */
  formatTime?: (at: Date) => string
}

const moment = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' })

/**
 * What happened, as a list of sentences: who did what to what, and when,
 * with an optional comment under each and an optional form to add one. It
 * owns no data and no landmark: the page names the region around it.
 */
export function Feed({
  items,
  hasConnector = true,
  composer,
  empty = 'No activity yet.',
  formatTime = (at) => moment.format(at),
  className,
  ...props
}: FeedProps) {
  return (
    <div className={cn(styles.feed, hasConnector && styles.connected, className)} {...props}>
      {items.length === 0 ? (
        <p className={styles.empty}>{empty}</p>
      ) : (
        <ol className={styles.items}>
          {items.map((item, i) => (
            <li key={item.id ?? i} className={styles.item} data-unread={item.isUnread || undefined}>
              <span className={styles.media} aria-hidden="true">
                {item.media}
              </span>
              <div className={styles.body}>
                <p className={styles.sentence}>
                  {item.href ? (
                    <a href={item.href} onClick={item.onClick} className={styles.link}>
                      <strong>{item.actor}</strong> {item.action}
                    </a>
                  ) : (
                    <>
                      <strong>{item.actor}</strong> {item.action}
                    </>
                  )}{' '}
                  <time className={styles.time} dateTime={item.at.toISOString()}>
                    {formatTime(item.at)}
                  </time>
                </p>
                {item.comment && <div className={styles.comment}>{item.comment}</div>}
              </div>
              {item.isUnread && <Badge isDot aria-label="Unread" className={styles.unread} />}
            </li>
          ))}
        </ol>
      )}
      {composer && <div className={styles.composer}>{composer}</div>}
    </div>
  )
}
