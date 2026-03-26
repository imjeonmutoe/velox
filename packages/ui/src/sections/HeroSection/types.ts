/** HeroSection 컴포넌트 Props */
export interface HeroSectionProps {
  /** 메인 제품 이미지 URL */
  productImage?: string;
  /** 메인 헤드라인 */
  headline: string;
  /** 헤드라인 내 강조할 단어 (카테고리 컬러로 표시) */
  headlineHighlight?: string;
  /** 서브 헤드라인 */
  subheadline: string;
  /** 뱃지 텍스트 */
  badgeText?: string;
  /** 뱃지 아이콘 (이모지) */
  badgeIcon?: string;
  /** 배경색 */
  backgroundColor?: string;
  /** 텍스트 색상 */
  textColor?: string;
  /** CTA 버튼 텍스트 */
  ctaText?: string;
  /** CTA 버튼 하단 보조 문구 */
  ctaSubText?: string;
  /** CTA 클릭 핸들러 */
  onCTAClick?: () => void;
  /** 카테고리 (컬러 테마 결정) */
  category?: 'food' | 'fashion' | 'electronics';
}