import React from "react";
import { StaDocument } from "@/types/document";
import { FileText, Download } from "lucide-react";

interface DocumentItemProps {
  document: StaDocument;
}

export function DocumentItem({ document }: DocumentItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl bg-sta-teal-700/40 border border-sta-teal-500/20 hover:border-sta-orange/40 transition-colors gap-4">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-lg bg-sta-orange/20 text-sta-orange shrink-0 mt-0.5">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-white">{document.title}</h4>
          {document.description && (
            <p className="text-xs text-sta-teal-100 mt-0.5">{document.description}</p>
          )}
          <div className="flex items-center gap-3 text-[11px] text-sta-teal-200 mt-2">
            <span>År: {document.year}</span>
            <span>•</span>
            <span className="uppercase">{document.fileType}</span>
            {document.fileSize && (
              <>
                <span>•</span>
                <span>{document.fileSize}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <a
        href={document.fileUrl}
        download
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-sta-teal-600 hover:bg-sta-orange text-white text-xs font-medium transition-colors shrink-0"
      >
        <Download className="w-4 h-4" />
        Last ned
      </a>
    </div>
  );
}
