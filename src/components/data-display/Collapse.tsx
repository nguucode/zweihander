import type { ReactNode } from 'react'
import { Collapsible } from '@base-ui/react/collapsible'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Collapse.module.css'

export interface CollapseProps {
  /** The trigger's text, e.g. "Show details". */
  label: ReactNode
  /** The trigger's text while open, e.g. "Hide details". Defaults to `label`. */
  openLabel?: ReactNode
  children: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  size?: 'sm' | 'md'
  disabled?: boolean
  /**
   * Keep the closed content in the page as `hidden="until-found"`, so the
   * browser's find-in-page reaches it and opens it. On by default.
   */
  hiddenUntilFound?: boolean
  className?: string
}

/**
 * One show/hide section: a text button with a chevron and the content it
 * reveals. For a list of sections, use Accordion.
 */
export function Collapse({
  label,
  openLabel,
  children,
  open,
  defaultOpen,
  onOpenChange,
  size = 'md',
  disabled = false,
  hiddenUntilFound = true,
  className,
}: CollapseProps) {
  return (
    <Collapsible.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange && ((next) => onOpenChange(next))}
      disabled={disabled}
      className={cn(styles.collapse, styles[size], className)}
    >
      <Collapsible.Trigger className={styles.trigger}>
        <span className={styles.chevron} aria-hidden="true">
          <Icon name="chevron-right" />
        </span>
        {openLabel === undefined ? (
          label
        ) : (
          <>
            <span className={styles.closedLabel}>{label}</span>
            <span className={styles.openLabel}>{openLabel}</span>
          </>
        )}
      </Collapsible.Trigger>
      <Collapsible.Panel className={styles.panel} hiddenUntilFound={hiddenUntilFound}>
        <div className={styles.content}>{children}</div>
      </Collapsible.Panel>
    </Collapsible.Root>
  )
}
