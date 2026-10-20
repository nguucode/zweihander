---
description: Chọn cách làm chart cho Zweihänder (Visualization + Spark, chỉ Bar/Line/Pie). So Recharts 3, ECharts 6 (Cloudflare Kumo dùng), visx, Nivo, Chart.js, uPlot, Tremor, shadcn charts, Observable Plot, d3 + SVG tự viết về bundle, SVG/Canvas, theme bằng CSS variable, a11y, bảo trì. Khuyến nghị tự dựng SVG trên d3-scale + d3-shape, Spark không dependency.
type: research
status: done
updated: 2026-10-20
access: internal
tags: [zweihander, research, chart, data-viz, tokens, accessibility, design-system]
---

# Chart cho Zweihänder: dùng thư viện hay tự dựng

Phạm vi: hai họ chart. **Visualization** là chart đầy đủ: trục, gridline, legend kèm tổng từng series ("● 2xx 2.56k"), tooltip, trục x theo thời gian ("Oct 19, 12:00"), bar chồng, đoạn nét đứt cho bucket cuối chưa đủ dữ liệu, danh sách "top N" nằm ngang (nhãn, thanh mảnh, giá trị). **Spark** là line/area tí hon trong KPI card: không trục, không nhãn, có vùng tô dưới đường mảnh, có trạng thái "No data". Đợt này chỉ làm Bar (kể cả stacked và nằm ngang), Line (kể cả area), Pie (kể cả donut).

Nguồn đọc ngày 2026-10-20: npm registry (version, ngày release, dependency, license), GitHub API (star, issue + PR đang mở, lần push cuối), bundlephobia API, mã nguồn trên GitHub và unpkg, tài liệu chính thức của từng thư viện, W3C/WAI. Số có ghi *tự đo* là do tôi tải file build chính thức từ unpkg hoặc esm.sh rồi đo bằng `gzip -9`. Không cài package nào vào repo. Dữ kiện Zweihänder lấy từ worktree `design-system-charts-6c39b6` (HEAD `235d87e`).

## Kết luận

**Tự dựng chart bằng SVG, dùng `d3-scale` + `d3-shape` cho phần toán, còn Spark viết tay không dependency.** Danh sách top N không phải chart: ghép từ `ProgressBar` có sẵn. Phương án dự phòng là bọc Recharts 3 theo kiểu shadcn. Không chọn ECharts, dù Cloudflare dùng nó.

Lý do, theo thứ tự nặng nhẹ:

