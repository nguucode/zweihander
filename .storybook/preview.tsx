import type { Decorator, Preview } from '@storybook/react-vite'
import { configure } from 'storybook/test'
// Docs-only: the tokens name these faces, but the package never loads a
// font for its consumers.
import '../src/index.css'
// The Playground's Preview theme offers these faces: bundled here, so the
// preview never asks a font CDN for them.
import '@fontsource-variable/inter'
import '@fontsource-variable/geist'
import './docs-canvas.css'
import { parsePreviewTheme, PreviewThemeScope } from '../src/playground/PreviewTheme'

// Puts the toolbar's theme on <html>, where the dark token set is scoped.
// Set while rendering rather than in an effect: a decorator is a plain
// function, not a component, so it cannot call hooks, and toggling a class
// to the same value twice is harmless.
// findBy/waitFor wait up to 3s, not 1s: headroom for the CI runner, which runs
// all three browsers at once. WebKit's multi-second popup transitions on Linux
// came from GL shader compiles and are fixed in vite.config.ts, not here.
configure({ asyncUtilTimeout: 3000 })

// The Playground's Preview theme, sent as globals over the channel, wins over
// the toolbar: a story shown in the Playground wears the theme picked there.
const withTheme: Decorator = (Story, context) => {
  const appearance = parsePreviewTheme('appearance', context.globals.appearance)
  if (appearance)
    return (
      <PreviewThemeScope
        appearance={appearance}
        accent={parsePreviewTheme('accent', context.globals.accent)}
        gray={parsePreviewTheme('gray', context.globals.gray)}
        radius={parsePreviewTheme('radius', context.globals.radius)}
        font={parsePreviewTheme('font', context.globals.font)}
        scaling={parsePreviewTheme('scaling', context.globals.scaling)}
      >
        <Story />
      </PreviewThemeScope>
    )
  document.documentElement.classList.toggle('dark', (context.globals.theme ?? 'light') === 'dark')
  return <Story />
}

const preview: Preview = {
  decorators: [withTheme],

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light / dark token set',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    // Set by the Playground over the channel (updateGlobals). Storybook drops
    // a global it was not told about, so it is declared, but with no toolbar:
    // in Storybook itself the toolbar's theme stays the one switch.
    appearance: {
      description: "The Playground's Preview theme: light, dark or system",
    },
    accent: { description: "The Playground's Preview theme: accent colour" },
    gray: { description: "The Playground's Preview theme: gray ramp" },
    radius: { description: "The Playground's Preview theme: radius preset" },
    font: { description: "The Playground's Preview theme: font for body and headings" },
    scaling: { description: "The Playground's Preview theme: spacing and type scale" },
  },

  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // Definition of done: an a11y violation fails the story test. A story
      // that has to opt out sets test: 'off' with a comment saying why.
      test: 'error',
      config: {
        rules: [
          // Base UI's focus guards round an open popup: invisible spans that
          // hand focus back to the trigger. In WebKit they carry role="button"
          // for VoiceOver's sake, which axe flags as a nameless command.
          { id: 'aria-command-name', selector: '[role="link"], [role="button"]:not([data-base-ui-focus-guard]), [role="menuitem"]' },
          // Same guards: aria-hidden yet focusable by design, so Tab lands on them
          // and is sent back into or out of the popup.
          { id: 'aria-hidden-focus', selector: '[aria-hidden="true"]:not([data-base-ui-focus-guard])' },
        ],
      },
    },

    options: {
      // Getting Started first, then atomic design order: Foundations (atoms)
      // -> Components (molecules) -> Patterns (organisms) -> Templates. Foundations are
      // ordered by how they build on each other, not alphabetically.
      storySort: {
        order: [
          'Getting Started',
          ['Introduction', 'Installation'],
          'Foundations',
          [
            'Overview',
            'Colors',
            'Dark mode',
            'Typography',
            'Spacing',
            'Breakpoints',
            'Radius',
            'Shadows',
            'Focus',
            'Motion',
            'Layering',
            'Cursors',
            'Icons',
          ],
          'Components',
          'Patterns',
          'Templates',
          ['Overview'],
          // Tooling for the docs themselves, last.
          'Internal',
        ],
      },
    },
  },
};

export default preview;
