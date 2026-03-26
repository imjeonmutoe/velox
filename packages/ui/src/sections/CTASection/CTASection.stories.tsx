import type { Meta, StoryObj } from '@storybook/react';
import { CTASection } from './index';

const meta: Meta<typeof CTASection> = {
  title: 'Sections/CTASection',
  component: CTASection,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof CTASection>;

export const Default: Story = {
  args: {
    headline: '지금 바로 시작하세요',
    subtext: '오늘 주문 시 무료 배송 + 사은품 증정',
    urgencyText: '⚡ 오늘만 50% 할인 — 재고 27개 남음',
    ctaText: '지금 구매하기 →',
    price: 39000,
    originalPrice: 79000,
    note: '30일 환불 보장 · 카드 무이자 12개월',
  },
};