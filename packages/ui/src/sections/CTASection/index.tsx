import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { formatPrice } from '@velox/core';
import { categoryColors } from '../../tokens';
import type { CTASectionProps } from './types';

const pulseRing = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.3); }
  70% { box-shadow: 0 0 0 16px rgba(255,255,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
`;

const Wrapper = styled.section<{ $bg: string }>`
  background: ${p => p.$bg};
  padding: 80px 24px;
`;

const Inner = styled.div`
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
`;

const Headline = styled.h2`
  font-size: clamp(28px, 6vw, 44px);
  font-weight: 900;
  color: white;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 12px;
  white-space: pre-line;
  word-break: keep-all;
`;

const Subtext = styled.p`
  font-size: 16px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 40px;
  line-height: 1.6;
`;

const PriceBlock = styled.div`
  margin-bottom: 32px;
`;

const OriginalPrice = styled.div`
  font-size: 15px;
  color: rgba(255,255,255,0.45);
  text-decoration: line-through;
  margin-bottom: 6px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 14px;
`;

const DiscountRate = styled.span`
  font-size: 40px;
  font-weight: 900;
  color: #FFD60A;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 900;
  color: white;
`;

const UrgencyRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #FFD60A;
  font-weight: 700;
`;

const TodayBenefit = styled.div`
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 14px;
  color: rgba(255,255,255,0.9);
  margin-bottom: 28px;
`;

const CTAButton = styled.a`
  display: block;
  background: white;
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 900;
  padding: 22px 40px;
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 20px;
  animation: ${pulseRing} 2s ease-out infinite;
  letter-spacing: -0.02em;
`;

const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BenefitItem = styled.li`
  font-size: 15px;
  color: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::before {
    content: '✓';
    color: #30D158;
    font-weight: 700;
    font-size: 16px;
  }
`;

export const CTASection: React.FC<CTASectionProps> = ({
  headline,
  subtext,
  ctaText,
  ctaHref = '#',
  onCtaClick,
  price,
  originalPrice,
  stockCount,
  todayBenefit,
  guarantees = ['30일 환불보장', '무료배송', '카드 12개월 무이자'],
  category = 'food',
}) => {
  const theme = categoryColors[category];
  const discountRate = price && originalPrice
    ? Math.round((1 - price / originalPrice) * 100)
    : null;

  return (
    <Wrapper $bg={theme.primary}>
      <Inner>
        <Headline>{headline}</Headline>
        {subtext && <Subtext>{subtext}</Subtext>}

        {price && (
          <PriceBlock>
            {originalPrice && <OriginalPrice>정가 {formatPrice(originalPrice)}</OriginalPrice>}
            <PriceRow>
              {discountRate && <DiscountRate>{discountRate}%</DiscountRate>}
              <Price>{formatPrice(price)}</Price>
            </PriceRow>
          </PriceBlock>
        )}

        {stockCount && (
          <UrgencyRow>
            <span>⚡</span>
            <span>재고 {stockCount}개 남음 — 서두르세요</span>
          </UrgencyRow>
        )}

        {todayBenefit && <TodayBenefit>🎁 {todayBenefit}</TodayBenefit>}

        <CTAButton href={ctaHref} onClick={onCtaClick as React.MouseEventHandler<HTMLAnchorElement>}>
          {ctaText} →
        </CTAButton>

        <BenefitList>
          {guarantees.map((g, i) => (
            <BenefitItem key={i}>{g}</BenefitItem>
          ))}
        </BenefitList>
      </Inner>
    </Wrapper>
  );
};

export default CTASection;