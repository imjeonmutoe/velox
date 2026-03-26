import type { IngredientItem } from '../../sections/IngredientSection/types';
import type { ProcessStep } from '../../sections/ProcessSection/types';

/** FoodTemplate Props */
export interface FoodTemplateProps {
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
  /** 성분 목록 (IngredientSection) */
  ingredients?: IngredientItem[];
  /** 생산 과정 (ProcessSection) */
  processSteps?: ProcessStep[];
  /** 섹션 표시 여부 */
  sections?: {
    showIngredient?: boolean;
    showProcess?: boolean;
    showTrust?: boolean;
    showReview?: boolean;
    showBeforeAfter?: boolean;
  };
  /** 리뷰 목록 */
  reviews?: Array<{
    author: string;
    rating: number;
    date: string;
    content: string;
    verified?: boolean;
  }>;
  /** CTA 하단 보조 문구 */
  ctaSubText?: string;
}