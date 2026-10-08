# Tham chiếu: pattern

Dùng cho `src/components/patterns/**`. Pattern là section ghép từ nhiều component (tầng "organisms"), ví dụ PageHeading, AppShell, FormLayouts. Cycle giống component, chỉ khác ở các điểm dưới đây.

## Khác component ở đâu

| | Component | Pattern |
|---|---|---|
| Hành vi | Từ Base UI, theo APG | Không có hành vi riêng. Mọi tương tác đến từ component bên trong |
| MDX | Anatomy / Props / Accessibility, thêm Differences khi lệch spec | Mỗi biến thể một mục kèm `<Canvas>`, rồi Props / Layout / Accessibility. Thêm dòng `npx shadcn add` ở đầu |
| A11y | Bàn phím, role, state | Landmark (`header`, `nav`, `main`), thứ tự heading, focus order khi chuyển layout, reflow ở 320px |
| API | Prop phẳng | Chủ yếu là slot nhận node: `actions`, `meta`, `tabs`, `breadcrumbs`. Pattern không sở hữu dữ liệu |
| Test | Mỗi câu Accessibility một `play` tương tác | Cấu trúc (role, landmark, heading level), layout ở breakpoint, và nội dung khó: rỗng, rất dài, lỗi |
| Phát hành | npm `exports` và registry | Chỉ registry. Không thêm vào `package.json#exports` |
| Status | `experimental` → `beta` → `stable` | `experimental` → `stable` |

## Spec

Nếu pattern lấy cảm hứng từ một nguồn (Tailwind UI Application UI, uiguideline…), ghi nguồn ở đầu MDX. Mục `## Differences from the spec` chỉ cần khi có nguồn spec cụ thể.

`## Layout` ghi rõ breakpoint, cái gì xếp chồng, cái gì ẩn, và vì sao. Đây là phần dễ lệch nhất giữa code và docs.

## Code

- Chỉ ghép component đã có của Zweihänder. Cần một mảnh UI chưa có thì làm component trước, theo cycle component, rồi mới dùng trong pattern.
- Slot nhận `ReactNode` và render nguyên. Không bọc lại hay đổi thứ tự những gì người dùng truyền vào.
- `registryDependencies` khai báo đủ mọi component bên trong. `registry:check` sẽ bắt nếu thiếu.

## Test

- Kiểm cấu trúc bằng role: `getByRole('heading', { level: 1 })`, `getByRole('navigation', { name: 'Breadcrumb' })`.
- Kiểm layout bằng kích thước thật (`getBoundingClientRect`) hoặc computed style, không dùng class name.
- Mỗi pattern ít nhất một story với nội dung khắc nghiệt: chuỗi rất dài không có khoảng trắng, danh sách rỗng, hành động nhiều hơn chỗ chứa.

## Breaking

Đổi tên hoặc xoá slot, đổi landmark hay heading level mặc định, đổi cấu trúc DOM mà người dùng copy-source có thể đã sửa. Vì pattern phát hành dạng copy-source, changeset phải ghi rõ đoạn code người dùng cần chép lại.
