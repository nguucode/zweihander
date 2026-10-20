---
description: Biến AppShell thành template có cấu hình bề mặt (canvas White/Neutral/Tinted, top bar và sidebar White/Transparent, layout có hoặc không top bar), với kiểu content Card/Flat suy ra từ canvas. So Atlassian, Polaris, Primer, Fluent 2, Carbon, Material 3, SAP Fiori, Salesforce SLDS, Radix Themes về cách mô hình hoá shell và lớp bề mặt; ma trận tổ hợp; a11y; đề xuất API mức Theme và token mới.
type: research
status: done
updated: 2026-10-20
access: internal
tags: [zweihander, research, tokens, surface, app-shell, layout, theme, a11y, figma]
---

# Bề mặt của AppShell: canvas, Card/Flat và top bar/sidebar trong suốt

Phạm vi: Atlassian (docs atlassian.design và mã đã build trong npm `@atlaskit/navigation-system@11.3.1`, `@atlaskit/tokens@20.6.1`), Shopify Polaris (`polaris-react` và `polaris-tokens` trên `main`), GitHub Primer (`primer/react`, `primer/primitives` trên `main`), Microsoft Fluent 2 (`microsoft/fluentui` `packages/tokens`, npm `@fluentui/react-nav@9.4.8`), IBM Carbon (`carbon-design-system/carbon` `packages/styles`, docs color tokens), Material 3 (mã token Compose trong `androidx/androidx`, docs `material-web`, API Flutter), SAP Fiori (npm `@sap-theming/theming-base-content@11.36.5`), Salesforce SLDS (npm `@salesforce-ux/design-system@2.264.1`), Radix Themes (npm `@radix-ui/themes@3.3.0`), W3C Understanding WCAG 2.2 và help center Figma. Đọc ngày 2026-10-20, file nguồn lấy thẳng từ raw.githubusercontent.com hoặc từ tarball npm. Trang m3.material.io và trang navigation-system của atlassian.design render bằng JS nên không đọc được; với hai hệ đó tôi dựa vào mã nguồn. Dữ kiện Zweihänder lấy từ worktree `app-shell-design-structure-8219e7` (HEAD `4056fc4`). Tỉ lệ tương phản có ghi *tự tính* là tôi tự tính từ giá trị token (ramp `neutral`, công thức WCAG), chưa đo trong trình duyệt. Quyết định của sếp (2026-10-20) có ghi rõ ở từng chỗ và được ưu tiên hơn đề xuất của tôi.

## Kết luận

**Không hệ nào trong chín hệ cho chọn "Card hay Flat" như một tuỳ chọn tự do. Hệ nào có cả hai thì đều buộc kiểu đó vào màu canvas.** Polaris, SAP Fiori và Salesforce đặt canvas xám hoặc canvas màu, rồi cho content nổi lên thành card trắng. Atlassian, Carbon và Primer thì canvas trắng, các vùng phân cách bằng border, không có panel. Vậy luật *suy ra* của sếp (Neutral/Tinted ⇒ Card, White ⇒ Flat) chính là cách các hệ trưởng thành đang làm, chỉ khác ở chỗ họ cố định một kiểu cho cả sản phẩm còn Zweihänder cho chọn. Cũng chưa hệ nào mở cấu hình này như một prop của shell. Hệ gần nhất là Radix Themes với `panelBackground`, một setting đặt ở Theme. Hướng sếp đã chốt (đặt ở Theme) khớp với tiền lệ đó.

Đề xuất, gói trong bốn điểm:

1. **Theme `canvas="white" | "neutral" | "tinted"`** đặt `data-canvas`. Thuộc tính này bật hai switch `--canvas-flat` / `--canvas-card`, cùng idiom với `--density-default/--density-compact`. Kiểu Card/Flat *không phải prop*: nó được suy ra từ canvas, nên tổ hợp "Tinted + Flat" (chữ nằm trên màu) không thể khai báo được.
2. **Canvas là một custom property nhận bất kỳ giá trị `background` nào**, màu đặc hay gradient: `--canvas`, đi kèm ba token chữ mà vùng trong suốt đọc: `--canvas-foreground`, `--canvas-muted-foreground`, `--canvas-hover`. Consumer ghi đè cả bốn qua prop `tokens` đã có sẵn của Theme. Dark mode của tint tự chọn đi qua switch `--use-light/--use-dark` có sẵn. Ranh giới a11y: hệ chỉ bảo đảm 4.5:1 cho mặc định của nó (Neutral, và Tinted = `--primary-subtle` của từng accent, do generator kiểm). Tint tự chọn thì consumer chịu trách nhiệm (quyết định của sếp).
3. **Trong panel Card, `--background` được khai báo lại thành `--card`.** Đây là chi tiết dễ bỏ sót nhất. Có 9 component đang dùng `--background` để nói "bề mặt tôi đang nằm trên" (vòng cắt của Badge, nền Checkbox/Radio/Switch, Alert outlined…). Nếu không khai báo lại, các component đó sẽ vẽ mảng xám bên trong card trắng. Nhờ khai báo lại, mọi component tự biết mình đang trên canvas hay trong panel, đúng như yêu cầu của sếp. Cơ chế giống Carbon `$layer-*` và Atlassian `elevation.surface.*`.
4. **AppShell chỉ giữ những gì riêng của một shell:** `layout="sidebar" | "top-bar"` (sidebar cao hết màn, hoặc top bar trải hết chiều ngang phía trên sidebar và content), `topBar="solid" | "transparent"`, `sidebar` surface `"card" | "inset"`. Ở canvas White, hai prop surface không còn tác dụng vì trắng trên trắng chỉ còn border phân cách. Docs phải nói rõ điều này thay vì cấm.

