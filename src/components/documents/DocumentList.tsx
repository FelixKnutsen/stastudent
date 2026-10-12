"use client";

import React, { useState } from "react";
import { StaDocument, DocumentCategory } from "@/types/document";
import { DocumentItem } from "./DocumentItem";

interface DocumentListProps {
  initialDocuments: readonly StaDocument[];
}

const CATEGORIES: { label: string; value: DocumentCategory | "all" }[] = [
  { label: "Alle dokumenter", value: "all" },
  { label: "Vedtekter", value: "vedtekter" },
  { label: "Politiske dokumenter", value: "politiske-dokumenter" },
  { label: "Sakspapirer & Protokoller", value: "sakspapirer-og-protokoller" },
  { label: "Årsrapporter", value: "arsrapporter" },
];

export function DocumentList({ initialDocuments }: DocumentListProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    DocumentCategory | "all"
  >("all");

  const filteredDocuments =
    selectedCategory === "all"
      ? initialDocuments
      : initialDocuments.filter((doc) => doc.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
              selectedCategory === cat.value
                ? "bg-sta-orange text-white"
                : "bg-sta-teal-700/60 text-sta-teal-100 hover:bg-sta-teal-600 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Document Items */}
      <div className="space-y-3">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <DocumentItem key={doc.id} document={doc} />
          ))
        ) : (
          <div className="p-8 text-center text-sta-teal-200 bg-sta-teal-800/40 rounded-xl">
            Ingen dokumenter funnet i denne kategorien.
          </div>
        )}
      </div>
    </div>
  );
}
