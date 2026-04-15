/*
  EDITOR NOTES
  - Add a new video by duplicating one object in portfolioItems and changing the fields.
  - Keep useCase exactly as one of the existing group labels below.
  - Use status: "placeholder" while a clip is only being used for layout validation.
  - Use status: "ready" only when the media and proof are approved for high-trust placement.
  - Use visibility: "public" to show work on the site or "hidden" to remove it without deleting it.
  - Use sortOrder in steps of 10 so reordering stays easy.
  - To feature an item on the homepage, set featured: true and give it a featuredOrder from 1-4.
*/

import { withBase } from "./site";
import { getContentStatusLabel, isReadyStatus, type ContentStatus } from "./types";

export type VisibilityState = "public" | "hidden";

export type PortfolioUseCase =
  | "Paid Ads"
  | "Product Demos"
  | "Lifestyle Integrations"
  | "Tech Walkthroughs";

export type PortfolioIndustryTag = string;

export type PortfolioPlatformTag = string;

export type PortfolioMediaType = "local" | "youtube" | "vimeo";

export type PortfolioItem = {
  id: string;
  title: string;
  slug: string;
  status: ContentStatus;
  mediaType: PortfolioMediaType;
  videoUrl?: string;
  embedUrl?: string;
  poster?: string;
  duration?: string;
  useCase: PortfolioUseCase;
  industryTag?: PortfolioIndustryTag;
  platformTag?: PortfolioPlatformTag;
  description: string;
  goal?: string;
  style?: string;
  featured?: boolean;
  featuredOrder?: number;
  visibility: VisibilityState;
  sortOrder: number;
};

export type PortfolioMediaPresentation = {
  kind: "video" | "embed" | "poster";
  poster: string;
  href?: string;
  videoUrl?: string;
  embedUrl?: string;
};

export type PortfolioUseCaseDefinition = {
  id: PortfolioUseCase;
  label: PortfolioUseCase;
  anchorId: string;
  summary: string;
  hideWhenEmpty: boolean;
  sortOrder: number;
};

export const portfolioUseCases: PortfolioUseCaseDefinition[] = [
  {
    id: "Paid Ads",
    label: "Paid Ads",
    anchorId: "paid-ads",
    summary: "Hook-led creative built to communicate payoff quickly and move viewers toward the CTA.",
    hideWhenEmpty: true,
    sortOrder: 1
  },
  {
    id: "Product Demos",
    label: "Product Demos",
    anchorId: "product-demos",
    summary: "Hands-on walkthroughs that reduce confusion and make product utility feel immediate.",
    hideWhenEmpty: true,
    sortOrder: 2
  },
  {
    id: "Lifestyle Integrations",
    label: "Lifestyle Integrations",
    anchorId: "lifestyle-integrations",
    summary: "Soft-sell creator content that blends products into routines, habits, and real use moments.",
    hideWhenEmpty: true,
    sortOrder: 3
  },
  {
    id: "Tech Walkthroughs",
    label: "Tech Walkthroughs",
    anchorId: "tech-walkthroughs",
    summary: "Confident creator-tech coverage that balances credibility, personality, and product clarity.",
    hideWhenEmpty: true,
    sortOrder: 4
  }
];

