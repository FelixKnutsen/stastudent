"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/sok?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-sta-teal-800 border border-sta-teal-400/40 rounded-2xl shadow-2xl overflow-hidden p-6 text-white">
        <div className="flex items-center justify-between pb-4 border-b border-sta-teal-600">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Search className="w-5 h-5 text-sta-orange" />
            Søk på stastudent.no
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Lukk søk"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Hva leter du etter? (f.eks. verv, vedtekter, linjeforening...)"
              autoFocus
              className="w-full pl-4 pr-12 py-3 bg-sta-teal-900/80 border border-sta-teal-500/40 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sta-orange"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-sta-orange text-white text-sm font-medium rounded-lg hover:bg-sta-orange-600 transition-colors"
            >
              Søk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
