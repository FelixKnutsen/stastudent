"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { STUDENT_ASSOCIATIONS } from "@/content/associations";
import { ExternalLink, Mail, Facebook, Instagram, Search } from "lucide-react";

export default function LinjeforeningerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState<string>("alle");

  // Extract unique faculties
  const faculties = Array.from(new Set(STUDENT_ASSOCIATIONS.map((a) => a.faculty)));

  const filteredAssociations = STUDENT_ASSOCIATIONS.filter((assoc) => {
    const matchesSearch =
      searchQuery === "" ||
      assoc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assoc.studyProgram?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assoc.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFaculty =
      selectedFaculty === "alle" || assoc.faculty === selectedFaculty;

    return matchesSearch && matchesFaculty;
  });

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Linjeforeninger"
          subtitle="Her finner du oversikt over alle linjeforeningene ved Universitetet i Agder i Kristiansand og Grimstad."
        />

        {/* Search & Faculty Filter Controls */}
        <div className="mb-12 space-y-4 max-w-4xl mx-auto">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-sta-teal-300 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Søk etter linjeforening, studieprogram eller fag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-sta-teal-800/80 border border-sta-teal-500/40 text-white placeholder-sta-teal-300 focus:outline-none focus:ring-2 focus:ring-sta-orange text-sm"
            />
          </div>

          {/* Faculty filter pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setSelectedFaculty("alle")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedFaculty === "alle"
                  ? "bg-sta-orange text-white"
                  : "bg-sta-teal-800/60 text-sta-teal-100 hover:bg-sta-teal-700"
              }`}
            >
              Alle fakulteter ({STUDENT_ASSOCIATIONS.length})
            </button>
            {faculties.map((fac) => {
              const count = STUDENT_ASSOCIATIONS.filter((a) => a.faculty === fac).length;
              return (
                <button
                  key={fac}
                  onClick={() => setSelectedFaculty(fac)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selectedFaculty === fac
                      ? "bg-sta-orange text-white"
                      : "bg-sta-teal-800/60 text-sta-teal-100 hover:bg-sta-teal-700"
                  }`}
                >
                  {fac} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-xs text-sta-teal-200 mb-6 max-w-4xl mx-auto">
          Viser {filteredAssociations.length} av {STUDENT_ASSOCIATIONS.length} linjeforeninger
        </div>

        {/* Associations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssociations.map((assoc) => (
            <Card key={assoc.id} className="p-6 flex flex-col justify-between">
              <div>
                {/* Logo & Header */}
                <div className="flex items-start gap-4 mb-4">
                  {assoc.logoUrl ? (
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-sta-teal-500/30 shrink-0 p-1 flex items-center justify-center">
                      <Image
                        src={assoc.logoUrl}
                        alt={assoc.name}
                        fill
                        sizes="64px"
                        className="object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-sta-teal-800 border border-sta-teal-600 flex items-center justify-center text-xl font-bold text-white shrink-0">
                      {assoc.name.charAt(0)}
                    </div>
                  )}

                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sta-orange block truncate">
                      {assoc.campus}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight mt-0.5 truncate">
                      {assoc.name}
                    </h3>
                    <p className="text-xs text-sta-teal-200 mt-1 line-clamp-1">
                      {assoc.studyProgram}
                    </p>
                  </div>
                </div>

                {/* Faculty badge */}
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sta-teal-800 text-sta-teal-200 border border-sta-teal-700">
                    {assoc.faculty}
                  </span>
                </div>

                {/* Description */}
                {assoc.description && (
                  <p className="text-xs text-sta-teal-100 leading-relaxed line-clamp-4">
                    {assoc.description}
                  </p>
                )}
              </div>

              {/* Links & Socials Footer */}
              <div className="mt-6 pt-4 border-t border-sta-teal-600/30 flex items-center justify-between gap-2 text-xs">
                {/* Social icons */}
                <div className="flex items-center gap-2 text-sta-teal-200">
                  {assoc.websiteUrl && (
                    <a
                      href={assoc.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sta-orange transition-colors"
                      aria-label="Nettside"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {assoc.facebookUrl && (
                    <a
                      href={assoc.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sta-orange transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {assoc.instagramUrl && (
                    <a
                      href={assoc.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sta-orange transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {assoc.email && (
                    <a
                      href={`mailto:${assoc.email}`}
                      className="hover:text-sta-orange transition-colors"
                      aria-label="E-post"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {assoc.websiteUrl ? (
                  <a
                    href={assoc.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-sta-orange hover:text-white transition-colors"
                  >
                    <span>Nettside</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-sta-teal-300">Medlem i STA</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
