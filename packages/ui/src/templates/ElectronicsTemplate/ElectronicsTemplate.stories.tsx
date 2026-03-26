import type { Meta, StoryObj } from '@storybook/react';
import { ElectronicsTemplate } from './index';

const meta: Meta<typeof ElectronicsTemplate> = {
  title: 'Templates/ElectronicsTemplate',
  component: ElectronicsTemplate,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof ElectronicsTemplate>;

export const VeloxPhonePro: Story = {
  name: 'Velox Phone Pro',
  args: {
    productName: 'Velox Phone Pro',
    tagline: '당신의 일상을 재정의할 스마트폰',
    price: 1290000,
    originalPrice: 1490000,
  },
};

export const VeloxPhoneLite: Story = {
  name: 'Velox Phone Lite',
  args: {
    productName: 'Velox Phone Lite',
    tagline: '가볍게, 빠르게, 오래',
    price: 690000,
    originalPrice: 890000,
    specs: [
      { label: '배터리', value: '4500mAh, 33W 고속 충전' },
      { label: '디스플레이', value: '6.4인치 AMOLED 90Hz' },
      { label: '카메라', value: '64MP 메인 + 8MP 광각' },
      { label: '프로세서', value: 'Velox Chip M1' },
      { label: '저장공간', value: '128GB / 256GB' },
      { label: '무게', value: '175g' },
      { label: '방수', value: 'IP54' },
    ],
  },
};