1. **Token của Zweihänder chỉ sống ở CSS.** Dark mode là đổi class `.dark`, accent là `[data-accent]`, density là `data-density`, không có theme object JS (`src/tokens.css:1-7`). Chart vẽ bằng SVG thì nhận thẳng `fill="var(--chart-1)"`, đổi theme không cần React render lại. Chart vẽ bằng canvas (ECharts, Chart.js, uPlot) phải đọc màu ra bằng JS rồi vẽ lại mỗi lần đổi theme. ECharts còn không parse được `oklch()`: bộ parse màu của zrender 6.1.0 chỉ nhận `rgb`, `rgba`, `hsl`, `hsla` ([zrender `lib/tool/color.js`](https://unpkg.com/zrender@6.1.0/lib/tool/color.js), dòng 194-220), trong khi mọi màu của Zweihänder đều là oklch.
2. **Phạm vi nhỏ, phần khó đã có d3 lo.** Ba loại chart cơ bản không cần zoom, brush, map hay hàng triệu điểm, là những thứ khiến thư viện lớn đáng tiền. Phần khó thật sự là chọn tick đẹp và tick theo thời gian, đã nằm trong `d3-scale`. Path cho line, area, stack, arc nằm trong `d3-shape`. Hai gói tầm **19 KB gzip** (*tự đo*, chỉ các export cần), so với khoảng **63–157 KB** của Recharts 3 và **169–368 KB** của ECharts 6 (bảng dưới).
3. **Hợp với cách Zweihänder phát hành.** `package.json` hiện chỉ có hai dependency (`@base-ui/react`, `clsx`), và component còn được phát qua registry copy-source. Recharts 3 kéo theo Redux Toolkit, immer, reselect, react-redux ([npm](https://registry.npmjs.org/recharts)) vào mọi người dùng chart.
4. **A11y theo chuẩn của mình.** WAI yêu cầu chart có mô tả ngắn và mô tả dài ([WAI Complex Images](https://www.w3.org/WAI/tutorials/images/complex/)). Zweihänder đã có `Table`, nên "xem dạng bảng" là ghép component có sẵn, không phải chờ thư viện hỗ trợ.

Cái giá: tự dựng tốn thêm khoảng 600–800 dòng code so với bọc Recharts, tầm 2–3 ticket (*ước lượng*, xem §5). Rủi ro nằm ở các ca biên: nhãn trục đè nhau, tooltip sát mép, trục thời gian qua giờ DST. Nếu sếp ưu tiên ra nhanh hơn bundle và độ khớp token thì chọn Recharts 3: vẫn là SVG, vẫn nhận `var(--…)`, keyboard bật sẵn từ v3. Khi nào cần sankey, bản đồ, brush/zoom hoặc dữ liệu rất lớn thì thêm ECharts thành entry riêng, tuỳ chọn, giống cách Kumo bắt người dùng tự cài `echarts`. Không đưa nó vào lõi.

## Bảng so sánh

Bundle tính theo min + gzip. Các cột "theme bằng CSS var" và "dark mode không re-render" hỏi cùng một câu: màu có thể là `var(--token)` lúc chạy hay không.

| | Render | Bundle gzip | Theme bằng CSS var | A11y có sẵn | Stacked / time axis / nét đứt | Spark | Bản mới nhất · lần push cuối | License |
|---|---|---|---|---|---|---|---|---|
| **d3-scale + d3-shape + SVG tự viết** | SVG | **19.3 KB** chỉ các export cần (13.2 + 6.1, *tự đo* qua esm.sh); cả hai gói 16.0 + 5.7 ([bundlephobia](https://bundlephobia.com/package/d3-scale@4.0.2)) | Có, toàn quyền | Tự làm | `stack()`, `scaleTime`, nét đứt = tách 2 path | Có | d3-scale 4.0.2 (2021-09), d3-shape 3.2.0 (2022-12) · ổn định, ít đổi | ISC |
| **Recharts 3.10.1** | SVG | Cả gói 151.5 KB ([bundlephobia](https://bundlephobia.com/package/recharts@3.10.1)); một chart 62.6–67.6 KB/export (bundlephobia exports-sizes); esm.sh với `LineChart,Line` ra 154 KB (*tự đo*). Số thật với Vite: **unverified** | Có: shadcn dùng `var(--chart-1)` ([docs](https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/radix/chart.mdx)) | `accessibilityLayer` bật mặc định từ v3: thuộc tính a11y + phím ([migration guide](https://github.com/recharts/recharts/wiki/3.0-migration-guide)) | `stackId`; trục số/category, time cần tự format; nét đứt = 2 `<Line>` | Có (LineChart bỏ trục) | 2026-07-25 · 2026-10-19; 27.6k★, 501 issue+PR mở | MIT |
| **ECharts 6.1.0** (+ echarts-for-react 3.0.6) | Canvas (mặc định) hoặc SVG | Full 368 KB; `common` 240 KB; `simple` (line/bar/pie, canvas, không tooltip/legend) 169 KB (*tự đo* từ `dist/`); wrapper 3.6 KB | **Không**: màu đi qua JS, zrender không parse oklch; v6 có `setTheme()` đổi theme lúc chạy ([release note v6](https://echarts.apache.org/handbook/en/basics/release-note/v6-feature/)) | `aria` tự sinh mô tả, decal pattern cho mù màu, tắt mặc định ([docs](https://echarts.apache.org/handbook/en/best-practices/aria/)) | Đủ cả ba (Kumo đã làm, xem §2) | Có | 2026-05-19 · 2026-10-13; 67.5k★, 1481 mở | Apache-2.0 |
| **visx 4.0.0** | SVG | `@visx/xychart` 49.9 KB, chưa tính peer `@react-spring/web`; `@visx/shape` 10.7 KB ([bundlephobia](https://bundlephobia.com/package/@visx/xychart@4.0.0)) | Có (component SVG thấp tầng) | Không có sẵn | Có primitive, tự ráp | Có | 2026-06-11 · 2026-06-22; 21.1k★, 158 mở | MIT |
| **Nivo 0.99.0** | SVG / Canvas / HTML | `@nivo/bar` 89.7 KB, `@nivo/line` 96.0 KB, dùng chung `@nivo/core` nên cộng lại nhỏ hơn tổng (**unverified**) | Theme là object JS; truyền chuỗi `var()` ở bản SVG: **unverified** | Một số prop ARIA (**unverified** từng chart) | Có | Có | **2025-05-23** · 2026-07-21; 14.1k★ | MIT |
| **Chart.js 4.5.1** + react-chartjs-2 5.3.1 | Canvas | 68.4 KB ([bundlephobia](https://bundlephobia.com/package/chart.js@4.5.1)); UMD 70.5 KB (*tự đo*) | Không; `@kurkle/color` 0.3.4 không có oklch (*tự đo*: 0 lần xuất hiện) | Không: docs nói nội dung canvas không tới được screen reader ([docs](https://www.chartjs.org/docs/latest/general/accessibility.html)) | Có | Có | 2025-10-13 · 2026-10-04; 67.8k★, 611 mở | MIT |
| **uPlot 1.6.32** | Canvas | 21.9 KB ([bundlephobia](https://bundlephobia.com/package/uplot@1.6.32)) | Không | Không | Time series mạnh; pie không có | Có | 2025-03-14 · 2026-10-19; 10.6k★ | MIT |
| **Tremor** | SVG (Recharts) | `@tremor/react` 3.18.7: 222.5 KB | Qua class Tailwind | Theo Recharts | Theo Recharts | Có `SparkChart` | npm **2025-01-13**; bản mới là copy-paste, cần Tailwind + Recharts ([tremor.so](https://tremor.so/docs/visualizations/area-chart)) | Apache-2.0 |
| **shadcn/ui chart** | SVG (Recharts 3) | Bằng Recharts + ~373 dòng `chart.tsx` ([source](https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/ui/chart.tsx)) | **Có**: `--chart-1…5` và `--color-<key>` theo `ChartConfig` | Theo Recharts | Theo Recharts | Có | 2026-10-19 (repo); 126k★ | MIT |
| **Observable Plot 0.6.17** | SVG (DOM, không phải React) | 128.0 KB kể cả d3 ([bundlephobia](https://bundlephobia.com/package/@observablehq/plot@0.6.17)); UMD không kèm d3 68.7 KB (*tự đo*) | Có thể (SVG); **unverified** | `ariaLabel`, `ariaDescription`, mark tự sinh aria-label ([docs](https://github.com/observablehq/plot/blob/main/docs/features/accessibility.md)) | Có | Có | 2025-02-14 · 2026-09-01 | ISC |

Loại sớm: **Tremor** (cần Tailwind, mà Zweihänder không dùng CSS framework; gói npm không ra bản mới từ 2025-01). **Chart.js, uPlot** (canvas, không có a11y, không đọc được token). **Nivo** (17 tháng không release; theme bằng object JS). **Observable Plot** (API imperative trả về DOM node, docs nói SSR "chỉ thực tế cho plot đơn giản với ít dữ liệu", [getting-started](https://github.com/observablehq/plot/blob/main/docs/getting-started.md)). **visx** đứng giữa: không có gì visx làm được mà d3-scale + d3-shape + JSX không làm được, trong khi nó thêm một lớp abstraction và peer `react-spring` cho animation mà ta chưa cần.

Còn lại hai ứng viên thật: **tự dựng trên d3** và **Recharts 3**. ECharts được xét riêng ở §2 vì Cloudflare dùng nó.

## 1. Zweihänder hôm nay: ràng buộc cho chart

- **React 19, CSS Modules, không CSS framework.** Peer `react ^19`, dependency chỉ có `@base-ui/react` và `clsx` (`package.json`). Component phát qua npm và qua registry shadcn (`shadcn build --output site/r`).
- **Theme thuần CSS.** `tokens.css` ghi rõ: "There is no JavaScript theme object" (`src/tokens.css:4-6`). Dark mode là class `.dark` (`src/tokens.css:580`), accent là `[data-accent]`, density dùng hai switch `--density-default`/`--density-compact` (PR #138). Thư viện nào cần màu dạng JS sẽ phải có một lớp `getComputedStyle` + `MutationObserver` canh class `.dark`, `data-accent`, `data-density`. Lớp đó Zweihänder chưa từng cần.
- **Màu là oklch.** Mọi primitive và semantic đều viết `oklch(…)`. ECharts (zrender) và Chart.js (`@kurkle/color` 0.3.x) không parse được, nên phải đổi sang rgb trước khi đưa vào.
- **Chưa có palette data-viz.** `tokens/semantic.json` có 17 hue, mỗi hue 4 token (`--blue`, `--blue-foreground`, `--blue-subtle`, `--blue-text`), cộng các semantic status (`--success`, `--warning`, `--danger`, `--info`). Không có `--chart-*`. Xem §6.
- **Đồ có sẵn để ghép:** `Card` (khung KPI), `Stats` pattern (`src/components/patterns/application-ui/Stats.tsx`, chỗ đặt Spark), `ProgressBar` (thanh của top N), `Tooltip`/`Popover` (Base UI), `Table` (bảng dữ liệu thay thế cho chart), `EmptyState`, `Skeleton`.
- **Quy trình:** mỗi component phải có MDX 3 tab, Anatomy, SpecTable đọc token từ CSS, story test trên 3 engine, visual regression (`.claude/skills/project-flow/COMPONENTS.md`). SpecTable chỉ đọc được token mà CSS của component dùng qua `var()`. Màu chart nằm trong JS config thì SpecTable không thấy.

## 2. Cloudflare dùng gì: Kumo + ECharts

**Đã kiểm chứng.** `@cloudflare/kumo` tồn tại: bản 2.15.0 phát hành 2026-10-19, MIT, repo [cloudflare/kumo](https://github.com/cloudflare/kumo) (4.1k★). README gọi nó là "Cloudflare's component library", xây trên **Base UI**, cùng primitive library với Zweihänder ([README](https://github.com/cloudflare/kumo/blob/main/README.md)). `echarts ^6.0.0` là **peer dependency** ([npm](https://registry.npmjs.org/@cloudflare%2Fkumo)). Trang docs chart mở đầu bằng "Charts built on ECharts" ([charts/index.mdx](https://github.com/cloudflare/kumo/blob/main/packages/kumo-docs-astro/src/pages/charts/index.mdx)), và trang màu ghi "color tokens for Cloudflare dashboard charts" ([charts/colors.mdx](https://github.com/cloudflare/kumo/blob/main/packages/kumo-docs-astro/src/pages/charts/colors.mdx)). Vậy Cloudflare dashboard vẽ chart bằng ECharts qua Kumo. Tôi chưa mở được bundle của dash.cloudflare.com để đối chiếu trực tiếp (**unverified** ở mức production bundle), nhưng tài liệu chính chủ đã nói rõ.

Kumo làm chart thế nào (đọc `packages/kumo/src/components/chart/`):

- `EChart.tsx` gọi `echarts.init(el, isDarkMode ? "dark" : undefined)` và chạy lại khi `isDarkMode` đổi. Màu series lấy từ mảng hex `CHART_LIGHT_COLORS`/`CHART_DARK_COLORS` trong `Color.ts`. Nghĩa là dark mode do JS điều khiển qua prop, không qua CSS.
- Người dùng tự import và đăng ký module ECharts (`echarts.use([BarChart, LineChart, PieChart, …, CanvasRenderer, AriaComponent])`) để tree-shake. Docs khuyên dùng canvas.
- `TimeseriesChart.tsx` (1137 dòng) có đúng các thứ trong ảnh tham chiếu: trục thời gian, bar `stack: "total"`, prop `incomplete: { before?, after? }` vẽ phần chưa đủ dữ liệu thành series phụ `lineStyle: { type: "dashed" }` (dòng 404-462), `ariaDescription` đẩy vào `aria.label.description` của ECharts, `loading` với skeleton.
- **Legend là HTML, không phải ECharts**: `ChartLegend.SmallItem` (chấm + tên + giá trị) và `LargeItem` (`Legend.tsx`). Đây chính là kiểu "● 2xx 2.56k".
- Tooltip dùng primitive `Tooltip` của Base UI cho phần UI riêng (`TimeseriesChart.tsx:13`).
- Kumo **không có** sparkline (không file nào trong repo tên chứa `spark`). Có component `meter` riêng, nằm ngoài thư mục chart.
- Palette categorical 6 màu (Blue, Yellow, Pink, Purple, Teal, Orange), semantic 6 màu (Attention, Warning, Success, Neutral, Disabled, Skeleton), một thang sequential blues. Đo trên nền trắng, bản light có ba màu dưới 3:1: Yellow `#F5B647` 1.80, Teal `#50C3B6` 2.14, Pink `#E8649D` 3.12 vừa qua (*tự đo* theo công thức WCAG). Kumo bù bằng trang demo mô phỏng mù màu (`CategoricalCvdDemo`), nhưng về contrast thì không nên chép palette này.

**Vì sao không theo Cloudflare.** Kumo chọn ECharts vì nó cần thứ mà ta chưa cần: sankey, bản đồ choropleth/bubble, globe, brush chọn khoảng thời gian, markLine ngưỡng (`index.ts`). Với ba loại chart cơ bản, ECharts đem lại 169–240 KB gzip, canvas, và một lớp theme JS. Thứ đáng chép từ Kumo là **cách chia việc**: legend và tooltip dựng bằng HTML của design system, phần chưa đủ dữ liệu là một series nét đứt riêng, palette tách categorical / semantic / sequential.

## 3. Hai ứng viên còn lại

### 3.1 Recharts 3 (cách shadcn làm)

- **Theme:** màu là chuỗi đi thẳng vào thuộc tính SVG, nên `fill="var(--chart-1)"` chạy được, đổi `.dark` không cần render lại. shadcn làm đúng như vậy: `ChartConfig` sinh `--color-<key>` cho từng series qua thẻ `<style>`, có map `THEMES = { light: "", dark: ".dark" }` ([chart.tsx](https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/ui/chart.tsx), dòng 9 và 95-104). Docs dặn dùng `var(--chart-1)` thay cho `hsl(var(--chart-1))` từ Recharts v3.
- **A11y:** `accessibilityLayer` bật mặc định từ 3.0: thêm thuộc tính a11y và điều khiển bằng phím ([migration guide](https://github.com/recharts/recharts/wiki/3.0-migration-guide)). Đây là điểm cộng lớn nhất so với tự dựng.
- **Bundle:** điểm yếu. Bundlephobia đo cả gói 151.5 KB gzip, mỗi export chart 62.6–67.6 KB (vì chúng dùng chung store Redux). Qua esm.sh với `exports=LineChart,Line` vẫn ra 154 KB (*tự đo*), tức gần như không tree-shake được ở bundler đó. Số thật khi build bằng Vite của Zweihänder chưa đo (**unverified**). Nếu chọn hướng này thì ticket đầu phải đo.
- **Dependency:** 11 gói, gồm `@reduxjs/toolkit`, `immer`, `react-redux`, `reselect`, `victory-vendor` ([npm](https://registry.npmjs.org/recharts)).
- **Ca của ta:** stacked = `stackId`. Nét đứt cho bucket cuối = hai `<Line>`, một liền và một `strokeDasharray`, chung một điểm nối (cùng mẹo Kumo dùng). Trục thời gian: Recharts không có time scale như d3. Thường dùng `XAxis type="number" scale="time"` cộng `tickFormatter`, nên tick "đẹp" theo giờ/ngày phải tự lo (**unverified** cho v3: docs không nói rõ).
- **Phần vẫn phải viết:** legend kèm tổng, tooltip theo style của mình, top N, Spark, empty state, bảng dữ liệu, MDX, story. shadcn cần 373 dòng chỉ cho phần bọc.

### 3.2 Tự dựng: d3-scale + d3-shape + JSX

- `d3-scale` lo phần khó nhất: `scaleLinear().nice().ticks()` cho tick số đẹp, `scaleTime`/`scaleUtc` cho tick thời gian theo giờ, ngày, tuần, `scaleBand` cho bar. `d3-shape` lo `line()`, `area()`, `stack()`, `pie()`, `arc()` (bo góc, `padAngle` cho donut), curve `monotoneX`.
- React chỉ render `<path d={…}>`, `<rect>`, `<line>`, `<text>`. Không dùng d3 đụng DOM, nên không có xung đột giữa d3 và React.
- Màu, cỡ chữ trục, độ dày nét, gap giữa segment đều nằm trong `.module.css` và đọc token qua `var()`. SpecTable đọc được, `docs:check` kiểm được, Stylelint ép được. Hướng này là hướng duy nhất mà màu chart đi qua đúng đường ống token hiện có.
- Định dạng nhãn bằng `Intl.DateTimeFormat`/`Intl.NumberFormat` (`notation: "compact"` cho "2.56k"). Không cần `d3-format`/`d3-time-format` ở phần mình viết, dù `d3-scale` vẫn kéo chúng theo.
- Thiếu type: hai gói không kèm `.d.ts` (`types=false` trên npm). Thêm devDependency `@types/d3-scale`, `@types/d3-shape`.

## 4. Spark: tự viết, bất kể Visualization chọn gì

Spark không cần scale, trục hay tooltip. Nó chỉ là một đường nối giá trị chuẩn hoá về khung. Ước lượng **40–60 dòng TSX + 15–20 dòng CSS**, không dependency. Hai mẹo native giữ nó nhỏ:

- `viewBox="0 0 100 100"` với `preserveAspectRatio="none"` để SVG giãn theo card, kèm `vector-effect="non-scaling-stroke"` để nét vẫn mảnh khi giãn.
- Vùng tô: `fill: color-mix(in oklch, var(--spark-color) 16%, transparent)`, `--spark-color` mặc định là `--chart-1`. Dark mode tự đổi.

```tsx
// Phác thảo, chưa chạy: đủ để thấy kích thước.
export function Spark({ data, area = true, label, className }: SparkProps) {
  const pts = data.filter((d): d is number => d != null)
  if (pts.length < 2) return <span className={cn(styles.empty, className)}>No data</span>
  const min = Math.min(...pts), max = Math.max(...pts), span = max - min || 1
  const xy = pts.map((v, i) => `${(i / (pts.length - 1)) * 100},${100 - ((v - min) / span) * 100}`)
  const line = `M${xy.join('L')}`
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={cn(styles.spark, className)}
         role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {area && <path className={styles.area} d={`${line}L100,100L0,100Z`} />}
      <path className={styles.line} d={line} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
```

Ca biên cần test: mảng rỗng, một điểm, mọi giá trị bằng nhau (`span || 1` đặt đường ở đáy; có thể muốn ở giữa), `null` giữa chuỗi (bản phác bỏ qua; nếu cần thì vẽ ngắt đoạn). A11y: KPI card đã đọc con số rồi, nên mặc định `aria-hidden`; có `label` thì là `role="img"` kèm tóm tắt xu hướng.

Bọc Recharts cho Spark sẽ kéo cả store Redux vào mỗi KPI card chỉ để vẽ một `<path>`. Không nên.

## 5. Ước lượng công: tự dựng vs bọc Recharts

*Ước lượng* theo dòng TSX + CSS của component, chưa tính story, MDX, test. Mỗi dòng bảng là một ticket hợp lý trong project-flow.

| Phần | Tự dựng (d3) | Bọc Recharts |
|---|---|---|
| Spark | 60–80 | 60–80 (vẫn tự viết, §4) |
| Khung chung: `ResizeObserver`, margin, scale, trục, gridline, format `Intl` | 250–350 | 80–120 (cấu hình `XAxis`/`YAxis`/`CartesianGrid`) |
| Bar: dọc, stacked, ngang | 150–200 | 60–100 |
| Line / Area, đoạn nét đứt cho bucket chưa đủ | 120–180 | 60–100 |
| Pie / Donut | 100–140 | 50–80 |
| Tooltip theo con trỏ (tìm index gần nhất bằng `bisector`, chặn tràn mép) | 150–200 | 80–120 (`content` tuỳ biến) |
| Legend HTML kèm tổng | 50–70 | 50–70 (giống nhau, Kumo cũng tự làm) |
| A11y: `role="img"` + mô tả, nút "Xem dạng bảng" → `Table` | 60–100 | 60–100 (Recharts có thêm phím, bảng vẫn phải làm) |
| Điều hướng bằng phím qua từng điểm (tuỳ chọn) | 120–180 | 0 (có sẵn) |
| Top N (ghép `ProgressBar`) | 40–60 | 40–60 |
| **Tổng** | **~1,100–1,550** | **~550–850** |

Chênh khoảng 600–800 dòng, tầm 2–3 ticket. Đổi lại: bundle chart nhỏ hơn khoảng 45–140 KB gzip, không có Redux trong dependency, màu đi qua SpecTable và Stylelint như mọi component khác, test và visual regression ổn định hơn vì không có animation hay đo kích thước bất đồng bộ của thư viện. Phím qua từng điểm có thể để sau: WAI chỉ bắt buộc mô tả ngắn và mô tả dài (§7), không bắt buộc tooltip bằng phím.

Rủi ro của tự dựng, và cách chặn:
- Nhãn trục đè nhau khi hẹp: giảm số tick theo bề rộng (`ticks(Math.floor(width / 80))`), nhãn trục x không xoay.
- Trục thời gian qua DST hoặc lệch timezone: dùng `scaleUtc` hoặc `scaleTime` nhất quán với `Intl` có `timeZone`. Đây là câu hỏi mở.
- Phạm vi phình dần (scatter, heatmap, zoom): đặt luật trong spec. Khi cần thứ ngoài Bar/Line/Pie thì mở lại quyết định này, không vá dần.

## 6. Token màu cho data-viz

**Đo palette hiện có** (*tự đo*: oklch → sRGB theo OKLab, độ sáng và tỉ lệ theo WCAG). So token hue solid với `--card` (light `oklch(100% 0 0)`, dark `--gray-900` = `oklch(21% 0.034 264.665)`):

| Hue | Light | Dark | | Hue | Light | Dark |
|---|---|---|---|---|---|---|
| red | 4.76 | 3.72 | | cyan | 3.60 | 4.93 |
| orange | 3.59 | 4.94 | | sky | 4.02 | 4.42 |
| amber | 3.19 | 5.56 | | blue | 5.26 | 3.38 |
| yellow | **2.93** | 6.05 | | indigo | 6.44 | **2.76** |
| lime | 3.06 | 5.80 | | violet | 5.88 | 3.02 |
| green | 3.22 | 5.52 | | purple | 5.53 | 3.21 |
| emerald | 3.67 | 4.84 | | fuchsia | 4.66 | 3.81 |
| teal | 3.66 | 4.85 | | pink / rose | 4.54 / 4.51 | 3.91 / 3.93 |

`--<hue>` có **cùng một giá trị ở light và dark** (`src/tokens.css:538` và `:672`, cả hai là bước 600). Vì vậy không thể alias `--chart-n` thẳng vào `--<hue>`. Token chart phải chọn bước theo mode (ví dụ 600 ở light, 400–500 ở dark), giống cách Avatar solid đang làm (600 light, 400 dark, theo `_context.md`).

**Đề xuất token** (thêm, không đổi token cũ, nên thuộc quyền tự làm theo governance mục 4):

- `--chart-1` … `--chart-8`: categorical, mỗi mode một bước, alias về primitive hue. Mỗi màu ≥ 3:1 với `--card` ở mode của nó. Thứ tự xen kẽ sáng/tối và ấm/lạnh để hai series kề nhau khác nhau cả về độ sáng, không chỉ hue. Mặc định dùng 6, tối đa 8; nhiều hơn thì gộp "Other". Tham chiếu: Kumo 6 màu, shadcn 5 (`--chart-1…5`).
- `--chart-grid` (alias `--border`), `--chart-axis` (alias `--muted-foreground`, cho chữ trục), `--chart-cursor` (đường dọc theo con trỏ).
- Semantic: dùng lại `--success`, `--warning`, `--danger`, `--info` cho dữ liệu có cực tính (status 2xx/4xx/5xx), thêm `--chart-neutral` và `--chart-empty` (nền skeleton / "No data").
- Sequential: chưa làm, chưa có heatmap hay choropleth (YAGNI).
- Figma: `chart/1…8` vào collection Color Light/Dark, scope Fill + Stroke.

**Mù màu:** WCAG 1.4.1 cấm dùng màu làm cách duy nhất để truyền thông tin ([Understanding 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)). Nên legend luôn có nhãn chữ, tooltip ghi tên series, line có thể khác nhau bằng nét (liền, đứt, chấm) khi > 3 series, bar chồng có khe 1–2px màu `--card` giữa các segment. Bộ màu cuối nên chạy qua mô phỏng protan/deutan/tritan trước khi chốt. Bước này chưa làm (**unverified**).

## 7. Yêu cầu a11y

- **Tương phản phần tử đồ hoạ:** WCAG 1.4.11 yêu cầu "a contrast ratio of at least 3:1 against adjacent color(s)" cho phần đồ hoạ cần để hiểu nội dung ([Understanding 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)). Áp vào line, bar, slice so với nền card. Giữa hai segment kề nhau thì khe nền ở §6 giúp mỗi segment giáp nền thay vì giáp nhau. Đây là cách tôi suy ra từ chữ "adjacent", W3C không viết riêng cho chart.
- **Mô tả hai phần:** WAI xếp chart vào "complex images", cần "a two-part text alternative": mô tả ngắn để nhận diện và mô tả dài chứa thông tin cốt lõi ([WAI Complex Images](https://www.w3.org/WAI/tutorials/images/complex/)). Với Zweihänder: SVG có `role="img"` + `aria-label` (tiêu đề + khoảng thời gian), mô tả dài là `Table` dữ liệu sau nút "Xem dạng bảng" hoặc `aria-describedby` tới bảng ẩn.
- **Canvas:** Chart.js tự nhận nội dung canvas "will not be accessible to screen readers" và phải bù bằng ARIA hoặc fallback content ([Chart.js Accessibility](https://www.chartjs.org/docs/latest/general/accessibility.html)). Đây là lý do thứ hai, ngoài token, để tránh canvas.
- **Bàn phím:** tooltip không được là đường duy nhất để đọc giá trị. Có bảng thì đạt. Điều hướng bằng phím qua từng điểm (như `accessibilityLayer` của Recharts) là tốt hơn mức tối thiểu, có thể làm sau.
- **Motion:** nếu có animation vào cảnh, tôn trọng `prefers-reduced-motion`, như quy ước motion của dự án.

## 8. Câu hỏi mở cho sếp

1. Chốt tự dựng (d3) hay Recharts 3? Khuyến nghị là tự dựng. Chọn Recharts thì ticket đầu phải đo bundle thật bằng Vite.
2. Trục thời gian theo giờ của người xem hay UTC (Cloudflare cho chọn)? Ảnh hưởng `scaleTime` hay `scaleUtc` và `Intl` `timeZone`.
3. Điều hướng bằng phím qua từng điểm: làm ngay hay để sau, khi đã có bảng dữ liệu?
4. Chart là component `experimental` ngoài scope 1.0 (`zweihander-component-list.md` không có chart), nên cần đi qua Figma trước khi code (COMPONENTS.md §0)?
5. Palette `--chart-1…8`: tôi chọn bước và thứ tự rồi trình sếp duyệt, hay sếp đưa hướng màu trước?

## Nguồn

- Kumo: https://github.com/cloudflare/kumo, `packages/kumo/src/components/chart/{EChart.tsx,TimeseriesChart.tsx,Color.ts,Legend.tsx,index.ts}`, docs `packages/kumo-docs-astro/src/pages/charts/{index,colors}.mdx`; npm https://registry.npmjs.org/@cloudflare%2Fkumo
- ECharts: https://echarts.apache.org/handbook/en/basics/release-note/v6-feature/, https://echarts.apache.org/handbook/en/best-practices/aria/, https://unpkg.com/echarts@6.1.0/dist/, https://unpkg.com/zrender@6.1.0/lib/tool/color.js
- Recharts: https://github.com/recharts/recharts/wiki/3.0-migration-guide, https://bundlephobia.com/package/recharts@3.10.1
- shadcn chart: https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/ui/chart.tsx, https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/radix/chart.mdx
- visx: https://github.com/airbnb/visx; Nivo: https://github.com/plouc/nivo; uPlot: https://github.com/leeoniya/uPlot; Chart.js: https://www.chartjs.org/docs/latest/general/accessibility.html; Tremor: https://github.com/tremorlabs/tremor-npm, https://tremor.so/docs/visualizations/area-chart; Observable Plot: https://github.com/observablehq/plot/tree/main/docs
- d3: https://github.com/d3/d3-scale, https://github.com/d3/d3-shape; kích thước subset đo qua `https://esm.sh/<pkg>?bundle&exports=…`
- W3C: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html, https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html, https://www.w3.org/WAI/tutorials/images/complex/
- Số star, issue, ngày push: GitHub REST API `repos/<owner>/<repo>`, đọc 2026-10-20. Version, ngày release, dependency: npm registry, cùng ngày.
