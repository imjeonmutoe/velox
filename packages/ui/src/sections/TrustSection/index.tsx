import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { TrustSectionProps } from './types';

const Wrapper = styled.section`
  background: #f8f8f8;
  padding: 80px 24px;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(24px, 5vw, 36px);
  font-weight: 900;
  color: #1a1a1a;
  text-align: center;
  letter-spacing: -0.03em;
  margin-bottom: 48px;
`;

const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 40px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BadgeCard = styled(motion.div)`
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 16px;
  padding: 24px 16px;
  text-align: center;
`;

const BadgeIcon = styled.div`
  font-size: 32px;
  margin-bottom: 12px;
`;

const BadgeValue = styled.div`
  font-size: 28px;
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 6px;
`;

const BadgeLabel = styled.div`
  font-size: 12px;
  color: #aeaeb2;
  font-weight: 500;
`;

const CertRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const CertTag = styled.span`
  background: #ffffff;
  border: 1px solid #e5e5e5;
  color: #3a3a3c;
  font-size: 13px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 999px;
`;

export const TrustSection: React.FC<TrustSectionProps> = ({ title, badges, certifications }) => {
  return (
    <Wrapper>
      <Inner>
        {title && <Title>{title}</Title>}
        <BadgeGrid>
          {badges.map((b, i) => (
            <BadgeCard
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <BadgeIcon>{b.icon}</BadgeIcon>
              <BadgeValue>{b.value}</BadgeValue>
              <BadgeLabel>{b.label}</BadgeLabel>
            </BadgeCard>
          ))}
        </BadgeGrid>
        {certifications && (
          <CertRow>
            {certifications.map((c, i) => <CertTag key={i}>{c}</CertTag>)}
          </CertRow>
        )}
      </Inner>
    </Wrapper>
  );
};

export default TrustSection;