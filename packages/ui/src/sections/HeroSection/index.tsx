import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { categoryColors, colors, typography, spacing } from '../../tokens';
import type { HeroSectionProps } from './types';

const pulseAnim = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.85; }
`;

const bounceAnim = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
`;

const Wrapper = styled.section<{ $bg: string; $color: string }>`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${(p) => p.$bg};
  color: ${(p) => p.$color};
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing[16]} ${spacing[6]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[12]};
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    text-align: center;
    padding: ${spacing[8]} ${spacing[4]};
  }
`;

const TextCol = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ImageCol = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: 1;
  }

  img {
    max-width: 100%;
    max-height: 500px;
    object-fit: contain;
    border-radius: ${spacing[4]};
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  }
`;

const Badge = styled(motion.span)<{ $accent: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${(p) => p.$accent};
  color: white;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.semibold};
  padding: ${spacing[1]} ${spacing[3]};
  border-radius: 9999px;
  margin-bottom: ${spacing[4]};
  animation: ${pulseAnim} 2s ease-in-out infinite;
`;

const Headline = styled(motion.h1)`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: ${typography.fontWeight.extrabold};
  line-height: ${typography.lineHeight.tight};
  margin-bottom: ${spacing[4]};
  white-space: pre-line;
`;

const Highlight = styled.span<{ $color: string }>`
  color: ${(p) => p.$color};
`;

const Subheadline = styled(motion.p)`
  font-size: ${typography.fontSize.lg};
  opacity: 0.75;
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[8]};

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.base};
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[2]};

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const CTAButton = styled(motion.button)<{ $primary: string }>`
  background: ${(p) => p.$primary};
  color: white;
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  padding: ${spacing[4]} ${spacing[10]};
  border-radius: ${spacing[2]};
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
`;

const CTASubText = styled.span`
  font-size: ${typography.fontSize.sm};
  opacity: 0.6;
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  animation: ${bounceAnim} 1.5s ease-in-out infinite;
  opacity: 0.5;
  cursor: pointer;
`;

export const HeroSection: React.FC<HeroSectionProps> = ({
  productImage,
  headline,
  headlineHighlight,
  subheadline,
  badgeText,
  badgeIcon,
  backgroundColor,
  textColor,
  ctaText = '지금 구매하기',
  ctaSubText,
  onCTAClick,
  category = 'food',
}) => {
  const theme = categoryColors[category];
  const bg = backgroundColor ?? theme.background;
  const color = textColor ?? (category === 'fashion' ? colors.neutral[0] : colors.neutral[900]);
  const accentColor = theme.accent;
  const primaryColor = theme.primary;

  const renderHeadline = () => {
    if (!headlineHighlight) return headline;
    const parts = headline.split(headlineHighlight);
    return (
      <>
        {parts[0]}
        <Highlight $color={primaryColor}>{headlineHighlight}</Highlight>
        {parts[1]}
      </>
    );
  };

  return (
    <Wrapper $bg={bg} $color={color}>
      <Content>
        <TextCol>
          {badgeText && (
            <Badge $accent={accentColor} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              {badgeIcon && <span>{badgeIcon}</span>}
              {badgeText}
            </Badge>
          )}
          <Headline initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {renderHeadline()}
          </Headline>
          <Subheadline initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {subheadline}
          </Subheadline>
          <CTAWrapper>
            <CTAButton
              $primary={primaryColor}
              onClick={onCTAClick}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
            </CTAButton>
            {ctaSubText && <CTASubText>{ctaSubText}</CTASubText>}
          </CTAWrapper>
        </TextCol>

        {productImage && (
          <ImageCol
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img src={productImage} alt="product" />
          </ImageCol>
        )}
      </Content>

      <ScrollArrow onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
        ↓
      </ScrollArrow>
    </Wrapper>
  );
};

export default HeroSection;