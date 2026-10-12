import { Children, isValidElement, useEffect, useState, type ReactElement, type ReactNode } from 'react'
import { Tabs } from '@/components/navigation/Tabs'

export type DocTabValue = 'overview' | 'specs' | 'guidelines'

const LABELS: Record<DocTabValue, string> = { overview: 'Overview', specs: 'Specs', guidelines: 'Guidelines' }
// Not ?tab=: Storybook reads that as an addon tab and hides the canvas.
const PARAM = 'docTab'

export interface DocTabProps {
  value: DocTabValue
  children?: ReactNode
}

/** One tab of a component docs page. Renders only inside <DocTabs>. */
export function DocTab(_: DocTabProps) {
  return null
}

/* The selected tab lives in the URL (?docTab=specs) so a link can open on it.
   The docs page renders in Storybook's preview iframe; the address bar is the
   manager's, one frame up and same-origin. Only in docs view mode: anywhere
   else (a story test) the top window is not Storybook's. Best effort: a
   cross-origin parent throws, and Storybook may drop the parameter when it
   rewrites its own URL. */
const addressBar = () => {
  try {
    if (new URL(window.location.href).searchParams.get('viewMode') !== 'docs') return null
    const top = window.top ?? window
    void top.location.href // throws when cross-origin
    return top
  } catch {
    return null
  }
}

const readTab = (): DocTabValue | null => {
  const value = addressBar() && new URL(addressBar()!.location.href).searchParams.get(PARAM)
  return value && value in LABELS ? (value as DocTabValue) : null
}

const writeTab = (value: DocTabValue) => {
  const top = addressBar()
  if (!top) return
  const url = new URL(top.location.href)
  if (value === 'overview') url.searchParams.delete(PARAM)
  else url.searchParams.set(PARAM, value)
  top.history.replaceState(top.history.state, '', url)
}

/**
 * The three tabs of a component docs page: Overview, Specs, Guidelines, in
 * that order, Overview first. Write each as a <DocTab value="…"> child with
 * Markdown inside; docs:check fails a page whose tabs or sections are missing.
 */
export function DocTabs({ children }: { children: ReactNode }) {
  const tabs = Children.toArray(children).filter(
    (child): child is ReactElement<DocTabProps> => isValidElement(child) && child.type === DocTab,
  )
  const [value, setValue] = useState<DocTabValue>(() => readTab() ?? 'overview')
  // Leaving the page drops ?tab, or the next page would open on this tab.
  useEffect(() => () => writeTab('overview'), [])

  return (
    <Tabs
      aria-label="Documentation"
      // Arrow keys switch the page, as on a docs site, rather than only
      // moving focus.
      activateOnFocus
      value={value}
      onValueChange={(next) => {
        setValue(next as DocTabValue)
        writeTab(next as DocTabValue)
      }}
      items={tabs.map((tab) => ({
        value: tab.props.value,
        label: LABELS[tab.props.value],
        // The page's own Markdown, styled by Storybook's docs theme. The
        // tab bar is buttons and divs, which that theme leaves alone.
        content: tab.props.children,
      }))}
    />
  )
}
