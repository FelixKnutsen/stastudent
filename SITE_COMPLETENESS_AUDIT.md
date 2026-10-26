# Site completeness audit – stastudent.no vs WordPress test site

Official (content reference): https://stastudent.no/ · Design reference: https://stastudentphp.vercel.app/ · Test site: https://stastudent.no/reliant/ (staging, login required). Rollback tag: `pre-completeness-audit` (both repos). Related: `SITE_RESTORATION_PROGRESS.md`.

## Method
- Inventory from Yoast sitemaps (`/sitemap_index.xml`): 19 pages + homepage, 228 post URLs (227 articles + "Siste nytt" listing), 8 categories, 38 tags; main menu, footer, `/en/` language version.
- Automated comparison per page (same-origin fetch of official vs staging): text passages (word coverage < 80 % = missing), links (normalised), documents, images, forms, iframes. Flagged items then checked manually against the official text.
- Fixes made in the Elementor editor (native widgets, saved via Elementor) or in the theme (shared header/footer), then re-verified on the frontend.

## Inventory and status
| Official page | WP (staging) | Finding | Sev. | Status |
|---|---|---|---|---|
| / (home) | 11503 | Partner logos/names not linked (official links student.no, uia.no, sia.no, saih.no/no); 3 latest news identical | Medium | **Fixed** (links on logo + name widgets; layout metrics unchanged) |
| /sta-styret/ | 30 | All people, roles, e-mails, phones present | – | Complete |
| /studentparlamentet/ | 161 | Representatives all present (reformatted); "Sakspapirer" and "Protokoll" cards pointed to Dokumenter | High | **Fixed** (link to the two archive pages) |
| /ledige-verv/ | 13129 | All vacancies present; "per 21. september 2026" date missing | Low | **Fixed** |
| /rad-styrer-og-utvalg/ | 325 | 18 official descriptions (~16k chars) missing; Forthem Student Council, Internasjonalt utvalg, Kommunikasjonsutvalget, Museumsrådet, "Utvalgene i UiA" absent | High | **Fixed**: native Toggle section "Les mer om vervene" with official text in 4 groups; links (lovdata, forthem, uia.no, Dokumenter) kept |
| /dokumenter/ | 163 | No link to Resolusjoner subpage; mobile overflow from long heading | Medium | **Fixed** (button "Se alle resolusjoner"; mobile flex shrink) |
| /dokumenter/resolusjoner/ | 6450 | Content complete; no page title | Medium | **Fixed** (native hero) |
| /dokumenter/sakspapirer/ | 6443 | Content complete (71 items); no title; legacy widget 157 % wide → mobile overflow | Medium | **Fixed** (hero; width reset) |
| /dokumenter/referat-fra-moter-i-studentparlamentet/ | 6445 | Content complete (83 items); no title | Medium | **Fixed** (hero) |
| /for-tillitsvalgte/ | 127 | Missing sections: studieprogram / UiA (+ uia.no link) / STA; "Verktøy…" heading. Tools present. 2 decorative photos absent | High | **Fixed** (3 cards + heading, official text); photos not added (redesign has no photo slots) |
| /lokaler/ | 8218 | Gallery had 7/9 Alibiet photos; two booking rules missing | Medium | **Fixed** (9 photos, slider tested; rules added) |
| /irene-bredals-hederspris/ | 16160 | Official quote, "2024/2025" label and previous-recipients image missing | Medium | **Fixed** |
| /trygg-organisasjon/ | 13219 | Intro/background paragraphs and full "Varslingsrutiner" (incl. Advokatfirma Tofte AS) missing | High | **Fixed** (official text; new card) |
| /personvernserklaering/ | 3 | Redesign text lacked: second website stavalgomaten.no, embedded content, Koko local storage, Solid Security details, SolidWP scanner | High | **Fixed** (sections 1–6, official wording, links) |
| /linjeforeninger/, /studentaktiviteter/ | 6302/6304 | Directory from post types; filter works; card data differs slightly from reference fixtures | Low | Complete (data managed in WP Admin) |
| /prinsipprogram/ | 14055 | **Discrepancy**: official presents 2023 programme as current; staging (earlier work) says STA has no programme and marks it historical | – | **Owner decision needed** (not changed) |
| /valgkomiteen/, /om-oss-2/ | 14071/13186 | Content complete | – | Complete |
| News (227 posts) | posts | All slugs exist; sample of 6 articles: body text complete; official author line + recent-posts sidebar not in redesigned template | Low | Complete (design difference) |
| Categories (8) | archives | Not individually compared | – | Not verified |
| Header menu | theme | Official "Om Oss" opens /om-oss-2/; staging had only a dropdown | Medium | **Fixed** ("Om oss" first item, desktop + mobile) |
| Footer | theme | Twitter/X link missing; contact/org nr/addresses match | Low | **Fixed** |
| Search | theme | `?s=` returns results (20 for "studentvalget") | – | Verified |
| English (/en/) | theme + TranslatePress | Official has TranslatePress translations for much page content (e.g. For tillitsvalgte 85 %, Personvern 87 %, Lokaler 72 % of words). Staging translates only theme header/footer; all Elementor content stays Norwegian | High | **Open** – needs a translation pass (TranslatePress) on the new strings |
| Forms | – | No forms on official pages (only search) | – | n/a |
| Documents | – | 167 document links on staging pages, all resolve | – | Verified |

