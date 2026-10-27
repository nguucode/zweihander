'use client'

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type CSSProperties,
  type Key,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import type { TagVariant } from '../../atomic-elements/Tag'
import { Button } from '../../buttons/Button'
import { Calendar, addDays, addMonths, firstDayOfWeek, isSameDay, startOfDay } from '../../data-display/Calendar'
import { Select } from '../../inputs/Select'
import styles from './EventCalendar.module.css'

export type EventCalendarView = 'day' | 'week' | 'month' | 'year'

export interface CalendarEvent {
  id: Key
  title: string
  start: Date
  /** When it ends. Without it the event is a moment. For an all-day event, the last day it covers. */
  end?: Date
  /** Covers whole days: no time is shown, and the day and week views put it in the all-day row. */
  allDay?: boolean
  /** A Tag variant: a status or a hue, e.g. one per kind of event. */
  color?: TagVariant
  /** Makes the event a link. */
  href?: string
}

export interface EventCalendarProps extends Omit<ComponentProps<'div'>, 'children' | 'title'> {
  /** The events to show. The calendar picks those that fall in view; it never changes them. */
  events: CalendarEvent[]
  /** The view shown, when you control it. */
  view?: EventCalendarView
  defaultView?: EventCalendarView
  onViewChange?: (view: EventCalendarView) => void
  /** The views offered in the switch, in its order. One view hides the switch. */
  views?: EventCalendarView[]
  /** The selected day; the view shows the day, week, month or year around it. */
  date?: Date
  defaultDate?: Date
  onDateChange?: (date: Date) => void
  /** Makes events without `href` buttons, e.g. to open them in a Drawer. */
  onEventClick?: (event: CalendarEvent) => void
  /** At the end of the header, e.g. an "Add event" Button. */
  actions?: ReactNode
  /** Lists the selected day's events under the month view. A narrow month shows dots, so this is where its events are read. */
  hasEventList?: boolean
  /** The level of the title (the month, week, day or year shown). */
  headingLevel?: 2 | 3 | 4
  /** BCP 47 tag, e.g. `vi-VN`. Defaults to the browser's. */
  locale?: string
  /** 0 = Sunday … 6 = Saturday. Defaults to the locale's. */
  weekStartsOn?: number
}

const VIEWS: EventCalendarView[] = ['day', 'week', 'month', 'year']
const VIEW_LABEL: Record<EventCalendarView, string> = { day: 'Day', week: 'Week', month: 'Month', year: 'Year' }
// A month cell lists this many, then "n more" leads to the day or the list.
const PER_CELL = 3
// A moment or a short event still gets a readable block in the day and week views.
const MIN_BLOCK_MS = 30 * 60_000

/** The last instant an event covers: its end day when all-day, else just before its end. */
const lastOf = (e: CalendarEvent) => {
  const end = e.end ?? e.start
  // An end before the start is read as a moment, so the event still shows.
  if (end <= e.start) return e.start
  return e.allDay ? end : new Date(end.getTime() - 1)
}
/** Whether an event covers any part of a day (a local midnight). */
const occursOn = (e: CalendarEvent, day: Date) => startOfDay(e.start) <= day && day <= startOfDay(lastOf(e))
/** All-day, or crossing midnight: these sit in the all-day row rather than on the hour grid. */
const isAllDayRow = (e: CalendarEvent) => !!e.allDay || !isSameDay(e.start, lastOf(e))
const blockEnd = (e: CalendarEvent) => Math.max((e.end ?? e.start).getTime(), e.start.getTime() + MIN_BLOCK_MS)
const byStart = (a: CalendarEvent, b: CalendarEvent) =>
  Number(isAllDayRow(b)) - Number(isAllDayRow(a)) || a.start.getTime() - b.start.getTime()

interface PlacedEvent {
  event: CalendarEvent
  /** The column it takes among the events it overlaps, and how many columns they need. */
  col: number
  cols: number
}

/** Side by side where timed events overlap: each cluster of overlapping events shares the width evenly. */
function layoutDay(events: CalendarEvent[]): PlacedEvent[] {
  const sorted = [...events].sort((a, b) => a.start.getTime() - b.start.getTime() || blockEnd(b) - blockEnd(a))
  const placed: PlacedEvent[] = []
  let cluster: PlacedEvent[] = []
  let columns: number[] = []
  let clusterEnd = -Infinity
  const close = () => {
    for (const p of cluster) p.cols = columns.length
    cluster = []
    columns = []
  }
  for (const event of sorted) {
    const start = event.start.getTime()
    if (start >= clusterEnd) close()
    let col = columns.findIndex((busyUntil) => busyUntil <= start)
    if (col < 0) col = columns.push(0) - 1
    columns[col] = blockEnd(event)
    clusterEnd = Math.max(clusterEnd, blockEnd(event))
    const p = { event, col, cols: 0 }
    cluster.push(p)
    placed.push(p)
  }
  close()
  return placed
}

