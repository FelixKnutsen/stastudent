import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { BOARD_MEMBERS } from "@/content/board-members";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "STA-Styret",
  description: "Møt medlemmene i STA-styret som leder organisasjonen til daglig.",
};

export default function StaStyretPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="STA-Styret"
          subtitle="Styret er det utøvende organet i STA og jobber heltid for studentene ved UiA."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BOARD_MEMBERS.map((member) => (
            <Card key={member.id} className="p-6 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-sta-teal-500/40 border border-sta-orange/30 flex items-center justify-center text-xl font-bold text-white mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-sta-orange font-medium">{member.role}</p>

                <div className="flex items-center gap-1.5 text-xs text-sta-teal-200 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-sta-orange" />
                  <span>Campus: {member.campus}</span>
                </div>

                {member.responsibilities && (
                  <div className="mt-4 pt-3 border-t border-sta-teal-600/30">
                    <p className="text-xs font-semibold text-white/90 mb-1">Ansvarsområder:</p>
                    <ul className="text-xs text-sta-teal-100 space-y-1 list-disc list-inside">
                      {member.responsibilities.map((resp) => (
                        <li key={resp}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-sta-teal-600/40">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-sta-orange transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {member.email}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
