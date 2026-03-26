export interface Spec {
  label: string;
  value: string;
}

export interface ElectronicsTemplateProps {
  productName: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  productImage?: string;
  specs?: Spec[];
  warranty?: string;
}