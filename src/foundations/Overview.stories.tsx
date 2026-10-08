import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from '@/components/buttons/Button'
import { TextInput } from '@/components/inputs/TextInput'
import { ACCENT_COLORS, GRAY_COLORS, SCALINGS, Theme } from '@/theme/Theme'
import docs from './docs.module.css'

function Panel({ label }: { label: string }) {
  return (
    <div
      className={docs.card}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', background: 'var(--card)', color: 'var(--card-foreground)' }}
    >
      <span style={{ fontSize: 'var(--text-body)', fontWeight: 500 }}>{label}</span>
      <TextInput label="Email" placeholder="you@example.com" />
      <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  )
}

// Narrative and prose live in Overview.mdx.
const meta = {
  title: 'Foundations/Overview',
  component: Theme,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Theme>

export default meta
type Story = StoryObj<typeof meta>

export const AccentColor: Story = {
  name: 'Accent color',
  render: () => (
    <div className={docs.stackWide} style={{ gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
        {ACCENT_COLORS.map((accent) => (
          <Theme key={accent} accentColor={accent} render={<Button size="sm" />}>
            {accent}
          </Theme>
        ))}
      </div>
      <p className={docs.note}>
        Every label above clears 4.5:1 on its own fill — the warm hues take dark
        labels rather than white.
      </p>
    </div>
  ),
  play: async ({ canvas }) => {
    const solid = (name: string) =>
      getComputedStyle(canvas.getByRole('button', { name })).backgroundColor
    // Changing the accent has to actually move --primary.
    await expect(solid('blue')).not.toBe(solid('red'))
  },
}

export const GrayColor: Story = {
  name: 'Gray color',
  render: () => (
    <div className={docs.gridThirds}>
      {GRAY_COLORS.map((gray) => (
        <Theme key={gray} grayColor={gray} appearance="dark" style={{ borderRadius: 'var(--radius-panel)', padding: 'var(--space-3)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 'var(--radius-field)',
              background: 'var(--background)',
              padding: 'var(--space-2) var(--space-3)',
            }}
          >
            <span style={{ fontSize: 'var(--text-body)', color: 'var(--foreground)' }}>{gray}</span>
            <span style={{ fontSize: 'var(--text-body)', color: 'var(--muted-foreground)' }}>muted</span>
          </div>
        </Theme>
      ))}
    </div>
  ),
}

export const Scaling: Story = {
  render: () => (
    <div className={docs.stackWide} style={{ gap: 'var(--space-4)' }}>
      {SCALINGS.map((scaling) => (
        <Theme key={scaling} scaling={scaling} className={docs.row} style={{ gap: 'var(--space-3)' }}>
          <span className={docs.caption} style={{ width: '3rem', flexShrink: 0 }}>{scaling}</span>
          <Button>Button</Button>
          <div style={{ width: '10rem' }}>
            <TextInput aria-label="Input" placeholder="Input" isFullWidth />
          </div>
        </Theme>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    const h = (label: string) =>
      canvas.getByText(label).parentElement!.querySelector('button')!.getBoundingClientRect().height
    // Scaling drives --spacing, so the control height has to follow it.
    await expect(h('90%')).toBeLessThan(h('110%'))
  },
}

export const Appearance: Story = {
  render: () => (
    <div className={docs.gridHalves} style={{ gap: 'var(--space-4)' }}>
      <Theme appearance="light" style={{ borderRadius: 'var(--radius-panel)', background: 'var(--background)', padding: 'var(--space-4)' }}>
        <Panel label="appearance=&quot;light&quot;" />
      </Theme>
      <Theme appearance="dark" style={{ borderRadius: 'var(--radius-panel)', background: 'var(--background)', padding: 'var(--space-4)' }}>
        <Panel label="appearance=&quot;dark&quot;" />
      </Theme>
    </div>
  ),
  play: async ({ canvas }) => {
    const [light, dark] = canvas.getAllByText(/appearance=/)
    const bg = (el: HTMLElement) =>
      getComputedStyle(el.closest('.light, .dark') as HTMLElement).getPropertyValue('--background')
    await expect(bg(light)).not.toBe(bg(dark))
  },
}

export const TokenOverride: Story = {
  // Shows a consumer's own --primary override; its contrast is the consumer's, not the kit's.
  parameters: { a11y: { test: 'off' } },
  name: 'Token override',
  render: () => (
    <div className={docs.gridHalves} style={{ gap: 'var(--space-4)' }}>
      <Theme style={{ borderRadius: 'var(--radius-panel)', padding: 'var(--space-4)' }}>
        <Panel label="default tokens" />
      </Theme>
      <Theme style={{ borderRadius: 'var(--radius-panel)', padding: 'var(--space-4)' }} tokens={{ radius: '1.5rem', primary: 'oklch(0.55 0.2 150)' }}>
        <Panel label="radius + primary overridden" />
      </Theme>
    </div>
  ),
  play: async ({ canvas }) => {
    const scope = canvas.getByText('radius + primary overridden').closest('div[style]')
    await expect(scope).toHaveStyle({ '--radius': '1.5rem' })
  },
}

export const Nested: Story = {
  render: () => (
    <Theme appearance="dark" style={{ borderRadius: 'var(--radius-panel)', background: 'var(--background)', padding: 'var(--space-4)' }}>
      <div className={docs.stackWide} style={{ gap: 'var(--space-4)' }}>
        <Panel label="dark page" />
        <Theme appearance="light" style={{ borderRadius: 'var(--radius-panel)', background: 'var(--background)', padding: 'var(--space-4)' }}>
          <Panel label="light island inside it" />
        </Theme>
      </div>
    </Theme>
  ),
  play: async ({ canvas }) => {
    const island = canvas.getByText('light island inside it').closest('.light')
    await expect(island).toBeInTheDocument()
    const bg = (el: Element) => getComputedStyle(el as HTMLElement).getPropertyValue('--background').trim()
    // Compared against :root rather than a literal, so the assertion is about
    // the nested scope resolving to the light default — not about how the
    // generator happens to spell oklch().
    await expect(bg(island!)).toBe(bg(document.documentElement))
    await expect(bg(island!)).not.toBe(bg(island!.parentElement!.closest('.dark')!))
  },
}

/**
 * An accent or gray set on a light island inside a dark page takes the
 * island's appearance, not the page's: the nearest scope wins at any depth.
 */
export const NestedPalettes: Story = {
  render: () => (
    <Theme appearance="dark" accentColor="orange" grayColor="slate" data-testid="dark" style={{ background: 'var(--background)', padding: 'var(--space-4)' }}>
      <Theme appearance="light" style={{ background: 'var(--background)', padding: 'var(--space-4)' }}>
        <Theme accentColor="orange" grayColor="slate" data-testid="island">
          <Panel label="orange on slate, light, inside dark" />
          <Theme appearance="dark" style={{ padding: 'var(--space-2)' }}>
            <Theme accentColor="orange" grayColor="slate" data-testid="deep">
              <Panel label="and dark again inside that" />
            </Theme>
          </Theme>
        </Theme>
        <Theme accentColor="orange" grayColor="slate" appearance="dark" data-testid="same-element">
          <Panel label="accent and appearance on one element" />
        </Theme>
      </Theme>
    </Theme>
  ),
  play: async ({ canvas }) => {
    const v = (el: Element, name: string) => getComputedStyle(el).getPropertyValue(name).trim()
    const dark = canvas.getByTestId('dark')
    const island = canvas.getByTestId('island')
    for (const name of ['--primary-text', '--primary', '--ring', '--foreground', '--muted-foreground', '--control-border']) {
      // Light inside dark: the light palette, not the page's dark one.
      await expect(v(island, name)).not.toBe(v(dark, name))
      // Dark again one level down, and on the same element: the dark palette.
      await expect(v(canvas.getByTestId('deep'), name)).toBe(v(dark, name))
      await expect(v(canvas.getByTestId('same-element'), name)).toBe(v(dark, name))
    }
  },
}
