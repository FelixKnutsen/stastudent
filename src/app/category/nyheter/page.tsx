import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { NEWS_ARTICLES } from "@/content/news";

export const metadata: Metadata = {
  title: "Nyheter Arkiver",
  description: "Siste nyheter og oppdateringer fra Studentorganisasjonen i Agder (STA).",
};

export default function CategoryNyheterPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Nyheter Arkiver"
          subtitle="Siste nytt fra Studentorganisasjonen i Agder"
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
