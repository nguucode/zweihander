'use client'

import { useId, useLayoutEffect, useRef, useState, type ComponentProps, type ReactNode, type RefObject } from 'react'
import { cn } from '@/lib/utils'
import { AppContent } from '../../patterns/application-ui/AppContent'
import { ShellContext, TopBar } from '../../patterns/application-ui/TopBar'
import styles from './AppShell.module.css'

export type AppShellLayout = 'sidebar' | 'top-bar'
export type AppShellSurface = 'solid' | 'transparent'

/** `null`, `false` and `undefined` render nothing, so they are no navigation either. */
const given = (node: ReactNode) => node != null && node !== false

export interface AppShellProps extends ComponentProps<'div'> {
  /**
   * `sidebar`: the sidebar runs the full height and there is no top bar on
   * wide screens, so search and the account go in the NavSidebar's header
   * and footer. `top-bar`: the header runs the full width above the sidebar and
   * the content.
   */
  layout?: AppShellLayout
  /** The header: `solid` on the card colour, or `transparent` on the canvas. */
  topBarSurface?: AppShellSurface
  /** The sidebar: `solid` on the card colour, or `transparent` on the canvas. */
  sidebarSurface?: AppShellSurface
  /** The logo. The shell places it, in the same spot in either layout. */
  brand?: ReactNode
  /** A NavSidebar. Beside the page at every width; below 64rem it is the icon rail. */
  sidebar?: ReactNode
  /**
   * A TopBar. Above the page in `top-bar`; in `sidebar` only below 64rem,
   * where the rail has no room for search or the account.
   */
  header?: ReactNode
  /** The `id` of the `main` element, which the skip link targets. Generated if not given. */
  mainId?: string
  children: ReactNode
}

/**
 * The frame of an application, a template. It only places three patterns,
 * the TopBar, the NavSidebar and the AppContent, on the Theme's canvas, with no padding or gap of its
 * own; the Theme's `contentStyle` decides whether the page is one flat
 * surface or blocks on the canvas. The sidebar stays put while the content
 * scrolls; on narrow screens it narrows to the icon rail.
 */
export function AppShell({
  layout = 'sidebar',
  topBarSurface = 'solid',
  sidebarSurface = 'transparent',
  brand,
  sidebar,
  header,
  mainId,
  children,
  className,
  ...props
}: AppShellProps) {
  const autoId = useId()
  const mainRef = useRef<HTMLElement>(null)
  const id = mainId ?? `${autoId}main`
  const hasSidebar = given(sidebar)
  const hasBrand = given(brand)
  // The logo is rendered once, in the place it shows: in the sidebar for the
  // sidebar layout while the sidebar is expanded, else in the header.
  // CSS alone would need two copies, and a logo can hold an id or a menu.
  const frameRef = useRef<HTMLDivElement>(null)
  const isWide = useIsWide(frameRef)
  const brandInSidebar = hasBrand && layout === 'sidebar' && hasSidebar && isWide
  const top = given(header) ? header : hasBrand ? <TopBar /> : null
  return (
    <ShellContext.Provider
      value={{
        brand: brandInSidebar ? null : brand,
        brandCell: layout === 'top-bar' && hasSidebar,
        isNarrow: !isWide,
      }}
    >
      <div
        className={cn(
          styles.shell,
          layout === 'top-bar' ? styles.topBarLayout : styles.sidebarLayout,
          hasSidebar && styles.withSidebar,
          hasBrand && styles.withBrand,
          className,
        )}
        {...props}
      >
        {/* Focus is moved by hand: the browser's own jump would also scroll
            the window, and a generated id is not a tidy URL fragment. */}
        <a
          href={`#${id}`}
          className={styles.skip}
          onClick={(e) => {
            e.preventDefault()
            mainRef.current?.focus()
          }}
        >
          Skip to content
        </a>
        {/* The shell is the size container and the frame its grid, so the
            layout follows the shell's own width: an element cannot query itself. */}
        <div ref={frameRef} className={styles.frame}>
          {top && (
            <div className={styles.top} data-surface={topBarSurface}>
              {top}
            </div>
          )}
          {hasSidebar && (
            <div className={styles.sidebar} data-surface={sidebarSurface}>
              {brandInSidebar && <div className={styles.sidebarBrand}>{brand}</div>}
              {sidebar}
            </div>
          )}
          <AppContent ref={mainRef} id={id}>
            {children}
          </AppContent>
        </div>
      </div>
    </ShellContext.Provider>
  )
}

/** Whether the element is at least 64rem wide, where the sidebar is expanded (the CSS container query's twin). */
function useIsWide(ref: RefObject<HTMLElement | null>) {
  const [isWide, setIsWide] = useState(true)
  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    const rem = Number.parseFloat(getComputedStyle(document.documentElement).fontSize)
    // Measured now too, before the first paint, so a phone never sees the expanded sidebar.
    setIsWide(element.clientWidth >= 64 * rem)
    const observer = new ResizeObserver(([entry]) => setIsWide(entry.contentRect.width >= 64 * rem))
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])
  return isWide
}
