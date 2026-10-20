---
"zweihander": patch
---

Add charts (experimental): `LineChart` (line or area), `BarChart` (stacked or grouped), `PieChart` (pie or donut), `Sparkline` and `ChartLegend`, drawn in SVG on `d3-scale` and `d3-shape`. Each chart has a legend that toggles series, a crosshair tooltip and a "View as table" view, and draws in once on mount. New colour tokens `--chart-1` to `--chart-8` colour the series, each at least 3:1 against `--card` in both appearances. `Stats` takes a `chart` per stat, for a sparkline at the foot of the card. Install from npm with `zweihander/line-chart`, `zweihander/bar-chart`, `zweihander/pie-chart`, `zweihander/sparkline`, `zweihander/chart-legend`; `d3-scale` and `d3-shape` are new dependencies.
