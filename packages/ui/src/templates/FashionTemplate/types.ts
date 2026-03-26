export interface FashionTemplateProps {
  brandName: string;
  productName: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  productImage?: string;
  colors?: string[];
  sizes?: string[];
}