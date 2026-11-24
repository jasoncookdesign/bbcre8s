/*
  Poster helpers for reels. A ready YouTube reel shows its own YouTube
  thumbnail; anything else falls back to the caller's branded placeholder.
*/
type Video = { provider: "youtube" | "vimeo" | "mp4"; id: string };

export function reelPoster(reel: { video: Video; status?: "placeholder" | "ready"; poster?: string }): string | undefined {
  if (reel.poster) return reel.poster;
  if (reel.status === "placeholder") return undefined;
  if (reel.video.provider !== "youtube") return undefined;
  return `https://i.ytimg.com/vi/${reel.video.id}/maxresdefault.jpg`;
}
