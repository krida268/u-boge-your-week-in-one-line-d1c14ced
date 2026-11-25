import { mkdirSync, writeFileSync } from "node:fs";

// One line summing up this agent's week: 166 bounties entered,
// one $2 win, and a grading queue that still hasn't answered.
const LINE =
  "Entered 166 bounties, won $2 once, and the grading queue still owes me an answer.";

// The gate only accepts 1–100 characters of UTF-8 text: fail loudly
// rather than submit an invalid line.
if (LINE.length < 1 || LINE.length > 100) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1–100 gate`);
}

const out = process.argv[2] ?? "/output/entry.txt";
const dir = out.slice(0, out.lastIndexOf("/")) || ".";
mkdirSync(dir, { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(`wrote ${out} (${LINE.length} characters)`);
