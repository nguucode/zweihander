---
description: Chuẩn hoá hệ spacing của Zweihänder theo kiểu tier của Atlassian (small/medium/large). So Atlassian, Primer, Carbon, Polaris, Spectrum về thang, tier dùng, cách ép buộc; audit spacing hiện tại có file:line và số đếm; đề xuất token, docs, lint, Figma scope.
type: research
status: done
updated: 2026-10-19
access: internal
tags: [zweihander, research, tokens, spacing, design-system, stylelint, figma]
---

# Hệ spacing của Zweihänder: tier dùng, thang và cách ép buộc

Phạm vi: Atlassian (docs atlassian.design và mã đã build trong npm `@atlaskit/tokens@20.6.1`, `@atlaskit/primitives@22.6.0`, `@atlaskit/eslint-plugin-design-system@16.13.9`), GitHub Primer (`primer/primitives`, `primer/stylelint-config`), IBM Carbon, Shopify Polaris (`polaris-tokens`), Adobe Spectrum (`adobe/spectrum-design-data`) và tài liệu Figma về variable scope. Đọc ngày 2026-10-19, file token lấy thẳng từ `main` qua raw.githubusercontent.com hoặc từ tarball npm. Dữ kiện Zweihänder lấy từ worktree `zweihander-spacing-system-a47871` (HEAD `bdedfec`). Số có ghi *tự đếm* là do script quét 63 file CSS trong `src/` và `.storybook/` (bỏ `src/tokens.css`, đã lọc `._*`). Material 3 bỏ qua: không có thang spacing dạng token để so (xem [[unified-spec-system]]).

## Kết luận

**Lấy ba tier của Atlassian làm luật viết trong docs, không làm luật lint. Lint chỉ ép từ vựng.** Không hệ nào trong năm hệ ép "tier nào dùng ở đâu" bằng máy. Atlassian viết tier thành văn xuôi, còn ESLint của họ chỉ chặn literal và gợi ý token gần nhất. Danh sách tier của chính Atlassian cũng chồng nhau ("vertical spacing in a card" có mặt ở cả small lẫn medium), nên tier là heuristic để người chọn, không phải điều kiện máy quyết được.

Zweihänder đã có sẵn lớp mà Atlassian chỉ viết bằng chữ. Phần lớn tier "small" của Atlassian (padding trong input, icon–text gap, padding component nhỏ) ở đây đã là token của control tier (`--control-{xs,sm,md}-pad/-pad-spacious/-gap`). Vậy việc cần làm là năm việc sau, theo thứ tự:

1. **Lấp hai lỗ trong thang:** thêm `--space-0-5` (2px) và `--space-5` (20px). 17 trên 20 chỗ component đang thoát token là ±2px (*tự đếm*), còn 20px đang được ghép bằng `calc(var(--space-4) + var(--space-1))`. Chưa thêm 64/80, vì chưa component nào cần.
2. **Viết lại `Spacing.mdx`** (đang sai, xem §1.4) quanh ba tier, đặt theo tên của Zweihänder, cùng một luật ưu tiên: *trong control thì dùng control tier, tier chỉ áp cho khoảng cách giữa các thứ và cho container*.
3. **Siết Stylelint ở chỗ đang hở:** thuộc tính spacing chỉ nhận `--space-*`, `--control-*-pad*`, `--control-*-gap` hoặc biến cục bộ của component. Hiện giờ mọi `var()` đều lọt qua. Thêm cả `inset`, `top/right/bottom/left` và `translate` vào danh sách.
4. **Gắn Figma scope vào export DTCG** theo cách của Primer: `space.*` và `control.*-pad/-gap` chỉ hiện ở Gap/Padding, còn `control.{xs,sm,md}` chỉ hiện ở Width/Height. Làm vậy thì Figma tự hạn chế picker, không cần ai nhớ.
5. **Quyết riêng chuyện sizing:** 67 chỗ đang dùng `--space-*` làm kích thước (*tự đếm*). Nếu bước 4 bỏ WIDTH_HEIGHT khỏi biến spacing thì các chỗ đó sẽ gãy trong Figma. Đây là câu hỏi mở số 1, không phải việc làm ngay.

Không thêm token gap/padding ngữ nghĩa (`--gap-sm`, `--stack-gap-normal`…) ở đợt này. Atlassian vừa thêm `space.gap.*` nhưng còn ở trạng thái `experimental`. Spectrum đang deprecate 149 token layout để chuyển sang token ngữ nghĩa mới. Cả hai còn đang đổi. Control tier của Zweihänder đã giữ vai trò ngữ nghĩa cho phần cần nó nhất.

## 1. Zweihänder hôm nay

### 1.1 Token

`tokens/semantic.json:285-297` định nghĩa `space` gồm 10 bậc, viết bằng rem, rồi build thành `--space-{n}: calc(<rem> * var(--scaling))` (`scripts/build-tokens.mjs:346-347`, ra `src/tokens.css:801-810`). Tên theo kiểu Tailwind (n × 4px), đúng quy ước của vault: không mượn tên số của hệ khác (`_system/context/design-system.md`, mục "Chỗ bốn nguồn KHÔNG giống nhau").

| Token | px | Bậc Atlassian tương ứng |
|---|---|---|
| — | 0 (keyword `0` được lint cho qua) | `space.0` |
| **thiếu** | 2 | `space.025` |
| `--space-1` | 4 | `space.050` |
| `--space-1-5` | 6 | `space.075` |
| `--space-2` | 8 | `space.100` |
| `--space-2-5` | 10 | **không có** (Atlassian map 10px về `space.150`) |
| `--space-3` | 12 | `space.150` |
| `--space-4` | 16 | `space.200` |
| **thiếu** | 20 | `space.250` |
| `--space-6` | 24 | `space.300` |
| `--space-8` | 32 | `space.400` |
| `--space-10` | 40 | `space.500` |
| `--space-12` | 48 | `space.600` |
| **thiếu** | 64 / 80 | `space.800` / `space.1000` |

