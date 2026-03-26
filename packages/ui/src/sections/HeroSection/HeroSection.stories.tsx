import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './index';

const meta: Meta<typeof HeroSection> = {
  title: 'Sections/HeroSection',
  component: HeroSection,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    category: { control: 'select', options: ['food', 'fashion', 'electronics'] },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};
export default meta;
type Story = StoryObj<typeof HeroSection>;

export const FoodDefault: Story = {
  name: '식품 — 기본',
  args: {
    category: 'food',
    badgeIcon: '🌿',
    badgeText: '유기농 인증 완료',
    headline: '하루 한 잔,\n10년을 바꿉니다',
    headlineHighlight: '10년',
    subheadline: '제주 청정 지역에서 직접 재배한 유기농 원료만 사용합니다.',
    ctaText: '지금 구매하기',
    ctaSubText: '30일 환불 보장',
    productImage: 'https://placehold.co/500x500/2D6A4F/ffffff?text=Product',
  },
};

export const FashionDark: Story = {
  name: '패션 — 다크',
  args: {
    category: 'fashion',
    backgroundColor: '#1A1A2E',
    textColor: '#ffffff',
    badgeIcon: '✨',
    badgeText: '2025 SS 신상',
    headline: '당신이 입는 것이\n당신입니다',
    headlineHighlight: '당신',
    subheadline: '계절을 앞서가는 디자인. 당신의 스타일을 완성하세요.',
    ctaText: '컬렉션 보기',
    ctaSubText: '무료 배송 · 무료 반품',
    productImage: 'https://placehold.co/500x600/E94560/ffffff?text=Fashion',
  },
};

export const Electronics: Story = {
  name: '가전 — 블루',
  args: {
    category: 'electronics',
    backgroundColor: '#F0F4F8',
    badgeIcon: '⚡',
    badgeText: 'CES 2025 수상',
    headline: '기술이 만든\n새로운 일상',
    headlineHighlight: '기술',
    subheadline: '5nm 최신 칩셋 · 48시간 배터리 · 200MP 카메라',
    ctaText: '사전 예약하기',
    ctaSubText: '정가 대비 15% 할인',
    productImage: 'https://placehold.co/500x500/0F3460/ffffff?text=Device',
  },
};

export const WithBadge: Story = {
  name: '뱃지 포함',
  args: {
    ...FoodDefault.args,
    badgeIcon: '✓',
    badgeText: '누적 판매 3만개',
  },
};

export const NoImage: Story = {
  name: '텍스트 온리',
  args: {
    category: 'food',
    headline: '자연이 주는\n가장 순수한 선물',
    subheadline: '1000년 전통 제조법으로 만든 프리미엄 건강식품.',
    ctaText: '지금 구매하기',
    productImage: undefined,
  },
};

export const MobileView: Story = {
  name: '모바일 뷰 (375px)',
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
  args: {
    ...FoodDefault.args,
  },
};