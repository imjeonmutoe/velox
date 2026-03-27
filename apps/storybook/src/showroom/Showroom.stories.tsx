import React, { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FoodTemplate } from '@velox/ui';
import { FashionTemplate } from '@velox/ui';
import { ElectronicsTemplate } from '@velox/ui';

type Screen = 'home' | 'category';

interface CategoryItem {
  id: string;
  label: string;
  emoji: string;
  gradient: string;
  hasTemplate: boolean;
  gridColumn: string;
  gridRow: string;
}

const CATEGORY_LIST: CategoryItem[] = [
  { id: '식품', label: '식품', emoji: '🍵', gradient: 'linear-gradient(135deg, #134e4a, #065f46)', hasTemplate: true,  gridColumn: '1 / 3', gridRow: '1' },
  { id: '패션', label: '패션', emoji: '👗', gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)', hasTemplate: true,  gridColumn: '3',     gridRow: '1' },
  { id: '가전', label: '가전', emoji: '📱', gradient: 'linear-gradient(135deg, #0c1445, #1e3a5f)', hasTemplate: true,  gridColumn: '1',     gridRow: '2' },
  { id: '뷰티', label: '뷰티', emoji: '💄', gradient: 'linear-gradient(135deg, #4a0d2e, #831843)', hasTemplate: false, gridColumn: '2',     gridRow: '2' },
  { id: '홈리빙', label: '홈리빙', emoji: '🏠', gradient: 'linear-gradient(135deg, #3b1f0a, #7c3f1a)', hasTemplate: false, gridColumn: '3',  gridRow: '2 / 4' },
  { id: '새템플릿', label: '새 템플릿', emoji: '➕', gradient: 'transparent', hasTemplate: false, gridColumn: '1 / 3', gridRow: '3' },
];

const DEFAULTS: Record<string, {
  productName: string; tagline: string; price: string;
  originalPrice: string; themeColor: string; badgeText: string; badgeIcon: string;
}> = {
  식품: {
    productName: '제주 유기농 녹차',
    tagline: '마신 뒤에야 안다, 제대로 된 녹차를',
    price: '39000', originalPrice: '79000', themeColor: '#2D6A4F', badgeText: '제주 직송', badgeIcon: '🍵',
  },
  패션: {
    productName: '린넨 오버핏 셔츠',
    tagline: '여름의 시작을 가장 세련되게',
    price: '59000', originalPrice: '89000', themeColor: '#1A1A2E', badgeText: '2025 SS 신상', badgeIcon: '✨',
  },
  가전: {
    productName: 'Velox Phone Pro',
    tagline: '당신의 일상을 재정의할 스마트폰',
    price: '1290000', originalPrice: '1490000', themeColor: '#0F3460', badgeText: 'CES 2025 수상', badgeIcon: '⚡',
  },
};

interface CustomizerState {
  productName: string; tagline: string; price: string;
  originalPrice: string; themeColor: string; badgeText: string; badgeIcon: string;
}

// ─── HTML 내보내기 ─────────────────────────────────────────────────────────────

const INLINE_PROPS = [
  'display','position','top','right','bottom','left','zIndex',
  'flexDirection','flexWrap','alignItems','justifyContent','flex','flexShrink','flexGrow',
  'gap','rowGap','columnGap',
  'margin','marginTop','marginRight','marginBottom','marginLeft',
  'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
  'width','height','maxWidth','minWidth','minHeight','aspectRatio',
  'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','fontStyle',
  'color','background','backgroundColor','backgroundImage','backgroundSize','backgroundPosition',
  'border','borderTop','borderRight','borderBottom','borderLeft',
  'borderRadius','borderTopLeftRadius','borderTopRightRadius','borderBottomLeftRadius','borderBottomRightRadius',
  'textAlign','textDecoration','whiteSpace','wordBreak','overflowWrap',
  'overflow','overflowX','overflowY',
  'objectFit','objectPosition',
  'boxSizing','boxShadow',
  'opacity','transform','transition',
  'gridTemplateColumns','gridColumn','gridRow','gridArea',
  'listStyle','listStyleType',
  'verticalAlign','textTransform',
];

