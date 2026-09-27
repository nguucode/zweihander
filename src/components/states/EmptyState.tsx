import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './EmptyState.module.css'

export interface EmptyStateProps extends Omit<ComponentProps<'div'>, 'title'> {
  /** An icon (`<Icon name="search" />`) or a small illustration. Decorative. */
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
  /** What to do next: usually one Button, at most two. */
  action?: ReactNode
  /** `sm` for a panel or a table body; `md` for a whole page or section. */
  size?: 'sm' | 'md'
  /** The title's heading level, so it fits the page outline it lands in. */
  headingLevel?: 2 | 3 | 4 | 5 | 6
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  size = 'md',
  headingLevel = 2,
  className,
  ...props
}: EmptyStateProps) {
  const Heading = `h${headingLevel}` as const
  return (
    <div className={cn(styles.empty, styles[size], className)} {...props}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <Heading className={styles.title}>{title}</Heading>
      {description && <p className={styles.description}>{description}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}
