import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, typography, spacing } from '../../tokens';
import type { ProblemSectionProps } from './types';

const Wrapper = styled.section`
  background: ${colors.neutral[50]};
  padding: ${spacing[24]} ${spacing[6]};
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
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
  margin-bottom: ${spacing[12]};
`;

const ProblemList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[12]};
`;

const ProblemItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  background: white;
  border: 1px solid ${colors.neutral[200]};
  border-radius: ${spacing[3]};
  padding: ${spacing[4]} ${spacing[6]};
  font-size: ${typography.fontSize.lg};
  color: ${colors.neutral[700]};
  text-align: left;
`;

const Icon = styled.span`
  font-size: ${typography.fontSize['2xl']};
  flex-shrink: 0;
`;

const SolutionBox = styled(motion.div)`
  background: ${colors.primary[500]};
  color: white;
  border-radius: ${spacing[3]};
  padding: ${spacing[6]} ${spacing[8]};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
`;

export const ProblemSection: React.FC<ProblemSectionProps> = ({ title, subtitle, problems, solutionText }) => {
  return (
    <Wrapper>
      <Inner>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <ProblemList>
          {problems.map((p, i) => (
            <ProblemItem
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Icon>{p.icon}</Icon>
              {p.text}
            </ProblemItem>
          ))}
        </ProblemList>
        {solutionText && (
          <SolutionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {solutionText}
          </SolutionBox>
        )}
      </Inner>
    </Wrapper>
  );
};

export default ProblemSection;