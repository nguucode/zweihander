'use client'

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Calendar.module.css'

/* ------------------------------------------------------------ plain dates
   Calendar dates carry no time: every Date here is local midnight. */

export const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())
export const isSameDay = (a: Date | null | undefined, b: Date | null | undefined) =>
  !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
export const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)
/** Adds months, keeping the day where it exists: 31 Jan + 1 month is 28/29 Feb. */
export const addMonths = (d: Date, n: number) => {
  const first = new Date(d.getFullYear(), d.getMonth() + n, 1)
  const last = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate()
  return new Date(first.getFullYear(), first.getMonth(), Math.min(d.getDate(), last))
}
const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1)
const clamp = (d: Date, min?: Date | null, max?: Date | null) =>
  min && d < startOfDay(min) ? startOfDay(min) : max && d > startOfDay(max) ? startOfDay(max) : d

/** The locale's first day of the week (0 = Sunday), where the browser knows it. */
export function firstDayOfWeek(locale?: string) {
  try {
    const l = new Intl.Locale(locale ?? navigator.language) as Intl.Locale & {
      getWeekInfo?: () => { firstDay: number }
      weekInfo?: { firstDay: number }
    }
    const info = l.getWeekInfo?.() ?? l.weekInfo
    if (info) return info.firstDay % 7
  } catch {
    /* fall through */
  }
  return 1
}

/** A span of days; `end` is null while only the first end is picked. */
export interface DateRange {
  start: Date | null
  end: Date | null
}

export interface CalendarProps {
  value?: Date | null
  defaultValue?: Date | null
  onValueChange?: (date: Date) => void
  /** The month shown; defaults to the value's, or today's. */
  month?: Date
  defaultMonth?: Date
  onMonthChange?: (month: Date) => void
  min?: Date | null
  max?: Date | null
  /** Rules out single dates, e.g. weekends or booked days. */
  isDateDisabled?: (date: Date) => boolean
  /** Shows a span instead of `value`: both ends selected, the days between banded. Clicks still report one day; the owner decides the span. */
  range?: DateRange | null
  /** BCP 47 tag, e.g. `vi-VN`. Defaults to the browser's. */
  locale?: string
  /** 0 = Sunday … 6 = Saturday. Defaults to the locale's. */
  weekStartsOn?: number
  /** Focus the selected (or today's) day on mount, e.g. when opened in a popover. */
  autoFocus?: boolean
  className?: string
}

