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

Spec chính là file `<Name>.mdx` cạnh component. Không viết spec ở chỗ khác.

MDX của component bắt buộc có bốn mục:

| Mục | Nội dung |
|---|---|
| `## Anatomy` | Bảng tên từng part và vai trò |
| `## Props` | Bảng prop: values, default, ghi chú. Thêm `<Controls>` |
| `## Differences from the spec` | Mọi chỗ lệch uiguideline kèm lý do |
| `## Accessibility` | Hành vi bàn phím, role và state theo APG |

Pattern dùng bộ mục riêng: mỗi biến thể một mục kèm `<Canvas>`, rồi `## Props`, `## Layout` và `## Accessibility`. Xem file tham chiếu pattern.

Breaking change: sửa `## Props` (và `## Differences` nếu có) **trước**, rồi mới sửa code.

**Gate:** đủ các mục bắt buộc. Mỗi câu trong `## Accessibility` đủ cụ thể để viết được một `play` kiểm nó.

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
- Thay đổi về hình ảnh: kiểm ảnh visual regression của story đại diện. Nếu ảnh đổi đúng ý thì cập nhật baseline trên CI, không cập nhật trên Mac.

**Gate:**

```bash
npx vitest --project storybook run
```

Lệnh này xanh trên cả ba trình duyệt. Trên PR, nó là required check `check`.

## 4. Release

- Mọi PR đổi `src/` cần một changeset: `npx changeset`. PR chỉ sửa docs, test hoặc tooling thì dùng `npx changeset --empty`.
- Bậc bump: trước 1.0, breaking → `minor`, còn lại → `patch`. Sau 1.0 theo SemVer. Bảng thế nào là breaking nằm trong file tham chiếu.
- Nội dung changeset viết cho người dùng thư viện: cái gì đổi, và phải sửa code của họ thế nào. Viết bằng tiếng Anh, vì sẽ ra `CHANGELOG.md` công khai.
- Deprecate làm hai bước. Bản đầu: giữ API cũ, `console.warn` chỉ khi `import.meta.env.DEV`, ghi trong changeset. Bản kế tiếp: xoá. Không viết codemod cho đến khi có người dùng bên ngoài.

**Gate:** `npx changeset status --since=origin/main` qua.

## 5. Status

Mỗi story file mang đúng một tag status trong `meta.tags`, cạnh `'autodocs'` nếu có. Status hiện trên sidebar và trang docs.

| Status | Component | Pattern |
|---|---|---|
| `experimental` | Có story chạy được. API đổi tự do | Như component |
| `beta` | Đạt phase 1–4: đủ các mục MDX, test xanh, a11y `error` | Không dùng |
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
- [ ] MDX: đủ mục bắt buộc (component: Anatomy / Props / Differences / Accessibility; pattern: biến thể / Props / Layout / Accessibility)
- [ ] Code: token only, 'use client', registry (không số lượng), exports
- [ ] Story + play cho mỗi câu Accessibility; a11y error
- [ ] tsc, lint, tokens:check, registry:check, vitest storybook (3 trình duyệt)
- [ ] Changeset (hoặc --empty)
- [ ] Status tag
- [ ] Figma sync (nếu đổi token/prop)
- [ ] Vault: build-log, kanban, agent-log
```

## Chưa áp dụng được

Các luật dưới đây đã được sếp chốt ngày 2026-10-08, nhưng repo chưa có công cụ để thực thi. Khi làm component mà gặp chúng thì ghi chú trong PR, đừng chặn PR. Hạ tầng xong thì xoá mục tương ứng khỏi danh sách này.

- [ ] a11y `error` toàn cục trong `.storybook/preview.tsx` (12/62 story file chưa đặt `error` riêng; chưa chạy thử nên chưa biết bao nhiêu sẽ fail). Đã quyết từ 2026-09-25 trong DoD.
- [ ] Firefox và WebKit trong `vite.config.ts` `instances` và CI.
- [ ] Visual regression bằng `toMatchScreenshot`, baseline sinh trên CI Linux.
- [ ] `'use client'` cho các component hiện có.
- [ ] Changesets: cài, `.changeset/config.json`, bước CI.
- [ ] Status tag cho 47 component hiện có.
- [ ] Registry description bỏ số lượng (Button đang ghi "four sizes").