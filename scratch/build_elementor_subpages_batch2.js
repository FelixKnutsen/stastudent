// scratch/build_elementor_subpages_batch2.js
// Generates clean, native Elementor JSON container/widget structures for Batch 2:
// 1. STA-Styret (Post 30, slug: sta-styret)
// 2. Råd, Styrer og Utvalg - RSU (Post 325, slug: rad-styrer-og-utvalg)
// 3. Studentparlamentet (Post 161, slug: studentparlamentet)

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

// ---------------------------------------------------------------------
// 1. STA-Styret (Post 30)
// ---------------------------------------------------------------------
function buildStyretData() {
    const boardMembersRaw = JSON.parse(fs.readFileSync('sta-wordpress/sta-theme/data/board_members.json', 'utf8'));

    const memberCards = boardMembersRaw.map((member, idx) => {
        const respHtml = member.responsibilities && member.responsibilities.length > 0
            ? `<div style="margin-top:1rem; padding-top:0.75rem; border-top:1px solid rgba(158,207,201,0.2);">
                 <p style="font-size:0.75rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; color:rgba(255,255,255,0.9); margin:0 0 0.5rem;">Hovedansvar</p>
                 <ul style="font-size:0.85rem; color:var(--sta-teal-100); line-height:1.6; padding-left:1.1rem; margin:0;">
                   ${member.responsibilities.map(r => `<li>${r}</li>`).join('')}
                 </ul>
               </div>`
            : '';

        const contactHtml = `
            <div style="margin-top:1.5rem; padding-top:1rem; border-top:1px solid rgba(158,207,201,0.2); display:flex; flex-direction:column; gap:0.5rem; font-size:0.85rem;">
                ${member.email ? `
                <a href="mailto:${member.email}" style="display:flex; align-items:center; gap:0.5rem; color:var(--sta-teal-100); text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--sta-orange)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${member.email}</span>
                </a>` : ''}
                ${member.phone ? `
                <a href="tel:${member.phone.replace(/\s+/g, '')}" style="display:flex; align-items:center; gap:0.5rem; color:var(--sta-teal-100); text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--sta-orange)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>${member.phone}</span>
                </a>` : ''}
            </div>
        `;

        return {
            id: 'mcard_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'full',
                flex_direction: 'column',
                flex_justify_content: 'space-between',
                padding: { unit: 'px', top: '24', right: '24', bottom: '24', left: '24', isLinked: true },
                background_background: 'classic',
                border_border: 'solid',
                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                border_color: 'rgba(61, 148, 139, 0.3)',
                border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true }
            }, 'sta-card sta-board-card'),
            elements: [
                {
                    id: 'm_top_' + generateId(),
                    elType: 'container',
                    settings: { content_width: 'full', flex_direction: 'column' },
                    elements: [
                        {
                            id: 'm_img_' + generateId(),
                            elType: 'widget',
                            widgetType: 'image',
                            settings: setClasses({
                                image: { url: member.imageUrl || '', source: 'library' },
                                image_size: 'medium_large'
                            }, 'sta-board-photo'),
                            elements: []
                        },
                        {
                            id: 'm_name_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: member.name,
                                header_size: 'h3',
                                css_classes: 'sta-board-name'
                            }, 'sta-board-name'),
                            elements: []
                        },
                        {
                            id: 'm_role_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: member.role,
                                header_size: 'p',
                                custom_color: '#ef7330',
                                css_classes: 'sta-board-role'
                            }, 'sta-board-role'),
                            elements: []
                        },
                        {
                            id: 'm_resp_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: { editor: respHtml },
                            elements: []
                        }
                    ],
                    isInner: true
                },
                {
                    id: 'm_bot_' + generateId(),
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: { editor: contactHtml },
                    elements: []
                }
            ],
            isInner: true
        };
    });

    return [
        {
            id: 'styret_wrap_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1200 },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '0', row: '40', isLinked: false }
            }, 'sta-subpage-root sta-styret-root'),
            elements: [
                // Header
                {
                    id: 'styret_hdr_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center',
                        text_align: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'styret_b_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: '<span class="sta-badge">Ledelse</span>',
                                header_size: 'div',
                                align: 'center'
                            }, 'sta-badge-wrap'),
                            elements: []
                        },
                        {
                            id: 'styret_t_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'STA-styret og Sekretariatet 2026-2027',
                                header_size: 'h1',
                                align: 'center'
                            }, 'sta-hero-title'),
                            elements: []
                        },
                        {
                            id: 'styret_sub_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: setClasses({
                                editor: '<p style="color:var(--sta-teal-100); font-size:1.15rem; max-width:800px; margin:0 auto; line-height:1.6;">STA-styret og Sekretariatet står for den daglige driften av organisasjonen og har hovedansvaret for studentdemokratiet på Universitetet i Agder.</p>'
                            }, 'sta-hero-subtitle'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Group Photo Banner
                {
                    id: 'styret_gp_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                        border_color: 'rgba(61,148,139,0.3)',
                        overflow: 'hidden',
                        box_shadow_box_shadow_type: 'yes',
                        box_shadow_box_shadow: { horizontal: 0, vertical: 25, blur: 50, spread: -12, color: 'rgba(0,0,0,0.5)' }
                    }, 'sta-banner-container'),
                    elements: [
                        {
                            id: 'styret_gp_img_' + generateId(),
                            elType: 'widget',
                            widgetType: 'image',
                            settings: {
                                image: { url: 'https://stastudent.no/wp-content/uploads/2026/08/Gruppebilde-STA-styret-1024x683.jpg', source: 'library' },
                                image_size: 'large'
                            },
                            elements: []
                        },
                        {
                            id: 'styret_gp_cap_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: {
                                editor: `<div style="background:rgba(4,24,23,0.9); padding:1.25rem 1.75rem; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem; font-size:0.85rem; color:var(--sta-teal-100);">
                                            <p style="margin:0;"><strong style="color:#fff;">Pressehenvendelser:</strong> Alle pressehenvendelser går til studentleder Karen Elise Stenersen.</p>
                                            <a href="https://www.skyfish.com/p/uia/2397359" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.4rem; font-weight:700; color:var(--sta-orange); text-decoration:none;">
                                                <span>Last ned pressebilder (Skyfish) &rarr;</span>
                                            </a>
                                         </div>`
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Board Grid
                {
                    id: 'styret_grid_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_wrap: 'wrap',
                        flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                    }, 'sta-board-grid'),
                    elements: memberCards,
                    isInner: true
                },

                // Campus & Joint Contact Info Box
                {
                    id: 'styret_contact_' + generateId(),
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: {
                        editor: `<div style="padding:2rem; border-radius:1rem; background:rgba(7,38,36,0.4); border:1px solid rgba(61,148,139,0.3); display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:2rem; font-size:0.85rem; color:var(--sta-teal-200);">
                                    <div>
                                        <h4 style="font-size:1rem; font-weight:700; color:#fff; margin:0 0 0.5rem;">Campus Kristiansand</h4>
                                        <p style="margin:0;">Universitetsveien 24, 4630 Kristiansand S</p>
                                    </div>
                                    <div>
                                        <h4 style="font-size:1rem; font-weight:700; color:#fff; margin:0 0 0.5rem;">Campus Grimstad</h4>
                                        <p style="margin:0;">Jon Lilletuns vei 9, 4879 Grimstad</p>
                                    </div>
                                    <div>
                                        <h4 style="font-size:1rem; font-weight:700; color:#fff; margin:0 0 0.5rem;">Felles kontakt</h4>
                                        <p style="margin:0 0 0.25rem;">E-post: sta@uia.no</p>
                                        <p style="margin:0 0 0.25rem;">Tlf: +47 38 14 20 10</p>
                                        <p style="margin:0;">Org.nr: 981 596 412</p>
                                    </div>
                                 </div>`
                    },
                    elements: []
                }
            ],
            isInner: false
        }
    ];
}

