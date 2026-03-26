import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, typography, spacing } from '../../tokens';
import type { FeatureSectionProps } from './types';

const Wrapper = styled.section`
  background: white;
  padding: ${spacing[24]} ${spacing[6]};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${spacing[16]};
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing[8]};
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${colors.neutral[50]};
  border-radius: ${spacing[4]};
  padding: ${spacing[8]};
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: ${typography.fontSize['4xl']};
  margin-bottom: ${spacing[4]};
`;

const FeatureTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.neutral[900]};
  margin-bottom: ${spacing[2]};
`;

const FeatureDesc = styled.p`
  font-size: ${typography.fontSize.base};
  color: ${colors.neutral[600]};
  line-height: ${typography.lineHeight.relaxed};
`;

export const FeatureSection: React.FC<FeatureSectionProps> = ({ title, subtitle, features }) => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
        <Grid>
          {features.map((f, i) => (
            <Card
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <FeatureIcon>{f.icon}</FeatureIcon>
              <FeatureTitle>{f.title}</FeatureTitle>
              <FeatureDesc>{f.description}</FeatureDesc>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default FeatureSection;