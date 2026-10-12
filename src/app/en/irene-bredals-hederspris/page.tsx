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
    "The Student Organisation of Agder's Honour Award is presented to individuals who have shown dedication and effort for UiA students.",
};

export default function EnglishIreneBredalsHedersprisPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Irene Bredals Hederspris"
          subtitle="An award for individuals who have demonstrated dedication and extraordinary effort for students at the University of Agder."
        />

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sta-orange/20 text-sta-orange flex items-center justify-center shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">About the award</h2>
                <p className="text-xs text-sta-orange font-semibold uppercase tracking-wider">
                  Established 2024/2025
                </p>
              </div>
            </div>

            <p className="text-base text-sta-teal-100 leading-relaxed">
              The Student Organisation of Agder&apos;s honour award is presented to individuals who have shown
              long-term dedication and work for the benefit of UiA students. Anyone can be nominated for the
              award as long as they have contributed to strengthening STA and the student voice at UiA.
            </p>

            <div className="p-4 rounded-xl bg-sta-teal-800/80 border border-sta-teal-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-sm">Would you like to nominate someone?</h4>
                <p className="text-xs text-sta-teal-200 mt-0.5">
                  Read the statutes or submit your nomination by email.
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
                  <span>Statutes (PDF)</span>
                </a>
                <a
                  href="mailto:sta@uia.no?subject=Nomination%20for%20Irene%20Bredals%20Hederspris"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sta-orange hover:bg-sta-orange-600 text-xs font-semibold text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Submit nomination</span>
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            2024/2025 Recipient: Irene Bredal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-sta-teal-800/40 border border-sta-teal-600/40 rounded-2xl p-6 sm:p-8">
            <div className="md:col-span-5">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-sta-teal-500/30 shadow-xl bg-sta-teal-900">
                <Image
                  src="https://stastudent.no/wp-content/uploads/2025/06/Kopi-av-Kopi-av-Overskrift.png"
                  alt="Irene Bredals Hederspris poster"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <blockquote className="text-sm sm:text-base text-sta-teal-100 italic leading-relaxed border-l-4 border-sta-orange pl-4">
                &laquo;For more than 18 years, Irene has fought for students&apos; rights at UiA and held almost every elected position possible for an engaged student. As president of STA, she put the organisation on the map. Later as organisational consultant, she contributed to strengthening boards and students across UiA. Irene is in many ways the very symbol of student engagement at UiA.&raquo;
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
