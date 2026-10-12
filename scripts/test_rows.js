const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function testRows() {
  const htmlNo = fs.readFileSync(path.join(__dirname, 'studentaktiviteter.html'), 'utf-8');
  const domNo = new JSDOM(htmlNo);
  const docNo = domNo.window.document;

  const h4s = Array.from(docNo.querySelectorAll('h4'));
  console.log(`Testing ${h4s.length} H4s with row/container parent`);

  h4s.forEach((h4, idx) => {
    const title = h4.textContent.trim().replace(/\s+/g, ' ');
    // Find the enclosing row/container
    // In Elementor, an inner section or container has class .elementor-inner-section or .elementor-container or .e-con
    const row = h4.closest('.elementor-inner-section, .elementor-section, .e-con');
    const img = row ? row.querySelector('img')?.src : null;
    
    // Text in this row
    let desc = '';
    const tabs = row ? row.querySelector('.elementor-tabs') : null;
    if (tabs) {
      const contents = Array.from(tabs.querySelectorAll('.elementor-tab-content'));
      desc = contents[0]?.textContent.trim().replace(/\s+/g, ' ');
    } else {
      const textWidget = row ? row.querySelector('.elementor-widget-text-editor') : null;
      desc = textWidget ? textWidget.textContent.trim().replace(/\s+/g, ' ') : '';
    }

    const links = row ? Array.from(row.querySelectorAll('a')).map(a => a.href) : [];
    let email = links.find(l => l.includes('@'))?.replace('mailto:', '').replace('http://', '').replace(/\/$/, '');

    console.log(`[${idx+1}] ${title}`);
    console.log(`     img: ${img ? img.slice(0, 45) : 'MISSING'}`);
    console.log(`     desc: ${desc ? desc.slice(0, 50) + '...' : 'MISSING'}`);
    console.log(`     email: ${email || 'NONE'}`);
  });
}

testRows();