// ---------------------------------------------------------------------
// 2. Råd, Styrer og Utvalg - RSU (Post 325)
// ---------------------------------------------------------------------
function buildRsuData() {
    const committeesData = JSON.parse(fs.readFileSync('sta-wordpress/sta-theme/data/committees.json', 'utf8'));

    const sixReasons = [
        { title: '1. Representere studentene', desc: 'Være med på å forbedre UiA for studentene, og gjøre studiehverdagen bedre for 14 000 medstudenter.' },
        { title: '2. Nettverksbygging', desc: 'Få et bredt og tverrfaglig nettverk på tvers av studier, campus og med universitetsledelsen.' },
        { title: '3. Arbeidslivsrelevant', desc: 'Utfordre deg selv, få verdifull leder- og samfunnserfaring og skaff deg en solid attest til CV-en.' },
        { title: '4. Organisasjonserfaring', desc: 'Få dypere innsikt i hvordan store kunnskapsorganisasjoner, styrer og demokratiske prosesser fungerer i praksis.' },
        { title: '5. God diskusjonsevne', desc: 'Lære å se saker fra flere sider, argumentere saklig, forhandle og bygge gode kompromisser.' },
        { title: '6. Å bygge seg selv', desc: 'Det viktigste punktet av alle: Du vokser som menneske. Du blir litt glupere, mer reflektert og modnere.' }
    ];

    const reasonCards = sixReasons.map((r) => ({
        id: 'r_c_' + generateId(),
        elType: 'widget',
        widgetType: 'icon-box',
        settings: setClasses({
            title_text: r.title,
            description_text: r.desc,
            position: 'top',
            selected_icon: { value: 'fas fa-star', library: 'fa-solid' },
            primary_color: '#ef7330',
            css_classes: 'sta-card sta-reason-card'
        }, 'sta-card sta-reason-card'),
        elements: []
    }));

    const categoryContainers = committeesData.map((cat) => {
        const itemCards = cat.items.map((item) => {
            const finalUrl = item.infoUrl === '/valgkomiteen' ? 'https://stastudent.no/reliant/?sta_page=ledige-verv' : (item.infoUrl ? (item.infoUrl.startsWith('http') ? item.infoUrl : `https://stastudent.no/reliant/?sta_page=${item.infoUrl.replace(/^\//, '')}`) : '');
            const isExt = item.isExternal || (finalUrl && finalUrl.startsWith('http') && !finalUrl.includes('stastudent.no'));

            return {
                id: 'rsu_item_' + generateId(),
                elType: 'container',
                settings: setClasses({
                    content_width: 'full',
                    flex_direction: 'column',
                    flex_justify_content: 'space-between',
                    padding: { unit: 'px', top: '24', right: '24', bottom: '24', left: '24', isLinked: true },
                    background_background: 'classic',
                    border_border: 'solid',
                    border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                    border_color: 'rgba(61, 148, 139, 0.3)',
                    border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true }
                }, 'sta-card sta-rsu-card'),
                elements: [
                    {
                        id: 'rsu_top_' + generateId(),
                        elType: 'container',
                        settings: { content_width: 'full', flex_direction: 'column' },
                        elements: [
                            {
                                id: 'rsu_title_' + generateId(),
                                elType: 'widget',
                                widgetType: 'heading',
                                settings: setClasses({
                                    title: item.name,
                                    header_size: 'h3',
                                    css_classes: 'sta-rsu-item-title'
                                }, 'sta-rsu-item-title'),
                                elements: []
                            },
                            {
                                id: 'rsu_desc_' + generateId(),
                                elType: 'widget',
                                widgetType: 'text-editor',
                                settings: { editor: `<p style="font-size:0.875rem; color:var(--sta-teal-100); line-height:1.6; margin:0;">${item.desc || ''}</p>` },
                                elements: []
                            }
                        ],
                        isInner: true
                    },
                    ...(finalUrl ? [{
                        id: 'rsu_link_' + generateId(),
                        elType: 'widget',
                        widgetType: 'button',
                        settings: setClasses({
                            text: (item.infoUrlLabel || 'Les mer') + ' →',
                            link: { url: finalUrl, is_external: isExt ? 'on' : '' },
                            css_classes: 'sta-rsu-item-btn'
                        }, 'sta-rsu-item-btn'),
                        elements: []
                    }] : [])
                ],
                isInner: true
            };
        });

        return {
            id: 'rsu_cat_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'full',
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '0', row: '20', isLinked: false }
            }, 'sta-rsu-cat-section'),
            elements: [
                {
                    id: 'rsu_cat_hdr_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_justify_content: 'space-between',
                        flex_align_items: 'center',
                        padding: { unit: 'px', top: '0', right: '0', bottom: '12', left: '0', isLinked: false },
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '0', right: '0', bottom: '1', left: '0', isLinked: false },
                        border_color: 'rgba(158,207,201,0.25)'
                    }, 'sta-rsu-cat-hdr'),
                    elements: [
                        {
                            id: 'rsu_ch_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: { title: cat.title || cat.name, header_size: 'h2' },
                            elements: []
                        },
                        {
                            id: 'rsu_ch_badge_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: {
                                title: `<span class="sta-badge" style="background:rgba(239,115,48,0.18); border:1px solid rgba(239,115,48,0.4); color:var(--sta-orange); font-size:0.75rem;">${cat.items.length} organer / utvalg</span>`,
                                header_size: 'div'
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },
                ...(cat.desc ? [{
                    id: 'rsu_cat_desc_' + generateId(),
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: { editor: `<p style="font-size:0.95rem; color:var(--sta-teal-100); line-height:1.6; margin:0;">${cat.desc}</p>` },
                    elements: []
                }] : []),
                {
                    id: 'rsu_cat_grid_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_wrap: 'wrap',
                        flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                    }, 'sta-rsu-grid'),
                    elements: itemCards,
                    isInner: true
                }
            ],
            isInner: true
        };
    });

    return [
        {
            id: 'rsu_wrap_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1200 },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '0', row: '44', isLinked: false }
            }, 'sta-subpage-root sta-rsu-root'),
            elements: [
                // Header
                {
                    id: 'rsu_hdr_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center',
                        text_align: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'rsu_b_' + generateId(),
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
                            id: 'rsu_t_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Råd, Styrer og Utvalg (RSU)',
                                header_size: 'h1',
                                align: 'center'
                            }, 'sta-hero-title'),
                            elements: []
                        },
                        {
                            id: 'rsu_sub_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: setClasses({
                                editor: '<p style="color:var(--sta-teal-100); font-size:1.15rem; max-width:800px; margin:0 auto; line-height:1.6;">Hos STA kan alle UiA-studenter stille til valg! Bli med på å forme studentenes hverdag.</p>'
                            }, 'sta-hero-subtitle'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Intro & Action Button
                {
                    id: 'rsu_intro_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center',
                        text_align: 'center',
                        margin: { unit: 'px', top: '0', right: 'auto', bottom: '0', left: 'auto', isLinked: false }
                    }, 'sta-intro-box'),
                    elements: [
                        {
                            id: 'rsu_intro_txt_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: {
                                editor: '<p style="font-size:1rem; color:var(--sta-teal-100); line-height:1.7; max-width:768px; margin:0 auto 1.5rem auto;">Valg til råd, styrer og utvalg (RSU) skjer på en valgforsamling, hvor Studentparlamentet stemmer over hvem som får plassene. Valgene lyses ut på stastudent.no og deles i våre kanaler på våren – så følg med! Ved spørsmål, ta gjerne kontakt på <a href="mailto:sta@uia.no" style="color:var(--sta-orange); font-weight:700; text-decoration:underline;">sta@uia.no</a>.</p>'
                            },
                            elements: []
                        },
                        {
                            id: 'rsu_intro_btn_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Se ledige verv nå →',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=ledige-verv' },
                                button_background_color: '#ef7330',
                                css_classes: 'sta-btn sta-btn-orange'
                            }, 'sta-btn sta-btn-orange'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // 6 Reasons Section
                {
                    id: 'rsu_reasons_sec_' + generateId(),
                    elType: 'container',
                    settings: { content_width: 'full', flex_direction: 'column' },
                    elements: [
                        {
                            id: 'rsu_r_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: {
                                title: '6 gode grunner til hvorfor du skal ta på deg verv:',
                                header_size: 'h2',
                                align: 'center'
                            },
                            elements: []
                        },
                        {
                            id: 'rsu_r_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                            }, 'sta-reasons-grid'),
                            elements: reasonCards,
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // Photo Banner
                {
                    id: 'rsu_banner_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                        overflow: 'hidden',
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                        border_color: 'rgba(61,148,139,0.3)',
                        box_shadow_box_shadow_type: 'yes',
                        box_shadow_box_shadow: { horizontal: 0, vertical: 20, blur: 25, spread: -5, color: 'rgba(0,0,0,0.4)' }
                    }, 'sta-photo-banner'),
                    elements: [
                        {
                            id: 'rsu_b_img_' + generateId(),
                            elType: 'widget',
                            widgetType: 'image',
                            settings: {
                                image: { url: 'https://stastudent.no/wp-content/uploads/2025/10/IMG_4439-1024x683.jpg', source: 'library' },
                                image_size: 'large'
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Committee Categories
                ...categoryContainers,

                // Bottom CTA
                {
                    id: 'rsu_bot_cta_' + generateId(),
                    elType: 'container',
                    settings: { content_width: 'full', flex_direction: 'column', flex_align_items: 'center' },
                    elements: [
                        {
                            id: 'rsu_cta_btn_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Se alle ledige verv og søk nå →',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=ledige-verv' },
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

// ---------------------------------------------------------------------
// 3. Studentparlamentet (Post 161)
// ---------------------------------------------------------------------
function buildParliamentData() {
    const facultiesData = JSON.parse(fs.readFileSync('sta-wordpress/sta-theme/data/parliament_faculties.json', 'utf8'));

    const facultyCards = facultiesData.map((fac) => {
        const regularsHtml = `
            <div>
                <h4 style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--sta-orange); margin:0 0 0.6rem 0;">Faste representanter (${fac.representatives.length})</h4>
                <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.45rem;">
                    ${fac.representatives.map(rep => `
                        <li style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; color:var(--sta-teal-100);">
                            <span style="width:0.4rem; height:0.4rem; border-radius:50%; background:var(--sta-orange); flex-shrink:0;"></span>
                            <span>${rep.name}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        const substitutesHtml = `
            <div>
                <h4 style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--sta-teal-300); margin:0 0 0.6rem 0;">Vararepresentanter (${fac.substitutes.length})</h4>
                <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:0.45rem;">
                    ${fac.substitutes.map((sub, idx) => `
                        <li style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; color:var(--sta-teal-100);">
                            <span style="width:0.4rem; height:0.4rem; border-radius:50%; background:var(--sta-teal-400); flex-shrink:0;"></span>
                            ${sub.isVacant 
                                ? `<span style="color:var(--sta-orange); font-style:italic;">Ledig verv – kontakt sta@uia.no</span>`
                                : `<span>${idx + 1}. vara: ${sub.name}</span>`}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        return {
            id: 'fac_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'full',
                flex_direction: 'column',
                flex_justify_content: 'space-between',
                padding: { unit: 'px', top: '24', right: '24', bottom: '24', left: '24', isLinked: true },
                background_background: 'classic',
                border_border: 'solid',
                border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                border_color: 'rgba(61, 148, 139, 0.3)',
                border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true }
            }, 'sta-card sta-parliament-faculty-card'),
            elements: [
                {
                    id: 'fac_hdr_' + generateId(),
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: setClasses({
                        title: fac.name,
                        header_size: 'h3',
                        css_classes: 'sta-faculty-title'
                    }, 'sta-faculty-title'),
                    elements: []
                },
                {
                    id: 'fac_body_' + generateId(),
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: {
                        editor: `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1.25rem;">
                                    ${regularsHtml}
                                    ${substitutesHtml}
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
            id: 'sp_wrap_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1200 },
                padding: { unit: 'px', top: '48', right: '20', bottom: '64', left: '20', isLinked: false },
                flex_direction: 'column',
                flex_gap: { unit: 'px', column: '0', row: '44', isLinked: false }
            }, 'sta-subpage-root sta-studentparlamentet-root'),
            elements: [
                // Header
                {
                    id: 'sp_hdr_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'column',
                        flex_align_items: 'center',
                        text_align: 'center'
                    }, 'sta-page-header'),
                    elements: [
                        {
                            id: 'sp_b_' + generateId(),
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
                            id: 'sp_t_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: setClasses({
                                title: 'Studentparlamentet 2026/2027',
                                header_size: 'h1',
                                align: 'center'
                            }, 'sta-hero-title'),
                            elements: []
                        },
                        {
                            id: 'sp_sub_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: setClasses({
                                editor: '<p style="color:var(--sta-teal-100); font-size:1.15rem; max-width:800px; margin:0 auto; line-height:1.6;">UiAs øverste studentorgan og demokratiske forsamling</p>'
                            }, 'sta-hero-subtitle'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // 16/7 Cropped Banner Image
                {
                    id: 'sp_banner_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true },
                        overflow: 'hidden',
                        border_border: 'solid',
                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                        border_color: 'rgba(158,207,201,0.3)',
                        box_shadow_box_shadow_type: 'yes',
                        box_shadow_box_shadow: { horizontal: 0, vertical: 20, blur: 25, spread: -5, color: 'rgba(0,0,0,0.4)' }
                    }, 'sta-photo-banner'),
                    elements: [
                        {
                            id: 'sp_b_img_' + generateId(),
                            elType: 'widget',
                            widgetType: 'image',
                            settings: {
                                image: { url: 'https://stastudent.no/wp-content/uploads/2025/09/IMG_4688-–-Kopi-CROPPED-1536x581.jpg', source: 'library' },
                                image_size: 'large'
                            },
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Intro Text
                {
                    id: 'sp_intro_' + generateId(),
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: {
                        editor: `<div style="max-width:48rem; margin:0 auto; font-size:1rem; color:var(--sta-teal-100); line-height:1.75; display:flex; flex-direction:column; gap:1.25rem;">
                                    <p style="margin:0;">Studentene har en viktig stemme i demokratiet på UiA. Derfor er Studentparlamentet øverste beslutningsorgan i STA. Studentparlamentet består av 25 representanter fra alle fakultetene og Avdeling for lærerutdanning. Det er disse representantene som skal ta politiske avgjørelser på vegne av UiAs studentmasse.</p>
                                    <p style="margin:0;">Studentparlamentet har møter én gang i måneden hvor parlamentsmedlemmene skal diskutere og vedta saker som STA-styret legger frem. Møtene blir holdt annenhver gang i Kristiansand, og annenhver gang i Grimstad.</p>
                                 </div>`
                    },
                    elements: []
                },

                // Quick Action Cards (Sakspapirer & Protokoller)
                {
                    id: 'sp_quick_grid_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_wrap: 'wrap',
                        flex_justify_content: 'center',
                        flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                    }, 'sta-quick-links-grid'),
                    elements: [
                        {
                            id: 'sp_ql1_' + generateId(),
                            elType: 'widget',
                            widgetType: 'icon-box',
                            settings: setClasses({
                                title_text: 'Sakspapirer til parlamentsmøter',
                                description_text: 'Se innkallinger og saksliste<br><br><span style="color:var(--sta-orange); font-weight:700;">Åpne sakspapirer &rarr;</span>',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=sakspapirer' },
                                position: 'top',
                                selected_icon: { value: 'fas fa-file-alt', library: 'fa-solid' },
                                primary_color: '#ef7330',
                                css_classes: 'sta-card sta-action-card'
                            }, 'sta-card sta-action-card'),
                            elements: []
                        },
                        {
                            id: 'sp_ql2_' + generateId(),
                            elType: 'widget',
                            widgetType: 'icon-box',
                            settings: setClasses({
                                title_text: 'Protokoll fra parlamentsmøter',
                                description_text: 'Vedtatte resolusjoner og referater<br><br><span style="color:var(--sta-orange); font-weight:700;">Åpne protokoller &rarr;</span>',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=referat-fra-moter-i-studentparlamentet' },
                                position: 'top',
                                selected_icon: { value: 'fas fa-clipboard-check', library: 'fa-solid' },
                                primary_color: '#ef7330',
                                css_classes: 'sta-card sta-action-card'
                            }, 'sta-card sta-action-card'),
                            elements: []
                        }
                    ],
                    isInner: true
                },

                // Responsible Persons (Mia Sandøy & Karen Elise Stenersen)
                {
                    id: 'sp_resp_sec_' + generateId(),
                    elType: 'container',
                    settings: { content_width: 'full', flex_direction: 'column' },
                    elements: [
                        {
                            id: 'sp_resp_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: { title: 'Ansvarlige for Studentparlamentet', header_size: 'h2', align: 'center' },
                            elements: []
                        },
                        {
                            id: 'sp_resp_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_justify_content: 'center',
                                flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                            }, 'sta-leadership-grid'),
                            elements: [
                                {
                                    id: 'sp_r1_' + generateId(),
                                    elType: 'container',
                                    settings: setClasses({
                                        content_width: 'full',
                                        flex_direction: 'column',
                                        flex_align_items: 'center',
                                        text_align: 'center',
                                        padding: { unit: 'px', top: '28', right: '28', bottom: '28', left: '28', isLinked: true },
                                        background_background: 'classic',
                                        border_border: 'solid',
                                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                        border_color: 'rgba(61, 148, 139, 0.3)',
                                        border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true }
                                    }, 'sta-card sta-leader-card'),
                                    elements: [
                                        {
                                            id: 'sp_r1_img_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'image',
                                            settings: setClasses({
                                                image: { url: 'https://stastudent.no/wp-content/uploads/2026/08/a0da7b30-a50f-4dd3-9b89-6ec47da958aa.jpg', source: 'library' },
                                                image_size: 'thumbnail',
                                                css_classes: 'sta-leader-avatar'
                                            }, 'sta-leader-avatar'),
                                            elements: []
                                        },
                                        {
                                            id: 'sp_r1_name_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'heading',
                                            settings: { title: 'Mia Sandøy', header_size: 'h3', align: 'center' },
                                            elements: []
                                        },
                                        {
                                            id: 'sp_r1_role_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'heading',
                                            settings: { title: 'Førstekonsulent i STA', header_size: 'p', custom_color: '#ef7330', align: 'center' },
                                            elements: []
                                        },
                                        {
                                            id: 'sp_r1_mail_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'text-editor',
                                            settings: { editor: '<p style="margin:0; text-align:center;"><a href="mailto:sta@uia.no" style="color:var(--sta-teal-100); text-decoration:none; font-size:0.85rem;">sta@uia.no</a></p>' },
                                            elements: []
                                        }
                                    ],
                                    isInner: true
                                },
                                {
                                    id: 'sp_r2_' + generateId(),
                                    elType: 'container',
                                    settings: setClasses({
                                        content_width: 'full',
                                        flex_direction: 'column',
                                        flex_align_items: 'center',
                                        text_align: 'center',
                                        padding: { unit: 'px', top: '28', right: '28', bottom: '28', left: '28', isLinked: true },
                                        background_background: 'classic',
                                        border_border: 'solid',
                                        border_width: { unit: 'px', top: '1', right: '1', bottom: '1', left: '1', isLinked: true },
                                        border_color: 'rgba(61, 148, 139, 0.3)',
                                        border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16', isLinked: true }
                                    }, 'sta-card sta-leader-card'),
                                    elements: [
                                        {
                                            id: 'sp_r2_img_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'image',
                                            settings: setClasses({
                                                image: { url: 'https://stastudent.no/wp-content/uploads/2026/08/Karen-Smil-1024x683.jpg', source: 'library' },
                                                image_size: 'thumbnail',
                                                css_classes: 'sta-leader-avatar'
                                            }, 'sta-leader-avatar'),
                                            elements: []
                                        },
                                        {
                                            id: 'sp_r2_name_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'heading',
                                            settings: { title: 'Karen Elise Stenersen', header_size: 'h3', align: 'center' },
                                            elements: []
                                        },
                                        {
                                            id: 'sp_r2_role_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'heading',
                                            settings: { title: 'Studentleder ved UiA', header_size: 'p', custom_color: '#ef7330', align: 'center' },
                                            elements: []
                                        },
                                        {
                                            id: 'sp_r2_mail_' + generateId(),
                                            elType: 'widget',
                                            widgetType: 'text-editor',
                                            settings: { editor: '<p style="margin:0; text-align:center;"><a href="mailto:staleder@uia.no" style="color:var(--sta-teal-100); text-decoration:none; font-size:0.85rem;">staleder@uia.no</a></p>' },
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

                // Representatives by Faculty
                {
                    id: 'sp_fac_sec_' + generateId(),
                    elType: 'container',
                    settings: { content_width: 'full', flex_direction: 'column' },
                    elements: [
                        {
                            id: 'sp_fac_title_' + generateId(),
                            elType: 'widget',
                            widgetType: 'heading',
                            settings: { title: 'Representanter etter fakultet', header_size: 'h2', align: 'center' },
                            elements: []
                        },
                        {
                            id: 'sp_fac_sub_' + generateId(),
                            elType: 'widget',
                            widgetType: 'text-editor',
                            settings: { editor: '<p style="font-size:0.875rem; color:var(--sta-teal-200); text-align:center; margin:0 0 2rem 0;">Totalt 25 faste folkevalgte representanter og deres personlige varamedlemmer.</p>' },
                            elements: []
                        },
                        {
                            id: 'sp_fac_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_wrap: 'wrap',
                                flex_gap: { unit: 'px', column: '24', row: '24', isLinked: true }
                            }, 'sta-parliament-faculties-grid'),
                            elements: facultyCards,
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // Bottom CTA
                {
                    id: 'sp_bot_cta_' + generateId(),
                    elType: 'container',
                    settings: { content_width: 'full', flex_direction: 'column', flex_align_items: 'center' },
                    elements: [
                        {
                            id: 'sp_cta_btn_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Still til ledig verv i parlamentet →',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=ledige-verv' },
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

// Write JSON files
const incDir = 'sta-wordpress/sta-theme/inc';
if (!fs.existsSync(incDir)) {
    fs.mkdirSync(incDir, { recursive: true });
}

const styretData = buildStyretData();
fs.writeFileSync(path.join(incDir, 'clean_elementor_sta_styret_data.json'), JSON.stringify(styretData, null, 2));
console.log('Generated clean_elementor_sta_styret_data.json with sections:', styretData.length);

const rsuData = buildRsuData();
fs.writeFileSync(path.join(incDir, 'clean_elementor_rad_styrer_og_utvalg_data.json'), JSON.stringify(rsuData, null, 2));
console.log('Generated clean_elementor_rad_styrer_og_utvalg_data.json with sections:', rsuData.length);

const spData = buildParliamentData();
fs.writeFileSync(path.join(incDir, 'clean_elementor_studentparlamentet_data.json'), JSON.stringify(spData, null, 2));
console.log('Generated clean_elementor_studentparlamentet_data.json with sections:', spData.length);
