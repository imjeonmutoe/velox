import React from 'react';
import { HeroSection } from '../../sections/HeroSection';
import { ProblemSection } from '../../sections/ProblemSection';
import { IngredientSection } from '../../sections/IngredientSection';
import { ProcessSection } from '../../sections/ProcessSection';
import { TrustSection } from '../../sections/TrustSection';
import { ReviewSection } from '../../sections/ReviewSection';
import { CTASection } from '../../sections/CTASection';
import { formatPrice } from '@velox/core';
import type { FoodTemplateProps } from './types';

const defaultIngredients = [
  {
    icon: '🍵',
    name: '유기농 원료',
    origin: '국내산',
    description: '엄선된 국내산 유기농 원료를 사용합니다.',
    tags: ['유기농', '무농약'],
  },
];

const defaultProcessSteps = [
  { icon: '🌱', title: '원료 수확', description: '최상의 시기에 직접 수확합니다.', highlight: 'STEP 1' },
  { icon: '🔬', title: '품질 검사', description: '모든 원료를 철저히 검사합니다.', highlight: 'STEP 2' },
  { icon: '⚙️', title: '저온 제조', description: '영양소를 그대로 담아 제조합니다.', highlight: 'STEP 3' },
  { icon: '📦', title: '신선 포장', description: '산화 방지 포장으로 신선도 유지.', highlight: 'STEP 4' },
];

export const FoodTemplate: React.FC<FoodTemplateProps> = ({
  productName,
  tagline,
  price,
  originalPrice,
  productImage,
  headlineHighlight,
  badgeText = '🌿 자연 유래',
  badgeIcon,
  themeColor = '#2D6A4F',
  ingredients = defaultIngredients,
  processSteps = defaultProcessSteps,
  sections = {},
  reviews,
  ctaSubText = '30일 환불 보장 · 카드 무이자 12개월',
}) => {
  const {
    showIngredient = true,
    showProcess = true,
    showTrust = true,
    showReview = true,
  } = sections;

  return (
    <div>
      {/* 1. HeroSection */}
      <HeroSection
        category="food"
        badgeText={badgeText}
        badgeIcon={badgeIcon}
        headline={productName}
        headlineHighlight={headlineHighlight}
        subheadline={tagline}
        ctaText={`지금 구매하기 — ${formatPrice(price)}`}
        ctaSubText={ctaSubText}
        productImage={productImage}
      />

      {/* 2. ProblemSection */}
      <ProblemSection
        title="이런 분들께 추천합니다"
        problems={[
          { icon: '😩', text: '다이어트를 해도 요요가 반복됩니다' },
          { icon: '😴', text: '만성 피로로 일상이 힘들어요' },
          { icon: '🤔', text: '어떤 건강식품이 나에게 맞는지 모르겠어요' },
        ]}
        solutionText={`✅ ${productName}이 해결해드립니다`}
      />

      {/* 3. IngredientSection */}
      {showIngredient && (
        <IngredientSection
          title="엄선된 원재료"
          subtitle="자연에서 온 가장 순수한 성분만 담았습니다"
          ingredients={ingredients}
        />
      )}

      {/* 4. ProcessSection */}
      {showProcess && (
        <ProcessSection
          title="믿을 수 있는 생산 과정"
          subtitle="원료 수확부터 포장까지 직접 관리합니다"
          steps={processSteps}
          accentColor={themeColor}
        />
      )}

      {/* 5. TrustSection */}
      {showTrust && (
        <TrustSection
          title="숫자로 증명합니다"
          badges={[
            { icon: '👥', label: '누적 구매자', value: '12,000+' },
            { icon: '⭐', label: '평균 평점', value: '4.9' },
            { icon: '🔄', label: '재구매율', value: '78%' },
            { icon: '📦', label: '당일 배송', value: '95%' },
          ]}
          certifications={['식약처 허가', 'GMP 인증', 'HACCP 인증', 'ISO 22000']}
        />
      )}

      {/* 6. ReviewSection */}
      {showReview && reviews && (
        <ReviewSection title="실제 구매자 후기" reviews={reviews} />
      )}

      {/* 7. CTASection */}
      <CTASection
        headline={`${productName}\n지금 시작하세요`}
        subtext="오늘 주문 시 무료 배송 + 사은품 증정"
        urgencyText="⚡ 재고 한정 — 오늘만 특가"
        ctaText="지금 구매하기 →"
        price={price}
        originalPrice={originalPrice}
        note={ctaSubText}
      />
    </div>
  );
};

export default FoodTemplate;