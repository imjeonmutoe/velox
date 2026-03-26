export const spacing = {
  // Named (semantic)
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '80px',
  xxl: '120px',
  section: '100px',
  // Numeric (px-based for inline styles)
  0: '0',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  56: '56px',
  64: '64px',
  80: '80px',
  96: '96px',
  120: '120px',
  // rem-based (legacy compat)
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  5: '1.25rem',
  6: '1.5rem',
  10: '2.5rem',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;