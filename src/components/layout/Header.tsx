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
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);
  const justClosedViaEscape = React.useRef(false);

  const handleMouseEnter = (title: string) => {
    if (justClosedViaEscape.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    justClosedViaEscape.current = false;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleBtnClick = (title: string) => {
    justClosedViaEscape.current = false;
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  const handleKeyDown = (e: React.KeyboardEvent, title: string) => {
    if (e.key === "Escape") {
      e.preventDefault();
      justClosedViaEscape.current = true;
      setActiveDropdown(null);
    } else if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      justClosedViaEscape.current = false;
      setActiveDropdown((prev) => (prev === title ? null : title));
    }
  };

  // Close on outside click and Escape key
  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        justClosedViaEscape.current = true;
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleGlobalKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-sta-teal/95 backdrop-blur-md border-b border-sta-teal-600/40 transition-shadow duration-300 shadow-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3 group">
            <img
              src="/images/logos/sta-logo.svg"
              alt="Studentorganisasjonen i Agder"
              className="h-10 md:h-12 w-auto object-contain"
            />
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

              const isOpen = activeDropdown === item.title;

              return (
                <div
                  key={item.title}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => handleBtnClick(item.title)}
                    onKeyDown={(e) => handleKeyDown(e, item.title)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isOpen
                        ? "text-sta-orange bg-white/10"
                        : "text-white hover:text-sta-orange hover:bg-white/5"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sta-orange" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu with bridging container to prevent pointer gaps */}
                  {isOpen && (
                    <div
                      className="absolute left-0 top-full pt-1.5 w-64 z-50 animate-fadeIn"
                      onMouseEnter={() => handleMouseEnter(item.title)}
                      onMouseLeave={handleMouseLeave}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          setActiveDropdown(null);
                        }
                      }}
                    >
                      <div className="rounded-xl bg-sta-teal-800 border border-sta-teal-600 shadow-2xl py-2 overflow-hidden">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-sta-teal-100 hover:text-white hover:bg-sta-teal-700/80 transition-colors"
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
