import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { BookOpen, Shield, HelpCircle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "For Tillitsvalgte",
  description: "Ressurser, rettigheter og opplæring for tillitsvalgte ved UiA.",
};

const REPRESENTATIVE_TOPICS = [
  {
    icon: BookOpen,
    title: "Opplæring & Håndbok",
    description: "Få tilgang til tillitsvalgthåndboken, veiledninger for klassetillitsvalgte og kurskalender.",
  },
  {
    icon: Shield,
    title: "Dine Rettigheter",
    description: "Hva har du som tillitsvalgt krav på? Retningslinjer for møtegodtgjørelse, fraværsreglement og permisjon.",
  },
  {
    icon: HelpCircle,
    title: "Hjelp & Støtte fra STA",
    description: "Trenger du råd i en krevende sak på studiet? STA bistår tillitsvalgte i dialog med institutt og fakultet.",
  },
  {
    icon: Users,
    title: "Nettverk & Samlinger",
    description: "Møt andre tillitsvalgte på tvers av studieprogrammer på våre semestervise samlinger.",
  },
];

export default function TillitsvalgtPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="For Tillitsvalgte"
          subtitle="Du er bindeleddet mellom studentene og fagmiljøet. Her finner du verktøyene du trenger."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {REPRESENTATIVE_TOPICS.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card key={topic.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sta-orange/20 text-sta-orange shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                    <p className="text-sm text-sta-teal-100 mt-2 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="mailto:sta@uia.no?subject=Henvendelse%20fra%20tillitsvalgt" variant="primary" size="lg">
            Ta kontakt med tillitsvalgtansvarlig
          </Button>
        </div>
      </Container>
    </div>
  );
}
