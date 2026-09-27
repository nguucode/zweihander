import { useId, useState, type ReactElement, type ReactNode } from 'react'
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import { cn } from '@/lib/utils'
import styles from './Tooltip.module.css'

export interface TooltipProps {
  /** What the tooltip says. Short: a label or a hint, never the only way to learn something essential. */
  content: ReactNode
  /** The trigger: one focusable element, such as a Button. Its props are merged, not wrapped. */
  children: ReactElement
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  /** Milliseconds of hover before it opens. Focus opens it at once. */
  delay?: number
  closeDelay?: number
  hasArrow?: boolean
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Never open, e.g. while the trigger's label is already visible. */
  disabled?: boolean
  className?: string
}

export function Tooltip({
  content,
  children,
  side = 'top',
  align = 'center',
  delay = 600,
  closeDelay = 0,
  hasArrow = true,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  className,
}: TooltipProps) {
  const id = useId()
  const [openState, setOpenState] = useState(defaultOpen)
  const open = openProp ?? openState
  return (
    <BaseTooltip.Root
      open={open}
      onOpenChange={(next) => {
        setOpenState(next)
        onOpenChange?.(next)
      }}
      disabled={disabled}
    >
      <BaseTooltip.Trigger
        delay={delay}
        closeDelay={closeDelay}
        render={children}
        // Base UI leaves tooltips out of the accessibility tree; while one is
        // open, point the trigger at it so it is read as a description.
        aria-describedby={open ? id : undefined}
      />
      <BaseTooltip.Portal>
        <BaseTooltip.Positioner className={styles.positioner} side={side} align={align} sideOffset={hasArrow ? 8 : 6}>
          <BaseTooltip.Popup id={id} role="tooltip" className={cn(styles.popup, className)}>
            {hasArrow && <BaseTooltip.Arrow className={styles.arrow} />}
            {content}
          </BaseTooltip.Popup>
        </BaseTooltip.Positioner>
      </BaseTooltip.Portal>
    </BaseTooltip.Root>
  )
}

/** Tooltips inside share one delay: once one has opened, moving to the next opens it at once. */
export const TooltipGroup = BaseTooltip.Provider
