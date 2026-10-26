# stastudent.no – prosjektmappe

Dette er prosjektmappen for nettsiden til **Studentorganisasjonen i Agder (STA)**, [stastudent.no](https://stastudent.no).

---

## Skal du endre noe på nettsiden?

**Da er du på feil sted – og det er helt greit.** Du trenger ikke denne mappen eller noe kode for å endre nettsiden. Alt gjøres i nettleseren.

👉 **Les brukerveiledningen:** [Brukerveiledning for stastudent.no](https://github.com/FelixKnutsen/stastudentphp#readme)

Der står det steg for steg, med lenker, hvordan du:

- logger inn og gir nye styremedlemmer tilgang
- endrer tekst og bilder på sidene
- skriver nyheter
- legger ut sakspapirer, protokoller og resolusjoner
- oppdaterer STA-styret, Studentparlamentet og ledige verv
- oversetter til nynorsk og engelsk
- tar sikkerhetskopi og angrer endringer

**Snarveier:**

| Jeg vil … | Gå hit |
|---|---|
| Logge inn på nettsiden | [stastudent.no/wp-admin](https://stastudent.no/wp-admin) |
| Endre en side | [Alle sider](https://stastudent.no/wp-admin/edit.php?post_type=page) → **Rediger med Elementor** |
| Skrive en nyhet | [Nytt innlegg](https://stastudent.no/wp-admin/post-new.php) |
| Bruke testsiden | [stastudent.no/reliant/wp-admin](https://stastudent.no/reliant/wp-admin) |

---

## Hva ligger i denne mappen?

| Mappe / fil | Hva det er | Trenger redaktører den? |
|---|---|---|
| `sta-wordpress/` | **Selve nettsiden:** WordPress-temaet, STA Core Plugin, verktøy og brukerveiledningen. Eget Git-repo: [FelixKnutsen/stastudentphp](https://github.com/FelixKnutsen/stastudentphp). | Nei – bruk veiledningen |
| `SITE_COMPLETENESS_AUDIT.md` | Sjekkliste over alle sider: hva som er kontrollert, rettet og hva som gjenstår (innhold, tilgjengelighet, språk). | Kan være nyttig å lese |
| `SITE_RESTORATION_PROGRESS.md` | Historikk over hvordan sidene ble bygget opp i Elementor. | Nei |
| `src/`, `public/`, `tests/` m.m. | En tidligere prøveversjon av nettsiden laget i Next.js (designskisse). Brukes ikke av stastudent.no. | Nei |
| `scratch/`, `scripts/`, `*.js` i roten | Arbeidsfiler og hjelpeskript fra utviklingen. | Nei |

---
---

# Teknisk del

*For utviklere.*

## Oversikt
- **Nettsiden i drift** er WordPress med temaet `sta-theme` og innhold bygget i Elementor. Koden ligger i `sta-wordpress/` (eget repo, [stastudentphp](https://github.com/FelixKnutsen/stastudentphp)). Teknisk beskrivelse, publisering av tema og språkoppsett står i [Del 2 av brukerveiledningen](https://github.com/FelixKnutsen/stastudentphp#del-2--teknisk-del).
- **Testside:** [stastudent.no/reliant](https://stastudent.no/reliant) (WP STAGING, krever innlogging).
- **Designreferanse:** [stastudentphp.vercel.app](https://stastudentphp.vercel.app/) – statisk eksport av temaets PHP-maler, brukt som fasit for designet da sidene ble bygget i Elementor.

## Next.js-prototypen (rotmappen)
En tidlig gjenskaping av stastudent.no i **Next.js 14 (App Router)**, **React 18**, **TypeScript (strict)** og **Tailwind CSS**. Den er ikke koblet til nettsiden og brukes bare som referanse.

```text
src/app/          Sider (App Router): forside, verv, dokumenter, tillitsvalgt, om-oss/*, nyheter, sok, personvern, trygg-organisasjon
src/components/   Delte komponenter (layout, home, news, documents, shared)
src/content/      Eksempeldata (navigasjon, nyheter, styret, foreninger, dokumenter)
src/lib/          Hjelpefunksjoner og konstanter
src/__tests__/    Vitest-tester
tests/            Playwright-tester
```

Kommandoer:
```bash
npm install          # installer pakker
npm run dev          # utviklingsserver
npm run type-check   # typesjekk
npm run test         # Vitest
npm run build        # produksjonsbygg
```

## Fargepalett
Samme fargevariabler som i WordPress-temaet. Se tabellen i [Del 2 av brukerveiledningen](https://github.com/FelixKnutsen/stastudentphp#tilgjengelighet-og-farger). Merk: STA-oransje `#EF7330` brukes bare til ikoner og pynt. Tekst og knapper bruker mørkere/lysere varianter for å oppfylle kontrastkravene (WCAG 2.2 AA).
