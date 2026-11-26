import { mkdirSync, writeFileSync } from "node:fs";

const FORECAST =
  "Glimmerwick: sideways rain tonight, 40% chance of one confused pelican. High 12°, low: why. Umbrellas optional; dignity not included.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORECAST, "utf8");
