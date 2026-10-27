import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import styles from './Container.module.css'

export interface ContainerProps extends ComponentProps<'div'> {
  /** The widest the content gets: `sm` 48rem, `md` 64rem, `lg` 80rem. */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Adds the page's side padding, `--space-container` and `--space-section`
   * from a 64rem viewport. Leave it off inside an App Shell: App Content
   * already pads the page.
   */
  padded?: boolean
}

/**
 * Caps the width of a page's content and centres it in the space it is
 * given. It owns no landmark and no surface; inside an App Shell, App
 * Content keeps the padding, the scroll and the aside column.
 */
export function Container({ size = 'md', padded = false, className, ...props }: ContainerProps) {
  return <div className={cn(styles.container, padded && styles.padded, className)} data-size={size} {...props} />
}
