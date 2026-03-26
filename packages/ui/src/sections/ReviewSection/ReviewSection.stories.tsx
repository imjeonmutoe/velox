import type { Meta, StoryObj } from '@storybook/react';
import { ReviewSection } from './index';

const meta: Meta<typeof ReviewSection> = {
  title: 'Sections/ReviewSection',
  component: ReviewSection,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof ReviewSection>;

export const Default: Story = {
  args: {
    title: '실제 구매자 후기',
    reviews: [
      { author: '김지현', rating: 5, date: '2025.01.15', content: '정말 효과 있어요! 2주 만에 변화가 느껴졌습니다.', verified: true },
      { author: '이민준', rating: 5, date: '2025.01.10', content: '포장도 꼼꼼하고 배송도 빠릅니다. 재구매 의사 100%', verified: true },
      { author: '박소연', rating: 4, date: '2025.01.05', content: '맛도 좋고 효과도 나쁘지 않아요. 꾸준히 먹어볼 예정입니다.', verified: true },
    ],
  },
};