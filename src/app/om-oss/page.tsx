import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Users, Landmark, HeartHandshake, Award, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Om Oss",
  description: "Lær mer om Studentorganisasjonen i Agder (STA), vår oppbygging og vårt formål.",
};

const SECTIONS = [
  {
    title: "STA-Styret",
    href: "/sta-styret",
    icon: Users,
    description: "Det daglige arbeidsutvalget og tillitsvalgte som jobber heltid for studentene.",
  },
  {
    title: "Studentparlamentet",
    href: "/studentparlamentet",
    icon: Landmark,
    description: "Det øverste politiske studentorganet ved Universitetet i Agder.",
  },
  {
    title: "Linjeforeninger",
    href: "/linjeforeninger",
    icon: HeartHandshake,
    description: "Oversikt over alle aktive linjeforeninger i Kristiansand og Grimstad.",
  },
  {
    title: "Studentaktiviteter",
    href: "/studentaktiviteter",
    icon: Users,
    description: "Studentforeninger, kultur og frivillighet utenfor klasserommet.",
  },
  {
    title: "Lokaler",
    href: "/lokaler",
    icon: Building,
    description: "Møterom og fasiliteter tilgjengelig for studenter og foreninger (Alibiet og Bluebox).",
  },
  {
    title: "Irene Bredals Hederspris",
    href: "/irene-bredals-hederspris",
    icon: Award,
    description: "STAs hederspris for studenter som utmerker seg med ekstraordinært engasjement.",
  },
];

export default function OmOssPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Om Studentorganisasjonen i Agder"
          subtitle="STA er studentenes interesseorganisasjon ved Universitetet i Agder."
        />

        <div className="max-w-3xl mx-auto mb-12 text-center text-sta-teal-100 space-y-4">
          <p>
            Studentorganisasjonen i Agder (STA) er en partipolitisk og religiøst uavhengig
            interesseorganisasjon for alle studenter immatrikulert ved UiA.
          </p>
          <p>
            STA jobber kontinuerlig for å sikre studentenes rettigheter, øke utdanningskvaliteten,
            bedre studentvelferden og styrke studentdemokratiet i landsdelen og nasjonalt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon;
            return (
              <Link key={sec.title} href={sec.href} className="group">
                <Card className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center transition-colors mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sta-orange transition-colors">
                      {sec.title}
                    </h3>
                    <p className="text-sm text-sta-teal-100 mt-2 leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-sta-teal-600/30 text-xs font-semibold text-sta-orange group-hover:text-white">
                    Gå til siden →
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
