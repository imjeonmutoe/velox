export interface BenefitItem {
  icon: string;
  text: string;
}

export interface BenefitBannerSectionProps {
  benefits?: BenefitItem[];
  themeColor?: string;
}