import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Verv • Råd, Styrer og Utvalg (RSU)",
  description: "Engasjer deg som studentrepresentant ved Universitetet i Agder.",
};

const RSU_CATEGORIES = [
  {
    title: "Universitetsstyret",
    description: "UiAs øverste styringsorgan. Behandler overordnede strategier, budsjetter og ansettelser.",
    positions: "2 faste studentrepresentanter + 2 varaer",
  },
  {
    title: "Fakultetsstyrer og Avdelingsstyrer",
    description: "Beslutter prioriteringer og studieplaner ved de enkelte fakultetene.",
    positions: "Studentrepresentanter ved hvert fakultet og lærerutdanningen",
  },
  {
    title: "Studiekvalitetsutvalget (SKU)",
    description: "Fokuserer på utdanningskvalitet, emneevalueringer og læringsmiljø.",
    positions: "Studentrepresentanter oppnevnt av Studentparlamentet",
  },
  {
    title: "Læringsmiljøutvalget (LMU)",
    description: "Sikrer at studentenes fysiske og psykososiale arbeidsmiljø ivaretas.",
    positions: "Lik representasjon mellom studenter og ansatte",
  },
];

export default function VervPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="Råd, Styrer og Utvalg (RSU)"
          subtitle="Som studentrepresentant har du makt til å påvirke din egen og medstudenters studiehverdag."
        />

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-sta-teal-100 text-base leading-relaxed">
            Hvert år velger STA og studentene ved UiA representanter til et bredt spekter
            av råd, styrer og utvalg. Dette gir deg verdifull erfaring med styrearbeid,
            attest og et unikt nettverk.
          </p>
          <div className="mt-6">
            <Button href="/verv/ledige" variant="primary" size="lg">
              Se utlyste verv nå
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RSU_CATEGORIES.map((cat) => (
            <Card key={cat.title} className="p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-sta-orange shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                  <p className="text-sm text-sta-teal-100 mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <p className="text-xs text-sta-orange font-semibold mt-3">
                    {cat.positions}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
