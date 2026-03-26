#!/usr/bin/env tsx
/**
 * 고객 브랜치 생성 자동화 스크립트
 * 사용법: pnpm client:new --name "홍길동" --category food --product "제주 녹차" --price 39000
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// ─── 인수 파싱 ────────────────────────────────────────────────────────────────

function parseArgs(args: string[]): Record<string, string> {
  const result: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      result[args[i].slice(2)] = args[i + 1] ?? 'true';
      i++;
    }
  }
  return result;
}

const flags = parseArgs(process.argv.slice(2));

const name      = flags.name;
const category  = (flags.category ?? 'food') as 'food' | 'fashion' | 'electronics';
const product   = flags.product  ?? '상품명';
const price     = Number(flags.price ?? 0);
const original  = Number(flags['original-price'] ?? 0);
const color     = flags.color;   // 선택: 브랜드 컬러 hex
const tagline   = flags.tagline  ?? `${product} — 최고의 선택`;

if (!name) {
  console.error('❌  --name 옵션이 필요합니다');
  console.error('   예: pnpm client:new --name "홍길동" --category food --product "제주 녹차" --price 39000');
  process.exit(1);
}

const VALID_CATEGORIES = ['food', 'fashion', 'electronics'];
if (!VALID_CATEGORIES.includes(category)) {
  console.error(`❌  --category 는 ${VALID_CATEGORIES.join(' | ')} 중 하나여야 합니다`);
  process.exit(1);
}

// ─── 경로 설정 ────────────────────────────────────────────────────────────────

const ROOT      = path.resolve(__dirname, '../..');
const CLIENTS_DIR = path.join(ROOT, 'apps/storybook/src/clients');
const slug      = name.replace(/\s+/g, '-');
const branchName = `client/${slug}`;
const storyFile  = path.join(CLIENTS_DIR, `${slug}.stories.tsx`);

// ─── 스토리 파일 생성 ─────────────────────────────────────────────────────────

function buildStoryContent(): string {
  const componentMap = {
    food:        'FoodTemplate',
    fashion:     'FashionTemplate',
    electronics: 'ElectronicsTemplate',
  };

  const component = componentMap[category];

  const themeColorProp = color ? `\n  themeColor="${color}"` : '';
  const originalPriceProp = original > 0 ? `\n  originalPrice={${original}}` : '';

  const foodExtra = category === 'food' ? `
  sections={{ showIngredient: true, showProcess: true, showTrust: true, showReview: true }}` : '';

  const fashionExtra = category === 'fashion' ? `
  brandName="${name}"` : '';

  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${component} } from '@velox/ui';

/**
 * 고객: ${name}
 * 카테고리: ${category}
 * 생성일: ${new Date().toLocaleDateString('ko-KR')}
 */
const meta: Meta<typeof ${component}> = {
  title: 'Clients/${name}',
  component: ${component},
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof ${component}>;

export const Default: Story = {
  name: '${product}',
  args: {${fashionExtra}
    productName: '${product}',
    tagline: '${tagline}',
    price: ${price},${originalPriceProp}${themeColorProp}${foodExtra}
  },
};
`;
}

// ─── 실행 ────────────────────────────────────────────────────────────────────

function run(cmd: string, cwd = ROOT): string {
  return execSync(cmd, { cwd, encoding: 'utf-8' }).trim();
}

console.log(`\n⚡ Velox — 고객 브랜치 생성\n`);
console.log(`  고객명   : ${name}`);
console.log(`  카테고리 : ${category}`);
console.log(`  제품     : ${product}`);
console.log(`  가격     : ${price.toLocaleString('ko-KR')}원${original > 0 ? ` (정가 ${original.toLocaleString('ko-KR')}원)` : ''}`);
if (color) console.log(`  브랜드컬러: ${color}`);
console.log('');

// 1. git 브랜치 생성
try {
  const currentBranch = run('git rev-parse --abbrev-ref HEAD');
  console.log(`  현재 브랜치: ${currentBranch}`);

  const existing = run('git branch --list ' + branchName);
  if (existing) {
    console.log(`  ⚠️  브랜치 '${branchName}' 가 이미 존재합니다. 해당 브랜치로 전환합니다.`);
    run(`git checkout ${branchName}`);
  } else {
    run(`git checkout -b ${branchName}`);
    console.log(`  ✅ 브랜치 생성: ${branchName}`);
  }
} catch (e) {
  console.error('  ❌ git 브랜치 생성 실패:', (e as Error).message);
  process.exit(1);
}

// 2. clients 디렉토리 생성
if (!fs.existsSync(CLIENTS_DIR)) {
  fs.mkdirSync(CLIENTS_DIR, { recursive: true });
  console.log(`  ✅ 디렉토리 생성: apps/storybook/src/clients/`);
}

// 3. 스토리 파일 생성
if (fs.existsSync(storyFile)) {
  console.log(`  ⚠️  스토리 파일이 이미 존재합니다: apps/storybook/src/clients/${slug}.stories.tsx`);
} else {
  fs.writeFileSync(storyFile, buildStoryContent(), 'utf-8');
  console.log(`  ✅ 스토리 파일 생성: apps/storybook/src/clients/${slug}.stories.tsx`);
}

// ─── 완료 안내 ────────────────────────────────────────────────────────────────

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🎉 완료! 다음 단계를 진행하세요.

  1. 스토리 파일에서 제품 정보 수정
     apps/storybook/src/clients/${slug}.stories.tsx

  2. Storybook 실행 후 'Clients/${name}' 확인
     pnpm storybook

  3. 이미지 파이프라인으로 제품 이미지 처리
     pnpm image composite --input ./product.jpg --prompt "..."

  4. 납품 빌드
     pnpm build-storybook

  5. 작업 완료 후 main 으로 복귀
     git checkout main
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);