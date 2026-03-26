export interface HookSectionProps {
  /** 메인 훅 카피 (20자 이내 권장) */
  headline: string;
  /** 보조 텍스트 */
  subtext?: string;
  /** 배경 이미지 URL */
  backgroundImage?: string;
  /** 배경 GIF URL (우선 적용) */
  backgroundGif?: string;
  /** 브랜드 컬러 (배경 이미지 없을 때 사용) */
  themeColor?: string;
}