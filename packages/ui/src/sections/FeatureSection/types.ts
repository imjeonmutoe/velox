export interface Feature {
  icon?: string;
  title: string;
  description: string;
  image?: string;
}

export interface FeatureSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  accentColor?: string;
}