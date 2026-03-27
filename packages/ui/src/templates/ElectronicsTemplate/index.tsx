import React from 'react';
import type { ElectronicsTemplateProps } from './types';

const C = {
  bg: '#0a0a0a',
  card: '#1a1a1a',
  blue: '#3b82f6',
  text: '#ffffff',
  muted: '#666666',
  border: '#2a2a2a',
};

const ELECTRONICS_IMAGES = {
  hero:      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
  front:     'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800',
  camera:    'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800',
  lifestyle: 'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?w=800',
};

const defaultSpecs = [
  { label: '배터리', value: '5000mAh, 45W 초고속 충전' },
  { label: '디스플레이', value: '6.7인치 AMOLED 120Hz' },
  { label: '카메라', value: '200MP 메인 + 12MP 광각' },
  { label: '프로세서', value: 'Velox Chip X1 (3nm)' },
  { label: '저장공간', value: '256GB / 512GB' },
  { label: '무게', value: '198g' },
  { label: '방수', value: 'IP68 (수심 2m, 30분)' },
];

export const ElectronicsTemplate: React.FC<ElectronicsTemplateProps> = ({
  productName = 'Velox Phone Pro',
  tagline = '당신의 일상을 재정의할 스마트폰',
  price = 1290000,
  originalPrice,
  productImage,
  specs = defaultSpecs,
  warranty = '1년 제조사 보증',
}) => {
  const heroImg = productImage ?? ELECTRONICS_IMAGES.hero;

  return (
    <div style={{ background: C.bg, fontFamily: 'Pretendard, -apple-system, sans-serif', color: C.text }}>

      {/* ── 1. TECH HERO ── */}
      <section style={{ background: C.bg, padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: C.blue, letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '20px' }}>
            NEW ARRIVAL
          </p>
          <h1 style={{ fontSize: '56px', fontWeight: 900, color: C.text, letterSpacing: '-2px', marginBottom: '16px', lineHeight: 1 }}>
            {productName}
          </h1>
          <p style={{ fontSize: '20px', color: C.muted, marginBottom: '40px' }}>{tagline}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '56px', flexWrap: 'wrap' }}>
            {['⚡ 48H 배터리', '📷 4K 카메라', '🔵 200MP AI'].map((spec, i) => (
              <div key={i} style={{ fontSize: '14px', fontWeight: 600, color: C.blue, background: `${C.blue}15`, border: `1px solid ${C.blue}30`, borderRadius: '100px', padding: '8px 20px' }}>
                {spec}
              </div>
            ))}
          </div>
          <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
            <img src={heroImg} alt={productName} style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ── 2. SPEC HIGHLIGHT ── */}
      <section style={{ background: C.card, padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: C.blue, letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>
            SPEC HIGHLIGHT
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: C.text, textAlign: 'center', marginBottom: '48px', letterSpacing: '-0.5px' }}>
            숫자로 증명합니다
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { value: '48', unit: 'H', label: '연속 사용 시간', sub: '경쟁 제품 대비 2배' },
              { value: '200', unit: 'MP', label: '카메라 해상도', sub: 'AI 야간 촬영 강화' },
              { value: '45', unit: 'W', label: '초고속 충전', sub: '30분 = 70% 충전' },
            ].map((stat, i) => (
              <div key={i} style={{ background: C.bg, borderRadius: '24px', padding: '40px 24px', textAlign: 'center', border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: '64px', fontWeight: 900, color: C.blue, lineHeight: 1, letterSpacing: '-3px' }}>
                  {stat.value}<span style={{ fontSize: '28px', fontWeight: 700 }}>{stat.unit}</span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: C.text, marginTop: '12px' }}>{stat.label}</div>
                <div style={{ fontSize: '12px', color: C.muted, marginTop: '6px' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FEATURE POINTS ── */}
      {[
        {
          num: '01', title: '다른 차원의 성능',
          desc: '앱 전환, 게임, 영상 편집 — 무엇을 해도 버벅임 없이 부드럽습니다. 경쟁 제품 대비 40% 빠른 처리 속도. 3nm 공정의 Velox Chip X1이 만들어내는 차이입니다.',
          img: ELECTRONICS_IMAGES.front,
          badge: '40% 빠른 성능',
        },
        {
          num: '02', title: '하루 종일 거뜬한 배터리',
          desc: '충전기 챙기는 걱정, 이제 안 해도 됩니다. 출근부터 퇴근 후 저녁까지 써도 배터리가 남아 있습니다. 5000mAh + 45W 초고속 충전으로 경쟁 제품이 두 번 충전할 때 이 폰은 하루를 버팁니다.',
          img: ELECTRONICS_IMAGES.lifestyle,
          badge: '48시간 연속 사용',
        },
        {
          num: '03', title: '어둠도 두렵지 않은 카메라',
          desc: '식당에서, 공연장에서, 밤 산책에서. 빛이 없어도 선명한 사진을 건집니다. 200MP AI 카메라가 만들어내는, 전문 카메라와 비교해도 당당한 결과물입니다.',
          img: ELECTRONICS_IMAGES.camera,
          badge: '200MP AI 카메라',
        },
      ].map((feature, i) => (
        <section key={i} style={{ background: i % 2 === 0 ? C.bg : C.card, padding: '80px 40px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: C.blue, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
                POINT {feature.num}
              </div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, color: C.text, marginBottom: '16px', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
                {feature.title}
              </h3>
              <div style={{ display: 'inline-block', background: `${C.blue}20`, border: `1px solid ${C.blue}40`, borderRadius: '100px', padding: '6px 16px', fontSize: '13px', fontWeight: 600, color: C.blue, marginBottom: '20px' }}>
                {feature.badge}
              </div>
              <p style={{ fontSize: '15px', color: C.muted, lineHeight: 1.85 }}>{feature.desc}</p>
            </div>
            <div style={{ flex: 1, borderRadius: '20px', overflow: 'hidden' }}>
              <img src={feature.img} alt="" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </section>
      ))}

      {/* ── 4. COMPARE ── */}
      <section style={{ background: C.card, padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: C.blue, letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>
            COMPARE
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: C.text, textAlign: 'center', marginBottom: '48px', letterSpacing: '-0.5px' }}>
            경쟁사 비교
          </h2>
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: `1px solid ${C.border}` }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#111' }}>
              <div style={{ padding: '16px 20px', fontSize: '12px', color: C.muted, fontWeight: 600 }}>스펙</div>
              {[
                { name: productName, isOurs: true },
                { name: '경쟁사 A', isOurs: false },
                { name: '경쟁사 B', isOurs: false },
              ].map((col, i) => (
                <div key={i} style={{ padding: '16px 12px', fontSize: '13px', fontWeight: 700, color: col.isOurs ? C.blue : C.muted, textAlign: 'center', background: col.isOurs ? `${C.blue}12` : 'transparent', borderLeft: col.isOurs ? `1px solid ${C.blue}30` : 'none', borderRight: col.isOurs ? `1px solid ${C.blue}30` : 'none' }}>
                  {col.name}
                </div>
              ))}
            </div>
            {[
              ['배터리 (mAh)', '5,000', '4,500', '4,000'],
              ['카메라 (MP)', '200', '108', '64'],
              ['충전 속도 (W)', '45', '25', '18'],
              ['방수 등급', 'IP68', 'IP67', 'IP65'],
              ['1년 A/S 보증', '✓', '✓', '✗'],
              ['30일 환불 보장', '✓', '✗', '✗'],
            ].map((row, ri) => (
              <div key={ri} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderTop: `1px solid ${C.border}` }}>
                <div style={{ padding: '14px 20px', fontSize: '13px', color: C.muted }}>{row[0]}</div>
                {[1, 2, 3].map(ci => (
                  <div key={ci} style={{ padding: '14px 12px', fontSize: '14px', textAlign: 'center', fontWeight: ci === 1 ? 600 : 400, background: ci === 1 ? `${C.blue}08` : 'transparent', borderLeft: ci === 1 ? `1px solid ${C.blue}30` : 'none', borderRight: ci === 1 ? `1px solid ${C.blue}30` : 'none' }}>
                    {row[ci] === '✓' ? <span style={{ color: C.blue, fontSize: '16px' }}>✓</span> : row[ci] === '✗' ? <span style={{ color: '#333', fontSize: '16px' }}>✗</span> : <span style={{ color: ci === 1 ? C.text : C.muted }}>{row[ci]}</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CERT ── */}
      <section style={{ background: C.bg, padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: C.text, marginBottom: '8px', letterSpacing: '-0.5px' }}>
            안심하고 사용하세요
          </h2>
          <p style={{ fontSize: '16px', color: C.muted, marginBottom: '48px' }}>공신력 있는 인증 기관의 검증을 받았습니다</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { icon: '🇰🇷', name: 'KC 인증', sub: '국가통합인증마크' },
              { icon: '💧', name: 'IP68 방수', sub: 'IEC 60529 국제 기준' },
              { icon: '🏆', name: 'CES 2025 혁신상', sub: 'Consumer Electronics Show' },
            ].map((cert, i) => (
              <div key={i} style={{ background: C.card, borderRadius: '24px', padding: '36px 20px', textAlign: 'center', border: `1px solid ${C.border}` }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{cert.icon}</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: C.text, marginBottom: '8px' }}>{cert.name}</div>
                <div style={{ fontSize: '13px', color: C.muted }}>{cert.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. REVIEW ── */}
      <section style={{ background: C.card, padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: C.text, textAlign: 'center', marginBottom: '48px', letterSpacing: '-0.5px' }}>
            구매자 후기
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { author: '오현우', rating: 5, date: '2025.03.01', content: '성능이 기대 이상입니다. 앱 전환도 끊김 없이 매끄럽고 배터리도 이틀은 거뜬합니다. 최고의 선택!' },
              { author: '임수아', rating: 5, date: '2025.02.25', content: '배터리가 정말 오래가요. 출장 3일 내내 충전 안 해도 됐습니다. 꼭 필요한 폰입니다.' },
              { author: '황재원', rating: 4, date: '2025.02.20', content: '카메라 화질이 놀랍습니다. 야간에도 선명하게 찍히고 AI 보정도 자연스러워요.' },
            ].map((r, i) => (
              <div key={i} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: '20px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `${C.blue}20`, border: `1px solid ${C.blue}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700, color: C.blue, flexShrink: 0 }}>
                    {r.author[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: C.text }}>{r.author}</div>
                    <div style={{ fontSize: '12px', color: C.muted, marginTop: '2px' }}>{r.date}</div>
                  </div>
                  <div style={{ color: C.blue, fontSize: '14px', flexShrink: 0 }}>{'★'.repeat(r.rating)}</div>
                </div>
                <p style={{ fontSize: '15px', color: '#aaa', lineHeight: 1.7 }}>{r.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section style={{ background: C.bg, padding: '100px 40px', textAlign: 'center', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '44px', fontWeight: 900, color: C.text, marginBottom: '12px', letterSpacing: '-2px', lineHeight: 1 }}>
            지금 구매하기
          </h2>
          <p style={{ fontSize: '18px', color: C.muted, marginBottom: '48px' }}>{tagline}</p>
          <div style={{ marginBottom: '40px' }}>
            {originalPrice && (
              <div style={{ fontSize: '16px', color: C.muted, textDecoration: 'line-through', marginBottom: '6px' }}>
                {originalPrice.toLocaleString()}원
              </div>
            )}
            <div style={{ fontSize: '56px', fontWeight: 900, color: C.text, letterSpacing: '-2px', lineHeight: 1 }}>
              {price.toLocaleString()}<span style={{ fontSize: '22px', fontWeight: 400, color: C.muted }}>원</span>
            </div>
          </div>
          <div style={{ background: C.blue, borderRadius: '100px', padding: '20px 64px', fontSize: '18px', fontWeight: 700, color: '#fff', display: 'inline-block', cursor: 'pointer', marginBottom: '32px', letterSpacing: '-0.3px' }}>
            지금 구매하기
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap' }}>
            {['무료배송', warranty, '30일 환불 보장'].map((b, i) => (
              <span key={i} style={{ fontSize: '13px', color: C.muted, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: C.blue }}>✓</span> {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectronicsTemplate;
