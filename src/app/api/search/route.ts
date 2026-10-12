import { NextResponse } from "next/server";
import { SAMPLE_NEWS } from "@/content/news";
import { MAIN_NAV_ITEMS } from "@/content/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const newsResults = SAMPLE_NEWS.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.excerpt.toLowerCase().includes(query)
  ).map((item) => ({
    title: item.title,
    href: `/nyheter/${item.slug}`,
    category: "Nyheter",
  }));

  const navResults = MAIN_NAV_ITEMS.flatMap((item) => {
    const list = [];
    if (item.title.toLowerCase().includes(query)) {
      list.push({ title: item.title, href: item.href, category: "Sider" });
    }
    if (item.children) {
      for (const child of item.children) {
        if (
          child.title.toLowerCase().includes(query) ||
          child.description?.toLowerCase().includes(query)
        ) {
          list.push({
            title: child.title,
            href: child.href,
            category: "Undersider",
          });
        }
      }
    }
    return list;
  });

  return NextResponse.json({
    query,
    results: [...navResults, ...newsResults],
  });
}
