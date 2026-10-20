'use client'

import { useId, useState } from 'react'
import { arc, pie } from 'd3-shape'
import { cn } from '@/lib/utils'
import { Table } from '../data-display/Table'
import { Skeleton } from '../loaders/Skeleton'
import { ChartFrame, useEnterOnce } from './ChartFrame'
import { ChartLegend } from './ChartLegend'
import { colorVar, formatCompact, formatShare, groupSlices, type Slice } from './chart-utils'
import styles from './Chart.module.css'

export interface PieChartProps {
  /** Shown above the chart, and its accessible name. */
  title: string
  data: Slice[]
  /** `donut` leaves a hole with the total in it. */
  appearance?: 'pie' | 'donut'
  /** Under the total in a donut, e.g. "requests". */
  centerLabel?: string
  /** Diameter in pixels. */
  size?: number
  format?: (value: number) => string
  isLoading?: boolean
  className?: string
}

/**
 * Parts of one whole. No labels on the slices: the legend beside it carries
 * value and share. Past six slices, or under 3%, slices merge into "Other".
 */
export function PieChart({
  title,
  data,
  appearance = 'pie',
  centerLabel = 'Total',
  size = 200,
  format = formatCompact,
  isLoading = false,
  className,
}: PieChartProps) {
  const id = useId()
  const [focusKey, setFocusKey] = useState<string | null>(null)
  const total = data.reduce((sum, d) => sum + d.value, 0)
  // All zeros is no data: a pie of nothing has no parts to show.
  const hasData = total > 0
  const isEntering = useEnterOnce(!isLoading && hasData)
  const shareOf = (value: number) => formatShare(value / total)

  const slices = groupSlices(data)
  const isDonut = appearance === 'donut'
  const radius = size / 2 - 2
  const arcs = pie<(typeof slices)[number]>()
    .sort(null)
    .value((d) => d.value)(slices)
  const path = arc<(typeof arcs)[number]>()
    .innerRadius(isDonut ? radius * 0.64 : 0)
    .outerRadius(radius)
    .padAngle(isDonut ? 0.015 : 0)
    .cornerRadius(isDonut ? 2 : 0)

  return (
    <ChartFrame
      title={title}
      isLoading={isLoading}
      loading={<Skeleton appearance="circle" width={size} height={size} />}
      hasData={hasData}
      emptyHeight={size}
      className={className}
      table={() => (
        <Table
          caption={title}
          density="sm"
          rows={data}
          getRowId={(_, i) => String(i)}
          columns={[
            { key: 'label', header: 'Label', isRowHeader: true },
            { key: 'value', header: 'Value', align: 'end', cell: (d) => format(d.value) },
            { key: 'share', header: 'Share', align: 'end', cell: (d) => shareOf(d.value) },
          ]}
        />
      )}
    >
      {(titleId) => (
        <div className={styles.pieBody}>
          <svg
            role="img"
            aria-labelledby={`${titleId} ${id}-desc`}
            className={cn(isEntering && styles.entering)}
            width={size}
            height={size}
            viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}
          >
            {/* The sweep-in: a ring stroke drawn round the mask, once. */}
            <mask id={`${id}-sweep`}>
              <circle className={styles.sweep} r={radius / 2} fill="none" stroke="white" strokeWidth={radius + 4} pathLength={1} transform="rotate(-90)" />
            </mask>
            <g mask={isEntering ? `url(#${id}-sweep)` : undefined}>
              {arcs.map((a, i) => (
                <path
                  key={i}
                  className={cn(styles.slice, focusKey && focusKey !== String(i) && styles.dim)}
                  d={path(a) ?? ''}
                  fill={colorVar(a.data.color)}
                  onPointerEnter={() => setFocusKey(String(i))}
                  onPointerLeave={() => setFocusKey(null)}
                />
              ))}
            </g>
            {isDonut && (
              <>
                <text className={styles.centerTotal} textAnchor="middle" dy="-0.05em">
                  {format(total)}
                </text>
                <text className={styles.centerLabel} textAnchor="middle" dy="1.5em">
                  {centerLabel}
                </text>
              </>
            )}
          </svg>
          <span id={`${id}-desc`} className={styles.srOnly}>
            {slices.map((s) => `${s.label} ${shareOf(s.value)}`).join(', ')}
          </span>
          <ChartLegend
            orientation="vertical"
            items={slices.map((s, i) => ({ key: String(i), label: s.label, color: colorVar(s.color), value: `${format(s.value)} · ${shareOf(s.value)}` }))}
            onFocusChange={setFocusKey}
          />
        </div>
      )}
    </ChartFrame>
  )
}
