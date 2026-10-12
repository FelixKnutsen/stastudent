import { StaDocument } from "@/types/document";

export const SAMPLE_DOCUMENTS: readonly StaDocument[] = [
  {
    id: "vedtekter-2025",
    title: "Vedtekter for Studentorganisasjonen i Agder (STA)",
    category: "vedtekter",
    year: 2025,
    fileUrl: "/documents/vedtekter-sta-2025.pdf",
    fileType: "pdf",
    fileSize: "420 KB",
    description: "Gjeldende vedtekter vedtatt av Studentparlamentet.",
    updatedAt: "2025-05-15",
  },
  {
    id: "politisk-plattform-2024-2027",
    title: "Prinsipp- og handlingsprogram",
    category: "politiske-dokumenter",
    year: 2024,
    fileUrl: "/documents/prinsipprogram-2024-2027.pdf",
    fileType: "pdf",
    fileSize: "1.2 MB",
    description: "Det overordnede politiske styringsdokumentet for STA.",
    updatedAt: "2024-11-20",
  },
  {
    id: "sp-mote-1-2026",
    title: "Protokoll fra Studentparlamentsmøte 1 - 2026",
    category: "sakspapirer-og-protokoller",
    year: 2026,
    fileUrl: "/documents/protokoll-sp-1-2026.pdf",
    fileType: "pdf",
    fileSize: "310 KB",
    description: "Offisiell protokoll med vedtak og voteringer.",
    updatedAt: "2026-02-10",
  },
] as const;
