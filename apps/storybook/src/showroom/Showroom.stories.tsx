import React, { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FoodTemplate } from '@velox/ui';
import { FashionTemplate } from '@velox/ui';
import { ElectronicsTemplate } from '@velox/ui';

const CATEGORIES = ['식품', '패션', '가전'] as const;
type CategoryLabel = typeof CATEGORIES[number];

const ShowroomContainer: React.FC = () => {
  const [active, setActive] = useState<CategoryLabel>('식품');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleExportHTML = () => {
    if (!contentRef.current) return;
    const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Velox — ${active} 상세페이지</title>
</head>
<body style="margin:0">
${contentRef.current.innerHTML}
</body>
</html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `velox-showroom-${active}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 클립보드에 복사되었습니다!');
    } catch {
      prompt('이 URL을 복사하세요:', window.location.href);
    }
  };

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      {/* 탭 바 */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#0f0f0f',
        padding: '10px 16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
      }}>
        {/* 1줄: 로고 + 액션 버튼 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: '#6366F1', fontWeight: 800, fontSize: '16px' }}>⚡ Velox</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={handleExportHTML}
              style={{
                background: '#1a1a1a',
                color: '#a3a3a3',
                border: '1px solid #2a2a2a',
                borderRadius: '6px',
                padding: '6px 12px',
                cursor: 'pointer',
                fontSize: '12px',
                whiteSpace: 'nowrap',
              }}
            >
              HTML 내보내기
            </button>
            <button
              onClick={handleCopyLink}
              style={{
                background: '#6366F1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              링크 복사
            </button>
          </div>
        </div>
        {/* 2줄: 카테고리 탭 */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                flex: 1,
                background: active === cat ? '#6366F1' : '#1a1a1a',
                color: active === cat ? 'white' : '#a3a3a3',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 0',
                cursor: 'pointer',
                fontWeight: active === cat ? 700 : 400,
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 템플릿 렌더링 */}
      <div ref={contentRef} style={{ overflowX: 'hidden', width: '100%' }}>
      {active === '식품' && (
        <FoodTemplate
          productName="제주 유기농 녹차"
          tagline="제주 청정 화산토에서 자란 유기농 녹차. 하루 한 잔으로 건강을 채우세요."
          price={39000}
          originalPrice={79000}
          headlineHighlight="유기농"
          badgeText="제주 직송"
          badgeIcon="🍵"
          productImage="https://placehold.co/500x500/2D6A4F/ffffff?text=Green+Tea"
          reviews={[
            { author: '김지현', rating: 5, date: '2025.01.15', content: '2주 만에 피부가 맑아진 게 느껴져요!', verified: true },
            { author: '이민준', rating: 5, date: '2025.01.10', content: '재구매 확정!', verified: true },
            { author: '박소연', rating: 4, date: '2025.01.05', content: '포장도 꼼꼼하고 좋아요.', verified: true },
          ]}
        />
      )}
      {active === '패션' && (
        <FashionTemplate
          brandName="VELOX FASHION"
          productName="린넨 오버핏 셔츠"
          tagline="여름의 시작을 가장 세련되게"
          price={59000}
          originalPrice={89000}
          productImage="https://placehold.co/500x600/1A1A2E/ffffff?text=Fashion"
        />
      )}
      {active === '가전' && (
        <ElectronicsTemplate
          productName="Velox Phone Pro"
          tagline="당신의 일상을 재정의할 스마트폰"
          price={1290000}
          originalPrice={1490000}
          productImage="https://placehold.co/500x600/0F3460/E94560?text=Phone"
        />
      )}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Showroom/클라이언트 쇼룸',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '클라이언트에게 보여주는 라이브 데모 쇼룸. 카테고리 탭으로 전환하고 HTML 내보내기 가능.',
      },
    },
  },
};
export default meta;

export const 전체쇼룸: StoryObj = {
  render: () => <ShowroomContainer />,
};