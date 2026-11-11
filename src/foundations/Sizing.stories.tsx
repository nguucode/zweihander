'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { Select } from '@/components/inputs/Select'
import { TextInput } from '@/components/inputs/TextInput'
import { Icon } from '@/lib/icon'
import docs from './docs.module.css'

// lg is a height only: the default field, which borrows the rest from md.
const TIERS = ['xs', 'sm', 'md', 'lg'] as const
const hasToken = (label: string, tier: string) => tier !== 'lg' || label === 'Height'

/* Each cell is a token, read back in pixels: a probe element takes the token
   as a length and the table shows what it resolves to here, so the numbers
   follow the Theme's radius preset and are never retyped. */
const ROWS = [
  { label: 'Height', token: (t: string) => `--control-${t}`, prop: 'inlineSize' },
  { label: 'Padding, pad', token: (t: string) => `--control-${t}-pad`, prop: 'inlineSize' },
  { label: 'Padding, pad-spacious', token: (t: string) => `--control-${t}-pad-spacious`, prop: 'inlineSize' },
  { label: 'Gap, icon to label', token: (t: string) => `--control-${t}-gap`, prop: 'inlineSize' },
  { label: 'Icon', token: (t: string) => `--icon-${t}`, prop: 'inlineSize' },
  { label: 'Radius, control', token: (t: string) => `--control-${t}-radius`, prop: 'borderTopLeftRadius' },
  { label: 'Radius, field', token: (t: string) => `--control-${t}-radius-field`, prop: 'borderTopLeftRadius' },
] as const

/* Reads every [data-probe] in the table once it is laid out, keyed by its
   probe name. data-prop names the CSS property to read (inlineSize if unset). */
function useProbes() {
  const ref = useRef<HTMLTableElement>(null)
  const [values, setValues] = useState<Record<string, string>>({})

  useLayoutEffect(() => {
    const read: Record<string, string> = {}
    for (const probe of ref.current!.querySelectorAll<HTMLElement>('[data-probe]')) {
      const value = getComputedStyle(probe)[(probe.dataset.prop ?? 'inlineSize') as 'inlineSize']
      // A pill radius computes to 9999px; say what it means.
      read[probe.dataset.probe!] = Number.parseFloat(value) > 1000 ? 'pill' : value
    }
    setValues(read)
  }, [])

  return { ref, values }
}

function TierTable() {
  const { ref, values } = useProbes()

  return (
    <table ref={ref} className={docs.tokenTable}>
      <thead>
        <tr>
          <th>Property</th>
          {TIERS.map((t) => (
            <th key={t}>
              <code>{t}</code>
            </th>
          ))}
          <th>Token</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr key={row.label}>
            <td>{row.label}</td>
            {TIERS.map((t) =>
              hasToken(row.label, t) ? (
                <td key={t} data-token={row.token(t)}>
                  <span
                    data-probe={row.token(t)}
                    data-prop={row.prop}
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      visibility: 'hidden',
                      [row.prop]: `var(${row.token(t)})`,
                    }}
                  />
                  <code>{values[row.token(t)]}</code>
                </td>
              ) : (
                <td key={t}>–</td>
              ),
            )}
            <td>
              <code>{row.token('{tier}')}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const STEPS = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const

/* The ramp, each step read back from its token. */
function BoxRampTable() {
  const { ref, values } = useProbes()

  return (
    <table ref={ref} className={docs.tokenTable}>
      <thead>
        <tr>
          <th>Step</th>
          <th>Size</th>
          <th>Token</th>
        </tr>
      </thead>
      <tbody>
        {STEPS.map((step) => (
          <tr key={step}>
            <td>
              <code>{step}</code>
            </td>
            <td data-token={`--box-${step}`}>
              <span
                data-probe={`--box-${step}`}
                aria-hidden="true"
                style={{ position: 'absolute', visibility: 'hidden', inlineSize: `var(--box-${step})` }}
              />
              <code>{values[`--box-${step}`]}</code>
            </td>
            <td>
              <code>--box-{step}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function ToolbarControls() {
  return (
    <div className={docs.row} style={{ flexWrap: 'wrap' }}>
      <Button startIcon={<Icon name="plus" />}>
        Button
      </Button>
      <TextInput size="sm" aria-label="Text input" placeholder="Text input" prefix={<Icon name="search" />} />
      <Select size="sm" aria-label="Select" placeholder="Select" options={['One', 'Two']} />
    </div>
  )
}

// Narrative and prose live in Sizing.mdx.
const meta = {
  title: 'Foundations/Sizing',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Tiers: Story = {
  render: () => <TierTable />,
  play: async ({ canvasElement }) => {
    const value = (name: string) => canvasElement.querySelector(`[data-token="${name}"] code`)!.textContent
    await expect(value('--control-xs')).toBe('20px')
    await expect(value('--control-sm')).toBe('24px')
    await expect(value('--control-md')).toBe('32px')
    await expect(value('--control-lg')).toBe('40px')
    await expect(value('--icon-xs')).toBe('12px')
    await expect(value('--icon-sm')).toBe('14px')
    await expect(value('--icon-md')).toBe('16px')
    await expect(value('--control-md-pad')).toBe('10px')
    await expect(value('--control-md-pad-spacious')).toBe('12px')
  },
}

export const BoxRamp: Story = {
  render: () => <BoxRampTable />,
  play: async ({ canvasElement }) => {
    const sizes = STEPS.map((step) => canvasElement.querySelector(`[data-token="--box-${step}"] code`)!.textContent)
    await expect(sizes).toEqual(['16px', '20px', '24px', '32px', '40px', '48px'])
  },
}

/* The point of a tier: a default Button and a small field both read md, so
   they carry the same height, icon, corner and type, whoever built them. A
   field is one step taller than a button, so its sm is the Button's md. */
export const SameTier: Story = {
  render: () => <ToolbarControls />,
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button:not([role="combobox"])')!
    const field = canvasElement.querySelector('input')!.parentElement!
    const select = canvasElement.querySelector('[role="combobox"]')!
    const parts = [button, field, select]
    const iconOf = (el: Element) => el.querySelector('svg')!.getBoundingClientRect().width
    const style = (el: Element) => getComputedStyle(el)

    for (const el of parts) {
      await expect(el.getBoundingClientRect().height).toBe(32)
      await expect(iconOf(el)).toBe(16)
      await expect(style(el).fontSize).toBe(style(button).fontSize)
      await expect(style(el).borderTopLeftRadius).toBe(style(button).borderTopLeftRadius)
    }
  },
}
