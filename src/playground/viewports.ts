/** Device sizes, from the Safari frames in Figma. The keys are what `?vp=` holds. */
export const VIEWPORTS = {
  desktop: { label: 'Desktop', width: 1280, height: 800 },
  tablet: { label: 'Tablet', width: 834, height: 1194 },
  mobile: { label: 'Mobile', width: 393, height: 852 },
} as const
export type Viewport = keyof typeof VIEWPORTS
