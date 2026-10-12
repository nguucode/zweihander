import { useState, type HTMLAttributes, type ReactNode } from 'react'

/**
 * An overlay (menu, modal, popover, tooltip) open in place, as a picture:
 * pass `container` on to the component so it renders inside the story
 * instead of `<body>`. Inert, so a docs page can show it beside other
 * examples without it taking focus. Pass the component's `positioner` class
 * to keep the popup in the flow, where it opens: positioned, it would flip
 * to the other side of the trigger whenever the picture sits near the edge
 * of the window, out of its frame. Other props go on the frame.
 *
 * ```tsx
 * <Pictured positioner={styles.positioner}>{(container) => <Menu {...args} open isModal={false} container={container} />}</Pictured>
 * ```
 */
export function Pictured({
  positioner,
  children,
  ...props
}: Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  positioner?: string
  children: (container: HTMLDivElement) => ReactNode
}) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  return (
    <div ref={setContainer} inert data-picture="" {...props}>
      {positioner && <style>{`[data-picture] .${positioner} { position: static !important; transform: none !important; }`}</style>}
      {container && children(container)}
    </div>
  )
}
