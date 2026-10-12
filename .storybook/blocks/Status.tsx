import { Tag, type TagVariant } from '@/components/atomic-elements/Tag'

const VARIANTS: Record<string, TagVariant> = { stable: 'success', beta: 'info', experimental: 'warning', deprecated: 'danger' }

/**
 * The component's status, read from its stories' `meta.tags`, so the page
 * cannot disagree with the sidebar filter. In MDX: `<Status of={Stories} />`
 * with the stories module. No status tag shows nothing.
 */
export function Status({ of }: { of: { default: { tags?: string[] } } }) {
  const status = of.default.tags?.find((tag) => tag in VARIANTS)
  if (!status) return null
  return <Tag text={status[0].toUpperCase() + status.slice(1)} variant={VARIANTS[status]} size="sm" />
}
