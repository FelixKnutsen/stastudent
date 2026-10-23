// scratch/update_css.js
const fs = require('fs');
const path = 'sta-wordpress/sta-theme/assets/css/main.css';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('/* ==========================================================================\n   Elementor Front Page');
if (idx === -1) {
    console.error('Marker not found!');
    process.exit(1);
}

const before = content.substring(0, idx).trimEnd() + '\n\n';

const newCss = `/* ==========================================================================
   Elementor Front Page & Design System Integration
   Ensures that native Elementor containers and widgets render with the
   identical typography, colors, layout, card styling, and responsiveness
   as the original approved Next.js website design.
   ========================================================================== */

.sta-front-page-elementor,
.elementor-11503,
.elementor-page-11503 {
    background-color: var(--sta-teal-900) !important;
    color: #ffffff;
    min-height: 80vh;
}

/* Ensure root Elementor containers respect 1280px max-width and responsive gutters */
.sta-front-page-elementor .elementor-element.e-con-boxed,
.elementor-11503 > .elementor-element.e-con-boxed,
.elementor-11503 > .elementor-element.e-con:not(.sta-news-section):not(.sta-partners-section) {
    max-width: 1280px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: clamp(1rem, 3vw, 2rem) !important;
    padding-right: clamp(1rem, 3vw, 2rem) !important;
    width: 100% !important;
    box-sizing: border-box !important;
}

/* 1. Hero Image Banner */
.sta-hero-banner-section {
    padding-top: 1.5rem !important;
    padding-bottom: 1rem !important;
}
.sta-hero-banner-img img,
.sta-hero-banner-section img {
    border-radius: var(--sta-radius-lg) !important;
    width: 100% !important;
    height: auto !important;
    object-fit: cover !important;
    display: block !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35) !important;
    border: 1px solid rgba(158, 207, 201, 0.2) !important;
}

/* 2. Verv CTA Banner */
.sta-verv-banner,
.elementor-element.sta-verv-banner,
.sta-verv-banner.e-con > .e-con-inner {
    background: rgba(9, 50, 47, 0.8) !important;
    border: 1px solid rgba(61, 148, 139, 0.4) !important;
    border-radius: var(--sta-radius) !important;
    padding: 2rem 2.5rem !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 1.5rem !important;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3) !important;
    text-align: left !important;
    margin-top: 1rem !important;
    margin-bottom: 1.5rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
}
@media (max-width: 768px) {
    .sta-verv-banner,
    .elementor-element.sta-verv-banner,
    .sta-verv-banner.e-con > .e-con-inner {
        flex-direction: column !important;
        text-align: center !important;
        padding: 1.5rem !important;
    }
}
.sta-verv-text-col,
.sta-verv-banner .sta-verv-text-col {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    text-align: left !important;
}
@media (max-width: 768px) {
    .sta-verv-text-col,
    .sta-verv-banner .sta-verv-text-col {
        align-items: center !important;
        text-align: center !important;
    }
}
.sta-verv-banner-title,
.sta-verv-banner .elementor-heading-title,
.sta-verv-banner h2 {
    font-size: 1.75rem !important;
    font-weight: 800 !important;
    color: #ffffff !important;
    margin: 0 0 0.35rem 0 !important;
    letter-spacing: -0.01em !important;
}
.sta-verv-banner-sub,
.sta-verv-banner .sta-verv-banner-sub p,
.sta-verv-banner p {
    font-size: 0.95rem !important;
    color: var(--sta-teal-100) !important;
    margin: 0 !important;
    line-height: 1.5 !important;
}
.sta-verv-banner .sta-btn-orange,
.sta-verv-banner .elementor-button {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
}

/* 3. Quick Nav Grid & Cards */
.sta-quick-grid,
.elementor-element.sta-quick-grid,
.sta-quick-grid.e-con > .e-con-inner,
.sta-quick-grid.e-con {
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 1.5rem !important;
    margin: 2rem 0 !important;
    width: 100% !important;
    box-sizing: border-box !important;
}
@media (max-width: 1024px) {
    .sta-quick-grid,
    .elementor-element.sta-quick-grid,
    .sta-quick-grid.e-con > .e-con-inner,
    .sta-quick-grid.e-con {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}
@media (max-width: 600px) {
    .sta-quick-grid,
    .elementor-element.sta-quick-grid,
    .sta-quick-grid.e-con > .e-con-inner,
    .sta-quick-grid.e-con {
        grid-template-columns: 1fr !important;
    }
}
.sta-quick-card,
.elementor-element.sta-quick-card,
.sta-quick-grid .elementor-widget-icon-box {
    background: rgba(9, 50, 47, 0.5) !important;
    border: 1px solid rgba(61, 148, 139, 0.3) !important;
    border-radius: var(--sta-radius) !important;
    padding: 2rem 1.5rem !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    transition: all 0.3s ease !important;
    text-decoration: none !important;
    color: inherit !important;
    box-sizing: border-box !important;
    width: 100% !important;
}
.sta-quick-card:hover,
.elementor-element.sta-quick-card:hover,
.sta-quick-grid .elementor-widget-icon-box:hover {
    background: rgba(9, 50, 47, 0.8) !important;
    border-color: var(--sta-orange) !important;
    transform: translateY(-4px) !important;
    box-shadow: 0 12px 25px -5px rgba(0, 0, 0, 0.4) !important;
}
.sta-quick-card .elementor-icon-box-icon,
.sta-quick-icon-box {
    width: 4rem !important;
    height: 4rem !important;
    border-radius: var(--sta-radius) !important;
    background: rgba(239, 115, 48, 0.15) !important;
    color: var(--sta-orange) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-bottom: 1.25rem !important;
    transition: background 0.3s, color 0.3s !important;
}
.sta-quick-card .elementor-icon-box-icon svg,
.sta-quick-card .elementor-icon-box-icon i,
.sta-quick-icon-box svg,
.sta-quick-icon-box i {
    font-size: 1.75rem !important;
    width: 1.75rem !important;
    height: 1.75rem !important;
    color: var(--sta-orange) !important;
}
.sta-quick-card:hover .elementor-icon-box-icon,
.sta-quick-card:hover .sta-quick-icon-box {
    background: var(--sta-orange) !important;
    color: #ffffff !important;
}
.sta-quick-card:hover .elementor-icon-box-icon svg,
.sta-quick-card:hover .elementor-icon-box-icon i {
    color: #ffffff !important;
}
.sta-quick-title,
.sta-quick-card .elementor-icon-box-title,
.sta-quick-card .elementor-icon-box-title a {
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    color: #ffffff !important;
    margin: 0 0 0.5rem 0 !important;
    text-decoration: none !important;
    transition: color 0.3s !important;
}
.sta-quick-card:hover .elementor-icon-box-title,
.sta-quick-card:hover .elementor-icon-box-title a,
.sta-quick-card:hover .sta-quick-title {
    color: var(--sta-orange) !important;
}
.sta-quick-desc,
.sta-quick-card .elementor-icon-box-description {
    font-size: 0.85rem !important;
    color: var(--sta-teal-100) !important;
    margin: 0 !important;
    line-height: 1.6 !important;
}

/* 4. Latest News Section */
.sta-news-section,
.elementor-element.sta-news-section {
    padding: 3.5rem 0 !important;
    background-color: rgba(4, 24, 23, 0.4) !important;
    width: 100% !important;
}
.sta-news-header-row,
.elementor-element.sta-news-header-row {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    margin-bottom: 2rem !important;
}
.sta-news-section-title .elementor-heading-title,
.sta-news-section-title h2,
.sta-news-section-title a {
    font-size: 1.75rem !important;
    font-weight: 800 !important;
    color: #ffffff !important;
    letter-spacing: 0.05em !important;
    text-decoration: none !important;
    margin: 0 !important;
}
.sta-news-all-btn a,
.sta-news-all-btn .elementor-button {
    color: var(--sta-orange) !important;
    font-size: 0.95rem !important;
    font-weight: 700 !important;
    background: transparent !important;
    padding: 0 !important;
    text-decoration: none !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.35rem !important;
    transition: color 0.2s !important;
}
.sta-news-all-btn a:hover,
.sta-news-all-btn .elementor-button:hover {
    color: var(--sta-orange-hover) !important;
}
.sta-grid-3 {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 1.5rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
}
@media (max-width: 900px) {
    .sta-grid-3 {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}
@media (max-width: 600px) {
    .sta-grid-3 {
        grid-template-columns: 1fr !important;
    }
}

/* 5. Feature Highlight Cards */
.sta-feature-card,
.elementor-element.sta-feature-card,
.sta-feature-card.e-con > .e-con-inner,
.sta-feature-card.e-con {
    display: flex !important;
    flex-direction: row !important;
    gap: 2.5rem !important;
    align-items: center !important;
    background: rgba(7, 38, 36, 0.4) !important;
    border: 1px solid rgba(61, 148, 139, 0.3) !important;
    border-radius: var(--sta-radius) !important;
    padding: 2.5rem !important;
    margin-bottom: 2.5rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
}
@media (max-width: 900px) {
    .sta-feature-card,
    .elementor-element.sta-feature-card,
    .sta-feature-card.e-con > .e-con-inner,
    .sta-feature-card.e-con {
        flex-direction: column !important;
        padding: 1.75rem !important;
        gap: 1.5rem !important;
    }
}
.sta-feature-img-box,
.sta-feature-card .sta-feature-img-box,
.sta-feature-img-box.e-con {
    flex: 0 0 45% !important;
    width: 45% !important;
    max-width: 45% !important;
    position: relative !important;
    aspect-ratio: 16 / 10 !important;
    min-height: 240px !important;
    border-radius: var(--sta-radius-sm) !important;
    overflow: hidden !important;
    border: 1px solid rgba(61, 148, 139, 0.2) !important;
}
@media (max-width: 900px) {
    .sta-feature-img-box,
    .sta-feature-card .sta-feature-img-box,
    .sta-feature-img-box.e-con {
        flex: 0 0 100% !important;
        width: 100% !important;
        max-width: 100% !important;
    }
}
.sta-feature-img-box .elementor-widget,
.sta-feature-img-box .elementor-widget-container,
.sta-feature-img-box img {
    width: 100% !important;
    height: 100% !important;
    min-height: 100% !important;
    object-fit: cover !important;
    display: block !important;
}
.sta-feature-content,
.sta-feature-card .sta-feature-content,
.sta-feature-content.e-con {
    flex: 1 1 55% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    text-align: left !important;
}
.sta-feature-content h2,
.sta-feature-content .elementor-heading-title {
    font-size: 1.75rem !important;
    font-weight: 800 !important;
    color: #ffffff !important;
    margin: 0 0 0.5rem 0 !important;
    letter-spacing: -0.01em !important;
}
.sta-feature-subtitle,
.sta-feature-subtitle .elementor-heading-title {
    font-size: 1rem !important;
    font-weight: 600 !important;
    color: var(--sta-teal-100) !important;
    margin: 0 0 0.75rem 0 !important;
}
.sta-feature-text,
.sta-feature-text p {
    font-size: 0.95rem !important;
    color: var(--sta-teal-200) !important;
    line-height: 1.6 !important;
    margin: 0 0 1.5rem 0 !important;
}
.sta-feature-content .elementor-button,
.sta-feature-content .sta-btn-orange {
    align-self: flex-start !important;
    width: auto !important;
    display: inline-flex !important;
}

/* 6. Collaborating Partners Section & Cards */
.sta-partners-section,
.elementor-element.sta-partners-section {
    padding: 4.5rem 0 !important;
    background-color: rgba(4, 24, 23, 0.6) !important;
    border-top: 1px solid rgba(158, 207, 201, 0.2) !important;
    width: 100% !important;
    box-sizing: border-box !important;
}
.sta-section-header,
.elementor-element.sta-section-header {
    text-align: center !important;
    margin-bottom: 2.5rem !important;
    width: 100% !important;
}
.sta-section-title,
.sta-section-title .elementor-heading-title {
    font-size: 2rem !important;
    font-weight: 800 !important;
    color: #ffffff !important;
    margin: 0 0 0.5rem 0 !important;
    text-align: center !important;
}
.sta-section-subtitle,
.sta-section-subtitle p {
    font-size: 1rem !important;
    color: var(--sta-teal-100) !important;
    margin: 0 !important;
    text-align: center !important;
}
.sta-partners-grid,
.elementor-element.sta-partners-grid,
.sta-partners-grid.e-con > .e-con-inner,
.sta-partners-grid.e-con {
    display: grid !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    gap: 1.5rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
}
@media (max-width: 900px) {
    .sta-partners-grid,
    .elementor-element.sta-partners-grid,
    .sta-partners-grid.e-con > .e-con-inner,
    .sta-partners-grid.e-con {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        gap: 1rem !important;
    }
}
@media (max-width: 480px) {
    .sta-partners-grid,
    .elementor-element.sta-partners-grid,
    .sta-partners-grid.e-con > .e-con-inner,
    .sta-partners-grid.e-con {
        grid-template-columns: 1fr !important;
    }
}
.sta-partner-card,
.elementor-element.sta-partner-card {
    background: rgba(255, 255, 255, 0.04) !important;
    border: 1px solid rgba(158, 207, 201, 0.2) !important;
    border-radius: var(--sta-radius) !important;
    padding: 1.5rem 1rem !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: space-between !important;
    min-height: 180px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    transition: all 0.2s ease !important;
    text-decoration: none !important;
}
.sta-partner-card:hover,
.elementor-element.sta-partner-card:hover {
    background: rgba(255, 255, 255, 0.08) !important;
    border-color: var(--sta-orange) !important;
    transform: translateY(-2px) !important;
}
.sta-partner-logo-box,
.sta-partner-card .sta-partner-logo-box {
    width: 100% !important;
    height: 70px !important;
    background: #ffffff !important;
    border-radius: var(--sta-radius-sm) !important;
    padding: 0.5rem 1rem !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1) !important;
    margin-bottom: 1rem !important;
    box-sizing: border-box !important;
}
.sta-partner-logo-box .elementor-widget,
.sta-partner-logo-box .elementor-widget-container {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
.sta-partner-logo-box img {
    max-height: 48px !important;
    max-width: 90% !important;
    width: auto !important;
    height: auto !important;
    object-fit: contain !important;
    display: block !important;
    margin: 0 auto !important;
}
.sta-partner-info,
.sta-partner-card .sta-partner-info {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.35rem !important;
    width: 100% !important;
}
.sta-partner-name,
.sta-partner-info .elementor-heading-title,
.sta-partner-name .elementor-heading-title,
.sta-partner-name span {
    font-size: 0.85rem !important;
    font-weight: 600 !important;
    color: var(--sta-teal-100) !important;
    text-align: center !important;
    transition: color 0.2s !important;
    margin: 0 !important;
}
.sta-partner-card:hover .sta-partner-name,
.sta-partner-card:hover .elementor-heading-title {
    color: #ffffff !important;
}
`;

fs.writeFileSync(path, before + newCss);
console.log('Successfully updated main.css with complete design rules!');
