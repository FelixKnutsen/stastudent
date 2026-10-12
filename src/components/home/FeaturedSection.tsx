import React from "react";
import Image from "next/image";
import { Container } from "../shared/Container";
import { Button } from "../shared/Button";
import { ArrowRight, ExternalLink } from "lucide-react";

export function FeaturedSection() {
  return (
    <section className="py-12">
      <Container className="space-y-8">
        {/* Card 1: Studentparlamentet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sta-teal-800/40 border border-sta-teal-600/40 rounded-2xl p-6 sm:p-8">
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-sta-teal-500/20">
              <Image
                src="https://stastudent.no/wp-content/uploads/2025/11/IMG_4780-1024x683.jpg"
                alt="Studentparlamentet"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Studentparlamentet</h2>
            <p className="text-base text-sta-teal-100 font-medium">
              UiAs øverste studentrepresentanter​
            </p>
            <p className="text-xs text-sta-teal-200 leading-relaxed">
              Studentparlamentet består av 25 folkevalgte representanter som fatter de overordnede politiske beslutningene og velger STA-styret.
            </p>
            <div className="pt-2">
              <Button href="/studentparlamentet" variant="primary" size="md">
                Les mer! <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Card 2: UiA Karriereuka */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sta-teal-800/40 border border-sta-teal-600/40 rounded-2xl p-6 sm:p-8">
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-sta-teal-500/20">
              <Image
                src="https://stastudent.no/wp-content/uploads/2026/02/DSC05899-–-middels.jpeg"
                alt="UiA Karriereuka"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">UiA Karriereuka</h2>
            <p className="text-base text-sta-teal-100 font-medium">
              Studentenes arena for kontakt med næringslivet
            </p>
            <p className="text-xs text-sta-teal-200 leading-relaxed">
              Møt fremtidige arbeidsgivere, delta på workshops og bygg nettverk for livet etter studiene.
            </p>
            <div className="pt-2">
              <Button href="https://uiakarriereuka.no/" isExternal variant="primary" size="md">
                Les mer! <ExternalLink className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
