// One Line, One Laugh — make.fun entry (program/v1).
// Prints the single funny line (<=200 chars) to stdout, and when the
// environment variable MAKEFUN_OUTPUT_DIR is set, writes it (no trailing
// newline) to <MAKEFUN_OUTPUT_DIR>/entry.txt as UTF-8, as the rules require.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I tried to adult today. My bed filed for custody of me.";

function main() {
  process.stdout.write(LINE + "\n");
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (outputDir) {
    writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
  }
}

main();
