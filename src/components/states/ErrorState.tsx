import type { ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { EmptyState, type EmptyStateProps } from './EmptyState'
import styles from './ErrorState.module.css'

export interface ErrorStateProps extends Omit<EmptyStateProps, 'title'> {
  /** What failed, in the reader's words. */
  title?: ReactNode
  /** A reference for support, e.g. an error code or request id. Shown small, selectable. */
  details?: ReactNode
  /** Announce it when it replaces content that was loading (`role="alert"`). */
  isLive?: boolean
}

/**
 * What a list, panel or page shows when loading it failed: why, and a way
 * forward, usually a retry. Empty State's layout in the danger tone.
 */
export function ErrorState({
  title = 'Something went wrong',
  icon = <Icon name="danger" />,
  description,
  details,
  isLive = false,
  className,
  ...props
}: ErrorStateProps) {
  return (
    <EmptyState
      role={isLive ? 'alert' : undefined}
      title={title}
      icon={icon}
      description={
        (description || details) && (
          <>
            {description}
            {details && <span className={styles.details}>{details}</span>}
          </>
        )
      }
      className={cn(styles.error, className)}
      {...props}
    />
  )
}
