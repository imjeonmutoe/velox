export interface Review {
  author: string;
  rating: number;
  date: string;
  content: string;
  image?: string;
  verified?: boolean;
  option?: string;
}

export interface ReviewSectionProps {
  title?: string;
  averageRating?: number;
  totalCount?: number;
  reviews: Review[];
}