import { useId, useState, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Rating.module.css'

export interface RatingProps {
  /** 0 is unrated. Read-only ratings take fractions, e.g. 4.5. */
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  max?: number
  size?: 'sm' | 'md' | 'lg'
  /** Shows a rating rather than asking for one. */
  readOnly?: boolean
  disabled?: boolean
  /** Visible label; the group's name. */
  label?: ReactNode
  /** The name when there is no visible `label`. */
  'aria-label'?: string
  /** Submitted with a form. */
  name?: string
  /** How each value is spoken, e.g. `(n) => `${n} stars``. */
  getValueText?: (value: number, max: number) => string
  className?: string
}

const defaultText = (value: number, max: number) => `${value} out of ${max} stars`

export function Rating({
  value,
  defaultValue = 0,
  onValueChange,
  max = 5,
  size = 'md',
  readOnly = false,
  disabled = false,
  label,
  'aria-label': ariaLabel,
  name,
  getValueText = defaultText,
  className,
}: RatingProps) {
  const id = useId()
  const [state, setState] = useState(defaultValue)
  const current = Math.min(max, Math.max(0, value ?? state))
  const stars = Array.from({ length: max }, (_, i) => i + 1)
  const classes = cn(styles.rating, styles[size], className)

  // Read-only: one image with the value as its name; stars can be partly filled.
  if (readOnly) {
    return (
      <span className={classes}>
        {label && <span className={styles.label}>{label}</span>}
        <span role="img" aria-label={getValueText(current, max)} className={styles.stars}>
          {stars.map((n) => {
            const fill = Math.min(1, Math.max(0, current - (n - 1)))
            return (
              <span key={n} className={styles.star} aria-hidden="true">
                <Icon name="star" className={styles.empty} />
                <span className={styles.fill} style={{ inlineSize: `${fill * 100}%` }}>
                  <Icon name="star-filled" />
                </span>
              </span>
            )
          })}
        </span>
      </span>
    )
  }

  // Interactive: native radios, so arrows, Tab and form submission are the
  // browser's own. Each radio is visually hidden behind its star.
  return (
    <fieldset className={classes} disabled={disabled} aria-label={label ? undefined : ariaLabel}>
      {label && <legend className={styles.label}>{label}</legend>}
      <span className={styles.stars}>
        {stars.map((n) => (
          <label key={n} className={cn(styles.star, n <= current && styles.on)}>
            <input
              type="radio"
              className={styles.input}
              name={name ?? id}
              value={n}
              checked={n === Math.round(current)}
              aria-label={getValueText(n, max)}
              onChange={() => {
                setState(n)
                onValueChange?.(n)
              }}
            />
            <Icon name={n <= current ? 'star-filled' : 'star'} />
          </label>
        ))}
      </span>
    </fieldset>
  )
}
