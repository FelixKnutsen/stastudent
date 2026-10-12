import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { FileDown, FileSpreadsheet, ExternalLink, ShieldAlert, Heart, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Student representatives",
  description:
    "Learn about being a student representative at the University of Agder and how STA supports you.",
};

export default function EnglishForTillitsvalgtePage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Student Representatives"
          subtitle="Learn about being a student representative at UiA and how STA contributes to the education quality system."
        />

        {/* 3 Top Resource Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href="https://stastudent.no/wp-content/uploads/2025/09/TILLITSVALGTHANDBOKEN-STUDENTORGANISASJONEN-I-AGDER.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-sta-teal-700/50 hover:bg-sta-teal-600/70 border border-sta-teal-500/30 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center transition-colors mb-4">
              <FileDown className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-white group-hover:text-sta-orange transition-colors">
              Representative Handbook
            </h3>
            <p className="text-xs text-sta-teal-100 mt-1">Download handbook (PDF)</p>
          </a>

          <a
            href="https://stastudent.no/wp-content/uploads/2024/05/Sjekkliste-for-studentevaluering-av-emner.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-sta-teal-700/50 hover:bg-sta-teal-600/70 border border-sta-teal-500/30 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center transition-colors mb-4">
              <FileDown className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-white group-hover:text-sta-orange transition-colors">
              Course Evaluation Template
            </h3>
            <p className="text-xs text-sta-teal-100 mt-1">Checklist and evaluation guide</p>
          </a>

          <a
            href="https://forms.office.com/Pages/ShareFormPage.aspx?id=HoiChJk2P0uxNc9IALwe-5paDL8Z10RCgktRPOD_6vhUQzFYVlo1UU1JVjQzUDQ3NVZESDdYSjJETy4u&sharetoken=0qiUY8Cn2iKY2FHAUTax"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-sta-teal-700/50 hover:bg-sta-teal-600/70 border border-sta-teal-500/30 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center transition-colors mb-4">
              <FileSpreadsheet className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-white group-hover:text-sta-orange transition-colors">
              Program Evaluation
            </h3>
            <p className="text-xs text-sta-teal-100 mt-1">Open Microsoft Forms template</p>
          </a>
        </div>

        {/* Role Description */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card className="p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Your role as a student representative</h3>
            <p className="text-sm text-sta-teal-100 leading-relaxed">
              A student representative is elected by their fellow students to represent them in
              courses, study councils, and university committees. You are the direct link between students
              and the faculty leadership.
            </p>
            <div className="p-4 rounded-xl bg-sta-teal-800/80 border border-sta-orange/40 text-xs text-white">
              <strong className="text-sta-orange">Important:</strong> Once elected, please register at{" "}
              <a
                href="https://innsia.uia.no"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-sta-orange font-semibold"
              >
                innsia.uia.no
              </a>{" "}
              to receive course invitations and training updates.
            </div>
          </Card>

          {/* Useful systems */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <ShieldAlert className="w-8 h-8 text-sta-orange mb-3" />
              <h4 className="font-bold text-white mb-2">Speak Up! (Si ifra)</h4>
              <p className="text-xs text-sta-teal-100 mb-4 leading-relaxed">
                UiA portal to report issues regarding learning environment, bullying, or safety concerns.
              </p>
              <a
                href="https://www.uia.no/om-uia/kontakt/si-ifra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sta-orange hover:text-white"
              >
                Visit Si ifra <ExternalLink className="w-3 h-3" />
              </a>
            </Card>

            <Card className="p-6">
              <Info className="w-8 h-8 text-sta-orange mb-3" />
              <h4 className="font-bold text-white mb-2">Student Ombud</h4>
              <p className="text-xs text-sta-teal-100 mb-4 leading-relaxed">
                Independent advisor safeguarding student legal rights and fair treatment at UiA.
              </p>
              <a
                href="https://www.uia.no/studier/for-studenter/veiledning-og-kurs/studentombud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sta-orange hover:text-white"
              >
                Contact Ombud <ExternalLink className="w-3 h-3" />
              </a>
            </Card>

            <Card className="p-6">
              <Heart className="w-8 h-8 text-sta-orange mb-3" />
              <h4 className="font-bold text-white mb-2">SiA Health</h4>
              <p className="text-xs text-sta-teal-100 mb-4 leading-relaxed">
                Free psychological counselling and mental health services for all registered students.
              </p>
              <a
                href="https://sia.no/Helse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-sta-orange hover:text-white"
              >
                Visit SiA Health <ExternalLink className="w-3 h-3" />
              </a>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