export const portfolioItems: PortfolioItem[] = [
  // Duplicate one of the entries below to add a new portfolio clip.
  {
    id: "wireless-audio-kit-ad",
    title: "Wireless Audio Kit Benefit Hook",
    slug: "wireless-audio-kit-benefit-hook",
    status: "placeholder",
    mediaType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    poster: withBase("/media/portfolio/wireless-audio-kit.svg"),
    duration: "00:19",
    useCase: "Paid Ads",
    industryTag: "AV Gear",
    platformTag: "Meta Ads",
    description: "Short paid-social cut that opens on the benefit and lands a direct response CTA quickly.",
    goal: "Drive immediate curiosity and reduce hesitation before click-through.",
    style: "Benefit-first, fast-cut, on-camera proof.",
    featured: true,
    featuredOrder: 2,
    visibility: "public",
    sortOrder: 10
  },
  {
    id: "creator-desk-paid-social",
    title: "Creator Desk Routine Paid Social Cut",
    slug: "creator-desk-routine-paid-social-cut",
    status: "placeholder",
    mediaType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    poster: withBase("/media/portfolio/desk-routine-lifestyle.svg"),
    duration: "00:24",
    useCase: "Paid Ads",
    industryTag: "Lifestyle",
    platformTag: "Instagram Reels",
    description: "Routine-driven paid creative designed to feel native rather than overly produced.",
    goal: "Make the product feel desirable inside a real creator workflow.",
    style: "Warm, conversational, visual payoff early.",
    visibility: "public",
    sortOrder: 20
  },
  {
    id: "podcast-mic-demo",
    title: "Podcast Mic Upgrade Reaction",
    slug: "podcast-mic-upgrade-reaction",
    status: "placeholder",
    mediaType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    poster: withBase("/media/portfolio/podcast-mic-upgrade.svg"),
    duration: "00:28",
    useCase: "Product Demos",
    industryTag: "Podcasting",
    platformTag: "YouTube Shorts",
    description: "Problem-solution demo built to show the product upgrade in a few seconds.",
    goal: "Clarify why the upgrade matters without sounding scripted.",
    style: "Reaction-led, credibility-forward, utility-focused.",
    featured: true,
    featuredOrder: 3,
    visibility: "public",
    sortOrder: 30
  },
  {
    id: "smart-lighting-demo",
    title: "Smart Lighting Setup Walkthrough",
    slug: "smart-lighting-setup-walkthrough",
    status: "placeholder",
    mediaType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    poster: withBase("/media/portfolio/smart-lighting-demo.svg"),
    duration: "00:32",
    useCase: "Product Demos",
    industryTag: "Creator Tech",
    platformTag: "TikTok",
    description: "Feature-by-feature demo that stays energetic while showing real use outcomes.",
    goal: "Make setup feel easy and the result feel worth buying for.",
    style: "Fast-paced product demo with humor-led hook and clear CTA.",
    featured: true,
    featuredOrder: 1,
    visibility: "public",
    sortOrder: 40
  },
  {
    id: "desk-routine-lifestyle",
    title: "Creator Desk Routine Product Blend",
    slug: "creator-desk-routine-product-blend",
    status: "placeholder",
    mediaType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    poster: withBase("/media/portfolio/desk-routine-lifestyle.svg"),
    duration: "00:36",
    useCase: "Lifestyle Integrations",
    industryTag: "Lifestyle",
    platformTag: "Instagram Reels",
    description: "Routine-led lifestyle content balancing creator personality with product utility.",
    goal: "Blend the offer into everyday behavior so the product feels easy to imagine owning.",
    style: "Native-feeling social format balancing personality with product utility.",
    featured: true,
    featuredOrder: 4,
    visibility: "public",
    sortOrder: 50
  },
  {
    id: "dj-controller-session",
    title: "DJ Controller One-Minute Performance",
    slug: "dj-controller-one-minute-performance",
    status: "placeholder",
    mediaType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    poster: withBase("/media/portfolio/dj-controller-session.svg"),
    duration: "00:57",
    useCase: "Lifestyle Integrations",
    industryTag: "DJ + Music Tools",
    platformTag: "TikTok",
    description: "Performance-driven product integration with quick-cut lifestyle energy.",
    goal: "Show the product inside a believable creator moment rather than an isolated demo.",
    style: "Energy-forward lifestyle footage with quick-cut transitions.",
    visibility: "public",
    sortOrder: 60
  },
  {
    id: "creator-tech-routing-guide",
    title: "Creator Tech Desk Routing Guide",
    slug: "creator-tech-desk-routing-guide",
    status: "placeholder",
    mediaType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    poster: withBase("/media/portfolio/smart-lighting-demo.svg"),
    duration: "00:44",
    useCase: "Tech Walkthroughs",
    industryTag: "Creator Tech",
    platformTag: "YouTube Shorts",
    description: "Step-by-step creator-tech walkthrough focused on a clean setup result and credibility on camera.",
    goal: "Teach quickly while reinforcing trust in the product and the creator using it.",
    style: "Explainer-led, confident, high-clarity visual sequencing.",
    visibility: "public",
    sortOrder: 70
  },
  {
    id: "wireless-audio-tech-setup",
    title: "Wireless Audio Kit Setup Walkthrough",
    slug: "wireless-audio-kit-setup-walkthrough",
    status: "placeholder",
    mediaType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    poster: withBase("/media/portfolio/wireless-audio-kit.svg"),
    duration: "00:41",
    useCase: "Tech Walkthroughs",
    industryTag: "AV Gear",
    platformTag: "TikTok",
    description: "Practical setup and sound-check walkthrough designed for utility and confidence.",
    goal: "Remove friction from trying the product for the first time.",
    style: "Hands-on audio quality comparison crafted for product page retention.",
    visibility: "public",
    sortOrder: 80
  }
];

function sortItems(items: PortfolioItem[]): PortfolioItem[] {
  return [...items].sort((left, right) => {
    if (left.sortOrder !== right.sortOrder) {
      return left.sortOrder - right.sortOrder;
    }

    return left.title.localeCompare(right.title);
  });
}

function sortFeaturedItems(items: PortfolioItem[]): PortfolioItem[] {
  return [...items].sort((left, right) => {
    const leftRank = left.featuredOrder ?? Number.MAX_SAFE_INTEGER;
    const rightRank = right.featuredOrder ?? Number.MAX_SAFE_INTEGER;

    if (leftRank !== rightRank) {
      return leftRank - rightRank;
    }

    return left.sortOrder - right.sortOrder;
  });
}

function getMediaUrl(item: PortfolioItem): string | undefined {
  if (!item.videoUrl) {
    return undefined;
  }

  return item.mediaType === "local" ? withBase(item.videoUrl) : item.videoUrl;
}

