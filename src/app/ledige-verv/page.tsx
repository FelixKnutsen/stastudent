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
  title: "Ledige verv",
  description:
    "Er du interessert i å gjøre en forskjell på Universitetet i Agder? Her finner du full oversikt over ledige verv du kan søke på med offisiell informasjon!",
};

export default function LedigeVervPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Ledige verv 2026/2027"
          subtitle="Er du interessert i å gjøre en endring på Universitetet i Agder? Da kan du sjekke om det fortsatt er ledige verv å søke på!"
        />

        {/* Top CTA */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-sta-teal-800/60 border border-sta-orange/40 text-center mb-12">
          <p className="text-sm text-sta-teal-100 mb-4">
            Ønsker du å stille til et av vervene nedenfor? Send en e-post med en kort introduksjon om deg selv til:
          </p>
          <a
            href="mailto:sta@uia.no?subject=Søknad%20på%20ledig%20verv"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sta-orange text-white font-bold hover:bg-sta-orange-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send søknad til sta@uia.no</span>
          </a>
        </div>

        {/* Vacancies grouped by category with official links */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {VACANCIES_DATA.map((group) => (
            <div key={group.category}>
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-sta-teal-600/40">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => {
                  const isExternal = item.infoUrl?.startsWith("http");

                  return (
                    <Card key={item.id} className="p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-bold text-white text-sm">{item.title}</h3>
                          <CheckCircle2 className="w-5 h-5 text-sta-orange shrink-0 mt-0.5" />
                        </div>
                        <p className="text-xs text-sta-orange font-semibold mb-2">
                          {item.positions}
                        </p>
                        <div className="flex items-center gap-1.5 text-[11px] text-sta-teal-200 mb-3">
                          <Building className="w-3.5 h-3.5 opacity-70" />
                          <span>{item.organization}</span>
                        </div>
                        {item.eligibility && (
                          <p className="text-[11px] text-sta-teal-300 italic mb-3">
                            Kvalifikasjonskrav: {item.eligibility}
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
                              <span>{item.infoUrlLabel || "Offisiell informasjon"}</span>
                              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                            </a>
                          ) : (
                            <Link
                              href={item.infoUrl}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sta-orange hover:text-white transition-colors"
                            >
                              <Info className="w-3.5 h-3.5" />
                              <span>{item.infoUrlLabel || "Les mer om rollen"}</span>
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
          <Button href="/rad-styrer-og-utvalg" variant="outline" size="md">
            Les mer om hva de ulike vervene innebærer
          </Button>
        </div>
      </Container>
    </div>
  );
}
