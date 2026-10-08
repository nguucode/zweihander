# Tham chiếu: component

Dùng cho mọi thứ trong `src/components/<category>/`, trừ `patterns/`.

## Quy ước API

Nguồn: vault `v1-plan/issues/05-api-conventions.md` (sếp chốt 2026-09-25). Tóm tắt:

- **Tên prop.** Attribute HTML giữ tên HTML: `disabled`, `required`, `readOnly`, `name`, `type`… Phần còn lại theo uiguideline: `variant`, `appearance`, `size`, `startIcon`, `endIcon`, `isLoading`, `isFullWidth`, `validationState`, `helperText`, `label`. Boolean không có trong HTML dùng tiền tố `is`/`has`.
- **`variant`** là màu theo ý nghĩa: primary, accent, secondary, destructive; nhóm thông báo dùng info, success, warning, danger. **`appearance`** là kiểu: contained, outlined, ghost; input dùng outlined, filled, underlined, unstyled.
- **Composition** dùng `render` prop, không dùng `asChild`/`Slot`. Không `forwardRef`, vì React 19 nhận `ref` như prop.
- **Controlled.** Component bọc input thật dùng `value`/`defaultValue`/`onChange(event)`. Component dựng trên Base UI dùng tên của Base UI: `onValueChange`, `onCheckedChange`, `onOpenChange`.
- **Cấu trúc.** Prop phẳng (`options`, `items`), không compound component trước 1.0.
- **Lỗi input.** `validationState` (default, success, error) cộng `helperText`. Khi error thì có `aria-invalid`.
- **Luật a11y đưa vào type** khi làm được. Ví dụ: `isIconOnly: true` bắt buộc có `aria-label`, viết bằng union type (xem `Button.tsx`).

## Hành vi

Hành vi lấy từ Base UI (`@base-ui/react/*`). Zweihänder thêm lớp style và quyết định API. Không tự viết lại focus management, roving tabindex hay quản lý popover mà Base UI đã có. Khi Base UI làm sai semantics cho trường hợp của mình (ví dụ gắn `role="button"` lên `<a>`), tách nhánh và comment lý do ngay tại đó.

Mục `## Accessibility` trong MDX lấy từ pattern tương ứng của [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/): phím nào làm gì, role và state nào, focus đi đâu. Viết thành câu kiểm được, mỗi câu một `play`.

## Thế nào là breaking

| Thay đổi | Breaking? | Bump trước 1.0 |
|---|---|---|
| Xoá hoặc đổi tên prop; xoá một giá trị khỏi union (`variant`, `size`…) | Có | minor |
| Đổi giá trị mặc định của prop | Có | minor |
| Đổi element hoặc role được render (button ↔ a, thêm hoặc bỏ wrapper mà người dùng có thể đã style) | Có | minor |
| Đổi tên class hoặc CSS custom property công khai (`--button-*`) | Có | minor |
| Prop từ tuỳ chọn thành bắt buộc | Có | minor |
| Thêm prop tuỳ chọn; thêm giá trị mới vào union | Không | patch |
| Đổi màu, khoảng cách hay radius qua token, API giữ nguyên | Không, nhưng phải kiểm visual regression | patch |
| Sửa bug a11y làm thay đổi hành vi bàn phím | Ghi rõ trong changeset; coi là breaking nếu người dùng có thể đang dựa vào hành vi cũ | patch hoặc minor |

Sau 1.0: breaking → major, thêm → minor, sửa → patch.

## Status

Component dùng đủ bốn status: `experimental`, `beta`, `stable`, `deprecated`. Điều kiện từng bậc nằm trong SKILL.md, phase 5.
