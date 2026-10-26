'use client'

import { useState, type ReactElement, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { Button } from '../buttons/Button'
import { TextInput } from '../inputs/TextInput'
import { Modal, ModalClose } from './Modal'
import styles from './ConfirmDialog.module.css'

export interface ConfirmDialogProps {
  /** The button that opens it. Omit when `open` is controlled from elsewhere. */
  trigger?: ReactElement
  /** The action, as a question: "Delete “Atlas”?". Names the dialog. */
  title: ReactNode
  /** What happens, and that it cannot be undone. Describes the dialog. */
  description: ReactNode
  /** The destructive button, named after what it does: "Delete project". */
  confirmLabel: string
  /** The safe button. */
  cancelLabel?: string
  /**
   * Type to confirm: the confirm button stays disabled until the reader types
   * this exactly (case-sensitive, spaces around it ignored). Use the name of
   * what is deleted. Leave it out, or empty, for an everyday delete.
   */
  confirmText?: string
  /** Called when the reader confirms. The dialog closes. */
  onConfirm: () => void
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /** Where it renders instead of `<body>`. */
  container?: HTMLElement | null
  /** `false` for a picture of the dialog, as on the docs: a plain dialog, not modal. */
  isModal?: boolean
}

/** Asks before something that cannot be undone, in an alert dialog. */
export function ConfirmDialog({
  trigger,
  title,
  description,
  confirmLabel,
  cancelLabel = 'Cancel',
  confirmText,
  onConfirm,
  open,
  defaultOpen = false,
  onOpenChange,
  container,
  isModal = true,
}: ConfirmDialogProps) {
  const [ownOpen, setOwnOpen] = useState(defaultOpen)
  const isOpen = open ?? ownOpen
  const [typed, setTyped] = useState('')
  // Clear what was typed on every open, however it opened. Not on close:
  // the button would flash disabled while the dialog fades out.
  const [wasOpen, setWasOpen] = useState(isOpen)
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen)
    if (isOpen) setTyped('')
  }
  const setOpen = (next: boolean) => {
    setOwnOpen(next)
    onOpenChange?.(next)
  }
  // An empty text would match at once: treat it as no type to confirm.
  const phrase = confirmText?.trim() || undefined
  const ready = phrase === undefined || typed.trim() === phrase
  const confirm = () => {
    if (!ready) return
    onConfirm()
    setOpen(false)
  }

  return (
    <Modal
      isAlert={isModal}
      isModal={isModal}
      closeOnBackdropClick={false}
      hasCloseButton={false}
      size="sm"
      trigger={trigger}
      container={container}
      open={isOpen}
      onOpenChange={setOpen}
      title={
        <span className={styles.heading}>
          <Icon name="warning" className={styles.icon} />
          {title}
        </span>
      }
      description={description}
      footer={
        <>
          {/* Before the action, so it has focus on open (after the field, when there is one) and Enter cannot delete. */}
          <ModalClose render={<Button variant="secondary" appearance="outlined" />}>{cancelLabel}</ModalClose>
          <Button variant="destructive" disabled={!ready} onClick={confirm}>
            {confirmLabel}
          </Button>
        </>
      }
    >
      {phrase !== undefined && (
        // A form, so Enter in the field confirms once it matches.
        <form
          onSubmit={(event) => {
            event.preventDefault()
            confirm()
          }}
        >
          <TextInput
            label={
              <>
                To confirm, type <strong className={styles.phrase}>{phrase}</strong>
              </>
            }
            value={typed}
            onChange={(event) => setTyped(event.target.value)}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            isFullWidth
          />
        </form>
      )}
    </Modal>
  )
}
