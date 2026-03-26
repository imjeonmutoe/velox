export interface CheckPointSectionProps {
  /** 제품 이미지 URL */
  productImage?: string;
  /** 섹션 오버라이드 헤드라인 (기본: CHECK POINT) */
  headline?: string;
  /** 브랜드 강조 컬러 */
  themeColor?: string;
  /** 4~5가지 핵심 포인트 */
  points: string[];
}