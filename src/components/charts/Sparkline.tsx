import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { colorVar, type ChartColor } from './chart-utils'
import styles from './Chart.module.css'

export interface SparklineProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** Values in order, oldest first. Empty or null shows "No data". */
  data: number[] | null | undefined
  color?: ChartColor
  /** `area` fills under the line. */
  appearance?: 'line' | 'area'
  /**
   * Off by default: next to a figure and its change the trend is decoration.
   * Give it a name when the spark is the only place the trend is shown.
   */
  'aria-label'?: string
}

/**
 * A trend with no axes, sized by its container. The viewBox stretches to any
 * width without measuring, and non-scaling-stroke keeps the line 1.25px.
 */
export function Sparkline({ data, color = 'chart-1', appearance = 'area', className, 'aria-label': ariaLabel, ...props }: SparklineProps) {
  const isEmpty = !data?.length
  let line = ''
  if (!isEmpty) {
    // A zero baseline: a spark that starts at its minimum exaggerates small swings.
    const max = Math.max(...data, 0) || 1
    const step = data.length > 1 ? 100 / (data.length - 1) : 0
    line = 'M' + data.map((v, i) => `${(i * step).toFixed(2)},${(29 - (v / max) * 27).toFixed(2)}`).join('L')
    if (data.length === 1) line += 'L100,' + line.split(',')[1]
  }
  return (
    <div {...props} className={cn(styles.spark, className)}>
      <svg viewBox="0 0 100 30" preserveAspectRatio="none" {...(ariaLabel ? { role: 'img', 'aria-label': ariaLabel } : { 'aria-hidden': true })}>
        {isEmpty ? (
          <path className={styles.sparkEmpty} d="M0,20 C25,14 40,24 60,18 S90,12 100,16" />
        ) : (
          <>
            {appearance === 'area' && <path className={styles.sparkArea} d={`${line}L100,30L0,30Z`} fill={colorVar(color)} />}
            <path className={styles.sparkLine} d={line} stroke={colorVar(color)} />
          </>
        )}
      </svg>
      {isEmpty && <span className={styles.badge}>No data</span>}
    </div>
  )
}
