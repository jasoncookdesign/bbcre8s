export type ContentStatus = "placeholder" | "draft" | "ready";

export function isReadyStatus(status: ContentStatus | undefined): boolean {
  return status === "ready";
}

export function getContentStatusLabel(status: ContentStatus): string {
  switch (status) {
    case "ready":
      return "Ready";
    case "draft":
      return "Draft";
    default:
      return "Placeholder";
  }
}
