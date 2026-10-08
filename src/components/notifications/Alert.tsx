import type { ComponentProps, MouseEvent, ReactNode } from 'react'
import { Icon, type IconName } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Alert.module.css'

export interface AlertProps extends Omit<ComponentProps<'div'>, 'title'> {
  variant?: 'info' | 'success' | 'warning' | 'danger'
  appearance?: 'subtle' | 'outlined' | 'solid'
  title?: ReactNode
  /** Replaces the variant's icon; `false` shows none. */
  icon?: ReactNode | false
  /** Buttons or links under the message, e.g. "Retry". */
  action?: ReactNode
  /** Shows a close button that calls this. The alert does not hide itself: remove it when this fires. */
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void
  /** Accessible name of the close button. */
  closeLabel?: string
  /**
   * Announce the alert when it appears. `danger` and `warning` interrupt
   * (`role="alert"`), the others wait their turn (`role="status"`). Leave it
   * off for an alert that is on the page from the start.
   */
  isLive?: boolean
}

const icons: Record<NonNullable<AlertProps['variant']>, IconName> = {
  info: 'info-filled',
  success: 'success-filled',
  warning: 'warning-filled',
  danger: 'danger-filled',
}

export function Alert({
  variant = 'info',
  appearance = 'subtle',
  title,
  icon,
  action,
  onClose,
  closeLabel = 'Dismiss',
  isLive = false,
  className,
  children,
  ...props
}: AlertProps) {
  const urgent = variant === 'danger' || variant === 'warning'
  return (
    <div
      role={isLive ? (urgent ? 'alert' : 'status') : undefined}
      className={cn(styles.alert, styles[variant], styles[appearance], className)}
      {...props}
    >
      {icon !== false && (
        <span className={styles.icon} aria-hidden="true">
          {icon ?? <Icon name={icons[variant]} />}
        </span>
      )}
      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.description}>{children}</div>}
        {action && <div className={styles.action}>{action}</div>}
      </div>
      {onClose && (
        <button type="button" aria-label={closeLabel} className={styles.close} onClick={onClose}>
          <Icon name="close" />
        </button>
      )}
    </div>
  )
}
