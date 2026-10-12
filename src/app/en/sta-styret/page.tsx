import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { BOARD_MEMBERS } from "@/content/board-members";
import { Mail, Phone, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "The STA-board",
  description:
    "Meet the STA board and secretariat responsible for the day-to-day running of the student democracy at UiA.",
};

export default function EnglishStaStyretPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="The STA Board and Secretariat 2026-2027"
          subtitle="The STA Board and Secretariat are responsible for the day-to-day running of the organisation and have the main responsibility for student democracy at the University of Agder."
        />

        {/* Group Photo */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-sta-teal-500/30 shadow-2xl">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-sta-teal-800">
            <Image
              src="https://stastudent.no/wp-content/uploads/2026/08/Gruppebilde-STA-styret-1024x683.jpg"
              alt="Group photo of the STA Board and Secretariat"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
          <div className="bg-sta-teal-900/90 p-4 sm:p-6 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-sta-teal-100">
            <p>
              <strong className="text-white">Press inquiries:</strong> All press inquiries go to Student President Karen Elise Stenersen.
            </p>
            <a
              href="https://www.skyfish.com/p/uia/2397359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-sta-orange hover:text-white transition-colors shrink-0"
            >
              <span>Download press photos (Skyfish)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOARD_MEMBERS.map((member) => (
            <Card key={member.id} className="p-6 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-xl bg-sta-teal-800 border border-sta-teal-500/20">
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm font-semibold text-sta-orange mt-0.5">
                  {member.roleEn || member.role}
                </p>

                {(member.responsibilitiesEn || member.responsibilities) && (
                  <div className="mt-4 pt-3 border-t border-sta-teal-600/30">
                    <p className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                      Responsibilities
                    </p>
                    <ul className="text-xs text-sta-teal-100 space-y-1">
                      {(member.responsibilitiesEn || member.responsibilities)!.map((resp) => (
                        <li key={resp} className="leading-relaxed">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-sta-teal-600/40 space-y-2 text-xs">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-sta-teal-100 hover:text-sta-orange transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-sta-orange shrink-0" />
                  <span className="truncate">{member.email}</span>
                </a>
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-sta-teal-100 hover:text-sta-orange transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sta-orange shrink-0" />
                    <span>{member.phone}</span>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
