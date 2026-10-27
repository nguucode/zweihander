'use client'

import { useId, useState, type ReactElement, type ReactNode } from 'react'
import { PreviewCard } from '@base-ui/react/preview-card'
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
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Never open, e.g. while the trigger's label is already visible. */
  disabled?: boolean
  /** Where the tooltip renders instead of `<body>`, e.g. an element in fullscreen. */
  container?: HTMLElement | null
  className?: string
}

export function Tooltip({
  content,
  children,
  side = 'top',
  align = 'center',
  delay = 300,
  closeDelay = 0,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  container,
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
      <BaseTooltip.Portal container={container}>
        <BaseTooltip.Positioner className={styles.positioner} side={side} align={align} sideOffset={6}>
          <BaseTooltip.Popup id={id} role="tooltip" className={cn(styles.popup, className)}>
            {content}
          </BaseTooltip.Popup>
        </BaseTooltip.Positioner>
      </BaseTooltip.Portal>
    </BaseTooltip.Root>
  )
}

/** Tooltips inside share one delay: once one has opened, moving to the next opens it at once. */
export const TooltipGroup = BaseTooltip.Provider

export interface HoverCardProps {
  /** The trigger: a link to what the card previews. Its props are merged, not wrapped. */
  trigger: ReactElement
  /** Usually an Avatar, at the card's start. */
  avatar?: ReactNode
  /** The name of what is previewed: a person, a record, a document. */
  title: ReactNode
  /** One or two lines of meta under the title: role, team, last active. */
  description?: ReactNode
  /** A shortcut, such as a Button. Keyboard focus cannot reach it, so the page the trigger links to must offer it too. */
  action?: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  /** Milliseconds of hover or focus before it opens. */
  delay?: number
  /** Milliseconds before it closes once the pointer leaves, so the pointer can cross to the card. */
  closeDelay?: number
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Where the card renders instead of `<body>`, e.g. an element in fullscreen. */
  container?: HTMLElement | null
  className?: string
}

/** A preview of a person or record on hover or focus of a link to it, on Base UI PreviewCard. */
export function HoverCard({
  trigger,
  avatar,
  title,
  description,
  action,
  side = 'bottom',
  align = 'start',
  delay = 600,
  closeDelay = 300,
  open,
  defaultOpen,
  onOpenChange,
  container,
  className,
}: HoverCardProps) {
  return (
    // Base UI's second argument (event details) is dropped, as in Popover.
    <PreviewCard.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange && ((next) => onOpenChange(next))}>
      <PreviewCard.Trigger render={trigger} delay={delay} closeDelay={closeDelay} />
      <PreviewCard.Portal container={container}>
        <PreviewCard.Positioner className={styles.cardPositioner} side={side} align={align} sideOffset={6}>
          <PreviewCard.Popup className={cn(styles.card, className)}>
            {avatar && <div className={styles.cardAvatar}>{avatar}</div>}
            <div className={styles.cardTitle}>{title}</div>
            {description && <div className={styles.cardDescription}>{description}</div>}
            {action && <div className={styles.cardAction}>{action}</div>}
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  )
}
