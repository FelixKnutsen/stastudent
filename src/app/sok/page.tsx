"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { NEWS_ARTICLES } from "@/content/news";
import { BOARD_MEMBERS } from "@/content/board-members";
import { STUDENT_ASSOCIATIONS } from "@/content/associations";
import { STUDENT_ACTIVITIES } from "@/content/activities";
import { Search, ArrowRight } from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  useEffect(() => {
    setSearchTerm(searchParams.get("q") || "");
  }, [searchParams]);

  const term = searchTerm.trim().toLowerCase();

  const newsResults = term
    ? NEWS_ARTICLES.filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          item.excerpt.toLowerCase().includes(term)
      )
    : [];

  const boardResults = term
    ? BOARD_MEMBERS.filter(
        (m) =>
          m.name.toLowerCase().includes(term) ||
          m.role.toLowerCase().includes(term) ||
          (m.responsibilities && m.responsibilities.some((r) => r.toLowerCase().includes(term)))
      )
    : [];

  const assocResults = term
    ? STUDENT_ASSOCIATIONS.filter(
        (a) =>
          a.name.toLowerCase().includes(term) ||
          (a.studyProgram && a.studyProgram.toLowerCase().includes(term)) ||
          a.faculty.toLowerCase().includes(term) ||
          (a.description && a.description.toLowerCase().includes(term))
      )
    : [];

  const activityResults = term
    ? STUDENT_ACTIVITIES.filter(
        (act) =>
          act.name.toLowerCase().includes(term) ||
          act.category.toLowerCase().includes(term) ||
          (act.description && act.description.toLowerCase().includes(term))
      )
    : [];

  const totalResults =
    newsResults.length + boardResults.length + assocResults.length + activityResults.length;

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-sta-teal-300" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Skriv inn søkeord (f.eks. valg, styret, linjeforening, kor)..."
            className="w-full pl-12 pr-4 py-3 bg-sta-teal-800/80 border border-sta-teal-500/40 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sta-orange"
          />
        </div>
      </div>

      {term && (
        <div className="max-w-4xl mx-auto space-y-10">
          <h3 className="text-lg font-semibold text-white">
            Resultater for «{searchTerm}» ({totalResults}):
          </h3>

          {/* Board members */}
          {boardResults.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-3">
                STA-Styret ({boardResults.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {boardResults.map((m) => (
                  <Card key={m.id} className="p-4">
                    <h5 className="font-bold text-white text-sm">{m.name}</h5>
                    <p className="text-xs text-sta-orange font-semibold">{m.role}</p>
                    <Link
                      href="/sta-styret"
                      className="text-xs text-sta-teal-200 hover:text-white mt-2 inline-flex items-center gap-1"
                    >
                      Se styret <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Linjeforeninger */}
          {assocResults.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-3">
                Linjeforeninger ({assocResults.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {assocResults.map((a) => (
                  <Card key={a.id} className="p-4">
                    <h5 className="font-bold text-white text-sm">{a.name}</h5>
                    <p className="text-xs text-sta-teal-200">{a.studyProgram}</p>
                    <Link
                      href="/linjeforeninger"
                      className="text-xs text-sta-orange hover:text-white mt-2 inline-flex items-center gap-1 font-semibold"
                    >
                      Se linjeforeninger <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Student activities */}
          {activityResults.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-3">
                Studentaktiviteter ({activityResults.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activityResults.map((act) => (
                  <Card key={act.id} className="p-4">
                    <h5 className="font-bold text-white text-sm">{act.name}</h5>
                    <p className="text-xs text-sta-teal-200">{act.category}</p>
                    <Link
                      href="/studentaktiviteter"
                      className="text-xs text-sta-orange hover:text-white mt-2 inline-flex items-center gap-1 font-semibold"
                    >
                      Se aktiviteter <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* News articles */}
          {newsResults.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-3">
                Nyhetsartikler ({newsResults.length})
              </h4>
              <div className="space-y-3">
                {newsResults.map((article) => (
                  <Card key={article.id} className="p-4">
                    <h5 className="font-bold text-white text-sm">{article.title}</h5>
                    <p className="text-xs text-sta-teal-100 mt-1 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/nyheter/${article.slug}`}
                      className="text-xs text-sta-orange hover:text-white mt-2 inline-flex items-center gap-1 font-semibold"
                    >
                      Les artikkelen <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {totalResults === 0 && (
            <div className="p-8 text-center bg-sta-teal-800/40 rounded-xl text-sta-teal-200">
              Ingen treff funnet for «{searchTerm}». Prøv et annet søkeord.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Søk på stastudent.no"
          subtitle="Finn styremedlemmer, linjeforeninger, aktiviteter, nyheter og dokumenter"
        />
        <Suspense fallback={<div className="text-center text-white">Laster søk...</div>}>
          <SearchContent />
        </Suspense>
      </Container>
    </div>
  );
}
