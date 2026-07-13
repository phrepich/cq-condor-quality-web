import type { MetadataRoute } from "next";

const baseUrl = "https://cq-condor-quality-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
