import React from "react";
import { Container } from "../shared/Container";
import { SectionHeading } from "../shared/SectionHeading";
import { PARTNERS } from "@/lib/constants";

export function PartnerLogos() {
  return (
    <section className="py-16 bg-sta-teal-900/60 border-t border-sta-teal-800">
      <Container>
        <SectionHeading
          title="Samarbeidspartnere"
          subtitle="Vi samarbeider tett med sentrale aktører i UH-sektoren og Agder-regionen"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-sta-teal-800/40 hover:bg-sta-teal-700/60 border border-sta-teal-600/30 transition-all duration-200 text-center flex flex-col items-center justify-center min-h-[100px] group"
            >
              <span className="text-base font-bold text-white group-hover:text-sta-orange transition-colors">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
