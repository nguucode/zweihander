'use client'

import { useSyncExternalStore, type ReactNode } from 'react'
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
  info: 'info-filled',
  success: 'success-filled',
  warning: 'warning-filled',
  danger: 'danger-filled',
}

// The toast takes the opposite appearance of the page (dark on a light page,
// light on a dark one) so it stands out from what is under it. The page's
// appearance is the `dark` class on <html>.
const subscribeToPageTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}
const pageIsDark = () => document.documentElement.classList.contains('dark')

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
  const dark = useSyncExternalStore(subscribeToPageTheme, pageIsDark, () => false)
  return (
    <BaseToast.Provider timeout={timeout} limit={limit}>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport className={cn(styles.viewport, styles[vertical], styles[horizontal], dark ? 'light' : 'dark')}>
          <ToastList swipe={swipe} />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  )
}

/** Show, update and close toasts from anywhere inside a ToastProvider. */
export function useToast() {
  const manager = BaseToast.useToastManager()
  // Only the fields that were given: Base UI merges an update over the
  // toast, so an explicit undefined would wipe its variant or action.
  const toOptions = ({ variant, action, priority, ...rest }: ToastOptions) => {
    const options: Record<string, unknown> = { ...rest }
    if (variant !== undefined) options.type = variant
    const p = priority ?? (variant === 'danger' ? 'high' : undefined)
    if (p !== undefined) options.priority = p
    if (action !== undefined) options.actionProps = { children: action.label, onClick: action.onClick }
    return options
  }
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
