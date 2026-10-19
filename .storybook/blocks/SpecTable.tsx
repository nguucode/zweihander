import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import styles from './blocks.module.css'

export interface SpecRow {
  /** The part the row is about: Container, Label, Icon. */
  part: ReactNode
  /** What the token sets: Height, Padding, Background. */
  property: ReactNode
  /** A token name, `--control-md`. docs:check fails a name no stylesheet declares. */
  token: `--${string}`
}

/* Read a token the way the page resolves it: from a probe inside this table,
   so a Theme wrapper's accent or dark scope applies. A colour comes back as
   the browser computes `color: var(token)`; a length as `flex-basis`, which
   resolves calc() and max() to px but stays `auto` when the token is not a
   length. Anything else shows its declared value. */
const SENTINEL = 'rgb(1, 2, 3)'
const resolve = (probe: HTMLElement, token: string) => {
  probe.style.cssText = `color: var(${token}); flex-basis: var(${token})`
  const computed = getComputedStyle(probe)
  const raw = computed.getPropertyValue(token).trim()
  if (!raw) return { kind: 'missing' as const, text: 'Not defined here' }
  if (computed.color !== SENTINEL) return { kind: 'color' as const, text: computed.color }
  if (computed.flexBasis !== 'auto') return { kind: 'length' as const, text: computed.flexBasis }
  return { kind: 'raw' as const, text: raw }
}

/**
 * Part, property and token, with each token's value read live from the CSS:
 * the value column cannot drift from the code, and follows the theme. One
 * table per size (Measurements) or per variant (Color).
 */
export function SpecTable({ rows, caption }: { rows: SpecRow[]; caption?: ReactNode }) {
  const probe = useRef<HTMLSpanElement>(null)
  const [values, setValues] = useState<ReturnType<typeof resolve>[]>([])

  useLayoutEffect(() => {
    const read = () => setValues(rows.map((row) => resolve(probe.current!, row.token)))
    read()
    // The theme and density toolbars and <Theme> switch tokens by class and data attributes.
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-accent', 'data-gray', 'data-density'] })
    return () => observer.disconnect()
  }, [rows])

  return (
    <div className={`sb-unstyled ${styles.block}`}>
      {/* The sentinel colour is inherited by the probe when the token is not a colour. */}
      <span style={{ color: SENTINEL, display: 'none' }}>
        <span ref={probe} />
      </span>
      {/* Focusable so a keyboard can scroll it when narrow. */}
      <div className={styles.scroll} tabIndex={0} role="group" aria-label={typeof caption === 'string' ? caption : 'Tokens'}>
        <table className={styles.table}>
          {caption && <caption className={styles.caption}>{caption}</caption>}
          <thead>
            <tr>
              <th scope="col">Part</th>
              <th scope="col">Property</th>
              <th scope="col">Token</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const value = values[i]
              return (
                <tr key={`${i}${row.token}`}>
                  <td>{row.part}</td>
                  <td>{row.property}</td>
                  <td>
                    <code>{row.token}</code>
                  </td>
                  <td data-kind={value?.kind}>
                    <span className={`${styles.value} ${value?.kind === 'missing' ? styles.missing : ''}`}>
                      {value?.kind === 'color' && (
                        <span className={styles.swatch} style={{ background: `var(${row.token})` }} aria-hidden="true" />
                      )}
                      <code>{value?.text}</code>
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
