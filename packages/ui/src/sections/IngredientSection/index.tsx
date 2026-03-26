import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, typography, spacing } from '../../tokens';
import type { IngredientSectionProps } from './types';

const Wrapper = styled.section<{ $bg: string }>`
  background: ${(p) => p.$bg};
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
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: ${spacing[4]};
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
`;

const CardImage = styled.div<{ $src?: string }>`
  height: 180px;
  background: ${(p) => p.$src ? `url(${p.$src}) center/cover` : colors.neutral[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
`;

const CardBody = styled.div`
  padding: ${spacing[6]};
`;

const IngredientName = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.neutral[900]};
  margin-bottom: ${spacing[1]};
`;

const Origin = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.neutral[400]};
  margin-bottom: ${spacing[3]};
`;

const Description = styled.p`
  font-size: ${typography.fontSize.base};
  color: ${colors.neutral[600]};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[4]};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[2]};
`;

const Tag = styled.span`
  background: ${colors.neutral[100]};
  color: ${colors.neutral[600]};
  font-size: ${typography.fontSize.xs};
  padding: 2px 10px;
  border-radius: 9999px;
`;

export const IngredientSection: React.FC<IngredientSectionProps> = ({
  title = '핵심 성분',
  subtitle,
  ingredients,
  backgroundColor = colors.neutral[50],
}) => {
  return (
    <Wrapper $bg={backgroundColor}>
      <Inner>
        <Header>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
        <Grid>
          {ingredients.map((item, i) => (
            <Card
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <CardImage $src={item.image}>
                {!item.image && item.icon && item.icon}
              </CardImage>
              <CardBody>
                <IngredientName>{item.name}</IngredientName>
                <Origin>📍 {item.origin}</Origin>
                <Description>{item.description}</Description>
                {item.tags && (
                  <Tags>
                    {item.tags.map((t, j) => <Tag key={j}>{t}</Tag>)}
                  </Tags>
                )}
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default IngredientSection;