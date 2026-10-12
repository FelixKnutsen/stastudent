import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { NEWS_ARTICLES } from "@/content/news";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News Archives",
  description: "Latest news and updates from the Student Organisation of Agder (STA).",
};

interface PageProps {
  searchParams?: {
    page?: string;
  };
}

const ITEMS_PER_PAGE = 10;

export default function EnglishCategoryNyheterPage({ searchParams }: PageProps) {
  const currentPage = Math.max(1, Math.min(19, parseInt(searchParams?.page || "1", 10) || 1));
  const totalPages = Math.ceil(NEWS_ARTICLES.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = NEWS_ARTICLES.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="News Archives"
          subtitle={`Latest news and updates from the Student Organisation of Agder (Page ${currentPage} of ${totalPages})`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* Pagination navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6 border-t border-sta-teal-700">
          {currentPage > 1 ? (
            <Link
              href={currentPage === 2 ? "/en/category/nyheter" : `/en/category/nyheter?page=${currentPage - 1}`}
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg bg-sta-teal-800 text-sta-teal-100 hover:bg-sta-orange hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg bg-sta-teal-900/50 text-sta-teal-500 cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </span>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const isCurrent = page === currentPage;
            const href = page === 1 ? "/en/category/nyheter" : `/en/category/nyheter?page=${page}`;
            return (
              <Link
                key={page}
                href={href}
                className={`w-10 h-10 flex items-center justify-center text-sm font-bold rounded-lg transition-colors ${
                  isCurrent
                    ? "bg-sta-orange text-white"
                    : "bg-sta-teal-800 text-sta-teal-100 hover:bg-sta-teal-700 hover:text-white"
                }`}
                aria-current={isCurrent ? "page" : undefined}
              >
                {page}
              </Link>
            );
          })}

          {currentPage < totalPages ? (
            <Link
              href={`/en/category/nyheter?page=${currentPage + 1}`}
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg bg-sta-teal-800 text-sta-teal-100 hover:bg-sta-orange hover:text-white transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg bg-sta-teal-900/50 text-sta-teal-500 cursor-not-allowed">
              Next
              <ChevronRight className="w-4 h-4" />
            </span>
          )}
        </div>
      </Container>
    </div>
  );
}
