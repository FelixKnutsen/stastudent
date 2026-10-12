import React from "react";
import Link from "next/link";
import { Container } from "../shared/Container";
import { NewsCard } from "../news/NewsCard";
import { NEWS_ARTICLES } from "@/content/news";
import { ArrowRight } from "lucide-react";

export function NewsHighlightSection() {
  const latestNews = NEWS_ARTICLES.slice(0, 3);

  return (
    <section className="py-12 bg-sta-teal-900/40">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/category/nyheter"
            className="text-2xl sm:text-3xl font-bold text-white tracking-wider hover:text-sta-orange transition-colors"
          >
            SISTE NYTT
          </Link>
          <Link
            href="/category/nyheter"
            className="text-xs font-semibold text-sta-orange hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Se alle nyheter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
