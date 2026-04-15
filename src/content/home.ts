import type { ContentStatus } from "./types";
import { withBase } from "./site";

export type AudienceFitItem = {
  title: string;
  detail: string;
};

export type HeroVideoConfig = {
  eyebrow: string;
  title: string;
  detail: string;
  videoSrc?: string;
  poster?: string;
  status: ContentStatus;
};

export const heroVideo: HeroVideoConfig = {
  eyebrow: "Highlight Reel",
  title: "Hero reel slot",
  detail: "This automatically switches from the simulated reel to a real video when a production asset is marked ready.",
  poster: withBase("/media/brand/hero-reel-poster.svg"),
  status: "placeholder"
};

export const audienceFitItems: AudienceFitItem[] = [
  {
    title: "Shopify brands",
    detail: "Short-form product creative for launches, PDP support, and paid social testing."
  },
  {
    title: "Amazon sellers",
    detail: "Utility-first videos that clarify benefits quickly and reduce hesitation."
  },
  {
    title: "SaaS startups",
    detail: "Feature-led explainers that stay human, fast, and creator-native."
  },
  {
    title: "Local businesses",
    detail: "Personality-forward clips that make services feel approachable and immediate."
  }
];