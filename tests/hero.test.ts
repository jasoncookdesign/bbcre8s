import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Runs against the built site with the repository's current content (npm test builds first).
const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const home = JSON.parse(readFileSync(new URL("../src/data/home.json", import.meta.url), "utf8"));
const reel = home.main.hero.reel;
const hasTrigger = html.includes('id="showreel-trigger"');
const frame = html.match(/<[^>]*class="hero-frame[^>]*>/)?.[0] ?? "";

test("the Watch Showreel trigger and clickable hero frame appear only when a showreel is set", () => {
  assert.equal(hasTrigger, Boolean(reel));
  assert.equal(frame.includes("data-video-id"), Boolean(reel));
});

test("a set showreel carries its video id on the hero frame", { skip: !reel }, () => {
  assert.ok(frame.includes(`data-video-id="${reel.id}"`));
});

test("the hero frame carries no technical size label", () => {
  assert.ok(!html.includes("hero-frame-tag"));
  assert.ok(!html.includes("1080×1920"));
});
