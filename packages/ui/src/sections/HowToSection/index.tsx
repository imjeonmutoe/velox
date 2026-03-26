import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { HowToSectionProps } from './types';

const Wrapper = styled.section`
  background: #f9f9f9;
  padding: 80px 24px;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const EyebrowText = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #636366;
  text-align: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: clamp(24px, 5vw, 36px);
  font-weight: 900;
  color: #1a1a1a;
  text-align: center;
  letter-spacing: -0.025em;
  margin-bottom: 12px;
  word-break: keep-all;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #636366;
  text-align: center;
  margin-bottom: 56px;
  line-height: 1.6;
  word-break: keep-all;
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const StepItem = styled(motion.div)<{ $accent: string }>`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 28px 0;
  border-bottom: 1px solid #f2f2f7;

  &:first-child {
    border-top: 1px solid #f2f2f7;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const StepNumber = styled.div<{ $accent: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${p => p.$accent};
  color: white;
  font-size: 18px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: -0.02em;
`;

const StepBody = styled.div`
  flex: 1;
  padding-top: 4px;
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const StepIcon = styled.span`
  font-size: 22px;
`;

const StepTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.01em;
`;

const StepDesc = styled.p`
  font-size: 15px;
  color: #636366;
  line-height: 1.65;
  word-break: keep-all;
`;

const StepImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-top: 16px;
  object-fit: cover;
  max-height: 280px;
`;

export const HowToSection: React.FC<HowToSectionProps> = ({
  title = '이렇게 사용하세요',
  subtitle,
  steps,
  accentColor = '#2D6A4F',
}) => {
  return (
    <Wrapper>
      <Inner>
        <EyebrowText>How to Use</EyebrowText>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        <StepList>
          {steps.map((s, i) => (
            <StepItem
              key={i}
              $accent={accentColor}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <StepNumber $accent={accentColor}>{s.step}</StepNumber>
              <StepBody>
                <StepHeader>
                  {s.icon && <StepIcon>{s.icon}</StepIcon>}
                  <StepTitle>{s.title}</StepTitle>
                </StepHeader>
                <StepDesc>{s.description}</StepDesc>
                {s.image && <StepImage src={s.image} alt={s.title} />}
              </StepBody>
            </StepItem>
          ))}
        </StepList>
      </Inner>
    </Wrapper>
  );
};

export default HowToSection;