import { Fragment, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import styles from './blocks.module.css'

export interface AnatomyPart {
  /** Short name, as the docs and Figma call the part. */
  name: string
  /** CSS selector for the part, matched inside the example; the first match is marked. */
  selector: string
  description?: ReactNode
}

interface Marker {
  /** Marker centre, relative to the stage. */
  x: number
  y: number
  /** Where its leader line ends: the part's near edge. */
  edge: number
}

const SIZE = 20 // marker diameter, --control-xs
const ROW = 22 // marker centre to the example's edge, inside the stage's padding

/* M3-style placement: a marker sits in a row above the example, over the
   centre of its part, with a line down to the part. Two markers closer than
   a marker's width would overlap, so the later one drops to a row below the
   example, and if that is taken too, slides right to the next free place. */
const place = (targets: (DOMRect | null)[], example: DOMRect): (Marker | null)[] => {
  const rows = { above: [] as number[], below: [] as number[] }
  const free = (row: number[], x: number) => row.every((taken) => Math.abs(taken - x) >= SIZE + 4)
  return targets.map((r) => {
    if (!r) return null
    const cx = r.left + r.width / 2
    let side: keyof typeof rows = free(rows.above, cx) ? 'above' : free(rows.below, cx) ? 'below' : rows.above.length <= rows.below.length ? 'above' : 'below'
    let x = cx
    while (!free(rows[side], x)) x += SIZE + 4
    rows[side].push(x)
    return side === 'above' ? { x, y: example.top - ROW, edge: r.top } : { x, y: example.bottom + ROW, edge: r.bottom }
  })
}

/**
 * The example with a numbered marker for each part, a line from each marker
 * to its part, and a key below. Pass the
 * real component as children: in MDX, `<Story of={Stories.Default} />`. A
 * selector that matches nothing is called out in the key rather than dropped
 * quietly, since it means the component's DOM changed under the docs.
 */
export function Anatomy({ parts, children }: { parts: AnatomyPart[]; children: ReactNode }) {
  const stage = useRef<HTMLDivElement>(null)
  const example = useRef<HTMLDivElement>(null)
  const [markers, setMarkers] = useState<(Marker | null)[]>([])

  useLayoutEffect(() => {
    const measure = () => {
      const box = stage.current?.getBoundingClientRect()
      if (!box || !example.current) return
      const relative = (r: DOMRect) => new DOMRect(r.left - box.left, r.top - box.top, r.width, r.height)
      const next = place(
        parts.map(({ selector }) => {
          const el = example.current!.querySelector(selector)
          return el && relative(el.getBoundingClientRect())
        }),
        relative(example.current.getBoundingClientRect()),
      )
      setMarkers((prev) => (JSON.stringify(prev) === JSON.stringify(next) ? prev : next))
    }
    measure()
    // A <Story> renders after this block mounts, and fonts or a theme switch
    // move the parts, so measure again whenever the example changes.
    const resize = new ResizeObserver(measure)
    resize.observe(stage.current!)
    const mutate = new MutationObserver(measure)
    mutate.observe(example.current!, { subtree: true, childList: true, attributes: true })
    return () => {
      resize.disconnect()
      mutate.disconnect()
    }
  }, [parts])

  return (
    <div className={`sb-unstyled ${styles.block}`}>
      <div ref={stage} className={`${styles.stage} ${styles.anatomy}`}>
        <div ref={example}>{children}</div>
        {markers.map(
          (m, i) =>
            m && (
              <Fragment key={i}>
                <span
                  className={styles.leader}
                  aria-hidden="true"
                  style={{ left: m.x, top: Math.min(m.y, m.edge), height: Math.abs(m.edge - m.y) }}
                />
                <span role="img" aria-label={`${i + 1}: ${parts[i].name}`} className={styles.marker} style={{ left: m.x, top: m.y }}>
                  {i + 1}
                </span>
              </Fragment>
            ),
        )}
      </div>
      {/* Focusable so a keyboard can scroll it when narrow. */}
      <div className={styles.scroll} tabIndex={0} role="group" aria-label="Anatomy key">
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.numeral}>
                #
              </th>
              <th scope="col">Part</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, i) => (
              <tr key={part.name}>
                <td className={styles.numeral}>{i + 1}</td>
                <th scope="row">{part.name}</th>
                <td>
                  {part.description}
                  {markers.length > 0 && !markers[i] && (
                    <span className={styles.missing}>
                      {' '}
                      Not found: <code>{part.selector}</code> matches nothing in the example.
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
