---
description: Kiểm soát kích thước box trong Zweihänder (mọi element là một box, cùng vai trò thì cùng cỡ, mặc định 32px). So Carbon, Fluent 2, Spectrum, Atlassian, Material, Apple HIG, Primer, Polaris về thang chiều cao control, density, icon trong control; audit Zweihänder có file:line; đề xuất box ramp 16–48, bảng role → bậc, một luật Compact, cách ép bằng Stylelint, tokens:check và story test.
type: research
status: done
updated: 2026-10-20
access: internal
tags: [zweihander, research, tokens, sizing, density, design-system, stylelint, wcag]
---

# Kích thước box trong Zweihänder: thang, vai trò và cách ép buộc

Phạm vi: WCAG 2.2 (2.5.8, 2.5.5), CSS 2.1 / CSS Sizing 3 / CSS Inline 3, IBM Carbon, Microsoft Fluent 2 (Fluent UI React v9), Adobe Spectrum (`spectrum-design-data`), Atlassian (`@atlaskit/button@25.5.0`), Material (`material-components-web`, `material-web`), Apple HIG, GitHub Primer (`primer/primitives`), Shopify Polaris. Đọc ngày 2026-10-20; file token và source lấy từ nhánh `main`/`master` qua raw.githubusercontent.com, Atlassian lấy từ tarball npm. Dữ kiện Zweihänder lấy từ worktree `zweihander-box-sizing-26af97` (HEAD `c68be39`, đã có density #138 và radius #139). Mọi số px của Zweihänder là ở scaling 100%. Không đổi code hay token trong đợt này.

## Kết luận

**Zweihänder đã có gần đủ ý của sếp cho control, nhưng chưa có cho các box còn lại.** Control đã có thang (`--control-xs/sm/md` = 20/24/32), 32 là mặc định và có máy kiểm (`playground:check`), icon gắn theo bậc. Chỗ hở là mọi box *không phải* control: spinner, marker của Stepper, nút đóng, nút điều hướng Carousel, icon của EmptyState và Stats, cột chọn của Table. Các box này đang mượn token spacing (`--space-4/6/8/10/12`) làm kích thước, nên không theo density và không có luật vai trò. Hậu quả đúng kiểu sếp lo: **nút đóng có ba cỡ khác nhau cho cùng một vai trò** (20px ở Popover, Toast, Alert; 24px ở Modal; 32px ở drawer của AppShell).

Đề xuất gồm năm phần, theo thứ tự:

1. **Một box ramp sáu bậc:** 16 · 20 · 24 · 32 · 40 · 48, đặt tên `--box-2xs … --box-xl`. `md` = 32 là bậc mặc định. Control tier trở thành alias của ba bậc giữa. Mọi box có chiều cao cố định phải đứng trên ramp.
2. **Bảng role → bậc** trong `Sizing.mdx`, để "cùng vai trò thì cùng cỡ" thành luật viết ra (ví dụ: nút đóng trong một bề mặt luôn là `sm`, nút icon ở chrome luôn là `md`).
3. **Text và box ghép không được chọn chiều cao.** Text cao theo line-height token. Box ghép (row, Tag, top bar) tính bằng box bên trong cộng 2 × một role spacing.
4. **Một luật Compact cho cả ramp.** Hiện có hai luật song song (control giảm 4/2/0px, còn size token lùi một bậc), nên Compact sinh ra 9 giá trị chiều cao trong khi Default chỉ có 6. Đây là quyết định lớn nhất cần sếp chốt.
5. **Ép bằng máy ở ba tầng:** Stylelint giới hạn từ vựng cho thuộc tính kích thước (cấm `--space-*` ở `block-size`/`inline-size`), `tokens:check` kiểm mọi size token nằm trên ramp, và một story test đo chiều cao thật trong cả hai density.

Lý do không chỉ cấm px thô: literal chiều cao trong component gần như không còn (chỉ còn hairline 1–2px và vài kích thước vùng như `ColorPicker` 10rem). Lỗi thật nằm ở **chọn sai token** và **cùng vai trò nhưng khác bậc**, mà lint literal không bắt được.

## 1. Khái niệm, nói cho chặt

**Box là mọi element, nhưng không phải box nào cũng được chọn chiều cao.** CSS có ba loại chiều cao khác nhau, và guideline phải nói rõ loại nào nhận số từ thang:

- **Box nguyên tử (fixed):** control, nút icon, avatar, ô checkbox, spinner. Chiều cao do component đặt và **phải là một bậc của ramp**. Đây là chỗ áp ý "cùng vai trò thì cùng cỡ".
- **Line box của text:** CSS định nghĩa `line-height` là chiều cao tối thiểu của line box, tính bằng một "strut" vô hình ([CSS 2.1 §10.8](https://www.w3.org/TR/CSS2/visudet.html#line-height)). Text không có `height`, mà chiều cao nằm trong `--leading-*`. Một icon đứng cạnh một dòng text thì nằm trong box cao đúng một dòng. Toast và InlineAlert đã làm đúng việc này: `block-size: calc(var(--leading-body) * var(--text-body))` (`src/components/notifications/Toast.module.css:90`, `InlineAlert.module.css:38`). Phần thừa phía trên chữ hoa và phía dưới đường baseline (half-leading) có thể cắt bằng `text-box-trim` ([CSS Inline 3 §6.2](https://www.w3.org/TR/css-inline-3/#text-box-trim); hỗ trợ từ Chrome 133, Safari 18.2, Firefox 154 theo [MDN BCD](https://github.com/mdn/browser-compat-data/blob/main/css/properties/text-box-trim.json)). Control một dòng thì không cần trim, vì flex đã căn giữa line box trong box cố định.
- **Box ghép hoặc box theo nội dung:** row, Tag, top bar, Card, Modal, Textarea. Chiều cao được **suy ra** (box bên trong + 2 × role spacing), hoặc dùng `min-block-size` bằng một bậc ramp rồi giãn theo nội dung. Material Web dùng `min-height` cho button "so that label can wrap" ([material-web `button/internal/_shared.scss`](https://github.com/material-components/material-web/blob/main/button/internal/_shared.scss)). Field của Zweihänder đã làm vậy (`InputField.module.css:92,103`).

**Size scale khác spacing scale khác density.** Spacing là khoảng trống *giữa* hoặc *trong* các box (6 role `stack…section`). Size là kích thước *của* box (ramp). Density là cái công tắc đổi con số của cả hai, không phải một thang thứ ba. Spacing research ngày 2026-10-19 đã nêu 67 chỗ dùng `--space-*` làm kích thước và để mở câu hỏi "tách `size.*` khỏi `space.*`?" ([[spacing-system]], câu hỏi mở 1). Box ramp chính là câu trả lời cho câu hỏi đó.

**"Cùng vai trò thì cùng cỡ" là luật về role, không phải về thang.** Một thang chỉ giới hạn tập giá trị. Nó không ngăn ai dùng 24 ở màn này và 32 ở màn kia cho cùng một nút. Điều đó chỉ được ngăn khi bậc được chọn **bên trong component theo vai trò** (như control tier đang làm), còn người dùng component thì không tự chọn. Nghĩa là nút đóng phải là một thứ có tên, không phải "một button nhỏ".

**Hit area tách khỏi box nhìn thấy.** WCAG 2.5.8 (AA) yêu cầu target ≥ 24 × 24 CSS px, trừ khi có ngoại lệ: target nhỏ hơn nhưng vòng tròn đường kính 24px đặt ở tâm không chạm target khác, target nằm trong câu, hoặc target do user agent quyết ([Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)). 2.5.5 (AAA) là 44 × 44 ([Understanding 2.5.5](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)). Zweihänder đã có `--target-coarse` 44px và nới hit area bằng `::before` dưới `pointer: coarse` (49 chỗ, *tự đếm*), không phóng box nhìn thấy.

**`box-sizing` là điều kiện để con số đúng.** Mặc định của CSS là `content-box`: padding và border cộng *thêm* vào `height` ([CSS Sizing 3 §3.3](https://www.w3.org/TR/css-sizing-3/#box-sizing)). Ramp chỉ có nghĩa khi 32 là kích thước border-box.

**Được phép nằm ngoài ramp:** nét 1–2px (hairline, indicator của Tabs, connector của Stepper); dấu nhỏ hơn 12px (chấm radio, chấm Badge, progress bar 4/8/12, chấm Carousel); chiều rộng track của Switch; kích thước vùng (`ColorPicker` 10rem, Slider dọc 12rem, chiều rộng Modal/Popover/Menu); hit area 44px; và icon trong text (Link `0.9em`). Mỗi ngoại lệ ghi một dòng lý do, giống luật spacing hiện tại.

## 2. Các hệ tham chiếu làm gì

| Hệ | Bậc chiều cao (px) | Mặc định | Density | Icon trong control | Nguồn |
|---|---|---|---|---|---|
| **Carbon** | 24, 32, 40, 48, 64, 80 (`size-xs…2xl`) | 40 (`size-md` mô tả "Default component size") | **Tách khỏi size:** density chỉ đổi `padding-inline` (condensed 8 / normal 16), không đổi chiều cao. Size đặt theo ngữ cảnh qua `<Layout size>` với min/max của từng component | `icon-size-01` 16 ("Standard icon size"), `-02` 20 | [layout.tokens.json](https://github.com/carbon-design-system/carbon/blob/main/packages/layout/tokens/layout.tokens.json), [utilities/_layout.scss](https://github.com/carbon-design-system/carbon/blob/main/packages/styles/scss/utilities/_layout.scss), [Button style](https://carbondesignsystem.com/components/button/style/) |
| **Fluent 2** | 24 / 32 / 40 (small/medium/large) | medium 32 | Không có token. Chiều cao của Button **tự ra** từ padding + line-height + border: medium 5 + 20 + 5 + 2 = 32; Input viết cứng `fieldHeights` 24/32/40 trong file style | 20px ở small **và** medium, 24px ở large | [useButtonStyles](https://github.com/microsoft/fluentui/blob/master/packages/react-components/react-button/library/src/components/Button/useButtonStyles.styles.ts), [useInputStyles](https://github.com/microsoft/fluentui/blob/master/packages/react-components/react-input/library/src/components/Input/useInputStyles.styles.ts), [fonts.ts](https://github.com/microsoft/fluentui/blob/master/packages/tokens/src/global/fonts.ts) |
| **Spectrum** | `component-height-50…500` = 20, 24, 32, 40, 48, 56, 64 | 100 = 32 | Theo platform: mỗi token có giá trị desktop và mobile (32 → 40, khoảng ×1.25) | `workflow-icon-size-75` 16 (đã deprecated) | [layout.json](https://github.com/adobe/spectrum-design-data/blob/main/packages/tokens/src/layout.json) |
| **Atlassian** | 32 / 24 | 32 | `spacing="compact"` của Button, "compact for tables" | — | `@atlaskit/button@25.5.0` `button-base.compiled.css` (`height:2rem`, `1.5rem`), [Button examples](https://atlassian.design/components/button/examples) |
| **Material** | MDC button 36, sàn 24; M3 filled button 40 | 36 (M2), 40 (M3) | Thang số âm, mỗi bậc **−4px**: `36 + 4 × (−3) = 24`. Density không lan từ cha sang con | M3 button icon 18; padding-block = (height − max(line-height, icon)) / 2 | [mdc-density README](https://github.com/material-components/material-components-web/blob/master/packages/mdc-density/README.md), [button shared theme](https://github.com/material-components/material-components-web/blob/master/packages/mdc-button/_button-shared-theme.scss), [md-comp-filled-button](https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-comp-filled-button.scss) |
| **Apple HIG** | Theo platform: iOS 44 (sàn 28), macOS 28 (sàn 20), visionOS 60 | iOS 44 pt, macOS 28 pt | Theo platform | — | [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility), [Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons) |
| **Primer** | `control.{xsmall…xlarge}.size` = 24, 28, 32, 40, 48 | medium 32 | Không có mode density. Có `minTarget` fine 16 / coarse 44 và gap `controlStack` lớn hơn khi pointer là coarse | — | [functional/size/size.json5](https://github.com/primer/primitives/blob/main/src/tokens/functional/size/size.json5), [size-coarse.json5](https://github.com/primer/primitives/blob/main/src/tokens/functional/size/size-coarse.json5) |
| **Polaris** | `min-height` theo `height-*`: micro 28/24, medium 32/28, large 36/32 | medium | **Ngược chiều:** dưới breakpoint `md` lớn hơn, từ `md` trở lên nhỏ hơn 4px | — | [Button.module.css](https://github.com/Shopify/polaris/blob/main/polaris-react/src/components/Button/Button.module.css), [size.ts](https://github.com/Shopify/polaris/blob/main/polaris-tokens/src/size.ts) |

Ba điều rút ra:

- **32 là mặc định phổ biến cho desktop chuột** (Fluent, Spectrum desktop, Atlassian, Primer, Polaris desktop). Carbon chọn 40 (field) và 48 (button), Material 36–40, Apple iOS 44. Hệ nào có touch thì hoặc đổi chiều cao theo platform (Spectrum, Polaris, Apple), hoặc nới hit area (Primer, Material: "a button may appear to be 48 x 36 px, but the padding surrounding it comprises the full 48 x 48 px touch target", [mdc-touch-target README](https://github.com/material-components/material-components-web/blob/master/packages/mdc-touch-target/README.md)). Zweihänder theo cách nới hit area.
- **Chiều cao và line box được nối bằng phép tính, không bằng mắt.** Primer lưu cả `size` lẫn `paddingBlock`, và luôn có `paddingBlock = (size − 20) / 2` (2, 4, 6, 10, 14 cho 24…48). Material Web tính `padding-block` từ chiều cao. Fluent đi chiều ngược lại (chiều cao = 2 × padding + line-height + 2 × border). Cách nào cũng là phép tính trên line box 20px.
- **Không hệ nào lint "đúng vai trò".** Thứ duy nhất ép vai trò là API: Carbon giới hạn size theo component (`@include use('size', $default: 'md', $min: 'sm', $max: 'lg')`), Primer có `"rules": "Use size variants consistently across related controls"` trong metadata cho LLM. Đúng như kết luận spacing: lint ép từ vựng, còn vai trò sống trong API và docs.

## 3. Zweihänder hôm nay

### 3.1 Cái đã có

- Control tier `xs/sm/md` = 20/24/32, Compact 20/22/28, gắn với pad, gap, icon, radius (`tokens/semantic.json:305-320`). `Sizing.mdx` ghi rõ ai đọc bậc nào, và story `SameTier` kiểm Button, field, Select ở `sm` cùng cao, cùng icon, cùng góc (`src/foundations/Sizing.stories.tsx:120`).
- Size mặc định là `md` với mọi component có `md`, có máy kiểm bằng `playground:check` (`docs/agents/components.md`, mục 2). Đây đã là "default base 32".
- Icon `xs/sm/md` = 12/14/16, một bậc cho một tier (`tokens/semantic.json:349-354`). Icon là `1em` vuông, lấy cỡ từ `font-size` (`src/lib/icon.tsx:64-70`).
- Nhóm `size` cho các box có density riêng: checkbox, radio dot, switch, progress, avatar, badge (`tokens/semantic.json:326-347`). `--row-height` 48/36 (`:321-324`). `--target-coarse` 44 (`:380`).
- Literal chiều cao gần như đã hết. Trong `src/components` chỉ còn hairline 1–2px, `ColorPicker` 10rem (`ColorPicker.module.css:25`), Slider dọc 12rem (`Slider.module.css:22`), icon file 1.25rem của FileUploader (`FileUploader.module.css:125-126`) và `0.9em` của Link (*tự đếm*).

### 3.2 Chỗ lệch: cùng vai trò, khác cỡ

| Vai trò | Hiện tại | Nguồn |
|---|---|---|
| Nút đóng trong một bề mặt | **20px** (icon 16 + padding 2px) ở Popover, Toast, Alert; **24px** (16 + 2 × 4) ở Modal | `Popover.module.css:63-65`, `Toast.module.css:149-151`, `Alert.module.css:99-102`, `Modal.module.css:102-104` |
| Nút icon ở chrome | Sidebar toggle `--control-md` (32, Compact 28); drawer close của AppShell `--space-8` (32, **không đổi theo density**); nút điều hướng Carousel `--space-8` | `Sidebar.module.css:45-46`, `AppShell.module.css:220-221`, `Carousel.module.css:22-23` |
| Mục điều hướng | Item của Sidebar `--control-md` (32); `navLink` của AppShell `calc(var(--space-8) + var(--space-1))` = **36**, lệch khỏi mọi bậc | `Sidebar.module.css:119`, `AppShell.module.css:146` |
| Spinner | 16/24/32 lấy từ `--space-4/6/8`, không theo density; spinner của Toast `--space-4`; spinner của Button lấy `--button-icon` | `Spinner.module.css:2-22`, `Toast.module.css:96-97`, `Button.module.css:189-190` |
| Marker của Stepper | 32/24 lấy từ `--space-8/6`, không theo density | `Stepper.module.css:2,10` |
| Thumb của Slider | md `--control-xs` (20, đúng tier); sm `--space-4` (16, lấy từ spacing) | `Slider.module.css:4,16` |
| Visual dẫn đầu | Avatar 24/32/40/48 (size token, có density); icon Stats 48 `--space-12`; icon EmptyState 48/40 `--space-12/10`; icon sự kiện của Projects 24 `--space-6`; icon file 20 literal | `Avatar.module.css:19-38`, `Stats.module.css:47-48`, `EmptyState.module.css:2,14`, `Projects.module.css:93-94`, `FileUploader.module.css:125` |
| Row của Table | md `--row-height` (48/36); sm `calc(var(--row-height) - var(--space-inline))` (40/32), ghép size với spacing | `Table.module.css:11,22` |

Tổng cộng có 23 chỗ đọc thẳng `--space-*` ở `inline-size`/`block-size`, cộng 7 biến cục bộ trỏ về `--space-*` (Spinner, Stepper, EmptyState, Slider sm, ChoiceField, Table sm) (*tự đếm*).

### 3.3 Density sinh ra hai luật Compact

Control tier giảm md 32 → 28, sm 24 → 22, xs giữ 20. Nhóm `size` thì lùi một bậc: avatar 24/32/40/48 → 20/24/32/40, choice 20 → 16, badge 16/20 → 14/16 ([[spacing-system]], mục "Checkbox, radio, switch…"). Hệ quả: một box 32px ở Default thành 28 nếu là control, nhưng thành 24 nếu là avatar. Ở Default có 6 chiều cao (16, 20, 24, 32, 40, 48), còn ở Compact có 9 (14, 16, 20, 22, 24, 28, 32, 36, 40) (*tự đếm* từ `tokens/semantic.json`). Compact chính là chỗ "cùng vai trò, khác cỡ" sẽ sinh ra tiếp.

### 3.4 Ba chỗ hở khác

- **Luật 24px tự đặt bị chính density phá.** `Sizing.mdx` viết "Buttons and fields have no `xs`. 20px is below the 24px minimum target of WCAG 2.5.8". Nhưng `sm` ở Compact là 22px, và ba nút đóng là 20px. Về WCAG, cả hai *có thể* vẫn đạt nhờ ngoại lệ spacing (vòng 24px không chạm target khác). Nhưng chúng vi phạm luật của chính Zweihänder, vốn chặt hơn WCAG.
- **Thư viện không mang reset `box-sizing`.** `* { box-sizing: border-box }` chỉ có ở `src/index.css:3-7`, file của app và Storybook. `zweihander/styles.css` không có, và Installation không nhắc tới. Component nào tự đặt `box-sizing` thì không sao (Button, InputField, Tag, Badge… 28 chỗ). Nhưng Checkbox (`Checkbox.module.css:16-18`, 20 + border 1px), Radio (`Radio.module.css:61-63`), Switch (`Switch.module.css:27-31`, padding 2px, thumb = h − 4) và nút Carousel (`Carousel.module.css:22-26`, border 1px) **không có**. Theo CSS Sizing 3, trong một app không có reset, ô checkbox sẽ là 22px, Switch md là 40 × 24, nút Carousel là 34px. Storybook che lỗi này vì đã nạp reset. Đây là **suy luận từ spec, chưa đo** trong một app consumer thật.
- **Stylelint không nhìn thuộc tính kích thước.** Danh sách `declaration-strict-value` có padding, margin, gap, radius, font-size, line-height, nhưng không có `block-size`, `inline-size`, `height`, `width`, `min-*` (`stylelint.config.js:40-67`). Plugin `zweihander/semantic-tokens` chỉ kiểm tên biến có tồn tại không, chứ không kiểm biến có hợp với thuộc tính không (`scripts/stylelint-semantic-tokens.mjs:1-15`).

Tag là một box ghép đúng cách nhưng mong manh. Chiều cao là line-height + 1px padding + 1px border mỗi bên, "which lands on the tier's height" (`Tag.module.css:18-22`): md 20 + 4 = 24, sm 16 + 4 = 20. Ở Compact, line-height body là 18, nên Tag md thành 22, trùng với `sm` Compact. Kết quả đúng là nhờ phép tính tình cờ khớp, không có gì kiểm.

AppShell đang được làm lại ở nhánh khác (`app-shell-design-structure-8219e7`: top bar = `control-md` + 2 × `cluster`, nav theo `control-md`), nên các dòng AppShell ở trên có thể đã được sửa ở đó.

## 4. Đề xuất cho Zweihänder

### 4.1 Token: một ramp, control tier làm alias

Thêm nhóm `box` vào `tokens/semantic.json`, build ra `--box-*`, nhân `--scaling` như control:

| Token | Default | Compact (phương án B, xem §5.1) |
|---|---|---|
| `--box-2xs` | 16 | 16 |
| `--box-xs` | 20 | 20 |
| `--box-sm` | 24 | 22 |
| `--box-md` | **32** | 28 |
| `--box-lg` | 40 | 36 |
| `--box-xl` | 48 | 44 |

- `control.xs/sm/md` trỏ về `{box.xs/sm/md}`, nên component đang đọc `--control-*` không phải đổi.
- Icon giữ `--icon-xs/sm/md` = 12/14/16 và không có mode Compact (đã chốt ở đợt type density: "Icon giữ 16px cạnh chữ 13px").
- `--row-height` ghi lại thành giá trị suy ra: `box-md + 2 × space-inline` = 32 + 16 = 48, Compact 28 + 8 = 36, khớp đúng số đang có. Table sm = `box-md + space-inline` = 40/32. Giữ token (Figma cần), nhưng ghi công thức vào `$description` và để `tokens:check` kiểm.
- Figma: collection Size thêm 6 biến `box/*`, scope `WIDTH_HEIGHT`. Như vậy biến `space/*` có thể bỏ `WIDTH_HEIGHT`, đúng câu hỏi mở 1 và 6 của [[spacing-system]].

**Bỏ qua:** `--control-lg` (chưa component nào có `size="lg"`, thêm khi có CTA lớn hoặc form ưu tiên touch); token `padding-block` kiểu Primer (control một dòng đã có `block-size` cố định + flex căn giữa); token line box (`calc(leading × text)` mới có 2 chỗ dùng); `--icon-lg/xl` (icon minh hoạ đọc `--box-lg/xl`).

### 4.2 Role → bậc (thêm vào `Sizing.mdx`)

| Vai trò | Bậc | Default | Component |
|---|---|---|---|
| Control mặc định: field, button, tab, item của pagination và menu, ô ngày của lịch, **nút icon ở chrome** (Sidebar toggle, drawer close, nút Carousel), **mục điều hướng** | `md` | 32 | đổi drawer close, `navLink`, Carousel sang `--box-md` |
| Control nhỏ trong dòng; **nút đóng trong một bề mặt** (Modal, Popover, Toast, Alert); marker sm của Stepper; spinner md; visual xs | `sm` | 24 | nút đóng lấy cách của Modal: box 24 với margin âm, nên icon vẫn nằm giữa line box 20 |
| Phần nhỏ: Tag sm, thumb của Slider, ô checkbox/radio, Badge md, icon file | `xs` | 20 | |
| Dấu đi kèm glyph: Badge sm, thumb Slider sm, spinner sm, dòng Skeleton | `2xs` | 16 | |
| Visual dẫn đầu: Avatar md, icon EmptyState sm | `lg` | 40 | |
| Visual lớn: Avatar lg, ô icon Stats, icon EmptyState md | `xl` | 48 | |
| Glyph icon | `--icon-{tier}` | 12/14/16 | theo tier của control chứa nó |
| Line box | `--leading-*` × `--text-*` | 16/20/24… | icon cạnh text thì cao một dòng |
| Row | suy ra | 48 / 40 | `box-md + 2 × inline` |

Luật đi kèm, viết đúng một câu mỗi luật:

- Component chọn bậc theo vai trò. Người dùng component chỉ chọn `size`, và `size` trỏ vào bậc.
- Box ghép không nhận số tự do: chiều cao = box bên trong + 2 × một role spacing.
- Box theo nội dung dùng `min-block-size` bằng một bậc, không dùng `block-size`.
- Hit area ≥ 24 với mọi target có thể bấm. Nếu box nhìn thấy nhỏ hơn 24 (Compact `sm` 22, `xs` 20), thì nới hit area bằng `::before` như cách đang làm với `pointer: coarse`.
- Component nào có `block-size`/`inline-size` cố định cùng padding hoặc border thì tự khai báo `box-sizing: border-box`.

### 4.3 Ép buộc

1. **Stylelint: từ vựng theo thuộc tính.** Mở rộng `zweihander/semantic-tokens` (hoặc thêm một rule nhỏ cạnh nó). Ở `block-size`, `inline-size`, `height`, `width`, `min-block-size`, `min-inline-size`, chỉ nhận `--box-*`, `--control-{xs,sm,md}`, `--icon-*`, `--row-height`, nhóm `size`, `--target-coarse`, `--leading-*`/`--text-*` (trong calc), hoặc biến cục bộ. Cấm `--space-*` ở các thuộc tính này. Biến cục bộ được khai báo và dùng trong cùng một module, nên rule kiểm luôn vế phải của khai báo đó (`--spinner-size: var(--space-6)` là lỗi). Literal chỉ nhận 1px/2px, `%`, `ch`, `em`, đơn vị viewport và keyword. Còn lại phải disable kèm lý do. `max-*` không kiểm, vì đó là giới hạn layout. Lần đầu bật sẽ bắt khoảng 30 chỗ (§3.2).
2. **Stylelint: `box-sizing` bắt buộc.** Rule nào có `block-size` hoặc `inline-size` cố định, cùng padding hoặc border khác 0, thì phải có `box-sizing: border-box`. Bắt được 4 file ở §3.4.
3. **`tokens:check`: ramp là luật.** Mọi giá trị trong `control` (trừ pad/gap), `size` và `row`, ở mỗi density, phải thuộc ramp của density đó, hoặc nằm trong danh sách ngoại lệ có lý do (progress bar, chấm, chiều rộng switch). Kiểm thêm `--row-height` = `box-md + 2 × space-inline`.
4. **Story test đo chiều cao thật.** Mở rộng ý của `SameTier`: render story đại diện của mỗi component (danh sách `STORIES` của `src/visual.test.tsx`) ở Default và Compact, lấy mọi element có role tương tác, rồi kiểm chiều cao bounding box ∈ ramp ∪ line box. Đây là tầng duy nhất bắt được chiều cao suy ra (Tag), hack padding và lỗi `box-sizing`. Có thể dùng lại `experiments/spacing-tiers/measure.ts`. Muốn bắt lỗi thiếu reset thì phải chạy một lượt không nạp `src/index.css`. **Unverified:** chưa thử xem Storybook có tắt được reset cho riêng một story không.
5. **Docs.** `Sizing.mdx` thêm mục Box ramp và bảng role ở §4.2. Thêm một dòng vào `docs/agents/components.md` mục 2: "Fixed sizes read `--box-*` or a role token, never `--space-*`."

### 4.4 Thứ tự làm

PR 1: token `box` + alias control + `tokens:check` + docs. Không đổi hình ở Default nếu chọn phương án A của §5.1.
PR 2: chuyển khoảng 30 chỗ đọc `--space-*` sang `--box-*`, thống nhất nút đóng (20 → 24), `navLink` 36 → 32, thêm `box-sizing` cho 4 file, bật rule Stylelint. Có đổi hình ở Default (nút đóng, AppShell), cần label `update screenshots`.
PR 3 (sau khi sếp chọn §5.1): áp luật Compact thống nhất cho nhóm `size`.

## 5. Câu hỏi mở cho sếp

### Đã chốt (2026-10-20)

- **Câu 2, sếp chốt:** 32 là mặc định. Không thêm mức touch hay `--control-lg` trong đợt này.
- **Câu 3, sếp chốt:** luật 24 áp cho hit area, không áp cho box nhìn thấy. Box nhìn thấy được phép xuống 20. Box nào dưới 24 thì nới hit area bằng `::before`, giống cách đang làm với `pointer: coarse`.
- **Câu 4, Claude chọn:** nút đóng dùng `--box-sm` (24, Compact 22) ở mọi bề mặt, kèm margin âm như Modal để chiều cao header không đổi. Lý do: một vai trò, một bậc. Hit area đã được luật câu 3 lo.
- **Câu 5, Claude chọn:** chưa xoá. `--avatar-*` và `--badge-*` thành alias trỏ về `--box-*`, có ghi deprecated trong `$description`, xoá ở major sau. Lý do: đây là CSS var public, xoá ngay là breaking.
- **Câu 6, Claude chọn:** mỗi component tự khai `box-sizing: border-box` và Stylelint bắt buộc điều đó. Thư viện không mang reset toàn cục. Lý do: reset toàn cục đè lên CSS của app consumer.
- **Câu 7, Claude chọn:** giữ `--row-height` (Figma cần biến), giá trị viết theo công thức `box-md + 2 × space-inline` và `tokens:check` kiểm. Tên trùng `density` của Table tách thành việc riêng, không làm trong đợt box sizing.
- **Câu 1, sếp chốt phương án B:** một luật Compact cho cả ramp, 16→16, 20→20, 24→22, 32→28, 40→36, 48→44. Avatar Compact thành 22/28/36/44, ô checkbox giữ 20, Badge giữ 16/20. Quyết định này thay phần size token của quyết định 2026-10-19. Đã so A và B ở px thật: https://claude.ai/artifact/NL638XDtVTp6PiT1t244kA

### Câu hỏi gốc

1. **Một luật Compact hay hai?** Phương án A: giữ hai luật như hiện tại, ramp chỉ áp cho Default, còn Compact là bảng ngoại lệ theo nhóm. Ít đổi, nhưng "cùng role thì cùng cỡ" chỉ đúng ở Default. Phương án B (tôi đề xuất): một bảng map cho cả ramp (16→16, 20→20, 24→22, 32→28, 40→36, 48→44). Avatar Compact thành 22/28/36/44 thay vì 20/24/32/40, ô checkbox giữ 20 thay vì 16, Badge 16/20. Đổi ngược một phần quyết định 2026-10-19. Phương án C: mọi thứ lùi một bậc như Avatar, nhưng khi đó md Compact = 24 trùng sm, nghĩa là mất một size. Đây chính là lý do control đã không chọn cách này.
2. **32 có đúng là mặc định không?** Đúng cho app enterprise dùng chuột (Fluent, Primer, Atlassian, Spectrum desktop). Nhưng Carbon chọn 40/48, Apple iOS 44, Spectrum mobile 40, Polaris mobile 32 và desktop 28. Zweihänder chỉ nới hit area trên touch, box vẫn 32 (28 ở Compact). Nếu sản phẩm có form nhập liệu trên tablet thì cần một mức "touch" (như Spectrum mobile) hoặc `--control-lg`. Chưa có yêu cầu nên tôi chưa đề xuất.
3. **Luật "≥ 24" là gì: box nhìn thấy hay hit area?** Hiện viết theo box nhìn thấy, nhưng Compact `sm` 22 và ba nút đóng 20 đã phá luật đó. Đề xuất: luật áp cho hit area (≥ 24 luôn, 44 khi `pointer: coarse`), box nhìn thấy được phép tới 20. WCAG cho phép điều này qua ngoại lệ spacing, nhưng ngoại lệ đó phụ thuộc bố cục xung quanh, nên nới hit area là cách chắc chắn hơn.
4. **Nút đóng 24 hay 20?** 24 (cách của Modal) khớp luật 24 và cùng cỡ với `sm`. 20 vừa khít line box nên header gọn hơn. Đề xuất 24 với margin âm, để chiều cao header không đổi.
5. **Có xoá token `avatar-*` / `badge-*` sau khi có `--box-*` không?** Nếu chọn phương án B thì chúng trùng giá trị với ramp, nên có thể deprecate theo hai bước. Nhưng đó là CSS var public, nghĩa là breaking.
6. **Reset `box-sizing`:** mỗi component tự khai báo (đề xuất, thư viện không áp reset toàn cục lên app người dùng), hay `styles.css` mang một reset có scope?
7. **Table:** row giữ token riêng hay chỉ là công thức? Và prop `density` của Table trùng tên với density của Theme (đã ghi ở PR #138): giờ lại thêm một nguồn chiều cao row thứ hai.
