import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { ProblemSectionProps } from './types';

const Wrapper = styled.section`
  background: #f8f8f8;
  padding: 100px 24px;
`;

const Inner = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

const EyebrowText = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #aeaeb2;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: clamp(28px, 6vw, 42px);
  font-weight: 900;
  color: #1a1a1a;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin-bottom: 56px;
  word-break: keep-all;
`;

const ProblemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 56px;
`;

const ProblemItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid #ebebeb;

  &:first-child {
    border-top: 1px solid #ebebeb;
  }
`;

const ProblemIcon = styled.div`
  font-size: 28px;
  flex-shrink: 0;
  width: 44px;
  text-align: center;
  margin-top: 2px;
`;

const ProblemText = styled.p`
  font-size: 18px;
  color: #3a3a3c;
  line-height: 1.8;
  word-break: keep-all;
  font-weight: 400;
`;

const SolutionBox = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 20px;
  padding: 32px 28px;
  text-align: center;
`;

const SolutionText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: white;
  line-height: 1.5;
  word-break: keep-all;
`;

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  title = '이런 고민이 있으신가요?',
  subtitle,
  problems,
  solutionText,
}) => {
  return (
    <Wrapper>
      <Inner>
        <EyebrowText>Common Problem</EyebrowText>
        <Title>{title}</Title>

        <ProblemList>
          {problems.map((p, i) => (
            <ProblemItem
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProblemIcon>{p.icon}</ProblemIcon>
              <ProblemText>{p.text}</ProblemText>
            </ProblemItem>
          ))}
        </ProblemList>

        {solutionText && (
          <SolutionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SolutionText>{solutionText}</SolutionText>
          </SolutionBox>
        )}
      </Inner>
    </Wrapper>
  );
};

export default ProblemSection;