const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function inspectColumns() {
  const html = fs.readFileSync(path.join(__dirname, 'studentaktiviteter.html'), 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const h4s = Array.from(doc.querySelectorAll('h4'));
  console.log(`Found ${h4s.length} H4s`);

  h4s.forEach((h4, idx) => {
    // Find the enclosing column or container
    const col = h4.closest('.elementor-column, .e-con, .elementor-element');
    const name = h4.textContent.trim().replace(/\s+/g, ' ');
    
    // Find image in this col or sibling
    // In elementor 2-column or 1-column layouts, the image is either in the same column, or in a sibling column!
    // Let's check parent section or row
    const section = h4.closest('.elementor-row, .elementor-container, .e-con-inner, .elementor-section');
    const img = section ? section.querySelector('img')?.src : null;
    
    // Find paragraphs / text
    const textEls = col ? Array.from(col.querySelectorAll('.elementor-text-editor, .elementor-tab-content, p')) : [];
    const text = textEls.map(t => t.textContent.trim().replace(/\s+/g, ' ')).filter(Boolean).join(' | ');

    // Find links
    const links = section ? Array.from(section.querySelectorAll('a')).map(a => a.href) : [];

    console.log(`[${idx}] ${name}`);
    console.log(`     img: ${img}`);
    console.log(`     text: ${text.slice(0, 100)}...`);
    console.log(`     links: ${links.filter(l => !l.includes('#')).join(', ')}`);
  });
}

inspectColumns();