## Verification
- Every edit saved through Elementor; frontend checked (content, links, toggles, slider: thumbnail 8 → "Kjøkkenet i kontorlokalet 8 / 9", next → "9 / 9").
- All edited pages render with their Elementor CSS; homepage and STA-styret/Studentparlamentet layout metrics unchanged vs. reference.
- Mobile 390 px: no horizontal overflow on any page (logged-in admin bar excluded).
- Theme v1.3.6 deployed (Om oss menu item, X link, mobile heading wrap).

## Remaining / next steps
1. English content: translate new Elementor strings in TranslatePress (reuse official translations where wording matches).
2. Prinsipprogram: decide which status is correct (official = current programme; staging = historical).
3. Category archives and remaining 221 articles: only sampled.
4. For tillitsvalgte decorative photos (IMG_6733, IMG_6677): add if wanted.

## English translation
- Theme v1.3.7 (deployed): `inc/translatepress-bridge.php` lets TranslatePress translate page content when the theme language is English (`?lang=en`); admin-only REST `POST /?rest_route=/sta/v1/translations` (modes `maxid`, `recent`, `list`, `save`). Existing official dictionary translations apply automatically (e.g. "Lokaler" → "Our premises"). Translations can also be edited in TranslatePress' own editor.
- Saved as human-reviewed: ~640 strings (page text on all 19 pages, toggle descriptions, Sakspapirer/Protokoller/Resolusjoner link lists, Prinsipprogram, Valgkomiteen, directory categories/cards/link labels). Terminology follows the official /en/ site.
- Verified (fetch of every page with `?lang=en`): no Norwegian body text left except organisation/person names (kept as names). Norwegian pages unchanged (`lang=nb-NO`). Screenshots: For tillitsvalgte, Råd, styrer og utvalg.
- Open:
  - Theme v1.3.8 deployed: the theme honours TranslatePress' URL language, so links rewritten to `/reliant/en/…` stay English. Verified: all 126 internal links on the 19 English pages open existing English pages (e.g. "See vacant positions now" → "Vacant positions 2026/2027"); Norwegian pages and their links stay Norwegian.
  - Browser-tab `<title>` stays Norwegian (dictionary entries saved, TranslatePress doesn't apply them to the title tag).
  - News articles and their excerpts on the homepage are not translated (out of scope; official EN mostly untranslated too).

## Follow-up changes (2026-10-26)
- **Råd, styrer og utvalg (325):** groups are 3-column grids (2 tablet, 1 mobile) at full content width with equal-height boxes. The separate "Les mer om vervene" section is removed; each box now has its own "Les mer" Toggle with the official description. Groups follow the official site: STA-verv (7, incl. new Forthem Student Council box), STAs politiske utvalg (4, new Internasjonalt utvalg), new STAs organisatoriske utvalg (Valgkomité, Kommunikasjonsutvalget, Kontrollkomité), Universitetsorganer (10: LMU/Utdanningsutvalget get their sections of "Utvalgene i UiA"; new boxes LIU, Forsknings- og innovasjonsutvalget, Ansettelsesutvalget, Museumsrådet). Studentparlamentet and Kontrollkomité have no official description, so no "Les mer". English translations added for all new text.
- **Lokaler (8218):** venue name + campus label centred on one line (Alibiet · Campus Kristiansand, Bluebox · Campus Grimstad); wraps centred on phones.
- **Irene Bredals hederspris (16160):** recipient photo was broken (`DSC04179-scaled.jpg` missing on staging and production) → media #16175 `Irene-smiler-1-1` (2025 award photo); "2024/2025" badge no longer wraps; earlier-winners poster limited to 420px.
- Verified: frontend at 1280/900/390 px (no overflow, 3/2/1 columns, toggles open), English headings translated.

- **Homepage partners:** added Velferdstinget i Agder (logo from vt-agder.no uploaded as media #17702, links to https://vt-agder.no/). Theme v1.3.10: partner grid auto-fits (5 in one row on desktop, 2 tablet, 1 phone); footer social link shortened to "X".
- **Theme v1.3.11–1.3.12:** TranslatePress markers (`<trp-post-container …>` in "Siste nytt" titles, `#!trpst#trp-gettext …` in the admin bar) leaked onto Norwegian pages when TranslatePress' language was English but the theme's was Norwegian (e.g. `?lang=no`). The bridge now keeps TranslatePress on its default language unless the theme language is English. Verified: 0 markers on Norwegian pages, English pages still translated. Partner cards: logo–name gap reduced from ~59px to 13px.
- **Om oss / "Hvem er STA?" (13186):** rebuilt as a native Elementor page (Elementor Full Width) in the redesign style; was legacy rendering with black underlined headings on the dark background, mismatched heading sizes and a small photo beside the text. Same official text; layout: hero, photo + text card, contact callout (mailto sta@uia.no), "Studentdemokratiet" cards linking to STA-styret / Studentparlamentet / Valgkomiteen, "Utvalg" cards (names as on Råd, styrer og utvalg) + button to that page, "Her finner du oss" with campus addresses and the same OpenStreetMap maps. Links use `?page_id=` because staging has pretty permalinks off (`/reliant/<slug>/` opens the homepage there). English: 10 new strings saved (official wording reused). Verified 1280/820/390 px, no overflow, links open the right pages in NB and EN. Previous layout: Elementor revisions + `localStorage['sta_backup_13186']`.
- **Back link on every page (theme v1.3.13–1.3.14):** "← Tilbake" / "← Back" under the header on all pages except the homepage (`header.php`, CSS in `main.css`, click handler in `navigation.js`). With a previous page on this site it acts like the browser's back button; otherwise it opens a fallback (`sta_back_link_fallback()` in `functions.php`): news articles → news list, Valgkomiteen → Råd, styrer og utvalg, Prinsipprogram/Sakspapirer/Protokoller → Dokumenter, child pages → parent, else homepage. The older one-off back links were removed so no page shows two: news template (`single.php`), and the heading links on Valgkomiteen (14071) and Prinsipprogram (14055) in Elementor (revisions kept). Verified: click test Om oss → STA-styret → Tilbake returns to Om oss; fallbacks for 6 page types; NB/EN labels; 375 px (44 px tap target, no overflow).
