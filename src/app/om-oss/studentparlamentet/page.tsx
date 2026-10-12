import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { Calendar, Vote, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Studentparlamentet",
  description: "UiAs øverste studentorgan og demokratiske forsamling.",
};

export default function StudentparlamentetPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="Studentparlamentet"
          subtitle="UiAs øverste studentorgan ved Universitetet i Agder"
        />

        <div className="max-w-3xl mx-auto space-y-6 text-sta-teal-100 text-base leading-relaxed mb-12">
          <p>
            Studentparlamentet er det øverste demokratiske organet for alle studenter ved
            Universitetet i Agder. Parlamentet består av folkevalgte representanter fra de ulike
            fakultetene og lærerutdanningen.
          </p>
          <p>
            Parlamentet vedtar STAs politiske plattform, budsjetter, handlingsplaner og velger
            medlemmene til STA-styret samt studentrepresentanter til universitetets råd og styrer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="p-6 text-center">
            <Vote className="w-8 h-8 text-sta-orange mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white">Studentvalget</h3>
            <p className="text-xs text-sta-teal-100 mt-2">
              Gjennomføres hver vår hvor alle studenter ved UiA har stemmerett.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Calendar className="w-8 h-8 text-sta-orange mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white">Møteplan</h3>
            <p className="text-xs text-sta-teal-100 mt-2">
              Parlamentet møtes jevnlig gjennom semesteret. Møtene er åpne for alle studenter.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <FileText className="w-8 h-8 text-sta-orange mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white">Protokoller</h3>
            <p className="text-xs text-sta-teal-100 mt-2">
              Alle sakspapirer og vedtak publiseres åpent i dokumentarkivet.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button href="/dokumenter" variant="primary">
            Se sakspapirer og protokoller
          </Button>
        </div>
      </Container>
    </div>
  );
}
