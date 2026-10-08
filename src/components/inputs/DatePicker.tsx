import { useMemo, useRef, useState, type ReactNode } from 'react'
import { Field } from '@base-ui/react/field'
import { Popover } from '@base-ui/react/popover'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import {
  Calendar,
  addDays,
  addMonths,
  firstDayOfWeek,
  isSameDay,
  startOfDay,
  type DateRange,
} from '../data-display/Calendar'
import {
  InputField,
  boxClass,
  focusControl,
  inputStyles,
  type InputAppearance,
  type InputSize,
  type ValidationState,
} from './InputField'
import styles from './DatePicker.module.css'

export interface DatePickerProps {
  value?: Date | null
  defaultValue?: Date | null
  /** `null` when the field is cleared. Not called while the typed text is not a date yet. */
  onValueChange?: (date: Date | null) => void
  label?: ReactNode
  /** Under the field. Replaced by a format hint while the typed text is not a valid date. */
  helperText?: ReactNode
  validationState?: ValidationState
  size?: InputSize
  appearance?: InputAppearance
  min?: Date | null
  max?: Date | null
  isDateDisabled?: (date: Date) => boolean
  /** BCP 47 tag; decides the typed order (day/month/year) and the calendar's. */
  locale?: string
  weekStartsOn?: number
  /** Defaults to the locale's pattern, e.g. "dd/mm/yyyy". */
  placeholder?: string
  isFullWidth?: boolean
  /** Submitted as `yyyy-mm-dd`, whatever the display format. */
  name?: string
  disabled?: boolean
  required?: boolean
  id?: string
  className?: string
  'aria-label'?: string
}

const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

/** The locale's numeric date format, its field order and a placeholder pattern. */
function useDateFormat(locale?: string) {
  return useMemo(() => {
    // Gregorian and Western digits whatever the locale's defaults: the grid is
    // Gregorian, and the parser reads ASCII digits. Without this, th-TH shows
    // the Buddhist year (2569) and fa-IR Persian digits, and neither reads back.
    const format = new Intl.DateTimeFormat(locale, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      calendar: 'gregory',
      numberingSystem: 'latn',
    })
    const parts = format.formatToParts(new Date(2026, 10, 22))
    const order = parts.filter((p) => p.type === 'day' || p.type === 'month' || p.type === 'year').map((p) => p.type)
    const pattern = parts
      .map((p) => (p.type === 'day' ? 'dd' : p.type === 'month' ? 'mm' : p.type === 'year' ? 'yyyy' : p.value))
      .join('')
    /** Reads the three numbers in the locale's order; any separator will do. */
    const parse = (text: string): Date | null | undefined => {
      const nums = text.match(/\d+/g)
      if (!text.trim()) return null
      if (!nums || nums.length !== 3) return undefined
      const v: Record<string, number> = {}
      order.forEach((type, i) => (v[type] = Number(nums[i])))
      const year = v.year < 100 ? 2000 + v.year : v.year
      const d = new Date(year, v.month - 1, v.day)
      // Rejects 31/02 and the like, which Date would roll into March.
      return d.getFullYear() === year && d.getMonth() === v.month - 1 && d.getDate() === v.day ? d : undefined
    }
    return { format: (d: Date) => format.format(d), parse, pattern }
  }, [locale])
}

interface PickerFieldProps {
  text: string
  onTextChange: (text: string) => void
  /** Reads the typed text, on blur and Enter. */
  onCommit: () => void
  /** Before the popover opens: show the value's month, reset a half-picked range. */
  onShow: () => void
  triggerLabel: string
  popupLabel: string
  popupClassName?: string
  /** The hidden input that submits the value. */
  hidden?: ReactNode
  children: (popup: { autoFocus: boolean; close: () => void }) => ReactNode
  label?: ReactNode
  helperText?: ReactNode
  validationState?: ValidationState
  size: InputSize
  appearance: InputAppearance
  placeholder: string
  isFullWidth?: boolean
  disabled?: boolean
  required?: boolean
  id?: string
  className?: string
  'aria-label'?: string
}

/**
 * The typed field and its calendar popover, shared by both pickers. The
 * calendar button and Alt+Down open it with focus on the calendar; a click
 * in the input opens it too, but leaves focus there so typing carries on.
 */
