import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Ledige verv",
  description:
    "Er du interessert i å gjøre en endring på Universitetet i Agder? Her finner du oversikt over ledige verv du kan søke på!",
};

const VACANCIES = [
  {
    category: "Studentparlamentet",
    items: [
      {
        title: "Fakultet for helse- og idrettsvitenskap",
        positions: "1., 2., 3. og 4. vararepresentant",
      },
      {
        title: "Fakultet for humaniora og pedagogikk",
        positions: "1., 2. og 3. vararepresentant",
      },
      {
        title: "Avdeling for lærerutdanningene",
        positions: "3. og 4. vararepresentant",
      },
    ],
  },
  {
    category: "UiA sine utvalg",
    items: [
      {
        title: "Læringsmiljøutvalget til UiA (LMU)",
        positions: "4., 5. og 6. vararepresentant (kjønnskvotering)",
      },
      {
        title: "Prisutvalget – Utdanningsprisen ved UiA",
        positions: "1. og 2. vararepresentant",
      },
    ],
  },
  {
    category: "STA sine utvalg",
    items: [
      {
        title: "Bærekraft- og miljøpolitisk utvalg",
        positions: "3 faste plasser",
      },
      {
        title: "Valgkomité",
        positions: "1 fast plass",
      },
    ],
  },
  {
    category: "Andre utvalg",
    items: [
      {
        title: "Velferdstinget i Agder",
        positions: "4., 5. og 6. vararepresentant",
      },
      {
        title: "Studentutvalget i Grimstad",
        positions: "1 vararepresentant",
      },
    ],
  },
];

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
            Ønsker du å stille til et av vervene nedenfor? Send en e-post med kort introduksjon om deg selv til:
          </p>
          <a
            href="mailto:sta@uia.no?subject=Søknad%20på%20ledig%20verv"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sta-orange text-white font-bold hover:bg-sta-orange-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send søknad til sta@uia.no</span>
          </a>
        </div>

        {/* Vacancies grouped by category */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {VACANCIES.map((group) => (
            <div key={group.category}>
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-sta-teal-600/40">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <Card key={item.title} className="p-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-white text-sm">{item.title}</h3>
                      <p className="text-xs text-sta-orange font-semibold mt-1">
                        {item.positions}
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-sta-orange shrink-0 mt-0.5" />
                  </Card>
                ))}
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