/** The Tag palette as custom properties the CSS reads. Neutral has no ramp, as in Tag. */
const colorVars = (c: TagVariant = 'info') =>
  (c === 'neutral'
    ? { '--event-subtle': 'var(--secondary)', '--event-text': 'var(--secondary-foreground)', '--event-solid': 'var(--foreground)' }
    : { '--event-subtle': `var(--${c}-subtle)`, '--event-text': `var(--${c}-text)`, '--event-solid': `var(--${c})` }) as CSSProperties

/**
 * Events on a day, week, month or year grid, with a header to move
 * through time and switch views. Owns no events: it shows what it is given.
 */
export function EventCalendar({
  events,
  view: viewProp,
  defaultView = 'month',
  onViewChange,
  views = VIEWS,
  date: dateProp,
  defaultDate,
  onDateChange,
  onEventClick,
  actions,
  hasEventList = false,
  headingLevel = 2,
  locale,
  weekStartsOn,
  className,
  ...props
}: EventCalendarProps) {
  const [viewState, setViewState] = useState(defaultView)
  const view = viewProp ?? viewState
  const [dateState, setDateState] = useState(() => startOfDay(defaultDate ?? new Date()))
  const date = dateProp ? startOfDay(dateProp) : dateState
  const today = startOfDay(new Date())
  const first = weekStartsOn ?? firstDayOfWeek(locale)
  const titleId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const moveFocus = useRef(false)

  const fmt = useMemo(() => {
    const f = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(locale, { calendar: 'gregory', ...o })
    return {
      month: f({ month: 'long', year: 'numeric' }),
      range: f({ month: 'short', day: 'numeric', year: 'numeric' }),
      full: f({ dateStyle: 'full' }),
      year: f({ year: 'numeric' }),
      weekday: f({ weekday: 'short' }),
      weekdayLong: f({ weekday: 'long' }),
      day: f({ day: 'numeric' }),
      time: f({ timeStyle: 'short' }),
      hour: f({ hour: 'numeric' }),
    }
  }, [locale])

  const setView = (v: EventCalendarView) => {
    setViewState(v)
    onViewChange?.(v)
  }
  const setDate = (d: Date) => {
    setDateState(startOfDay(d))
    onDateChange?.(startOfDay(d))
  }
  /** From a summary (a year's day, a month's "n more") to the day itself. */
  const openDay = (d: Date) => {
    setDate(d)
    if (views.includes('day')) setView('day')
    else if (views.includes('month')) setView('month')
  }

  const weekStart = addDays(date, -((date.getDay() - first + 7) % 7))
  const days = view === 'week' ? Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)) : [date]
  const on = (day: Date) => events.filter((e) => occursOn(e, day)).sort(byStart)

  const step = (n: number) =>
    setDate(
      view === 'month'
        ? addMonths(date, n)
        : view === 'year'
          ? addMonths(date, 12 * n)
          : addDays(date, view === 'week' ? 7 * n : n),
    )
  const title =
    view === 'month'
      ? fmt.month.format(date)
      : view === 'year'
        ? fmt.year.format(date)
        : view === 'week'
          ? fmt.range.formatRange(days[0], days[6])
          : fmt.full.format(date)

  // The day and week views open an hour before the first timed event on
  // show, or at 8:00, so the hour's label is in view too.
  const shownKey = days.map((d) => d.getTime()).join()
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const hours = days.flatMap((d) =>
      on(d)
        .filter((e) => !isAllDayRow(e))
        .map((e) => e.start.getHours()),
    )
    el.scrollTop = ((hours.length ? Math.max(Math.min(...hours) - 1, 0) : 8) / 24) * el.scrollHeight
    // Not on `events`: events loading later must not yank the viewer's scroll.
  }, [view, shownKey]) // eslint-disable-line react-hooks/exhaustive-deps

  // Arrow keys moved the selected day: focus follows it to its button.
  useEffect(() => {
    if (!moveFocus.current) return
    moveFocus.current = false
    rootRef.current?.querySelector<HTMLElement>('[data-day][tabindex="0"]')?.focus()
  })

  const onMonthKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!(e.target as HTMLElement).hasAttribute('data-day')) return
    // Right to left mirrors the grid, so the arrows follow what is on screen.
    const ahead = getComputedStyle(e.currentTarget).direction === 'rtl' ? -1 : 1
    const by = ({ ArrowLeft: -ahead, ArrowRight: ahead, ArrowUp: -7, ArrowDown: 7 } as Record<string, number>)[e.key]
    if (!by) return
    e.preventDefault()
    moveFocus.current = true
    setDate(addDays(date, by))
  }

  const eventItem = (event: CalendarEvent, withTime = true, position?: CSSProperties) => {
    const content = (
      <>
        <span className={styles.eventTitle}>{event.title}</span>{' '}
        {withTime && !isAllDayRow(event) && (
          <time dateTime={event.start.toISOString()} className={styles.time}>
            {fmt.time.format(event.start)}
          </time>
        )}
      </>
    )
    const shared = { className: styles.event, style: colorVars(event.color) }
    return (
      <li key={event.id} className={styles.eventSlot} style={position}>
        {event.href ? (
          <a {...shared} href={event.href}>
            {content}
          </a>
        ) : onEventClick ? (
          <button {...shared} type="button" onClick={() => onEventClick(event)}>
            {content}
          </button>
        ) : (
          <span {...shared}>{content}</span>
        )}
      </li>
    )
  }

  const Heading = `h${headingLevel}` as const
  const SubHeading = `h${headingLevel + 1}` as 'h3' | 'h4' | 'h5'

  const month = () => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1)
    const lead = (start.getDay() - first + 7) % 7
    const length = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const gridStart = addDays(start, -lead)
    const weeks = Array.from({ length: Math.ceil((lead + length) / 7) }, (_, w) =>
      Array.from({ length: 7 }, (_, d) => addDays(gridStart, w * 7 + d)),
    )
    // Cut the list short only where "n more" leads to a place that lists them all.
    const limit = views.includes('day') || hasEventList ? PER_CELL : Infinity
    return (
      <table className={styles.month} aria-labelledby={titleId} onKeyDown={onMonthKeyDown}>
        <thead>
          <tr>
            {weeks[0].map((d) => (
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
                const list = on(d)
                // "n more" takes the last line, so it never says "1 more".
                const shown = list.length > limit ? list.slice(0, limit - 1) : list
                const more = list.length - shown.length
                return (
                  <td key={d.getTime()} className={styles.cell} data-outside={d.getMonth() !== date.getMonth() || undefined}>
                    <button
                      type="button"
                      data-day=""
                      tabIndex={isSameDay(d, date) ? 0 : -1}
                      aria-label={
                        fmt.full.format(d) + (list.length ? `, ${list.length} ${list.length === 1 ? 'event' : 'events'}` : '')
                      }
                      aria-pressed={isSameDay(d, date)}
                      aria-current={isSameDay(d, today) ? 'date' : undefined}
                      className={styles.dayNumber}
                      onClick={() => setDate(d)}
                    >
                      {fmt.day.format(d)}
                    </button>
                    {list.length > 0 && (
                      <>
                        {/* A narrow month has no room for titles: dots say there is
                            something, the day's label says how many. */}
                        <span className={styles.dots} aria-hidden="true">
                          {list.slice(0, PER_CELL).map((e) => (
                            <span key={e.id} className={styles.dot} style={colorVars(e.color)} />
                          ))}
                        </span>
                        <ul className={styles.cellEvents}>
                          {shown.map((e) => eventItem(e))}
                          {more > 0 && (
                            <li>
                              <button
                                type="button"
                                className={styles.more}
                                aria-label={`${more} more on ${fmt.full.format(d)}`}
                                onClick={() => openDay(d)}
                              >
                                {more} more
                              </button>
                            </li>
                          )}
                        </ul>
                      </>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  const timeGrid = () => {
    const allDay = days.map((d) => on(d).filter(isAllDayRow))
    return (
      <div className={styles.timeGrid} style={{ '--days': days.length } as CSSProperties}>
        {days.length > 1 && (
          // The columns carry their dates as labels; this row is for the eye.
          <div className={styles.dayHeads} aria-hidden="true">
            {days.map((d) => (
              <div key={d.getTime()} className={styles.dayHead}>
                {fmt.weekday.format(d)}{' '}
                <span className={cn(styles.headNumber, isSameDay(d, today) && styles.today)}>{fmt.day.format(d)}</span>
              </div>
            ))}
          </div>
        )}
        {allDay.some((l) => l.length > 0) && (
          <div className={styles.allDay}>
            <span className={styles.allDayLabel}>All day</span>
            {days.map((d, i) => (
              <ul key={d.getTime()} className={styles.allDayEvents} aria-label={`All day, ${fmt.full.format(d)}`}>
                {allDay[i].map((e) => eventItem(e, false))}
              </ul>
            ))}
          </div>
        )}
        {/* It scrolls, so it takes focus: the hours can be read without a pointer. */}
        <div ref={scrollerRef} className={styles.scroller} tabIndex={0} role="group" aria-label="Schedule">
          <div className={styles.hours} aria-hidden="true">
            {Array.from({ length: 24 }, (_, h) => (
              <span key={h} className={styles.hour}>
                {h > 0 && fmt.hour.format(new Date(2000, 0, 1, h))}
              </span>
            ))}
          </div>
          {days.map((d) => {
            // By the clock, not elapsed time, so an event lines up with its
            // hour's label on a daylight-saving day too.
            const next = addDays(d, 1).getTime()
            const at = (t: number) => {
              if (t <= d.getTime()) return 0
              if (t >= next) return 100
              const c = new Date(t)
              return ((c.getHours() + c.getMinutes() / 60) / 24) * 100
            }
            return (
              <ul key={d.getTime()} className={styles.column} aria-label={fmt.full.format(d)}>
                {layoutDay(on(d).filter((e) => !isAllDayRow(e))).map(({ event, col, cols }) => {
                  const top = at(event.start.getTime())
                  return eventItem(event, true, {
                    insetBlockStart: `${top}%`,
                    blockSize: `${at(blockEnd(event)) - top}%`,
                    insetInlineStart: `${(col / cols) * 100}%`,
                    inlineSize: `${100 / cols}%`,
                  })
                })}
              </ul>
            )
          })}
        </div>
      </div>
    )
  }

  const year = () => (
    <div className={styles.year}>
      {Array.from({ length: 12 }, (_, m) => {
        const start = new Date(date.getFullYear(), m, 1)
        // Bounded to its own month, so its arrows are off (and hidden): the
        // year moves with the header's.
        return (
          <Calendar
            key={m}
            month={start}
            min={start}
            max={new Date(date.getFullYear(), m + 1, 0)}
            value={date.getMonth() === m ? date : null}
            onValueChange={openDay}
            locale={locale}
            weekStartsOn={first}
          />
        )
      })}
    </div>
  )

  const selected = on(date)

  return (
    <div ref={rootRef} className={cn(styles.root, className)} data-view={view} {...props}>
      <div className={styles.header}>
        <Heading id={titleId} className={styles.title} aria-live="polite">
          {title}
        </Heading>
        <div className={styles.nav}>
          <Button variant="secondary" appearance="ghost" isIconOnly aria-label={`Previous ${view}`} onClick={() => step(-1)}>
            <Icon name="chevron-left" className={styles.dirIcon} />
          </Button>
          <Button variant="secondary" appearance="outlined" onClick={() => setDate(today)}>
            Today
          </Button>
          <Button variant="secondary" appearance="ghost" isIconOnly aria-label={`Next ${view}`} onClick={() => step(1)}>
            <Icon name="chevron-right" className={styles.dirIcon} />
          </Button>
        </div>
        {views.length > 1 && (
          <Select
            aria-label="View"
            className={styles.viewSelect}
            options={views.map((v) => ({ value: v, label: VIEW_LABEL[v] }))}
            value={view}
            onValueChange={(v) => v && setView(v as EventCalendarView)}
          />
        )}
        {actions != null && <div className={styles.actions}>{actions}</div>}
      </div>
      {view === 'month' ? month() : view === 'year' ? year() : timeGrid()}
      {hasEventList && view === 'month' && (
        <div className={styles.eventList}>
          <SubHeading className={styles.listTitle}>{fmt.full.format(date)}</SubHeading>
          {selected.length ? (
            <ul className={styles.listEvents}>{selected.map((e) => eventItem(e))}</ul>
          ) : (
            <p className={styles.empty}>No events</p>
          )}
        </div>
      )}
    </div>
  )
}
