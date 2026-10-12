---
name: zw-build
description: Quy trình chính thức để tạo mới hoặc enhance một component hay pattern của Zweihänder, gồm spec MDX, code, story test, a11y, registry, changeset và status. Dùng mỗi khi thêm, sửa, refactor, deprecate component hoặc pattern trong src/components/, kể cả khi chỉ đổi token hay prop.
---

# zw-build

Mọi thay đổi ở `src/components/**` đều đi qua cycle này, dù là component hay pattern, tạo mới hay enhance. Mỗi phase kết thúc bằng một **gate**. Chưa qua gate thì không sang phase sau.

```
0. Phân loại ─► 1. Spec ─► 2. Code ─► 3. Test ─► 4. Release ─► 5. Status
                   ▲                                              │
                   └────────── breaking change quay lại Spec ◄────┘
```

Trước khi làm, đọc file tham chiếu đúng loại:

- Component (`src/components/<category>/`): [references/component.md](references/component.md)
- Pattern (`src/components/patterns/`): [references/pattern.md](references/pattern.md)
- Ví dụ đi hết cycle với Button: [references/example-button.md](references/example-button.md)

Các quyết định gốc nằm trong vault (Definition of done, quy ước API, vai trò Figma): `/Volumes/KAFKA/Vault/10-projects/zweihander/v1-plan/issues/04-definition-of-done.md`, `05-api-conventions.md`, `09-figma-role.md`. Skill này là cách thực thi các quyết định đó. Nếu skill và vault mâu thuẫn, vault đúng: báo sếp và sửa skill.

## 0. Phân loại

Trả lời ba câu trước khi mở editor:

1. **Component hay pattern?** Pattern là section ghép từ nhiều component, không tự có hành vi.
2. **Tạo mới hay enhance?**
   - *Tạo mới:* có spec gốc ở uiguideline.com không? Có trong phạm vi 1.0 không (`zweihander-component-list.md`)? Ngoài phạm vi thì vẫn làm được, nhưng vào với status `experimental`.
   - *Enhance:* thay đổi có breaking không? Tra bảng breaking trong file tham chiếu. Breaking thì bắt đầu ở phase 1. Chỉ đổi token, màu hay khoảng cách thì đi thẳng phase 2.
3. **Có cần Figma trước không?** Thay đổi về hình ảnh (component mới, variant mới, đổi anatomy) thì vẽ Figma → sếp duyệt → code. Token luôn đi từ code sang Figma, không bao giờ ngược lại.

**Gate:** ghi được một câu dạng "<Tên> — <mới|enhance> — <breaking|không> — <status đích>".

## 1. Spec

Spec chính là file `<Name>.mdx` cạnh component. Không viết spec ở chỗ khác. Trang mẫu: `src/components/buttons/Button.mdx` và `ToggleButton.mdx`; khi phân vân, chép cấu trúc của chúng.

Trang component có ba tab, theo Material 3, dựng bằng docs blocks trong `.storybook/blocks/` (demo: Storybook *Internal / Docs blocks*):

```mdx
import { Meta, Canvas, Story, ArgTypes } from '@storybook/addon-docs/blocks'
import { Anatomy, DocTab, DocTabs, DoDont, SpecTable, States, Status } from '../../../.storybook/blocks'
import * as NameStories from './Name.stories'

<Meta of={NameStories} />

# Name

<DocTabs>
<DocTab value="overview">…</DocTab>
<DocTab value="specs">…</DocTab>
<DocTab value="guidelines">…</DocTab>
</DocTabs>
```

| Tab | Mục bắt buộc, theo thứ tự |
|---|---|
| **Overview**: component là gì | Một câu mô tả. `<Status of={NameStories} />` (đọc tag status trong `meta.tags`). `<Canvas>` story chính. `## Variants`: mỗi variant hoặc appearance một dòng "dùng khi nào", kèm canvas. `## Resources`: import, lệnh registry, source GitHub, spec uiguideline, Base UI nếu có, Figma (ghi "Not in the library yet" khi chưa có) |
| **Specs**: component được dựng thế nào | `## Anatomy` + `<Anatomy>`. `## Measurements`: một `<SpecTable>` mỗi size. `## Color`: một `<SpecTable>` mỗi variant. `## States` + `<States>` (enabled, hover, focus, pressed, disabled, cộng loading/invalid/selected nếu có). `## API` + `<ArgTypes of={NameStories} />`. `### Differences from the spec` ở cuối, **chỉ khi lệch** uiguideline |
| **Guidelines**: dùng thế nào cho đúng | `## When to use`, ít nhất một `<DoDont>`. `## When not to use`: dùng component nào thay thế. `## Accessibility`: bàn phím, role và state theo APG |

