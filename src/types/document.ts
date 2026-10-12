export type DocumentCategory =
  | "vedtekter"
  | "politiske-dokumenter"
  | "sakspapirer-og-protokoller"
  | "arsrapporter"
  | "handboker-og-skjemaer";

export interface StaDocument {
  readonly id: string;
  readonly title: string;
  readonly category: DocumentCategory;
  readonly year: number;
  readonly fileUrl: string;
  readonly fileType: "pdf" | "docx" | "xlsx";
  readonly fileSize?: string;
  readonly description?: string;
  readonly updatedAt: string;
}
