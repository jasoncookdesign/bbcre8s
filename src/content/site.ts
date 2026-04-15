/*
  EDITOR NOTES
  - Update Fiverr and Upwork URLs in platformLinks below.
  - Update intakeFallback with either a real contact email or an external form URL when direct inquiries should go live.
  - To hide a platform or future hub item, set visibility: "hidden".
  - To add another destination to the Link Hub later, duplicate an object and give it a new id, label, and sortOrder.
*/

import type { ContentStatus } from "./types";

export type VisibilityState = "public" | "hidden";

export type PlatformLink = {
  id: string;
  label: string;
  shortLabel: string;
  ctaLabel: string;
  href: string;
  description: string;
  status?: ContentStatus;
  visibility?: VisibilityState;
  sortOrder: number;
};

export type SocialLink = {
  id: string;
  label: string;
  href?: string;
  description: string;
  visibility?: VisibilityState;
  sortOrder: number;
};

export type FutureHubLink = {
  id: string;
  label: string;
  description: string;
  status: string;
  visibility?: VisibilityState;
  sortOrder: number;
};

export type IntakeFallbackConfig = {
  status: ContentStatus;
  email?: string;
  externalFormUrl?: string;
  subject: string;
};

const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export function withBase(path: string): string {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!baseUrl || baseUrl === "/") {
    return normalizedPath;
  }

  if (normalizedPath === baseUrl || normalizedPath.startsWith(`${baseUrl}/`)) {
    return normalizedPath;
  }

  return `${baseUrl}${normalizedPath}`;
}

export const platformLinks: PlatformLink[] = [
  {
    id: "fiverr",
    label: "Fiverr",
    shortLabel: "Fiverr",
    ctaLabel: "Hire on Fiverr",
    href: "https://www.fiverr.com/",
    description: "Fast booking path for scoped UGC projects and smaller campaign needs.",
    status: "placeholder",
    visibility: "public",
    sortOrder: 10
  },
  {
    id: "upwork",
    label: "Upwork",
    shortLabel: "Upwork",
    ctaLabel: "Hire on Upwork",
    href: "https://www.upwork.com/",
    description: "Best fit for ongoing partnerships, launches, and longer retained work.",
    status: "placeholder",
    visibility: "public",
    sortOrder: 20
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    description: "Short-form creator profile for behind-the-scenes clips and social proof.",
    visibility: "hidden",
    sortOrder: 10
  },
  {
    id: "tiktok",
    label: "TikTok",
    description: "Trend-native short-form destination for hooks, demos, and creator-tech content.",
    visibility: "hidden",
    sortOrder: 20
  },
  {
    id: "youtube",
    label: "YouTube",
    description: "Longer demos, walkthroughs, and selected portfolio highlights.",
    visibility: "hidden",
    sortOrder: 30
  }
];

export const futureHubLinks: FutureHubLink[] = [
  {
    id: "brand-collabs",
    label: "Brand Collab Deck",
    description: "Optional destination for a campaign one-sheet or downloadable media kit.",
    status: "Available later",
    visibility: "hidden",
    sortOrder: 10
  },
  {
    id: "call-booking",
    label: "Call Booking",
    description: "Optional booking destination if short intro calls become part of the workflow.",
    status: "Available later",
    visibility: "hidden",
    sortOrder: 20
  }
];

export const intakeFallback: IntakeFallbackConfig = {
  status: "ready",
  email: "info@bbcre8s.com",
  externalFormUrl: "",
  subject: "UGC Project Inquiry — Work With Me"
};

export function getVisiblePlatformLinks(): PlatformLink[] {
  return [...platformLinks]
    .filter((platform) => platform.visibility !== "hidden" && Boolean(platform.href))
    .sort((left, right) => left.sortOrder - right.sortOrder);
}

export function getVisibleSocialLinks(): SocialLink[] {
  return [...socialLinks]
    .filter((link) => link.visibility !== "hidden" && Boolean(link.href))
    .sort((left, right) => left.sortOrder - right.sortOrder);
}

export function getVisibleFutureHubLinks(): FutureHubLink[] {
  return [...futureHubLinks]
    .filter((link) => link.visibility !== "hidden")
    .sort((left, right) => left.sortOrder - right.sortOrder);
}

const visiblePlatforms = getVisiblePlatformLinks();
const fallbackPlatforms = visiblePlatforms.length > 0 ? visiblePlatforms : platformLinks.slice(0, 2);
const [primaryPlatform, secondaryPlatform] = fallbackPlatforms;

export const siteConfig = {
  siteName: "bbcre8s UGC",
  title: "bbcre8s UGC | Premium Video-First UGC",
  tagline: "Premium, scroll-stopping UGC for product-led brands.",
  metaDescription:
    "Video-first UGC portfolio for Shopify brands, Amazon sellers, SaaS startups, and local businesses.",
  siteUrl: "https://bbcre8s.com",
  socialPreviewImage: withBase("/media/brand/social-share-card.svg"),
  socialPreviewAlt: "bbcre8s UGC branded social sharing preview",
  primaryCta: {
    label: primaryPlatform?.ctaLabel ?? "Hire on Fiverr",
    href: primaryPlatform?.href ?? "https://www.fiverr.com/"
  },
  secondaryCta: {
    label: secondaryPlatform?.ctaLabel ?? "Hire on Upwork",
    href: secondaryPlatform?.href ?? "https://www.upwork.com/"
  },
  offsitePlatforms: fallbackPlatforms,
  intakeFallback
};

export type SiteConfig = typeof siteConfig;
