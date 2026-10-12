/**
 * Centralized, typed definitions for Boards, Committees, and Vacant Positions
 * with official terminology and authoritative external information links.
 */

export interface CommitteeRole {
  readonly id: string;
  readonly name: string;
  readonly nameEn: string;
  readonly desc: string;
  readonly descEn: string;
  readonly infoUrl?: string;
  readonly infoUrlLabel?: string;
  readonly infoUrlLabelEn?: string;
  readonly isExternal?: boolean;
}

export interface CommitteeCategory {
  readonly title: string;
  readonly titleEn: string;
  readonly items: readonly CommitteeRole[];
}

export interface VacancyItem {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly positions: string;
  readonly positionsEn: string;
  readonly infoUrl?: string;
  readonly infoUrlLabel?: string;
  readonly infoUrlLabelEn?: string;
  readonly organization: string;
  readonly organizationEn: string;
  readonly eligibility?: string;
  readonly eligibilityEn?: string;
}

export interface VacancyCategory {
  readonly category: string;
  readonly categoryEn: string;
  readonly items: readonly VacancyItem[];
}

export const COMMITTEE_CATEGORIES: readonly CommitteeCategory[] = [
  {
    title: "STA-Verv",
    titleEn: "STA Positions",
    items: [
      {
        id: "sta-board",
        name: "Styret (STA-Styret)",
        nameEn: "The STA-board",
        desc: "STAs daglige ledelse. Leder og nestleder er 100 % frikjøpt, tre fagansvarlige er 50 % frikjøpt. Har hovedansvaret for studentdemokratiet ved UiA.",
        descEn: "STA's executive leadership. President and Vice President are 100% full-time, while three officers are 50% part-time. Responsible for student democracy at UiA.",
        infoUrl: "/sta-styret",
        infoUrlLabel: "Les mer om STA-styret",
        infoUrlLabelEn: "Read more about the STA Board",
        isExternal: false,
      },
      {
        id: "student-parliament",
        name: "Studentparlamentet",
        nameEn: "The Student Parliament",
        desc: "UiAs øverste studentdemokratiske organ bestående av 25 representanter valgt fra de ulike fakultetene og lærerutdanningen.",
        descEn: "UiA's supreme student democratic body consisting of 25 representatives elected across all faculties and the Teacher Education Unit.",
        infoUrl: "/studentparlamentet",
        infoUrlLabel: "Les mer om Studentparlamentet",
        infoUrlLabelEn: "Read more about the Student Parliament",
        isExternal: false,
      },
      {
        id: "velferdstinget",
        name: "Velferdstinget i Agder (VT)",
        nameEn: "The Welfare Council in Agder (VT)",
        desc: "Kjemper for studentvelferd og fordeler semesteravgiftsmidler og studentvelferdsmidler på tvers av institusjonene i Agder.",
        descEn: "Advocates for student welfare and allocates student welfare and semester fee funds across higher education institutions in Agder.",
        infoUrl: "https://www.sia.no/om-sia/studentdemokratiet/",
        infoUrlLabel: "Offisiell informasjon (SiA / VT)",
        infoUrlLabelEn: "Official information (SiA / VT)",
        isExternal: true,
      },
      {
        id: "sig",
        name: "Studentutvalget i Grimstad (SIG)",
        nameEn: "Grimstad Student Council (SIG)",
        desc: "Kommunalt rådgivende råd som sikrer studentstemmen direkte overfor Grimstad kommune og politisk ledelse. Honorert verv.",
        descEn: "Municipal advisory body securing student representation directly before Grimstad municipality and political leadership. Compensated position.",
        infoUrl: "https://www.grimstad.kommune.no/",
        infoUrlLabel: "Grimstad kommune",
        infoUrlLabelEn: "Grimstad Municipality",
        isExternal: true,
      },
      {
        id: "unikum-board",
        name: "Unikum-styret",
        nameEn: "The Unikum-board",
        desc: "Styret for studentavisen Unikum. Har overordnet økonomi-, drifts- og ansettelsesansvar for redaksjonen.",
        descEn: "Governing board for the independent student newspaper Unikum, responsible for finances, operations, and hiring.",
        infoUrl: "https://www.unikumnett.no/",
        infoUrlLabel: "Unikum nettavis",
        infoUrlLabelEn: "Unikum newspaper",
        isExternal: true,
      },
      {
        id: "nso-delegation",
        name: "Landsmøtedelegasjonen (NSO)",
        nameEn: "National meeting delegation (NSO)",
        desc: "UiAs offisielle delegasjon til Norsk studentorganisasjons (NSO) landsmøte, der nasjonal studentpolitikk vedtas.",
        descEn: "UiA's official delegation to the national convention of the National Union of Students in Norway (NSO), shaping national student policy.",
        infoUrl: "https://student.no/",
        infoUrlLabel: "Norsk studentorganisasjon (NSO)",
        infoUrlLabelEn: "National Union of Students in Norway (NSO)",
        isExternal: true,
      },
    ],
  },
  {
    title: "STAs Politiske Utvalg",
    titleEn: "STA Political Committees",
    items: [
      {
        id: "academic-affairs-comm",
        name: "Fag- og forskningspolitisk utvalg",
        nameEn: "Academic and research policy committee",
        desc: "Bistår fagpolitisk ansvarlig med saker knyttet til utdanningskvalitet, forskningspolitikk og sensurordninger.",
        descEn: "Assists the Officer of academic affairs with educational quality, academic integrity, and research policies.",
        infoUrl: "/dokumenter",
        infoUrlLabel: "Politiske dokumenter (STA)",
        infoUrlLabelEn: "Political documents (STA)",
        isExternal: false,
      },
      {
        id: "learning-env-comm",
        name: "Læringsmiljøpolitisk utvalg",
        nameEn: "Learning environment policy committee",
        desc: "Jobber for å forbedre studentenes fysiske, psykososiale og digitale læringsmiljø på campus.",
        descEn: "Focuses on improving the physical, psychosocial, and digital learning environment for students on campus.",
        infoUrl: "/dokumenter",
        infoUrlLabel: "Politiske dokumenter (STA)",
        infoUrlLabelEn: "Political documents (STA)",
        isExternal: false,
      },
      {
        id: "sustainability-comm",
        name: "Bærekraft- og miljøpolitisk utvalg",
        nameEn: "Sustainability and environmental committee",
        desc: "Arbeider for grønnere campusdrift, miljøbevissthet og bærekraft integrert i utdanningene ved UiA.",
        descEn: "Works toward green campus operations, environmental awareness, and integrating sustainability across UiA programs.",
        infoUrl: "/dokumenter",
        infoUrlLabel: "Politiske dokumenter (STA)",
        infoUrlLabelEn: "Political documents (STA)",
        isExternal: false,
      },
      {
        id: "election-comm",
        name: "Valgkomité",
        nameEn: "Election committee",
        desc: "Innstiller kandidater til Studentparlamentets valgforsamlinger og intervjuer søkere til verv.",
        descEn: "Interviews applicants and recommends candidates for elected office at Student Parliament election assemblies.",
        infoUrl: "/valgkomiteen",
        infoUrlLabel: "Om Valgkomiteen",
        infoUrlLabelEn: "About the Election Committee",
        isExternal: false,
      },
      {
        id: "control-comm",
        name: "Kontrollkomité",
        nameEn: "Control committee",
        desc: "Påser at organisasjonens organer og vedtak følger STAs vedtekter og gjeldende reglement.",
        descEn: "Ensures that STA's bodies and resolutions comply with STA's regulations and governing policies.",
        infoUrl: "/dokumenter",
        infoUrlLabel: "STAs Vedtekter",
        infoUrlLabelEn: "STA's Regulations",
        isExternal: false,
      },
    ],
  },
  {
    title: "Universitetsorganer (UiA)",
    titleEn: "UiA Governing Bodies & Committees",
    items: [
      {
        id: "university-board",
        name: "Universitetsstyret",
        nameEn: "The University-board",
        desc: "UiAs øverste styringsorgan. Behandler universitetets overordnede strategi, budsjett og prioriteringer. 2 faste studentrepresentanter med personlig vara. Honorert.",
        descEn: "UiA's supreme governing body deciding institutional strategy, finances, and overarching policies. 2 student representatives with personal substitutes. Compensated.",
        infoUrl: "https://www.uia.no/om-uia/styrer-og-utvalg/universitetsstyret.html",
        infoUrlLabel: "Offisiell UiA-side for Universitetsstyret",
        infoUrlLabelEn: "Official UiA University Board page",
        isExternal: true,
      },
      {
        id: "lmu",
        name: "Læringsmiljøutvalget (LMU)",
        nameEn: "UiA's Learning environment committee (LMU)",
        desc: "Lovfestet utvalg som følger opp studentenes fysiske og psykososiale arbeids- og studiemiljø i samarbeid med SiA. 6 studentrepresentanter med kjønnskvotering.",
        descEn: "Statutory committee supervising the physical and psychosocial study and working environment in cooperation with SiA. 6 student representatives with gender balance.",
        infoUrl: "https://www.uia.no/om-uia/styrer-og-utvalg/leringsmiljoutvalget.html",
        infoUrlLabel: "Offisiell UiA-side for LMU",
        infoUrlLabelEn: "Official UiA Learning Environment Committee page",
        isExternal: true,
      },
      {
        id: "academic-affairs-board",
        name: "Studieutvalget / Utdanningsutvalget",
        nameEn: "UiA's Academic affairs committee",
        desc: "Rådgivende organ for utdanningskvalitet, akkreditering av studieprogrammer og utdanningsmelding ved UiA.",
        descEn: "Advisory committee regarding educational quality, accreditation of academic programs, and education reports at UiA.",
        infoUrl: "https://www.uia.no/om-uia/styrer-og-utvalg/utdanningsutvalg.html",
        infoUrlLabel: "Offisiell UiA-side for Utdanningsutvalg",
        infoUrlLabelEn: "Official UiA Academic Affairs Committee page",
        isExternal: true,
      },
      {
        id: "appeals-committee",
        name: "Klagenemnda (Nemnd for studentsaker)",
        nameEn: "UiA's Appeals committee",
        desc: "Lovfestet nemnd som behandler klager over enkeltvedtak, fusk, bortvisning og skikkethetssaker. Honorert verv.",
        descEn: "Statutory appeals committee reviewing appeals on administrative individual decisions, suspected cheating, and dismissals. Compensated.",
        infoUrl: "https://www.uia.no/om-uia/styrer-og-utvalg/nemnd-for-studentsaker.html",
        infoUrlLabel: "Offisiell UiA-side for Nemnd for studentsaker",
        infoUrlLabelEn: "Official UiA Appeals Committee page",
        isExternal: true,
      },
      {
        id: "suitability-committee",
        name: "Skikkethetsnemnda",
        nameEn: "UiA's Suitability committee",
        desc: "Vurderer om studenter i profesjonsutdanninger (helse, lærer, m.fl.) er skikket for yrket. 2 studentrepresentanter.",
        descEn: "Assesses whether students in professional training programs (health, teaching, etc.) are suitable for practice. 2 student representatives.",
        infoUrl: "https://www.uia.no/om-uia/styrer-og-utvalg/skikkethetsnemnd.html",
        infoUrlLabel: "Offisiell UiA-side for Skikkethetsnemnd",
        infoUrlLabelEn: "Official UiA Suitability Committee page",
        isExternal: true,
      },
      {
        id: "election-board",
        name: "Valgstyre ved UiA",
        nameEn: "UiA's Election board",
        desc: "Ansvarlig for forberedelse og gjennomføring av alle rektor- og styrevalg ved universitetet.",
        descEn: "Responsible for organizing, administering, and conducting rector and university board elections at UiA.",
        infoUrl: "https://www.uia.no/om-uia/styrer-og-utvalg/valstyret.html",
        infoUrlLabel: "Offisiell UiA-side for Valgstyret",
        infoUrlLabelEn: "Official UiA Election Board page",
        isExternal: true,
      },
    ],
  },
];

