import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { LifestyleSectionProps } from './types';

const Wrapper = styled.section`
  background: #f8f8f8;
  padding: 80px 24px;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const TextBlock = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Headline = styled(motion.h2)`
  font-size: clamp(32px, 7vw, 52px);
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: -0.04em;
  line-height: 1.1;
  word-break: keep-all;
`;

const Subtext = styled(motion.p)`
  margin-top: 16px;
  font-size: 17px;
  color: #555;
  line-height: 1.65;
  word-break: keep-all;
`;

const ImageWrap = styled(motion.div)`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  &:hover img {
    transform: scale(1.03);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`;

const PlaceholderDiv = styled.div<{ $color: string }>`
  width: 100%;
  height: 100%;
  background: ${p => p.$color};
`;

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({
  headline,
  subtext,
  image,
  gifUrl,
  themeColor = '#d0d0d0',
}) => {
  const src = gifUrl ?? image;

  return (
    <Wrapper>
      <Inner>
        {(headline || subtext) && (
          <TextBlock>
            {headline && (
              <Headline
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {headline}
              </Headline>
            )}
            {subtext && (
              <Subtext
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                {subtext}
              </Subtext>
            )}
          </TextBlock>
        )}
        <ImageWrap
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {src ? (
            <Img src={src} alt={headline ?? ''} />
          ) : (
            <PlaceholderDiv $color={themeColor} />
          )}
        </ImageWrap>
      </Inner>
    </Wrapper>
  );
};

export default LifestyleSection;