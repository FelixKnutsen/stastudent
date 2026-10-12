import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { ShieldCheck, Lock, Globe, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Privacy policy, analytics tools, and data security guidelines of the Student Organisation of Agder (STA).",
};

export default function EnglishPersonvernserklaeringPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Privacy Policy"
          subtitle="How the Student Organisation of Agder (STA) processes personal data and safeguards your privacy on stastudent.no."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8 space-y-3">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">1. Who are we?</h2>
            </div>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              The Student Organisation of Agder (STA), org. no. 981 596 412, is the student democracy
              at the University of Agder (UiA), representing all students across Kristiansand and Grimstad.
            </p>
          </Card>

          <Card className="p-8 space-y-3">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">2. Embedded content from other websites</h2>
            </div>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              We strive to use as little embedded third-party content as possible. Any embedded content behaves exactly as if you visited the external provider directly.
            </p>
          </Card>

          <Card className="p-8 space-y-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">3. Analytics – Koko Analytics</h2>
            </div>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              STA exclusively uses the privacy-first tool{" "}
              <a href="https://www.kokoanalytics.com" target="_blank" rel="noopener noreferrer" className="text-sta-orange underline">
                Koko Analytics
              </a>
              . Koko Analytics does not collect personal identifiers or IP addresses. All aggregate metrics are stored locally in the website database.
            </p>
          </Card>

          <Card className="p-8 space-y-3">
            <div className="flex items-center gap-3">
              <Server className="w-6 h-6 text-sta-orange shrink-0" />
              <h2 className="text-xl font-bold text-white">4. Security logs and retention</h2>
            </div>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              Security logs protecting against malicious access are automatically deleted after <strong>60 days</strong>.
            </p>
          </Card>

          <Card className="p-8 space-y-2">
            <h2 className="text-xl font-bold text-white">5. Contact</h2>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              For any questions regarding privacy, please contact:{" "}
              <a href="mailto:sta@uia.no" className="text-sta-orange font-semibold hover:underline">
                sta@uia.no
              </a>.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
