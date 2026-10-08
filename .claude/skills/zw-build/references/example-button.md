# Ví dụ: Button đi qua cycle

Button (`src/components/buttons/`) là component mẫu. Dưới đây là từng phase áp vào Button, chỉ ra file thật đáp ứng gate. Khi làm component khác, đối chiếu với file này để biết "đủ" trông thế nào.

## 0. Phân loại

> Button — mới (đợt 0) — không breaking — đích `stable`

Spec gốc: [uiguideline.com/components/button](https://www.uiguideline.com/components/button). Có trong phạm vi 1.0 (`zweihander-component-list.md`, mục Buttons).

Ví dụ enhance có breaking: `render` thay `asChild`. Quy ước API đổi trước (vault `05-api-conventions.md`), MDX §Differences ghi "It replaced `asChild` in 0.8", rồi code mới đổi.

## 1. Spec: `Button.mdx`

- `## Anatomy`: Container, Start/End icon, Label, Spinner.
- `## Props`: bảng prop kèm `<Controls>`.
- `## Differences from the spec`: hai size chứ không phải bốn, `disabled` chứ không phải `isDisabled`, thêm `isIconOnly`, thêm `render`, `accent` là neutral đảo màu, outlined/ghost primary dùng `--primary-text`.
- `## Accessibility`: các câu đều kiểm được, xem bảng ở phase 3.

## 2. Code: `Button.tsx`, `Button.module.css`

- Kiểu `ButtonProps` là union. `isIconOnly: true` bắt buộc có `aria-label`, nên luật a11y nằm ngay trong type.
- Hành vi lấy từ `@base-ui/react/button`. Riêng nhánh `href`/`render` tách sang `useRender`, vì Base UI sẽ gắn `role="button"` lên `<a>`. Comment trong code giải thích vì sao.
- CSS: mỗi variant đặt bốn biến (`--button-solid`, `--button-on-solid`, `--button-tone`, `--button-border`); appearance quyết định biến nào tô phần nào. Border luôn tồn tại, chỉ trong suốt khi không cần, nên đổi appearance không làm layout nhảy.
- Chưa đạt: thiếu `'use client'`. Registry description còn ghi "four sizes".

## 3. Test: `Button.stories.tsx`

Mỗi câu trong §Accessibility có một story kiểm nó:

| Câu trong §Accessibility | Story |
|---|---|
| Native button, `type="button"`, Enter và Space kích hoạt | `Default` |
| Icon `aria-hidden`, tên chỉ là label | `WithIcons` |
| Icon-only vuông, có tên | `IconOnly` |
| Loading: `aria-busy`, vẫn focus được, không chạy action | `Loading` |
| Disabled ra khỏi tab order | `Disabled` |
| Link disabled hoặc loading: bỏ `href`, thêm `aria-disabled` | `DisabledHref`, `DisabledRender` |
| `render` giữ semantics của element | `Render` |
| Label 4.5:1 ở rest, hover và active, 17 accent × 2 mode | `StateContrast` |

`StateContrast` là mẫu cho component có nhiều tổ hợp màu. Nó đọc màu mà trình duyệt đã resolve rồi tính contrast trong test, nên kiểm được CSS thật đang ship. Story này đặt `a11y: { test: 'off' }` kèm comment, vì chính nó đã làm việc kiểm contrast.

Chưa đạt: chỉ chạy trên Chromium, chưa có baseline visual regression (story đại diện sẽ là `Matrix`), chưa thử VoiceOver.

## 4. Release

Chưa có changeset nào, vì repo chưa cài Changesets. Khi có, thay đổi `render` ở trên sẽ được ghi thế này:

```md
---
'zweihander': minor
---

Button: `render` replaces `asChild`. Pass the element itself: `<Button render={<Link to="/settings" />}>`.
```

## 5. Status

Button hiện đạt `beta`: đủ phase 1–4 ở mức repo cho phép. Để lên `stable` còn thiếu ba trình duyệt, baseline visual regression, một lần thử VoiceOver + Safari, và một tháng không có breaking change.

```ts
const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['beta'],
  // ...
} satisfies Meta<typeof Button>
```
