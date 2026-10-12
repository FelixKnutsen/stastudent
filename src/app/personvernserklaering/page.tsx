import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { ShieldCheck, Lock, Globe, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Personvernserklæring",
  description:
    "Studentorganisasjonen i Agders personvernserklæring, analyseverktøy og sikkerhetsrutiner.",
};

export default function PersonvernserklaeringPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Personvernserklæring"
          subtitle="Hvordan Studentorganisasjonen i Agder (STA) behandler personopplysninger og ivaretar ditt personvern på stastudent.no."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Card 1: Hvem er vi? */}
          <Card className="p-8 space-y-3">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">1. Hvem er vi?</h2>
            </div>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Studentorganisasjonen i Agder (STA), org. nr. 981 596 412, er studentdemokratiet til
              Universitetet i Agder (UiA). STA representerer alle UiA-studentene i Kristiansand og Grimstad.
            </p>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              STA drifter to offisielle nettsider:{" "}
              <a href="https://stastudent.no/" className="text-sta-orange underline">
                stastudent.no
              </a>{" "}
              og{" "}
              <a href="https://stavalgomaten.no" className="text-sta-orange underline">
                stavalgomaten.no
              </a>
              .
            </p>
          </Card>

          {/* Card 2: Innebygd innhold */}
          <Card className="p-8 space-y-3">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">2. Innebygd innhold fra andre nettsteder</h2>
            </div>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Studentorganisasjonen i Agder etterstreber å bruke minst mulig innebygd innhold fra andre nettsider. Enkelte artikler kan imidlertid inneholde innebygd innhold (f.eks. videoer, bilder eller artikler).
            </p>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Innebygd innhold fra andre nettsteder oppfører seg på nøyaktig samme måte som om den besøkende hadde besøkt det opprinnelige nettstedet. Disse nettstedene kan samle inn data om deg, bruke informasjonskapsler eller tredjepartssporing.
            </p>
          </Card>

          {/* Card 3: Analyseverktøy */}
          <Card className="p-8 space-y-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">3. Analyseverktøy – Koko Analytics</h2>
            </div>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              STA benytter utelukkende det personvernvennlige analyseverktøyet{" "}
              <a
                href="https://www.kokoanalytics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sta-orange underline"
              >
                Koko Analytics
              </a>
              .
            </p>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Koko Analytics samler ikke inn noen personidentifiserende opplysninger eller IP-adresser. Verktøyet teller utelukkende det samlede antallet sidevisninger og besøk. All data lagres lokalt i nettsidens egen database og deles aldri med eksterne tredjeparter.
            </p>
          </Card>

          {/* Card 4: Solid Security */}
          <Card className="p-8 space-y-3">
            <div className="flex items-center gap-3">
              <Server className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">4. Sikkerhetslogger og lagringstid</h2>
            </div>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Nettsiden beskyttes med Solid Security for å hindre uautorisert tilgang og angrep. Sikkerhetslogger kan midlertidig registrere IP-adresse og brukernavn ved påloggingsforsøk for å blokkere ondsinnet trafikk.
            </p>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              <strong>Lagringstid:</strong> Sikkerhetslogger slettes automatisk etter <strong>60 dager</strong>.
            </p>
          </Card>

          {/* Card 5: Kontakt */}
          <Card className="p-8 space-y-2">
            <h2 className="text-xl font-bold text-white">5. Spørsmål om personvern</h2>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Dersom du har spørsmål om vårt personvern eller ønsker innsyn i opplysninger, kan du kontakte oss på:{" "}
              <a href="mailto:sta@uia.no" className="text-sta-orange font-semibold hover:underline">
                sta@uia.no
              </a>
              .
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
