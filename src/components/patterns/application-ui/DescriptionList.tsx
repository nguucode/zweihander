import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './DescriptionList.module.css'

export interface DescriptionItem {
  term: string
  details: ReactNode
  /** An action for this row, e.g. an "Update" link. Shown at the row's end. */
  action?: ReactNode
  /** In the grid layout, take the full width: for long text or attachments. */
  isWide?: boolean
}

export interface DescriptionListProps extends Omit<ComponentProps<'section'>, 'title'> {
  items: DescriptionItem[]
  title?: ReactNode
  description?: ReactNode
  /** Buttons at the end of the header. */
  actions?: ReactNode
  /**
   * `columns`: term and details side by side, a row each.
   * `grid`: two columns of term-over-details pairs.
   * `stacked`: term over details, one after another. Columns fall back to
   * this on narrow screens anyway.
   */
  layout?: 'columns' | 'grid' | 'stacked'
  /** Put the list on a card with the header in its top band. */
  isCard?: boolean
  headingLevel?: 2 | 3
}

/**
 * The fields of a record as terms and details: a profile, an order, an
 * application. Read-only; its editable twin is a settings form.
 */
export function DescriptionList({
  items,
  title,
  description,
  actions,
  layout = 'columns',
  isCard = false,
  headingLevel = 2,
  className,
  ...props
}: DescriptionListProps) {
  const Heading = `h${headingLevel}` as const
  const hasHeader = title !== undefined || description !== undefined || actions !== undefined
  return (
    <section className={cn(styles.descriptionList, styles[layout], isCard && styles.card, className)} {...props}>
      {hasHeader && (
        <div className={styles.header}>
          <div className={styles.headerText}>
            {title && <Heading className={styles.title}>{title}</Heading>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      )}
      <dl className={styles.list}>
        {items.map((item) => (
          <div key={item.term} className={cn(styles.row, item.isWide && styles.wide, item.action !== undefined && styles.withAction)}>
            <dt className={styles.term}>{item.term}</dt>
            <dd className={styles.details}>{item.details}</dd>
            {item.action && <dd className={styles.action}>{item.action}</dd>}
          </div>
        ))}
      </dl>
    </section>
  )
}
