import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { FileDown, FileSpreadsheet, ExternalLink, ShieldAlert, Heart, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Studenttillitsvalgt",
  description:
    "Les om det å være studenttillitsvalgt på Universitet i Agder og hvordan STA bidrar inn i arbeidet med kvalitetssystemet.",
};

export default function ForTillitsvalgtePage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Studenttillitsvalgt"
          subtitle="Les om det å være studenttillitsvalgt på Universitetet i Agder og hvordan STA bidrar inn i arbeidet med kvalitetssystemet."
        />

        {/* 3 Top Download / Resource Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href="https://stastudent.no/wp-content/uploads/2025/09/TILLITSVALGTHANDBOKEN-STUDENTORGANISASJONEN-I-AGDER.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-sta-teal-700/50 hover:bg-sta-teal-600/70 border border-sta-teal-500/30 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center transition-colors mb-4">
              <FileDown className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-white group-hover:text-sta-orange transition-colors">
              Tillitsvalgthåndboken
            </h3>
            <p className="text-xs text-sta-teal-100 mt-1">Last ned håndboken som PDF</p>
          </a>

          <a
            href="https://stastudent.no/wp-content/uploads/2024/05/Sjekkliste-for-studentevaluering-av-emner.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-sta-teal-700/50 hover:bg-sta-teal-600/70 border border-sta-teal-500/30 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center transition-colors mb-4">
              <FileDown className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-white group-hover:text-sta-orange transition-colors">
              Mal for emneevaluering
            </h3>
            <p className="text-xs text-sta-teal-100 mt-1">Sjekkliste og mal for evalueringer</p>
          </a>

          <a
            href="https://forms.office.com/Pages/ShareFormPage.aspx?id=HoiChJk2P0uxNc9IALwe-5paDL8Z10RCgktRPOD_6vhUQzFYVlo1UU1JVjQzUDQ3NVZESDdYSjJETy4u&sharetoken=0qiUY8Cn2iKY2FHAUTax"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-sta-teal-700/50 hover:bg-sta-teal-600/70 border border-sta-teal-500/30 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center transition-colors mb-4">
              <FileSpreadsheet className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-white group-hover:text-sta-orange transition-colors">
              Studieprogramevaluering
            </h3>
            <p className="text-xs text-sta-teal-100 mt-1">Åpne mal i Microsoft Forms</p>
          </a>
        </div>

        {/* Informative text sections */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card className="p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Din rolle som studenttillitsvalgt</h3>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              En tillitsvalgt er en valgt person som har oppnådd tilliten fra sine medstudenter på
              Universitetet i Agder (UiA) til å representere dem i prosesser, møter og samlinger hvor
              studentenes stemme skal løftes. Som tillitsvalgt spiller du en avgjørende rolle for
              kvalitetssystemet ved UiA.
            </p>
            <div className="p-4 rounded-xl bg-sta-teal-800/80 border border-sta-orange/40 text-xs text-white">
              <strong className="text-sta-orange">Viktig:</strong> Når du er valgt, må du registrere deg på{" "}
              <a
                href="https://innsia.uia.no"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-sta-orange font-semibold"
              >
                innsia.uia.no
              </a>{" "}
              for å motta viktig informasjon, invitasjoner til tillitsvalgtsamlinger og opplæring.
            </div>
          </Card>

          <Card className="p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">
              Hvem skal du henvende deg til ved problemer?
            </h3>
            <div className="space-y-3 text-sm text-sta-teal-100 leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sta-orange/20 text-sta-orange flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  <strong>Første trinn:</strong> Forhold deg først til studentgruppen din, emneansvarlig, og instituttleder/studieleder ved lærerutdanningen, samt studierådet.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sta-orange/20 text-sta-orange flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  <strong>Andre trinn:</strong> Ta kontakt med kontaktpersonen for studenttillitsvalgte på ditt fakultet eller avdeling (se oversikt på UiAs nettsider).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sta-orange/20 text-sta-orange flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  <strong>Tredje trinn:</strong> Dersom emneansvarlig og instituttleder ikke kan bistå, kan du kontakte læringsmiljøpolitisk ansvarlig i STA på{" "}
                  <a
                    href="mailto:stalaringsmiljo@uia.no"
                    className="text-sta-orange font-semibold hover:underline"
                  >
                    stalaringsmiljo@uia.no
                  </a>
                  .
                </p>
              </div>
            </div>
          </Card>

          {/* Useful systems grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <ShieldAlert className="w-8 h-8 text-sta-orange mb-3" />
              <h4 className="font-bold text-white mb-2">Si ifra-systemet</h4>
              <p className="text-xs text-sta-teal-100 mb-4 leading-relaxed">
                UiAs portal for å varsle om inneklima, fysisk læringsmiljø, mobbing eller kritikkverdige forhold.
              </p>
              <a
                href="https://www.uia.no/om-uia/kontakt/si-ifra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sta-orange hover:text-white"
              >
                Gå til Si ifra <ExternalLink className="w-3 h-3" />
              </a>
            </Card>

            <Card className="p-6">
              <Info className="w-8 h-8 text-sta-orange mb-3" />
              <h4 className="font-bold text-white mb-2">Studentombudet</h4>
              <p className="text-xs text-sta-teal-100 mb-4 leading-relaxed">
                Uavhengig rådgiver som sikrer studentenes rettssikkerhet i møte med universitetet.
              </p>
              <a
                href="https://www.uia.no/studier/for-studenter/veiledning-og-kurs/studentombud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sta-orange hover:text-white"
              >
                Kontakt Studentombudet <ExternalLink className="w-3 h-3" />
              </a>
            </Card>

            <Card className="p-6">
              <Heart className="w-8 h-8 text-sta-orange mb-3" />
              <h4 className="font-bold text-white mb-2">SiA Helse</h4>
              <p className="text-xs text-sta-teal-100 mb-4 leading-relaxed">
                Gratis samtaleterapi, kurs og helsetilbud for studenter som opplever personlige eller psykiske utfordringer.
              </p>
              <a
                href="https://sia.no/Helse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sta-orange hover:text-white"
              >
                Gå til SiA Helse <ExternalLink className="w-3 h-3" />
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
