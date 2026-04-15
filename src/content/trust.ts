import type { ContentStatus } from "./types";

export type VisibilityState = "public" | "hidden";

export type TrustMetric = {
  id: string;
  label: string;
  value: string;
  visibility: VisibilityState;
  sortOrder: number;
};

export type TestimonialItem = {
  id: string;
  quote: string;
  attribution: string;
  context: string;
  rating?: number;
  status: ContentStatus;
  visibility: VisibilityState;
  sortOrder: number;
};

export type TrustFallbackSignal = {
  id: string;
  title: string;
  detail: string;
  sortOrder: number;
};

export const trustMetrics: TrustMetric[] = [
  {
    id: "platform-ready-delivery",
    label: "Platform-ready delivery",
    value: "Vertical edits built for TikTok, Reels, Shorts, and paid-social placements.",
    visibility: "public",
    sortOrder: 10
  },
  {
    id: "creative-sweet-spot",
    label: "Creative sweet spot",
    value: "Creator tech, AV gear, podcasting tools, and modern product-first content.",
    visibility: "public",
    sortOrder: 20
  },
  {
    id: "workflow-confidence",
    label: "Workflow confidence",
    value: "Clear package framing, fast turnaround structure, and manual curation over clutter.",
    visibility: "public",
    sortOrder: 30
  }
];

export const trustFallbackSignals: TrustFallbackSignal[] = [
  {
    id: "specialization",
    title: "Niche-fit positioning",
    detail: "Best aligned to creator tech, audio gear, product demos, and fast platform-native UGC.",
    sortOrder: 10
  },
  {
    id: "process",
    title: "Clear process",
    detail: "The site is structured around concise briefs, use-case matching, and fast decision-making instead of fluff.",
    sortOrder: 20
  },
  {
    id: "breadth",
    title: "Portfolio breadth signal",
    detail: "Use-case grouping keeps paid ads, demos, lifestyle integrations, and walkthroughs easy to scan as real work is added.",
    sortOrder: 30
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "client-review-1",
    quote:
      "The video felt native to social right away. It explained the product fast and still felt like a real creator recommendation.",
    attribution: "Client review",
    context: "Add a verified Fiverr or Upwork quote before making this public.",
    rating: 5,
    status: "placeholder",
    visibility: "hidden",
    sortOrder: 10
  },
  {
    id: "brand-review-2",
    quote:
      "Strong on camera, clean edit, and the product benefit was obvious in the first few seconds.",
    attribution: "Brand feedback",
    context: "Add real approval-proof text before publishing this review.",
    rating: 5,
    status: "placeholder",
    visibility: "hidden",
    sortOrder: 20
  }
];

export function getVisibleTrustMetrics(): TrustMetric[] {
  return [...trustMetrics]
    .filter((metric) => metric.visibility === "public")
    .sort((left, right) => left.sortOrder - right.sortOrder);
}

export function getTrustFallbackSignals(): TrustFallbackSignal[] {
  return [...trustFallbackSignals].sort((left, right) => left.sortOrder - right.sortOrder);
}

export function getReadyTestimonials(): TestimonialItem[] {
  return [...testimonials]
    .filter((item) => item.visibility === "public" && item.status === "ready")
    .sort((left, right) => left.sortOrder - right.sortOrder);
}

export function getVisibleTestimonials(): TestimonialItem[] {
  return getReadyTestimonials();
}