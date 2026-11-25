import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The office plant has survived three rounds of layoffs, and HR just asked it to mentor me.";

// The joke lives as one plain string so the output is exactly one line.
// A plant outlasting three layoff rounds says more than any meeting ever could.
// HR picking the plant as my mentor flips the usual office pecking order.
// One breath, one punchline, nothing extra to set up.

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
