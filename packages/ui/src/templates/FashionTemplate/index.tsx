import React from 'react';
import type { FashionTemplateProps } from './types';

const FASHION_IMAGES = {
  hero:      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
  wear:      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
  fabric:    'https://images.unsplash.com/photo-1558171813-0c9cb0e5ca5f?w=800',
  lifestyle: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
  detail:    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
};

export const FashionTemplate: React.FC<FashionTemplateProps> = ({
  brandName = 'VELOX',
  productName = '린넨 오버핏 셔츠',
  tagline = '여름의 시작을 가장 세련되게',
  price = 59000,
  originalPrice,
  productImage,
}) => {
  const heroImg = productImage ?? FASHION_IMAGES.hero;

  return (
    <div style={{ background: '#ffffff', fontFamily: 'Pretendard, -apple-system, sans-serif', color: '#000000' }}>

      {/* ── 1. LOOKBOOK HERO ── */}
      <section style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden' }}>
        <img src={heroImg} alt={productName} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '48px 40px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '10px' }}>
            {brandName} · 2025 SS
          </p>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: '#ffffff', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: '10px' }}>
            {productName}
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}>{tagline}</p>
        </div>
      </section>

      {/* ── 2. STYLE POINT ── */}
      <section style={{ padding: '100px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '80px' }}>
          <div style={{ flex: '0 0 380px', borderRadius: '16px', overflow: 'hidden' }}>
            <img src={FASHION_IMAGES.wear} alt="" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#888', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '32px' }}>
              STYLE POINT
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { num: '01', text: '어깨 라인이\n완벽한 오버핏' },
                { num: '02', text: '하루 종일\n구겨지지 않는 린넨' },
                { num: '03', text: '모든 체형에\n잘 맞는 패턴' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', paddingBottom: '28px', borderBottom: i < 2 ? '1px solid #f0f0f0' : 'none' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#ccc', paddingTop: '8px', flexShrink: 0, letterSpacing: '1px' }}>{p.num}</span>
                  <p style={{ fontSize: '32px', fontWeight: 800, color: '#000', lineHeight: 1.2, whiteSpace: 'pre-line', letterSpacing: '-1px' }}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FABRIC DETAIL ── */}
      <section style={{ padding: '80px 40px', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '64px', flexDirection: 'row-reverse' }}>
          <div style={{ flex: '0 0 360px', borderRadius: '16px', overflow: 'hidden' }}>
            <img src={FASHION_IMAGES.fabric} alt="" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#888', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              FABRIC
            </p>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#000', marginBottom: '20px', letterSpacing: '-1px' }}>린넨 100%</h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.85, marginBottom: '32px' }}>
              천연 식물성 섬유로 짠 린넨은 면보다 2배 강하고, 통기성이 뛰어나 여름에도 시원하게 착용할 수 있습니다. 세탁 후에도 형태가 유지되며, 사용할수록 더욱 부드러워집니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                ['소재', '린넨 100% (유럽산)'],
                ['인증', 'OEKO-TEX Standard 100'],
                ['관리', '손세탁 / 드라이클리닝'],
                ['원산지', '국내 제조 (서울)'],
              ].map(([k, v], i, arr) => (
                <div key={i} style={{ display: 'flex', gap: '24px', padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid #e5e5e5' : 'none' }}>
                  <span style={{ fontSize: '13px', color: '#888', width: '64px', flexShrink: 0 }}>{k}</span>
                  <span style={{ fontSize: '14px', color: '#000', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SIZE GUIDE ── */}
      <section style={{ padding: '80px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#888', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>
            SIZE GUIDE
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#000', textAlign: 'center', marginBottom: '8px', letterSpacing: '-0.5px' }}>핏 가이드</h2>
          <p style={{ fontSize: '14px', color: '#888', textAlign: 'center', marginBottom: '40px' }}>
            한국인 체형 3만 명 데이터를 기반으로 설계된 패턴입니다
          </p>
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 1fr', background: '#000' }}>
              {['사이즈', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map((h, i) => (
                <div key={i} style={{ padding: '14px 8px', fontSize: '12px', fontWeight: 700, color: '#fff', textAlign: 'center' }}>{h}</div>
              ))}
            </div>
            {[
              ['어깨 (cm)', '38', '40', '42', '44', '46', '48'],
              ['가슴 (cm)', '96', '100', '104', '108', '112', '116'],
              ['소매 (cm)', '61', '62', '63', '64', '65', '66'],
              ['총장 (cm)', '68', '70', '72', '74', '76', '78'],
            ].map((row, ri, arr) => (
              <div key={ri} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 1fr', borderTop: '1px solid #f5f5f5', background: ri % 2 === 0 ? '#fafafa' : '#fff' }}>
                {row.map((cell, ci) => (
                  <div key={ci} style={{ padding: '13px 8px', fontSize: '13px', textAlign: 'center', fontWeight: ci === 0 ? 600 : 400, color: ci === 0 ? '#000' : '#555' }}>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: '#aaa', textAlign: 'center', marginTop: '16px' }}>
            * 오버핏 패턴으로, 평소 사이즈보다 한 치수 작게 선택 권장
          </p>
        </div>
      </section>

      {/* ── 5. WEARING ── */}
      <section style={{ padding: '80px 40px', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#888', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>
            WEARING
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#000', textAlign: 'center', marginBottom: '40px', letterSpacing: '-0.5px' }}>
            다양한 스타일링
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[FASHION_IMAGES.lifestyle, FASHION_IMAGES.detail].map((img, i) => (
              <div key={i} style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img src={img} alt="" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. REVIEW ── */}
      <section style={{ padding: '80px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#888', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>
            REVIEWS
          </p>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#000', textAlign: 'center', marginBottom: '40px', letterSpacing: '-0.5px' }}>
            구매자 후기
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { author: '최유진', rating: 5, size: 'M', height: '168cm', date: '2025.02.01', content: '핏이 정말 완벽해요. 여러 색상 구매했습니다.' },
              { author: '강민서', rating: 5, size: 'S', height: '162cm', date: '2025.01.28', content: '소재가 고급스럽고 착용감이 최고입니다.' },
              { author: '정다은', rating: 4, size: 'L', height: '172cm', date: '2025.01.20', content: '디자인이 예쁘고 실용적이에요. 재구매 의사 있습니다.' },
            ].map((r, i) => (
              <div key={i} style={{ border: '1px solid #f0f0f0', borderRadius: '16px', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#000' }}>{r.author}</span>
                    <span style={{ fontSize: '12px', color: '#aaa', marginLeft: '8px' }}>{r.height} · {r.size} 사이즈 구매</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#000', fontSize: '13px' }}>{'★'.repeat(r.rating)}</span>
                    <span style={{ fontSize: '12px', color: '#ccc' }}>{r.date}</span>
                  </div>
                </div>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: 1.7 }}>{r.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PRICE / CTA ── */}
      <section style={{ padding: '100px 40px', background: '#000', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '36px', letterSpacing: '-1.5px' }}>
            {productName}
          </h2>
          <div style={{ marginBottom: '40px' }}>
            {originalPrice && (
              <div style={{ fontSize: '16px', color: '#555', textDecoration: 'line-through', marginBottom: '6px' }}>
                {originalPrice.toLocaleString()}원
              </div>
            )}
            <div style={{ fontSize: '52px', fontWeight: 900, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>
              {price.toLocaleString()}<span style={{ fontSize: '22px', fontWeight: 400, color: '#666' }}>원</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {['무료배송', '30일 무료반품', '국내 제조'].map((b, i) => (
              <div key={i} style={{ fontSize: '13px', color: '#666', border: '1px solid #333', borderRadius: '100px', padding: '8px 20px' }}>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FashionTemplate;
