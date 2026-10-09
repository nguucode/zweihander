import type { Decorator, Preview } from '@storybook/react-vite'
import { configure } from 'storybook/test'
// Docs-only: the tokens name these faces, but the package never loads a
// font for its consumers.
import '../src/index.css'

// Puts the toolbar's theme on <html>, where the dark token set is scoped.
// Set while rendering rather than in an effect: a decorator is a plain
// function, not a component, so it cannot call hooks, and toggling a class
// to the same value twice is harmless.
// findBy/waitFor wait up to 3s, not 1s: WebKit on the CI's Linux runner plays
// popup open and close transitions well past a second.
configure({ asyncUtilTimeout: 3000 })

const withTheme: Decorator = (Story, context) => {
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
      // -> Components (molecules) -> Patterns (organisms). Foundations are
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
            'Motion',
            'Cursors',
            'Icons',
          ],
          'Components',
          'Patterns',
        ],
      },
    },
  },
};

export default preview;
