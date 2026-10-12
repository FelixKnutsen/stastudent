import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { ShieldCheck, AlertTriangle, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "A Safe Organization",
  description:
    "Learn about the Student Organisation of Agder as a Safe Organization, ethical principles and reporting procedures.",
};

const PRINCIPLES_EN = [
  "Everyone shall feel welcomed and respected in STA. This means refraining from statements or behaviour perceived as uncomfortable, discriminatory, harassing or offensive.",
  "Everyone shares a responsibility to contribute to an inclusive environment, both at formal meetings and informal gatherings.",
  "Everyone shall show respect for each other's boundaries.",
  "Pressure regarding alcohol or other substances shall not occur. Every association event must have 1-2 designated sober trust representatives.",
  "Everyone has a responsibility to prevent bullying. STA maintains zero tolerance for bullying.",
  "Everyone shall show respect for different viewpoints and engage constructively with one another.",
];

export default function EnglishTryggOrganisasjonPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="A Safe Organization"
          subtitle="Getting involved in STA should be enjoyable, educational and motivating."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sta-orange/20 text-sta-orange flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Zero tolerance for harassment</h2>
                <p className="text-xs text-sta-orange font-semibold uppercase tracking-wider">
                  Adopted by the Student Parliament
                </p>
              </div>
            </div>

            <p className="text-sm text-sta-teal-100 leading-relaxed">
              As an engaged student in STA, we maintain <strong>zero tolerance for harassment and discrimination</strong>.
              We take care of each other and show mutual respect. It is a shared responsibility to ensure our venues and events are safe and that everyone is warmly welcomed.
            </p>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">The 6 Principles for a Safe Organization</h2>
            <div className="space-y-4">
              {PRINCIPLES_EN.map((principle, index) => (
                <Card key={index} className="p-5 flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-sta-orange text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-sm text-sta-teal-100 leading-relaxed">{principle}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 space-y-4 border-sta-orange/40 bg-sta-teal-800/60">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">Whistleblowing & Reporting</h2>
            </div>

            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Any suspected violation of these principles can be reported to members of the STA Board or the organizational consultant.
              Reports can also be handled confidentially by Advokatfirma Tofte AS to guarantee fair and impartial processing.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                href="mailto:sta@uia.no?subject=Confidential%20report%20-%20Safe%20Organization"
                variant="primary"
                size="md"
              >
                <Mail className="w-4 h-4 mr-2" />
                Submit confidential report
              </Button>
              <Button
                href="https://www.uia.no/om-uia/kontakt/si-ifra/"
                isExternal
                variant="outline"
                size="md"
              >
                UiA Speak Up Portal <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
