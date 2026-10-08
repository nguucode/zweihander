'use client'

import { useId, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react'
import { Field } from '@base-ui/react/field'
import { Popover } from '@base-ui/react/popover'
import { Slider } from '@base-ui/react/slider'
import { cn } from '@/lib/utils'
import { Select } from '../inputs/Select'
import {
  InputField,
  boxClass,
  focusControl,
  inputStyles,
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

/**
 * `#rgb`, `#rgba`, `#rrggbb` or `#rrggbbaa`, with or without the `#`, to
 * lowercase `#rrggbb`, or `#rrggbbaa` when it is not opaque; anything else to `null`.
 */
export function normalizeHex(text: string): string | null {
  let m = text.trim().replace(/^#/, '').toLowerCase()
  if (!/^([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(m)) return null
  if (m.length < 5) m = [...m].map((c) => c + c).join('')
  return `#${m.endsWith('ff') && m.length === 8 ? m.slice(0, 6) : m}`
}

let ctx: CanvasRenderingContext2D | null | undefined
/**
 * Any CSS colour (hex, `rgb()`, `hsl()`, `oklch()`, a name...) to the hex
 * normalizeHex gives; anything else to `null`. The browser does the parsing:
 * outside one (SSR), only hex is read.
 */
export function parseColor(text: string): string | null {
  const hex = normalizeHex(text)
  if (hex || typeof document === 'undefined' || !CSS.supports('color', text.trim())) return hex
  ctx ??= document.createElement('canvas').getContext('2d', { willReadFrequently: true })
  if (!ctx) return null
  ctx.fillStyle = '#000'
  ctx.fillStyle = text.trim()
  // Usually comes back as #rrggbb or rgba(r, g, b, a).
  const style = ctx.fillStyle
  const m = style.match(/^rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)$/)
  if (m) return normalizeHex([m[1], m[2], m[3]].map(Number).map(byteHex).join('') + byteHex(Number(m[4] ?? 1) * 255))
  if (style.startsWith('#')) return normalizeHex(style)
  // Wide-gamut spaces keep their own syntax: paint a pixel and read it back in sRGB.
  ctx.clearRect(0, 0, 1, 1)
  ctx.fillRect(0, 0, 1, 1)
  return normalizeHex([...ctx.getImageData(0, 0, 1, 1).data].map(byteHex).join(''))
}

/** parseColor, dropping the alpha when the picker has none. */
const readHex = (text: string, alpha: boolean) => {
  const n = parseColor(text)
  return n && !alpha ? n.slice(0, 7) : n
}

const toRgb = (hex: string) => {
  const n = parseInt(hex.slice(1, 7), 16)
  return [n >> 16, (n >> 8) & 255, n & 255]
}
const byteHex = (n: number) => Math.round(n).toString(16).padStart(2, '0')

function hexToHsv(hex: string): Hsv {
  const [r, g, b] = toRgb(hex).map((c) => c / 255)
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
  return `#${[f(5), f(3), f(1)].map((c) => byteHex(c * 255)).join('')}`
}

const hsvToHsl = ({ h, s, v }: Hsv) => {
  const l = v * (1 - s / 2)
  return { h, s: l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l), l }
}
const hslToHsv = ({ h, s, l }: { h: number; s: number; l: number }): Hsv => {
  const v = l + s * Math.min(l, 1 - l)
  return { h, s: v ? 2 * (1 - l / v) : 0, v }
}

const clamp = (n: number, max = 1) => Math.min(max, Math.max(0, n))
const pct = (n: number) => Math.round(n * 100)

export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'hsb'
const formats: { value: ColorFormat; label: string }[] = [
  { value: 'hex', label: 'Hex' },
  { value: 'rgb', label: 'RGB' },
  { value: 'hsl', label: 'HSL' },
  { value: 'hsb', label: 'HSB' },
]

/**
 * A compact text field for one channel. It keeps what is typed until Enter or
 * blur, and up/down step the value as in a design tool (Shift for 10).
 */
function ChannelInput({
  label,
  value,
  onCommit,
  onStep,
  disabled,
  className,
}: {
  label: string
  value: string
  /** Gets the typed text; ignore it if it does not parse. */
  onCommit: (text: string) => void
  onStep?: (delta: number) => void
  disabled?: boolean
  className?: string
}) {
  const [draft, setDraft] = useState<string | null>(null)
  const commit = () => {
    if (draft !== null && draft.trim() !== '') onCommit(draft)
    setDraft(null)
  }
  return (
    <input
      type="text"
      inputMode={onStep ? 'numeric' : undefined}
      spellCheck={false}
      autoComplete="off"
      aria-label={label}
      className={cn(inputStyles.control, styles.channel, className)}
      value={draft ?? value}
      disabled={disabled}
      onChange={(e) => setDraft(e.target.value)}
      onFocus={(e) => e.currentTarget.select()}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === 'Enter') commit()
        else if (onStep && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
          e.preventDefault()
          setDraft(null)
          onStep((e.key === 'ArrowUp' ? 1 : -1) * (e.shiftKey ? 10 : 1))
        }
      }}
    />
  )
}

