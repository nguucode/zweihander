import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ListContainer, ListContainerItem, type ListContainerProps } from './ListContainer'
import { ListItemActions, ListItemContextMenu, ListItemHeading, ListItemMedia } from './ListItemParts'
import parts from './ListItemParts.module.css'
import type { StackedListItem } from './StackedList'
import styles from './GridList.module.css'

/** A Stacked List item, plus an optional picture across the top of the card. */
export interface GridListItem extends StackedListItem {
  /** A picture across the top of the card: a photo, a file preview, a logo. Decorative, so give an `<img>` `alt=""`: the title names the item. */
  cover?: ReactNode
}

export interface GridListProps extends Omit<ListContainerProps, 'children' | 'appearance'> {
  /** The cards, in reading order: left to right, then down. */
  items: GridListItem[]
}

/**
 * Records as cards in a grid: people, projects, files. Each card takes the
 * same item as a Stacked List row, plus an optional cover picture. The grid
 * fits as many columns as its container allows. The card panels, footer and
 * empty state are List Container's `separate` appearance.
 */
export function GridList({ items, className, ...props }: GridListProps) {
  return (
    <ListContainer {...props} appearance="separate" className={cn(styles.grid, className)}>
      {items.map((item, i) => (
        <ListItemContextMenu key={item.id ?? i} item={item}>
          <ListContainerItem className={cn(parts.target, styles.card)}>
            {item.cover && (
              <div className={styles.cover} aria-hidden="true">
                {item.cover}
              </div>
            )}
            <div className={styles.body}>
              <ListItemMedia item={item} />
              <div className={styles.text}>
                <ListItemHeading item={item} />
                {item.description && <p className={parts.description}>{item.description}</p>}
                {item.meta && <div className={parts.meta}>{item.meta}</div>}
              </div>
              <ListItemActions item={item} index={i} />
            </div>
          </ListContainerItem>
        </ListItemContextMenu>
      ))}
    </ListContainer>
  )
}
