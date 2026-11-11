import type { ReactNode } from 'react'
import { Tag, type TagVariant } from '@/components/atomic-elements/Tag'
import { Card } from '@/components/data-display/Card'
import { CardHeading } from '@/components/patterns/application-ui/CardHeading'

export type Tone = 'danger' | 'warning' | 'success' | 'neutral' | 'info'
const tagVariant: Record<Tone, TagVariant> = { danger: 'danger', warning: 'warning', success: 'success', neutral: 'neutral', info: 'info' }

export const Pill = ({ tone = 'neutral', text, dot }: { tone?: Tone; text: string; dot?: boolean }) => (
  <Tag variant={tagVariant[tone]} text={text} startIcon={dot ? <span className="dot" /> : undefined} />
)

/** A titled outline card: the block every screen is built from. */
export function Panel({ title, icon, description, actions, children, className }: {
  title: ReactNode
  icon?: ReactNode
  description?: ReactNode
  actions?: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <Card appearance="outline" className={`panel ${className ?? ''}`}>
      <CardHeading
        headingLevel={2}
        title={icon ? <span className="with-icon">{icon}{title}</span> : title}
        description={description}
        actions={actions}
      />
      {children}
    </Card>
  )
}

export function PageHeader({ title, description, breadcrumb, actions, children }: {
  title: ReactNode
  description?: ReactNode
  breadcrumb?: ReactNode
  actions?: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="page-header">
      <div className="page-heading">
        {breadcrumb && <div className="breadcrumb">{breadcrumb}</div>}
        <h1>{title}</h1>
        {description && <div className="page-description">{description}</div>}
        {children}
      </div>
      {actions && <div className="page-actions">{actions}</div>}
    </header>
  )
}
