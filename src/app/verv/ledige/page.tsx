import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ledige Verv",
  description: "Oversikt over ledige verv i STA og UiA.",
};

const OPEN_POSITIONS = [
  {
    id: "pos-1",
    title: "Representanter til Studentparlamentet 2026/2027",
    department: "Studentdemokratiet",
    deadline: "15. mai 2026",
    campus: "Kristiansand & Grimstad",
    description: "Vil du være med å forme studentpolitikken og bestemme prioriteringene til STA?",
  },
  {
    id: "pos-2",
    title: "Medlem i Læringsmiljøutvalget (LMU)",
    department: "Universitetet i Agder",
    deadline: "1. juni 2026",
    campus: "Felles",
    description: "Bli med på å sikre et godt fysisk og psykososialt læringsmiljø for studentene ved UiA.",
  },
  {
    id: "pos-3",
    title: "Studentrepresentant til Klagenemnda",
    department: "UiA Sentralt",
    deadline: "1. juni 2026",
    campus: "Felles",
    description: "Klagenemnda behandler klager på enkeltvedtak og fusk. Gir god juridisk og saksbehandlingserfaring.",
  },
];

export default function LedigeVervPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="Ledige Verv"
          subtitle="Gjeldende utlysninger til råd, styrer, utvalg og STA-styret"
        />

        <div className="space-y-6 max-w-4xl mx-auto">
          {OPEN_POSITIONS.map((pos) => (
            <Card key={pos.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sta-orange/20 text-sta-orange">
                    {pos.department} • {pos.campus}
                  </div>
                  <h3 className="text-xl font-bold text-white">{pos.title}</h3>
                  <p className="text-sm text-sta-teal-100">{pos.description}</p>
                  <div className="flex items-center gap-4 text-xs text-sta-teal-200 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Frist: {pos.deadline}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <Button
                    href={`mailto:sta@uia.no?subject=Søknad%20på%20verv:%20${encodeURIComponent(pos.title)}`}
                    variant="primary"
                    size="md"
                  >
                    Still til verv
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
