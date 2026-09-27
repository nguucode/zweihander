import { useId, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react'
import { Field } from '@base-ui/react/field'
import { Popover } from '@base-ui/react/popover'
import { Slider } from '@base-ui/react/slider'
import { cn } from '@/lib/utils'
import {
  InputField,
  boxClass,
  focusControl,
  inputStyles,
  type InputAppearance,
  type InputSize,
  type ValidationState,
} from '../inputs/InputField'
import styles from './ColorPicker.module.css'

/** Hue 0–360, saturation and brightness 0–1. */
interface Hsv {
  h: number
  s: number
  v: number
}

/** `#rgb` or `#rrggbb`, with or without the `#`, to lowercase `#rrggbb`; anything else to `null`. */
export function normalizeHex(text: string): string | null {
  const m = text.trim().replace(/^#/, '').toLowerCase()
  if (/^[0-9a-f]{3}$/.test(m)) return `#${[...m].map((c) => c + c).join('')}`
  if (/^[0-9a-f]{6}$/.test(m)) return `#${m}`
  return null
}

function hexToHsv(hex: string): Hsv {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) / 255
  const g = ((n >> 8) & 255) / 255
  const b = (n & 255) / 255
  const max = Math.max(r, g, b)
  const d = max - Math.min(r, g, b)
  let h = 0
  if (d) {
    if (max === r) h = ((g - b) / d) % 6
    else if (max === g) h = (b - r) / d + 2
    else h = (r - g) / d + 4
  }
  return { h: (h * 60 + 360) % 360, s: max ? d / max : 0, v: max }
}

function hsvToHex({ h, s, v }: Hsv): string {
  const f = (k: number) => {
    const x = (k + h / 60) % 6
    return v - v * s * Math.max(0, Math.min(x, 4 - x, 1))
  }
  return `#${[f(5), f(3), f(1)].map((c) => Math.round(c * 255).toString(16).padStart(2, '0')).join('')}`
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n))
const pct = (n: number) => Math.round(n * 100)

export type Swatch = string | { value: string; label: string }

export interface ColorPanelProps {
  /** `#rrggbb`. */
  value?: string
  defaultValue?: string
  onValueChange?: (hex: string) => void
  /** Preset colours under the pickers. A plain string is named by its hex. */
  swatches?: Swatch[]
  disabled?: boolean
  className?: string
}

/**
 * The picker on its own: a saturation/brightness area, a hue strip and
 * optional swatches. Use it inline, or through ColorPicker, which puts it in
 * a popover under a hex field.
 */
