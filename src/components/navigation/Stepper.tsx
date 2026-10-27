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
  /** Ignored with `appearance="bullets"`, which is always one row. */
  orientation?: 'horizontal' | 'vertical'
  /**
   * `circles` shows every step's marker and label. `bullets` shows only
   * the current step's label ("Step 2 of 4: Workspace") over a row of
   * dots, for a narrow space or a longer flow.
   */
  appearance?: 'circles' | 'bullets'
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
  appearance = 'circles',
  size = 'md',
  onStepClick,
  'aria-label': ariaLabel = 'Progress',
  className,
  ...props
}: StepperProps) {
  const bullets = appearance === 'bullets'
  const currentStep = steps[current]
  return (
    <nav
      aria-label={ariaLabel}
      className={cn(styles.stepper, bullets ? styles.bullets : styles[orientation], styles[size], className)}
      {...props}
    >
      {/* Hidden from screen readers: the list already says each step's position and status. */}
      {bullets && currentStep && (
        <p className={styles.summary} aria-hidden="true">
          <span className={styles.count}>
            Step {current + 1} of {steps.length}:
          </span>{' '}
          <span className={styles.label}>{currentStep.label}</span>
        </p>
      )}
      <ol className={styles.list}>
        {steps.map((step, i) => {
          const status = step.status ?? (i < current ? 'complete' : i === current ? 'current' : 'upcoming')
          const clickable = onStepClick !== undefined && status !== 'upcoming'
          const marker = (
            <span className={styles.marker} aria-hidden="true">
              {bullets ? null : status === 'complete' ? <Icon name="check" /> : status === 'error' ? <Icon name="danger" /> : i + 1}
            </span>
          )
          // Bullets show only the dot: the label and status are said, not shown.
          const text = (
            <span className={cn(styles.text, bullets && styles.srOnly)}>
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
              // An error on the current step does not stop it being where the reader is.
              aria-current={status === 'current' || i === current ? 'step' : undefined}
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
              {!bullets && i < steps.length - 1 && <span className={styles.connector} aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
