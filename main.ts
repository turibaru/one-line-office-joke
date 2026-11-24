import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I blocked my calendar as 'Focus Time' so nobody could book me, and now my boss books my Focus Time to discuss why I'm never available.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
