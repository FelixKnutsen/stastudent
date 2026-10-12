import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { Activity, Dumbbell, Palette, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Studentaktiviteter",
  description: "Bli med i studentaktiviteter, idrettslag og interesseorganisasjoner i Agder.",
};

const CATEGORIES = [
  {
    icon: Dumbbell,
    title: "Studentidrett (KSI & Grimstad)",
    description: "Alt fra fotball, volleyball og klatring til surfing og lacrosse.",
  },
  {
    icon: Palette,
    title: "Kultur & Kunst",
    description: "Studentkor, teatergrupper, foto- og filmklubber og musikkensembler.",
  },
  {
    icon: Users,
    title: "Samfunn & Frivillighet",
    description: "Politiske og ideelle studentorganisasjoner som jobber for bærekraft, rettferdighet og inkludering.",
  },
  {
    icon: Activity,
    title: "Sosiale & Faglige Interessegrupper",
    description: "Brettspill, gaming, koding, debatt og bryggeklubber.",
  },
];

export default function StudentaktiviteterPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="Studentaktiviteter"
          subtitle="Gjør studietiden rikere – bli med i en studentforening eller start din egen!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sta-orange/20 text-sta-orange shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-sm text-sta-teal-100 mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            href="mailto:sta@uia.no?subject=Registrere%20ny%20studentaktivitet"
            variant="primary"
            size="lg"
          >
            Registrer en ny aktivitet
          </Button>
        </div>
      </Container>
    </div>
  );
}
