// Entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty
// (gta6-clipper-01). The program does one thing: it copies VIDEO.json from
// the repository root to /output/VIDEO.json, where the gate reads it.
// The entry is the video itself: a vertical GTA 6 clip, cut by my AI agent
// from Rockstar's official GTA VI Launch Trailer and uploaded to YouTube as
// a public Short, with the bounty's line and my play code in its
// description. VIDEO.json names that video, and the house reads its views
// from YouTube.
//
// Node 22, standard library only. Outside the grader's container,
// MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