Control tier nằm ở `tokens/semantic.json:299-314`: chiều cao `xs/sm/md` = 20/24/32, `pad` = 6/8/10, `pad-spacious` = 6/8/12, `gap` = 4/6/8. Đây chính là phần "small tier" của Atlassian, nhưng đã ràng theo size, thứ mà Atlassian không làm. Mọi token space và control đều nhân `--scaling` (`src/tokens.css:18`), nên lưới 4px chỉ đúng ở scaling 100%.

Export cho Figma (`scripts/build-tokens.mjs:616-619`, ra `tokens/design-tokens.json:2151`) đưa `space` và `control` thành hai group riêng, nhưng **không mang thông tin scope nào**. Theo build log trong vault, scope đã được đặt tay cho biến màu. Scope của biến Spacing thì không có ghi chép (**unverified**).

### 1.2 Dùng ở đâu, bao nhiêu (*tự đếm*)

Tổng số lần đọc token: `--space-2` 104, `--space-4` 88, `--space-1` 76, `--space-3` 49, `--space-6` 45, `--space-8` 27, `--space-1-5` 15, `--space-12` 10, `--space-10` 9, `--space-2-5` 2. Token control đọc ở thuộc tính spacing: `-pad*` 15 lần, `-gap` 11 lần.

Chỉ tính các thuộc tính spacing (padding, margin, gap, inset), có 318 lần đọc `--space-*`. Chia theo tier của Atlassian:

| Tier (Atlassian) | Token Zweihänder | gap | padding | margin | inset | Tổng |
|---|---|---|---|---|---|---|
| Small 0–8 | `1`, `1-5`, `2` | 82 | 50 | 27 | 6 | **165** |
| Medium 12–24 | `2-5`, `3`, `4`, `6` | 53 | 61 | 13 | 11 | **138** |
| Large 32–80 | `8`, `10`, `12` | 2 | 11 | 2 | 0 | **15** |

Large gần như vắng mặt: đây là kit component, còn layout trang chỉ có ở `patterns/` (AppShell, FormLayouts) và EmptyState. Tier hữu ích nhất cần viết rõ là ranh giới small/medium.

**Space dùng làm size:** 67 lần `--space-*` nằm ở `inline-size`/`block-size`/`min-*`/`max-*`/`grid-template-columns`/`font-size`/`translate`, cộng 40 lần qua custom property. Ví dụ: kích thước Avatar (`src/components/atomic-elements/Avatar.module.css:25-38`), hàng Table `--table-row: var(--space-12)` và `var(--space-10)` (`src/components/data-display/Table.module.css:11,22`), chấm Badge `--space-1-5` (`src/components/atomic-elements/Badge.module.css:51-52`), icon EmptyState (`src/components/states/EmptyState.module.css:2,14`), cỡ chữ Stats `calc(var(--space-4) + var(--space-1))` (`src/components/patterns/application-ui/Stats.module.css:52`). Build log đã ghi chuyện này ("Icon minh hoạ … vẫn đọc token spacing, không thuộc tier").

**Size prop chạm vào spacing:** Card `xs/sm/md/lg` đặt padding 12/16/24/32 và gap 8/12/16/24 (`src/components/data-display/Card.module.css:24-39`), tức là trải qua cả ba tier. Table `size="sm"` đổi chiều cao hàng 48→40 (`Table.module.css:11,22`). Control tier lo phần còn lại.

### 1.3 Chỗ thoát token

Stylelint đang ép token cho `padding*`, `margin*`, `gap`, `row-gap`, `column-gap` qua `stylelint-declaration-strict-value` ở mức error (`stylelint.config.js:40-87`). Muốn ngoại lệ thì phải có comment lý do (`reportDescriptionlessDisables`). `src/App.module.css` (landing) bị loại khỏi lint (`stylelint.config.js:36`), và chiếm 98 trên 128 literal spacing.

Trong component và pattern có 20 literal, mỗi cái đi kèm disable có lý do. **17 cái là ±2px** (`2px` hoặc `0.125rem`), lý do ghi đúng một câu: "below the spacing scale on purpose". Ví dụ: `InputField.module.css:32`, `FileUploader.module.css:23`, `ChoiceField.module.css:27` (label → dấu sao), `NumberInput.module.css:5`, `DatePicker.module.css:45`, `Rating.module.css:33`, `Switch.module.css:31`, `Tabs.module.css:138`, `Alert.module.css:102`, `Toast.module.css:99,151`, `Popover.module.css:66`, `Modal.module.css:107` (−2px), `Badge.module.css:34`, `ColorPicker.module.css:172`, `Stats.module.css:89,92`. Ba cái còn lại là hairline 1px của Tag (`Tag.module.css:27,37`) và `0.2em` của Link (`Link.module.css:65`). `_context.md` trong vault đã ghi nhận ("11 cái là khoảng 2px dưới thang spacing, cân nhắc token `space-0-5`"). Con số giờ là 17.

Workaround do thiếu bậc: 20px ghép bằng `calc(var(--space-4) + var(--space-1))` ở `DescriptionList.module.css:3,92` và `Stats.module.css:52`. 2px ghép bằng `calc(var(--space-1) / 2)` ở `Calendar.module.css:5`. Build log ghi Modal chọn 16px vì "không có `--space-5`". Margin âm viết `calc(var(--space-n) * -1)` 7 lần (Tag, Menu, Alert, Toast, Modal, Popover, Table).

Ba lỗ trong lint:

