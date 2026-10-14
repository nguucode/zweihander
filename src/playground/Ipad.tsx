import { useId, type CSSProperties, type ReactNode } from 'react'
import styles from './DeviceFrame.module.css'
import { VIEWPORTS } from './viewports'

// Drawn in CSS pixels, in the iPhone frame's language (Iphone.tsx): a body
// rim, a bezel in the card colour, a hairline edge round the screen, the
// camera near black. Even bezels and a camera on the top edge, as an iPad
// in portrait. Room around the body for the buttons that stand off it.
const SCREEN = VIEWPORTS.tablet
const OFF = 2 // the buttons' depth, outside the body
const RIM = 4 // the body's own edge, outside the bezel
const BEZEL = 26 // from the body's edge to the screen
const SCREEN_RADIUS = 18
const BODY_RADIUS = SCREEN_RADIUS + BEZEL

/** The tablet's outside size, in CSS pixels, with the screen at the Tablet viewport's size. */
export const TABLET = { width: SCREEN.width + 2 * (BEZEL + OFF), height: SCREEN.height + 2 * (BEZEL + OFF) }

/**
 * An iPad with a front camera, the page in `children` on its screen. The
 * frame is drawn over the screen and lets clicks through; it is decoration,
 * hidden from assistive tech.
 */
export function Ipad({ style, children }: { style?: CSSProperties; children: ReactNode }) {
  const punch = useId()
  const { width: w, height: h } = TABLET
  const inset = OFF + BEZEL
  return (
    <div
      data-testid="device"
      className={styles.device}
      // The body's corner, so the shadow follows the tablet, not its box.
      style={{ width: w, height: h, borderRadius: BODY_RADIUS + OFF, ...style }}
    >
      <div
        className={styles.screen}
        style={{ left: inset, top: inset, width: SCREEN.width, height: SCREEN.height, borderRadius: SCREEN_RADIUS }}
      >
        {children}
      </div>

      <svg aria-hidden className={styles.frame} viewBox={`0 0 ${w} ${h}`} fill="none">
        <g mask={`url(#${punch})`}>
          <rect className={styles.body} x={OFF} y={OFF} width={w - 2 * OFF} height={h - 2 * OFF} rx={BODY_RADIUS} />
          {/* Top button, then the volume buttons down the right edge. */}
          <rect className={styles.body} x={w - 150} y={0} width={60} height={OFF + 1} rx={1} />
          <rect className={styles.body} x={w - OFF - 1} y={110} width={OFF + 1} height={50} rx={1} />
          <rect className={styles.body} x={w - OFF - 1} y={172} width={OFF + 1} height={50} rx={1} />
          <rect
            className={styles.bezel}
            x={OFF + RIM}
            y={OFF + RIM}
            width={w - 2 * (OFF + RIM)}
            height={h - 2 * (OFF + RIM)}
            rx={BODY_RADIUS - RIM}
          />
        </g>

        <rect
          className={styles.edge}
          mask={`url(#${punch})`}
          x={inset}
          y={inset}
          width={SCREEN.width}
          height={SCREEN.height}
          rx={SCREEN_RADIUS}
        />

        {/* The camera, centred in the top bezel. */}
        <circle className={styles.island} cx={w / 2} cy={OFF + BEZEL / 2} r={4.5} />
        <circle className={styles.lens} cx={w / 2} cy={OFF + BEZEL / 2} r={2} />

        <defs>
          <mask id={punch} maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width={w} height={h} fill="white" />
            <rect x={inset} y={inset} width={SCREEN.width} height={SCREEN.height} rx={SCREEN_RADIUS} fill="black" />
          </mask>
        </defs>
      </svg>
    </div>
  )
}
