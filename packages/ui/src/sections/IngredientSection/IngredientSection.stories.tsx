import type { Meta, StoryObj } from '@storybook/react';
import { IngredientSection } from './index';

const meta: Meta<typeof IngredientSection> = {
  title: 'Sections/IngredientSection',
  component: IngredientSection,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof IngredientSection>;

export const Default: Story = {
  args: {
    title: '엄선된 원재료',
    subtitle: '자연에서 온 가장 순수한 성분만 담았습니다',
    ingredients: [
      {
        icon: '🍵',
        name: '제주 녹차',
        origin: '제주도 서귀포시',
        description: '청정 제주 화산토에서 자란 유기농 녹차. EGCG 함량이 일반 녹차의 3배입니다.',
        tags: ['유기농 인증', 'EGCG 풍부', '항산화'],
      },
      {
        icon: '🌿',
        name: '국내산 쑥',
        origin: '강화도',
        description: '강화도 갯벌 근처에서 자란 향이 진한 쑥. 소화 촉진 및 면역력 강화에 도움.',
        tags: ['국내산', '소화 촉진', '무농약'],
      },
      {
        icon: '🍯',
        name: '아카시아 꿀',
        origin: '경상북도 문경',
        description: '문경 청정 지역 아카시아 꽃에서 채취한 원료꿀. 가공 없이 그대로 사용.',
        tags: ['천연 감미료', '무가공', '항균'],
      },
    ],
  },
};