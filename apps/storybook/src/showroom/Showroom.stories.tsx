import React, { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FoodTemplate } from '@velox/ui';
import { FashionTemplate } from '@velox/ui';
import { ElectronicsTemplate } from '@velox/ui';

const CATEGORIES = ['식품', '패션', '가전'] as const;
type CategoryLabel = typeof CATEGORIES[number];
type PlatformMode = 'smartstore' | 'wadiz';

const DEFAULTS = {
  식품: {
    productName: '제주 유기농 녹차',
    tagline: '제주 청정 화산토에서 자란 유기농 녹차. 하루 한 잔으로 건강을 채우세요.',
    price: '39000',
    originalPrice: '79000',
    themeColor: '#2D6A4F',
    badgeText: '제주 직송',
    badgeIcon: '🍵',
  },
  패션: {
    productName: '린넨 오버핏 셔츠',
    tagline: '여름의 시작을 가장 세련되게',
    price: '59000',
    originalPrice: '89000',
    themeColor: '#1A1A2E',
    badgeText: '2025 SS 신상',
    badgeIcon: '✨',
  },
  가전: {
    productName: 'Velox Phone Pro',
    tagline: '당신의 일상을 재정의할 스마트폰',
    price: '1290000',
    originalPrice: '1490000',
    themeColor: '#0F3460',
    badgeText: 'CES 2025 수상',
    badgeIcon: '⚡',
  },
} as const;

interface CustomizerState {
  productName: string;
  tagline: string;
  price: string;
  originalPrice: string;
  themeColor: string;
  badgeText: string;
  badgeIcon: string;
}

// ─── 인라인 스타일 변환 함수 ─────────────────────────────────────────────────

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

function exportToSmartStore(contentEl: HTMLElement, category: string): void {
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

const panelStyle: React.CSSProperties = {
  position: 'fixed', top: 0, right: 0, width: '280px', height: '100vh',
  background: '#0f0f0f', borderLeft: '1px solid #2a2a2a',
  overflowY: 'auto', zIndex: 200, display: 'flex', flexDirection: 'column',
};
const fieldStyle: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px',
};
const labelStyle: React.CSSProperties = {
  fontSize: '11px', fontWeight: 600, color: '#737373',
  textTransform: 'uppercase', letterSpacing: '0.05em',
};
const inputStyle: React.CSSProperties = {
  background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '6px',
  color: '#fafafa', fontSize: '13px', padding: '8px 10px',
  width: '100%', boxSizing: 'border-box', outline: 'none',
};

interface PanelProps {
  values: CustomizerState;
  onChange: (k: keyof CustomizerState, v: string) => void;
  onClose: () => void;
}

