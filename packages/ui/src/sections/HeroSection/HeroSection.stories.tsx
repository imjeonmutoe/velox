import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './index';

const meta: Meta<typeof HeroSection> = {
  title: 'Sections/HeroSection',
  component: HeroSection,
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'mobile' } },
};
export default meta;
type Story = StoryObj<typeof HeroSection>;

export const FoodDefault: Story = {
  name: '식품',
  args: {
    category: 'food',
    badgeIcon: '🍵',
    badgeText: '유기농 인증',
    headline: '하루 한 잔으로\n10년이 달라집니다',
    headlineHighlight: '10년',
    subheadline: '제주 청정 화산토에서 자란 유기농 녹차. 12,000명이 선택한 건강 습관.',
    price: 39000,
    originalPrice: 79000,
    reviewScore: 4.9,
    reviewCount: 12847,
    repurchaseRate: 78,
    stockCount: 27,
    sameDayDelivery: true,
    productImage: 'https://placehold.co/800x1000/1a3a2a/ffffff?text=Product',
  },
};

export const FashionDefault: Story = {
  name: '패션',
  args: {
    category: 'fashion',
    badgeIcon: '✦',
    badgeText: '2025 SS',
    headline: '당신이 입는 것이\n당신입니다',
    headlineHighlight: '당신',
    subheadline: '한국인 체형에 맞게 설계된 퍼펙트 핏.',
    price: 59000,
    originalPrice: 89000,
    reviewScore: 4.8,
    reviewCount: 3421,
    stockCount: 14,
    productImage: 'https://placehold.co/800x1000/0d0d0d/ffffff?text=Fashion',
  },
};

export const ElectronicsDefault: Story = {
  name: '가전',
  args: {
    category: 'electronics',
    badgeIcon: '⚡',
    badgeText: 'CES 2025 수상',
    headline: '기술이 만든\n새로운 일상',
    headlineHighlight: '기술',
    subheadline: '5000mAh 대용량 배터리. 하루 종일 자유롭게.',
    price: 1290000,
    originalPrice: 1490000,
    reviewScore: 4.9,
    reviewCount: 8203,
    stockCount: 50,
    productImage: 'https://placehold.co/800x1000/0a1628/ffffff?text=Device',
  },
};