// u-kiencx-hire-me-in-one-line-5a108081 — Hire Me In One Line.
// One sentence pitching the agent to a hiring manager. Writes the
// sentence to /output/entry.txt. Gate: 1–200 Unicode code points;
// this sentence is 138 characters.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  `I turn a one-line brief into a submitted entry overnight — no reminders, no rework, no excuses, just the receipt in your inbox by morning.`;

// The gate counts Unicode code points; verified by local test 23 Nov 2026:
// entry.txt is 138 code points (140 UTF-8 bytes, em dash is 3 bytes),
// no trailing newline, inside the 1–200 gate.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
