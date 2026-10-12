export type Locale = "nb" | "en";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "nb";
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === "en") {
    if (path === "/") return "/en";
    return `/en${path}`;
  }
  return path;
}

export function getAlternatePath(pathname: string): string {
  if (pathname.startsWith("/en")) {
    const nbPath = pathname.replace(/^\/en\/?/, "/");
    return nbPath === "" ? "/" : nbPath;
  }
  if (pathname === "/") return "/en";
  return `/en${pathname}`;
}

export interface LocaleStrings {
  readonly home: string;
  readonly search: string;
  readonly searchPlaceholder: string;
  readonly readMore: string;
  readonly contact: string;
  readonly address: string;
  readonly phone: string;
  readonly email: string;
  readonly orgNr: string;
  readonly partners: string;
  readonly news: string;
  readonly latestNews: string;
  readonly vacantPositions: string;
  readonly responsibilities: string;
  readonly representatives: string;
  readonly substitutes: string;
  readonly vacantPosition: string;
  readonly privacyPolicy: string;
  readonly safeOrganization: string;
  readonly allRightsReserved: string;
  readonly engageCta: string;
  readonly engageCtaButton: string;
}

export const STRINGS: Record<Locale, LocaleStrings> = {
  nb: {
    home: "Hjem",
    search: "Søk",
    searchPlaceholder: "Søk …",
    readMore: "Les mer!",
    contact: "Kontakt",
    address: "Adresse",
    phone: "Tlf",
    email: "E-post",
    orgNr: "Org. Nr.",
    partners: "Samarbeidspartnere",
    news: "Nyheter",
    latestNews: "SISTE NYTT",
    vacantPositions: "Ledige verv",
    responsibilities: "Hovedansvar",
    representatives: "Fast representanter",
    substitutes: "Vararepresentanter",
    vacantPosition: "Ledig verv",
    privacyPolicy: "Personvernserklæring",
    safeOrganization: "Trygg Organisasjon",
    allRightsReserved: "Alle rettigheter forbeholdt",
    engageCta: "Engasjer deg - still til verv!",
    engageCtaButton: "Ledige verv",
  },
  en: {
    home: "Home",
    search: "Search",
    searchPlaceholder: "Search …",
    readMore: "Read more!",
    contact: "Contact",
    address: "Address",
    phone: "Phone",
    email: "Email",
    orgNr: "Org. Nr.",
    partners: "Partners",
    news: "News",
    latestNews: "NEWS",
    vacantPositions: "Vacant positions",
    responsibilities: "Responsibilities",
    representatives: "Representatives",
    substitutes: "Substitutes",
    vacantPosition: "Vacant position",
    privacyPolicy: "Privacy policy",
    safeOrganization: "A Safe Organization",
    allRightsReserved: "All rights reserved",
    engageCta: "Engasjer deg - still til verv!",
    engageCtaButton: "Vacant positions",
  },
};
