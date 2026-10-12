import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, fn, userEvent } from 'storybook/test'
import { Button } from '../buttons/Button'
import { ErrorState } from './ErrorState'

const meta = {
  title: 'Components/States/ErrorState',
  tags: ['beta'],
  component: ErrorState,
  args: {
    title: 'Couldn’t load projects',
    description: 'The server didn’t answer. Your projects are safe; try again in a moment.',
    action: <Button onClick={fn()}>Try again</Button>,
  },
  // Every prop is listed by hand: react-docgen does not follow the props
  // inherited from EmptyState, so neither the API table nor the Playground
  // would describe them otherwise.
  argTypes: {
    title: {
      description: 'What failed, in the reader\'s words. The default is the last resort, for failures you cannot describe.',
      control: 'text',
      table: { type: { summary: 'ReactNode' }, defaultValue: { summary: "'Something went wrong'" } },
    },
    description: {
      description: 'What happened and what is safe: "Your projects are safe; try again in a moment."',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    details: {
      description: 'A reference for support, e.g. an error code or request id. Shown small and monospaced, selected in one click.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    action: {
      description: 'The way forward, usually "Try again".',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    icon: {
      description: 'Replaces the `danger` icon on the disc. Decorative: hidden from screen readers.',
      control: false,
      table: { type: { summary: 'ReactNode' }, defaultValue: { summary: '<Icon name="danger" />' } },
    },
    isLive: {
      description: 'Makes it a `role="alert"`, announced when it replaces content that was loading.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    size: {
      description: '`sm` for a panel or a table body; `md` for a whole page or section.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    headingLevel: {
      description: 'The title\'s heading level, so it fits the page outline.',
      control: 'inline-radio',
      options: [2, 3, 4, 5, 6],
      table: { type: { summary: '2 | 3 | 4 | 5 | 6' }, defaultValue: { summary: '2' } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof ErrorState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByRole('heading', { level: 2, name: 'Couldn’t load projects' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Try again' })).toBeVisible()
    // The icon is decoration; the title says it.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull()
    // Not announced unless isLive.
    await expect(canvas.queryByRole('alert')).toBeNull()
  },
}

/** A reference for support: small, monospaced, selected in one click. */
export const WithDetails: Story = {
  args: { details: 'Error 503 · req_8f2c91ad' },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Error 503 · req_8f2c91ad')).toBeVisible()
  },
}

export const DefaultTitle: Story = {
  args: { title: undefined, description: 'Reload the page to try again.', action: undefined },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Something went wrong' })).toBeVisible()
  },
}

export const Small: Story = {
  args: { size: 'sm', headingLevel: 3, title: 'Couldn’t load comments', description: undefined, action: <Button size="sm" appearance="outlined" variant="accent">Retry</Button> },
  decorators: [(Story) => <div style={{ maxInlineSize: '20rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>{Story()}</div>],
}

/** Replaces a list that failed to load, and is announced. */
export const Live: Story = {
  render: function Render(args) {
    const [failed, setFailed] = useState(false)
    return failed ? <ErrorState {...args} isLive /> : <Button onClick={() => setFailed(true)}>Load projects</Button>
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Load projects' }))
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Couldn’t load projects')
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Container', selector: 'div:has(> h2)', description: 'Empty State\'s container: centred, padding from the size prop.' },
  { name: 'Icon disc', selector: 'div:has(> h2) > span', description: 'The danger icon on a disc in the danger tone. Decorative.' },
  { name: 'Title', selector: 'h2', description: 'A real heading: what failed.' },
  { name: 'Description', selector: 'div:has(> h2) > p', description: 'Optional. What happened and what is safe.' },
  { name: 'Details', selector: 'div:has(> h2) > p > span', description: 'Optional. A code or request id for support, monospaced.' },
  { name: 'Action', selector: 'div:has(> h2) > div', description: 'Optional. The way forward, usually "Try again".' },
]

/** Every part present, so the docs can point at each. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { details: 'Error 503 · req_8f2c91ad' },
  play: async ({ canvasElement }) => {
    // The docs markers follow these selectors: a DOM change must not leave
    // a marker pointing at nothing, or at the wrong part.
    const found = anatomyParts.map(({ selector }) => canvasElement.querySelector(selector))
    await expect(found.every(Boolean)).toBe(true)
    await expect(new Set(found).size).toBe(anatomyParts.length)
    await expect(found[4]).toHaveTextContent('Error 503')
  },
}

/** Guidelines, Don't: the raw error as the message, and no way forward. */
export const DontRawError: Story = {
  tags: ['!dev'],
  args: {
    title: 'Error',
    description: 'TypeError: Failed to fetch at loadProjects (api.ts:42)',
    action: undefined,
  },
}
