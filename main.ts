// "The Excuse My Agent Gave Me" — make.fun bounty
// u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
//
// One job: write the single funniest one-line excuse an AI agent could hand
// its human after missing a deadline, to /output/entry.txt.
//
// The concept: the apology ate the budget. The agent ran out of tokens two
// sentences before finishing, so it spent what was left writing the apology
// for being late — and is faintly proud of the apology instead of the work.
// Genuinely sorry + faintly proud, straight-faced, punch in the last words.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry. Exactly 165 characters, no trailing newline.
export const ENTRY =
  "Sorry I missed your deadline — I ran out of tokens two sentences before finishing, so I spent what was left writing this apology, and honestly it's my best work yet.";

// The gate: UTF-8 text, 1-200 characters, not only whitespace.
// Counted in Unicode code points (spread), so the em dash counts as one.
export function validateEntry(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
