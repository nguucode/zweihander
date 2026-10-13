import { Theme } from '@/theme/Theme'
import styles from './SafariBar.module.css'

/** What the address field shows until the visitor types their own domain. */
export const DEFAULT_ADDRESS = 'example.com'

/**
 * Safari's toolbar on macOS, after the Figma frame (Safari desktop, 1280×52).
 * Drawn in HTML and SVG, not SF Symbols, so it looks the same off Apple
 * systems. Only the address field is real; the rest is decoration and
 * hidden from assistive tech.
 */
export function SafariBar({
  appearance,
  address,
  onAddress,
}: {
  appearance: 'light' | 'dark'
  address: string
  onAddress: (address: string) => void
}) {
  return (
    <Theme appearance={appearance} className={styles.bar}>
      <div aria-hidden className={styles.left}>
        <span className={styles.lights}>
          <span className={styles.close} />
          <span className={styles.minimise} />
          <span className={styles.zoom} />
        </span>
        <svg className={styles.sidebar} width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.3">
          <rect x="1" y="1.5" width="20" height="13" rx="3" />
          <path d="M8 1.5v13M3.5 5h2M3.5 7.5h2M3.5 10h2" strokeLinecap="round" />
        </svg>
        <svg className={styles.more} width="8" height="5" viewBox="0 0 8 5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 1l3 3 3-3" />
        </svg>
        <svg className={styles.back} width="9" height="16" viewBox="0 0 9 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 1.5L1.5 8 8 14.5" />
        </svg>
        <svg className={styles.forward} width="9" height="16" viewBox="0 0 9 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 1.5L7.5 8 1 14.5" />
        </svg>
      </div>

      <svg aria-hidden className={styles.privacy} width="14" height="17" viewBox="0 0 14 17" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
        <path d="M7 1L13 3.2V8c0 3.9-2.7 6.6-6 7.9C3.7 14.6 1 11.9 1 8V3.2L7 1z" />
        <path d="M7 1v14.9C3.7 14.6 1 11.9 1 8V3.2L7 1z" fill="currentColor" />
      </svg>

      {/* A label, so a click anywhere in the field lands in the input. */}
      <label className={styles.field}>
        <span className={styles.address}>
          <svg aria-hidden className={styles.lock} width="9" height="11" viewBox="0 0 9 11" fill="currentColor">
            <path d="M2 4.5V3.2a2.5 2.5 0 0 1 5 0v1.3h.4c.6 0 1.1.5 1.1 1.1v4.3c0 .6-.5 1.1-1.1 1.1H1.6C1 11 .5 10.5.5 9.9V5.6c0-.6.5-1.1 1.1-1.1H2zm1.2 0h2.6V3.2a1.3 1.3 0 0 0-2.6 0v1.3z" />
          </svg>
          {/* The input is as wide as its text (the hidden copy sets it), so the lock stays beside it, centred together. */}
          <span className={styles.sizer}>
            <span aria-hidden className={styles.copy}>
              {address || ' '}
            </span>
            <input
              aria-label="Address"
              // One character wide on its own: the copy beside it sets the width.
              size={1}
              className={styles.input}
              value={address}
              onChange={(e) => onAddress(e.target.value)}
              // On leaving, the field shows what a shared link would: trimmed, or the default when empty.
              onBlur={(e) => onAddress(e.currentTarget.value.trim() || DEFAULT_ADDRESS)}
              inputMode="url"
              spellCheck={false}
              autoComplete="off"
            />
          </span>
        </span>
        <svg aria-hidden className={styles.refresh} width="11" height="13" viewBox="0 0 11 13" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.6 7.4A4.2 4.2 0 1 1 5.5 3H7" />
          <path d="M5.6 1l2 2-2 2" />
        </svg>
      </label>

      <div aria-hidden className={styles.right}>
        <svg className={styles.download} width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8.5" cy="8.5" r="7.6" />
          <path d="M8.5 4.5v7M5.6 8.8l2.9 2.9 2.9-2.9" />
        </svg>
        <svg className={styles.share} width="15" height="19" viewBox="0 0 15 19" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 7H3a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
          <path d="M7.5 12V1M4.5 4l3-3 3 3" />
        </svg>
        <svg className={styles.newTab} width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M7 1v12M1 7h12" />
        </svg>
        <svg className={styles.tabs} width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="0.6" y="0.6" width="5.8" height="5.8" rx="1.6" />
          <rect x="8.6" y="0.6" width="5.8" height="5.8" rx="1.6" />
          <rect x="0.6" y="8.6" width="5.8" height="5.8" rx="1.6" />
          <rect x="8.6" y="8.6" width="5.8" height="5.8" rx="1.6" />
        </svg>
      </div>
    </Theme>
  )
}
