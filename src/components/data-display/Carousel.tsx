import { Children, useCallback, useEffect, useId, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import styles from './Carousel.module.css'

export interface CarouselProps {
  /** One child per slide. */
  children: ReactNode
  /** Names the carousel, e.g. "Featured templates". Required: there may be several on a page. */
  label: string
  /** Slides in view at once. */
  slidesPerView?: number
  /** Show a dot per slide under the track. */
  showDots?: boolean
  /** Advance every this many milliseconds. Paused on hover and focus, and never under reduced motion. */
  autoPlay?: number
  /** Previous/next wrap around at the ends. */
  loop?: boolean
  index?: number
  defaultIndex?: number
  onIndexChange?: (index: number) => void
  className?: string
}

// Measured from the first slide, not the track: offsetLeft counts from the
// offset parent, and in right-to-left the distances (and scrollLeft) are negative.
const offsetOf = (track: HTMLElement, slide: HTMLElement) => slide.offsetLeft - (track.children[0] as HTMLElement).offsetLeft

const motionQuery = '(prefers-reduced-motion: reduce)'
const prefersReducedMotion = () => window.matchMedia(motionQuery).matches
const subscribeMotion = (onChange: () => void) => {
  const query = window.matchMedia(motionQuery)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

export function Carousel({
  children,
  label,
  slidesPerView = 1,
  showDots = true,
  autoPlay,
  loop = false,
  index: indexProp,
  defaultIndex = 0,
  onIndexChange,
  className,
}: CarouselProps) {
  const id = useId()
  const slides = Children.toArray(children)
  const count = slides.length
  const last = Math.max(0, count - slidesPerView)
  const trackRef = useRef<HTMLDivElement>(null)
  const [indexState, setIndexState] = useState(defaultIndex)
  const index = Math.min(indexProp ?? indexState, last)
  const [playing, setPlaying] = useState(autoPlay !== undefined)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useSyncExternalStore(subscribeMotion, prefersReducedMotion, () => false)

  const report = useCallback(
    (next: number) => {
      setIndexState(next)
      onIndexChange?.(next)
    },
    [onIndexChange],
  )

  const goTo = useCallback(
    (next: number) => {
      const target = loop ? (next + last + 1) % (last + 1) : Math.min(Math.max(next, 0), last)
      const track = trackRef.current
      const slide = track?.children[target] as HTMLElement | undefined
      if (track && slide) track.scrollTo({ left: offsetOf(track, slide), behavior: reducedMotion ? 'auto' : 'smooth' })
      report(target)
    },
    [last, loop, reducedMotion, report],
  )

  // Swipes and trackpad scrolls move the track directly; read the index back
  // once it comes to rest. Reading it mid-scroll would report every slide a
  // smooth scroll passes, including the one it started from.
  const settle = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => () => clearTimeout(settle.current), [])
  const onScroll = () => {
    clearTimeout(settle.current)
    settle.current = setTimeout(readIndex, 100)
  }
  const readIndex = () => {
    const track = trackRef.current
    if (!track) return
    const first = track.children[0] as HTMLElement | undefined
    if (!first) return
    const step = first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || '0')
    const next = Math.min(last, Math.max(0, Math.round(Math.abs(track.scrollLeft) / step)))
    if (next !== index) report(next)
  }

  // A controlled index that changes from outside scrolls the track.
  useEffect(() => {
    if (indexProp === undefined) return
    const track = trackRef.current
    const slide = track?.children[index] as HTMLElement | undefined
    if (track && slide && Math.abs(track.scrollLeft - offsetOf(track, slide)) > 1)
      track.scrollTo({ left: offsetOf(track, slide), behavior: reducedMotion ? 'auto' : 'smooth' })
  }, [indexProp, index, reducedMotion])

  const rotating = autoPlay !== undefined && playing && !paused && !reducedMotion
  useEffect(() => {
    if (!rotating) return
    const timer = setInterval(() => goTo(index >= last ? 0 : index + 1), autoPlay)
    return () => clearInterval(timer)
  }, [rotating, autoPlay, index, last, goTo])

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className={cn(styles.carousel, className)}
      style={{ '--carousel-per-view': slidesPerView } as CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false)
      }}
    >
      <div className={styles.controls}>
        {autoPlay !== undefined && (
          <button
            type="button"
            className={styles.button}
            aria-label={playing ? 'Stop automatic slide show' : 'Start automatic slide show'}
            onClick={() => setPlaying(!playing)}
          >
            <Icon name={playing ? 'pause' : 'play'} />
          </button>
        )}
        <button
          type="button"
          className={styles.button}
          aria-label="Previous slide"
          aria-controls={`${id}-track`}
          disabled={!loop && index === 0}
          onClick={() => goTo(index - 1)}
        >
          <Icon name="chevron-left" />
        </button>
        <button
          type="button"
          className={styles.button}
          aria-label="Next slide"
          aria-controls={`${id}-track`}
          disabled={!loop && index >= last}
          onClick={() => goTo(index + 1)}
        >
          <Icon name="chevron-right" />
        </button>
      </div>
      <div
        id={`${id}-track`}
        ref={trackRef}
        className={styles.track}
        // Polite while the reader drives it; silent while it rotates on its own.
        aria-live={rotating ? 'off' : 'polite'}
        // Focusable so arrow keys scroll it, like any scrolling region.
        tabIndex={0}
        onScroll={onScroll}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            className={styles.slide}
          >
            {slide}
          </div>
        ))}
      </div>
      {showDots && last > 0 && (
        <div className={styles.dots}>
          {Array.from({ length: last + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              className={cn(styles.dot, i === index && styles.dotActive)}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              aria-controls={`${id}-track`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
