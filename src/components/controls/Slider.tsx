import type { ReactNode } from 'react'
import { Slider as BaseSlider } from '@base-ui/react/slider'
import { cn } from '@/lib/utils'
import styles from './Slider.module.css'

type Value = number | readonly number[]

export interface SliderProps<V extends Value = number> {
  /** A number for one thumb; an array of two for a range. */
  value?: V
  defaultValue?: V
  /** While dragging. */
  onValueChange?: (value: V) => void
  /** Once, when the pointer is released or a key is let go. Use it for anything expensive. */
  onValueCommitted?: (value: V) => void
  min?: number
  max?: number
  step?: number
  /** Page Up / Page Down and Shift+arrow step. */
  largeStep?: number
  /** Visible label; also the accessible name of a single thumb. */
  label?: ReactNode
  /** Show the current value (or range) after the label. */
  showValue?: boolean
  /** How the value is written, e.g. `{ style: 'currency', currency: 'USD' }`. */
  format?: Intl.NumberFormatOptions
  /** One name per thumb for a range, e.g. `['Minimum price', 'Maximum price']`. */
  thumbLabels?: string[]
  size?: 'sm' | 'md'
  orientation?: 'horizontal' | 'vertical'
  disabled?: boolean
  name?: string
  /** The accessible name when there is no visible `label`. */
  'aria-label'?: string
  className?: string
}

export function Slider<V extends Value = number>({
  value,
  defaultValue,
  onValueChange,
  onValueCommitted,
  min = 0,
  max = 100,
  step = 1,
  largeStep,
  label,
  showValue = false,
  format,
  thumbLabels,
  size = 'md',
  orientation = 'horizontal',
  disabled = false,
  name,
  'aria-label': ariaLabel,
  className,
}: SliderProps<V>) {
  const current = value ?? defaultValue ?? (min as V)
  const thumbs = Array.isArray(current) ? current.length : 1
  return (
    <BaseSlider.Root
      value={value as number | number[] | undefined}
      defaultValue={defaultValue as number | number[] | undefined}
      onValueChange={onValueChange && ((v) => onValueChange(v as V))}
      onValueCommitted={onValueCommitted && ((v) => onValueCommitted(v as V))}
      min={min}
      max={max}
      step={step}
      largeStep={largeStep}
      format={format}
      orientation={orientation}
      disabled={disabled}
      name={name}
      thumbAlignment="edge"
      className={cn(styles.slider, styles[size], styles[orientation], className)}
    >
      {(label || showValue) && (
        <div className={styles.header}>
          {label && <BaseSlider.Label className={styles.label}>{label}</BaseSlider.Label>}
          {showValue && (
            <BaseSlider.Value className={styles.value}>
              {(formatted) => formatted.join(' – ')}
            </BaseSlider.Value>
          )}
        </div>
      )}
      <BaseSlider.Control className={styles.control}>
        <BaseSlider.Track className={styles.track}>
          <BaseSlider.Indicator className={styles.indicator} />
          {Array.from({ length: thumbs }, (_, i) => (
            <BaseSlider.Thumb
              key={i}
              index={i}
              className={styles.thumb}
              // A range needs a name per thumb; a single thumb takes the
              // label, or aria-label when there is none.
              getAriaLabel={thumbLabels ? (index) => thumbLabels[index] ?? '' : label ? undefined : () => ariaLabel ?? ''}
            />
          ))}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  )
}
