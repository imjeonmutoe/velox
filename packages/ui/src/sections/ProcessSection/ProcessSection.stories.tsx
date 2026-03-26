import type { Meta, StoryObj } from '@storybook/react';
import { ProcessSection } from './index';

const meta: Meta<typeof ProcessSection> = {
  title: 'Sections/ProcessSection',
  component: ProcessSection,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof ProcessSection>;

export const Default: Story = {
  args: {
    title: '믿을 수 있는 생산 과정',
    subtitle: '원료 수확부터 포장까지 모든 과정을 직접 관리합니다',
    accentColor: '#2D6A4F',
    steps: [
      { icon: '🌱', title: '원료 재배', description: '제주 청정 지역에서 무농약으로 직접 재배합니다.', highlight: 'STEP 1' },
      { icon: '🔬', title: '성분 분석', description: '수확 후 즉시 성분 함량을 분석하고 기준치 이상만 선별합니다.', highlight: 'STEP 2' },
      { icon: '⚙️', title: '저온 추출', description: '40°C 이하 저온에서 성분 파괴 없이 추출합니다.', highlight: 'STEP 3' },
      { icon: '🧪', title: '품질 검사', description: '식약처 기준 중금속·농약 잔류 검사를 통과한 원료만 사용합니다.', highlight: 'STEP 4' },
      { icon: '📦', title: '개별 포장', description: '산화 방지 진공 포장으로 신선도를 최대한 유지합니다.', highlight: 'STEP 5' },
    ],
  },
};