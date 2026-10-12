import { NextResponse } from "next/server";
import { SAMPLE_NEWS } from "@/content/news";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const limitParam = searchParams.get("limit");

  let filtered = [...SAMPLE_NEWS];

  if (category) {
    filtered = filtered.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (limitParam) {
    const limit = parseInt(limitParam, 10);
    if (!isNaN(limit) && limit > 0) {
      filtered = filtered.slice(0, limit);
    }
  }

  return NextResponse.json({
    total: filtered.length,
    articles: filtered,
  });
}
