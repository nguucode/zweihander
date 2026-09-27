import type { ReactElement, ReactNode, RefObject } from 'react'
import { AlertDialog } from '@base-ui/react/alert-dialog'
import { Dialog } from '@base-ui/react/dialog'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Modal.module.css'

export interface ModalProps {
  /** The button that opens it. Omit when `open` is controlled from elsewhere. */
  trigger?: ReactElement
  /** Required: it names the dialog. */
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  /** Actions, right-aligned under the content: the main one last. */
  footer?: ReactNode
  /** Max width: 24rem, 32rem, 48rem. Never wider than the screen. */
  size?: 'sm' | 'md' | 'lg'
  /** Defaults to `true`, or `false` when `isAlert`. */
  hasCloseButton?: boolean
  closeLabel?: string
  /**
   * A decision that must be made: `role="alertdialog"`, and a click on the
   * backdrop does not close it. Pair it with explicit buttons in `footer`.
   */
  isAlert?: boolean
  /** Close on a click on the backdrop. Ignored when `isAlert`. */
  closeOnBackdropClick?: boolean
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Where focus goes on open. By default, the first focusable element. */
  initialFocus?: RefObject<HTMLElement | null>
  className?: string
}

const widths = { sm: styles.sm, md: styles.md, lg: styles.lg }

export function Modal({
  trigger,
  title,
  description,
  children,
  footer,
  size = 'md',
  hasCloseButton,
  closeLabel = 'Close',
  isAlert = false,
  closeOnBackdropClick = true,
  open,
  defaultOpen,
  onOpenChange,
  initialFocus,
  className,
}: ModalProps) {
  const showClose = hasCloseButton ?? !isAlert
  const content = (
    <>
      {trigger && (isAlert ? <AlertDialog.Trigger render={trigger} /> : <Dialog.Trigger render={trigger} />)}
      <Dialog.Portal>
        <Dialog.Backdrop className={styles.backdrop} />
        <Dialog.Viewport className={styles.viewport}>
          <Dialog.Popup initialFocus={initialFocus} className={cn(styles.popup, widths[size], className)}>
            <div className={styles.header}>
              <Dialog.Title className={styles.title}>{title}</Dialog.Title>
              {showClose && (
                <Dialog.Close aria-label={closeLabel} className={styles.close}>
                  <Icon name="close" />
                </Dialog.Close>
              )}
            </div>
            {description && <Dialog.Description className={styles.description}>{description}</Dialog.Description>}
            {children && <div className={styles.body}>{children}</div>}
            {footer && <div className={styles.footer}>{footer}</div>}
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </>
  )
  const change = onOpenChange && ((next: boolean) => onOpenChange(next))
  return isAlert ? (
    <AlertDialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={change}>
      {content}
    </AlertDialog.Root>
  ) : (
    <Dialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={change}
      disablePointerDismissal={!closeOnBackdropClick}
    >
      {content}
    </Dialog.Root>
  )
}

/** A button inside the modal that closes it, e.g. "Cancel": `<ModalClose render={<Button />}>Cancel</ModalClose>`. */
export const ModalClose = Dialog.Close
