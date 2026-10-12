import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Award, FileDown, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Irene Bredals Hederspris",
  description:
    "Studentorganisasjonen i Agders hederspris gis ut til personer som over tid har vist dedikasjon og innsats i arbeid for UiA studentenes beste.",
};

export default function IreneBredalsHedersprisPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Irene Bredals Hederspris"
          subtitle="En utmerkelse til personer som over tid har vist dedikasjon og ekstraordinær innsats for studentenes beste ved Universitetet i Agder."
        />

        {/* Intro Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sta-orange/20 text-sta-orange flex items-center justify-center shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Om hedersprisen</h2>
                <p className="text-xs text-sta-orange font-semibold uppercase tracking-wider">
                  Opprettet 2024/2025
                </p>
              </div>
            </div>

            <p className="text-base text-sta-teal-100 leading-relaxed">
              Studentorganisasjonen i Agders hederspris gis ut til personer som over tid har vist
              dedikasjon og innsats i arbeid for UiA studentenes beste. Alle personer kan nomineres til
              prisen, så lenge mottaker har utvist arbeid for å styrke STA og studentstemmen på UiA.
            </p>

            <div className="p-4 rounded-xl bg-sta-teal-800/80 border border-sta-teal-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-sm">Ønsker du å nominere noen?</h4>
                <p className="text-xs text-sta-teal-200 mt-0.5">
                  Les statuttene eller send en nominasjon på e-post til STA.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://stastudent.no/wp-content/uploads/2025/11/her.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sta-teal-700 hover:bg-sta-teal-600 text-xs font-semibold text-white transition-colors"
                >
                  <FileDown className="w-4 h-4 text-sta-orange" />
                  <span>Statutter (PDF)</span>
                </a>
                <a
                  href="mailto:sta@uia.no?subject=Nominasjon%20til%20Irene%20Bredals%20Hederspris"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sta-orange hover:bg-sta-orange-600 text-xs font-semibold text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send nominasjon</span>
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* 2024/2025 Recipient: Irene Bredal */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Hedersprismottaker 2024/2025: Irene Bredal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-sta-teal-800/40 border border-sta-teal-600/40 rounded-2xl p-6 sm:p-8">
            <div className="md:col-span-5">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-sta-teal-500/30 shadow-xl bg-sta-teal-900">
                <Image
                  src="https://stastudent.no/wp-content/uploads/2025/06/Kopi-av-Kopi-av-Overskrift.png"
                  alt="Irene Bredals Hederspris plakat"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <blockquote className="text-sm sm:text-base text-sta-teal-100 italic leading-relaxed border-l-4 border-sta-orange pl-4">
                «Irene har i mer enn 18 år kjempet for studentens beste på UiA og bekledd de fleste verv det er mulig for en engasjert student å ha. Som leder for STA satte hun organisasjonen på kartet. Senere som organisasjonskonsulent har hun bidratt til at ulike styrer og studenter har fått styrket sin rolle på UiA. Irene er på mange måter selve bildet på studentengasjementet på UiA.»
              </blockquote>

              <p className="text-xs text-sta-teal-200">
                Irene Bredal var den aller første mottakeren av prisen, som også ble oppkalt etter henne i anerkjennelse av hennes uvurderlige innsats gjennom nesten to tiår for studentene ved UiA.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
