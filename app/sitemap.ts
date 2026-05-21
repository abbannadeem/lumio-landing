import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Required for `output: 'export'` — emits a static sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
