import React from 'react';
import type { Preview } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import veloxTheme from './velox-theme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const customViewports = {
  smartstore: { name: '스마트스토어', styles: { width: '1200px', height: '900px' } },
  coupang: { name: '쿠팡', styles: { width: '1280px', height: '900px' } },
  mobile: { name: '모바일', styles: { width: '375px', height: '812px' } },
  tablet: { name: '태블릿', styles: { width: '768px', height: '1024px' } },
};

const preview: Preview = {
  parameters: {
    docs: { theme: veloxTheme },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
      },
      defaultViewport: 'responsive',
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export default preview;