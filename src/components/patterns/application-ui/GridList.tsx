import type { ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Button } from '../../buttons/Button'
import { ContextMenu } from '../../navigation/ContextMenu'
import { Menu } from '../../navigation/Menu'
import { ListContainer, ListContainerItem, type ListContainerProps } from './ListContainer'
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
      {items.map((item, i) => {
        const key = item.id ?? i
        const actions = item.actions?.length ? item.actions : null
        const card = (
          <ListContainerItem key={key} className={styles.card}>
            {item.cover && (
              <div className={styles.cover} aria-hidden="true">
                {item.cover}
              </div>
            )}
            <div className={styles.body}>
              {item.media && (
                <span className={styles.media} aria-hidden="true">
                  {item.media}
                </span>
              )}
              <div className={styles.text}>
                <p className={styles.heading}>
                  {item.href ? (
                    <a href={item.href} onClick={item.onClick} className={styles.link}>
                      {item.title}
                    </a>
                  ) : (
                    <span className={styles.title}>{item.title}</span>
                  )}
                  {item.status}
                </p>
                {item.description && <p className={styles.description}>{item.description}</p>}
                {item.meta && <div className={styles.meta}>{item.meta}</div>}
              </div>
              {actions && (
                <span className={styles.end}>
                  <Menu
                    align="end"
                    items={actions}
                    trigger={
                      <Button
                        variant="secondary"
                        appearance="ghost"
                        size="sm"
                        isIconOnly
                        aria-label={`Actions for ${typeof item.title === 'string' ? item.title : `item ${i + 1}`}`}
                      >
                        <Icon name="more" />
                      </Button>
                    }
                  />
                </span>
              )}
            </div>
          </ListContainerItem>
        )
        // Stacked List's rule: a linked card keeps the browser's own link
        // menu, so only a card without href gets the context menu.
        return actions && !item.href ? (
          <ContextMenu key={key} items={actions}>
            {card}
          </ContextMenu>
        ) : (
          card
        )
      })}
    </ListContainer>
  )
}
