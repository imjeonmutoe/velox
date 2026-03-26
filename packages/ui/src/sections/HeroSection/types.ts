export interface HeroSectionProps {
  /** 제품 이미지 URL (풀스크린 배경으로 사용) */
  productImage?: string;
  /** 메인 헤드라인 */
  headline: string;
  /** 헤드라인 강조 단어 */
  headlineHighlight?: string;
  /** 서브 헤드라인 */
  subheadline?: string;
  /** 뱃지 텍스트 */
  badgeText?: string;
  /** 뱃지 아이콘 */
  badgeIcon?: string;
  /** 카테고리 */
  category?: 'food' | 'fashion' | 'electronics';
  /** 판매가 */
  price?: number;
  /** 정가 */
  originalPrice?: number;
  /** 평균 별점 */
  reviewScore?: number;
  /** 리뷰 수 */
  reviewCount?: number;
  /** 재구매율 */
  repurchaseRate?: number;
  /** 재고 수량 */
  stockCount?: number;
  /** 당일 배송 여부 */
  sameDayDelivery?: boolean;
  /** CTA 텍스트 */
  ctaText?: string;
  /** CTA 클릭 핸들러 */
  onCTAClick?: () => void;
  /** 보증 항목 */
  guarantees?: string[];
  /**
   * 스마트스토어 모드 — 가격/구매버튼/별점/배송 숨김
   * 스마트스토어 "상세정보" 영역 전용
   */
  smartstoreMode?: boolean;
}