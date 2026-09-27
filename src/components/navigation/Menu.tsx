import type { ReactElement, ReactNode } from 'react'
import { Menu as BaseMenu } from '@base-ui/react/menu'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Menu.module.css'

interface ItemBase {
  label: ReactNode
  /** Used for typeahead when `label` is not plain text. */
  textValue?: string
  icon?: ReactNode
  disabled?: boolean
}

/** An action, a link (`href`), or a submenu (`items`). */
export interface MenuActionItem extends ItemBase {
  type?: 'item'
  onSelect?: () => void
  href?: string
  /** Shown right-aligned, e.g. "⌘ D". Display only: it does not bind the key. */
  shortcut?: string
  /** Deletes or removes something: drawn in the danger colour. */
  isDestructive?: boolean
  /** Opens a submenu instead of acting. */
  items?: MenuEntry[]
}
export interface MenuCheckboxItem extends ItemBase {
  type: 'checkbox'
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}
export interface MenuRadioGroupItem {
  type: 'radio'
  label?: ReactNode
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  options: { value: string; label: ReactNode; disabled?: boolean }[]
}
export interface MenuGroupItem {
  type: 'group'
  label: ReactNode
  items: MenuEntry[]
}
export interface MenuSeparator {
  type: 'separator'
}
export type MenuEntry = MenuActionItem | MenuCheckboxItem | MenuRadioGroupItem | MenuGroupItem | MenuSeparator

export interface MenuProps {
  /** The button that opens it. Its props are merged, not wrapped. */
  trigger: ReactElement
  items: MenuEntry[]
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
}

const text = (label: ReactNode, textValue?: string) => textValue ?? (typeof label === 'string' ? label : undefined)

function Entries({ items }: { items: MenuEntry[] }) {
  return items.map((entry, i) => {
    switch (entry.type) {
      case 'separator':
        return <BaseMenu.Separator key={i} className={styles.separator} />
      case 'group':
        return (
          <BaseMenu.Group key={i} className={styles.group}>
            <BaseMenu.GroupLabel className={styles.groupLabel}>{entry.label}</BaseMenu.GroupLabel>
            <Entries items={entry.items} />
          </BaseMenu.Group>
        )
      case 'checkbox':
        return (
          <BaseMenu.CheckboxItem
            key={i}
            label={text(entry.label, entry.textValue)}
            checked={entry.checked}
            defaultChecked={entry.defaultChecked}
            onCheckedChange={entry.onCheckedChange && ((c) => entry.onCheckedChange!(c))}
            disabled={entry.disabled}
            closeOnClick={false}
            className={styles.item}
          >
            <span className={styles.indicator}>
              <BaseMenu.CheckboxItemIndicator>
                <Icon name="check" />
              </BaseMenu.CheckboxItemIndicator>
            </span>
            <span className={styles.label}>{entry.label}</span>
          </BaseMenu.CheckboxItem>
        )
      case 'radio':
        return (
          <BaseMenu.Group key={i} className={styles.group}>
            {entry.label && <BaseMenu.GroupLabel className={styles.groupLabel}>{entry.label}</BaseMenu.GroupLabel>}
            <BaseMenu.RadioGroup
              value={entry.value}
              defaultValue={entry.defaultValue}
              onValueChange={entry.onValueChange && ((v) => entry.onValueChange!(v as string))}
            >
              {entry.options.map((o) => (
                <BaseMenu.RadioItem
                  key={o.value}
                  value={o.value}
                  label={text(o.label)}
                  disabled={o.disabled}
                  closeOnClick={false}
                  className={styles.item}
                >
                  <span className={styles.indicator}>
                    <BaseMenu.RadioItemIndicator className={styles.dot} />
                  </span>
                  <span className={styles.label}>{o.label}</span>
                </BaseMenu.RadioItem>
              ))}
            </BaseMenu.RadioGroup>
          </BaseMenu.Group>
        )
      default: {
        const content = (
          <>
            {entry.icon && (
              <span className={styles.icon} aria-hidden="true">
                {entry.icon}
              </span>
            )}
            <span className={styles.label}>{entry.label}</span>
            {entry.shortcut && (
              <kbd className={styles.shortcut} aria-hidden="true">
                {entry.shortcut}
              </kbd>
            )}
          </>
        )
        const className = cn(styles.item, entry.isDestructive && styles.destructive)
        if (entry.items) {
          return (
            <BaseMenu.SubmenuRoot key={i}>
              <BaseMenu.SubmenuTrigger label={text(entry.label, entry.textValue)} disabled={entry.disabled} className={className}>
                {content}
                <span className={styles.chevron} aria-hidden="true">
                  <Icon name="chevron-right" />
                </span>
              </BaseMenu.SubmenuTrigger>
              <Surface side="right" align="start" sideOffset={-4}>
                <Entries items={entry.items} />
              </Surface>
            </BaseMenu.SubmenuRoot>
          )
        }
        // A disabled link is an inert item: Base UI's LinkItem has no disabled state.
        if (entry.href !== undefined && !entry.disabled) {
          return (
            <BaseMenu.LinkItem key={i} href={entry.href} label={text(entry.label, entry.textValue)} className={className}>
              {content}
            </BaseMenu.LinkItem>
          )
        }
        return (
          <BaseMenu.Item
            key={i}
            label={text(entry.label, entry.textValue)}
            disabled={entry.disabled}
            onClick={entry.onSelect && (() => entry.onSelect!())}
            className={className}
          >
            {content}
          </BaseMenu.Item>
        )
      }
    }
  })
}

function Surface({
  side,
  align,
  sideOffset,
  className,
  children,
}: {
  side: MenuProps['side']
  align: MenuProps['align']
  sideOffset: number
  className?: string
  children: ReactNode
}) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner className={styles.positioner} side={side} align={align} sideOffset={sideOffset}>
        <BaseMenu.Popup className={cn(styles.popup, className)}>{children}</BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}

export function Menu({
  trigger,
  items,
  side = 'bottom',
  align = 'start',
  open,
  defaultOpen,
  onOpenChange,
  className,
}: MenuProps) {
  return (
    <BaseMenu.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange && ((next) => onOpenChange(next))}>
      <BaseMenu.Trigger render={trigger} />
      <Surface side={side} align={align} sideOffset={4} className={className}>
        <Entries items={items} />
      </Surface>
    </BaseMenu.Root>
  )
}
