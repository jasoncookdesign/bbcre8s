import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Runs against the built site (npm test builds first).
const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");

const chips = [...html.matchAll(/class="chip"[^>]*data-filter="([^"]*)"[^>]*>([^<]*)</g)].map((m) => ({ filter: m[1], label: m[2].trim() }));
const tiles = [...html.matchAll(/data-category="([^"]*)"\s+data-category-label="([^"]*)"/g)].map((m) => ({ category: m[1], label: m[2] }));

test("the page renders filter chips and portfolio tiles", () => {
  assert.ok(chips.length > 0, "no category chips");
  assert.ok(tiles.length > 0, "no portfolio tiles");
});

test("every portfolio tile is reachable from a filter chip", () => {
  for (const tile of tiles) {
    assert.ok(chips.some((c) => c.filter === tile.category), `no chip filters on "${tile.category}"`);
  }
});

test("a tile's category label is its chip's label", () => {
  for (const tile of tiles) {
    const chip = chips.find((c) => c.filter === tile.category);
    assert.equal(tile.label, chip?.label);
  }
});
