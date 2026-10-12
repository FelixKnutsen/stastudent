"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import { MAIN_NAV_ITEMS_NO, MAIN_NAV_ITEMS_EN } from "@/content/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getLocaleFromPath } from "@/lib/locale";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const isEn = getLocaleFromPath(pathname || "/") === "en";
  const navItems = isEn ? MAIN_NAV_ITEMS_EN : MAIN_NAV_ITEMS_NO;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-sta-teal-900/95 backdrop-blur-lg lg:hidden">
      <div className="flex items-center justify-between p-4 border-b border-sta-teal-700">
        <span className="text-xl font-bold tracking-tight text-white">
          {isEn ? "Menu" : "Meny"}
        </span>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-sta-orange"
            aria-label={isEn ? "Close menu" : "Lukk meny"}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navItems.map((item, idx) => {
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedIndex === idx;

          return (
            <div key={item.title} className="border-b border-sta-teal-800/60 pb-2">
              <div className="flex items-center justify-between">
                {item.href === "#" ? (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="py-2 text-lg font-medium text-white hover:text-sta-orange transition-colors text-left"
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="py-2 text-lg font-medium text-white hover:text-sta-orange transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
                {hasChildren && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="p-2 text-white/70 hover:text-white"
                    aria-label={`Toggle ${item.title}`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {hasChildren && isExpanded && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-sta-teal-600">
                  {item.children?.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href}
                      onClick={onClose}
                      className="block py-1.5 text-sm text-sta-teal-100 hover:text-white transition-colors"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
