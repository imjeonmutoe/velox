import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { ReviewSummarySectionProps } from './types';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 80px 40px;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.025em;
  margin-bottom: 36px;
`;

/* 평점 요약 */
const RatingHero = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 28px;
  flex-wrap: wrap;
`;

const BigScore = styled.div`
  font-size: 72px;
  font-weight: 900;
  color: #1a1a1a;
  line-height: 1;
  letter-spacing: -0.05em;
`;

const RatingRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Stars = styled.div`
  font-size: 28px;
  color: #FF9500;
  letter-spacing: 3px;
`;

const RatingLabel = styled.p`
  font-size: 14px;
  color: #888;
`;

/* 키워드 태그 */
const KeywordRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;
`;

const KeywordTag = styled.span`
  background: #F8F9FA;
  border: 1px solid #e9e9e9;
  color: #555;
  font-size: 13px;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 999px;
  cursor: default;
`;

/* 리뷰 카드 */
const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ReviewCard = styled(motion.div)`
  background: #F8F9FA;
  border-radius: 16px;
  padding: 24px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 8px;
`;

const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div<{ $color: string }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${p => p.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`;

const CardStars = styled.span`
  color: #FF9500;
  font-size: 12px;
  letter-spacing: 1px;
`;

const CardDate = styled.span`
  font-size: 12px;
  color: #888;
`;

const VerifiedBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #22C55E;
  background: #F0FDF4;
  padding: 2px 7px;
  border-radius: 4px;
`;

const OptionTag = styled.span`
  font-size: 12px;
  color: #888;
  background: #efefef;
  padding: 3px 9px;
  border-radius: 5px;
`;

const ReviewContent = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.8;
  word-break: keep-all;
`;

const AVATAR_COLORS = ['#2D6A4F', '#1A1A2E', '#0F3460', '#B45309', '#7C3AED'];

export const ReviewSummarySection: React.FC<ReviewSummarySectionProps> = ({
  title = '구매자 후기',
  averageRating,
  totalCount,
  keywords,
  reviews,
}) => {
  const filledStars = Math.round(averageRating);
  const displayKeywords = keywords ?? ['#재구매의사있음', '#배송빠름', '#사진과동일', '#가성비최고', '#선물추천'];

  return (
    <Wrapper>
      <Inner>
        <Title>{title}</Title>

        <RatingHero>
          <BigScore>{averageRating.toFixed(1)}</BigScore>
          <RatingRight>
            <Stars>{'★'.repeat(filledStars)}{'☆'.repeat(5 - filledStars)}</Stars>
            <RatingLabel>
              5점 만점{totalCount ? ` · ${totalCount.toLocaleString('ko-KR')}개 후기` : ''}
            </RatingLabel>
          </RatingRight>
        </RatingHero>

        <KeywordRow>
          {displayKeywords.map((kw, i) => (
            <KeywordTag key={i}>{kw}</KeywordTag>
          ))}
        </KeywordRow>

        <ReviewList>
          {reviews.slice(0, 3).map((r, i) => (
            <ReviewCard
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <CardHeader>
                <AuthorRow>
                  <Avatar $color={AVATAR_COLORS[i % AVATAR_COLORS.length]}>
                    {r.author[0]}
                  </Avatar>
                  <AuthorInfo>
                    <AuthorName>{r.author}</AuthorName>
                    <MetaRow>
                      <CardStars>{'★'.repeat(r.rating)}</CardStars>
                      <CardDate>{r.date}</CardDate>
                      {r.verified && <VerifiedBadge>구매인증</VerifiedBadge>}
                    </MetaRow>
                  </AuthorInfo>
                </AuthorRow>
                {r.option && <OptionTag>{r.option}</OptionTag>}
              </CardHeader>
              <ReviewContent>{r.content}</ReviewContent>
            </ReviewCard>
          ))}
        </ReviewList>
      </Inner>
    </Wrapper>
  );
};

export default ReviewSummarySection;