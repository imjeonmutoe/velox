export interface ProductShowImage {
  src?: string;
  gifUrl?: string;
  alt?: string;
  caption?: string;
}

export interface ProductShowSectionProps {
  headline?: string;
  images: ProductShowImage[];
  themeColor?: string;
}