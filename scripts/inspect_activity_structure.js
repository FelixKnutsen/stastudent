const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function extractActivities() {
  const html = fs.readFileSync(path.join(__dirname, 'studentaktiviteter.html'), 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // Let's find each category section (H2) and each activity within it
  const sections = [];
  const h2Elements = Array.from(doc.querySelectorAll('h2.elementor-heading-title'));
  
  const activities = [];

  // Each activity block has either:
  // A) .elementor-widget-ha-card (for the first 8)
  // B) Or .elementor-element with an image, heading, text, social icons
  
  // Let's inspect ha-cards
  const haCards = Array.from(doc.querySelectorAll('.elementor-widget-ha-card, .ha-card'));
  console.log(`Found ${haCards.length} ha-card elements`);
  haCards.forEach(card => {
    const title = card.querySelector('.ha-card-title, h2, h3, h4')?.textContent.trim();
    const desc = card.querySelector('.ha-card-content, p')?.textContent.trim();
    const img = card.querySelector('img')?.src;
    console.log(`HA Card: "${title}" img: ${img}`);
  });

  // Let's look at all columns / containers inside the categories
  // In Elementor, each item is often an .elementor-column or .e-con
}

extractActivities();
