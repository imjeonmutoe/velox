import type { Meta, StoryObj } from '@storybook/react';
import { FeatureSection } from './index';

const meta: Meta<typeof FeatureSection> = {
  title: 'Sections/FeatureSection',
  component: FeatureSection,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof FeatureSection>;

export const Default: Story = {
  args: {
    title: '왜 우리 제품인가요?',
    subtitle: '3가지 핵심 차별점',
    features: [
      { icon: '⚡', title: '빠른 효과', description: '사용 첫 주부터 눈에 띄는 변화를 경험하세요.' },
      { icon: '🌿', title: '100% 천연 성분', description: '인체에 무해한 천연 원료만 사용합니다.' },
      { icon: '🔬', title: '임상 검증', description: '3년간의 임상시험으로 안전성을 입증했습니다.' },
    ],
  },
};