Quy tắc cho từng block:

- **Props sống trong `argTypes`.** Mỗi prop công khai có `description` trong `meta.argTypes` của story file. `<ArgTypes>` render bảng API từ đó, panel props của Playground đọc cùng nguồn qua `npm run playground:manifest`. Không viết bảng prop bằng tay trong MDX. Type và default thường do react-docgen suy ra; nó không đọc được props kiểu union (ví dụ `isIconOnly` bắt `aria-label`), khi đó khai báo thêm `table.type.summary`, `table.defaultValue.summary` và `control` cho mọi prop (xem `Button.stories.tsx`). Đổi story thì chạy `npm run playground:manifest` và commit `src/playground/manifest.json`.
- **Anatomy** render component thật, không dùng ảnh. Danh sách part (`name`, `selector`, `description`) export từ story file là `anatomyParts` (thêm vào `excludeStories`), kèm một story `Anatomy` tag `!dev` có `play` kiểm mỗi selector khớp đúng một phần tử khác nhau. Part không có element riêng (label là text node) thì story bọc nó trong `<span>`.
- **SpecTable** chỉ ghi tên token; giá trị đọc live từ CSS. Chỉ dùng token semantic hoặc token của tier (`--control-md`), không ghi biến nội bộ của component (`--button-bg`): chúng không resolve được ngoài component. Hover và pressed trộn màu bằng `color-mix` thì giải thích bằng chữ dưới `<States>`.
- **DoDont** lấy cả hai bên từ story thật. Story "Don't" tag `!dev` để ẩn khỏi sidebar và Playground, vẫn chạy test.
- `npm run docs:check` đỏ khi trang dùng `<DocTabs>` thiếu tab hoặc mục ở bảng trên, hoặc nhắc tới token không tồn tại.

Trang chưa migrate (chưa có `<DocTabs>`) giữ format cũ cho đến ticket migrate category của nó. Component mới luôn dùng ba tab.

Breaking change: sửa `argTypes` (và `### Differences from the spec` nếu có) **trước**, rồi mới sửa code.

**Gate:** `npm run docs:check` xanh; có lệch spec thì có `### Differences from the spec`. Mỗi câu trong `## Accessibility` đủ cụ thể để viết được một `play` kiểm nó.

## 2. Code

- Theo quy ước API trong file tham chiếu: tên prop, `variant`/`appearance`, `render` thay `asChild`, không `forwardRef`.
- Chỉ dùng token (`var(--…)`), không giá trị cứng cho màu, khoảng cách, radius hay font.
- File có hook hoặc state: dòng đầu là `'use client'`.
- Comment giải thích *vì sao*, không mô tả lại code.
- Cập nhật `registry.json`. Description **không ghi số lượng** (không viết "four sizes"), vì số lượng sẽ lệch khi code đổi.
- Component (không phải pattern): export trong `package.json#exports`, entry trong `vite.lib.config.ts` và `tsconfig.build.json`.
- Vùng bấm tối thiểu 44×44 khi `pointer: coarse`, bằng cách nới vùng bấm, không phóng to phần nhìn thấy.

**Gate:** các lệnh sau đều xanh.

```bash
npx tsc -b && npm run lint && npm run tokens:check && npm run registry:check
```

## 3. Test

Test nằm trong `<Name>.stories.tsx`, chạy qua addon-vitest. Test hành vi, không snapshot DOM.

