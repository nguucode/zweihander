'use client'

import { useEffect, useId, useRef, useState, type ReactElement, type ReactNode } from 'react'
import { Autocomplete } from '@base-ui/react/autocomplete'
import { Dialog } from '@base-ui/react/dialog'
import { Kbd } from '../atomic-elements/Kbd'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './CommandPalette.module.css'

/** A command or an object: what is typed is matched against `label` and `keywords`. */
export interface CommandPaletteItem {
  value: string
  label: string
  icon?: ReactNode
  /** More words that find it: "bill" for "New invoice". Not shown. */
  keywords?: string[]
  /** Shown right-aligned, one key cap per key: `['⌘', 'N']`. Display only: it does not bind the key. */
  shortcut?: string[]
  disabled?: boolean
  /** Runs when the item is chosen, once the palette has closed and given focus back. */
  onSelect?: () => void
}

/** A titled run of items: Recent, Commands, Customers. A group with no match is left out. */
export interface CommandPaletteGroup {
  label: string
  items: CommandPaletteItem[]
}

export interface CommandPaletteProps {
  groups: CommandPaletteGroup[]
  /** The button that opens it, e.g. a search field in the sidebar. */
  trigger?: ReactElement
  /**
   * The letter that toggles it with ⌘ or Ctrl, anywhere on the page.
   * `false` binds nothing: only one palette on a page should own the key.
   */
  hotkey?: string | false
  /** Called with the chosen item, after its own `onSelect`. */
  onSelect?: (item: CommandPaletteItem) => void
  placeholder?: string
  /** Names the search input. */
  inputLabel?: string
  /** Shown when nothing matches. */
  emptyText?: string
  /** Names the dialog. */
  label?: string
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Trap focus, lock page scroll and make the page inert while open. `false` is for pictures of it. */
  isModal?: boolean
  /** Where it renders instead of `<body>`. */
  container?: HTMLElement | null
  className?: string
}

export function CommandPalette({
  groups,
  trigger,
  hotkey = 'k',
  onSelect,
  placeholder = 'Search commands…',
  inputLabel = 'Search commands',
  emptyText = 'No results',
  label = 'Command palette',
  open,
  defaultOpen = false,
  onOpenChange,
  isModal = true,
  container,
  className,
}: CommandPaletteProps) {
  const [ownOpen, setOwnOpen] = useState(defaultOpen)
  const isOpen = open ?? ownOpen
  const setOpen = (next: boolean) => {
    if (open === undefined) setOwnOpen(next)
    onOpenChange?.(next)
  }
  const hintsId = useId()
  // Accent-insensitive, so "hoa don" finds "Hóa đơn".
  const { contains } = Autocomplete.useFilter({ sensitivity: 'base' })

  // Re-bound every render: the handler reads the current open state.
  useEffect(() => {
    if (!hotkey) return
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || e.isComposing) return
      if ((e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey && e.key.toLowerCase() === hotkey.toLowerCase()) {
        e.preventDefault()
        setOpen(!isOpen)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  // The choice runs after the close has finished and focus is back on the
  // trigger, so an action that opens a dialog or moves focus keeps it.
  const chosen = useRef<CommandPaletteItem | null>(null)
  const choose = (item: CommandPaletteItem) => {
    chosen.current = item
    setOpen(false)
  }
  const onClosed = (isOpenNow: boolean) => {
    const item = chosen.current
    if (isOpenNow || !item) return
    chosen.current = null
    item.onSelect?.()
    onSelect?.(item)
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen} onOpenChangeComplete={onClosed} modal={isModal}>
      {trigger && <Dialog.Trigger render={trigger} />}
      <Dialog.Portal container={container}>
        <Dialog.Backdrop className={styles.backdrop} />
        <Dialog.Viewport className={styles.viewport}>
          <Dialog.Popup className={cn(styles.popup, className)} aria-label={label}>
            {/* inline + open: the list is part of the dialog, not a popup of its own. */}
            <Autocomplete.Root
              items={groups}
              itemToStringValue={(item: CommandPaletteItem) => item.label}
              filter={(item: CommandPaletteItem, query) =>
                [item.label, ...(item.keywords ?? [])].some((text) => contains(text, query))
              }
              open
              inline
              autoHighlight="always"
              keepHighlight
            >
              <Autocomplete.InputGroup className={styles.search}>
                <Icon name="search" className={styles.searchIcon} />
                <Autocomplete.Input
                  className={styles.input}
                  placeholder={placeholder}
                  aria-label={inputLabel}
                  aria-describedby={hintsId}
                />
              </Autocomplete.InputGroup>
              <div className={styles.results}>
                <Autocomplete.Empty className={styles.empty}>{emptyText}</Autocomplete.Empty>
                <Autocomplete.List className={styles.list}>
                  {(group: CommandPaletteGroup) => (
                    <Autocomplete.Group key={group.label} items={group.items} className={styles.group}>
                      <Autocomplete.GroupLabel className={styles.groupLabel}>{group.label}</Autocomplete.GroupLabel>
                      <Autocomplete.Collection>
                        {(item: CommandPaletteItem) => (
                          <Autocomplete.Item
                            key={item.value}
                            value={item}
                            disabled={item.disabled}
                            className={styles.item}
                            onClick={() => choose(item)}
                          >
                            {item.icon && (
                              <span className={styles.icon} aria-hidden="true">
                                {item.icon}
                              </span>
                            )}
                            <span className={styles.label}>{item.label}</span>
                            {/* Shown, not part of the name, as on a Menu item. */}
                            {item.shortcut && <Kbd size="sm" keys={item.shortcut} aria-hidden="true" />}
                          </Autocomplete.Item>
                        )}
                      </Autocomplete.Collection>
                    </Autocomplete.Group>
                  )}
                </Autocomplete.List>
              </div>
              {/* The keys, drawn for sight and said once to a screen reader as the input's description. */}
              <div className={styles.footer}>
                <span id={hintsId} className={styles.visuallyHidden}>
                  Arrow keys to move, Enter to choose, Escape to close.
                </span>
                <span className={styles.hint} aria-hidden="true">
                  <Kbd size="sm" keys={['↑', '↓']} /> Move
                </span>
                <span className={styles.hint} aria-hidden="true">
                  <Kbd size="sm">↵</Kbd> Choose
                </span>
                <span className={styles.hint} aria-hidden="true">
                  <Kbd size="sm">Esc</Kbd> Close
                </span>
              </div>
            </Autocomplete.Root>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