**Không cho cấu hình:** gap giữa canvas và panel (dùng `--space-group`, đi theo density), radius của panel (dùng `--radius-panel`, đi theo preset radius), shadow của panel (border `--border` cộng `--elevation-2xs`), cách scroll (content cuộn bên trong panel, header sticky bên trong panel), và Flat trên canvas Neutral/Tinted.

Token mới: 4 màu (`canvas`, `canvas-foreground`, `canvas-muted-foreground`, `canvas-hover`) cộng 2 switch. Không thêm token gap/radius/shadow nào. Figma: Figma không cho variable chứa gradient, nên `--canvas` dạng gradient phải là paint style. Variable chỉ giữ được mặc định màu đặc (xem §6).

## 1. Zweihänder hôm nay

### 1.1 AppShell

- **Cấu trúc:** `.frame` là grid, sidebar nằm bên trái, `.column` chứa `header` rồi `main` (`AppShell.tsx:82-90`). Header nằm *trong* cột content, cạnh sidebar. Vậy AppShell hiện chỉ có layout "sidebar cao hết màn" (theo cách gọi của sếp là *không có Top bar*). Layout "top bar trải hết chiều ngang" là cấu trúc mới, không phải chỉ đổi style.
- **Bề mặt:** `.shell` nền `var(--background)` (`AppShell.module.css:10`). Header nền `var(--background)` với `border-block-end: 1px solid var(--border)` (`:91-92`). Wrapper sidebar có `border-inline-end` (`:24`), mà chính Sidebar cũng có `border-inline-end` và nền `--surface-filled` (`Sidebar.module.css:9-10`). Hai border nằm sát nhau nên **có vẻ ra đường 2px** (*chưa kiểm trong trình duyệt*).
- **Scroll:** shell `block-size: 100dvh; overflow: hidden`, `.column` có `overflow: auto`, header `position: sticky` bên trong cột (`AppShell.module.css:8-9, 42, 83`). Sidebar và header đứng yên, content cuộn. Đây là mô hình "vùng content tự cuộn" giống Atlassian (§2), không phải "cả trang cuộn" như Polaris.
- **Padding:** `main` dùng `--space-6`, từ 64rem lên thì `--space-section` (`:45-54`).
- Template `Projects.tsx:210-316` dùng AppShell có Sidebar và AppHeader, trang là grid `gap: var(--space-section)` (`Projects.module.css:1-4`).

### 1.2 Token bề mặt

| Token | Light | Dark | Nguồn |
|---|---|---|---|
| `--background` | `gray.50` (98.5% L) | `gray.950` | `tokens/semantic.json:5,124` |
| `--card` | trắng | `gray.900` | `:7,126` |
| `--surface-filled` | `gray.50` | `gray.800` | `:18,137` |
| `--muted` / `--accent` | `gray.100` | `gray.800` | `:15,19,134,138` |
| `--border` | `gray.200` | trắng 10% | `:28,147` |
| `--hover-overlay` | đen 5% | trắng 6% | `:22,141` |
| `--primary-subtle` / `-text` | `accent.subtle` / `accent.subtleText` | như bên trái | `:34-35` |
| `--elevation-2xs…2xl` | 2 lớp shadow theo độ cao | alpha ×4, tối đa 0.6 | `:244-260` |

Vậy câu hỏi của brief có câu trả lời: **`--background` (gray.50) đã chính là canvas "Neutral", và `--card` (trắng) đã là bề mặt panel.** Tức AppShell hiện là *Flat trên canvas Neutral*: header, sidebar và content cùng nền gray.50, phân cách bằng border. Theo luật suy ra, tổ hợp này không hợp lệ (§4). Một chi tiết lệch: ở light, Sidebar (`--surface-filled` = gray.50) trùng màu canvas. Ở dark, Sidebar là gray.800, sáng hơn canvas gray.950. Nghĩa là cùng một component, ở light nó phẳng, sang dark thì nổi.

`--primary-subtle` đã được generator chọn sao cho có một bậc chữ đạt 4.5:1 trên nó: tint 100 ở light, 950 ở dark (`scripts/build-tokens.mjs:84-105`, `pickSubtle`). Đây là ứng viên sẵn có cho canvas Tinted mặc định, có bảo đảm.

### 1.3 Ai đang dùng `--background` như "bề mặt tôi đang nằm trên"

Ngoài AppShell, 9 component đọc `--background` để trùng với bề mặt bên dưới:

- vòng cắt của Badge: `box-shadow: 0 0 0 2px var(--background)` (`Badge.module.css:106`);
- nền ô Checkbox, Radio, Switch, Slider: `Checkbox.module.css:22`, `Radio.module.css:65`, `Switch.module.css:67`, `Slider.module.css:82`;
- `Stepper.module.css:68`, Alert outlined (`Alert.module.css:51`), `Carousel.module.css:28`, `FileUploader.module.css:61`.

Table, Tabs, InputField thì đọc `--card` (`Table.module.css:4`, `Tabs.module.css:170`, `InputField.module.css:73`).

Nếu panel Card chỉ tô nền `--card` mà không khai báo lại `--background`, các component trên sẽ vẽ mảng gray.50 trong panel trắng. Đây là lý do kỹ thuật buộc setting phải nằm ở tầng token chứ không chỉ ở CSS của AppShell.

