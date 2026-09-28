import { createContext, useContext, useId, useRef, useState, type ComponentProps, type MouseEvent, type ReactNode } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Button } from '../../buttons/Button'
import styles from './AppShell.module.css'

/** Whether the shell has a navigation drawer for narrow screens, and how to open it. */
const DrawerContext = createContext<{ hasDrawer: boolean; isOpen: boolean; open: () => void; label: string }>({
  hasDrawer: false,
  isOpen: false,
  open: () => {},
  label: 'Navigation',
})

/** `null`, `false` and `undefined` render nothing, so they are no navigation either. */
const given = (node: ReactNode) => node != null && node !== false

export interface AppShellProps extends ComponentProps<'div'> {
  /** A Sidebar. Beside the content from 64rem; in the drawer below that. */
  sidebar?: ReactNode
  /** An AppHeader, above the content. */
  header?: ReactNode
  /**
   * What the drawer holds on narrow screens. Defaults to `sidebar`; pass it
   * for a top-navigation shell, whose links move into the drawer below 48rem.
   */
  mobileNavigation?: ReactNode
  /** Names the drawer and its button. */
  navigationLabel?: string
  /** The `id` of the `main` element, which the skip link targets. Generated if not given. */
  mainId?: string
  children: ReactNode
}

/**
 * The frame of an application: navigation, a header, and the page. The
 * sidebar stays put while the content scrolls; on narrow screens the
 * navigation moves into a drawer that the header's menu button opens.
 */
export function AppShell({
  sidebar,
  header,
  mobileNavigation,
  navigationLabel = 'Navigation',
  mainId,
  children,
  className,
  ...props
}: AppShellProps) {
  const [open, setOpen] = useState(false)
  const autoId = useId()
  const mainRef = useRef<HTMLElement>(null)
  const id = mainId ?? `${autoId}main`
  const hasSidebar = given(sidebar)
  const hasMobileNavigation = given(mobileNavigation)
  const drawerContent = hasMobileNavigation ? mobileNavigation : hasSidebar ? sidebar : null
  const hasDrawer = drawerContent !== null
  // A link chosen in the drawer navigates; the drawer should not stay over the new page.
  const closeOnLink = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('a[href]')) setOpen(false)
  }
  return (
    <DrawerContext.Provider value={{ hasDrawer, isOpen: open, open: () => setOpen(true), label: navigationLabel }}>
      <div className={cn(styles.shell, hasSidebar && styles.withSidebar, hasMobileNavigation && styles.withMobileNavigation, className)} {...props}>
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
        <div className={styles.frame}>
          {hasSidebar && <div className={styles.sidebar}>{sidebar}</div>}
          <div className={styles.column}>
            {header}
            <main ref={mainRef} id={id} tabIndex={-1} className={styles.main}>
              {children}
            </main>
          </div>
        </div>
      </div>
      {hasDrawer && (
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Portal>
            <Dialog.Backdrop className={styles.backdrop} />
            <Dialog.Popup className={styles.drawer} onClick={closeOnLink}>
              <Dialog.Title className={styles.srOnly}>{navigationLabel}</Dialog.Title>
              <Dialog.Close className={styles.drawerClose} aria-label={`Close ${navigationLabel.toLowerCase()}`}>
                <Icon name="close" />
              </Dialog.Close>
              {drawerContent}
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </DrawerContext.Provider>
  )
}

export interface AppHeaderProps extends ComponentProps<'header'> {
  /** Breadcrumbs, or a logo and AppNav. */
  start?: ReactNode
  /** Search, notifications, the account menu. */
  end?: ReactNode
  children?: ReactNode
}

/** The bar above the content. Inside an AppShell with navigation it adds the drawer's menu button on narrow screens. */
export function AppHeader({ start, end, children, className, ...props }: AppHeaderProps) {
  const drawer = useContext(DrawerContext)
  return (
    <header className={cn(styles.header, className)} {...props}>
      {drawer.hasDrawer && (
        <Button
          variant="secondary"
          appearance="ghost"
          isIconOnly
          aria-label={`Open ${drawer.label.toLowerCase()}`}
          aria-haspopup="dialog"
          aria-expanded={drawer.isOpen}
          className={styles.menuButton}
          onClick={drawer.open}
        >
          <Icon name="menu" />
        </Button>
      )}
      {start && <div className={styles.start}>{start}</div>}
      {children && <div className={styles.center}>{children}</div>}
      {end && <div className={styles.end}>{end}</div>}
    </header>
  )
}

export interface AppNavItem {
  label: string
  href: string
}

export interface AppNavProps extends Omit<ComponentProps<'nav'>, 'children'> {
  items: AppNavItem[]
  /** The href of the page you are on. */
  currentHref?: string
  'aria-label'?: string
}

/** Top navigation links for a header. Hidden below 48rem, where the drawer holds them. */
export function AppNav({ items, currentHref, className, 'aria-label': ariaLabel = 'Main', ...props }: AppNavProps) {
  return (
    <nav aria-label={ariaLabel} className={cn(styles.nav, className)} {...props}>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={styles.navLink} aria-current={item.href === currentHref ? 'page' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
