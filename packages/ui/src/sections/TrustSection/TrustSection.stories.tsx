import type { Meta, StoryObj } from '@storybook/react';
import { TrustSection } from './index';

const meta: Meta<typeof TrustSection> = {
  title: 'Sections/TrustSection',
  component: TrustSection,
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile' } },
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
    certifications: ['식약처 허가', 'GMP 인증', 'HACCP 인증', 'ISO 22000'],
  },
};