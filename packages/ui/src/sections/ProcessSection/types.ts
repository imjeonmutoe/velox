/** 공정 단계 아이템 */
export interface ProcessStep {
  /** 단계 번호 (자동 생성 가능하지만 override 가능) */
  step?: number;
  /** 단계 제목 */
  title: string;
  /** 단계 설명 */
  description: string;
  /** 아이콘 이모지 */
  icon: string;
  /** 강조 태그 */
  highlight?: string;
}

/** ProcessSection Props */
export interface ProcessSectionProps {
  /** 섹션 제목 */
  title?: string;
  /** 섹션 부제 */
  subtitle?: string;
  /** 공정 단계 목록 */
  steps: ProcessStep[];
  /** 배경색 */
  backgroundColor?: string;
  /** 강조 컬러 */
  accentColor?: string;
}