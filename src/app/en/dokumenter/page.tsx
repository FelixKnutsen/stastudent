import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FileDown, FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Documents",
  description:
    "Read about the Student Organisation of Agder's political and organisational documents, statutes and meeting records.",
};

const OVRIGE_DOKUMENTER = [
  {
    title: "Statutes (Vedtekter)",
    subtitle: "Rules of the organisation",
    href: "https://stastudent.no/wp-content/uploads/2026/05/STAs-Vedtekter.pdf",
  },
  {
    title: "Action Plan (Handlingsplan)",
    subtitle: "Our political priorities",
    href: "https://stastudent.no/wp-content/uploads/2026/06/STAs-Handlingsplan-2026-2027_1.pdf",
  },
  {
    title: "Job Descriptions (Stillingsbeskrivelser)",
    subtitle: "Board tasks and roles",
    href: "https://stastudent.no/wp-content/uploads/2026/05/STAs-Stillingsbeskrivelser.pdf",
  },
];

const POLITISKE_DOKUMENTER = [
  {
    title: "Student Welfare",
    subtitle: "Our policy on student welfare and housing",
    href: "https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Studentvelferd-2026.pdf",
  },
  {
    title: "Learning Environment & Sustainability",
    subtitle: "Our policy on learning environment and campus ecology",
    href: "https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Laeringsmiljo-og-Baerekraft.pdf",
  },
  {
    title: "Quality of Education",
    subtitle: "Our policy on higher education quality and research",
    href: "https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Utdanningskvalitet-2026.pdf",
  },
  {
    title: "Diversity & Internationalisation",
    subtitle: "Our policy on equality, language and exchange students",
    href: "https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Mangfold-og-Internasjonalisering.pdf",
  },
];

export default function EnglishDokumenterPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Documents"
          subtitle="Here you can read the political and organisational documents of the Student Organisation of Agder."
        />

        {/* Core documents */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Core Organisational Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OVRIGE_DOKUMENTER.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-sta-teal-700/40 hover:bg-sta-teal-600/70 border border-sta-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center transition-colors mb-4">
                    <FileDown className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sta-orange transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-sta-teal-100 mt-2">{doc.subtitle}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-sta-teal-600/30 flex items-center gap-1.5 text-xs font-semibold text-sta-orange group-hover:text-white">
                  <span>Download PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Political documents */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Political Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POLITISKE_DOKUMENTER.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-sta-teal-700/40 hover:bg-sta-teal-600/70 border border-sta-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sta-orange transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-sta-teal-100 mt-1">{doc.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-sta-orange mt-3 font-semibold">
                    Download document
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-sta-orange/20 text-sta-orange group-hover:bg-sta-orange group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
