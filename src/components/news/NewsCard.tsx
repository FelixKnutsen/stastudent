import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/types/news";
import { formatNorwegianDate } from "@/lib/date";
import { Calendar } from "lucide-react";
import { Badge } from "../shared/Badge";

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl bg-sta-teal-700/40 border border-sta-teal-500/20 overflow-hidden hover:border-sta-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sta-teal-900">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sta-teal-300">
            Ingen bilde
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="orange">{article.category}</Badge>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-sta-teal-200 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={article.publishedAt}>
              {formatNorwegianDate(article.publishedAt)}
            </time>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-sta-orange transition-colors line-clamp-2">
            <Link href={`/nyheter/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="mt-2 text-sm text-sta-teal-100 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-sta-teal-600/40">
          <Link
            href={`/nyheter/${article.slug}`}
            className="text-xs font-semibold text-sta-orange hover:text-white transition-colors inline-flex items-center gap-1"
          >
            Les hele saken →
          </Link>
        </div>
      </div>
    </article>
  );
}
