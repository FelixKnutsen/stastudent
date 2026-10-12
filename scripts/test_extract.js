const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function parseLinjeforeninger() {
  const html = fs.readFileSync(path.join(__dirname, 'linjeforeninger.html'), 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const sections = [];
  let currentFaculty = "Felles";

  // In Elementor, each faculty is an H2 heading
  // Each association has an H4 heading (or ha-card-title) and content
  // Let's traverse the container elements or sections
  const elements = doc.querySelectorAll('.elementor-widget-heading, .elementor-widget-tabs, .elementor-widget-image, .elementor-widget-text-editor, .elementor-widget-ha-card, .ha-card');
  console.log(`Linjeforeninger elementor widgets: ${elements.length}`);

  // Alternatively, let's find all H2s (faculties) and all association blocks under each
  const allH2 = Array.from(doc.querySelectorAll('h2.elementor-heading-title'));
  console.log(`Faculties (H2): ${allH2.length}`);
  allH2.forEach(h => console.log('Faculty H2:', h.textContent.trim().replace(/\s+/g, ' ')));

  // All association names (H4 or ha-card-title)
  const allH4 = Array.from(doc.querySelectorAll('h4, .ha-card-title')).map(h => ({
    name: h.textContent.trim().replace(/\s+/g, ' '),
    tag: h.tagName,
    classes: h.className
  }));
  console.log(`\nAssociations found (${allH4.length}):`);
  allH4.forEach((h, i) => console.log(`${i + 1}. ${h.name}`));
}

function parseStudentaktiviteter() {
  const html = fs.readFileSync(path.join(__dirname, 'studentaktiviteter.html'), 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const allH2 = Array.from(doc.querySelectorAll('h2.elementor-heading-title'));
  console.log(`\nStudentaktiviteter categories (H2): ${allH2.length}`);
  allH2.forEach(h => console.log('Category H2:', h.textContent.trim().replace(/\s+/g, ' ')));

  const allCards = Array.from(doc.querySelectorAll('h4, .ha-card-title')).map(h => ({
    name: h.textContent.trim().replace(/\s+/g, ' '),
    tag: h.tagName,
    classes: h.className
  }));
  console.log(`\nStudentaktiviteter items found (${allCards.length}):`);
  allCards.forEach((h, i) => console.log(`${i + 1}. ${h.name}`));
}

parseLinjeforeninger();
parseStudentaktiviteter();
