import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { NEWS_ARTICLES } from "@/content/news";

export const metadata: Metadata = {
  title: "News Archives",
  description: "Latest news and updates from the Student Organisation of Agder (STA).",
};

export default function EnglishCategoryNyheterPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="News Archives"
          subtitle="Latest news and updates from the Student Organisation of Agder"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </div>
  );
}
