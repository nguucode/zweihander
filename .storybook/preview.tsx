import type { Decorator, Preview } from '@storybook/react-vite'
// Docs-only: the tokens name these faces, but the package never loads a
// font for its consumers.
import '../src/index.css'

// Puts the toolbar's theme on <html>, where the dark token set is scoped.
// Set while rendering rather than in an effect: a decorator is a plain
// function, not a component, so it cannot call hooks, and toggling a class
// to the same value twice is harmless.
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
      test: 'error'
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
