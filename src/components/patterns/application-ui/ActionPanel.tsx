'use client'

import { useId, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Card, type CardProps } from '../../data-display/Card'
import styles from './ActionPanel.module.css'

export interface ActionPanelProps extends Omit<CardProps, 'title' | 'onClick' | 'render' | 'orientation'> {
  title: ReactNode
  description?: ReactNode
  action: ReactNode
  actionPlacement?: 'below' | 'end'
  variant?: 'default' | 'danger'
  headingLevel?: 2 | 3 | 4
}

/**
 * A card that offers one action: what it is, what it does, and the control
 * that does it. The panel is a group named by its title and described by
 * its description, so the control is announced with that context.
 */
export function ActionPanel({
  title,
  description,
  action,
  actionPlacement = 'below',
  variant = 'default',
  headingLevel = 2,
  className,
  ...props
}: ActionPanelProps) {
  const id = useId()
  const Heading = `h${headingLevel}` as const
  return (
    <Card
      role="group"
      aria-labelledby={`${id}title`}
      aria-describedby={description ? `${id}description` : undefined}
      className={cn(styles.actionPanel, styles[actionPlacement], variant === 'danger' && styles.danger, className)}
      {...props}
    >
      <div className={styles.text}>
        <Heading id={`${id}title`} className={styles.title}>
          {title}
        </Heading>
        {description && (
          <div id={`${id}description`} className={styles.description}>
            {description}
          </div>
        )}
      </div>
      <div className={styles.action}>{action}</div>
    </Card>
  )
}
