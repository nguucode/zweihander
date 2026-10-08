import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,s as a}from"./blocks-BCmbfwq7.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Getting Started/Installation`}),`
`,(0,c.jsx)(t.h1,{id:`installation`,children:`Installation`}),`
`,(0,c.jsx)(t.p,{children:`Two ways to consume the kit. They ship the same components and the same
tokens; the difference is who owns the source afterwards.`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{}),(0,c.jsx)(t.th,{children:`Copy-source`}),(0,c.jsx)(t.th,{children:`npm package`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Source lives in`}),(0,c.jsx)(t.td,{children:`your repo`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`node_modules`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Editing a component`}),(0,c.jsx)(t.td,{children:`edit the file`}),(0,c.jsx)(t.td,{children:`fork or override`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Upgrading`}),(0,c.jsx)(t.td,{children:`re-run the CLI, review the diff`}),(0,c.jsx)(t.td,{children:`bump the version`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:`Best when`}),(0,c.jsx)(t.td,{children:`you expect to customise`}),(0,c.jsx)(t.td,{children:`you want to version-pin`})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Pick copy-source unless you have a reason not to.`}),` The kit is `,(0,c.jsx)(t.code,{children:`0.x`}),` and
incomplete; owning the source means a breaking change is a diff you read
rather than one that arrives.`]}),`
`,(0,c.jsx)(t.h2,{id:`copy-source`,children:`Copy-source`}),`
`,(0,c.jsxs)(t.p,{children:[`Components are served in the `,(0,c.jsx)(t.a,{href:`https://ui.shadcn.com/docs/cli`,rel:`nofollow`,children:`shadcn CLI`}),` registry format, so the CLI
copies the source into your project and rewrites its imports to match your
path alias.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The project needs a `,(0,c.jsx)(t.code,{children:`components.json`}),` — run `,(0,c.jsx)(t.code,{children:`npx shadcn@latest init`}),` first
if it has none. Then:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/tokens.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/button.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/text-input.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/divider.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/badge.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/avatar.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/tag.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/toggle-button.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/switch.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/checkbox.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/radio.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/accordion.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/card.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/textarea.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/search.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/number-input.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/select.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/combobox.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/spinner.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/progress-bar.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/skeleton.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/link.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/alert.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/empty-state.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/tooltip.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/popover.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/modal.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/menu.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/breadcrumbs.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/pagination.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/tabs.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/toast.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/inline-alert.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/error-state.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/success-state.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/collapse.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/slider.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/stepper.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/sidebar.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/rating.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/table.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/calendar.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/date-picker.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/carousel.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/color-picker.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/file-uploader.json
npx shadcn@latest add https://ontheshore.biz/zweihander/r/theme.json
`})}),`
`,(0,c.jsx)(t.p,{children:`Or register the kit once and add components by name:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{ "registries": { "@zweihander": "https://ontheshore.biz/zweihander/r/{name}.json" } }
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx shadcn@latest add @zweihander/button
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`tokens`}),` only needs adding once — every component depends on it, so the CLI
pulls it in with the first component anyway. Shared helpers (`,(0,c.jsx)(t.code,{children:`utils`}),`,
`,(0,c.jsx)(t.code,{children:`icon`}),`) resolve the same way, and the npm dependencies (`,(0,c.jsx)(t.code,{children:`clsx`}),`, and
`,(0,c.jsx)(t.code,{children:`@base-ui/react`}),` for components with behaviour) are installed for you.`]}),`
`,(0,c.jsx)(t.p,{children:`Import the token layer once, at your app's entry:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`@import "./styles/zweihander-tokens.css";
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The CLI prints where each file landed; the path above is relative to the
`,(0,c.jsx)(t.code,{children:`src`}),` your `,(0,c.jsx)(t.code,{children:`components.json`}),` points at.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`If your bundler needs CSS-module types`}),`, add them once — Vite projects
already get this from `,(0,c.jsx)(t.code,{children:`vite/client`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`npm-package`,children:`npm package`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install zweihander
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import { Button } from 'zweihander/button'
import { TextInput } from 'zweihander/text-input'
import { Divider } from 'zweihander/divider'
import { Badge } from 'zweihander/badge'
import { Avatar } from 'zweihander/avatar'
import { Tag } from 'zweihander/tag'
import { ToggleButton } from 'zweihander/toggle-button'
import { Switch } from 'zweihander/switch'
import { Checkbox } from 'zweihander/checkbox'
import { RadioGroup } from 'zweihander/radio'
import { Accordion } from 'zweihander/accordion'
import { Card } from 'zweihander/card'
import { Textarea } from 'zweihander/textarea'
import { Search } from 'zweihander/search'
import { NumberInput } from 'zweihander/number-input'
import { Select } from 'zweihander/select'
import { Combobox } from 'zweihander/combobox'
import { Spinner } from 'zweihander/spinner'
import { ProgressBar } from 'zweihander/progress-bar'
import { Skeleton } from 'zweihander/skeleton'
import { Link } from 'zweihander/link'
import { Alert } from 'zweihander/alert'
import { EmptyState } from 'zweihander/empty-state'
import { Tooltip } from 'zweihander/tooltip'
import { Popover } from 'zweihander/popover'
import { Modal } from 'zweihander/modal'
import { Menu } from 'zweihander/menu'
import { Breadcrumbs } from 'zweihander/breadcrumbs'
import { Pagination } from 'zweihander/pagination'
import { Tabs } from 'zweihander/tabs'
import { InlineAlert } from 'zweihander/inline-alert'
import { ErrorState } from 'zweihander/error-state'
import { SuccessState } from 'zweihander/success-state'
import { Collapse } from 'zweihander/collapse'
import { Slider } from 'zweihander/slider'
import { Stepper } from 'zweihander/stepper'
import { Sidebar } from 'zweihander/sidebar'
import { Rating } from 'zweihander/rating'
import { Table } from 'zweihander/table'
import { Calendar } from 'zweihander/calendar'
import { DatePicker } from 'zweihander/date-picker'
import { Carousel } from 'zweihander/carousel'
import { ColorPicker } from 'zweihander/color-picker'
import { FileUploader } from 'zweihander/file-uploader'
import { ToastProvider, useToast } from 'zweihander/toast'
import { Theme } from 'zweihander/theme'
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`@import "zweihander/tokens.css";  /* the token layer */
@import "zweihander/styles.css";  /* the component styles */
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Order matters`}),` — the component styles read the tokens, so `,(0,c.jsx)(t.code,{children:`tokens.css`}),`
has to come first. Beyond those two lines there is nothing to configure.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`react`}),` and `,(0,c.jsx)(t.code,{children:`react-dom`}),` are peer dependencies. `,(0,c.jsx)(t.code,{children:`clsx`}),` is the only runtime
dependency and installs with the package.`]}),`
`,(0,c.jsx)(t.h2,{id:`verifying-it-works`,children:`Verifying it works`}),`
`,(0,c.jsxs)(t.p,{children:[`Render a Button inside a `,(0,c.jsx)(t.code,{children:`Theme`}),` and change the accent. If the button
follows, the token layer is loaded and scoping works:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Theme accentColor="violet">
  <Button>Violet</Button>
