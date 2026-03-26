import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { HookSectionProps } from './types';

const Wrapper = styled.section<{ $bg: string; $hasImage: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p =>
    p.$hasImage ? `url(${p.$bg}) center/cover no-repeat` : p.$bg};
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 24px;
  max-width: 680px;
`;

const Headline = styled(motion.h1)`
  font-size: clamp(40px, 10vw, 72px);
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.04em;
  line-height: 1.1;
  word-break: keep-all;
`;

const Subtext = styled(motion.p)`
  margin-top: 24px;
  font-size: clamp(16px, 3.5vw, 22px);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  word-break: keep-all;
`;

export const HookSection: React.FC<HookSectionProps> = ({
  headline,
  subtext,
  backgroundImage,
  backgroundGif,
  themeColor = '#1a1a1a',
}) => {
  const bg = backgroundGif ?? backgroundImage ?? themeColor;
  const hasImage = !!(backgroundGif ?? backgroundImage);

  return (
    <Wrapper $bg={bg} $hasImage={hasImage}>
      {hasImage && <Overlay />}
      <Content>
        <Headline
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {headline}
        </Headline>
        {subtext && (
          <Subtext
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {subtext}
          </Subtext>
        )}
      </Content>
    </Wrapper>
  );
};

export default HookSection;