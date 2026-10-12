# Studentorganisasjonen i Agder (STA) – Nettsted

En moderne gjenskaping av [stastudent.no](https://stastudent.no/) bygget med **Next.js App Router**, **React 18**, **TypeScript (Strict Mode)**, og **Tailwind CSS**.

---

## Prosjektstruktur

```
stastudent/
├── public/                 # Statiske filer (vektorlogoer, favicon, manifest)
│   ├── images/
│   │   ├── logos/
│   │   └── partners/
│   └── site.webmanifest
├── src/
│   ├── app/                # Next.js App Router (sider, layouts, API-ruter)
│   │   ├── layout.tsx      # Rotlayout med Header og Footer
│   │   ├── page.tsx        # Forside
│   │   ├── not-found.tsx   # 404-side
│   │   ├── error.tsx       # Feilhåndtering
│   │   ├── loading.tsx     # Lasteskjerm
│   │   ├── sitemap.ts      # Dynamisk sitemap for SEO
│   │   ├── robots.ts       # Crawling-regler
│   │   ├── verv/           # Råd, styrer og utvalg (RSU)
│   │   │   └── ledige/     # Ledige verv
│   │   ├── dokumenter/     # Dokumentarkiv (vedtekter, protokoller osv.)
│   │   ├── tillitsvalgt/   # Ressursside for tillitsvalgte
│   │   ├── om-oss/         # Om STA
│   │   │   ├── sta-styret/ # STA-Styret (medlemmer og roller)
│   │   │   ├── studentparlamentet/ # Studentparlamentet
│   │   │   ├── linjeforeninger/    # Linjeforeninger (Krs & Grimstad)
│   │   │   ├── studentaktiviteter/ # Foreninger og studentaktiviteter
│   │   │   ├── lokaler/    # Booking og info om lokaler
│   │   │   └── hederspris/ # Irene Bredals Hederspris
│   │   ├── nyheter/        # Nyhetsarkiv
│   │   │   └── [slug]/     # Enkeltartikkel
│   │   ├── sok/            # Søkeside
│   │   ├── personvern/     # Personvernserklæring
│   │   ├── trygg-organisasjon/ # Varsling og etiske retningslinjer
│   │   └── api/            # API-endepunkter (/search, /news)
│   ├── components/         # Delte React-komponenter
│   │   ├── layout/         # Header, Footer, MobileNav, LanguageSwitcher
│   │   ├── shared/         # Button, Card, Container, SectionHeading, Badge, SearchModal
│   │   ├── home/           # Forsidespesifikke komponenter (Hero, Verv, QuickNav, Partnere)
│   │   ├── news/           # Nyhetskort og filtre
│   │   └── documents/      # Dokumentlister og nedlastingslenker
│   ├── content/            # Strukturerte data og innholdskilder
│   │   ├── navigation.ts   # Menyer og navigasjonsstruktur
│   │   ├── news.ts         # Eksempelnyheter
│   │   ├── board-members.ts# Styremedlemmer
│   │   ├── associations.ts # Linjeforeninger
│   │   └── documents.ts    # Dokumentarkiv-data
│   ├── lib/                # Hjelpefunksjoner og konstanter
│   │   ├── utils.ts        # cn helper (tailwind-merge / clsx)
│   │   ├── date.ts         # Norsk datoformatering
│   │   └── constants.ts    # Metadata, adresser, kontaktinfo, partnere
│   ├── types/              # TypeScript-definisjoner (strict)
│   │   ├── navigation.ts
│   │   ├── news.ts
│   │   ├── organization.ts
│   │   ├── document.ts
│   │   └── index.ts
│   ├── styles/             # Globale stiler
│   │   └── globals.css     # Tailwind direktiver og designtokens
│   └── __tests__/          # Enhetstester og komponenttester
│       ├── setup.ts
│       ├── utils.test.ts
│       ├── Header.test.tsx
│       └── HomePage.test.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── vitest.config.ts
└── .eslintrc.json
```

---

## Fargepalett (STA Branding)

- **Primærfarge (Mørk Petrol/Teal):** `#0E4C47`
- **Aksentfarge (STA Oransje):** `#EF7330`
- **Kontrast og flater:** `#FFFFFF`, dype tealfarger og transparente glasslag

---

## Utvikling og kommandoer

Når du er klar til å installere avhengigheter og bygge:

```bash
# Installer pakker
npm install

# Start utviklingsserver
npm run dev

# Kjør typesjekk
npm run type-check

# Kjør tester
npm run test

# Bygg for produksjon
npm run build
```
