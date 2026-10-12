import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { PARLIAMENT_FACULTIES, PARLIAMENT_INTRO_NO } from "@/content/parliament";
import { FileText, Mail, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Studentparlamentet",
  description:
    "Studentparlamentet 2026/2027 er UiAs øverste studentpolitiske organ og består av 25 representanter.",
};

export default function StudentparlamentetPage() {
  const introParagraphs = PARLIAMENT_INTRO_NO.split("\n\n");

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Studentparlamentet 2026/2027"
          subtitle="UiAs øverste studentorgan og demokratiske forsamling"
        />

        {/* Banner image */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-sta-teal-500/30 shadow-2xl">
          <div className="relative aspect-[16/7] w-full bg-sta-teal-800">
            <Image
              src="https://stastudent.no/wp-content/uploads/2025/09/IMG_4688-–-Kopi-CROPPED-1536x581.jpg"
              alt="Studentparlamentet samlet i møtesalen"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Introduction text */}
        <div className="max-w-3xl mx-auto space-y-4 text-sta-teal-100 text-base leading-relaxed mb-12">
          {introParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Quick action buttons / document links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          <Link
            href="/dokumenter"
            className="group p-6 rounded-2xl bg-sta-teal-700/40 hover:bg-sta-teal-600/60 border border-sta-teal-400/30 transition-all duration-300 flex items-center gap-4 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white group-hover:text-sta-orange transition-colors">
                Sakspapirer til parlamentsmøter
              </h3>
              <p className="text-xs text-sta-teal-200 mt-1">Se innkallinger og saksliste</p>
            </div>
          </Link>

          <Link
            href="/dokumenter"
            className="group p-6 rounded-2xl bg-sta-teal-700/40 hover:bg-sta-teal-600/60 border border-sta-teal-400/30 transition-all duration-300 flex items-center gap-4 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white group-hover:text-sta-orange transition-colors">
                Protokoll fra parlamentsmøter
              </h3>
              <p className="text-xs text-sta-teal-200 mt-1">Vedtatte resolusjoner og referater</p>
            </div>
          </Link>
        </div>

        {/* Responsible persons */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Ansvarlige for Studentparlamentet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-sta-orange">
                <Image
                  src="https://stastudent.no/wp-content/uploads/2026/08/a0da7b30-a50f-4dd3-9b89-6ec47da958aa.jpg"
                  alt="Mia Sandøy"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Mia Sandøy</h3>
              <p className="text-xs font-semibold text-sta-orange mt-0.5">Førstekonsulent i STA</p>
              <a
                href="mailto:sta@uia.no"
                className="inline-flex items-center gap-1.5 text-xs text-sta-teal-100 hover:text-white mt-3"
              >
                <Mail className="w-3.5 h-3.5 text-sta-orange" />
                sta@uia.no
              </a>
            </Card>

            <Card className="p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-sta-orange">
                <Image
                  src="https://stastudent.no/wp-content/uploads/2026/08/Karen-Smil-1024x683.jpg"
                  alt="Karen Elise Stenersen"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Karen Elise Stenersen</h3>
              <p className="text-xs font-semibold text-sta-orange mt-0.5">Studentleder ved UiA</p>
              <a
                href="mailto:staleder@uia.no"
                className="inline-flex items-center gap-1.5 text-xs text-sta-teal-100 hover:text-white mt-3"
              >
                <Mail className="w-3.5 h-3.5 text-sta-orange" />
                staleder@uia.no
              </a>
            </Card>
          </div>
        </div>

        {/* Representatives by Faculty */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2">Representanter etter fakultet</h2>
            <p className="text-sm text-sta-teal-200">
              Totalt 25 faste folkevalgte representanter og deres personlige varamedlemmer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PARLIAMENT_FACULTIES.map((faculty) => (
              <Card key={faculty.name} className="p-6">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-sta-teal-600/40">
                  <Users className="w-5 h-5 text-sta-orange shrink-0" />
                  <h3 className="text-lg font-bold text-white">{faculty.name}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Regulars */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sta-orange mb-2">
                      Fast representanter ({faculty.representatives.length})
                    </h4>
                    <ul className="space-y-1.5 text-xs text-sta-teal-100">
                      {faculty.representatives.map((rep, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sta-orange shrink-0" />
                          <span>{rep.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Substitutes */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sta-teal-300 mb-2">
                      Vararepresentanter ({faculty.substitutes.length})
                    </h4>
                    <ul className="space-y-1.5 text-xs text-sta-teal-100">
                      {faculty.substitutes.map((sub, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sta-teal-400 shrink-0" />
                          {sub.isVacant ? (
                            <span className="text-sta-orange italic">
                              Ledig verv – kontakt sta@uia.no
                            </span>
                          ) : (
                            <span>
                              {idx + 1}. vara: {sub.name}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button href="/ledige-verv" variant="primary" size="lg">
            Still til ledig verv i parlamentet
          </Button>
        </div>
      </Container>
    </div>
  );
}
