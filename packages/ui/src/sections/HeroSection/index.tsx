import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { categoryColors } from '../../tokens';
import { formatPrice } from '@velox/core';
import type { HeroSectionProps } from './types';

const bounceAnim = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
`;

/* 풀스크린 이미지 래퍼 */
const HeroImageSection = styled.div<{ $src?: string; $color: string }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${p => p.$src
    ? `url(${p.$src}) center/cover no-repeat`
    : p.$color};
  display: flex;
  align-items: flex-end;
`;

/* 이미지 없을 때 중앙 제품명 */
const NoImageLabel = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(20px, 5vw, 32px);
  font-weight: 900;
  color: rgba(255,255,255,0.25);
  letter-spacing: -0.02em;
  pointer-events: none;
  text-align: center;
  padding: 24px;
  word-break: keep-all;
`;

/* 어두운 그라디언트 오버레이 */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0) 30%,
    rgba(0,0,0,0.5) 65%,
    rgba(0,0,0,0.88) 100%
  );
`;

/* 텍스트 콘텐츠 */
const TextContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 48px 24px 80px;
  max-width: 860px;
  margin: 0 auto;
`;

const Badge = styled(motion.span)<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${p => p.$color};
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 20px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

/* 신뢰 바 (별점/리뷰 수) */
const TrustLine = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`;

const Stars = styled.span`
  color: #FFD60A;
  font-size: 16px;
  letter-spacing: 2px;
`;

const ReviewText = styled.span`
  font-size: 14px;
  color: rgba(255,255,255,0.75);
`;

const RepurchasePill = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #30D158;
  background: rgba(48,209,88,0.15);
  border: 1px solid rgba(48,209,88,0.3);
  padding: 3px 10px;
  border-radius: 999px;
`;

const Headline = styled(motion.h1)`
  font-size: clamp(32px, 8vw, 56px);
  font-weight: 900;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0 0 14px;
  word-break: keep-all;
  white-space: pre-line;
`;

const Highlight = styled.span<{ $color: string }>`
  color: ${p => p.$color};
`;

const Subheadline = styled(motion.p)`
  font-size: 16px;
  color: rgba(255,255,255,0.75);
  line-height: 1.65;
  margin: 0 0 28px;
  word-break: keep-all;
  max-width: 480px;
`;

/* 가격 */
const PriceRow = styled(motion.div)`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
`;

const DiscountRate = styled.span`
  font-size: 32px;
  font-weight: 900;
  color: #FF453A;
`;

const Price = styled.span`
  font-size: 32px;
  font-weight: 900;
  color: white;
`;

const OriginalPrice = styled.span`
  font-size: 15px;
  color: rgba(255,255,255,0.45);
  text-decoration: line-through;
`;

/* 배송/재고 */
const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
`;

const InfoTag = styled.span<{ $urgent?: boolean }>`
  font-size: 13px;
  color: ${p => p.$urgent ? '#FF453A' : 'rgba(255,255,255,0.8)'};
  font-weight: ${p => p.$urgent ? 700 : 400};
  display: flex;
  align-items: center;
  gap: 5px;
`;

/* CTA */
const CTAButton = styled(motion.button)<{ $color: string }>`
  width: 100%;
  max-width: 400px;
  display: block;
  background: ${p => p.$color};
  color: white;
  font-size: 18px;
  font-weight: 800;
  padding: 20px 32px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
`;

const Guarantees = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const GuaranteeItem = styled.span`
  font-size: 12px;
  color: rgba(255,255,255,0.6);
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: '✓';
    color: #30D158;
    font-weight: 700;
  }
`;

/* 스크롤 유도 화살표 */
const ScrollArrow = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.5);
  font-size: 22px;
  animation: ${bounceAnim} 1.8s ease-in-out infinite;
  cursor: pointer;
  z-index: 3;
`;

export const HeroSection: React.FC<HeroSectionProps> = ({
  productImage,
  headline,
  headlineHighlight,
  subheadline,
  badgeText,
  badgeIcon,
  category = 'food',
  price,
  originalPrice,
  reviewScore,
  reviewCount,
  repurchaseRate,
  stockCount,
  sameDayDelivery = true,
  ctaText = '지금 구매하기',
  onCTAClick,
  guarantees = ['30일 환불보장', '무료배송', '카드 12개월 무이자'],
  smartstoreMode = false,
}) => {
  const theme = categoryColors[category];
  const discountRate = price && originalPrice
    ? Math.round((1 - price / originalPrice) * 100)
    : null;

  const renderHeadline = () => {
    if (!headlineHighlight) return headline;
    const parts = headline.split(headlineHighlight);
    return (
      <>
        {parts[0]}
        <Highlight $color={theme.accent}>{headlineHighlight}</Highlight>
        {parts[1]}
      </>
    );
  };

  return (
    <HeroImageSection $src={productImage} $color={theme.primary}>
      <Overlay />
      {!productImage && <NoImageLabel>{headline}</NoImageLabel>}

      <TextContent>
        {badgeText && (
          <div>
            <Badge
              $color={theme.primary}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {badgeIcon && <span>{badgeIcon}</span>}
              {badgeText}
            </Badge>
          </div>
        )}

        {!smartstoreMode && (reviewScore || repurchaseRate) && (
          <TrustLine initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            {reviewScore && (
              <>
                <Stars>{'★'.repeat(Math.round(reviewScore))}</Stars>
                <ReviewText>
                  {reviewScore}
                  {reviewCount ? ` (${reviewCount.toLocaleString('ko-KR')}개 리뷰)` : ''}
                </ReviewText>
              </>
            )}
            {repurchaseRate && <RepurchasePill>재구매율 {repurchaseRate}%</RepurchasePill>}
          </TrustLine>
        )}

        <Headline
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {renderHeadline()}
        </Headline>

        {subheadline && (
          <Subheadline
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {subheadline}
          </Subheadline>
        )}

        {!smartstoreMode && price && (
          <PriceRow initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {discountRate && <DiscountRate>{discountRate}%</DiscountRate>}
            <Price>{formatPrice(price)}</Price>
            {originalPrice && <OriginalPrice>{formatPrice(originalPrice)}</OriginalPrice>}
          </PriceRow>
        )}

        {!smartstoreMode && (
          <InfoRow>
            {sameDayDelivery && (
              <InfoTag>
                <span>📦</span> 오늘 주문 시 내일 도착
              </InfoTag>
            )}
            {stockCount && (
              <InfoTag $urgent>
                <span>⚡</span> 재고 {stockCount}개 남음
              </InfoTag>
            )}
          </InfoRow>
        )}

        {!smartstoreMode && (
          <CTAButton
            $color={theme.primary}
            onClick={onCTAClick}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileTap={{ scale: 0.97 }}
          >
            {ctaText}
          </CTAButton>
        )}

        {!smartstoreMode && (
          <Guarantees>
            {guarantees.map((g, i) => (
              <GuaranteeItem key={i}>{g}</GuaranteeItem>
            ))}
          </Guarantees>
        )}
      </TextContent>

      {!smartstoreMode && (
        <ScrollArrow
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          ↓
        </ScrollArrow>
      )}
    </HeroImageSection>
  );
};

export default HeroSection;