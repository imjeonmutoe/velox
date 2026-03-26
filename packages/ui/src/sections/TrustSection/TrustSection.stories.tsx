import type { Meta, StoryObj } from '@storybook/react';
import { TrustSection } from './index';

const meta: Meta<typeof TrustSection> = {
  title: 'Sections/TrustSection',
  component: TrustSection,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof TrustSection>;

export const Default: Story = {
  args: {
    title: '숫자로 증명합니다',
    badges: [
      { icon: '👥', label: '누적 구매자', value: '12,000+' },
      { icon: '⭐', label: '평균 평점', value: '4.9' },
      { icon: '🔄', label: '재구매율', value: '78%' },
      { icon: '📦', label: '당일 배송', value: '95%' },
    ],
    certifications: ['ISO 인증', 'GMP 인증', 'HACCP 인증', '식약처 허가'],
  },
};