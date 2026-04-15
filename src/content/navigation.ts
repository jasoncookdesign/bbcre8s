import { withBase } from "@content/site";

export type NavItem = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: withBase("/") },
  { label: "Portfolio", href: withBase("/portfolio") },
  { label: "Services", href: withBase("/services") },
  { label: "About", href: withBase("/about") },
  { label: "Work With Me", href: withBase("/work-with-me"), isPrimary: true }
];

export const utilityNav: NavItem[] = [{ label: "Link Hub", href: withBase("/links") }];
