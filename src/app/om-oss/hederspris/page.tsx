import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { Award, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Irene Bredals Hederspris",
  description: "Om Irene Bredals Hederspris og nominasjon av verdige kandidater.",
};

export default function HedersprisPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="Irene Bredals Hederspris"
          subtitle="En utmerkelse til personer eller grupper som har ytet en ekstraordinær innsats for studentene ved UiA."
        />

        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-sta-orange/20 text-sta-orange">
                <Award className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Om hedersprisen</h3>
                <p className="text-xs text-sta-orange font-semibold uppercase tracking-wider">
                  Oppkalt etter Irene Bredal
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-sta-teal-100 leading-relaxed">
              <p>
                Irene Bredals Hederspris tildeles en eller flere studenter, ansatte eller
                organisasjoner som har gjort en bemerkelsesverdig frivillig eller faglig
                innsats for studentmiljøet og studentvelferden ved Universitetet i Agder.
              </p>
              <p>
                Prisen deles ut årlig i regi av STA, og vinneren hedres med diplom,
                anerkjennelse og en pengepremie.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-sta-teal-600/30">
              <h4 className="text-base font-semibold text-white mb-3">Kriterier for tildeling:</h4>
              <ul className="space-y-2 text-xs text-sta-teal-100">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sta-orange shrink-0 mt-0.5" />
                  <span>Ekstraordinært engasjement for medstudenter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sta-orange shrink-0 mt-0.5" />
                  <span>Bidrag til et inkluderende, trygt og levende studentmiljø</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-sta-orange shrink-0 mt-0.5" />
                  <span>Innsats som strekker seg utover hva som normalt forventes</span>
                </li>
              </ul>
            </div>
          </Card>

          <div className="text-center pt-4">
            <Button
              href="mailto:sta@uia.no?subject=Nominasjon:%20Irene%20Bredals%20Hederspris"
              variant="primary"
              size="lg"
            >
              Send inn nominasjon
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
