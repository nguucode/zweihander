'use client'

import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Tabs } from '../../navigation/Tabs'
import styles from './TableChartSwitch.module.css'

export type TableChartView = 'table' | 'chart'

export interface TableChartSwitchProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** The records, usually a Table. */
  table: ReactNode
  /** The same records summed up, usually a BarChart or LineChart. */
  chart: ReactNode
  /** The filters both views share, usually a FilterBar. It stays put when the view changes. */
  filters?: ReactNode
  /** At the start of the switch's row: what the views show, e.g. "128 invoices". */
  summary?: ReactNode
  /** The view shown. */
  view?: TableChartView
  defaultView?: TableChartView
  onViewChange?: (view: TableChartView) => void
  tableLabel?: string
  chartLabel?: string
  /** Names the switch. Defaults to "View". */
  'aria-label'?: string
}

/**
 * One set of records, two ways to look at it: a table of the rows and a
 * chart of their totals, under the same filters. Owns no data: filter once
 * and hand the result to both views.
 */
export function TableChartSwitch({
  table,
  chart,
  filters,
  summary,
  view,
  defaultView = 'table',
  onViewChange,
  tableLabel = 'Table',
  chartLabel = 'Chart',
  'aria-label': ariaLabel = 'View',
  className,
  ...props
}: TableChartSwitchProps) {
  return (
    <div {...props} className={cn(styles.root, className)}>
      {filters != null && <div className={styles.filters}>{filters}</div>}
      {/* A status, so a screen reader hears the new count when a filter changes it. */}
      {summary != null && (
        <div className={styles.summary} role="status">
          {summary}
        </div>
      )}
      <Tabs
        appearance="pills"
        size="sm"
        // Both views stay mounted, so the table keeps its sort, selection
        // and scroll while the viewer looks at the chart.
        keepMounted
        aria-label={ariaLabel}
        className={styles.tabs}
        value={view}
        defaultValue={view === undefined ? defaultView : undefined}
        onValueChange={onViewChange && ((v) => onViewChange(v as TableChartView))}
        items={[
          { value: 'table', label: tableLabel, content: table },
          { value: 'chart', label: chartLabel, content: chart },
        ]}
      />
    </div>
  )
}
