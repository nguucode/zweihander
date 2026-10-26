'use client'

import type { ReactElement, ReactNode, RefObject } from 'react'
import { Drawer as BaseDrawer } from '@base-ui/react/drawer'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Drawer.module.css'

export interface DrawerProps {
  /** The button that opens it. Omit when `open` is controlled from elsewhere. */
  trigger?: ReactElement
  /** Required: it names the dialog. */
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  /** Actions, pinned under the body, right-aligned: the main one last. */
  footer?: ReactNode
  /** The edge it slides in from, and the way a swipe dismisses it. */
  side?: 'right' | 'left' | 'bottom'
  /** Width of a side drawer: 20rem, 28rem, 40rem. Ignored at the bottom, which is full width. */
  size?: 'sm' | 'md' | 'lg'
  hasCloseButton?: boolean
  closeLabel?: string
  /** Close on a press on the backdrop. Turn off for a form that would lose its input. */
  closeOnBackdropClick?: boolean
  /**
   * While open, trap focus, lock page scroll and make the rest of the page
   * inert. `false` drops those three; the backdrop still covers the page.
   */
  isModal?: boolean
  /** Where the drawer renders instead of `<body>`, e.g. an element in fullscreen. */
  container?: HTMLElement | null
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Where focus goes on open. By default, the drawer itself, so its title is read first. */
  initialFocus?: RefObject<HTMLElement | null>
  className?: string
}

const swipeDirections = { right: 'right', left: 'left', bottom: 'down' } as const
const widths = { sm: styles.sm, md: styles.md, lg: styles.lg }

export function Drawer({
  trigger,
  title,
  description,
  children,
  footer,
  side = 'right',
  size = 'md',
  hasCloseButton = true,
  closeLabel = 'Close',
  closeOnBackdropClick = true,
  isModal = true,
  container,
  open,
  defaultOpen,
  onOpenChange,
  initialFocus,
  className,
}: DrawerProps) {
  return (
    <BaseDrawer.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange && ((next) => onOpenChange(next))}
      disablePointerDismissal={!closeOnBackdropClick}
      modal={isModal}
      swipeDirection={swipeDirections[side]}
    >
      {trigger && <BaseDrawer.Trigger render={trigger} />}
      <BaseDrawer.Portal container={container}>
        <BaseDrawer.Backdrop className={styles.backdrop} />
        <BaseDrawer.Viewport className={styles.viewport}>
          <BaseDrawer.Popup
            initialFocus={initialFocus}
            className={cn(styles.popup, side !== 'bottom' && widths[size], className)}
          >
            <div className={styles.header}>
              <BaseDrawer.Title className={styles.title}>{title}</BaseDrawer.Title>
              {hasCloseButton && (
                <BaseDrawer.Close aria-label={closeLabel} className={styles.close}>
                  <Icon name="close" />
                </BaseDrawer.Close>
              )}
              {description && (
                <BaseDrawer.Description className={styles.description}>{description}</BaseDrawer.Description>
              )}
            </div>
            {/* Content lets a mouse select text without starting a swipe. */}
            {children && <BaseDrawer.Content className={styles.body}>{children}</BaseDrawer.Content>}
            {footer && <div className={styles.footer}>{footer}</div>}
          </BaseDrawer.Popup>
        </BaseDrawer.Viewport>
      </BaseDrawer.Portal>
    </BaseDrawer.Root>
  )
}

/** A button inside the drawer that closes it, e.g. "Cancel": `<DrawerClose render={<Button />}>Cancel</DrawerClose>`. */
export const DrawerClose = BaseDrawer.Close