export function Calendar({
  value,
  defaultValue = null,
  onValueChange,
  month: monthProp,
  defaultMonth,
  onMonthChange,
  min,
  max,
  isDateDisabled,
  range,
  locale,
  weekStartsOn,
  autoFocus = false,
  className,
}: CalendarProps) {
  const today = startOfDay(new Date())
  const [valueState, setValueState] = useState(defaultValue)
  const selected = range ? range.start : value !== undefined ? value : valueState
  const rangeEnd = range?.end ?? null
  const [monthState, setMonthState] = useState(() => startOfMonth(defaultMonth ?? selected ?? today))
  const month = monthProp ? startOfMonth(monthProp) : monthState
  // The day with the roving tab stop, and where the keyboard moves from.
  const [focused, setFocused] = useState(() => clamp(selected ?? (isSameMonth(today, month) ? today : month), min, max))
  const gridRef = useRef<HTMLTableElement>(null)
  const moveFocus = useRef(autoFocus)

  const first = weekStartsOn ?? firstDayOfWeek(locale)
  const fmt = useMemo(() => {
    return {
      title: new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', calendar: 'gregory' }),
      titleShort: new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', calendar: 'gregory' }),
      weekday: new Intl.DateTimeFormat(locale, { weekday: 'short', calendar: 'gregory' }),
      weekdayNarrow: new Intl.DateTimeFormat(locale, { weekday: 'narrow', calendar: 'gregory' }),
      weekdayLong: new Intl.DateTimeFormat(locale, { weekday: 'long', calendar: 'gregory' }),
      day: new Intl.DateTimeFormat(locale, { day: 'numeric', calendar: 'gregory' }),
      full: new Intl.DateTimeFormat(locale, { dateStyle: 'full', calendar: 'gregory' }),
    }
  }, [locale])

  const disabled = (d: Date) =>
    (!!min && d < startOfDay(min)) || (!!max && d > startOfDay(max)) || (isDateDisabled?.(d) ?? false)

  const setMonth = (m: Date) => {
    const next = startOfMonth(m)
    setMonthState(next)
    onMonthChange?.(next)
  }
  const focusDay = (d: Date) => {
    const next = clamp(d, min, max)
    setFocused(next)
    if (!isSameMonth(next, month)) setMonth(next)
    moveFocus.current = true
  }
  useEffect(() => {
    if (!moveFocus.current) return
    moveFocus.current = false
    gridRef.current?.querySelector<HTMLElement>('[tabindex="0"]')?.focus()
  })
  // Keep the tab stop inside the month when it changes from outside.
  useEffect(() => {
    if (!isSameMonth(focused, month)) setFocused(clamp(selected && isSameMonth(selected, month) ? selected : month, min, max))
  }, [month.getTime()]) // eslint-disable-line react-hooks/exhaustive-deps

  const select = (d: Date) => {
    if (disabled(d)) return
    setValueState(d)
    onValueChange?.(d)
    setFocused(d)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    const dow = (focused.getDay() - first + 7) % 7
    // Right to left mirrors the grid, so the arrows follow what is on screen.
    const ahead = getComputedStyle(e.currentTarget).direction === 'rtl' ? -1 : 1
    const moves: Record<string, () => Date> = {
      ArrowLeft: () => addDays(focused, -ahead),
      ArrowRight: () => addDays(focused, ahead),
      ArrowUp: () => addDays(focused, -7),
      ArrowDown: () => addDays(focused, 7),
      Home: () => addDays(focused, -dow),
      End: () => addDays(focused, 6 - dow),
      PageUp: () => addMonths(focused, e.shiftKey ? -12 : -1),
      PageDown: () => addMonths(focused, e.shiftKey ? 12 : 1),
    }
    if (moves[e.key]) {
      e.preventDefault()
      focusDay(moves[e.key]())
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      select(focused)
    }
  }

  // Six rows of seven days, starting on the week's first day.
  const lead = (month.getDay() - first + 7) % 7
  const start = addDays(month, -lead)
  const weeks = Array.from({ length: 6 }, (_, w) => Array.from({ length: 7 }, (_, d) => addDays(start, w * 7 + d)))
  const weekdays = weeks[0]
  // Two letters where the short names are short ("Mon" → "Mo", "lun." →
  // "lu"); the narrow ones where they are not ("Thứ 2" → "T2").
  const weekdayName = (d: Date) => {
    const short = fmt.weekday.format(d)
    return weekdays.every((w) => fmt.weekday.format(w).length <= 4) ? short.slice(0, 2) : fmt.weekdayNarrow.format(d)
  }
  const prevDisabled = !!min && startOfMonth(min) >= month
  const nextDisabled = !!max && startOfMonth(max) <= month

  return (
    <div className={cn(styles.calendar, className)}>
      <div className={styles.header}>
        {/* Not a heading: a calendar can sit anywhere in a page's outline.
            It announces the month as it changes. */}
        <div className={styles.title} aria-live="polite">
          {fmt.titleShort.format(month)}
        </div>
        <button
          type="button"
          className={styles.nav}
          aria-label="Previous month"
          disabled={prevDisabled}
          onClick={() => setMonth(addMonths(month, -1))}
        >
          <Icon name="chevron-left" className={styles.dirIcon} />
        </button>
        <button
          type="button"
          className={styles.nav}
          aria-label="Next month"
          disabled={nextDisabled}
          onClick={() => setMonth(addMonths(month, 1))}
        >
          <Icon name="chevron-right" className={styles.dirIcon} />
        </button>
      </div>
      <table ref={gridRef} role="grid" aria-label={fmt.title.format(month)} className={styles.grid} onKeyDown={onKeyDown}>
        <thead>
          <tr>
            {weekdays.map((d) => (
              <th key={d.getDay()} scope="col" abbr={fmt.weekdayLong.format(d)} className={styles.weekday}>
                {weekdayName(d)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, w) => (
            <tr key={w}>
              {week.map((d, col) => {
                const outside = !isSameMonth(d, month)
                // Selection and the band stay inside the month: a day of the month
                // either side is only there for shape, and two months side by
                // side would otherwise both draw the days where they overlap.
                const isSelected = !outside && (isSameDay(d, selected) || isSameDay(d, rangeEnd))
                const between = !outside && !!selected && !!rangeEnd && d > selected && d < rangeEnd
                const banded = !!rangeEnd && !isSameDay(selected, rangeEnd) && (isSelected || between)
                const isDisabled = disabled(d)
                return (
                  <td
                    key={d.getTime()}
                    role="gridcell"
                    aria-selected={isSelected || between || undefined}
                    className={cn(
                      styles.cell,
                      banded && styles.inRange,
                      banded && isSameDay(d, selected) && styles.rangeStart,
                      banded && isSameDay(d, rangeEnd) && styles.rangeEnd,
                      // Rounded off where a week or the month starts or ends.
                      banded && (col === 0 || d.getDate() === 1) && styles.bandStart,
                      banded && (col === 6 || addDays(d, 1).getDate() === 1) && styles.bandEnd,
                    )}
                  >
                    {outside ? (
                      // The months either side are shape, not content: hidden from
                      // assistive tech, not pickable, and faded past muted. Arrow
                      // keys still cross into them, by moving the month.
                      <span aria-hidden="true" data-outside="" className={cn(styles.day, styles.outside)}>
                        {fmt.day.format(d)}
                      </span>
                    ) : (
                      <button
                        type="button"
                        tabIndex={isSameDay(d, focused) ? 0 : -1}
                        aria-label={fmt.full.format(d)}
                        aria-current={isSameDay(d, today) ? 'date' : undefined}
                        aria-disabled={isDisabled || undefined}
                        className={cn(
                          styles.day,
                          isSelected && styles.selected,
                          between && styles.between,
                          isSameDay(d, today) && styles.today,
                        )}
                        onClick={() => select(d)}
                        onFocus={() => setFocused(d)}
                      >
                        {fmt.day.format(d)}
                      </button>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}
