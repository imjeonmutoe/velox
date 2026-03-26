export interface Review {
  author: string;
  rating: number;
  date: string;
  content: string;
  avatar?: string;
  verified?: boolean;
}

export interface ReviewSectionProps {
  title?: string;
  reviews: Review[];
}