### 1.4 Idiom để bắt chước

- **Density:** `[data-density]` đặt hai switch, mỗi token có giá trị Compact viết thành `var(--density-default, X) var(--density-compact, Y)` (`src/tokens.css:714-728, 828-852`; generator `scripts/build-tokens.mjs:350`).
- **Appearance:** cũng hai switch `--use-light` / `--use-dark` (`src/tokens.css:432-438, 576-577, 710-711`).
- **Radius:** Theme đặt `radius-factor`/`radius-full` qua inline style (`src/theme/Theme.tsx:24-28`), rồi các token dẫn xuất `--radius-panel` v.v. đọc chúng (`src/tokens.css:778-810`).
- **Theme** đã có prop `tokens` để ghi đè bất kỳ custom property nào (`Theme.tsx:56-61`). Ghi đè canvas dùng luôn đường này, không cần API mới.

## 2. Các hệ mô hình hoá khung shell thế nào

**Atlassian: Flat, canvas trắng, border.** Grid của root đặt top bar trải hết chiều ngang trên `side-nav main aside` từ 64rem: `"ribbon top-bar top-bar top-bar" "ribbon side-nav main aside"` (`@atlaskit/navigation-system@11.3.1`, `dist/esm/ui/page-layout/root.compiled.css:12`). TopNav nền `--ds-surface` với `border-block-end` (`top-nav/top-nav.compiled.css`). SideNav có `border-inline-end` từ desktop, còn khi bung ra dạng flyout thì nền `--ds-surface-overlay` kèm `--ds-shadow-overlay` (`side-nav/side-nav.compiled.css`). Main và SideNavContent tự cuộn (`overflow-y:auto`, `main/main.compiled.css`, `side-nav/side-nav-content.compiled.css`). Không có biến thể card. Top bar nhận `customTheme {backgroundColor, highlightColor}`. Từ màu nền đó, hệ tự suy ra màu chữ (`getTextColor`), chế độ sáng/tối (`getColorMode`) và hover bằng alpha, với comment: "We will need to invert the colors based on backgroundColor independently of the app's color mode" (`ui/top-nav-items/themed/get-custom-theme-styles.js`). Đây là tiền lệ cho `--canvas-foreground` đi theo canvas chứ không theo appearance. Token bề mặt gồm `elevation.surface` (mặc định, "starting point for body content"), `.sunken` (chỉ đặt trên default), `.raised` (luôn đi cùng `shadow.raised`) và `.overlay`. Card phẳng = default cộng border ([atlassian.design/foundations/elevation](https://atlassian.design/foundations/elevation)). Giá trị light: surface/raised `#FFFFFF`, sunken `#F8F8F8`. Dark: surface `#1F1F21`, raised `#242528`, overlay `#2B2C2F`, sunken `#18191A`. Ở dark, raised *sáng hơn* (`@atlaskit/tokens@20.6.1`, `dist/esm/artifacts/themes/atlassian-{light,dark}.js`).

**Shopify Polaris: Card, canvas xám, cả trang cuộn.** `color-bg` = gray 6 (`#f1f1f1`), "The default background color of the admin". `color-bg-surface` = trắng, "for elements with the highest level of prominence, like a card" ([polaris-tokens/src/themes/base/color.ts:258-269](https://github.com/Shopify/polaris/blob/main/polaris-tokens/src/themes/base/color.ts), [colors.ts:27-44](https://github.com/Shopify/polaris/blob/main/polaris-tokens/src/colors.ts)). Frame tô `color-bg`, TopBar và Navigation `position: fixed`, còn Main dời bằng padding, nên tài liệu cuộn ([Frame.module.css:1-20, 31, 151-232](https://github.com/Shopify/polaris/blob/main/polaris-react/src/components/Frame/Frame.module.css)). TopBar nền `color-bg-inverse` (tối), Navigation nền `color-nav-bg` (gray 7) ([TopBar.module.css:5-6](https://github.com/Shopify/polaris/blob/main/polaris-react/src/components/TopBar/TopBar.module.css), [Navigation.module.css:19](https://github.com/Shopify/polaris/blob/main/polaris-react/src/components/Navigation/Navigation.module.css)). Card mặc định `background='bg-surface'`, `roundedAbove='sm'`, tức radius 0 trên điện thoại (card áp sát mép) ([Card.tsx:20-50](https://github.com/Shopify/polaris/blob/main/polaris-react/src/components/Card/Card.tsx)). Kiểu Card được *cố định* cho cả sản phẩm, không phải tuỳ chọn. Có token `color-bg-surface-transparent` ([color.ts:439-442](https://github.com/Shopify/polaris/blob/main/polaris-tokens/src/themes/base/color.ts)).

**GitHub Primer: Flat, lựa chọn nằm ở divider.** `bgColor.default`: "Use as the primary background for pages and content areas". `bgColor.inset`: "Inset background for recessed content areas like wells or sunken panels", alias của `bgColor.muted` ([functional/color/bgColor.json5:3-70](https://github.com/primer/primitives/blob/main/src/tokens/functional/color/bgColor.json5)). PageLayout không có biến thể card. Mỗi vùng nhận `divider: 'none' | 'line' | 'filled'`, đổi theo breakpoint. `filled` = nền `--bgColor-inset` cộng inset shadow 1px `--borderColor-default` ở trên và dưới ([PageLayout.module.css:115-133](https://github.com/primer/react/blob/main/packages/react/src/PageLayout/PageLayout.module.css), [PageLayout.tsx:154, 330-345](https://github.com/primer/react/blob/main/packages/react/src/PageLayout/PageLayout.tsx)). Đáng chú ý: ngay cả biến thể "fill" của Primer cũng kèm một đường kẻ, không dựa vào riêng việc đổi màu nền.

**Microsoft Fluent 2: sáu nền xám, Nav dùng nền 4.** `colorNeutralBackground1…6` = `#ffffff, #fafafa, #f5f5f5, #f0f0f0, #ebebeb, #e6e6e6` ở light ([lightColor.ts:67-87](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/alias/lightColor.ts)). Ở dark: `#292929, #1f1f1f, #141414, #0a0a0a, #000, #333` ([darkColor.ts:67-87](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/alias/darkColor.ts)). Background1 sáng nhất ở cả hai mode, tức "bề mặt nổi" đảo chiều độ sáng khi sang dark. Nav dùng `colorNeutralBackground4` (`@fluentui/react-nav@9.4.8`, `lib/components/sharedNavStyles.styles.raw.js:11`). Có `colorSubtleBackground` / `colorTransparentBackground` = `transparent` (`lightColor.ts:100,111`). Docs màu khuyên tránh màu brand trên mảng lớn: "Avoid overusing brand colors or using them on large surfaces" ([fluent2.microsoft.design/color](https://fluent2.microsoft.design/color)). Fluent không có khái niệm card/flat ở mức shell.

**IBM Carbon: Flat, lớp xen kẽ.** `$background` là "UI Shell base color". `$layer-01` nằm trên `$background`, `$layer-02` trên `$layer-01`, `$layer-03` trên `$layer-02`. Theme White xen kẽ trắng / Gray 10 / trắng / Gray 10. Field, border và hover đều có bản theo từng lớp (`$field-02` trên `$layer-01`…) ([carbondesignsystem.com/elements/color/tokens](https://carbondesignsystem.com/elements/color/tokens/)). Header: `background-color: $background; border-block-end: 1px solid $border-subtle`, cố định trải hết chiều ngang. Side-nav: `background-color: $background` ([ui-shell/header/_header.scss:28-41](https://github.com/carbon-design-system/carbon/blob/main/packages/styles/scss/components/ui-shell/header/_header.scss), [side-nav/_side-nav.scss:28-35](https://github.com/carbon-design-system/carbon/blob/main/packages/styles/scss/components/ui-shell/side-nav/_side-nav.scss)). Bài học cho Zweihänder: component lấy màu field/border *theo lớp mình đang nằm trên*. Đó chính là việc khai báo lại `--background` trong panel (§5.3).

**Material 3: bề mặt tint theo màu nguồn, container theo bậc.** Mọi surface role dùng `on-surface` hoặc `on-surface-variant` cho nội dung ([material-web docs/theming/color.md:64-76](https://github.com/material-components/material-web/blob/main/docs/theming/color.md)). `surfaceContainerLow`: "a lighter tone that creates less emphasis than surfaceContainer" ([api.flutter.dev ColorScheme.surfaceContainerLow](https://api.flutter.dev/flutter/material/ColorScheme/surfaceContainerLow.html)). Token Compose: drawer modal = `SurfaceContainerLow`, drawer standard = `Surface`, elevation 0 ([NavigationDrawerTokens.kt:116-125](https://github.com/androidx/androidx/blob/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens/NavigationDrawerTokens.kt)). Filled card = `SurfaceContainerHighest`, elevation 0. Elevated card = `SurfaceContainerLow`, Level1. Outlined card = `Surface`. Cả ba đều `CornerMedium` (`FilledCardTokens.kt`, `ElevatedCardTokens.kt`, `OutlinedCardTokens.kt:24-31`, cùng thư mục). M3 là hệ duy nhất mà canvas *luôn* tint, và chữ trên đó được bảo đảm vì `on-surface` sinh ra cùng bảng màu. Nghĩa là "Tinted" chỉ an toàn khi foreground được sinh cùng lúc với canvas.

**SAP Fiori (Horizon): Card, canvas là tham số theme nhận gradient.** `sap_horizon`: `--sapBackgroundColor: #f5f6f7`, `--sapShell_BackgroundImage: linear-gradient(to bottom, #eff1f2, #eff1f2)`, `--sapShellColor: #fff`, `--sapShell_Navigation_Background: #fff`, `--sapTile_Background: #fff`, `--sapTile_BorderColor: transparent`, `--sapTile_BorderCornerRadius: 1rem`. `sap_fiori_3` dùng một gradient thật: `linear-gradient(to bottom, #dfe3e4, #f3f4f5)`. `sap_horizon_dark` gom gradient về màu đặc `#12171c`. Đặc biệt, `sap_horizon_hcb` (high contrast đen) đặt `--sapTile_BorderColor: #fff`: khi độ chênh nền không còn, ranh giới được trả lại bằng border (`@sap-theming/theming-base-content@11.36.5`, `content/Base/baseLib/{sap_horizon,sap_horizon_dark,sap_horizon_hcb,sap_fiori_3}/css_variables.css`). Đây là tiền lệ gần nhất cho cả hai ý: canvas là một giá trị `background-image` mà theme ghi đè được, và dark mode do theme tự cung cấp.

**Salesforce SLDS: canvas màu và gradient, card trắng có border.** `.slds-brand-band::before` phủ ảnh brand cộng `linear-gradient(to top, rgba(1,68,134,0) 0, rgb(1,68,134))` sau nội dung (`z-index:-1`). `::after` là dải gradient chuyển về `rgb(238,244,255)`. Có biến thể `_small/_medium/_cover`. `.slds-card`: nền trắng, `border: 1px solid` `--slds-g-color-border-base-1` (`rgb(201,201,201)`), `border-radius: .25rem`, shadow `0 2px 2px 0 rgba(0,0,0,.1)`, tất cả ghi đè được qua styling hook `--slds-c-card-*` (`@salesforce-ux/design-system@2.264.1`, `assets/styles/salesforce-lightning-design-system.css:8325-8337, 13468-13530`). Global hook `--slds-g-color-surface-1…3` và `surface-container-1…3` = `#fff, #f3f3f3, #e5e5e5`, đặt tên theo M3 (`assets/styles/salesforce-lightning-design-system-offline.css`). Brand band là component của trang, không phải prop của shell.

**Radix Themes: setting ở Theme.** `panelBackground: 'solid' | 'translucent'`, mặc định `translucent` (`@radix-ui/themes@3.3.0`, `src/components/theme.props.tsx:8,48`). `[data-panel-background='translucent']` đặt `--color-panel: var(--color-panel-translucent)` (trắng 70%) và `--backdrop-filter-panel: blur(64px)`. `solid` thì trắng và không blur (`src/styles/tokens/color.css:11-23,127-133`). Card, Table, menu, dialog, popover, select đều đọc `--color-panel` (`src/components/card.css:69-73` và các file cùng thư mục). Prop `scaling` của Radix cũng là `90%…110%`, y như `SCALINGS` của Zweihänder (`Theme.tsx:30`). Theme của Zweihänder vốn đã theo khuôn Radix, nên thêm một setting bề mặt ở Theme là đi tiếp đúng khuôn đó.

### 2.1 Bảng so sánh

| | Kiểu content | Canvas | Lựa chọn nằm ở | Vùng trong suốt | Ranh giới panel |
|---|---|---|---|---|---|
| Atlassian | Flat | trắng | không có (top bar nhận `customTheme`) | top bar custom: chữ tự suy từ nền | border |
| Polaris | Card | `#f1f1f1` | cố định | không (TopBar tối, Nav xám) | radius 12px + shadow bevel |
| Primer | Flat | trắng | `divider` theo vùng | không | line hoặc fill+line |
| Fluent 2 | Flat | Background1–4 | không | `colorTransparentBackground` | — |
| Carbon | Flat | `$background` | không | không | border-subtle |
| Material 3 | theo component | tint theo nguồn | cố định | — | elevation / outline |
| SAP Fiori | Card | `--sapShell_BackgroundImage` (gradient) | tham số theme | shell bar trắng | radius 1rem, border chỉ ở HC |
| SLDS | Card | brand band (gradient + ảnh) | component trang | header trên band | border + shadow |
| Radix | — | `--color-background` | Theme `panelBackground` | translucent + blur | — |
| **Zweihänder (đề xuất)** | **suy từ canvas** | **`--canvas`, nhận gradient** | **Theme `canvas`** | **`--canvas-foreground`** | **border + `elevation-2xs`** |

## 3. Bề mặt trong suốt, chữ trên canvas và dark mode

- **Chữ trên vùng trong suốt phải đi theo canvas, không theo appearance.** Atlassian suy màu chữ và hover từ nền top bar "independently of the app's color mode" (`get-custom-theme-styles.js`, như trên). M3 sinh `on-surface` cùng với surface (§2). Vì vậy top bar và sidebar trong suốt phải đọc `--canvas-foreground` / `--canvas-muted-foreground`, không đọc `--foreground`.
- **Hover trên canvas dùng alpha, không dùng màu đặc.** Atlassian dùng `Neutral200A/300A` (alpha) cho button của top bar tuỳ biến (như trên). Zweihänder đã có tiền lệ: Sidebar dùng `--hover-overlay` vì `--accent` đặc "vanished" trên nền cùng màu (`Sidebar.module.css:57-59`). Trên gradient, chỉ alpha là đúng ở mọi điểm.
- **Gradient trong dark mode do theme cung cấp.** SAP gom gradient về màu đặc ở `sap_horizon_dark` (§2). SLDS không có bản dark cho brand band trong file đã đọc (**unverified**). Không hệ nào tự đảo một gradient tuỳ ý.
- **Vòng cắt và "nền bên dưới" không trùng được với gradient.** Vòng `0 0 0 2px var(--background)` của Badge (`Badge.module.css:106`) chỉ đúng trên nền đặc. Trên vùng trong suốt nằm trên gradient, vòng sẽ là một mảng màu đặc. Chấp nhận được, nhưng docs cần ghi.

## 4. Ma trận tổ hợp

2 layout × 2 top bar × 2 sidebar × 3 canvas = 24 ô. Kiểu content suy từ canvas: White ⇒ Flat, Neutral/Tinted ⇒ Card. Ký hiệu: **OK** hợp lệ; **≡** suy biến (trông y hệt ô OK đầu hàng, prop không có tác dụng); **OK·a11y** hợp lệ, nhưng tương phản chữ phụ thuộc `--canvas-foreground` (hệ bảo đảm với tint mặc định, consumer chịu trách nhiệm với tint tự chọn). "S" = solid (White), "T" = transparent.

| Layout | Top bar | Sidebar | White (Flat) | Neutral (Card) | Tinted (Card) |
|---|---|---|---|---|---|
| sidebar cao hết màn | S | S | **OK**, cần border | OK | OK |
| | S | T | ≡, cần border | OK (sidebar inset trên canvas) | OK·a11y |
| | T | S | ≡, cần border | OK (header trên canvas, panel bên dưới) | OK·a11y |
| | T | T | ≡, cần border | OK (giống Datava) | OK·a11y |
| top bar trải ngang | S | S | **OK**, cần border | OK (giống Polaris/SAP) | OK |
| | S | T | ≡, cần border | OK | OK·a11y |
| | T | S | ≡, cần border | OK | OK·a11y |
| | T | T | ≡, cần border | OK | OK·a11y |

Đọc ma trận:

- **Canvas White:** 8 ô gom về 2 kiểu nhìn (mỗi layout một). Trắng trên trắng thì ranh giới chỉ còn border. Không có gì *sai*, chỉ là prop surface không còn tác dụng. Vì vậy ở Flat, border là bắt buộc và không tắt được.
- **Neutral/Tinted:** cả 16 ô đều hợp lệ, vì panel content luôn trắng (`--card`), nên chữ trong panel không bao giờ nằm trên màu.
- **Tổ hợp bị loại nhờ suy ra:** "Neutral/Tinted + Flat" (content phẳng nằm trên màu: chữ trên tint, và các component trong §1.3 vẽ nền sai) và "White + Card" (panel trắng trên canvas trắng: gap và radius không ai thấy). Hai tổ hợp này không khai báo được, nên không cần lint hay cảnh báo.
- **Cái giá của luật suy ra:** AppShell hiện là Flat trên gray.50 (§1.2), một tổ hợp bị loại. Bỏ prop `canvas` thì phải chọn mặc định mới. Đề xuất chọn `white`, vì chỉ đổi fill gray.50 → trắng, border giữ nguyên, ít lệch baseline nhất (*cần visual compare*). Đây là thay đổi có thể thấy được (câu hỏi mở 1).

## 5. Kiểu Card: số đo và hành vi

### 5.1 Gap, radius, ranh giới

- **Gap:** Polaris `space-card-gap` = `space-card-padding` = `space-400` (16px) ([space.ts:97-102](https://github.com/Shopify/polaris/blob/main/polaris-tokens/src/themes/base/space.ts)). Zweihänder: dùng `--space-group` (16 Default, 12 Compact, `tokens/semantic.json` mục `space`), vừa là "between items and blocks that belong together", vừa đi theo density. Không thêm token.
- **Radius:** Polaris `border-radius-300` = `size[300]` = 12px ([border.ts:44-49](https://github.com/Shopify/polaris/blob/main/polaris-tokens/src/themes/base/border.ts)). SAP tile 1rem. SLDS .25rem. M3 `CornerMedium`. Zweihänder: `--radius-panel` (`src/tokens.css:796-798`), mà Card đã dùng (`Card.module.css:41-43`). Preset `sharp` cho ra panel vuông có gap, vẫn là một Card style hợp lệ. Polaris bỏ radius trên điện thoại (`roundedAbove='sm'`). Zweihänder có thể làm tương tự: dưới 48rem panel áp mép, gap 0 (câu hỏi mở 3).
- **Shadow hay border:** Polaris dùng `shadow-bevel-100`, thực chất là border 1px viền trong bằng shadow inset alpha .13–.17 ([shadow.ts:59-61](https://github.com/Shopify/polaris/blob/main/polaris-tokens/src/themes/base/shadow.ts)). SLDS dùng border cộng shadow. SAP không border, chỉ shadow, nhưng thêm border ở high contrast. Primer "filled" cũng kèm line. Không hệ nào chỉ dựa vào chênh lệch fill. Zweihänder: border `--border` cộng `--elevation-2xs`. Lý do: ở dark, shadow gần như mất tác dụng (`tokens/semantic.json:246-251` tự nói vậy về bậc cao), còn card gray.900 trên gray.950 chỉ chênh 1.1:1 (*tự tính*).

### 5.2 Scroll và header sticky

Hai mô hình:

- **Canvas cuộn (Polaris):** top bar và nav `fixed`, tài liệu cuộn, card trôi theo ([Frame.module.css:31, 151-232](https://github.com/Shopify/polaris/blob/main/polaris-react/src/components/Frame/Frame.module.css)).
- **Vùng cuộn bên trong (Atlassian):** `main` và side-nav-content `overflow-y:auto` (§2).

Đề xuất mô hình thứ hai: panel content là vùng cuộn, `overflow: auto`, radius cắt bằng `overflow: clip` trên panel. Mô hình này giữ nguyên hành vi hiện tại của `.column` và header sticky (`AppShell.module.css:37-43, 82-93`). Với layout "sidebar cao hết màn" có top bar `solid`, header nằm *trong* panel và sticky ở mép trên panel. Với top bar `transparent`, header nằm trên canvas, ngoài panel, nên không cần sticky. Cái giá: thanh cuộn nằm trong góc bo, và trên trình duyệt di động thanh địa chỉ không tự thu lại vì tài liệu không cuộn. AppShell hiện đã chịu cái giá này (`block-size: 100dvh; overflow: hidden`).

## 6. Accessibility

- **WCAG 1.4.11 không bắt ranh giới vùng phải đạt 3:1.** Tiêu chí chỉ áp cho UI component và "parts of graphics required to understand the content". Phần trang trí thì được miễn: "for aesthetic purposes". Hit area cũng không bắt phải có ranh giới: "does not require that controls have a visual boundary" ([Understanding 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)). Panel không tương tác vì thế không cần 3:1. Card *tương tác* thì cần (Card đã xử lý: hover lên viền `--control-border`, `Card.module.css:76-89`).
- **Thực tế không hệ nào đạt 3:1 bằng fill** (*tự tính*): trắng/gray.50 (Zweihänder) 1.04:1, trắng/gray.100 1.09:1, trắng/`#f1f1f1` (Polaris) 1.13:1, trắng/`#f0f0f0` (Fluent BG4) 1.14:1, card/canvas dark của Zweihänder 1.1:1. Ngay cả border `--border` gray.200 trên trắng cũng chỉ 1.26:1. Vì vậy với người nhìn kém, ranh giới là nỗ lực tốt nhất chứ không phải bảo đảm. Đó là lý do đề xuất luôn có border, và theo SAP HC, ở `forced-colors` thì đổi border sang `CanvasText` (đề xuất, chưa thử).
- **Chữ trên canvas (1.4.3):** chữ trên vùng trong suốt phải đạt 4.5:1 với canvas. Understanding 1.4.3 không có quy trình đo cho gradient. Nó chỉ nêu failure F83 "background images that do not provide sufficient contrast", và nói tương phản đo "with respect to the specified background over which the text is rendered" ([Understanding 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)). Suy ra: với gradient, phải đạt ở *mọi* điểm có chữ, tức ở điểm khó nhất (suy luận của tôi, không phải câu chữ của W3C).
- **Ranh giới trách nhiệm (quyết định của sếp, 2026-10-20):**
  - *Hệ bảo đảm:* canvas `white` và `neutral` dùng `--foreground`/`--muted-foreground` đã có. Ở light, muted gray.500 đạt 4.81:1 trên gray.50 (*tự tính*). Canvas `tinted` mặc định dùng `--primary-subtle`, foreground mặc định do generator chọn và **assert ≥ 4.5:1** cho cả `--canvas-foreground` lẫn `--canvas-muted-foreground`, trên mọi accent, ở cả light và dark. Làm giống `pickSubtle`, ném lỗi khi trượt (`scripts/build-tokens.mjs:87-94`). Docs ghi rõ mọi cặp đã kiểm.
  - *Consumer chịu trách nhiệm:* bất kỳ `--canvas` nào truyền qua `tokens` (màu hoặc gradient), cặp foreground đi kèm, và bản dark của nó. Docs hướng dẫn kiểm ở điểm khó nhất của gradient và kiểm cả hover alpha. Hệ không cố tự suy foreground cho gradient: Atlassian chỉ suy được cho một màu đặc, còn gradient không có "một" màu nền.

## 7. Đề xuất cho Zweihänder

### 7.1 Theme: setting bề mặt (quyết định của sếp, 2026-10-20)

```tsx
<Theme canvas="white" | "neutral" | "tinted">   // data-canvas; inherit khi bỏ trống
```

`[data-canvas]` làm hai việc:

1. Đặt hai switch `--canvas-flat` / `--canvas-card`. `white` ⇒ flat, `neutral`/`tinted` ⇒ card. Viết y idiom density (`src/tokens.css:714-728`).
2. Đặt giá trị mặc định cho `--canvas` và các foreground:

| `data-canvas` | `--canvas` | `--canvas-foreground` | `--canvas-muted-foreground` | `--canvas-hover` |
|---|---|---|---|---|
| `white` | `--card` | `--foreground` | `--muted-foreground` | `--hover-overlay` |
| `neutral` | `--background` (gray.50 / gray.950) | `--foreground` | `--muted-foreground` | `--hover-overlay` |
| `tinted` | `--primary-subtle` | do generator chọn, assert 4.5:1 | do generator chọn, assert 4.5:1 | `--hover-overlay` (cần kiểm trên tint) |

**Ghi đè canvas tự chọn**, màu hay gradient, không cần API mới:

```tsx
<Theme canvas="tinted" tokens={{
  canvas: 'var(--use-light, linear-gradient(135deg, #e8eefe, #f6e9ff)) var(--use-dark, linear-gradient(135deg, #10172e, #1d1030))',
  'canvas-foreground': 'var(--use-light, #111827) var(--use-dark, #f3f4f6)',
  'canvas-muted-foreground': 'var(--use-light, #4b5563) var(--use-dark, #9ca3af)',
}}>
```

- `--canvas` **không được đăng ký `@property` với `syntax: '<color>'`**. Nó phải nhận được `<image>`, và được tiêu thụ bằng `background: var(--canvas)`. Đây là khác biệt duy nhất so với các token màu khác. Nó không vào `color-mix()` được, nên không token nào được dẫn xuất từ `--canvas`.
- Dark mode của tint tự chọn đi qua switch `--use-light/--use-dark` có sẵn (`src/tokens.css:432-438`). Switch rỗng ở mode không áp dụng, nên giá trị ghép lại là "gradient + khoảng trắng", vẫn hợp lệ. Consumer không truyền bản dark thì dark dùng chung giá trị light. Docs phải nói rõ đó là trách nhiệm của consumer.

Đặt ở Theme thay vì ở AppShell, đúng như sếp yêu cầu: cùng scope với density và radius, lồng được (một vùng con dùng `<Theme canvas="white">`), và component ngoài AppShell (Playground, PreviewTheme, một trang không dùng shell) cũng đọc được. Cái giá: một Theme không có AppShell vẫn mang `data-canvas` mà không có panel nào. Lúc đó chỉ `--background` của trang đổi theo, chấp nhận được.

### 7.2 Khai báo lại bề mặt trong panel

Panel Card của AppShell (và Sidebar ở chế độ `card`) đặt:

```css
.panel { background: var(--card); --background: var(--card); color: var(--card-foreground); }
```

Ở Flat, vùng content cũng làm như vậy (`--card` trắng = `--canvas` trắng). Kết quả: **nội dung luôn nằm trên `--card`**, ở cả hai kiểu. 9 component trong §1.3 đúng mà không phải sửa, và trang không còn phải biết mình đang ở Card hay Flat. Vùng trong suốt (top bar `transparent`, sidebar `inset`) thì đặt `--background: transparent`? **Không nên.** Vòng Badge và nền Checkbox sẽ mất. Giữ `--background` của tầng trên và chấp nhận mảng đặc trên gradient (§3). Đây là chỗ cần sếp xem trực tiếp.

Cách này cũng xử lý được chuyện Sidebar lệch light/dark ở §1.2: ở `card`, Sidebar đọc `--card`; ở `inset`, nó trong suốt. `--surface-filled` không còn là nền của Sidebar trong shell.

### 7.3 AppShell: chỉ những gì riêng của một shell

```tsx
<AppShell
  layout="sidebar" | "top-bar"      // mặc định "sidebar" = cấu trúc hiện tại
  topBar="solid" | "transparent"     // mặc định "solid"
  sidebarSurface="card" | "inset"    // mặc định "card"; ở Flat là nền --card + border
/>
```

- `layout="top-bar"` đổi grid sang `"header header" "sidebar main"`, đúng thứ tự Atlassian (`root.compiled.css:12`). Drawer, skip link và breakpoint giữ nguyên.
- Ở Flat (`data-canvas="white"`), `topBar` và `sidebarSurface` vẫn nhận giá trị nhưng trông y hệt nhau. Không cảnh báo, chỉ ghi docs (§4). Lý do không cấm: cùng một màn có thể đổi canvas ở Theme mà không phải sửa prop của AppShell.
- `data-style` không phải prop. AppShell đọc switch `--canvas-card/--canvas-flat` để chọn gap, radius và border, theo đúng cách token density đọc `--density-*`.
- Tên `sidebarSurface` thay vì `sidebar` vì `sidebar` đã là slot node (`AppShell.tsx:22-23`).

### 7.4 Không cấu hình

Gap (`--space-group`), radius (`--radius-panel`), shadow/border của panel, mô hình scroll, Flat trên Neutral/Tinted, Card trên White, và độ trong suốt kiểu "translucent + blur" của Radix (chưa có nhu cầu; `backdrop-filter` trên vùng cuộn lớn tốn hiệu năng, chưa đo).

### 7.5 Token mới

| Token | Kiểu | Ghi chú |
|---|---|---|
| `--canvas-flat`, `--canvas-card` | switch | do `[data-canvas]` đặt, idiom density |
| `--canvas` | màu hoặc image | không đăng ký `<color>` |
| `--canvas-foreground` | màu | mặc định theo bảng §7.1 |
| `--canvas-muted-foreground` | màu | như trên |
| `--canvas-hover` | màu (alpha) | mặc định `--hover-overlay` |

Đặt ở `tokens/semantic.json`, hai mode `light`/`dark`, giá trị theo canvas qua `$extensions` như cách density làm với `compact`. Generator sinh khối `[data-canvas]` và assert 4.5:1 cho `tinted` (§6). `npm run tokens:check` phải chặn được trường hợp một accent trượt ngưỡng.

### 7.6 Figma

Figma chỉ có variable kiểu Color là "Solid fills, with optional opacity". Variable gắn được vào từng gradient stop nhưng không chứa được cả gradient ([Figma help: variables](https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes)). Vì vậy:

- Collection mới "Canvas" với 3 mode `white/neutral/tinted`, chứa `canvas` (màu đặc mặc định), `canvas-foreground`, `canvas-muted-foreground`, `canvas-hover`. Light/dark nằm ở collection appearance hiện có.
- Gradient tự chọn của consumer là **paint style** dựng trên hai biến stop, không phải variable. Export DTCG chỉ mang giá trị màu đặc mặc định.
- Card/Flat trong Figma: một variant `style=card|flat` trên component AppShell. Figma không có cơ chế "suy ra", nên đây là chỗ Figma lệch code. Docs cần ghi: chọn mode Canvas thì phải chọn variant khớp.

## Câu hỏi mở cho sếp

1. **Mặc định mới của AppShell.** Hiện là Flat trên gray.50 (tổ hợp bị loại). Đề xuất `canvas="white"`, nhưng có thể chọn `neutral` (Card). Cả hai đều đổi baseline của AppShell, Projects và các story pattern.
2. **Vùng trong suốt có giữ `--background` của tầng trên không?** (§7.2) Giữ thì vòng Badge và nền Checkbox thành mảng đặc trên gradient. Bỏ thì chúng mất nền.
3. **Dưới 48rem**, panel áp mép (radius 0, gap 0) như Polaris, hay giữ card?
4. **Border đôi của sidebar** (§1.1): xác nhận trong trình duyệt rồi sửa cùng đợt này, hay tách thành fix riêng?
5. Hover alpha `--hover-overlay` (đen 5%) trên `--primary-subtle` có đủ thấy không? Chưa đo.
