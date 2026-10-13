import type { SVGProps } from 'react'
import { Theme } from '@/theme/Theme'
import { Safari } from './Safari'
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
 * Safari's chrome for the viewport: Magic UI's macOS toolbar on Desktop
 * (1280×52, see Safari.tsx), and after the Figma frames the iPad toolbar under a status bar on
 * Tablet (834×86), and on Mobile a status bar at the top and the iOS bar
 * floating at the bottom, over the page. Drawn in HTML and SVG, not SF
 * Symbols, so it looks the same off Apple systems. Only the address field
 * is real; the rest is decoration and hidden from assistive tech.
 *
 * On Mobile it returns two pieces: the status bar takes room above the
 * page, the floating bar is positioned against the window.
 */
export function SafariBar({ vp, ...props }: BarProps & { vp: Viewport }) {
  if (vp === 'tablet') return <TabletBar {...props} />
  if (vp === 'mobile') return <MobileBar {...props} />
  return <DesktopBar {...props} />
}

function DesktopBar({ appearance, address, onAddress }: BarProps) {
  return (
    <Safari appearance={appearance}>
      <AddressInput address={address} onAddress={onAddress} />
    </Safari>
  )
}

/** iPad Safari: status bar, then the toolbar's glass pills and the centred address pill. */
function TabletBar({ appearance, address, onAddress }: BarProps) {
  return (
    <Theme appearance={appearance} className={styles.tablet}>
      <StatusBar hasDate />
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

/** iPhone Safari (iOS 26): a status bar like the iPad's on top, the bar floating at the bottom. */
function MobileBar({ appearance, address, onAddress }: BarProps) {
  return (
    <>
      <Theme appearance={appearance} className={styles.mobileStatus}>
        <StatusBar />
      </Theme>
      <Theme appearance={appearance} className={styles.mobile}>
        <span aria-hidden className={`${styles.glass} ${styles.round}`}>
          <BackIcon width="11" height="19" />
        </span>
        <label className={`${styles.glass} ${styles.mobileField}`}>
          <svg aria-hidden width="21" height="17" viewBox="0 0 21 17" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <rect x="1" y="1" width="19" height="8" rx="2" />
            <path d="M1.5 12.5h1M5.5 12.5H20M1.5 15.8h1M5.5 15.8H20" />
          </svg>
          <AddressInput address={address} onAddress={onAddress} />
          <svg aria-hidden width="18" height="20" viewBox="0 0 18 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15.7 9.6A6.9 6.9 0 1 1 9.4 4.2" />
            <path d="M9 1l3.2 3.2L9 7.4" fill="currentColor" />
          </svg>
        </label>
        <span aria-hidden className={`${styles.glass} ${styles.round}`}>
          <svg width="20" height="4" viewBox="0 0 20 4" fill="currentColor">
            <circle cx="2" cy="2" r="2" />
            <circle cx="10" cy="2" r="2" />
            <circle cx="18" cy="2" r="2" />
          </svg>
        </span>
      </Theme>
    </>
  )
}

/** Time (and on iPad the date) on the left; signal, Wi-Fi and a full battery on the right. */
function StatusBar({ hasDate }: { hasDate?: boolean }) {
  return (
    <div aria-hidden className={styles.status}>
      <span className={styles.clock}>
        <span>9:41</span>
        {hasDate && <span>Tue Apr 1</span>}
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
        <span>100%</span>
        <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
          <rect x="0.5" y="0.5" width="23" height="11" rx="3.5" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="20" height="8" rx="2" fill="currentColor" />
          <path d="M25 4v4c.8-.3 1.4-1.1 1.4-2s-.6-1.7-1.4-2z" fill="currentColor" opacity="0.4" />
        </svg>
      </span>
    </div>
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

// Icons the Tablet and Mobile bars share, each passing its own size.

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
