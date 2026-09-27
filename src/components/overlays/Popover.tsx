import type { ReactElement, ReactNode } from 'react'
import { Popover as BasePopover } from '@base-ui/react/popover'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Popover.module.css'

export interface PopoverProps {
  /** The element that opens it: one button. Its props are merged, not wrapped. */
  trigger: ReactElement
  /** Names the popover (it is a dialog). Without one, pass `aria-label`. */
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  hasArrow?: boolean
  /** A close button in the corner. Escape and a click outside close it either way. */
  hasCloseButton?: boolean
  closeLabel?: string
  /** Open on hover as well as click, for previews. Content must still be reachable by click and keyboard. */
  openOnHover?: boolean
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Trap focus inside while open, lock page scroll and block clicks outside (Base UI's modal mode). */
  isModal?: boolean
  'aria-label'?: string
  className?: string
}

export function Popover({
  trigger,
  title,
  description,
  children,
  side = 'bottom',
  align = 'center',
  hasArrow = false,
  hasCloseButton = false,
  closeLabel = 'Close',
  openOnHover = false,
  open,
  defaultOpen,
  onOpenChange,
  isModal = false,
  'aria-label': ariaLabel,
  className,
}: PopoverProps) {
  return (
    <BasePopover.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange && ((next) => onOpenChange(next))}
      modal={isModal}
    >
      <BasePopover.Trigger render={trigger} openOnHover={openOnHover} />
      <BasePopover.Portal>
        <BasePopover.Positioner className={styles.positioner} side={side} align={align} sideOffset={hasArrow ? 10 : 6}>
          <BasePopover.Popup aria-label={title ? undefined : ariaLabel} className={cn(styles.popup, className)}>
            {hasArrow && <BasePopover.Arrow className={styles.arrow} />}
            {(title || hasCloseButton) && (
              <div className={styles.header}>
                {title && <BasePopover.Title className={styles.title}>{title}</BasePopover.Title>}
                {hasCloseButton && (
                  <BasePopover.Close aria-label={closeLabel} className={styles.close}>
                    <Icon name="close" />
                  </BasePopover.Close>
                )}
              </div>
            )}
            {/* Base UI only traps focus in a modal popover that contains a
                Close, and a touch screen reader needs one to get out. */}
            {isModal && !hasCloseButton && (
              <BasePopover.Close aria-label={closeLabel} className={cn(styles.close, styles.hiddenClose)}>
                <Icon name="close" />
              </BasePopover.Close>
            )}
            {description && <BasePopover.Description className={styles.description}>{description}</BasePopover.Description>}
            {children && <div className={styles.body}>{children}</div>}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  )
}
