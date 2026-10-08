import type { ComponentProps, MouseEvent, ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Tag.module.css'

/** Status first, then every hue the accent ramps offer, for categories. */
export const TAG_VARIANTS = [
  'neutral',
  'info',
  'success',
  'warning',
  'danger',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const
export type TagVariant = (typeof TAG_VARIANTS)[number]

export interface TagProps extends Omit<ComponentProps<'span'>, 'children'> {
  text: string
  startIcon?: ReactNode
  /** Image URL for a small avatar before the text, e.g. a person in a filter. */
  startAvatar?: string
  size?: 'sm' | 'md'
  appearance?: 'subtle' | 'outlined' | 'solid'
  variant?: TagVariant
  hasRemoveButton?: boolean
  onRemove?: (event: MouseEvent<HTMLButtonElement>) => void
}

export function Tag({
  text,
  startIcon,
  startAvatar,
  size = 'md',
  appearance = 'subtle',
  variant = 'info',
  hasRemoveButton = false,
  onRemove,
  className,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        styles.tag,
        styles[size],
        styles[appearance],
        styles[variant],
        className,
      )}
      {...props}
    >
      {startAvatar ? (
        // A plain image, not <Avatar>: the tag only needs a round crop, and a
        // cross-component import would not survive the copy-source install.
        <img src={startAvatar} alt="" className={styles.avatar} />
      ) : (
        startIcon && (
          <span className={styles.icon} aria-hidden="true">
            {startIcon}
          </span>
        )
      )}
      <span className={styles.text}>{text}</span>
      {hasRemoveButton && (
        <button
          type="button"
          // "Remove" alone is ambiguous in a list of tags, each with its own.
          aria-label={`Remove ${text}`}
          className={styles.remove}
          onClick={onRemove}
        >
          <Icon name="close" />
        </button>
      )}
    </span>
  )
}
