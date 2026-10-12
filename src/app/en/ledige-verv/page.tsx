import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { VACANCIES_DATA } from "@/content/positions";
import { Mail, CheckCircle2, ExternalLink, Info, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Vacant positions",
  description:
    "Interested in making a difference at the University of Agder? Explore all current vacant positions with official information links and eligibility details!",
};

export default function EnglishLedigeVervPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Vacant Positions 2026/2027"
          subtitle="Interested in getting involved and making a difference at the University of Agder? Check out open elected positions you can apply for!"
        />

        {/* Top CTA */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-sta-teal-800/60 border border-sta-orange/40 text-center mb-12">
          <p className="text-sm text-sta-teal-100 mb-4">
            Would you like to run for one of the positions below? Send an email with a brief introduction about yourself to:
          </p>
          <a
            href="mailto:sta@uia.no?subject=Application%20for%20open%20position"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sta-orange text-white font-bold hover:bg-sta-orange-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send application to sta@uia.no</span>
          </a>
        </div>

        {/* Vacancies grouped by category with official links */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {VACANCIES_DATA.map((group) => (
            <div key={group.categoryEn}>
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-sta-teal-600/40">
                {group.categoryEn}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => {
                  const isExternal = item.infoUrl?.startsWith("http");
                  const internalUrl = item.infoUrl?.startsWith("/en")
                    ? item.infoUrl
                    : `/en${item.infoUrl}`;

                  return (
                    <Card key={item.id} className="p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-bold text-white text-sm">{item.titleEn}</h3>
                          <CheckCircle2 className="w-5 h-5 text-sta-orange shrink-0 mt-0.5" />
                        </div>
                        <p className="text-xs text-sta-orange font-semibold mb-2">
                          {item.positionsEn}
                        </p>
                        <div className="flex items-center gap-1.5 text-[11px] text-sta-teal-200 mb-3">
                          <Building className="w-3.5 h-3.5 opacity-70" />
                          <span>{item.organizationEn}</span>
                        </div>
                        {item.eligibilityEn && (
                          <p className="text-[11px] text-sta-teal-300 italic mb-3">
                            Eligibility: {item.eligibilityEn}
                          </p>
                        )}
                      </div>

                      {item.infoUrl && (
                        <div className="pt-3 border-t border-sta-teal-700/40 mt-2">
                          {isExternal ? (
                            <a
                              href={item.infoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white transition-colors"
                            >
                              <Info className="w-3.5 h-3.5" />
                              <span>{item.infoUrlLabelEn || "Official information"}</span>
                              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                            </a>
                          ) : (
                            <Link
                              href={internalUrl}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white transition-colors"
                            >
                              <Info className="w-3.5 h-3.5" />
                              <span>{item.infoUrlLabelEn || "Read more about this role"}</span>
                            </Link>
                          )}
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button href="/en/rad-styrer-og-utvalg" variant="outline" size="md">
            Read more about what each position entails
          </Button>
        </div>
      </Container>
    </div>
  );
}