export const VACANCIES_DATA: readonly VacancyCategory[] = [
  {
    category: "Studentparlamentet",
    categoryEn: "The Student Parliament",
    items: [
      {
        id: "sp-helse",
        title: "Fakultet for helse- og idrettsvitenskap",
        titleEn: "Faculty of Health and Sport Sciences",
        positions: "1., 2., 3. og 4. vararepresentant",
        positionsEn: "1st, 2nd, 3rd, and 4th substitute representative",
        organization: "Studentparlamentet",
        organizationEn: "The Student Parliament",
        infoUrl: "/studentparlamentet",
        infoUrlLabel: "Om Studentparlamentet",
        infoUrlLabelEn: "About the Student Parliament",
        eligibility: "Studenter registrert ved Fakultet for helse- og idrettsvitenskap",
        eligibilityEn: "Students registered at the Faculty of Health and Sport Sciences",
      },
      {
        id: "sp-hum",
        title: "Fakultet for humaniora og pedagogikk",
        titleEn: "Faculty of Humanities and Education",
        positions: "1., 2. og 3. vararepresentant",
        positionsEn: "1st, 2nd, and 3rd substitute representative",
        organization: "Studentparlamentet",
        organizationEn: "The Student Parliament",
        infoUrl: "/studentparlamentet",
        infoUrlLabel: "Om Studentparlamentet",
        infoUrlLabelEn: "About the Student Parliament",
        eligibility: "Studenter registrert ved Fakultet for humaniora og pedagogikk",
        eligibilityEn: "Students registered at the Faculty of Humanities and Education",
      },
      {
        id: "sp-laerer",
        title: "Avdeling for lærerutdanningene",
        titleEn: "Department for Teacher Education",
        positions: "3. og 4. vararepresentant",
        positionsEn: "3rd and 4th substitute representative",
        organization: "Studentparlamentet",
        organizationEn: "The Student Parliament",
        infoUrl: "/studentparlamentet",
        infoUrlLabel: "Om Studentparlamentet",
        infoUrlLabelEn: "About the Student Parliament",
        eligibility: "Studenter registrert ved Avdeling for lærerutdanningene",
        eligibilityEn: "Students registered at the Department for Teacher Education",
      },
    ],
  },
  {
    category: "UiA sine utvalg",
    categoryEn: "UiA Committees",
    items: [
      {
        id: "vac-lmu",
        title: "Læringsmiljøutvalget til UiA (LMU)",
        titleEn: "UiA's Learning environment committee (LMU)",
        positions: "4., 5. og 6. vararepresentant (mann og kvinne / kjønnskvotering)",
        positionsEn: "4th, 5th, and 6th substitute representative (gender balance applies)",
        organization: "Universitetet i Agder (UiA)",
        organizationEn: "University of Agder (UiA)",
        infoUrl: "https://www.uia.no/om-uia/styrer-og-utvalg/leringsmiljoutvalget.html",
        infoUrlLabel: "Offisiell UiA-side for Læringsmiljøutvalget (LMU)",
        infoUrlLabelEn: "Official UiA Learning Environment Committee (LMU) page",
        eligibility: "Alle semesterregistrerte studenter ved UiA",
        eligibilityEn: "All semester-registered students at UiA",
      },
      {
        id: "vac-prisutvalget",
        title: "Prisutvalget – Utdanningsprisen ved UiA",
        titleEn: "UiA's Award committee (Education award at UiA)",
        positions: "1. og 2. vararepresentant",
        positionsEn: "1st and 2nd substitute representative",
        organization: "Universitetet i Agder (UiA)",
        organizationEn: "University of Agder (UiA)",
        infoUrl: "https://www.uia.no/om-uia/styrer-og-utvalg/",
        infoUrlLabel: "Offisiell UiA-side for styrer og utvalg",
        infoUrlLabelEn: "Official UiA Boards and Committees page",
        eligibility: "Alle semesterregistrerte studenter ved UiA",
        eligibilityEn: "All semester-registered students at UiA",
      },
    ],
  },
  {
    category: "STA sine utvalg",
    categoryEn: "STA Committees",
    items: [
      {
        id: "vac-miljo",
        title: "Bærekraft- og miljøpolitisk utvalg",
        titleEn: "Sustainability and environmental committee",
        positions: "3 faste plasser",
        positionsEn: "3 regular member positions",
        organization: "Studentorganisasjonen i Agder (STA)",
        organizationEn: "The Student Organization of Agder (STA)",
        infoUrl: "/dokumenter",
        infoUrlLabel: "STAs politiske dokumenter og vedtekter",
        infoUrlLabelEn: "STA Political documents and regulations",
        eligibility: "Alle semesterregistrerte studenter ved UiA",
        eligibilityEn: "All semester-registered students at UiA",
      },
      {
        id: "vac-valgkomite",
        title: "Valgkomité",
        titleEn: "Election committee",
        positions: "1 fast plass",
        positionsEn: "1 regular member position",
        organization: "Studentorganisasjonen i Agder (STA)",
        organizationEn: "The Student Organization of Agder (STA)",
        infoUrl: "/valgkomiteen",
        infoUrlLabel: "Offisiell informasjon om Valgkomiteen",
        infoUrlLabelEn: "Official information about the Election Committee",
        eligibility: "Alle semesterregistrerte studenter ved UiA",
        eligibilityEn: "All semester-registered students at UiA",
      },
    ],
  },
  {
    category: "Andre utvalg",
    categoryEn: "Other Committees",
    items: [
      {
        id: "vac-vt",
        title: "Velferdstinget i Agder (VT)",
        titleEn: "The Welfare Council in Agder (VT)",
        positions: "4., 5. og 6. vararepresentant",
        positionsEn: "4th, 5th, and 6th substitute representative",
        organization: "Velferdstinget i Agder (VT)",
        organizationEn: "The Welfare Council in Agder (VT)",
        infoUrl: "https://www.sia.no/om-sia/studentdemokratiet/",
        infoUrlLabel: "Offisiell informasjon (SiA / Velferdstinget)",
        infoUrlLabelEn: "Official information (SiA / Welfare Council)",
        eligibility: "Alle semesterregistrerte studenter i Agder",
        eligibilityEn: "All semester-registered students in Agder",
      },
      {
        id: "vac-sig",
        title: "Studentutvalget i Grimstad (SIG)",
        titleEn: "Grimstad Student Council (SIG)",
        positions: "1 vararepresentant",
        positionsEn: "1 substitute representative",
        organization: "Grimstad kommune / STA",
        organizationEn: "Grimstad Municipality / STA",
        infoUrl: "https://www.grimstad.kommune.no/",
        infoUrlLabel: "Grimstad kommune",
        infoUrlLabelEn: "Grimstad Municipality",
        eligibility: "Studenter tilknyttet Campus Grimstad",
        eligibilityEn: "Students affiliated with Campus Grimstad",
      },
    ],
  },
];
