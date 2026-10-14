/*
 * Ported from Magic UI's iPhone (https://magicui.design/docs/components/iphone):
 * the SVG kept, Tailwind and hex colours swapped for CSS Modules and the
 * kit's semantic tokens, a screen that holds children instead of an image,
 * stretched so the screen is the Mobile viewport's 393×852.
 *
 * MIT License
 *
 * Copyright (c) Magic UI
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { useId, type CSSProperties, type ReactNode } from 'react'
import styles from './Iphone.module.css'
import { VIEWPORTS } from './viewports'

// Magic UI's drawing, in its own units.
const PHONE_W = 433
const PHONE_H = 882
const SCREEN_X = 21.25
const SCREEN_Y = 19.25
const SCREEN_W = 389.5
const SCREEN_H = 843.5
const SCREEN_RADIUS = 55.75

// Stretched (under 1% each way) so the screen is the viewport, to the pixel.
const SX = VIEWPORTS.mobile.width / SCREEN_W
const SY = VIEWPORTS.mobile.height / SCREEN_H

/** The phone's outside size, in CSS pixels, with the screen at the Mobile viewport's size. */
export const PHONE = { width: PHONE_W * SX, height: PHONE_H * SY }

/**
 * An iPhone with a camera pill, the page in `children` on its screen. The
 * frame is drawn over the screen and lets clicks through; it is decoration,
 * hidden from assistive tech.
 */
export function Iphone({ style, children }: { style?: CSSProperties; children: ReactNode }) {
  const punch = useId()
  return (
    <div data-testid="device" className={styles.phone} style={{ width: PHONE.width, height: PHONE.height, ...style }}>
      <div
        className={styles.screen}
        style={{
          left: SCREEN_X * SX,
          top: SCREEN_Y * SY,
          width: VIEWPORTS.mobile.width,
          height: VIEWPORTS.mobile.height,
          borderRadius: SCREEN_RADIUS * SX,
        }}
      >
        {children}
      </div>

      <svg
        aria-hidden
        className={styles.frame}
        viewBox={`0 0 ${PHONE_W} ${PHONE_H}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <g mask={`url(#${punch})`}>
          <path
            className={styles.body}
            d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
          />
          <path className={styles.body} d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z" />
          <path className={styles.body} d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z" />
          <path className={styles.body} d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z" />
          <path className={styles.body} d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z" />
          <path
            className={styles.bezel}
            d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
          />
        </g>

        <path
          className={styles.body}
          opacity="0.5"
          d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
        />

        <path
          className={styles.edge}
          mask={`url(#${punch})`}
          d={`M${SCREEN_X} 75C${SCREEN_X} 44.2101 46.2101 ${SCREEN_Y} 77 ${SCREEN_Y}H355C385.79 ${SCREEN_Y} 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 ${SCREEN_X} 837.79 ${SCREEN_X} 807V75Z`}
        />

        {/* The camera pill, over the top of the page. */}
        <path
          className={styles.island}
          d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
        />
        <path
          className={styles.island}
          d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
        />
        <path
          className={styles.lens}
          d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
        />

        <defs>
          <mask id={punch} maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width={PHONE_W} height={PHONE_H} fill="white" />
            <rect
              x={SCREEN_X}
              y={SCREEN_Y}
              width={SCREEN_W}
              height={SCREEN_H}
              rx={SCREEN_RADIUS}
              ry={SCREEN_RADIUS}
              fill="black"
            />
          </mask>
        </defs>
      </svg>
    </div>
  )
}
