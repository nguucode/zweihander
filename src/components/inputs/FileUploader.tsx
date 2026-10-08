'use client'

import { useEffect, useId, useRef, useState, type DragEvent, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Button } from '../buttons/Button'
import { Spinner } from '../loaders/Spinner'
import styles from './FileUploader.module.css'

export interface FileRejection {
  file: File
  reason: 'type' | 'size' | 'count'
  /** Ready to show, e.g. "photo.gif is not an accepted type." */
  message: string
}

export interface FileStatus {
  /** 0–100 while uploading: a ring beside the remove button, hidden at 100. */
  progress?: number
  /** Short, beside the remove button in the danger colour, e.g. "Upload failed". */
  error?: string
}

export interface FileUploaderProps {
  files?: File[]
  defaultFiles?: File[]
  /** The list after an add or a remove. Rejected files are never in it. */
  onFilesChange?: (files: File[]) => void
  /** Files that were dropped or chosen but did not pass `accept`, `maxSize` or `maxFiles`. */
  onReject?: (rejections: FileRejection[]) => void
  /** As the native attribute: extensions and MIME types, e.g. `".pdf,image/*"`. Also checked on drop. */
  accept?: string
  multiple?: boolean
  /** In bytes. */
  maxSize?: number
  maxFiles?: number
  label?: ReactNode
  /** Inside the drop zone, under the button, e.g. "PNG or JPG, up to 5 MB." */
  helperText?: ReactNode
  /** Upload progress or a server error per file. The uploader does not upload: you do. */
  getFileStatus?: (file: File) => FileStatus | undefined
  /** Submitted with the form, as a native file input. */
  name?: string
  disabled?: boolean
  required?: boolean
  isFullWidth?: boolean
  className?: string
}

const sizeFormat = (bytes: number) => {
  const [value, unit] =
    bytes >= 1e6 ? [bytes / 1e6, 'megabyte'] : bytes >= 1e3 ? [bytes / 1e3, 'kilobyte'] : [bytes, 'byte']
  return new Intl.NumberFormat(undefined, { style: 'unit', unit, unitDisplay: 'short', maximumFractionDigits: 1 }).format(value)
}

/** Does the file match the `accept` list? Extensions, exact MIME types and `type/*`. */
function accepts(file: File, accept?: string) {
  if (!accept) return true
  const name = file.name.toLowerCase()
  const type = file.type.toLowerCase()
  return accept
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean)
    .some((t) => (t.startsWith('.') ? name.endsWith(t) : t.endsWith('/*') ? type.startsWith(t.slice(0, -1)) : type === t))
}

function syncInput(input: HTMLInputElement | null, files: File[]) {
  if (!input || typeof DataTransfer === 'undefined') return
  const transfer = new DataTransfer()
  files.forEach((f) => transfer.items.add(f))
  input.files = transfer.files
}

type FileKind = 'word' | 'excel' | 'powerpoint' | 'pdf' | 'image' | 'audio'

function fileKind(file: File): FileKind | undefined {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  const type = file.type.toLowerCase()
  if (ext === 'pdf' || type === 'application/pdf') return 'pdf'
  if (['doc', 'docx', 'odt', 'rtf'].includes(ext)) return 'word'
  if (['xls', 'xlsx', 'csv', 'ods'].includes(ext)) return 'excel'
  if (['ppt', 'pptx', 'odp'].includes(ext)) return 'powerpoint'
  if (type.startsWith('image/')) return 'image'
  if (type.startsWith('audio/') || ['mp3', 'wav', 'm4a', 'ogg', 'flac'].includes(ext)) return 'audio'
}

const badgeText: Partial<Record<FileKind, string>> = { word: 'W', excel: 'X', powerpoint: 'P', pdf: 'PDF' }

