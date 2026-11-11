# Zweihänder theo Atlassian: bỏ mode, đổi ít hơn tưởng

Zweihänder đã gần Atlassian Design System (ADS) hơn giả định ban đầu: thang chữ Default trùng ADS từng cặp size/line-height, Button 32/24px trùng ADS, focus ring 2px/offset 2px trùng ADS, và mọi giá trị spacing role đều nằm trên thang ADS. Việc nâng cấp vì thế gồm hai phần tách rời. Phần một là gỡ density mode: xoá giá trị Compact của **47 token và 8 leading**, prop `density` của `Theme`, toolbar Storybook và 5 mode Compact trong Figma; ở Default không pixel nào đổi, nên 200 visual baseline hiện có chính là bằng chứng hồi quy. Phần hai mới là thay đổi nhìn thấy được: **radius control 8 → 6px, panel 14 → 8/12px; field 32 → 40px; elevation 8 bậc → 2 bậc; bỏ cỡ chữ 11px; Modal padding 16 → 24px; top bar 56 → 48px**. Có ba điểm bản brief đang bỏ qua. Một, ADS không có density mode toàn cục nhưng vẫn giữ compact cục bộ trên ít nhất tám component, nên "theo Atlassian" và "loại bỏ hoàn toàn density" chỉ khớp nhau nếu hiểu density là *mode*, không phải *prop size*. Hai, ADS đặt input 40px cạnh button 32px, một lệch pha mà Atlassian tự xử lý bằng compact input trong toolbar. Ba, ADS là ngoại lệ trong nhóm design system cho enterprise (Salesforce, Cloudscape, Ant đều có mode), và quyết định này đảo ngược dòng định vị "Enterprise density" trong `PRODUCT.md`. Shard không dùng Compact nên chi phí thực tế hôm nay bằng không, nhưng Shard đọc trực tiếp khoảng 160 lần các token số, nên đổi tên token theo `--ds-*` là phương án đắt nhất và không mua được gì. Mọi con số ADS trong báo cáo đọc từ gói npm phát hành ngày 2026-11-09 đến 2026-11-11; trạng thái feature flag trong sản phẩm Atlassian không quan sát được từ tarball.

## Core mới: giữ tên token, đổi giá trị, chỉ màu là phải viết lại

Kết luận cho phần core: giữ nguyên tên token của Zweihänder, đổi giá trị về ADS, thêm ba bước spacing và một thang border-width còn thiếu, thu elevation về hai bậc. Cấu trúc màu là nền tảng duy nhất mà theo ADS đồng nghĩa với viết lại, và tôi khuyên không làm (lý do ở cuối mục).

### Spacing: thang số đã khớp, chỉ lệch ở 10px và ba bước thiếu

