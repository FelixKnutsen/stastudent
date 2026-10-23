// scratch/build_elementor_homepage.js
// Constructs the clean, native Elementor JSON structure for Post 11503
// matching the exact original Next.js homepage design.

const fs = require('fs');

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

// Helper to set both css_classes and _css_classes so Elementor containers AND widgets both get classes
function setClasses(settings, classes) {
    settings.css_classes = classes;
    settings._css_classes = classes;
    return settings;
}

function buildCleanElementorData() {
    return [
        // 1. Hero Banner Image Container
        {
            id: 'hero_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1280 },
                padding: { unit: 'px', top: '24', right: '24', bottom: '16', left: '24', isLinked: false }
            }, 'sta-hero-banner-section'),
            elements: [
                {
                    id: 'hero_img_' + generateId(),
                    elType: 'widget',
                    widgetType: 'image',
                    settings: setClasses({
                        image: {
                            url: 'https://stastudent.no/wp-content/uploads/2025/11/IMG_4781_CROP-scaled.jpg',
                            id: 16619,
                            source: 'library'
                        },
                        image_size: 'full'
                    }, 'sta-hero-banner-img'),
                    elements: []
                }
            ],
            isInner: false
        },

        // 2. Verv CTA Section Container
        {
            id: 'verv_sec_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1280 },
                padding: { unit: 'px', top: '16', right: '24', bottom: '16', left: '24', isLinked: false }
            }, 'sta-verv-section'),
            elements: [
                {
                    id: 'verv_box_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_justify_content: 'space-between',
                        flex_align_items: 'center'
                    }, 'sta-verv-banner'),
                    elements: [
                        {
                            id: 'verv_txt_col_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                flex_align_items: 'flex-start'
                            }, 'sta-verv-text-col'),
                            elements: [
                                {
                                    id: 'verv_title_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: 'Engasjer deg - still til verv!',
                                        header_size: 'h2'
                                    }, 'sta-verv-banner-title'),
                                    elements: []
                                },
                                {
                                    id: 'verv_sub_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<p>Bli med og gjør en forskjell for over 14 000 studenter ved Universitetet i Agder.</p>'
                                    }, 'sta-verv-banner-sub'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        },
                        {
                            id: 'verv_btn_' + generateId(),
                            elType: 'widget',
                            widgetType: 'button',
                            settings: setClasses({
                                text: 'Ledige verv',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=ledige-verv', is_external: '', nofollow: '' },
                                selected_icon: { value: 'fas fa-arrow-right', library: 'fa-solid' },
                                icon_align: 'right'
                            }, 'sta-btn sta-btn-orange'),
                            elements: []
                        }
                    ],
                    isInner: true
                }
            ],
            isInner: false
        },

        // 3. Quick Nav Grid (4 Cards)
        {
            id: 'quick_sec_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1280 },
                padding: { unit: 'px', top: '32', right: '24', bottom: '32', left: '24', isLinked: false }
            }, 'sta-quick-nav'),
            elements: [
                {
                    id: 'quick_grid_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row',
                        flex_wrap: 'wrap'
                    }, 'sta-quick-grid'),
                    elements: [
                        // Card 1: Linjeforeninger
                        {
                            id: 'qcard_1_' + generateId(),
                            elType: 'widget',
                            widgetType: 'icon-box',
                            settings: setClasses({
                                selected_icon: { value: 'fas fa-graduation-cap', library: 'fa-solid' },
                                title_text: 'Linjeforeninger',
                                description_text: 'Møt studentene på ditt studieprogram og delta på sosiale og faglige aktiviteter.',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=linjeforeninger', is_external: '', nofollow: '' },
                                position: 'top'
                            }, 'sta-quick-card'),
                            elements: []
                        },
                        // Card 2: Lokaler
                        {
                            id: 'qcard_2_' + generateId(),
                            elType: 'widget',
                            widgetType: 'icon-box',
                            settings: setClasses({
                                selected_icon: { value: 'fas fa-building', library: 'fa-solid' },
                                title_text: 'Lokaler',
                                description_text: 'Lei eller lån lokaler til foreningsmøter, kurs eller studentarrangementer.',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=lokaler', is_external: '', nofollow: '' },
                                position: 'top'
                            }, 'sta-quick-card'),
                            elements: []
                        },
                        // Card 3: Tillitsvalgt
                        {
                            id: 'qcard_3_' + generateId(),
                            elType: 'widget',
                            widgetType: 'icon-box',
                            settings: setClasses({
                                selected_icon: { value: 'fas fa-users', library: 'fa-solid' },
                                title_text: 'Tillitsvalgt',
                                description_text: 'Ressurser, opplæring og verktøy for tillitsvalgte og studentrepresentanter.',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=for-tillitsvalgte', is_external: '', nofollow: '' },
                                position: 'top'
                            }, 'sta-quick-card'),
                            elements: []
                        },
                        // Card 4: Studentaktiviteter
                        {
                            id: 'qcard_4_' + generateId(),
                            elType: 'widget',
                            widgetType: 'icon-box',
                            settings: setClasses({
                                selected_icon: { value: 'fas fa-star', library: 'fa-solid' },
                                title_text: 'Studentaktiviteter',
                                description_text: 'Idrettslag, kulturklubber og studentorganisasjoner ved campus.',
                                link: { url: 'https://stastudent.no/reliant/?sta_page=studentaktiviteter', is_external: '', nofollow: '' },
                                position: 'top'
                            }, 'sta-quick-card'),
                            elements: []
                        }
                    ],
                    isInner: true
                }
            ],
            isInner: false
        },

        // 4. Latest News (SISTE NYTT)
        {
            id: 'news_sec_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'full',
                background_background: 'classic',
                background_color: 'rgba(4, 24, 23, 0.4)',
                padding: { unit: 'px', top: '48', right: '0', bottom: '48', left: '0', isLinked: false }
            }, 'sta-news-section'),
            elements: [
                {
                    id: 'news_box_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'boxed',
                        boxed_width: { unit: 'px', size: 1280 },
                        padding: { unit: 'px', top: '0', right: '24', bottom: '0', left: '24', isLinked: false }
                    }, 'sta-container'),
                    elements: [
                        // News Header Row
                        {
                            id: 'news_hdr_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'row',
                                flex_justify_content: 'space-between',
                                flex_align_items: 'center',
                                margin: { unit: 'px', top: '0', right: '0', bottom: '28', left: '0', isLinked: false }
                            }, 'sta-news-header-row'),
                            elements: [
                                {
                                    id: 'news_title_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: 'SISTE NYTT',
                                        header_size: 'h2',
                                        link: { url: 'https://stastudent.no/reliant/?sta_page=nyheter', is_external: '', nofollow: '' }
                                    }, 'sta-news-section-title'),
                                    elements: []
                                },
                                {
                                    id: 'news_btn_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'button',
                                    settings: setClasses({
                                        text: 'Se alle nyheter',
                                        link: { url: 'https://stastudent.no/reliant/?sta_page=nyheter', is_external: '', nofollow: '' },
                                        selected_icon: { value: 'fas fa-arrow-right', library: 'fa-solid' },
                                        icon_align: 'right'
                                    }, 'sta-news-all-btn'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        },
                        // Dynamic News Grid Shortcode
                        {
                            id: 'news_grid_widget_' + generateId(),
                            elType: 'widget',
                            widgetType: 'shortcode',
                            settings: setClasses({
                                shortcode: '[sta_frontpage_news count="3"]'
                            }, 'sta-frontpage-news-widget'),
                            elements: []
                        }
                    ],
                    isInner: true
                }
            ],
            isInner: false
        },

        // 5. Featured Section (Card 1: Studentparlamentet, Card 2: UiA Karriereuka)
        {
            id: 'feat_sec_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'boxed',
                boxed_width: { unit: 'px', size: 1280 },
                padding: { unit: 'px', top: '56', right: '24', bottom: '56', left: '24', isLinked: false }
            }, 'sta-features-section'),
            elements: [
                // Feature 1: Studentparlamentet
                {
                    id: 'feat1_card_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row'
                    }, 'sta-feature-card'),
                    elements: [
                        {
                            id: 'feat1_img_box_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full'
                            }, 'sta-feature-img-box'),
                            elements: [
                                {
                                    id: 'feat1_img_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'image',
                                    settings: {
                                        image: {
                                            url: 'https://stastudent.no/wp-content/uploads/2025/11/IMG_4780-1024x683.jpg'
                                        },
                                        image_size: 'large'
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        },
                        {
                            id: 'feat1_content_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                flex_align_items: 'flex-start'
                            }, 'sta-feature-content'),
                            elements: [
                                {
                                    id: 'feat1_title_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: {
                                        title: 'Studentparlamentet',
                                        header_size: 'h2'
                                    },
                                    elements: []
                                },
                                {
                                    id: 'feat1_sub_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: 'UiAs øverste studentrepresentanter​',
                                        header_size: 'p'
                                    }, 'sta-feature-subtitle'),
                                    elements: []
                                },
                                {
                                    id: 'feat1_text_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<p>Studentparlamentet består av 25 folkevalgte representanter som fatter de overordnede politiske beslutningene og velger STA-styret.</p>'
                                    }, 'sta-feature-text'),
                                    elements: []
                                },
                                {
                                    id: 'feat1_btn_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'button',
                                    settings: setClasses({
                                        text: 'Les mer!',
                                        link: { url: 'https://stastudent.no/reliant/?sta_page=studentparlamentet', is_external: '', nofollow: '' },
                                        selected_icon: { value: 'fas fa-arrow-right', library: 'fa-solid' },
                                        icon_align: 'right'
                                    }, 'sta-btn sta-btn-orange'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        }
                    ],
                    isInner: true
                },

                // Feature 2: UiA Karriereuka
                {
                    id: 'feat2_card_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'full',
                        flex_direction: 'row'
                    }, 'sta-feature-card'),
                    elements: [
                        {
                            id: 'feat2_img_box_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full'
                            }, 'sta-feature-img-box'),
                            elements: [
                                {
                                    id: 'feat2_img_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'image',
                                    settings: {
                                        image: {
                                            url: 'https://stastudent.no/wp-content/uploads/2026/02/DSC05899-–-middels.jpeg'
                                        },
                                        image_size: 'large'
                                    },
                                    elements: []
                                }
                            ],
                            isInner: true
                        },
                        {
                            id: 'feat2_content_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full',
                                flex_direction: 'column',
                                flex_align_items: 'flex-start'
                            }, 'sta-feature-content'),
                            elements: [
                                {
                                    id: 'feat2_title_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: {
                                        title: 'UiA Karriereuka',
                                        header_size: 'h2'
                                    },
                                    elements: []
                                },
                                {
                                    id: 'feat2_sub_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: 'Studentenes arena for kontakt med næringslivet',
                                        header_size: 'p'
                                    }, 'sta-feature-subtitle'),
                                    elements: []
                                },
                                {
                                    id: 'feat2_text_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<p>Møt fremtidige arbeidsgivere, delta på workshops og bygg nettverk for livet etter studiene.</p>'
                                    }, 'sta-feature-text'),
                                    elements: []
                                },
                                {
                                    id: 'feat2_btn_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'button',
                                    settings: setClasses({
                                        text: 'Les mer!',
                                        link: { url: 'https://uiakarriereuka.no/', is_external: 'on', nofollow: '' },
                                        selected_icon: { value: 'fas fa-external-link-alt', library: 'fa-solid' },
                                        icon_align: 'right'
                                    }, 'sta-btn sta-btn-orange'),
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
        },

        // 6. Collaborating Partners Section (Samarbeidspartnere)
        {
            id: 'part_sec_' + generateId(),
            elType: 'container',
            settings: setClasses({
                content_width: 'full'
            }, 'sta-partners-section'),
            elements: [
                {
                    id: 'part_box_' + generateId(),
                    elType: 'container',
                    settings: setClasses({
                        content_width: 'boxed',
                        boxed_width: { unit: 'px', size: 1280 },
                        padding: { unit: 'px', top: '0', right: '24', bottom: '0', left: '24', isLinked: false }
                    }, 'sta-container'),
                    elements: [
                        // Section Header
                        {
                            id: 'part_hdr_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full'
                            }, 'sta-section-header'),
                            elements: [
                                {
                                    id: 'part_title_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'heading',
                                    settings: setClasses({
                                        title: 'Samarbeidspartnere',
                                        header_size: 'h2',
                                        align: 'center'
                                    }, 'sta-section-title'),
                                    elements: []
                                },
                                {
                                    id: 'part_sub_' + generateId(),
                                    elType: 'widget',
                                    widgetType: 'text-editor',
                                    settings: setClasses({
                                        editor: '<p style=\"text-align: center;\">Vi samarbeider tett med sentrale aktører i UH-sektoren og Agder-regionen</p>'
                                    }, 'sta-section-subtitle'),
                                    elements: []
                                }
                            ],
                            isInner: true
                        },
                        // Partners Grid (4 cards)
                        {
                            id: 'part_grid_' + generateId(),
                            elType: 'container',
                            settings: setClasses({
                                content_width: 'full'
                            }, 'sta-partners-grid'),
                            elements: [
                                // Partner 1: NSO
                                {
                                    id: 'pcard_1_' + generateId(),
                                    elType: 'container',
                                    settings: setClasses({
                                        content_width: 'full',
                                        link: { url: 'https://student.no', is_external: 'on', nofollow: '' }
                                    }, 'sta-partner-card'),
                                    elements: [
                                        {
                                            id: 'pcard_1_logo_' + generateId(),
                                            elType: 'container',
                                            settings: setClasses({ content_width: 'full' }, 'sta-partner-logo-box'),
                                            elements: [
                                                {
                                                    id: 'p1_img_' + generateId(),
                                                    elType: 'widget',
                                                    widgetType: 'image',
                                                    settings: {
                                                        image: { url: 'https://stastudent.no/wp-content/uploads/2024/05/NSO-logo.png', source: 'library' }
                                                    },
                                                    elements: []
                                                }
                                            ],
                                            isInner: true
                                        },
                                        {
                                            id: 'pcard_1_info_' + generateId(),
                                            elType: 'container',
                                            settings: setClasses({ content_width: 'full' }, 'sta-partner-info'),
                                            elements: [
                                                {
                                                    id: 'p1_name_' + generateId(),
                                                    elType: 'widget',
                                                    widgetType: 'heading',
                                                    settings: setClasses({
                                                        title: 'Norsk studentorganisasjon (NSO)',
                                                        header_size: 'span'
                                                    }, 'sta-partner-name'),
                                                    elements: []
                                                }
                                            ],
                                            isInner: true
                                        }
                                    ],
                                    isInner: true
                                },
                                // Partner 2: UiA
                                {
                                    id: 'pcard_2_' + generateId(),
                                    elType: 'container',
                                    settings: setClasses({
                                        content_width: 'full',
                                        link: { url: 'https://www.uia.no', is_external: 'on', nofollow: '' }
                                    }, 'sta-partner-card'),
                                    elements: [
                                        {
                                            id: 'pcard_2_logo_' + generateId(),
                                            elType: 'container',
                                            settings: setClasses({ content_width: 'full' }, 'sta-partner-logo-box'),
                                            elements: [
                                                {
                                                    id: 'p2_img_' + generateId(),
                                                    elType: 'widget',
                                                    widgetType: 'image',
                                                    settings: {
                                                        image: { url: 'https://stastudent.no/wp-content/uploads/2020/11/uia-horisontal-med-navn-Positiv.png', source: 'library' }
                                                    },
                                                    elements: []
                                                }
                                            ],
                                            isInner: true
                                        },
                                        {
                                            id: 'pcard_2_info_' + generateId(),
                                            elType: 'container',
                                            settings: setClasses({ content_width: 'full' }, 'sta-partner-info'),
                                            elements: [
                                                {
                                                    id: 'p2_name_' + generateId(),
                                                    elType: 'widget',
                                                    widgetType: 'heading',
                                                    settings: setClasses({
                                                        title: 'Universitetet i Agder (UiA)',
                                                        header_size: 'span'
                                                    }, 'sta-partner-name'),
                                                    elements: []
                                                }
                                            ],
                                            isInner: true
                                        }
                                    ],
                                    isInner: true
                                },
                                // Partner 3: SiA
                                {
                                    id: 'pcard_3_' + generateId(),
                                    elType: 'container',
                                    settings: setClasses({
                                        content_width: 'full',
                                        link: { url: 'https://sia.no', is_external: 'on', nofollow: '' }
                                    }, 'sta-partner-card'),
                                    elements: [
                                        {
                                            id: 'pcard_3_logo_' + generateId(),
                                            elType: 'container',
                                            settings: setClasses({ content_width: 'full' }, 'sta-partner-logo-box'),
                                            elements: [
                                                {
                                                    id: 'p3_img_' + generateId(),
                                                    elType: 'widget',
                                                    widgetType: 'image',
                                                    settings: {
                                                        image: { url: 'https://stastudent.no/wp-content/uploads/2020/11/sialogo.png', source: 'library' }
                                                    },
                                                    elements: []
                                                }
                                            ],
                                            isInner: true
                                        },
                                        {
                                            id: 'pcard_3_info_' + generateId(),
                                            elType: 'container',
                                            settings: setClasses({ content_width: 'full' }, 'sta-partner-info'),
                                            elements: [
                                                {
                                                    id: 'p3_name_' + generateId(),
                                                    elType: 'widget',
                                                    widgetType: 'heading',
                                                    settings: setClasses({
                                                        title: 'Studentsamskipnaden i Agder (SiA)',
                                                        header_size: 'span'
                                                    }, 'sta-partner-name'),
                                                    elements: []
                                                }
                                            ],
                                            isInner: true
                                        }
                                    ],
                                    isInner: true
                                },
                                // Partner 4: SAIH
                                {
                                    id: 'pcard_4_' + generateId(),
                                    elType: 'container',
                                    settings: setClasses({
                                        content_width: 'full',
                                        link: { url: 'https://www.saih.no/no', is_external: 'on', nofollow: '' }
                                    }, 'sta-partner-card'),
                                    elements: [
                                        {
                                            id: 'pcard_4_logo_' + generateId(),
                                            elType: 'container',
                                            settings: setClasses({ content_width: 'full' }, 'sta-partner-logo-box'),
                                            elements: [
                                                {
                                                    id: 'p4_img_' + generateId(),
                                                    elType: 'widget',
                                                    widgetType: 'image',
                                                    settings: {
                                                        image: { url: 'https://stastudent.no/wp-content/uploads/2024/05/SAIH-logo-PNG-1-1024x1024.png', source: 'library' }
                                                    },
                                                    elements: []
                                                }
                                            ],
                                            isInner: true
                                        },
                                        {
                                            id: 'pcard_4_info_' + generateId(),
                                            elType: 'container',
                                            settings: setClasses({ content_width: 'full' }, 'sta-partner-info'),
                                            elements: [
                                                {
                                                    id: 'p4_name_' + generateId(),
                                                    elType: 'widget',
                                                    widgetType: 'heading',
                                                    settings: setClasses({
                                                        title: 'Studentenes og Akademikernes Internasjonale Hjelpefond (SAIH)',
                                                        header_size: 'span'
                                                    }, 'sta-partner-name'),
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
                        }
                    ],
                    isInner: true
                }
            ],
            isInner: false
        }
    ];
}

const data = buildCleanElementorData();
console.log('Successfully generated clean Elementor data with', data.length, 'sections.');
fs.writeFileSync('clean_elementor_homepage_data.json', JSON.stringify(data, null, 2));
fs.writeFileSync('sta-wordpress/sta-theme/inc/clean_elementor_homepage_data.json', JSON.stringify(data, null, 2));
console.log('Updated clean_elementor_homepage_data.json in root and sta-theme/inc/!');
