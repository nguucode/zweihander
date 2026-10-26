'use client'

import { useEffect, useId, useLayoutEffect, useRef, useState, type ComponentProps, type FormEvent } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Badge } from '../../atomic-elements/Badge'
import { Tag } from '../../atomic-elements/Tag'
import { Button } from '../../buttons/Button'
import { Checkbox } from '../../controls/Checkbox'
import { TextInput } from '../../inputs/TextInput'
import { Menu, type MenuEntry } from '../../navigation/Menu'
import { Tabs } from '../../navigation/Tabs'
import { Modal, ModalClose } from '../../overlays/Modal'
import styles from './SavedViews.module.css'

export interface SavedView {
  id: string
  label: string
  /** Rows the view holds, shown next to its name. */
  count?: number
  /** Shipped with the product: it can be picked and copied, not saved over or deleted. */
  isPredefined?: boolean
  /** Shared with others; Manage views says so. */
  isShared?: boolean
}

export interface NewView {
  label: string
  isShared: boolean
}

export interface SavedViewsProps extends Omit<ComponentProps<'div'>, 'children'> {
  views: SavedView[]
  /** The id of the view in force. */
  value: string
  onValueChange: (id: string) => void
  /** `tabs` for a handful of views; `menu` for more than fit on one line. */
  display?: 'tabs' | 'menu'
  /** The filters, sort or columns now differ from the view as saved. */
  isModified?: boolean
  /** Saves the changes into the view in force. Not offered on a predefined view. */
  onSave?: () => void
  /** Drops the changes and goes back to the view as saved. */
  onDiscard?: () => void
  /** Saves the current state as a new view. Shows Save as new view. */
  onSaveAs?: (view: NewView) => void
  /** Offers "Share with everyone" when saving a new view. */
  isShareable?: boolean
  /** Deletes a view that is not predefined. Shows Manage views. */
  onDelete?: (id: string) => void
}

/**
 * The views of a list or table, predefined and saved, with a mark when the
 * view in force has changed, Save, Save as new view and Manage views. The
 * pattern owns no views: it renders the list you keep and reports changes.
 */
