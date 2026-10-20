import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import styles from './Chart.module.css'

export interface ChartLegendItem {
  key: string
  label: string
  /** A CSS colour, usually from `colorVar`. */
  color: string
  /** Shown after the label, e.g. the series total "2.56K". */
  value?: string
}

export interface ChartLegendProps {
  items: ChartLegendItem[]
  /** Keys of series that are switched off. */
  hiddenKeys?: string[]
  /** Makes each item a toggle button. Without it the legend is a plain list. */
  onToggle?: (key: string) => void
  /** Called with the key under the pointer or focus, null when it leaves. Charts use it to fade the other series. */
  onFocusChange?: (key: string | null) => void
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

/** Swatch, label and value per series. As toggles, it shows and hides series in the chart above it. */
export function ChartLegend({ items, hiddenKeys = [], onToggle, onFocusChange, orientation = 'horizontal', className }: ChartLegendProps) {
  const visibleCount = items.length - hiddenKeys.length
  return (
    <ul
      className={cn(styles.legend, orientation === 'vertical' && styles.legendVertical, className)}
      aria-label="Legend"
      onPointerLeave={() => onFocusChange?.(null)}
    >
      {items.map((item) => {
        const isHidden = hiddenKeys.includes(item.key)
        const content = (
          <>
            <span className={styles.swatch} style={{ '--swatch': item.color } as CSSProperties} aria-hidden="true" />
            <span className={styles.legendLabel}>{item.label}</span>
            {item.value !== undefined && <span className={styles.legendValue}>{item.value}</span>}
          </>
        )
        const focus = () => onFocusChange?.(isHidden ? null : item.key)
        const blur = () => onFocusChange?.(null)
        return (
          <li key={item.key} onPointerEnter={focus}>
            {onToggle ? (
              <button
                type="button"
                className={styles.legendItem}
                aria-pressed={!isHidden}
                // The last visible series cannot be hidden: an empty chart reads as "no data".
                aria-disabled={!isHidden && visibleCount === 1 ? true : undefined}
                onClick={() => (!isHidden && visibleCount === 1 ? undefined : onToggle(item.key))}
                onFocus={focus}
                onBlur={blur}
              >
                {content}
              </button>
            ) : (
              <span className={styles.legendItem}>{content}</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
