import { Children, type ComponentProps, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './ListContainer.module.css'

export interface ListContainerProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** The rows: one ListContainerItem each. */
  children?: ReactNode
  /** `flat`: rows divided by a line, no frame. `card`: the same inside a bordered panel. `separate`: each row its own panel, a gap instead of lines. */
  appearance?: 'flat' | 'card' | 'separate'
  /** After the last row, past a divider: a Pagination or a "View all" link. Rendered as given. */
  footer?: ReactNode
  /** Shown instead of the list when there are no rows. */
  empty?: ReactNode
}

/**
 * The frame around a list: a line between rows, optionally a panel around
 * them, a footer and an empty state. It owns the rows' padding and dividers;
 * what sits in a row is up to the caller (Stacked List puts its records here).
 */
export function ListContainer({ children, appearance = 'flat', footer, empty = 'Nothing here yet.', className, ...props }: ListContainerProps) {
  return (
    <div className={cn(styles.root, styles[appearance], className)} {...props}>
      {Children.toArray(children).length === 0 ? <p className={styles.empty}>{empty}</p> : <ul className={styles.list}>{children}</ul>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}

/** One row of a ListContainer: an `<li>` with the row's padding and divider. Every `<li>` prop passes through. */
export function ListContainerItem({ className, ...props }: ComponentProps<'li'>) {
  return <li className={cn(styles.item, className)} {...props} />
}
