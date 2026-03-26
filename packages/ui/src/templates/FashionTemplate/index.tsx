import React from 'react';
import { HeroSection } from '../../sections/HeroSection';
import { FeatureSection } from '../../sections/FeatureSection';
import { TrustSection } from '../../sections/TrustSection';
import { ReviewSection } from '../../sections/ReviewSection';
import { CTASection } from '../../sections/CTASection';
import type { FashionTemplateProps } from './types';

export const FashionTemplate: React.FC<FashionTemplateProps> = ({
  brandName,
  productName,
  tagline,
  price,
  originalPrice,
  productImage,
}) => {
  return (
    <div>
      <HeroSection
        badge={`✨ ${brandName}`}
        headline={productName}
        subheadline={tagline}
        ctaText="지금 구매하기"
        price={price}
        originalPrice={originalPrice}
        productImage={productImage}
      />
      <FeatureSection
        title="디자인 철학"
        features={[
          { icon: '🧵', title: '프리미엄 소재', description: '최고급 원단을 사용해 피부에 닿는 느낌이 다릅니다.' },
          { icon: '✂️', title: '퍼펙트 핏', description: '한국인 체형에 맞게 설계된 패턴으로 완벽한 실루엣.' },
          { icon: '♻️', title: '지속가능 패션', description: '환경을 생각한 친환경 제작 공정.' },
        ]}
      />
      <TrustSection
        badges={[
          { icon: '🏆', label: '브랜드 수상', value: '2024 K-Fashion' },
          { icon: '👗', label: '누적 판매', value: '50,000+' },
          { icon: '⭐', label: '평균 평점', value: '4.8' },
        ]}
      />
      <ReviewSection
        title="스타일리스트 추천 후기"
        reviews={[
          { author: '최유진', rating: 5, date: '2025.02.01', content: '핏이 정말 완벽해요. 여러 색상 구매했습니다.', verified: true },
          { author: '강민서', rating: 5, date: '2025.01.28', content: '소재가 고급스럽고 착용감이 최고입니다.', verified: true },
          { author: '정다은', rating: 4, date: '2025.01.20', content: '디자인이 예쁘고 실용적이에요.', verified: true },
        ]}
      />
      <CTASection
        headline="나만의 스타일을 완성하세요"
        subtext="오늘 구매 시 무료 배송 + 포장 업그레이드"
        urgencyText="🔥 한정 수량 판매 중"
        ctaText="지금 구매하기 →"
        price={price}
        originalPrice={originalPrice}
        note="30일 무료 반품 · 정품 보증"
      />
    </div>
  );
};

export default FashionTemplate;