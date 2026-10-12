import { expect, waitFor } from 'storybook/test'
import type { AnatomyPart } from './Anatomy'

/**
 * The play test behind every `Anatomy` story. The docs markers follow the
 * parts' selectors: a DOM change must not leave a marker pointing at
 * nothing, or two markers at the same element. Waits for the parts, since
 * an overlay renders a frame later. Returns the elements in `parts` order,
 * for checks that each points at the right part.
 */
export async function expectAnatomy(canvasElement: HTMLElement, parts: AnatomyPart[]): Promise<Element[]> {
  // Lists the selectors that match nothing, so a failure names them.
  await waitFor(() => expect(parts.filter(({ selector }) => !canvasElement.querySelector(selector)).map((p) => p.selector)).toEqual([]))
  const found = parts.map(({ selector }) => canvasElement.querySelector(selector)!)
  await expect(new Set(found).size).toBe(parts.length)
  return found
}
