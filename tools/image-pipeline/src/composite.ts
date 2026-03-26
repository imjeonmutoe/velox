import sharp from 'sharp';
import * as path from 'path';
import * as fs from 'fs';
import { generateBg } from './generateBg';

interface SizeOptions {
  width?: number;
  height?: number;
}

/**
 * 전경(투명 PNG) + AI 생성 배경 합성. shadow 효과 추가.
 * @param foregroundPath 배경 제거된 전경 이미지 경로
 * @param bgPrompt 배경 프롬프트 (DALL-E 3으로 생성)
 * @param size 최종 출력 크기
 * @param outputDir 출력 디렉토리
 * @returns 합성 이미지 경로
 */
export async function composite(
  foregroundPath: string,
  bgPrompt: string,
  size: SizeOptions = { width: 1024, height: 1024 },
  outputDir?: string
): Promise<string> {
  const { width = 1024, height = 1024 } = size;
  const outDir = outputDir ?? path.dirname(foregroundPath);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // 1. AI 배경 생성
  const bgPath = await generateBg(bgPrompt, outDir);

  // 2. 전경 리사이즈 (배경의 70%)
  const fgBuffer = await sharp(foregroundPath)
    .resize({ width: Math.round(width * 0.7), height: Math.round(height * 0.7), fit: 'inside' })
    .toBuffer();

  // 3. 그림자 레이어 (블러 처리한 검은 전경)
  const shadowBuffer = await sharp(foregroundPath)
    .resize({ width: Math.round(width * 0.7), height: Math.round(height * 0.7), fit: 'inside' })
    .modulate({ lightness: -100 })
    .blur(12)
    .toBuffer();

  // 4. 합성
  const baseName = path.basename(foregroundPath, path.extname(foregroundPath));
  const outputPath = path.join(outDir, `${baseName}_composite.jpg`);

  await sharp(bgPath)
    .resize(width, height, { fit: 'cover' })
    .composite([
      { input: shadowBuffer, gravity: 'south', blend: 'multiply' },
      { input: fgBuffer, gravity: 'center' },
    ])
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  return outputPath;
}