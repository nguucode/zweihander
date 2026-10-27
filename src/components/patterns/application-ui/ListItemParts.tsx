import type { ReactElement } from 'react'
import { Icon } from '@/lib/icon'
import { Button } from '../../buttons/Button'
import { ContextMenu } from '../../navigation/ContextMenu'
import { Menu } from '../../navigation/Menu'
import type { StackedListItem } from './StackedList'
import styles from './ListItemParts.module.css'

/*
 * The parts Stacked List and Grid List draw the same way: media, the
 * heading with its link, the ⋯ menu and the right-click menu. Internal: not
 * a pattern of its own. The patterns import ListItemParts.module.css too:
 * `target` goes on the row or card, the box the link stretches over;
 * `description` and `meta` style those slots.
 */

export function ListItemMedia({ item }: { item: StackedListItem }) {
  return (
    item.media && (
      <span className={styles.media} aria-hidden="true">
        {item.media}
      </span>
    )
  )
}

/** The title, as a link stretched over the whole item when it has `href`, then the status. */
export function ListItemHeading({ item }: { item: StackedListItem }) {
  return (
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
  )
}

/** The ⋯ menu, above the stretched link so it gets the click; nothing without actions. `index` names an item whose title is not a string. */
export function ListItemActions({ item, index }: { item: StackedListItem; index: number }) {
  if (!item.actions?.length) return null
  return (
    <span className={styles.end}>
      <Menu
        align="end"
        items={item.actions}
        trigger={
          <Button
            variant="secondary"
            appearance="ghost"
            size="sm"
            isIconOnly
            aria-label={`Actions for ${typeof item.title === 'string' ? item.title : `item ${index + 1}`}`}
          >
            <Icon name="more" />
          </Button>
        }
      />
    </span>
  )
}

/**
 * The same actions on right click or long press. A linked item keeps the
 * browser's own link menu (open in new tab, copy link); the ⋯ button still
 * has the actions. The <li> itself is the area, so the list keeps only <li>
 * children.
 */
export function ListItemContextMenu({ item, children }: { item: StackedListItem; children: ReactElement }) {
  return item.actions?.length && !item.href ? <ContextMenu items={item.actions}>{children}</ContextMenu> : children
}