/** A page with a coloured type badge, after Microsoft 365's file icons. Unknown types get the bare page. */
function FileTypeIcon({ file }: { file: File }) {
  const kind = fileKind(file)
  return (
    <svg className={styles.fileIcon} data-kind={kind} viewBox="0 0 32 32" aria-hidden="true">
      <path className={styles.page} d="M9.5 2.5h11l7 7v18a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-23a2 2 0 0 1 2-2Z" />
      <path className={styles.fold} d="M20.5 2.5v5a2 2 0 0 0 2 2h5Z" />
      {kind && (
        <g>
          <rect className={styles.badge} x="2" y="13" width={kind === 'pdf' ? 20 : 15} height="14" rx="2" />
          {badgeText[kind] ? (
            <text className={styles.badgeText} x={kind === 'pdf' ? 12 : 9.5} y="23.5" textAnchor="middle">
              {badgeText[kind]}
            </text>
          ) : kind === 'image' ? (
            <g className={styles.glyph}>
              <circle cx="12.5" cy="17.5" r="1.25" />
              <path d="M5 24.5l3.5-4.5 2.5 3 1.5-1.5 2.5 3Z" />
            </g>
          ) : (
            <g className={styles.glyph}>
              <circle cx="7.5" cy="23" r="1.75" />
              <path d="M9.25 23v-6.5l4 1.25v2" fill="none" strokeWidth="1.5" strokeLinejoin="round" />
            </g>
          )}
        </g>
      )}
    </svg>
  )
}

const sameFile = (a: File, b: File) => a.name === b.name && a.size === b.size && a.lastModified === b.lastModified

