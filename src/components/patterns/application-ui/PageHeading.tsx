import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Breadcrumbs, type BreadcrumbItem } from '../../navigation/Breadcrumbs'
import styles from './PageHeading.module.css'

export interface PageHeadingProps extends Omit<ComponentProps<'header'>, 'title'> {
  title: ReactNode
  /** One or two lines under the title. */
  description?: ReactNode
  /** Where this page sits. Rendered above the title. */
  breadcrumbs?: BreadcrumbItem[]
  /** Short facts about the page's subject: a status, a date, an owner. Each may start with an icon. */
  meta?: ReactNode[]
  /** Buttons at the end of the title row. They wrap under the title on narrow screens. */
  actions?: ReactNode
  /** A Tabs element under the heading, for sections of the same page. */
  tabs?: ReactNode
  /** The page's own heading is h1; use 2 when the heading sits inside a larger page. */
  headingLevel?: 1 | 2
}

/**
 * The top of a page: where it is, what it is, and what you can do with it.
 * Built from Breadcrumbs and whatever buttons and Tabs you pass in.
 */
export function PageHeading({
  title,
  description,
  breadcrumbs,
  meta,
  actions,
  tabs,
  headingLevel = 1,
  className,
  ...props
}: PageHeadingProps) {
  const Heading = `h${headingLevel}` as const
  return (
    <header className={cn(styles.pageHeading, tabs !== undefined && styles.withTabs, className)} {...props}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} size="sm" className={styles.breadcrumbs} />}
      <div className={styles.row}>
        <div className={styles.text}>
          <Heading className={styles.title}>{title}</Heading>
          {description && <p className={styles.description}>{description}</p>}
          {meta && meta.length > 0 && (
            <ul className={styles.meta}>
              {meta.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {tabs}
    </header>
  )
}
