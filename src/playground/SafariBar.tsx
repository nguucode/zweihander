import type { SVGProps } from 'react'
import { Theme } from '@/theme/Theme'
import { StatusBar } from './DeviceChrome'
import styles from './SafariBar.module.css'
import type { Viewport } from './viewports'

/** What the address field shows until the visitor types their own domain. */
export const DEFAULT_ADDRESS = 'example.com'

type BarProps = {
  appearance: 'light' | 'dark'
  address: string
  onAddress: (address: string) => void
}

/**
 * Safari's chrome for the viewport, after the Figma frames: the macOS
 * toolbar on Desktop (1280×52) and the iPad toolbar under a status bar on
 * Tablet (834×86). Mobile has none: the page fills the phone's screen.
 * Drawn in HTML and SVG, not SF Symbols, so it looks the same off Apple
 * systems. Only the address field is real; the rest is decoration and
 * hidden from assistive tech.
 */
export function SafariBar({ vp, ...props }: BarProps & { vp: Viewport }) {
  if (vp === 'tablet') return <TabletBar {...props} />
  if (vp === 'mobile') return null
  return <DesktopBar {...props} />
}

function DesktopBar({ appearance, address, onAddress }: BarProps) {
  return (
    <Theme appearance={appearance} className={styles.bar}>
      <div aria-hidden className={styles.left}>
        <span className={styles.lights}>
          <span className={styles.close} />
          <span className={styles.minimise} />
          <span className={styles.zoom} />
        </span>
        <SidebarIcon className={styles.sidebar} />
        <svg className={styles.more} width="8" height="5" viewBox="0 0 8 5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 1l3 3 3-3" />
        </svg>
        <BackIcon className={styles.back} />
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
          <AddressInput address={address} onAddress={onAddress} />
        </span>
        <RefreshIcon className={styles.refresh} />
      </label>

      <div aria-hidden className={styles.right}>
        <svg className={styles.download} width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8.5" cy="8.5" r="7.6" />
          <path d="M8.5 4.5v7M5.6 8.8l2.9 2.9 2.9-2.9" />
        </svg>
        <ShareIcon className={styles.share} />
        <PlusIcon className={styles.newTab} />
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

/** iPad Safari: status bar, then the toolbar's glass pills and the centred address pill. */
function TabletBar({ appearance, address, onAddress }: BarProps) {
  return (
    <Theme appearance={appearance} className={styles.tablet}>
      <StatusBar device="tablet" />
      <div aria-hidden className={styles.controls}>
        <span className={styles.leading}>
          <span className={styles.pill}>
            <span className={styles.symbol}>
              <SidebarIcon width="24" height="18" />
            </span>
          </span>
          <span className={styles.pill}>
            <span className={styles.symbol}>
              <BackIcon width="11" height="19" />
            </span>
          </span>
        </span>
        <span className={styles.pill}>
          <span className={styles.symbol}>
            <ShareIcon width="17" height="22" />
          </span>
          <span className={styles.symbol}>
            <PlusIcon width="17" height="17" />
          </span>
          <span className={styles.symbol}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
              <rect x="1" y="5.5" width="13.5" height="13.5" rx="3" />
              <path d="M5.5 4.5V4a3 3 0 0 1 3-3H16a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-.5" />
            </svg>
          </span>
        </span>
      </div>
      <label className={`${styles.pill} ${styles.tabletField}`}>
        <AddressInput address={address} onAddress={onAddress} />
        <RefreshIcon className={styles.tabletRefresh} width="16" height="19" />
      </label>
    </Theme>
  )
}

/**
 * The address input, as wide as its text (a hidden copy sets the width), so
 * whatever sits beside it stays centred with it. The text size is the field's.
 */
function AddressInput({ address, onAddress }: Pick<BarProps, 'address' | 'onAddress'>) {
  return (
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
  )
}

// Icons the bars share; the Desktop size is the default, the others pass their own.

function SidebarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.3" {...props}>
      <rect x="1" y="1.5" width="20" height="13" rx="3" />
      <path d="M8 1.5v13M3.5 5h2M3.5 7.5h2M3.5 10h2" strokeLinecap="round" />
    </svg>
  )
}

function BackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 1.5L1.5 8 8 14.5" />
    </svg>
  )
}

function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 7H3a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
      <path d="M7.5 12V1M4.5 4l3-3 3 3" />
    </svg>
  )
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...props}>
      <path d="M7 1v12M1 7h12" />
    </svg>
  )
}

function RefreshIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden width="11" height="13" viewBox="0 0 11 13" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.6 7.4A4.2 4.2 0 1 1 5.5 3H7" />
      <path d="M5.6 1l2 2-2 2" />
    </svg>
  )
}
