import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { Users, Network, Briefcase, Building2, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Råd, Styrer og Utvalg",
  description:
    "Alltid ønsket å engasjere deg, men usikker på hva? Her finner du en liste over alle vervene du kan engasjere deg i på UiA!",
};

const SIX_REASONS = [
  {
    icon: Users,
    title: "1. Representere studentene",
    description:
      "Du kan være med å forbedre UiA og studiehverdagen til over 14 000 studenter. Når noe ikke er godt nok, er du stemmen inn for å skape forbedring.",
  },
  {
    icon: Network,
    title: "2. Nettverksbygging",
    description:
      "Du får et stort og viktig nettverk på tvers av fagretninger, campuser og med ledelsen ved universitetet.",
  },
  {
    icon: Briefcase,
    title: "3. Arbeidslivsrelevant",
    description:
      "Du får utfordret deg selv og anskaffer deg mye erfaring og attest som kommer godt med når du skal ut i arbeidslivet.",
  },
  {
    icon: Building2,
    title: "4. Organisasjonserfaring",
    description:
      "Du får en bedre forståelse om hvordan organisasjoner er organisert – en erfaring som er gull verdt i arbeidslivet!",
  },
  {
    icon: MessageSquare,
    title: "5. God diskusjonsevne",
    description:
      "Du blir bedre på å diskutere og se ulike sammenhenger og perspektiver. Å være god til å diskutere kommer godt med i alle settinger.",
  },
  {
    icon: Sparkles,
    title: "6. Å bygge seg selv",
    description:
      "Det viktigste punktet av alle: Du vokser som menneske. Du blir litt glupere og litt mer reflektert, og utvikler deg personlig og faglig.",
  },
];

const VERV_CATEGORIES = [
  {
    title: "STA-Verv",
    items: [
      {
        name: "STA-Styret",
        desc: "STAs daglige ledelse. Leder og nestleder er 100 % frikjøpt, tre ansvarlige er 50 % frikjøpt.",
      },
      {
        name: "Velferdstinget i Agder (VT)",
        desc: "Kjemper for studentvelferd og fordeler velferdsmidler i Agder.",
      },
      {
        name: "Studentutvalget i Grimstad (SIG)",
        desc: "Kommunalt råd som sikrer studentstemmen overfor Grimstad kommune. Honorert verv.",
      },
      {
        name: "Unikumstyret",
        desc: "Styret for studentavisen Unikum. Har økonomi- og ansettelsesansvar.",
      },
      {
        name: "Landsmøtedelegasjonen",
        desc: "UiAs delegasjon til Norsk studentorganisasjons (NSO) landsmøte.",
      },
      {
        name: "Forthem Student Council",
        desc: "Europeisk universitetsallianse der UiA har to studentrepresentanter. Arbeidsspråk engelsk.",
      },
    ],
  },
  {
    title: "STAs Politiske Utvalg",
    items: [
      {
        name: "Fag- og forskningspolitisk utvalg",
        desc: "Bistår utdanningspolitisk ansvarlig med studiekvalitet og sensorordninger.",
      },
      {
        name: "Læringsmiljøpolitisk utvalg",
        desc: "Jobber med politikk for fysisk og psykososialt læringsmiljø.",
      },
      {
        name: "Bærekrafts- og miljøpolitisk utvalg",
        desc: "Arbeider for grønnere campus og bærekraft i utdanningene.",
      },
      {
        name: "Internasjonalt utvalg",
        desc: "Jobber for internasjonale studenters rettigheter og mangfold.",
      },
    ],
  },
  {
    title: "Universitetsorganer (UiA)",
    items: [
      {
        name: "Universitetsstyret",
        desc: "UiAs øverste styringsorgan. 2 faste studentrepresentanter med personlig vara. Honorert.",
      },
      {
        name: "Læringsmiljøutvalget (LMU)",
        desc: "6 faste studentrepresentanter. Sikrer et trygt og godt arbeidsmiljø.",
      },
      {
        name: "Utdanningsutvalget",
        desc: "3 studentrepresentanter. Behandler studieplaner og utdanningsmelding.",
      },
      {
        name: "Klagenemnda",
        desc: "Lovfestet organ som behandler klager over fusk og bortvisning. Honorert.",
      },
    ],
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
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-sta-teal-500/30">
          <div className="relative aspect-[16/7] w-full bg-sta-teal-800">
            <Image
              src="https://stastudent.no/wp-content/uploads/2025/10/IMG_4439-1024x683.jpg"
              alt="Studenter i verv"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
          <div className="bg-sta-teal-900/90 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-1">STA har mange verv for deg!</h3>
            <p className="text-xs text-sta-teal-100">
              Uansett om du brenner for utdanning, bærekraft, studentvelferd eller arrangementer, har vi et verv som passer dine interesser.
            </p>
          </div>
        </div>

        {/* Categories of Verv */}
        <div className="space-y-12">
          {VERV_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.name} className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-xs text-sta-teal-100 leading-relaxed">{item.desc}</p>
                    </div>
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