function PickerField({
  text,
  onTextChange,
  onCommit,
  onShow,
  triggerLabel,
  popupLabel,
  popupClassName,
  hidden,
  children,
  label,
  helperText,
  validationState,
  size,
  appearance,
  placeholder,
  isFullWidth,
  disabled,
  required,
  id,
  className,
  'aria-label': ariaLabel,
}: PickerFieldProps) {
  const [open, setOpen] = useState(false)
  const [fromInput, setFromInput] = useState(false)
  const boxRef = useRef<HTMLSpanElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  // Whether the last press in the popup was the pointer's. A pointer pick
  // sends the field back to rest (no caret, no ring); a keyboard pick or
  // Escape returns focus to where it came from, so keyboard users stay put.
  const [byPointer, setByPointer] = useState(false)
  const show = (byInput: boolean) => {
    onShow()
    setByPointer(false)
    setFromInput(byInput)
    setOpen(true)
  }
  /** After a pick. */
  const close = () => {
    setOpen(false)
    // Opened from the input, focus never left it (the only other holder is
    // the picked day, on its way out). After the render, so the input's
    // blur commit reads the picked text.
    if (byPointer) setTimeout(() => (document.activeElement as HTMLElement | null)?.blur())
  }

  return (
    <InputField
      label={label}
      helperText={helperText}
      validationState={validationState}
      required={required}
      disabled={disabled}
      isFullWidth={isFullWidth}
      className={className}
    >
      <span ref={boxRef} className={boxClass(size, appearance)} onMouseDown={focusControl}>
        <Field.Control
          ref={inputRef}
          id={id}
          value={text}
          placeholder={placeholder}
          inputMode="numeric"
          autoComplete="off"
          aria-label={ariaLabel}
          required={required}
          className={inputStyles.control}
          onChange={(e) => onTextChange(e.target.value)}
          onBlur={onCommit}
          onClick={() => !open && show(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onCommit()
            if (e.key === 'ArrowDown' && e.altKey) show(false)
          }}
        />
        {hidden}
        <Popover.Root
          open={open}
          onOpenChange={(next, details) => {
            if (next) return show(false)
            // A press in the field is not outside: the calendar stays open while typing.
            if (details.reason === 'outside-press' && boxRef.current?.contains(details.event.target as Node)) return
            setOpen(false)
          }}
        >
          <Popover.Trigger className={inputStyles.iconButton} disabled={disabled} aria-label={triggerLabel}>
            <Icon name="calendar" />
          </Popover.Trigger>
          <Popover.Portal>
            {/* Under the whole field, start-aligned and 4px clear of it; not the
                calendar button, which sits inside the box. */}
            <Popover.Positioner
              className={styles.positioner}
              anchor={boxRef}
              side="bottom"
              align="start"
              sideOffset={4}
            >
              <Popover.Popup
                aria-label={popupLabel}
                className={cn(styles.popup, popupClassName)}
                initialFocus={!fromInput}
                finalFocus={byPointer ? false : fromInput ? inputRef : true}
                onPointerDownCapture={() => setByPointer(true)}
                onKeyDownCapture={() => setByPointer(false)}
              >
                {children({ autoFocus: !fromInput, close })}
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      </span>
    </InputField>
  )
}

export function DatePicker({
  value,
  defaultValue = null,
  onValueChange,
  label,
  helperText,
  validationState,
  size = 'md',
  appearance = 'outlined',
  min,
  max,
  isDateDisabled,
  locale,
  weekStartsOn,
  placeholder,
  isFullWidth,
  name,
  disabled,
  required,
  id,
  className,
  'aria-label': ariaLabel,
}: DatePickerProps) {
  const { format, parse, pattern } = useDateFormat(locale)
  const today = startOfDay(new Date())
  const [valueState, setValueState] = useState(defaultValue)
  const date = value !== undefined ? value : valueState
  const [text, setText] = useState(() => (date ? format(date) : ''))
  const [invalid, setInvalid] = useState(false)
  const [month, setMonth] = useState(() => date ?? today)
  // Follow a controlled value that changes from outside.
  const [shown, setShown] = useState(date)
  if (!isSameDay(shown, date) && !(shown === null && date === null)) {
    setShown(date)
    setText(date ? format(date) : '')
    setInvalid(false)
  }

  const allowed = (d: Date) =>
    !(min && d < startOfDay(min)) && !(max && d > startOfDay(max)) && !(isDateDisabled?.(d) ?? false)
  const commit = (next: Date | null) => {
    setValueState(next)
    setShown(next)
    setText(next ? format(next) : '')
    setInvalid(false)
    if (next) setMonth(next)
    onValueChange?.(next)
  }
  const commitText = () => {
    const parsed = parse(text)
    if (parsed === undefined || (parsed && !allowed(parsed))) setInvalid(true)
    else if (parsed === null ? date !== null : !isSameDay(parsed, date)) commit(parsed)
    else setInvalid(false)
  }

  return (
    <PickerField
      text={text}
      onTextChange={(t) => {
        setText(t)
        setInvalid(false)
      }}
      onCommit={commitText}
      onShow={() => setMonth(date ?? today)}
      triggerLabel={date ? `Choose date, ${format(date)} selected` : 'Choose date'}
      popupLabel="Choose date"
      hidden={name && <input type="hidden" name={name} value={date ? iso(date) : ''} />}
      label={label}
      helperText={invalid ? `Enter a date as ${pattern}${min || max ? ', within the allowed range' : ''}.` : helperText}
      validationState={invalid ? 'error' : validationState}
      size={size}
      appearance={appearance}
      placeholder={placeholder ?? pattern}
      isFullWidth={isFullWidth}
      disabled={disabled}
      required={required}
      id={id}
      className={className}
      aria-label={ariaLabel}
    >
      {({ autoFocus, close }) => (
        <Calendar
          value={date}
          month={month}
          onMonthChange={setMonth}
          onValueChange={(d) => {
            commit(d)
            close()
          }}
          min={min}
          max={max}
          isDateDisabled={isDateDisabled}
          locale={locale}
          weekStartsOn={weekStartsOn}
          autoFocus={autoFocus}
          className={styles.body}
        />
      )}
    </PickerField>
  )
}

