import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Vacant positions",
  description:
    "Interested in making a difference at the University of Agder? Check out current open positions!",
};

const VACANCIES_EN = [
  {
    category: "The Student Parliament",
    items: [
      {
        title: "Faculty of Health and Sport Sciences",
        positions: "1st, 2nd, 3rd and 4th substitute",
      },
      {
        title: "Faculty of Humanities and Education",
        positions: "1st, 2nd and 3rd substitute",
      },
      {
        title: "Teacher Education Unit",
        positions: "3rd and 4th substitute",
      },
    ],
  },
  {
    category: "UiA Committees",
    items: [
      {
        title: "Learning Environment Committee (LMU)",
        positions: "4th, 5th and 6th substitute (gender quotas apply)",
      },
      {
        title: "Education Prize Committee",
        positions: "1st and 2nd substitute",
      },
    ],
  },
  {
    category: "STA Committees",
    items: [
      {
        title: "Sustainability and Environment Committee",
        positions: "3 regular positions",
      },
      {
        title: "Election Committee",
        positions: "1 regular position",
      },
    ],
  },
  {
    category: "Other Committees",
    items: [
      {
        title: "Welfare Council of Agder (Velferdstinget)",
        positions: "4th, 5th and 6th substitute",
      },
      {
        title: "Student Council Grimstad (SIG)",
        positions: "1 substitute",
      },
    ],
  },
];

export default function EnglishLedigeVervPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Vacant Positions 2026/2027"
          subtitle="Interested in making a difference at the University of Agder? Check out current open positions!"
        />

        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-sta-teal-800/60 border border-sta-orange/40 text-center mb-12">
          <p className="text-sm text-sta-teal-100 mb-4">
            Would you like to run for one of the positions below? Send an email with a short introduction to:
          </p>
          <a
            href="mailto:sta@uia.no?subject=Application%20for%20vacant%20position"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sta-orange text-white font-bold hover:bg-sta-orange-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send application to sta@uia.no</span>
          </a>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {VACANCIES_EN.map((group) => (
            <div key={group.category}>
              <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-sta-teal-600/40">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <Card key={item.title} className="p-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-white text-sm">{item.title}</h3>
                      <p className="text-xs text-sta-orange font-semibold mt-1">
                        {item.positions}
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-sta-orange shrink-0 mt-0.5" />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="/en/rad-styrer-og-utvalg" variant="outline" size="md">
            Read more about what the different positions entail
          </Button>
        </div>
      </Container>
    </div>
  );
}
