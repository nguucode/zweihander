import type { ReactNode } from 'react'
import { Toast as BaseToast } from '@base-ui/react/toast'
import { Icon, type IconName } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Toast.module.css'

export type ToastVariant = 'default' | 'info' | 'success' | 'warning' | 'danger'

export interface ToastOptions {
  title?: ReactNode
  description?: ReactNode
  variant?: ToastVariant
  /** One button, e.g. "Undo". Keep the same action reachable elsewhere: the toast goes away. */
  action?: { label: ReactNode; onClick: () => void }
  /** Milliseconds before it closes; `0` keeps it until dismissed. */
  timeout?: number
  /** `high` interrupts the screen reader (danger defaults to it). */
  priority?: 'low' | 'high'
  onClose?: () => void
}

export interface ToastProviderProps {
  children: ReactNode
  placement?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  /** Default time on screen, in milliseconds. */
  timeout?: number
  /** Toasts shown at once; older ones wait. */
  limit?: number
}

// Base UI's promise() sets these types itself.
const variantOf = (type: string | undefined): ToastVariant | 'loading' =>
  type === 'error' ? 'danger' : type === 'loading' ? 'loading' : ((type as ToastVariant) ?? 'default')

const icons: Partial<Record<ToastVariant, IconName>> = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
}

function ToastList({ swipe }: { swipe: 'left' | 'right' | 'up' | 'down' }) {
  const { toasts } = BaseToast.useToastManager()
  return toasts.map((toast) => {
    const variant = variantOf(toast.type)
    const icon = variant === 'loading' ? null : icons[variant]
    return (
      <BaseToast.Root
        key={toast.id}
        toast={toast}
        swipeDirection={swipe}
        // Each toast is a (non-modal) dialog and needs a name. promise()
        // passes its strings as the description, with no title: name it by
        // what it says rather than leave it unnamed.
        aria-label={toast.title ? undefined : typeof toast.description === 'string' ? toast.description : 'Notification'}
        className={cn(styles.toast, styles[variant])}
      >
        {variant === 'loading' && <span className={cn(styles.icon, styles.spinner)} aria-hidden="true" />}
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            <Icon name={icon} />
          </span>
        )}
        <BaseToast.Content className={styles.content}>
          {toast.title && <BaseToast.Title className={styles.title} />}
          {toast.description && <BaseToast.Description className={styles.description} />}
          {toast.actionProps && <BaseToast.Action className={styles.action} />}
        </BaseToast.Content>
        <BaseToast.Close aria-label="Dismiss" className={styles.close}>
          <Icon name="close" />
        </BaseToast.Close>
      </BaseToast.Root>
    )
  })
}

/** Wrap the app once. Toasts render in a corner of the viewport, above everything. */
export function ToastProvider({ children, placement = 'bottom-right', timeout = 5000, limit = 3 }: ToastProviderProps) {
  const [vertical, horizontal] = placement.split('-') as ['top' | 'bottom', 'left' | 'center' | 'right']
  const swipe = horizontal === 'center' ? (vertical === 'top' ? 'up' : 'down') : horizontal
  return (
    <BaseToast.Provider timeout={timeout} limit={limit}>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport className={cn(styles.viewport, styles[vertical], styles[horizontal])}>
          <ToastList swipe={swipe} />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  )
}

/** Show, update and close toasts from anywhere inside a ToastProvider. */
export function useToast() {
  const manager = BaseToast.useToastManager()
  const toOptions = ({ variant, action, priority, ...rest }: ToastOptions) => ({
    ...rest,
    type: variant,
    priority: priority ?? (variant === 'danger' ? ('high' as const) : undefined),
    actionProps: action && { children: action.label, onClick: action.onClick },
  })
  return {
    /** Returns the toast's id. */
    add: (options: ToastOptions) => manager.add(toOptions(options)),
    update: (id: string, options: ToastOptions) => manager.update(id, toOptions(options)),
    /** Closes one toast, or every toast without an id. */
    close: (id?: string) => manager.close(id),
    /** A loading toast that turns into success or danger when the promise settles. */
    promise: manager.promise,
  }
}
