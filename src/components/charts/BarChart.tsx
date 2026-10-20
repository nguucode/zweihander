'use client'

import { CartesianChart, type CartesianChartProps } from './CartesianChart'

export interface BarChartProps extends CartesianChartProps {
  /** `stacked` adds series into one bar per bucket; `grouped` puts them side by side. */
  layout?: 'stacked' | 'grouped'
}

/** Amounts per bucket or category, stacked or grouped, with a tooltip and a table view. The y axis always starts at zero. */
export function BarChart({ layout = 'stacked', ...props }: BarChartProps) {
  return <CartesianChart {...props} type="bar" isGrouped={layout === 'grouped'} />
}
