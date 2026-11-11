import type { ComponentProps } from 'react'

// The kit's icon module covers what components need (close, chevrons, status);
// a CRM needs a few more nouns. Simple 24px strokes, 1em in currentColor like the kit's.
const shapes = {
  home: 'M3 10.5 12 3l9 7.5M5 9v11h5v-6h4v6h5V9',
  chart: 'M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3',
  users: 'M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.6a3.5 3.5 0 0 1 0 6.8',
  lead: 'M4 5h16v12H8l-4 3V5ZM8 9h8M8 13h5',
  megaphone: 'M3 10v4h3l7 4V6L6 10H3ZM17 9a4 4 0 0 1 0 6M6 14l1 5h3l-1-4',
  appraisal: 'M4 4h16v16H4zM8 15l3-3 2 2 4-5',
  listing: 'M5 4h14v16H5zM9 8h6M9 12h6M9 16h4',
  door: 'M5 20h14M7 20V4h10v16M14 12h.01',
  offer: 'M3 12 12 3h8v8l-9 9-8-8ZM16 7.5h.01',
  vendor: 'M4 9h16l-1.5-5h-13L4 9Zm0 0v11h16V9M9 20v-6h6v6',
  key: 'M14 10a4 4 0 1 1-1.2-2.85L21 15v3h-3v-2h-2v-2h-2',
  wallet: 'M4 7h15a1 1 0 0 1 1 1v11H4V7Zm0 0 12-3v3M16 13h.01',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  message: 'M4 5h16v11H9l-5 4V5Z',
  shield: 'M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Z',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2',
  lock: 'M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  download: 'M12 4v11M7 10l5 5 5-5M5 20h14',
  filter: 'M4 5h16l-6 8v6l-4-1v-5L4 5Z',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6a7 7 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.07-.4.1-.8.1-1.2Z',
  qr: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2',
  wifiOff: 'M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.7M19 13a10 10 0 0 0-2.3-1.6M2 9.5a15 15 0 0 1 4.5-2.8M22 9.5A15 15 0 0 0 11 5.1M12 20h.01',
  arrowLeft: 'M19 12H5M11 6l-6 6 6 6',
  pin: 'M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12ZM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  board: 'M4 4h4v16H4zM10 4h4v10h-4zM16 4h4v13h-4z',
  list: 'M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01',
  bond: 'M3 7h18v10H3zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 10v4M18 10v4',
} as const

export type GlyphName = keyof typeof shapes

export function Glyph({ name, ...props }: { name: GlyphName } & ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={shapes[name]} />
    </svg>
  )
}
