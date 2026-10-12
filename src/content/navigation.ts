import { NavItem, FooterLinkGroup } from "@/types/navigation";

export const MAIN_NAV_ITEMS_NO: readonly NavItem[] = [
  {
    title: "Hjem",
    href: "/",
  },
  {
    title: "Verv",
    href: "/rad-styrer-og-utvalg",
  },
  {
    title: "Dokumenter",
    href: "/dokumenter",
  },
  {
    title: "Tillitsvalgt",
    href: "/for-tillitsvalgte",
  },
  {
    title: "Om Oss",
    href: "#",
    children: [
      {
        title: "STA-Styret",
        href: "/sta-styret",
        description: "Det daglige styret i studentorganisasjonen",
      },
      {
        title: "Studentparlamentet",
        href: "/studentparlamentet",
        description: "UiAs øverste studentdemokratiske organ",
      },
      {
        title: "Linjeforeninger",
        href: "/linjeforeninger",
        description: "Fag- og linjeforeninger i Kristiansand og Grimstad",
      },
      {
        title: "Studentaktiviteter",
        href: "/studentaktiviteter",
        description: "Interesseforeninger, idrett og kultur",
      },
      {
        title: "Lokaler",
        href: "/lokaler",
        description: "Alibiet og Bluebox – lokaler for studenter",
      },
      {
        title: "Irene Bredals Hederspris",
        href: "/irene-bredals-hederspris",
        description: "Ærespris for ekstraordinært studentengasjement",
      },
    ],
  },
] as const;

export const MAIN_NAV_ITEMS_EN: readonly NavItem[] = [
  {
    title: "Home",
    href: "/en",
  },
  {
    title: "Get involved",
    href: "/en/rad-styrer-og-utvalg",
  },
  {
    title: "Documents",
    href: "/en/dokumenter",
  },
  {
    title: "Student representatives",
    href: "/en/for-tillitsvalgte",
  },
  {
    title: "About",
    href: "#",
    children: [
      {
        title: "The STA-board",
        href: "/en/sta-styret",
        description: "The daily board of the student organisation",
      },
      {
        title: "The Student Parliament",
        href: "/en/studentparlamentet",
        description: "UiA's highest student democratic body",
      },
      {
        title: "Academic associations",
        href: "/en/linjeforeninger",
        description: "Student associations at UiA campuses",
      },
      {
        title: "Student Activities",
        href: "/en/studentaktiviteter",
        description: "Sports, culture and student organisations",
      },
      {
        title: "Our premises",
        href: "/en/lokaler",
        description: "Alibiet and Bluebox – student venues",
      },
      {
        title: "Irene Bredals Hederspris",
        href: "/en/irene-bredals-hederspris",
        description: "Award for extraordinary student engagement",
      },
    ],
  },
] as const;

// Keep backward compat
export const MAIN_NAV_ITEMS = MAIN_NAV_ITEMS_NO;

export const FOOTER_NAV_GROUPS_NO: readonly FooterLinkGroup[] = [
  {
    title: "Organisasjon",
    links: [
      { title: "STA-Styret", href: "/sta-styret" },
      { title: "Studentparlamentet", href: "/studentparlamentet" },
      { title: "Ledige verv", href: "/ledige-verv" },
      { title: "Dokumenter", href: "/dokumenter" },
    ],
  },
  {
    title: "Ressurser",
    links: [
      { title: "For tillitsvalgte", href: "/for-tillitsvalgte" },
      { title: "Linjeforeninger", href: "/linjeforeninger" },
      { title: "Studentaktiviteter", href: "/studentaktiviteter" },
      { title: "Lokaler", href: "/lokaler" },
    ],
  },
  {
    title: "Retningslinjer",
    links: [
      { title: "Personvernserklæring", href: "/personvernserklaering" },
      { title: "Trygg Organisasjon", href: "/trygg-organisasjon" },
      { title: "UiA Karriereuka", href: "https://uiakarriereuka.no", isExternal: true },
    ],
  },
] as const;

export const FOOTER_NAV_GROUPS_EN: readonly FooterLinkGroup[] = [
  {
    title: "Organisation",
    links: [
      { title: "The STA-board", href: "/en/sta-styret" },
      { title: "The Student Parliament", href: "/en/studentparlamentet" },
      { title: "Vacant positions", href: "/en/ledige-verv" },
      { title: "Documents", href: "/en/dokumenter" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Student representatives", href: "/en/for-tillitsvalgte" },
      { title: "Academic associations", href: "/en/linjeforeninger" },
      { title: "Student Activities", href: "/en/studentaktiviteter" },
      { title: "Our premises", href: "/en/lokaler" },
    ],
  },
  {
    title: "Guidelines",
    links: [
      { title: "Privacy policy", href: "/en/personvernserklaering" },
      { title: "A Safe Organization", href: "/en/trygg-organisasjon" },
      { title: "UiA Karriereuka", href: "https://uiakarriereuka.no", isExternal: true },
    ],
  },
] as const;

export const FOOTER_NAV_GROUPS = FOOTER_NAV_GROUPS_NO;
