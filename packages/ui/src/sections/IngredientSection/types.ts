/** 성분 카드 아이템 */
export interface IngredientItem {
  /** 성분명 */
  name: string;
  /** 원산지 */
  origin: string;
  /** 설명 */
  description: string;
  /** 이미지 URL */
  image?: string;
  /** 아이콘 이모지 */
  icon?: string;
  /** 함량 또는 특징 태그 */
  tags?: string[];
}

/** IngredientSection Props */
export interface IngredientSectionProps {
  /** 섹션 제목 */
  title?: string;
  /** 섹션 부제 */
  subtitle?: string;
  /** 성분 목록 */
  ingredients: IngredientItem[];
  /** 배경색 */
  backgroundColor?: string;
}