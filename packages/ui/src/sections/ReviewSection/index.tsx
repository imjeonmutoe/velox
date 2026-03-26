import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, typography, spacing } from '../../tokens';
import type { ReviewSectionProps } from './types';

const Wrapper = styled.section`
  background: ${colors.neutral[50]};
  padding: ${spacing[24]} ${spacing[6]};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.neutral[900]};
  text-align: center;
  margin-bottom: ${spacing[12]};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing[6]};
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: ${spacing[4]};
  padding: ${spacing[6]};
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const Stars = styled.div`
  color: #facc15;
  font-size: ${typography.fontSize.lg};
  margin-bottom: ${spacing[3]};
`;

const Content = styled.p`
  font-size: ${typography.fontSize.base};
  color: ${colors.neutral[700]};
  line-height: ${typography.lineHeight.relaxed};
  margin-bottom: ${spacing[4]};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.sm};
  flex-shrink: 0;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.neutral[900]};
`;

const ReviewDate = styled.div`
  font-size: ${typography.fontSize.xs};
  color: ${colors.neutral[400]};
`;

const VerifiedBadge = styled.span`
  margin-left: auto;
  font-size: ${typography.fontSize.xs};
  color: ${colors.success[500]};
`;

export const ReviewSection: React.FC<ReviewSectionProps> = ({ title, reviews }) => {
  return (
    <Wrapper>
      <Inner>
        {title && <Title>{title}</Title>}
        <Grid>
          {reviews.map((r, i) => (
            <Card
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Stars>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</Stars>
              <Content>{r.content}</Content>
              <Footer>
                <Avatar>{r.author[0]}</Avatar>
                <AuthorInfo>
                  <AuthorName>{r.author}</AuthorName>
                  <ReviewDate>{r.date}</ReviewDate>
                </AuthorInfo>
                {r.verified && <VerifiedBadge>✓ 구매 인증</VerifiedBadge>}
              </Footer>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default ReviewSection;