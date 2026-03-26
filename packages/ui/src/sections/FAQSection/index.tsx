import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import type { FAQSectionProps } from './types';

const Wrapper = styled.section`
  background: white;
  padding: 80px 24px;
`;

const Inner = styled.div`
  max-width: 680px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -0.025em;
  margin-bottom: 32px;
`;

const Item = styled.div`
  border-bottom: 1px solid #f2f2f7;
`;

const Question = styled.button<{ $open: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 16px;
  font-weight: ${p => p.$open ? 700 : 500};
  color: #1a1a1a;
  gap: 16px;
  word-break: keep-all;
  line-height: 1.5;
`;

const Arrow = styled.span<{ $open: boolean }>`
  color: #aeaeb2;
  transition: transform 0.2s;
  transform: ${p => p.$open ? 'rotate(180deg)' : 'rotate(0)'};
  flex-shrink: 0;
  font-size: 20px;
`;

const Answer = styled(motion.div)`
  overflow: hidden;
`;

const AnswerText = styled.p`
  font-size: 15px;
  color: #636366;
  line-height: 1.7;
  padding-bottom: 20px;
  word-break: keep-all;
`;

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = '자주 묻는 질문',
  items,
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <Wrapper>
      <Inner>
        <Title>{title}</Title>
        {items.map((item, i) => (
          <Item key={i}>
            <Question
              $open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <span>Q. {item.question}</span>
              <Arrow $open={openIdx === i}>⌄</Arrow>
            </Question>
            <AnimatePresence initial={false}>
              {openIdx === i && (
                <Answer
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <AnswerText>{item.answer}</AnswerText>
                </Answer>
              )}
            </AnimatePresence>
          </Item>
        ))}
      </Inner>
    </Wrapper>
  );
};

export default FAQSection;