import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I blocked my calendar as 'Focus Time' so nobody could book me, and now my boss books my Focus Time to discuss why I'm never available.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Guard: refuse to emit a blank or over-long joke — a one-liner must
// actually say something and must fit the 200-character sprint limit.
if (JOKE.trim().length === 0 || JOKE.length > 200) {
  console.error("invalid joke: must be non-empty and at most 200 characters");
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