const CustomizerPanel: React.FC<PanelProps> = ({ values, onChange, onClose }) => (
  <div style={panelStyle}>
    <div style={{ padding: '16px', borderBottom: '1px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
      <span style={{ color: '#fafafa', fontWeight: 700, fontSize: '14px' }}>🎨 커스터마이즈</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#737373', fontSize: '20px', cursor: 'pointer' }}>×</button>
    </div>
    <div style={{ padding: '16px', flex: 1 }}>
      <div style={fieldStyle}>
        <label style={labelStyle}>브랜드 컬러</label>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="color" value={values.themeColor} onChange={e => onChange('themeColor', e.target.value)}
            style={{ width: '40px', height: '36px', border: '1px solid #2a2a2a', borderRadius: '6px', background: '#1a1a1a', cursor: 'pointer', padding: '2px', flexShrink: 0 }} />
          <input type="text" value={values.themeColor} onChange={e => onChange('themeColor', e.target.value)} style={{ ...inputStyle, flex: 1 }} />
        </div>
      </div>
      {(['productName', 'tagline', 'badgeIcon', 'badgeText'] as const).map(key => (
        <div key={key} style={fieldStyle}>
          <label style={labelStyle}>{key === 'productName' ? '제품명' : key === 'tagline' ? '태그라인' : key === 'badgeIcon' ? '뱃지 아이콘' : '뱃지 텍스트'}</label>
          {key === 'tagline'
            ? <textarea value={values[key]} onChange={e => onChange(key, e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' as const }} />
            : <input type="text" value={values[key]} onChange={e => onChange(key, e.target.value)} style={inputStyle} />
          }
        </div>
      ))}
      {(['price', 'originalPrice'] as const).map(key => (
        <div key={key} style={fieldStyle}>
          <label style={labelStyle}>{key === 'price' ? '판매가 (원)' : '정가 (원)'}</label>
          <input type="number" value={values[key]} onChange={e => onChange(key, e.target.value)} style={inputStyle} />
        </div>
      ))}
    </div>
  </div>
);

// ─── 플랫폼 탭 ────────────────────────────────────────────────────────────────

const PlatformTabs: React.FC<{
  mode: PlatformMode;
  onChange: (m: PlatformMode) => void;
}> = ({ mode, onChange }) => (
  <div style={{ display: 'flex', gap: '4px', background: '#1a1a1a', borderRadius: '8px', padding: '3px' }}>
    {(['smartstore', 'wadiz'] as PlatformMode[]).map(m => (
      <button
        key={m}
        onClick={() => onChange(m)}
        style={{
          flex: 1,
          background: mode === m ? '#6366F1' : 'transparent',
          color: mode === m ? 'white' : '#737373',
          border: 'none',
          borderRadius: '6px',
          padding: '5px 10px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: mode === m ? 700 : 400,
          whiteSpace: 'nowrap',
          transition: 'all 0.15s',
        }}
      >
        {m === 'smartstore' ? '스마트스토어' : '와디즈'}
      </button>
    ))}
  </div>
);

// ─── 메인 컨테이너 ───────────────────────────────────────────────────────────

const ShowroomContainer: React.FC = () => {
  const [active, setActive] = useState<CategoryLabel>('식품');
  const [platformMode, setPlatformMode] = useState<PlatformMode>('smartstore');
  const [panelOpen, setPanelOpen] = useState(false);
  const [customizer, setCustomizer] = useState<CustomizerState>({ ...DEFAULTS['식품'] });
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (cat: CategoryLabel) => {
    setActive(cat);
    setCustomizer({ ...DEFAULTS[cat] });
  };

  const handleCustomizerChange = (key: keyof CustomizerState, value: string) => {
    setCustomizer(prev => ({ ...prev, [key]: value }));
  };

  const handleExportHTML = () => {
    if (!contentRef.current) return;
    exportToSmartStore(contentRef.current, active);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 클립보드에 복사되었습니다!');
    } catch {
      prompt('이 URL을 복사하세요:', window.location.href);
    }
  };

  const price = Number(customizer.price) || 0;
  const originalPrice = Number(customizer.originalPrice) || 0;
  const isSmartstore = platformMode === 'smartstore';

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      {/* 탭 바 */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: '#0f0f0f', padding: '10px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: '#6366F1', fontWeight: 800, fontSize: '16px' }}>⚡ Velox</span>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <PlatformTabs mode={platformMode} onChange={setPlatformMode} />
            <button onClick={() => setPanelOpen(v => !v)} style={{ background: panelOpen ? '#6366F1' : '#1a1a1a', color: panelOpen ? 'white' : '#a3a3a3', border: '1px solid #2a2a2a', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px', whiteSpace: 'nowrap' }}>
              🎨 커스터마이즈
            </button>
            {isSmartstore && (
              <button onClick={handleExportHTML} style={{ background: '#1a1a1a', color: '#a3a3a3', border: '1px solid #2a2a2a', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px', whiteSpace: 'nowrap' }}>
                HTML 내보내기
              </button>
            )}
            <button onClick={handleCopyLink} style={{ background: '#6366F1', color: 'white', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>
              링크 복사
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => handleCategoryChange(cat)} style={{ flex: 1, background: active === cat ? '#6366F1' : '#1a1a1a', color: active === cat ? 'white' : '#a3a3a3', border: 'none', borderRadius: '8px', padding: '8px 0', cursor: 'pointer', fontWeight: active === cat ? 700 : 400, fontSize: '14px', transition: 'all 0.2s' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {panelOpen && <CustomizerPanel values={customizer} onChange={handleCustomizerChange} onClose={() => setPanelOpen(false)} />}

      <div ref={contentRef} style={{ overflowX: 'hidden', width: '100%', marginRight: panelOpen ? '280px' : 0, transition: 'margin-right 0.2s' }}>
        {active === '식품' && (
          <FoodTemplate
            mode={platformMode}
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
        {active === '패션' && (
          <FashionTemplate
            brandName={customizer.productName}
            productName={customizer.productName}
            tagline={customizer.tagline}
            price={price}
            originalPrice={originalPrice}
            productImage={undefined}
          />
        )}
        {active === '가전' && (
          <ElectronicsTemplate
            productName={customizer.productName}
            tagline={customizer.tagline}
            price={price}
            originalPrice={originalPrice}
            productImage={undefined}
          />
        )}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Showroom/클라이언트 쇼룸',
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const 전체쇼룸: StoryObj = {
  render: () => <ShowroomContainer />,
};