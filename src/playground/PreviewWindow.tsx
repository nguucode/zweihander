import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import styles from './PreviewWindow.module.css'
import { VIEWPORTS, type Viewport } from './viewports'

/**
 * A browser window at the device's real size, scaled down as one piece
 * (never up) to fit the space it is given both ways, and centred there.
 * The page goes in `children`; `bar` is the browser chrome above it.
 */
export function PreviewWindow({ vp, bar, children }: { vp: Viewport; bar?: ReactNode; children: ReactNode }) {
  const { width, height } = VIEWPORTS[vp]
  const stage = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ w: 0, h: 0 })

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) =>
      setBox({ w: entry.contentRect.width, h: entry.contentRect.height }),
    )
    observer.observe(stage.current!)
    return () => observer.disconnect()
  }, [])

  // The window keeps the device size, so media and container queries in the
  // page fire as they would on that device; only the transform shrinks it.
  const scale = Math.min(1, box.w / width, box.h / height)

  return (
    <div ref={stage} className={styles.stage}>
      {box.w > 0 && box.h > 0 && (
        <div className={styles.fit} style={{ width: width * scale, height: height * scale }}>
          <div
            data-testid="preview-window"
            className={styles.window}
            style={{ width, height, transform: `scale(${scale})` }}
          >
            {bar}
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      )}
    </div>
  )
}
