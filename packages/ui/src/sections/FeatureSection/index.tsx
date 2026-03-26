import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { FeatureSectionProps } from './types';

const Wrapper = styled.section`
  background: white;
`;

const SectionHeader = styled.div`
  padding: 100px 24px 64px;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
`;

const EyebrowText = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #636366;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: clamp(28px, 6vw, 42px);
  font-weight: 900;
  color: #1a1a1a;
  line-height: 1.2;
  letter-spacing: -0.03em;
  word-break: keep-all;
`;

const FeatureBlock = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${p => p.$reverse ? '#f9f9f9' : 'white'};

  @media (min-width: 768px) {
    flex-direction: ${p => p.$reverse ? 'row-reverse' : 'row'};
    min-height: 480px;
  }
`;

const FeatureImage = styled(motion.div)<{ $src?: string; $color: string }>`
  flex: 1;
  min-height: 280px;
  background: ${p => p.$src
    ? `url(${p.$src}) center/cover no-repeat`
    : p.$color};

  @media (min-width: 768px) {
    min-height: 480px;
  }
`;

const FeatureContent = styled(motion.div)`
  flex: 1;
  padding: 56px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;

  @media (max-width: 767px) {
    padding: 40px 24px;
  }
`;

const FeatureIcon = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.025em;
  line-height: 1.25;
  margin-bottom: 16px;
`;

const FeatureDesc = styled.p`
  font-size: 16px;
  color: #636366;
  line-height: 1.7;
  word-break: keep-all;
`;

const COLORS = ['#e8f5e9', '#e3f2fd', '#fce4ec', '#fff8e1', '#f3e5f5'];

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
  accentColor,
}) => {
  return (
    <Wrapper>
      {title && (
        <SectionHeader>
          <EyebrowText>Features</EyebrowText>
          <Title>{title}</Title>
        </SectionHeader>
      )}

      {features.map((f, i) => (
        <FeatureBlock key={i} $reverse={i % 2 !== 0}>
          <FeatureImage
            $src={f.image}
            $color={accentColor ?? COLORS[i % COLORS.length]}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <FeatureContent
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {f.icon && <FeatureIcon>{f.icon}</FeatureIcon>}
            <FeatureTitle>{f.title}</FeatureTitle>
            <FeatureDesc>{f.description}</FeatureDesc>
          </FeatureContent>
        </FeatureBlock>
      ))}
    </Wrapper>
  );
};

export default FeatureSection;