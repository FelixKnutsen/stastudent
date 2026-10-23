// scratch/build_elementor_subpages_pilot.js
// Constructs clean native Elementor JSON structures for the Pilot Batch:
// 1. Valgkomitéen (Post 14071, slug 'valgkomiteen')
// 2. Dokumenter (Post 163, slug 'dokumenter')
// 3. Prinsipprogram (Post 14055, slug 'prinsipprogram')

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

// -------------------------------------------------------------
// 1. VALGKOMITÉEN
// -------------------------------------------------------------
function buildValgkomiteenData() {
    return [
        {
            id: 'vk_wrap_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1200 },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '0', row: '32', isLinked: false }
            }, 'sta-subpage-root sta-valgkomiteen-root'),
            elements: [
                // 1. Breadcrumb link
                {
                    id: 'vk_bc_' + generateId(),
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: setClasses({
                        title: '<a href="https://stastudent.no/reliant/?sta_page=rad-styrer-og-utvalg" style="color:var(--sta-teal-200); font-size:0.95rem; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem;">&larr; Tilbake til Råd, Styrer og Utvalg</a>',
                        header_size: 'div'
                    }, 'sta-breadcrumb-link'),
                    elements: []
                },

                // 2. Header Section (Badge, Title, Subtitle)
                {
                    id: 'vk_hdr_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center',
                        text_align: 'center',
                        margin: { unit: 'px', top: '0', right: '0', bottom: '16', left: '0', isLinked: false }
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'vk_badge_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: '<span class="sta-badge">Studentdemokrati</span>',
                                header_size: 'div',
                                align: 'center'
                            }, 'sta-badge-wrap'),
                            elements: []
                        },
                        {
                            id: 'vk_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Valgkomitéen 2025/2026',
                                header_size: 'h1',
                                align: 'center'
                            }, 'sta-hero-title'),
                            elements: []
                        },
                        {
                            id: 'vk_sub_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: setClasses({
                                editor: '<p style="color:var(--sta-teal-100); font-size:1.15rem; max-width:800px; margin:0 auto; line-height:1.6;">Valgkomitéen har ansvaret for rekruttering, intervjuer og innstilling av kandidater til alle verv som velges av Studentparlamentet ved UiA.</p>'
                            }, 'sta-hero-subtitle'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // 3. Featured Leader Card (William T. Svendsen)
                {
                    id: 'vk_leader_sec_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'boxed',
                        boxed_width: { unit: 'px', size: 768 },
                        margin: { unit: 'px', top: '0', right: 'auto', bottom: '16', left: 'auto', isLinked: false },
                        padding: { unit: 'px', top: '32', right: '32', bottom: '32', left: '32', isLinked: true },
                        flex_direction: 'row',
                        flex_direction_mobile: 'column',
                        flex_align_items: 'center',
                        flex_justify_content: 'center',
                        flex_gap: { unit: 'px', column: '32', row: '24', isLinked: false },
                        border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                        border_color: 'rgba(158, 207, 201, 0.15)',
                        background_background: 'classic',
                        background_color: 'rgba(255, 255, 255, 0.04)'
                    }, 'sta-card sta-leader-card'),
                    elements: [
                        // Left: Leader Photo (Circular with orange border)
                        {
                            id: 'vk_leader_img_col_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_align_items: 'center',
                                flex_justify_content: 'center',
                                width: { unit: 'px', size: 192 }
                            }, 'sta-leader-img-box'),
                            elements: [
                                {
                                    id: 'vk_leader_img_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'image',
                                    settings: setClasses({
                                        image: {
                                            url: 'https://stastudent.no/wp-content/uploads/2023/06/WTS-6-1024x683.jpg',
                                            source: 'library'
                                        },
                                        image_size: 'medium_large',
                                        border_border: 'solid',
                                        border_width: { unit: 'px', top: '3', right: '3', bottom: '3', left: '3', isLinked: true },
                                        border_color: '#ef7330',
                                        border_radius: { unit: '%', top: '50', right: '50', bottom: '50', left: '50', isLinked: true }
                                    }, 'sta-leader-photo'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        },
                        // Right: Leader Info
                        {
                            id: 'vk_leader_info_col_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                flex_align_items: 'flex-start',
                                flex_align_items_mobile: 'center',
                                text_align: 'left',
                                text_align_mobile: 'center'
                            }, 'sta-leader-info'),
                            elements: [
                                {
                                    id: 'vk_l_badge_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: '<span class="sta-badge" style="background:var(--sta-orange); color:#fff; border:none; font-size:0.75rem; padding:0.25rem 0.6rem;">Leder</span>',
                                        header_size: 'div'
                                    }, 'sta-leader-badge'),
                                    elements: []
                                },
                                {
                                    id: 'vk_l_name_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: 'William T. Svendsen',
                                        header_size: 'h2'
                                    }, 'sta-leader-name'),
                                    elements: []
                                },
                                {
                                    id: 'vk_l_role_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<p style="color:var(--sta-teal-100); font-size:0.95rem; font-weight:600; margin:0 0 1rem 0;">Leder av Valgkomitéen 2025/2026</p>'
                                    }, 'sta-leader-role'),
                                    elements: []
                                },
                                {
                                    id: 'vk_l_email_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: '<a href="mailto:stavalg@uia.no" style="color:var(--sta-orange); font-size:0.95rem; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem;"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span>stavalg@uia.no</span></a>',
                                        header_size: 'div'
                                    }, 'sta-leader-email'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // 4. Committee Members Section (Heading + 3 Cards)
                {
                    id: 'vk_members_sec_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'boxed',
                        boxed_width: { unit: 'px', size: 900 },
                        margin: { unit: 'px', top: '16', right: 'auto', bottom: '16', left: 'auto', isLinked: false },
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '0', row: '20', isLinked: false }
                    }, 'sta-members-section'),
                    elements: [
                        {
                            id: 'vk_m_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Medlemmer av Valgkomitéen',
                                header_size: 'h2',
                                align: 'center'
                            }, 'sta-section-title'),
                            elements: []
                        },
                        {
                            id: 'vk_m_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_justify_content: 'center',
                                flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                            }, 'sta-members-grid'),
                            elements: [
                                // Member 1: Lisa K. Fredsvik
                                {
                                    id: 'vk_m1_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-user-circle', library: 'fa-solid' },
                                        title_text: 'Lisa K. Fredsvik',
                                        description_text: 'Medlem av Valgkomitéen',
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-member-card'),
                                    elements: []
                                },
                                // Member 2: Rania Farah
                                {
                                    id: 'vk_m2_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-user-circle', library: 'fa-solid' },
                                        title_text: 'Rania Farah',
                                        description_text: 'Medlem av Valgkomitéen',
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-member-card'),
                                    elements: []
                                },
                                // Member 3: Andrea M. Åmodt
                                {
                                    id: 'vk_m3_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-user-circle', library: 'fa-solid' },
                                        title_text: 'Andrea M. Åmodt',
                                        description_text: 'Medlem av Valgkomitéen',
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-member-card'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // 5. "Hva gjør Valgkomitéen?" Responsibilities Card
                {
                    id: 'vk_resp_sec_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'boxed',
                        boxed_width: { unit: 'px', size: 850 },
                        margin: { unit: 'px', top: '16', right: 'auto', bottom: '16', left: 'auto', isLinked: false },
                        padding: { unit: 'px', top: '32', right: '36', bottom: '32', left: '36', isLinked: false },
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '0', row: '16', isLinked: false },
                        border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                        border_color: 'rgba(158, 207, 201, 0.15)',
                        background_background: 'classic',
                        background_color: 'rgba(255, 255, 255, 0.04)'
                    }, 'sta-card sta-responsibilities-card'),
                    elements: [
                        {
                            id: 'vk_resp_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Hva gjør Valgkomitéen?',
                                header_size: 'h2'
                            }, 'sta-card-title'),
                            elements: []
                        },
                        {
                            id: 'vk_resp_txt_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: setClasses({
                                editor: '<p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.75; margin-bottom:1rem;">Valgkomiteens oppgave er å innstille på kandidater til verv som velges av Studentparlamentet. For å kunne gi den beste anbefalingen intervjuer komiteens medlemmer alle kandidater som har stilt til valg innenfor en gitt frist som settes av komiteens leder og STA-styret. Komiteens leder har et ansvar for å koordinere intervjuprosessen, slik at alle kandidater vet hvor og når de skal møte til intervju, samt for at innstillingen er klar til offentliggjøringen til rett tid.</p><p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.75; margin-bottom:0;">Å være medlem av Valgkomiteen er et spennende arbeid. Man får erfaring med rekruttering av flinke folk, og med å intervjue dem. Å bli trygg på rollen som intervjuer er en nyttig erfaring som gjør at man forstår en rekrutteringsprosess bedre når man selv søker stillinger i arbeidslivet. Leder og 3 medlemmer velges i mai, med funksjonstid fra 01.07 til 30.06.</p>'
                            }, 'sta-card-body'),
                            elements: []
                        },
                        {
                            id: 'vk_resp_footer_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: '<div style="padding-top:1rem; border-top:1px solid rgba(158,207,201,0.2); display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1rem;"><span style="font-size:0.85rem; color:var(--sta-teal-200);">Har du spørsmål om valgprosessen?</span><a href="mailto:stavalg@uia.no" style="display:inline-flex; align-items:center; gap:0.4rem; color:var(--sta-orange); font-weight:700; font-size:0.9rem; text-decoration:none;"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span>stavalg@uia.no</span></a></div>',
                                header_size: 'div'
                            }, 'sta-card-footer'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // 6. Bottom CTA Button
                {
                    id: 'vk_cta_sec_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_align_items: 'center',
                        flex_justify_content: 'center',
                        text_align: 'center',
                        margin: { unit: 'px', top: '16', right: '0', bottom: '0', left: '0', isLinked: false }
                    }, 'sta-cta-wrap'),
                    elements: [
                        {
                            id: 'vk_cta_btn_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Se ledige verv og still til valg',
                                link: {
                                    url: 'https://stastudent.no/reliant/?sta_page=ledige-verv',
                                    is_external: '',
                                    nofollow: ''
                                },
                                selected_icon: { value: 'fas fa-arrow-right', library: 'fa-solid' },
                                icon_align: 'right',
                                button_background_color: '#ef7330'
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

// -------------------------------------------------------------
// 2. DOKUMENTER
// -------------------------------------------------------------
function buildDokumenterData() {
    return [
        {
            id: 'doc_wrap_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1200 },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '0', row: '36', isLinked: false }
            }, 'sta-subpage-root sta-dokumenter-root'),
            elements: [
                // 1. Header (Badge, Title, Subtitle)
                {
                    id: 'doc_hdr_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center',
                        text_align: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'doc_b_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: '<span class="sta-badge">Styringsdokumenter</span>',
                                header_size: 'div',
                                align: 'center'
                            }, 'sta-badge-wrap'),
                            elements: []
                        },
                        {
                            id: 'doc_t_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Dokumenter',
                                header_size: 'h1',
                                align: 'center'
                            }, 'sta-hero-title'),
                            elements: []
                        },
                        {
                            id: 'doc_sub_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: setClasses({
                                editor: '<p style="color:var(--sta-teal-100); font-size:1.15rem; max-width:800px; margin:0 auto; line-height:1.6;">Oversikt over STAs vedtekter, handlingsplaner, politiske dokumenter, sakspapirer og resolusjoner.</p>'
                            }, 'sta-hero-subtitle'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // 2. Sub-navigation tabs (Dokumenter, Sakspapirer, Protokoller)
                {
                    id: 'doc_tabs_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_wrap: 'wrap',
                        flex_justify_content: 'center',
                        flex_gap: { unit: 'px', column: '12', row: '12', isLinked: true }
                    }, 'sta-subnav-tabs'),
                    elements: [
                        {
                            id: 'doc_tab1_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Styringsdokumenter & resolusjoner',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=dokumenter' },
                                button_background_color: '#ef7330'
                            }, 'sta-filter-btn is-active'),
                            elements: []
                        },
                        {
                            id: 'doc_tab2_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Sakspapirer (SP-møter)',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=sakspapirer' }
                            }, 'sta-filter-btn'),
                            elements: []
                        },
                        {
                            id: 'doc_tab3_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Protokoller fra SP-møter',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=referat-fra-moter-i-studentparlamentet' }
                            }, 'sta-filter-btn'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // 3. Section: Sakspapirer og protokoller (2 Cards)
                {
                    id: 'doc_sec_sp_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '0', row: '16', isLinked: false }
                    }, 'sta-docs-section'),
                    elements: [
                        {
                            id: 'doc_sp_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Sakspapirer og protokoller (Studentparlamentet)',
                                header_size: 'h2'
                            }, 'sta-section-title'),
                            elements: []
                        },
                        {
                            id: 'doc_sp_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                            }, 'sta-docs-grid'),
                            elements: [
                                {
                                    id: 'doc_sp_c1_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-file-lines', library: 'fa-solid' },
                                        title_text: 'Sakspapirer til møter i Studentparlamentet',
                                        description_text: 'Se alle innkallinger og sakspapirer til parlamentsmøter (2018–2026).<br><br><span style="color:var(--sta-orange); font-weight:700;">Åpne sakspapirer &rarr;</span>',
                                        link: { url: 'https://stastudent.no/reliant/?sta_page=sakspapirer' },
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-action-card'),
                                    elements: []
                                },
                                {
                                    id: 'doc_sp_c2_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-clipboard-check', library: 'fa-solid' },
                                        title_text: 'Protokoller fra møter i Studentparlamentet',
                                        description_text: 'Les vedtatte protokoller og referater fra møter og valgforsamlinger.<br><br><span style="color:var(--sta-orange); font-weight:700;">Åpne protokoller &rarr;</span>',
                                        link: { url: 'https://stastudent.no/reliant/?sta_page=referat-fra-moter-i-studentparlamentet' },
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-action-card'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // 4. Section: Øvrige styringsdokumenter (3 Cards: Vedtekter, Handlingsplan, Stillingsbeskrivelser)
                {
                    id: 'doc_sec_ovrige_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '0', row: '16', isLinked: false }
                    }, 'sta-docs-section'),
                    elements: [
                        {
                            id: 'doc_ovr_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Øvrige styringsdokumenter',
                                header_size: 'h2'
                            }, 'sta-section-title'),
                            elements: []
                        },
                        {
                            id: 'doc_ovr_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                            }, 'sta-docs-grid'),
                            elements: [
                                {
                                    id: 'doc_ovr_c1_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-file-pdf', library: 'fa-solid' },
                                        title_text: 'Vedtekter',
                                        description_text: 'Organisasjonens regler.<br><br><span style="color:var(--sta-orange); font-weight:700;">Last ned (PDF) &rarr;</span>',
                                        link: { url: 'https://stastudent.no/wp-content/uploads/2026/05/STAs-Vedtekter.pdf', is_external: 'on' },
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-doc-card'),
                                    elements: []
                                },
                                {
                                    id: 'doc_ovr_c2_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-file-pdf', library: 'fa-solid' },
                                        title_text: 'Handlingsplan',
                                        description_text: 'Våre politiske prioriteringer.<br><br><span style="color:var(--sta-orange); font-weight:700;">Last ned (PDF) &rarr;</span>',
                                        link: { url: 'https://stastudent.no/wp-content/uploads/2026/06/STAs-Handlingsplan-2026-2027_1.pdf', is_external: 'on' },
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-doc-card'),
                                    elements: []
                                },
                                {
                                    id: 'doc_ovr_c3_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-file-pdf', library: 'fa-solid' },
                                        title_text: 'Stillingsbeskrivelser',
                                        description_text: 'Styrets arbeidsoppgaver.<br><br><span style="color:var(--sta-orange); font-weight:700;">Last ned (PDF) &rarr;</span>',
                                        link: { url: 'https://stastudent.no/wp-content/uploads/2026/05/STAs-Stillingsbeskrivelser.pdf', is_external: 'on' },
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-doc-card'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // 5. Section: Politiske dokumenter (4 Cards)
                {
                    id: 'doc_sec_pol_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '0', row: '16', isLinked: false }
                    }, 'sta-docs-section'),
                    elements: [
                        {
                            id: 'doc_pol_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Politiske dokumenter',
                                header_size: 'h2'
                            }, 'sta-section-title'),
                            elements: []
                        },
                        {
                            id: 'doc_pol_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_gap: { unit: 'px', column: '20', row: '20', isLinked: true }
                            }, 'sta-docs-grid'),
                            elements: [
                                {
                                    id: 'doc_pol_c1_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-heart', library: 'fa-solid' },
                                        title_text: 'Studentvelferd',
                                        description_text: 'Les om vår velferdspolitikk.<br><br><span style="color:var(--sta-orange); font-weight:700;">Last ned (PDF) &rarr;</span>',
                                        link: { url: 'https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Studentvelferd-2026.pdf', is_external: 'on' },
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-doc-card'),
                                    elements: []
                                },
                                {
                                    id: 'doc_pol_c2_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-leaf', library: 'fa-solid' },
                                        title_text: 'Læringsmiljø og bærekraft',
                                        description_text: 'Les om vår politikk på læringsmiljø og bærekraft.<br><br><span style="color:var(--sta-orange); font-weight:700;">Last ned (PDF) &rarr;</span>',
                                        link: { url: 'https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Laeringsmiljo-og-Baerekraft.pdf', is_external: 'on' },
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-doc-card'),
                                    elements: []
                                },
                                {
                                    id: 'doc_pol_c3_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-graduation-cap', library: 'fa-solid' },
                                        title_text: 'Utdanningskvalitet',
                                        description_text: 'Les om vår utdanning- og forskningspolitikk.<br><br><span style="color:var(--sta-orange); font-weight:700;">Last ned (PDF) &rarr;</span>',
                                        link: { url: 'https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Utdanningskvalitet-2026.pdf', is_external: 'on' },
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-doc-card'),
                                    elements: []
                                },
                                {
                                    id: 'doc_pol_c4_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'icon-box',
                                    settings: setClasses({
                                        selected_icon: { value: 'fas fa-globe', library: 'fa-solid' },
                                        title_text: 'Mangfold og internasjonalisering',
                                        description_text: 'Les om vår politikk på mangfold og internasjonalisering.<br><br><span style="color:var(--sta-orange); font-weight:700;">Last ned (PDF) &rarr;</span>',
                                        link: { url: 'https://stastudent.no/wp-content/uploads/2026/05/Politisk-dokument-for-Mangfold-og-Internasjonalisering.pdf', is_external: 'on' },
                                        position: 'top',
                                        primary_color: '#ef7330'
                                    }, 'sta-card sta-doc-card'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // 6. Section: Resolusjoner vedtatt av Studentparlamentet (2 Columns: 2025 and 2024)
                {
                    id: 'doc_sec_res_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '0', row: '16', isLinked: false }
                    }, 'sta-docs-section'),
                    elements: [
                        {
                            id: 'doc_res_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Resolusjoner vedtatt av Studentparlamentet',
                                header_size: 'h2'
                            }, 'sta-section-title'),
                            elements: []
                        },
                        {
                            id: 'doc_res_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                            }, 'sta-res-grid'),
                            elements: [
                                // 2025 Resolutions
                                {
                                    id: 'doc_res_2025_' + generateId(),
                                    elType: 'container',
                                    settings: setClasses({
                                        content_width: 'full',
                                        flex_direction: 'column',
                                        flex_gap: { unit: 'px', column: '0', row: '12', isLinked: false },
                                        padding: { unit: 'px', top: '24', right: '28', bottom: '24', left: '28', isLinked: false },
                                        border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                                        border_border: 'solid',
                                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                        border_color: 'rgba(158, 207, 201, 0.15)',
                                        background_background: 'classic',
                                        background_color: 'rgba(255, 255, 255, 0.04)'
                                    }, 'sta-card sta-resolutions-card'),
                                    elements: [
                                        {
                                            id: 'doc_res_2025_h_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'heading',
                                            settings: setClasses({
                                                title: '<span style="color:var(--sta-orange); font-size:1.3rem; font-weight:800;">2025</span>',
                                                header_size: 'h3'
                                            }, 'sta-res-year'),
                                            elements: []
                                        },
                                        {
                                            id: 'doc_res_2025_list_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'text-editor',
                                            settings: setClasses({
                                                editor: '<ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.6rem;">' +
                                                    '<li><a href="https://stastudent.no/wp-content/uploads/2025/12/29.10.25-Resolusjon-Studentfrivillighet-for-fremtiden.pdf" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>29.10.25 Resolusjon – Studentfrivillighet for fremtiden (PDF)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                                    '<li><a href="https://stastudent.no/wp-content/uploads/2025/12/24.09.25-Resolusjon-nynorsk-pa-UiA.pdf" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>24.09.25 Resolusjon nynorsk på UiA (PDF)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                                    '<li><a href="https://stastudent.no/wp-content/uploads/2025/05/21.05.25-Resolusjon-eksamensrettigheter.docx" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>21.05.25 Resolusjon eksamensrettigheter (DOCX)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                                    '<li><a href="https://stastudent.no/wp-content/uploads/2025/05/22.01.25-Resolusjon-KI.docx" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>22.01.25 Resolusjon kunstig intelligens (DOCX)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                                    '</ul>'
                                            }, 'sta-res-list'),
                                            elements: []
                                        }
                                    ],
                                    isInner: true
                                },
                                // 2024 Resolutions
                                {
                                    id: 'doc_res_2024_' + generateId(),
                                    elType: 'container',
                                    settings: setClasses({
                                        content_width: 'full',
                                        flex_direction: 'column',
                                        flex_gap: { unit: 'px', column: '0', row: '12', isLinked: false },
                                        padding: { unit: 'px', top: '24', right: '28', bottom: '24', left: '28', isLinked: false },
                                        border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                                        border_border: 'solid',
                                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                        border_color: 'rgba(158, 207, 201, 0.15)',
                                        background_background: 'classic',
                                        background_color: 'rgba(255, 255, 255, 0.04)'
                                    }, 'sta-card sta-resolutions-card'),
                                    elements: [
                                        {
                                            id: 'doc_res_2024_h_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'heading',
                                            settings: setClasses({
                                                title: '<span style="color:var(--sta-orange); font-size:1.3rem; font-weight:800;">2024</span>',
                                                header_size: 'h3'
                                            }, 'sta-res-year'),
                                            elements: []
                                        },
                                        {
                                            id: 'doc_res_2024_list_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'text-editor',
                                            settings: setClasses({
                                                editor: '<ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.6rem;">' +
                                                    '<li><a href="https://stastudent.no/wp-content/uploads/2024/10/23.10.24-Resolusjon-om-fleksible-studier-og-studenter.docx" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>23.10.24 Resolusjon om fleksible studier og studenter (DOCX)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                                    '<li><a href="https://stastudent.no/wp-content/uploads/2024/10/23.10.24-Resolusjon-om-fravaer-blant-undervisere.docx" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>23.10.24 Resolusjon om fravær blant undervisere (DOCX)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                                    '<li><a href="https://stastudent.no/wp-content/uploads/2024/09/22.05.24-Resolusjon-akademisk-frihet-og-demokrati.docx" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>22.05.24 Resolusjon akademisk frihet og demokrati (DOCX)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                                    '</ul>'
                                            }, 'sta-res-list'),
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

                // 7. Section: Andre reglementer og retningslinjer
                {
                    id: 'doc_sec_andre_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '0', row: '16', isLinked: false }
                    }, 'sta-docs-section'),
                    elements: [
                        {
                            id: 'doc_andre_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Andre reglementer og retningslinjer',
                                header_size: 'h2'
                            }, 'sta-section-title'),
                            elements: []
                        },
                        {
                            id: 'doc_andre_box_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                padding: { unit: 'px', top: '24', right: '28', bottom: '24', left: '28', isLinked: false },
                                border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_color: 'rgba(158, 207, 201, 0.15)',
                                background_background: 'classic',
                                background_color: 'rgba(255, 255, 255, 0.04)'
                            }, 'sta-card sta-regulations-card'),
                            elements: [
                                {
                                    id: 'doc_andre_list_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.6rem;">' +
                                            '<li><a href="https://stastudent.no/wp-content/uploads/2025/06/STAs-Reglement-for-studentaktivitetene.pdf" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>Reglement for studentaktiviteter (PDF)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                            '<li><a href="https://stastudent.no/wp-content/uploads/2024/09/Forretningsorden-SP.doc" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>Forretningsorden (DOC)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                            '<li><a href="https://stastudent.no/wp-content/uploads/2026/05/STAs-Okonomireglement.pdf" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>Økonomireglement (PDF)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                            '<li><a href="https://stastudent.no/wp-content/uploads/2026/05/STAs-Valgreglement.pdf" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>Valgreglement (PDF)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                            '<li><a href="https://stastudent.no/wp-content/uploads/2025/06/Fravaerssystem-for-Studentparlamentet.pdf" target="_blank" rel="noopener noreferrer" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span>Fraværssystem for Studentparlamentet (PDF)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                            '<li><a href="https://stastudent.no/reliant/?sta_page=prinsipprogram" class="sta-doc-row-link" style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border-radius:6px; background:rgba(0,48,51,0.5); color:#fff; text-decoration:none;"><span style="color:var(--sta-teal-100); font-weight:600;">Prinsipprogram (historisk arkiv)</span><span style="color:var(--sta-orange);">&rarr;</span></a></li>' +
                                            '</ul>'
                                    }, 'sta-regulations-list'),
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

// -------------------------------------------------------------
// 3. PRINSIPPROGRAM
// -------------------------------------------------------------
function buildPrinsipprogramData() {
    return [
        {
            id: 'pp_wrap_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1000 },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '0', row: '32', isLinked: false }
            }, 'sta-subpage-root sta-prinsipprogram-root'),
            elements: [
                // 1. Breadcrumb link
                {
                    id: 'pp_bc_' + generateId(),
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: setClasses({
                        title: '<a href="https://stastudent.no/reliant/?sta_page=dokumenter" style="color:var(--sta-teal-200); font-size:0.95rem; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem;">&larr; Tilbake til Dokumenter</a>',
                        header_size: 'div'
                    }, 'sta-breadcrumb-link'),
                    elements: []
                },

                // 2. Header (Badge, Title, Subtitle)
                {
                    id: 'pp_hdr_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center',
                        text_align: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'pp_b_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: '<span class="sta-badge">Politisk styringsmodell</span>',
                                header_size: 'div',
                                align: 'center'
                            }, 'sta-badge-wrap'),
                            elements: []
                        },
                        {
                            id: 'pp_t_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Prinsipprogram',
                                header_size: 'h1',
                                align: 'center'
                            }, 'sta-hero-title'),
                            elements: []
                        },
                        {
                            id: 'pp_sub_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: setClasses({
                                editor: '<p style="color:var(--sta-teal-100); font-size:1.15rem; max-width:800px; margin:0 auto; line-height:1.6;">Informasjon om STAs prinsipprogram og hvordan studentpolitikken ved Universitetet i Agder i dag styres og vedtas.</p>'
                            }, 'sta-hero-subtitle'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // 3. Notice Card: Current Policy Status (No Standalone Programme)
                {
                    id: 'pp_notice_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        padding: { unit: 'px', top: '32', right: '36', bottom: '32', left: '36', isLinked: false },
                        border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                        border_color: 'rgba(239, 115, 48, 0.4)',
                        background_background: 'classic',
                        background_color: 'rgba(239, 115, 48, 0.1)',
                        flex_direction: 'row',
                        flex_direction_mobile: 'column',
                        flex_align_items: 'flex-start',
                        flex_gap: { unit: 'px', column: '24', row: '16', isLinked: false }
                    }, 'sta-notice-card'),
                    elements: [
                        // Left: Warning/Info Icon
                        {
                            id: 'pp_n_icon_col_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                width: { unit: 'px', size: 48 },
                                flex_align_items: 'center',
                                flex_justify_content: 'center'
                            }, 'sta-notice-icon-box'),
                            elements: [
                                {
                                    id: 'pp_n_icon_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: '<div style="width:3rem; height:3rem; border-radius:0.75rem; background:rgba(239,115,48,0.25); color:var(--sta-orange); display:flex; align-items:center; justify-content:center;"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></div>',
                                        header_size: 'div'
                                    }, 'sta-notice-icon'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        },
                        // Right: Notice Text & CTA Button
                        {
                            id: 'pp_n_content_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                flex_align_items: 'flex-start',
                                flex_gap: { unit: 'px', column: '0', row: '12', isLinked: false }
                            }, 'sta-notice-text-col'),
                            elements: [
                                {
                                    id: 'pp_n_title_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: 'Gjeldende status: Ingen eget prinsipprogram',
                                        header_size: 'h2'
                                    }, 'sta-notice-title'),
                                    elements: []
                                },
                                {
                                    id: 'pp_n_desc_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<p style="font-size:1rem; color:var(--sta-teal-50); line-height:1.7; margin:0 0 0.5rem 0;">Studentparlamentet i STA har besluttet at organisasjonen ikke skal ha et eget overordnet prinsipprogram. STAs politiske plattform og studentenes stemme forankres og styres i dag direkte gjennom organisasjonens fire tematiske politiske styringsdokumenter, den årlige handlingsplanen og fortløpende resolusjoner vedtatt av parlamentet.</p>'
                                    }, 'sta-notice-body'),
                                    elements: []
                                },
                                {
                                    id: 'pp_n_btn_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'button',
                                    settings: setClasses({
                                        text: 'Se gjeldende politiske dokumenter',
                                        link: { url: 'https://stastudent.no/reliant/?sta_page=dokumenter' },
                                        selected_icon: { value: 'fas fa-arrow-right', library: 'fa-solid' },
                                        icon_align: 'right',
                                        button_background_color: '#ef7330'
                                    }, 'sta-btn sta-btn-orange'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // 4. Historical Archive Section: Prinsipprogrammet 2023–2025
                {
                    id: 'pp_hist_sec_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        margin: { unit: 'px', top: '24', right: '0', bottom: '0', left: '0', isLinked: false },
                        padding: { unit: 'px', top: '32', right: '0', bottom: '0', left: '0', isLinked: false },
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '0', bottom: '0', left: '0', isLinked: false },
                        border_color: 'rgba(158, 207, 201, 0.2)',
                        flex_direction: 'column',
                        flex_gap: { unit: 'px', column: '0', row: '24', isLinked: false }
                    }, 'sta-hist-section'),
                    elements: [
                        {
                            id: 'pp_hist_hdr_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                flex_align_items: 'center',
                                text_align: 'center'
                            }, 'sta-hist-header'),
                            elements: [
                                {
                                    id: 'pp_hist_b_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: '<span class="sta-badge" style="background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.2); color:var(--sta-teal-100);">Historisk arkiv</span>',
                                        header_size: 'div',
                                        align: 'center'
                                    }, 'sta-badge-wrap'),
                                    elements: []
                                },
                                {
                                    id: 'pp_hist_t_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: 'Prinsipprogrammet 2023–2025 (Historisk)',
                                        header_size: 'h2',
                                        align: 'center'
                                    }, 'sta-hist-title'),
                                    elements: []
                                },
                                {
                                    id: 'pp_hist_sub_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<p style="font-size:0.95rem; color:var(--sta-teal-200); margin:0;">Vedtatt av Studentparlamentet 22. november 2023. Gikk ut i 2025.</p>'
                                    }, 'sta-hist-sub'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Historical Pillars (1 to 4)
                        // Pillar 1: Studiesituasjon
                        {
                            id: 'pp_p1_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                padding: { unit: 'px', top: '28', right: '32', bottom: '28', left: '32', isLinked: false },
                                border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_color: 'rgba(158, 207, 201, 0.15)',
                                background_background: 'classic',
                                background_color: 'rgba(255, 255, 255, 0.04)',
                                flex_direction: 'column',
                                flex_gap: { unit: 'px', column: '0', row: '12', isLinked: false }
                            }, 'sta-card sta-pillar-card'),
                            elements: [
                                {
                                    id: 'pp_p1_t_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: '<span style="color:var(--sta-orange); font-size:1.35rem; font-weight:800;">1. Studiesituasjon</span>',
                                        header_size: 'h3'
                                    }, 'sta-pillar-title'),
                                    elements: []
                                },
                                {
                                    id: 'pp_p1_txt_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<div style="font-size:0.95rem; color:var(--sta-teal-50); line-height:1.75;"><p style="margin:0 0 1rem 0;">Alle skal ha lik rett, mulighet og tilgang til høyere utdanning. Det skal aktivt arbeides for å utjevne forskjeller som hindrer enkeltindividets mulighet til å delta i, og fullføre høyere utdanning. Sektoren skal være universelt utformet og offentlig høyere utdanning skal være gratis slik at heltidsstudenten realiseres.</p><p style="margin:0 0 1rem 0;">Alle studenter skal ha en trygg studiehverdag uten trakassering og diskriminering. Studentenes læringsmiljø skal ha et sterkt rettslig vern, på lik linje med arbeidstakers arbeidsmiljø. Alle som studerer på Universitetet i Agder (UiA) skal oppleve mestring, og ha et læringsmiljø som gir rom for å lykkes med studiene.</p><p style="margin:0;">Studentenes psykiske og fysiske helse er et offentlig samfunnsansvar. Det skal tilrettelegges for at alle studenter kan delta i studentfrivilligheten. Studentenes velferdstilbud og økonomiske støtteordninger skal skape trygge og forutsigbare rammer for studenten uavhengig av studiesituasjonen.</p></div>'
                                    }, 'sta-pillar-body'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Pillar 2: Kvalitetskultur og dannelse
                        {
                            id: 'pp_p2_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                padding: { unit: 'px', top: '28', right: '32', bottom: '28', left: '32', isLinked: false },
                                border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_color: 'rgba(158, 207, 201, 0.15)',
                                background_background: 'classic',
                                background_color: 'rgba(255, 255, 255, 0.04)',
                                flex_direction: 'column',
                                flex_gap: { unit: 'px', column: '0', row: '12', isLinked: false }
                            }, 'sta-card sta-pillar-card'),
                            elements: [
                                {
                                    id: 'pp_p2_t_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: '<span style="color:var(--sta-orange); font-size:1.35rem; font-weight:800;">2. Kvalitetskultur og dannelse</span>',
                                        header_size: 'h3'
                                    }, 'sta-pillar-title'),
                                    elements: []
                                },
                                {
                                    id: 'pp_p2_txt_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<div style="font-size:0.95rem; color:var(--sta-teal-50); line-height:1.75;"><p style="margin:0 0 1rem 0;">Høyere utdanning skal være av høy kvalitet, internasjonalt orientert, forskningsbasert og samfunnsrelevant. Studentene skal være en aktiv del av det akademiske felleskapet og ses på som en likeverdig part i arbeidet med å sikre høy kvalitet i utdanning, og en ressurs for forskning.</p><p style="margin:0 0 1rem 0;">De ansatte skal ha høy faglig og pedagogisk kompetanse. Vurdering av studentenes kompetanse skal skje på en rettferdig, variert, pedagogisk og faglig begrunnet måte. Studentmedvirkning er en sentral del av utdanningen.</p><p style="margin:0;">Høyere utdanning skal bidra til akademisk dannelse. Den skal gi studenter kompetanse til å utvikle analytiske egenskaper, til å forstå kritisk tenkning og bidra til utvikling av faglig etisk sans. Dette skal gi studenter verktøy til å stille kritiske spørsmål i utviklingen av akademia, også i samfunnet for øvrig som deltagende borgere.</p></div>'
                                    }, 'sta-pillar-body'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Pillar 3: Akademias samfunnsansvar
                        {
                            id: 'pp_p3_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                padding: { unit: 'px', top: '28', right: '32', bottom: '28', left: '32', isLinked: false },
                                border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_color: 'rgba(158, 207, 201, 0.15)',
                                background_background: 'classic',
                                background_color: 'rgba(255, 255, 255, 0.04)',
                                flex_direction: 'column',
                                flex_gap: { unit: 'px', column: '0', row: '12', isLinked: false }
                            }, 'sta-card sta-pillar-card'),
                            elements: [
                                {
                                    id: 'pp_p3_t_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: '<span style="color:var(--sta-orange); font-size:1.35rem; font-weight:800;">3. Akademias samfunnsansvar</span>',
                                        header_size: 'h3'
                                    }, 'sta-pillar-title'),
                                    elements: []
                                },
                                {
                                    id: 'pp_p3_txt_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<div style="font-size:0.95rem; color:var(--sta-teal-50); line-height:1.75;"><p style="margin:0 0 1rem 0;">Grunnsteinen i et demokrati er å utfordre etablert kunnskap. Akademia har et fellesansvar for å informere borgere om meningsbrytende kunnskap slik at samfunnet kommer frem til de beste løsningene som sikrer samfunnets beste. Akademia skal være en aktiv deltager i den felles samfunnsdebatten. Institusjonen skal være bevisst på sitt ansvar og synliggjøre på hvilken måte de selv svarer på utfordringene samfunnet står ovenfor. Utdanning, forskning og innovasjon er viktig for å bygge opp og videreutvikle hele samfunnet.</p><p style="margin:0;">I norsk akademia skal det være faglig autonome institusjoner som prioriterer akademisk frihet. Det er viktig å verne rundt studenters og ansattes ytringsfrihet, rettigheter og faglig frihet.</p></div>'
                                    }, 'sta-pillar-body'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        },

                        // Pillar 4: Internasjonalisering
                        {
                            id: 'pp_p4_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                padding: { unit: 'px', top: '28', right: '32', bottom: '28', left: '32', isLinked: false },
                                border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                                border_border: 'solid',
                                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                border_color: 'rgba(158, 207, 201, 0.15)',
                                background_background: 'classic',
                                background_color: 'rgba(255, 255, 255, 0.04)',
                                flex_direction: 'column',
                                flex_gap: { unit: 'px', column: '0', row: '12', isLinked: false }
                            }, 'sta-card sta-pillar-card'),
                            elements: [
                                {
                                    id: 'pp_p4_t_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: '<span style="color:var(--sta-orange); font-size:1.35rem; font-weight:800;">4. Internasjonalisering</span>',
                                        header_size: 'h3'
                                    }, 'sta-pillar-title'),
                                    elements: []
                                },
                                {
                                    id: 'pp_p4_txt_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<div style="font-size:0.95rem; color:var(--sta-teal-50); line-height:1.75;"><p style="margin:0 0 1rem 0;">Høyere utdanning skal være en arena for internasjonalisering av utdanning, kunnskap og kultur. Internasjonalisering skal sees på som en ressurs, og må derfor investeres i for å sikre internasjonale perspektiver hos studenter og ansatte.</p><p style="margin:0 0 1rem 0;">Universitetet skal arbeide for større tilrettelegging for både utveksling, men også inkludering av innvekslende studenter. Internasjonalisering er en ressurs for institusjonen og studentene som bidrar til bredere kunnskap og perspektiver. Studenter som innveksler til Norge skal ha gode forutsetninger til å delta både faglig og sosialt i studielivet.</p><p style="margin:0;">Studenter skal ha rett til trygghet, akademisk frihet og demokratiske rettigheter. Internasjonal solidaritet i akademia er viktig for å bygge et sterkt internasjonalt studentfelleskap og for å styrke den globale studentstemmen.</p></div>'
                                    }, 'sta-pillar-body'),
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

// -------------------------------------------------------------
// OUTPUT GENERATION
// -------------------------------------------------------------
const outDir = path.join(__dirname, '..', 'sta-wordpress', 'sta-theme', 'inc');

const valgkomiteenData = buildValgkomiteenData();
fs.writeFileSync(path.join(outDir, 'clean_elementor_valgkomiteen_data.json'), JSON.stringify(valgkomiteenData, null, 2));
console.log('Built clean_elementor_valgkomiteen_data.json with', valgkomiteenData[0].elements.length, 'top-level elements.');

const dokumenterData = buildDokumenterData();
fs.writeFileSync(path.join(outDir, 'clean_elementor_dokumenter_data.json'), JSON.stringify(dokumenterData, null, 2));
console.log('Built clean_elementor_dokumenter_data.json with', dokumenterData[0].elements.length, 'top-level elements.');

const prinsipprogramData = buildPrinsipprogramData();
fs.writeFileSync(path.join(outDir, 'clean_elementor_prinsipprogram_data.json'), JSON.stringify(prinsipprogramData, null, 2));
console.log('Built clean_elementor_prinsipprogram_data.json with', prinsipprogramData[0].elements.length, 'top-level elements.');
