import type { Key, MouseEventHandler, ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { Button } from '../../buttons/Button'
import { ContextMenu } from '../../navigation/ContextMenu'
import { Menu, type MenuEntry } from '../../navigation/Menu'
import { ListContainer, ListContainerItem, type ListContainerProps } from './ListContainer'
import styles from './StackedList.module.css'

export interface StackedListItem {
  /** A stable key. Without it the index is the key. */
  id?: Key
  /** An Avatar or an Icon before the text. Decorative: the title names the item. */
  media?: ReactNode
  /** What the item is: a person, a project, a file. A string also names the actions button. */
  title: ReactNode
  /** A line under the title: an email, a role, a path. */
  description?: ReactNode
  /** A Tag or Badge after the title, such as the item's status. */
  status?: ReactNode
  /** Facts at the end of the row, such as an owner or when it changed. Wraps under the text when the row is too narrow. */
  meta?: ReactNode
  /** Makes the title a link whose target is the whole row, with a chevron at the end. Keep links out of the other slots then: links cannot nest. */
  href?: string
  /** Runs when the link is followed. */
  onClick?: MouseEventHandler<HTMLAnchorElement>
  /** The row's actions: a ⋯ Menu at the end, and on a row without `href`, the same entries on right click or long press. */
  actions?: MenuEntry[]
}

export interface StackedListProps extends Omit<ListContainerProps, 'children'> {
  /** The rows, in the order to show them. */
  items: StackedListItem[]
}

/**
 * Records as rows: an avatar or icon, a title with a line under it, a
 * status, facts at the end, and a link to the record or a menu of actions.
 * It owns no data and no landmark: the page names the region around it.
 * The frame, dividers, footer and empty state are ListContainer's.
 */
export function StackedList({ items, ...props }: StackedListProps) {
  return (
    <ListContainer {...props}>
      {items.map((item, i) => {
        const key = item.id ?? i
        const actions = item.actions?.length ? item.actions : null
        const row = (
          <ListContainerItem key={key} className={styles.item}>
            {item.media && (
              <span className={styles.media} aria-hidden="true">
                {item.media}
              </span>
            )}
            <div className={styles.main}>
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
              </div>
              {item.meta && <div className={styles.meta}>{item.meta}</div>}
            </div>
            {actions ? (
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
            ) : (
              item.href && <Icon name="chevron-right" className={styles.chevron} />
            )}
          </ListContainerItem>
        )
        // A linked row keeps the browser's own link menu (open in new tab,
        // copy link); the ⋯ button still has the actions. The <li> itself
        // is the area, so the list keeps only <li> children.
        return actions && !item.href ? (
          <ContextMenu key={key} items={actions}>
            {row}
          </ContextMenu>
        ) : (
          row
        )
      })}
    </ListContainer>
  )
}
