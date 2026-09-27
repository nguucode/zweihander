import type { ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { EmptyState, type EmptyStateProps } from './EmptyState'
import styles from './SuccessState.module.css'

export interface SuccessStateProps extends Omit<EmptyStateProps, 'title'> {
  /** What was done. */
  title: ReactNode
  /** Announce it when it replaces a form or a progress view (`role="status"`). */
  isLive?: boolean
}

/**
 * What a flow shows when it has finished: the invite is sent, the import
 * is done. Empty State's layout in the success tone, with the next step as
 * its action.
 */
export function SuccessState({
  icon = <Icon name="success" />,
  isLive = false,
  className,
  ...props
}: SuccessStateProps) {
  return <EmptyState role={isLive ? 'status' : undefined} icon={icon} className={cn(styles.success, className)} {...props} />
}
