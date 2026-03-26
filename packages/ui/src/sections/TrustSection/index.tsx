import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, typography, spacing } from '../../tokens';
import type { TrustSectionProps } from './types';

const Wrapper = styled.section`
  background: ${colors.neutral[900]};
  color: white;
  padding: ${spacing[16]} ${spacing[6]};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing[12]};
`;

const BadgeGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing[8]};
  margin-bottom: ${spacing[10]};
`;

const Badge = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[2]};
`;

const BadgeIcon = styled.div`
  font-size: ${typography.fontSize['3xl']};
`;

const BadgeValue = styled.div`
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.extrabold};
  color: ${colors.primary[500]};
`;

const BadgeLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  color: ${colors.neutral[400]};
`;

const Certs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing[3]};
`;

const CertTag = styled.span`
  background: ${colors.neutral[800]};
  border: 1px solid ${colors.neutral[700]};
  color: ${colors.neutral[300]};
  font-size: ${typography.fontSize.sm};
  padding: ${spacing[1]} ${spacing[3]};
  border-radius: 9999px;
`;

export const TrustSection: React.FC<TrustSectionProps> = ({ title, badges, certifications }) => {
  return (
    <Wrapper>
      <Inner>
        {title && <Title>{title}</Title>}
        <BadgeGrid>
          {badges.map((b, i) => (
            <Badge
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BadgeIcon>{b.icon}</BadgeIcon>
              <BadgeValue>{b.value}</BadgeValue>
              <BadgeLabel>{b.label}</BadgeLabel>
            </Badge>
          ))}
        </BadgeGrid>
        {certifications && (
          <Certs>
            {certifications.map((c, i) => (
              <CertTag key={i}>{c}</CertTag>
            ))}
          </Certs>
        )}
      </Inner>
    </Wrapper>
  );
};

export default TrustSection;