export const typography = {
  fontFamily: {
    sans: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    tight: 1.2,
    snug: 1.35,
    normal: 1.5,
    relaxed: 1.65,
    loose: 1.8,
  },
  letterSpacing: {
    tight: '-0.03em',
    normal: '0',
    wide: '0.05em',
  },
} as const;

export const fontSizes = {
  hero: { mobile: '36px', desktop: '60px' },
  h2: { mobile: '26px', desktop: '42px' },
  h3: { mobile: '20px', desktop: '28px' },
  body: '16px',
  small: '14px',
  badge: '12px',
} as const;