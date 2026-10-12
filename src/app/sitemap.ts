import { MetadataRoute } from "next";
import { SITE_METADATA } from "@/lib/constants";
import { NEWS_ARTICLES } from "@/content/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Norwegian
    "",
    "/rad-styrer-og-utvalg",
    "/ledige-verv",
    "/dokumenter",
    "/for-tillitsvalgte",
    "/sta-styret",
    "/studentparlamentet",
    "/linjeforeninger",
    "/studentaktiviteter",
    "/lokaler",
    "/irene-bredals-hederspris",
    "/category/nyheter",
    "/personvernserklaering",
    "/trygg-organisasjon",
    "/sok",
    // English
    "/en",
    "/en/rad-styrer-og-utvalg",
    "/en/ledige-verv",
    "/en/dokumenter",
    "/en/for-tillitsvalgte",
    "/en/sta-styret",
    "/en/studentparlamentet",
    "/en/linjeforeninger",
    "/en/studentaktiviteter",
    "/en/lokaler",
    "/en/ledige-verv",
    "/en/irene-bredals-hederspris",
    "/en/category/nyheter",
    "/en/personvernserklaering",
    "/en/trygg-organisasjon",
  ].map((route) => ({
    url: `${SITE_METADATA.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" || route === "/en" ? 1 : 0.8,
  }));

  const newsRoutes = NEWS_ARTICLES.map((article) => ({
    url: `${SITE_METADATA.url}/nyheter/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...newsRoutes];
}
