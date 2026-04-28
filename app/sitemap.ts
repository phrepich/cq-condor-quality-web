import type { MetadataRoute } from "next";

const baseUrl = "https://cq-condor-quality.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
