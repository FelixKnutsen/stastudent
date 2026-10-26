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

## Final QA before presentation (2026-10-26, theme v1.3.15–1.3.20)

Status key: **Pass** = tested and works · **Fixed** = defect found and corrected, then retested · **Partial** = inspected, not fully testable · **Open** = needs STA decision/info.

### Page checklist (19 public pages + news; NB and EN fetched)
| Page | ID | Load | Content/facts | Headings | Links | Contrast | 375/820/1280 | Notes |
|---|---|---|---|---|---|---|---|---|
| Forside | 11503 | Pass | News = official (latest 13.04.2026) | **Fixed** (no H1 → hidden H1; nested `<main>` removed) | **Fixed** (5 logo links had no name → alt text) | **Fixed** | Pass | Hero alt text added |
| STA-styret | 30 | Pass | Names/emails/phones = official | **Fixed** (H3/H4 jumps) | Pass | **Fixed** | Pass | |
| Studentparlamentet | 161 | Pass | 25 reps = official; staleder@uia.no verified on official | **Fixed** | Pass | **Fixed** | Pass | |
| Ledige verv | 13129 | Pass | "per 21. september 2026" = official | Pass | Pass | **Fixed** | Pass | **Open**: STA to confirm list still current |
| Råd, styrer og utvalg (Verv) | 325 | Pass | Studentparlamentet card: **added** explanation + "Les mer om Studentparlamentet →" (→ page 161, click-tested) | Pass | Pass | **Fixed** | Pass | EN translation added |
| Dokumenter | 163 | Pass | – | Pass | Pass | **Fixed** | Pass | |
| Sakspapirer | 6443 | Pass | – | **Fixed** (5 year H1 → H2) | **Fixed** (9 attachment-page links → direct PDF/DOC) | **Fixed** | Pass | |
| Protokoller | 6445 | Pass | – | **Fixed** (2 H1 → H2) | **Fixed** (4 empty links removed) | **Fixed** | Pass | |
| Resolusjoner | 6450 | Pass | – | Pass | Pass | **Fixed** | Pass | |
| For tillitsvalgte | 127 | Pass | – | **Fixed** | Pass | **Fixed** | Pass | |
| Lokaler | 8218 | Pass | – | Pass | Pass | **Fixed** | Pass | Slider tested (next → 2/9) |
| Linjeforeninger / Studentaktiviteter | 6302/6304 | Pass | Directory data from WP admin | Pass | Pass | **Fixed** | Pass | Filter: `aria-pressed`, live count, labelled search |
| Irene Bredals hederspris | 16160 | Pass | – | Pass | Pass | **Fixed** | Pass | |
| Trygg organisasjon | 13219 | Pass | – | Pass | Pass | **Fixed** | Pass | |
| Personvernerklæring | 3 | Pass | – | Pass | Pass | **Fixed** | **Fixed** (820 px overflow) | |
| Om oss | 13186 | Pass | – | Pass | Pass | **Fixed** | Pass | Restored after accidental overwrite (see below) |
| Valgkomiteen / Prinsipprogram | 14071/14055 | Pass | Members = official | Pass | Pass | **Fixed** | Pass | **Open**: Prinsipprogram status (see earlier) |
| Siste nytt / news archive | 16, category | Pass | = official | **Fixed** (card titles H3 → H2) | Pass | Pass | Pass | |
| Placeholders Forside/Om STA/Engasjer deg/For foreninger | 17376–17379 | Pass | Title-only/thin | – | Not linked anywhere | – | – | **Open**: STA decide (draft or fill) |

