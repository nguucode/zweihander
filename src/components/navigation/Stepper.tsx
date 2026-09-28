import type { ComponentProps, ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Stepper.module.css'

export interface StepperStep {
  label: ReactNode
  description?: ReactNode
  /** Override the status worked out from `current`, e.g. to flag a step with an error. */
  status?: 'complete' | 'current' | 'upcoming' | 'error'
}

export interface StepperProps extends Omit<ComponentProps<'nav'>, 'children'> {
  steps: StepperStep[]
  /** 0-based index of the step the reader is on. Steps before it are complete. */
  current: number
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md'
  /**
   * Makes finished steps (and the current one) buttons that go back to
   * them. Upcoming steps stay plain: they cannot be skipped to.
   */
  onStepClick?: (index: number) => void
  /** The nav landmark's name. */
  'aria-label'?: string
}

const statusText = { complete: 'completed', current: 'current', upcoming: 'not started', error: 'has an error' }

export function Stepper({
  steps,
  current,
  orientation = 'horizontal',
  size = 'md',
  onStepClick,
  'aria-label': ariaLabel = 'Progress',
  className,
  ...props
}: StepperProps) {
  return (
    <nav aria-label={ariaLabel} className={cn(styles.stepper, styles[orientation], styles[size], className)} {...props}>
      <ol className={styles.list}>
        {steps.map((step, i) => {
          const status = step.status ?? (i < current ? 'complete' : i === current ? 'current' : 'upcoming')
          const clickable = onStepClick !== undefined && status !== 'upcoming'
          const marker = (
            <span className={styles.marker} aria-hidden="true">
              {status === 'complete' ? <Icon name="check" /> : status === 'error' ? <Icon name="danger" /> : i + 1}
            </span>
          )
          const text = (
            <span className={styles.text}>
              <span className={styles.label}>
                {step.label}
                {/* Said, not shown: the marker carries it visually. */}
                <span className={styles.srOnly}>, {statusText[status]}</span>
              </span>
              {step.description && <span className={styles.description}>{step.description}</span>}
            </span>
          )
          return (
            <li
              key={i}
              className={cn(styles.step, styles[status])}
              aria-current={status === 'current' ? 'step' : undefined}
            >
              {clickable ? (
                <button type="button" className={styles.target} onClick={() => onStepClick(i)}>
                  {marker}
                  {text}
                </button>
              ) : (
                <span className={styles.target}>
                  {marker}
                  {text}
                </span>
              )}
              {i < steps.length - 1 && <span className={styles.connector} aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
