import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { CertificationSectionProps } from './types';

const Wrapper = styled.section`
  background: #f8f8f8;
  padding: 80px 24px;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const EyebrowText = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #aeaeb2;
  text-align: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: clamp(28px, 6vw, 44px);
  font-weight: 900;
  color: #1a1a1a;
  text-align: center;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 12px;
  word-break: keep-all;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #636366;
  text-align: center;
  margin-bottom: 56px;
  line-height: 1.7;
`;

const CertGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CertCard = styled(motion.div)<{ $color: string }>`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  border: 1px solid #f0f0f0;
`;

const CertAccent = styled.div<{ $color: string }>`
  width: 6px;
  background: ${p => p.$color};
  flex-shrink: 0;
`;

const CertBody = styled.div`
  flex: 1;
  padding: 28px 24px;
`;

const CertAuthority = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #aeaeb2;
  margin-bottom: 8px;
`;

const CertName = styled.h3<{ $color: string }>`
  font-size: clamp(24px, 5vw, 36px);
  font-weight: 900;
  color: ${p => p.$color};
  letter-spacing: -0.03em;
  line-height: 1.15;
  word-break: keep-all;
`;

const CertImageWrap = styled.div`
  width: 96px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const CertImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.7;
`;

const CertIcon = styled.div`
  font-size: 40px;
`;

export const CertificationSection: React.FC<CertificationSectionProps> = ({
  title = '안심하고 사용하세요',
  subtitle = '검증된 기관으로부터 받은 공식 인증입니다',
  certifications,
  themeColor = '#2D6A4F',
}) => {
  return (
    <Wrapper>
      <Inner>
        <EyebrowText>Certification</EyebrowText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <CertGrid>
          {certifications.map((cert, i) => (
            <CertCard
              key={i}
              $color={themeColor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <CertAccent $color={themeColor} />
              <CertBody>
                <CertAuthority>{cert.authority}</CertAuthority>
                <CertName $color={themeColor}>{cert.name}</CertName>
              </CertBody>
              <CertImageWrap>
                {cert.image
                  ? <CertImage src={cert.image} alt={cert.name} />
                  : <CertIcon>{cert.icon ?? '🏅'}</CertIcon>
                }
              </CertImageWrap>
            </CertCard>
          ))}
        </CertGrid>
      </Inner>
    </Wrapper>
  );
};

export default CertificationSection;