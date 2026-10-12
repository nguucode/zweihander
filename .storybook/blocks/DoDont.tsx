import type { ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import styles from './blocks.module.css'

export interface DoDontProps {
  /** The right way. In MDX: `<Story of={Stories.DoPrimaryOnce} />`. */
  do: ReactNode
  doCaption: ReactNode
  /** The wrong way, from a story tagged `!dev` so it stays out of the sidebar. */
  dont: ReactNode
  dontCaption: ReactNode
}

/**
 * A Do and a Don't side by side, stacked when narrow. Each verdict is a word
 * and an icon; the green and red rules only repeat it.
 */
export function DoDont({ do: good, doCaption, dont, dontCaption }: DoDontProps) {
  return (
    <div className={`sb-unstyled ${styles.block} ${styles.grid} ${styles.pair}`}>
      <figure className={`${styles.cell} ${styles.do}`}>
        <div className={styles.stage}>{good}</div>
        <figcaption>
          <span className={styles.verdict}>
            <Icon name="success-filled" />
            Do
          </span>{' '}
          {doCaption}
        </figcaption>
      </figure>
      <figure className={`${styles.cell} ${styles.dont}`}>
        <div className={styles.stage}>{dont}</div>
        <figcaption>
          <span className={styles.verdict}>
            <Icon name="danger-filled" />
            Don&rsquo;t
          </span>{' '}
          {dontCaption}
        </figcaption>
      </figure>
    </div>
  )
}
