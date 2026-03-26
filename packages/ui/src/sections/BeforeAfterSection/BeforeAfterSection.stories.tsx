import type { Meta, StoryObj } from '@storybook/react';
import { BeforeAfterSection } from './index';

const meta: Meta<typeof BeforeAfterSection> = {
  title: 'Sections/BeforeAfterSection',
  component: BeforeAfterSection,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof BeforeAfterSection>;

export const Default: Story = {
  args: {
    title: '사용 전 / 사용 후',
    subtitle: '30일 사용 결과입니다',
    items: [
      {
        label: '30일 후 변화',
        beforeImage: 'https://placehold.co/300x240/e5e5e5/737373?text=Before',
        afterImage: 'https://placehold.co/300x240/f97316/ffffff?text=After',
        description: '30일 만에 눈에 띄는 변화',
      },
    ],
  },
};