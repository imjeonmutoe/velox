export interface HowToStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface HowToSectionProps {
  title?: string;
  subtitle?: string;
  steps: HowToStep[];
  accentColor?: string;
}