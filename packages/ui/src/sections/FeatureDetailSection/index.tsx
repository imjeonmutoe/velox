import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { FeatureDetailSectionProps } from './types';

/* 굵게 마크다운(**text**) 파싱 */
function parseBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

const Wrapper = styled.section`
  background: #ffffff;
`;

const PointBlock = styled.div<{ $even: boolean }>`
  padding: 80px 24px;
  background: ${p => p.$even ? '#f8f8f8' : '#ffffff'};
  border-top: 1px solid #f0f0f0;
`;

const BlockInner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

/* "Point 1" 뱃지 */
const PointBadge = styled.span`
  display: inline-block;
  background: #1a1a1a;
  color: white;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 20px;
`;

/* 기능명 초대형 텍스트 */
const FeatureTitle = styled(motion.h2)`
  font-size: clamp(36px, 9vw, 64px);
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 28px;
  word-break: keep-all;
`;

/* 제품 이미지 */
const FeatureImageWrap = styled.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 28px;
`;

const FeatureImage = styled.div<{ $src?: string; $color: string }>`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: ${p => p.$src
    ? `url(${p.$src}) center/cover no-repeat`
    : p.$color};
`;

/* 콜아웃 말풍선 */
const CalloutList = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Callout = styled.div`
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  padding: 8px 14px;
`;

const CalloutLabel = styled.p`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #636366;
  margin-bottom: 2px;
`;

const CalloutText = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #1a1a1a;
`;

/* 설명 텍스트 */
const FeatureDesc = styled(motion.p)<{ $color: string }>`
  font-size: 18px;
  color: #3a3a3c;
  line-height: 1.8;
  word-break: keep-all;

  strong {
    font-weight: 800;
    color: ${p => p.$color};
  }
`;

export const FeatureDetailSection: React.FC<FeatureDetailSectionProps> = ({
  points,
  themeColor = '#2D6A4F',
}) => {
  return (
    <Wrapper>
      {points.map((point, i) => (
        <PointBlock key={i} $even={i % 2 !== 0}>
          <BlockInner>
            <PointBadge>Point {i + 1}</PointBadge>

            <FeatureTitle
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {point.title}
            </FeatureTitle>

            <FeatureImageWrap>
              <FeatureImage $src={point.image} $color={themeColor} />
              {point.callouts && point.callouts.length > 0 && (
                <CalloutList>
                  {point.callouts.map((c, j) => (
                    <Callout key={j}>
                      <CalloutLabel>{c.label}</CalloutLabel>
                      <CalloutText>{c.text}</CalloutText>
                    </Callout>
                  ))}
                </CalloutList>
              )}
            </FeatureImageWrap>

            <FeatureDesc
              $color={themeColor}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {parseBold(point.description)}
            </FeatureDesc>
          </BlockInner>
        </PointBlock>
      ))}
    </Wrapper>
  );
};

export default FeatureDetailSection;