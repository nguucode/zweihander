import type { ComponentProps, Ref } from 'react'
import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Link.module.css'

export interface LinkProps extends Omit<ComponentProps<'a'>, 'ref'> {
  ref?: Ref<HTMLAnchorElement>
  /** Colour. `accent` is the foreground, as on Button; `secondary` is muted, for footers and meta text. */
  variant?: 'primary' | 'accent' | 'secondary'
  /** Omit to inherit the surrounding text size, which is what a link inside a sentence wants. */
  size?: 'sm' | 'md' | 'lg'
  /** `always` inside running text: colour alone does not mark a link. `hover` only where the context already says "these are links", like a nav list. */
  underline?: 'always' | 'hover'
  /** Opens in a new tab, with `rel="noopener noreferrer"`, an external icon and "(opens in a new tab)" for screen readers. */
  isExternal?: boolean
  /** Rendered without `href`, so it cannot navigate; `aria-disabled` says why. */
  isDisabled?: boolean
  /** Replaces the rendered element, e.g. a router's `<Link />`. */
  render?: useRender.RenderProp
}

export function Link({
  variant = 'primary',
  size,
  underline = 'always',
  isExternal = false,
  isDisabled = false,
  href,
  target,
  rel,
  render,
  className,
  children,
  ...props
}: LinkProps) {
  const external = isExternal && !isDisabled
  // A disabled link does nothing: its handlers are dropped along with href.
  const own = isDisabled
    ? Object.fromEntries(Object.entries(props).filter(([key]) => !/^on[A-Z]/.test(key)))
    : props
  return useRender({
    // Disabled drops the render element as well: a router's Link keeps its
    // own navigation, and only an <a> with no href is truly inert.
    render: isDisabled ? undefined : render,
    defaultTagName: 'a',
    props: mergeProps<'a'>(
      {
        className: cn(
          styles.link,
          styles[variant],
          size && styles[size],
          underline === 'hover' && styles.underlineHover,
          className,
        ),
        children: (
          <>
            {children}
            {external && (
              <>
                <Icon name="external" className={styles.icon} />
                <span className={styles.srOnly}> (opens in a new tab)</span>
              </>
            )}
          </>
        ),
      },
      own as ComponentProps<'a'>,
      {
        ...(!isDisabled && href !== undefined && { href }),
        target: external ? '_blank' : target,
        rel: external ? cn('noopener noreferrer', rel) : rel,
        'aria-disabled': isDisabled || undefined,
      },
    ),
  })
}
