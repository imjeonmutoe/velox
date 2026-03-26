import type { Meta, StoryObj } from '@storybook/react';
import { FashionTemplate } from './index';

const meta: Meta<typeof FashionTemplate> = {
  title: 'Templates/FashionTemplate',
  component: FashionTemplate,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof FashionTemplate>;

export const LinenOverfit: Story = {
  name: '린넨 오버핏 셔츠',
  args: {
    brandName: 'VELOX FASHION',
    productName: '린넨 오버핏 셔츠',
    tagline: '여름의 시작을 가장 세련되게',
    price: 59000,
    originalPrice: 89000,
  },
};

export const WideSlacks: Story = {
  name: '와이드 슬랙스',
  args: {
    brandName: 'VELOX FASHION',
    productName: '울 혼방 와이드 슬랙스',
    tagline: '캐주얼과 포멀의 경계를 허물다',
    price: 79000,
    originalPrice: 119000,
  },
};