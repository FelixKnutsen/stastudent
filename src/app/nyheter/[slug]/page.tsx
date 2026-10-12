import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/shared/Badge";
import { SAMPLE_NEWS } from "@/content/news";
import { formatNorwegianDate } from "@/lib/date";
import { Calendar, User, ArrowLeft } from "lucide-react";

interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SAMPLE_NEWS.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: NewsDetailPageProps): Metadata {
  const article = SAMPLE_NEWS.find((item) => item.slug === params.slug);
  if (!article) {
    return { title: "Artikkel ikke funnet" };
  }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.imageUrl ? [{ url: article.imageUrl }] : [],
    },
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = SAMPLE_NEWS.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/category/nyheter"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sta-orange hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til alle nyheter
          </Link>

          <div className="mb-4">
            <Badge variant="orange">{article.category}</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-sta-teal-200 pb-8 border-b border-sta-teal-700">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-sta-orange" />
              {formatNorwegianDate(article.publishedAt)}
            </span>
            {article.author && (
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-sta-orange" />
                {article.author}
              </span>
            )}
          </div>

          {article.imageUrl && (
            <div className="relative aspect-[16/9] w-full my-8 rounded-2xl overflow-hidden bg-sta-teal-900 shadow-xl">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none text-sta-teal-50 leading-relaxed space-y-6">
            <p className="text-xl font-medium text-white leading-relaxed">
              {article.excerpt}
            </p>
            <p>{article.content}</p>
          </div>
        </div>
      </Container>
    </article>
  );
}
