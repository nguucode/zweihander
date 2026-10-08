import { useState, type ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import type { AccentColor } from '@/theme/palettes'
import styles from './Avatar.module.css'

export interface AvatarProps extends ComponentProps<'span'> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  imageSrc?: string
  /** Who this is. Without it the avatar is decorative and hidden from assistive tech. */
  imageAlt?: string
  /** Shown when there is no image, or it fails to load. One or two letters. */
  initials?: string
  appearance?: 'circle' | 'square'
  /** Any accent hue. Unset is the neutral gray. */
  color?: AccentColor
  /** `subtle` is a tint of the hue; `solid` is its 600 step (400 in dark). */
  variant?: 'subtle' | 'solid'
}

export function Avatar({
  size = 'sm',
  imageSrc,
  imageAlt,
  initials,
  appearance = 'circle',
  color,
  variant = 'subtle',
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
      // The label lives on the container so the image, the initials and the empty shape
      // all announce the same thing: the person, not "S R" or nothing.
      role={imageAlt ? 'img' : undefined}
      aria-label={imageAlt}
      aria-hidden={imageAlt ? undefined : true}
      // The Theme's own palette switch: on the avatar it remaps --primary and
      // its tints to this hue, already measured for contrast.
      data-accent={color}
      className={cn(styles.avatar, styles[size], styles[appearance], styles[variant], className)}
      {...props}
    >
      {showImage ? (
        <img
          src={imageSrc}
          alt=""
          className={styles.image}
          onError={() => setFailedSrc(imageSrc)}
        />
      ) : (
        // No initials leaves the coloured shape empty: a person-shaped icon
        // says nothing the shape does not.
        initials && <span className={styles.initials}>{initials}</span>
      )}
    </span>
  )
}
