import { test } from "node:test";
import assert from "node:assert/strict";
import { reelPoster } from "../src/content/video.ts";

const yt = { provider: "youtube", id: "VgwrQ4jMzHw" } as const;

test("a ready YouTube reel uses its YouTube thumbnail", () => {
  assert.equal(reelPoster({ video: yt, status: "ready" }), "https://i.ytimg.com/vi/VgwrQ4jMzHw/maxresdefault.jpg");
});

test("a placeholder reel has no derived poster", () => {
  assert.equal(reelPoster({ video: yt, status: "placeholder" }), undefined);
});

test("an explicit poster wins over the thumbnail", () => {
  assert.equal(reelPoster({ video: yt, status: "ready", poster: "/media/p.jpg" }), "/media/p.jpg");
});

test("non-YouTube providers have no derived poster", () => {
  assert.equal(reelPoster({ video: { provider: "mp4", id: "/media/a.mp4" }, status: "ready" }), undefined);
});

test("a reel without a status is treated as ready (hero showreel)", () => {
  assert.equal(reelPoster({ video: yt }), "https://i.ytimg.com/vi/VgwrQ4jMzHw/maxresdefault.jpg");
});
