import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { colors, typography, spacing } from '../../tokens';
import type { ProcessSectionProps } from './types';

const Wrapper = styled.section<{ $bg: string }>`
  background: ${(p) => p.$bg};
  padding: ${spacing[24]} 0;
  overflow: hidden;
`;

const Header = styled.div`
  text-align: center;
  padding: 0 ${spacing[6]};
  margin-bottom: ${spacing[12]};
`;

const Title = styled.h2`
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.neutral[900]};
  margin-bottom: ${spacing[4]};
`;

const Subtitle = styled.p`
  font-size: ${typography.fontSize.lg};
  color: ${colors.neutral[500]};
`;

const ScrollTrack = styled.div`
  display: flex;
  gap: ${spacing[6]};
  padding: ${spacing[4]} ${spacing[6]};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    overflow-x: visible;
  }
`;

const StepCard = styled(motion.div)`
  flex: 0 0 260px;
  scroll-snap-align: start;
  background: white;
  border-radius: ${spacing[4]};
  padding: ${spacing[8]} ${spacing[6]};
  position: relative;

  @media (min-width: 1024px) {
    flex: unset;
  }
`;

const StepNumber = styled.div<{ $accent: string }>`
  font-size: ${typography.fontSize['4xl']};
  font-weight: ${typography.fontWeight.extrabold};
  color: ${(p) => p.$accent};
  opacity: 0.15;
  position: absolute;
  top: ${spacing[4]};
  right: ${spacing[4]};
  line-height: 1;
`;

const StepIcon = styled.div`
  font-size: 40px;
  margin-bottom: ${spacing[4]};
`;

const StepHighlight = styled.span<{ $accent: string }>`
  display: inline-block;
  background: ${(p) => p.$accent};
  color: white;
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.semibold};
  padding: 2px 10px;
  border-radius: 9999px;
  margin-bottom: ${spacing[3]};
`;

const StepTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.neutral[900]};
  margin-bottom: ${spacing[2]};
`;

const StepDesc = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.neutral[500]};
  line-height: ${typography.lineHeight.relaxed};
`;

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  title = '생산 과정',
  subtitle,
  steps,
  backgroundColor = colors.neutral[100],
  accentColor = '#2D6A4F',
}) => {
  return (
    <Wrapper $bg={backgroundColor}>
      <Header>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Header>
      <ScrollTrack>
        {steps.map((step, i) => (
          <StepCard
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <StepNumber $accent={accentColor}>{String(step.step ?? i + 1).padStart(2, '0')}</StepNumber>
            <StepIcon>{step.icon}</StepIcon>
            {step.highlight && <StepHighlight $accent={accentColor}>{step.highlight}</StepHighlight>}
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.description}</StepDesc>
          </StepCard>
        ))}
      </ScrollTrack>
    </Wrapper>
  );
};

export default ProcessSection;