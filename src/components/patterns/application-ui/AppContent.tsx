import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import styles from './AppContent.module.css'

/**
 * The page region of an App Shell: the `main` landmark, as one flat card
 * surface or as blocks on the canvas, whichever the Theme's `contentStyle`
 * picks. The shell renders it around its children; it reads the shell's
 * grid and canvas values, so it is not used on its own.
 */
export function AppContent({ className, children, ...props }: ComponentProps<'main'>) {
  return (
    <div className={styles.content}>
      <main tabIndex={-1} className={cn(styles.main, className)} {...props}>
        {children}
      </main>
    </div>
  )
}
