// office-laugh-line — Make the AI Judge Laugh
// (make.fun bounty u-rama-melon-make-the-ai-judge-laugh-302d0825)
//
// Writes a single one-line joke about office life to /output/entry.txt.
// Node 22 stdlib only — no dependencies, no network, no reads outside
// this file. The joke is embedded below as a plain string constant.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one line, one breath, 68 characters.
// A true office observation (every modern office has a "quiet room"
// meant for focus) with a rule-of-three turn whose last item reframes
// the room's real purpose.
const JOKE =
  "The quiet room is where people go to cry, nap, and update their CVs.";

function main(): void {
  // Gate: UTF-8 text, 1–200 characters, not only whitespace, one line.
  const chars = [...JOKE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${chars.length}`);
  }
  if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
    throw new Error("joke must be a single non-blank line");
  }

  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JOKE, "utf8");
}

main();
