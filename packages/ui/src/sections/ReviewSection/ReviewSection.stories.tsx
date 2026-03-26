import type { Meta, StoryObj } from '@storybook/react';
import { ReviewSection } from './index';

const meta: Meta<typeof ReviewSection> = {
  title: 'Sections/ReviewSection',
  component: ReviewSection,
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile' } },
};
export default meta;
type Story = StoryObj<typeof ReviewSection>;

export const Default: Story = {
  args: {
    title: '구매자 리뷰',
    averageRating: 4.9,
    totalCount: 12847,
    reviews: [
      {
        author: '김지현',
        rating: 5,
        date: '2025.01.15',
        content: '진짜 2주 만에 변화가 느껴졌어요. 처음엔 반신반의했는데 지금은 가족들한테도 추천하고 있습니다.',
        verified: true,
        option: '30포 / 녹차맛',
        image: 'https://placehold.co/800x400/e8f5e9/2D6A4F?text=Review+Photo',
      },
      {
        author: '이민준',
        rating: 5,
        date: '2025.01.10',
        content: '포장이 꼼꼼하고 배송도 빠릅니다. 맛도 생각보다 훨씬 좋아요. 재구매 확정입니다!',
        verified: true,
        option: '30포 / 녹차맛',
      },
      {
        author: '박소연',
        rating: 4,
        date: '2025.01.05',
        content: '꾸준히 먹고 있는데 피부가 좋아진 것 같아요. 조금 더 먹어보고 재구매 결정할게요.',
        verified: true,
      },
    ],
  },
};