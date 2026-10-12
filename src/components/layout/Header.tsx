"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV_ITEMS_NO, MAIN_NAV_ITEMS_EN } from "@/content/navigation";
import { Search, Menu, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { SearchModal } from "../shared/SearchModal";
import { Container } from "../shared/Container";
import { getLocaleFromPath } from "@/lib/locale";

export function Header() {
  const pathname = usePathname();
  const isEn = getLocaleFromPath(pathname || "/") === "en";
  const navItems = isEn ? MAIN_NAV_ITEMS_EN : MAIN_NAV_ITEMS_NO;

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full bg-sta-teal/95 backdrop-blur-md border-b border-sta-teal-600/40 transition-shadow duration-300 shadow-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wider text-white group-hover:text-sta-orange transition-colors">
                STA
              </span>
              <span className="text-[10px] tracking-widest uppercase text-sta-teal-200">
                {isEn ? "Student Organisation of Agder" : "Studentorganisasjonen i Agder"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-white hover:text-sta-orange transition-colors rounded-lg hover:bg-white/5"
                  >
                    {item.title}
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-white hover:text-sta-orange transition-colors rounded-lg hover:bg-white/5"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  </button>

                  {activeDropdown === item.title && (
                    <div className="absolute left-0 mt-1 w-64 rounded-xl bg-sta-teal-800 border border-sta-teal-600 shadow-xl py-2 z-50 animate-fadeIn">
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-sta-teal-100 hover:text-white hover:bg-sta-teal-700 transition-colors"
                        >
                          <div className="font-medium text-white">{sub.title}</div>
                          {sub.description && (
                            <div className="text-xs text-sta-teal-200 mt-0.5 line-clamp-1">
                              {sub.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-white hover:text-sta-orange transition-colors rounded-full hover:bg-white/10"
              aria-label={isEn ? "Open search" : "Åpne søk"}
            >
              <Search className="w-5 h-5" />
            </button>

            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => setMobileNavOpen(true)}
              className="p-2 text-white lg:hidden hover:text-sta-orange"
              aria-label={isEn ? "Open menu" : "Åpne meny"}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Modals */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
