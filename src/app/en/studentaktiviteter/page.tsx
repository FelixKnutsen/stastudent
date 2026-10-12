"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { STUDENT_ACTIVITIES } from "@/content/activities";
import { ExternalLink, Mail, Facebook, Instagram, Search } from "lucide-react";

export default function EnglishStudentaktiviteterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoriesEn = Array.from(
    new Set(STUDENT_ACTIVITIES.map((a) => a.categoryEn || a.category))
  );

  const filteredActivities = STUDENT_ACTIVITIES.filter((act) => {
    const categoryName = act.categoryEn || act.category;
    const matchesSearch =
      searchQuery === "" ||
      act.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (act.descriptionEn || act.description || "").toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || categoryName === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Student Activities"
          subtitle="Explore registered student activities, sports clubs, and interest organisations at UiA."
        />

        <div className="mb-12 space-y-4 max-w-4xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-sta-teal-300 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search choirs, sports, theatre, clubs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-sta-teal-800/80 border border-sta-teal-500/40 text-white placeholder-sta-teal-300 focus:outline-none focus:ring-2 focus:ring-sta-orange text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-sta-orange text-white"
                  : "bg-sta-teal-800/60 text-sta-teal-100 hover:bg-sta-teal-700"
              }`}
            >
              All activities ({STUDENT_ACTIVITIES.length})
            </button>
            {categoriesEn.map((cat) => {
              const count = STUDENT_ACTIVITIES.filter(
                (a) => (a.categoryEn || a.category) === cat
              ).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? "bg-sta-orange text-white"
                      : "bg-sta-teal-800/60 text-sta-teal-100 hover:bg-sta-teal-700"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((act) => (
            <Card key={act.id} className="p-6 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] w-full mb-4 rounded-xl overflow-hidden bg-sta-teal-800 border border-sta-teal-600/30">
                  {act.imageUrl ? (
                    <Image
                      src={act.imageUrl}
                      alt={act.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white">
                      {act.name.charAt(0)}
                    </div>
                  )}
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sta-orange/20 text-sta-orange mb-2">
                  {act.categoryEn || act.category}
                </span>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{act.name}</h3>

                <p className="text-xs text-sta-teal-100 leading-relaxed line-clamp-4">
                  {act.descriptionEn || act.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sta-teal-600/30 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-sta-teal-200">
                  {act.facebookUrl && (
                    <a
                      href={act.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sta-orange transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {act.instagramUrl && (
                    <a
                      href={act.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sta-orange transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {act.email && (
                    <a
                      href={act.email}
                      className="hover:text-sta-orange transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {act.websiteUrl && (
                  <a
                    href={act.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-sta-orange hover:text-white transition-colors"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
