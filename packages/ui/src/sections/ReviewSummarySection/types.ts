export interface ReviewItem {
  author: string;
  rating: number;
  date: string;
  content: string;
  verified?: boolean;
  option?: string;
}

export interface ReviewSummarySectionProps {
  title?: string;
  averageRating: number;
  totalCount?: number;
  keywords?: string[];
  reviews: ReviewItem[];
}