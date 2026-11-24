import { z } from "astro/zod";

/**
 * An optional whole number. The CMS saves an emptied number field as `null`,
 * so null is treated the same as absent.
 */
export const optionalInt = (refine: (n: z.ZodNumber) => z.ZodNumber = (n) => n) =>
  z.preprocess((v) => v ?? undefined, refine(z.number().int()).optional());
