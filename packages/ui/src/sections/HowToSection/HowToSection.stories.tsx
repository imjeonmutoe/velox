import type { Meta, StoryObj } from '@storybook/react';
import { HowToSection } from '.';

const meta: Meta<typeof HowToSection> = {
  title: 'Sections/HowToSection',
  component: HowToSection,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof HowToSection>;

export const Food: Story = {
  args: {
    title: '이렇게 드세요',
    subtitle: '올바른 섭취 방법으로 최상의 효과를 경험하세요',
    accentColor: '#2D6A4F',
    steps: [
      { step: 1, icon: '🌅', title: '공복 또는 식후에 드세요', description: '아침 공복이나 식사 30분 후 물 200ml와 함께 섭취하면 흡수율이 높아집니다.' },
      { step: 2, icon: '💊', title: '하루 1~2회, 1회 1포', description: '과다 복용하지 않도록 주의하고, 규칙적인 시간에 드시면 더 효과적입니다.' },
      { step: 3, icon: '📅', title: '최소 4주 이상 꾸준히', description: '효과는 개인차가 있지만 4주 이상 꾸준히 섭취 시 변화를 느끼실 수 있습니다.' },
    ],
  },
};