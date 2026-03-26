import type { Meta, StoryObj } from '@storybook/react';
import { ProblemSection } from './index';

const meta: Meta<typeof ProblemSection> = {
  title: 'Sections/ProblemSection',
  component: ProblemSection,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof ProblemSection>;

export const Default: Story = {
  args: {
    title: '이런 고민이 있으신가요?',
    subtitle: '많은 분들이 같은 문제로 고민하고 있습니다',
    problems: [
      { icon: '😣', text: '다이어트를 해도 요요가 계속 옵니다' },
      { icon: '😴', text: '피로가 쌓여 일상이 힘들어요' },
      { icon: '💸', text: '비싼 건강식품을 사도 효과가 없어요' },
    ],
    solutionText: '✅ 저희가 해결해드립니다',
  },
};