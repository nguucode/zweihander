import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './AppContent.module.css'

export interface AppContentProps extends ComponentProps<'main'> {
  /**
   * A column beside the page for a summary, a status or activity, in an
   * `aside` landmark. From 80rem of shell width it sits to the right and
   * scrolls on its own; below that it follows the page.
   */
  aside?: ReactNode
  /** The aside's accessible name. Give one when the page has more than one `aside`. */
  asideLabel?: string
}

/**
 * The page region of an App Shell: the `main` landmark, as one flat card
 * surface or as blocks on the canvas, whichever the Theme's `contentStyle`
 * picks, with an optional aside column. The shell renders it around its
 * children; it reads the shell's grid and canvas values, so it is not used
 * on its own.
 */
export function AppContent({ aside, asideLabel, className, children, ...props }: AppContentProps) {
  // `null`, `false` and `undefined` render nothing, so they are no aside either.
  const hasAside = aside != null && aside !== false
  return (
    <div className={cn(styles.content, hasAside && styles.withAside)}>
      <main tabIndex={-1} className={cn(styles.main, className)} {...props}>
        {children}
      </main>
      {hasAside && (
        // Focusable: side by side it scrolls on its own, and an aside of
        // plain text has nothing else a keyboard could scroll it with.
        <aside tabIndex={0} aria-label={asideLabel} className={styles.aside}>
          {aside}
        </aside>
      )}
    </div>
  )
}