/* ------------------------------------------------------------ range */

export interface DateRangePreset {
  label: string
  start: Date
  end: Date
}

/** The built-in presets, whole periods around today: Today … Last year. */
export function rangePresets(weekStartsOn: number, today = startOfDay(new Date())): DateRangePreset[] {
  const week = addDays(today, -((today.getDay() - weekStartsOn + 7) % 7))
  const y = today.getFullYear()
  const m = today.getMonth()
  return [
    { label: 'Today', start: today, end: today },
    { label: 'Yesterday', start: addDays(today, -1), end: addDays(today, -1) },
    { label: 'This week', start: week, end: addDays(week, 6) },
    { label: 'Last week', start: addDays(week, -7), end: addDays(week, -1) },
    { label: 'This month', start: new Date(y, m, 1), end: new Date(y, m + 1, 0) },
    { label: 'Last month', start: new Date(y, m - 1, 1), end: new Date(y, m, 0) },
    { label: 'This year', start: new Date(y, 0, 1), end: new Date(y, 11, 31) },
    { label: 'Last year', start: new Date(y - 1, 0, 1), end: new Date(y - 1, 11, 31) },
  ]
}

export interface DateRangePickerProps extends Omit<DatePickerProps, 'value' | 'defaultValue' | 'onValueChange' | 'name'> {
  /** Both ends set, or `null`. */
  value?: DateRange | null
  defaultValue?: DateRange | null
  onValueChange?: (range: DateRange | null) => void
  /** A list beside the calendars: `true` for the built-in one (Today … Last year), or your own. */
  presets?: boolean | DateRangePreset[]
  /** Submitted as `yyyy-mm-dd/yyyy-mm-dd`, an ISO 8601 interval. */
  name?: string
}

const NO_RANGE: DateRange = { start: null, end: null }
const monthIndex = (d: Date) => d.getFullYear() * 12 + d.getMonth()
/** The range's first month on the left, its last on the right; the next month when it spans one. */
const monthsFor = (r: DateRange | null, today: Date): [Date, Date] => {
  const left = r?.start ?? today
  const right = r?.end && monthIndex(r.end) > monthIndex(left) ? r.end : addMonths(left, 1)
  return [left, right]
}
/** The two days as a range, earlier first. */
const ordered = (a: Date | null, b: Date | null): DateRange => (a && b && b < a ? { start: b, end: a } : { start: a, end: b })
const sameRange = (a: DateRange | null, b: DateRange | null) =>
  a === b || (!!a && !!b && isSameDay(a.start, b.start) && isSameDay(a.end, b.end))