function inlineAllStyles(root: HTMLElement): void {
  const walk = (el: Element): void => {
    if (!(el instanceof HTMLElement)) return;
    const computed = window.getComputedStyle(el);
    const styles: string[] = [];
    INLINE_PROPS.forEach(prop => {
      const cssProp = prop.replace(/([A-Z])/g, c => `-${c.toLowerCase()}`);
      const val = computed.getPropertyValue(cssProp);
      if (val && val !== '' && val !== 'initial' && val !== 'normal' && val !== 'none' && val !== 'auto') {
        styles.push(`${cssProp}:${val}`);
      }
    });
    const display = computed.getPropertyValue('display');
    if (display) styles.push(`display:${display}`);
    el.setAttribute('style', styles.join(';'));
    el.removeAttribute('class');
    Array.from(el.children).forEach(walk);
  };
  walk(root);
}

function exportToHTML(contentEl: HTMLElement, category: string): void {
  const clone = contentEl.cloneNode(true) as HTMLElement;
  const tempContainer = document.createElement('div');
  tempContainer.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:860px;';
  document.body.appendChild(tempContainer);
  tempContainer.appendChild(clone);
  inlineAllStyles(clone);

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Velox — ${category} 상세페이지</title>
  <style>
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; }
    img { max-width: 100%; height: auto; }
  </style>
</head>
<body>
  <div style="max-width:860px;margin:0 auto;overflow-x:hidden;">
    ${clone.innerHTML}
  </div>
