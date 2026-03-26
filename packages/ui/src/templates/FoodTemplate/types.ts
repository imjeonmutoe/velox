import type { IngredientItem } from '../../sections/IngredientSection/types';
import type { ProcessStep } from '../../sections/ProcessSection/types';

/** FoodTemplate Props */
export interface FoodTemplateProps {
  /** 플랫폼 모드: smartstore (스마트스토어 최적화) | wadiz (와디즈/자사몰) */
  mode?: 'smartstore' | 'wadiz';
  /** 제품명 */
  productName: string;
  /** 태그라인 */
  tagline: string;
  /** 판매 가격 */
  price: number;
  /** 원가 (할인 표시용) */
  originalPrice?: number;
  /** 제품 이미지 URL */
  productImage?: string;
  /** 헤드라인 강조 단어 */
  headlineHighlight?: string;
  /** 뱃지 텍스트 */
  badgeText?: string;
  /** 뱃지 아이콘 */
  badgeIcon?: string;
  /** 카테고리 테마 컬러 */
  themeColor?: string;
  /** 평균 별점 */
  reviewScore?: number;
  /** 리뷰 수 */
  reviewCount?: number;
  /** 재구매율 */
  repurchaseRate?: number;
  /** 재고 수량 */
  stockCount?: number;
  /** 성분 목록 (IngredientSection) */
  ingredients?: IngredientItem[];
  /** 생산 과정 (ProcessSection) */
  processSteps?: ProcessStep[];
  /** 섹션 표시 여부 */
  sections?: {
    showReview?: boolean;
  };
  /** 리뷰 목록 */
  reviews?: Array<{
    author: string;
    rating: number;
    date: string;
    content: string;
    verified?: boolean;
    option?: string;
    image?: string;
  }>;
  /** CTA 하단 보조 문구 */
  ctaSubText?: string;
}