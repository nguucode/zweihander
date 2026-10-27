'use client'

import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './Resizable.module.css'

export interface ResizableProps {
  /** The first pane: on the inline start side by side, on top when stacked. The handle sets its size. */
  start: ReactNode
  /** The second pane: it takes the space the first leaves. */
  end: ReactNode
  /** `horizontal` puts the panes side by side, `vertical` stacks them. */
  orientation?: 'horizontal' | 'vertical'
  /** The first pane's size in percent of the whole, for controlled use. Pair with `onSizeChange`. */
  size?: number
  /** The first pane's starting size in percent, when uncontrolled. */
  defaultSize?: number
  /** Called with the first pane's new size in percent while the handle moves. */
  onSizeChange?: (size: number) => void
  /** The first pane's smallest size, in percent. */
  minSize?: number
  /** The first pane's largest size, in percent. */
  maxSize?: number
  /** The handle's accessible name. Name it after the first pane: "Resize filters". */
  handleLabel?: string
  className?: string
  style?: CSSProperties
}

// Table's column resize handle moves 16px a key press too, so both feel alike.
const KEY_STEP = 16

/**
 * Two panes and a handle between them that moves the split, by dragging or
 * with the arrow keys, after the APG window splitter. Nest one in a pane for three.
 */
export function Resizable({
  start,
  end,
  orientation = 'horizontal',
  size,
  defaultSize = 50,
  onSizeChange,
  minSize = 10,
  maxSize = 90,
  handleLabel = 'Resize',
  className,
  style,
}: ResizableProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const startId = useId()
  const [uncontrolledSize, setUncontrolledSize] = useState(defaultSize)
  const stopDrag = useRef<(() => void) | null>(null)
  useEffect(() => () => stopDrag.current?.(), [])
  const clamp = (v: number) => Math.min(maxSize, Math.max(minSize, v))
  const now = clamp(size ?? uncontrolledSize)
  const isHorizontal = orientation === 'horizontal'

  const setSize = (v: number) => {
    const next = clamp(v)
    // Pressing on against a limit is not a change.
    if (next === now) return
    if (size === undefined) setUncontrolledSize(next)
    onSizeChange?.(next)
  }
  const rootLength = () => {
    const r = rootRef.current!.getBoundingClientRect()
    return (isHorizontal ? r.width : r.height) || 1
  }
  // Side by side in RTL the first pane is on the right, so moving left grows it.
  const sign = () => (isHorizontal && getComputedStyle(rootRef.current!).direction === 'rtl' ? -1 : 1)
  const toPercent = (px: number) => (px * 100) / rootLength()

  // Window listeners, not pointer capture: the move keeps tracking past
  // the handle, and synthetic test pointers need no active pointer id.
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    e.preventDefault()
    const from = now
    const at = isHorizontal ? e.clientX : e.clientY
    const s = sign()
    const move = (m: globalThis.PointerEvent) => setSize(from + s * toPercent((isHorizontal ? m.clientX : m.clientY) - at))
    const stop = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', stop)
      window.removeEventListener('pointercancel', stop)
      stopDrag.current = null
    }
    stopDrag.current = stop
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', stop)
    window.addEventListener('pointercancel', stop)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = isHorizontal ? { ArrowRight: 1, ArrowLeft: -1 } : { ArrowDown: 1, ArrowUp: -1 }
    const dir = keys[e.key]
    const next = dir !== undefined ? now + sign() * dir * toPercent(KEY_STEP) : e.key === 'Home' ? minSize : e.key === 'End' ? maxSize : undefined
    if (next === undefined) return
    e.preventDefault()
    setSize(next)
  }

  return (
    <div
      ref={rootRef}
      className={cn(styles.root, !isHorizontal && styles.vertical, className)}
      style={{ ...style, '--resizable-size': `${now}%` } as CSSProperties}
    >
      <div id={startId} className={styles.pane}>
        {start}
      </div>
      <div
        role="separator"
        aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
        aria-label={handleLabel}
        aria-controls={startId}
        aria-valuenow={Math.round(now)}
        aria-valuemin={minSize}
        aria-valuemax={maxSize}
        tabIndex={0}
        className={styles.handle}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
      />
      <div className={cn(styles.pane, styles.end)}>{end}</div>
    </div>
  )
}