export function ColorPanel({
  value,
  defaultValue = '#3b82f6',
  onValueChange,
  swatches,
  disabled = false,
  className,
}: ColorPanelProps) {
  const id = useId()
  const [valueState, setValueState] = useState(() => normalizeHex(defaultValue) ?? '#000000')
  const hex = (value !== undefined ? normalizeHex(value) : null) ?? valueState
  // Kept as HSV, not read back from hex: at zero saturation or brightness the
  // hex forgets the hue, and the strip would jump to red.
  const [hsv, setHsv] = useState(() => hexToHsv(hex))
  const [shown, setShown] = useState(hex)
  if (hex !== shown) {
    setShown(hex)
    if (hsvToHex(hsv) !== hex) setHsv(hexToHsv(hex))
  }

  const change = (next: Hsv) => {
    setHsv(next)
    const nextHex = hsvToHex(next)
    setShown(nextHex)
    setValueState(nextHex)
    if (nextHex !== hex) onValueChange?.(nextHex)
  }
  const pick = (next: string) => change(hexToHsv(next))

  const fromPointer = (e: PointerEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect()
    change({ ...hsv, s: clamp01((e.clientX - box.left) / box.width), v: clamp01(1 - (e.clientY - box.top) / box.height) })
  }

  // One tab stop for the area, and the keys move it the way the thumb looks:
  // left/right saturation, up/down brightness, Shift for steps of 10%.
  const onAreaKey = (e: KeyboardEvent<HTMLInputElement>) => {
    const step = e.shiftKey ? 0.1 : 0.01
    const keys: Record<string, Partial<Hsv>> = {
      ArrowRight: { s: hsv.s + step },
      ArrowLeft: { s: hsv.s - step },
      ArrowUp: { v: hsv.v + step },
      ArrowDown: { v: hsv.v - step },
      PageUp: { v: hsv.v + 0.1 },
      PageDown: { v: hsv.v - 0.1 },
      Home: { s: 0 },
      End: { s: 1 },
    }
    const move = keys[e.key]
    if (!move) return
    e.preventDefault()
    change({ ...hsv, s: clamp01(move.s ?? hsv.s), v: clamp01(move.v ?? hsv.v) })
  }

  const presets = swatches?.map((s) => (typeof s === 'string' ? { value: s, label: s } : s))

  return (
    <div
      className={cn(styles.panel, disabled && styles.disabled, className)}
      style={{ '--picker-hue': hsv.h, '--picker-color': hex } as CSSProperties}
    >
      <div
        className={styles.area}
        data-disabled={disabled || undefined}
        onPointerDown={(e) => {
          if (disabled || e.button !== 0) return
          e.currentTarget.setPointerCapture(e.pointerId)
          e.preventDefault()
          e.currentTarget.querySelector('input')?.focus({ preventScroll: true })
          fromPointer(e)
        }}
        onPointerMove={(e) => e.currentTarget.hasPointerCapture(e.pointerId) && fromPointer(e)}
      >
        <div className={styles.areaThumb} style={{ left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%` }}>
          <input
            type="range"
            className={styles.srOnly}
            aria-label="Saturation"
            aria-valuetext={`Saturation ${pct(hsv.s)}%, brightness ${pct(hsv.v)}%`}
            min={0}
            max={100}
            value={pct(hsv.s)}
            disabled={disabled}
            onChange={(e) => change({ ...hsv, s: Number(e.target.value) / 100 })}
            onKeyDown={onAreaKey}
          />
          {/* Reachable by a screen reader's virtual cursor; the keyboard gets it through the arrows above. */}
          <input
            type="range"
            className={styles.srOnly}
            tabIndex={-1}
            aria-label="Brightness"
            aria-valuetext={`Brightness ${pct(hsv.v)}%`}
            min={0}
            max={100}
            value={pct(hsv.v)}
            disabled={disabled}
            onChange={(e) => change({ ...hsv, v: Number(e.target.value) / 100 })}
          />
        </div>
      </div>

      <Slider.Root
        className={styles.hue}
        min={0}
        max={359}
        value={Math.round(hsv.h) % 360}
        disabled={disabled}
        onValueChange={(h) => change({ ...hsv, h: h as number })}
        thumbAlignment="edge"
      >
        <Slider.Control className={styles.hueControl}>
          <Slider.Track className={styles.hueTrack}>
            <Slider.Thumb
              className={styles.hueThumb}
              getAriaLabel={() => 'Hue'}
              getAriaValueText={(_, v) => `${v} degrees`}
            />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>

      {presets && presets.length > 0 && (
        // Native radios: one choice at a time, one tab stop, arrows to move.
        // None is checked while the colour is not one of the swatches.
        <div role="radiogroup" aria-label="Swatches" className={styles.swatches}>
          {presets.map((s) => {
            const sv = normalizeHex(s.value) ?? s.value
            return (
              <input
                key={s.value}
                type="radio"
                name={`${id}-swatch`}
                className={styles.swatch}
                style={{ '--swatch': sv } as CSSProperties}
                aria-label={s.label}
                checked={sv === hex}
                disabled={disabled}
                onChange={() => pick(sv)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export interface ColorPickerProps extends Omit<ColorPanelProps, 'className'> {
  label?: ReactNode
  /** Under the field. Replaced by a format hint while the typed text is not a colour. */
  helperText?: ReactNode
  validationState?: ValidationState
  size?: InputSize
  appearance?: InputAppearance
  isFullWidth?: boolean
  /** Submitted as `#rrggbb`. */
  name?: string
  required?: boolean
  id?: string
  className?: string
  'aria-label'?: string
}

/** A hex field with a swatch button that opens the ColorPanel. */
export function ColorPicker({
  value,
  defaultValue = '#3b82f6',
  onValueChange,
  swatches,
  label,
  helperText,
  validationState,
  size = 'md',
  appearance = 'outlined',
  isFullWidth,
  name,
  disabled,
  required,
  id,
  className,
  'aria-label': ariaLabel,
}: ColorPickerProps) {
  const [valueState, setValueState] = useState(() => normalizeHex(defaultValue) ?? '#000000')
  const hex = (value !== undefined ? normalizeHex(value) : null) ?? valueState
  const [text, setText] = useState(hex)
  const [invalid, setInvalid] = useState(false)
  // Follow a controlled value that changes from outside.
  const [shown, setShown] = useState(hex)
  if (hex !== shown) {
    setShown(hex)
    setText(hex)
    setInvalid(false)
  }

  const commit = (next: string) => {
    setValueState(next)
    setShown(next)
    setText(next)
    setInvalid(false)
    if (next !== hex) onValueChange?.(next)
  }
  const commitText = () => {
    const parsed = normalizeHex(text)
    if (parsed) commit(parsed)
    else setInvalid(true)
  }

  return (
    <InputField
      label={label}
      helperText={invalid ? 'Enter a colour as #rrggbb, e.g. #3b82f6.' : helperText}
      validationState={invalid ? 'error' : validationState}
      required={required}
      disabled={disabled}
      isFullWidth={isFullWidth}
      className={className}
    >
      <span className={boxClass(size, appearance)} onMouseDown={focusControl}>
        <Popover.Root>
          <Popover.Trigger
            className={cn(inputStyles.iconButton, styles.trigger)}
            style={{ '--swatch': hex } as CSSProperties}
            disabled={disabled}
            aria-label={`Choose colour, ${hex} selected`}
          />
          <Popover.Portal>
            <Popover.Positioner className={styles.positioner} side="bottom" align="start" sideOffset={6}>
              <Popover.Popup aria-label="Choose colour" className={styles.popup}>
                <ColorPanel value={hex} onValueChange={commit} swatches={swatches} />
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
        <Field.Control
          id={id}
          value={text}
          spellCheck={false}
          autoComplete="off"
          aria-label={ariaLabel}
          required={required}
          className={cn(inputStyles.control, styles.hexInput)}
          onChange={(e) => {
            setText(e.target.value)
            setInvalid(false)
          }}
          onBlur={commitText}
          onKeyDown={(e) => e.key === 'Enter' && commitText()}
        />
        {name && <input type="hidden" name={name} value={hex} />}
      </span>
    </InputField>
  )
}
