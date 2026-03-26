import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { ReviewSectionProps } from './types';

const Wrapper = styled.section`
  background: #f9f9f9;
  padding: 80px 0;
`;

const Header = styled.div`
  padding: 0 24px 48px;
  max-width: 860px;
  margin: 0 auto;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -0.025em;
`;

const TotalCount = styled.span`
  font-size: 16px;
  color: #636366;
`;

/* 집계 별점 */
const RatingSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  background: white;
  border-radius: 20px;
  padding: 28px 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const BigScore = styled.div`
  font-size: 64px;
  font-weight: 900;
  color: #1a1a1a;
  line-height: 1;
  letter-spacing: -0.04em;
`;

const StarRow = styled.div`
  font-size: 22px;
  color: #FF9500;
  letter-spacing: 2px;
  margin: 6px 0;
`;

const ScoreLabel = styled.div`
  font-size: 13px;
  color: #8e8e93;
`;

const BarChart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const BarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BarStar = styled.span`
  font-size: 12px;
  color: #636366;
  width: 22px;
  text-align: right;
  flex-shrink: 0;
`;

const BarTrack = styled.div`
  flex: 1;
  height: 8px;
  background: #f2f2f7;
  border-radius: 4px;
  overflow: hidden;
`;

const BarFill = styled.div<{ $pct: number }>`
  height: 100%;
  width: ${p => p.$pct}%;
  background: #FF9500;
  border-radius: 4px;
  transition: width 0.6s ease;
`;

/* 리뷰 카드 그리드 */
const ReviewGrid = styled.div`
  padding: 0 24px;
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ReviewCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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

const AuthorName = styled.div`
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

const ReviewStars = styled.span`
  color: #FF9500;
  font-size: 12px;
`;

const ReviewDate = styled.span`
  font-size: 12px;
  color: #aeaeb2;
`;

const VerifiedBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #34C759;
  background: #F0FDF4;
  padding: 2px 7px;
  border-radius: 4px;
`;

const OptionTag = styled.div`
  font-size: 12px;
  color: #636366;
  background: #f2f2f7;
  display: inline-block;
  padding: 3px 9px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ReviewImage = styled.img`
  width: 100%;
  max-height: 260px;
  object-fit: cover;
`;

const ReviewContent = styled.p`
  font-size: 15px;
  color: #3a3a3c;
  line-height: 1.65;
  word-break: keep-all;
`;

const AVATAR_COLORS = ['#2D6A4F', '#1A1A2E', '#0F3460', '#B45309', '#7C3AED', '#0369A1'];

export const ReviewSection: React.FC<ReviewSectionProps> = ({
  title = '구매자 리뷰',
  averageRating,
  totalCount,
  reviews,
}) => {
  const avg = averageRating ?? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length);
  const total = totalCount ?? reviews.length;

  const dist = [5, 4, 3, 2, 1].map(star => ({
    star,
    pct: Math.round((reviews.filter(r => r.rating === star).length / reviews.length) * 100),
  }));

  return (
    <Wrapper>
      <Header>
        <TitleRow>
          <Title>{title}</Title>
          <TotalCount>{total.toLocaleString('ko-KR')}개</TotalCount>
        </TitleRow>

        <RatingSummary>
          <div>
            <BigScore>{avg.toFixed(1)}</BigScore>
            <StarRow>{'★'.repeat(Math.round(avg))}</StarRow>
            <ScoreLabel>5점 만점</ScoreLabel>
          </div>
          <BarChart>
            {dist.map(d => (
              <BarRow key={d.star}>
                <BarStar>{d.star}★</BarStar>
                <BarTrack><BarFill $pct={d.pct} /></BarTrack>
              </BarRow>
            ))}
          </BarChart>
        </RatingSummary>
      </Header>

      <ReviewGrid>
        {reviews.map((r, i) => (
          <ReviewCard
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            {r.image && <ReviewImage src={r.image} alt="review" />}
            <CardBody>
              <CardHeader>
                <AuthorRow>
                  <Avatar $color={AVATAR_COLORS[i % AVATAR_COLORS.length]}>
                    {r.author[0]}
                  </Avatar>
                  <div>
                    <AuthorName>{r.author}</AuthorName>
                    <MetaRow>
                      <ReviewStars>{'★'.repeat(r.rating)}</ReviewStars>
                      <ReviewDate>{r.date}</ReviewDate>
                      {r.verified && <VerifiedBadge>구매인증</VerifiedBadge>}
                    </MetaRow>
                  </div>
                </AuthorRow>
              </CardHeader>
              {r.option && <OptionTag>옵션: {r.option}</OptionTag>}
              <ReviewContent>{r.content}</ReviewContent>
            </CardBody>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </Wrapper>
  );
};

export default ReviewSection;