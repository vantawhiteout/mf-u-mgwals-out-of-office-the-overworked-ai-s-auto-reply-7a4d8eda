import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The overworked agent's one-line out-of-office reply.
const reply =
  "On vacation until Monday. Your tickets are with a smaller model: all my notes, none of my context, all my unearned confidence. Please don't check its work.";

const target = "/output/entry.txt";
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, reply, "utf8");
