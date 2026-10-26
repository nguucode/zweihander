import type { ComponentProps, ReactNode } from 'react'
import { Button } from '../../buttons/Button'
import { Card } from '../../data-display/Card'
import { cn } from '@/lib/utils'
import styles from './AuthLayout.module.css'

export interface AuthLayoutProps extends Omit<ComponentProps<'div'>, 'title'> {
  /** The logo, above the title. */
  brand?: ReactNode
  /** The page's `h1`: what this screen is for ("Sign in to your account"). */
  title: ReactNode
  /** A line under the title. */
  description?: ReactNode
  /** `card`: the form sits in a card on the Theme's canvas. `plain`: straight on the canvas. Ignored with `aside`. */
  appearance?: 'card' | 'plain'
  /**
   * A panel beside the form from 64rem of the page's width: an image, a
   * quote, what is new. Hidden below that, so put nothing in it the
   * reader needs.
   */
  aside?: ReactNode
  /** The aside's accessible name, when it says something (a quote, news). */
  asideLabel?: string
  /** Under the form, outside the card: "No account? Sign up", legal links. */
  footer?: ReactNode
  /** The form. */
  children: ReactNode
}

/** `null`, `false` and `undefined` render nothing, so they are no panel either. */
const given = (node: ReactNode) => node != null && node !== false

/**
 * The frame every auth screen shares (sign in, sign up, reset password,
 * MFA): the logo, the title and the form in one narrow column, centred on
 * the canvas, in a card or not, or beside a panel. It owns no state.
 */
export function AuthLayout({
  brand,
  title,
  description,
  appearance = 'card',
  aside,
  asideLabel,
  footer,
  children,
  className,
  ...props
}: AuthLayoutProps) {
  const isSplit = given(aside)
  return (
    <div className={cn(styles.page, isSplit && styles.split, className)} {...props}>
      {/* The page is the size container and the frame its grid: an element
          cannot query its own width. */}
      <div className={styles.frame}>
        <main className={styles.main}>
          <div className={styles.column}>
            <header className={styles.header}>
              {given(brand) && <div className={styles.brand}>{brand}</div>}
              <h1 className={styles.title}>{title}</h1>
              {given(description) && <p className={styles.description}>{description}</p>}
            </header>
            {appearance === 'card' && !isSplit ? (
              <Card size="lg" className={styles.body}>
                {children}
              </Card>
            ) : (
              <div className={styles.body}>{children}</div>
            )}
            {given(footer) && <div className={styles.footer}>{footer}</div>}
          </div>
        </main>
        {isSplit && (
          <aside className={styles.aside} aria-label={asideLabel}>
            {aside}
          </aside>
        )}
      </div>
    </div>
  )
}

/**
 * Moves focus to the page's title. For a screen whose form gave way to the
 * next step ("Check your email"): the button that was pressed is gone, and
 * focus would fall to the page.
 */
export function focusTitle(page: HTMLElement | null) {
  const title = page?.querySelector('h1')
  if (!title) return
  title.tabIndex = -1
  title.focus()
}

/** The "or" line between the single sign-on buttons and the form. */
export function AuthDivider({ children = 'or' }: { children?: ReactNode }) {
  return <div className={styles.divider}>{children}</div>
}

export interface AuthProvider {
  id: string
  /** The whole button text: "Continue with Google", "Sign in with SSO". */
  label: string
  /** The provider's mark, before the label. */
  icon?: ReactNode
}

/**
 * Single sign-on and social buttons, one full-width button each, then the
 * "or" line. Renders nothing without providers.
 */
export function AuthProviders({
  providers,
  onSelect,
  disabled,
}: {
  providers: AuthProvider[]
  onSelect?: (id: string) => void
  /** While the form is being sent. */
  disabled?: boolean
}) {
  if (providers.length === 0) return null
  return (
    <>
      <div className={styles.providers}>
        {providers.map((provider) => (
          <Button
            key={provider.id}
            variant="secondary"
            appearance="outlined"
            isFullWidth
            startIcon={provider.icon}
            disabled={disabled}
            onClick={() => onSelect?.(provider.id)}
          >
            {provider.label}
          </Button>
        ))}
      </div>
      <AuthDivider />
    </>
  )
}
