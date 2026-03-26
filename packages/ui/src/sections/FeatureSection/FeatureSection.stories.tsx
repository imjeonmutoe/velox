import type { Meta, StoryObj } from '@storybook/react';
import { FeatureSection } from './index';

const meta: Meta<typeof FeatureSection> = {
  title: 'Sections/FeatureSection',
  component: FeatureSection,
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile' } },
};
export default meta;
type Story = StoryObj<typeof FeatureSection>;

export const Default: Story = {
  args: {
    title: '왜 우리 제품인가요?',
    features: [
      {
        icon: '🌿',
        title: '100% 천연 성분',
        description: '화학 첨가물 없이 자연에서 온 원료만 사용합니다. 당신의 몸이 정직하게 반응합니다.',
        image: 'https://placehold.co/600x480/e8f5e9/2D6A4F?text=Natural',
      },
      {
        icon: '⚡',
        title: '2주 만에 느끼는 변화',
        description: '임상시험을 통해 2주 이내 체감 효과를 확인했습니다. 포기하지 않아도 됩니다.',
        image: 'https://placehold.co/600x480/e3f2fd/1565C0?text=Effect',
      },
      {
        icon: '🔬',
        title: '식약처 허가 완료',
        description: '국내 최고 수준의 품질 검사를 통과했습니다. 안전성은 숫자로 증명합니다.',
        image: 'https://placehold.co/600x480/fce4ec/c62828?text=Certified',
      },
    ],
  },
};