export interface FeatureCallout {
  label: string;
  text: string;
}

export interface FeatureDetailPoint {
  /** 기능명 — 초대형 텍스트로 표시 */
  title: string;
  /** 설명 텍스트 (**굵게** 마크다운 지원) */
  description: string;
  /** 제품 클로즈업 이미지 */
  image?: string;
  /** 콜아웃 말풍선 */
  callouts?: FeatureCallout[];
}

export interface FeatureDetailSectionProps {
  points: FeatureDetailPoint[];
  themeColor?: string;
}