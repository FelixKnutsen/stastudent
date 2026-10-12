import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Personvernserklæring",
  description: "STAs retningslinjer for behandling av personopplysninger og personvern.",
};

export default function PersonvernPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="Personvernserklæring"
          subtitle="Hvordan Studentorganisasjonen i Agder behandler dine personopplysninger"
        />

        <Card className="max-w-3xl mx-auto p-8 space-y-6 text-sm text-sta-teal-100 leading-relaxed">
          <section className="space-y-2">
            <h3 className="text-lg font-bold text-white">1. Behandlingsansvarlig</h3>
            <p>
              Studentorganisasjonen i Agder (STA), org. nr. 981 596 412, er behandlingsansvarlig
              for personopplysninger som samles inn gjennom stastudent.no og våre arrangementer.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-bold text-white">2. Formål med behandlingen</h3>
            <p>
              Vi samler inn og behandler personopplysninger for å administrere studenttillitsvalgte,
              gjennomføre valg til Studentparlamentet og RSU, håndtere arrangementer, og svare på
              henvendelser.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-bold text-white">3. Dine rettigheter</h3>
            <p>
              Du har rett til innsyn, retting, sletting og begrensning av behandling av dine
              personopplysninger i samsvar med gjeldende personvernlovgivning (GDPR).
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-bold text-white">4. Kontakt</h3>
            <p>
              Ved spørsmål om personvern kan du kontakte oss på e-post:{" "}
              <a href="mailto:sta@uia.no" className="text-sta-orange hover:underline">
                sta@uia.no
              </a>
              .
            </p>
          </section>
        </Card>
      </Container>
    </div>
  );
}
