import React from 'react';
import styled from 'styled-components';
import { HeroSection } from '../../sections/HeroSection';
import { FeatureSection } from '../../sections/FeatureSection';
import { TrustSection } from '../../sections/TrustSection';
import { ReviewSection } from '../../sections/ReviewSection';
import { CTASection } from '../../sections/CTASection';
import { colors, typography, spacing } from '../../tokens';
import type { ElectronicsTemplateProps, Spec } from './types';

const SpecTable = styled.section`
  background: ${colors.neutral[900]};
  color: white;
  padding: ${spacing[16]} ${spacing[6]};
`;

const SpecInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SpecTitle = styled.h2`
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing[8]};
  text-align: center;
`;

const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: ${spacing[4]} 0;
  border-bottom: 1px solid ${colors.neutral[800]};
  &:last-child { border-bottom: none; }
`;

const SpecLabel = styled.dt`
  font-size: ${typography.fontSize.sm};
  color: ${colors.neutral[400]};
`;

const SpecValue = styled.dd`
  font-size: ${typography.fontSize.base};
  color: ${colors.neutral[100]};
`;

const defaultSpecs: Spec[] = [
  { label: '배터리', value: '5000mAh' },
  { label: '디스플레이', value: '6.7인치 AMOLED' },
  { label: '카메라', value: '200MP 메인 + 12MP 광각' },
  { label: '프로세서', value: 'Velox Chip X1' },
  { label: '저장공간', value: '256GB / 512GB' },
];

export const ElectronicsTemplate: React.FC<ElectronicsTemplateProps> = ({
  productName,
  tagline,
  price,
  originalPrice,
  productImage,
  specs = defaultSpecs,
  warranty = '1년 제조사 보증',
}) => {
  return (
    <div>
      <HeroSection
        badge="💻 신제품 출시"
        headline={productName}
        subheadline={tagline}
        ctaText="지금 구매하기"
        price={price}
        originalPrice={originalPrice}
        productImage={productImage}
      />
      <FeatureSection
        title="핵심 기능"
        features={[
          { icon: '⚡', title: '초고속 성능', description: '최신 칩셋으로 어떤 작업도 거뜬히.' },
          { icon: '🔋', title: '오래가는 배터리', description: '하루 종일 써도 충분한 배터리 수명.' },
          { icon: '📸', title: '프로급 카메라', description: '전문가 수준의 사진과 영상을 손안에서.' },
        ]}
      />
      <SpecTable>
        <SpecInner>
          <SpecTitle>상세 스펙</SpecTitle>
          <dl>
            {specs.map((s, i) => (
              <SpecRow key={i}>
                <SpecLabel>{s.label}</SpecLabel>
                <SpecValue>{s.value}</SpecValue>
              </SpecRow>
            ))}
          </dl>
        </SpecInner>
      </SpecTable>
      <TrustSection
        badges={[
          { icon: '🏆', label: '수상 경력', value: 'CES 2025' },
          { icon: '⭐', label: '평균 평점', value: '4.9' },
          { icon: '🛡️', label: '보증 기간', value: warranty },
        ]}
        certifications={['KC 인증', 'FCC 인증', 'CE 인증']}
      />
      <ReviewSection
        title="얼리어답터 후기"
        reviews={[
          { author: '오현우', rating: 5, date: '2025.03.01', content: '성능이 기대 이상입니다. 최고의 선택!', verified: true },
          { author: '임수아', rating: 5, date: '2025.02.25', content: '배터리가 정말 오래가요. 출장 중 꼭 필요한 폰.', verified: true },
          { author: '황재원', rating: 4, date: '2025.02.20', content: '카메라 화질이 놀랍습니다.', verified: true },
        ]}
      />
      <CTASection
        headline={`${productName} 지금 주문하세요`}
        subtext="오늘 주문 시 익일 배송 보장"
        urgencyText="📦 재고 한정 — 빠른 주문 필수"
        ctaText="지금 구매하기 →"
        price={price}
        originalPrice={originalPrice}
        note={`${warranty} · 7일 무조건 환불`}
      />
    </div>
  );
};

export default ElectronicsTemplate;