import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { ProductShowSectionProps } from './types';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 80px 0;
`;

const Grid = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: ${p => (p.$count === 1 ? '1fr' : p.$count === 2 ? '1fr 1fr' : '1fr 1fr 1fr')};
  gap: 2px;
  max-width: 860px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrap = styled(motion.div)`
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  cursor: default;

  &:hover img {
    transform: scale(1.03);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const PlaceholderDiv = styled.div<{ $color: string }>`
  width: 100%;
  height: 100%;
  background: ${p => p.$color};
`;

const Caption = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 16px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
`;

const Headline = styled.h2`
  font-size: clamp(28px, 6vw, 42px);
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 40px;
  padding: 0 24px;
`;

export const ProductShowSection: React.FC<ProductShowSectionProps> = ({
  headline,
  images,
  themeColor = '#e0e0e0',
}) => {
  return (
    <Wrapper>
      {headline && <Headline>{headline}</Headline>}
      <Grid $count={images.length}>
        {images.map((img, i) => (
          <ImageWrap
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {img.gifUrl ? (
              <Img src={img.gifUrl} alt={img.alt ?? ''} />
            ) : img.src ? (
              <Img src={img.src} alt={img.alt ?? ''} />
            ) : (
              <PlaceholderDiv $color={themeColor} />
            )}
            {img.caption && <Caption>{img.caption}</Caption>}
          </ImageWrap>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ProductShowSection;