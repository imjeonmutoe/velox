import type { Meta, StoryObj } from '@storybook/react';
import { FoodTemplate } from './index';

const meta: Meta<typeof FoodTemplate> = {
  title: 'Templates/FoodTemplate',
  component: FoodTemplate,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    themeColor: { control: 'color' },
    mode: { control: 'radio', options: ['smartstore', 'wadiz'] },
  },
};
export default meta;
type Story = StoryObj<typeof FoodTemplate>;

export const SmartStore: Story = {
  name: '스마트스토어 — 제주 유기농 녹차',
  args: {
    mode: 'smartstore',
    productName: '제주 유기농 녹차',
    tagline: '제주 청정 화산토에서 자란 유기농 녹차. 하루 한 잔으로 건강을 채우세요.',
    price: 39000,
    originalPrice: 79000,
    headlineHighlight: '유기농',
    badgeText: '제주 직송',
    badgeIcon: '🍵',
    themeColor: '#2D6A4F',
    reviewScore: 4.9,
    reviewCount: 12847,
    repurchaseRate: 78,
    sections: { showReview: true },
  },
};

export const Wadiz: Story = {
  name: '와디즈 — 제주 유기농 녹차',
  args: {
    mode: 'wadiz',
    productName: '제주 유기농 녹차',
    tagline: '마신 뒤에야 안다, 제대로 된 녹차를',
    price: 39000,
    originalPrice: 79000,
    themeColor: '#2D6A4F',
    reviewScore: 4.9,
    reviewCount: 12847,
    sections: { showReview: true },
  },
};

export const JejuGreenTea: Story = {
  name: '제주 유기농 녹차',
  args: {
    productName: '제주 유기농 녹차',
    tagline: '제주 청정 화산토에서 자란 유기농 녹차. 하루 한 잔으로 건강을 채우세요.',
    price: 39000,
    originalPrice: 79000,
    headlineHighlight: '유기농',
    badgeText: '제주 직송',
    badgeIcon: '🍵',
    themeColor: '#2D6A4F',
    reviewScore: 4.9,
    reviewCount: 12847,
    repurchaseRate: 78,
    sections: { showReview: true },
    reviews: [
      { author: '김지현', rating: 5, date: '2025.01.15', content: '진짜 2주 만에 변화가 느껴졌어요! 꾸준히 먹으니까 확실히 달라요.', verified: true, option: '30포 / 녹차맛' },
      { author: '이민준', rating: 5, date: '2025.01.10', content: '맛이 깔끔하고 효과도 좋습니다. 재구매 확정!', verified: true },
      { author: '박소연', rating: 4, date: '2025.01.05', content: '포장이 꼼꼼하고 제품 퀄리티가 좋아요.', verified: true },
    ],
  },
};

export const OrganicHoney: Story = {
  name: '유기농 꿀',
  args: {
    productName: '문경 아카시아 생꿀',
    tagline: '꿀벌이 직접 만든 자연의 달콤함. 가공 없이 원물 그대로.',
    price: 29000,
    originalPrice: 55000,
    headlineHighlight: '아카시아',
    badgeText: '비가열 원물',
    badgeIcon: '🍯',
    themeColor: '#B45309',
    reviewScore: 4.8,
    reviewCount: 3241,
    sections: { showReview: true },
    reviews: [
      { author: '최유나', rating: 5, date: '2025.02.01', content: '향이 진하고 달콤해요. 매일 아침 먹고 있습니다.', verified: true },
      { author: '강민호', rating: 5, date: '2025.01.28', content: '선물용으로 샀는데 받은 분이 너무 좋아하셨어요.', verified: true },
      { author: '정다혜', rating: 4, date: '2025.01.20', content: '퀄리티 대비 가격이 합리적입니다.', verified: true },
    ],
  },
};