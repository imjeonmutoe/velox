import type { Meta, StoryObj } from '@storybook/react';
import { CTASection } from './index';

const meta: Meta<typeof CTASection> = {
  title: 'Sections/CTASection',
  component: CTASection,
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile' } },
};
export default meta;
type Story = StoryObj<typeof CTASection>;

export const Default: Story = {
  args: {
    category: 'food',
    headline: '지금 바로 시작하세요',
    subtext: '오늘 주문 시 무료 배송 + 사은품 증정',
    ctaText: '지금 구매하기',
    price: 39000,
    originalPrice: 79000,
    stockCount: 27,
    todayBenefit: '오늘 주문 시 샘플 3종 증정',
    guarantees: ['30일 환불보장', '무료배송', '카드 12개월 무이자'],
  },
};