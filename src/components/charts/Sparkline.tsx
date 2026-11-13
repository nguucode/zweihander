import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { colorVar, type ChartColor } from './chart-utils'
import styles from './Chart.module.css'

export interface SparklineProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** Values in order, oldest first. Empty or null shows "No data". */
  data: number[] | null | undefined
  color?: ChartColor
  /** `area` fills under the line; `bar` draws one bar per value, for counts. */
  appearance?: 'line' | 'area' | 'bar'
  /**
   * Off by default: next to a figure and its change the trend is decoration.
   * Give it a name when the spark is the only place the trend is shown.
   */
  'aria-label'?: string
}

/**
 * A trend with no axes, 96 × 24 unless a class or style sizes it otherwise.
 * The viewBox stretches to any width without measuring, and
 * non-scaling-stroke keeps the line 1.5px. Bars are placed in percentages
 * instead, so their 1px corners stay round at any width.
 */
export function Sparkline({ data, color = 'chart-1', appearance = 'area', className, 'aria-label': ariaLabel, ...props }: SparklineProps) {
  const isEmpty = !data?.length
  let line = ''
  // A zero baseline: a spark that starts at its minimum exaggerates small swings.
  const max = isEmpty ? 1 : Math.max(...data, 0) || 1
  if (!isEmpty && appearance !== 'bar') {
    const step = data.length > 1 ? 100 / (data.length - 1) : 0
    line = 'M' + data.map((v, i) => `${(i * step).toFixed(2)},${(29 - (v / max) * 27).toFixed(2)}`).join('L')
    if (data.length === 1) line += 'L100,' + line.split(',')[1]
  }
  const a11y = ariaLabel ? { role: 'img', 'aria-label': ariaLabel } : { 'aria-hidden': true }
  return (
    <div {...props} className={cn(styles.spark, className)}>
      {!isEmpty && appearance === 'bar' ? (
        <svg fill={colorVar(color)} {...a11y}>
          {data.map((v, i) => {
            // Each bar fills three quarters of its slot, centred; a zero keeps a sliver so its slot still reads.
            const h = Math.max(4, (Math.max(v, 0) / max) * 100)
            return <rect key={i} x={`${((i + 0.125) * 100) / data.length}%`} width={`${75 / data.length}%`} y={`${100 - h}%`} height={`${h}%`} rx={1} />
          })}
        </svg>
      ) : (
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" {...a11y}>
          {isEmpty ? (
            <path className={styles.sparkEmpty} d="M0,20 C25,14 40,24 60,18 S90,12 100,16" />
          ) : (
            <>
              {appearance === 'area' && <path className={styles.sparkArea} d={`${line}L100,30L0,30Z`} fill={colorVar(color)} />}
              <path className={styles.sparkLine} d={line} stroke={colorVar(color)} />
            </>
          )}
        </svg>
      )}
      {isEmpty && <span className={styles.badge}>No data</span>}
    </div>
  )
}
