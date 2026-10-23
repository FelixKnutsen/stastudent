// scratch/build_elementor_subpages_batch3.js
// Generates clean, native Elementor JSON container/widget structures for Batch 3:
// 1. Ledige verv (Post 13129, slug: ledige-verv)
// 2. Lokaler (Post 8218, slug: lokaler)
// 3. For tillitsvalgte (Post 127, slug: for-tillitsvalgte)
// 4. Trygg Organisasjon (Post 13219, slug: trygg-organisasjon)
// 5. Irene Bredals Hederspris (Post 16160, slug: irene-bredals-hederspris)

const fs = require('fs');
const path = require('path');

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

function setClasses(settings, classes) {
    settings.css_classes = classes;
    settings._css_classes = classes;
    return settings;
}

// =====================================================================
// 1. LEDIGE VERV (Post 13129)
// =====================================================================
function buildLedigeVervData() {
    const vacanciesRaw = JSON.parse(fs.readFileSync('sta-wordpress/sta-theme/data/vacancies.json', 'utf8'));

    const categorySections = vacanciesRaw.map(group => {
        const itemCards = (group.items || []).map(item => {
            const eligibilityHtml = item.eligibility ? `
                <p style="font-size:0.75rem; color:var(--sta-teal-300); font-style:italic; margin:0 0 1rem 0; line-height:1.4;">
                    <strong style="color:var(--sta-teal-200);">Kvalifikasjonskrav:</strong> ${item.eligibility}
                </p>` : '';

            const linkHtml = item.infoUrl ? `
                <div style="margin-top:auto; padding-top:0.75rem; border-top:1px solid rgba(158,207,201,0.2);">
                    <a href="${item.infoUrl.startsWith('http') ? item.infoUrl : 'https://stastudent.no/reliant/?sta_page=' + item.infoUrl.replace(/^\//, '')}" 
                       target="${item.infoUrl.startsWith('http') ? '_blank' : '_self'}"
                       style="display:inline-flex; align-items:center; gap:0.35rem; font-size:0.8rem; font-weight:700; color:var(--sta-orange); text-decoration:none;">
                        <span>${item.infoUrlLabel || 'Offisiell informasjon'}</span>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </a>
                </div>` : '';

            return {
                id: 'vcard_' + generateId(),
                elType: 'container',
                settings: setClasses({
                    content_width: 'full',
                    flex_direction: 'column',
                    flex_justify_content: 'space-between',
                    padding: { unit: 'px', top: '22', right: '22', bottom: '22', left: '22', isLinked: true },
                    background_background: 'classic',
                    border_border: 'solid',
                    border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                    border_radius: { unit: 'px', top: '14', right: '14', bottom: '14', left: '14', isLinked: true },
                    css_classes: 'sta-card'
                }, 'sta-card'),
                elements: [
                    {
                        id: 'vcard_body_' + generateId(),
                        elType: 'widget',
                        widgetType: 'html',
                        settings: {
                            html: `
                            <div>
                                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.75rem; margin-bottom:0.5rem;">
                                    <h3 style="font-size:1.05rem; font-weight:700; color:#ffffff; line-height:1.35; margin:0;">
                                        ${item.title}
                                    </h3>
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="var(--sta-orange)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top:0.15rem;" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <p style="font-size:0.825rem; color:var(--sta-orange); font-weight:700; margin:0 0 0.5rem 0;">
                                    ${item.positions}
                                </p>
                                <div style="display:flex; align-items:center; gap:0.4rem; font-size:0.775rem; color:var(--sta-teal-200); margin-bottom:0.75rem;">
                                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.8;" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line><line x1="9" y1="6" x2="9" y2="6.01"></line><line x1="15" y1="6" x2="15" y2="6.01"></line><line x1="9" y1="10" x2="9" y2="10.01"></line><line x1="15" y1="10" x2="15" y2="10.01"></line><line x1="9" y1="14" x2="9" y2="14.01"></line><line x1="15" y1="14" x2="15" y2="14.01"></line><line x1="9" y1="18" x2="9" y2="18.01"></line><line x1="15" y1="18" x2="15" y2="18.01"></line></svg>
                                    <span>${item.organization}</span>
                                </div>
                                ${eligibilityHtml}
                            </div>
                            ${linkHtml}
                            `
                        },
                        elements: []
                    }
                ],
                isInner: true
            };
        });

        return {
            id: 'vcat_sec_' + generateId(),
            elType: 'container',
            settings: {
                content_width: 'full',
                flex_direction: 'column',
                margin: { unit: 'px', top: '0', right: '0', bottom: '40', left: '0', isLinked: false }
            },
            elements: [
                {
                    id: 'vcat_title_' + generateId(),
                    elType: 'widget',
                    widgetType: 'html',
                    settings: {
                        html: `<h2 style="font-size:1.45rem; font-weight:700; color:#fff; margin:0 0 1.25rem 0; padding-bottom:0.6rem; border-bottom:1px solid rgba(158,207,201,0.25);">${group.category}</h2>`
                    },
                    elements: []
                },
                {
                    id: 'vcat_grid_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_wrap: 'wrap',
                        flex_gap: { unit: 'px', column: '20', row: '20', isLinked: true }
                    }, 'sta-vacancies-grid'),
                    elements: itemCards,
                    isInner: true
                }
            ],
            isInner: true
        };
    });

    return [
        {
            id: 'sec_lv_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                width: { unit: 'px', size: 1200 },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '36', row: '36', isLinked: true },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false }
            }, 'sta-container'),
            elements: [
                // Header
                {
                    id: 'lv_header_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'lv_badge_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `<div style="text-align:center;"><span class="sta-badge" style="display:inline-block; padding:0.25rem 0.85rem; border-radius:9999px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; background:rgba(239,115,48,0.15); color:var(--sta-orange); border:1px solid rgba(239,115,48,0.3);">BLI ENGASJERT</span></div>`
                            },
                            elements: []
                        },
                        {
                            id: 'lv_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: {
                                title: 'Ledige verv 2026/2027',
                                header_size: 'h1',
                                align: 'center'
                            },
                            elements: []
                        },
                        {
                            id: 'lv_subtitle_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: {
                                editor: '<p style="max-width:800px; margin:0.5rem auto 0 auto; text-align:center; font-size:1.1rem; color:var(--sta-teal-100); line-height:1.6;">Er du interessert i å gjøre en endring på Universitetet i Agder? Da kan du sjekke om det fortsatt er ledige verv å søke på!</p>'
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Top CTA Box
                {
                    id: 'lv_top_cta_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center',
                        padding: { unit: 'px', top: '28', right: '28', bottom: '28', left: '28', isLinked: true },
                        background_background: 'classic',
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                        border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true }
                    }, 'sta-card'),
                    elements: [
                        {
                            id: 'lv_top_cta_content_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `
                                <div style="text-align:center; max-width:680px; margin:0 auto;">
                                    <p style="font-size:1rem; color:var(--sta-teal-100); line-height:1.6; margin:0 0 1.25rem 0;">
                                        Ønsker du å stille til et av vervene nedenfor? Send en e-post med en kort introduksjon om deg selv til:
                                    </p>
                                    <a href="mailto:sta@uia.no?subject=S%C3%B8knad%20p%C3%A5%20ledig%20verv" 
                                       class="sta-btn sta-btn-orange" 
                                       style="display:inline-flex; align-items:center; gap:0.6rem; padding:0.8rem 1.75rem; border-radius:9999px; background:var(--sta-orange); color:#ffffff; font-weight:700; text-decoration:none; font-size:1rem; box-shadow:0 4px 14px rgba(239,115,48,0.35);">
                                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        <span>Send søknad til sta@uia.no</span>
                                    </a>
                                </div>`
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Vacancy Categories
                ...categorySections,

                // Bottom CTA to RSU
                {
                    id: 'lv_bot_cta_' + generateId(),
                    elType: 'container',
                    settings: {
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center'
                    },
                    elements: [
                        {
                            id: 'lv_cta_btn_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Se alle råd, styrer og utvalg (RSU) →',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=rad-styrer-og-utvalg' },
                                button_background_color: '#ef7330',
                                css_classes: 'sta-btn sta-btn-orange'
                            }, 'sta-btn sta-btn-orange'),
                            elements: []
                        }
                    ],
                    isInner: true
                }
            ],
            isInner: false
        }
    ];
}

// =====================================================================
// 2. LOKALER (Post 8218)
// =====================================================================
function buildLokalerData() {
    return [
        {
            id: 'sec_lok_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                width: { unit: 'px', size: 1200 },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '48', row: '48', isLinked: true },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false }
            }, 'sta-container'),
            elements: [
                // Header
                {
                    id: 'lok_header_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'lok_badge_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `<div style="text-align:center;"><span class="sta-badge" style="display:inline-block; padding:0.25rem 0.85rem; border-radius:9999px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; background:rgba(239,115,48,0.15); color:var(--sta-orange); border:1px solid rgba(239,115,48,0.3);">STUDENTLOKALER</span></div>`
                            },
                            elements: []
                        },
                        {
                            id: 'lok_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: {
                                title: 'Lokaler',
                                header_size: 'h1',
                                align: 'center'
                            },
                            elements: []
                        },
                        {
                            id: 'lok_subtitle_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: {
                                editor: '<p style="max-width:800px; margin:0.5rem auto 0 auto; text-align:center; font-size:1.1rem; color:var(--sta-teal-100); line-height:1.6;">Alle studentaktiviteter og linjeforeninger som er medlem av STA kan booke Alibiet og Bluebox lokalene til STA.</p>'
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Venue 1: Alibiet (Campus Kristiansand)
                {
                    id: 'lok_alibiet_sec_' + generateId(),
                    elType: 'container',
                    settings: {
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                    },
                    elements: [
                        {
                            id: 'lok_alibiet_hdr_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `
                                <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
                                    <span class="sta-badge" style="background:rgba(239,115,48,0.2); color:var(--sta-orange); border:none; font-size:0.75rem; font-weight:800; padding:0.25rem 0.75rem; border-radius:9999px;">
                                        CAMPUS KRISTIANSAND
                                    </span>
                                    <h2 style="font-size:2rem; font-weight:800; color:#fff; margin:0;">Alibiet</h2>
                                </div>`
                            },
                            elements: []
                        },
                        {
                            id: 'lok_alibiet_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_gap: { unit: 'px', column: '28', row: '28', isLinked: true }
                            }, 'sta-venue-grid'),
                            elements: [
                                // Photo Gallery Showcase
                                {
                                    id: 'lok_alibiet_photos_' + generateId(),
                                    elType: 'container',
                                    settings: {
                                        content_width: 'full',
                                        width: { unit: '%', size: 58 },
                                        flex_direction: 'column',
                                        flex_gap: { unit: 'px', column: '12', row: '12', isLinked: true }
                                    },
                                    elements: [
                                        {
                                            id: 'lok_alibiet_main_img_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'html',
                                            settings: {
                                                html: `
                                                <div style="border-radius:14px; overflow:hidden; border:1px solid rgba(158,207,201,0.25); box-shadow:0 10px 25px rgba(0,0,0,0.4); position:relative; aspect-ratio:4/3; background:#072422;">
                                                    <img id="sta-alibiet-main-img" src="https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_092836179-768x576.jpg" alt="Utenfor Alibiet" style="width:100%; height:100%; object-fit:cover; display:block;">
                                                    <div style="position:absolute; bottom:0; left:0; right:0; padding:0.75rem 1rem; background:linear-gradient(transparent, rgba(5,26,24,0.9)); color:#fff; font-size:0.85rem; font-weight:600;">
                                                        Utenfor Alibiet
                                                    </div>
                                                </div>`
                                            },
                                            elements: []
                                        },
                                        {
                                            id: 'lok_alibiet_thumbs_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'html',
                                            settings: {
                                                html: `
                                                <div style="display:grid; grid-template-columns:repeat(6, 1fr); gap:8px;">
                                                    <img src="https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_093006806-768x576.jpg" alt="Inngang" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; border:1px solid rgba(158,207,201,0.25);">
                                                    <img src="https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_093021348.MP_-768x576.jpg" alt="Arrangementsareal" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; border:1px solid rgba(158,207,201,0.25);">
                                                    <img src="https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_093039894.MP_-768x576.jpg" alt="Kjøkken" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; border:1px solid rgba(158,207,201,0.25);">
                                                    <img src="https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_113150219-768x576.jpg" alt="Kontor" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; border:1px solid rgba(158,207,201,0.25);">
                                                    <img src="https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_113156984.MP_-768x576.jpg" alt="TV-krok" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; border:1px solid rgba(158,207,201,0.25);">
                                                    <img src="https://stastudent.no/wp-content/uploads/2022/08/PXL_20220819_113132165-768x576.jpg" alt="Møteplass" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; border:1px solid rgba(158,207,201,0.25);">
                                                </div>`
                                            },
                                            elements: []
                                        }
                                    ],
                                    isInner: true
                                },

                                // Details Card
                                {
                                    id: 'lok_alibiet_details_' + generateId(),
                                    elType: 'container',
                                    settings: setClasses({
                                        content_width: 'full',
                                        width: { unit: '%', size: 38 },
                                        flex_direction: 'column',
                                        padding: { unit: 'px', top: '24', right: '24', bottom: '24', left: '24', isLinked: true },
                                        background_background: 'classic',
                                        border_border: 'solid',
                                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                        border_radius: { unit: 'px', top: '14', right: '14', bottom: '14', left: '14', isLinked: true },
                                        css_classes: 'sta-card'
                                    }, 'sta-card'),
                                    elements: [
                                        {
                                            id: 'lok_alibiet_info_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'html',
                                            settings: {
                                                html: `
                                                <div>
                                                    <h3 style="font-size:1.35rem; font-weight:800; color:#fff; margin:0 0 0.75rem 0;">Om Alibiet</h3>
                                                    <p style="font-size:0.925rem; color:var(--sta-teal-100); line-height:1.6; margin:0 0 1.25rem 0;">
                                                        Alibiet er STAs arrangementslokale på Campus Kristiansand. Lokalet er tilgjengelig for alle medlemsforeninger og aktiviteter til møter, sosiale samlinger, filmkvelder og fester.
                                                    </p>
                                                    <div style="display:flex; flex-direction:column; gap:0.6rem; font-size:0.85rem; color:var(--sta-teal-100); margin-bottom:1.5rem; padding-bottom:1.25rem; border-bottom:1px solid rgba(158,207,201,0.2);">
                                                        <div style="display:flex; align-items:center; gap:0.5rem;">
                                                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--sta-orange)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                            <span><strong>Kapasitet:</strong> Sitteplasser til ca. 60 personer</span>
                                                        </div>
                                                        <div style="display:flex; align-items:center; gap:0.5rem;">
                                                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--sta-orange)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                                                            <span><strong>Fasiliteter:</strong> Fullt kjøkken, projektor, lydanlegg, TV</span>
                                                        </div>
                                                        <div style="display:flex; align-items:center; gap:0.5rem;">
                                                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--sta-orange)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                                            <span><strong>Adgang:</strong> Nøkkelkort via SiA Bolig</span>
                                                        </div>
                                                    </div>
                                                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                                                        <a href="mailto:sta@uia.no?subject=Booking%20av%20Alibiet" 
                                                           class="sta-btn sta-btn-orange" 
                                                           style="display:flex; align-items:center; justify-content:center; gap:0.5rem; padding:0.75rem 1.25rem; border-radius:9999px; background:var(--sta-orange); color:#ffffff; font-weight:700; text-decoration:none; font-size:0.9rem; text-align:center;">
                                                            <span>Book Alibiet via e-post →</span>
                                                        </a>
                                                        <a href="https://stastudent.no/wp-content/uploads/2023/04/Trivselsregler-Alibiet.pdf" 
                                                           target="_blank" 
                                                           rel="noopener noreferrer" 
                                                           style="display:flex; align-items:center; justify-content:center; gap:0.4rem; padding:0.6rem 1.25rem; border-radius:9999px; background:transparent; border:1px solid rgba(158,207,201,0.4); color:#ffffff; font-weight:600; text-decoration:none; font-size:0.85rem; text-align:center;">
                                                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                                            <span>Trivselsregler og retningslinjer (PDF)</span>
                                                        </a>
                                                    </div>
                                                </div>`
                                            },
                                            elements: []
                                        }
                                    ],
                                    isInner: true
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // Venue 2: Bluebox (Campus Grimstad)
                {
                    id: 'lok_bluebox_sec_' + generateId(),
                    elType: 'container',
                    settings: {
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                    },
                    elements: [
                        {
                            id: 'lok_bluebox_hdr_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `
                                <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
                                    <span class="sta-badge" style="background:rgba(239,115,48,0.2); color:var(--sta-orange); border:none; font-size:0.75rem; font-weight:800; padding:0.25rem 0.75rem; border-radius:9999px;">
                                        CAMPUS GRIMSTAD
                                    </span>
                                    <h2 style="font-size:2rem; font-weight:800; color:#fff; margin:0;">Bluebox</h2>
                                </div>`
                            },
                            elements: []
                        },
                        {
                            id: 'lok_bluebox_card_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                padding: { unit: 'px', top: '28', right: '28', bottom: '28', left: '28', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                                css_classes: 'sta-card'
                            }, 'sta-card'),
                            elements: [
                                {
                                    id: 'lok_bluebox_info_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <div style="max-width:800px;">
                                            <h3 style="font-size:1.35rem; font-weight:800; color:#fff; margin:0 0 0.75rem 0;">Studenthuset og konsertscenen i Grimstad</h3>
                                            <p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.7; margin:0 0 1.25rem 0;">
                                                Bluebox er studenthuset og arrangementsscenen på Campus Grimstad. Det drives av og for studenter, og er den naturlige møteplassen for konserter, quiz, temafester og studentfrivillighet i Grimstad.
                                            </p>
                                            <div style="display:flex; flex-wrap:wrap; gap:1.5rem; margin-bottom:1.5rem; font-size:0.875rem; color:var(--sta-teal-200);">
                                                <div style="display:flex; align-items:center; gap:0.5rem;">
                                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--sta-orange)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                    <span>Konserter, arrangementer & pub</span>
                                                </div>
                                                <div style="display:flex; align-items:center; gap:0.5rem;">
                                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--sta-orange)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                                    <span>Møterom for linjeforeninger</span>
                                                </div>
                                            </div>
                                            <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
                                                <a href="https://bluebox.no" 
                                                   target="_blank" 
                                                   rel="noopener noreferrer" 
                                                   class="sta-btn sta-btn-orange" 
                                                   style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.75rem 1.5rem; border-radius:9999px; background:var(--sta-orange); color:#ffffff; font-weight:700; text-decoration:none; font-size:0.9rem;">
                                                    <span>Besøk Bluebox på bluebox.no →</span>
                                                </a>
                                                <a href="mailto:post@bluebox.no" 
                                                   style="display:inline-flex; align-items:center; gap:0.4rem; padding:0.65rem 1.25rem; border-radius:9999px; background:transparent; border:1px solid rgba(158,207,201,0.4); color:#ffffff; font-weight:600; text-decoration:none; font-size:0.85rem;">
                                                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                    <span>Kontakt: post@bluebox.no</span>
                                                </a>
                                            </div>
                                        </div>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                }
            ],
            isInner: false
        }
    ];
}

// =====================================================================
// 3. FOR TILLITSVALGTE (Post 127)
// =====================================================================
function buildForTillitsvalgteData() {
    return [
        {
            id: 'sec_ftv_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                width: { unit: 'px', size: 1200 },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '40', row: '40', isLinked: true },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false }
            }, 'sta-container'),
            elements: [
                // Header
                {
                    id: 'ftv_header_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'ftv_badge_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `<div style="text-align:center;"><span class="sta-badge" style="display:inline-block; padding:0.25rem 0.85rem; border-radius:9999px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; background:rgba(239,115,48,0.15); color:var(--sta-orange); border:1px solid rgba(239,115,48,0.3);">STUDENTDEMOKRATI</span></div>`
                            },
                            elements: []
                        },
                        {
                            id: 'ftv_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: {
                                title: 'Studenttillitsvalgt',
                                header_size: 'h1',
                                align: 'center'
                            },
                            elements: []
                        },
                        {
                            id: 'ftv_subtitle_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: {
                                editor: '<p style="max-width:800px; margin:0.5rem auto 0 auto; text-align:center; font-size:1.1rem; color:var(--sta-teal-100); line-height:1.6;">Les om det å være studenttillitsvalgt på Universitetet i Agder og hvordan STA bidrar inn i arbeidet med kvalitetssystemet.</p>'
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // 3 Top Resource Cards Grid
                {
                    id: 'ftv_resources_grid_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_wrap: 'wrap',
                        flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                    }, 'sta-quick-grid'),
                    elements: [
                        // Card 1: Håndbok
                        {
                            id: 'ftv_res1_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                width: { unit: '%', size: 31 },
                                flex_direction: 'column',
                                flex_align_items: 'center',
                                padding: { unit: 'px', top: '24', right: '20', bottom: '24', left: '20', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '14', right: '14', bottom: '14', left: '14', isLinked: true },
                                css_classes: 'sta-quick-card'
                            }, 'sta-quick-card'),
                            elements: [
                                {
                                    id: 'ftv_res1_content_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <a href="https://stastudent.no/wp-content/uploads/2025/09/TILLITSVALGTHANDBOKEN-STUDENTORGANISASJONEN-I-AGDER.pdf" target="_blank" rel="noopener noreferrer" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; align-items:center; text-align:center;">
                                            <div class="sta-quick-icon-box" style="width:3.5rem; height:3.5rem; border-radius:1rem; background:rgba(239,115,48,0.2); color:var(--sta-orange); display:flex; align-items:center; justify-content:center; margin-bottom:1rem;">
                                                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                            </div>
                                            <h3 class="sta-quick-title" style="font-size:1.15rem; font-weight:800; color:#fff; margin:0 0 0.4rem 0;">Tillitsvalgthåndboken</h3>
                                            <p class="sta-quick-desc" style="font-size:0.85rem; color:var(--sta-teal-100); margin:0;">Last ned håndboken som PDF</p>
                                        </a>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Card 2: Emneevaluering
                        {
                            id: 'ftv_res2_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                width: { unit: '%', size: 31 },
                                flex_direction: 'column',
                                flex_align_items: 'center',
                                padding: { unit: 'px', top: '24', right: '20', bottom: '24', left: '20', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '14', right: '14', bottom: '14', left: '14', isLinked: true },
                                css_classes: 'sta-quick-card'
                            }, 'sta-quick-card'),
                            elements: [
                                {
                                    id: 'ftv_res2_content_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <a href="https://stastudent.no/wp-content/uploads/2024/05/Sjekkliste-for-studentevaluering-av-emner.pdf" target="_blank" rel="noopener noreferrer" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; align-items:center; text-align:center;">
                                            <div class="sta-quick-icon-box" style="width:3.5rem; height:3.5rem; border-radius:1rem; background:rgba(239,115,48,0.2); color:var(--sta-orange); display:flex; align-items:center; justify-content:center; margin-bottom:1rem;">
                                                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                            </div>
                                            <h3 class="sta-quick-title" style="font-size:1.15rem; font-weight:800; color:#fff; margin:0 0 0.4rem 0;">Mal for emneevaluering</h3>
                                            <p class="sta-quick-desc" style="font-size:0.85rem; color:var(--sta-teal-100); margin:0;">Sjekkliste og mal for evalueringer</p>
                                        </a>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Card 3: Forms
                        {
                            id: 'ftv_res3_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                width: { unit: '%', size: 31 },
                                flex_direction: 'column',
                                flex_align_items: 'center',
                                padding: { unit: 'px', top: '24', right: '20', bottom: '24', left: '20', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '14', right: '14', bottom: '14', left: '14', isLinked: true },
                                css_classes: 'sta-quick-card'
                            }, 'sta-quick-card'),
                            elements: [
                                {
                                    id: 'ftv_res3_content_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <a href="https://forms.office.com/Pages/ShareFormPage.aspx?id=HoiChJk2P0uxNc9IALwe-5paDL8Z10RCgktRPOD_6vhUQzFYVlo1UU1JVjQzUDQ3NVZESDdYSjJETy4u&sharetoken=0qiUY8Cn2iKY2FHAUTax" target="_blank" rel="noopener noreferrer" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; align-items:center; text-align:center;">
                                            <div class="sta-quick-icon-box" style="width:3.5rem; height:3.5rem; border-radius:1rem; background:rgba(239,115,48,0.2); color:var(--sta-orange); display:flex; align-items:center; justify-content:center; margin-bottom:1rem;">
                                                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M8 13h8M8 17h8M8 9h2"></path></svg>
                                            </div>
                                            <h3 class="sta-quick-title" style="font-size:1.15rem; font-weight:800; color:#fff; margin:0 0 0.4rem 0;">Studieprogramevaluering</h3>
                                            <p class="sta-quick-desc" style="font-size:0.85rem; color:var(--sta-teal-100); margin:0;">Åpne mal i Microsoft Forms</p>
                                        </a>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // Informative Section: 4 Cards
                {
                    id: 'ftv_info_sec_' + generateId(),
                    elType: 'container',
                    settings: {
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                    },
                    elements: [
                        // Card 1: Din rolle
                        {
                            id: 'ftv_card1_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                padding: { unit: 'px', top: '28', right: '28', bottom: '28', left: '28', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                                css_classes: 'sta-card'
                            }, 'sta-card'),
                            elements: [
                                {
                                    id: 'ftv_card1_body_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <div>
                                            <h3 style="font-size:1.45rem; font-weight:800; color:#fff; margin:0 0 1rem 0;">Din rolle som studenttillitsvalgt</h3>
                                            <p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.7; margin:0 0 1.25rem 0;">
                                                En tillitsvalgt er en valgt person som har oppnådd tilliten fra sine medstudenter på Universitetet i Agder (UiA) til å representere dem i prosesser, møter og samlinger hvor studentenes stemme skal løftes. Som tillitsvalgt spiller du en avgjørende rolle for kvalitetssystemet ved UiA.
                                            </p>
                                            <div style="padding:1rem 1.25rem; border-radius:10px; background:rgba(9,50,47,0.8); border:1px solid rgba(239,115,48,0.4); font-size:0.875rem; color:#fff; line-height:1.6;">
                                                <strong style="color:var(--sta-orange);">Viktig:</strong> 
                                                Når du er valgt, må du registrere deg på 
                                                <a href="https://innsia.uia.no" target="_blank" rel="noopener noreferrer" style="color:var(--sta-orange); font-weight:700; text-decoration:underline;">innsia.uia.no</a> 
                                                for å motta viktig informasjon, invitasjoner til tillitsvalgtsamlinger og opplæring.
                                            </div>
                                        </div>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Card 2: 3-step escalation
                        {
                            id: 'ftv_card2_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                padding: { unit: 'px', top: '28', right: '28', bottom: '28', left: '28', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                                css_classes: 'sta-card'
                            }, 'sta-card'),
                            elements: [
                                {
                                    id: 'ftv_card2_body_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <div>
                                            <h3 style="font-size:1.45rem; font-weight:800; color:#fff; margin:0 0 1.25rem 0;">Hvem skal du henvende deg til ved problemer?</h3>
                                            <div style="display:flex; flex-direction:column; gap:1.25rem;">
                                                <div style="display:flex; align-items:flex-start; gap:1rem;">
                                                    <span style="width:2.25rem; height:2.25rem; border-radius:50%; background:rgba(239,115,48,0.2); color:var(--sta-orange); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.9rem; flex-shrink:0;">1</span>
                                                    <p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.6; margin:0;">
                                                        <strong>Første trinn:</strong> Forhold deg først til studentgruppen din, emneansvarlig, og instituttleder/studieleder ved lærerutdanningen, samt studierådet.
                                                    </p>
                                                </div>
                                                <div style="display:flex; align-items:flex-start; gap:1rem;">
                                                    <span style="width:2.25rem; height:2.25rem; border-radius:50%; background:rgba(239,115,48,0.2); color:var(--sta-orange); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.9rem; flex-shrink:0;">2</span>
                                                    <p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.6; margin:0;">
                                                        <strong>Andre trinn:</strong> Ta kontakt med kontaktpersonen for studenttillitsvalgte på ditt fakultet eller avdeling (se oversikt på UiAs nettsider).
                                                    </p>
                                                </div>
                                                <div style="display:flex; align-items:flex-start; gap:1rem;">
                                                    <span style="width:2.25rem; height:2.25rem; border-radius:50%; background:rgba(239,115,48,0.2); color:var(--sta-orange); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.9rem; flex-shrink:0;">3</span>
                                                    <p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.6; margin:0;">
                                                        <strong>Tredje trinn:</strong> Hvis saken ikke løses lokalt, ta kontakt med STA på e-post <a href="mailto:stafag@uia.no" style="color:var(--sta-orange); text-decoration:underline;">stafag@uia.no</a> eller <a href="mailto:stalaringsmiljo@uia.no" style="color:var(--sta-orange); text-decoration:underline;">stalaringsmiljo@uia.no</a>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Card 3: Opplæring & Samlinger
                        {
                            id: 'ftv_card3_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                padding: { unit: 'px', top: '28', right: '28', bottom: '28', left: '28', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                                css_classes: 'sta-card'
                            }, 'sta-card'),
                            elements: [
                                {
                                    id: 'ftv_card3_body_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <div>
                                            <h3 style="font-size:1.45rem; font-weight:800; color:#fff; margin:0 0 1rem 0;">Opplæring og tillitsvalgtsamlinger</h3>
                                            <p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.7; margin:0;">
                                                Hvert semester arrangerer STA tillitsvalgtsamlinger i samarbeid med Universitetet i Agder. Her får du grundig innføring i studenters rettigheter, møteteknikk, sakspapirlesing og hvordan du best kan fremme dine medstudenters interesser overfor universitetets ledelse.
                                            </p>
                                        </div>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Card 4: Attest
                        {
                            id: 'ftv_card4_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                padding: { unit: 'px', top: '28', right: '28', bottom: '28', left: '28', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                                css_classes: 'sta-card'
                            }, 'sta-card'),
                            elements: [
                                {
                                    id: 'ftv_card4_body_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <div>
                                            <h3 style="font-size:1.45rem; font-weight:800; color:#fff; margin:0 0 1rem 0;">Attest og godkjenning av verv</h3>
                                            <p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.7; margin:0 0 1.25rem 0;">
                                                Som tillitsvalgt har du rett til attest ved fullført verv. Attesten dokumenterer ditt samfunnsengasjement og ledelseserfaring, og er et verdifullt tillegg til din CV ved jobbsøking.
                                            </p>
                                            <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
                                                <a href="mailto:sta@uia.no?subject=Foresp%C3%B8rsel%20om%20tillitsvalgtattest" 
                                                   class="sta-btn sta-btn-orange" 
                                                   style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.65rem 1.25rem; border-radius:9999px; background:var(--sta-orange); color:#ffffff; font-weight:700; text-decoration:none; font-size:0.875rem;">
                                                    <span>Be om tillitsvalgtattest →</span>
                                                </a>
                                            </div>
                                        </div>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                }
            ],
            isInner: false
        }
    ];
}

// =====================================================================
// 4. TRYGG ORGANISASJON (Post 13219)
// =====================================================================
function buildTryggOrganisasjonData() {
    const principles = [
        'Alle skal føle seg velkommen og respektert i STA. Dette betyr at man skal avstå fra uttalelser og/eller fysisk atferd som oppleves som ubehagelig, diskriminerende, trakasserende eller krenkende for andre.',
        'Alle har et ansvar for å bidra til et inkluderende miljø, både ved formelle og uformelle arrangement.',
        'Alle skal vise respekt for hverandres grenser.',
        'Press rundt bruk av alkohol og andre rusmidler skal ikke finne sted. Ved alle arrangement i regi av en studentaktivitet eller linjeforening skal man ha 1–2 tillitspersoner.',
        'Alle har et ansvar i å forhindre mobbing. STA har nulltoleranse for mobbing.',
        'Alle skal vise respekt for hverandres ytringer og møte hverandre på en konstruktiv måte.'
    ];

    const principleCards = principles.map((text, idx) => {
        return {
            id: 'pr_card_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'full',
                width: { unit: '%', size: 48 },
                flex_direction: 'row',
                flex_align_items: 'flex-start',
                flex_gap: { unit: 'px', column: '16', row: '16', isLinked: true },
                padding: { unit: 'px', top: '22', right: '22', bottom: '22', left: '22', isLinked: true },
                background_background: 'classic',
                border_border: 'solid',
                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                border_radius: { unit: 'px', top: '14', right: '14', bottom: '14', left: '14', isLinked: true },
                css_classes: 'sta-card'
            }, 'sta-card'),
            elements: [
                {
                    id: 'pr_card_body_' + generateId(),
                    elType: 'widget',
                    widgetType: 'html',
                    settings: {
                        html: `
                        <div style="display:flex; gap:1rem; align-items:flex-start;">
                            <span style="width:2.25rem; height:2.25rem; border-radius:50%; background:rgba(239,115,48,0.2); color:var(--sta-orange); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.95rem; flex-shrink:0;">
                                ${idx + 1}
                            </span>
                            <p style="font-size:0.9rem; color:var(--sta-teal-100); line-height:1.6; margin:0;">
                                ${text}
                            </p>
                        </div>`
                    },
                    elements: []
                }
            ],
            isInner: true
        };
    });

    return [
        {
            id: 'sec_trygg_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                width: { unit: 'px', size: 1200 },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '40', row: '40', isLinked: true },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false }
            }, 'sta-container'),
            elements: [
                // Header
                {
                    id: 'to_header_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'to_badge_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `<div style="text-align:center;"><span class="sta-badge" style="display:inline-block; padding:0.25rem 0.85rem; border-radius:9999px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; background:rgba(239,115,48,0.15); color:var(--sta-orange); border:1px solid rgba(239,115,48,0.3);">RETNINGSLINJER</span></div>`
                            },
                            elements: []
                        },
                        {
                            id: 'to_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: {
                                title: 'Trygg Organisasjon',
                                header_size: 'h1',
                                align: 'center'
                            },
                            elements: []
                        },
                        {
                            id: 'to_subtitle_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: {
                                editor: '<p style="max-width:800px; margin:0.5rem auto 0 auto; text-align:center; font-size:1.1rem; color:var(--sta-teal-100); line-height:1.6;">Det skal være gøy, lærerikt og motiverende å engasjere seg i STA.</p>'
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Intro statement Card: Nulltoleranse
                {
                    id: 'to_intro_card_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        padding: { unit: 'px', top: '28', right: '28', bottom: '28', left: '28', isLinked: true },
                        background_background: 'classic',
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                        border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                        css_classes: 'sta-card'
                    }, 'sta-card'),
                    elements: [
                        {
                            id: 'to_intro_body_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `
                                <div>
                                    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">
                                        <div style="width:3.25rem; height:3.25rem; border-radius:0.75rem; background:rgba(239,115,48,0.2); color:var(--sta-orange); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                                            <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                                        </div>
                                        <div>
                                            <h2 style="font-size:1.45rem; font-weight:700; color:#fff; margin:0;">Nulltoleranse for trakassering</h2>
                                            <p style="font-size:0.75rem; color:var(--sta-orange); font-weight:700; text-transform:uppercase; letter-spacing:0.05em; margin:0.25rem 0 0 0;">
                                                Vedtatt av Studentparlamentet
                                            </p>
                                        </div>
                                    </div>
                                    <p style="font-size:1rem; color:var(--sta-teal-100); line-height:1.7; margin:0;">
                                        Studentorganisasjonen i Agder har nulltoleranse for alle former for mobbing, seksuell trakassering, rasisme og diskriminering. Alle arrangementer, møter og sosiale sammenkomster i regi av STA eller våre medlemsforeninger skal være trygge arenaer for alle studenter uavhengig av bakgrunn, kjønn eller legning.
                                    </p>
                                </div>`
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // 6 Principles Grid
                {
                    id: 'to_principles_sec_' + generateId(),
                    elType: 'container',
                    settings: {
                        content_width: 'full',
                        flex_direction: 'column'
                    },
                    elements: [
                        {
                            id: 'to_pr_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `<h2 style="font-size:1.6rem; font-weight:700; color:#fff; margin:0 0 1.5rem 0; text-align:center;">Prinsipper for trygg organisasjon</h2>`
                            },
                            elements: []
                        },
                        {
                            id: 'to_pr_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_gap: { unit: 'px', column: '20', row: '20', isLinked: true }
                            }, 'sta-principles-grid'),
                            elements: principleCards,
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // Si fra-systemet (Varsling)
                {
                    id: 'to_varsling_sec_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_wrap: 'wrap',
                        flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                    }, 'sta-varsling-grid'),
                    elements: [
                        // Card A: UiA Si fra
                        {
                            id: 'to_varsel_uia_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                width: { unit: '%', size: 48 },
                                flex_direction: 'column',
                                padding: { unit: 'px', top: '24', right: '24', bottom: '24', left: '24', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '14', right: '14', bottom: '14', left: '14', isLinked: true },
                                css_classes: 'sta-card'
                            }, 'sta-card'),
                            elements: [
                                {
                                    id: 'to_varsel_uia_content_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <div>
                                            <h3 style="font-size:1.25rem; font-weight:700; color:#fff; margin:0 0 0.75rem 0;">Si fra til UiA</h3>
                                            <p style="font-size:0.9rem; color:var(--sta-teal-100); line-height:1.6; margin:0 0 1.25rem 0;">
                                                Dersom du opplever kritikkverdige forhold i læringsmiljøet, på forelesning eller på campus, kan du benytte UiAs offisielle Si fra-system for å melde fra sikkert og konfidensielt.
                                            </p>
                                            <a href="https://www.uia.no/om-uia/si-fra" 
                                               target="_blank" 
                                               rel="noopener noreferrer" 
                                               class="sta-btn sta-btn-orange" 
                                               style="display:inline-flex; align-items:center; gap:0.4rem; padding:0.65rem 1.25rem; border-radius:9999px; background:var(--sta-orange); color:#ffffff; font-weight:700; text-decoration:none; font-size:0.875rem;">
                                                <span>Gå til UiA Si fra →</span>
                                            </a>
                                        </div>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Card B: STA & Sikresiden
                        {
                            id: 'to_varsel_sta_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                width: { unit: '%', size: 48 },
                                flex_direction: 'column',
                                padding: { unit: 'px', top: '24', right: '24', bottom: '24', left: '24', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '14', right: '14', bottom: '14', left: '14', isLinked: true },
                                css_classes: 'sta-card'
                            }, 'sta-card'),
                            elements: [
                                {
                                    id: 'to_varsel_sta_content_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <div>
                                            <h3 style="font-size:1.25rem; font-weight:700; color:#fff; margin:0 0 0.75rem 0;">Kontakt STA eller Sikresiden.no</h3>
                                            <p style="font-size:0.9rem; color:var(--sta-teal-100); line-height:1.6; margin:0 0 1.25rem 0;">
                                                Du kan også kontakte STAs ledelse i full fortrolighet på <a href="mailto:stastyret@uia.no" style="color:var(--sta-orange); text-decoration:underline;">stastyret@uia.no</a>. For akutt hjelp, ulykker og krisehåndtering, se veiledning på Sikresiden.
                                            </p>
                                            <a href="https://sikresiden.no" 
                                               target="_blank" 
                                               rel="noopener noreferrer" 
                                               style="display:inline-flex; align-items:center; gap:0.4rem; padding:0.65rem 1.25rem; border-radius:9999px; background:transparent; border:1px solid rgba(158,207,201,0.4); color:#ffffff; font-weight:600; text-decoration:none; font-size:0.875rem;">
                                                <span>Åpne sikresiden.no</span>
                                            </a>
                                        </div>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // PDF Download CTA
                {
                    id: 'to_pdf_sec_' + generateId(),
                    elType: 'container',
                    settings: {
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center'
                    },
                    elements: [
                        {
                            id: 'to_pdf_btn_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Last ned Retningslinjer for trygg organisasjon (PDF) →',
                                link: { url: 'https://stastudent.no/wp-content/uploads/2023/10/Retningslinjer-for-trygg-organisasjon-STA.pdf' },
                                button_background_color: '#ef7330',
                                css_classes: 'sta-btn sta-btn-orange'
                            }, 'sta-btn sta-btn-orange'),
                            elements: []
                        }
                    ],
                    isInner: true
                }
            ],
            isInner: false
        }
    ];
}

// =====================================================================
// 5. IRENE BREDALS HEDERSPRIS (Post 16160)
// =====================================================================
function buildHedersprisData() {
    return [
        {
            id: 'sec_heders_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                width: { unit: 'px', size: 1200 },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '48', row: '48', isLinked: true },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false }
            }, 'sta-container'),
            elements: [
                // Header
                {
                    id: 'hp_header_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'hp_badge_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `<div style="text-align:center;"><span class="sta-badge" style="display:inline-block; padding:0.25rem 0.85rem; border-radius:9999px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; background:rgba(239,115,48,0.15); color:var(--sta-orange); border:1px solid rgba(239,115,48,0.3);">HEDERSPRIS</span></div>`
                            },
                            elements: []
                        },
                        {
                            id: 'hp_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: {
                                title: 'Irene Bredals Hederspris',
                                header_size: 'h1',
                                align: 'center'
                            },
                            elements: []
                        },
                        {
                            id: 'hp_subtitle_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: {
                                editor: '<p style="max-width:800px; margin:0.5rem auto 0 auto; text-align:center; font-size:1.1rem; color:var(--sta-teal-100); line-height:1.6;">En utmerkelse til personer som over tid har vist dedikasjon og ekstraordinær innsats for studentenes beste ved Universitetet i Agder.</p>'
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Intro Card: Om hedersprisen
                {
                    id: 'hp_intro_card_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        padding: { unit: 'px', top: '32', right: '32', bottom: '32', left: '32', isLinked: true },
                        background_background: 'classic',
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                        border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                        css_classes: 'sta-card'
                    }, 'sta-card'),
                    elements: [
                        {
                            id: 'hp_intro_body_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `
                                <div>
                                    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">
                                        <div style="width:3.5rem; height:3.5rem; border-radius:1rem; background:rgba(239,115,48,0.2); color:var(--sta-orange); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                                            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                                        </div>
                                        <div>
                                            <h2 style="font-size:1.5rem; font-weight:700; color:#fff; margin:0;">Om hedersprisen</h2>
                                            <p style="font-size:0.75rem; color:var(--sta-orange); font-weight:700; text-transform:uppercase; letter-spacing:0.05em; margin:0.25rem 0 0 0;">
                                                Opprettet 2024/2025
                                            </p>
                                        </div>
                                    </div>
                                    <p style="font-size:1.05rem; color:var(--sta-teal-100); line-height:1.7; margin:0 0 1.5rem 0;">
                                        Studentorganisasjonen i Agders hederspris gis ut til personer som over tid har vist dedikasjon og innsats i arbeid for UiA studentenes beste. Alle personer kan nomineres til prisen, så lenge mottaker har utvist arbeid for å styrke STA og studentstemmen på UiA.
                                    </p>
                                    <div style="padding:1.25rem 1.5rem; border-radius:12px; background:rgba(14,76,71,0.8); border:1px solid rgba(158,207,201,0.3); display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1.25rem;">
                                        <div>
                                            <h3 style="font-size:1rem; font-weight:700; color:#fff; margin:0 0 0.25rem 0;">Ønsker du å nominere noen?</h3>
                                            <p style="font-size:0.85rem; color:var(--sta-teal-200); margin:0;">Les statuttene eller send en nominasjon på e-post til STA.</p>
                                        </div>
                                        <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
                                            <a href="https://stastudent.no/wp-content/uploads/2025/11/her.pdf" 
                                               target="_blank" 
                                               rel="noopener noreferrer" 
                                               class="sta-btn sta-btn-outline" 
                                               style="padding:0.5rem 1.15rem; font-size:0.85rem; display:inline-flex; align-items:center; gap:0.4rem; border:1px solid rgba(158,207,201,0.4); border-radius:9999px; color:#fff; text-decoration:none;">
                                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                                <span>Statutter for prisen (PDF)</span>
                                            </a>
                                            <a href="mailto:sta@uia.no?subject=Nominasjon%3A%20Irene%20Bredals%20Hederspris" 
                                               class="sta-btn sta-btn-orange" 
                                               style="padding:0.5rem 1.35rem; font-size:0.85rem; font-weight:700; border-radius:9999px; background:var(--sta-orange); color:#fff; text-decoration:none;">
                                                <span>Send nominasjon</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>`
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Winners Archive: 2025 Irene Bredal
                {
                    id: 'hp_winners_sec_' + generateId(),
                    elType: 'container',
                    settings: {
                        content_width: 'full',
                        flex_direction: 'column'
                    },
                    elements: [
                        {
                            id: 'hp_win_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'html',
                            settings: {
                                html: `<h2 style="font-size:1.75rem; font-weight:700; color:#fff; text-align:center; margin:0 0 2rem 0;">Mottakere av hedersprisen</h2>`
                            },
                            elements: []
                        },
                        {
                            id: 'hp_win_card_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                padding: { unit: 'px', top: '32', right: '32', bottom: '32', left: '32', isLinked: true },
                                background_background: 'classic',
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                                css_classes: 'sta-card'
                            }, 'sta-card'),
                            elements: [
                                {
                                    id: 'hp_win_content_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'html',
                                    settings: {
                                        html: `
                                        <div style="display:flex; flex-wrap:wrap; gap:2.5rem; align-items:flex-start;">
                                            <div style="position:relative; width:14rem; height:18rem; border-radius:1rem; overflow:hidden; border:2px solid rgba(239,115,48,0.5); box-shadow:0 10px 25px rgba(0,0,0,0.5); flex-shrink:0;">
                                                <img src="https://stastudent.no/wp-content/uploads/2025/06/Kopi-av-Kopi-av-Overskrift-1024x1448.png" 
                                                     alt="Irene Bredal mottar hedersprisen" 
                                                     style="width:100%; height:100%; object-fit:cover;">
                                            </div>
                                            <div style="flex:1; min-width:300px;">
                                                <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
                                                    <span class="sta-badge" style="background:var(--sta-orange); color:#fff; border:none; font-size:0.75rem; font-weight:700; padding:0.2rem 0.6rem; border-radius:9999px;">
                                                        2025
                                                    </span>
                                                    <span style="font-size:0.85rem; color:var(--sta-teal-200);">Første hedersprismottaker</span>
                                                </div>
                                                <h3 style="font-size:1.85rem; font-weight:800; color:#fff; margin:0 0 0.25rem 0;">Irene Bredal</h3>
                                                <p style="font-size:0.95rem; color:var(--sta-orange); font-weight:600; margin:0 0 1.25rem 0;">
                                                    Tidligere organisasjonskonsulent i STA
                                                </p>
                                                <div style="padding:1rem 1.25rem; border-left:3px solid var(--sta-orange); background:rgba(7,36,34,0.6); border-radius:0 8px 8px 0; margin-bottom:1.25rem;">
                                                    <p style="font-size:0.925rem; color:var(--sta-teal-100); font-style:italic; line-height:1.6; margin:0;">
                                                        «Irene Bredal hedres for sitt utrettelige og brennende engasjement for studentene ved Universitetet i Agder over en årrekke. Som organisasjonskonsulent har hun vært en uvurderlig støttespiller for utallige studenttillitsvalgte og styrer.»
                                                    </p>
                                                </div>
                                                <p style="font-size:0.9rem; color:var(--sta-teal-200); line-height:1.6; margin:0;">
                                                    Prisen ble overrakt under det høytidelige konstituerende møtet til Studentparlamentet, som en anerkjennelse av hennes enestående innsats for studentdemokratiet i Agder.
                                                </p>
                                            </div>
                                        </div>`
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                }
            ],
            isInner: false
        }
    ];
}

// Write JSON files
const incDir = 'sta-wordpress/sta-theme/inc';
if (!fs.existsSync(incDir)) {
    fs.mkdirSync(incDir, { recursive: true });
}

const lvData = buildLedigeVervData();
fs.writeFileSync(path.join(incDir, 'clean_elementor_ledige_verv_data.json'), JSON.stringify(lvData, null, 2));
console.log('Generated clean_elementor_ledige_verv_data.json with sections:', lvData.length);

const lokData = buildLokalerData();
fs.writeFileSync(path.join(incDir, 'clean_elementor_lokaler_data.json'), JSON.stringify(lokData, null, 2));
console.log('Generated clean_elementor_lokaler_data.json with sections:', lokData.length);

const ftvData = buildForTillitsvalgteData();
fs.writeFileSync(path.join(incDir, 'clean_elementor_for_tillitsvalgte_data.json'), JSON.stringify(ftvData, null, 2));
console.log('Generated clean_elementor_for_tillitsvalgte_data.json with sections:', ftvData.length);

const toData = buildTryggOrganisasjonData();
fs.writeFileSync(path.join(incDir, 'clean_elementor_trygg_organisasjon_data.json'), JSON.stringify(toData, null, 2));
console.log('Generated clean_elementor_trygg_organisasjon_data.json with sections:', toData.length);

const hpData = buildHedersprisData();
fs.writeFileSync(path.join(incDir, 'clean_elementor_irene_bredals_hederspris_data.json'), JSON.stringify(hpData, null, 2));
console.log('Generated clean_elementor_irene_bredals_hederspris_data.json with sections:', hpData.length);