- Bất kỳ giá trị nào có `var()` đều qua, kể cả `padding: var(--control-md)` (một chiều cao) hay `gap: var(--text-body)`. Comment `ponytail:` ở `stylelint.config.js:69` đã nhận điều này.
- `inset*`, `top/right/bottom/left`, `translate` không bị kiểm. Có 18 literal ở đó, phần lớn ở landing và playground.
- Story `.tsx` có 29 literal spacing trong inline style. oxlint không kiểm CSS-in-JS.

### 1.4 Docs

`src/foundations/Spacing.mdx:8-25` vẫn mô tả hệ `--spacing` kiểu Tailwind ("there is no list of allowed values… the scale cannot enforce itself"). Cả hai câu đều sai với code hiện tại, và chính file đó đã tự đánh dấu `STALE`. Phần control tier (`Spacing.mdx:43-59`) và `Sizing.mdx` thì đúng. `docs/agents/components.md (khi đó là .claude/skills/project-flow/COMPONENTS.md:100)` chỉ ghi "Tokens only… no hard-coded values for… spacing" và không có hướng dẫn chọn bậc.

## 2. Atlassian

**Thang.** Gốc 8px = `space.100`. Thang gồm `space.0` 0, `025` 2, `050` 4, `075` 6, `100` 8, `150` 12, `200` 16, `250` 20, `300` 24, `400` 32, `500` 40, `600` 48, `800` 64, `1000` 80, cộng `space.negative.025…400` (−2 … −32) ([atlassian.design/foundations/spacing](https://atlassian.design/foundations/spacing)). Mã đã build khớp từng giá trị (`@atlaskit/tokens@20.6.1`, `dist/esm/artifacts/tokens-raw/atlassian-spacing.js`, [npm](https://www.npmjs.com/package/@atlaskit/tokens)).

**Tier.** Cùng trang docs đó định nghĩa ba tier ([foundations/spacing](https://atlassian.design/foundations/spacing)):
- *Small* (`space.0`–`space.100`): gap icon nhỏ–chữ, padding component nhỏ (badge, icon button, ô table), gap giữa phần tử lặp (button group), padding trong input, khoảng dọc trong card (title–description, description–actions), gap trigger–popup.
- *Medium* (`space.150`–`space.300`): padding component lớn (button), avatar hay icon lớn–nội dung (section message), khoảng dọc giữa các phần tử trong card, item trong component thưa.
- *Large* (`space.400`–`space.1000`): khoảng cách nội dung trên trang (đỉnh trang–header), căn trong nội dung lớn (Flag).

Tier được ghi ngay vào token: `description` của mỗi bậc là câu tier, ví dụ `space.150`: "Use for larger and less dense pieces of UI" (`atlassian-spacing.js`, như trên). Mỗi token còn mang `suggest`, tức danh sách px lệch thang mà tooling map về nó. `space.150` nhận 10, 11, 13, 14px, nghĩa là **10px của Zweihänder ở bên Atlassian sẽ bị đẩy về 12**.

**Ép buộc.**
- `use-tokens-space` báo lỗi khi literal đứng ở chỗ phải dùng space token, và autofix nếu giá trị map 1:1. Giá trị không map được thì chỉ báo, không sửa ([use-tokens-space](https://atlassian.design/components/eslint-plugin-design-system/use-tokens-space/usage)). Trong package, rule này có `recommended: false` (`dist/cjs/rules/use-tokens-space/index.js`, [npm](https://www.npmjs.com/package/@atlaskit/eslint-plugin-design-system)).
- `ensure-design-token-usage` lint ba domain color/spacing/shape, nhưng **mặc định chỉ bật color** ([ensure-design-token-usage](https://atlassian.design/components/eslint-plugin-design-system/ensure-design-token-usage/usage)). Danh sách thuộc tính spacing gồm padding*, margin*, gap/rowGap/columnGap, top/left/right/bottom và `outline-offset` (`dist/cjs/rules/ensure-design-token-usage/is-spacing-property.js`).
- `no-margin` (cũng `recommended: false`) có message: margin "breaks the component model. Prefer a primitive spacing component or … `gap`" (`dist/cjs/rules/no-margin/index.js`).
- **Không rule nào kiểm tier.** Docs của `ensure-design-token-usage` không gắn token với ngữ cảnh. Tôi đọc hết danh sách rule trong `dist/cjs/rules/` và không thấy rule nào làm việc này.

**Primitive giới hạn giá trị.** `Box.padding*` có kiểu `PaddingToken`, tức chỉ nhận space dương (`@atlaskit/primitives@22.6.0`, `dist/types/compiled/components/box.d.ts:39,48`). `Stack.space` và `Inline.space` nhận space dương hoặc `space.gap.*` ([Stack code](https://atlassian.design/components/primitives/stack/code), `dist/types/compiled/components/stack.d.ts:32`). `Bleed` chỉ nhận 5 bậc `025/050/100/150/200` (`dist/types/components/bleed.d.ts:26`). Giới hạn này đến từ kiểu TypeScript, không phải lint.

**Mới nhất: token gap ngữ nghĩa, còn experimental.** `@atlaskit/tokens@20.6.0` thêm `space.gap.xxsmall…xxlarge` = 2/4/6/8/12/16/24, trạng thái `experimental`, "Limit these tokens to `gap`, `rowGap`, and `columnGap`" (CHANGELOG trong package). Mô tả của từng token có câu: "Do not use for component insets or dimensions" (`atlassian-spacing.js`). Primitives ghi "Keep padding and margin restricted to numeric spacing tokens" (`@atlaskit/primitives` CHANGELOG, 22.6.0). Đây là lần đầu Atlassian đặt luật "token này chỉ cho thuộc tính này" vào schema. Docs public chưa nhắc tới.

## 3. Các hệ khác

**GitHub Primer: token ngữ nghĩa theo pattern, scope Figma ngay trong nguồn.** Thang base `base.size.*` = 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 64, 80, 96, 112, 128, mỗi bậc có scope Figma `['size', 'gap']` ([base/size/size.json5](https://github.com/primer/primitives/blob/main/src/tokens/base/size/size.json5)). Lớp functional có:
- `stack.padding` và `stack.gap` với `condensed/normal/spacious` = 8/16/24. Luật đi kèm: "Use condensed for dense lists, normal for standard layouts, spacious for prominent sections".
- `controlStack.{small,medium,large}.gap` cho nhóm control: "Match gap size to control size".
- `control.*` (height, padding, gap) theo size.

Token chiều cao mang scope `size`, token padding/gap mang scope `gap` ([functional/size/size.json5](https://github.com/primer/primitives/blob/main/src/tokens/functional/size/size.json5)). Có biến thể con trỏ thô: `controlStack` gap lớn hơn khi pointer là coarse ([size-coarse.json5](https://github.com/primer/primitives/blob/main/src/tokens/functional/size/size-coarse.json5)). Scope `size` map sang `WIDTH_HEIGHT`, `gap` map sang `GAP` ([figmaAttributes.ts](https://github.com/primer/primitives/blob/main/src/transformers/figmaAttributes.ts)). Ép buộc bằng `primer/spacing`: kiểm padding, margin, top/right/bottom/left, chấp nhận biến size của Primer, và gợi ý biến khi literal lệch ±1px. Rule không kiểm bậc nào dùng ở đâu ([plugins/spacing.js](https://github.com/primer/stylelint-config/blob/main/plugins/spacing.js)).

**IBM Carbon: từng tách spacing và layout, rồi gộp lại.** Thang v11 `$spacing-01…13` = 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160 (không có 6 và 20). Docs nói thang dùng được "inside of components for building and between components for layout spacing" và không chia tier ([spacing overview](https://carbondesignsystem.com/elements/spacing/overview/)). Thang `$layout-01…07` của v10 bị **xoá trong v11**, mỗi bậc đổi sang một bậc `$spacing-*` ([migration v11.md](https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md)). Package layout vẫn export `fluidSpacing01…04` (`packages/layout/src/index.ts`, cùng repo), nhưng trang docs hiện không nhắc tới (**unverified** là còn được khuyến nghị hay không). Ép buộc bằng `carbon/layout-use` (stylelint), mặc định kiểm margin và padding, mở rộng được sang gap ([stylelint-plugin-carbon-tokens](https://github.com/carbon-design-system/stylelint-plugin-carbon-tokens)). Bài học: một hệ lớn đã thử hai thang tách theo mục đích, rồi bỏ.

**Shopify Polaris: thang dày, vài alias ngữ nghĩa.** `size.ts` có 1, 2, 4, 6, 8, 11, 12, 13, 14, 16, 18, 20, 22, 24, 28, 30, 32, 36, 40, 48, 64, 80…128 ([size.ts](https://github.com/Shopify/polaris/blob/main/polaris-tokens/src/size.ts)). `space-*` chỉ lấy 0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80…128. Ngoài ra có bốn alias: `space-button-group-gap` (8), `space-card-gap` (16), `space-card-padding` (16), `space-table-cell-padding` (6) ([space.ts](https://github.com/Shopify/polaris/blob/main/polaris-tokens/src/themes/base/space.ts)). Chú ý tên số của Polaris lệch Atlassian (`space-100` = 4px), đúng như vault đã cảnh báo. Enforcement bằng `stylelint-polaris`, đã có trong [[unified-spec-system]].

**Adobe Spectrum: token quan hệ theo component, đang dời sang token ngữ nghĩa.** Thang `spacing-25…1000` = 1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96. Bên cạnh đó là cả trăm token quan hệ như `text-to-visual-*`, `component-edge-to-text-*`, `component-to-menu-*`, có giá trị riêng cho desktop và mobile. 149 token trong `layout.json` đã `deprecated`, phần lớn trỏ sang `base-gap-*` (4–10px) và `base-padding-{horizontal,vertical}-*`. Các giá trị mới lệch lưới (7, 13, 15, 19px), ví dụ: "Use semantic token base-padding-horizontal-medium instead. Updated to follow Spectrum Future Foundations spacing formula" ([layout.json](https://github.com/adobe/spectrum-design-data/blob/main/packages/tokens/src/layout.json)). Công thức đó tôi không tìm được nguồn công khai (**unverified**). Ý nghĩa với Zweihänder: padding tính theo size của control, giống control tier, và một hệ cỡ Adobe vẫn chưa ổn định lớp này.

## 4. Bảng so sánh

| | Atlassian | Primer | Carbon | Polaris | Spectrum | **Zweihänder** |
|---|---|---|---|---|---|---|
| Thang (px) | 0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80 | 2…128 (19 bậc) | 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160 | 0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 32…128 | 1, 2, 4, 6, 8, 12…96 | 4, 6, 8, **10**, 12, 16, 24, 32, 40, 48 (thiếu 2, 20, 64, 80) |
| Tier dùng | 3 tier, viết trong docs và `description` token | Theo pattern: stack condensed/normal/spacious, controlStack theo size | Không | Không (4 alias) | Token quan hệ theo component, đang chuyển sang base-gap/padding | Không. Control tier lo phần bên trong control |
| Token ngữ nghĩa cho spacing | `space.gap.*` (experimental, chỉ gap) | `stack.*`, `controlStack.*`, `control.*` | Không | 4 alias | `base-gap-*`, `base-padding-*` | `control-*-pad/-pad-spacious/-gap` |
| Ép literal | ESLint `use-tokens-space` / `ensure-design-token-usage` (spacing không bật mặc định) | `primer/spacing` (stylelint) | `carbon/layout-use` (stylelint) | `stylelint-polaris` | — (không thấy) | Stylelint strict-value, mức error |
| Ép tier hoặc vị trí | Không. Chỉ có `space.gap.*` giới hạn theo thuộc tính | Không | Không | Không | Không | Không |
| Primitive giới hạn giá trị | Box/Stack/Inline/Bleed theo kiểu TS | Stack (React) | Không | Box/InlineStack/BlockStack (**unverified**, chưa đọc lần này) | — | Không có primitive layout |
| Scope Figma trong nguồn | **unverified** | Có (`size`/`gap` → `WIDTH_HEIGHT`/`GAP`) | **unverified** | **unverified** | **unverified** | Không |

## 5. Phương án cho Zweihänder

### 5.1 Token: lấp lỗ, không đổi tên

| Thay đổi | Lý do | Chi phí |
|---|---|---|
| `--space-0-5` = 0.125rem | 17 disable ±2px, `calc(var(--space-1) / 2)` ở Calendar. Atlassian, Primer, Carbon, Polaris, Spectrum đều có 2px | Thấp. Xoá 17 comment, bổ sung một dòng trong `semantic.json` |
| `--space-5` = 1.25rem | 3 chỗ `calc(4 + 1)`, Modal phải lùi về 16 vì thiếu bậc. Mọi hệ trong bảng trừ Carbon có 20 | Thấp |
| `--space-2-5` (10px) | Lệch thang mọi hệ. Chỉ có 2 lần đọc trực tiếp (`Alert.module.css:6`, `PreviewWindow.module.css:8`) cộng với `control-md-pad`, vốn là chỗ nó nên ở | Chọn một: (a) giữ, ghi "chỉ dùng qua control-md-pad", (b) gỡ khỏi `space`, cho `control-md-pad` mang literal riêng. Xem câu hỏi mở |
| `--space-16` / `--space-20` (64/80) | Large tier của Atlassian lên tới 80. Kit hiện chỉ có `calc(var(--space-8) * 2)` cho một min-height ở AppShell, và đó là size chứ không phải spacing | Hoãn. Thêm khi một pattern layout trang cần |
| Token âm | 7 chỗ `calc(var(--space-n) * -1)` | Không làm. calc đọc được, và Atlassian cũng khuyên dùng Bleed trước token âm |

Giữ cách đặt tên theo Tailwind. Đổi sang tên của Atlassian (`space.100` = 8) thì phải đổi tên khắp nơi, và vi phạm luật của vault mà không đem lại lợi ích nào.

### 5.2 Docs: tier viết theo tên Zweihänder

Viết lại `Spacing.mdx` thành ba bảng và một luật ưu tiên:

- **Bên trong control: không chọn bậc.** Dùng `--control-{tier}-pad`, `-pad-spacious`, `-gap`. Phần này phủ những gì Atlassian xếp vào small: padding trong input, icon–text, padding button và icon button.
- **Small, `0-5` → `2` (2–8px):** label → field → helper (`1-5`), giữa các phần tử lặp (button group, tag list), title → description trong card, trigger → popup, padding ô dày (badge, ô table compact).
- **Medium, `3` → `6` (12–24px):** padding container (Card, Popover, Modal), avatar hoặc icon lớn → nội dung, khoảng giữa các khối trong card, item trong list thưa.
- **Large, `8` → `12` (32–48px, 64/80 khi có):** giữa các section của trang, padding vùng nội dung AppShell, khoảng trống của EmptyState.

Mỗi dòng dẫn một component thật làm ví dụ (Card `md` = 24/16, Popover 16, InputField `1-5`), để bảng không lệch khỏi code. Viết thêm một câu cho size prop: một component có `size` thì size chọn bậc, như Card `xs→lg` đi qua cả ba tier, và người dùng không tự chọn.

### 5.3 Lint: ép từ vựng, không ép tier

Những gì lint được với hạ tầng có sẵn (`scripts/stylelint-semantic-tokens.mjs` đã là plugin tự viết):

1. **Giới hạn họ biến theo thuộc tính.** padding/margin/gap/inset/top/left/right/bottom chỉ nhận `--space-*`, `--control-*-pad*`, `--control-*-gap`, hoặc một biến cục bộ được khai báo trong `src/`. Cái này đóng lỗ "var() nào cũng qua". Atlassian vừa làm đúng việc này cho `space.gap.*` ở tầng schema. Chi phí là khoảng 30–40 dòng trong plugin hiện có, hoặc một option map theo thuộc tính. Biến cục bộ như `--table-row` hay `--choice-control` thì lần ngược khai báo của nó là tốn công, nên chấp nhận cho qua và ghi `ponytail:`.
2. **Thêm `inset*`, `top/right/bottom/left`, `translate`** vào danh sách của `declaration-strict-value`. Danh sách thuộc tính của Atlassian có cả top/left/right/bottom.
3. **Không lint tier.** Tier phụ thuộc vào ngữ cảnh mà selector không cho thấy (một `padding: var(--space-8)` là Card `lg` hay một ô bị phình?). Không hệ nào làm, và chính Atlassian xếp "khoảng dọc trong card" vào hai tier. Nếu vẫn muốn một tín hiệu thì có một rule mềm mức `warning`: `src/components/{atomic-elements,buttons,controls,inputs}/**` không được dùng `--space-8+` trong padding/gap. Hiện chỉ Avatar dùng, và dùng làm size. Rule này rẻ nhưng chỉ bắt được trường hợp hiển nhiên.

Margin: Atlassian có `no-margin` nhưng không bật mặc định. Zweihänder có 42 margin (*tự đếm*), phần lớn là `--space-1`. Không đáng làm thành rule. Ghi trong docs "ưu tiên gap ở parent".

### 5.4 Figma: scope thay cho trí nhớ

API cho biến FLOAT có `GAP`, `WIDTH_HEIGHT`, `CORNER_RADIUS`… và `ALL_SCOPES` không kết hợp được với scope khác ([VariableScope](https://developers.figma.com/docs/plugins/api/VariableScope/)). UI tách "Auto layout → Gap / Padding" và "Width and height" ([Help Center](https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables-and-collections)). API chỉ có một `GAP`, nên việc `GAP` có phủ padding hay không là suy luận: Primer gắn `stack.padding.*` với scope `gap` (nguồn ở §3). **Unverified** cho tới khi thử trên file thật. Scope chỉ lọc picker, không chặn bind qua API ([REST variables types](https://developers.figma.com/docs/rest-api/variables-types/)).

Đề xuất: thêm `$extensions["biz.ontheshore.figma"].scopes` vào `semantic.json`, theo mẫu `org.primer.figma`, rồi để `build-tokens.mjs` chép sang `design-tokens.json`:

- `space.*` → `["GAP"]`
- `control.{xs,sm,md}` → `["WIDTH_HEIGHT"]`
- `control.*-pad*`, `control.*-gap` → `["GAP"]`
- `icon.*` → `["WIDTH_HEIGHT"]`

Như vậy designer chỉ thấy biến spacing khi chỉnh padding/gap. Chi phí ẩn: component Figma nào đang bind `space` vào width/height (avatar, icon minh hoạ) sẽ mất biến đó trong picker. Đây là chỗ nối sang câu hỏi sizing.

### 5.5 Sizing tách khỏi spacing (để quyết, chưa làm)

67 lần đọc trực tiếp, cộng một phần trong 40 custom property, đang dùng space làm kích thước. Mô tả của `space.gap.*` bên Atlassian ghi thẳng "Do not use for … dimensions". Tách ra một nhóm `size.*` (avatar 32/40/48, icon minh hoạ, hàng table) thì scope Figma sạch và rule ở §5.3.1 áp được cho cả width/height. Chi phí: khoảng 15 file CSS, các bảng MDX liên quan (Avatar, Table, EmptyState), và biến Figma. Lợi ích chỉ hiện ra khi đã làm §5.4. Nếu không làm §5.4 thì đây là việc dọn dẹp thuần túy.

## Câu hỏi mở cho sếp

1. **Tách `size.*` khỏi `space.*`?** Nếu có thì đó là điều kiện để gắn scope Figma `GAP` cho riêng space. Nếu không thì space giữ `["GAP", "WIDTH_HEIGHT"]` như Primer base.
2. **`--space-2-5` (10px): giữ làm bậc chung, hay rút về chỉ là giá trị của `control-md-pad`?** Atlassian đẩy 10px về 12.
3. **64/80 thêm ngay cho đủ "large tier" giống Atlassian, hay đợi một pattern layout cần?** Đề xuất của tôi là đợi.
4. **Có muốn rule mềm (warning) chặn bậc large trong component atom không,** hay tier chỉ sống trong docs và review?
5. **Margin:** viết "ưu tiên gap" thành luật docs, hay theo Atlassian đi tới `no-margin`?
6. **Figma:** scope có đi theo code (thêm `$extensions` vào token JSON) không, và đợt sync Figma đang treo có gộp luôn việc này?
7. **Story `.tsx`** (29 literal inline): có cần ép không? oxlint không kiểm được, nên phải viết rule riêng hoặc chấp nhận.

## Thử nghiệm trên hai màn (2026-10-19)

Dựng 2 màn bằng component thật của Zweihänder (Revenue and cost dashboard, Products), layout trang chọn spacing theo tier, overlay đo spacing từ DOM đã render. Code: `experiments/spacing-tiers/` (chưa commit). Artifact: https://claude.ai/artifact/XtoWasLNvMVqVrEgzNpXth

- Tier thu hẹp lựa chọn nhưng không quyết định: "card trong một hàng" ra 16px (`Stats`, summary row) và 24px (chart row), đều Medium. Cần thêm bảng role ngắn (card trong hàng 16, section trang 32, title→description 4).
- `Table` pad cell 16px (Medium), là giá trị dùng nhiều nhất (>200 lần); Atlassian xếp table cell vào Small. Quyết định density, không phải token.
- `Alert` dùng `--space-2-5` (10px) cả 4 cạnh, ngoài control: vi phạm luật "10px chỉ cho control".
- 1px: `Tag` cố ý; `Button` chỉ set `padding-inline` nên padding-block 1px mặc định của trình duyệt lọt qua. Padding dọc trong control cao cố định nên loại khỏi luật tier.
- 2px dùng 31 lần trên 2 màn (name→SKU, chip change của `Stats`, Badge): xác nhận nên thêm `--space-0-5`.
- Không màn nào cần 20, 40, 48, 64, 80px: giữ đề xuất chưa thêm 64/80.
- PageHeading padding-bottom 24 + gap trang 32 = heading→nội dung 56px.

## Density: 6 token theo role, 2 mức (2026-10-19)

Sếp thấy bảng spec đo được quá dài, không ai review hết; người ta chỉ nhớ 2, 4, 8, 16, 24, 32. Hướng chốt: designer chọn token theo role và chọn size component tuỳ ý; density quyết định con số, cả ở layout lẫn bên trong mỗi size. Demo: https://claude.ai/artifact/WJCYR9eUy4ba6oyTRiQRyu (v4; code `experiments/spacing-tiers/density.tsx`, `specimen.tsx`, chưa commit).

### Layout: 6 token

| Token | Dùng cho | Compact | Default |
|---|---|---|---|
| `--space-stack` | Text xếp dọc: title→description, label→value | 2 | 4 |
| `--space-inline` | Thứ nhỏ cạnh nhau: icon→text, label→value một dòng, item sidebar | 4 | 8 |
| `--space-cluster` | Control/phần đi chung: filter toolbar, thumbnail/avatar→nội dung, các phần page heading, trong card nhỏ | 8 | 12 |
| `--space-group` | Giữa item/block cùng nhóm: card trong hàng, toolbar→table, cạnh cell | 12 | 16 |
| `--space-container` | Mép trong card, panel, page heading | 16 | 24 |
| `--space-section` | Mép trang và giữa section | 20 | 24 |
| `--row-height` (size) | Row table/list | 36 | 48 |

Thang: 2 · 4 · 8 · 12 · 16 · 20 · 24. Compact: mỗi role lấy giá trị Default của role ngay dưới; riêng section 24→20.

### Bên trong component: control tier có mode Compact

| Size | Height D/C | Pad (field) D/C | Pad spacious (button) D/C | Gap D/C |
|---|---|---|---|---|
| md | 32 / 28 | 10 / 8 | 12 / 8 | 8 / 6 |
| sm | 24 / 22 | 8 / 6 | 8 / 6 | 6 / 4 |
| xs | 20 / 20 | 6 / 4 | 6 / 4 | 4 / 2 |

Luật: Compact giữ đủ size, mỗi size lấy pad/gap của size ngay dưới; md bớt 4px chiều cao, sm bớt 2px, xs giữ 20 (sàn của text). Button, input, select, tabs, pagination đã đọc các token này nên chỉ cần đổi giá trị. Tag cao theo line-height nên giữ 24/20 ở cả hai density, chỉ padding đổi. Đã đo trong trình duyệt: md 32→28, sm 24→22 ở Button, Search, Select, Tabs, Pagination.

Quyết định (sếp chốt 2026-10-19):
- Chỉ Default và Compact, bỏ Wide.
- Density không ép size component: mỗi density có đủ xs/sm/md cho designer. Patterns đọc 6 token, component đọc control tier; cả hai có mode Compact.
- `--space-section` = 24 Default, 20 Compact. Hệ quả: Default lệch main ở mép trang (AppShell padding và cạnh header 32→24), và section trùng giá trị với container (24), nên tách section phải dựa vào viền card/đường kẻ thay vì thêm khoảng trắng.
- `--space-cluster` (12) giữ Default khớp main ở các chỗ 12px. Alert padding 10→12 có chủ đích.

### Density áp dụng cho tất cả components và patterns (sếp chốt 2026-10-19)

Áp dụng cho cả overlay: Menu, list của Select và Combobox, Popover, Tooltip, Modal, DatePicker, Calendar. Demo v6 có hàng "open" và "calendar" trong specimen ở cả hai density.

- Spacing trong overlay map vào 6 token. Popover padding → `group`, title→body → `cluster`. Modal padding và header → `group`, nút ở footer → `inline`. Tooltip padding → `stack`/`inline`. Panel DatePicker → `cluster`, preset → `inline`. Header của Calendar → `inline`.
- Các chỗ trước đây dùng `--space-8` làm size (ô ngày, nút tháng, hàng thứ của Calendar; hàng preset của DatePicker) chuyển sang đọc `--control-md`, nên ở Compact ngày trong lịch còn 28px. Default giữ 32 như main.
- Item của Menu và option của Select có `min-block-size: --control-md` nhưng padding dọc cố định 6px, nên ở Compact cao 30 thay vì 28. Map padding dọc → `stack` thì Compact ra 28, Default vẫn 32. Đã đo trong trình duyệt.
- Portal: Select, Combobox, DatePicker portal ra `<body>` và không nhận `container`; Popover, Menu, Tooltip, Modal thì có. Vì vậy density phải đặt ở root của app như appearance. Muốn density cục bộ cho một panel thì ba component kia cần nhận `container`. `scaling` của `Theme` hiện cũng hở đúng chỗ này. Demo tạm chép density của trigger sang popup mới mở.

### Review từng component (2026-10-19)

Artifact riêng: https://claude.ai/artifact/S2yA7dBC8cp9mKjRzdJbRF (code `experiments/spacing-tiers/catalog.tsx`). Mỗi component và pattern trong số 53 cái được render từ chính story của nó (cùng story mà visual test dùng; overlay dùng story mở sẵn tại chỗ). Mỗi story render hai lần, Default và Compact; mọi padding, gap, margin được đo ở cả hai và ghép cặp, cái nào đổi theo density tô xanh, cái nào đứng yên tô cam.

- Bản map đầu tiên chỉ phủ các component có trong hai màn demo; khoảng 20 component còn đứng yên hoàn toàn. Đã map thêm khoảng 80 phần, nên giờ 1.164 trên 1.824 giá trị đo được chạy theo density. Phần còn lại phần lớn là inset 1–2px.
- So computed style của Default với main trên cả 53 story: chỉ lệch ở các chỗ có chủ đích (mép trang và section của form 32→24, Alert 10→12, padding dọc của menu item 6→4 nhưng chiều cao không đổi). Một chỗ lệch ngoài ý muốn: cạnh header của AppShell ở màn hẹp 16→24, vì trial chỉ map một giá trị trong khi component có hai breakpoint.
- Các giá trị đứng yên chia bốn nhóm:
  - Inset trong control cao cố định (1px của Button và Tag, 2px của track Switch, 2px giữa các ngày Calendar): đúng là nên đứng yên.
  - Control nhỏ nằm trong component (nút sort của Table, Badge md, số đếm trên Sidebar, nút tăng giảm của NumberInput, ô kênh của ColorPicker, padding Textarea, label nhóm của Menu, nút đóng Modal, nút của Combobox, skip link). **Sếp chốt 2026-10-19: dùng control tier theo size của từng cái.** Đã đưa vào trial; margin âm dùng để bù padding đi theo cùng token đó.
  - Offset căn lề: helper text của checkbox/radio thụt bằng `--choice-control` + `--space-inline`, nên di chuyển theo gap (đã áp dụng trong trial).
  - Gap label→helper của ChoiceField là 4px trong form, 8px ở chỗ khác: tạm để đứng yên.
- Sau đợt này: 1.294 trên 1.824 giá trị đo được chạy theo density; 21 component chạy theo toàn bộ, 18 phần lớn, 8 một phần (phần đứng yên chủ yếu là inset 1–2px), 5 không có spacing. Default chỉ lệch main ở các chỗ có chủ đích kể trên.
  - Nội dung riêng của story, không thuộc component.
- DescriptionList dạng cột dùng 20px, không trùng role nào của Default: chờ chọn `group` hoặc `container`.
- Gap dọc 8px giữa các option radio và giữa title→description đang map vào `inline` (đúng con số, sai tên role). Có thể cân nhắc đặt tên role theo cỡ thay vì theo hướng.

### Checkbox, radio, switch, progress bar và Toast (sếp yêu cầu 2026-10-19)

Các control này giờ cũng đổi size theo density. Mọi size vẫn có ở cả hai density; ở Compact, mỗi size lấy kích thước của size ngay dưới nó. Đã đo trong trình duyệt:

| Phần | Default | Compact |
|---|---|---|
| Ô checkbox, radio (`--choice-box`) | 20 | 16 |
| Chấm radio (`--radio-dot`) | 8 | 6 |
| Switch sm | 28 × 16 | 24 × 14 |
| Switch md | 36 × 20 | 28 × 16 |
| Switch lg | 44 × 24 | 36 × 20 |
| Progress bar sm / md / lg | 4 / 8 / 12 | 4 / 6 / 8 |
| Avatar xs / sm / md / lg | 24 / 32 / 40 / 48 | 20 / 24 / 32 / 40 |
| Badge sm / md (chiều cao) | 16 / 20 | 14 / 16 |
| Badge dot sm / md | 6 / 8 | 4 / 6 |

- Switch sm ở Compact phải xuống 24 × 14 (thumb 10px). Nếu giữ 28 × 16 thì trùng với md và mất một size.
- Avatar và Badge thêm sau theo yêu cầu của sếp (2026-10-19). Avatar xs xuống 20 và Badge sm xuống 14 vì cùng lý do với switch sm (giữ các size tách nhau); badge 14px vẫn chứa vừa số hai chữ số. Cỡ chữ initials của Avatar đi theo type token nên cũng giảm ở Compact.
- Progress bar sm giữ 4px ở cả hai density.
- Toast trước đó chưa có trong map, và catalog cũng không thấy nó vì story `Variants` chỉ hiện các nút gọi toast. Catalog giờ dùng story `VariantsStatic`. Spacing của Toast đã map: padding `cluster`/`group`, icon→text `cluster`, title→description `stack`, khoảng giữa các toast `inline`. Một toast ở Compact cao 56px, ở Default 70px.

### Type theo density (thử nghiệm, chờ sếp duyệt)

Base 14px ở Default, 13px ở Compact. Demo v5 cùng link, có công tắc "Compact type" để so Compact có và không đổi chữ.

| Token | Default | Compact |
|---|---|---|
| `heading-2xl` | 32/36 | 28/32 |
| `heading-xl` | 28/32 | 24/28 |
| `heading-lg` | 24/28 | 20/24 |
| `heading-md` | 20/24 | 18/24 |
| `heading-sm` | 16/20 | 15/20 |
| `heading-xs` | 14/20 | 13/18 |
| `heading-2xs` | 12/16 | 12/16 |
| `body-lg` | 16/24 | 15/22 |
| `body` | 14/20 | 13/18 |
| `body-sm` | 12/16 | 12/16 |
| `body-xs` | 11/16 | 11/16 |

Luật: chữ 12px trở xuống không giảm (sàn đọc được); 13–16px giảm 1px; heading từ 20px lên giảm một bậc trên thang heading.

Khả thi:
- Component đặt cỡ chữ qua type token ở 88 chỗ. Literal còn lại chỉ là icon, cộng một chỗ 9px ở FileUploader. Thêm mode cho 11 cặp `--text-*`/`--leading-*` là đủ, không phải sửa component. Đã đo trong trình duyệt: cỡ chữ khớp bảng, không control nào bị cắt chữ.
- Khác `scaling` 93%: scaling cho ra 12→11.2, 11→10.2, 32→29.8; type density chọn từng cỡ, giữ px nguyên và sàn 12.
- **Quyết định (sếp chốt 2026-10-19): giữ leading Compact 13/18** (cả `body` và `heading-xs`), chấp nhận rời lưới 4px. 13/20 giữ được lưới nhưng mất phần lớn độ gọn. Row và control cao cố định nên chỉ text xuống dòng là thấy.
- Icon giữ 16px cạnh chữ 13px; có thể giảm `--icon-md` xuống 14 ở Compact nếu thấy nặng.

Còn để ngỏ:
- Gap trong Stats card và title→description của PageHeading (đều 8) không map, nên không theo density.
- Size Card là density cục bộ (`sm` = padding `group` + gap `cluster`; `md` = padding `container` + gap `group`).
- Density khác `scaling` (scaling nhân cả chữ); giữ cả hai.
- Khi làm thật: 6 token và control tier có mode density trong `tokens/semantic.json`, `Theme` set density như `scaling`; Figma: 6 variable spacing + control tier, 2 mode.
