import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { SAMPLE_NEWS } from "@/content/news";

export const metadata: Metadata = {
  title: "Nyheter",
  description: "Aktuelle saker, pressemeldinger og oppdateringer fra STA.",
};

export default function NyheterPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="Nyhetsarkiv"
          subtitle="Følg med på siste nytt om studentpolitikk, velferd og arrangementer ved UiA."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_NEWS.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </div>
  );
}
