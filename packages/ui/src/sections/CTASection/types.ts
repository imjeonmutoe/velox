export interface CTASectionProps {
  headline: string;
  subtext?: string;
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  note?: string;
  price?: number;
  originalPrice?: number;
  urgencyText?: string;
}