import React from "react";
import Image from "next/image";
import { Container } from "../shared/Container";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden pt-6 pb-4">
      <Container>
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden border border-sta-teal-500/30 shadow-2xl">
          <Image
            src="https://stastudent.no/wp-content/uploads/2025/11/IMG_4781_CROP-scaled.jpg"
            alt="Studentorganisasjonen i Agder"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
