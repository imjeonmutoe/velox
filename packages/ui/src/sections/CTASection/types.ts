export interface CTASectionProps {
  headline: string;
  subtext?: string;
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  note?: string;
  price?: number;
  originalPrice?: number;
  stockCount?: number;
  todayBenefit?: string;
  guarantees?: string[];
  category?: 'food' | 'fashion' | 'electronics';
}