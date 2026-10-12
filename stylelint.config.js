// Spec §5: these properties take a token, not a literal. An exception is a
// `stylelint-disable-next-line … -- <reason>` comment; the reason is required.
const keywords = ['0', 'inherit', 'initial', 'unset', 'currentColor', 'transparent', /var\(--/.toString()]

export default {
  plugins: ['stylelint-declaration-strict-value'],
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
      ],
      {
        ignoreFunctions: false,
        // ponytail: any value containing a var() passes, so max(13px, var(--x)) slips through; tighten if it shows up.
        ignoreValues: {
          '': keywords,
          'font-weight': [...keywords, '400', '500', '600', '700'],
          '/^margin/': [...keywords, 'auto'],
        },
        expandShorthand: true,
        severity: 'error',
      },
    ],
  },
}
