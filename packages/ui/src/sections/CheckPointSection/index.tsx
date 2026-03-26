import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { CheckPointSectionProps } from './types';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 0 0 80px;
`;

/* 이미지 오버레이 영역 */
const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ProductImage = styled.div<{ $src?: string; $color: string }>`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: ${p => p.$src
    ? `url(${p.$src}) center/cover no-repeat`
    : p.$color};
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0) 40%,
    rgba(0,0,0,0.65) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px 24px;
`;

const CheckLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  margin-bottom: 8px;
`;

const CheckHeadline = styled.h2`
  font-size: clamp(36px, 9vw, 60px);
  font-weight: 900;
  color: white;
  letter-spacing: -0.04em;
  line-height: 1.05;
`;

/* 체크리스트 카드 */
const CardList = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: -1px;
  background: #ffffff;
  padding-top: 24px;
`;

const CheckCard = styled(motion.div)<{ $color: string }>`
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 14px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 860px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

const CheckMark = styled.div<{ $color: string }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${p => p.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-size: 14px;
  font-weight: 900;
`;

const CheckText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.5;
  word-break: keep-all;
`;

export const CheckPointSection: React.FC<CheckPointSectionProps> = ({
  productImage,
  headline = 'CHECK\nPOINT',
  themeColor = '#2D6A4F',
  points,
}) => {
  return (
    <Wrapper>
      <ImageWrap>
        <ProductImage $src={productImage} $color={themeColor} />
        <ImageOverlay>
          <CheckLabel>이 제품의 핵심</CheckLabel>
          <CheckHeadline style={{ whiteSpace: 'pre-line' }}>{headline}</CheckHeadline>
        </ImageOverlay>
      </ImageWrap>

      <CardList>
        {points.map((point, i) => (
          <CheckCard
            key={i}
            $color={themeColor}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.45 }}
          >
            <CheckMark $color={themeColor}>✓</CheckMark>
            <CheckText>{point}</CheckText>
          </CheckCard>
        ))}
      </CardList>
    </Wrapper>
  );
};

export default CheckPointSection;