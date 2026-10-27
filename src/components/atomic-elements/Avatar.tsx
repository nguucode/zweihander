'use client'

import { useState, type ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import type { AccentColor } from '@/theme/palettes'
import { Tooltip, TooltipGroup } from '../overlays/Tooltip'
import { Badge, type BadgeProps } from './Badge'
import styles from './Avatar.module.css'

type AvatarStatus = 'online' | 'away' | 'busy' | 'offline'

// Badge's presence colours, so a dot on an avatar and a dot beside a name match.
const STATUS: Record<AvatarStatus, { variant: BadgeProps['variant']; label: string }> = {
  online: { variant: 'success', label: 'Online' },
  away: { variant: 'warning', label: 'Away' },
  busy: { variant: 'destructive', label: 'Busy' },
  offline: { variant: 'secondary', label: 'Offline' },
}

export interface AvatarProps extends ComponentProps<'span'> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  imageSrc?: string
  /** Who this is. Without it the avatar is decorative and hidden from assistive tech. */
  imageAlt?: string
  /** Shown when there is no image, or it fails to load. One or two letters. */
  initials?: string
  /** Any accent hue. Unset is the neutral gray. */
  color?: AccentColor
  /** `subtle` is a tint of the hue; `solid` is its 600 step (400 in dark). */
  variant?: 'subtle' | 'solid'
  /** A presence dot at the bottom-end corner. Joins the name as ", Online" when there is `imageAlt`. */
  status?: AvatarStatus
  /** The status word in the name, for another language. Defaults to Online, Away, Busy or Offline. */
  statusLabel?: string
}

export function Avatar({
  size = 'md',
  imageSrc,
  imageAlt,
  initials,
  color,
  variant = 'subtle',
  status,
  statusLabel = status && STATUS[status].label,
  className,
  ...props
}: AvatarProps) {
  // Keyed by src, so a new imageSrc gets a fresh attempt instead of staying
  // on the fallback from the last one that failed.
  const [failedSrc, setFailedSrc] = useState<string>()
  // An empty string is no image, not a request for the page's own URL.
  const showImage = !!imageSrc && failedSrc !== imageSrc

  return (
    <span
      // The label lives on the container so the image, the initials and the silhouette
      // all announce the same thing: the person, not "S R" or nothing.
      role={imageAlt ? 'img' : undefined}
      // Children of role="img" are not read, so the status joins the name.
      aria-label={imageAlt && status ? `${imageAlt}, ${statusLabel}` : imageAlt}
      aria-hidden={imageAlt ? undefined : true}
      // The Theme's own palette switch: on the avatar it remaps --primary and
      // its tints to this hue, already measured for contrast.
      data-accent={color}
      className={cn(styles.avatar, styles[size], styles[variant], status && styles.hasStatus, className)}
      {...props}
    >
      {showImage ? (
        <img
          src={imageSrc}
          alt=""
          className={styles.image}
          onError={() => setFailedSrc(imageSrc)}
        />
      ) : initials ? (
        <span className={styles.initials}>{initials}</span>
      ) : (
        // Drawn to the container's edge, not an icon with a margin: the body
        // runs off the bottom and the circle crops it.
        <svg viewBox="0 0 64 64" className={styles.silhouette}>
          <circle cx="32" cy="26" r="12" />
          <rect x="12" y="42" width="40" height="30" rx="20" />
        </svg>
      )}
      {status && (
        <Badge
          isDot
          variant={STATUS[status].variant}
          size={size === 'xs' || size === 'sm' ? 'sm' : 'md'}
          className={styles.status}
        />
      )}
    </span>
  )
}

export interface AvatarGroupProps extends ComponentProps<'span'> {
  /** The people, in order. Each takes Avatar's props; the group's `size` wins. */
  avatars: AvatarProps[]
  /** The most circles in the row, the "+n" included. Unset shows everyone. */
  max?: number
  size?: AvatarProps['size']
  /** The name of the "+n" avatar, for another language. Used only when the avatars are named. */
  moreLabel?: (count: number) => string
  /** Each named avatar shows its name on hover, and the "+n" lists the people it stands for, on hover or focus. */
  hasTooltips?: boolean
}

/** Avatars overlapping in a row, with a "+n" for the ones past `max`. */
export function AvatarGroup({
  avatars,
  max,
  size = 'md',
  moreLabel = (count) => `${count} more`,
  hasTooltips = false,
  className,
  ...props
}: AvatarGroupProps) {
  // The "+n" takes the last slot, so it always stands for two or more: never "+1"
  // where the person would have fitted.
  const shown = max !== undefined && avatars.length > max ? avatars.slice(0, Math.max(max - 1, 0)) : avatars
  const hidden = avatars.length - shown.length
  // Named avatars get a named "+n"; decorative ones (the names are printed) a decorative one.
  const isNamed = avatars.some((a) => a.imageAlt)

  // With tooltips, the "+n" lists who it stands for, and takes focus so
  // that list can be read by keyboard too.
  const hiddenNames = hasTooltips
    ? avatars
        .slice(shown.length)
        .map((a) => a.imageAlt)
        .filter(Boolean)
        .join(', ')
    : ''
  const more = hidden > 0 && (
    // ponytail: past +99 the text outgrows an xs circle; shorten the count if a list that long turns up.
    <Avatar
      size={size}
      initials={`+${hidden}`}
      imageAlt={isNamed ? moreLabel(hidden) : undefined}
      tabIndex={hiddenNames ? 0 : undefined}
    />
  )

  const group = (
    <span className={cn(styles.group, className)} {...props}>
      {shown.map((avatar, i) => {
        const el = <Avatar {...avatar} size={size} style={{ zIndex: shown.length - i, ...avatar.style }} />
        return hasTooltips && avatar.imageAlt ? (
          <Tooltip key={i} content={avatar.imageAlt}>
            {el}
          </Tooltip>
        ) : (
          <Avatar key={i} {...avatar} size={size} style={{ zIndex: shown.length - i, ...avatar.style }} />
        )
      })}
      {more && hiddenNames ? <Tooltip content={hiddenNames}>{more}</Tooltip> : more}
    </span>
  )
  // One shared delay: once a name shows, the next shows as the pointer moves on.
  return hasTooltips ? <TooltipGroup>{group}</TooltipGroup> : group
}
