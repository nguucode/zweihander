import styles from './DeviceChrome.module.css'

/**
 * iOS status bar, drawn in HTML and SVG (not Apple's assets): 9:41 on the
 * left, signal, Wi-Fi and a full battery on the right. On a phone the two
 * sides sit either side of the camera pill; on a tablet they run along the
 * top with the date and the battery percentage. Over the page either way,
 * which fills the screen under it. Decoration
 * only, hidden from assistive tech; its colour is the appearance's.
 */
export function StatusBar({ device }: { device: 'phone' | 'tablet' }) {
  const isTablet = device === 'tablet'
  return (
    <div aria-hidden data-testid="status-bar" className={`${styles.status} ${styles[device]}`}>
      <span className={styles.clock}>
        <span>9:41</span>
        {isTablet && <span>Tue Apr 1</span>}
      </span>
      <span className={styles.signals}>
        <svg width="17" height="10" viewBox="0 0 17 10" fill="currentColor">
          <rect x="0" y="7" width="3" height="3" rx="0.7" />
          <rect x="4.5" y="5" width="3" height="5" rx="0.7" />
          <rect x="9" y="2.5" width="3" height="7.5" rx="0.7" />
          <rect x="13.5" y="0" width="3" height="10" rx="0.7" />
        </svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
          <path d="M7 2.2c2 0 3.8.8 5.1 2l1-1A8.6 8.6 0 0 0 7 .8 8.6 8.6 0 0 0 .9 3.2l1 1A7.2 7.2 0 0 1 7 2.2z" />
          <path d="M7 5c1.2 0 2.3.5 3.1 1.2l1-1A5.8 5.8 0 0 0 7 3.6c-1.6 0-3 .6-4.1 1.6l1 1A4.4 4.4 0 0 1 7 5z" />
          <path d="M7 7.8c.5 0 .9.2 1.2.5L7 9.6 5.8 8.3c.3-.3.7-.5 1.2-.5z" />
        </svg>
        {isTablet && <span>100%</span>}
        <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
          <rect x="0.5" y="0.5" width="23" height="11" rx="3.5" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="20" height="8" rx="2" fill="currentColor" />
          <path d="M25 4v4c.8-.3 1.4-1.1 1.4-2s-.6-1.7-1.4-2z" fill="currentColor" opacity="0.4" />
        </svg>
      </span>
    </div>
  )
}

/** The bar at the bottom of an iPhone or iPad screen, over the page. Decoration only. */
export function HomeIndicator() {
  return <div aria-hidden data-testid="home-indicator" className={styles.home} />
}