</Theme>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`If the button renders unstyled, `,(0,c.jsx)(t.code,{children:`styles.css`}),` is missing (npm path) or the
component's `,(0,c.jsx)(t.code,{children:`.module.css`}),` did not come across (copy-source). If it renders
styled but in a `,(0,c.jsx)(t.strong,{children:`serif`}),` face, the token layer is missing — components
declare `,(0,c.jsx)(t.code,{children:`font-family: var(--font-sans)`}),` explicitly, and with no tokens
that resolves to nothing.`]}),`
`,(0,c.jsx)(t.h2,{id:`using-the-theme`,children:`Using the theme`}),`
`,(0,c.jsxs)(t.p,{children:[`Both paths ship the same `,(0,c.jsx)(t.code,{children:`Theme`}),` component, which scopes five independent
settings to any subtree:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Theme accentColor="violet" grayColor="slate" appearance="dark" radius="large" scaling="105%">
`})}),`
`,(0,c.jsxs)(t.p,{children:[`It writes custom properties, so it nests in either direction — a dark panel
on a light page, or a light island inside a dark one. The full write-up,
including what each setting moves and how to override tokens directly, is
in `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`?path=/docs/foundations-overview--docs`,children:`Foundations → Overview`})}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`contributing-to-the-kit-itself`,children:`Contributing to the kit itself`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`git clone https://github.com/nguucode/zweihander
npm install
npm run storybook
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tokens are generated from `,(0,c.jsx)(t.code,{children:`tokens/*.json`}),` — run `,(0,c.jsx)(t.code,{children:`npm run tokens`}),` after
editing them, never edit the generated files. `,(0,c.jsx)(t.code,{children:`npm run tokens:check`}),` and
`,(0,c.jsx)(t.code,{children:`node scripts/check-registry.mjs`}),` both run in CI. The
`,(0,c.jsx)(t.a,{href:`https://github.com/nguucode/zweihander`,rel:`nofollow`,children:`README`}),` has the rest.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};