export function getVisiblePortfolioItems(): PortfolioItem[] {
  return sortItems(portfolioItems.filter((item) => item.visibility === "public"));
}

export function getPortfolioItemsEligibleForTrust(): PortfolioItem[] {
  return sortFeaturedItems(
    getVisiblePortfolioItems().filter((item) => Boolean(item.featured) && isReadyStatus(item.status))
  );
}

export function getPortfolioItemById(id: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.id === id);
}

export function getPortfolioItemsByUseCase(useCase: PortfolioUseCase): PortfolioItem[] {
  return getVisiblePortfolioItems().filter((item) => item.useCase === useCase);
}

export function getPortfolioUseCaseGroups(): Array<PortfolioUseCaseDefinition & { items: PortfolioItem[] }> {
  return [...portfolioUseCases]
    .sort((left, right) => left.sortOrder - right.sortOrder)
    .map((useCase) => ({
      ...useCase,
      items: getPortfolioItemsByUseCase(useCase.id)
    }))
    .filter((group) => !group.hideWhenEmpty || group.items.length > 0);
}

export function getFeaturedPortfolio(limit = 4): PortfolioItem[] {
  return sortFeaturedItems(
    getVisiblePortfolioItems().filter((item) => Boolean(item.featured) && isReadyStatus(item.status))
  ).slice(0, limit);
}

export function getHomepageFeaturedPortfolio(limit = 4): PortfolioItem[] {
  return getFeaturedPortfolio(limit);
}

export function getHeroPreviewPortfolio(limit = 4): PortfolioItem[] {
  const readyFeatured = getFeaturedPortfolio(limit);

  if (readyFeatured.length > 0) {
    return readyFeatured;
  }

  const previewFeatured = sortFeaturedItems(getVisiblePortfolioItems().filter((item) => Boolean(item.featured)));

  if (previewFeatured.length > 0) {
    return previewFeatured.slice(0, limit);
  }

  return getVisiblePortfolioItems().slice(0, limit);
}

export function getUseCasePreviewItems(): Array<PortfolioUseCaseDefinition & { item: PortfolioItem }> {
  return getPortfolioUseCaseGroups().reduce<Array<PortfolioUseCaseDefinition & { item: PortfolioItem }>>(
    (groups, group) => {
      const item = group.items.find((candidate) => isReadyStatus(candidate.status)) ?? group.items[0];

      if (item) {
        groups.push({ ...group, item });
      }

      return groups;
    },
    []
  );
}

export function getPortfolioPoster(item: PortfolioItem): string {
  return item.poster ?? withBase("/media/brand/social-share-card.svg");
}

export function getPortfolioExternalHref(item: PortfolioItem): string | undefined {
  return getMediaUrl(item);
}

export function getPortfolioVideoEmbedHref(
  item: Pick<PortfolioItem, "mediaType" | "videoUrl" | "embedUrl">
): string | undefined {
  if (item.embedUrl) {
    return item.embedUrl;
  }

  const mediaUrl = item.videoUrl;

  if (!mediaUrl) {
    return undefined;
  }

  if (item.mediaType === "youtube") {
    const match = mediaUrl.match(/[?&]v=([^&]+)/) ?? mediaUrl.match(/youtu\.be\/([^?&]+)/);
    const videoId = match?.[1];

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
  }

  if (item.mediaType === "vimeo") {
    const match = mediaUrl.match(/vimeo\.com\/(\d+)/);
    const videoId = match?.[1];

    if (videoId) {
      return `https://player.vimeo.com/video/${videoId}`;
    }
  }

  return undefined;
}

export function getPortfolioMediaPresentation(item: PortfolioItem): PortfolioMediaPresentation {
  const poster = getPortfolioPoster(item);
  const mediaUrl = getMediaUrl(item);
  const embedHref = getPortfolioVideoEmbedHref(item);

  if (item.mediaType === "local" && mediaUrl) {
    return {
      kind: "video",
      poster,
      href: mediaUrl,
      videoUrl: mediaUrl
    };
  }

  if (embedHref) {
    return {
      kind: "embed",
      poster,
      href: mediaUrl,
      embedUrl: embedHref
    };
  }

  return {
    kind: "poster",
    poster,
    href: mediaUrl
  };
}

export function getPortfolioStatusText(item: PortfolioItem): string {
  return getContentStatusLabel(item.status);
}

export function getRelatedPortfolioItems(item: PortfolioItem, limit = 3): PortfolioItem[] {
  return getVisiblePortfolioItems()
    .filter((candidate) => candidate.id !== item.id)
    .sort((left, right) => {
      const leftScore = Number(left.useCase === item.useCase) * 3 + Number(left.industryTag === item.industryTag);
      const rightScore = Number(right.useCase === item.useCase) * 3 + Number(right.industryTag === item.industryTag);

      if (leftScore !== rightScore) {
        return rightScore - leftScore;
      }

      return left.sortOrder - right.sortOrder;
    })
    .slice(0, limit);
}
