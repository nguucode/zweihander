import { useMemo, useState, type ReactNode } from 'react'
import { Field } from '@base-ui/react/field'
import { Popover } from '@base-ui/react/popover'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Calendar, isSameDay, startOfDay } from '../data-display/Calendar'
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
    const format = new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' })
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
  const [valueState, setValueState] = useState(defaultValue)
  const date = value !== undefined ? value : valueState
  const [text, setText] = useState(() => (date ? format(date) : ''))
  const [invalid, setInvalid] = useState(false)
  const [open, setOpen] = useState(false)
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
    onValueChange?.(next)
  }
  const commitText = () => {
    const parsed = parse(text)
    if (parsed === undefined || (parsed && !allowed(parsed))) setInvalid(true)
    else if (!isSameDay(parsed, date) || (parsed === null && date !== null)) commit(parsed)
    else setInvalid(false)
  }

  return (
    <InputField
      label={label}
      helperText={invalid ? `Enter a date as ${pattern}${min || max ? ', within the allowed range' : ''}.` : helperText}
      validationState={invalid ? 'error' : validationState}
      required={required}
      disabled={disabled}
      isFullWidth={isFullWidth}
      className={className}
    >
      <span className={boxClass(size, appearance)} onMouseDown={focusControl}>
        <Field.Control
          id={id}
          value={text}
          placeholder={placeholder ?? pattern}
          inputMode="numeric"
          autoComplete="off"
          aria-label={ariaLabel}
          className={inputStyles.control}
          onChange={(e) => {
            setText(e.target.value)
            setInvalid(false)
          }}
          onBlur={commitText}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commitText()
            if (e.key === 'ArrowDown' && e.altKey) setOpen(true)
          }}
        />
        {name && <input type="hidden" name={name} value={date ? iso(date) : ''} />}
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger
            className={inputStyles.iconButton}
            disabled={disabled}
            aria-label={date ? `Choose date, ${format(date)} selected` : 'Choose date'}
          >
            <Icon name="calendar" />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Positioner className={styles.positioner} side="bottom" align="end" sideOffset={6}>
              <Popover.Popup aria-label="Choose date" className={cn(styles.popup)}>
                <Calendar
                  value={date}
                  onValueChange={(d) => {
                    commit(d)
                    setOpen(false)
                  }}
                  min={min}
                  max={max}
                  isDateDisabled={isDateDisabled}
                  locale={locale}
                  weekStartsOn={weekStartsOn}
                  autoFocus
                />
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      </span>
    </InputField>
  )
}
