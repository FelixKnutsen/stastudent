"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOOTER_NAV_GROUPS_NO, FOOTER_NAV_GROUPS_EN } from "@/content/navigation";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Container } from "../shared/Container";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { getLocaleFromPath, STRINGS } from "@/lib/locale";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname || "/");
  const isEn = locale === "en";
  const navGroups = isEn ? FOOTER_NAV_GROUPS_EN : FOOTER_NAV_GROUPS_NO;
  const strings = STRINGS[locale];

  return (
    <footer className="w-full bg-sta-teal-900 border-t border-sta-teal-800 text-white mt-auto">
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logos/sta-logo.svg"
                alt="Studentorganisasjonen i Agder"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-sta-teal-100 max-w-sm leading-relaxed">
              {isEn
                ? "The Student Organisation of Agder (STA) represents all students at the University of Agder. We work for students' academic, social, and economic interests in Kristiansand and Grimstad."
                : "Studentorganisasjonen i Agder (STA) representerer alle studentene ved Universitetet i Agder. Vi jobber for studentenes faglige, sosiale og økonomiske interesser i Kristiansand og Grimstad."}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sta-teal-200 hover:text-sta-orange transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <span className="text-sta-teal-600">•</span>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sta-teal-200 hover:text-sta-orange transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <span className="text-sta-teal-600">•</span>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sta-teal-200 hover:text-sta-orange transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Groups */}
          {navGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-sta-teal-200">
                {group.title}
              </h4>
              <ul className="space-y-2 text-sm text-sta-teal-100">
                {group.links.map((link) => (
                  <li key={link.title}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-sta-orange transition-colors"
                      >
                        {link.title}
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-sta-orange transition-colors"
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Block */}
        <div className="mt-12 pt-8 border-t border-sta-teal-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-sta-teal-200">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-sta-orange shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">
                {isEn ? "Address Kristiansand:" : "Adresse Kristiansand:"}
              </p>
              <p>{CONTACT_INFO.kristiansandAddress}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-sta-orange shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">
                {isEn ? "Address Grimstad:" : "Adresse Grimstad:"}
              </p>
              <p>{CONTACT_INFO.grimstadAddress}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 text-sta-orange shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">{strings.contact}</p>
              <p className="flex items-center gap-2">
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                  {CONTACT_INFO.email}
                </a>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 inline" /> {CONTACT_INFO.phone}
                </span>
              </p>
              <p className="text-[11px] text-sta-teal-400">Org.nr: {CONTACT_INFO.orgNumber}</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-sta-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sta-teal-400">
          <p>© {new Date().getFullYear()} Studentorganisasjonen i Agder (STA). {strings.allRightsReserved}.</p>
          <div className="flex items-center gap-4">
            <Link
              href={isEn ? "/en/personvernserklaering" : "/personvernserklaering"}
              className="hover:text-white transition-colors"
            >
              {strings.privacyPolicy}
            </Link>
            <Link
              href={isEn ? "/en/trygg-organisasjon" : "/trygg-organisasjon"}
              className="hover:text-white transition-colors"
            >
              {strings.safeOrganization}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