export function FileUploader({
  files: filesProp,
  defaultFiles = [],
  onFilesChange,
  onReject,
  accept,
  multiple = false,
  maxSize,
  maxFiles,
  label,
  helperText,
  getFileStatus,
  name,
  disabled = false,
  required,
  isFullWidth,
  className,
}: FileUploaderProps) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const chooseRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [filesState, setFilesState] = useState(defaultFiles)
  const files = filesProp ?? filesState
  const [rejections, setRejections] = useState<FileRejection[]>([])
  const [dragging, setDragging] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const limit = multiple ? (maxFiles ?? Infinity) : 1

  const [missing, setMissing] = useState(false)

  // The native input carries the list, so a plain form post sends it. Also
  // after a controlled `files` changes from outside, e.g. cleared after upload.
  useEffect(() => syncInput(inputRef.current, files), [files])

  const update = (next: File[]) => {
    setFilesState(next)
    syncInput(inputRef.current, next)
    onFilesChange?.(next)
  }

  const add = (incoming: File[]) => {
    const rejected: FileRejection[] = []
    const accepted: File[] = []
    for (const file of incoming) {
      if (!accepts(file, accept)) rejected.push({ file, reason: 'type', message: `${file.name} is not an accepted type.` })
      else if (maxSize !== undefined && file.size > maxSize)
        rejected.push({ file, reason: 'size', message: `${file.name} is larger than ${sizeFormat(maxSize)}.` })
      else accepted.push(file)
    }
    // A single-file uploader replaces its file, but only with one that passed:
    // a rejected drop leaves the chosen file where it is. A multiple one appends.
    let next = multiple ? [...files] : []
    for (const file of accepted) {
      if (next.some((f) => sameFile(f, file))) continue
      if (next.length >= limit)
        rejected.push({
          file,
          reason: 'count',
          message: multiple ? `${file.name} was not added: the limit is ${limit} files.` : `${file.name} was not added: only one file can be added.`,
        })
      else next.push(file)
    }
    if (!multiple && next.length === 0) next = files
    const added = next.filter((f) => !files.some((g) => sameFile(f, g))).length
    setRejections(rejected)
    if (rejected.length) onReject?.(rejected)
    if (next.length) setMissing(false)
    if (added || next.length !== files.length) update(next)
    else syncInput(inputRef.current, files)
    setAnnouncement(
      [added ? `${added} ${added === 1 ? 'file' : 'files'} added.` : '', rejected.length ? `${rejected.length} not added.` : '']
        .filter(Boolean)
        .join(' '),
    )
  }

  const remove = (index: number) => {
    const removed = files[index]
    const next = files.filter((_, i) => i !== index)
    update(next)
    setAnnouncement(`${removed.name} removed.`)
    // Focus goes to the next remove button, else the previous, else Choose.
    requestAnimationFrame(() => {
      const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>('button[data-remove]')
      const target = buttons?.[Math.min(index, buttons.length - 1)] ?? chooseRef.current
      target?.focus()
    })
  }

  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    if (!disabled) add([...e.dataTransfer.files])
  }

  const helperId = `${id}-helper`
  const errorId = `${id}-errors`

  return (
    // A group named by the label: the control inside is a button with its own
    // name ("Choose files"), so a <label> would have nothing to label.
    <div
      role="group"
      aria-labelledby={label ? `${id}-label` : undefined}
      className={cn(styles.uploader, isFullWidth && styles.fullWidth, disabled && styles.disabled, className)}
    >
      {label && (
        <div id={`${id}-label`} className={styles.label}>
          {label}
          {required && (
            <>
              <span className={styles.required} aria-hidden="true">
                *
              </span>
              {/* A group cannot be aria-required; the name says it instead. */}
              <span className={styles.srOnly}> (required)</span>
            </>
          )}
        </div>
      )}
      <div
        className={cn(styles.dropzone, dragging && styles.dragging, (rejections.length > 0 || missing) && styles.invalid)}
        data-disabled={disabled || undefined}
        onDragEnter={(e) => {
          e.preventDefault()
          if (!disabled) setDragging(true)
        }}
        onDragOver={(e) => {
          e.preventDefault()
          e.dataTransfer.dropEffect = disabled ? 'none' : 'copy'
        }}
        onDragLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setDragging(false)
        }}
        onDrop={onDrop}
      >
        <span className={styles.icon} aria-hidden="true">
          <Icon name="upload" />
        </span>
        <p className={styles.prompt}>
          {/* Dragging is a shortcut; the button is the way in for everyone. */}
          Drag {multiple ? 'files' : 'a file'} here or
        </p>
        <Button
          ref={chooseRef}
          variant="accent"
          size="sm"
          disabled={disabled}
          aria-describedby={[helperText ? helperId : '', rejections.length || missing ? errorId : ''].filter(Boolean).join(' ') || undefined}
          onClick={() => inputRef.current?.click()}
        >
          {multiple ? 'Choose files' : 'Choose a file'}
        </Button>
        {helperText && (
          <p id={helperId} className={styles.helper}>
            {helperText}
          </p>
        )}
        <input
          ref={inputRef}
          type="file"
          className={styles.srOnly}
          tabIndex={-1}
          name={name}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          required={required && files.length === 0}
          aria-hidden="true"
          onChange={(e) => add([...(e.target.files ?? [])])}
          // The browser would focus this hidden input and pin its bubble to
          // it. Show the message ourselves and send focus to Choose instead.
          onInvalid={(e) => {
            e.preventDefault()
            setMissing(true)
            chooseRef.current?.focus()
          }}
        />
      </div>
      {(rejections.length > 0 || missing) && (
        <ul id={errorId} className={styles.errors}>
          {missing && <li>{multiple ? 'Choose at least one file.' : 'Choose a file.'}</li>}
          {rejections.map((r, i) => (
            <li key={i}>{r.message}</li>
          ))}
        </ul>
      )}
      {files.length > 0 && (
        <ul ref={listRef} className={styles.list} aria-label={multiple ? 'Chosen files' : 'Chosen file'}>
          {files.map((file, i) => {
            const status = getFileStatus?.(file)
            const uploading = status?.progress !== undefined && status.progress < 100 && !status.error
            return (
              <li key={`${file.name}-${file.size}-${file.lastModified}`} className={styles.item}>
                <FileTypeIcon file={file} />
                {/* The name truncates; the size always shows in full. */}
                <span className={styles.nameRow}>
                  <span className={styles.name}>{file.name}</span>
                  <span className={styles.size}>{sizeFormat(file.size)}</span>
                </span>
                {uploading && (
                  <Spinner value={status?.progress} variant="primary" size="sm" aria-label={`Uploading ${file.name}`} />
                )}
                {status?.error && (
                  <span className={styles.fileError} title={status.error}>
                    {status.error}
                  </span>
                )}
                <Button
                  isIconOnly
                  data-remove=""
                  className={styles.remove}
                  aria-label={`Remove ${file.name}`}
                  variant="secondary"
                  appearance="ghost"
                  size="sm"
                  disabled={disabled}
                  onClick={() => remove(i)}
                >
                  <Icon name="close" />
                </Button>
              </li>
            )
          })}
        </ul>
      )}
      <p role="status" className={styles.srOnly}>
        {announcement}
      </p>
    </div>
  )
}
