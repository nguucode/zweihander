'use client'

import { useCallback, useId, useState, type CSSProperties } from 'react'
import { scaleBand, scaleLinear, scaleTime, scaleUtc } from 'd3-scale'
import { area, line, stack } from 'd3-shape'
import { cn } from '@/lib/utils'
import { Table } from '../data-display/Table'
import { Skeleton } from '../loaders/Skeleton'
import { ChartFrame, useEnterOnce } from './ChartFrame'
import { ChartLegend } from './ChartLegend'
import { colorVar, formatCompact, formatTime, paletteColor, type ChartSeries } from './chart-utils'
import styles from './Chart.module.css'

export type ChartRow = Record<string, unknown>

/** What LineChart and BarChart share. */
export interface CartesianChartProps {
  /** Shown above the chart, and its accessible name. */
  title: string
  /** Flat rows, one per bucket: `{ time, ok: 120, error: 4 }`. A missing or null value is a gap, not a zero. */
  data: ChartRow[]
  series: ChartSeries[]
  /** The field holding each row's x value. Dates give a time axis, strings a category axis. */
  x: string
  /** Height of the plot in pixels. The width follows the container. */
  height?: number
  /** Formats values on the axis, legend, tooltip and table. Defaults to compact numbers ("3.15K"). */
  format?: (value: number) => string
  /**
   * The time axis is in the viewer's time zone, or UTC. ponytail: no other named
   * zones, since d3 ticks only on local or UTC hours; add one when a product needs it.
   */
  timeZone?: 'UTC'
  /** The last bucket is still filling: drawn dashed (line) or faded (bar). */
  isIncomplete?: boolean
  /** What the legend shows beside each series: its sum, or its latest value (for rates and latencies, where a sum means nothing). */
  legendValue?: 'total' | 'latest'
  isLoading?: boolean
  className?: string
}

interface Props extends CartesianChartProps {
  type: 'line' | 'area' | 'bar'
  isGrouped?: boolean
  /** Fit the y axis to the data instead of starting at zero. */
  isAutoDomain?: boolean
}

const MARGIN = { top: 8, right: 8, bottom: 24 }
const DASH = '–'

/* A callback ref, so the observer follows the plot when it unmounts and comes
   back (loading, or the table view) instead of watching a detached node. */
