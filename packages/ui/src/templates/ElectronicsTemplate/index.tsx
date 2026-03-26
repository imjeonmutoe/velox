import React from 'react';
import styled from 'styled-components';
import { HeroSection } from '../../sections/HeroSection';
import { BenefitBannerSection } from '../../sections/BenefitBannerSection';
import { CheckPointSection } from '../../sections/CheckPointSection';
import { FeatureDetailSection } from '../../sections/FeatureDetailSection';
import { DeliverySection } from '../../sections/DeliverySection';
import { CertificationSection } from '../../sections/CertificationSection';
import { ReviewSummarySection } from '../../sections/ReviewSummarySection';
import { FinalCTASection } from '../../sections/FinalCTASection';
import type { ElectronicsTemplateProps, Spec } from './types';

/* ── 스펙 테이블 ─────────────────────────────── */

const SpecSection = styled.section`
  background: #f8f9fa;
  padding: 80px 40px;
`;

const SpecInner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const SpecTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.025em;
  margin-bottom: 8px;
  text-align: center;
`;

const SpecSubtitle = styled.p`
  font-size: 15px;
  color: #888;
  text-align: center;
  margin-bottom: 32px;
`;

const SpecTable = styled.dl`
  margin: 0;
  padding: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e9e9e9;
`;

const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 0 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #f5f5f5;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 480px) {
    grid-template-columns: 110px 1fr;
    padding: 14px 16px;
  }
`;

const SpecLabel = styled.dt`
  font-size: 13px;
  color: #888;
  font-weight: 600;
  margin: 0;
  padding: 0;
  align-self: center;
`;

const SpecValue = styled.dd`
  font-size: 15px;
  color: #1a1a1a;
  font-weight: 500;
  margin: 0;
  padding: 0;
  align-self: center;
  word-break: keep-all;
`;

/* ─────────────────────────────────────────────── */

const THEME = '#0F3460';

const ELECTRONICS_IMAGES = {
  hero:      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
  front:     'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800',
  display:   'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800',
  battery:   'https://images.unsplash.com/photo-1563884072595-24d020dce72e?w=800',
  camera:    'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800',
  lifestyle: 'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?w=800',
};

