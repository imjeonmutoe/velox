import type { Meta, StoryObj } from '@storybook/react';
import { FoodTemplate } from './index';

const meta: Meta<typeof FoodTemplate> = {
  title: 'Templates/FoodTemplate',
  component: FoodTemplate,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    themeColor: { control: 'color' },
    'sections.showIngredient': { control: 'boolean' },
    'sections.showProcess': { control: 'boolean' },
    'sections.showTrust': { control: 'boolean' },
    'sections.showReview': { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof FoodTemplate>;

const jejuReviews = [
  { author: '김지현', rating: 5, date: '2025.01.15', content: '2주 만에 피부가 맑아진 게 느껴져요!', verified: true },
  { author: '이민준', rating: 5, date: '2025.01.10', content: '맛이 깔끔하고 효과도 좋습니다. 재구매 확정!', verified: true },
  { author: '박소연', rating: 4, date: '2025.01.05', content: '포장이 꼼꼼하고 제품 퀄리티가 좋아요.', verified: true },
];

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
    productImage: 'https://placehold.co/500x500/2D6A4F/ffffff?text=Jeju+Green+Tea',
    sections: { showIngredient: true, showProcess: true, showTrust: true, showReview: true },
    ingredients: [
      { icon: '🍵', name: '제주 녹차', origin: '제주 서귀포', description: '청정 화산토에서 재배한 EGCG 풍부한 녹차.', tags: ['유기농', 'EGCG 3배', '항산화'] },
      { icon: '🌿', name: '국내산 쑥', origin: '강화도', description: '소화 촉진 및 면역력 강화에 도움.', tags: ['국내산', '무농약'] },
      { icon: '🫚', name: '들기름', origin: '경북 의성', description: '오메가-3 풍부한 국내산 들기름.', tags: ['오메가-3', '냉압착'] },
    ],
    processSteps: [
      { icon: '🌱', title: '유기농 재배', description: '농약 없이 3년 이상 유기농 인증 토양에서 재배.', highlight: 'STEP 1' },
      { icon: '☀️', title: '수작업 수확', description: '최적의 시기에 수작업으로 찻잎만 선별 수확.', highlight: 'STEP 2' },
      { icon: '🔬', title: '성분 분석', description: 'EGCG 등 유효성분 함량 전수 검사.', highlight: 'STEP 3' },
      { icon: '⚙️', title: '저온 추출', description: '40°C 이하 저온에서 성분 파괴 없이 추출.', highlight: 'STEP 4' },
      { icon: '📦', title: '진공 포장', description: '산화 방지 진공 포장으로 신선도 유지.', highlight: 'STEP 5' },
    ],
    reviews: jejuReviews,
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
    productImage: 'https://placehold.co/500x500/B45309/ffffff?text=Honey',
    sections: { showIngredient: true, showProcess: true, showTrust: true, showReview: true },
    reviews: [
      { author: '최유나', rating: 5, date: '2025.02.01', content: '향이 진하고 달콤해요. 매일 아침 먹고 있습니다.', verified: true },
      { author: '강민호', rating: 5, date: '2025.01.28', content: '선물용으로 샀는데 받은 분이 너무 좋아하셨어요.', verified: true },
      { author: '정다혜', rating: 4, date: '2025.01.20', content: '퀄리티 대비 가격이 합리적입니다.', verified: true },
    ],
  },
};