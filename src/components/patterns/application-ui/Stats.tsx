import type { ComponentProps, ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Card } from '../../data-display/Card'
import { Link } from '../../navigation/Link'
import styles from './Stats.module.css'

export interface StatChange {
  /** As shown, e.g. "12%" or "3.2k". */
  value: string
  direction: 'up' | 'down'
  /** Whether the change is good news. Defaults to up is good; pass it for figures where down is good, like churn. */
  isPositive?: boolean
}

export interface Stat {
  label: string
  value: ReactNode
  /** Context under or beside the value, e.g. "from 71,897". */
  previous?: ReactNode
  change?: StatChange
  /** Shown in a disc before the label. */
  icon?: ReactNode
  /** A link at the foot of the card, to where the figure comes from. */
  href?: string
  linkLabel?: string
}

export interface StatsProps extends Omit<ComponentProps<'section'>, 'title'> {
  stats: Stat[]
  /** A heading above the cards, e.g. "Last 30 days". */
  title?: ReactNode
  headingLevel?: 2 | 3
}

/**
 * Key figures in a row of cards: a label, a value, and optionally the
 * change since last period, an icon and a link to the details.
 */
export function Stats({ stats, title, headingLevel = 2, className, ...props }: StatsProps) {
  const Heading = `h${headingLevel}` as const
  return (
    <section className={cn(styles.stats, className)} {...props}>
      {title && <Heading className={styles.title}>{title}</Heading>}
      <dl className={styles.grid}>
        {stats.map((stat) => {
          const positive = stat.change ? (stat.change.isPositive ?? stat.change.direction === 'up') : undefined
          return (
            <Card key={stat.label} appearance="outline" size="md" className={cn(styles.card, stat.icon !== undefined && styles.withIcon)}>
              <dt className={styles.label}>
                {/* Inside the dt: a dl's groups may hold only dt and dd. */}
                {stat.icon && (
                  <span className={styles.icon} aria-hidden="true">
                    {stat.icon}
                  </span>
                )}
                {stat.label}
              </dt>
              <dd className={styles.figures}>
                <span className={styles.value}>{stat.value}</span>
                {stat.previous && <span className={styles.previous}>{stat.previous}</span>}
                {stat.change && (
                  <span className={cn(styles.change, positive ? styles.positive : styles.negative)}>
                    <Icon name={stat.change.direction === 'up' ? 'chevron-up' : 'chevron-down'} />
                    {/* The arrow and the colour say it at a glance; the words say it to everyone. */}
                    <span className={styles.srOnly}>{stat.change.direction === 'up' ? 'Increased by' : 'Decreased by'} </span>
                    {stat.change.value}
                  </span>
                )}
              </dd>
              {stat.href && (
                <dd className={styles.footer}>
                  <Link href={stat.href} size="sm" underline="hover">
                    {stat.linkLabel ?? 'View all'}
                    <span className={styles.srOnly}> {stat.label}</span>
                  </Link>
                </dd>
              )}
            </Card>
          )
        })}
      </dl>
    </section>
  )
}
