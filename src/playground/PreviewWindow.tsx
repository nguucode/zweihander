import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Theme, type AccentColor, type GrayColor } from '@/theme/Theme'
import { HomeIndicator, StatusBar } from './DeviceChrome'
import { Iphone, PHONE } from './Iphone'
import styles from './PreviewWindow.module.css'
import { VIEWPORTS, type Viewport } from './viewports'

/** What the Stage takes from the Preview theme: its colours and appearance, not its radius or scaling. */
export type StageTheme = { accent: AccentColor; gray: GrayColor; appearance: 'light' | 'dark' }

/**
 * The Stage: a wallpaper in the Preview theme's colours, with the device
 * floating on it in a glass frame. The device is a browser window at its
 * real size, scaled down as one piece (never up) to fit the room the Stage
 * leaves inside its padding, and centred there. The page goes in
 * `children`; `bar` is the browser chrome above it. On Mobile the window is
 * an iPhone's screen instead: no glass frame and no `bar`, the phone's
 * status bar and Home indicator over the page, and the phone, not the
 * window, is what scales.
 */
export function PreviewWindow({
  vp,
  theme,
  bar,
  children,
}: {
  vp: Viewport
  theme: StageTheme
  bar?: ReactNode
  children: ReactNode
}) {
  const { width, height } = VIEWPORTS[vp]
  const stage = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ w: 0, h: 0 })

  useLayoutEffect(() => {
    // The content box: the padding is the wallpaper's margin around the frame.
    const observer = new ResizeObserver(([entry]) =>
      setBox({ w: entry.contentRect.width, h: entry.contentRect.height }),
    )
    observer.observe(stage.current!)
    return () => observer.disconnect()
  }, [])

  // The window keeps the device size, so media and container queries in the
  // page fire as they would on that device; only the transform shrinks it.
  const isPhone = vp === 'mobile'
  const outer = isPhone ? PHONE : { width, height }
  const scale = Math.min(1, box.w / outer.width, box.h / outer.height)

  return (
    <Theme
      ref={stage}
      data-testid="stage"
      className={styles.stage}
      appearance={theme.appearance}
      accentColor={theme.accent}
      grayColor={theme.gray}
    >
      <Wallpaper />
      {box.w > 0 && box.h > 0 && (
        <div
          className={isPhone ? styles.phoneFit : styles.fit}
          style={{ width: outer.width * scale, height: outer.height * scale }}
        >
          {isPhone ? (
            <Iphone style={{ transform: `scale(${scale})` }}>
              <div data-testid="preview-window" className={styles.window}>
                <div className={styles.content}>{children}</div>
                <StatusBar device="phone" />
                <HomeIndicator />
              </div>
            </Iphone>
          ) : (
            <div
              data-testid="preview-window"
              className={`${styles.window} ${styles.browser}`}
              // The corners are rounded before the transform shrinks them.
              style={{ width, height, transform: `scale(${scale})`, '--window-scale': scale } as CSSProperties}
            >
              {bar}
              <div className={styles.content}>{children}</div>
            </div>
          )}
        </div>
      )}
    </Theme>
  )
}

/** Soft bands over a gradient, all in the Stage's accent. Decoration only. */
function Wallpaper() {
  return (
    <div aria-hidden data-testid="wallpaper" className={styles.wallpaper}>
      <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
        <path className={styles.bandTop} d="M0 260C280 120 520 380 860 250S1380 40 1600 130V0H0Z" />
        <path className={styles.bandMiddle} d="M0 560C300 420 520 720 860 600S1340 360 1600 470V1000H0Z" />
        <path className={styles.bandBottom} d="M0 760C340 640 600 880 920 780S1380 620 1600 700V1000H0Z" />
      </svg>
    </div>
  )
}
