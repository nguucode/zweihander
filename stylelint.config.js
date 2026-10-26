// Spec §5: these properties take a token, not a literal. An exception is a
// `stylelint-disable-next-line … -- <reason>` comment; the reason is required.
const keywords = ['0', 'inherit', 'initial', 'unset', '/var\\(--/']
// Colour keywords that are not a colour of the kit.
// A tint of currentColor carries no colour of its own.
const colorKeywords = [
  ...keywords,
  'transparent',
  'currentColor',
  'currentcolor',
  'none',
  '/^color-mix\\(in [a-z]+, currentColor \\d+%, transparent\\)$/',
]

// Variables Base UI sets on its parts at runtime (popup positioning, panel
// sizes, tab indicator, swipe), read by the stylesheets that style them.
const baseUiVars = [
  '--accordion-panel-height',
  '--anchor-width',
  '--available-height',
  '--available-width',
  '--active-tab-height',
  '--active-tab-left',
  '--active-tab-top',
  '--active-tab-width',
  '--collapsible-panel-height',
  '--drawer-swipe-movement-x',
  '--drawer-swipe-movement-y',
  '--drawer-swipe-progress',
  '--toast-swipe-movement-x',
  '--toast-swipe-movement-y',
  '--transform-origin',
]

export default {
  plugins: ['stylelint-declaration-strict-value', './scripts/stylelint-semantic-tokens.mjs'],
  ignoreFiles: [
    'src/tokens.css', // generated
    'src/App.module.css', // the landing page, not part of the system: its 56–80px and clamp() type have no tokens
  ],
  reportDescriptionlessDisables: true,
  rules: {
    'scale-unlimited/declaration-strict-value': [
      [
        '/^padding/',
        '/^margin/',
        'gap',
        'row-gap',
        'column-gap',
        '/^border(-[a-z]+)*-radius$/',
        'font-size',
        'font-weight',
        'line-height',
        'z-index',
        'transition-duration',
        'animation-duration',
        'outline-offset',
        'outline-width',
        // Colour: semantic tokens only (spec §5, semantic token lint).
        'color',
        '/^background(-color)?$/',
        '/^border(-[a-z]+)*-color$/',
        'outline-color',
        'text-decoration-color',
        'caret-color',
        'accent-color',
        'fill',
        'stroke',
      ],
      {
        ignoreFunctions: false,
        // ponytail: any value containing a var() passes, so max(13px, var(--x)) slips through; tighten if it shows up.
        ignoreValues: {
          '': keywords,
          'font-weight': [...keywords, '400', '500', '600', '700'],
          '/^margin/': [...keywords, 'auto'],
          color: colorKeywords,
          '/^background(-color)?$/': colorKeywords,
          '/^border(-[a-z]+)*-color$/': colorKeywords,
          'outline-color': colorKeywords,
          'text-decoration-color': colorKeywords,
          'caret-color': colorKeywords,
          'accent-color': colorKeywords,
          fill: colorKeywords,
          stroke: colorKeywords,
        },
        expandShorthand: true,
        severity: 'error',
      },
    ],
    // var() reads a semantic token, never a primitive or a name nothing sets.
    // The canvas ones are set only by the consumer, through Theme tokens, to
    // paint an AppShell's canvas their own colour or gradient.
    'zweihander/semantic-tokens': [true, { external: [...baseUiVars, '--canvas', '--canvas-solid', '--canvas-foreground', '--canvas-muted-foreground'] }],
    // A component never declares a token's name (PR #138: a local --radio-dot
    // took on a new token's value). Intended restatements carry a disable comment.
    'zweihander/no-token-shadow': true,
  },
}
