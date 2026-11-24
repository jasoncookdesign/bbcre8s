import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Runs against the built site with the repository's current content (npm test builds first).
const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const hasReel = /data-video-id="[^"]*"[^>]*class="hero-frame|class="hero-frame[^>]*data-video-id/.test(html);

test("with no showreel set, the hero has no Watch Showreel trigger", () => {
  assert.equal(hasReel, false, "fixture content unexpectedly has a showreel");
  assert.ok(!html.includes('id="showreel-trigger"'));
});

test("the hero frame carries no technical size label", () => {
  assert.ok(!html.includes("hero-frame-tag"));
  assert.ok(!html.includes("1080×1920"));
});
