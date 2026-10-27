import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './MediaObject.module.css'

export interface MediaObjectProps extends Omit<ComponentProps<'div'>, 'title'> {
  /** An Avatar, an Icon or an image beside the text. Decorative: the title names what it shows. */
  media: ReactNode
  /** What the object is: a person, a product, a comment's author. */
  title: ReactNode
  /** A line or a paragraph under the title. */
  description?: ReactNode
  /** Anything after the description: actions, or nested Media Objects for replies. */
  children?: ReactNode
  /** Where the media sits against the text: top, middle, bottom, or stretched to the text's full height. */
  align?: 'start' | 'center' | 'end' | 'stretch'
  /** Which side the media is on. */
  mediaPosition?: 'start' | 'end'
  /** Makes the title a heading of this level. Without it the title is bold text, right for a list of comments. */
  headingLevel?: 2 | 3 | 4
}

/**
 * Media beside a block of text: an avatar by a comment, an icon by a
 * setting, a thumbnail by a product. It owns no data and no landmark.
 */
export function MediaObject({
  media,
  title,
  description,
  children,
  align = 'start',
  mediaPosition = 'start',
  headingLevel,
  className,
  ...props
}: MediaObjectProps) {
  const Title = headingLevel ? (`h${headingLevel}` as const) : 'p'
  return (
    <div
      className={cn(styles.mediaObject, className)}
      data-align={align}
      data-media-position={mediaPosition}
      {...props}
    >
      <div className={styles.media} aria-hidden="true">
        {media}
      </div>
      <div className={styles.body}>
        <Title className={styles.title}>{title}</Title>
        {description && <div className={styles.description}>{description}</div>}
        {children}
      </div>
    </div>
  )
}
