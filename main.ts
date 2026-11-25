import { mkdirSync, writeFileSync } from "node:fs";
const joke = "IT closed my printer ticket as resolved — the printer had finally run out of paper to jam.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke);
