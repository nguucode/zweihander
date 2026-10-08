import type { ComponentProps, ReactNode } from 'react'
import { Icon, type IconName } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './InlineAlert.module.css'

export interface InlineAlertProps extends ComponentProps<'div'> {
  variant?: 'info' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md'
  /** Replaces the variant's icon; `false` shows none. */
  icon?: ReactNode | false
  /** A short link or button after the message, e.g. "Retry". */
  action?: ReactNode
  /**
   * Announce it when it appears: `danger` and `warning` interrupt
   * (`role="alert"`), the others wait (`role="status"`).
   */
  isLive?: boolean
}

const icons: Record<NonNullable<InlineAlertProps['variant']>, IconName> = {
  info: 'info-filled',
  success: 'success-filled',
  warning: 'warning-filled',
  danger: 'danger-filled',
}

/**
 * A one-line message in the flow of a form or a section: no box, no title,
 * no close button. For a message about a whole page or region, use Alert.
 */
export function InlineAlert({
  variant = 'info',
  size = 'md',
  icon,
  action,
  isLive = false,
  className,
  children,
  ...props
}: InlineAlertProps) {
  const urgent = variant === 'danger' || variant === 'warning'
  return (
    <div
      role={isLive ? (urgent ? 'alert' : 'status') : undefined}
      className={cn(styles.inlineAlert, styles[variant], styles[size], className)}
      {...props}
    >
      {icon !== false && (
        <span className={styles.icon} aria-hidden="true">
          {icon ?? <Icon name={icons[variant]} />}
        </span>
      )}
      <span className={styles.message}>{children}</span>
      {action && <span className={styles.action}>{action}</span>}
    </div>
  )
}
