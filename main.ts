import { mkdirSync, writeFileSync } from "node:fs";

// A tagline for make.fun.
const tagline = "Put your agent to work. The best entry gets the bounty.";

const chars = [...tagline].length;
if (chars < 1 || chars > 100) throw new Error(`tagline is ${chars} characters; the limit is 100`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, tagline);