export function DateRangePicker({
  value,
  defaultValue = null,
  onValueChange,
  label,
  helperText,
  validationState,
  size = 'md',
  appearance = 'outlined',
  min,
  max,
  isDateDisabled,
  locale,
  weekStartsOn,
  placeholder,
  presets = false,
  isFullWidth,
  name,
  disabled,
  required,
  id,
  className,
  'aria-label': ariaLabel,
}: DateRangePickerProps) {
  const { format, parse, pattern } = useDateFormat(locale)
  const today = startOfDay(new Date())
  const [valueState, setValueState] = useState(defaultValue)
  const range = value !== undefined ? value : valueState
  const show = (r: DateRange | null) => (r?.start && r.end ? `${format(r.start)} – ${format(r.end)}` : '')
  const [text, setText] = useState(() => show(range))
  const [invalid, setInvalid] = useState(false)
  const [draft, setDraft] = useState<DateRange>(range ?? NO_RANGE)
  // The two calendars page on their own; the left one always shows the
  // earlier month. Moving one past the other pushes the other along.
  const [months, setMonths] = useState(() => monthsFor(range, today))
  const [shown, setShown] = useState(range)
  if (!sameRange(shown, range)) {
    setShown(range)
    setText(show(range))
    setInvalid(false)
  }

  const presetList = presets === true ? rangePresets(weekStartsOn ?? firstDayOfWeek(locale), today) : presets || []
  const allowed = (d: Date) =>
    !(min && d < startOfDay(min)) && !(max && d > startOfDay(max)) && !(isDateDisabled?.(d) ?? false)
  const commit = (next: DateRange | null) => {
    setValueState(next)
    setShown(next)
    setText(show(next))
    setInvalid(false)
    onValueChange?.(next)
  }
  /** Two dates, each in the locale's order: six numbers, any separators. */
  const commitText = () => {
    const nums = text.match(/\d+/g)
    let parsed: DateRange | null | undefined = null
    if (text.trim()) {
      const a = nums?.length === 6 ? parse(nums.slice(0, 3).join(' ')) : undefined
      const b = nums?.length === 6 ? parse(nums.slice(3).join(' ')) : undefined
      parsed = a && b && allowed(a) && allowed(b) ? ordered(a, b) : undefined
    }
    if (parsed === undefined) setInvalid(true)
    else if (!sameRange(parsed, range)) commit(parsed)
    else setText(show(range))
  }

  return (
    <PickerField
      text={text}
      onTextChange={(t) => {
        setText(t)
        setInvalid(false)
      }}
      onCommit={commitText}
      onShow={() => {
        setDraft(range ?? NO_RANGE)
        setMonths(monthsFor(range, today))
      }}
      triggerLabel={range ? `Choose dates, ${show(range)} selected` : 'Choose dates'}
      popupLabel="Choose dates"
      popupClassName={styles.rangePopup}
      hidden={
        name && <input type="hidden" name={name} value={range?.start && range.end ? `${iso(range.start)}/${iso(range.end)}` : ''} />
      }
      label={label}
      helperText={
        invalid ? `Enter two dates as ${pattern} – ${pattern}${min || max ? ', within the allowed range' : ''}.` : helperText
      }
      validationState={invalid ? 'error' : validationState}
      size={size}
      appearance={appearance}
      placeholder={placeholder ?? `${pattern} – ${pattern}`}
      isFullWidth={isFullWidth}
      disabled={disabled}
      required={required}
      id={id}
      className={className}
      aria-label={ariaLabel}
    >
      {({ autoFocus, close }) => {
        // A range applies as soon as both ends are in.
        const choose = (r: DateRange) => {
          setDraft(r)
          if (!r.start || !r.end) return
          if (!sameRange(r, range)) commit(r)
          close()
        }
        // The first click starts a range, the second ends it, either way round.
        const pick = (d: Date) => choose(!draft.start || draft.end ? { start: d, end: null } : ordered(draft.start, d))
        const calendar = { range: draft, onValueChange: pick, min, max, isDateDisabled, locale, weekStartsOn }
        return (
          <>
            {presetList.length > 0 && (
              <div role="group" aria-label="Presets" className={styles.presets}>
                {presetList.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    aria-pressed={isSameDay(p.start, draft.start) && isSameDay(p.end, draft.end)}
                    className={styles.preset}
                    onClick={() => {
                      setMonths(monthsFor(p, today))
                      choose({ start: p.start, end: p.end })
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            )}
            <div className={styles.months}>
              <Calendar
                {...calendar}
                month={months[0]}
                onMonthChange={(m) => setMonths(([, right]) => [m, monthIndex(m) < monthIndex(right) ? right : addMonths(m, 1)])}
                autoFocus={autoFocus}
                className={styles.body}
              />
              {/* Hidden on a narrow screen, where one month fits. */}
              <Calendar
                {...calendar}
                month={months[1]}
                onMonthChange={(m) => setMonths(([left]) => [monthIndex(left) < monthIndex(m) ? left : addMonths(m, -1), m])}
                className={cn(styles.body, styles.second)}
              />
            </div>
          </>
        )
      }}
    </PickerField>
  )
}
