import React from 'react';
import type { FoodTemplateProps } from './types';

const C = {
  bg: '#ffffff',
  accent: '#2d6a4f',
  sub: '#f0fdf4',
  text: '#1a1a1a',
  muted: '#666666',
};

const FOOD_IMAGES = {
  hero:    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
  leaf:    'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800',
  farm:    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
  process: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800',
};

export const FoodTemplate: React.FC<FoodTemplateProps> = ({
  productName = '제주 유기농 녹차',
  tagline = '마신 뒤에야 안다, 제대로 된 녹차를',
  price = 39000,
  originalPrice,
  productImage,
  themeColor,
  reviewScore = 4.9,
  reviewCount,
  reviews,
}) => {
  const accent = themeColor ?? C.accent;
  const heroImg = productImage ?? FOOD_IMAGES.hero;
  const discountRate = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  const reviewList = reviews ?? [
    { author: '김지현', rating: 5, date: '2025.01.15', content: '진짜 2주 만에 변화가 느껴졌어요! 꾸준히 먹으니까 확실히 달라요.', verified: true, option: '30포 / 녹차맛' },
    { author: '이민준', rating: 5, date: '2025.01.10', content: '배송 빠르고 효과도 좋아요. 재구매 확정!', verified: true },
    { author: '박소연', rating: 4, date: '2025.01.05', content: '꾸준히 먹고 있습니다. 피부가 좋아졌어요.', verified: true },
  ];

  return (
    <div style={{ background: C.bg, fontFamily: 'Pretendard, -apple-system, sans-serif', color: C.text }}>

      {/* ── 1. CHECK POINT ── */}
      <section style={{ background: C.sub, padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: accent, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>
            CHECK POINT
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: C.text, textAlign: 'center', marginBottom: '48px', letterSpacing: '-0.5px' }}>
            구매 전, 꼭 확인하세요
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { title: '유기농 인증 원료', desc: '100% 국내산 유기농 재료만 사용. 합성 첨가물·방부제 무첨가.' },
              { title: '당일출발 보장', desc: '오후 2시 이전 주문 시 당일 출고. 내일 받아보세요.' },
              { title: '30일 환불 보장', desc: '효과가 없으면 묻지도 따지지도 않고 전액 환불.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', boxShadow: '0 2px 12px rgba(45,106,79,0.08)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: accent, color: '#fff', fontSize: '22px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>✓</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: C.text, marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: C.muted, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. HERO IMAGE ── */}
      <section style={{ background: '#fff', padding: '100px 40px 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', paddingBottom: '60px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, color: C.text, lineHeight: 1.2, letterSpacing: '-1.5px', marginBottom: '20px' }}>
            {tagline}
          </h1>
          <p style={{ fontSize: '20px', color: C.muted }}>{productName} — 자연이 주는 최고의 선물</p>
        </div>
        <div style={{ width: '100%' }}>
          <img src={heroImg} alt={productName} style={{ width: '100%', height: '560px', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      {/* ── 3. TODAY DELIVERY ── */}
      <section style={{ background: C.sub, padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '72px', fontWeight: 900, color: accent, letterSpacing: '-3px', lineHeight: 1, marginBottom: '40px' }}>
            오늘출발
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {['🚚 오후 2시 이전 주문 → 당일 출고', '📦 친환경 안전 포장', '🔄 무료반품 30일'].map((badge, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '100px', padding: '12px 24px', fontSize: '14px', fontWeight: 600, color: C.text, border: `1px solid ${accent}30` }}>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURE POINTS ── */}
      {[
        {
          num: '01', title: '자연이 만든\n순수한 성분',
          desc: '처음 한 모금에 달랐습니다. 성분표를 읽어도 걱정되는 것이 하나도 없어 매일 아침 가볍게 꺼내 마시게 됩니다. 인공 향미제와 방부제 없이, 자연 그대로입니다.',
          img: FOOD_IMAGES.leaf,
        },
        {
          num: '02', title: '과학으로\n검증된 효능',
          desc: '"효과가 있을까?" 반신반의했는데, 2주 만에 달라진 몸을 직접 느꼈습니다. 임상에서 78%가 체감한 변화. 한 번 시작하면 끊을 수가 없습니다.',
          img: FOOD_IMAGES.farm,
        },
        {
          num: '03', title: '믿을 수 있는\n제조 공정',
          desc: '어디서 만드는지 몰라 불안했던 경험, 있으시죠? 원료가 들어오는 날부터 포장되는 날까지 GMP 기준으로 17단계 품질 검사를 거칩니다.',
          img: FOOD_IMAGES.process,
        },
      ].map((point, i) => (
        <section key={i} style={{ background: i % 2 === 0 ? '#fff' : C.sub, padding: '80px 40px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '64px', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <div style={{ fontSize: '128px', fontWeight: 900, color: i % 2 === 0 ? C.sub : '#e6faf0', position: 'absolute', top: '-32px', left: '-8px', lineHeight: 1, zIndex: 0, userSelect: 'none', pointerEvents: 'none' }}>
                {point.num}
              </div>
              <div style={{ position: 'relative', zIndex: 1, paddingTop: '48px' }}>
                <h3 style={{ fontSize: '32px', fontWeight: 800, color: C.text, marginBottom: '20px', lineHeight: 1.25, whiteSpace: 'pre-line', letterSpacing: '-0.5px' }}>
                  {point.title}
                </h3>
                <p style={{ fontSize: '16px', color: C.muted, lineHeight: 1.85 }}>{point.desc}</p>
              </div>
            </div>
            <div style={{ flex: 1, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
              <img src={point.img} alt="" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </section>
      ))}

      {/* ── 5. CERTIFICATION ── */}
      <section style={{ background: C.sub, padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: C.text, marginBottom: '8px', letterSpacing: '-0.5px' }}>믿고 마시는 이유</h2>
          <p style={{ fontSize: '16px', color: C.muted, marginBottom: '48px' }}>4가지 공인 인증으로 안전성을 보증합니다</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { icon: '🏛️', name: '식약처 허가', sub: '식품의약품안전처' },
              { icon: '✅', name: 'GMP 인증', sub: '우수 제조기준' },
              { icon: '🔬', name: 'HACCP 인증', sub: '식품안전관리' },
              { icon: '🌿', name: '유기농 인증', sub: '국립농산물품질관리원' },
            ].map((cert, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '20px', padding: '28px 16px', textAlign: 'center', boxShadow: '0 2px 12px rgba(45,106,79,0.06)' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{cert.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{cert.name}</div>
                <div style={{ fontSize: '12px', color: C.muted }}>{cert.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. REVIEW ── */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: C.text, marginBottom: '12px', letterSpacing: '-0.5px' }}>구매자 후기</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '36px', fontWeight: 900, color: accent }}>{reviewScore}</span>
              <span style={{ fontSize: '24px', color: '#fbbf24' }}>{'★'.repeat(5)}</span>
              {reviewCount && <span style={{ fontSize: '14px', color: C.muted }}>({reviewCount.toLocaleString()}명 기준)</span>}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {reviewList.map((r, i) => (
              <div key={i} style={{ border: '1px solid #e9faf0', borderRadius: '20px', padding: '24px', background: i === 0 ? C.sub : '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: `${accent}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700, color: accent, flexShrink: 0 }}>
                    {r.author[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: C.text, display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                      {r.author}
                      {r.verified && <span style={{ fontSize: '11px', color: accent, background: C.sub, padding: '2px 8px', borderRadius: '100px', border: `1px solid ${accent}30` }}>구매 인증</span>}
                    </div>
                    <div style={{ fontSize: '12px', color: C.muted, marginTop: '2px' }}>
                      {r.date}{r.option ? ` · ${r.option}` : ''}
                    </div>
                  </div>
                  <div style={{ color: '#fbbf24', fontSize: '14px', flexShrink: 0 }}>{'★'.repeat(r.rating)}</div>
                </div>
                <p style={{ fontSize: '15px', color: C.text, lineHeight: 1.7 }}>{r.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ── */}
      <section style={{ background: accent, padding: '100px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '12px', letterSpacing: '-1px', lineHeight: 1.15 }}>
            지금 바로 구매하세요
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', marginBottom: '48px' }}>
            오늘 주문하면 내일 받아볼 수 있어요
          </p>
          <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', borderRadius: '20px', padding: '36px 48px', display: 'inline-block', minWidth: '280px', border: '1px solid rgba(255,255,255,0.2)' }}>
            {originalPrice && (
              <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', textDecoration: 'line-through', marginBottom: '4px' }}>
                {originalPrice.toLocaleString()}원
              </div>
            )}
            <div style={{ fontSize: '52px', fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-2px' }}>
              {price.toLocaleString()}<span style={{ fontSize: '22px', fontWeight: 600 }}>원</span>
            </div>
            {discountRate > 0 && (
              <div style={{ fontSize: '14px', color: '#a7f3d0', marginTop: '8px', fontWeight: 600 }}>
                {discountRate}% 할인 적용
              </div>
            )}
          </div>
          <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            {[
              '오늘 주문 시 내일 도착 (오후 2시 이전 주문)',
              '30일 이내 100% 환불 보장',
              '처음 구매 시 사은품 증정',
            ].map((b, i) => (
              <div key={i} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#a7f3d0', fontSize: '16px' }}>✓</span> {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodTemplate;
