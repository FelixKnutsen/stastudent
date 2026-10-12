import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { COMMITTEE_CATEGORIES } from "@/content/positions";
import {
  Users,
  Network,
  Briefcase,
  Building2,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Råd, Styrer og Utvalg (RSU)",
  description:
    "Hos STA kan alle UiA-studenter stille til valg! Få full oversikt over alle styrer, råd og politiske utvalg du kan engasjere deg i.",
};

const SIX_REASONS = [
  {
    icon: Users,
    title: "1. Representere studentene",
    description:
      "Være med på å forbedre UiA for studentene, og gjøre studiehverdagen bedre for 14 000 medstudenter.",
  },
  {
    icon: Network,
    title: "2. Nettverksbygging",
    description:
      "Få et bredt og tverrfaglig nettverk på tvers av studier, campus og med universitetsledelsen.",
  },
  {
    icon: Briefcase,
    title: "3. Arbeidslivsrelevant",
    description:
      "Utfordre deg selv, få verdifull leder- og samfunnserfaring og skaff deg en solid attest til CV-en.",
  },
  {
    icon: Building2,
    title: "4. Organisasjonserfaring",
    description:
      "Få dypere innsikt i hvordan store kunnskapsorganisasjoner, styrer og demokratiske prosesser fungerer i praksis.",
  },
  {
    icon: MessageSquare,
    title: "5. God diskusjonsevne",
    description:
      "Lære å se saker fra flere sider, argumentere saklig, forhandle og bygge gode kompromisser.",
  },
  {
    icon: Sparkles,
    title: "6. Å bygge seg selv",
    description:
      "Det viktigste punktet av alle: Du vokser som menneske. Du blir litt glupere, mer reflektert og modnere.",
  },
];

export default function RadStyrerOgUtvalgPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Råd, Styrer og Utvalg (RSU)"
          subtitle="Hos STA kan alle UiA-studenter stille til valg! Bli med på å forme studentenes hverdag."
        />

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-base text-sta-teal-100 leading-relaxed">
            Valg til råd, styrer og utvalg (RSU) skjer på en valgforsamling, hvor Studentparlamentet
            stemmer over hvem som får plassene. Valgene lyses ut på stastudent.no og deles i våre
            kanaler på våren – så følg med! Ved spørsmål, ta gjerne kontakt på{" "}
            <a href="mailto:sta@uia.no" className="text-sta-orange font-semibold hover:underline">
              sta@uia.no
            </a>
            .
          </p>
          <div className="pt-2">
            <Button href="/ledige-verv" variant="primary" size="lg">
              Se ledige verv nå <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* 6 gode grunner */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            6 gode grunner til hvorfor du skal ta på deg verv:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIX_REASONS.map((reason) => {
              const Icon = reason.icon;
              return (
                <Card key={reason.title} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-sta-orange/20 text-sta-orange flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-xs text-sta-teal-100 leading-relaxed">{reason.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Image Card */}
        <div className="relative mb-16 max-w-4xl mx-auto overflow-hidden rounded-2xl border border-sta-teal-500/30">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-sta-teal-800">
            <Image
              src="https://stastudent.no/wp-content/uploads/2025/10/IMG_4439-1024x683.jpg"
              alt="Studenter i verv"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
            />
          </div>
          <div className="bg-sta-teal-900/90 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-1">STA har mange verv for deg!</h3>
            <p className="text-xs text-sta-teal-100">
              Uansett om du brenner for utdanning, bærekraft, studentvelferd eller arrangementer, har vi et verv som passer dine interesser.
            </p>
          </div>
        </div>

        {/* Categories of Verv with official information links */}
        <div className="space-y-12">
          {COMMITTEE_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-sta-teal-700/50">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-xs text-sta-teal-100 leading-relaxed mb-4">{item.desc}</p>
                    </div>

                    {item.infoUrl && (
                      <div className="pt-4 border-t border-sta-teal-700/40 mt-auto">
                        {item.isExternal ? (
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
                            <span>{item.infoUrlLabel || "Les mer om vervet"}</span>
                          </Link>
                        )}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button href="/ledige-verv" variant="primary" size="lg">
            Søk på ledige verv i dag
          </Button>
        </div>
      </Container>
    </div>
  );
}
