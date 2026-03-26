export interface CertificationItem {
  /** 인증명 (초대형 텍스트로 표시) */
  name: string;
  /** 발급 기관 */
  authority: string;
  /** 아이콘 이모지 */
  icon?: string;
  /** 인증서 이미지 URL */
  image?: string;
}

export interface CertificationSectionProps {
  title?: string;
  subtitle?: string;
  certifications: CertificationItem[];
  themeColor?: string;
}