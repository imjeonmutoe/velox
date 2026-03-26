export const colors = {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    900: '#7c2d12',
  },
  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    1000: '#000000',
  },
  success: { 500: '#22c55e' },
  error: { 500: '#ef4444' },
} as const;

export const categoryColors = {
  food: {
    primary: '#2D6A4F',
    secondary: '#74C69D',
    accent: '#FFB703',
    background: '#F8F9FA',
  },
  fashion: {
    primary: '#1A1A2E',
    secondary: '#E94560',
    accent: '#F5A623',
    background: '#FAFAFA',
  },
  electronics: {
    primary: '#0F3460',
    secondary: '#533483',
    accent: '#E94560',
    background: '#F0F4F8',
  },
} as const;

export type Category = keyof typeof categoryColors;