'use client'

import { useEffect, useId, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../buttons/Button'
import styles from './Chart.module.css'

/** Animate in once, when there is something to draw; never again on new data. */
export function useEnterOnce(isReady: boolean) {
  const [isEntering, setIsEntering] = useState(true)
  useEffect(() => {
    if (!isReady || !isEntering) return
    const t = setTimeout(() => setIsEntering(false), 1000)
    return () => clearTimeout(t)
  }, [isReady, isEntering])
  return isEntering
}

interface ChartFrameProps {
  title: string
  isLoading: boolean
  /** The skeleton shown while loading, sized like the chart. */
  loading: ReactNode
  /** False shows "No data" in a box this tall instead of the chart. */
  hasData: boolean
  emptyHeight: number
  /** Built only when the viewer asks for it. */
  table: () => ReactNode
  className?: string
  /** The chart, given the title's id for its accessible name. */
  children: (titleId: string) => ReactNode
}

/**
 * What every chart shares around its plot: the title, the "View as table"
 * toggle and its table, and the loading and "No data" states.
 */
export function ChartFrame({ title, isLoading, loading, hasData, emptyHeight, table, className, children }: ChartFrameProps) {
  const id = useId()
  const [showTable, setShowTable] = useState(false)
  const canShowTable = hasData && !isLoading
  return (
    <figure className={cn(styles.chart, className)} aria-labelledby={`${id}-title`} aria-busy={isLoading || undefined}>
      <div className={styles.header}>
        <div id={`${id}-title`} className={styles.title}>
          {title}
        </div>
        {canShowTable && (
          <Button appearance="ghost" variant="secondary" size="sm" aria-expanded={showTable} aria-controls={`${id}-table`} onClick={() => setShowTable((v) => !v)}>
            {showTable ? 'View as chart' : 'View as table'}
          </Button>
        )}
      </div>
      {isLoading ? (
        loading
      ) : !hasData ? (
        <div className={styles.plot} style={{ blockSize: emptyHeight }}>
          <span className={styles.badge}>No data</span>
        </div>
      ) : showTable ? (
        // Focusable so a keyboard can scroll a long table.
        <div id={`${id}-table`} className={styles.tableWrap} role="region" aria-labelledby={`${id}-title`} tabIndex={0}>
          {table()}
        </div>
      ) : (
        children(`${id}-title`)
      )}
    </figure>
  )
}
