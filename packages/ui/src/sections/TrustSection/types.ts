export interface TrustBadge {
  icon: string;
  label: string;
  value: string;
}

export interface TrustSectionProps {
  title?: string;
  badges: TrustBadge[];
  certifications?: string[];
}
