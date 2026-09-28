import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react'
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
  locale,
  weekStartsOn,
  autoFocus = false,
  className,
}: CalendarProps) {
  const id = useId()
  const today = startOfDay(new Date())
  const [valueState, setValueState] = useState(defaultValue)
  const selected = value !== undefined ? value : valueState
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
      weekday: new Intl.DateTimeFormat(locale, { weekday: 'short', calendar: 'gregory' }),
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
  const prevDisabled = !!min && startOfMonth(min) >= month
  const nextDisabled = !!max && startOfMonth(max) <= month

  return (
    <div className={cn(styles.calendar, className)}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.nav}
          aria-label="Previous month"
          disabled={prevDisabled}
          onClick={() => setMonth(addMonths(month, -1))}
        >
          <Icon name="chevron-left" className={styles.dirIcon} />
        </button>
        {/* Not a heading: a calendar can sit anywhere in a page's outline. It
            names the grid, and announces the month as it changes. */}
        <div id={`${id}-title`} className={styles.title} aria-live="polite">
          {fmt.title.format(month)}
        </div>
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
      <table ref={gridRef} role="grid" aria-labelledby={`${id}-title`} className={styles.grid} onKeyDown={onKeyDown}>
        <thead>
          <tr>
            {weekdays.map((d) => (
              <th key={d.getDay()} scope="col" abbr={fmt.weekdayLong.format(d)} className={styles.weekday}>
                {fmt.weekday.format(d)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, w) => (
            <tr key={w}>
              {week.map((d) => {
                const outside = !isSameMonth(d, month)
                const isSelected = isSameDay(d, selected)
                const isDisabled = disabled(d)
                return (
                  <td key={d.getTime()} role="gridcell" aria-selected={isSelected || undefined} className={styles.cell}>
                    <button
                      type="button"
                      tabIndex={isSameDay(d, focused) ? 0 : -1}
                      aria-label={fmt.full.format(d)}
                      aria-current={isSameDay(d, today) ? 'date' : undefined}
                      aria-disabled={isDisabled || undefined}
                      className={cn(
                        styles.day,
                        outside && styles.outside,
                        isSelected && styles.selected,
                        isSameDay(d, today) && styles.today,
                      )}
                      onClick={() => {
                        if (outside && !isDisabled) setMonth(d)
                        select(d)
                      }}
                      onFocus={() => setFocused(d)}
                    >
                      {fmt.day.format(d)}
                    </button>
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
