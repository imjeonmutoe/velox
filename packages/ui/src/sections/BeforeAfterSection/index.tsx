import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, typography, spacing } from '../../tokens';
import type { BeforeAfterSectionProps } from './types';

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing[8]};
`;

const ItemWrapper = styled(motion.div)`
  border-radius: ${spacing[4]};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const CompareWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HalfImage = styled.div<{ $src: string }>`
  height: 240px;
  background-image: url(${p => p.$src});
  background-size: cover;
  background-position: center;
  position: relative;
  &::after {
    content: attr(data-label);
    position: absolute;
    bottom: ${spacing[2]};
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.6);
    color: white;
    font-size: ${typography.fontSize.xs};
    padding: ${spacing[1]} ${spacing[2]};
    border-radius: ${spacing[1]};
  }
`;

const ItemLabel = styled.div`
  padding: ${spacing[4]};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.neutral[900]};
  text-align: center;
`;

const ItemDesc = styled.p`
  padding: 0 ${spacing[4]} ${spacing[4]};
  font-size: ${typography.fontSize.sm};
  color: ${colors.neutral[500]};
  text-align: center;
`;

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ title, subtitle, items }) => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
        <Grid>
          {items.map((item, i) => (
            <ItemWrapper
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <CompareWrapper>
                <HalfImage $src={item.beforeImage} data-label="Before" />
                <HalfImage $src={item.afterImage} data-label="After" />
              </CompareWrapper>
              <ItemLabel>{item.label}</ItemLabel>
              {item.description && <ItemDesc>{item.description}</ItemDesc>}
            </ItemWrapper>
          ))}
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default BeforeAfterSection;