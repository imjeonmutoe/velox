import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { DeliverySectionProps } from './types';

const Wrapper = styled.section`
  background: #f8f8f8;
  padding: 72px 24px;
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
  margin-bottom: 16px;
`;

/* "오늘출발" 스타일 초대형 텍스트 */
const BigText = styled(motion.div)`
  font-size: clamp(56px, 15vw, 96px);
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -0.05em;
  line-height: 0.95;
  margin-bottom: 20px;
`;

const CutoffRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const CutoffBadge = styled.span<{ $color: string }>`
  background: ${p => p.$color};
  color: white;
  font-size: 14px;
  font-weight: 800;
  padding: 6px 16px;
  border-radius: 999px;
`;

const CutoffText = styled.span`
  font-size: 15px;
  color: #636366;
  font-weight: 500;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e5e5;
  margin-bottom: 32px;
`;

const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const BenefitCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 24px 20px;
  text-align: center;
`;

const BenefitIcon = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
`;

const BenefitText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.5;
  word-break: keep-all;
`;

const DEFAULT_BENEFITS = [
  { icon: '🚀', text: '무료배송' },
  { icon: '🔄', text: '무료교환/반품' },
  { icon: '🛡️', text: '30일 환불보장' },
];

export const DeliverySection: React.FC<DeliverySectionProps> = ({
  cutoffTime = '오후 2시',
  deliveryTime = '내일',
  benefits,
  themeColor = '#2D6A4F',
}) => {
  const benefitItems = benefits
    ? benefits.map((b, i) => ({ icon: ['🚀', '🔄', '🛡️', '✅', '⭐'][i % 5], text: b }))
    : DEFAULT_BENEFITS;

  return (
    <Wrapper>
      <Inner>
        <EyebrowText>Delivery</EyebrowText>

        <BigText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          오늘출발
        </BigText>

        <CutoffRow>
          <CutoffBadge $color={themeColor}>{cutoffTime} 이전 주문</CutoffBadge>
          <CutoffText>→ {deliveryTime} 도착 보장</CutoffText>
        </CutoffRow>

        <Divider />

        <BenefitGrid>
          {benefitItems.map((b, i) => (
            <BenefitCard
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BenefitIcon>{b.icon}</BenefitIcon>
              <BenefitText>{b.text}</BenefitText>
            </BenefitCard>
          ))}
        </BenefitGrid>
      </Inner>
    </Wrapper>
  );
};

export default DeliverySection;