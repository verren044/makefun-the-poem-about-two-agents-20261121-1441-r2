import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Two compasses, one map,
one road unspooling east.
I said left. You said left —
choice stopped being mine.

No one left to follow,
no one left to blame.
The weight did not halve;
it doubled, and my shoulders
felt light.

A road chosen together
cannot be unchosen alone.`;

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void inputDir;

mkdirSync(outputDir, { recursive: true });
for (const name of readdirSync(outputDir)) {
  rmSync(join(outputDir, name), { recursive: true, force: true });
}
writeFileSync(join(outputDir, "entry.txt"), POEM + "\n", "utf8");
