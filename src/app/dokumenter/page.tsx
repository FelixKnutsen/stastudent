import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FileDown, FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Dokumenter",
  description:
    "Her kan du lese om Studentorganisasjonen i Agder sine politiske og organisatoriske dokumenter, vedtekter og protokoller.",
};

const OVRIGE_DOKUMENTER = [
  {
    title: "Vedtekter",
    subtitle: "Organisasjonens regler",
    href: "https://stastudent.no/wp-content/uploads/2026/05/STAs-Vedtekter.pdf",
  },
  {
    title: "Handlingsplan",
    subtitle: "Våre politiske prioriteringer",
    href: "https://stastudent.no/wp-content/uploads/2026/06/STAs-Handlingsplan-2026-2027_1.pdf",
  },
  {
    title: "Stillingsbeskrivelser",
    subtitle: "Styrets arbeidsoppgaver",
    href: "https://stastudent.no/wp-content/uploads/2026/05/STAs-Stillingsbeskrivelser.pdf",
  },
];

const POLITISKE_DOKUMENTER = [
  {
    title: "Studentvelferd",
    subtitle: "Les om vår velferdspolitikk",
    href: "https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Studentvelferd-2026.pdf",
  },
  {
    title: "Læringsmiljø og bærekraft",
    subtitle: "Les om vår politikk på læringsmiljø og bærekraft",
    href: "https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Laeringsmiljo-og-Baerekraft.pdf",
  },
  {
    title: "Utdanningskvalitet",
    subtitle: "Les om vår utdanning- og forskningspolitikk",
    href: "https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Utdanningskvalitet-2026.pdf",
  },
  {
    title: "Mangfold og internasjonalisering",
    subtitle: "Les om vår politikk på mangfold og internasjonalisering",
    href: "https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Mangfold-og-Internasjonalisering.pdf",
  },
];

const ANDRE_DOKUMENTER = [
  {
    title: "Reglement for studentaktiviteter (PDF)",
    href: "https://stastudent.no/wp-content/uploads/2025/06/STAs-Reglement-for-studentaktivitetene.pdf",
  },
  {
    title: "Forretningsorden (DOC)",
    href: "https://stastudent.no/wp-content/uploads/2024/09/Forretningsorden-SP.doc",
  },
  {
    title: "Økonomireglement (PDF)",
    href: "https://stastudent.no/wp-content/uploads/2026/05/STAs-Okonomireglement.pdf",
  },
  {
    title: "Valgreglement (PDF)",
    href: "https://stastudent.no/wp-content/uploads/2026/05/STAs-Valgreglement.pdf",
  },
  {
    title: "Fraværssystem for Studentparlamentet (PDF)",
    href: "https://stastudent.no/wp-content/uploads/2025/06/Fravaerssystem-for-Studentparlamentet.pdf",
  },
];

const RESOLUSJONER = [
  {
    year: "2025",
    items: [
      {
        title: "29.10.25 Resolusjon – Studentfrivillighet for fremtiden (PDF)",
        href: "https://stastudent.no/wp-content/uploads/2025/12/29.10.25-Resolusjon-Studentfrivillighet-for-fremtiden.pdf",
      },
      {
        title: "24.09.25 Resolusjon nynorsk på UiA (PDF)",
        href: "https://stastudent.no/wp-content/uploads/2025/12/24.09.25-Resolusjon-nynorsk-pa-UiA.pdf",
      },
      {
        title: "21.05.25 Resolusjon eksamensrettigheter (DOCX)",
        href: "https://stastudent.no/wp-content/uploads/2025/05/21.05.25-Resolusjon-eksamensrettigheter.docx",
      },
      {
        title: "22.01.25 Resolusjon kunstig intelligens (DOCX)",
        href: "https://stastudent.no/wp-content/uploads/2025/05/22.01.25-Resolusjon-KI.docx",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "23.10.24 Resolusjon om fleksible studier og studenter (DOCX)",
        href: "https://stastudent.no/wp-content/uploads/2024/10/23.10.24-Resolusjon-om-fleksible-studier-og-studenter.docx",
      },
      {
        title: "23.10.24 Resolusjon om fravær blant undervisere (DOCX)",
        href: "https://stastudent.no/wp-content/uploads/2024/10/23.10.24-Resolusjon-om-fravaer-blant-undervisere.docx",
      },
      {
        title: "22.05.24 Resolusjon akademisk frihet og demokrati (DOCX)",
        href: "https://stastudent.no/wp-content/uploads/2024/09/22.05.24-Resolusjon-akademisk-frihet-og-demokrati.docx",
      },
    ],
  },
];

export default function DokumenterPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Dokumenter"
          subtitle="Her kan du lese om Studentorganisasjonen i Agder sine politiske og organisatoriske dokumenter."
        />

        {/* Section 1: Øvrige dokumenter */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Øvrige dokumenter</h2>
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
                  <span>Last ned PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Section 2: Politiske dokumenter */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Politiske dokumenter</h2>
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
                    Last ned dokument
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

        {/* Section 3: Andre dokumenter */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Andre dokumenter & reglementer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ANDRE_DOKUMENTER.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-sta-teal-800/40 hover:bg-sta-teal-700/60 border border-sta-teal-600/40 text-xs font-semibold text-white hover:text-sta-orange transition-colors flex items-center justify-between gap-2"
              >
                <span className="truncate">{doc.title}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 text-sta-orange" />
              </a>
            ))}
          </div>
        </div>

        {/* Section 4: Resolusjoner */}
        <div className="p-8 rounded-2xl bg-sta-teal-800/30 border border-sta-teal-600/40">
          <h2 className="text-2xl font-bold text-white mb-2">Vedtatte resolusjoner</h2>
          <p className="text-xs text-sta-teal-200 mb-6">
            Studentparlamentets politiske resolusjoner og prinsipielle vedtak.
          </p>
          <div className="space-y-6">
            {RESOLUSJONER.map((group) => (
              <div key={group.year}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-sta-orange mb-3">
                  {group.year}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-sta-teal-900/60 hover:bg-sta-teal-800 border border-sta-teal-700/40 text-xs text-sta-teal-100 hover:text-white flex items-center justify-between gap-2 transition-colors"
                    >
                      <span className="truncate">{item.title}</span>
                      <ExternalLink className="w-3 h-3 text-sta-orange shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
