"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { getAlternatePath, getLocaleFromPath } from "@/lib/locale";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = getLocaleFromPath(pathname || "/");

  const handleToggle = () => {
    const targetPath = getAlternatePath(pathname || "/");
    router.push(targetPath);
  };

  return (
    <button
      onClick={handleToggle}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 hover:text-white bg-sta-teal-700/60 hover:bg-sta-teal-600 transition-colors border border-sta-teal-400/20"
      aria-label="Bytt språk / Switch language"
    >
      <Globe className="w-3.5 h-3.5 text-sta-orange" />
      <span>{currentLocale === "nb" ? "English" : "Norsk bokmål"}</span>
    </button>
  );
}
