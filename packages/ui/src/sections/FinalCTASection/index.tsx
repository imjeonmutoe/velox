import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { FinalCTASectionProps } from './types';

const Wrapper = styled.section<{ $color: string }>`
  background: ${p => p.$color};
  padding: 80px 40px;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
`;

const Eyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin-bottom: 16px;
`;

const Headline = styled(motion.h2)`
  font-size: clamp(32px, 7vw, 48px);
  font-weight: 900;
  color: white;
  letter-spacing: -0.04em;
  line-height: 1.15;
  margin-bottom: 40px;
  word-break: keep-all;
  white-space: pre-line;
`;

const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 480px;
`;

const BenefitItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
`;

const CheckCircle = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  border: 1.5px solid rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 900;
  flex-shrink: 0;
`;

const BenefitText = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
  line-height: 1.5;
  word-break: keep-all;
`;

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  headline = '지금 구매하면\n이런 혜택이 있습니다',
  benefits,
  themeColor = '#2D6A4F',
}) => {
  return (
    <Wrapper $color={themeColor}>
      <Inner>
        <Eyebrow>지금 구매하면</Eyebrow>
        <Headline
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {headline}
        </Headline>
        <BenefitList>
          {benefits.map((b, i) => (
            <BenefitItem
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle>✓</CheckCircle>
              <BenefitText>{b}</BenefitText>
            </BenefitItem>
          ))}
        </BenefitList>
      </Inner>
    </Wrapper>
  );
};

export default FinalCTASection;