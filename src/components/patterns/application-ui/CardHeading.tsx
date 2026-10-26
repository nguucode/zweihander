import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './CardHeading.module.css'

export interface CardHeadingProps extends Omit<ComponentProps<'div'>, 'title'> {
  title: ReactNode
  description?: ReactNode
  media?: ReactNode
  actions?: ReactNode
  headingLevel?: 2 | 3 | 4
}

/**
 * The top row of a card: what it is, and what you can do with it. Put it
 * first inside a Card; the card's padding and gap space it.
 */
export function CardHeading({
  title,
  description,
  media,
  actions,
  headingLevel = 2,
  className,
  ...props
}: CardHeadingProps) {
  const Heading = `h${headingLevel}` as const
  return (
    <div className={cn(styles.cardHeading, className)} {...props}>
      <div className={styles.lead}>
        {media && (
          <span className={styles.media} aria-hidden="true">
            {media}
          </span>
        )}
        <div className={styles.text}>
          <Heading className={styles.title}>{title}</Heading>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  )
}