- Story cho mọi variant, size và state: default, hover, active, focus-visible, disabled, loading/invalid nếu có, cả light lẫn dark.
- **Mỗi câu trong `## Accessibility` có ít nhất một `play` kiểm nó**, dùng `userEvent` cho bàn phím.
- a11y chạy ở chế độ `error`. Story nào phải tắt (ví dụ story đo contrast tự viết) thì đặt `a11y: { test: 'off' }` kèm comment lý do.
- Visual regression: mỗi component có một story đại diện trong `src/visual.test.tsx` (story nhiều variant và state nhất), chụp light và dark trên Chromium, so với baseline trong `src/__screenshots__/`. Component mới thì thêm một dòng vào bảng `STORIES`; test `every component has a visual story` đỏ nếu thiếu. Ảnh đổi đúng ý thì gắn label `update screenshots` vào PR: workflow Visual baselines chụp lại trên CI Linux và commit. Không cập nhật baseline trên Mac. Khi CI báo lệch, ảnh thật và ảnh diff nằm trong artifact `visual-diffs` của lượt chạy.

**Gate:**

```bash
npx vitest --project storybook run
npx vitest --project visual run
```

Lệnh đầu xanh trên cả ba trình duyệt. Lệnh sau chỉ có nghĩa trên CI, vì baseline sinh trên Linux: trên Mac nó báo lệch ở mọi ảnh. Trên PR, nó là required check `check`. Máy mới cần `npx playwright install chromium firefox webkit` một lần; chạy nhanh một engine thì thêm `--browser=chromium`.

## 4. Release

- Mọi PR đổi `src/` cần một changeset: `npx changeset`. PR chỉ sửa docs, test hoặc tooling thì dùng `npx changeset --empty`.
- Bậc bump: trước 1.0, breaking → `minor`, còn lại → `patch`. Sau 1.0 theo SemVer. Bảng thế nào là breaking nằm trong file tham chiếu.
- Nội dung changeset viết cho người dùng thư viện: cái gì đổi, và phải sửa code của họ thế nào. Viết bằng tiếng Anh, vì sẽ ra `CHANGELOG.md` công khai.
- Deprecate làm hai bước. Bản đầu: giữ API cũ, `console.warn` chỉ khi `import.meta.env.DEV`, ghi trong changeset. Bản kế tiếp: xoá. Không viết codemod cho đến khi có người dùng bên ngoài.

**Gate:** `npx changeset status --since=origin/main` qua.

## 5. Status

Mỗi story file mang đúng một tag status trong `meta.tags`, cạnh `'autodocs'` nếu có. Lọc theo status bằng bộ lọc tag trên sidebar.

| Status | Component | Pattern |
|---|---|---|
| `experimental` | Có story chạy được. API đổi tự do | Như component |
| `beta` | Đạt phase 1–4: đủ ba tab MDX, test xanh, a11y `error` | Không dùng |
| `stable` | Beta, cộng: xanh trên Chromium/Firefox/WebKit, có baseline visual regression, đã thử VoiceOver + Safari (ghi build-log), một tháng không có breaking change | Đạt phase 1–4, xanh ba trình duyệt, có baseline visual regression |
| `deprecated` | Có thay thế, ghi trong MDX. Xoá ở bản kế tiếp | Như component |

Đừng nâng status khi chưa đủ điều kiện. Không ghi "đã test với screen reader" khi chưa thật sự làm.

**Gate:** tag đúng với điều kiện ở trên.

## Kết thúc

1. Ghi một dòng vào `zweihander-build-log.md` trong vault: quyết định, chỗ lệch spec, việc chờ sếp duyệt.
2. Cập nhật thẻ trong `zweihander-kanban.md`.
3. Nếu đổi token hoặc prop có trong Figma: ghi việc sync Figma vào `_context.md` của dự án.
4. Thêm một dòng vào `/Volumes/KAFKA/Vault/_system/agent-log.md`, ghi sau commit cuối.

Checklist dán vào mô tả PR:

```
- [ ] Phân loại: <Tên> — <mới|enhance> — <breaking|không> — <status>
- [ ] MDX: component 3 tab Overview / Specs / Guidelines, `docs:check` xanh, props trong `argTypes`; pattern: biến thể / Props / Layout / Accessibility
- [ ] Code: token only, 'use client', registry (không số lượng), exports
- [ ] Story + play cho mỗi câu Accessibility; a11y error
- [ ] tsc, lint, tokens:check, registry:check, vitest storybook (3 trình duyệt), vitest visual (CI)
- [ ] Changeset (hoặc --empty)
- [ ] Status tag
- [ ] Figma sync (nếu đổi token/prop)
- [ ] Vault: build-log, kanban, agent-log
```