### Fixes made
- **Contrast (WCAG 1.4.3):** orange fills behind white text `#EF7330` → `#C44F14` (4.7:1); orange text on teal → `#FFAB78`; muted teal text `#69B3AB` → `#9ED2CC`; active nav text `#FFC39C`. Applied in theme CSS/PHP (tokens `--sta-orange-bg`, `--sta-orange-text`) and in Elementor settings on all 19 pages (`tools/elementor-converter/a11y_colors.js`). Icons/borders keep the brand orange. Own contrast scan (all text nodes, 19 pages): 0 failures.
- **Focus/keyboard:** focus ring uses light orange (visible on cards); dropdown tested with keyboard (Enter opens, Tab into items, Escape closes and returns focus); skip link visible on first Tab; ARIA `menu` roles removed (disclosure pattern, no arrow-key promise); filter rows `role="group"`.
- **Semantics:** single `<main>`, one H1 per page, no heading jumps on any page (NB+EN), no nameless links, all images have `alt`, search fields labelled, decorative footer bullets `aria-hidden`.
- **Reduced motion:** `prefers-reduced-motion` disables transitions/hover lifts.
- **Staging links:** pretty links `/reliant/<slug>/` opened the homepage (permalinks off on staging). Theme request filter now resolves them (also after language switch); no effect when pretty permalinks are on.
- **SEO:** meta description fallback from page text when Yoast has none (all pages now have one). Staging is noindex (expected for staging).
- **Footer:** X/Twitter link removed (STA no longer uses it).

### Tests
- Crawl of 20 pages × NB/EN: all 200, no PHP warnings, no TranslatePress markers; 209 internal links → 0 broken; 112 images → 0 broken.
- Console: no JS errors on Forside, Lokaler, Linjeforeninger.
- Responsive: 375 / 820 / 1280 px on all pages: no horizontal overflow (admin bar excluded), no tap targets under 24 px.
- Elementor UI round trip on Om oss: click heading → Edit Heading panel → edit title → Publish → frontend shows edit → editor reload keeps it → reverted. Programmatic saves on all 19 pages via the editor kept revisions.

### Incident
- An Elementor background save meant for STA-styret was written to the open Om oss document (content + page layout). Restored the same session from the backup taken just before (`localStorage['sta_backup_a11y_13186']`) and re-set Elementor Full Width; verified frontend. Pre-change backups of all 19 pages are in staging-origin `localStorage['sta_backup_a11y_<id>']`, plus Elementor revisions.

### Not done / limits
- Automated WCAG engine (axe) could not be run (blocked by tool policy); checks above are own scripts + manual keyboard tests. No screen-reader (NVDA/VoiceOver) session, no zoom-to-400 % test, PDFs not checked for accessibility (≈170 documents; separate remediation). Not a formal WCAG 2.2 AA conformance claim.
- Forms: none on the site except search; nothing submitted.
- **Open for STA:** confirm Ledige verv list (per 21.09.2026); Prinsipprogram status; placeholder pages 17376–17379; production must not inherit staging's noindex.

## Languages, Prinsipprogram and guide (2026-10-26, theme v1.3.21)
- **Prinsipprogram** (14055): historical → set to draft (content kept, not public); removed from the theme's page seeding and the fallback Dokumenter list. No other page linked to it.
- **Nynorsk:** TranslatePress free supports one extra language (English), so the theme now has its own Nynorsk dictionary (`inc/nynorsk.php`, option `sta_nn_translations`), edited under **Innstillinger → Nynorsk-tekst** (scan pages for new text, edit, export/import JSON). 647 page texts translated to Nynorsk; the rest are names/titles identical in both. Check: every text >25 characters that is identical on NB and NN pages is a name, address, document title or a news teaser.
- **English:** same check, NB vs EN: only names, addresses and news teasers identical. Fixed 3 RSU paragraphs whose TranslatePress keys contained `&nbsp;`.
- **Bokmål proofreading (RSU):** intiativtakende → initiativtakende, velferdsrettighetert → velferdsrettigheter, ".ontrollere" → kontrollere, Nemd/Nemda/klagenemd → Nemnd/Nemnda/klagenemnd, Skikkethetsnemda → Skikkethetsnemnda, Mangfoldpolitisk → Mangfoldspolitisk. English and Nynorsk translations carried over.
- **Lokaler gallery:** captions now follow the page language (read from the translated thumbnail labels).
- News articles stay Bokmål (by design).
- Verified: 23 pages × NB/NN/EN = 69 responses 200, no PHP warnings, no TranslatePress markers.
- **Guide:** `sta-wordpress/README.md` rewritten as the editor/developer guide (Norwegian): how the site works, editing in Elementor, adding/removing content, news, directories, documents, languages, cache, backups, accessibility rules, theme deployment, troubleshooting.