function useWidth() {
  const [width, setWidth] = useState(0)
  const ref = useCallback((el: HTMLDivElement | null) => {
    if (!el) return
    // Measure now: the observer's first report waits for a frame, which a background tab may never paint.
    setWidth(Math.round(el.getBoundingClientRect().width))
    const observer = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return [ref, width] as const
}

/** A number, or null for a gap (missing, null or not a number). */
function read(row: ChartRow, key: string) {
  const v = row[key]
  return v === null || v === undefined || v === '' || Number.isNaN(Number(v)) ? null : Number(v)
}

export function CartesianChart({
  type,
  isGrouped = false,
  isAutoDomain = false,
  title,
  data,
  series,
  x,
  height = 240,
  format = formatCompact,
  timeZone,
  isIncomplete = false,
  legendValue = 'total',
  isLoading = false,
  className,
}: Props) {
  const id = useId()
  const [plotRef, width] = useWidth()
  const [hiddenKeys, setHiddenKeys] = useState<string[]>([])
  const [focusKey, setFocusKey] = useState<string | null>(null)
  const [hover, setHover] = useState<number | null>(null)
  const isEntering = useEnterOnce(width > 0 && !isLoading && data.length > 0)

  const colored = series.map((s, i) => ({ ...s, fill: colorVar(s.color ?? paletteColor(i)) }))
  // Keys left over from a previous `series` are ignored, and hiding them all shows them all.
  const hidden = hiddenKeys.filter((k) => series.some((s) => s.key === k))
  const visible = hidden.length === series.length ? colored : colored.filter((s) => !hidden.includes(s.key))
  const keys = visible.map((s) => s.key)
  const focus = focusKey && keys.includes(focusKey) ? focusKey : null
  const value = (row: ChartRow, key: string) => read(row, key) ?? 0
  const show = (row: ChartRow, key: string) => {
    const v = read(row, key)
    return v === null ? DASH : format(v)
  }
  const last = data.length - 1
  // A time axis needs two dates in order; anything else is read as categories.
  const isTime = data.length > 1 && data[0][x] instanceof Date && data[1][x] instanceof Date && +(data[1][x] as Date) > +(data[0][x] as Date)
  const xLabel = (row: ChartRow) => (isTime ? formatTime(row[x] as Date, timeZone) : String(row[x]))
  const isStacked = type === 'bar' && !isGrouped
  const totals = data.map((r) => (isStacked ? keys.reduce((s, k) => s + value(r, k), 0) : Math.max(0, ...keys.map((k) => value(r, k)))))

  const legendItems = colored.map((s) => {
    const values = data.map((r) => read(r, s.key)).filter((v): v is number => v !== null)
    const shown = legendValue === 'latest' ? values.at(-1) : values.reduce((sum, v) => sum + v, 0)
    return { key: s.key, label: s.label, color: s.fill, value: shown === undefined ? DASH : format(shown) }
  })

  const plot = (titleId: string) => {
    if (width === 0) return null
    const present = data.flatMap((r) => keys.map((k) => read(r, k))).filter((v): v is number => v !== null)
    const yMin = isAutoDomain && present.length ? Math.min(...present) : 0
    const tickCount = Math.max(3, Math.round((height - 40) / 50))
    const y = scaleLinear()
      .domain([yMin, Math.max(...totals, yMin + 1)])
      .nice(tickCount)
    const yTicks = y.ticks(tickCount)
    // ponytail: label width guessed from character count; measure the text if long units start to clip.
    const left = Math.max(...yTicks.map((t) => format(t).length)) * 7 + 12
    const innerW = Math.max(1, width - left - MARGIN.right)
    const innerH = height - MARGIN.top - MARGIN.bottom
    y.range([MARGIN.top + innerH, MARGIN.top])
    const base = y(y.domain()[0])

    // Each row's bucket: its left edge and width. A point (line on time) has width 0.
    let bucketLeft: (i: number) => number
    let bucketW: number
    let xTicks: { pos: number; label: string }[]
    let indexAt: (px: number) => number
    if (isTime) {
      const t0 = +(data[0][x] as Date)
      // ponytail: assumes evenly spaced buckets, as analytics APIs return them.
      const step = +(data[1][x] as Date) - t0
      // Ticks land on whole hours of the zone the labels are in.
      const xs = (timeZone === 'UTC' ? scaleUtc : scaleTime)()
        .domain([new Date(t0), new Date(+(data[last][x] as Date) + (type === 'bar' ? step : 0))])
        .range([left, left + innerW])
      bucketW = type === 'bar' ? xs(new Date(t0 + step)) - xs(new Date(t0)) : 0
      bucketLeft = (i) => xs(data[i][x] as Date)
      xTicks = xs
        .ticks(Math.max(2, Math.floor(innerW / 130)))
        .map((d) => ({ pos: xs(d), label: formatTime(d, timeZone) }))
        .filter((t) => t.pos - 45 >= 0 && t.pos + 45 <= width)
      indexAt = (px) => {
        const offset = (+xs.invert(px) - t0) / step
        return type === 'bar' ? Math.floor(offset) : Math.round(offset)
      }
    } else {
      const xb = scaleBand()
        .domain(data.map((_, i) => String(i)))
        .range([left, left + innerW])
        .paddingInner(type === 'bar' ? 0.3 : 0)
        .paddingOuter(type === 'bar' ? 0.15 : 0)
      bucketW = xb.bandwidth()
      bucketLeft = (i) => xb(String(i)) ?? 0
      // Every label that fits, at about 70px each; the rest are skipped evenly.
      const every = Math.ceil(data.length / Math.max(1, Math.floor(innerW / 70)))
      xTicks = data.flatMap((r, i) => (i % every ? [] : [{ pos: bucketLeft(i) + bucketW / 2, label: String(r[x]) }]))
      indexAt = (px) => Math.floor((px - left) / (innerW / data.length))
    }
    const center = (i: number) => bucketLeft(i) + bucketW / 2
    const gap = isTime ? Math.max(1, bucketW * 0.25) : 0
    const dimmed = (key: string) => cn(styles.series, focus && focus !== key && styles.dim)

    let marks
    if (isStacked) {
      marks = stack<ChartRow>()
        .keys(keys)
        .value((r, k) => value(r, k))(data)
        .map((layer, li) => (
          <g key={layer.key} className={dimmed(layer.key)} fill={visible[li].fill}>
            {layer.map(([y0, y1], i) =>
              y(y0) - y(y1) < 0.5 ? null : (
                <rect
                  key={i}
                  className={cn(styles.bar, isIncomplete && i === last && styles.partial)}
                  style={{ '--i': i } as CSSProperties}
                  x={bucketLeft(i) + gap / 2}
                  y={y(y1)}
                  width={Math.max(1, bucketW - gap)}
                  height={y(y0) - y(y1)}
                />
              ),
            )}
          </g>
        ))
    } else if (type === 'bar') {
      const inner = scaleBand()
        .domain(keys)
        .range([gap / 2, bucketW - gap / 2])
        .padding(0.12)
      marks = visible.map((s) => (
        <g key={s.key} className={dimmed(s.key)} fill={s.fill}>
          {data.map((r, i) => (
            <rect
              key={i}
              className={cn(styles.bar, isIncomplete && i === last && styles.partial)}
              style={{ '--i': i } as CSSProperties}
              x={bucketLeft(i) + (inner(s.key) ?? 0)}
              y={y(value(r, s.key))}
              width={inner.bandwidth()}
              height={base - y(value(r, s.key))}
            />
          ))}
        </g>
      ))
    } else {
      marks = visible.map((s) => {
        const isPresent = (r: ChartRow) => read(r, s.key) !== null
        const path = (from: number) =>
          line<ChartRow>()
            .defined(isPresent)
            .x((_, i) => center(i + from))
            .y((r) => y(value(r, s.key)))
        const solid = isIncomplete ? data.slice(0, last) : data
        return (
          <g key={s.key} className={dimmed(s.key)}>
            {type === 'area' && (
              <path
                className={styles.area}
                fill={s.fill}
                d={
                  area<ChartRow>()
                    .defined(isPresent)
                    .x((_, i) => center(i))
                    .y0(base)
                    .y1((r) => y(value(r, s.key)))(data) ?? ''
                }
              />
            )}
            <path className={styles.line} pathLength={1} stroke={s.fill} d={path(0)(solid) ?? ''} />
            {isIncomplete && <path className={styles.lineDashed} stroke={s.fill} d={path(last - 1)(data.slice(last - 1)) ?? ''} />}
          </g>
        )
      })
    }

    // ponytail: a hover re-renders every mark; memoise them if charts grow past a few thousand points.
    const h = hover !== null && Number.isFinite(hover) ? Math.min(last, Math.max(0, hover)) : null
    const cursorW = isTime ? bucketW : innerW / data.length
    return (
      <>
        <svg
          role="img"
          aria-labelledby={`${titleId} ${id}-range`}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          onPointerMove={(e) => {
            const px = e.clientX - e.currentTarget.getBoundingClientRect().left
            setHover(px < left || px > left + innerW ? null : indexAt(px))
          }}
          onPointerLeave={() => setHover(null)}
        >
          {yTicks.map((t) => (
            <g key={t}>
              <line className={styles.grid} x1={left} x2={left + innerW} y1={y(t)} y2={y(t)} />
              <text className={styles.axis} x={left - 8} y={y(t)} dy="0.32em" textAnchor="end">
                {format(t)}
              </text>
            </g>
          ))}
          {xTicks.map((t, i) => (
            <g key={i}>
              <line className={styles.tick} x1={t.pos} x2={t.pos} y1={MARGIN.top + innerH} y2={MARGIN.top + innerH + 4} />
              <text className={styles.axis} x={t.pos} y={height - 6} textAnchor="middle">
                {t.label}
              </text>
            </g>
          ))}
          {h !== null && type === 'bar' && <rect className={styles.cursorBand} x={center(h) - cursorW / 2} y={MARGIN.top} width={cursorW} height={innerH} />}
          {marks}
          {h !== null && type !== 'bar' && (
            <g>
              <line className={styles.cursor} x1={center(h)} x2={center(h)} y1={MARGIN.top} y2={MARGIN.top + innerH} />
              {visible.map((s) =>
                read(data[h], s.key) === null ? null : (
                  <circle key={s.key} className={styles.dot} cx={center(h)} cy={y(value(data[h], s.key))} r={3.5} fill={s.fill} />
                ),
              )}
            </g>
          )}
        </svg>
        <span id={`${id}-range`} className={styles.srOnly}>
          {xLabel(data[0])} to {xLabel(data[last])}. Use View as table to read the values.
        </span>
        {h !== null && (
          // Hidden from assistive tech: the table is the accessible way to read values.
          <div
            className={cn(styles.tooltip, center(h) > width / 2 && styles.tooltipFlip)}
            style={{ insetInlineStart: center(h), insetBlockStart: MARGIN.top }}
            aria-hidden="true"
          >
            <div className={styles.tooltipHead}>
              {xLabel(data[h])}
              {isIncomplete && h === last && ' · partial'}
            </div>
            {(isStacked ? [...visible].reverse() : visible).map((s) => (
              <div key={s.key} className={styles.tooltipRow}>
                <span className={styles.swatch} style={{ '--swatch': s.fill } as CSSProperties} />
                {s.label}
                <b>{show(data[h], s.key)}</b>
              </div>
            ))}
            {isStacked && visible.length > 1 && (
              <div className={cn(styles.tooltipRow, styles.tooltipTotal)}>
                Total<b>{format(totals[h])}</b>
              </div>
            )}
          </div>
        )}
      </>
    )
  }

  return (
    <ChartFrame
      title={title}
      isLoading={isLoading}
      loading={<Skeleton isFullWidth height={height} />}
      hasData={data.length > 0}
      emptyHeight={height}
      className={className}
      table={() => (
        <Table
          caption={title}
          density="sm"
          hasStickyHeader
          rows={data}
          getRowId={(_, i) => String(i)}
          columns={[
            { key: '__x', header: isTime ? 'Time' : 'Category', cell: xLabel, isRowHeader: true },
            ...series.map((s) => ({ key: s.key, header: s.label, align: 'end' as const, cell: (r: ChartRow) => show(r, s.key) })),
          ]}
        />
      )}
    >
      {(titleId) => (
        <>
          <ChartLegend
            items={legendItems}
            hiddenKeys={hidden.length === series.length ? [] : hidden}
            onToggle={(key) => {
              setFocusKey(null)
              setHiddenKeys((current) => (current.includes(key) ? current.filter((k) => k !== key) : [...current, key]))
            }}
            onFocusChange={setFocusKey}
          />
          <div ref={plotRef} className={cn(styles.plot, isEntering && styles.entering)} style={{ blockSize: height }}>
            {plot(titleId)}
          </div>
        </>
      )}
    </ChartFrame>
  )
}
