'use client'

import type { ComponentProps, ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Badge } from '../../atomic-elements/Badge'
import { Button } from '../../buttons/Button'
import { Tabs } from '../../navigation/Tabs'
import { Popover } from '../../overlays/Popover'
import { Feed, type FeedItem } from './Feed'
import styles from './NotificationCenter.module.css'

export interface NotificationPanelProps extends Omit<ComponentProps<'div'>, 'children' | 'title'> {
  /** The notifications, newest first: Feed items, usually with `href` and `isUnread`. */
  items: FeedItem[]
  /** Shows "Mark all as read" in the header; disabled while nothing is unread. */
  onMarkAllRead?: () => void
  /** More header actions after "Mark all as read", such as a link to notification settings. */
  actions?: ReactNode
  /** All and Unread tabs above the list. */
  hasTabs?: boolean
  /** Shown instead of the list when there are no notifications. */
  empty?: ReactNode
  /** Shown on the Unread tab when everything is read. */
  emptyUnread?: ReactNode
  /** How the time reads, passed to the Feed. */
  formatTime?: (at: Date) => string
  /** The heading's text. */
  title?: ReactNode
  /** The heading's level, so it fits the outline it lands in. */
  headingLevel?: 2 | 3 | 4
}

/**
 * The inside of the notification center: a heading with "Mark all as read"
 * and your actions, optional All and Unread tabs, and the notifications as a
 * Feed without the connecting line. It owns no data: marking read is yours.
 */
export function NotificationPanel({
  items,
  onMarkAllRead,
  actions,
  hasTabs = false,
  empty = 'No notifications yet.',
  emptyUnread = 'You are all caught up.',
  formatTime,
  title = 'Notifications',
  headingLevel = 2,
  className,
  ...props
}: NotificationPanelProps) {
  const Heading = `h${headingLevel}` as const
  const unread = items.filter((item) => item.isUnread)
  const feed = (list: FeedItem[], none: ReactNode) => (
    <Feed items={list} hasConnector={false} empty={none} formatTime={formatTime} />
  )

  return (
    <div className={cn(styles.panel, className)} {...props}>
      <div className={styles.header}>
        <Heading className={styles.title}>{title}</Heading>
        {(onMarkAllRead || actions) && (
          <div className={styles.actions}>
            {onMarkAllRead && (
              <Button size="sm" variant="secondary" appearance="ghost" disabled={unread.length === 0} onClick={onMarkAllRead}>
                Mark all as read
              </Button>
            )}
            {actions}
          </div>
        )}
      </div>
      {hasTabs ? (
        <Tabs
          size="sm"
          aria-label="Show"
          items={[
            { value: 'all', label: 'All', content: feed(items, empty) },
            {
              value: 'unread',
              label: (
                <>
                  Unread
                  {unread.length > 0 && <Badge size="sm" variant="secondary" count={unread.length} maxCount={99} />}
                </>
              ),
              content: feed(unread, emptyUnread),
            },
          ]}
        />
      ) : (
        feed(items, empty)
      )}
    </div>
  )
}

export interface NotificationCenterProps extends NotificationPanelProps {
  /** The bell's name; the unread count is added to it ("Notifications, 3 unread"). */
  label?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Where the panel renders instead of `<body>`. */
  container?: HTMLElement | null
}

/**
 * A bell for the Top Bar, with the unread count on it, that opens the
 * NotificationPanel in a Popover. The list scrolls under a pinned header.
 */
export function NotificationCenter({
  label = 'Notifications',
  side = 'bottom',
  align = 'end',
  open,
  defaultOpen,
  onOpenChange,
  container,
  ...panel
}: NotificationCenterProps) {
  const count = panel.items.filter((item) => item.isUnread).length
  return (
    <Popover
      aria-label={label}
      side={side}
      align={align}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      container={container}
      className={styles.popup}
      trigger={
        <Button variant="secondary" appearance="ghost" isIconOnly aria-label={count ? `${label}, ${count} unread` : label}>
          {/* The count is in the button's name; the floating badge is hidden and only shows it. */}
          <Badge isFloating count={count || undefined} maxCount={99} size="sm">
            <Icon name="notifications" />
          </Badge>
        </Button>
      }
    >
      <NotificationPanel {...panel} />
    </Popover>
  )
}
