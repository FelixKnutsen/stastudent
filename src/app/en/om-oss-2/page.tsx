import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Users, Landmark, HeartHandshake, Award, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about the Student Organisation of Agder (STA), our structure and purpose.",
};

const SECTIONS_EN = [
  {
    title: "The STA-board",
    href: "/en/sta-styret",
    icon: Users,
    description: "The executive committee and officers working full-time for students.",
  },
  {
    title: "The Student Parliament",
    href: "/en/studentparlamentet",
    icon: Landmark,
    description: "The highest student political body at the University of Agder.",
  },
  {
    title: "Academic associations",
    href: "/en/linjeforeninger",
    icon: HeartHandshake,
    description: "Overview of all active student associations in Kristiansand and Grimstad.",
  },
  {
    title: "Student Activities",
    href: "/en/studentaktiviteter",
    icon: Users,
    description: "Student societies, sports and culture outside the classroom.",
  },
  {
    title: "Our premises",
    href: "/en/lokaler",
    icon: Building,
    description: "Meeting rooms and venues available for students and associations.",
  },
  {
    title: "Irene Bredals Hederspris",
    href: "/en/irene-bredals-hederspris",
    icon: Award,
    description: "STA's honour award for students showing extraordinary dedication.",
  },
];

export default function EnglishOmOssPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="About the Student Organisation of Agder"
          subtitle="STA is the student interest organisation at the University of Agder."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTIONS_EN.map((sec) => {
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
                    Visit page →
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
