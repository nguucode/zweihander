import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './Kbd.module.css'

/** One key as `children`, or a combination as `keys`: never both. */
export type KbdProps = Omit<ComponentProps<'kbd'>, 'children'> & { size?: 'sm' | 'md' } & (
    | { children: ReactNode; keys?: never }
    | { /** A key combination, one key cap per entry: `['⌘', 'K']`. */ keys: string[]; children?: never }
  )

export function Kbd({ keys, size = 'md', className, children, ...props }: KbdProps) {
  const key = cn(styles.key, styles[size])
  if (!keys) {
    return (
      <kbd className={cn(key, className)} {...props}>
        {children}
      </kbd>
    )
  }
  // HTML's own markup for a combination: a <kbd> of <kbd>s, one per key.
  return (
    <kbd className={cn(styles.group, className)} {...props}>
      {keys.map((key, i) => (
        <kbd key={i} className={key}>
          {key}
        </kbd>
      ))}
    </kbd>
  )
}
