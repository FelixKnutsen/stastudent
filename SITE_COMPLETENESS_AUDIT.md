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

## English translation (in progress – usage limit reached)
- Theme v1.3.7 (deployed): `inc/translatepress-bridge.php` lets TranslatePress translate page content when the theme language is English (`?lang=en`); admin-only REST `POST /?rest_route=/sta/v1/translations` (modes `maxid`, `recent`, `list`, `save`). Existing official dictionary translations apply automatically (e.g. "Lokaler" → "Our premises").
- 694 strings registered by visiting 19 pages in English (dictionary ids 14721–15414, table en_GB). Saved as human-reviewed: 271 (ids 14747–15063: Lokaler, RSU incl. toggles, homepage, STA-styret, Studentparlamentet, Ledige verv, Dokumenter, For tillitsvalgte, Irene Bredals, Trygg organisasjon, Personvern).
- Remaining: ids 15064–15414 (directory card texts from post types, link labels, remaining page strings) – list with `{mode:'recent', after_id:15063}`, translate, save with `mode:'save'`. Then verify each page with `?lang=en` and reset with `?lang=no`. Not yet verified visually in English.
