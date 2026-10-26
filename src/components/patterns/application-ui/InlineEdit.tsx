'use client'

import { useLayoutEffect, useRef, useState, type ComponentProps, type FocusEvent, type KeyboardEvent, type MouseEvent } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Button } from '../../buttons/Button'
import { TextInput } from '../../inputs/TextInput'
import styles from './InlineEdit.module.css'

export interface InlineEditProps extends Omit<ComponentProps<'div'>, 'children' | 'onChange'> {
  value: string
  /** What the value is, e.g. "Email". Names the input and the value's button ("Edit Email"). */
  label: string
  /**
   * Called with the new value on Enter, Save or leaving the field, only when
   * it changed. Return (or resolve) a message to show it under the field and
   * stay in edit; a throw or rejection shows its message the same way.
   */
  onSave: (value: string) => void | string | undefined | Promise<void | string | undefined>
  /** Shown, muted, when the value is empty. */
  placeholder?: string
  /**
   * The on-screen keyboard to offer. The input stays `type="text"`, so the
   * whole value can be selected on edit (browsers cannot select an email or
   * number input); check the format in `onSave`.
   */
  inputMode?: 'text' | 'email' | 'numeric' | 'decimal' | 'tel' | 'url'
  size?: 'sm' | 'md'
}

/**
 * A value that edits where it stands: in a table cell or a description list
 * row. Click it (or Enter on it) for a text input; Enter or Save keeps the
 * change, Escape or Cancel drops it. The pattern owns no data: it reports the
 * new value and shows the error you return.
 */
export function InlineEdit({
  value,
  label,
  onSave,
  placeholder = 'Empty',
  inputMode,
  size = 'md',
  className,
  ref,
  ...props
}: InlineEditProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const [error, setError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const valueRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  // Enter, Save, Escape and Cancel hand focus back to the value; leaving the
  // field by Tab or click does not pull it back.
  const shouldRefocusValue = useRef(false)
  // A ref, not state: a blur and a click can both commit within one render.
  const isPending = useRef(false)

  // Layout, not passive: a save that resolves later must hand focus over
  // before anything else can read where it is.
  useLayoutEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
      inputRef.current?.select()
    } else if (shouldRefocusValue.current) {
      shouldRefocusValue.current = false
      valueRef.current?.focus()
    }
  }, [isEditing])

  // A slow save must not pull focus back once the viewer has moved on.
  const focusIsHere = () => {
    const active = document.activeElement
    return !active || active === document.body || !!rootRef.current?.contains(active)
  }

  const start = () => {
    setDraft(value)
    setError(null)
    setIsEditing(true)
  }
  const close = (focusValue: boolean) => {
    shouldRefocusValue.current = focusValue
    setIsEditing(false)
  }
  const commit = async (focusValue: boolean) => {
    if (isPending.current) return
    if (draft === value) return close(focusValue)
    isPending.current = true
    setIsSaving(true)
    setError(null)
    let message: string | null = null
    try {
      message = (await onSave(draft)) || null
    } catch (e) {
      message = (e instanceof Error && e.message) || 'Could not save.'
    }
    isPending.current = false
    setIsSaving(false)
    const refocus = focusValue && focusIsHere()
    if (message) {
      setError(message)
      if (refocus) inputRef.current?.focus()
    } else close(refocus)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault()
      commit(true)
    } else if (e.key === 'Escape') {
      // Inside a Drawer or Modal, Escape cancels the edit, not the overlay,
      // and during a save it does nothing: the save cannot be called back.
      e.preventDefault()
      e.stopPropagation()
      if (!isSaving) close(true)
    }
  }
  // Pressing Save or Cancel keeps focus in the input, so no blur commits
  // first (Safari does not focus a clicked button, so relatedTarget is null).
  const preventBlurCommit = (e: MouseEvent) => e.preventDefault()
  const onBlur = (e: FocusEvent<HTMLDivElement>) => {
    // Moving to Save or Cancel stays inside the editor.
    if (e.currentTarget.contains(e.relatedTarget)) return
    commit(false)
  }

  return (
    <div
      ref={(node) => {
        rootRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
      className={cn(styles.inlineEdit, styles[size], className)}
      {...props}
    >
      {isEditing ? (
        <div className={styles.editor} onBlur={onBlur}>
          <TextInput
            ref={inputRef}
            aria-label={label}
            inputMode={inputMode}
            autoComplete="off"
            size={size}
            isFullWidth
            className={styles.field}
            value={draft}
            readOnly={isSaving}
            onChange={(e) => {
              setDraft(e.target.value)
              setError(null)
            }}
            onKeyDown={onKeyDown}
            validationState={error ? 'error' : 'default'}
            helperText={error ?? undefined}
          />
          <Button
            size={size}
            variant="secondary"
            appearance="ghost"
            isIconOnly
            aria-label="Save"
            isLoading={isSaving}
            onMouseDown={preventBlurCommit}
            onClick={() => commit(true)}
          >
            <Icon name="check" />
          </Button>
          <Button
            size={size}
            variant="secondary"
            appearance="ghost"
            isIconOnly
            aria-label="Cancel"
            disabled={isSaving}
            onMouseDown={preventBlurCommit}
            onClick={() => close(true)}
          >
            <Icon name="close" />
          </Button>
        </div>
      ) : (
        <button ref={valueRef} type="button" className={styles.value} onClick={start}>
          <span className={styles.srOnly}>Edit {label}: </span>
          <span className={value ? styles.text : styles.placeholder}>{value || placeholder}</span>
          <Icon name="edit" className={styles.pencil} />
        </button>
      )}
      {/* Always rendered, so "Saving" and an error are announced when they
          appear, even after a blur save, when focus has left the field. */}
      <span role="status" className={styles.srOnly}>
        {isSaving ? 'Saving' : (error ?? '')}
      </span>
    </div>
  )
}
