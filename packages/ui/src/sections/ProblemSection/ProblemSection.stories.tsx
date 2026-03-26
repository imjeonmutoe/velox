import type { Meta, StoryObj } from '@storybook/react';
import { ProblemSection } from './index';

const meta: Meta<typeof ProblemSection> = {
  title: 'Sections/ProblemSection',
  component: ProblemSection,
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile' } },
};
export default meta;
type Story = StoryObj<typeof ProblemSection>;

export const Default: Story = {
  args: {
    title: '이런 고민이 있으신가요?',
    problems: [
      { icon: '😣', text: '다이어트를 해도 요요가 반복됩니다' },
      { icon: '😴', text: '만성 피로로 일상이 무너지고 있어요' },
      { icon: '💸', text: '비싼 건강식품을 먹어도 효과가 없어요' },
    ],
    solutionText: '✅ 저희가 정확히 이 문제를 해결합니다',
  },
};