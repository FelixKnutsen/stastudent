import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { ShieldCheck, AlertTriangle, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Trygg Organisasjon",
  description:
    "Les om Studentorganisasjonen i Agder som en Trygg organisasjon, våre etiske prinsipper og varslingsrutiner.",
};

const PRINCIPLES = [
  "Alle skal føle seg velkommen og respektert i STA. Dette betyr at man skal avstå fra uttalelser og/eller fysisk atferd som oppleves som ubehagelig, diskriminerende, trakasserende eller krenkende for andre.",
  "Alle har et ansvar for å bidra til et inkluderende miljø, både ved formelle og uformelle arrangement.",
  "Alle skal vise respekt for hverandres grenser.",
  "Press rundt bruk av alkohol og andre rusmidler skal ikke finne sted. Ved alle arrangement i regi av en studentaktivitet eller linjeforening skal man ha 1–2 tillitspersoner.",
  "Alle har et ansvar i å forhindre mobbing. STA har nulltoleranse for mobbing.",
  "Alle skal vise respekt for hverandres ytringer og møte hverandre på en konstruktiv måte.",
];

export default function TryggOrganisasjonPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Trygg Organisasjon"
          subtitle="Det skal være gøy, lærerikt og motiverende å engasjere seg i STA."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Intro statement */}
          <Card className="p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sta-orange/20 text-sta-orange flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Nulltoleranse for trakassering</h2>
                <p className="text-xs text-sta-orange font-semibold uppercase tracking-wider">
                  Vedtatt av Studentparlamentet
                </p>
              </div>
            </div>

            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Det er av stor verdi at du bidrar til fellesskapet som skaper politikkutvikling, gjennomslag
              og gode opplevelser for mange andre engasjerte studenter. Sammen skal vi sikre et godt miljø
              med takhøyde for å diskutere og si meningene våre. Dette gjelder også de sosiale og uformelle
              delene av alle STA-arrangement.
            </p>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Som engasjert i STA har vi <strong>ingen toleranse for trakassering eller diskriminering</strong>. Vi
              tar vare på hverandre og viser gjensidig respekt. Det er et felles ansvar å sørge for at
              møtearenaene vi deltar på er trygge, og at alle ønskes velkommen.
            </p>
          </Card>

          {/* 6 Principles */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">De 6 prinsippene for Trygg Organisasjon</h2>
            <div className="space-y-4">
              {PRINCIPLES.map((principle, index) => (
                <Card key={index} className="p-5 flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-sta-orange text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-sm text-sta-teal-100 leading-relaxed">{principle}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Whistleblower procedures */}
          <Card className="p-8 space-y-4 border-sta-orange/40 bg-sta-teal-800/60">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">Varslingsrutiner</h2>
            </div>

            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Et antatt brudd på prinsippene kan meldes inn til alle medlemmene i STA-styret og STAs
              organisasjonskonsulent. Det er leder av STA-styret som følger dette opp, og involverer
              STAs Kontrollkomite ved behov.
            </p>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              <strong>Innmelding av brudd på prinsipper skal ikke medføre negative konsekvenser for innmelder.</strong>
            </p>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Om varslingen gjelder ett eller flere medlemmer av STA-styret, skal denne sendes til STAs
              organisasjonskonsulent på{" "}
              <a href="mailto:sta@uia.no" className="text-sta-orange underline font-semibold">
                sta@uia.no
              </a>
              . STAs organisasjonskonsulent sitter i en egen varslingsgruppe sammen med Advokatfirma Tofte AS,
              som sammen vil behandle varslingen objektivt.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                href="mailto:sta@uia.no?subject=Konfidensiell%20varsling%20om%20brudd%20på%20retningslinjer"
                variant="primary"
                size="md"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send konfidensielt varsel
              </Button>
              <Button
                href="https://www.uia.no/om-uia/kontakt/si-ifra/"
                isExternal
                variant="outline"
                size="md"
              >
                UiAs Si ifra-portal <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
