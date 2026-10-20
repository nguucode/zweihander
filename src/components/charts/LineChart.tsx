'use client'

import { CartesianChart, type CartesianChartProps } from './CartesianChart'

export interface LineChartProps extends CartesianChartProps {
  /** `area` fills under each line and keeps the y axis at zero. */
  appearance?: 'line' | 'area'
  /** Line only: fit the y axis to the data, for values far from zero such as latency. */
  isAutoDomain?: boolean
}

/** One or more series over time or categories, with a crosshair tooltip and a table view. */
export function LineChart({ appearance = 'line', isAutoDomain = false, ...props }: LineChartProps) {
  return <CartesianChart {...props} type={appearance} isAutoDomain={appearance === 'line' && isAutoDomain} />
}
