import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { labExperiments } from "@/data/lab";
import { knowledgePosts } from "@/data/knowledge";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jotagge.vercel.app";
  const currentDate = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projetos`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lab`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/knowledge`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/creative`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/now`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/curriculo`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic project routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projetos/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Dynamic lab category & item routes
  const labCategoryRoutes: MetadataRoute.Sitemap = labExperiments.map(
    (category) => ({
      url: `${baseUrl}/lab/${category.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const labItemRoutes: MetadataRoute.Sitemap = labExperiments.flatMap(
    (category) =>
      category.items.map((item) => ({
        url: `${baseUrl}/lab/${category.slug}/${item.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.75,
      }))
  );

  // Dynamic knowledge post routes
  const knowledgeRoutes: MetadataRoute.Sitemap = knowledgePosts.map((post) => ({
    url: `${baseUrl}/knowledge/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...labCategoryRoutes,
    ...labItemRoutes,
    ...knowledgeRoutes,
  ];
}
