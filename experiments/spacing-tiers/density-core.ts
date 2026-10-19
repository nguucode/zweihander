// Density tokens shared by the trial pages: the six spacing roles, the
// control tier, the type scale and the map of component parts. Importing it
// injects the CSS and starts the theme sync and the portal scope copy.
/* ================================================================ theme */
const mq = matchMedia('(prefers-color-scheme: dark)')
const applyTheme = () => {
  const root = document.documentElement
  const t = root.dataset.theme
  const dark = t ? t === 'dark' : mq.matches
  root.classList.toggle('dark', dark)
  root.classList.toggle('light', !dark)
}
applyTheme()
mq.addEventListener('change', applyTheme)
new MutationObserver(applyTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

/* =============================================================== tokens
   Six spacing roles and one row height, on the short scale
   2 4 8 12 16 20 24. In Compact each role takes the Default value of the
   role below it; section goes 24 to 20. Every control size exists in both
   densities: Compact tightens each size's own height, padding and gap
   instead of swapping md for sm. */
export type Density = 'compact' | 'default'
export type Role = 'stack' | 'inline' | 'cluster' | 'group' | 'container' | 'section'
export const DENSITIES: Density[] = ['compact', 'default']
export const LADDER = [2, 4, 8, 12, 16, 20, 24]

export const ROLES: { role: Role; use: string; px: Record<Density, number> }[] = [
  { role: 'stack', use: 'Lines of text under each other: title to description, label to value.', px: { compact: 2, default: 4 } },
  { role: 'inline', use: 'Small things side by side: icon to text, label to value on one line, sidebar items.', px: { compact: 4, default: 8 } },
  { role: 'cluster', use: 'Controls or parts that sit together: filters in a toolbar, a thumbnail or avatar to its content, the parts of a page heading, inside a small card.', px: { compact: 8, default: 12 } },
  { role: 'group', use: 'Between items and blocks that belong together: cards in a row, toolbar to table, table cell sides.', px: { compact: 12, default: 16 } },
  { role: 'container', use: 'Inside the edge of a card, panel or page heading.', px: { compact: 16, default: 24 } },
  { role: 'section', use: 'Page edge and between page sections.', px: { compact: 20, default: 24 } },
]
export const ROW = { compact: 36, default: 48 }

/* Control tier per density. Default is main. Compact: each size takes the
   padding and gap of the size below it; md drops 4px in height, sm 2px, xs
   stays (it is already the text's floor). */
type Size = 'xs' | 'sm' | 'md'
export const CONTROLS: { size: Size; px: Record<Density, { h: number; pad: number; spacious: number; gap: number }> }[] = [
  { size: 'md', px: { default: { h: 32, pad: 10, spacious: 12, gap: 8 }, compact: { h: 28, pad: 8, spacious: 8, gap: 6 } } },
  { size: 'sm', px: { default: { h: 24, pad: 8, spacious: 8, gap: 6 }, compact: { h: 22, pad: 6, spacious: 6, gap: 4 } } },
  { size: 'xs', px: { default: { h: 20, pad: 6, spacious: 6, gap: 4 }, compact: { h: 20, pad: 4, spacious: 4, gap: 2 } } },
]

const rem = (px: number) => `calc(${px / 16}rem * var(--scaling))`
/* The size tokens those rows read, per density. */
const SIZE_VARS: Record<Density, Record<string, number>> = {
  default: { 'choice-box': 20, 'radio-dot': 8, 'switch-sm-w': 28, 'switch-sm-h': 16, 'switch-md-w': 36, 'switch-md-h': 20, 'switch-lg-w': 44, 'switch-lg-h': 24, 'progress-sm': 4, 'progress-md': 8, 'progress-lg': 12 },
  compact: { 'choice-box': 16, 'radio-dot': 6, 'switch-sm-w': 24, 'switch-sm-h': 14, 'switch-md-w': 28, 'switch-md-h': 16, 'switch-lg-w': 36, 'switch-lg-h': 20, 'progress-sm': 4, 'progress-md': 6, 'progress-lg': 8 },
}
const tokenCss = DENSITIES.map(
  (d) =>
    `[data-density='${d}'] {\n${ROLES.map((r) => `  --space-${r.role}: ${rem(r.px[d])};`).join('\n')}\n  --row-height: ${rem(ROW[d])};\n${Object.entries(SIZE_VARS[d])
      .map(([k, v]) => `  --${k}: ${rem(v)};`)
      .join('\n')}\n}`,
).join('\n')
// The control tier tokens are declared on `*` in tokens.css, so the override
// has to reach every element too, not just the scope.
const controlCss = `[data-density='compact'], [data-density='compact'] * {\n${CONTROLS.map(({ size, px: { compact: c } }) =>
  [`--control-${size}: ${rem(c.h)};`, `--control-${size}-pad: ${rem(c.pad)};`, `--control-${size}-pad-spacious: ${rem(c.spacious)};`, `--control-${size}-gap: ${rem(c.gap)};`]
    .map((l) => `  ${l}`)
    .join('\n'),
).join('\n')}\n}`

/* ============================================================= the map
   Which spacing in the two screens each token drives. This list is the
   whole spec: it writes the CSS below and draws the overlay. `today` is the
   value on main, for comparing with Default. */
type Prop = 'padding' | 'padding-inline' | 'padding-inline-start' | 'padding-inline-end' | 'padding-block' | 'padding-block-start' | 'padding-block-end' | 'gap' | 'row-gap' | 'column-gap' | 'margin-inline' | 'margin-inline-start' | 'margin-block' | 'margin-block-start' | 'margin-block-end' | `--${string}`
interface Rule {
  part: string
  sel: string
  props: Prop[]
  role: Role
  /** The value on main. Omitted for the trial's own page layout, which has no "before". */
  today?: string
  /** When the part is not one role's value: an expression over a role or the control tier. */
  value?: string
}
const m = (name: string) => `[class~='${name}']`
export const MAP: Rule[] = [
  // section
  { part: 'Page padding', sel: m('AppShell-module__main'), props: ['padding'], role: 'section', today: '32' },
  { part: 'Header sides', sel: m('AppShell-module__header'), props: ['padding-inline'], role: 'section', today: '32' },
  { part: 'Between page sections', sel: '.lyPage', props: ['gap'], role: 'section' },
  // container
  { part: 'Card padding (md)', sel: m('Card-module__md'), props: ['padding'], role: 'container', today: '24' },
  { part: 'Page heading bottom', sel: m('PageHeading-module__pageHeading'), props: ['padding-block-end'], role: 'container', today: '24' },
  // group
  { part: 'Card content gap (md)', sel: `${m('Card-module__md')}:not(${m('Stats-module__card')})`, props: ['gap'], role: 'group', today: '16' },
  { part: 'Card padding (sm)', sel: m('Card-module__sm'), props: ['padding'], role: 'group', today: '16' },
  { part: 'Cards in a row', sel: m('Stats-module__grid'), props: ['gap'], role: 'group', today: '16' },
  { part: '', sel: '.lySplit, .lySummary', props: ['gap'], role: 'group' },
  { part: 'Heading title to actions', sel: m('PageHeading-module__row'), props: ['gap'], role: 'group', today: '16' },
  { part: 'Tabs to panel', sel: m('Tabs-module__tabs'), props: ['gap'], role: 'group', today: '16' },
  { part: 'Toolbar and footer to table', sel: m('DataTablePage-module__toolbar'), props: ['margin-block-end'], role: 'group', today: '16' },
  { part: '', sel: m('DataTablePage-module__footer'), props: ['margin-block-start'], role: 'group', today: '16' },
  { part: 'Table cell sides', sel: `${m('Table-module__th')}, ${m('Table-module__td')}`, props: ['padding-inline'], role: 'group', today: '16' },
  { part: 'Sidebar groups', sel: m('Sidebar-module__body'), props: ['gap'], role: 'group', today: '16' },
  { part: 'Blocks in a group', sel: '.lyBody, .lySection, .lyCardHead, .lyBreakdown, .lyLegend', props: ['gap'], role: 'group' },
  { part: 'Total row above', sel: '.lyTotal', props: ['padding-block-start'], role: 'group' },
  // cluster
  { part: 'Page heading parts', sel: m('PageHeading-module__pageHeading'), props: ['gap'], role: 'cluster', today: '12' },
  { part: 'Card content gap (sm)', sel: m('Card-module__sm'), props: ['gap'], role: 'cluster', today: '12' },
  { part: 'Toolbar filters, footer', sel: `${m('DataTablePage-module__group')}, ${m('DataTablePage-module__footer')}`, props: ['gap'], role: 'cluster', today: '12' },
  { part: 'Alert padding', sel: m('Alert-module__alert'), props: ['padding'], role: 'cluster', today: '10' },
  { part: 'Thumbnail to name', sel: '.lyProduct', props: ['gap'], role: 'cluster' },
  // inline
  { part: 'Sidebar edge and items', sel: m('Sidebar-module__sidebar'), props: ['padding'], role: 'inline', today: '8' },
  { part: '', sel: m('Sidebar-module__item'), props: ['padding-inline', 'gap'], role: 'inline', today: '8' },
  { part: 'Header actions', sel: m('AppShell-module__end'), props: ['gap'], role: 'inline', today: '8' },
  { part: 'Alert icon to text', sel: m('Alert-module__alert'), props: ['gap'], role: 'inline', today: '8' },
  { part: 'Label to value on a line', sel: '.lyBreakLine, .lyStock, .lyMini dd', props: ['gap'], role: 'inline' },
  // stack
  { part: 'Sidebar group label to items', sel: m('Sidebar-module__group'), props: ['gap'], role: 'stack', today: '4' },
  { part: 'Alert title to message', sel: m('Alert-module__body'), props: ['gap'], role: 'stack', today: '4' },
  { part: 'Text in a stack', sel: '.lyTitleBlock, .lyMini, .lyBreakRow, .lyProductText', props: ['gap'], role: 'stack' },
  // Overlays and calendar. They render outside the screens, so the overlay
  // does not draw them; see "Every size, both densities".
  { part: 'Popover padding', sel: m('Popover-module__popup'), props: ['padding'], role: 'group', today: '16' },
  { part: 'Popover title to body', sel: m('Popover-module__header'), props: ['gap'], role: 'cluster', today: '12' },
  { part: 'Modal padding and header', sel: `${m('Modal-module__popup')}`, props: ['padding'], role: 'group', today: '16' },
  { part: '', sel: m('Modal-module__header'), props: ['gap'], role: 'group', today: '16' },
  { part: 'Modal footer buttons', sel: m('Modal-module__footer'), props: ['gap'], role: 'inline', today: '8' },
  { part: 'Tooltip padding', sel: m('Tooltip-module__popup'), props: ['padding-block'], role: 'stack', today: '4' },
  { part: '', sel: m('Tooltip-module__popup'), props: ['padding-inline'], role: 'inline', today: '8' },
  { part: 'Date picker panel', sel: m('DatePicker-module__body'), props: ['padding'], role: 'cluster', today: '12' },
  { part: 'Date picker presets', sel: m('DatePicker-module__presets'), props: ['padding'], role: 'inline', today: '8' },
  { part: 'Menu and list item block padding', sel: `${m('Menu-module__item')}, ${m('InputField-module__option')}`, props: ['padding-block'], role: 'stack', today: '6 (with 32 min height)' },
  { part: 'Calendar header to grid', sel: m('Calendar-module__calendar'), props: ['gap'], role: 'inline', today: '8' },
  // Every other component, from the density review (catalog). Default keeps
  // main's value except where a 32px section meets the 24px section token.
  { part: 'Checkbox, radio, switch: box to label', sel: m('ChoiceField-module__label'), props: ['column-gap'], role: 'inline', today: '8' },
  { part: 'Radio options, vertical', sel: m('Radio-module__group'), props: ['row-gap'], role: 'inline', today: '8' },
  { part: 'Radio option: label to helper', sel: m('Radio-module__item'), props: ['row-gap'], role: 'stack', today: '4' },
  { part: 'Radio legend to options', sel: m('Radio-module__legend'), props: ['margin-block-end'], role: 'stack', today: '4' },
  { part: 'Field: label to input to helper', sel: m('InputField-module__field'), props: ['row-gap'], role: 'inline', value: 'var(--control-sm-gap)', today: '6' },
  { part: 'Color picker panel', sel: m('ColorPicker-module__panel'), props: ['row-gap'], role: 'cluster', today: '12' },
  { part: '', sel: m('ColorPicker-module__swatches'), props: ['padding-block-start'], role: 'cluster', today: '12' },
  { part: '', sel: m('ColorPicker-module__swatches'), props: ['column-gap'], role: 'inline', today: '8' },
  { part: '', sel: m('ColorPicker-module__fields'), props: ['column-gap'], role: 'inline', today: '8' },
  { part: '', sel: m('ColorPicker-module__strips'), props: ['row-gap'], role: 'stack', today: '4' },
  { part: 'Slider label to value', sel: m('Slider-module__header'), props: ['column-gap'], role: 'cluster', today: '12' },
  { part: 'Slider header to track', sel: m('Slider-module__slider'), props: ['row-gap'], role: 'inline', today: '8' },
  { part: 'Accordion trigger and panel sides', sel: `${m('Accordion-module__trigger')}, ${m('Accordion-module__content')}`, props: ['padding-inline'], role: 'group', today: '16' },
  { part: 'Accordion trigger top and bottom', sel: m('Accordion-module__trigger'), props: ['padding-block'], role: 'stack', today: '4' },
  { part: 'Accordion panel top and bottom', sel: m('Accordion-module__content'), props: ['padding-block-end'], role: 'cluster', today: '12' },
  { part: 'Calendar title inset', sel: m('Calendar-module__title'), props: ['padding-inline-start'], role: 'inline', today: '8' },
  { part: 'Calendar month buttons', sel: m('Calendar-module__header'), props: ['gap'], role: 'stack', today: '4' },
  { part: 'Carousel slides', sel: m('Carousel-module__track'), props: ['column-gap'], role: 'group', today: '16' },
  { part: 'Carousel track to controls', sel: m('Carousel-module__carousel'), props: ['row-gap'], role: 'cluster', today: '12' },
  { part: 'Carousel dots', sel: m('Carousel-module__dots'), props: ['column-gap'], role: 'inline', today: '8' },
  { part: 'Carousel buttons', sel: m('Carousel-module__controls'), props: ['column-gap'], role: 'stack', today: '4' },
  { part: 'Collapse panel', sel: m('Collapse-module__content'), props: ['padding-block-start'], role: 'inline', today: '8' },
  { part: 'Collapse icon to label', sel: m('Collapse-module__trigger'), props: ['column-gap'], role: 'stack', today: '4' },
  { part: 'Table checkbox column', sel: m('Table-module__select'), props: ['padding-inline-start'], role: 'group', today: '16' },
  { part: 'File drop zone', sel: m('FileUploader-module__dropzone'), props: ['padding-block'], role: 'container', today: '24' },
  { part: '', sel: m('FileUploader-module__dropzone'), props: ['padding-inline'], role: 'group', today: '16' },
  { part: '', sel: m('FileUploader-module__dropzone'), props: ['row-gap'], role: 'inline', today: '8' },
  { part: 'File icon, rows, names', sel: `${m('FileUploader-module__icon')}`, props: ['padding'], role: 'inline', today: '8' },
  { part: '', sel: `${m('FileUploader-module__item')}, ${m('FileUploader-module__nameRow')}`, props: ['column-gap'], role: 'inline', today: '8' },
  { part: '', sel: m('FileUploader-module__item'), props: ['padding-block'], role: 'stack', today: '4' },
  { part: '', sel: m('FileUploader-module__list'), props: ['margin-block-start'], role: 'stack', today: '4' },
  { part: '', sel: m('FileUploader-module__uploader'), props: ['row-gap'], role: 'inline', value: 'var(--control-sm-gap)', today: '6' },
  { part: 'Progress bar label to bar', sel: m('ProgressBar-module__root'), props: ['row-gap'], role: 'inline', value: 'var(--control-sm-gap)', today: '6' },
  { part: 'Progress bar value beside', sel: m('ProgressBar-module__row'), props: ['column-gap'], role: 'cluster', today: '12' },
  { part: 'Breadcrumb items', sel: `${m('Breadcrumbs-module__list')}, ${m('Breadcrumbs-module__item')}`, props: ['column-gap'], role: 'stack', today: '4' },
  { part: 'Breadcrumbs above a heading', sel: m('PageHeading-module__breadcrumbs'), props: ['margin-block-end'], role: 'stack', today: '4' },
  { part: 'Menu inset', sel: m('Menu-module__popup'), props: ['--menu-inset'], role: 'stack', today: '4' },
  { part: 'Menu shortcut', sel: m('Menu-module__shortcut'), props: ['margin-inline-start'], role: 'group', today: '16' },
  { part: 'Pagination and tab items', sel: `${m('Pagination-module__list')}, ${m('Tabs-module__list')}`, props: ['column-gap'], role: 'stack', today: '4' },
  { part: 'Sidebar header and footer', sel: m('Sidebar-module__header'), props: ['margin-block-end'], role: 'inline', today: '8' },
  { part: '', sel: m('Sidebar-module__footer'), props: ['margin-block-start', 'padding-block-start'], role: 'cluster', today: '12' },
  { part: '', sel: m('Sidebar-module__groupLabel'), props: ['padding-inline'], role: 'inline', today: '8' },
  { part: 'Stepper step', sel: m('Stepper-module__target'), props: ['padding-inline-end'], role: 'cluster', today: '12' },
  { part: '', sel: m('Stepper-module__target'), props: ['row-gap'], role: 'inline', today: '8' },
  { part: 'Inline alert icon to text', sel: m('InlineAlert-module__inlineAlert'), props: ['column-gap'], role: 'inline', today: '8' },
  { part: 'Modal edge on small screens', sel: m('Modal-module__viewport'), props: ['padding'], role: 'group', today: '16' },
  { part: 'Modal body and footer', sel: `${m('Modal-module__body')}, ${m('Modal-module__footer')}`, props: ['margin-block-start'], role: 'group', today: '16' },
  { part: 'Modal title to description', sel: m('Modal-module__description'), props: ['margin-block-start'], role: 'inline', today: '8' },
  { part: 'Header items', sel: m('AppShell-module__header'), props: ['column-gap'], role: 'group', today: '16' },
  { part: 'Stats heading to cards', sel: m('Stats-module__stats'), props: ['row-gap'], role: 'group', today: '16' },
  { part: 'Stats card: label, value, change', sel: m('Stats-module__card'), props: ['row-gap'], role: 'inline', today: '8' },
  { part: '', sel: m('Stats-module__figures'), props: ['row-gap'], role: 'stack', today: '4' },
  { part: '', sel: m('Stats-module__figures'), props: ['column-gap'], role: 'inline', today: '8' },
  { part: '', sel: m('Stats-module__change'), props: ['padding-inline'], role: 'inline', today: '8' },
  { part: 'Page heading title to description', sel: m('PageHeading-module__text'), props: ['row-gap'], role: 'inline', today: '8' },
  { part: 'Page heading meta and actions', sel: m('PageHeading-module__meta'), props: ['column-gap'], role: 'container', today: '24' },
  { part: '', sel: m('PageHeading-module__actions'), props: ['gap'], role: 'inline', today: '8' },
  { part: 'Description list rows', sel: m('DescriptionList-module__row'), props: ['padding-block'], role: 'group', today: '16' },
  { part: '', sel: `${m('DescriptionList-module__row')}, ${m('DescriptionList-module__headerText')}`, props: ['row-gap'], role: 'stack', today: '4' },
  { part: '', sel: `${m('DescriptionList-module__details')} ul`, props: ['row-gap'], role: 'inline', today: '8' },
  { part: '', sel: `${m('DescriptionList-module__details')} li`, props: ['column-gap'], role: 'inline', today: '8' },
  { part: 'Form sections', sel: `${m('FormLayouts-module__section')} + ${m('FormLayouts-module__section')}`, props: ['margin-block-start', 'padding-block-start'], role: 'section', today: '32' },
  { part: 'Form fields', sel: m('FormLayouts-module__fields'), props: ['row-gap'], role: 'container', today: '24' },
  { part: '', sel: `${m('FormLayouts-module__card')} > ${m('FormLayouts-module__fields')}`, props: ['padding'], role: 'container', today: '24' },
  { part: '', sel: m('FormLayouts-module__layout'), props: ['row-gap'], role: 'group', today: '16' },
  { part: '', sel: `${m('FormLayouts-module__fields')} fieldset`, props: ['row-gap'], role: 'cluster', today: '12' },
  { part: '', sel: `${m('FormLayouts-module__fields')} legend`, props: ['margin-block-end'], role: 'cluster', today: '12' },
  { part: '', sel: m('FormLayouts-module__actions'), props: ['column-gap'], role: 'cluster', today: '12' },
  { part: '', sel: m('FormLayouts-module__intro'), props: ['row-gap'], role: 'stack', today: '4' },
  { part: 'Empty, error, success states', sel: m('EmptyState-module__empty'), props: ['padding-block'], role: 'section', value: 'calc(var(--space-section) * 2)', today: '48' },
  { part: '', sel: m('EmptyState-module__empty'), props: ['padding-inline'], role: 'container', today: '24' },
  { part: '', sel: m('EmptyState-module__action'), props: ['padding-block-start'], role: 'container', today: '24' },
  { part: '', sel: m('EmptyState-module__action'), props: ['column-gap'], role: 'inline', today: '8' },
  { part: '', sel: m('EmptyState-module__icon'), props: ['margin-block-end'], role: 'group', today: '16' },
  { part: '', sel: m('EmptyState-module__description'), props: ['padding-block-start'], role: 'inline', today: '8' },
  { part: 'Toolbar rows', sel: m('DataTablePage-module__toolbar'), props: ['gap'], role: 'cluster', today: '12' },
  { part: 'Template page sections', sel: m('Projects-module__page'), props: ['row-gap'], role: 'section', today: '24' },
  // Small controls inside components read the control tier of their size,
  // like any other control, instead of a spacing role.
  { part: 'Table sort button', sel: m('Table-module__sortButton'), props: ['padding-block'], role: 'stack', value: 'var(--control-xs-gap)', today: '4' },
  { part: '', sel: m('Table-module__sortButton'), props: ['padding-inline'], role: 'inline', value: 'var(--control-sm-pad)', today: '8' },
  { part: '', sel: m('Table-module__sortButton'), props: ['margin-inline'], role: 'inline', value: 'calc(var(--control-sm-pad) * -1)', today: '−8' },
  { part: 'Badge (md)', sel: `${m('Badge-module__badge')}${m('Badge-module__md')}:not(${m('Badge-module__dot')})`, props: ['padding-inline'], role: 'stack', value: 'var(--control-xs-gap)', today: '4' },
  { part: 'Sidebar count', sel: m('Sidebar-module__badge'), props: ['padding-inline'], role: 'stack', value: 'var(--control-xs-pad)', today: '6' },
  { part: 'Number input steppers', sel: m('NumberInput-module__group'), props: ['padding-inline-end'], role: 'stack', value: 'var(--control-xs-gap)', today: '4' },
  { part: 'Color picker channel fields', sel: `${m('ColorPicker-module__channel')}:not(${m('ColorPicker-module__alphaChannel')})`, props: ['padding-inline'], role: 'stack', value: 'var(--control-xs-gap)', today: '4' },
  { part: '', sel: m('ColorPicker-module__unit'), props: ['padding-inline-end'], role: 'inline', value: 'var(--control-sm-pad)', today: '8' },
  { part: 'Textarea top and bottom (sm, md)', sel: m('Textarea-module__pad-sm'), props: ['--pad-block'], role: 'stack', value: 'var(--control-xs-pad)', today: '6' },
  { part: '', sel: m('Textarea-module__pad-md'), props: ['--pad-block'], role: 'inline', value: 'var(--control-sm-pad)', today: '8' },
  { part: 'Menu group label', sel: m('Menu-module__groupLabel'), props: ['padding-block-start'], role: 'stack', value: 'var(--control-xs-pad)', today: '6' },
  { part: '', sel: m('Menu-module__groupLabel'), props: ['padding-block-end'], role: 'stack', value: 'var(--control-xs-gap)', today: '4' },
  { part: 'Modal close button', sel: m('Modal-module__close'), props: ['padding'], role: 'stack', value: 'var(--control-xs-gap)', today: '4' },
  { part: '', sel: m('Modal-module__close'), props: ['margin-inline'], role: 'stack', value: 'calc(var(--control-xs-gap) * -1)', today: '−4' },
  { part: 'Skip link', sel: m('AppShell-module__skip'), props: ['padding-block'], role: 'inline', value: 'var(--control-sm-pad)', today: '8' },
  { part: '', sel: m('AppShell-module__skip'), props: ['padding-inline'], role: 'cluster', value: 'var(--control-md-pad-spacious)', today: '12' },
  { part: 'Combobox clear and open buttons', sel: m('Combobox-module__group'), props: ['gap'], role: 'stack', value: 'var(--control-xs-gap)', today: '4' },
  { part: 'File row padding', sel: m('FileUploader-module__item'), props: ['padding-inline-start'], role: 'inline', today: '8' },
  { part: '', sel: m('FileUploader-module__item'), props: ['padding-inline-end'], role: 'stack', today: '4' },
  { part: 'Table expand column', sel: m('Table-module__expand'), props: ['padding-inline-start'], role: 'inline', today: '8' },
  { part: 'Toast padding', sel: m('Toast-module__toast'), props: ['padding-block'], role: 'cluster', today: '12' },
  { part: '', sel: m('Toast-module__toast'), props: ['padding-inline'], role: 'group', today: '16' },
  { part: 'Toast icon to text', sel: m('Toast-module__toast'), props: ['gap'], role: 'cluster', today: '12' },
  { part: 'Toast title to description', sel: m('Toast-module__content'), props: ['gap'], role: 'stack', today: '4' },
  { part: 'Toasts in a stack', sel: m('Toast-module__viewport'), props: ['gap'], role: 'inline', today: '8' },
  // An alignment offset: helper text lines up with the label, past the box and its gap.
  { part: 'Checkbox and radio helper indent', sel: m('ChoiceField-module__helper'), props: ['padding-inline-start'], role: 'inline', value: 'calc(var(--choice-control) + var(--space-inline))', today: '28' },
]

/* Sizes inside overlays and the calendar that follow the control tier
   instead of a spacing token. Default is the same 32px as main. */
export const SIZES: { part: string; sel: string; css: string; reads: string; px: Record<Density, string>; today: string }[] = [
  { part: 'Calendar day', sel: m('Calendar-module__calendar'), css: '--calendar-day: var(--control-md);', reads: '--control-md', px: { default: '32', compact: '28' }, today: '32 (--space-8)' },
  { part: 'Calendar month buttons', sel: m('Calendar-module__nav'), css: 'inline-size: var(--control-md); block-size: var(--control-md);', reads: '--control-md', px: { default: '32', compact: '28' }, today: '32 (--space-8)' },
  { part: 'Calendar weekday row', sel: m('Calendar-module__weekday'), css: 'block-size: var(--control-md);', reads: '--control-md', px: { default: '32', compact: '28' }, today: '32 (--space-8)' },
  { part: 'Date preset row', sel: m('DatePicker-module__preset'), css: 'min-block-size: var(--control-md);', reads: '--control-md', px: { default: '32', compact: '28' }, today: '32 (--space-8)' },
  { part: 'Menu and list items', sel: '', css: '', reads: '--control-md', px: { default: '32', compact: '28' }, today: 'already --control-md' },
  // Choice controls and progress bars: every size exists in both densities;
  // in Compact each takes the size below it. The smallest switch steps down
  // to 24 × 14 so sm and md stay apart; the smallest progress bar stays.
  { part: 'Checkbox and radio box', sel: `${m('Checkbox-module__field')}, ${m('Radio-module__field')}`, css: '--choice-control: var(--choice-box);', reads: '--choice-box', px: { default: '20', compact: '16' }, today: '20 (--control-xs)' },
  { part: 'Radio dot', sel: m('Radio-module__dot'), css: 'inline-size: var(--radio-dot); block-size: var(--radio-dot);', reads: '--radio-dot', px: { default: '8', compact: '6' }, today: '8' },
  { part: 'Switch sm (track)', sel: m('Switch-module__sm'), css: '--choice-control: var(--switch-sm-w); --choice-control-block: var(--switch-sm-h);', reads: '--switch-sm-*', px: { default: '28 × 16', compact: '24 × 14' }, today: '28 × 16' },
  { part: 'Switch md (track)', sel: m('Switch-module__md'), css: '--choice-control: var(--switch-md-w); --choice-control-block: var(--switch-md-h);', reads: '--switch-md-*', px: { default: '36 × 20', compact: '28 × 16' }, today: '36 × 20' },
  { part: 'Switch lg (track)', sel: m('Switch-module__lg'), css: '--choice-control: var(--switch-lg-w); --choice-control-block: var(--switch-lg-h);', reads: '--switch-lg-*', px: { default: '44 × 24', compact: '36 × 20' }, today: '44 × 24' },
  { part: 'Progress bar (default md)', sel: m('ProgressBar-module__root'), css: '--progress-height: var(--progress-md);', reads: '--progress-md', px: { default: '8', compact: '6' }, today: '8' },
  { part: 'Progress bar sm', sel: m('ProgressBar-module__sm'), css: '--progress-height: var(--progress-sm);', reads: '--progress-sm', px: { default: '4', compact: '4' }, today: '4' },
  { part: 'Progress bar md', sel: m('ProgressBar-module__md'), css: '--progress-height: var(--progress-md);', reads: '--progress-md', px: { default: '8', compact: '6' }, today: '8' },
  { part: 'Progress bar lg', sel: m('ProgressBar-module__lg'), css: '--progress-height: var(--progress-lg);', reads: '--progress-lg', px: { default: '12', compact: '8' }, today: '12' },
]
const scope = (sel: string) =>
  sel
    .split(',')
    .map((s) => `[data-density]:not([data-density='today']) ${s.trim()}`)
    .join(',\n')
const mapCss = MAP.map((r) => `${scope(r.sel)} {\n${r.props.map((p) => `  ${p}: ${r.value ?? `var(--space-${r.role})`};`).join('\n')}\n}`).join('\n')
// Row height is a size, not spacing: the table reads it as --table-row.
const rowCss = `${scope(m('Table-module__table'))} { --table-row: var(--row-height); }
${scope('.lyThumb')} { inline-size: calc(var(--row-height) - var(--space-inline)); block-size: calc(var(--row-height) - var(--space-inline)); }`
const sizeCss = SIZES.filter((x) => x.sel)
  .map((x) => `${scope(x.sel)} { ${x.css} }`)
  .join('\n')

/* Overlays portal to <body>, outside any density scope. The trial copies the
   scope of whatever the pointer or focus was last in onto each new portal.
   In the product, density sits on the root like appearance, so this is not
   needed there; see the note on Select, Combobox and DatePicker. */
let lastScope: HTMLElement | null = null
const remember = (e: Event) => {
  const scope = (e.target as Element | null)?.closest?.<HTMLElement>('[data-density]')
  if (scope) lastScope = scope
}
for (const type of ['pointerdown', 'pointerover', 'focusin']) document.addEventListener(type, remember, true)
new MutationObserver((records) => {
  for (const r of records)
    for (const n of r.addedNodes) {
      if (!(n instanceof HTMLElement) || n.id === 'root' || !lastScope) continue
      n.dataset.density = lastScope.dataset.density
      if (lastScope.dataset.type) n.dataset.type = lastScope.dataset.type
      else delete n.dataset.type
    }
}).observe(document.body, { childList: true })

const style = document.createElement('style')
/* Type per density. Text of 12px and below does not shrink: that is the
   legibility floor. 13 to 16px drops 1px. Headings from 20px up drop one
   step on the heading scale. Leading is written as px and kept as a ratio,
   like tokens.css does. */
export const TYPE: { role: string; use: string; sample: string; px: Record<Density, [number, number]> }[] = [
  { role: 'heading-2xl', use: 'Marketing and empty-state titles', sample: 'Revenue and cost', px: { default: [32, 36], compact: [28, 32] } },
  { role: 'heading-xl', use: 'Page title', sample: 'Revenue and cost', px: { default: [28, 32], compact: [24, 28] } },
  { role: 'heading-lg', use: 'Large section title', sample: 'Most profitable products', px: { default: [24, 28], compact: [20, 24] } },
  { role: 'heading-md', use: 'Section title, modal title', sample: 'Where the cost went', px: { default: [20, 24], compact: [18, 24] } },
  { role: 'heading-sm', use: 'Card title, stat value', sample: 'Daily revenue and cost', px: { default: [16, 20], compact: [15, 20] } },
  { role: 'heading-xs', use: 'Small headings, table group titles', sample: 'Cost of goods', px: { default: [14, 20], compact: [13, 18] } },
  { role: 'heading-2xs', use: 'Overlines, column labels', sample: 'FINANCE', px: { default: [12, 16], compact: [12, 16] } },
  { role: 'body-lg', use: 'Lead paragraphs', sample: 'Sales against everything it cost to make them.', px: { default: [16, 24], compact: [15, 22] } },
  { role: 'body', use: 'Default text: table cells, fields, buttons', sample: 'Ash glaze mug, 350 ml · 214 in stock', px: { default: [14, 20], compact: [13, 18] } },
  { role: 'body-sm', use: 'Helper text, tags, small controls', sample: 'Share of $88,251 total cost.', px: { default: [12, 16], compact: [12, 16] } },
  { role: 'body-xs', use: 'Captions, badges, chart labels', sample: 'MUG-ASH-350', px: { default: [11, 16], compact: [11, 16] } },
]
const typeCss = `[data-density='compact']:not([data-type='fixed']), [data-density='compact']:not([data-type='fixed']) * {\n${TYPE.map(
  ({ role, px: { compact: [size, line] } }) => `  --text-${role}: ${rem(size)};\n  --leading-${role}: calc(${line} / ${size});`,
).join('\n')}\n}`
style.textContent = `${tokenCss}\n${controlCss}\n${typeCss}\n${mapCss}\n${rowCss}\n${sizeCss}`
document.head.append(style)