export type Swatch = string | { value: string; label: string }

export interface ColorPanelProps {
  /** `#rrggbb`, or `#rrggbbaa` when not opaque. */
  value?: string
  defaultValue?: string
  onValueChange?: (hex: string) => void
  /** Show the opacity slider and field. Off, the value is always `#rrggbb`. */
  alpha?: boolean
  /** The format of the channel fields when the panel opens. */
  defaultFormat?: ColorFormat
  /** Preset colours under the pickers. A plain string is named by its hex. */
  swatches?: Swatch[]
  disabled?: boolean
  className?: string
}

/**
 * The picker on its own, laid out like Figma's: a saturation/brightness area,
 * hue and opacity strips, channel fields in a chosen
 * format, and optional swatches. Use it inline, or through ColorPicker, which
 * puts it in a popover under a hex field.
 */
export function ColorPanel({
  value,
  defaultValue = '#3b82f6',
  onValueChange,
  alpha = true,
  defaultFormat = 'hex',
  swatches,
  disabled = false,
  className,
}: ColorPanelProps) {
  const id = useId()
  const [valueState, setValueState] = useState(() => readHex(defaultValue, alpha) ?? '#000000')
  const hex = (value !== undefined ? readHex(value, alpha) : null) ?? valueState
  const rgbHex = hex.slice(0, 7)
  const a = hex.length > 7 ? parseInt(hex.slice(7), 16) / 255 : 1
  // Kept as HSV, not read back from hex: at zero saturation or brightness the
  // hex forgets the hue, and the strip would jump to red.
  const [hsv, setHsv] = useState(() => hexToHsv(hex))
  const [shown, setShown] = useState(hex)
  if (hex !== shown) {
    setShown(hex)
    if (hsvToHex(hsv) !== rgbHex) setHsv(hexToHsv(hex))
  }
  const [format, setFormat] = useState(defaultFormat)

  const change = (next: Hsv, nextA = a) => {
    setHsv(next)
    const byte = Math.round(clamp(nextA) * 255)
    const nextHex = hsvToHex(next) + (byte < 255 ? byteHex(byte) : '')
    setShown(nextHex)
    setValueState(nextHex)
    if (nextHex !== hex) onValueChange?.(nextHex)
  }
  // From an RGB colour, keeping the hue where the colour has none.
  const pickRgb = (rgb: string, nextA = a) => {
    const next = hexToHsv(rgb)
    change(next.s && next.v ? next : { ...next, h: hsv.h }, nextA)
  }

  const fromPointer = (e: PointerEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect()
    change({ ...hsv, s: clamp((e.clientX - box.left) / box.width), v: clamp(1 - (e.clientY - box.top) / box.height) })
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
    change({ ...hsv, s: clamp(move.s ?? hsv.s), v: clamp(move.v ?? hsv.v) })
  }

  // Each format as [label, shown value, max, apply]: apply takes a new number
  // for that channel and returns the colour, so typing and stepping share it.
  const rgb = toRgb(rgbHex)
  const hsl = hsvToHsl(hsv)
  const channels: [string, number, number, (n: number) => void][] =
    format === 'rgb'
      ? (['Red', 'Green', 'Blue'] as const).map((name, i) => [
          name,
          rgb[i],
          255,
          (n) => pickRgb(`#${rgb.map((c, j) => byteHex(j === i ? n : c)).join('')}`),
        ])
      : format === 'hsl'
        ? [
            ['Hue degrees', Math.round(hsl.h), 360, (n) => change({ ...hsv, h: n % 360 })],
            ['Saturation percent', pct(hsl.s), 100, (n) => change(hslToHsv({ ...hsl, s: n / 100 }))],
            ['Lightness percent', pct(hsl.l), 100, (n) => change(hslToHsv({ ...hsl, l: n / 100 }))],
          ]
        : format === 'hsb'
          ? [
              ['Hue degrees', Math.round(hsv.h), 360, (n) => change({ ...hsv, h: n % 360 })],
              ['Saturation percent', pct(hsv.s), 100, (n) => change({ ...hsv, s: n / 100 })],
              ['Brightness percent', pct(hsv.v), 100, (n) => change({ ...hsv, v: n / 100 })],
            ]
          : []
  const numeric = (label: string, shownValue: number, max: number, apply: (n: number) => void, className?: string) => (
    <ChannelInput
      key={label}
      label={label}
      value={String(shownValue)}
      className={className}
      disabled={disabled}
      onCommit={(text) => {
        const n = Number(text.replace('%', ''))
        if (Number.isFinite(n)) apply(clamp(Math.round(n), max))
      }}
      onStep={(d) => apply(clamp(shownValue + d, max))}
    />
  )

  const presets = swatches?.map((s) => (typeof s === 'string' ? { value: s, label: s } : s))

  return (
    <div
      className={cn(styles.panel, disabled && styles.disabled, className)}
      style={{ '--picker-hue': hsv.h, '--picker-color': hex, '--picker-rgb': rgbHex } as CSSProperties}
    >
      <div
        className={styles.area}
        data-disabled={disabled || undefined}
        onPointerDown={(e) => {
          if (disabled || e.button !== 0) return
          // Firefox throws on a pointer id it does not know (synthetic events);
          // the click still sets the colour, only the drag needs the capture.
          try {
            e.currentTarget.setPointerCapture(e.pointerId)
          } catch {}
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

      <div className={styles.strips}>
        <Slider.Root
          className={styles.strip}
          min={0}
          max={359}
          value={Math.round(hsv.h) % 360}
          disabled={disabled}
          onValueChange={(h) => change({ ...hsv, h: h as number })}
          thumbAlignment="edge"
        >
          <Slider.Control className={styles.stripControl}>
            <Slider.Track className={cn(styles.stripTrack, styles.hueTrack)}>
              <Slider.Thumb
                className={cn(styles.stripThumb, styles.hueThumb)}
                getAriaLabel={() => 'Hue'}
                getAriaValueText={(_, v) => `${v} degrees`}
              />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
        {alpha && (
          <Slider.Root
            className={styles.strip}
            min={0}
            max={100}
            value={pct(a)}
            disabled={disabled}
            onValueChange={(n) => change(hsv, (n as number) / 100)}
            thumbAlignment="edge"
          >
            <Slider.Control className={styles.stripControl}>
              <Slider.Track className={cn(styles.stripTrack, styles.alphaTrack)}>
                <Slider.Thumb
                  className={cn(styles.stripThumb, styles.alphaThumb)}
                  getAriaLabel={() => 'Opacity'}
                  getAriaValueText={(_, v) => `${v}%`}
                />
              </Slider.Track>
            </Slider.Control>
          </Slider.Root>
        )}
      </div>

      <div className={styles.fields}>
        <Select
          aria-label="Colour format"
          className={styles.format}
          options={formats}
          value={format}
          disabled={disabled}
          onValueChange={(v) => v && setFormat(v as ColorFormat)}
        />
        <span className={cn(boxClass('md'), styles.channels)} data-disabled={disabled || undefined}>
          {format === 'hex' ? (
            <ChannelInput
              label="Hex"
              value={rgbHex.slice(1)}
              className={styles.hexChannel}
              disabled={disabled}
              onCommit={(text) => {
                // Any CSS colour; its alpha too, when it has one.
                const n = readHex(text, alpha)
                if (n) pickRgb(n.slice(0, 7), n.length > 7 ? parseInt(n.slice(7), 16) / 255 : a)
              }}
            />
          ) : (
            channels.map(([label, v, max, apply]) => numeric(label, v, max, apply))
          )}
          {alpha && numeric('Opacity percent', pct(a), 100, (n) => change(hsv, n / 100), styles.alphaChannel)}
          {alpha && (
            <span className={cn(inputStyles.affix, styles.unit)} aria-hidden>
              %
            </span>
          )}
        </span>
      </div>

      {presets && presets.length > 0 && (
        // Native radios: one choice at a time, one tab stop, arrows to move.
        // None is checked while the colour is not one of the swatches.
        <div role="radiogroup" aria-label="Swatches" className={styles.swatches}>
          {presets.map((s) => {
            const sv = readHex(s.value, alpha) ?? s.value
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
                onChange={() => pickRgb(sv.slice(0, 7), sv.length > 7 ? parseInt(sv.slice(7), 16) / 255 : 1)}
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
  /**
   * Under the field. Replaced by a format hint while the typed text is not a
   * colour. The field reads any CSS colour and shows it back as hex.
   */
  helperText?: ReactNode
  validationState?: ValidationState
  size?: InputSize
  isFullWidth?: boolean
  /** Submitted as the hex value. */
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
  alpha = true,
  defaultFormat,
  swatches,
  label,
  helperText,
  validationState,
  size = 'md',
  isFullWidth,
  name,
  disabled,
  required,
  id,
  className,
  'aria-label': ariaLabel,
}: ColorPickerProps) {
  const [valueState, setValueState] = useState(() => readHex(defaultValue, alpha) ?? '#000000')
  const hex = (value !== undefined ? readHex(value, alpha) : null) ?? valueState
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
    const parsed = readHex(text, alpha)
    if (parsed) commit(parsed)
    else setInvalid(true)
  }

  return (
    <InputField
      label={label}
      helperText={invalid ? 'Enter a colour, e.g. #3b82f6, rgb(59 130 246) or hsl(217 91% 60%).' : helperText}
      validationState={invalid ? 'error' : validationState}
      required={required}
      disabled={disabled}
      isFullWidth={isFullWidth}
      className={className}
    >
      <span className={boxClass(size)} onMouseDown={focusControl}>
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
                <ColorPanel value={hex} onValueChange={commit} alpha={alpha} defaultFormat={defaultFormat} swatches={swatches} />
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
