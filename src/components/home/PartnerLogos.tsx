import React from "react";
import Image from "next/image";
import { Container } from "../shared/Container";
import { SectionHeading } from "../shared/SectionHeading";
import { PARTNERS } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

interface PartnerLogosProps {
  isEn?: boolean;
}

export function PartnerLogos({ isEn = false }: PartnerLogosProps) {
  return (
    <section className="py-16 bg-sta-teal-900/60 border-t border-sta-teal-800">
      <Container>
        <SectionHeading
          title={isEn ? "Collaborating Partners" : "Samarbeidspartnere"}
          subtitle={
            isEn
              ? "We collaborate closely with key partners in the higher education sector and the Agder region"
              : "Vi samarbeider tett med sentrale aktører i UH-sektoren og Agder-regionen"
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {PARTNERS.map((partner) => {
            const displayName = isEn ? partner.nameEn : partner.name;

            return (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${displayName} (${isEn ? "opens in new window" : "åpner i nytt vindu"})`}
                className="p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-sta-teal-600/30 hover:border-sta-orange/50 transition-all duration-200 text-center flex flex-col items-center justify-between min-h-[160px] group shadow-sm hover:shadow-lg"
              >
                {/* Logo with proper aspect ratio and white background badge for contrast */}
                <div className="relative w-full h-20 flex items-center justify-center p-3 rounded-xl bg-white shadow-inner">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-2"
                  />
                </div>

                {/* Organization title & link hint */}
                <div className="mt-4 flex items-center justify-center gap-1.5 w-full">
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-sta-orange transition-colors line-clamp-1">
                    {displayName}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-sta-teal-300 group-hover:text-sta-orange transition-colors shrink-0 opacity-70" />
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