export function SavedViews({
  views,
  value,
  onValueChange,
  display = 'tabs',
  isModified = false,
  onSave,
  onDiscard,
  onSaveAs,
  isShareable = false,
  onDelete,
  'aria-label': ariaLabel = 'Views',
  className,
  ref,
  ...props
}: SavedViewsProps) {
  const [dialog, setDialog] = useState<'save-as' | 'manage' | null>(null)
  // Menu radio items keep the menu open; picking a view should close it.
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const active = views.find((v) => v.id === value)
  const canSave = !!onSave && !!active && !active.isPredefined

  // Save, Discard and Save as new view unmount the button that was pressed
  // (or that the dialog would hand focus back to): send focus to the view in
  // force once the change has landed, instead of dropping it on the page.
  const barRef = useRef<HTMLDivElement>(null)
  const refocus = useRef(false)
  useEffect(() => {
    if (!refocus.current || isModified || dialog) return
    refocus.current = false
    barRef.current?.querySelector<HTMLElement>('[role="tab"][aria-selected="true"], [aria-haspopup="menu"]')?.focus()
  }, [isModified, dialog, value])
  const thenRefocus = (action: () => void) => () => {
    refocus.current = true
    action()
  }

  const countBadge = (view: SavedView) =>
    view.count !== undefined && <Badge count={view.count} size="sm" variant="secondary" />

  const viewActions: MenuEntry[] = [
    ...(onSaveAs ? [{ label: 'Save as new view…', onSelect: () => setDialog('save-as') }] : []),
    ...(onDelete ? [{ label: 'Manage views…', onSelect: () => setDialog('manage') }] : []),
  ]

  return (
    <div
      ref={(node) => {
        barRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
      className={cn(styles.bar, className)} {...props}>
      {display === 'tabs' ? (
        <Tabs
          aria-label={ariaLabel}
          className={styles.views}
          value={value}
          onValueChange={onValueChange}
          items={views.map((view) => ({
            value: view.id,
            label: (
              <>
                {view.label} {countBadge(view)}
              </>
            ),
          }))}
        />
      ) : (
        <Menu
          align="start"
          open={isMenuOpen}
          onOpenChange={setIsMenuOpen}
          trigger={
            <Button variant="secondary" appearance="ghost" endIcon={<Icon name="chevron-down" />} className={styles.trigger}>
              <span className={styles.srOnly}>{ariaLabel}: </span>
              <span className={styles.name}>{active?.label ?? ariaLabel}</span>
            </Button>
          }
          items={[
            {
              type: 'radio',
              label: ariaLabel,
              value,
              onValueChange: (id) => {
                onValueChange(id)
                setIsMenuOpen(false)
              },
              options: views.map((view) => ({
                value: view.id,
                label: (
                  <span className={styles.option}>
                    {view.label} {countBadge(view)}
                  </span>
                ),
              })),
            },
          ]}
        />
      )}
      <div className={styles.actions}>
        {/* Always rendered, so the mark is announced when it appears. */}
        <span role="status" className={styles.modified}>
          {isModified && 'Modified'}
        </span>
        {isModified && onDiscard && (
          <Button variant="secondary" appearance="ghost" onClick={thenRefocus(onDiscard)}>
            Discard
          </Button>
        )}
        {isModified && canSave && (
          <Button variant="secondary" appearance="outlined" onClick={thenRefocus(onSave!)}>
            Save
          </Button>
        )}
        {isModified && !canSave && onSaveAs && (
          <Button variant="secondary" appearance="outlined" onClick={() => setDialog('save-as')}>
            Save as new view
          </Button>
        )}
        {viewActions.length > 0 && (
          <Menu
            align="end"
            trigger={
              <Button variant="secondary" appearance="ghost" isIconOnly aria-label="View actions">
                <Icon name="more" />
              </Button>
            }
            items={viewActions}
          />
        )}
      </div>
      {onSaveAs && (
        <SaveAsDialog
          open={dialog === 'save-as'}
          onOpenChange={(open) => setDialog(open ? 'save-as' : null)}
          taken={views.map((v) => v.label)}
          isShareable={isShareable}
          onSave={(view) => {
            refocus.current = true
            onSaveAs(view)
            setDialog(null)
          }}
        />
      )}
      {onDelete && (
        <ManageDialog
          open={dialog === 'manage'}
          onOpenChange={(open) => setDialog(open ? 'manage' : null)}
          views={views}
          label={ariaLabel}
          onDelete={onDelete}
        />
      )}
    </div>
  )
}

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function SaveAsDialog({
  open,
  onOpenChange,
  taken,
  isShareable,
  onSave,
}: DialogProps & { taken: string[]; isShareable: boolean; onSave: (view: NewView) => void }) {
  const formId = useId()
  const nameRef = useRef<HTMLInputElement>(null)
  const [label, setLabel] = useState('')
  const [isShared, setIsShared] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // A fresh form each time it opens.
  const [wasOpen, setWasOpen] = useState(open)
  if (open !== wasOpen) {
    setWasOpen(open)
    if (open) {
      setLabel('')
      setIsShared(false)
      setError(null)
    }
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const name = label.trim()
    if (!name) return setError('Enter a name for the view.')
    if (taken.some((t) => t.trim().toLowerCase() === name.toLowerCase())) return setError('A view with this name already exists.')
    onSave({ label: name, isShared })
  }

  return (
    <Modal
      size="sm"
      title="Save as new view"
      description="Saves the current filters, sort and columns under a new name."
      open={open}
      onOpenChange={onOpenChange}
      initialFocus={nameRef}
      footer={
        <>
          <ModalClose render={<Button variant="secondary" />}>Cancel</ModalClose>
          <Button type="submit" form={formId}>
            Save view
          </Button>
        </>
      }
    >
      <form id={formId} noValidate onSubmit={submit} className={styles.form}>
        <TextInput
          ref={nameRef}
          label="View name"
          required
          isFullWidth
          value={label}
          onChange={(e) => {
            setLabel(e.target.value)
            setError(null)
          }}
          validationState={error ? 'error' : 'default'}
          helperText={error ?? undefined}
        />
        {isShareable && <Checkbox label="Share with everyone" checked={isShared} onCheckedChange={setIsShared} />}
      </form>
    </Modal>
  )
}

function ManageDialog({
  open,
  onOpenChange,
  views,
  label,
  onDelete,
}: DialogProps & { views: SavedView[]; label: string; onDelete: (id: string) => void }) {
  const listRef = useRef<HTMLUListElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  // Deleting unmounts the focused button: hand focus to the next delete
  // button, or the one before, once the view has left `views`; with none
  // left, to Done.
  const pending = useRef<{ index: number; id: string } | null>(null)
  useLayoutEffect(() => {
    const p = pending.current
    if (!p || views.some((v) => v.id === p.id)) return
    pending.current = null
    const buttons = listRef.current?.querySelectorAll<HTMLElement>('button') ?? []
    ;(buttons[Math.min(p.index, buttons.length - 1)] ?? closeRef.current)?.focus()
  }, [views])

  const own = views.filter((v) => !v.isPredefined)
  return (
    <Modal
      size="sm"
      title="Manage views"
      open={open}
      onOpenChange={(next) => {
        // A delete the app declined must not move focus later on.
        pending.current = null
        onOpenChange(next)
      }}
      footer={
        <ModalClose ref={closeRef} render={<Button />}>
          Done
        </ModalClose>
      }
    >
      <ul ref={listRef} aria-label={label} className={styles.manage}>
        {views.map((view) => (
          <li key={view.id}>
            <span className={styles.name}>{view.label}</span>
            {view.isPredefined && <Tag text="Predefined" variant="neutral" size="sm" />}
            {view.isShared && <Tag text="Shared" variant="neutral" size="sm" />}
            {!view.isPredefined && (
              <Button
                variant="destructive"
                appearance="ghost"
                aria-label={`Delete ${view.label}`}
                className={styles.delete}
                onClick={() => {
                  pending.current = { index: own.indexOf(view), id: view.id }
                  onDelete(view.id)
                }}
              >
                Delete
              </Button>
            )}
          </li>
        ))}
      </ul>
    </Modal>
  )
}