ADS dùng base 8px (`space.100`), 14 token dương từ 0 đến 80px, không có bước 10px ([atlassian-spacing.js](https://unpkg.com/@atlaskit/tokens@20.11.0/dist/esm/artifacts/themes/atlassian-spacing.js); [atlassian.design/foundations/spacing](https://atlassian.design/foundations/spacing)). Zweihänder có 11 bước số và 6 role token mang hai giá trị Default/Compact (`tokens/semantic.json:301-321`).

| Token Zweihänder | Hiện tại (Default / Compact) | ADS tương ứng | Giá trị mới |
|---|---|---|---|
| `--space-0-5` | 2 | `space.025` 2 | 2 |
| `--space-1` | 4 | `space.050` 4 | 4 |
| `--space-1-5` | 6 | `space.075` 6 | 6 |
| `--space-2` | 8 | `space.100` 8 | 8 |
| `--space-2-5` | 10 | không có | deprecate sau khi field padding rời 10px |
| `--space-3` | 12 | `space.150` 12 | 12 |
| `--space-4` | 16 | `space.200` 16 | 16 |
| (thiếu) | — | `space.250` 20 | thêm `--space-5` = 20 |
| `--space-6` | 24 | `space.300` 24 | 24 |
| `--space-8` / `-10` / `-12` | 32 / 40 / 48 | `space.400` / `500` / `600` | giữ |
| (thiếu) | — | `space.800` 64, `space.1000` 80 | thêm `--space-16`, `--space-20` |
| `--space-stack` | 4 / 2 | 4 | 4 |
| `--space-inline` | 8 / 4 | 8 | 8 |
| `--space-cluster` | 12 / 8 | 12 | 12 |
| `--space-group` | 16 / 12 | 16 | 16 |
| `--space-container` | 24 / 16 | 24 | 24 |
| `--space-section` | 24 / 20 | 24 (lề trang desktop của ADS là 32) | 24, xem lại khi làm AppShell |

Sáu role token nên giữ. Chúng được đọc nhiều hơn token số trong CSS component (`--space-group` 74 lần, `--space-inline` 73 lần), và ADS đang tự đi về hướng này với lớp semantic `space.gap.*` / `space.inset.*`. Lớp đó vẫn ở trạng thái `experimental` và đã bị đổi tên và đổi giá trị một lần ở bản 20.10.0 ([CHANGELOG @atlaskit/tokens](https://unpkg.com/@atlaskit/tokens@20.11.0/CHANGELOG.md)), nên sao chép tên của nó bây giờ là buộc Zweihänder vào một mục tiêu đang di chuyển.

### Box sizing và chiều cao control: ramp giữ nguyên, thêm bậc 40 cho field

ADS không có token chiều cao; 32/24px của Button và 40/32px của field là giá trị cứng trong CSS component ([button-base.compiled.css](https://unpkg.com/@atlaskit/button@25.8.1/dist/esm/new-button/variants/shared/button-base.compiled.css); [@atlaskit/react-select](https://registry.npmjs.org/@atlaskit/react-select/latest)). Mọi kích thước control ADS đọc được (16, 20, 24, 32, 40, 48) đều rơi đúng vào box ramp hiện có của Zweihänder, nên ramp và phép kiểm "mọi kích thước cố định là một bước box" trong `scripts/build-tokens.mjs` sống sót; chỉ vòng lặp theo density và 5 ngoại lệ `@compact` trong `OFF_RAMP` biến mất.

| Token | Hiện tại (Default / Compact) | Giá trị mới | Ghi chú theo ADS |
|---|---|---|---|
| `--box-2xs` / `--box-xs` | 16 / 20 (cố định) | 16 / 20 | — |
| `--box-sm` | 24 / 22 | 24 | Button compact, icon button compact |
| `--box-md` | 32 / 28 | 32 | Button, Tabs, nav item, field compact |
| `--box-lg` | 40 / 36 | 40 | field mặc định, menu item cozy |
| `--box-xl` | 48 / 44 | 48 | top nav, Banner |
| `--control-sm` / `--control-md` | 24 / 32 | 24 / 32 | giữ cho Button, Tabs, Pagination |
| `--control-lg` | không tồn tại | 40 (nếu chốt field 40) | đảo quyết định "no `lg` 40" ngày 2026-10-09 |
| `--control-md-pad-spacious` | 12 / 8 | 12 | Button padding-inline 12 ở cả hai size |
| `--control-sm-pad-spacious` | 8 / 6 | 12 | ADS compact vẫn 12 |
| `--control-md-gap` | 8 / 6 | 6 | gap icon–label của ADS là 6 |
| `--control-md-pad` (field) | 10 / 8 | 6 (+1px border) | field ADS: padding-inline 6 |
| `--row-height` | 48 / 36 | xem mục Table | ADS không đặt chiều cao hàng |

### Typography: thang đã trùng, khác ở cỡ 11px và weight

Thang Default của Zweihänder trùng ADS ở cả bảy heading và ba body: 32/36, 28/32, 24/28, 20/24, 16/20, 14/20, 12/16 và 16/24, 14/20, 12/16 ([atlassian-typography.js](https://unpkg.com/@atlaskit/tokens@20.11.0/dist/esm/artifacts/themes/atlassian-typography.js); `tokens/semantic.json:413`). Việc phải làm là xoá 8 giá trị Compact (ví dụ body 13/18), và xử lý ba khác biệt còn lại.

| Hạng mục | Zweihänder hiện tại | ADS | Giá trị mới đề xuất |
|---|---|---|---|
| Cỡ nhỏ nhất | `--text-body-xs` 11/16 (Badge, Kbd) | 12/16; bản refresh nâng sàn từ 11 lên 12px | alias về 12/16 rồi deprecate |
| Weight heading | literal 500–700; Modal title 500 | 653, hoặc 600 ở theme "finesse" | 600 |
| Weight label cạnh icon (Button, Tab) | 500 | 500 (`font.weight.medium`) | giữ |
| Label của field | 14/20, weight 500 | 12/16, weight bold | 12/16, weight 600 |
| Token weight | không có | `font.weight.regular/medium/semibold/bold` | tuỳ chọn; Stylelint đã chặn literal ngoài 400–700 |
| Typeface | `system-ui` stack | Atlassian Sans / Atlassian Mono | giữ `system-ui` |

Weight 653 chỉ render đúng với variable font Atlassian Sans; bản thân Atlassian đã phát hành theme finesse đưa heading về 600 ([atlassian-typography-finesse.js](https://unpkg.com/@atlaskit/tokens@20.11.0/dist/esm/artifacts/themes/atlassian-typography-finesse.js)), nên 600 là điểm hạ cánh hợp lý với font hệ thống. Bản refresh công bố việc nâng cỡ nhỏ nhất từ 11 lên 12px ([thông báo visual refresh, 2024-10-04](https://community.developer.atlassian.com/t/a-visual-refresh-of-our-ui-foundations-is-coming/84949)). Giấy phép dùng Atlassian Sans cho bên thứ ba chưa được nghiên cứu.

### Radius, border, elevation, focus ring

ADS gán radius theo vai trò của phần tử, không theo kích thước: 2 cho chi tiết nhỏ, 4 cho phần tử phụ và button compact, 6 cho phần tử tương tác, 8 cho container và popup, 12 cho modal và bảng, 9999 cho avatar ([atlassian-shape.js](https://unpkg.com/@atlaskit/tokens@20.11.0/dist/esm/artifacts/themes/atlassian-shape.js); [atlassian.design/foundations/radius](https://atlassian.design/foundations/radius)). Trang radius ghi rõ các giá trị này "subject to change".

| Hạng mục | Zweihänder hiện tại | ADS | Giá trị mới |
|---|---|---|---|
| `--radius-control` / `--radius-field` | 8 | `radius.medium` 6 | 6 |
| Control `sm` (Button sm, Tag) | 6 | `radius.small` 4 | 4 |
| Checkbox, Badge, Kbd | 6 (`--radius-sm`) | `radius.xsmall` 2 (wrapper checkbox 4) | 2 |
| Tooltip | 6 | `radius.small` 4 | 4 |
| Menu, Popover, Toast, Card, Alert | 8 hoặc 14 | `radius.large` 8 | 8 |
| `--radius-panel` (Modal) | 14 | `radius.xlarge` 12 | 12 |
| Thang bước | sm 6, md 8, lg 10, xl 14 (từ `--radius` 10px) | 2 / 4 / 6 / 8 / 12 / 16 | cần thang 6 bước; công thức `radius ± n` hiện tại không sinh ra được 2 và 4 |
| Border width | không có token; khoảng 70 chỗ `1px` literal | `border.width` 1, `.selected` 2, `.focused` 2 | thêm `--border-width`, `--border-width-selected`; `--focus-width` đã có |
| Shadow | 8 bậc `--shadow-2xs…2xl` | 2 bậc: `shadow.raised`, `shadow.overlay` (+ `overflow`) | thu về 2 bậc, giữ tên cũ làm alias |
| Shadow trên field | `--shadow-2xs` | không có | bỏ |
| Dark mode elevation | alpha × 4, kẹp 0.6 | surface sáng dần (#1F1F21 → #242528 → #2B2C2F) + viền 1px trên overlay | cần quyết định (gắn với màu) |
| Focus ring | 2px solid `--ring`, offset 2 / −2 | 2px solid `color.border.focused`, offset 2 / −2 | giữ nguyên |
| Focus của field | outline | `box-shadow: inset 0 0 0 1px` đổi màu, không phải ring 2px | cần quyết định |

Hai giá trị shadow sáng của ADS là `0px 1px 1px #1E1F2140, 0px 0px 1px #1E1F214F` (raised) và `0px 8px 12px #1E1F2126, 0px 0px 1px #1E1F214F` (overlay) ([atlassian-light.js](https://unpkg.com/@atlaskit/tokens@20.11.0/dist/esm/artifacts/themes/atlassian-light.js)). Quy tắc dùng: raised chỉ cho card di chuyển được, overlay cho modal, dropdown, flag; card phẳng dùng surface mặc định cộng border ([atlassian.design/foundations/elevation](https://atlassian.design/foundations/elevation)). Focus ring của ADS đọc từ source `@atlaskit/focus-ring` trùng với ba token `--focus-*` hiện có ([focus-ring.js](https://unpkg.com/@atlaskit/focus-ring@6.0.0/dist/esm/focus-ring.js)); ADS không công bố con số target size tối thiểu, 24px là suy ra từ kích thước component và WCAG 2.5.8.

Radius đụng một tính năng mà brief chưa nhắc: `Theme` có ba preset `sharp` / `rounded` / `full-rounded` nhân radius qua `--radius-factor` (`src/theme/Theme.tsx:17-28`), và Figma có collection Radius 5 mode. ADS không có khái niệm này; "theo ADS toàn bộ" nghĩa là preset `rounded` trở thành thang ADS, còn hai preset kia hoặc bị bỏ hoặc trở thành sai lệch có chủ ý.

### Cấu trúc color token: đừng viết lại

ADS có 471 CSS variable mỗi theme theo ngữ pháp `color.<property>.<role>[.<emphasis>][.<state>]`, với fill trung tính là màu alpha để dùng được trên mọi surface ([atlassian-light.js](https://unpkg.com/@atlaskit/tokens@20.11.0/dist/esm/artifacts/themes/atlassian-light.js)). Zweihänder có 125 token mỗi mode theo kiểu shadcn (cặp surface + `-foreground`), cộng 17 accent × 9 gray đổi lúc chạy, với kiểm tra tương phản lúc build cho từng palette (`tokens/semantic.json:3-259`; `scripts/build-tokens.mjs:41-93`).

| Khía cạnh | Zweihänder | ADS | Hệ quả nếu theo ADS |
|---|---|---|---|
| Ngữ pháp | vai trò surface: `primary`, `muted`, `card`, `destructive` | thuộc tính trước: `text.*`, `icon.*`, `border.*`, `background.*` | đổi tên toàn bộ 125 token, vỡ mọi file Shard copy |
| Trạng thái | `hover-overlay` chung | `.hovered` / `.pressed` trên từng token | thêm khoảng 2 token cho mỗi nền |
| Status | 4 họ × 4 | 5 vai (thêm `discovery`) × thang subtlest → bold | thêm một vai, thêm bậc |
| Palette | 17 accent × 9 gray lúc chạy | một palette cố định, xanh #1868DB | mất khác biệt chính của kit |
| Tương phản | assert lúc build theo từng hue | giá trị chọn tay | không cần assert nữa |

Hai thứ đáng mượn mà không phải viết lại: fill trung tính dạng alpha để hover/pressed tự thích nghi với surface, và mô hình dark mode nâng surface sáng dần thay vì nhân alpha của shadow. Phần còn lại là quyết định mở (mục cuối), và khuyến nghị của tôi là chỉ theo box sizing.

## Từng component: field, overlay và shell đổi nhiều nhất, Button gần như đứng yên

Số liệu ADS dưới đây đọc từ `dist/es2019` và CSS đã compile của tarball npm, không phải từ trang docs hay Figma. Chiều cao 40px của Textfield là phép cộng (1 border + 1 + 8 + 20 + 8 + 1 + 1) khớp với `min-height: 40px` ghi rõ trong Select, không phải một khai báo `height` ([@atlaskit/textfield@10.3.1](https://registry.npmjs.org/@atlaskit/textfield/-/textfield-10.3.1.tgz); [@atlaskit/react-select](https://registry.npmjs.org/@atlaskit/react-select/latest)). Số liệu Zweihänder lấy từ `.module.css` của từng component ở commit `b9eb7a75`.

| Component | ADS (mặc định / compact) | Zweihänder hiện tại (`md` / `sm`) | Chênh lệch phải xử lý |
|---|---|---|---|
| Button | 32 / 24 cao; pad-inline 12 / 12; gap icon 6; radius 6 / 4; 14/20 weight 500 ở cả hai | 32 / 24; pad 12 / 8; gap 8 / 6; radius 8 / 6; `sm` dùng 12/16 | radius, gap, `sm` pad 8 → 12 và chữ 12 → 14 |
| IconButton | 32×32 / 24×24, radius 6 / 4 | vuông theo `aspect-ratio` | chỉ radius |
| TextInput, Select, DatePicker | 40 / 32; pad-inline 6; radius 6; border 1; không shadow | 32 / 24; pad 10 / 8; radius 8 / 6; `--shadow-2xs` | chiều cao +8, pad, radius, bỏ shadow |
| Textarea | pad-block 6 / 2; pad-inline 7 | pad 8×10 / 6×8 | pad |
| Form layout | label 12/16 bold, cách field 4; helper 12/16, cách 4; field cách nhau 8 | label 14/20 weight 500, cách 6; helper 14/20; field rộng 20rem | cỡ label và helper, các gap |
| Checkbox | hộp layout 24, ô nhìn thấy khoảng 14, gap label 4 | ô 20, radius 6, gap 8 | ô nhỏ đi, radius, gap |
| Radio | hộp layout 24, nhìn thấy khoảng 15 | 20, dot 8 | tương tự |
| Switch / Toggle | 2 size: hộp ngoài 40×24, 48×28 | 3 size: 28×16, 36×20, 44×24 | số size và kích thước |
| Avatar | 16, 24, 32, 40, 96, 128 | 24, 32, 40, 48 | lệch tên bậc; 48 không có trong ADS |
| Badge | cao 16, min-width 24, pad-inline 4, radius 2, 12/16 | 16 / 20, 11/16 | bỏ bậc 20, chữ 11 → 12, radius |
| Tag | cao 20, radius 4, 12/16, max-width 180 | 24 / 20, radius 6, `md` dùng 14/20 | `md` 24 → 20 |
| Tooltip | pad 4×6, radius 4, max 240 | pad 4×8, radius 6, max 320 | pad, radius, max-width |
| Tabs | 32 (pad 6×8), radius 6, indicator 2px, không có size | 32 / 24, pad-inline 12 / 8, indicator 2px | pad; bậc 24 là phần mở rộng |
| Pagination | nút 32, gap 0 | 32 / 24 | gap |
| Menu / Dropdown item | 36 (pad 8×12) / 32 (6×8); radius 6; popup radius 8, `shadow.overlay` | min 32, pad 4×10; popup radius 8, `--shadow-md` | chiều cao +4, pad, shadow |
| Modal | rộng 400 / 600 / 800 / 968; pad 24; radius 12; title 20/24 | 384 / 512 / 768; pad 16; radius 14; title 16/20 weight 500 | toàn bộ |
| Drawer | 360 / 480 / 600 (+ 95vw, 100vw) | 320 / 448 / 640; pad 16 | bề rộng |
| Popover | radius 8, không padding riêng, `shadow.overlay` | pad 16, max 352, radius 14 | radius, shadow |
| Toast / Flag | rộng 400, pad 16, radius 8 | rộng 384, pad 12×16, radius 14 | pad, radius, bề rộng |
| Alert / Section message | pad 16, radius 8 | pad 12, radius 8 | pad |
| Table | cell pad 4×8; header 12/16 bold + kẻ đáy 2px; không đặt chiều cao hàng (tối thiểu 28 theo nội dung) | hàng 48 / 40; cell pad 0×16; header 12/16 weight 500 | xem đoạn dưới |
| TopBar | 48 (56 sau một flag), pad-inline 12, gap 8 | 56 | −8 |
| NavSidebar | rộng 320 (min 240), pad 12, item 32, radius 6 | rộng 256, item 32, rail 48 | bề rộng, padding |
| Breadcrumbs | item cao 24, 14/20 | chỉ text 14/20, gap 4 | hộp item |
| Icon | 16 (mặc định), 12 (chevron, trong tag/badge) | 12 / 14 / 16 | bậc 14 không có trong ADS |

Nguồn ADS theo nhóm: Button ([@atlaskit/button@25.8.1](https://registry.npmjs.org/@atlaskit/button/-/button-25.8.1.tgz)), form ([@atlaskit/form@18.3.3](https://registry.npmjs.org/@atlaskit/form/-/form-18.3.3.tgz), [checkbox](https://registry.npmjs.org/@atlaskit/checkbox/-/checkbox-19.3.2.tgz), [toggle](https://registry.npmjs.org/@atlaskit/toggle/-/toggle-17.3.5.tgz)), hiển thị dữ liệu ([tag](https://registry.npmjs.org/@atlaskit/tag/-/tag-17.1.2.tgz), [badge](https://registry.npmjs.org/@atlaskit/badge/-/badge-22.0.0.tgz), [avatar](https://registry.npmjs.org/@atlaskit/avatar/-/avatar-30.1.0.tgz), [dynamic-table](https://registry.npmjs.org/@atlaskit/dynamic-table/-/dynamic-table-19.3.8.tgz), [tabs](https://registry.npmjs.org/@atlaskit/tabs/-/tabs-21.3.1.tgz)), overlay ([modal-dialog](https://registry.npmjs.org/@atlaskit/modal-dialog/-/modal-dialog-17.2.4.tgz), [dropdown-menu](https://registry.npmjs.org/@atlaskit/dropdown-menu/-/dropdown-menu-21.3.1.tgz), [flag](https://registry.npmjs.org/@atlaskit/flag/-/flag-19.0.4.tgz), [drawer](https://registry.npmjs.org/@atlaskit/drawer/-/drawer-14.3.11.tgz)), navigation ([navigation-system](https://registry.npmjs.org/@atlaskit/navigation-system/-/navigation-system-11.7.6.tgz), [side-nav-items](https://registry.npmjs.org/@atlaskit/side-nav-items/latest)), icon ([atlassian.design/foundations/iconography](https://atlassian.design/foundations/iconography)).

Ba chỗ trong bảng cần đọc kỹ hơn con số. **Table đi ngược trực giác**: hàng của ADS dynamic table tối thiểu 28px theo nội dung, tức dày hơn cả Compact hiện tại của Zweihänder (36px). Bỏ density mode mà theo đúng spec bảng của ADS thì bảng không thưa đi mà dày lên: cùng một chiều cao chứa nhiều hơn khoảng 70% số hàng so với Default 48px. Cái giá là control trong hàng: Button 32px đẩy hàng lên 40px, và đó là lý do ADS ghi Button compact là "for tables" ([atlassian.design/components/button/examples](https://atlassian.design/components/button/examples)). Package `@atlaskit/table` mới hơn chưa được đọc, nên spec bảng này là của dynamic-table. **Menu có hai đáp án trong chính ADS**: dropdown item mới cao 36/32 theo padding, `@atlaskit/menu` cao 40/32 theo `min-height`; đường nào đang là mặc định chưa được truy vết. **Field `sm` 24px của Zweihänder không có tương ứng trong ADS**: field nhỏ nhất của ADS là 32px.

Các component sau không có spec ADS trong ghi chú nghiên cứu và phải tự suy từ foundation: Card, Calendar, Stepper, Spinner, Skeleton, Rating, Slider, ColorPicker, FileUploader, OTPInput, CommandPalette, Carousel, Accordion, cùng toàn bộ 29 pattern và các template. Chúng chiếm phần lớn trong 267 lượt đọc token đổi theo density ở patterns và templates.

## Gỡ density: bề mặt chức năng nhỏ, bề mặt quyết định lớn

Density trong Zweihänder là một công tắc token hai mode đặt qua `data-density`; không CSS component nào rẽ nhánh theo density (`src/tokens.css:730-744`). Vì vậy 356 lần xuất hiện của chữ "density" trong 68 file co lại thành một danh sách ngắn những chỗ có hành vi.

| Lớp | File | Việc phải làm |
|---|---|---|
| Token nguồn | `tokens/semantic.json` | xoá mọi `$extensions.compact` (47 token + 8 leading) |
| Build | `scripts/build-tokens.mjs` | xoá `byDensity`, khối switch `--density-*`, vòng lặp ramp theo density, 5 mục `@compact` trong `OFF_RAMP` |
| Sinh lại | `src/tokens.css`, `tokens/design-tokens.json`, `src/theme/palettes.ts`, `src/foundations/palette.ts` | `npm run tokens` |
| API | `src/theme/Theme.tsx` | bỏ `DENSITIES`, `type Density`, prop `density` |
| Storybook | `.storybook/preview.tsx`, `.storybook/blocks/SpecTable.tsx` | bỏ toolbar global, decorator và bộ lọc attribute |
| Foundations | `Spacing.mdx`, `Sizing.mdx`, `Overview.mdx`, `Spacing.stories.tsx`, `Sizing.stories.tsx` | viết lại, bỏ cột Compact |
| Story có assert | `AppShell.stories.tsx:272-280` | xoá story `Compact` và assert 22px |
| Manifest | `src/playground/manifest.json` | `npm run playground:manifest` |
| Văn bản | 8 file MDX và CSS comment trong patterns, `src/App.tsx:339`, `PRODUCT.md:23, 25, 61` | sửa câu chữ |
| Figma | collection `Size` | 10 mode → 5 mode (chỉ còn scaling) |
| Không còn dùng | `experiments/spacing-tiers/*` | xoá hoặc để yên; không phát hành |

Các check giữ nguyên vai trò: `tokens:check` sẽ báo `stale` cho đến khi bốn file sinh ra được cập nhật, `docs:check` bắt MDX còn nhắc token đã xoá, `playground:check` bắt manifest cũ. Xoá prop `density` của `Theme` là breaking change; quy ước repo yêu cầu changeset `minor` và deprecate hai bước, tức giữ prop và `console.warn` một bản rồi mới xoá (`docs/agents/components.md` §4). Shard không render `<Theme>` ở đâu cả, nên chủ dự án có cơ sở để miễn bước giữa, nhưng đó là miễn trừ phải ghi lại chứ không phải mặc định.

Thứ tự là điểm đáng giá nhất của phần này. Gỡ mode trước khi đổi bất kỳ giá trị nào thì đầu ra ở Default giống hệt từng pixel, nên 200 baseline trong `src/__screenshots__/` và các assert px trong 56 file story phải xanh mà không cần chụp lại. Trộn việc gỡ mode với đổi radius hay chiều cao field trong cùng một PR là vứt bỏ bằng chứng đó.

### Rủi ro và những gì brief đang bỏ qua

ADS không phản đối density; ADS hoãn nó. Trang spacing vẫn ghi hệ spacing "lays a foundation for ... customisable UI density in the future", nguyên văn từ thông báo tháng 1 năm 2023, và chưa có mode nào được phát hành ([atlassian.design/foundations/spacing](https://atlassian.design/foundations/spacing); [thông báo spacing scale](https://community.developer.atlassian.com/t/introducing-the-spacing-scale-the-beginnings-of-an-atlassian-spacing-system/65393)). Không tìm thấy phát biểu công khai nào của Atlassian giải thích vì sao không có mode. Câu đúng để viết vào vault là "ADS phát hành một thang và xử lý độ chặt cục bộ", không phải "Atlassian cho rằng density mode là sai".

Compact cục bộ vẫn sống khoẻ trong ADS. Button, IconButton, Textfield (`isCompact`), Textarea, Select, DatePicker, Dropdown menu và Menu đều giữ prop compact, và bản mới còn thêm `spacious` cho Lozenge và Dropdown; không prop nào bị deprecate trong các bản đã đọc. Compact của ADS luôn là trừ 8px chiều cao: field 40 → 32, button 32 → 24, menu item 40 → 32. `size="sm"` 24px của Zweihänder chính là Button compact của ADS. Vì thế "loại bỏ hoàn toàn density" phải được định nghĩa là xoá *mode và token hai giá trị*, giữ *prop `size`*. Xoá luôn `size="sm"` là đi xa hơn chính ADS và tước của bảng lẫn toolbar lối thoát duy nhất.

Có hai thứ mang bản chất density mà brief không nêu tên. Thứ nhất là prop `density: 'sm' | 'md'` của `Table`, một khái niệm tách biệt với mode nhưng trùng tên, đang được dùng ở 3 màn hình CRM demo, 2 chart và Shard. Vault đã ghi nhận sự trùng tên này là việc riêng; sau khi mode biến mất, prop này là chỗ duy nhất còn chữ "density" trong API. Thứ hai là `--scaling` (90–110%) nhân mọi token độ dài, kể cả chiều cao control. ADS không có tương đương ổn định, chỉ có theme `UNSAFE-*` thử nghiệm. Nếu mục tiêu là "một thang duy nhất như ADS" thì scaling là density dưới tên khác; nếu mục tiêu chỉ là bỏ mode Compact thì scaling ở lại và Figma còn 5 mode.

ADS là tiền lệ yếu cho CRM/ERP. Salesforce Lightning (Comfy/Compact), Cloudscape (comfortable/compact) và Ant Design (`componentSize`) đều giữ mode toàn cục; Carbon không có mode nhưng cho bảng năm cỡ hàng từ 24 đến 64px. Các điểm này trong ghi chú mới ở mức đoạn tóm tắt tìm kiếm, chưa đọc trang gốc ([Salesforce](https://developer.salesforce.com/blogs/2018/08/new-density-settings-for-the-lightning-experience-ui-in-winter-19); [Cloudscape](https://cloudscape.design/foundation/visual-foundation/content-density/); [Carbon data table](https://carbondesignsystem.com/components/data-table/style)). Sản phẩm của chính Atlassian cho thấy nhu cầu không biến mất mà dời chỗ: backlog của Jira có thiết lập Density Default/Compact theo từng người dùng ([tài liệu Jira Cloud](https://support.atlassian.com/jira-software-cloud/docs/customize-your-view-of-the-board-and-backlog/)). Lập luận accessibility cũng hẹp hơn thường nghe: WCAG 2.2 SC 2.5.8 chỉ yêu cầu 24×24 CSS px và có ngoại lệ theo khoảng cách, nên Compact không tự động vi phạm ([Understanding SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)). Lý do bỏ mode đứng vững là chi phí bảo trì và một thang ít sai hơn, không phải tuân thủ. Không có nguồn nào định lượng chi phí đó, và không tìm thấy bài viết nào của một đội design system kể lại việc gỡ một density mode.

Mục tiêu cũng đang di chuyển. Các giá trị trên là ảnh chụp `@atlaskit/tokens@20.11.0`; nhiều package có hai nhánh code sau feature flag (`platform-semantic-spacing`, `platform-dst-tokens-finesse`, top nav 56px) mà trạng thái production không quan sát được. Nên ghim phiên bản nguồn vào spec và coi đây là "ADS tại 2026-11", không phải "ADS".

### Các quyết định trong vault bị đảo ngược

Mọi mục dưới đây là quyết định của chủ dự án đã ghi trong vault, và quy ước repo nói "nếu file này và vault bất đồng, vault đúng", nên vault phải đổi trước code.

| Quyết định (ngày, nơi ghi) | Nội dung | Tác động |
|---|---|---|
| Density trong code, PR #138 (2026-10-19, `_context.md:82`) | `Theme density`, 6 role, row height, control tier, 8 cỡ chữ có giá trị Compact | đảo ngược hoàn toàn |
| Density trong Figma, phương án A (2026-10-19, `_context.md:47`) | collection `Size` 10 mode, bind trên 45 trang component | còn 5 mode; phải gỡ bind hoặc để mode tự mất |
| Box sizing #1 (2026-10-20, `box-sizing/box-sizing.md`) | một quy tắc Compact cho cả ramp | vô nghĩa; ticket 03 đóng |
| Box sizing #2 và "no `lg` 40" (2026-10-09, `_context.md:24`) | mặc định 32, không có `--control-lg` | đảo nếu chốt field 40 |
| Field padding 10px, PR #43 (2026-10-08, `_context.md:26`) | `--space-2-5` cho field `md` | đảo nếu theo pad 6 của ADS |
| Unified spec system (2026-10-09) | "Claude chỉ là ví dụ về nhất quán, đừng chép số"; `body-xs` 11/16; icon 12/14/16 | nguyên tắc "đừng chép số" bị thay bằng "chép số ADS"; 11px và icon 14 bị bỏ |
| Box sizing #7 | `--row-height` = box-md + 2 × space-inline (48) | đảo nếu Table theo ADS |
| `PRODUCT.md:23, 25, 61` | "Enterprise density", nguyên tắc "Density and data first" | phải viết lại định vị |

Ticket 02 (sizes-off-spacing) trong `box-sizing/issues/` vẫn còn giá trị và nên làm trước: Spinner, Stepper, Rating, Carousel, Skeleton, EmptyState đang dùng `--space-*` làm kích thước nên sẽ không đi theo bất kỳ thay đổi box ramp nào. Sáu trang MDX ghi lý do "Two sizes ... the compact control scale of the Claude apps" (`Button.mdx:220`, `TextInput.mdx:234` và bốn trang khác) cũng phải viết lại vì nguồn tham chiếu đã đổi.

## Shard và lộ trình: giữ tên token, gộp re-add thành hai đợt

Shard cài 41 registry item dưới dạng bản copy nguyên văn và `scripts/zw-check.mjs` so từng file với registry đã deploy. Mọi thay đổi token hay CSS component vì thế làm Shard báo drift cho đến khi chạy lại `npx shadcn@latest add --yes --overwrite`. Shard không dùng Compact: chỉ có `data-density="default"` trên `<body>` (`shard/index.html:25`), và attribute này trở nên vô tác dụng chứ không gây lỗi khi mode bị gỡ.

Rủi ro thật nằm ở code riêng của Shard, vốn đọc trực tiếp token số: `--space-2` 43 lần, `--space-3` 37 lần, `--space-4` 23 lần, `--text-body-sm` 20 lần, `--text-body-xs` 17 lần, `--radius-md` 7 lần, `--radius-panel` 6 lần, `--space-2-5` 3 lần. Ba hệ quả cụ thể. Đổi tên token sang kiểu ADS làm vỡ khoảng 160 chỗ đọc này cộng mọi file copy. Xoá `--text-body-xs` (11px) làm vỡ 17 chỗ, nên phải giữ làm alias. Đổi *giá trị* của `--radius-md` từ 8 xuống 6 và `--radius-panel` từ 14 xuống 12 làm màn hình Shard đổi hình mà không báo lỗi nào, vì `zw:check` chỉ so file kit. Shard còn dùng `Table density="sm"` theo `DESIGN.md:254`, `Avatar size="xs"` và `Tag size="sm"`; đổi tên prop hay dời bậc Avatar đều phải sửa ở Shard. Không có registry item nào cần đổi tên hay xoá, nên `ITEMS` của Shard không vỡ.

| Giai đoạn | Nội dung | Thay đổi nhìn thấy | Cổng kiểm | Shard |
|---|---|---|---|---|
| 0. Chốt và ghi vault | trả lời các quyết định mở; ghi đảo ngược vào `_context.md`, `box-sizing.md`; đóng ticket 03; ghim `@atlaskit/tokens@20.11.0` | không | — | không |
| 1. Gỡ density mode | token, build, `Theme`, Storybook, foundations docs, Figma 10 → 5 mode | không pixel nào ở Default | 200 baseline không đổi; `tokens:check`, `docs:check`, `playground:check` | re-add `tokens`, `theme`; xoá `data-density` |
| 2. Foundation | radius, `--border-width*`, elevation 2 bậc, thêm `--space-5/16/20`, weight heading 600, alias `--text-body-xs` | mọi component | chụp lại baseline trên CI (label `update screenshots`); sửa assert | chưa re-add |
| 3. Component theo họ | (a) field 40/32 và form layout; (b) Button, Tabs, Menu; (c) Checkbox, Radio, Switch, Tag, Badge, Avatar; (d) Modal, Drawer, Popover, Toast, Tooltip; (e) Table; (f) TopBar, NavSidebar, AppShell và patterns | theo từng họ | mỗi PR: MDX `SpecTable` + argTypes trước, changeset `minor`, vitest ba trình duyệt | chưa re-add |
| 4. Đồng bộ consumer | re-add 41 item một lần; rà `--radius-*` và `--text-body-xs` trong code riêng của Shard; sync Figma; viết lại `PRODUCT.md` | Shard | `zw:check` xanh | một PR |

Giai đoạn 1 có thể phát hành độc lập và có giá trị ngay cả khi phần còn lại bị hoãn. Giai đoạn 2 và 3 là visual change, nên theo `docs/agents/components.md` §0 phải đi Figma → chủ dự án duyệt → code cho từng họ, trong khi token vẫn đi một chiều từ code sang Figma. Gộp re-add của Shard vào cuối giai đoạn 1 và cuối giai đoạn 3 tránh để Shard ở trạng thái nửa cũ nửa mới; quy ước "sửa giống hệt ở Shard cho đến khi registry redeploy" chỉ áp cho thay đổi phát sinh từ Shard, không áp ở đây. Thứ tự (a) trước trong giai đoạn 3 vì field là thay đổi lớn nhất và quyết định hình dạng của FilterBar, FormLayouts và TopBar.

## Chín quyết định cần chủ dự án chốt trước khi viết dòng code đầu tiên

| # | Câu hỏi | Phương án | Khuyến nghị và đánh đổi |
|---|---|---|---|
| 1 | Field 40px hay giữ 32px? | (A) theo ADS: `md` 40, `sm` 32, bỏ field 24. (B) giữ 32/24, lệch ADS có chủ ý. | A nếu "toàn bộ theo ADS" là ràng buộc cứng. Cái giá: form CRM cao thêm 8px mỗi field, mọi toolbar phải dùng field `sm` để thẳng hàng với Button 32, vỡ assert `[24, 32]` của Select và TextInput, đảo quyết định "no `lg`". B là thay đổi rẻ nhất và vẫn đúng với ADS compact. |
| 2 | "Loại bỏ hoàn toàn density" gồm những gì? | (A) chỉ mode và token hai giá trị. (B) thêm prop `size="sm"` trên control. | A. B đi xa hơn ADS, vốn ghi compact là "for tables". |
| 3 | `--scaling` 90–110% ở lại? | giữ / bỏ | Giữ ở giai đoạn 1 để không trộn hai thay đổi; quyết riêng. Bỏ thì Figma `Size` còn 1 mode và `Theme` mất thêm một prop. |
| 4 | Table: theo hàng 28px của ADS, và prop `density` tên gì? | (A) cell pad 4×8, hàng theo nội dung, đổi prop thành `size`. (B) giữ 48/40, chỉ đổi tên. (C) giữ nguyên. | A về spec, đổi tên theo hai bước deprecate. Shard dùng `density="sm"` nên phải sửa cùng lúc. Cần đọc `@atlaskit/table` trước khi chốt số. |
| 5 | Đổi tên token theo ADS? | giữ tên Zweihänder / đổi sang kiểu `space.100` | Giữ tên. Đổi tên vỡ khoảng 160 chỗ đọc ở Shard và mọi file copy, không đổi một pixel nào. |
| 6 | Theo màu và ngữ pháp màu của ADS? | (A) chỉ box sizing. (B) mượn alpha neutral và dark surface. (C) theo toàn bộ 471 token và palette. | A hoặc B. C xoá 17 accent × 9 gray và kiểm tra tương phản lúc build, tức xoá khác biệt chính của kit. |
| 7 | Typeface và weight? | Atlassian Sans + 653 / `system-ui` + 600 | `system-ui` + 600. Giấy phép Atlassian Sans chưa rõ; 653 không render ngoài font đó. |
| 8 | Radius preset của `Theme` (`sharp`, `full-rounded`)? | bỏ / giữ, với `rounded` = thang ADS | Giữ nếu Theme customization còn là định vị; chấp nhận hai preset kia lệch ADS. Dù chọn gì, công thức radius phải viết lại để sinh ra 2 và 4. |
| 9 | Định vị sau khi bỏ "Enterprise density"? | viết lại `PRODUCT.md` | Cần một câu thay thế trước giai đoạn 4, nếu không sản phẩm mất một trong bốn khác biệt đã ghi mà không có gì thế chỗ. |

Bốn câu nhỏ hơn có thể chốt trong lúc làm: focus của field theo inset 1px của ADS hay giữ ring 2px; Menu item 36 hay 40; bỏ icon 14px khi kit vừa quay về Boxicons viewBox 24 cùng ngày; và có miễn bước deprecate cho prop `density` của `Theme` không.

## Conclusion

Nghiên cứu này đổi hình dạng bài toán. Nó bắt đầu như một cuộc thay nền móng và kết thúc như hai việc rất khác nhau về rủi ro: một phép xoá gần như cơ học, tự chứng minh được bằng baseline hiện có, và một chuỗi thay đổi giá trị mà độ lớn phụ thuộc gần như hoàn toàn vào một câu trả lời, field 40 hay 32. Nếu câu trả lời là 32, Zweihänder đã là "ADS compact" ở tầng control và phần còn lại chủ yếu là radius, elevation và padding của overlay. Nếu là 40, mọi form, toolbar và pattern đều đổi nhịp dọc, và chính lúc đó nhu cầu compact cục bộ mà brief muốn loại bỏ sẽ quay lại dưới dạng `size="sm"` ở mọi filter bar.

Điều brief chưa tính đến là Table. Theo đúng spec ADS, bảng dày hơn Compact hiện tại, nên thứ mất đi khi bỏ mode là độ chặt của form và shell chứ không phải của danh sách. Với một CRM, đó là đánh đổi chấp nhận được, miễn là độ chặt của hàng trở thành trạng thái do sản phẩm giữ (theo người dùng, theo view, như backlog của Jira) thay vì thuộc tính của theme. Kit chỉ cần lộ ra prop; Shard quyết định khi nào bật.