</body>
</html>`;

  document.body.removeChild(tempContainer);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `velox-${category}-${Date.now()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─── 커스터마이저 패널 ────────────────────────────────────────────────────────

const CustomizerPanel: React.FC<{
  values: CustomizerState;
  onChange: (k: keyof CustomizerState, v: string) => void;
  onClose: () => void;
}> = ({ values, onChange, onClose }) => (
  <div style={{
    position: 'fixed', top: 0, right: 0, width: '280px', height: '100vh',
    background: '#0f0f0f', borderLeft: '1px solid #2a2a2a',
    overflowY: 'auto', zIndex: 300, display: 'flex', flexDirection: 'column',
    fontFamily: 'Pretendard, -apple-system, sans-serif',
  }}>
    <div style={{ padding: '16px', borderBottom: '1px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
      <span style={{ color: '#fafafa', fontWeight: 700, fontSize: '14px' }}>🎨 커스터마이즈</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#737373', fontSize: '20px', cursor: 'pointer' }}>×</button>
    </div>
    <div style={{ padding: '16px', flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
        <label style={{ fontSize: '11px', fontWeight: 600, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.05em' }}>브랜드 컬러</label>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="color" value={values.themeColor} onChange={e => onChange('themeColor', e.target.value)}
            style={{ width: '40px', height: '36px', border: '1px solid #2a2a2a', borderRadius: '6px', background: '#1a1a1a', cursor: 'pointer', padding: '2px', flexShrink: 0 }} />
          <input type="text" value={values.themeColor} onChange={e => onChange('themeColor', e.target.value)}
            style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '6px', color: '#fafafa', fontSize: '13px', padding: '8px 10px', flex: 1, boxSizing: 'border-box', outline: 'none' }} />
        </div>
      </div>
      {(['productName', 'tagline', 'badgeIcon', 'badgeText'] as const).map(key => (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
          <label style={{ fontSize: '11px', fontWeight: 600, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {key === 'productName' ? '제품명' : key === 'tagline' ? '태그라인' : key === 'badgeIcon' ? '뱃지 아이콘' : '뱃지 텍스트'}
          </label>
          {key === 'tagline'
            ? <textarea value={values[key]} onChange={e => onChange(key, e.target.value)} rows={3}
                style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '6px', color: '#fafafa', fontSize: '13px', padding: '8px 10px', width: '100%', boxSizing: 'border-box', outline: 'none', resize: 'vertical' }} />
            : <input type="text" value={values[key]} onChange={e => onChange(key, e.target.value)}
                style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '6px', color: '#fafafa', fontSize: '13px', padding: '8px 10px', width: '100%', boxSizing: 'border-box', outline: 'none' }} />
          }
        </div>
      ))}
      {(['price', 'originalPrice'] as const).map(key => (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
          <label style={{ fontSize: '11px', fontWeight: 600, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {key === 'price' ? '판매가 (원)' : '정가 (원)'}
          </label>
          <input type="number" value={values[key]} onChange={e => onChange(key, e.target.value)}
            style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '6px', color: '#fafafa', fontSize: '13px', padding: '8px 10px', width: '100%', boxSizing: 'border-box', outline: 'none' }} />
        </div>
      ))}
    </div>
  </div>
);

// ─── 홈 화면 (벤토 그리드) ────────────────────────────────────────────────────

const HomeScreen: React.FC<{
  onCategoryClick: (cat: CategoryItem, el: HTMLElement) => void;
}> = ({ onCategoryClick }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', minHeight: '100vh',
      background: '#0f0f0f', fontFamily: 'Pretendard, -apple-system, sans-serif',
      userSelect: 'none',
    }}>
      {/* 헤더 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px 16px', flexShrink: 0 }}>
        <span style={{ color: '#6366f1', fontWeight: 800, fontSize: '24px', letterSpacing: '-0.5px' }}>⚡ Velox</span>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#2a2a2a', border: '1px solid #3a3a3a', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <span style={{ fontSize: '16px' }}>👤</span>
        </div>
      </div>

      {/* 벤토 그리드 */}
      <div style={{ flex: 1, padding: '8px 20px 20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, minmax(120px, 1fr))', gap: '12px' }}>
        {CATEGORY_LIST.map(cat => {
          const isNew = cat.id === '새템플릿';
          const hovered = hoveredId === cat.id;
          return (
            <div
              key={cat.id}
              onClick={e => onCategoryClick(cat, e.currentTarget as HTMLElement)}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                gridColumn: cat.gridColumn,
                gridRow: cat.gridRow,
                background: isNew ? 'transparent' : cat.gradient,
                border: isNew ? '2px dashed #2a2a2a' : `2px solid ${hovered ? '#6366f1' : 'transparent'}`,
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                flexDirection: cat.gridRow === '2 / 4' ? 'column' : 'row',
                alignItems: cat.gridRow === '2 / 4' ? 'flex-start' : 'center',
                justifyContent: cat.gridRow === '2 / 4' ? 'flex-end' : 'flex-start',
                gap: '12px',
                cursor: isNew ? 'default' : 'pointer',
                transform: hovered && !isNew ? 'scale(1.02)' : 'scale(1)',
                transition: 'border-color 0.2s, transform 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* 식품 카드: 넓은 카드는 이모지를 우측에, 텍스트를 좌측에 */}
              {cat.gridColumn === '1 / 3' && cat.gridRow === '1' ? (
                <>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>TEMPLATE</div>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff' }}>{cat.label}</div>
                  </div>
                  <span style={{ fontSize: '56px', lineHeight: 1 }}>{cat.emoji}</span>
                </>
              ) : cat.gridRow === '2 / 4' ? (
                /* 홈리빙: 세로로 긴 카드 */
                <>
                  <span style={{ fontSize: '40px', lineHeight: 1, marginBottom: 'auto' }}>{cat.emoji}</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>COMING SOON</div>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>{cat.label}</div>
                  </div>
                </>
              ) : cat.gridColumn === '1 / 3' && cat.gridRow === '3' ? (
                /* 새템플릿: 넓은 하단 카드 */
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', justifyContent: 'center' }}>
                  <span style={{ fontSize: '32px' }}>{cat.emoji}</span>
                  <span style={{ fontSize: '18px', fontWeight: 600, color: '#444' }}>{cat.label}</span>
                </div>
              ) : (
                /* 일반 1x1 카드 */
                <>
                  <span style={{ fontSize: '40px', lineHeight: 1 }}>{cat.emoji}</span>
                  <div>
                    {!cat.hasTemplate && <div style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', marginBottom: '2px' }}>SOON</div>}
                    <div style={{ fontSize: '15px', fontWeight: 600, color: cat.hasTemplate ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)' }}>{cat.label}</div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* 통계 바 */}
      <div style={{ background: '#111111', borderTop: '1px solid #1a1a1a', padding: '20px 24px', display: 'flex', justifyContent: 'space-around', flexShrink: 0 }}>
        {[
          { icon: '🎨', value: '6', label: '템플릿' },
          { icon: '👥', value: '0', label: '클라이언트' },
          { icon: '📄', value: '0', label: '납품' },
        ].map(stat => (
          <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            <span style={{ fontSize: '18px' }}>{stat.icon}</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>{stat.value}</span>
            <span style={{ fontSize: '12px', color: '#666' }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── 카테고리 상세 화면 ───────────────────────────────────────────────────────

const CategoryScreen: React.FC<{
  category: CategoryItem;
  onBack: () => void;
  customizer: CustomizerState;
  onCustomizerChange: (k: keyof CustomizerState, v: string) => void;
  panelOpen: boolean;
  onPanelToggle: () => void;
  contentRef: React.RefObject<HTMLDivElement>;
  screenRef: React.RefObject<HTMLDivElement>;
  entering: boolean;
}> = ({ category, onBack, customizer, onCustomizerChange, panelOpen, onPanelToggle, contentRef, screenRef, entering }) => {
  const [backHovered, setBackHovered] = useState(false);
  const price = Number(customizer.price) || 0;
  const originalPrice = Number(customizer.originalPrice) || 0;

  const handleExportHTML = () => {
    if (!contentRef.current) return;
    exportToHTML(contentRef.current, category.label);
  };

  return (
    <div
      ref={screenRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        display: 'flex', flexDirection: 'column',
        background: '#0f0f0f',
        fontFamily: 'Pretendard, -apple-system, sans-serif',
        animation: entering ? 'veloxFadeUp 0.35s ease-out' : undefined,
      }}
    >
      {/* 상단 네비게이션 */}
      <div style={{ background: '#0f0f0f', borderBottom: '1px solid #1a1a1a', padding: '12px 20px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <button
          onClick={onBack}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: backHovered ? '#6366f1' : '#ffffff',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, transition: 'background 0.2s',
          }}
        >
          <span style={{ fontSize: '16px', color: backHovered ? '#fff' : '#000', lineHeight: 1 }}>←</span>
        </button>
        <span style={{ flex: 1, fontSize: '16px', fontWeight: 600, color: '#ffffff', textAlign: 'center' }}>
          {category.emoji} {category.label}
        </span>
        <div style={{ width: '36px' }} />
      </div>

      {/* 템플릿 미리보기 */}
      <div style={{
        flex: 1, overflowY: 'auto', overflowX: 'hidden',
        background: '#f5f5f5',
        marginRight: panelOpen ? '280px' : 0,
        transition: 'margin-right 0.2s',
      }}>
        <div ref={contentRef}>
          {category.hasTemplate ? (
            <>
              {category.id === '식품' && (
                <FoodTemplate
                  productName={customizer.productName}
                  tagline={customizer.tagline}
                  price={price}
                  originalPrice={originalPrice}
                  themeColor={customizer.themeColor}
                  badgeText={customizer.badgeText}
                  badgeIcon={customizer.badgeIcon}
                  reviewScore={4.9}
                  reviewCount={12847}
                  repurchaseRate={78}
                  stockCount={27}
                  reviews={[
                    { author: '김지현', rating: 5, date: '2025.01.15', content: '진짜 2주 만에 변화가 느껴졌어요!', verified: true, option: '30포 / 녹차맛' },
                    { author: '이민준', rating: 5, date: '2025.01.10', content: '배송 빠르고 효과도 좋아요. 재구매 확정!', verified: true },
                    { author: '박소연', rating: 4, date: '2025.01.05', content: '꾸준히 먹고 있습니다. 피부가 좋아졌어요.', verified: true },
                  ]}
                />
              )}
              {category.id === '패션' && (
                <FashionTemplate
                  brandName={customizer.productName}
                  productName={customizer.productName}
                  tagline={customizer.tagline}
                  price={price}
                  originalPrice={originalPrice}
                />
              )}
              {category.id === '가전' && (
                <ElectronicsTemplate
                  productName={customizer.productName}
                  tagline={customizer.tagline}
                  price={price}
                  originalPrice={originalPrice}
                />
              )}
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '16px', padding: '60px 24px' }}>
              <span style={{ fontSize: '64px' }}>{category.emoji}</span>
              <p style={{ fontSize: '20px', fontWeight: 700, color: '#333' }}>{category.label} 템플릿 준비 중</p>
              <p style={{ fontSize: '15px', color: '#888' }}>곧 출시될 예정입니다.</p>
            </div>
          )}
        </div>
      </div>

      {/* 하단 액션 바 */}
      <div style={{
        background: '#0f0f0f', borderTop: '1px solid #1a1a1a', padding: '12px 20px',
        display: 'flex', gap: '10px', flexShrink: 0,
        marginRight: panelOpen ? '280px' : 0, transition: 'margin-right 0.2s',
      }}>
        <button
          onClick={onPanelToggle}
          style={{
            flex: 1, background: panelOpen ? '#6366f1' : '#1a1a1a',
            color: panelOpen ? '#fff' : '#a3a3a3',
            border: '1px solid #2a2a2a', borderRadius: '10px',
            padding: '12px', cursor: 'pointer', fontSize: '14px', fontWeight: 600,
            transition: 'all 0.2s',
          }}
        >
          🎨 커스터마이즈
        </button>
        <button
          onClick={handleExportHTML}
          disabled={!category.hasTemplate}
          style={{
            flex: 1, background: category.hasTemplate ? '#6366f1' : '#1a1a1a',
            color: category.hasTemplate ? '#ffffff' : '#444',
            border: 'none', borderRadius: '10px',
            padding: '12px', cursor: category.hasTemplate ? 'pointer' : 'not-allowed',
            fontSize: '14px', fontWeight: 600,
          }}
        >
          HTML 내보내기
        </button>
      </div>

      {panelOpen && (
        <CustomizerPanel
          values={customizer}
          onChange={onCustomizerChange}
          onClose={onPanelToggle}
        />
      )}
    </div>
  );
};

// ─── 트랜지션 오버레이 ────────────────────────────────────────────────────────

const TransitionOverlay: React.FC<{ active: boolean; originX: number; originY: number }> = ({ active, originX, originY }) => {
  if (!active) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 150,
      background: '#0f0f0f',
      transformOrigin: `${originX}px ${originY}px`,
      animation: 'veloxExpand 0.3s ease-in-out forwards',
      pointerEvents: 'none',
    }} />
  );
};

// ─── 메인 컨테이너 ───────────────────────────────────────────────────────────

const ShowroomContainer: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('home');
  const [activeCategory, setActiveCategory] = useState<CategoryItem>(CATEGORY_LIST[0]);
  const [panelOpen, setPanelOpen] = useState(false);
  const [customizer, setCustomizer] = useState<CustomizerState>({ ...DEFAULTS['식품'] });
  const [transitioning, setTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState({ x: 0, y: 0 });
  const [categoryEntering, setCategoryEntering] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const categoryScreenRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (cat: CategoryItem, el: HTMLElement) => {
    if (cat.id === '새템플릿') return;

    const rect = el.getBoundingClientRect();
    setTransitionOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setTransitioning(true);
    setActiveCategory(cat);
    setCustomizer({ ...(DEFAULTS[cat.id] ?? DEFAULTS['식품']) });

    setTimeout(() => {
      setTransitioning(false);
      setCategoryEntering(true);
      setScreen('category');
      setTimeout(() => setCategoryEntering(false), 400);
    }, 280);
  };

  const handleBack = () => {
    if (categoryScreenRef.current) {
      categoryScreenRef.current.style.animation = 'none';
      categoryScreenRef.current.style.transition = 'transform 0.3s ease-out';
      categoryScreenRef.current.style.transform = 'translateY(100%)';
    }
    setPanelOpen(false);
    setTimeout(() => setScreen('home'), 300);
  };

  return (
    <>
      <style>{`
        @keyframes veloxExpand {
          from { transform: scale(0); opacity: 1; border-radius: 24px; }
          to   { transform: scale(40); opacity: 1; border-radius: 0; }
        }
        @keyframes veloxFadeUp {
          from { transform: translateY(30px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        * { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>

      {screen === 'home' && <HomeScreen onCategoryClick={handleCategoryClick} />}

      <TransitionOverlay active={transitioning} originX={transitionOrigin.x} originY={transitionOrigin.y} />

      {screen === 'category' && (
        <CategoryScreen
          category={activeCategory}
          onBack={handleBack}
          customizer={customizer}
          onCustomizerChange={(k, v) => setCustomizer(prev => ({ ...prev, [k]: v }))}
          panelOpen={panelOpen}
          onPanelToggle={() => setPanelOpen(v => !v)}
          contentRef={contentRef}
          screenRef={categoryScreenRef}
          entering={categoryEntering}
        />
      )}
    </>
  );
};

// ─── Storybook 메타 ──────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Showroom/클라이언트 쇼룸',
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const 전체쇼룸: StoryObj = {
  render: () => <ShowroomContainer />,
};
