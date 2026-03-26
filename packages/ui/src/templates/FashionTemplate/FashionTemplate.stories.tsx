import type { Meta, StoryObj } from '@storybook/react';
import { FashionTemplate } from './index';

const meta: Meta<typeof FashionTemplate> = {
  title: 'Templates/FashionTemplate',
  component: FashionTemplate,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof FashionTemplate>;

export const Default: Story = {
  args: {
    brandName: 'VELOX FASHION',
    productName: '린넨 오버핏 셔츠',
    tagline: '여름의 시작을 가장 세련되게',
    price: 59000,
    originalPrice: 89000,
    productImage: 'https://placehold.co/500x600/262626/ffffff?text=Fashion',
  },
};