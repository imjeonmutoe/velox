export interface BeforeAfterItem {
  label: string;
  beforeImage: string;
  afterImage: string;
  description?: string;
}

export interface BeforeAfterSectionProps {
  title?: string;
  subtitle?: string;
  items: BeforeAfterItem[];
}