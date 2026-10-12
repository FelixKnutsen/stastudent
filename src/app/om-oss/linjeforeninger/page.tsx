import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { SAMPLE_ASSOCIATIONS } from "@/content/associations";
import { ExternalLink, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Linjeforeninger",
  description: "Oversikt over linjeforeninger ved UiA Kristiansand og Grimstad.",
};

export default function LinjeforeningerPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="Linjeforeninger"
          subtitle="Linjeforeningene samler studenter innenfor samme fag- eller studieretning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SAMPLE_ASSOCIATIONS.map((assoc) => (
            <Card key={assoc.id} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{assoc.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-sta-teal-200">
                    <MapPin className="w-3.5 h-3.5 text-sta-orange" />
                    {assoc.campus}
                  </span>
                </div>

                <p className="text-xs text-sta-orange font-semibold mb-3">
                  {assoc.studyProgram}
                </p>

                {assoc.description && (
                  <p className="text-sm text-sta-teal-100 leading-relaxed">
                    {assoc.description}
                  </p>
                )}
              </div>

              {assoc.websiteUrl && (
                <div className="mt-6 pt-4 border-t border-sta-teal-600/30">
                  <a
                    href={assoc.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white transition-colors"
                  >
                    Besøk foreningens nettside
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
