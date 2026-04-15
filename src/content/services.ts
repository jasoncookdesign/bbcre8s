/*
  EDITOR NOTES
  - Update packages in servicePackages below.
  - Duplicate a package to add a new offer, or set visibility: "hidden" to remove one from the live site.
  - Keep sortOrder in steps of 10 for easy manual reordering.
*/

export type ServiceTier = string;
export type VisibilityState = "public" | "hidden";

export type Deliverable = {
  name: string;
  detail?: string;
};

export type ServicePackage = {
  id: string;
  tier: ServiceTier;
  headline: string;
  bestFor: string;
  turnaround: string;
  deliverables: Deliverable[];
  callout?: string;
  visibility: VisibilityState;
  sortOrder: number;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export const servicePackages: ServicePackage[] = [
  {
    id: "single-ugc-video",
    tier: "Single Video",
    headline: "1 UGC video",
    bestFor: "One product angle, one launch moment, or one fast creative test",
    turnaround: "2-4 business days",
    deliverables: [
      { name: "1 edited vertical video" },
      { name: "Hook and CTA polish", detail: "Refined for short-form attention" },
      { name: "Clean delivery file", detail: "Ready for social or PDP use" }
    ],
    visibility: "public",
    sortOrder: 10
  },
  {
    id: "three-video-bundle",
    tier: "Bundle",
    headline: "3-video bundle",
    bestFor: "Brands that want multiple concepts without overcomplicating the brief",
    turnaround: "4-6 business days",
    deliverables: [
      { name: "3 edited vertical videos" },
      { name: "Hook variation support", detail: "Different opening angles for testing" },
      { name: "Usage-ready exports", detail: "Sized for modern social placements" }
    ],
    callout: "Best starter package",
    visibility: "public",
    sortOrder: 20
  },
  {
    id: "ad-creative-pack",
    tier: "Ad Pack",
    headline: "Ad creative pack",
    bestFor: "Paid social testing, launch pushes, and brands needing multiple sell angles",
    turnaround: "5-7 business days",
    deliverables: [
      { name: "3-5 ad-ready edits" },
      { name: "Multiple hook directions", detail: "Benefit-led and problem-led options" },
      { name: "Paid usage summary", detail: "Clear delivery structure for ad teams" }
    ],
    callout: "Most requested",
    visibility: "public",
    sortOrder: 30
  },
  {
    id: "tech-product-explainer",
    tier: "Explainer",
    headline: "Tech or product explainer content",
    bestFor: "Creator tech, AV gear, podcasting tools, SaaS features, and utility-first products",
    turnaround: "5-7 business days",
    deliverables: [
      { name: "1-2 explainer-style videos" },
      { name: "Clear demonstration flow", detail: "Built for understanding and trust" },
      { name: "Talking-point structure", detail: "Keeps the message sharp and useful" }
    ],
    callout: "Strong fit for niche products",
    visibility: "public",
    sortOrder: 40
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Share the brief",
    detail: "Send the product, goal, audience, and preferred platform through Fiverr or Upwork."
  },
  {
    title: "I build the concept",
    detail: "I shape the hook, demo flow, and creator angle around the buying moment you need."
  },
  {
    title: "Receive polished assets",
    detail: "You get clean vertical content ready for launch, testing, or portfolio review."
  }
];

export function getVisibleServicePackages(): ServicePackage[] {
  return [...servicePackages]
    .filter((pkg) => pkg.visibility === "public")
    .sort((left, right) => left.sortOrder - right.sortOrder);
}
