import React from 'react';
import { MotionConfig } from 'framer-motion';
import { HeroSection } from '../../sections/HeroSection';
import { BenefitBannerSection } from '../../sections/BenefitBannerSection';
import { CheckPointSection } from '../../sections/CheckPointSection';
import { FeatureDetailSection } from '../../sections/FeatureDetailSection';
import { CertificationSection } from '../../sections/CertificationSection';
import { ReviewSummarySection } from '../../sections/ReviewSummarySection';
import { FinalCTASection } from '../../sections/FinalCTASection';
import { HookSection } from '../../sections/HookSection';
import { ProductShowSection } from '../../sections/ProductShowSection';
import { LifestyleSection } from '../../sections/LifestyleSection';
import { CTASection } from '../../sections/CTASection';
import type { FoodTemplateProps } from './types';

const FOOD_IMAGES = {
  hero:      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
  nature:    'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800',
  closeup:   'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800',
  farm:      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
  process:   'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800',
  lifestyle: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800',
};

export const FoodTemplate: React.FC<FoodTemplateProps> = ({
  mode = 'smartstore',
  productName,
  tagline,
  price,
  originalPrice,
  productImage,
  headlineHighlight,
  badgeText = '🌿 자연 유래',
  badgeIcon,
  themeColor = '#2D6A4F',
  reviewScore = 4.9,
  reviewCount,
  repurchaseRate,
  stockCount,
  sections = {},
  reviews,
}) => {
  const { showReview = true } = sections as { showReview?: boolean };

  const defaultReviews = [
    { author: '김지현', rating: 5, date: '2025.01.15', content: '진짜 2주 만에 변화가 느껴졌어요! 꾸준히 먹으니까 확실히 달라요.', verified: true, option: '30포 / 녹차맛' },
    { author: '이민준', rating: 5, date: '2025.01.10', content: '배송 빠르고 효과도 좋아요. 재구매 확정!', verified: true },
    { author: '박소연', rating: 4, date: '2025.01.05', content: '꾸준히 먹고 있습니다. 피부가 좋아졌어요.', verified: true },
  ];

  if (mode === 'wadiz') {
    return (
      <div>
        {/* [1] 풀스크린 훅 */}
        <HookSection
          headline={tagline}
          subtext={productName}
          backgroundImage={productImage ?? FOOD_IMAGES.hero}
          themeColor={themeColor}
        />

        {/* [2] 룩북형 이미지 */}
        <ProductShowSection
          headline={productName}
          themeColor={themeColor}
          images={[
            { src: productImage ?? FOOD_IMAGES.nature, caption: '제주 청정 자연에서' },
            { src: productImage ?? FOOD_IMAGES.closeup, caption: '원물 그대로' },
            { src: productImage ?? FOOD_IMAGES.farm, caption: '농장 직영' },
          ]}
        />

        {/* [3] 기능 상세 */}
        <FeatureDetailSection
          themeColor={themeColor}
          points={[
            {
              title: '자연이 만든\n순수한 성분',
              description: `처음 한 알 삼키는 순간부터 달랐습니다. **성분표를 읽어도 걱정되는 것이 하나도 없어** 매일 아침 가볍게 꺼내 먹게 됩니다. 다른 제품들과 달리 **인공 향미제와 방부제가 없어** 속이 편안합니다.`,
              image: productImage ?? FOOD_IMAGES.closeup,
              callouts: [
                { label: '원료 원산지', text: '국내산 유기농' },
                { label: '인증', text: '유기농 인증 획득' },
              ],
            },
            {
              title: '과학으로\n검증된 효능',
              description: `"효과가 있을까?" 반신반의했는데, **2주 만에 달라진 몸을 직접 느꼈습니다.** 단순한 위약 효과가 아닙니다. 임상에서 **78%가 체감한 변화**, 한 번 시작하면 끊을 수가 없습니다.`,
              image: productImage ?? FOOD_IMAGES.farm,
            },
          ]}
        />

        {/* [4] 라이프스타일 감성 */}
        <LifestyleSection
          headline="일상이 달라집니다"
          subtext="매일 아침, 단 한 잔이 만드는 차이"
          image={productImage ?? FOOD_IMAGES.lifestyle}
          themeColor={themeColor}
        />

        {/* [5] 후기 */}
        {showReview && (
          <ReviewSummarySection
            title="구매자 후기"
            averageRating={reviewScore}
            totalCount={reviewCount}
            keywords={['#재구매의사있음', '#배송빠름', '#효과좋음', '#선물추천']}
            reviews={reviews ?? defaultReviews}
          />
        )}

        {/* [6] 구매 CTA (버튼 포함) */}
        <CTASection
          category="food"
          headline={`${productName}을\n지금 만나보세요`}
          price={price}
          originalPrice={originalPrice}
          ctaText="지금 펀딩하기"
          guarantees={[
            '얼리버드 한정 30% 할인',
            '펀딩 달성 시 무료 배송',
            '서포터 전용 사은품 증정',
          ]}
        />
      </div>
    );
  }

  /* ── SMARTSTORE MODE ── */
  return (
    <MotionConfig reducedMotion="always">
      <div>
        {/* [1] 첫 화면 */}
        <HeroSection
          smartstoreMode
          category="food"
          badgeText={badgeText}
          badgeIcon={badgeIcon}
          headline={productName}
          headlineHighlight={headlineHighlight}
          subheadline={tagline}
          price={price}
          originalPrice={originalPrice}
          productImage={productImage ?? FOOD_IMAGES.hero}
          reviewScore={reviewScore}
          reviewCount={reviewCount}
          repurchaseRate={repurchaseRate}
          stockCount={stockCount}
        />

        {/* [2] 핵심 혜택 배너 */}
        <BenefitBannerSection
          themeColor={themeColor}
          benefits={[
            { icon: '🚚', text: '오늘출발' },
            { icon: '✅', text: '무료반품' },
            { icon: '🌿', text: '유기농 인증' },
          ]}
        />

        {/* [3] CHECK POINT */}
        <CheckPointSection
          productImage={productImage ?? FOOD_IMAGES.nature}
          themeColor={themeColor}
          points={[
            '100% 유기농 인증 원료만 사용',
            '식약처 허가 · GMP 우수 제조기준 인증',
            '합성 첨가물 · 방부제 무첨가',
            '임상 실험으로 효능이 검증된 성분 배합',
            '국내 공장 직영 생산, 당일 출고',
          ]}
        />

        {/* [4] Point 1·2·3 상세 */}
        <FeatureDetailSection
          themeColor={themeColor}
          points={[
            {
              title: '자연이 만든\n순수한 성분',
              description: `처음 한 알 삼키는 순간부터 달랐습니다. **성분표를 읽어도 걱정되는 것이 하나도 없어** 매일 아침 가볍게 꺼내 먹게 됩니다. 다른 제품들과 달리 **인공 향미제와 방부제가 없어** 속이 편안합니다.`,
              image: productImage ?? FOOD_IMAGES.closeup,
              callouts: [
                { label: '원료 원산지', text: '국내산 유기농' },
                { label: '인증', text: '유기농 인증 획득' },
              ],
            },
            {
              title: '과학으로\n검증된 효능',
              description: `"효과가 있을까?" 반신반의했는데, **2주 만에 달라진 몸을 직접 느꼈습니다.** 단순한 위약 효과가 아닙니다. 임상에서 **78%가 체감한 변화**, 한 번 시작하면 끊을 수가 없습니다.`,
              image: productImage ?? FOOD_IMAGES.farm,
            },
            {
              title: '믿을 수 있는\n제조 공정',
              description: `어디서 만드는지 몰라 불안했던 경험, 있으시죠? 이 제품은 **공장을 직접 운영**합니다. 원료가 들어오는 날부터 포장되는 날까지 **내 눈으로 확인하듯 투명하게** 관리됩니다.`,
              image: productImage ?? FOOD_IMAGES.process,
              callouts: [
                { label: '제조 기준', text: 'GMP 인증' },
                { label: '품질검사', text: '17단계' },
              ],
            },
          ]}
        />

        {/* [5] 인증/안전 */}
        <CertificationSection
          themeColor={themeColor}
          certifications={[
            { name: '식약처 허가', authority: '식품의약품안전처', icon: '🏛️' },
            { name: 'GMP 인증', authority: '우수 제조기준 인증', icon: '✅' },
            { name: 'HACCP 인증', authority: '식품안전관리 인증', icon: '🔬' },
            { name: '유기농 인증', authority: '국립농산물품질관리원', icon: '🌿' },
          ]}
        />

        {/* [6] 후기 요약 */}
        {showReview && (
          <ReviewSummarySection
            title="구매자 후기"
            averageRating={reviewScore}
            totalCount={reviewCount}
            keywords={['#재구매의사있음', '#배송빠름', '#효과좋음', '#사진과동일', '#선물추천']}
            reviews={reviews ?? defaultReviews}
          />
        )}

        {/* [7] 마무리 */}
        <FinalCTASection
          themeColor={themeColor}
          headline={`${productName}\n지금이 가장 좋은 타이밍입니다`}
          benefits={[
            '오늘 주문 시 내일 도착 (오후 2시 이전 주문)',
            '30일 이내 100% 환불 보장',
            '처음 구매 시 사은품 증정',
          ]}
        />
      </div>
    </MotionConfig>
  );
};

export default FoodTemplate;