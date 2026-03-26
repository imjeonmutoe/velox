import React from 'react';
import styled from 'styled-components';
import type { BenefitBannerSectionProps } from './types';

const Wrapper = styled.section<{ $color: string }>`
  background: ${p => p.$color};
  padding: 0;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const BenefitItem = styled.div<{ $notLast: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 20px 16px;
  border-right: ${p => p.$notLast ? '1px solid rgba(255,255,255,0.15)' : 'none'};

  @media (max-width: 360px) {
    padding: 16px 8px;
  }
`;

const BenefitIcon = styled.span`
  font-size: 22px;
  line-height: 1;
`;

const BenefitText = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: white;
  text-align: center;
  letter-spacing: 0.01em;
  word-break: keep-all;
`;

const DEFAULT_BENEFITS = [
  { icon: '🚚', text: '오늘출발' },
  { icon: '✅', text: '무료반품' },
  { icon: '🏆', text: '정품인증' },
];

export const BenefitBannerSection: React.FC<BenefitBannerSectionProps> = ({
  benefits = DEFAULT_BENEFITS,
  themeColor = '#2D6A4F',
}) => {
  const items = benefits.slice(0, 3);

  return (
    <Wrapper $color={themeColor}>
      <Inner>
        {items.map((b, i) => (
          <BenefitItem key={i} $notLast={i < items.length - 1}>
            <BenefitIcon>{b.icon}</BenefitIcon>
            <BenefitText>{b.text}</BenefitText>
          </BenefitItem>
        ))}
      </Inner>
    </Wrapper>
  );
};

export default BenefitBannerSection;