import type { Meta, StoryObj } from '@storybook/react';
import { FAQSection } from './index';

const meta: Meta<typeof FAQSection> = {
  title: 'Sections/FAQSection',
  component: FAQSection,
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile' } },
};
export default meta;
type Story = StoryObj<typeof FAQSection>;

export const Default: Story = {
  args: {
    items: [
      { question: '배송은 얼마나 걸리나요?', answer: '오늘 오후 2시 이전 주문 시 당일 출고, 다음날 도착합니다.' },
      { question: '환불·교환은 어떻게 하나요?', answer: '수령 후 30일 이내 미개봉 제품 100% 환불 가능합니다.' },
      { question: '처음 먹어도 괜찮나요?', answer: '천연 원료만 사용해 처음 드시는 분도 안전합니다.' },
      { question: '하루 얼마나 먹어야 하나요?', answer: '하루 1-2포를 식후에 드시는 것을 권장합니다.' },
    ],
  },
};