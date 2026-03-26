import type { Meta, StoryObj } from '@storybook/react';
import { ElectronicsTemplate } from './index';

const meta: Meta<typeof ElectronicsTemplate> = {
  title: 'Templates/ElectronicsTemplate',
  component: ElectronicsTemplate,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof ElectronicsTemplate>;

export const Default: Story = {
  args: {
    productName: 'Velox Phone Pro',
    tagline: '당신의 일상을 재정의할 스마트폰',
    price: 1290000,
    originalPrice: 1490000,
    productImage: 'https://placehold.co/500x600/171717/f97316?text=Phone',
  },
};