const defaultSpecs: Spec[] = [
  { label: '배터리', value: '5000mAh, 45W 초고속 충전' },
  { label: '디스플레이', value: '6.7인치 AMOLED 120Hz' },
  { label: '카메라', value: '200MP 메인 + 12MP 광각' },
  { label: '프로세서', value: 'Velox Chip X1 (3nm)' },
  { label: '저장공간', value: '256GB / 512GB' },
  { label: '무게', value: '198g' },
  { label: '방수', value: 'IP68 (수심 2m, 30분)' },
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
      {/* [1] 첫 화면 */}
      <HeroSection
        smartstoreMode
        category="electronics"
        badgeText="신제품 출시"
        badgeIcon="⚡"
        headline={productName}
        subheadline={tagline}
        price={price}
        originalPrice={originalPrice}
        productImage={productImage ?? ELECTRONICS_IMAGES.hero}
      />

      {/* [2] 핵심 혜택 배너 */}
      <BenefitBannerSection
        themeColor={THEME}
        benefits={[
          { icon: '🚚', text: '익일출발' },
          { icon: '🛡️', text: '1년 보증' },
          { icon: '🏆', text: 'CES 수상' },
        ]}
      />

      {/* [3] CHECK POINT */}
      <CheckPointSection
        productImage={productImage ?? ELECTRONICS_IMAGES.front}
        themeColor={THEME}
        points={[
          '3나노 Velox Chip X1 — 전세대 대비 40% 빠른 성능',
          '5000mAh 대용량 + 45W 초고속 충전',
          '200MP AI 카메라 — 밤에도 낮처럼 선명',
          'IP68 방수 — 수심 2m 30분 견딤',
          'CES 2025 혁신상 수상',
        ]}
      />

      {/* [4] Point 1·2·3 상세 */}
      <FeatureDetailSection
        themeColor={THEME}
        points={[
          {
            title: '다른 차원의\n성능',
            description: `앱 전환, 게임, 영상 편집 — **무엇을 해도 버벅임 없이 부드럽습니다.** 기존 폰에서 느꼈던 답답함이 사라졌습니다. 경쟁 제품 대비 **40% 빠른 처리 속도**, 한 번 써보면 이전으로 돌아갈 수 없습니다.`,
            image: productImage ?? ELECTRONICS_IMAGES.display,
            callouts: [
              { label: '프로세서', text: 'Velox Chip X1' },
              { label: '공정', text: '3nm' },
            ],
          },
          {
            title: '하루 종일\n거뜬한 배터리',
            description: `충전기 챙기는 걱정, 이제 안 해도 됩니다. **출근부터 퇴근 후 저녁까지** 써도 배터리가 남아 있습니다. 경쟁 제품이 두 번 충전할 때 **이 폰은 하루를 버팁니다.**`,
            image: productImage ?? ELECTRONICS_IMAGES.battery,
            callouts: [
              { label: '용량', text: '5000mAh' },
              { label: '충전', text: '45W 초고속' },
            ],
          },
          {
            title: '어둠도\n두렵지 않은 카메라',
            description: `식당에서, 공연장에서, 밤 산책에서 — **빛이 없어도 선명한 사진**을 건집니다. "이게 폰으로 찍은 거야?" 소리를 자주 듣게 됩니다. **전문 카메라와 비교해도** 당당한 결과물입니다.`,
            image: productImage ?? ELECTRONICS_IMAGES.camera,
            callouts: [
              { label: '해상도', text: '200MP' },
              { label: '야간촬영', text: 'AI 강화' },
            ],
          },
        ]}
      />

      {/* 스펙 테이블 */}
      <SpecSection>
        <SpecInner>
          <SpecTitle>상세 스펙</SpecTitle>
          <SpecSubtitle>모든 사양을 투명하게 공개합니다</SpecSubtitle>
          <SpecTable>
            {specs.map((s, i) => (
              <SpecRow key={i}>
                <SpecLabel>{s.label}</SpecLabel>
                <SpecValue>{s.value}</SpecValue>
              </SpecRow>
            ))}
          </SpecTable>
        </SpecInner>
      </SpecSection>

      {/* [5] 배송/구성 신뢰 */}
      <DeliverySection
        themeColor={THEME}
        cutoffTime="오후 3시"
        deliveryTime="익일"
        benefits={['무료배송', '7일 무조건 환불', warranty]}
      />

      {/* [6] 인증/안전 */}
      <CertificationSection
        title="안심하고 사용하세요"
        themeColor={THEME}
        certifications={[
          { name: 'KC 인증', authority: '국가통합인증마크', icon: '🇰🇷' },
          { name: 'IP68 방수', authority: 'IEC 60529 국제 기준', icon: '💧' },
          { name: 'CES 2025 혁신상', authority: 'Consumer Electronics Show', icon: '🏆' },
        ]}
      />

      {/* [7] 후기 요약 */}
      <ReviewSummarySection
        title="구매자 후기"
        averageRating={4.9}
        keywords={['#성능최고', '#배터리오래감', '#카메라좋음', '#배송빠름', '#재구매의사있음']}
        reviews={[
          { author: '오현우', rating: 5, date: '2025.03.01', content: '성능이 기대 이상입니다. 최고의 선택!', verified: true },
          { author: '임수아', rating: 5, date: '2025.02.25', content: '배터리가 정말 오래가요. 출장 중 꼭 필요한 폰.', verified: true },
          { author: '황재원', rating: 4, date: '2025.02.20', content: '카메라 화질이 놀랍습니다.', verified: true },
        ]}
      />

      {/* [8] 마무리 */}
      <FinalCTASection
        themeColor={THEME}
        headline={`${productName}\n지금이 가장 좋은 타이밍입니다`}
        benefits={[
          '오늘 주문 시 익일 도착 (오후 3시 이전 주문)',
          `${warranty} + 7일 무조건 환불`,
          '박스 개봉 시 투명 케이스 기본 증정',
        ]}
      />
    </div>
  );
};

export default ElectronicsTemplate;