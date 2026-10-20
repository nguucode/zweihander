/** A series colour is a token name, never a hex, so it follows the theme. */
export type ChartColor =
  | 'chart-1'
  | 'chart-2'
  | 'chart-3'
  | 'chart-4'
  | 'chart-5'
  | 'chart-6'
  | 'chart-7'
  | 'chart-8'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral'

export interface ChartSeries {
  /** The field in each data row that holds this series' value. */
  key: string
  label: string
  /** Defaults to the palette, in order: chart-1, chart-2, … */
  color?: ChartColor
}

/* --warning is a fill for dark labels and only reaches 2.15:1 on a white card;
   a mark needs 3:1 (WCAG 1.4.11), which --warning-indicator is measured for. */
export const colorVar = (color: ChartColor) =>
  color === 'warning' ? 'var(--warning-indicator)' : color === 'neutral' ? 'var(--muted-foreground)' : `var(--${color})`

export const paletteColor = (index: number): ChartColor => `chart-${(index % 8) + 1}` as ChartColor

// Built once: a chart formats every tick, legend item and tooltip row on each pointer move.
const compact = new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 2 })
const share = new Intl.NumberFormat(undefined, { style: 'percent', maximumFractionDigits: 1 })
const times = new Map<string | undefined, Intl.DateTimeFormat>()

/** "3.15K", in the viewer's locale. */
export const formatCompact = (value: number) => compact.format(value)

/** "Oct 19, 12:00", in the viewer's locale and time zone, or UTC. */
export function formatTime(date: Date, timeZone?: 'UTC') {
  let f = times.get(timeZone)
  if (!f) {
    f = new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone })
    times.set(timeZone, f)
  }
  return f.format(date)
}

export const formatShare = (value: number) => share.format(value)

export interface Slice {
  label: string
  value: number
  color?: ChartColor
}

/**
 * Past `max` slices, or below `minShare` of the total, a pie stops being
 * readable: those slices merge into one "Other" in the neutral colour.
 */
export function groupSlices(data: Slice[], max = 6, minShare = 0.03): (Slice & { color: ChartColor })[] {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const sorted = [...data].sort((a, b) => b.value - a.value)
  const fits = (d: Slice) => total === 0 || d.value / total >= minShare
  const keep = sorted.length <= max && sorted.every(fits) ? sorted : sorted.filter((d, i) => i < max - 1 && fits(d))
  const rest = sorted.slice(keep.length)
  const slices = keep.map((d, i) => ({ ...d, color: d.color ?? paletteColor(i) }))
  if (rest.length)
    slices.push({ label: `Other (${rest.length})`, value: rest.reduce((sum, d) => sum + d.value, 0), color: 'neutral' })
  return slices
}
