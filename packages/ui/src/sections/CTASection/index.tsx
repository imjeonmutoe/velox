import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { formatPrice } from '@velox/core';
import { colors, typography, spacing } from '../../tokens';
import type { CTASectionProps } from './types';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
`;

const Wrapper = styled.section`
  background: linear-gradient(135deg, ${colors.primary[700]}, ${colors.primary[500]});
  padding: ${spacing[24]} ${spacing[6]};
  text-align: center;
  color: white;
`;

const Headline = styled(motion.h2)`
  font-size: ${typography.fontSize['4xl']};
  font-weight: ${typography.fontWeight.extrabold};
  margin-bottom: ${spacing[4]};
  @media (max-width: 768px) {
    font-size: ${typography.fontSize['2xl']};
  }
`;

const Subtext = styled(motion.p)`
  font-size: ${typography.fontSize.xl};
  opacity: 0.9;
  margin-bottom: ${spacing[6]};
`;

const UrgencyBadge = styled(motion.div)`
  display: inline-block;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 9999px;
  padding: ${spacing[2]} ${spacing[6]};
  font-size: ${typography.fontSize.base};
  margin-bottom: ${spacing[8]};
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[8]};
`;

const Price = styled.span`
  font-size: ${typography.fontSize['5xl']};
  font-weight: ${typography.fontWeight.extrabold};
`;

const OriginalPrice = styled.span`
  font-size: ${typography.fontSize['2xl']};
  opacity: 0.6;
  text-decoration: line-through;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: ${colors.primary[600]};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.extrabold};
  padding: ${spacing[5]} ${spacing[16]};
  border-radius: ${spacing[2]};
  text-decoration: none;
  cursor: pointer;
  animation: ${pulse} 2s ease-in-out infinite;
  margin-bottom: ${spacing[4]};
`;

const Note = styled.p`
  font-size: ${typography.fontSize.sm};
  opacity: 0.7;
`;

export const CTASection: React.FC<CTASectionProps> = ({
  headline,
  subtext,
  ctaText,
  ctaHref = '#',
  onCtaClick,
  note,
  price,
  originalPrice,
  urgencyText,
}) => {
  return (
    <Wrapper>
      <Headline initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {headline}
      </Headline>
      {subtext && (
        <Subtext initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          {subtext}
        </Subtext>
      )}
      {urgencyText && (
        <UrgencyBadge initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          {urgencyText}
        </UrgencyBadge>
      )}
      {price !== undefined && (
        <PriceRow>
          <Price>{formatPrice(price)}</Price>
          {originalPrice !== undefined && <OriginalPrice>{formatPrice(originalPrice)}</OriginalPrice>}
        </PriceRow>
      )}
      <div>
        <CTAButton href={ctaHref} onClick={onCtaClick}>
          {ctaText}
        </CTAButton>
      </div>
      {note && <Note>{note}</Note>}
    </Wrapper>
  );
};

export default CTASection;