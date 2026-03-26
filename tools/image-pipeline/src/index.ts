import 'dotenv/config';
import { removeBg } from './removeBg';
import { generateBg } from './generateBg';
import { composite } from './composite';
import * as path from 'path';
import * as fs from 'fs';

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

const [,, command, ...rest] = process.argv;
const flags = parseArgs(rest);

async function main() {
  if (!command) {
    console.log(`
Usage: pnpm image <command> [options]

Commands:
  remove        배경 제거
  generate-bg   AI 배경 생성
  composite     배경 합성
  batch         폴더 일괄 처리

Options:
  --input   <path>    입력 파일 또는 폴더
  --output  <path>    출력 경로
  --prompt  <text>    AI 배경 생성 프롬프트
  --size    <WxH>     출력 크기 (예: 800x800)
    `);
    process.exit(0);
  }

  switch (command) {
    case 'remove': {
      const inputPath = flags.input;
      if (!inputPath) { console.error('--input 경로를 지정하세요'); process.exit(1); }
      const output = await removeBg(path.resolve(inputPath), flags.output);
      console.log('✅ 배경 제거 완료:', output);
      break;
    }

    case 'generate-bg': {
      const prompt = flags.prompt ?? 'clean white studio background, soft shadows, professional product photography';
      const output = await generateBg(prompt, flags.output ?? 'output');
      console.log('✅ 배경 생성 완료:', output);
      break;
    }

    case 'composite': {
      const inputPath = flags.input;
      if (!inputPath) { console.error('--input 경로를 지정하세요'); process.exit(1); }
      const prompt = flags.prompt ?? 'clean white studio, soft shadows, professional product photo';
      const size = flags.size ?? '1024x1024';
      const [w, h] = size.split('x').map(Number);
      const output = await composite(path.resolve(inputPath), prompt, { width: w, height: h }, flags.output);
      console.log('✅ 합성 완료:', output);
      break;
    }

    case 'batch': {
      const dir = flags.dir;
      if (!dir || !fs.existsSync(dir)) { console.error('--dir 경로를 지정하세요'); process.exit(1); }
      const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
      const outDir = flags.output ?? path.join(dir, 'output');
      const prompt = flags.prompt ?? 'clean white studio background, professional product photo';
      for (const file of files) {
        console.log(`Processing: ${file}`);
        const inputPath = path.join(dir, file);
        const noBg = await removeBg(inputPath, outDir);
        await composite(noBg, prompt, { width: 1024, height: 1024 }, outDir);
      }
      console.log(`✅ 일괄 처리 완료: ${files.length}개`);
      break;
    }

    default:
      console.error('알 수 없는 명령어:', command);
      process.exit(1);
  }
}

main().catch(console.error);