import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // Docs blocks for the component docs pages, and their tests.
    "./blocks/*.mdx",
    "./blocks/*.stories.tsx"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    {
      // Storybook's MDX is CommonMark by default, which has no table
      // syntax — without this, every table in the Foundations docs renders
      // as a line of literal pipes.
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-mcp",
    // Forces :hover, :focus-visible and :active for the <States> docs block.
    "storybook-addon-pseudo-states"
  ],
  "framework": "@storybook/react-vite",
  "staticDirs": ["../public"]
};
export default config;
