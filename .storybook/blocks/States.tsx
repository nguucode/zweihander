import type { ReactNode } from 'react'
import styles from './blocks.module.css'

/** CSS states storybook-addon-pseudo-states can force. */
export type PseudoState = 'hover' | 'focus-visible' | 'active' | 'focus' | 'focus-within'

export interface StateExample {
  label: string
  /** Force this pseudo-class on everything in the example. */
  pseudo?: PseudoState
  /** A different example for this state, e.g. a disabled story. Defaults to the block's children. */
  content?: ReactNode
}

/**
 * The same component in each state, side by side. Hover, focus and pressed
 * are forced with storybook-addon-pseudo-states: it rewrites every `:hover`
 * rule to also match under `.pseudo-hover-all`, the class each cell here
 * carries. The examples are inert, a picture of a state: a reader cannot tab
 * into a row of copies, and a screen reader hears each state's label once.
 */
export function States({ states, children }: { states: StateExample[]; children?: ReactNode }) {
  return (
    <ul className={`sb-unstyled ${styles.block} ${styles.grid} ${styles.states}`}>
      {states.map((state) => (
        <li key={state.label} className={styles.cell}>
          <div className={`${styles.stage} ${state.pseudo ? `pseudo-${state.pseudo}-all` : ''}`} data-state={state.label} inert>
            {state.content ?? children}
          </div>
          <span className={styles.label}>{state.label}</span>
        </li>
      ))}
    </ul>
  )
}
