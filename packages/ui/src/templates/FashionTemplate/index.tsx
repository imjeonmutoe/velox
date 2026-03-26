import React from 'react';
import { HeroSection } from '../../sections/HeroSection';
import { BenefitBannerSection } from '../../sections/BenefitBannerSection';
import { CheckPointSection } from '../../sections/CheckPointSection';
import { FeatureDetailSection } from '../../sections/FeatureDetailSection';
import { DeliverySection } from '../../sections/DeliverySection';
import { CertificationSection } from '../../sections/CertificationSection';
import { ReviewSummarySection } from '../../sections/ReviewSummarySection';
import { FinalCTASection } from '../../sections/FinalCTASection';
import type { FashionTemplateProps } from './types';

const THEME = '#1A1A2E';

const FASHION_IMAGES = {
  hero:      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
  lifestyle: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
  fabric:    'https://images.unsplash.com/photo-1558171813-0c9cb0e5ca5f?w=800',
  fit:       'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
  detail:    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
};

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
      {/* [1] 첫 화면 */}
      <HeroSection
        smartstoreMode
        category="fashion"
        badgeText={brandName ? `✨ ${brandName}` : '2025 SS'}
        headline={productName}
        subheadline={tagline}
        price={price}
        originalPrice={originalPrice}
        productImage={productImage ?? FASHION_IMAGES.hero}
      />

      {/* [2] 핵심 혜택 배너 */}
      <BenefitBannerSection
        themeColor={THEME}
        benefits={[
          { icon: '🚚', text: '오늘출발' },
          { icon: '🔄', text: '무료교환' },
          { icon: '✂️', text: '국내제조' },
        ]}
      />

      {/* [3] CHECK POINT */}
      <CheckPointSection
        productImage={productImage ?? FASHION_IMAGES.lifestyle}
        themeColor={THEME}
        points={[
          '한국인 체형 3만 명 데이터 기반 퍼펙트 핏 패턴',
          '프리미엄 린넨 100% — 통기성 최상',
          '세탁 후에도 변형 없는 고밀도 직조',
          'OEKO-TEX 인증 — 유해물질 없는 안전한 소재',
          '국내 봉제 공장 직영 생산',
        ]}
      />

      {/* [4] Point 1·2·3 상세 */}
      <FeatureDetailSection
        themeColor={THEME}
        points={[
          {
            title: '피부가 기억하는\n소재의 차이',
            description: `한 번 입으면 다른 옷이 거칠게 느껴집니다. **하루 종일 입어도 피부 자극 하나 없고**, 세탁 후 꺼냈을 때도 그 부드러움이 그대로입니다. 비슷한 가격대 제품과는 **손끝에서 바로 차이**가 납니다.`,
            image: productImage ?? FASHION_IMAGES.fabric,
            callouts: [
              { label: '소재', text: '린넨 100%' },
              { label: '인증', text: 'OEKO-TEX 인증' },
            ],
          },
          {
            title: '어떤 체형도\n완벽하게',
            description: `"오버핏인데 왜 이렇게 잘 맞지?" 처음 입어보고 당황했습니다. **3만 명의 체형 데이터**가 만들어낸 결과입니다. 어깨는 넓지 않은데 품은 여유 있고, **슬림하게도 루즈하게도 연출**할 수 있습니다.`,
            image: productImage ?? FASHION_IMAGES.fit,
          },
          {
            title: '1년 뒤에도\n새것처럼',
            description: `작년에 산 옷이 올해도 새것처럼 입힙니다. **50번 세탁해도 늘어나거나 변형되지 않아** 옷장에서 꺼낼 때마다 기분이 좋습니다. 결국 가장 자주 손이 가는 옷이 됩니다.`,
            image: productImage ?? FASHION_IMAGES.detail,
            callouts: [
              { label: '내구성', text: '50회 세탁 테스트' },
              { label: '변형률', text: '0.3% 이하' },
            ],
          },
        ]}
      />

      {/* [5] 배송/구성 신뢰 */}
      <DeliverySection
        themeColor={THEME}
        cutoffTime="오후 2시"
        deliveryTime="내일"
        benefits={['무료배송', '30일 무료 반품', '교환 무료']}
      />

      {/* [6] 인증/안전 */}
      <CertificationSection
        title="검증된 소재를 사용합니다"
        themeColor={THEME}
        certifications={[
          { name: 'OEKO-TEX 인증', authority: '유해물질 없는 안전한 섬유', icon: '🌿' },
          { name: '친환경 염색', authority: '환경부 인증 친환경 공정', icon: '♻️' },
          { name: '국내 생산', authority: '국내 봉제 공장 직영', icon: '🇰🇷' },
        ]}
      />

      {/* [7] 후기 요약 */}
      <ReviewSummarySection
        title="구매자 후기"
        averageRating={4.8}
        keywords={['#재구매의사있음', '#핏좋음', '#소재좋음', '#배송빠름', '#선물추천']}
        reviews={[
          { author: '최유진', rating: 5, date: '2025.02.01', content: '핏이 정말 완벽해요. 여러 색상 구매했습니다.', verified: true },
          { author: '강민서', rating: 5, date: '2025.01.28', content: '소재가 고급스럽고 착용감이 최고입니다.', verified: true },
          { author: '정다은', rating: 4, date: '2025.01.20', content: '디자인이 예쁘고 실용적이에요.', verified: true },
        ]}
      />

      {/* [8] 마무리 */}
      <FinalCTASection
        themeColor={THEME}
        headline={`${productName}\n지금이 가장 좋은 타이밍입니다`}
        benefits={[
          '오늘 주문 시 내일 도착 (오후 2시 이전 주문)',
          '30일 이내 무료 반품 보장',
          '첫 구매 고객 전용 추가 할인',
        ]}
      />
    </div>
  );
};

export default FashionTemplate;